import { getSiteOrigin } from "@/lib/industries/site-origin";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { industries, site, solutions } from "@/lib/site";
import { nebulaFaqs, nebulaModules } from "@/lib/nebula-os";

// Route Handlers are uncached by default in this Next version, which is what we
// want here: the blog list is read at request time. CDN caching is handled by the
// Cache-Control header on the response instead.

/**
 * /llms.txt — a plain-text map of the site for AI assistants.
 *
 * Conventional format: an H1 name, a blockquote summary, then link sections.
 * Generated from the same exports the pages render, so it cannot drift out of
 * sync the way a hand-maintained static file does.
 */
export async function GET() {
  const origin = getSiteOrigin();
  const url = (path: string) => `${origin}${path}`;

  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(
    `> ${site.name} turns existing CCTV and IP camera estates into an AI-monitored system. It unifies video management (VMS), real-time AI video analytics, camera and infrastructure health monitoring, asset tracking, and AMC/maintenance operations in one platform, built for multi-site enterprise operations.`,
  );
  lines.push("");
  lines.push(
    `${site.name} is headquartered in India and serves enterprise and industrial camera estates. The platform runs on Nebula OS, a purpose-built Linux-based Vision AI operating system.`,
  );
  lines.push("");

  lines.push("## Core platform");
  lines.push("");
  lines.push(
    `- [Nebula OS](${url("/nebula-os")}): The Vision AI operating system underneath ${site.name}. Runs video management, AI analytics, camera health, asset records and AMC as modules of one Linux-based system sharing a single device and event model.`,
  );
  for (const mod of nebulaModules) {
    lines.push(`- [${mod.heading}](${url(mod.href)}): ${mod.summary}`);
  }
  lines.push("");

  lines.push("## Solutions");
  lines.push("");
  for (const solution of solutions) {
    lines.push(
      `- [${solution.name}](${url(`/solutions/${solution.slug}`)}): ${solution.headline}`,
    );
  }
  lines.push("");

  lines.push("## Industries served");
  lines.push("");
  for (const industry of industries) {
    lines.push(
      `- [${industry.name}](${url(`/industries/${industry.slug}`)})`,
    );
  }
  lines.push("");

  lines.push("## Key questions answered");
  lines.push("");
  for (const faq of nebulaFaqs) {
    lines.push(`- ${faq.question} — ${faq.answer}`);
  }
  lines.push("");

  lines.push("## Company");
  lines.push("");
  lines.push(`- [About ${site.name}](${url("/about")})`);
  lines.push(`- [Partners](${url("/partners")})`);
  lines.push(`- [Careers](${url("/careers")})`);
  lines.push(`- [Security](${url("/security")})`);
  lines.push(`- [Contact](${url("/contact")})`);
  lines.push(`- [Book a demo](${url("/book-demo")})`);
  lines.push(`- [Full FAQ](${url("/faqs")})`);
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
  lines.push(`- [Sitemap](${url("/sitemap.xml")})`);
  lines.push(`- [Privacy policy](${url("/privacy")})`);
  lines.push(`- [Terms](${url("/terms")})`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
