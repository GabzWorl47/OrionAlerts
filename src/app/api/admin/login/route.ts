import { NextResponse } from "next/server";
import {
  ADMIN_COOKIE,
  SESSION_TTL_SECONDS,
  createAdminSessionToken,
  isAdminAuthConfigured,
  verifyAdminPassword,
} from "@/lib/admin-auth";

export async function POST(request: Request) {
  if (!isAdminAuthConfigured()) {
    return NextResponse.json(
      { error: "Set ADMIN_PASSWORD in .env.local to enable the admin page." },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim() || "";

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createAdminSessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
  return response;
}
