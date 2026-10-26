import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section } from "@/components/ui";
import { ContentHero } from "@/components/content/ContentHero";
import { FaqSection } from "@/components/content/FaqSection";
import { LinkCardGrid, LinkPills } from "@/components/content/LinkCards";
import { definedTermJsonLd } from "@/components/content/structured-data";
import { getGlossaryTerm, glossaryTerms, GLOSSARY_PATH } from "@/lib/glossary";
import { getUseCase } from "@/lib/use-cases";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";
import { solutionLabel } from "@/components/content/link-labels";

export const dynamicParams = false;

export function generateStaticParams() {
  return glossaryTerms.map((term) => ({ slug: term.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) return {};
  return buildPageMetadata({
    title: term.seoTitle,
    description: term.seoDescription,
    pathname: `${GLOSSARY_PATH}/${term.slug}`,
  });
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const term = getGlossaryTerm(slug);
  if (!term) notFound();

  const path = `${GLOSSARY_PATH}/${term.slug}`;
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Glossary", path: GLOSSARY_PATH },
    { name: term.term, path },
  ];
  const related = term.related
    .map((s) => getGlossaryTerm(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));
  const useCases = (term.useCases ?? [])
    .map((s) => getUseCase(s))
    .filter((u): u is NonNullable<typeof u> => Boolean(u));

  return (
    <PageShell>
      <JsonLdScript data={breadcrumbJsonLd(breadcrumbs)} />
      <JsonLdScript data={definedTermJsonLd(term)} />
      <JsonLdScript data={faqPageJsonLd(term.faqs)} />

      <ContentHero
        breadcrumbs={breadcrumbs}
        eyebrow="Glossary"
        title={term.h1}
        answer={term.definition}
        answerLabel="Definition"
      />

      <Section compact narrow>
        {term.details?.length ? (
          <div>
            <h2 className="text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
              {term.term} explained
            </h2>
            <div className="mt-4 space-y-4 text-[1rem] leading-[1.72] text-muted-strong">
              {term.details.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        ) : null}

        {term.howOrionAlertsHandles ? (
          <div className="mt-10 rounded-[24px] border border-cyan/40 bg-cyan/10 p-6 sm:p-8">
            <p className="eyebrow mb-2 text-blue">OrionAlerts</p>
            <h2 className="text-[clamp(1.25rem,2.4vw,1.6rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
              How OrionAlerts handles it
            </h2>
            <p className="mt-3 text-[1rem] leading-[1.72] text-text">{term.howOrionAlertsHandles}</p>
            {term.solution ? (
              <Link
                href={term.solution}
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-blue underline decoration-cyan/60 underline-offset-4 transition hover:decoration-blue"
              >
                {solutionLabel(term.solution)}
                <ArrowRight aria-hidden size={14} />
              </Link>
            ) : null}
          </div>
        ) : null}

        {useCases.length ? (
          <div className="mt-10">
            <h2 className="text-lg font-semibold tracking-[-0.015em] text-text">Related use cases</h2>
            <div className="mt-3">
              <LinkPills
                items={useCases.map((u) => ({ href: `/use-cases/${u.slug}`, label: u.title }))}
              />
            </div>
          </div>
        ) : null}
      </Section>

      <FaqSection heading={`${term.term}: common questions`} faqs={term.faqs} />

      {related.length ? (
        <Section compact className="pt-0">
          <h2 className="mb-5 text-[clamp(1.35rem,2.6vw,1.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
            Related terms
          </h2>
          <LinkCardGrid
            items={related.map((t) => ({
              href: `${GLOSSARY_PATH}/${t.slug}`,
              title: t.term,
              description: t.shortDefinition,
            }))}
          />
          <p className="mt-6 text-sm text-muted">
            <Link
              href={GLOSSARY_PATH}
              className="inline-flex items-center gap-1.5 font-semibold text-text underline decoration-cyan/60 underline-offset-4 transition hover:text-blue"
            >
              Back to the full glossary
              <ArrowRight aria-hidden size={14} />
            </Link>
          </p>
        </Section>
      ) : null}

      <Section compact className="pt-0">
        <CtaBand
          title="See it on your own cameras"
          lede="Book a walkthrough of OrionAlerts on Nebula OS, from camera connection to alerts on the dashboard, mobile app and email."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/nebula-os"
          secondaryLabel="Explore Nebula OS"
        />
      </Section>
    </PageShell>
  );
}
