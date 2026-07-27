"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { MagneticButton } from "@/components/MagneticButton";

const nodes = [
  {
    id: "cameras",
    label: "Cameras & Devices",
    detail: "Ingest live streams and sensor signals from the field estate.",
  },
  {
    id: "ai",
    label: "ORION AI Engine",
    detail: "Detect events, score confidence, and apply site policies.",
  },
  {
    id: "vms",
    label: "Video & Analytics",
    detail: "Unify walls, search, and analytics into one operations layer.",
  },
  {
    id: "alerts",
    label: "Alerts & Dashboard",
    detail: "Route prioritized alerts into operator timelines and KPIs.",
  },
  {
    id: "action",
    label: "Human Action",
    detail: "Enable confident decisions with evidence-ready context.",
  },
];

export function ArchitectureSection() {
  const [active, setActive] = useState<string | null>("ai");
  const reduce = useReducedMotion();
  const selected = nodes.find((n) => n.id === active) ?? nodes[1];

  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display max-w-3xl text-[clamp(2.1rem,4.8vw,4rem)] uppercase text-blue-gradient"
        >
          From Camera to Decision.
          <br />
          In Real Time.
        </motion.h2>

        <div className="panel relative mt-12 overflow-hidden p-6 md:p-10">
          <div className="absolute inset-0 grid-texture opacity-30" />

          <div className="relative hidden lg:block">
            <svg className="absolute left-0 top-1/2 h-2 w-full -translate-y-1/2" aria-hidden>
              <line
                x1="4%"
                y1="50%"
                x2="96%"
                y2="50%"
                stroke="rgba(43,140,255,0.35)"
                strokeWidth="2"
                strokeDasharray="6 8"
              />
            </svg>

            {!reduce
              ? Array.from({ length: 6 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-blue shadow-[0_0_12px_#1565d8]"
                    animate={{ left: ["4%", "96%"], opacity: [0, 1, 1, 0] }}
                    transition={{
                      duration: 4.2,
                      delay: i * 0.65,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                ))
              : null}

            <div className="relative z-10 grid grid-cols-5 gap-4">
              {nodes.map((node) => (
                <button
                  key={node.id}
                  type="button"
                  onClick={() => setActive(node.id)}
                  className={`rounded-[20px] border px-4 py-6 text-left transition ${
                    active === node.id
                      ? "border-blue/60 bg-[#101a2c] shadow-[0_0_28px_rgba(48,227,255,0.15)]"
                      : "border-line bg-surface hover:border-blue/40"
                  }`}
                >
                  <span className="mb-4 block h-2.5 w-2.5 rounded-full bg-blue" />
                  <span className="font-display text-base leading-tight text-text">{node.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="relative space-y-3 lg:hidden">
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => setActive(node.id)}
                className={`w-full rounded-[16px] border px-4 py-4 text-left ${
                  active === node.id ? "border-blue/50 bg-[#101a2c]" : "border-line bg-surface"
                }`}
              >
                <span className="font-display text-text">{node.label}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="relative mt-8 rounded-[16px] border border-line bg-bg/60 p-5"
            >
              <p className="eyebrow">{selected.label}</p>
              <p className="mt-2 max-w-2xl text-muted">{selected.detail}</p>
            </motion.div>
          </AnimatePresence>

          <div className="relative mt-8">
            <MagneticButton href="/solutions" variant="outline">
              Explore the ORION Platform
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
