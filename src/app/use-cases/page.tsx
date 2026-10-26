import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { solutionName } from "@/components/content/link-labels";
import { useCases, useCasesHub, USE_CASES_PATH } from "@/lib/use-cases";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/industries/site-origin";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: useCasesHub.seoTitle,
  description: useCasesHub.seoDescription,
  pathname: USE_CASES_PATH,
});

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Use cases", path: USE_CASES_PATH },
];

export default function UseCasesHubPage() {
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(BREADCRUMBS)} />
      <JsonLdScript
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: useCasesHub.title,
          itemListElement: useCases.map((u, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: u.title,
            url: absoluteUrl(`${USE_CASES_PATH}/${u.slug}`),
          })),
        }}
      />

      <ContentHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Use cases"
        title={useCasesHub.title}
        answer={useCasesHub.answer}
      />

      <Section compact>
        <SectionHeading
          eyebrow={`${useCases.length} detections`}
          title="Choose a use case"
          lede="Each one runs on supported existing IP cameras and an on-site Nebula OS node, with alerts to the dashboard, mobile app and email."
          compact
        />
        <LinkCardGrid
          headingLevel="h2"
          items={useCases.map((u) => ({
            href: `${USE_CASES_PATH}/${u.slug}`,
            title: u.title,
            description: u.summary,
            meta: solutionName(u.solution).replace(/ \(.*\)$/, ""),
          }))}
        />
      </Section>

      <Section compact className="pt-0">
        <div className="panel-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Related reading</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-strong">
            The modules these detections belong to, the platform they run on, and definitions of the
            terms used on these pages.
          </p>
          <div className="mt-5">
            <LinkPills
              items={[
                { href: "/solutions/ai-analytics", label: "AI video analytics" },
                { href: "/solutions/health-monitoring", label: "Camera health monitoring" },
                { href: "/nebula-os", label: "Nebula OS" },
                { href: "/industries", label: "Industries" },
                { href: "/glossary", label: "Glossary" },
                { href: "/compare", label: "Comparisons" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Pick the detections for your sites"
          lede="We will map your cameras to the use cases that matter and show them in a live demo."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/solutions/ai-analytics"
          secondaryLabel="Explore AI Video Analytics"
        />
      </Section>
    </PageShell>
  );
}
