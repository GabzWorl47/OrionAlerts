"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Cpu,
  LayoutGrid,
  Shield,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { solutions, type Solution } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const solutionIcons: Record<string, LucideIcon> = {
  vms: Video,
  "ai-analytics": Cpu,
  "asset-tracking": Shield,
  "amc-management": Wrench,
  "health-monitoring": Activity,
};

const featureIcons: LucideIcon[] = [Shield, Video, LayoutGrid, Activity, Cpu, Wrench];

/** Short panel titles — distinct from the tab labels. */
const panelTitles: Record<string, string> = {
  vms: "One command view for every site",
  "ai-analytics": "Detect what matters in real time",
  "asset-tracking": "Know where every asset stands",
  "amc-management": "Keep contracts and SLAs on track",
  "health-monitoring": "Catch failures before blind spots",
};

function SolutionMedia({
  solution,
  playing,
}: {
  solution: Solution;
  playing: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = solution.introVideo;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    video.muted = true;
    if (!playing) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay may be blocked until interaction.
    });
  }, [playing, src, solution.slug]);

  return (
    <div className="relative h-full min-h-[18rem] w-full flex-1 overflow-hidden rounded-[24px] bg-ink-deep shadow-[0_28px_60px_-40px_rgba(12,34,56,0.55)] ring-1 ring-line sm:min-h-[22rem] lg:min-h-0">
      {src ? (
        <video
          key={src}
          ref={videoRef}
          src={src}
          poster={solution.introVideoPoster ?? solution.image}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <Image
          src={solution.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 65vw"
          className="object-cover object-center"
        />
      )}
    </div>
  );
}

export function UniversalSolutionVideos() {
  const reduce = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState(solutions[0]?.slug ?? "vms");
  const active = solutions.find((item) => item.slug === activeSlug) ?? solutions[0];
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  if (!active) return null;

  const ActiveIcon = solutionIcons[active.slug] ?? LayoutGrid;
  const features = active.features.slice(0, 3);
  const lede = active.summary.split("\n")[0];
  const panelTitle = panelTitles[active.slug] ?? active.tagline;

  return (
    <section
      ref={sectionRef}
      id="platform-videos"
      className="relative overflow-hidden border-y border-[rgba(12,34,56,0.08)] bg-[#dfe9f2] pt-12 pb-14 md:pt-14 md:pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(126,200,255,0.28),transparent_48%),radial-gradient(ellipse_at_85%_90%,rgba(12,34,56,0.08),transparent_50%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-[min(100%-2.5rem,96rem)] sm:w-[min(100%-3rem,96rem)]">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-[clamp(1.85rem,4vw,2.85rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
              Solving operational security challenges
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
              Enterprise surveillance is complex yet vital. Orion Alerts helps you protect
              people, assets, and operations — from live monitoring and AI alerts to assets,
              maintenance, and uptime.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div
            role="tablist"
            aria-label="Solutions"
            className="mt-8 flex flex-wrap items-center justify-center gap-2.5 md:mt-10 md:gap-3"
          >
            {solutions.map((solution) => {
              const selected = solution.slug === active.slug;
              return (
                <button
                  key={solution.slug}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveSlug(solution.slug)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition duration-300 md:px-5 md:py-2.5 ${
                    selected
                      ? "bg-blue text-white shadow-[0_12px_28px_-16px_rgba(12,34,56,0.65)]"
                      : "border border-line bg-white/70 text-muted-strong hover:border-blue/20 hover:bg-white hover:text-text"
                  }`}
                >
                  {solution.shortName}
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.slug}
            role="tabpanel"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="mt-10 md:mt-12"
          >
            <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
              <div className="flex lg:col-span-4">
                <div className="flex w-full max-w-lg flex-col justify-center lg:max-w-none">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex shrink-0 text-cyan">
                      <ActiveIcon size={22} strokeWidth={1.6} />
                    </span>
                    <p className="eyebrow">{active.tagline}</p>
                  </div>

                  <h3 className="mt-3 font-display text-[clamp(1.55rem,2.6vw,2.15rem)] font-semibold normal-case leading-[1.2] tracking-[-0.02em] text-text">
                    {panelTitle}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-strong md:text-base">
                    {lede}
                  </p>

                  <ul className="mt-6 space-y-4 md:mt-7 md:space-y-5">
                    {features.map((feature, index) => {
                      const Icon = featureIcons[index % featureIcons.length];
                      return (
                        <li key={feature.title} className="flex gap-3">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center text-text">
                            <Icon size={20} strokeWidth={1.6} />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[15px] font-semibold text-text">{feature.title}</p>
                            <p className="mt-0.5 text-sm leading-relaxed text-muted">
                              {feature.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={`/solutions/${active.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-text transition hover:gap-2.5 hover:text-blue"
                  >
                    Explore {active.shortName}
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>

              <div className="flex min-h-[18rem] sm:min-h-[22rem] lg:col-span-8 lg:min-h-[28rem] xl:min-h-[32rem]">
                <SolutionMedia solution={active} playing={visible && !reduce} />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
