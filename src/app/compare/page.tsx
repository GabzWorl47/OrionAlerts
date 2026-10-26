import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { compareHub, comparisons, COMPARE_PATH } from "@/lib/comparisons";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: compareHub.seoTitle,
  description: compareHub.seoDescription,
  pathname: COMPARE_PATH,
});

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Compare", path: COMPARE_PATH },
];

export default function CompareHubPage() {
  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(BREADCRUMBS)} />

      <ContentHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Compare"
        title={compareHub.title}
        answer={compareHub.answer}
      />

      <Section compact>
        <SectionHeading eyebrow="Comparisons" title="Pick a comparison" compact />
        <LinkCardGrid
          headingLevel="h2"
          items={comparisons.map((c) => ({
            href: `${COMPARE_PATH}/${c.slug}`,
            title: c.title,
            description: c.summary,
          }))}
        />
      </Section>

      <Section compact className="pt-0">
        <div className="panel-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Need the basics first?</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-strong">
            Definitions of the terms used in these comparisons, and the platform behind OrionAlerts.
          </p>
          <div className="mt-5">
            <LinkPills
              items={[
                { href: "/glossary", label: "Glossary" },
                { href: "/nebula-os", label: "Nebula OS" },
                { href: "/solutions", label: "Solutions" },
                { href: "/use-cases", label: "Use cases" },
                { href: "/company", label: "OrionAlerts at a glance" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Not sure which model fits?"
          lede="Tell us about your sites, cameras and connectivity, and we will walk through the trade-offs with you."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Contact Sales"
        />
      </Section>
    </PageShell>
  );
}
