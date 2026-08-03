"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  BarChart3,
  ChevronDown,
  ClipboardList,
  FileText,
  History,
  LayoutDashboard,
  MapPin,
  Package,
  QrCode,
  RefreshCw,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
};

const ease = [0.22, 1, 0.36, 1] as const;

const ICONS: LucideIcon[] = [
  Package,
  RefreshCw,
  QrCode,
  MapPin,
  UserCheck,
  History,
  FileText,
  ClipboardList,
  BarChart3,
  LayoutDashboard,
  ShieldCheck,
];

function featurePreviewText(feature: Feature) {
  const custom: Record<string, string> = {
    "Audit Trail & Compliance Reports":
      "Export ownership changes, location history, custody chain, and document access into compliance-ready reports — so audits take minutes, not days.",
    "Utilization & Performance Reports":
      "See which assets are overused, idle, or underperforming across sites. Use utilization trends to rebalance inventory and plan replacements with confidence.",
    "Dashboard & Analytics":
      "One command view of total assets, in-transit items, warranty due dates, and utilization KPIs — so security and ops share the same estate picture.",
  };

  return (
    custom[feature.title] ??
    `${feature.description} This capability helps teams act faster with clearer context, less manual review, and smoother day-to-day operations.`
  );
}

export function SolutionFeatureHighlights({ features }: { features: Feature[] }) {
  const reduce = useReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {features.map((feature, index) => {
        const Icon = ICONS[index % ICONS.length];
        const open = openId === feature.title;

        return (
          <div
            key={feature.title}
            className={`overflow-hidden rounded-[16px] border bg-white transition ${
              open
                ? "border-cyan/50 shadow-[0_12px_28px_rgba(0,0,0,0.12)]"
                : "border-line hover:border-cyan/40 hover:shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
            }`}
          >
            <button
              type="button"
              onClick={() =>
                setOpenId((current) => (current === feature.title ? null : feature.title))
              }
              aria-expanded={open}
              className="group flex w-full items-start justify-between gap-3 px-4 py-4 text-left"
            >
              <span className="min-w-0">
                <span className="mb-2 block font-display text-sm text-cyan">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="block text-sm font-semibold leading-snug text-[#0f172a] group-hover:text-blue">
                  {feature.title}
                </span>
                <span className="mt-1.5 block text-[13px] leading-relaxed text-muted-strong">
                  {feature.description}
                </span>
              </span>

              <span className="mt-0.5 flex shrink-0 items-center gap-2">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-[10px] transition ${
                    open
                      ? "bg-blue text-white"
                      : "bg-[#e8f4ff] text-blue group-hover:bg-blue/15"
                  }`}
                >
                  <Icon size={16} />
                </span>
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f3f7fc] text-muted transition ${
                    open ? "rotate-180 text-blue" : ""
                  }`}
                >
                  <ChevronDown size={16} />
                </span>
              </span>
            </button>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  key="preview"
                  initial={reduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduce ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-cyan/20 bg-[linear-gradient(180deg,#f7fbff_0%,#ffffff_100%)] px-4 pb-4 pt-3">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan">
                      Feature preview
                    </p>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted-strong">
                      {featurePreviewText(feature)}
                    </p>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
