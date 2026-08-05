"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { solutions } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const SOLUTIONS_HERO_IMAGE = "/Images/solutions-hero-datacenter.jpg";

const clusters = [
  {
    id: "all",
    label: "All solutions",
    slugs: null as string[] | null,
  },
  {
    id: "video-ai",
    label: "Video & AI",
    slugs: ["vms", "ai-analytics"],
  },
  {
    id: "estate",
    label: "Assets & uptime",
    slugs: ["asset-tracking", "amc-management", "health-monitoring"],
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

export function SolutionGrid() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [activeCluster, setActiveCluster] = useState<(typeof clusters)[number]["id"]>("all");
  const cols = useColumnsPerRow();

  useEffect(() => setReady(true), []);

  const animate = ready && !reduce;

  const visible = useMemo(() => {
    const cluster = clusters.find((item) => item.id === activeCluster) ?? clusters[0];
    if (!cluster.slugs) return solutions;
    const allowed = new Set(cluster.slugs);
    return solutions.filter((solution) => allowed.has(solution.slug));
  }, [activeCluster]);

  return (
    <section className="relative overflow-hidden bg-bg pb-10 md:pb-14">
      <div className="relative -mt-[var(--header-h)] min-h-[100svh] overflow-hidden bg-[#07111f]">
        <div className="absolute inset-0">
          <Image
            src={SOLUTIONS_HERO_IMAGE}
            alt=""
            fill
            priority
            quality={95}
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(43,140,255,0.18),transparent_50%),radial-gradient(ellipse_at_90%_50%,rgba(15,23,42,0.35),transparent_45%)]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07111f]/55 via-transparent to-[#07111f]/40" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[36%] bg-gradient-to-t from-bg via-bg/70 to-transparent" />

        <div className="container relative z-10 flex min-h-[100svh] flex-col pt-[var(--header-h)]">
          <div className="mt-auto max-w-2xl pb-14 pt-10 md:pb-16">
            <motion.p
              className="font-display text-[clamp(1.05rem,2vw,1.35rem)] font-bold uppercase tracking-[0.14em] text-white"
              initial={animate ? { opacity: 0, y: 12 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.45, ease } : { duration: 0 }}
            >
              Solutions
            </motion.p>

            <motion.h1
              className="mt-2 font-display text-[clamp(1.65rem,3.4vw,2.5rem)] font-semibold normal-case leading-[1.1] tracking-[-0.03em] text-white"
              initial={animate ? { opacity: 0, y: 20 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.55, delay: 0.05, ease } : { duration: 0 }}
            >
              One platform. Critical capabilities.
            </motion.h1>

            <motion.p
              className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base"
              initial={animate ? { opacity: 0, y: 14 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.5, delay: 0.1, ease } : { duration: 0 }}
            >
              Connect live video, AI alerts, assets, maintenance, and infrastructure health — so
              security and operations run from a single command layer.
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
          {visible.map((solution, solutionIndex) => {
            const row = Math.floor(solutionIndex / cols);
            const fromLeft = row % 2 === 0;
            const slideX = fromLeft ? -36 : 36;

            return (
              <motion.div
                key={solution.slug}
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
                    href={`/solutions/${solution.slug}`}
                    className="group flex h-full flex-col"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden rounded-[14px] bg-surface-2">
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        priority={solutionIndex < 5}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-3">
                        <span className="block font-display text-[0.95rem] font-semibold leading-snug text-white sm:text-[1.05rem] lg:text-[1.1rem]">
                          {solution.shortName}
                        </span>
                        <span className="mt-1 block text-[11px] text-white/70 opacity-0 transition group-hover:opacity-100 sm:text-xs">
                          {solution.tagline}
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
