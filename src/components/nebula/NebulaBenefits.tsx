"use client";

import { Reveal } from "@/components/Reveal";
import { nebulaBenefits } from "@/lib/nebula-os";

export function NebulaBenefits() {
  return (
    <div className="mt-12 md:mt-14">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-9">
        {nebulaBenefits.map((benefit, index) => (
          <Reveal key={benefit.id} delay={0.04 * (index % 3)}>
            <article className="border-l border-blue/20 pl-4 md:pl-5">
              <h3 className="text-[15px] font-semibold leading-snug text-text md:text-base">
                {benefit.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted md:text-[15px]">
                {benefit.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
