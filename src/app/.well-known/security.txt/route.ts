import { legalMeta } from "@/lib/legal";
import { absoluteUrl } from "@/lib/industries/site-origin";

// RFC 9116. Rendered at build time, so every deploy pushes `Expires` a year out.
export const dynamic = "force-static";

export function GET() {
  const expires = new Date();
  expires.setFullYear(expires.getFullYear() + 1);

  const body = [
    `Contact: mailto:${legalMeta.securityEmail}`,
    `Expires: ${expires.toISOString()}`,
    `Policy: ${absoluteUrl("/security")}`,
    `Canonical: ${absoluteUrl("/.well-known/security.txt")}`,
    "Preferred-Languages: en",
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
