import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Button } from "@/components/ui";
import { IndustryBreadcrumbs } from "@/components/industries/IndustryBreadcrumbs";
import { VisionCopilotPanel } from "@/components/industries/VisionCopilotPanel";
import {
  industrySectionAnchors,
  industrySectionLabels,
  industrySharedCopy,
  industrySharedCtas,
} from "@/lib/industries/shared";
import { getFramework } from "@/lib/industries/frameworks";
import { absoluteUrl } from "@/lib/industries/site-origin";
import type { IndustryPageRecord } from "@/lib/industries/types";
import { getIndustry, getSolution } from "@/lib/site";

type Props = {
  page: IndustryPageRecord;
};

export function MigratedIndustryPage({ page }: Props) {
  const related = page.relatedIndustrySlugs
    .map((slug) => getIndustry(slug))
    .filter(Boolean);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/") ?? "/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: absoluteUrl("/industries") ?? "/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: page.name,
        item: absoluteUrl(page.seo.canonicalPath) ?? page.seo.canonicalPath,
      },
    ],
  };

  const pageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.seo.title,
    description: page.seo.description,
    url: absoluteUrl(page.seo.canonicalPath) ?? page.seo.canonicalPath,
  };

  const heroImage =
    page.hero.media.kind === "image" ? page.hero.media.src : page.hero.media.poster ?? "";

  return (
    <main className="industry-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }}
      />

      <IndustryBreadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: page.name },
        ]}
      />

      <section
        className="industry-hero"
        style={
          heroImage
            ? ({ ["--industry-hero-image"]: `url("${heroImage}")` } as CSSProperties)
            : undefined
        }
      >
        <div className="industry-shell industry-hero__copy">
          <p className="industry-kicker" style={{ color: "var(--industry-accent)" }}>
            {page.hero.eyebrow}
          </p>
          <h1 className="industry-h1">{page.hero.h1}</h1>
          <p className="industry-prose" style={{ color: "rgba(255,255,255,0.82)" }}>
            {page.hero.lede}
          </p>
          {page.hero.media.demonstrationLabel ? (
            <p className="mt-3 text-[12px] font-medium text-white/55">
              {page.hero.media.demonstrationLabel}
            </p>
          ) : null}
          <div className="industry-hero__actions">
            <Button href={page.hero.primaryCta.href}>{page.hero.primaryCta.label}</Button>
            <Button
              href={page.hero.secondaryCta.href}
              variant="outline"
              className="!border-white/35 !bg-transparent !text-white hover:!bg-white/10"
            >
              {page.hero.secondaryCta.label}
            </Button>
            <Link
              href={`#${industrySectionAnchors.useCases}`}
              className="inline-flex min-h-11 items-center text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Jump to use cases
            </Link>
          </div>
        </div>
      </section>

      <section className="industry-section">
        <div className="industry-shell">
          <h2 className="industry-h2">{page.context.heading}</h2>
          {page.context.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="industry-prose mt-4">
              {paragraph}
            </p>
          ))}
          <p className="industry-prose mt-4">{industrySharedCopy.defaultPositioning}</p>
        </div>
      </section>

      <section
        id={industrySectionAnchors.mapped}
        className="industry-section industry-section--dark scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <p className="industry-kicker" style={{ color: "var(--industry-accent)" }}>
            Building intelligence
          </p>
          <h2 className="industry-h2" style={{ color: "#fff" }}>
            {industrySectionLabels.mapped}
          </h2>
          <p className="industry-prose mt-2">{page.locationContext.body}</p>
          <p className="industry-prose mt-3">{industrySharedCopy.buildingTreeIntro}</p>

          <div className="industry-tree mt-8">
            {page.locationContext.hierarchyExample.map((level) => (
              <div key={level.label} className="industry-tree__level">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.8)]">
                  {level.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{level.example}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-[#b9c7d9]">
            {page.locationContext.cameraMappingCopy}
          </p>
        </div>
      </section>

      <section
        id={industrySectionAnchors.copilot}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <VisionCopilotPanel page={page} />
        </div>
      </section>

      <section
        id={industrySectionAnchors.useCases}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <h2 className="industry-h2">{industrySectionLabels.useCases}</h2>
          <div className="mt-8 space-y-0">
            {page.useCases.map((useCase, index) => (
              <article
                key={useCase.id}
                className="grid gap-3 border-b border-[var(--industry-line)] py-7 first:pt-0 last:border-b-0 md:grid-cols-[5rem_1fr]"
              >
                <p className="industry-card__number">{String(index + 1).padStart(2, "0")}</p>
                <div>
                  <h3 className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-semibold tracking-[-0.02em] text-[var(--industry-text)]">
                    {useCase.title}
                  </h3>
                  <p className="industry-prose mt-2.5">{useCase.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.workflow}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <p className="industry-kicker">Illustrative decision story</p>
          <h2 className="industry-h2">{page.workflow.heading}</h2>
          <p className="industry-prose mt-3">{page.workflow.scenario}</p>
          <p className="industry-prose mt-3">{industrySharedCopy.workflowExplanation}</p>
          <ol className="mt-8 flex flex-wrap gap-2">
            {page.workflow.steps.map((step, index) => (
              <li
                key={step.label}
                className="inline-flex min-h-11 items-center gap-2 rounded-[12px] border border-[var(--industry-line)] bg-white px-3.5 py-2 text-sm font-semibold"
              >
                <span className="text-[var(--industry-accent-strong)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.label}
              </li>
            ))}
          </ol>
          <div className="industry-grid mt-8">
            <div className="industry-card">
              <p className="industry-kicker">Observed</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.observedPattern}
              </p>
            </div>
            <div className="industry-card">
              <p className="industry-kicker">Recommendation</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.recommendation}
              </p>
            </div>
            <div className="industry-card">
              <p className="industry-kicker">Follow up</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.followUpPrompt}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.scores}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <h2 className="industry-h2">{page.scorecards.heading}</h2>
          <p className="industry-prose mt-3">{page.scorecards.body}</p>
          <p className="industry-prose mt-3">{industrySharedCopy.scoreMethodologyNote}</p>
          <div className="industry-grid mt-8">
            {page.scorecards.dimensions.map((dimension) => (
              <article key={dimension.name} className="industry-score">
                <p className="industry-kicker">{dimension.family}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--industry-text)]">
                  {dimension.name}
                </h3>
                <p className="industry-score__value mt-4">Not assessed</p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.08em] text-[var(--industry-muted)]">
                  Proposed dimension · {page.scorecards.methodologyVersion}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                  {dimension.criterionSummary}
                </p>
                <div className="industry-score__bar" style={{ ["--score" as string]: "0%" }}>
                  <span />
                </div>
              </article>
            ))}
          </div>
          <div className="industry-card industry-card--wide mt-6" style={{ gridColumn: "1 / -1" }}>
            <p className="industry-kicker">Score presentation context</p>
            <dl className="mt-4 grid gap-3 text-sm text-[var(--industry-muted)] md:grid-cols-2">
              <div>
                <dt className="font-semibold text-[var(--industry-text)]">Period</dt>
                <dd>{page.scorePresentation.period}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--industry-text)]">Scope</dt>
                <dd>{page.scorePresentation.scope}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--industry-text)]">Coverage</dt>
                <dd>{page.scorePresentation.coverage}</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--industry-text)]">Evaluated checks</dt>
                <dd>{page.scorePresentation.evaluatedChecks}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.deployment}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell industry-grid">
          <div className="industry-card--wide" style={{ gridColumn: "span 8" }}>
            <h2 className="industry-h2">{page.deployment.heading}</h2>
            <p className="industry-prose mt-3">{page.deployment.body}</p>
          </div>
          <ul className="industry-card space-y-3">
            {page.deployment.requiredInputs.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-[var(--industry-muted)]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--industry-accent-strong)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        id={industrySectionAnchors.standards}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell max-w-3xl">
          <h2 className="industry-h2">{industrySectionLabels.standards}</h2>
          <p className="industry-prose mt-3">{page.standards.publicCopy}</p>
          <ul className="mt-6 space-y-4">
            {page.standards.frameworkIds.map((id) => {
              const fw = getFramework(id);
              if (!fw) return null;
              return (
                <li key={fw.id} className="industry-card" style={{ gridColumn: "auto" }}>
                  <p className="font-semibold text-[var(--industry-text)]">{fw.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--industry-muted)]">
                    {fw.boundary}
                  </p>
                  {fw.sourceUrl ? (
                    <a
                      href={fw.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-[var(--industry-accent-strong)] hover:underline"
                    >
                      Authoritative source
                    </a>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section
        id={industrySectionAnchors.pilotMetrics}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <h2 className="industry-h2">{industrySectionLabels.pilotMetrics}</h2>
          <p className="industry-prose mt-3">{industrySharedCopy.measurementNote}</p>
          <div className="industry-grid mt-8">
            {page.metrics.map((metric) => (
              <article key={metric.label} className="industry-card">
                <h3 className="font-display text-[1.05rem] font-semibold text-[var(--industry-text)]">
                  {metric.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--industry-muted)]">
                  {metric.definition}
                </p>
                <p className="mt-3 text-[12px] font-medium text-[var(--industry-muted)]">
                  Source of truth: {metric.sourceOfTruth}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.solutions}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <h2 className="industry-h2">{industrySectionLabels.solutions}</h2>
          <div className="industry-grid mt-8">
            {page.solutions.map((item) => {
              const solution = getSolution(item.solutionSlug);
              if (!solution) return null;
              return (
                <Link
                  key={item.solutionSlug}
                  href={`/solutions/${solution.slug}`}
                  className="industry-card transition hover:border-[rgba(8,121,209,0.35)]"
                >
                  <p className="industry-kicker">
                    {solution.slug === "ai-analytics" ? "AI Vision + Vision Copilot" : "Solution"}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold text-[var(--industry-text)]">
                    {solution.shortName}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--industry-muted)]">{item.body}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.faqs}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell max-w-3xl">
          <h2 className="industry-h2">{industrySectionLabels.faqs}</h2>
          <div className="industry-faq mt-6">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="industry-faq__item">
                <h3 className="font-display text-[1.05rem] font-semibold text-[var(--industry-text)]">
                  {faq.question}
                </h3>
                <p className="industry-prose mt-2">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id={industrySectionAnchors.related}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <h2 className="industry-h2">{industrySectionLabels.related}</h2>
          <div className="industry-grid mt-8">
            {related.map((industry) =>
              industry ? (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="industry-card transition hover:border-[rgba(8,121,209,0.35)]"
                >
                  <p className="font-display text-base font-semibold text-[var(--industry-text)]">
                    {industry.cardLabel ?? industry.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--industry-muted)]">
                    {industry.tagline ?? industry.summary}
                  </p>
                </Link>
              ) : null,
            )}
          </div>
          <Link
            href="/industries"
            className="mt-6 inline-flex min-h-11 items-center text-sm font-semibold text-[var(--industry-accent-strong)] hover:underline"
          >
            View all industries
          </Link>
        </div>
      </section>

      <section
        id={industrySectionAnchors.finalCta}
        className="industry-section industry-section--dark scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell max-w-3xl text-center">
          <h2 className="industry-h2 mx-auto" style={{ color: "#fff", maxWidth: "20ch" }}>
            {page.finalCta.heading}
          </h2>
          <p className="industry-prose mx-auto mt-4">{page.finalCta.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href={industrySharedCtas.primary.href}>{industrySharedCtas.primary.label}</Button>
            <Button
              href={industrySharedCtas.secondaryFinal.href}
              variant="outline"
              className="!border-white/35 !bg-transparent !text-white hover:!bg-white/10"
            >
              {industrySharedCtas.secondaryFinal.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Keep decorative hero image available to crawlers/accessibility trees when CSS bg is used */}
      {page.hero.media.kind === "image" ? (
        <Image
          src={page.hero.media.src}
          alt={page.hero.media.alt}
          width={1600}
          height={900}
          className="sr-only"
          priority
        />
      ) : null}
    </main>
  );
}
