"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const industries = [
  {
    name: "Manufacturing",
    problem: "Blind spots across large floorplates and PPE exceptions.",
    capability: "VMS + AI rules for zones, people, and equipment.",
    outcome: "Faster safety response with fewer missed events.",
  },
  {
    name: "Logistics",
    problem: "Yard and dock incidents are hard to reconstruct quickly.",
    capability: "Searchable video, movement alerts, multi-site walls.",
    outcome: "Shorter investigation cycles across DCs.",
  },
  {
    name: "Retail",
    problem: "Shrinkage and after-hours exceptions overwhelm teams.",
    capability: "Prioritized AI alerts with evidence-ready timelines.",
    outcome: "Higher signal monitoring without proportional staffing.",
  },
  {
    name: "Smart Cities",
    problem: "Fragmented camera estates lack a shared operating picture.",
    capability: "Unified command views with scalable alert routing.",
    outcome: "Coordinated response across districts and agencies.",
  },
  {
    name: "Corporate Campuses",
    problem: "Distributed buildings create inconsistent coverage.",
    capability: "Policy-driven analytics and campus-wide live ops.",
    outcome: "Consistent security posture across locations.",
  },
  {
    name: "Critical Infrastructure",
    problem: "Perimeter pressure and audit requirements collide.",
    capability: "Hardened workflows, forensics, and estate health.",
    outcome: "Assured visibility when downtime is unacceptable.",
  },
];

export function IndustriesSection() {
  const [active, setActive] = useState(0);
  const current = industries[active];

  return (
    <section id="industries" className="relative py-24 md:py-32">
      <div className="absolute inset-0 opacity-40">
        <svg className="h-full w-full" aria-hidden>
          <defs>
            <pattern id="nodes" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(43,140,255,0.35)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#nodes)" />
        </svg>
      </div>

      <div className="container relative">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display max-w-3xl text-[clamp(2.1rem,4.8vw,4rem)] uppercase text-blue-gradient"
        >
          Built for Critical Environments.
        </motion.h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {industries.map((industry, index) => (
              <button
                key={industry.name}
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`rounded-[16px] border px-4 py-5 text-left transition ${
                  active === index
                    ? "border-blue/50 bg-surface shadow-[0_0_30px_rgba(48,227,255,0.12)]"
                    : "border-line bg-surface/60 hover:border-blue/40"
                }`}
              >
                <span className="mb-3 block h-2 w-2 rounded-full bg-blue pulse-dot" />
                <span className="font-display text-base text-text sm:text-lg">{industry.name}</span>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="panel overflow-hidden"
            >
              <div className="aspect-[16/9] border-b border-line bg-gradient-to-br from-[#12203a] via-[#0d1524] to-[#152a40]">
                <div className="flex h-full items-end p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-muted">
                    Visual panel placeholder · {current.name}
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div>
                  <p className="eyebrow">Key problem</p>
                  <p className="mt-1 text-text">{current.problem}</p>
                </div>
                <div>
                  <p className="eyebrow">ORION capability</p>
                  <p className="mt-1 text-text">{current.capability}</p>
                </div>
                <div>
                  <p className="eyebrow">Business outcome</p>
                  <p className="mt-1 text-blue">{current.outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
