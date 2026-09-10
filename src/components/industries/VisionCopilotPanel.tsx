"use client";

import { useState } from "react";
import type { IndustryPageRecord } from "@/lib/industries/types";

export function VisionCopilotPanel({
  page,
}: {
  page: IndustryPageRecord;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className="industry-copilot">
      <div>
        <p className="industry-kicker" style={{ color: "var(--industry-accent)" }}>
          Vision Copilot
        </p>
        <h2 className="industry-h2" style={{ color: "#fff", maxWidth: "14ch" }}>
          {page.copilot.heading}
        </h2>
        <p className="industry-prose" style={{ color: "#b9c7d9" }}>
          {page.copilot.body}
        </p>
        <div className="mt-6 space-y-3">
          {page.copilot.prompts.map((prompt, index) => (
            <button
              key={prompt}
              type="button"
              className="industry-copilot__prompt"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
                Example question {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-sm font-medium leading-relaxed text-white">
                {prompt}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-[20px] border border-white/15 bg-white/[0.06] p-5 md:p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
          Illustrative example
        </p>
        <p className="mt-3 text-sm font-semibold text-white">Selected question</p>
        <p className="mt-1.5 text-[15px] leading-relaxed text-white/90">
          {page.copilot.prompts[active]}
        </p>
        <p className="mt-5 text-sm font-semibold text-white">Mapped context</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75">
          {page.locationContext.hierarchyExample.map((level) => level.example).join(" → ")} · Camera
        </p>
        <p className="mt-5 text-sm font-semibold text-white">Suggested reading of available observations</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75">{page.copilot.exampleAnswer}</p>
        <p className="mt-5 text-sm font-semibold text-white">Decision owner</p>
        <p className="mt-1.5 text-sm leading-relaxed text-white/75">
          {page.sceneIntelligence.decisionOwner}
        </p>
      </div>
    </div>
  );
}
