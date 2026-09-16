import { ChevronDown } from "lucide-react";

import { Section, SectionHeading } from "@/components/ui";
import { nebulaFaqs } from "@/lib/nebula-os";

const DEFAULT_HEADING = "Nebula OS — frequently asked questions";

/**
 * FAQ built on native <details>/<summary>.
 *
 * No client JS and no state: every answer ships in the DOM, so it is
 * crawlable and extractable even with JavaScript disabled, and keyboard
 * and screen-reader behaviour is whatever the browser already provides.
 */
export function NebulaFaq({ heading = DEFAULT_HEADING }: { heading?: string }) {
  return (
    <Section id="nebula-faq">
      <SectionHeading eyebrow="FAQ" title={heading} />

      <div className="overflow-hidden rounded-[28px] border border-blue/10 bg-white/60 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]">
        {nebulaFaqs.map((faq) => (
          <details
            key={faq.question}
            className="group border-b border-blue/[0.07] last:border-b-0"
          >
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 transition-smooth-fast focus-ring hover:bg-white/70 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
              <h3 className="min-w-0 text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-text sm:text-base">
                {faq.question}
              </h3>
              <ChevronDown
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform duration-[var(--dur-base)] ease-[var(--ease-soft)] group-open:rotate-180 group-open:text-blue"
              />
            </summary>

            <div className="px-5 pb-6 sm:px-7 sm:pb-7">
              <p className="max-w-3xl text-sm leading-relaxed text-muted-strong sm:text-[0.9375rem]">
                {faq.answer}
              </p>
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
