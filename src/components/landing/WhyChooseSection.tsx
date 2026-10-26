"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const tabs = [
  {
    id: "setup",
    label: "Plug-and-play setup",
    title: "Deploy faster across sites",
    description:
      "Eliminate fragmented NVRs by blending reliable on-prem recording with scalable cloud operations.",
    bullets: [
      "Data stored on device and in cloud",
      "Automatic firmware and software updates",
      "Bridge ORION to existing cameras and sensors",
    ],
  },
  {
    id: "scale",
    label: "Scalability",
    title: "Built for multi-site estates",
    description:
      "Roll out policies, roles, and alert routing consistently — from one facility to hundreds.",
    bullets: [
      "Centralized operator console",
      "Site-level context and permissions",
      "Expand without re-architecting",
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    title: "Connect your existing stack",
    description: "Documented paths for cameras, access, ERP, CMMS, and ticketing systems.",
    bullets: [
      "Camera and sensor ingest",
      "ERP / CMMS sync for assets",
      "Partner ecosystem integrations",
    ],
  },
  {
    id: "security",
    label: "Security and privacy",
    title: "Security is part of the experience",
    description: "Cloudflare protection, rate-limited submissions, and 2FA-ready portals.",
    bullets: [
      "Role-based access control",
      "Audit-ready export trails",
      "Cloudflare-protected edge",
    ],
  },
  {
    id: "support",
    label: "24/7 support",
    title: "Operational intelligence around the clock",
    description: "Partner SLAs, AMC workflows, and support paths keep estates healthy.",
    bullets: [
      "SLA-backed ticket routing",
      "Preventive maintenance schedules",
      "Partner portal with 2FA-ready access",
    ],
  },
];

export function WhyChooseSection() {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <section className="relative overflow-hidden bg-surface py-20 md:py-24">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Why ORION</p>
          <h2 className="display mt-3 max-w-3xl text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
            Why security and IT leaders choose OrionAlerts
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition duration-300 ${
                  active === tab.id
                    ? "bg-blue text-white shadow-[0_0_24px_rgba(124,58,237,0.3)]"
                    : "bg-surface-2 text-muted hover:text-blue"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start"
          >
            <div>
              <h3 className="font-display text-2xl text-text md:text-3xl">{current.title}</h3>
              <p className="description mt-4">{current.description}</p>
              <ul className="mt-6 space-y-3">
                {current.bullets.map((bullet, i) => (
                  <motion.li
                    key={bullet}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.06 }}
                    className="flex items-start gap-3 text-sm text-text"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                    {bullet}
                  </motion.li>
                ))}
              </ul>
              <Link
                href="/book-demo"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:gap-3"
              >
                Learn more <ArrowRight size={16} />
              </Link>
            </div>

            <div className="panel aspect-[4/3] overflow-hidden">
              <div className="command-panel relative flex h-full items-center justify-center p-8">
                <div className="scanlines absolute inset-0 opacity-30" />
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative text-center"
                >
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan">{current.label}</p>
                  <p className="mt-3 text-sm text-white/70">Visual placeholder</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
