"use client";

import { Reveal } from "@/components/Reveal";
import { nebulaSectionCopy, nebulaTechnology } from "@/lib/nebula-os";

export function TechnologyChips() {
  return (
    <Reveal delay={0.06}>
      <div className="mt-12 text-center md:mt-14">
        <h3 className="text-[clamp(1.25rem,2.4vw,1.65rem)] font-semibold leading-snug tracking-[-0.02em] text-text">
          {nebulaSectionCopy.platformHeadline}
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-relaxed text-muted-strong md:text-base">
          {nebulaSectionCopy.platformCopy}
        </p>
        <ul className="mx-auto mt-7 flex max-w-4xl flex-wrap items-center justify-center gap-2.5 md:mt-8 md:gap-3">
          {nebulaTechnology.map((chip) => (
            <li
              key={chip}
              className="rounded-full border border-line bg-white/70 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-muted-strong md:px-4 md:py-2 md:text-sm"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
