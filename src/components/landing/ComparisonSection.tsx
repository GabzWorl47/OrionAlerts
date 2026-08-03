"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { comparisonRows } from "@/lib/homepage";

type View = "compare" | "traditional" | "orion";

export function ComparisonSection() {
  const reduce = useReducedMotion();
  const [view, setView] = useState<View>("compare");

  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(43,140,255,0.1),transparent_45%)]" />
      <div className="container relative">
        <Reveal>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="eyebrow">Upgrade path</p>
              <h2
                id="comparison-heading"
                className="display mt-2 text-[clamp(1.85rem,4vw,2.85rem)] uppercase text-steel-gradient"
              >
                Upgrade from Outdated Systems to Orion AI
              </h2>
            </div>
            <MagneticButton href="/book-demo" className="self-start lg:self-auto">
              Modernize Your Operations with Orion AI
              <ArrowRight size={16} />
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-6 flex gap-2 md:hidden" role="tablist" aria-label="Comparison views">
          {(
            [
              ["compare", "Both"],
              ["traditional", "Traditional"],
              ["orion", "Orion AI"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={view === id}
              onClick={() => setView(id)}
              className={`min-h-11 rounded-full px-4 text-sm font-semibold transition ${
                view === id
                  ? "bg-blue text-white"
                  : "border border-line bg-surface text-muted-strong"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <Reveal delay={0.06}>
          <div className="mt-8 overflow-hidden rounded-[24px] border border-line bg-surface shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
            <div className="hidden grid-cols-2 border-b border-line md:grid">
              <div className="bg-surface-2 px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Traditional Systems
                </p>
              </div>
              <div className="bg-[linear-gradient(135deg,rgba(43,140,255,0.14),rgba(48,227,255,0.1))] px-6 py-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">
                  Orion AI
                </p>
              </div>
            </div>

            <ul className="divide-y divide-line">
              {comparisonRows.map((row) => (
                <li
                  key={row.traditional}
                  className={`grid md:grid-cols-2 ${
                    reduce ? "" : "transition-colors duration-300"
                  }`}
                >
                  <div
                    className={`px-5 py-4 md:px-6 ${
                      view === "orion" ? "hidden md:block" : ""
                    } ${view === "traditional" ? "block" : ""}`}
                  >
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted md:hidden">
                      Traditional
                    </p>
                    <p className="text-sm leading-relaxed text-muted-strong md:text-[15px]">
                      {row.traditional}
                    </p>
                  </div>
                  <div
                    className={`bg-[linear-gradient(90deg,rgba(43,140,255,0.06),transparent)] px-5 py-4 md:px-6 ${
                      view === "traditional" ? "hidden md:block" : ""
                    }`}
                  >
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue md:hidden">
                      Orion AI
                    </p>
                    <p className="text-sm font-medium leading-relaxed text-text md:text-[15px]">
                      {row.orion}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
