type RecaptchaVerifyResult =
  | { ok: true }
  | { ok: false; error: string; status: number };

export async function verifyRecaptchaToken(
  token: string | undefined | null,
  remoteIp?: string,
): Promise<RecaptchaVerifyResult> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;

  if (!secret) {
    return {
      ok: false,
      error: "reCAPTCHA is not configured on the server.",
      status: 500,
    };
  }

  if (!token?.trim()) {
    return {
      ok: false,
      error: "Please complete the reCAPTCHA challenge.",
      status: 400,
    };
  }

  const body = new URLSearchParams({
    secret,
    response: token,
  });
  if (remoteIp && remoteIp !== "unknown") {
    body.set("remoteip", remoteIp);
  }

  let data: { success?: boolean; "error-codes"?: string[] };
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      signal: AbortSignal.timeout(8_000),
    });
    data = (await response.json()) as typeof data;
  } catch {
    // Network failure, timeout, or non-JSON reply — fail closed with a clean error.
    return {
      ok: false,
      error: "Could not verify reCAPTCHA right now. Please try again.",
      status: 503,
    };
  }

  if (!data.success) {
    return {
      ok: false,
      error: "reCAPTCHA verification failed. Please try again.",
      status: 400,
    };
  }

  return { ok: true };
}
