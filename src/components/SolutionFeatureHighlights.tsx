"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
import { featureAnchorId } from "@/lib/feature-anchors";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

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
  };

  return (
    custom[feature.title] ??
    `${feature.description} This capability helps teams act faster with clearer context, less manual review, and smoother day-to-day operations.`
  );
}

export function SolutionFeatureHighlights({ features }: { features: Feature[] }) {
  const reduce = useSafeReducedMotion();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {features.map((feature, index) => {
        const Icon = ICONS[index % ICONS.length];
        const open = openId === feature.title;

        return (
          <div
            key={feature.title}
            id={featureAnchorId(feature.title)}
            className={`group relative scroll-mt-[calc(var(--header-h)+1.25rem)] overflow-hidden rounded-[24px] border bg-white transition duration-300 hover:-translate-y-1 hover:border-blue/35 hover:shadow-[0_24px_50px_-30px_rgba(43,140,255,0.5)] ${
              open
                ? "border-blue/35 shadow-[0_24px_50px_-30px_rgba(43,140,255,0.5)]"
                : "border-line"
            }`}
          >
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue to-cyan transition ${
                open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              }`}
            />
            <button
              type="button"
              onClick={() =>
                setOpenId((current) => (current === feature.title ? null : feature.title))
              }
              aria-expanded={open}
              className="flex w-full items-start gap-5 p-6 text-left md:p-7"
            >
              <span
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition ${
                  open
                    ? "bg-blue text-white"
                    : "bg-surface-2 text-blue group-hover:bg-blue group-hover:text-white"
                }`}
              >
                <Icon size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="mt-1 block display text-xl normal-case leading-snug text-text transition group-hover:text-blue">
                  {feature.title}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-muted line-clamp-3">
                  {feature.description}
                </span>
              </span>

              <span
                className={`mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-muted transition ${
                  open ? "rotate-180 text-blue" : ""
                }`}
              >
                <ChevronDown size={16} />
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
                  <div className="border-t border-line bg-surface px-6 pb-6 pt-4 md:px-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-caption">
                      Feature preview
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
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
