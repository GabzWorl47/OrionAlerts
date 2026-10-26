import type { SolutionFaq } from "@/lib/site";

type SolutionFaqsProps = {
  id?: string;
  heading: string;
  faqs: SolutionFaq[];
  className?: string;
};

/**
 * Visible FAQ: H2 plus one H3 per question with its answer, all in the server
 * HTML (no accordion), so the text matches the FAQPage structured data.
 */
export function SolutionFaqs({ id = "faqs", heading, faqs, className = "" }: SolutionFaqsProps) {
  if (!faqs.length) return null;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`bg-white py-10 md:py-14 ${className}`}
    >
      <div className="container max-w-4xl">
        <p className="eyebrow mb-2 text-center">FAQs</p>
        <h2
          id={`${id}-heading`}
          className="text-center text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text"
        >
          {heading}
        </h2>
        <div className="mt-8 divide-y divide-line rounded-[22px] border border-line bg-white">
          {faqs.map((faq) => (
            <div key={faq.question} className="px-5 py-5 md:px-7 md:py-6">
              <h3 className="font-display text-[1.05rem] font-semibold leading-snug tracking-[-0.01em] text-text md:text-[1.15rem]">
                {faq.question}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-strong md:text-[15px]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
