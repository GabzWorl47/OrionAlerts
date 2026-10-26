import { NextResponse } from "next/server";
import { verifyRecaptchaToken } from "@/lib/recaptcha";
import { sendLeadEmail } from "@/lib/email";

type LeadPayload = {
  kind?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  interest?: string;
  topic?: string;
  siteCount?: string;
  cameraCount?: string;
  recaptchaToken?: string;
};

/** Allowed demo-form ranges; keep in sync with the selects in `LeadForm.tsx`. */
const SITE_COUNT_VALUES = new Set(["1", "2-5", "6-20", "21-100", "100+"]);
const CAMERA_COUNT_VALUES = new Set(["under-50", "50-200", "200-1000", "1000+"]);

/**
 * Optional select value: absent/empty → null; anything outside the allow-list
 * → `false` so the caller can reject the request.
 */
function optionalChoice(value: unknown, allowed: Set<string>): string | null | false {
  if (value === undefined || value === null || value === "") return null;
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return allowed.has(trimmed) ? trimmed : false;
}

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
  if (!body || typeof body !== "object") {
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
  const siteCount = optionalChoice(body.siteCount, SITE_COUNT_VALUES);
  const cameraCount = optionalChoice(body.cameraCount, CAMERA_COUNT_VALUES);

  if (!name || !email || !company || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid work email." }, { status: 400 });
  }

  if (siteCount === false) {
    return NextResponse.json(
      { ok: false, error: "Choose a number of sites from the list." },
      { status: 400 },
    );
  }

  if (cameraCount === false) {
    return NextResponse.json(
      { ok: false, error: "Choose an approximate camera count from the list." },
      { status: 400 },
    );
  }

  if (kind === "demo") {
    const captcha = await verifyRecaptchaToken(body.recaptchaToken, ip);
    if (!captcha.ok) {
      return NextResponse.json({ ok: false, error: captcha.error }, { status: captcha.status });
    }
  }

  const nowIso = new Date().toISOString();

  // Send email via configured SMTP (routes partner topic to partner@, others to websitelead@)
  const emailResult = await sendLeadEmail({
    kind,
    name,
    email,
    company,
    phone,
    message,
    interest,
    topic,
    siteCount,
    cameraCount,
    ip,
    submittedAt: nowIso,
  });

  console.info("[lead]", {
    kind,
    recipient: emailResult.recipient,
    emailSent: emailResult.ok,
    simulated: emailResult.simulated || false,
    name,
    email,
    company,
    phone,
    interest,
    topic,
    siteCount,
    cameraCount,
    messageLength: message.length,
    ip,
    at: nowIso,
  });

  return NextResponse.json({ ok: true });
}
