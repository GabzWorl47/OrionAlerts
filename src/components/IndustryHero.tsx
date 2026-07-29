"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui";
import { SolutionVideo } from "@/components/SolutionVideo";
import type { IndustryPageData } from "@/lib/industry-pages";

const ease = [0.22, 1, 0.36, 1] as const;

type IndustryHeroProps = {
  industry: IndustryPageData;
};

function shortLede(summary: string) {
  const first = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first) return summary;
  return first.length > 180 ? `${first.slice(0, 177)}…` : first;
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const reduce = useReducedMotion();
  const hasVideo = Boolean(industry.introVideo);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.72, 0.92]);

  return (
    <section
      ref={ref}
      className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-[#07111f] pt-[var(--header-h)] text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={reduce ? undefined : { y: imageY }}
      >
        {hasVideo && industry.introVideo ? (
          <div className="absolute inset-0">
            <SolutionVideo
              src={industry.introVideo}
              label={`${industry.name} overview`}
              poster={industry.introVideoPoster ?? industry.image}
            />
          </div>
        ) : (
          <Image
            src={industry.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            aria-hidden
          />
        )}
      </motion.div>

      <motion.div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/78 to-[#07111f]/35"
        style={reduce ? undefined : { opacity: overlayOpacity }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/45" />
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-20 mix-blend-soft-light" />
      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-cyan/50 to-transparent"
          animate={{ opacity: [0.15, 0.55, 0.15], scaleX: [0.7, 1, 0.7] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <motion.div
        className="container relative z-10 flex min-h-[min(78vh,44rem)] flex-col justify-end pb-14 pt-10 md:pb-20 md:pt-16"
        style={reduce ? undefined : { y: contentY }}
      >
        <nav aria-label="Breadcrumb" className="mb-8 text-sm text-white/55">
          <Link href="/industries" className="transition hover:text-white">
            Industries
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/85">{industry.name}</span>
        </nav>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
        >
          {industry.tagline}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06, ease }}
          className="mt-4 font-display text-[clamp(2.4rem,7vw,5.2rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white"
        >
          {industry.name}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease }}
          className="mt-5 max-w-3xl font-display text-[clamp(1.35rem,2.6vw,2rem)] font-medium normal-case leading-[1.25] text-white/90"
        >
          {industry.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2, ease }}
          className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-base"
        >
          {shortLede(industry.summary)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.28, ease }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button href="/book-demo">Book a Demo</Button>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/10"
          >
            Talk to sales
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
