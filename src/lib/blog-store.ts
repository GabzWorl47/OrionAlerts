import { promises as fs } from "fs";
import path from "path";
import { seedBlogPosts } from "@/lib/blog-seed";
import {
  DEFAULT_BLOG_CATEGORIES,
  estimateReadTime,
  findBlog,
  formatBlogDateLabel,
  getCategorySuggestions,
  getRelatedPosts as getRelatedFromList,
  isValidCategory,
  normalizeCategory,
  parseBlogBody,
  parseTakeaways,
  publishedAtFromDate,
  slugifyTitle,
  sortBlogPosts,
  type BlogPost,
  type BlogSection,
} from "@/lib/blogs";

export type BlogInput = {
  title: string;
  slug?: string;
  excerpt: string;
  category: string;
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
  categories: string[];
  updatedAt: string | null;
};

const STORE_PATH = path.join(process.cwd(), "data", "blogs.json");

function mergeCategories(existing: string[], extras: string[] = []) {
  const set = new Set<string>();
  for (const category of DEFAULT_BLOG_CATEGORIES) set.add(category);
  for (const category of existing) {
    const normalized = normalizeCategory(category);
    if (normalized) set.add(normalized);
  }
  for (const category of extras) {
    const normalized = normalizeCategory(category);
    if (normalized) set.add(normalized);
  }
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

function normalizePost(raw: Partial<BlogPost>): BlogPost | null {
  if (!raw.slug || !raw.title || !raw.excerpt || !raw.category) return null;
  const category = normalizeCategory(String(raw.category));
  if (!isValidCategory(category)) return null;

  const sections = Array.isArray(raw.sections) ? raw.sections : [];
  const takeaways = Array.isArray(raw.takeaways) ? raw.takeaways.filter(Boolean) : [];
  const date = raw.date || new Date().toISOString().slice(0, 10);
  const publishedAt =
    raw.publishedAt || publishedAtFromDate(date, null);

  return {
    slug: raw.slug,
    title: raw.title,
    excerpt: raw.excerpt,
    category,
    date,
    dateLabel: raw.dateLabel || formatBlogDateLabel(date),
    readTime: raw.readTime || estimateReadTime(sections, takeaways),
    author: raw.author || "OrionAlerts Team",
    authorRole: raw.authorRole || "Editorial",
    image: raw.image || "/visuals/solutions/ai-vision-clean.webp",
    takeaways,
    sections,
    published: raw.published !== false,
    updatedAt: raw.updatedAt ?? null,
    publishedAt,
    ...(raw.seoTitle ? { seoTitle: raw.seoTitle } : {}),
    ...(raw.imageAlt ? { imageAlt: raw.imageAlt } : {}),
    ...(Array.isArray(raw.tags) && raw.tags.length ? { tags: raw.tags.filter(Boolean) } : {}),
  };
}

async function ensureStoreFile() {
  await fs.mkdir(path.dirname(STORE_PATH), { recursive: true });
  try {
    await fs.access(STORE_PATH);
  } catch {
    const initial: BlogStoreFile = {
      posts: seedBlogPosts,
      categories: mergeCategories([], seedBlogPosts.map((post) => post.category)),
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

    const categories = mergeCategories(
      Array.isArray(parsed.categories) ? parsed.categories : [],
      posts.map((post) => post.category),
    );

    if (posts.length === 0) {
      return {
        posts: seedBlogPosts,
        categories: mergeCategories(categories, seedBlogPosts.map((post) => post.category)),
        updatedAt: parsed.updatedAt ?? null,
      };
    }

    return {
      posts,
      categories,
      updatedAt: parsed.updatedAt ?? null,
    };
  } catch {
    return {
      posts: seedBlogPosts,
      categories: mergeCategories([], seedBlogPosts.map((post) => post.category)),
      updatedAt: null,
    };
  }
}

async function writeStoreFile(posts: BlogPost[], categories: string[] = []) {
  await ensureStoreFile();
  const next: BlogStoreFile = {
    posts: sortBlogPosts(posts),
    categories: mergeCategories(
      categories,
      posts.map((post) => post.category),
    ),
    updatedAt: new Date().toISOString(),
  };
  // Write-then-rename so a crash mid-write can't leave truncated JSON (which would
  // make readStoreFile fall back to seed posts and the next save drop real posts).
  const tmpPath = `${STORE_PATH}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmpPath, JSON.stringify(next, null, 2), "utf8");
  await fs.rename(tmpPath, STORE_PATH);
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
  const category = normalizeCategory(String(input.category || existing?.category || "Operations"));
  if (!isValidCategory(category)) {
    throw new Error("Category must be between 2 and 48 characters.");
  }

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
    publishedAt: publishedAtFromDate(date, existing?.publishedAt),
    // The admin form doesn't edit these yet; keep them across saves.
    ...(existing?.seoTitle ? { seoTitle: existing.seoTitle } : {}),
    ...(existing?.imageAlt ? { imageAlt: existing.imageAlt } : {}),
    ...(existing?.tags?.length ? { tags: existing.tags } : {}),
  };
}

export async function getAllBlogPosts() {
  const store = await readStoreFile();
  return sortBlogPosts(store.posts);
}

export async function getBlogCategories() {
  const store = await readStoreFile();
  return getCategorySuggestions(store.posts, store.categories);
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

  const next = await writeStoreFile([post, ...store.posts], store.categories);
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
  const next = await writeStoreFile(posts, store.categories);
  return findBlog(next.posts, nextSlug)!;
}

export async function deleteBlogPost(slug: string) {
  const store = await readStoreFile();
  if (!store.posts.some((post) => post.slug === slug)) {
    throw new Error("Blog post not found.");
  }
  await writeStoreFile(
    store.posts.filter((post) => post.slug !== slug),
    store.categories,
  );
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
  const next = await writeStoreFile(posts, store.categories);
  return findBlog(next.posts, slug)!;
}
