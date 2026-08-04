export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  takeaways: string[];
  sections: BlogSection[];
  published: boolean;
  updatedAt?: string | null;
  /** ISO datetime used for relative "posted X ago" labels */
  publishedAt?: string | null;
};

/** Suggested starter categories — admins can add any custom name. */
export const DEFAULT_BLOG_CATEGORIES = [
  "Video Intelligence",
  "Vision Intelligence",
  "Operations",
  "Security",
  "Industry Insights",
  "Product Updates",
] as const;

/** @deprecated Use DEFAULT_BLOG_CATEGORIES — kept for compatibility */
export type BlogCategory = string;

export const blogCategoryOptions: string[] = [...DEFAULT_BLOG_CATEGORIES];

export type BlogCategoryFilter = string;

export function normalizeCategory(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function isValidCategory(value: string) {
  const normalized = normalizeCategory(value);
  return normalized.length >= 2 && normalized.length <= 48;
}

export function getFilterCategories(posts: BlogPost[], extras: string[] = []) {
  const set = new Set<string>();
  for (const category of DEFAULT_BLOG_CATEGORIES) set.add(category);
  for (const category of extras) {
    const normalized = normalizeCategory(category);
    if (normalized) set.add(normalized);
  }
  for (const post of posts) {
    const normalized = normalizeCategory(post.category);
    if (normalized) set.add(normalized);
  }
  return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

export function getCategorySuggestions(posts: BlogPost[], extras: string[] = []) {
  return getFilterCategories(posts, extras).filter((item) => item !== "All");
}

export function slugifyTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

export function parseBlogDate(dateInput: string) {
  if (!dateInput) return null;
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateInput)) {
    const parsed = new Date(`${dateInput}T12:00:00`);
    return Number.isNaN(parsed.getTime()) ? null : parsed;
  }
  const parsed = new Date(dateInput);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function formatBlogDateLabel(date: string) {
  const parsed = parseBlogDate(date);
  if (!parsed) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

/** Build a publishedAt ISO from a calendar date (YYYY-MM-DD). */
export function publishedAtFromDate(date: string, existing?: string | null) {
  if (existing) {
    const existingDate = existing.slice(0, 10);
    if (existingDate === date) return existing;
  }
  const today = new Date().toISOString().slice(0, 10);
  if (date === today) return new Date().toISOString();
  const parsed = parseBlogDate(date);
  return parsed ? parsed.toISOString() : new Date().toISOString();
}

export function formatRelativeTime(dateInput: string, now = new Date()) {
  const parsed = parseBlogDate(dateInput);
  if (!parsed) return "";

  const diffMs = now.getTime() - parsed.getTime();
  if (diffMs < 0) {
    return formatBlogDateLabel(dateInput.slice(0, 10));
  }

  const minutes = Math.floor(diffMs / 60000);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes} min ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours} hr${hours === 1 ? "" : "s"} ago`;

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mo${months === 1 ? "" : "s"} ago`;

  const years = Math.floor(days / 365);
  return `${years} yr${years === 1 ? "" : "s"} ago`;
}

export function estimateReadTime(sections: BlogSection[], takeaways: string[] = []) {
  const words = [
    ...takeaways,
    ...sections.flatMap((section) => {
      if (section.type === "list") return section.items;
      return [section.text];
    }),
  ]
    .join(" ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.round(words / 200) || 1);
  return `${minutes} min read`;
}

export function parseTakeaways(text: string) {
  return text
    .split(/\r?\n/)
    .map((line) => line.replace(/^[-*•]\s*/, "").trim())
    .filter(Boolean);
}

export function serializeTakeaways(takeaways: string[]) {
  return takeaways.join("\n");
}

/** Convert structured sections to an editable plain-text body. */
export function serializeBlogBody(sections: BlogSection[]) {
  return sections
    .map((section) => {
      if (section.type === "heading") {
        const marks = section.level === 3 ? "###" : "##";
        return `${marks} ${section.text}`;
      }
      if (section.type === "quote") return `> ${section.text}`;
      if (section.type === "list") {
        return section.items
          .map((item, index) =>
            section.ordered ? `${index + 1}. ${item}` : `- ${item}`,
          )
          .join("\n");
      }
      return section.text;
    })
    .join("\n\n");
}

/** Parse plain-text body into structured blog sections. */
export function parseBlogBody(text: string): BlogSection[] {
  const blocks = text
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block): BlogSection => {
    if (/^###\s+\S/.test(block)) {
      return {
        type: "heading",
        level: 3,
        text: block.replace(/^###\s+/, "").trim(),
      };
    }

    if (/^##\s+\S/.test(block) || /^#\s+\S/.test(block)) {
      return {
        type: "heading",
        level: 2,
        text: block.replace(/^#{1,2}\s+/, "").trim(),
      };
    }

    if (block.startsWith(">")) {
      return {
        type: "quote",
        text: block
          .split("\n")
          .map((line) => line.replace(/^>\s?/, "").trim())
          .join(" ")
          .trim(),
      };
    }

    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    if (lines.length > 0 && lines.every((line) => /^[-*•]\s+/.test(line))) {
      return {
        type: "list",
        items: lines.map((line) => line.replace(/^[-*•]\s+/, "").trim()),
      };
    }

    if (lines.length > 0 && lines.every((line) => /^\d+[.)]\s+/.test(line))) {
      return {
        type: "list",
        ordered: true,
        items: lines.map((line) => line.replace(/^\d+[.)]\s+/, "").trim()),
      };
    }

    // Short single-line title-like blocks without terminal punctuation → subheading
    if (
      lines.length === 1 &&
      lines[0].length >= 18 &&
      lines[0].length <= 70 &&
      !/[.!?]$/.test(lines[0]) &&
      !/[,;:]$/.test(lines[0]) &&
      /^[A-Z0-9]/.test(lines[0])
    ) {
      return { type: "heading", level: 3, text: lines[0] };
    }

    return { type: "paragraph", text: lines.join(" ") };
  });
}

export function sortBlogPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogCategoryCounts(posts: BlogPost[]) {
  const counts: Record<string, number> = { All: posts.length };
  for (const post of posts) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  return counts;
}

export function findBlog(posts: BlogPost[], slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function getRelatedPosts(posts: BlogPost[], slug: string, limit = 2) {
  const current = findBlog(posts, slug);
  if (!current) return posts.slice(0, limit);

  const sameCategory = posts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = posts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
