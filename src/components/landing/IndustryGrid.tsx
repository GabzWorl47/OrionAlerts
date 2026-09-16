"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
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
    label: "Manufacturing & heavy industry",
    slugs: [
      "manufacturing",
      "automotive",
      "cement",
      "metals-mining",
      "oil-gas",
      "pulp-paper",
      "textile",
      "polymers-plastics",
      "construction",
    ],
  },
  {
    id: "regulated",
    label: "Pharma, food & healthcare",
    slugs: ["pharma", "food-fmcg", "healthcare"],
  },
  {
    id: "fulfilment",
    label: "Logistics & fulfilment",
    slugs: [
      "logistics",
      "dark-stores",
      "quick-commerce",
      "ecommerce-fulfilment",
      "cold-storage",
    ],
  },
  {
    id: "infrastructure",
    label: "Transport & infrastructure",
    slugs: [
      "airports-ports-railways",
      "commercial-buildings",
      "data-centres",
      "utilities",
      "solar-renewable",
      "telecom-remote",
      "government",
    ],
  },
  {
    id: "public",
    label: "Retail, campuses & public",
    slugs: [
      "retail-shopping",
      "hotels-hospitality",
      "education-campuses",
      "banking",
      "residential",
      "sports-events",
    ],
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

export function IndustryGrid() {
  const reduce = useReducedMotion();
  const ready = useMotionReady();
  const [activeCluster, setActiveCluster] = useState<(typeof clusters)[number]["id"]>("all");
  const cols = useColumnsPerRow();

  const animate = ready && !reduce;

  const visible = useMemo(() => {
    const cluster = clusters.find((item) => item.id === activeCluster) ?? clusters[0];
    if (!cluster.slugs) return industries;
    const allowed = new Set(cluster.slugs);
    return industries.filter((industry) => allowed.has(industry.slug));
  }, [activeCluster]);

  return (
    <section className="relative overflow-hidden bg-bg pb-2 md:pb-4">
      <div className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-[#07111f] pt-[var(--header-h)] text-white">
        <motion.div
          className="absolute inset-0"
          initial={animate ? { scale: 1.04, opacity: 0.9 } : false}
          animate={{ scale: 1, opacity: 1 }}
          transition={animate ? { duration: 1.15, ease } : { duration: 0 }}
        >
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
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/78 to-[#07111f]/20" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/40" />

        <div className="container relative z-10 flex min-h-[min(78vh,44rem)] flex-col">
          <div className="mt-auto max-w-xl pb-10 pt-24 md:pb-14 md:pt-32">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
              initial={animate ? { opacity: 0, y: 16 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.5, delay: 0.06, ease } : { duration: 0 }}
            >
              Sector coverage
            </motion.p>

            <motion.p
              className="mt-4 font-display text-[clamp(2.5rem,6.5vw,4.8rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white"
              initial={animate ? { opacity: 0, y: 22 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.6, delay: 0.12, ease } : { duration: 0 }}
            >
              Industries
            </motion.p>

            <motion.span
              aria-hidden
              className="mt-5 block h-px origin-left bg-gradient-to-r from-cyan via-blue/80 to-transparent"
              initial={animate ? { scaleX: 0 } : false}
              animate={{ scaleX: 1 }}
              transition={animate ? { duration: 0.8, delay: 0.28, ease } : { duration: 0 }}
            />

            <motion.h1
              className="mt-5 max-w-xl font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium normal-case leading-[1.3] text-white/90"
              initial={animate ? { opacity: 0, y: 22 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.6, delay: 0.22, ease } : { duration: 0 }}
            >
              Modern protection for any space.
            </motion.h1>

            <motion.p
              className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 md:text-base"
              initial={animate ? { opacity: 0, y: 18 } : false}
              animate={{ opacity: 1, y: 0 }}
              transition={animate ? { duration: 0.55, delay: 0.3, ease } : { duration: 0 }}
            >
              AI video intelligence for plants, campuses, and critical sites — tailored to how each
              sector actually operates, without replacing the cameras you already have.
            </motion.p>
          </div>
        </div>
      </div>

      <LogoMarquee />

      <div className="relative mx-auto w-[min(100%-1.5rem,90rem)] pt-8 md:pt-10">
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
            const indexLabel = String(industryIndex + 1).padStart(2, "0");

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
                          y: -10,
                          transition: { type: "spring", stiffness: 380, damping: 22 },
                        }
                      : undefined
                  }
                >
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="group relative block h-full overflow-hidden rounded-[22px] bg-[#07111f] shadow-[0_18px_40px_-28px_rgba(7,17,31,0.55)] ring-1 ring-black/5 transition-[box-shadow,ring-color,ring-width] duration-300 hover:shadow-[0_28px_55px_-24px_rgba(7,17,31,0.7)] hover:ring-2 hover:ring-cyan"
                  >
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={industry.image}
                        alt={industry.name}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.12]"
                      />

                      {/* Depth + brand wash */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/45 to-transparent opacity-95" />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#0c2238]/35 via-transparent to-cyan/10 opacity-80 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100" />

                      {/* Hover light sweep */}
                      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />

                      {/* Index watermark */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-3 top-3 font-display text-[2.4rem] font-semibold leading-none tracking-tight text-white/[0.12] transition-colors duration-500 group-hover:text-cyan/25 sm:text-[2.75rem]"
                      >
                        {indexLabel}
                      </span>

                      {/* Cyan edge accent */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-cyan via-cyan/70 to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100" />

                      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-3.5 sm:p-4">
                        <span className="font-display text-[1.05rem] font-semibold leading-[1.15] tracking-[-0.02em] text-white sm:text-[1.15rem] lg:text-[1.2rem]">
                          {label}
                        </span>

                        <span className="mt-1.5 max-h-0 overflow-hidden text-[11px] leading-snug text-white/70 opacity-0 transition-all duration-500 ease-out group-hover:max-h-16 group-hover:opacity-100 sm:text-xs">
                          {industry.tagline}
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
  );
}
