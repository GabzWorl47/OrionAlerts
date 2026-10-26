import Image from "next/image";
import { WorkflowArchitectureStepper } from "@/components/WorkflowArchitectureStepper";
import type { Solution } from "@/lib/site";
import type { SolutionPageContent } from "@/app/solutions/solution-page-content";

type SolutionHowItWorksProps = {
  solution: Solution;
  content: SolutionPageContent;
};

/**
 * "How it works": the workflow as a numbered list (text, not an image), the
 * diagram underneath with the architecture spelled out in its caption, and —
 * for Asset Tracking, which has no diagram — the benefits list alongside.
 */
export function SolutionHowItWorks({ solution, content }: SolutionHowItWorksProps) {
  const { diagram } = content;
  const showBenefits = !diagram && solution.benefits.length > 0;

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative scroll-mt-[calc(var(--header-h)+1.25rem)] overflow-hidden bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)] py-10 md:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(126,200,255,0.28),transparent_55%)]"
        aria-hidden
      />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow mb-2">How it works</p>
          <h2
            id="how-it-works-heading"
            className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text"
          >
            {content.howItWorksHeading}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
            {content.howItWorksLede}
          </p>
        </div>

        <div
          className={`mx-auto mt-8 grid gap-8 md:gap-10 ${
            showBenefits ? "max-w-5xl md:grid-cols-2" : "max-w-3xl"
          }`}
        >
          <WorkflowArchitectureStepper
            steps={solution.workflow}
            details={solution.workflowDetails}
          />
          {showBenefits ? (
            <div>
              <h3 className="font-display text-[1.25rem] font-semibold tracking-[-0.02em] text-text">
                What changes for IT and facilities teams
              </h3>
              <ul className="mt-4 space-y-2.5">
                {solution.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="surface rounded-[16px] px-4 py-2.5 text-sm text-muted-strong"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>

        {diagram ? (
          <figure className="mx-auto mt-10 max-w-6xl">
            <Image
              src={diagram.src}
              alt={diagram.alt}
              width={diagram.width}
              height={diagram.height}
              sizes="(max-width: 1024px) 100vw, 72rem"
              className="h-auto w-full rounded-[22px] object-contain"
            />
            {solution.architecture.length > 0 ? (
              <figcaption className="mx-auto mt-4 max-w-4xl text-center text-sm text-muted-strong">
                <span className="font-semibold text-text">Architecture, in order: </span>
                <ol className="inline">
                  {solution.architecture.map((layer, index) => (
                    <li key={layer} className="inline">
                      {index + 1}. {layer}
                      {index < solution.architecture.length - 1 ? " → " : ""}
                    </li>
                  ))}
                </ol>
              </figcaption>
            ) : null}
          </figure>
        ) : null}
      </div>
    </section>
  );
}
