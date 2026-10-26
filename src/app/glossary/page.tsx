import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { definedTermSetJsonLd } from "@/components/content/structured-data";
import { glossaryHub, glossaryTerms, GLOSSARY_PATH } from "@/lib/glossary";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: glossaryHub.seoTitle,
  description: glossaryHub.seoDescription,
  pathname: GLOSSARY_PATH,
});

const BREADCRUMBS = [
  { name: "Home", path: "/" },
  { name: "Glossary", path: GLOSSARY_PATH },
];

export default function GlossaryHubPage() {
  const sorted = [...glossaryTerms].sort((a, b) => a.term.localeCompare(b.term));

  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(BREADCRUMBS)} />
      <JsonLdScript
        data={definedTermSetJsonLd({
          name: glossaryHub.title,
          description: glossaryHub.seoDescription,
          terms: glossaryTerms,
        })}
      />

      <ContentHero
        breadcrumbs={BREADCRUMBS}
        eyebrow="Glossary"
        title={glossaryHub.title}
        answer={glossaryHub.answer}
        answerLabel="About this glossary"
      />

      <Section compact>
        <SectionHeading
          eyebrow={`${glossaryTerms.length} terms`}
          title="Terms A–Z"
          lede="Each entry opens with a neutral definition, notes how OrionAlerts handles it where relevant, and answers common questions."
          compact
        />
        <LinkCardGrid
          headingLevel="h2"
          items={sorted.map((term) => ({
            href: `${GLOSSARY_PATH}/${term.slug}`,
            title: term.term,
            description: term.shortDefinition,
          }))}
        />
      </Section>

      <Section compact className="pt-0">
        <div className="panel-sm p-6 sm:p-8">
          <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Keep exploring</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-strong">
            See these terms applied in practice: the AI detections OrionAlerts runs, side-by-side
            comparisons of deployment approaches, and the platform they run on.
          </p>
          <div className="mt-5">
            <LinkPills
              items={[
                { href: "/use-cases", label: "AI video analytics use cases" },
                { href: "/compare", label: "Comparisons" },
                { href: "/nebula-os", label: "Nebula OS" },
                { href: "/solutions", label: "Solutions" },
                { href: "/faqs", label: "FAQs" },
                { href: "/docs", label: "Documentation" },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Talk to a solutions engineer"
          lede="Walk through your cameras, sites and the detections you need, and see how OrionAlerts would fit."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Contact Sales"
        />
      </Section>
    </PageShell>
  );
}
