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
import { motion, useReducedMotion } from "framer-motion";
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
      <Section className="!py-10 md:!py-14">
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
    <section className="relative overflow-hidden border-b border-line bg-bg">
      <div className="container relative grid gap-10 py-10 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:py-12">
        <div>
          <Reveal direction="left">
            <p className="eyebrow mb-3">The operational gap</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
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
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue" />
                  <span>{item}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[28px] bg-blue p-7 text-white md:p-8">
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
  const videoRef = useRef<HTMLVideoElement>(null);

  const current = useCases[index] ?? useCases[0];
  const Icon = useCaseIcons[index % useCaseIcons.length];
  const hasVideo = Boolean(current.video);

  useEffect(() => {
    if (reduce || useCases.length <= 1) return;
    const timer = window.setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % useCases.length);
    }, hasVideo ? 8000 : 5600);
    return () => window.clearInterval(timer);
  }, [reduce, useCases.length, hasVideo, index]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !current.video) return;
    video.muted = true;
    video.currentTime = 0;
    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until user interaction.
      }
    };
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void tryPlay();
    } else {
      video.addEventListener("loadeddata", () => void tryPlay(), { once: true });
    }
  }, [current.video, index]);

  function goTo(next: number) {
    if (next === index) return;
    setIndex(next);
  }

  return (
    <section className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-2xl">
              <p className="eyebrow mb-3">Key use cases</p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
                What teams actually run with OrionAlerts in {industryName}
              </h2>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Previous use case"
                onClick={() => goTo((index - 1 + useCases.length) % useCases.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-text shadow-[0_10px_28px_rgba(15,23,42,0.16)] transition hover:scale-105"
              >
                <ArrowLeft size={18} strokeWidth={1.75} />
              </button>
              <button
                type="button"
                aria-label="Next use case"
                onClick={() => goTo((index + 1) % useCases.length)}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-text shadow-[0_10px_28px_rgba(15,23,42,0.16)] transition hover:scale-105"
              >
                <ArrowRight size={18} strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </Reveal>

        <div className="grid items-stretch gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <Reveal direction="left" delay={0.05} className="h-full">
            <div className="relative flex h-full min-h-[360px] flex-col overflow-hidden rounded-[28px] bg-blue text-white md:min-h-[420px]">
              <div className="flex items-start gap-3 px-7 pt-7 md:gap-4 md:px-9 md:pt-9">
                <span className="mt-1 inline-flex shrink-0 text-cyan">
                  <Icon size={22} strokeWidth={1.6} />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                    Use case {String(index + 1).padStart(2, "0")} /{" "}
                    {String(useCases.length).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
                    {current.title}
                  </h3>
                </div>
              </div>

              <div className="relative mx-5 mb-0 mt-6 flex-1 overflow-hidden rounded-t-[18px] bg-ink-deep md:mx-7 md:mt-8">
                <div className="relative aspect-[16/10] w-full md:aspect-[16/9] md:min-h-[220px]">
                  {hasVideo && current.video ? (
                    <video
                      key={current.video}
                      ref={videoRef}
                      src={current.video}
                      className="absolute inset-0 h-full w-full object-cover object-top"
                      muted
                      loop
                      playsInline
                      autoPlay
                      preload="auto"
                      aria-hidden
                    />
                  ) : null}
                </div>
              </div>

              <div className="flex gap-2 px-7 pb-7 pt-5 md:px-9 md:pb-8">
                {useCases.map((item, i) => (
                  <button
                    key={item.title}
                    type="button"
                    aria-label={`Show ${item.title}`}
                    onClick={() => goTo(i)}
                    className={`h-1 rounded-full transition-all ${
                      i === index
                        ? "flex-[2] bg-cyan"
                        : "flex-1 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.08} className="h-full">
            <div className="flex h-full min-h-[360px] flex-col gap-2.5 md:min-h-[420px]">
              {useCases.map((item, i) => {
                const ItemIcon = useCaseIcons[i % useCaseIcons.length];
                const active = i === index;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-pressed={active}
                    className={`group flex w-full flex-1 items-start gap-3 rounded-[18px] px-4 py-3.5 text-left transition-colors ${
                      active
                        ? "bg-blue text-white shadow-[0_14px_32px_-20px_rgba(12,34,56,0.55)]"
                        : "bg-white text-text hover:bg-white/80"
                    }`}
                  >
                    <span
                      className={`mt-0.5 inline-flex shrink-0 ${
                        active ? "text-cyan" : "text-text/45"
                      }`}
                    >
                      <ItemIcon size={18} strokeWidth={1.6} />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span
                        className={`block text-[11px] font-semibold uppercase tracking-[0.12em] ${
                          active ? "text-cyan/80" : "text-text/45"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`mt-1 block font-display text-[15px] font-semibold normal-case leading-snug ${
                          active ? "text-white" : "text-text"
                        }`}
                      >
                        {item.title}
                      </span>
                      {active ? (
                        <span className="mt-2 block text-[13px] leading-relaxed text-white/70 line-clamp-3">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
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
    <section className="relative overflow-hidden bg-blue py-10 text-white md:py-14">
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
              Process
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
              {title || "How it works"}
            </h2>
          </div>
        </Reveal>

        <div className="relative mb-8">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-cyan/35 to-transparent md:block" />
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-ink-deep">
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
    <section className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-3">Adoption</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
              {title}
            </h2>
          </div>
        </Reveal>

        <div className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-blue/10 via-blue/30 to-blue/10 md:block" />
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
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_28px_rgba(12,34,56,0.1)]">
                  <span className="font-display text-3xl font-semibold text-text">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold normal-case text-text md:text-3xl">
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
    <section className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="container relative">
        <Reveal direction="left">
          <div className="mb-8 max-w-3xl">
            <p className="eyebrow mb-3">Recommended stack</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
              OrionAlerts for {industryName}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
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
                  className="group relative flex h-full gap-5 overflow-hidden rounded-[28px] bg-blue p-6 text-white transition duration-300 hover:bg-[#0e2740] md:p-7"
                >
                  <span className="mt-0.5 inline-flex shrink-0 text-cyan">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-3">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan/80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <h3 className="font-display text-xl font-semibold normal-case text-white">
                        {solution.shortName}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
                      {blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan">
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
    <Section className="bg-bg !py-10 md:!py-14">
      <Reveal direction="left">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow mb-3">Explore more</p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
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
              className="group relative block overflow-hidden rounded-[28px] bg-blue"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 1024px) 45vw, 20vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue via-blue/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan">
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
