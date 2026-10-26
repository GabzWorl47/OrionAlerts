import { SolutionFactStrip } from "@/components/SolutionFactStrip";
import type { Solution } from "@/lib/site";

const overviewArtBySlug: Record<
  string,
  { watermark: string; lead: string }
> = {
  vms: {
    watermark: "VMS",
    lead: "Unify every camera — one wall, one workflow.",
  },
  "ai-analytics": {
    watermark: "AI",
    lead: "Turn live video into real-time AI alerts.",
  },
  "asset-tracking": {
    watermark: "ASSET",
    lead: "Know what you own, where it is and who has it.",
  },
  "amc-management": {
    watermark: "AMC",
    lead: "Every contract, warranty and service ticket in one place.",
  },
  "health-monitoring": {
    watermark: "HEALTH",
    lead: "Spot infrastructure issues before they go dark.",
  },
};

type SolutionOverviewArtProps = {
  solution: Solution;
};

export function SolutionOverviewArt({ solution }: SolutionOverviewArtProps) {
  const art = overviewArtBySlug[solution.slug] ?? {
    watermark: solution.shortName.split(" ")[0]?.toUpperCase() ?? "ORION",
    lead: solution.headline,
  };

  return (
    <section className="section-y-compact relative overflow-hidden bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(126,200,255,0.28),transparent_55%)]"
        aria-hidden
      />
      <p
        className="pointer-events-none absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 select-none font-display text-[clamp(5.5rem,18vw,12rem)] font-semibold uppercase leading-none tracking-[-0.06em] text-blue/[0.045]"
        aria-hidden
      >
        {art.watermark}
      </p>

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-7 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan/70" aria-hidden />
              <p className="eyebrow mb-0 tracking-[0.22em] text-blue/70">Overview</p>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan/70" aria-hidden />
            </div>

            <h2
              id="what-is"
              className="font-display text-[clamp(1.55rem,3.2vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-text"
            >
              {solution.definition.question}
            </h2>

            {/* Definition-first answer (40–60 words) directly under the question. */}
            <p className="mx-auto mt-5 max-w-2xl text-base leading-[1.75] text-text md:text-lg">
              {solution.definition.answer}
            </p>
          </div>

          <p className="font-display text-[clamp(1.05rem,2.2vw,1.35rem)] italic font-medium leading-snug tracking-[-0.02em] text-blue/80">
            {art.lead}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-[15px] leading-[1.75] text-muted md:text-base">
            {solution.overview}
          </p>
        </div>

        <SolutionFactStrip className="mx-auto mt-8 max-w-5xl" />
      </div>
    </section>
  );
}
