import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "@/lib/recaptcha";

type LeadPayload = {
  kind?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  interest?: string;
  topic?: string;
  recaptchaToken?: string;
};

/**
 * Process-local IP rate limiter.
 *
 * Limitations (by design — no Redis/shared store in this repo):
 * - Counters live in memory for a single Node/serverless isolate.
 * - They reset on deploy, cold start, and horizontal scale-out.
 * - Pair with edge/WAF limits (e.g. Cloudflare) for multi-instance durability.
 *
 * Mitigations here: sliding window, capped map size, opportunistic eviction of
 * expired buckets so a flood of unique IPs cannot grow unbounded forever.
 */
const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;
const MAX_TRACKED_KEYS = 5_000;
let lastPruneAt = 0;
const PRUNE_EVERY_MS = 30_000;

const LIMITS = {
  name: 120,
  email: 254,
  company: 160,
  phone: 40,
  message: 4000,
  interest: 80,
  topic: 80,
} as const;

function getIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function pruneRateMap(now: number) {
  if (now - lastPruneAt < PRUNE_EVERY_MS && rateMap.size < MAX_TRACKED_KEYS) return;
  lastPruneAt = now;
  for (const [key, entry] of rateMap) {
    if (now > entry.resetAt) rateMap.delete(key);
  }
  // If still over cap after TTL prune, drop oldest insertion-order keys.
  while (rateMap.size >= MAX_TRACKED_KEYS) {
    const oldest = rateMap.keys().next().value;
    if (oldest === undefined) break;
    rateMap.delete(oldest);
  }
}

function rateLimit(ip: string) {
  const now = Date.now();
  pruneRateMap(now);
  const current = rateMap.get(ip);

  if (!current || now > current.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return "";
  return value.replace(/\s+/g, " ").trim().slice(0, max);
}

function normalizeEmail(value: string) {
  return value.trim().toLowerCase();
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && value.length <= LIMITS.email;
}

export async function POST(request: Request) {
  const ip = getIp(request);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": "60",
          "Cache-Control": "no-store",
        },
      },
    );
  }

  let body: LeadPayload;
  try {
    body = (await request.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body." }, { status: 400 });
  }

  const kind = body.kind === "demo" || body.kind === "contact" ? body.kind : null;
  if (!kind) {
    return NextResponse.json({ ok: false, error: "Unknown lead kind." }, { status: 400 });
  }

  const name = clean(body.name, LIMITS.name);
  const email = normalizeEmail(clean(body.email, LIMITS.email));
  const company = clean(body.company, LIMITS.company);
  const phone = clean(body.phone, LIMITS.phone) || null;
  const message = clean(body.message, LIMITS.message);
  const interest = clean(body.interest, LIMITS.interest) || null;
  const topic = clean(body.topic, LIMITS.topic) || null;

  if (!name || !email || !company || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid work email." }, { status: 400 });
  }

  if (kind === "demo") {
    const captcha = await verifyRecaptchaToken(body.recaptchaToken, ip);
    if (!captcha.ok) {
      return NextResponse.json({ ok: false, error: captcha.error }, { status: captcha.status });
    }
  }

  // Durable CRM/ERP storage is not connected yet — do not claim a separate ERP stream.
  // Application logs may contain personal data; minimize retention in production ops.
  console.info("[lead]", {
    kind,
    storage: "application_logs_pending_crm",
    name,
    email,
    company,
    phone,
    interest,
    topic,
    messageLength: message.length,
    // Redact full message body from default logs; keep length for ops debugging.
    ip,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
