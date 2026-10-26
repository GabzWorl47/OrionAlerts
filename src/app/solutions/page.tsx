import Link from "next/link";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SolutionFaqs } from "@/components/SolutionFaqs";
import { SolutionGrid } from "@/components/landing/SolutionGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { buildPageMetadata } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  JsonLdScript,
  organizationId,
} from "@/lib/jsonld";
import { getSolution, solutions } from "@/lib/site";
import { hubFaqs } from "@/app/solutions/solution-page-content";
import { absoluteUrl } from "@/lib/industries/site-origin";

const PAGE_TITLE = "Video Surveillance Software Solutions";
const PAGE_DESCRIPTION =
  "Compare OrionAlerts VMS, AI video analytics, CCTV health monitoring, asset tracking and AMC management: one platform for multi-site camera estates.";

export const metadata: Metadata = buildPageMetadata({
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  pathname: "/solutions",
});

/** "Which solution do I need?" — problem → module → who uses it (doc §3.2). */
const chooser = [
  {
    problem: "Cameras across many sites, no single view",
    slug: "vms",
    module: "VMS",
    who: "Control room",
  },
  {
    problem: "Need alerts, not hours of footage",
    slug: "ai-analytics",
    module: "AI Vision",
    who: "Security and safety (EHS)",
  },
  {
    problem: "Cameras silently offline or not recording",
    slug: "health-monitoring",
    module: "Health Monitoring",
    who: "IT and security",
  },
  {
    problem: "Don't know what we own or who has it",
    slug: "asset-tracking",
    module: "Asset Tracking",
    who: "IT and admin",
  },
  {
    problem: "Missed AMC renewals, slow vendors",
    slug: "amc-management",
    module: "AMC Management",
    who: "Facilities and procurement",
  },
] as const;

function collectionJsonLd() {
  const pageUrl = absoluteUrl("/solutions") ?? "/solutions";
  const orgId = organizationId();
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collection`,
    name: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: pageUrl,
    inLanguage: "en-IN",
    ...(orgId ? { publisher: { "@id": orgId } } : {}),
    mainEntity: {
      "@type": "ItemList",
      name: "OrionAlerts solutions",
      numberOfItems: solutions.length,
      itemListElement: solutions.map((solution, index) => {
        const url = absoluteUrl(`/solutions/${solution.slug}`) ?? `/solutions/${solution.slug}`;
        return {
          "@type": "ListItem",
          position: index + 1,
          url,
          item: {
            "@type": "Service",
            "@id": `${url}#service`,
            name: solution.name,
            description: solution.oneLiner,
            url,
          },
        };
      }),
    },
  };
}

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ])}
        />
        <JsonLdScript data={collectionJsonLd()} />
        <JsonLdScript data={faqPageJsonLd(hubFaqs)} />
        <SolutionGrid />

        <section
          id="which-solution"
          aria-labelledby="which-solution-heading"
          className="bg-white py-10 md:py-14"
        >
          <div className="container max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow mb-2">Choose a module</p>
              <h2
                id="which-solution-heading"
                className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text"
              >
                Which solution do I need?
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
                Start from the problem. Each module works on its own, and all five share the same
                cameras, sites and records.
              </p>
            </div>
            <div className="mt-8 overflow-x-auto rounded-[22px] border border-line bg-white shadow-[0_18px_40px_-32px_rgba(15,61,120,0.45)]">
              <table className="w-full border-collapse text-left text-[13px] sm:text-sm">
                <caption className="sr-only">Which OrionAlerts solution fits which problem</caption>
                <thead>
                  <tr className="border-b border-line bg-surface-2/60">
                    <th scope="col" className="px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-muted-strong md:px-5">
                      Problem
                    </th>
                    <th scope="col" className="px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-muted-strong md:px-5">
                      Module
                    </th>
                    <th scope="col" className="px-3 py-3 sm:px-4 sm:py-3.5 font-semibold text-muted-strong md:px-5">
                      Who uses it
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {chooser.map((row) => (
                    <tr key={row.slug} className="border-b border-line last:border-b-0">
                      <th scope="row" className="px-3 py-3 sm:px-4 sm:py-3.5 align-top font-medium text-text md:px-5">
                        {row.problem}
                      </th>
                      <td className="px-3 py-3 sm:px-4 sm:py-3.5 align-top md:px-5">
                        <Link
                          href={`/solutions/${row.slug}`}
                          className="font-semibold text-blue hover:underline"
                        >
                          {row.module}
                        </Link>
                        <span className="mt-0.5 block text-[13px] leading-snug text-muted-strong">
                          {getSolution(row.slug)?.oneLiner}
                        </span>
                      </td>
                      <td className="px-3 py-3 sm:px-4 sm:py-3.5 align-top text-muted-strong md:px-5">{row.who}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <SolutionFaqs id="solutions-faqs" heading="Questions about OrionAlerts solutions" faqs={hubFaqs} className="!pt-0" />

        <TestimonialsSection />
        <FinalCta />
      </>
    </PageShell>
  );
}
