"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Cpu,
  Eye,
  Radar,
  Search,
  Shield,
  Sparkles,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button, CtaBand, Section } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { getSolution } from "@/lib/site";
import type { IndustryPageData } from "@/lib/industry-pages";
import type { Industry } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const solutionIcons: Record<string, typeof Shield> = {
  "ai-analytics": Sparkles,
  vms: Radar,
  "health-monitoring": Cpu,
  "smart-search": Search,
  "asset-tracking": Shield,
  "amc-management": Shield,
};

const useCaseIcons = [Shield, Eye, Cpu, Zap, Radar, Search] as const;

type Props = {
  industry: IndustryPageData;
  related: Industry[];
};

export function IndustryPageSections({ industry, related }: Props) {
  return (
    <>
      <PressureStrip
        challenges={industry.challenges}
        outcomes={industry.outcomes}
        summary={industry.summary}
      />
      <UseCasesSlider useCases={industry.useCases} industryName={industry.name} />
      <ProcessSection
        title={industry.processTitle}
        flow={industry.processFlow}
        narrative={industry.processNarrative}
      />
      <StepsSection title={industry.stepsTitle} steps={industry.steps} />
      <SolutionsSection
        industryName={industry.name}
        relatedSolutions={industry.relatedSolutions}
        blurbs={industry.solutionBlurbs}
      />
      <RelatedIndustries related={related} />
      <Section>
        <Reveal direction="up">
          <CtaBand
            title={`See OrionAlerts for ${industry.name}`}
            lede="Book a demo tailored to your sector workflows, staffing model, and camera estate."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/contact"
            secondaryLabel="Connect With Us"
          />
        </Reveal>
      </Section>
    </>
  );
}

