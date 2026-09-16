"use client";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaProblem } from "@/lib/nebula-os";

/**
 * The "pain" section — a 2x2 grid of failure patterns, given a cooler,
 * slightly denser treatment than the rest of the page.
 */
export function NebulaProblem() {
  return (
    <Section id="nebula-problem" className="bg-blue/[0.03]">
      <SectionHeading
        eyebrow="THE PROBLEM"
        title={nebulaProblem.heading}
        lede={nebulaProblem.lede}
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {nebulaProblem.items.map((item, index) => (
          <Reveal key={item.id} delay={0.05 * (index % 2)} className="h-full">
            <article className="h-full rounded-[28px] border border-blue/10 bg-white/60 p-6 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] sm:p-7">
              <span
                aria-hidden="true"
                className="font-display text-xs font-semibold tracking-[0.16em] text-cyan"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold leading-snug tracking-[-0.02em] text-text sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-muted-strong">
                {item.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
