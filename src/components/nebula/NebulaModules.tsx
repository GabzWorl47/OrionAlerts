"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaModules, type NebulaModule } from "@/lib/nebula-os";

function ModuleRow({ mod, index }: { mod: NebulaModule; index: number }) {
  const flipped = index % 2 === 1;

  return (
    <Reveal delay={0.04}>
      <article
        id={mod.id}
        className="scroll-mt-28 overflow-hidden rounded-[32px] border border-blue/10 bg-white/70 p-6 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] sm:p-8 lg:p-10"
      >
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-12">
          <div className={flipped ? "lg:order-2" : "lg:order-1"}>
            <p className="eyebrow mb-3">{mod.label}</p>
            <h3 className="text-[clamp(1.25rem,2.4vw,1.75rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-text">
              {mod.heading}
            </h3>
            <p className="mt-4 max-w-[52ch] text-[0.9375rem] leading-[1.7] text-muted-strong sm:text-base">
              {mod.summary}
            </p>
            <Link
              href={mod.href}
              className="focus-ring transition-smooth-fast mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-blue hover:text-cyan"
            >
              {mod.linkLabel}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className={flipped ? "lg:order-1" : "lg:order-2"}>
            <ul className="space-y-3 border-t border-blue/10 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {mod.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[0.9375rem] leading-relaxed text-muted-strong"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-cyan"
                  />
                  <span className="min-w-0">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/**
 * The deep-dive module section — one full-width row per capability module,
 * alternating the copy / points columns on large screens.
 */
export function NebulaModules() {
  return (
    <Section id="nebula-modules">
      <SectionHeading
        eyebrow="THE MODULES"
        title="What runs inside Nebula OS"
        lede="Five capability modules, one operating system, one shared record of every camera, site and event."
      />

      <div className="space-y-6 lg:space-y-8">
        {nebulaModules.map((mod, index) => (
          <ModuleRow key={mod.id} mod={mod} index={index} />
        ))}
      </div>
    </Section>
  );
}
