import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { QaList } from "@/components/landing/QaList";
import { homepageFaqs } from "@/lib/homepage";

/** Short homepage FAQ; the same items are emitted as FAQPage JSON-LD in src/app/page.tsx. */
export function HomeFaq() {
  return (
    <section aria-labelledby="home-faq-heading" className="bg-surface py-14 md:py-20">
      <div className="container max-w-4xl">
        <p className="eyebrow">FAQ</p>
        <h2
          id="home-faq-heading"
          className="mt-2 text-[clamp(1.6rem,3.2vw,2.4rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
        >
          Common questions about OrionAlerts
        </h2>
        <div className="mt-8">
          <QaList items={homepageFaqs} />
        </div>
        <p className="mt-6 text-sm text-muted">
          <Link
            href="/faqs"
            className="inline-flex min-h-11 items-center gap-1.5 font-semibold text-blue transition hover:gap-2.5"
          >
            See all FAQs
            <ArrowRight size={16} aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}
