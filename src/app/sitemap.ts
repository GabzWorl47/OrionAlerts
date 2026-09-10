import type { MetadataRoute } from "next";
import { industries } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import {
  getIndustryPageRecord,
  isMigratedIndustryStatus,
} from "@/lib/industries/registry";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  if (!origin) {
    // Without a configured production origin, omit absolute sitemap URLs.
    return [];
  }

  const staticRoutes = ["", "/solutions", "/industries", "/book-demo", "/about", "/partners", "/nebula-os"].map(
    (path) => ({
      url: `${origin}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    }),
  );

  const industryRoutes = industries.map((industry) => {
    const record = getIndustryPageRecord(industry.slug);
    const priority =
      record && isMigratedIndustryStatus(record.status) ? 0.8 : 0.6;
    return {
      url: `${origin}/industries/${industry.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    };
  });

  return [...staticRoutes, ...industryRoutes];
}
