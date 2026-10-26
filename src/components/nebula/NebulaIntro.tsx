"use client";

import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/ui";
import { nebulaDefinition, nebulaTerms } from "@/lib/nebula-os";

/**
 * Editorial prose block: "What is Nebula OS?".
 * Single measure (~68ch), lead paragraph slightly larger, subtle left rule.
 */
export function NebulaIntro() {
  return (
    <Section id="what-is-nebula-os">
      <div className="max-w-[68ch]">
        <Reveal>
          <p className="eyebrow mb-3">Overview</p>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text">
            {nebulaDefinition.heading}
          </h2>
        </Reveal>

        <div className="mt-7 border-l border-blue/15 pl-5 sm:pl-7 md:mt-8">
          {nebulaDefinition.body.map((paragraph, index) => (
            <Reveal key={index} delay={0.05 * index}>
              <p
                className={
                  index === 0
                    ? "text-[1.05rem] leading-[1.75] text-muted-strong sm:text-[1.15rem] sm:leading-[1.8]"
                    : "mt-5 text-[0.975rem] leading-[1.75] text-muted-strong sm:text-base sm:leading-[1.8] md:mt-6"
                }
              >
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <dl className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-10">
            {nebulaTerms.map((item) => (
              <div
                key={item.term}
                className="rounded-[18px] border border-blue/10 bg-white/60 px-5 py-4"
              >
                <dt className="text-sm font-semibold text-text">{item.term}</dt>
                <dd className="mt-1.5 text-sm leading-relaxed text-muted-strong">
                  {item.definition}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
