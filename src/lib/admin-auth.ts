import { cookies } from "next/headers";
import { createHash, timingSafeEqual } from "crypto";

export const ADMIN_COOKIE = "oa_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "";
}

export function isAdminAuthConfigured() {
  return Boolean(getAdminPassword());
}

function sign(value: string) {
  const secret = getAdminPassword() || "orionalerts-admin";
  return createHash("sha256").update(`${value}:${secret}`).digest("hex");
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
  if (Date.now() - issued > SESSION_TTL_SECONDS * 1000) return false;

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
  const left = Buffer.from(password);
  const right = Buffer.from(expected);
  if (left.length !== right.length) return false;
  return timingSafeEqual(left, right);
}

export { SESSION_TTL_SECONDS };
