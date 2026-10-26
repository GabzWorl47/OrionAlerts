"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";
import {
  nebulaCapabilities,
  cloudLayer,
  nebulaCoreEngines,
} from "@/lib/nebula-os";
import { ArchitectureLayer } from "@/components/nebula/ArchitectureLayer";
import { CapabilityCard } from "@/components/nebula/CapabilityCard";
import { NebulaCore } from "@/components/nebula/NebulaCore";

export function NebulaArchitecture() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const reduce = useSafeReducedMotion();

  return (
    <div
      id="nebula-architecture"
      aria-labelledby="nebula-architecture-heading"
      role="region"
      className="relative mt-10 md:mt-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-[32px] bg-[radial-gradient(ellipse_at_50%_20%,rgba(43,140,255,0.08),transparent_55%)]"
      />

      {/*
        One responsive layout for every breakpoint (previously a desktop and a
        mobile copy were both in the DOM, duplicating every heading).
      */}
      <div className="space-y-4 md:space-y-5">
        <h2
          id="nebula-architecture-heading"
          className="text-center text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold leading-snug tracking-[-0.02em] text-text"
        >
          Nebula OS architecture: core engines, five modules and the cloud layer
        </h2>

        <div className="relative rounded-[24px] border border-blue/10 bg-white/50 p-3 shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] backdrop-blur-sm sm:p-4 md:rounded-[32px] md:p-6">
          <NebulaCore />

          <div className="mt-4">
            <ArchitectureLayer
              title="Core Engines"
              items={nebulaCoreEngines}
              tone="core"
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {nebulaCapabilities.map((capability, index) => (
              <div
                key={capability.id}
                className={
                  index < 3
                    ? "lg:col-span-2"
                    : index === 3
                      ? "lg:col-span-2 lg:col-start-2"
                      : "lg:col-span-2"
                }
              >
                <CapabilityCard
                  capability={capability}
                  active={hoveredId === capability.id}
                  dimmed={hoveredId !== null && hoveredId !== capability.id}
                  onHover={setHoveredId}
                />
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <ArchitectureLayer title="Cloud Layer" items={cloudLayer} tone="cloud" />
        </motion.div>

        <p className="text-center text-[12px] font-medium leading-relaxed tracking-[0.03em] text-muted md:text-[13px] md:tracking-[0.04em]">
          Cameras → SDKs → Drivers → Nebula OS → Cloud / Command Center
        </p>
      </div>
    </div>
  );
}
