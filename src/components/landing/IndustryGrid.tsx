"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { industries } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

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
  const cols = useColumnsPerRow();

  return (
    <section className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="relative mx-auto w-[min(100%-1.5rem,90rem)]">
        <motion.h2
          className="display mx-auto max-w-3xl text-center text-[clamp(1.85rem,4vw,3rem)] normal-case tracking-[-0.03em] text-text"
          initial={reduce ? false : { opacity: 0, y: 36, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease }}
        >
          Modern protection for any space.
        </motion.h2>

        <motion.div
          className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: reduce ? 0 : 0.06,
                delayChildren: reduce ? 0 : 0.08,
              },
            },
          }}
        >
          {industries.map((industry, industryIndex) => {
            const label = industry.cardLabel ?? industry.name;
            const row = Math.floor(industryIndex / cols);
            const fromLeft = row % 2 === 0;
            const slideX = fromLeft ? -40 : 40;

            return (
              <motion.div
                key={industry.slug}
                custom={{ slideX }}
                variants={
                  reduce
                    ? undefined
                    : {
                        hidden: (custom: { slideX: number }) => ({
                          opacity: 0,
                          x: custom.slideX,
                        }),
                        show: {
                          opacity: 1,
                          x: 0,
                          transition: {
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        },
                      }
                }
                className="h-full"
              >
                <motion.div
                  className="h-full"
                  whileHover={
                    reduce
                      ? undefined
                      : {
                          y: -8,
                          scale: 1.03,
                          transition: { type: "spring", stiffness: 420, damping: 24 },
                        }
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
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                      <span className="absolute bottom-3 left-3 right-3 font-display text-[0.95rem] font-semibold leading-snug text-white sm:text-[1.05rem] lg:text-[1.1rem]">
                        {label}
                      </span>
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
