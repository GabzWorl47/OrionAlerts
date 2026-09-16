"use client";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaAudiences } from "@/lib/nebula-os";

/**
 * Compact 4-up audience grid (2-up on tablet, stacked on mobile).
 */
export function NebulaAudiences() {
  return (
    <Section id="nebula-audiences">
      <SectionHeading
        eyebrow="WHO IT IS FOR"
        title="Who Nebula OS is built for"
        compact
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {nebulaAudiences.map((audience, index) => (
          <Reveal
            key={audience.id}
            delay={0.04 * (index % 4)}
            className="h-full"
          >
            <article className="h-full rounded-[28px] border border-blue/10 bg-white/50 p-6 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]">
              <h3 className="text-base font-semibold leading-snug tracking-[-0.02em] text-text">
                {audience.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-strong">
                {audience.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
