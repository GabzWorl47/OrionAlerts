import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/ui";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Careers",
  description:
    "OrionAlerts is not listing open roles on this site yet. Reach the team via Contact for career inquiries.",
  pathname: "/careers",
});

export default function CareersPage() {
  return (
    <PageShell>
      <Section narrow className="pt-14 pb-20">
        <p className="eyebrow">Company</p>
        <h1 className="display mt-3 text-4xl text-text md:text-5xl">Careers</h1>
        <p className="lede mt-4">
          We are not publishing open roles on this website right now. When positions open, they will
          be listed here.
        </p>
        <div className="mt-8 space-y-3 text-[1.0625rem] leading-[1.72] text-muted">
          <p>
            If you want to introduce yourself or ask about future openings, send a short note through{" "}
            <Link href="/contact" className="font-semibold text-blue hover:underline">
              Contact
            </Link>{" "}
            or email{" "}
            <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">
              {site.email}
            </a>
            . Include the kind of work you do and how you prefer to be reached.
          </p>
          <p>
            For product questions or partner paths, see{" "}
            <Link href="/faqs" className="font-semibold text-blue hover:underline">
              FAQs
            </Link>{" "}
            and{" "}
            <Link href="/partners" className="font-semibold text-blue hover:underline">
              Partners
            </Link>
            .
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
