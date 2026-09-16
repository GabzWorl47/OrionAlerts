import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/industries/site-origin";

/**
 * Crawlers we explicitly welcome, beyond the wildcard rule.
 *
 * Two distinct jobs sit in this list and it is worth keeping them straight:
 *
 * - Answer/search crawlers (OAI-SearchBot, ChatGPT-User, PerplexityBot,
 *   Claude-User, Google-Extended, …) decide whether an assistant can cite
 *   orionalerts.com when someone asks about VSaaS or AI video analytics.
 *   Blocking these removes us from AI answers.
 * - Training crawlers (GPTBot, ClaudeBot, CCBot, Applebot-Extended, …) feed
 *   model training corpora. Allowing them is a commercial choice, not a
 *   technical requirement — an early-stage company generally wants the reach.
 *
 * To stop contributing to training while staying citable, move the training
 * agents into their own rule with `disallow: "/"`. Everything else still works.
 */
const AI_CRAWLERS = [
  // OpenAI
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  // Google / Apple AI surfaces (separate from Googlebot / Applebot)
  "Google-Extended",
  "Applebot-Extended",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Others
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "CCBot",
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
];

/**
 * Allow public crawl paths. Do not rely on Disallow to secure /admin or /api —
 * authentication remains required. Listing them reduces accidental indexing noise.
 */
export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  const disallow = ["/admin", "/admin/", "/api/", "/api"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      // Named explicitly so intent is unambiguous: some operators treat a bare
      // wildcard as undecided, and an explicit Allow survives future edits to
      // the wildcard rule.
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: `${origin}/sitemap.xml`,
    host: origin,
  };
}
