"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const features = [
  {
    title: "Find footage in seconds with any search criteria",
    description:
      "Search people, vehicles, and moments across sites with attribute and timeline filters.",
    label: "Forensic search",
  },
  {
    title: "Immediately get alerted to concerning activity",
    description: "Prioritized AI alerts for intrusion, loitering, crowding, and custom rule packs.",
    label: "Smart alerts",
  },
  {
    title: "Deter unwanted activity with AI-assisted responses",
    description: "Route high-confidence events to operators with evidence-ready context.",
    label: "Active deterrence",
  },
  {
    title: "Track assets across facilities in real time",
    description: "Live maps, geofences, and custody history for high-value equipment.",
    label: "Asset tracking",
  },
  {
    title: "Operate multi-site live walls from one console",
    description: "Unified video command for recording, roles, and incident response.",
    label: "Video management",
  },
];

export function FeatureCarousel() {
  const [active, setActive] = useState(0);
  const reduce = useSafeReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setActive((v) => (v + 1) % features.length), 4500);
    return () => clearInterval(timer);
  }, [reduce]);

  const current = features[active];

  return (
    <section className="relative overflow-hidden py-16 md:py-20">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-texture opacity-30" />

      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="display mt-2 max-w-3xl text-[clamp(1.85rem,4vw,3rem)] uppercase text-steel-gradient">
            Proactive physical security, powered by AI
          </h2>
          <p className="description mt-4 max-w-2xl text-base md:text-lg">
            One platform for search, alerts, deterrence, assets, and live video — built for operators
            who need clarity under pressure.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-10">
          <Reveal direction="left" delay={0.08}>
            <div className="flex flex-col gap-1.5" role="tablist" aria-label="Platform capabilities">
              {features.map((feature, index) => {
                const isActive = active === index;
                return (
                  <button
                    key={feature.title}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(index)}
                    className={`group relative overflow-hidden rounded-[14px] border px-4 py-3 text-left transition duration-300 ${
                      isActive
                        ? "border-blue/30 bg-white shadow-[0_8px_32px_rgba(43,140,255,0.12)]"
                        : "border-transparent bg-transparent hover:border-line hover:bg-surface-2/70"
                    }`}
                  >
                    {isActive ? (
                      <span
                        className="absolute inset-y-2 left-0 w-[3px] rounded-full bg-blue"
                        aria-hidden
                      />
                    ) : null}
                    {isActive && !reduce ? (
                      <motion.span
                        layoutId="feature-glow"
                        className="absolute inset-0 bg-gradient-to-r from-blue/[0.06] via-transparent to-cyan/[0.04]"
                        transition={{ type: "spring", stiffness: 280, damping: 28 }}
                      />
                    ) : null}
                    <div className="relative flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 font-display text-xs font-semibold tabular-nums ${
                          isActive ? "text-blue" : "text-caption"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p
                        className={`text-[0.9375rem] font-medium leading-snug md:text-base ${
                          isActive ? "font-semibold text-text" : "text-muted-strong"
                        }`}
                      >
                        {feature.title}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.14}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                role="tabpanel"
                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -12, scale: 0.99 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="panel overflow-hidden"
              >
                <div className="relative aspect-[16/10] min-h-[200px] command-panel sm:min-h-[240px]">
                  <div className="scanlines absolute inset-0 opacity-35" />
                  {!reduce ? (
                    <motion.div
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                      animate={{ top: ["8%", "92%", "8%"] }}
                      transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
                    />
                  ) : null}
                  <div className="relative flex h-full items-end p-5 md:p-6">
                    <span className="inline-flex w-fit rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-cyan">
                      {current.label}
                    </span>
                  </div>
                </div>
                <div className="border-t border-line bg-surface-2/40 px-5 py-4 md:px-6 md:py-5">
                  <p className="font-display text-lg font-semibold leading-snug text-text md:text-xl">
                    {current.title}
                  </p>
                  <p className="description mt-2 text-sm md:text-[0.9375rem]">{current.description}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
