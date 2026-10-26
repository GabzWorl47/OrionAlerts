import { ChevronDown } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui";

export type ContentFaq = { question: string; answer: string };

/**
 * FAQ list on native <details>/<summary> (same pattern as the Nebula OS FAQ):
 * no client JS, every answer in the DOM, mirrored into FAQPage JSON-LD by the
 * page that renders it.
 */
export function FaqSection({
  heading,
  faqs,
  id = "faq",
}: {
  heading: string;
  faqs: ContentFaq[];
  id?: string;
}) {
  return (
    <Section id={id} compact>
      <SectionHeading eyebrow="FAQ" title={heading} compact />
      <div className="overflow-hidden rounded-[28px] border border-blue/10 bg-white/60 backdrop-blur-sm shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="group border-b border-blue/[0.07] last:border-b-0">
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
