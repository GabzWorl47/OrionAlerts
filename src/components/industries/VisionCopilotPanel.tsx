import { Search } from "lucide-react";
import { industrySharedCopy } from "@/lib/industries/shared";
import type { PublicIndustryPage } from "@/lib/industries/types";

function CopilotAvatar() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(25,184,255,0.18)]">
      <Search size={12} strokeWidth={2.4} className="text-[var(--industry-accent)]" aria-hidden />
    </span>
  );
}

/**
 * Static example conversation. Everything, including the example answer, is
 * in the server-rendered HTML. The answer belongs to prompts[0] only; the
 * other prompts are listed as further questions to try.
 */
export function VisionCopilotPanel({
  page,
  kicker,
  heading,
}: {
  page: PublicIndustryPage;
  kicker: string;
  heading: string;
}) {
  const answeredPrompt = page.copilot.prompts[0];

  return (
    <div className="industry-copilot">
      <div>
        <p
          className="industry-kicker inline-flex items-center gap-2"
          style={{ color: "var(--industry-accent)" }}
        >
          <Search size={14} strokeWidth={2.4} aria-hidden />
          {kicker}
        </p>
        <h2 className="industry-h2 mt-2" style={{ color: "#fff", maxWidth: "16ch" }}>
          {heading}
        </h2>
        <p className="industry-prose" style={{ color: "#b9c7d9" }}>
          {industrySharedCopy.copilotIntro}
        </p>
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
          Questions to try
        </p>
        <ol className="mt-3 space-y-3">
          {page.copilot.prompts.map((prompt, index) => (
            <li
              key={prompt}
              className="industry-copilot__prompt cursor-default"
              aria-current={index === 0 ? "true" : undefined}
              style={
                index === 0
                  ? { borderColor: "rgba(126,211,255,0.7)", background: "rgba(25,184,255,0.12)" }
                  : undefined
              }
            >
              <span className="block text-sm font-medium leading-relaxed text-white">{prompt}</span>
              {index === 0 ? (
                <span className="mt-1.5 block text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(126,211,255,0.85)]">
                  Example answer shown
                </span>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <figure className="relative m-0 flex min-h-[320px] flex-col overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.06] p-5 md:p-6">
        <figcaption className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
          Illustrative example — not a live product result.
        </figcaption>

        <div className="mt-4 flex flex-1 flex-col justify-end gap-3">
          <div className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[rgba(25,184,255,0.18)] px-4 py-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(126,211,255,0.75)]">
              Question
            </p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-white">{answeredPrompt}</p>
          </div>

          <div className="mr-auto max-w-[94%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-4 md:px-5">
            <span className="mb-1 inline-flex items-center gap-1.5">
              <CopilotAvatar />
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(126,211,255,0.85)]">
                Vision Copilot
              </span>
            </span>
            <p className="mt-3 text-sm font-semibold text-white">Location</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">
              {page.locationContext.hierarchyExample.map((level) => level.example).join(" → ")}
            </p>
            <p className="mt-4 text-sm font-semibold text-white">Answer</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">{page.copilot.exampleAnswer}</p>
            <p className="mt-4 text-sm font-semibold text-white">Decision owner</p>
            <p className="mt-1.5 text-sm leading-relaxed text-white/75">
              {page.sceneIntelligence.decisionOwner}
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
}
