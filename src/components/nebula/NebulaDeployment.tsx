"use client";

import { Check } from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { Section, SectionHeading } from "@/components/ui";
import { nebulaDeployment } from "@/lib/nebula-os";

/**
 * Deployment models — a 3-up grid on desktop, stacked on mobile.
 * Each card leads with who the model is for, then the description,
 * then the short trait list.
 */
export function NebulaDeployment() {
  return (
    <Section id="nebula-deployment">
      <SectionHeading
        eyebrow="DEPLOYMENT"
        title={nebulaDeployment.heading}
        lede={nebulaDeployment.lede}
      />

      <div className="grid gap-5 md:grid-cols-3 lg:gap-6">
        {nebulaDeployment.models.map((model, index) => (
          <Reveal key={model.id} delay={0.05 * index} className="h-full">
            <article className="flex h-full flex-col rounded-[28px] border border-blue/10 bg-white/60 p-6 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] sm:p-7">
              <p className="eyebrow mb-2.5">{model.bestFor}</p>

              <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-text sm:text-xl">
                {model.name}
              </h3>

              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-strong">
                {model.description}
              </p>

              <ul className="mt-5 space-y-2.5 border-t border-blue/10 pt-5">
                {model.traits.map((trait) => (
                  <li key={trait} className="flex items-start gap-2.5">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan/25 text-blue"
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="min-w-0 text-sm leading-relaxed text-muted-strong">
                      {trait}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
