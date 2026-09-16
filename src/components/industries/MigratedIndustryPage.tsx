"use client";

import Image from "next/image";
import Link from "next/link";
import { useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Compass,
  Eye,
  Gauge,
  Lightbulb,
  Network,
  ScanEye,
  ShieldCheck,
  Workflow as WorkflowIcon,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui";
import { Reveal, Stagger } from "@/components/Reveal";
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
import { serializeJsonLd } from "@/lib/jsonld";
import type { CapabilityStatus, IndustryPageRecord } from "@/lib/industries/types";
import { getIndustry, getSolution } from "@/lib/site";

type Props = {
  page: IndustryPageRecord;
};

const ease = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const hoverLift = {
  y: -8,
  transition: { type: "spring" as const, stiffness: 320, damping: 24 },
};

/**
 * Avoid SSR/client tree mismatches from useReducedMotion, matching Reveal.tsx.
 * useSyncExternalStore lets React itself resolve the server/client snapshot
 * mismatch during hydration, so no effect + setState is needed to flip this
 * flag after mount.
 */
const subscribeToNothing = () => () => {};
function useMotionReady() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
}

/** Fade/rise card used inside <Stagger> grids; opts into an optional hover lift. */
function AnimatedCard({
  as = "div",
  className,
  style,
  hover = true,
  children,
}: {
  as?: "div" | "li";
  className?: string;
  style?: CSSProperties;
  hover?: boolean;
  children: ReactNode;
}) {
  const props = {
    variants: cardVariants,
    whileHover: hover ? hoverLift : undefined,
    className,
    style,
    children,
  };
  return as === "li" ? <motion.li {...props} /> : <motion.div {...props} />;
}

/** A <ul>/<ol> stagger container — for grids of genuine list items (Stagger itself renders a div). */
function StaggerList({
  as = "ul",
  className,
  delay = 0.08,
  children,
}: {
  as?: "ul" | "ol";
  className?: string;
  delay?: number;
  children: ReactNode;
}) {
  const ready = useMotionReady();
  const reduce = useReducedMotion();
  const animate = ready && !reduce;
  const props = {
    className,
    initial: animate ? "hidden" : false,
    whileInView: animate ? "show" : undefined,
    viewport: animate ? { once: true, amount: 0.2, margin: "-8% 0px" } : undefined,
    variants: { hidden: {}, show: { transition: { staggerChildren: animate ? delay : 0 } } },
    children,
  };
  return as === "ol" ? <motion.ol {...props} /> : <motion.ul {...props} />;
}

const capabilityStatusCopy: Record<CapabilityStatus, { label: string; className: string }> = {
  "owner-confirmed": {
    label: "Core capability",
    className: "bg-[rgba(24,166,122,0.12)] text-[#0f7a5a] ring-1 ring-inset ring-[rgba(24,166,122,0.32)]",
  },
  "baseline-claim": {
    label: "Established capability",
    className:
      "bg-[rgba(8,121,209,0.1)] text-[var(--industry-accent-strong)] ring-1 ring-inset ring-[rgba(8,121,209,0.25)]",
  },
  "pilot-dependent": {
    label: "Pilot-dependent",
    className: "bg-[rgba(234,163,52,0.16)] text-[#8a5c10] ring-1 ring-inset ring-[rgba(234,163,52,0.35)]",
  },
  "integration-dependent": {
    label: "Requires integration",
    className:
      "bg-[rgba(82,98,122,0.1)] text-[var(--industry-muted)] ring-1 ring-inset ring-[rgba(82,98,122,0.28)]",
  },
  specialist: {
    label: "Specialist scope",
    className: "bg-[rgba(82,98,122,0.1)] text-[var(--industry-muted)] ring-1 ring-inset ring-[rgba(82,98,122,0.28)]",
  },
};

