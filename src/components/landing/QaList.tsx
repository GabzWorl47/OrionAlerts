import { ChevronDown } from "lucide-react";

export type QaItem = {
  question: string;
  answer: string;
};

/**
 * Short question-and-answer list built on native <details>/<summary>.
 *
 * Server-rendered with no client JS: every answer ships in the HTML, so it is
 * crawlable, matches the page's FAQPage JSON-LD, and keyboard/screen-reader
 * behaviour is whatever the browser already provides. Questions are <h3>s so
 * they sit under the section's H2 in the outline.
 */
export function QaList({
  items,
  tone = "light",
}: {
  items: readonly QaItem[];
  tone?: "light" | "surface";
}) {
  return (
    <div
      className={`overflow-hidden rounded-[24px] border border-line shadow-[0_18px_50px_-34px_rgba(43,140,255,0.4)] ${
        tone === "surface" ? "bg-surface" : "bg-white"
      }`}
    >
      {items.map((item, index) => (
        <details
          key={item.question}
          className="group border-b border-line last:border-b-0"
          open={index === 0}
        >
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-5 transition-smooth-fast focus-ring hover:bg-surface-2/60 sm:px-7 sm:py-6 [&::-webkit-details-marker]:hidden">
            <h3 className="min-w-0 text-[0.9375rem] font-semibold leading-snug tracking-[-0.01em] text-text sm:text-base">
              {item.question}
            </h3>
            <ChevronDown
              aria-hidden="true"
              className="mt-0.5 h-5 w-5 shrink-0 text-muted transition-transform duration-300 group-open:rotate-180 group-open:text-blue"
            />
          </summary>
          <div className="px-5 pb-6 sm:px-7 sm:pb-7">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-strong sm:text-[0.9375rem]">
              {item.answer}
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}
