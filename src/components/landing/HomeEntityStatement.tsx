import Link from "next/link";
import { homepageEntityFaq } from "@/lib/homepage";
import { solutions } from "@/lib/site";

/** Module order used in running copy on the homepage. */
const MODULE_LINKS = [
  { slug: "vms", label: "Video management (VMS)" },
  { slug: "ai-analytics", label: "AI video analytics" },
  { slug: "health-monitoring", label: "Camera health monitoring" },
  { slug: "asset-tracking", label: "Asset tracking" },
  { slug: "amc-management", label: "AMC management" },
].filter((item) => solutions.some((solution) => solution.slug === item.slug));

const MORE_LINKS = [
  { href: "/industries", label: "Industries" },
  { href: "/security", label: "Security" },
  { href: "/faqs", label: "FAQs" },
];

/**
 * The visible "What is OrionAlerts" paragraph directly under the hero. Uses
 * `site.entityStatement` verbatim so the homepage, About, FAQ #1 and llms.txt
 * all describe the entity in exactly the same words.
 */
export function HomeEntityStatement() {
  return (
    <section aria-labelledby="what-is-orionalerts" className="bg-bg py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="what-is-orionalerts"
            className="text-[clamp(1.35rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.02em] text-text"
          >
            {homepageEntityFaq.question}
          </h2>
          <p className="mt-4 text-[clamp(1rem,1.6vw,1.2rem)] leading-relaxed text-muted-strong">
            {homepageEntityFaq.answer}
          </p>
          <nav aria-label="OrionAlerts modules and resources" className="mt-6">
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {MODULE_LINKS.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/solutions/${item.slug}`}
                    className="inline-flex min-h-10 items-center rounded-full border border-blue/20 bg-white px-3.5 py-1.5 text-sm font-semibold text-blue transition hover:border-blue/45 hover:bg-blue/5"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              {MORE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-10 items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm font-medium text-muted-strong transition hover:border-blue/30 hover:text-blue"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
