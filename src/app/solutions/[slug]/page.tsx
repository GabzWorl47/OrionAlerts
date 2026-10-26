import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { SolutionComparisonTable } from "@/components/SolutionComparisonTable";
import { SolutionFaqs } from "@/components/SolutionFaqs";
import { SolutionFeatureMediaRows } from "@/components/SolutionFeatureMediaRows";
import { SolutionHero, type SolutionHeroData } from "@/components/SolutionHero";
import { SolutionHowItWorks } from "@/components/SolutionHowItWorks";
import { SolutionOverviewArt } from "@/components/SolutionOverviewArt";
import { SolutionRelatedLinks } from "@/components/SolutionRelatedLinks";
import { SolutionVideoSection } from "@/components/SolutionVideoSection";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { HashScroll } from "@/components/HashScroll";
import { getSolutionOutcomes } from "@/lib/solution-outcomes";
import { getIndustry, getSolution, solutions, type Solution } from "@/lib/site";
import { buildPageMetadata, solutionSeoDescriptions } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqPageJsonLd,
  JsonLdScript,
  serviceJsonLd,
} from "@/lib/jsonld";
import {
  getSolutionPageContent,
  type SolutionPageContent,
} from "@/app/solutions/solution-page-content";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

/** 1200×630 social card per solution (generated into public/Images/og/solutions). */
function socialImage(slug: string) {
  return `/Images/og/solutions/${slug}.jpg`;
}

function metaDescription(solution: Solution) {
  return (
    solution.seoDescription ??
    solutionSeoDescriptions[solution.slug] ??
    solution.tagline ??
    solution.summary
  );
}

/** First sentence of the summary, capped for the hero lede. */
function shortLede(summary: string) {
  const first = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first) return summary;
  return first.length > 140 ? `${first.slice(0, 137)}…` : first;
}

/**
 * SolutionHero is a client component, so its props ship in the RSC payload.
 * Send only what it renders instead of the whole Solution (§6.9).
 */
function heroData(solution: Solution): SolutionHeroData {
  return {
    slug: solution.slug,
    name: solution.name,
    seoTitle: solution.seoTitle,
    shortName: solution.shortName,
    tagline: solution.tagline,
    headline: solution.headline,
    image: solution.image,
    lede: shortLede(solution.summary),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  const image = socialImage(solution.slug);
  const imageAlt = `OrionAlerts ${solution.seoTitle ?? solution.name}`;
  const metadata = buildPageMetadata({
    title: solution.seoTitle ?? solution.name,
    description: metaDescription(solution),
    pathname: `/solutions/${solution.slug}`,
    image,
    imageAlt,
  });
  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      images: [{ url: image, width: 1200, height: 630, alt: imageAlt }],
    },
  };
}

/**
 * Service node for the module, extending the shared helper (same `@id`,
 * provider → `/#organization`, areaServed India) with the names, category and
 * audience an assistant matches on. No `offers`: there is no public pricing.
 */
function solutionServiceJsonLd(solution: Solution, content: SolutionPageContent) {
  const base = serviceJsonLd({
    name: solution.name,
    description: metaDescription(solution),
    path: `/solutions/${solution.slug}`,
    image: solution.image,
  });
  const featureNames = solution.features.map((feature) => feature.title).join("; ");
  return {
    ...base,
    alternateName: content.service.alternateName,
    serviceType: content.service.serviceType,
    category: content.service.serviceType,
    description: `${metaDescription(solution)} Features: ${featureNames}.`,
    audience: {
      "@type": "BusinessAudience",
      audienceType: content.service.audience,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  const content = getSolutionPageContent(slug);
  if (!solution || !content) notFound();

  const industries = content.usedIn
    .map((industrySlug) => getIndustry(industrySlug))
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry))
    .map((industry) => ({ label: industry.name, href: `/industries/${industry.slug}` }));

  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
            { name: solution.name, path: `/solutions/${solution.slug}` },
          ])}
        />
        <JsonLdScript data={solutionServiceJsonLd(solution, content)} />
        {solution.faqs.length ? <JsonLdScript data={faqPageJsonLd(solution.faqs)} /> : null}
        {/* No VideoObject JSON-LD here: these pages render no <video>. Re-add it
            only if solution.introVideo is embedded on the page. */}
        <HashScroll />
        <SolutionHero solution={heroData(solution)} />

        <LogoMarquee compact />

        <SolutionOverviewArt solution={solution} />

        <SolutionVideoSection
          label={`${solution.shortName} overview`}
          poster={solution.image}
          cinematicEntrance
          heading={content.outcomesHeading}
          outcomes={getSolutionOutcomes(solution)}
          gap="1.5rem"
        />

        <SolutionHowItWorks solution={solution} content={content} />

        <SolutionFeatureMediaRows solution={solution} />

        <SolutionComparisonTable table={content.comparison} />

        <SolutionFaqs heading={content.faqHeading} faqs={solution.faqs} />

        <SolutionRelatedLinks
          solutionLabel={content.topic}
          industries={industries}
          furtherReading={content.furtherReading}
          glossary={content.glossary}
        />

        <TestimonialsSection compact />

        {/* One CTA band only: the hero already carries "Book a Demo". */}
        <Section>
          <p className="mb-4 text-sm text-muted">
            Explore other solutions:{" "}
            {solutions
              .filter((s) => s.slug !== solution.slug)
              .map((s, i, arr) => (
                <span key={s.slug}>
                  <Link href={`/solutions/${s.slug}`} className="font-medium text-blue hover:underline">
                    {s.shortName}
                  </Link>
                  {i < arr.length - 1 ? " · " : ""}
                </span>
              ))}
            {" · "}
            <Link href="/solutions" className="font-medium text-blue hover:underline">
              Compare all solutions
            </Link>
          </p>
          <CtaBand
            title={content.ctaTitle}
            lede="Book a demo for a guided walkthrough tailored to your sites and operators."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/contact"
            secondaryLabel="Contact Us"
          />
        </Section>
      </>
    </PageShell>
  );
}
