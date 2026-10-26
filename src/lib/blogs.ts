export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  /** Simple comparison table: written as a Markdown pipe table in the admin body. */
  | { type: "table"; headers: string[]; rows: string[][] };

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
  /** Optional search title (≤60 chars incl. " | OrionAlerts") when `title` is longer. */
  seoTitle?: string;
  /** Descriptive alt text for the cover image. Falls back to the title. */
  imageAlt?: string;
  /** Free-form topic tags, used to pick related posts. */
  tags?: string[];
};

/**
 * Blog categories mapped to the product areas. Admins can still add a custom
 * name; legacy near-duplicates are folded in by `normalizeCategory`.
 */
export const DEFAULT_BLOG_CATEGORIES = [
  "AI Video Analytics",
  "VMS",
  "Camera Health",
  "Asset & AMC",
  "Industry Guides",
] as const;

/** Legacy / near-duplicate category names → the product-area category. */
const CATEGORY_ALIASES: Record<string, string> = {
  "video intelligence": "AI Video Analytics",
  "vision intelligence": "AI Video Analytics",
  "ai vision": "AI Video Analytics",
  "video analytics": "AI Video Analytics",
  "video management": "VMS",
  "video management system": "VMS",
  "health monitoring": "Camera Health",
  "camera health monitoring": "Camera Health",
  "asset tracking": "Asset & AMC",
  "amc management": "Asset & AMC",
  "asset and amc": "Asset & AMC",
  "industry insights": "Industry Guides",
  industries: "Industry Guides",
};

/** @deprecated Use DEFAULT_BLOG_CATEGORIES — kept for compatibility */
export type BlogCategory = string;

export const blogCategoryOptions: string[] = [...DEFAULT_BLOG_CATEGORIES];

export type BlogCategoryFilter = string;

export function normalizeCategory(value: string) {
  const cleaned = value.replace(/\s+/g, " ").trim();
  return CATEGORY_ALIASES[cleaned.toLowerCase()] ?? cleaned;
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

const MONTHS_SHORT = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

/** Calendar day (YYYY-MM-DD) of a date or ISO datetime string; UTC for datetimes. */
export function blogCalendarDay(input: string | null | undefined) {
  if (!input) return null;
  const match = /^(\d{4})-(\d{2})-(\d{2})/.exec(input);
  if (match) return match[0];
  const parsed = new Date(input);
  return Number.isNaN(parsed.getTime()) ? null : parsed.toISOString().slice(0, 10);
}

/**
 * Absolute date such as "4 Aug 2026". Formatted from the calendar day string
 * (not the runtime timezone) so server and client render the same text.
 */
export function formatBlogDateShort(input: string | null | undefined) {
  const day = blogCalendarDay(input);
  if (!day) return input ?? "";
  const [year, month, date] = day.split("-").map(Number);
  return `${date} ${MONTHS_SHORT[month - 1]} ${year}`;
}

/** The "Updated" day when it is later than the publish day, otherwise null. */
export function getBlogUpdatedDay(post: Pick<BlogPost, "date" | "updatedAt">) {
  const published = blogCalendarDay(post.date);
  const updated = blogCalendarDay(post.updatedAt);
  if (!updated || !published || updated <= published) return null;
  return updated;
}

/** Inline Markdown reduced to plain text: links keep their label, emphasis marks drop. */
export function stripInlineMarkdown(text: string) {
  return text
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*]+)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

function sectionText(section: BlogSection): string[] {
  if (section.type === "list") return section.items;
  if (section.type === "table") return [...section.headers, ...section.rows.flat()];
  return [section.text];
}

/** Words in the article body (takeaways included), ignoring Markdown link targets. */
export function countBlogWords(sections: BlogSection[], takeaways: string[] = []) {
  return stripInlineMarkdown([...takeaways, ...sections.flatMap(sectionText)].join(" "))
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function estimateReadTime(sections: BlogSection[], takeaways: string[] = []) {
  const words = countBlogWords(sections, takeaways);
  const minutes = Math.max(1, Math.round(words / 200) || 1);
  return `${minutes} min read`;
}

/** URL fragment for a heading ("How does X work?" → "how-does-x-work"). */
export function slugifyHeading(text: string) {
  return (
    stripInlineMarkdown(text)
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/['’]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 72)
      .replace(/-+$/g, "") || "section"
  );
}

/** Stable, de-duplicated anchor ids for every heading (null for other sections). */
export function getHeadingIds(sections: BlogSection[]) {
  const seen = new Map<string, number>();
  return sections.map((section) => {
    if (section.type !== "heading") return null;
    const base = slugifyHeading(section.text);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return count ? `${base}-${count + 1}` : base;
  });
}

/**
 * Values derived from the body at render time (never trust a stored read time),
 * with optional fields normalised so older stored posts keep working.
 */
export function withDerivedBlogFields(post: BlogPost): BlogPost {
  return {
    ...post,
    category: normalizeCategory(post.category),
    readTime: estimateReadTime(post.sections, post.takeaways),
    tags: Array.isArray(post.tags)
      ? post.tags.map((tag) => String(tag).trim()).filter(Boolean)
      : [],
  };
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
      if (section.type === "table") {
        const row = (cells: string[]) => `| ${cells.join(" | ")} |`;
        return [
          row(section.headers),
          row(section.headers.map(() => "---")),
          ...section.rows.map(row),
        ].join("\n");
      }
      return section.text;
    })
    .join("\n\n");
}

