/**
 * Shared building blocks for /llms.txt and /llms-full.txt.
 *
 * Every fact here is read from the same modules the pages render (site.ts,
 * nebula-os.ts, faqs.ts, legal.ts, the industry records), so the two files
 * cannot drift from the site. Do not add facts that are not published on a
 * page — no founding dates, headcounts, phone numbers or certifications.
 */
import { faqs, type FaqItem } from "@/lib/faqs";
import { getIndustryPageRecord } from "@/lib/industries/registry";
import { legalMeta } from "@/lib/legal";
import { nebulaDeployment } from "@/lib/nebula-os";
import { industries, site, solutions } from "@/lib/site";

/** Slug of the blog post that documents the CP Plus integration. */
export const CP_PLUS_POST_SLUG = "cp-plus-ai-video-analytics-integration";

export const RESOURCE_LINKS: { label: string; path: string; note: string }[] = [
  {
    label: "Company facts",
    path: "/company",
    note: "OrionAlerts at a glance: legal entity, HQ, modules, deployment and integrations",
  },
  { label: "Glossary", path: "/glossary", note: "Definitions of video surveillance and video analytics terms" },
  { label: "Use cases", path: "/use-cases", note: "What each AI detection does and what it needs" },
  { label: "Comparisons", path: "/compare", note: "Side-by-side explanations of common architecture choices" },
  { label: "Documentation", path: "/docs", note: "Product and integration documentation" },
  { label: "FAQs", path: "/faqs", note: "Buyer questions on deployment, platform and partners" },
  { label: "Blog", path: "/blogs", note: "Articles on video intelligence and operations" },
];

export const COMPANY_LINKS: { label: string; path: string }[] = [
  { label: `About ${site.name}`, path: "/about" },
  { label: "Partner program", path: "/partners" },
  { label: "Pricing", path: "/pricing" },
  { label: "Careers", path: "/careers" },
  { label: "Trust & security", path: "/security" },
  { label: "Contact", path: "/contact" },
  { label: "Book a demo", path: "/book-demo" },
];

/** The "Company facts" bullet list (Markdown, without a heading). */
export function companyFactLines(url: (path: string) => string): string[] {
  const deployment = nebulaDeployment.models
    .map((model) => `${model.name} (best for: ${model.bestFor})`)
    .join("; ");

  return [
    `- Name: ${site.name} (also written "Orion Alerts")`,
    `- Legal entity: ${legalMeta.controllerLegalName}; ${site.name} is its product`,
    "- Headquarters: Mumbai, India",
    `- Address: ${site.address}`,
    `- Contact: ${site.email} ([contact page](${url("/contact")}))`,
    "- Market: organizations in India, from single sites to multi-site estates",
    `- Category: enterprise video intelligence platform (AI video analytics, VMS, camera health monitoring, asset tracking and AMC management)`,
    `- Modules: ${solutions.map((solution) => solution.name).join("; ")}`,
    `- Platform: Nebula OS, a Linux-based operating system built for Vision AI infrastructure ([Nebula OS](${url("/nebula-os")}))`,
    `- Deployment models: ${deployment}`,
    "- Data location: in the standard deployment, video and AI inference stay on the on-site Nebula OS node; Orion Cloud syncs health status, alerts, configuration and operational metadata",
    `- Camera integrations: ONVIF, RTSP and vendor (OEM) SDKs through a universal device layer; compatible CP Plus cameras and recorders through the built-in API engine ([CP Plus article](${url(`/blogs/${CP_PLUS_POST_SLUG}`)}))`,
    "- Hardware: GPU acceleration is used for AI inference where AI analytics are enabled; node sizing depends on channel count and the detections running",
    `- What ${site.name} is not: not a camera manufacturer (it works with the IP cameras and recorders already installed), and not a cloud-recording-only service (video stays on site in the standard deployment)`,
  ];
}

/** One-line description per industry page (its meta description, else the summary in site.ts). */
export function industryLines(url: (path: string) => string): string[] {
  return industries.map((industry) => {
    const record = getIndustryPageRecord(industry.slug);
    const description = record?.seo.description ?? industry.summary;
    return `- [${industry.name}](${url(`/industries/${industry.slug}`)}): ${description}`;
  });
}

/** /faqs groups that are about the partner program, not the product. */
const NON_PRODUCT_FAQ_CATEGORIES = new Set<FaqItem["category"]>(["Partners"]);

/**
 * The first `limit` product questions from /faqs, in page order. "What is
 * OrionAlerts?" is skipped: its answer is the entity statement, which both
 * files already quote at the top.
 */
export function topFaqs(limit = 8): FaqItem[] {
  return faqs
    .filter(
      (faq) => !NON_PRODUCT_FAQ_CATEGORIES.has(faq.category) && faq.a !== site.entityStatement,
    )
    .slice(0, limit);
}

export const TEXT_HEADERS = {
  "Content-Type": "text/plain; charset=utf-8",
  "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
} as const;
