"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Activity, Eye, Lock, Network, Radar } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/Reveal";

const items = [
  { label: "AI-Powered Detection", icon: Radar },
  { label: "Real-Time Visibility", icon: Eye },
  { label: "Enterprise Security", icon: Lock },
  { label: "Scalable Infrastructure", icon: Network },
  { label: "24/7 Operational Intelligence", icon: Activity },
];

export function TrustStrip() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-line bg-surface">
      {!reduce ? (
        <motion.div
          className="pointer-events-none absolute bottom-0 left-0 h-px w-1/3 bg-gradient-to-r from-transparent via-cyan to-transparent"
          animate={{ x: ["-20%", "320%"] }}
          transition={{ duration: 3.5, ease: "linear", repeat: Infinity }}
        />
      ) : null}
      <div className="container py-5">
        <Stagger className="flex flex-wrap items-center justify-between gap-4" delay={0.05}>
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-muted">
                <item.icon size={14} className="text-cyan" />
                <span>{item.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
