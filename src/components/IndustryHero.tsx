"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { IndustryPageData } from "@/lib/industry-pages";

const ease = [0.22, 1, 0.36, 1] as const;

type IndustryHeroProps = {
  industry: IndustryPageData;
};

function shortLede(summary: string) {
  const first = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first) return summary;
  return first.length > 140 ? `${first.slice(0, 137)}…` : first;
}

export function IndustryHero({ industry }: IndustryHeroProps) {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const hasVideo = Boolean(industry.introVideo);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !industry.introVideo) return;
    video.muted = true;
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
  }, [industry.introVideo]);

  const animate = ready && !reduce;

  return (
    <section
      ref={ref}
      className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-blue pt-[var(--header-h)] text-white"
    >
      <motion.div
        className="absolute inset-0"
        style={animate ? { y: imageY } : undefined}
      >
        {hasVideo && industry.introVideo ? (
          <video
            ref={videoRef}
            src={industry.introVideo}
            poster={industry.introVideoPoster ?? industry.image}
            className="absolute inset-0 h-full w-full object-cover brightness-[1.18] contrast-[1.06] saturate-[1.05]"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
          />
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

      {/* Soft overlays — same navy as homepage cards */}
      <div
        className={`pointer-events-none absolute inset-0 ${
          hasVideo
            ? "bg-gradient-to-t from-blue/85 via-blue/25 to-transparent"
            : "bg-gradient-to-r from-blue/88 via-blue/55 to-blue/25"
        }`}
      />
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
            {industry.tagline}
          </motion.p>

          <motion.p
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            className="mt-2.5 font-display text-[clamp(1.7rem,3.8vw,2.75rem)] font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-white"
          >
            {industry.name}
          </motion.p>

          <motion.h1
            initial={animate ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.55, delay: 0.1, ease } : { duration: 0 }}
            className="mt-3 max-w-lg font-display text-[clamp(1.05rem,1.8vw,1.35rem)] font-medium normal-case leading-[1.3] text-white/88"
          >
            {industry.headline}
          </motion.h1>

          <motion.p
            initial={animate ? { opacity: 0, y: 14 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={animate ? { duration: 0.5, delay: 0.16, ease } : { duration: 0 }}
            className="mt-3 max-w-md text-sm leading-relaxed text-white/65"
          >
            {shortLede(industry.summary)}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
