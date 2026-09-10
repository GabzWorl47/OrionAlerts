import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/industries/site-origin";

export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: origin ? `${origin}/sitemap.xml` : undefined,
  };
}
