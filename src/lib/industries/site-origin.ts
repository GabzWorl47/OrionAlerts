import { site } from "@/lib/site";

/** Canonical production origin preferred by the SEO audit. Override with NEXT_PUBLIC_SITE_URL. */
export const DEFAULT_SITE_ORIGIN = "https://orionalerts.com";

/**
 * Production site origin for canonicals, sitemap, and absolute JSON-LD URLs.
 * Prefer NEXT_PUBLIC_SITE_URL; fall back to the documented canonical host.
 */
export function getSiteOrigin() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  return DEFAULT_SITE_ORIGIN;
}

export function absoluteUrl(path: string) {
  const origin = getSiteOrigin();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${origin}${normalized}`;
}

export function siteBrandName() {
  return site.name;
}
