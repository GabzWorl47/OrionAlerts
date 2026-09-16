"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, useSyncExternalStore } from "react";
import type { Solution } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

type SolutionHeroProps = {
  solution: Solution;
};

function shortLede(summary: string) {
  const first = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first) return summary;
  return first.length > 140 ? `${first.slice(0, 137)}…` : first;
}

export function SolutionHero({ solution }: SolutionHeroProps) {
  const reduce = useReducedMotion();
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
        <h1 className="sr-only">{solution.name}</h1>
        <div className="relative w-full">
          <Image
            src={solution.image}
            alt={`${solution.shortName} overview`}
            width={1920}
            height={1080}
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
      <motion.div
        className="absolute inset-0"
        style={animate ? { y: imageY } : undefined}
      >
        <Image
          src={solution.image}
          alt={`${solution.shortName} overview`}
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue/88 via-blue/55 to-blue/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/55 via-transparent to-blue/15" />

      <div className="container relative z-10 flex min-h-[min(78vh,44rem)] flex-col">
        <motion.div
          className="mt-auto max-w-xl pb-10 pt-24 md:pb-14 md:pt-32"
          style={animate ? { y: contentY } : undefined}
        >
          <motion.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, ease } : { duration: 0 }}
            className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan"
          >
            {solution.tagline}
          </motion.p>

          <motion.p
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            className="mt-2.5 font-display text-[clamp(1.7rem,3.8vw,2.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-white"
          >
            {solution.shortName}
          </motion.p>

          <motion.h1
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.1, ease } : { duration: 0 }}
            className="mt-3 max-w-lg font-display text-[clamp(1.05rem,1.8vw,1.35rem)] font-medium normal-case leading-[1.3] text-white/88"
          >
            {solution.headline}
          </motion.h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.16, ease } : { duration: 0 }}
            className="mt-3 max-w-md text-sm leading-relaxed text-white/65"
          >
            {shortLede(solution.summary)}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
