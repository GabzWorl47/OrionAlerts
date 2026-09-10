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

const rateMap = new Map<string, { count: number; resetAt: number }>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 8;

function getIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function rateLimit(ip: string) {
  const now = Date.now();
  const current = rateMap.get(ip);

  if (!current || now > current.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}

export async function POST(request: Request) {
  const ip = getIp(request);
  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many submissions. Please try again shortly." },
      { status: 429 },
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

  if (!body.name?.trim() || !body.email?.trim() || !body.company?.trim() || !body.message?.trim()) {
    return NextResponse.json({ ok: false, error: "Missing required fields." }, { status: 400 });
  }

  if (kind === "demo") {
    const captcha = await verifyRecaptchaToken(body.recaptchaToken, ip);
    if (!captcha.ok) {
      return NextResponse.json({ ok: false, error: captcha.error }, { status: captcha.status });
    }
  }

  // Placeholder for ERP write: demo leads and contact leads stay in separate streams.
  console.info("[lead]", {
    kind,
    erpStream: kind === "demo" ? "erp.demo_leads" : "erp.contact_leads",
    name: body.name,
    email: body.email,
    company: body.company,
    phone: body.phone ?? null,
    interest: body.interest ?? null,
    topic: body.topic ?? null,
    message: body.message,
    ip,
    at: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
