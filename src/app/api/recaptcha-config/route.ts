import { getRecaptchaSiteKey } from "@/lib/recaptcha";

// Read env per request so a runtime variable (Cloudflare Worker var/secret, cPanel
// env) takes effect without a rebuild, while /book-demo itself stays static.
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    { siteKey: getRecaptchaSiteKey() },
    { headers: { "Cache-Control": "no-store" } },
  );
}
