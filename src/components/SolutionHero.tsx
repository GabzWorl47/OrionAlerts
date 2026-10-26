"use client";

import Image from "next/image";
import { m, useScroll, useTransform } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import type { Solution } from "@/lib/site";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Only the fields the hero renders. This is a client component, so every prop
 * is serialized into the page's RSC payload — never pass the whole Solution
 * (features, FAQs, workflow…) here. `lede` is the first sentence of the
 * summary, trimmed on the server.
 */
export type SolutionHeroData = Pick<
  Solution,
  | "slug"
  | "name"
  | "seoTitle"
  | "shortName"
  | "tagline"
  | "headline"
  | "image"
  | "heroImage"
> & { lede: string };

/**
 * Intrinsic pixel sizes of the hero artwork, so the bright hero's <Image>
 * reserves the right aspect ratio (no layout shift). Unknown sources fall back
 * to the 3:2 size the solution renders ship at.
 */
const HERO_IMAGE_SIZES: Record<string, { width: number; height: number }> = {
  "/Images/solutions/centralized-live-monitoring-playback.webp": { width: 1536, height: 1024 },
  "/Images/solutions/real-time-ai-video-analytics.webp": { width: 1536, height: 1024 },
  "/Images/solutions/asset-tracking-hero.webp": { width: 1586, height: 900 },
  "/Images/solutions/amc-management-hero.webp": { width: 1586, height: 940 },
  "/Images/solutions/health-monitoring-hero.webp": { width: 1586, height: 904 },
};
const DEFAULT_HERO_SIZE = { width: 1536, height: 1024 };

type SolutionHeroProps = {
  solution: SolutionHeroData;
};

export function SolutionHero({ solution }: SolutionHeroProps) {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const ready = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const animate = ready && !reduce;
  const heroSrc = solution.heroImage ?? solution.image;
  const heroSize = HERO_IMAGE_SIZES[heroSrc] ?? DEFAULT_HERO_SIZE;
  const isBright =
    solution.slug === "asset-tracking" ||
    solution.slug === "amc-management" ||
    solution.slug === "health-monitoring" ||
    solution.slug === "ai-analytics" ||
    solution.slug === "vms";

  if (isBright) {
    return (
      <section
        ref={ref}
        className="relative overflow-hidden bg-white text-text"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(ellipse_at_50%_0%,rgba(126,200,255,0.22),transparent_65%)]" />
        <div className="container relative z-10 pb-2 pt-10 text-center md:pb-4 md:pt-14">
          <m.p
            initial={animate ? { opacity: 0, y: 12 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.45, ease } : { duration: 0 }}
            className="eyebrow"
          >
            {solution.tagline}
          </m.p>
          <m.h1
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            className="mx-auto mt-3 max-w-5xl text-balance font-display text-[clamp(1.85rem,4.2vw,3.25rem)] font-semibold normal-case leading-[1.08] tracking-[-0.03em] text-text"
          >
            {solution.seoTitle ?? solution.name}
          </m.h1>
          <m.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.1, ease } : { duration: 0 }}
            className="description mx-auto mt-4 max-w-2xl text-balance text-[15px] md:text-[17px]"
          >
            {solution.headline}
          </m.p>
          <m.div
            initial={animate ? { opacity: 0, y: 12 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.15, ease } : { duration: 0 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
            <MagneticButton href="#how-it-works" variant="outline">
              See How It Works
            </MagneticButton>
          </m.div>
        </div>
        <div className="relative w-full">
          <Image
            src={heroSrc}
            alt={`${solution.shortName} overview`}
            width={heroSize.width}
            height={heroSize.height}
            priority
            quality={95}
            sizes="100vw"
            className="h-auto w-full object-cover object-center"
          />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={ref}
      className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-blue pt-[var(--header-h)] text-white"
    >
      <m.div
        className="absolute inset-0"
        style={animate ? { y: imageY } : undefined}
      >
        <Image
          src={heroSrc}
          alt={`${solution.shortName} overview`}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </m.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue/88 via-blue/55 to-blue/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/55 via-transparent to-blue/15" />

      <div className="container relative z-10 flex min-h-[min(78vh,44rem)] flex-col">
        <m.div
          className="mt-auto max-w-xl pb-10 pt-24 md:pb-14 md:pt-32"
          style={animate ? { y: contentY } : undefined}
        >
          <m.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, ease } : { duration: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan"
          >
            {solution.tagline}
          </m.p>

          <m.p
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            className="mt-2.5 font-display text-[clamp(1.7rem,3.8vw,2.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-white"
          >
            {solution.shortName}
          </m.p>

          <m.h1
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.1, ease } : { duration: 0 }}
            className="mt-3 max-w-lg font-display text-[clamp(1.05rem,1.8vw,1.35rem)] font-medium normal-case leading-[1.3] text-white/88"
          >
            {solution.headline}
          </m.h1>

          <m.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.16, ease } : { duration: 0 }}
            className="mt-3 max-w-md text-sm leading-relaxed text-white/65"
          >
            {solution.lede}
          </m.p>
        </m.div>
      </div>
    </section>
  );
}
