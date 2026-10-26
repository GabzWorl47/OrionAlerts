import type { MetadataRoute } from "next";
import { industries, solutions } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import { getIndustryPageRecord } from "@/lib/industries/registry";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { publicVideoAssets } from "@/lib/videos";
import { glossaryTerms } from "@/lib/glossary";
import { useCases } from "@/lib/use-cases";
import { comparisons } from "@/lib/comparisons";

function abs(origin: string, path: string) {
  if (path.startsWith("http")) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Real last-content-change dates for routes that have no content record of
 * their own. Update the entry when a page's copy materially changes — never
 * derive `lastmod` from the request time, or crawlers learn to ignore it.
 */
const WEEK_1_SEO_PASS = "2026-10-26";
const STATIC_PAGE_UPDATED: Record<string, string> = {
  "/": WEEK_1_SEO_PASS,
  "/solutions": WEEK_1_SEO_PASS,
  "/industries": WEEK_1_SEO_PASS,
  "/book-demo": WEEK_1_SEO_PASS,
  "/about": WEEK_1_SEO_PASS,
  "/partners": WEEK_1_SEO_PASS,
  "/nebula-os": WEEK_1_SEO_PASS,
  "/blogs": WEEK_1_SEO_PASS,
  "/faqs": WEEK_1_SEO_PASS,
  "/contact": WEEK_1_SEO_PASS,
  "/careers": WEEK_1_SEO_PASS,
  "/docs": WEEK_1_SEO_PASS,
  "/pricing": WEEK_1_SEO_PASS,
  "/privacy": WEEK_1_SEO_PASS,
  "/cookies": WEEK_1_SEO_PASS,
  "/terms": WEEK_1_SEO_PASS,
  "/security": WEEK_1_SEO_PASS,
  "/company": WEEK_1_SEO_PASS,
  "/glossary": WEEK_1_SEO_PASS,
  "/use-cases": WEEK_1_SEO_PASS,
  "/compare": WEEK_1_SEO_PASS,
};

/** Glossary, use-case and comparison pages, all published in the 26 Oct 2026 pass. */
const CONTENT_HUB_PAGES = [
  ...glossaryTerms.map((term) => `/glossary/${term.slug}`),
  ...useCases.map((useCase) => `/use-cases/${useCase.slug}`),
  ...comparisons.map((comparison) => `/compare/${comparison.slug}`),
];

/** Solution pages share one template; date per slug when copy changes. */
const SOLUTION_PAGE_UPDATED: Record<string, string> = {
  vms: WEEK_1_SEO_PASS,
  "ai-analytics": WEEK_1_SEO_PASS,
  "asset-tracking": WEEK_1_SEO_PASS,
  "amc-management": WEEK_1_SEO_PASS,
  "health-monitoring": WEEK_1_SEO_PASS,
};

/** Used only when a route is missing from the maps above. */
const FALLBACK_UPDATED = "2026-09-16";

/**
 * Pages that actually embed their listed video in the rendered page. Solution
 * pages carry an `introVideo` in data but do not render a player, so listing
 * them would point Google at a watch page with no video on it. Use-case pages
 * render a `<video>` when the record has its own clip; only that clip counts.
 */
const PAGES_EMBEDDING_VIDEO = new Set(["/"]);
const EMBEDDED_VIDEO_BY_PAGE = new Map<string, string>(
  useCases.flatMap((useCase) =>
    useCase.video ? [[`/use-cases/${useCase.slug}`, useCase.video.src] as const] : [],
  ),
);

function pageEmbedsVideo(pagePath: string, contentPath: string) {
  if (PAGES_EMBEDDING_VIDEO.has(pagePath)) return true;
  return EMBEDDED_VIDEO_BY_PAGE.get(pagePath) === contentPath;
}

/** "PT1M5S" → 65. Returns undefined for anything it cannot parse. */
function isoDurationSeconds(duration: string): number | undefined {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration);
  if (!match || !(match[1] || match[2] || match[3])) return undefined;
  const [, h = "0", m = "0", sec = "0"] = match;
  return Number(h) * 3600 + Number(m) * 60 + Number(sec);
}

function latestDate(...dates: (string | undefined | null)[]): string | undefined {
  return dates.filter((d): d is string => Boolean(d)).sort().at(-1);
}

/**
 * Canonical public URLs only. Excludes admin, API, drafts, and legacy redirect slugs.
 * Omits changeFrequency/priority so we do not publish values we cannot maintain.
 * Attaches Google video sitemap fields only where the page renders the video.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = getSiteOrigin();

  const videosByPage = new Map<string, MetadataRoute.Sitemap[number]["videos"]>();
  for (const video of publicVideoAssets) {
    if (!pageEmbedsVideo(video.pagePath, video.contentPath)) continue;
    const list = videosByPage.get(video.pagePath) ?? [];
    list.push({
      title: video.name,
      description: video.description,
      thumbnail_loc: abs(origin, video.thumbnailPath),
      content_loc: abs(origin, video.contentPath),
      duration: isoDurationSeconds(video.duration),
      publication_date: video.uploadDate,
    });
    videosByPage.set(video.pagePath, list);
  }

  const entries: MetadataRoute.Sitemap = Object.entries(STATIC_PAGE_UPDATED).map(
    ([path, updated]) => ({
      url: `${origin}${path}`,
      lastModified: updated,
      ...(videosByPage.get(path) ? { videos: videosByPage.get(path) } : {}),
    }),
  );

  for (const solution of solutions) {
    const path = `/solutions/${solution.slug}`;
    entries.push({
      url: `${origin}${path}`,
      lastModified: SOLUTION_PAGE_UPDATED[solution.slug] ?? FALLBACK_UPDATED,
      ...(videosByPage.get(path) ? { videos: videosByPage.get(path) } : {}),
    });
  }

  for (const industry of industries) {
    const record = getIndustryPageRecord(industry.slug);
    entries.push({
      url: `${origin}/industries/${industry.slug}`,
      lastModified:
        latestDate(
          record?.review?.reviewedAt,
          record?.standards.reviewedAt,
          WEEK_1_SEO_PASS,
        ) ?? FALLBACK_UPDATED,
    });
  }

  for (const path of CONTENT_HUB_PAGES) {
    entries.push({
      url: `${origin}${path}`,
      lastModified: WEEK_1_SEO_PASS,
      ...(videosByPage.get(path) ? { videos: videosByPage.get(path) } : {}),
    });
  }

  try {
    const posts = await getPublishedBlogPosts();
    for (const post of posts) {
      const updated = post.updatedAt ?? post.date;
      entries.push({
        url: `${origin}/blogs/${post.slug}`,
        ...(updated ? { lastModified: updated } : {}),
      });
    }
  } catch {
    // Store may be unavailable at build time in some environments; static routes still ship.
  }

  return entries;
}
