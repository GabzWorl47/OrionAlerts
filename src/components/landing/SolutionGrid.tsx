"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { solutions } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

const SOLUTIONS_HERO_IMAGE = "/Images/solutions-hero-datacenter.webp";

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
    label: "Maintenance & uptime",
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

/**
 * Avoid SSR/client tree mismatches from useReducedMotion: render "not ready"
 * on the server and the first client pass, then flip true once hydrated.
 * useSyncExternalStore lets React resolve the server/client snapshot itself,
 * so this needs no effect + setState to flip the flag after mount.
 */
const subscribeToNothing = () => () => {};
function useMotionReady() {
  return useSyncExternalStore(
    subscribeToNothing,
    () => true,
    () => false,
  );
}

export function SolutionGrid() {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const [activeCluster, setActiveCluster] = useState<(typeof clusters)[number]["id"]>("all");
  const cols = useColumnsPerRow();

  const animate = ready && !reduce;

  const visible = useMemo(() => {
    const cluster = clusters.find((item) => item.id === activeCluster) ?? clusters[0];
    if (!cluster.slugs) return solutions;
    const allowed = new Set(cluster.slugs);
    return solutions.filter((solution) => allowed.has(solution.slug));
  }, [activeCluster]);

  return (
    <>
      <section className="relative overflow-hidden bg-[#07111f]">
        <div className="relative min-h-[30rem] overflow-hidden pt-[var(--header-h)] md:min-h-[min(92vh,52rem)]">
          <div className="absolute inset-0">
            <Image
              src={SOLUTIONS_HERO_IMAGE}
              alt="Server racks with network cabling and status lights, the kind of infrastructure OrionAlerts monitors alongside cameras and recorders"
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Keeps the hero copy legible where it overlaps the photo. */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/55 to-[#07111f]/10"
              aria-hidden
            />
          </div>
          <div className="container relative z-10 flex min-h-[24rem] flex-col md:min-h-[min(78vh,44rem)]">
            <div className="mt-auto max-w-2xl pb-10 pt-10 md:pb-14 md:pt-32">
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
                Video surveillance software for multi-site operations
              </motion.h1>

              <motion.p
                className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/75 md:text-base"
                initial={animate ? { opacity: 0, y: 14 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={animate ? { duration: 0.5, delay: 0.1, ease } : { duration: 0 }}
              >
                VMS, AI video analytics, camera health monitoring, asset tracking and AMC
                management on one platform, so security, IT and facilities teams work from one
                system.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <LogoMarquee />

      <section className="relative overflow-hidden bg-bg pb-10 md:pb-14">
      <div className="relative mx-auto w-[min(100%-1.5rem,90rem)] pt-10 md:pt-14">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={animate ? { opacity: 0, y: 16 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={animate ? { duration: 0.5, ease } : { duration: 0 }}
        >
          <h2 className="text-[clamp(1.85rem,4vw,2.85rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-text">
            Five modules, one surveillance platform
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
            Explore the modules that power OrionAlerts — video and AI, asset visibility,
            maintenance workflows, and infrastructure health — each designed to work alone or as one
            connected platform. Every module runs on{" "}
            <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
              Nebula OS, our Vision AI operating system
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          className="relative mt-10 flex flex-wrap items-center justify-center gap-2"
          initial={animate ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={animate ? { duration: 0.5, delay: 0.08, ease } : { duration: 0 }}
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
                          y: -10,
                          transition: { type: "spring", stiffness: 380, damping: 22 },
                        }
                      : undefined
                  }
                >
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="group relative block h-full overflow-hidden rounded-[22px] bg-[#07111f] shadow-[0_18px_40px_-28px_rgba(7,17,31,0.55)] ring-1 ring-black/5 transition-[box-shadow,ring-color,ring-width] duration-300 hover:shadow-[0_28px_55px_-24px_rgba(7,17,31,0.7)] hover:ring-2 hover:ring-cyan"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={solution.image}
                        alt={solution.name}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-transparent opacity-95" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c2238]/35 via-transparent to-cyan/10 opacity-80 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-3.5 sm:p-4">
                        <span className="font-display text-[1.05rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.15rem] lg:text-[1.2rem]">
                          {solution.shortName}
                        </span>

                        {/* Always visible (not hover-only) so touch users see it too. */}
                        <span className="mt-1.5 text-[11px] leading-snug text-white/80 sm:text-xs">
                          {solution.oneLiner}
                        </span>

                        <span className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-cyan transition duration-300 group-hover:gap-2 sm:text-[13px]">
                          Explore
                          <ChevronRight
                            size={15}
                            strokeWidth={2.4}
                            className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
      </section>
    </>
  );
}