function PressureStrip({
  challenges,
  outcomes,
  summary,
}: {
  challenges: string[];
  outcomes: string[];
  summary: string;
}) {
  const sentences = summary.split(/(?<=[.!?])\s+/).filter(Boolean);
  const deeper = sentences.slice(1, 3).join(" ");

  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_0%_50%,rgba(43,140,255,0.08),transparent_45%)]" />
      <div className="container relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-16">
        <div>
          <Reveal direction="left">
            <p className="eyebrow mb-3">The operational gap</p>
            <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
              Built for the pressure of real sites
            </h2>
            {deeper ? (
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-strong md:text-base">
                {deeper}
              </p>
            ) : null}
          </Reveal>
          <Stagger className="mt-8 space-y-3" delay={0.07}>
            {challenges.slice(0, 4).map((item) => (
              <StaggerItem key={item} direction="left">
                <div className="flex gap-3 text-sm leading-relaxed text-muted-strong md:text-[15px]">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alert" />
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[28px] bg-[#0c2238] p-7 text-white md:p-8">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-12 left-8 h-32 w-32 rounded-full bg-cyan/15 blur-3xl" />
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
              With OrionAlerts
            </p>
            <p className="mt-3 font-display text-2xl normal-case leading-snug md:text-[1.7rem]">
              From fragmented cameras to one operational picture.
            </p>
            <ul className="mt-7 space-y-4">
              {outcomes.slice(0, 4).map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span className="font-display text-sm text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function UseCasesSlider({
  useCases,
  industryName,
}: {
  useCases: IndustryPageData["useCases"];
  industryName: string;
}) {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    if (reduce || useCases.length <= 1) return;
    const timer = window.setInterval(() => {
      directionRef.current = 1;
      setIndex((current) => (current + 1) % useCases.length);
    }, 5600);
    return () => window.clearInterval(timer);
  }, [reduce, useCases.length]);

  const current = useCases[index] ?? useCases[0];
  const Icon = useCaseIcons[index % useCaseIcons.length];
  const slideDir = directionRef.current;

  function goTo(next: number) {
    if (next === index) return;
    if (index === 0 && next === useCases.length - 1) directionRef.current = -1;
    else if (index === useCases.length - 1 && next === 0) directionRef.current = 1;
    else directionRef.current = next > index ? 1 : -1;
    setIndex(next);
  }

  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(43,140,255,0.12),transparent_50%)]" />
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Key use cases</p>
              <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
                What teams actually run with OrionAlerts in {industryName}
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous use case"
                onClick={() => goTo((index - 1 + useCases.length) % useCases.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-text transition hover:border-blue/40 hover:text-blue"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                type="button"
                aria-label="Next use case"
                onClick={() => goTo((index + 1) % useCases.length)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-text transition hover:border-blue/40 hover:text-blue"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal direction="left" delay={0.05}>
            <div className="relative min-h-[320px] overflow-hidden rounded-[28px] bg-[#0b1628] p-8 text-white shadow-[0_30px_80px_-40px_rgba(15,61,120,0.65)] md:min-h-[380px] md:p-11">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(43,140,255,0.35),transparent_45%),radial-gradient(ellipse_at_100%_100%,rgba(48,227,255,0.18),transparent_40%)]" />
              {!reduce ? (
                <motion.div
                  className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan/60 to-transparent"
                  animate={{ top: ["12%", "88%", "12%"] }}
                  transition={{ duration: 7, ease: "linear", repeat: Infinity }}
                />
              ) : null}

              <AnimatePresence mode="wait" custom={slideDir}>
                <motion.div
                  key={current.title}
                  custom={slideDir}
                  initial={
                    reduce
                      ? false
                      : { opacity: 0, x: slideDir * 56 }
                  }
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: slideDir * -44 }}
                  transition={{ duration: 0.45, ease }}
                  className="relative"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-cyan backdrop-blur">
                      <Icon size={22} />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                      Use case {String(index + 1).padStart(2, "0")} /{" "}
                      {String(useCases.length).padStart(2, "0")}
                    </p>
                  </div>
                  <h3 className="display mt-7 max-w-2xl text-[clamp(1.7rem,3.4vw,2.6rem)] normal-case leading-[1.1] text-white">
                    {current.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
                    {current.description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 left-8 right-8 flex gap-2 md:left-11 md:right-11">
                {useCases.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    onClick={() => goTo(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === index ? "flex-[2] bg-cyan" : "flex-1 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Stagger className="flex flex-col gap-3" delay={0.07}>
            {useCases.map((item, i) => {
              const ItemIcon = useCaseIcons[i % useCaseIcons.length];
              const active = i === index;
              return (
                <StaggerItem key={item.title} direction="right">
                  <button
                    type="button"
                    onClick={() => goTo(i)}
                    className={`group flex w-full flex-1 items-start gap-3 rounded-[20px] border px-4 py-4 text-left transition ${
                      active
                        ? "border-blue/35 bg-white shadow-[0_18px_40px_-28px_rgba(43,140,255,0.55)]"
                        : "border-transparent bg-white/50 hover:border-line hover:bg-white"
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition ${
                        active ? "bg-blue text-white" : "bg-surface-2 text-blue"
                      }`}
                    >
                      <ItemIcon size={16} />
                    </span>
                    <span>
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-caption">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="mt-1 block font-display text-[15px] normal-case leading-snug text-text">
                        {item.title}
                      </span>
                    </span>
                  </button>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function ProcessSection({
  title,
  flow,
  narrative,
}: {
  title: string;
  flow: string;
  narrative: string[];
}) {
  const stages = flow
    .split("→")
    .map((part) => part.trim())
    .filter(Boolean);
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#07111f] py-16 text-white md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,140,255,0.22),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-25" />
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-12 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
              Process
            </p>
            <h2 className="display text-3xl normal-case text-white md:text-4xl">
              {title || "How it works"}
            </h2>
          </div>
        </Reveal>

        <div className="relative mb-12">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent md:block" />
          <div
            className={`grid gap-4 sm:grid-cols-2 ${
              stages.length >= 6
                ? "lg:grid-cols-6"
                : stages.length === 5
                  ? "lg:grid-cols-5"
                  : "md:grid-cols-3 lg:grid-cols-4"
            }`}
          >
            {stages.map((stage, index) => (
              <motion.div
                key={`${stage}-${index}`}
                initial={reduce ? false : { opacity: 0, x: -48, y: 12 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.1, duration: 0.55, ease }}
                className="relative text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur">
                  <span className="font-display text-lg text-cyan">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {!reduce ? (
                    <motion.span
                      className="absolute inset-0 rounded-full border border-cyan/40"
                      animate={{ scale: [1, 1.18, 1], opacity: [0.55, 0, 0.55] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        delay: index * 0.25,
                      }}
                    />
                  ) : null}
                </div>
                <p className="mt-4 font-display text-base normal-case text-white md:text-lg">
                  {stage}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3" delay={0.08}>
          {narrative.map((item, index) => (
            <StaggerItem
              key={item}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <div className="h-full border-l-2 border-cyan/40 pl-5">
                <p className="font-display text-sm text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function StepsSection({
  title,
  steps,
}: {
  title: string;
  steps: IndustryPageData["steps"];
}) {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-surface py-16 md:py-24">
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-3">Adoption</p>
            <h2 className="display text-3xl normal-case text-steel-gradient md:text-4xl">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-blue/20 via-blue/50 to-blue/20 md:block" />
          {steps.map((step, index) => {
            const fromLeft = index % 2 === 0;
            return (
              <motion.div
                key={step.label}
                initial={
                  reduce
                    ? false
                    : { opacity: 0, x: fromLeft ? -64 : 64, y: 20 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.14, duration: 0.65, ease }}
                className="relative text-center md:px-4"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-bg shadow-[0_0_0_8px_rgba(43,140,255,0.08)]">
                  <span className="display text-3xl text-blue-gradient">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="display mt-6 text-2xl normal-case text-text md:text-3xl">
                  {step.label}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-muted md:text-[15px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SolutionsSection({
  industryName,
  relatedSolutions,
  blurbs,
}: {
  industryName: string;
  relatedSolutions: string[];
  blurbs: Record<string, string>;
}) {
  return (
    <section className="relative overflow-hidden bg-bg py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(43,140,255,0.1),transparent_45%)]" />
      <div className="container relative">
        <Reveal direction="left">
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

        <Stagger className="grid gap-4 lg:grid-cols-2" delay={0.09}>
          {relatedSolutions.map((slug, index) => {
            const solution = getSolution(slug);
            if (!solution) return null;
            const Icon = solutionIcons[slug] ?? Shield;
            const blurb = blurbs[slug] ?? solution.summary;
            return (
              <StaggerItem
                key={slug}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <Link
                  href={`/solutions/${slug}`}
                  className="group relative flex h-full gap-5 overflow-hidden rounded-[24px] border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-blue/35 hover:shadow-[0_24px_50px_-30px_rgba(43,140,255,0.5)] md:p-7"
                >
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue to-cyan opacity-0 transition group-hover:opacity-100" />
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-surface-2 text-blue transition group-hover:bg-blue group-hover:text-white">
                    <Icon size={20} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="display text-xl normal-case text-text transition group-hover:text-blue">
                        {solution.shortName}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted line-clamp-3">
                      {blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                      Explore solution
                      <ArrowRight
                        size={14}
                        className="transition group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function RelatedIndustries({ related }: { related: Industry[] }) {
  return (
    <Section className="bg-surface pt-10 md:pt-14">
      <Reveal direction="left">
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
      </Reveal>
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
        {related.map((item, index) => (
          <StaggerItem
            key={item.slug}
            direction={index % 2 === 0 ? "left" : "right"}
          >
            <Link
              href={`/industries/${item.slug}`}
              className="group relative block overflow-hidden rounded-[22px]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/35 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan/90">
                    {item.tagline}
                  </p>
                  <span className="mt-1 block font-display text-lg font-semibold text-white">
                    {item.cardLabel ?? item.name}
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
