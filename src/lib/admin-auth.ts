import { cookies } from "next/headers";
import { createHash, createHmac, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "oa_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

function getSessionSecret() {
  return (
    process.env.ADMIN_SESSION_SECRET?.trim() ||
    process.env.ADMIN_PASSWORD?.trim() ||
    "orionalerts-admin"
  );
}

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "";
}

export function isAdminAuthConfigured() {
  return Boolean(getAdminPassword());
}

function sign(value: string) {
  // Prefer ADMIN_SESSION_SECRET so the signing key can rotate independently of the password.
  return createHmac("sha256", getSessionSecret()).update(value).digest("hex");
}

export function createAdminSessionToken() {
  const issuedAt = Date.now().toString();
  return `${issuedAt}.${sign(issuedAt)}`;
}

export function verifyAdminSessionToken(token: string | undefined) {
  if (!token || !isAdminAuthConfigured()) return false;
  const [issuedAt, signature] = token.split(".");
  if (!issuedAt || !signature) return false;

  const issued = Number(issuedAt);
  if (!Number.isFinite(issued)) return false;
  const age = Date.now() - issued;
  if (age < 0 || age > SESSION_TTL_SECONDS * 1000) return false;

  const expected = sign(issuedAt);
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export async function isAdminAuthenticated() {
  const jar = await cookies();
  return verifyAdminSessionToken(jar.get(ADMIN_COOKIE)?.value);
}

export function verifyAdminPassword(password: string) {
  const expected = getAdminPassword();
  if (!expected) return false;
  // Compare fixed-length digests so neither content nor length leaks via timing.
  const left = createHash("sha256").update(password).digest();
  const right = createHash("sha256").update(expected).digest();
  return timingSafeEqual(left, right);
}

export { SESSION_TTL_SECONDS };
