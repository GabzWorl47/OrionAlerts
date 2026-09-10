import { site } from "@/lib/site";

/**
 * Production site origin for canonicals and sitemap.
 * Set NEXT_PUBLIC_SITE_URL in the environment (https://example.com). Never invent a domain.
 */
export function getSiteOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return undefined;
}

export function absoluteUrl(path: string) {
  const origin = getSiteOrigin();
  if (!origin) return undefined;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function siteBrandName() {
  return site.name;
}