/** Words that stay lower-case inside a Title Case heading ("Video Analytics for Factories"). */
const TITLE_CASE_MINOR_WORDS = new Set([
  "a", "an", "and", "as", "at", "by", "for", "from", "in", "into", "of", "on",
  "or", "per", "the", "to", "via", "vs", "with",
]);

/** One-word blocks that are section labels rather than stray words. */
const SINGLE_WORD_HEADINGS = new Set([
  "faq", "faqs", "conclusion", "summary", "overview", "introduction", "background",
  "glossary", "resources", "checklist",
]);

/**
 * Decide whether a single-line block without `#` marks reads as a heading.
 * Recognised: a short question ("How does the API engine connect devices?"),
 * a Title Case label ("Fall Detection"), or the legacy 18–70 character
 * phrase without terminal punctuation. Sentences, lead-ins ending in ":" and
 * lines with links stay paragraphs.
 */
export function looksLikeHeading(line: string) {
  const text = line.trim();
  if (!text || text.length > 110) return false;
  if (!/^[A-Z0-9"“‘'(]/.test(text)) return false;
  if (/[,;:]$/.test(text)) return false;
  if (/\]\(|https?:\/\//.test(text)) return false;
  const words = text.split(/\s+/);

  if (text.endsWith("?")) {
    // One short question, not a sentence followed by a question.
    return words.length >= 3 && words.length <= 16 && !/[.!?]\s/.test(text.slice(0, -1));
  }
  if (/[.!…]$/.test(text)) return false;

  if (text.length >= 18 && text.length <= 70) return true;

  // Short labels must be Title Case so fragments like "Live viewing" stay paragraphs.
  if (words.length === 1) return SINGLE_WORD_HEADINGS.has(text.toLowerCase());
  if (text.length < 18 && words.length <= 5) {
    return words.every((word, index) => {
      const bare = word.replace(/^[^A-Za-z0-9]+|[^A-Za-z0-9]+$/g, "");
      if (!bare) return true;
      if (index > 0 && TITLE_CASE_MINOR_WORDS.has(bare.toLowerCase())) return true;
      return /^[A-Z0-9]/.test(bare);
    });
  }
  return false;
}

function parseTableRow(line: string) {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => cell.trim());
}

const TABLE_SEPARATOR = /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/;

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
        text: block.replace(/^###\s+/, "").replace(/\s+#+$/, "").trim(),
      };
    }

    if (/^##\s+\S/.test(block) || /^#\s+\S/.test(block)) {
      return {
        type: "heading",
        level: 2,
        text: block.replace(/^#{1,2}\s+/, "").replace(/\s+#+$/, "").trim(),
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

    // Markdown pipe table: header row, separator row, then body rows.
    if (
      lines.length >= 2 &&
      lines.every((line) => line.startsWith("|")) &&
      TABLE_SEPARATOR.test(lines[1])
    ) {
      const headers = parseTableRow(lines[0]);
      return {
        type: "table",
        headers,
        rows: lines.slice(2).map((line) => {
          const cells = parseTableRow(line);
          return headers.map((_, index) => cells[index] ?? "");
        }),
      };
    }

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

    // Single-line question or title-like block without `#` marks → subheading
    if (lines.length === 1 && looksLikeHeading(lines[0])) {
      return { type: "heading", level: 3, text: lines[0] };
    }

    return { type: "paragraph", text: lines.join(" ") };
  });
}

export function sortBlogPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? 1 : -1;
    const aAt = a.publishedAt ?? "";
    const bAt = b.publishedAt ?? "";
    if (aAt !== bAt) return aAt < bAt ? 1 : -1;
    return a.title.localeCompare(b.title);
  });
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

/**
 * Related posts: shared category and shared tags first (a shared category
 * counts like two shared tags), then the most recent.
 */
export function getRelatedPosts(posts: BlogPost[], slug: string, limit = 2) {
  const current = findBlog(posts, slug);
  const ordered = sortBlogPosts(posts.filter((post) => post.slug !== slug));
  if (!current) return ordered.slice(0, limit);

  const tags = new Set((current.tags ?? []).map((tag) => tag.toLowerCase()));
  const score = (post: BlogPost) =>
    (normalizeCategory(post.category) === normalizeCategory(current.category) ? 2 : 0) +
    (post.tags ?? []).filter((tag) => tags.has(tag.toLowerCase())).length;

  return ordered
    .map((post, index) => ({ post, index, score: score(post) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, limit)
    .map((item) => item.post);
}
