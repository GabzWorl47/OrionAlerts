import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { ComparisonTable } from "@/components/content/ComparisonTable";
import { FaqSection } from "@/components/content/FaqSection";
import { LinkPills } from "@/components/content/LinkCards";
import { comparisons, COMPARE_PATH, getComparison } from "@/lib/comparisons";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return comparisons.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) return {};
  return buildPageMetadata({
    title: comparison.seoTitle,
    description: comparison.seoDescription,
    pathname: `${COMPARE_PATH}/${comparison.slug}`,
  });
}

export default async function ComparisonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const comparison = getComparison(slug);
  if (!comparison) notFound();

  const path = `${COMPARE_PATH}/${comparison.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Compare", path: COMPARE_PATH },
    { name: comparison.title, path },
  ];
  const others = comparisons.filter((c) => c.slug !== comparison.slug);

  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={faqPageJsonLd(comparison.faqs)} />

      <ContentHero
        breadcrumbs={breadcrumbs}
        eyebrow="Comparison"
        title={comparison.h1}
        answer={comparison.answer}
      />

      <Section compact id="comparison-table">
        <SectionHeading
          eyebrow="Side by side"
          title={`${comparison.labelA} vs ${comparison.labelB}`}
          compact
        />
        <ComparisonTable
          caption={`${comparison.labelA} compared with ${comparison.labelB} across ${comparison.rows.length} dimensions.`}
          labelA={comparison.labelA}
          labelB={comparison.labelB}
          rows={comparison.rows}
          highlight={comparison.highlight}
        />
      </Section>

      <Section compact className="pt-0">
        <SectionHeading eyebrow="Decision guide" title="Which should you choose?" compact />
        <div
          className={`grid gap-4 ${comparison.choose.length === 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}
        >
          {comparison.choose.map((choice) => (
            <div key={choice.option} className="panel-sm p-6">
              <h3 className="text-[1.0625rem] font-semibold leading-snug tracking-[-0.015em] text-text">
                {choice.option}…
              </h3>
              <ul className="mt-4 space-y-2.5">
                {choice.when.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-muted-strong">
                    <Check aria-hidden size={16} className="mt-0.5 shrink-0 text-blue" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section compact className="pt-0">
        <div className="rounded-[24px] border border-cyan/40 bg-cyan/10 p-6 sm:p-8">
          <p className="eyebrow mb-2 text-blue">OrionAlerts</p>
          <h2 className="text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
            Where OrionAlerts fits
          </h2>
          <div className="mt-4 max-w-3xl space-y-3 text-[1rem] leading-[1.72] text-text">
            {comparison.whereOrionAlertsFits.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-6">
            <LinkPills items={comparison.related} />
          </div>
        </div>
      </Section>

      <FaqSection heading={`${comparison.title}: common questions`} faqs={comparison.faqs} />

      <Section compact className="pt-0">
        <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Other comparisons</h2>
        <div className="mt-3">
          <LinkPills
            items={[
              ...others.map((c) => ({ href: `${COMPARE_PATH}/${c.slug}`, label: c.title })),
              { href: COMPARE_PATH, label: "All comparisons" },
            ]}
          />
        </div>
      </Section>

      <Section compact className="pt-0">
        <CtaBand
          title="Talk through your architecture"
          lede="We will look at your sites, cameras and connectivity and show how Nebula OS would be deployed."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/nebula-os"
          secondaryLabel="Explore Nebula OS"
        />
      </Section>
    </PageShell>
  );
}
