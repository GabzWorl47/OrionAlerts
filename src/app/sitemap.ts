import type { MetadataRoute } from "next";
import { industries, solutions } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { publicVideoAssets } from "@/lib/videos";

function abs(origin: string, path: string) {
  if (path.startsWith("http")) return path;
  return `${origin}${path.startsWith("/") ? path : `/${path}`}`;
}

/**
 * Canonical public URLs only. Excludes admin, API, drafts, and legacy redirect slugs.
 * Omits changeFrequency/priority so we do not publish values we cannot maintain.
 * Attaches Google video sitemap fields for stable public marketing videos.
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = getSiteOrigin();
  const now = new Date();

  const staticPaths = [
    "/",
    "/solutions",
    "/industries",
    "/book-demo",
    "/about",
    "/partners",
    "/nebula-os",
    "/blogs",
    "/faqs",
    "/contact",
    "/careers",
    "/docs",
    "/pricing",
    "/privacy",
    "/cookies",
    "/terms",
    "/security",
  ];

  const videosByPage = new Map<string, MetadataRoute.Sitemap[number]["videos"]>();
  for (const video of publicVideoAssets) {
    const list = videosByPage.get(video.pagePath) ?? [];
    list.push({
      title: video.name,
      description: video.description,
      thumbnail_loc: abs(origin, video.thumbnailPath),
      content_loc: abs(origin, video.contentPath),
    });
    videosByPage.set(video.pagePath, list);
  }

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${origin}${path === "/" ? "/" : path}`,
    lastModified: now,
    ...(videosByPage.get(path) ? { videos: videosByPage.get(path) } : {}),
  }));

  for (const solution of solutions) {
    const path = `/solutions/${solution.slug}`;
    entries.push({
      url: `${origin}${path}`,
      lastModified: now,
      ...(videosByPage.get(path) ? { videos: videosByPage.get(path) } : {}),
    });
  }

  for (const industry of industries) {
    entries.push({
      url: `${origin}/industries/${industry.slug}`,
      lastModified: now,
    });
  }

  try {
    const posts = await getPublishedBlogPosts();
    for (const post of posts) {
      entries.push({
        url: `${origin}/blogs/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : now,
      });
    }
  } catch {
    // Store may be unavailable at build time in some environments; static routes still ship.
  }

  return entries;
}
