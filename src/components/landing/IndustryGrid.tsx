"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { industries } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const INDUSTRIES_HERO_IMAGE = "/Images/industries-hero-skyline.jpg";

const clusters = [
  {
    id: "all",
    label: "All sectors",
    slugs: null as string[] | null,
  },
  {
    id: "industrial",
    label: "Industrial & process",
    slugs: [
      "manufacturing",
      "automotive",
      "metals-mining",
      "cement",
      "oil-gas",
      "pulp-paper",
      "textile",
      "polymers-plastics",
    ],
  },
  {
    id: "life-sciences",
    label: "Life sciences & regulated",
    slugs: ["pharma", "food-fmcg"],
  },
  {
    id: "retail",
    label: "Quick commerce & retail",
    slugs: ["quick-commerce"],
  },
  {
    id: "built",
    label: "Logistics & built environment",
    slugs: ["logistics", "commercial-infrastructure", "utilities"],
  },
  {
    id: "education",
    label: "Education & campuses",
    slugs: ["schools"],
  },
] as const;

function useColumnsPerRow() {
  const [cols, setCols] = useState(5);

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setCols(2);
      else if (window.innerWidth < 1024) setCols(3);
      else setCols(5);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return cols;
}

export function IndustryGrid() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [activeCluster, setActiveCluster] = useState<(typeof clusters)[number]["id"]>("all");
  const cols = useColumnsPerRow();

  useEffect(() => setReady(true), []);

  const animate = ready && !reduce;

  const visible = useMemo(() => {
    const cluster = clusters.find((item) => item.id === activeCluster) ?? clusters[0];
    if (!cluster.slugs) return industries;
    const allowed = new Set(cluster.slugs);
    return industries.filter((industry) => allowed.has(industry.slug));
  }, [activeCluster]);

  return (
    <section className="relative overflow-hidden bg-bg pb-10 md:pb-14">
      <div className="relative -mt-[var(--header-h)] h-[min(44vh,24rem)] overflow-hidden bg-[#07111f] md:h-[min(40vh,26rem)]">
        <div className="absolute inset-0">
          <Image
            src={INDUSTRIES_HERO_IMAGE}
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07111f]/65 via-[#07111f]/25 to-transparent" />
        {/* Soft handoff into the listing below + readable copy zone */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-bg via-bg/80 to-transparent" />

        <div className="container relative z-10 flex h-full flex-col pt-[var(--header-h)]">
          <div className="mt-auto max-w-2xl pb-10 pt-10 md:pb-12">
            <motion.p
              className="font-display text-[clamp(1.05rem,2vw,1.35rem)] font-bold uppercase tracking-[0.14em] text-white"
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.45, ease } : { duration: 0 }}
            >
              Industries
            </motion.p>

            <motion.h1
              className="mt-2 font-display text-[clamp(1.65rem,3.4vw,2.5rem)] font-semibold normal-case leading-[1.1] tracking-[-0.03em] text-white"
              initial={animate ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            >
              Modern protection for any space.
            </motion.h1>

            <motion.p
              className="mt-3 max-w-xl text-[15px] leading-relaxed text-muted-strong md:text-base"
              initial={animate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.5, delay: 0.1, ease } : { duration: 0 }}
            >
              AI video intelligence for plants, campuses, and critical sites — tailored to how each
              sector actually operates, without replacing the cameras you already have.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-[min(100%-1.5rem,90rem)] -mt-2 pt-4 md:pt-5">
        <motion.div
          className="relative flex flex-wrap items-center justify-center gap-2"
          initial={animate ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={animate ? { duration: 0.5, delay: 0.15, ease } : { duration: 0 }}
        >
          {clusters.map((cluster) => {
            const active = activeCluster === cluster.id;
            return (
              <button
                key={cluster.id}
                type="button"
                onClick={() => setActiveCluster(cluster.id)}
                className={`rounded-full px-3.5 py-2 text-xs font-semibold transition sm:text-[13px] ${
                  active
                    ? "bg-[#0f172a] text-white shadow-[0_10px_28px_rgba(15,23,42,0.18)]"
                    : "bg-white/80 text-muted-strong ring-1 ring-line hover:text-blue"
                }`}
              >
                {cluster.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={activeCluster}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: animate ? 0.05 : 0,
                delayChildren: animate ? 0.04 : 0,
              },
            },
          }}
        >
          {visible.map((industry, industryIndex) => {
            const label = industry.cardLabel ?? industry.name;
            const row = Math.floor(industryIndex / cols);
            const fromLeft = row % 2 === 0;
            const slideX = fromLeft ? -36 : 36;

            return (
              <motion.div
                key={industry.slug}
                custom={{ slideX }}
                variants={
                  animate
                    ? {
                        hidden: (custom: { slideX: number }) => ({
                          opacity: 0,
                          x: custom.slideX,
                          y: 12,
                        }),
                        show: {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          transition: {
                            duration: 0.7,
                            ease,
                          },
                        },
                      }
                    : undefined
                }
                className="h-full"
              >
                <motion.div
                  className="h-full"
                  whileHover={
                    animate
                      ? {
                          y: -8,
                          scale: 1.03,
                          transition: { type: "spring", stiffness: 420, damping: 24 },
                        }
                      : undefined
                  }
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group flex h-full flex-col"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-surface-2">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        priority={industryIndex < 5}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <span className="block font-display text-[0.95rem] font-semibold leading-snug text-white sm:text-[1.05rem] lg:text-[1.1rem]">
                          {label}
                        </span>
                        <span className="mt-1 block text-[11px] text-white/70 opacity-0 transition group-hover:opacity-100 sm:text-xs">
                          {industry.tagline}
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 inline-flex w-full items-center justify-between rounded-full bg-white px-3.5 py-2.5 text-xs font-medium text-text transition duration-300 group-hover:bg-surface-2 sm:text-[13px]">
                      Learn more
                      <ChevronRight
                        size={14}
                        strokeWidth={2.25}
                        className="shrink-0 transition duration-300 group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
