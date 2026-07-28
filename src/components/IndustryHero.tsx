"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui";
import { SolutionVideo } from "@/components/SolutionVideo";
import type { Industry } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

type IndustryHeroProps = {
  industry: Industry;
};

export function IndustryHero({ industry }: IndustryHeroProps) {
  const reduce = useReducedMotion();
  const hasVideo = Boolean(industry.introVideo);

  return (
    <section className="relative overflow-hidden bg-bg pb-16 pt-10 md:pb-24 md:pt-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(43,140,255,0.1),transparent_55%)]" />

      <div className="container relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <motion.div
            className="order-1"
            initial={reduce ? false : { opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.05 }}
          >
            <div className="relative overflow-hidden rounded-[20px] border border-line bg-[#0b1220] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
              <div className="relative aspect-[16/11]">
                {hasVideo && industry.introVideo ? (
                  <SolutionVideo
                    src={industry.introVideo}
                    label={`${industry.name} overview`}
                    poster={industry.introVideoPoster ?? industry.image}
                  />
                ) : (
                  <>
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b1220]/35 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 rounded-full bg-black/45 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
                      Industry overview
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="order-2"
            initial={reduce ? false : { opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.18 }}
          >
            <p className="eyebrow">Industry</p>
            <h1 className="display mt-3 max-w-xl text-[clamp(2.2rem,4.5vw,3.6rem)] normal-case text-steel-gradient">
              {industry.name}
            </h1>
            {industry.tagline ? (
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.12em] text-blue/80">
                {industry.tagline}
              </p>
            ) : null}
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{industry.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/contact" variant="outline">
                Talk to sales
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
