"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button, CtaBand, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { getSolution } from "@/lib/site";
import type { IndustryPageData } from "@/lib/industry-pages";
import type { Industry } from "@/lib/site";

type Props = {
  industry: IndustryPageData;
  related: Industry[];
};

export function IndustryPageSections({ industry, related }: Props) {
  return (
    <>
      <StatsStrip stats={industry.stats} contextNote={industry.contextNote} />
      <UseCasesSection useCases={industry.useCases} industryName={industry.name} />
      <ImpactSection challenges={industry.challenges} outcomes={industry.outcomes} />
      <HowItWorks steps={industry.howItWorks} />
      <SolutionsSection
        relatedSolutions={industry.relatedSolutions}
        blurbs={industry.solutionBlurbs}
        industryName={industry.name}
      />
      <QuoteSection quote={industry.quote} />
      <FaqSection faqs={industry.faqs} />
      <RelatedIndustries related={related} />
      <Section>
        <CtaBand
          title={`See OrionAlerts for ${industry.name}`}
          lede="Book a demo tailored to your sector workflows, staffing model, and camera estate."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Connect With Us"
        />
      </Section>
    </>
  );
}

function StatsStrip({
  stats,
  contextNote,
}: {
  stats: IndustryPageData["stats"];
  contextNote?: string;
}) {
  return (
    <Section className="pb-10 pt-8 md:pb-14 md:pt-10">
      <Reveal>
        {contextNote ? (
          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-muted">
            {contextNote}
          </p>
        ) : null}
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StaggerItem key={stat.label}>
            <div className="rounded-[20px] border border-line bg-surface px-6 py-8 text-center transition hover:border-blue/30">
              <p className="display text-3xl normal-case text-steel-gradient md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-medium text-muted">{stat.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function UseCasesSection({
  useCases,
  industryName,
}: {
  useCases: IndustryPageData["useCases"];
  industryName: string;
}) {
  return (
    <Section className="bg-surface">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">Use cases</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            Where OrionAlerts helps in {industryName}
          </h2>
          <p className="mt-4 description">
            Practical scenarios your security and operations teams face — mapped to the OrionAlerts
            capability that solves them.
          </p>
        </div>
      </Reveal>
      <Stagger className="grid gap-4 md:grid-cols-2">
        {useCases.map((useCase, index) => (
          <StaggerItem key={useCase.title}>
            <article className="group h-full rounded-[20px] border border-line bg-bg p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/35 hover:shadow-[0_16px_40px_-24px_rgba(43,140,255,0.35)]">
              <p className="font-display text-sm text-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-xl normal-case text-text">{useCase.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{useCase.description}</p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-blue/80">
                {useCase.capability}
              </p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function ImpactSection({
  challenges,
  outcomes,
}: {
  challenges: string[];
  outcomes: string[];
}) {
  const pairs = challenges.map((challenge, index) => ({
    challenge,
    outcome: outcomes[index] ?? outcomes[outcomes.length - 1],
  }));

  return (
    <Section>
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">Impact</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            From pressure points to outcomes
          </h2>
          <p className="mt-4 description">
            Each challenge pairs with the operational result OrionAlerts is built to deliver.
          </p>
        </div>
      </Reveal>
      <Stagger className="space-y-4">
        {pairs.map((pair, index) => (
          <StaggerItem key={pair.challenge}>
            <div className="grid overflow-hidden rounded-[20px] border border-line md:grid-cols-2">
              <div className="bg-surface px-5 py-5 md:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-alert">
                  Challenge {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-strong md:text-base">
                  {pair.challenge}
                </p>
              </div>
              <div className="border-t border-line bg-bg px-5 py-5 md:border-l md:border-t-0 md:px-6">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-blue">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-text md:text-base">
                  {pair.outcome}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function HowItWorks({ steps }: { steps: [string, string, string] }) {
  const labels = ["Deploy", "Detect", "Respond"];

  return (
    <Section className="bg-surface">
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">How it works</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            Three steps to sector-ready operations
          </h2>
        </div>
      </Reveal>
      <Stagger className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <StaggerItem key={labels[index]}>
            <div className="h-full rounded-[20px] border border-line bg-bg p-6">
              <p className="font-display text-sm text-cyan">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="display mt-3 text-2xl normal-case text-text">{labels[index]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

function SolutionsSection({
  relatedSolutions,
  blurbs,
  industryName,
}: {
  relatedSolutions: string[];
  blurbs: Record<string, string>;
  industryName: string;
}) {
  return (
    <Section>
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">Recommended stack</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            OrionAlerts for {industryName}
          </h2>
          <p className="mt-4 description">
            A focused solution mix for this sector — each with a clear reason it belongs in your
            stack.
          </p>
        </div>
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2">
        {relatedSolutions.map((slug) => {
          const solution = getSolution(slug);
          if (!solution) return null;
          return (
            <StaggerItem key={slug}>
              <Link
                href={`/solutions/${slug}`}
                className="group flex h-full flex-col rounded-[20px] border border-line bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/35"
              >
                <h3 className="display text-xl normal-case text-text group-hover:text-blue">
                  {solution.shortName}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {blurbs[slug] ?? solution.summary}
                </p>
                <span className="mt-5 text-sm font-semibold text-blue">Explore solution →</span>
              </Link>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}

function QuoteSection({ quote }: { quote: IndustryPageData["quote"] }) {
  return (
    <Section className="bg-surface">
      <Reveal direction="scale">
        <blockquote className="relative mx-auto max-w-3xl overflow-hidden rounded-[24px] border border-line bg-bg px-8 py-10 md:px-12 md:py-12">
          <div className="pointer-events-none absolute -left-4 top-4 font-display text-7xl text-blue/15">
            “
          </div>
          <p className="relative font-display text-xl leading-snug text-text md:text-2xl">
            {quote.text}
          </p>
          <footer className="relative mt-6 text-sm font-medium text-muted">
            — {quote.attribution}
          </footer>
        </blockquote>
      </Reveal>
    </Section>
  );
}

function FaqSection({ faqs }: { faqs: IndustryPageData["faqs"] }) {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <Section>
      <Reveal>
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow mb-3">FAQ</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            Common questions
          </h2>
          <p className="mt-4 description">
            Straight answers for teams evaluating OrionAlerts for their sector.
          </p>
        </div>
      </Reveal>
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => {
          const isOpen = open === index;
          return (
            <div
              key={faq.question}
              className="overflow-hidden rounded-[16px] border border-line bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-text">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-muted transition ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : { duration: 0.28, ease: [0.22, 1, 0.36, 1] }
                }
                className="overflow-hidden"
              >
                <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-muted">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function RelatedIndustries({ related }: { related: Industry[] }) {
  return (
    <Section className="bg-surface pt-10 md:pt-14">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow mb-3">Explore more</p>
          <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
            Other industries
          </h2>
        </div>
        <Button href="/industries" variant="outline">
          View all industries
        </Button>
      </div>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {related.map((item) => (
          <StaggerItem key={item.slug}>
            <Link
              href={`/industries/${item.slug}`}
              className="group block overflow-hidden rounded-[18px] border border-line bg-bg transition hover:border-blue/35"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute bottom-3 left-3 font-display text-base font-semibold text-white">
                  {item.cardLabel ?? item.name}
                </span>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