/** Small section eyebrow with an icon, animated in on scroll. */
function SectionKicker({
  icon: Icon,
  children,
  tone = "light",
}: {
  icon: LucideIcon;
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <Reveal>
      <p
        className="industry-kicker inline-flex items-center gap-2"
        style={{ color: tone === "dark" ? "var(--industry-accent)" : undefined }}
      >
        <Icon size={14} strokeWidth={2.4} aria-hidden />
        {children}
      </p>
    </Reveal>
  );
}

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
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(pageJsonLd) }}
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
        <Stagger className="industry-shell industry-hero__copy" delay={0.1}>
          <motion.p
            variants={cardVariants}
            className="industry-kicker inline-flex items-center gap-2"
            style={{ color: "var(--industry-accent)" }}
          >
            <span
              className="pulse-dot inline-block h-[7px] w-[7px] rounded-full bg-[var(--industry-accent)]"
              aria-hidden
            />
            {page.hero.eyebrow}
          </motion.p>
          <motion.h1 variants={cardVariants} className="industry-h1">
            {page.hero.h1}
          </motion.h1>
          <motion.p
            variants={cardVariants}
            className="industry-prose"
            style={{ color: "rgba(255,255,255,0.82)" }}
          >
            {page.hero.lede}
          </motion.p>
          {page.hero.media.demonstrationLabel ? (
            <motion.p variants={cardVariants} className="mt-3 text-[12px] font-medium text-white/55">
              {page.hero.media.demonstrationLabel}
            </motion.p>
          ) : null}
          <motion.div variants={cardVariants} className="industry-hero__actions">
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
              className="group inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              Jump to use cases
              <ArrowRight
                size={15}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </motion.div>
        </Stagger>
      </section>

      <section className="industry-section">
        <div className="industry-shell">
          <Reveal>
            <h2 className="industry-h2">{page.context.heading}</h2>
          </Reveal>
          <Stagger className="mt-2">
            {page.context.paragraphs.map((paragraph) => (
              <motion.p
                key={paragraph.slice(0, 40)}
                variants={cardVariants}
                className="industry-prose mt-4"
              >
                {paragraph}
              </motion.p>
            ))}
            <motion.p variants={cardVariants} className="industry-prose mt-4">
              {industrySharedCopy.defaultPositioning}
            </motion.p>
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.mapped}
        className="industry-section industry-section--dark relative overflow-hidden scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-32 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(25,184,255,0.22),transparent_70%)] blur-3xl"
        />
        <div className="industry-shell relative">
          <SectionKicker icon={Network} tone="dark">
            Building intelligence
          </SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2" style={{ color: "#fff" }}>
              {industrySectionLabels.mapped}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mt-2">{page.locationContext.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="industry-prose mt-3">{industrySharedCopy.buildingTreeIntro}</p>
          </Reveal>

          <Stagger className="industry-tree mt-8 relative" delay={0.07}>
            <span className="industry-tree__flow" aria-hidden />
            {page.locationContext.hierarchyExample.map((level) => (
              <motion.div key={level.label} variants={cardVariants} className="industry-tree__level">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.8)]">
                  {level.label}
                </p>
                <p className="mt-3 text-lg font-semibold text-white">{level.example}</p>
              </motion.div>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-4 text-sm leading-relaxed text-[#b9c7d9]">
              {page.locationContext.cameraMappingCopy}
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id={industrySectionAnchors.copilot}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <Reveal direction="scale">
            <VisionCopilotPanel page={page} />
          </Reveal>
        </div>
      </section>

      <section
        id={industrySectionAnchors.useCases}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <SectionKicker icon={ScanEye}>Five ways teams use this</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{industrySectionLabels.useCases}</h2>
          </Reveal>
          <Stagger className="industry-grid mt-8" delay={0.08}>
            {page.useCases.map((useCase, index) => {
              const status = capabilityStatusCopy[useCase.capabilityStatus];
              return (
                <AnimatedCard key={useCase.id} className="industry-card" style={{ gridColumn: "span 6" }}>
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        color: "var(--industry-accent-strong)",
                        background: "rgba(8,121,209,0.08)",
                        border: "1px solid var(--industry-line)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ${status.className}`}
                    >
                      {status.label}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[clamp(1.1rem,1.8vw,1.35rem)] font-semibold tracking-[-0.02em] text-[var(--industry-text)]">
                    {useCase.title}
                  </h3>
                  <p className="industry-prose mt-2.5">{useCase.body}</p>
                  {useCase.constraints ? (
                    <p className="mt-3 text-[12px] leading-relaxed text-[var(--industry-muted)]">
                      <span className="font-semibold">Scoping note:</span> {useCase.constraints}
                    </p>
                  ) : null}
                </AnimatedCard>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.workflow}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <SectionKicker icon={WorkflowIcon}>Illustrative decision story</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{page.workflow.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mt-3">{page.workflow.scenario}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="industry-prose mt-3">{industrySharedCopy.workflowExplanation}</p>
          </Reveal>
          <Stagger className="mt-8 flex flex-wrap items-center gap-2" delay={0.06}>
            {page.workflow.steps.map((step, index) => (
              <motion.div key={step.label} variants={cardVariants} className="flex items-center gap-2">
                <span className="inline-flex min-h-11 items-center gap-2 rounded-[12px] border border-[var(--industry-line)] bg-white px-3.5 py-2 text-sm font-semibold">
                  <span className="text-[var(--industry-accent-strong)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.label}
                </span>
                {index < page.workflow.steps.length - 1 ? (
                  <ArrowRight
                    size={16}
                    strokeWidth={2.4}
                    className="shrink-0 text-[var(--industry-muted)]"
                    aria-hidden
                  />
                ) : null}
              </motion.div>
            ))}
          </Stagger>
          <Stagger className="industry-grid mt-8" delay={0.1}>
            <AnimatedCard className="industry-card">
              <p className="industry-kicker inline-flex items-center gap-2">
                <Eye size={14} strokeWidth={2.4} aria-hidden />
                Observed
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.observedPattern}
              </p>
            </AnimatedCard>
            <AnimatedCard className="industry-card">
              <p className="industry-kicker inline-flex items-center gap-2">
                <Lightbulb size={14} strokeWidth={2.4} aria-hidden />
                Recommendation
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.recommendation}
              </p>
            </AnimatedCard>
            <AnimatedCard className="industry-card">
              <p className="industry-kicker inline-flex items-center gap-2">
                <ArrowRight size={14} strokeWidth={2.4} aria-hidden />
                Follow up
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--industry-muted)]">
                {page.sceneIntelligence.followUpPrompt}
              </p>
            </AnimatedCard>
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.scores}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <SectionKicker icon={Gauge}>Operational scores</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{page.scorecards.heading}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mt-3">{page.scorecards.body}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="industry-prose mt-3">{industrySharedCopy.scoreMethodologyNote}</p>
          </Reveal>
          <Stagger className="industry-grid mt-8" delay={0.08}>
            {page.scorecards.dimensions.map((dimension) => (
              <AnimatedCard key={dimension.name} className="industry-score">
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
                <div
                  className="industry-score__bar industry-score__bar--pending"
                  style={{ ["--score" as string]: "0%" }}
                  role="img"
                  aria-label="Not yet assessed for this site"
                >
                  <span />
                </div>
              </AnimatedCard>
            ))}
          </Stagger>
          <Reveal delay={0.1}>
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
          </Reveal>
        </div>
      </section>

      <section
        id={industrySectionAnchors.deployment}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell industry-grid">
          <div className="industry-card--wide" style={{ gridColumn: "span 8" }}>
            <SectionKicker icon={ClipboardCheck}>Deployment</SectionKicker>
            <Reveal delay={0.05}>
              <h2 className="industry-h2 mt-2">{page.deployment.heading}</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="industry-prose mt-3">{page.deployment.body}</p>
            </Reveal>
          </div>
          <StaggerList className="industry-card space-y-3">
            {page.deployment.requiredInputs.map((item) => (
              <motion.li
                key={item}
                variants={cardVariants}
                className="flex gap-2.5 text-sm leading-relaxed text-[var(--industry-muted)]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--industry-accent-strong)]" />
                {item}
              </motion.li>
            ))}
          </StaggerList>
        </div>
      </section>

      <section
        id={industrySectionAnchors.standards}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell max-w-3xl">
          <SectionKicker icon={ShieldCheck}>Standards boundary</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{industrySectionLabels.standards}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mt-3">{page.standards.publicCopy}</p>
          </Reveal>
          <StaggerList className="mt-6 space-y-4">
            {page.standards.frameworkIds.map((id) => {
              const fw = getFramework(id);
              if (!fw) return null;
              return (
                <AnimatedCard key={fw.id} as="li" className="industry-card" style={{ gridColumn: "auto" }}>
                  <p className="font-semibold text-[var(--industry-text)]">{fw.name}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-[var(--industry-muted)]">
                    {fw.boundary}
                  </p>
                  {fw.sourceUrl ? (
                    <a
                      href={fw.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[var(--industry-accent-strong)] hover:underline"
                    >
                      Authoritative source
                      <ArrowUpRight size={14} strokeWidth={2.4} aria-hidden />
                    </a>
                  ) : null}
                </AnimatedCard>
              );
            })}
          </StaggerList>
        </div>
      </section>

      <section
        id={industrySectionAnchors.pilotMetrics}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <SectionKicker icon={Compass}>How to evaluate a pilot</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{industrySectionLabels.pilotMetrics}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mt-3">{industrySharedCopy.measurementNote}</p>
          </Reveal>
          <Stagger className="industry-grid mt-8" delay={0.07}>
            {page.metrics.map((metric) => (
              <AnimatedCard key={metric.label} className="industry-card">
                <h3 className="font-display text-[1.05rem] font-semibold text-[var(--industry-text)]">
                  {metric.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--industry-muted)]">
                  {metric.definition}
                </p>
                <p className="mt-3 text-[12px] font-medium text-[var(--industry-muted)]">
                  Source of truth: {metric.sourceOfTruth}
                </p>
              </AnimatedCard>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.solutions}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <Reveal>
            <h2 className="industry-h2">{industrySectionLabels.solutions}</h2>
          </Reveal>
          <Stagger className="industry-grid mt-8" delay={0.08}>
            {page.solutions.map((item) => {
              const solution = getSolution(item.solutionSlug);
              if (!solution) return null;
              return (
                <AnimatedCard key={item.solutionSlug} className="industry-card">
                  <Link href={`/solutions/${solution.slug}`} className="group block">
                    {solution.image ? (
                      <div className="relative -mx-1 -mt-1 mb-4 aspect-[16/9] overflow-hidden rounded-[14px]">
                        <Image
                          src={solution.image}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 90vw, 30vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                          aria-hidden
                        />
                      </div>
                    ) : null}
                    <p className="industry-kicker">
                      {solution.slug === "ai-analytics" ? "AI Vision + Vision Copilot" : "Solution"}
                    </p>
                    <h3 className="mt-2 flex items-center gap-1.5 font-display text-lg font-semibold text-[var(--industry-text)]">
                      {solution.shortName}
                      <ArrowUpRight
                        size={16}
                        strokeWidth={2.4}
                        className="text-[var(--industry-accent-strong)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        aria-hidden
                      />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--industry-muted)]">{item.body}</p>
                  </Link>
                </AnimatedCard>
              );
            })}
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.faqs}
        className="industry-section scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell max-w-3xl">
          <SectionKicker icon={CircleHelp}>Common questions</SectionKicker>
          <Reveal delay={0.05}>
            <h2 className="industry-h2 mt-2">{industrySectionLabels.faqs}</h2>
          </Reveal>
          <Stagger className="industry-faq mt-6" delay={0.07}>
            {page.faqs.map((faq) => (
              <motion.div key={faq.question} variants={cardVariants} className="industry-faq__item">
                <h3 className="font-display text-[1.05rem] font-semibold text-[var(--industry-text)]">
                  {faq.question}
                </h3>
                <p className="industry-prose mt-2">{faq.answer}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      <section
        id={industrySectionAnchors.related}
        className="industry-section industry-section--tint scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div className="industry-shell">
          <Reveal>
            <h2 className="industry-h2">{industrySectionLabels.related}</h2>
          </Reveal>
          <Stagger className="industry-grid mt-8" delay={0.08}>
            {related.map((industry) =>
              industry ? (
                <AnimatedCard key={industry.slug} className="industry-card">
                  <Link href={`/industries/${industry.slug}`} className="group flex items-start gap-3.5">
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[12px]">
                      <Image
                        src={industry.image}
                        alt=""
                        fill
                        sizes="56px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        aria-hidden
                      />
                    </div>
                    <div>
                      <p className="flex items-center gap-1 font-display text-base font-semibold text-[var(--industry-text)]">
                        {industry.cardLabel ?? industry.name}
                        <ChevronRight
                          size={15}
                          strokeWidth={2.4}
                          className="text-[var(--industry-accent-strong)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                          aria-hidden
                        />
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-[var(--industry-muted)]">
                        {industry.tagline ?? industry.summary}
                      </p>
                    </div>
                  </Link>
                </AnimatedCard>
              ) : null,
            )}
          </Stagger>
          <Reveal delay={0.1}>
            <Link
              href="/industries"
              className="group mt-6 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-[var(--industry-accent-strong)] hover:underline"
            >
              View all industries
              <ArrowRight
                size={15}
                strokeWidth={2.4}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden
              />
            </Link>
          </Reveal>
        </div>
      </section>

      <section
        id={industrySectionAnchors.finalCta}
        className="industry-section industry-section--dark relative overflow-hidden scroll-mt-[calc(var(--header-h)+1rem)]"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(25,184,255,0.18),transparent_70%)] blur-3xl"
        />
        <div className="industry-shell relative max-w-3xl text-center">
          <Reveal direction="scale">
            <h2 className="industry-h2 mx-auto" style={{ color: "#fff", maxWidth: "20ch" }}>
              {page.finalCta.heading}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="industry-prose mx-auto mt-4">{page.finalCta.body}</p>
          </Reveal>
          <Reveal delay={0.18}>
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
          </Reveal>
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
