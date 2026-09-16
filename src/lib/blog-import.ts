import { slugifyTitle } from "@/lib/blogs";

export type BlogImportDraft = {
  title: string;
  slug: string;
  excerpt: string;
  takeawaysText: string;
  body: string;
  sourceName: string;
};

const TAKEAWAY_HEADING = /^(?:#{1,3}\s*)?(?:key\s+)?takeaways?\s*$/i;

function stripMd(text: string) {
  return text
    .replace(/^#{1,6}\s+/, "")
    .replace(/^\>\s?/, "")
    .replace(/^[-*•]\s+/, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .trim();
}

function normalizeBodyMarkdown(text: string) {
  return text
    .replace(/\r\n/g, "\n")
    .replace(/^######\s+/gm, "## ")
    .replace(/^#####\s+/gm, "## ")
    .replace(/^####\s+/gm, "## ")
    .replace(/^###\s+/gm, "## ")
    .replace(/^#\s+/gm, "## ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function splitBlocks(text: string) {
  return text
    .replace(/\r\n/g, "\n")
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);
}

function isHeading(block: string) {
  return /^#{1,6}\s+\S/.test(block);
}

function headingText(block: string) {
  return stripMd(block.split("\n")[0] || "");
}

/**
 * Parse Markdown / plain text into blog form fields.
 * Supports an optional "Takeaways" heading section.
 */
export function parseBlogDocument(raw: string, fileName = "document"): BlogImportDraft {
  const normalized = raw.replace(/\r\n/g, "\n").trim();
  if (!normalized) {
    throw new Error("The document is empty.");
  }

  const blocks = splitBlocks(normalized);
  let title = "";
  let startIndex = 0;

  if (blocks[0] && isHeading(blocks[0])) {
    title = headingText(blocks[0]);
    startIndex = 1;
  } else if (blocks[0]) {
    title = stripMd(blocks[0].split("\n")[0] || "").slice(0, 120);
    // If the first block was a short title-like line, skip it from body
    if (blocks[0].length <= 120 && !blocks[0].includes("\n")) {
      startIndex = 1;
    }
  }

  if (!title) {
    title = fileName.replace(/\.[^.]+$/, "").replace(/[-_]+/g, " ").trim() || "Untitled post";
  }

  const remaining = blocks.slice(startIndex);
  const takeaways: string[] = [];
  const bodyBlocks: string[] = [];
  let excerpt = "";
  let inTakeaways = false;

  for (const block of remaining) {
    if (isHeading(block) && TAKEAWAY_HEADING.test(headingText(block))) {
      inTakeaways = true;
      continue;
    }

    if (inTakeaways) {
      if (isHeading(block)) {
        inTakeaways = false;
        bodyBlocks.push(block);
        continue;
      }
      const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
      for (const line of lines) {
        const item = stripMd(line);
        if (item) takeaways.push(item);
      }
      continue;
    }

    if (!excerpt && !isHeading(block) && !block.startsWith(">") && !/^[-*•]\s+/.test(block)) {
      excerpt = stripMd(block).slice(0, 240);
    }

    bodyBlocks.push(block);
  }

  const body = normalizeBodyMarkdown(bodyBlocks.join("\n\n"));
  if (!body) {
    throw new Error("Could not find article content in the document.");
  }

  if (!excerpt) {
    excerpt = stripMd(bodyBlocks.find((block) => !isHeading(block)) || body).slice(0, 240);
  }

  return {
    title,
    slug: slugifyTitle(title),
    excerpt,
    takeawaysText: takeaways.join("\n"),
    body,
    sourceName: fileName,
  };
}

/** Convert mammoth HTML-ish markdown cleanup after docx conversion. */
export function htmlToImportMarkdown(html: string) {
  const withBreaks = html
    .replace(/\r\n/g, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h1>/gi, "\n\n")
    .replace(/<\/h2>/gi, "\n\n")
    .replace(/<\/h3>/gi, "\n\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/blockquote>/gi, "\n\n");

  const text = withBreaks
    .replace(/<h1[^>]*>/gi, "# ")
    .replace(/<h2[^>]*>/gi, "## ")
    .replace(/<h3[^>]*>/gi, "## ")
    .replace(/<li[^>]*>/gi, "- ")
    .replace(/<blockquote[^>]*>/gi, "> ")
    .replace(/<\/?ul[^>]*>/gi, "\n")
    .replace(/<\/?ol[^>]*>/gi, "\n")
    .replace(/<\/?strong[^>]*>/gi, "")
    .replace(/<\/?b[^>]*>/gi, "")
    .replace(/<\/?em[^>]*>/gi, "")
    .replace(/<\/?i[^>]*>/gi, "")
    .replace(/<a[^>]*>(.*?)<\/a>/gi, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return text;
}

export function isDocumentFile(file: File) {
  const name = file.name.toLowerCase();
  return (
    name.endsWith(".md") ||
    name.endsWith(".markdown") ||
    name.endsWith(".txt") ||
    name.endsWith(".docx") ||
    file.type === "text/markdown" ||
    file.type === "text/plain" ||
    file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  );
}

export function isImageFile(file: File) {
  return file.type.startsWith("image/") || /\.(png|jpe?g|webp|gif)$/i.test(file.name);
}
