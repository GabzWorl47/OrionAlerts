"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "@/components/Reveal";

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
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const timer = setInterval(() => setActive((v) => (v + 1) % features.length), 4500);
    return () => clearInterval(timer);
  }, [reduce]);

  const current = features[active];

  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Capabilities</p>
          <h2 className="display mt-3 max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
            Proactive physical security, powered by AI
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal direction="left" delay={0.08}>
            <div className="flex flex-col gap-2">
              {features.map((feature, index) => (
                <button
                  key={feature.title}
                  type="button"
                  onClick={() => setActive(index)}
                  className={`group relative overflow-hidden rounded-[16px] px-4 py-4 text-left transition duration-300 ${
                    active === index
                      ? "bg-white shadow-[0_0_30px_rgba(124,58,237,0.14)] ring-1 ring-blue/25"
                      : "hover:bg-surface-2/80"
                  }`}
                >
                  {active === index && !reduce ? (
                    <motion.span
                      layoutId="feature-glow"
                      className="absolute inset-0 bg-gradient-to-r from-blue/10 via-transparent to-cyan/10"
                      transition={{ type: "spring", stiffness: 280, damping: 28 }}
                    />
                  ) : null}
                  <p
                    className={`relative text-base font-medium leading-snug md:text-lg ${
                      active === index ? "text-text" : "text-muted"
                    }`}
                  >
                    {feature.title}
                  </p>
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.14}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 28, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.98 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="panel overflow-hidden"
              >
                <div className="relative aspect-[16/10] command-panel">
                  <div className="scanlines absolute inset-0 opacity-40" />
                  {!reduce ? (
                    <motion.div
                      className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                      animate={{ top: ["8%", "92%", "8%"] }}
                      transition={{ duration: 4.5, ease: "linear", repeat: Infinity }}
                    />
                  ) : null}
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <span className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan">
                      {current.label}
                    </span>
                    <p className="max-w-md text-sm text-white/70">{current.description}</p>
                  </div>
                </div>
                <div className="border-t border-line p-6">
                  <p className="font-display text-xl text-text">{current.title}</p>
                  <p className="mt-2 text-sm text-muted">Product visual placeholder</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
