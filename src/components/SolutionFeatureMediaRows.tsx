"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  FileText,
  MapPinned,
  Package,
  ShieldCheck,
  UserCheck,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import type { Solution } from "@/lib/site";

const ICONS: LucideIcon[] = [
  Package,
  Boxes,
  ShieldCheck,
  MapPinned,
  UserCheck,
  FileText,
];

type FeatureMediaRow = {
  title: string;
  description: string;
  result?: string;
};

type SolutionFeatureMediaRowsProps = {
  solution: Solution;
  features?: FeatureMediaRow[];
};

const ASSET_TRACKING_RESULTS: Record<string, string> = {
  "Centralized Asset Inventory":
    "Replace spreadsheet chaos with one estate-wide inventory operators can trust.",
  "Asset Lifecycle Management":
    "Follow every asset from procurement to retirement without losing the trail.",
  "Serial Number Tracking":
    "Find the exact device in seconds — even across multi-site handoffs.",
  "Location & Department Mapping":
    "See what’s deployed where, by site and department, in one view.",
  "Asset Assignment & Ownership":
    "Know who is accountable the moment an asset moves or goes missing.",
  "Warranty & Documentation Management":
    "Pull warranty and supporting docs in audit moments, not after.",
};

export function SolutionFeatureMediaRows({
  solution,
  features,
}: SolutionFeatureMediaRowsProps) {
  const rows =
    features ??
    solution.features.slice(0, 6).map((feature) => ({
      ...feature,
      result: ASSET_TRACKING_RESULTS[feature.title],
    }));

  return (
    <section className="relative overflow-hidden bg-bg py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(43,140,255,0.08),transparent_45%)]" />
      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-2">Key capabilities</p>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text">
              Built for complete asset lifecycle visibility
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
              From inventory and ownership to warranty and audits — one platform for
              security and operations teams running multi-site estates.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-10 md:mt-10 md:space-y-14">
          {rows.map((feature, index) => {
            const Icon = ICONS[index % ICONS.length];
            const mediaFirst = index % 2 === 0;

            return (
              <Reveal key={feature.title} delay={0.04}>
                <div
                  className={`grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${
                    mediaFirst ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#0b1628] shadow-[0_24px_60px_-40px_rgba(15,61,120,0.5)]">
                    <Image
                      src={solution.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-90"
                      aria-hidden
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f]/80 via-[#07111f]/25 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-cyan backdrop-blur">
                        <Icon size={18} />
                      </span>
                      <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan">
                        Capability {String(index + 1).padStart(2, "0")} /{" "}
                        {String(rows.length).padStart(2, "0")}
                      </p>
                      <p className="mt-1.5 max-w-md font-display text-lg font-semibold text-white md:text-xl">
                        {feature.title}
                      </p>
                    </div>
                  </div>

                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-strong md:text-[15px]">
                      {feature.description}
                    </p>
                    {feature.result ? (
                      <p className="mt-3 border-l-2 border-cyan/70 pl-3.5 text-sm font-medium leading-relaxed text-text">
                        {feature.result}
                      </p>
                    ) : null}
                    <Link
                      href="/book-demo"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:gap-2.5"
                    >
                      See it in a demo
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
