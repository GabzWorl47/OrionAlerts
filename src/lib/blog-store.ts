import { promises as fs } from "fs";
import path from "path";
import { seedBlogPosts } from "@/lib/blog-seed";
import {
  estimateReadTime,
  findBlog,
  formatBlogDateLabel,
  getRelatedPosts as getRelatedFromList,
  isBlogCategory,
  parseBlogBody,
  parseTakeaways,
  slugifyTitle,
  sortBlogPosts,
  type BlogCategory,
  type BlogPost,
  type BlogSection,
} from "@/lib/blogs";

export type BlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  category: BlogCategory | string;
  date?: string;
  author: string;
  authorRole?: string;
  image: string;
  takeawaysText?: string;
  takeaways?: string[];
  body?: string;
  sections?: BlogSection[];
  published?: boolean;
};

type BlogStoreFile = {
  posts: BlogPost[];
  updatedAt: string | null;
};

const STORE_PATH = path.join(process.cwd(), "data", "blogs.json");

function normalizePost(raw: Partial<BlogPost>): BlogPost | null {
  if (!raw.slug || !raw.title || !raw.excerpt || !raw.category) return null;
  if (!isBlogCategory(raw.category)) return null;

  const sections = Array.isArray(raw.sections) ? raw.sections : [];
  const takeaways = Array.isArray(raw.takeaways) ? raw.takeaways.filter(Boolean) : [];
  const date = raw.date || new Date().toISOString().slice(0, 10);

  return {
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt,
    category: raw.category,
    date,
    dateLabel: raw.dateLabel || formatBlogDateLabel(date),
    readTime: raw.readTime || estimateReadTime(sections, takeaways),
    author: raw.author || "OrionAlerts Team",
    authorRole: raw.authorRole || "Editorial",
    image:
      raw.image ||
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80",
    takeaways,
    sections,
    published: raw.published !== false,
    updatedAt: raw.updatedAt ?? null,
  };
}

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    const initial: BlogStoreFile = {
      posts: seedBlogPosts,
      updatedAt: new Date().toISOString(),
    };
    await fs.writeFile(STORE_PATH, JSON.stringify(initial, null, 2), "utf8");
  }
}

async function readStoreFile(): Promise<BlogStoreFile> {
  await ensureStoreFile();
  try {
    const raw = await fs.readFile(STORE_PATH, "utf8");
    const parsed = JSON.parse(raw) as Partial<BlogStoreFile>;
    const posts = Array.isArray(parsed.posts)
      ? parsed.posts.map(normalizePost).filter((post): post is BlogPost => Boolean(post))
      : [];

    if (posts.length === 0) {
      return { posts: seedBlogPosts, updatedAt: parsed.updatedAt ?? null };
    }

    return {
      posts,
      updatedAt: parsed.updatedAt ?? null,
    };
  } catch {
    return { posts: seedBlogPosts, updatedAt: null };
  }
}

async function writeStoreFile(posts: BlogPost[]) {
  await ensureStoreFile();
  const next: BlogStoreFile = {
    posts: sortBlogPosts(posts),
    updatedAt: new Date().toISOString(),
  };
  await fs.writeFile(STORE_PATH, JSON.stringify(next, null, 2), "utf8");
  return next;
}

function uniqueSlug(base: string, posts: BlogPost[], excludeSlug?: string) {
  const root = slugifyTitle(base) || `post-${Date.now()}`;
  let candidate = root;
  let index = 2;
  while (posts.some((post) => post.slug === candidate && post.slug !== excludeSlug)) {
    candidate = `${root}-${index}`;
    index += 1;
  }
  return candidate;
}

function buildPostFromInput(input: BlogInput, existing?: BlogPost): BlogPost {
  let takeaways = existing?.takeaways ?? [];
  if (input.takeaways) {
    takeaways = input.takeaways;
  } else if (input.takeawaysText !== undefined) {
    takeaways = parseTakeaways(input.takeawaysText);
  }

  let sections = existing?.sections ?? [];
  if (input.sections) {
    sections = input.sections;
  } else if (input.body !== undefined) {
    sections = parseBlogBody(input.body);
  }

  const date = input.date || existing?.date || new Date().toISOString().slice(0, 10);
  const category = isBlogCategory(String(input.category))
    ? (input.category as BlogCategory)
    : existing?.category || "Operations";

  return {
    slug: existing?.slug || "",
    title: input.title.trim(),
    excerpt: input.excerpt.trim(),
    category,
    date,
    dateLabel: formatBlogDateLabel(date),
    readTime: estimateReadTime(sections, takeaways),
    author: (input.author || existing?.author || "OrionAlerts Team").trim(),
    authorRole: (input.authorRole || existing?.authorRole || "Editorial").trim(),
    image: (input.image || existing?.image || "").trim(),
    takeaways,
    sections,
    published: input.published ?? existing?.published ?? false,
    updatedAt: new Date().toISOString(),
  };
}

export async function getAllBlogPosts() {
  const store = await readStoreFile();
  return sortBlogPosts(store.posts);
}

export async function getPublishedBlogPosts() {
  const posts = await getAllBlogPosts();
  return posts.filter((post) => post.published);
}

export async function getBlog(slug: string, options?: { includeDrafts?: boolean }) {
  const posts = options?.includeDrafts
    ? await getAllBlogPosts()
    : await getPublishedBlogPosts();
  return findBlog(posts, slug);
}

export async function getRelatedPosts(slug: string, limit = 2) {
  const posts = await getPublishedBlogPosts();
  return getRelatedFromList(posts, slug, limit);
}

export async function createBlogPost(input: BlogInput) {
  const store = await readStoreFile();
  const slug = uniqueSlug(input.slug || input.title, store.posts);
  const post = buildPostFromInput(input);
  post.slug = slug;

  if (!post.title || !post.excerpt || !post.image) {
    throw new Error("Title, excerpt, and cover image are required.");
  }
  if (!post.sections.length) {
    throw new Error("Add at least one paragraph to the article body.");
  }

  const next = await writeStoreFile([post, ...store.posts]);
  return findBlog(next.posts, slug)!;
}

export async function updateBlogPost(slug: string, input: BlogInput) {
  const store = await readStoreFile();
  const existing = findBlog(store.posts, slug);
  if (!existing) throw new Error("Blog post not found.");

  const nextSlug = uniqueSlug(input.slug || input.title || existing.slug, store.posts, slug);
  const post = buildPostFromInput(input, existing);
  post.slug = nextSlug;

  if (!post.title || !post.excerpt || !post.image) {
    throw new Error("Title, excerpt, and cover image are required.");
  }
  if (!post.sections.length) {
    throw new Error("Add at least one paragraph to the article body.");
  }

  const posts = store.posts.map((item) => (item.slug === slug ? post : item));
  const next = await writeStoreFile(posts);
  return findBlog(next.posts, nextSlug)!;
}

export async function deleteBlogPost(slug: string) {
  const store = await readStoreFile();
  if (!store.posts.some((post) => post.slug === slug)) {
    throw new Error("Blog post not found.");
  }
  await writeStoreFile(store.posts.filter((post) => post.slug !== slug));
  return { ok: true as const };
}

export async function setBlogPublished(slug: string, published: boolean) {
  const store = await readStoreFile();
  const existing = findBlog(store.posts, slug);
  if (!existing) throw new Error("Blog post not found.");

  const posts = store.posts.map((post) =>
    post.slug === slug
      ? { ...post, published, updatedAt: new Date().toISOString() }
      : post,
  );
  const next = await writeStoreFile(posts);
  return findBlog(next.posts, slug)!;
}
