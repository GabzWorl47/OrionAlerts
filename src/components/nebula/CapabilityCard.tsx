"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Cpu,
  Shield,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { NebulaCapability } from "@/lib/nebula-os";

const iconMap: Record<string, LucideIcon> = {
  vms: Video,
  ai: Cpu,
  health: Activity,
  assets: Shield,
  amc: Wrench,
};

type CapabilityCardProps = {
  capability: NebulaCapability;
  active?: boolean;
  dimmed?: boolean;
  onHover?: (id: string | null) => void;
};

export function CapabilityCard({
  capability,
  active = false,
  dimmed = false,
  onHover,
}: CapabilityCardProps) {
  const reduce = useReducedMotion();
  const Icon = iconMap[capability.id] ?? Cpu;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`h-full transition-opacity duration-300 ${
        dimmed ? "opacity-40" : "opacity-100"
      }`}
      onMouseEnter={() => onHover?.(capability.id)}
      onMouseLeave={() => onHover?.(null)}
      onFocus={() => onHover?.(capability.id)}
      onBlur={() => onHover?.(null)}
    >
      <Link
        href={capability.href}
        className={`group relative flex h-full flex-col rounded-[18px] border bg-white p-4 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan/50 ${
          reduce ? "" : "hover:-translate-y-1"
        } ${
          active
            ? "border-cyan/50 shadow-[0_14px_36px_-18px_rgba(43,140,255,0.55)] ring-1 ring-cyan/25"
            : "border-line shadow-[0_10px_28px_-22px_rgba(15,23,42,0.18)] hover:border-blue/35"
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${
              active ? "bg-blue text-white" : "bg-blue/10 text-blue"
            }`}
          >
            {capability.label}
          </span>
          <span
            className={`flex h-8 w-8 items-center justify-center rounded-xl transition ${
              active
                ? "bg-cyan/15 text-cyan"
                : "bg-blue/[0.06] text-blue group-hover:text-cyan"
            }`}
          >
            <Icon size={15} strokeWidth={2} aria-hidden />
          </span>
        </div>

        <h3 className="mt-3 font-display text-[15px] font-semibold leading-snug text-text transition group-hover:text-blue">
          {capability.title}
        </h3>
        <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted">
          {capability.description}
        </p>
      </Link>
    </motion.div>
  );
}
