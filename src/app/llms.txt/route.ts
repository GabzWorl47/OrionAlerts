import { getSiteOrigin } from "@/lib/industries/site-origin";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { site, solutions } from "@/lib/site";
import { nebulaFaqs, nebulaSectionCopy } from "@/lib/nebula-os";
import {
  COMPANY_LINKS,
  RESOURCE_LINKS,
  TEXT_HEADERS,
  companyFactLines,
  industryLines,
  topFaqs,
} from "./content";

// Route Handlers are uncached by default in this Next version, which is what we
// want here: the blog list is read at request time. CDN caching is handled by the
// Cache-Control header on the response instead.

/**
 * /llms.txt — a plain-text map of the site for AI assistants.
 *
 * Conventional format: an H1 name, a blockquote summary, then link sections.
 * Generated from the same exports the pages render, so it cannot drift out of
 * sync the way a hand-maintained static file does. The long-form companion is
 * /llms-full.txt.
 */
export async function GET() {
  const origin = getSiteOrigin();
  const url = (path: string) => `${origin}${path}`;

  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.entityStatement}`);
  lines.push("");
  lines.push(
    `The full text of the solution, platform, FAQ, industry and blog pages is in [llms-full.txt](${url("/llms-full.txt")}).`,
  );
  lines.push("");

  lines.push("## Company facts");
  lines.push("");
  lines.push(...companyFactLines(url));
  lines.push("");

  lines.push("## Platform and solutions");
  lines.push("");
  lines.push(`- [Nebula OS](${url("/nebula-os")}): ${nebulaSectionCopy.pageLede}`);
  for (const solution of solutions) {
    lines.push(
      `- [${solution.name}](${url(`/solutions/${solution.slug}`)}): ${solution.seoDescription ?? solution.headline}`,
    );
  }
  lines.push(`- [All solutions](${url("/solutions")})`);
  lines.push("");

  lines.push("## Industries");
  lines.push("");
  lines.push(...industryLines(url));
  lines.push(`- [All industries](${url("/industries")})`);
  lines.push("");

  lines.push("## Key questions answered");
  lines.push("");
  lines.push(`### About ${site.name} ([all FAQs](${url("/faqs")}))`);
  lines.push("");
  const answered = topFaqs(8);
  for (const faq of answered) {
    lines.push(`- ${faq.q} — ${faq.a}`);
  }
  lines.push("");
  lines.push(`### About Nebula OS ([Nebula OS](${url("/nebula-os")}))`);
  lines.push("");
  // Skip Nebula OS questions already answered in the list above.
  const askedAbove = new Set(answered.map((faq) => faq.q.toLowerCase()));
  for (const faq of nebulaFaqs) {
    if (askedAbove.has(faq.question.toLowerCase())) continue;
    lines.push(`- ${faq.question} — ${faq.answer}`);
  }
  lines.push("");

  lines.push("## Resources");
  lines.push("");
  for (const link of RESOURCE_LINKS) {
    lines.push(`- [${link.label}](${url(link.path)}): ${link.note}`);
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  for (const link of COMPANY_LINKS) {
    lines.push(`- [${link.label}](${url(link.path)})`);
  }
  lines.push("");

  try {
    const posts = await getPublishedBlogPosts();
    if (posts.length > 0) {
      lines.push("## Writing");
      lines.push("");
      for (const post of posts.slice(0, 25)) {
        const summary = post.excerpt ? `: ${post.excerpt}` : "";
        lines.push(`- [${post.title}](${url(`/blogs/${post.slug}`)})${summary}`);
      }
      lines.push("");
    }
  } catch {
    // Blog store may be unavailable; the rest of the map still ships.
  }

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Full text for AI assistants](${url("/llms-full.txt")})`);
  lines.push(`- [Sitemap](${url("/sitemap.xml")})`);
  lines.push(`- [Privacy policy](${url("/privacy")})`);
  lines.push(`- [Terms](${url("/terms")})`);
  lines.push("");

  return new Response(lines.join("\n"), { headers: TEXT_HEADERS });
}
