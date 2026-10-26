import { promises as fs } from "fs";
import path from "path";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { findBlog, withDerivedBlogFields, type BlogPost } from "@/lib/blogs";

type BlogPostExtras = Pick<BlogPost, "seoTitle" | "imageAlt" | "tags">;

const STORE_PATH = path.join(process.cwd(), "data", "blogs.json");

/**
 * Optional per-post fields (seoTitle, imageAlt, tags) read straight from
 * data/blogs.json. The shared blog store only returns the core BlogPost
 * fields, so the blog routes merge these back in here. Missing or malformed
 * values are ignored, so older posts keep their title-based defaults.
 */
async function readBlogExtras(): Promise<Map<string, BlogPostExtras>> {
  const extras = new Map<string, BlogPostExtras>();
  try {
    const raw = JSON.parse(await fs.readFile(STORE_PATH, "utf8")) as {
      posts?: Array<Partial<BlogPost>>;
    };
    for (const post of raw.posts ?? []) {
      if (!post?.slug) continue;
      extras.set(post.slug, {
        seoTitle: typeof post.seoTitle === "string" && post.seoTitle.trim() ? post.seoTitle.trim() : undefined,
        imageAlt: typeof post.imageAlt === "string" && post.imageAlt.trim() ? post.imageAlt.trim() : undefined,
        tags: Array.isArray(post.tags) ? post.tags.filter((tag) => typeof tag === "string") : undefined,
      });
    }
  } catch {
    // The store falls back to seed posts in this case; render without extras.
  }
  return extras;
}

/** Published posts with derived read time, merged categories and optional extras. */
export async function getBlogPostsForDisplay(): Promise<BlogPost[]> {
  const [posts, extras] = await Promise.all([getPublishedBlogPosts(), readBlogExtras()]);
  return posts.map((post) => {
    const extra = extras.get(post.slug);
    return withDerivedBlogFields({
      ...post,
      seoTitle: post.seoTitle ?? extra?.seoTitle,
      imageAlt: post.imageAlt ?? extra?.imageAlt,
      tags: post.tags ?? extra?.tags,
    });
  });
}

export async function getBlogPostForDisplay(slug: string) {
  return findBlog(await getBlogPostsForDisplay(), slug);
}
