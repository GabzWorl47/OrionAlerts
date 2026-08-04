export type BlogCategory = "Video Intelligence" | "Vision Intelligence" | "Operations";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
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
};

export const blogCategories = [
  "All",
  "Video Intelligence",
  "Vision Intelligence",
  "Operations",
] as const;

export const blogCategoryOptions: BlogCategory[] = [
  "Video Intelligence",
  "Vision Intelligence",
  "Operations",
];

export type BlogCategoryFilter = (typeof blogCategories)[number];

export function isBlogCategory(value: string): value is BlogCategory {
  return blogCategoryOptions.includes(value as BlogCategory);
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

export function formatBlogDateLabel(date: string) {
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return date;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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
      if (section.type === "heading") return `## ${section.text}`;
      if (section.type === "quote") return `> ${section.text}`;
      if (section.type === "list") return section.items.map((item) => `- ${item}`).join("\n");
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
    if (block.startsWith("## ")) {
      return { type: "heading", text: block.replace(/^##\s+/, "").trim() };
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
