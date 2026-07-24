import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { resourceCategories } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "OrionAlerts knowledge hub — blogs, FAQs, case studies, documentation, partner resources, and comparisons.",
};

const faqs = [
  {
    q: "Are Book a Demo and Contact the same?",
    a: "No. Demo requests and contact messages are separate flows and are stored in separate ERP streams.",
  },
  {
    q: "Do you support multi-site deployments?",
    a: "Yes. The platform is designed for multi-facility operations with shared policies and local context.",
  },
  {
    q: "How do partners get certified?",
    a: "Training and certification tracks will publish under Partner Resources as program rules finalize.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Knowledge hub"
          title="Resources for buyers, operators, and partners"
          lede="A structured home for insights, proof, docs, and enablement — ready for content to land."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="surface block rounded-[var(--radius)] p-6 transition hover:border-signal/35"
            >
              <h2 className="display text-2xl text-ink">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.description}</p>
            </a>
          ))}
        </div>
      </Section>

      <Section id="insights" className="bg-white/40">
        <SectionHeading eyebrow="Insights" title="Blogs & perspectives" />
        <div className="grid gap-4 md:grid-cols-3">
          {["Operational video at scale", "Alert fatigue is an ops problem", "AMC as uptime strategy"].map(
            (title) => (
              <article key={title} className="surface rounded-[var(--radius)] p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-signal-deep">Coming soon</p>
                <h3 className="display mt-2 text-xl text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted">
                  Placeholder article card for the editorial calendar.
                </p>
              </article>
            ),
          )}
        </div>
      </Section>

      <Section id="case-studies">
        <SectionHeading eyebrow="Proof" title="Case studies" />
        <p className="max-w-2xl text-muted">
          Customer stories will publish here with measurable outcomes. Until then, request a briefing
          via demo.
        </p>
      </Section>

      <Section id="faqs" className="bg-white/40">
        <SectionHeading eyebrow="FAQs" title="Quick answers" />
        <div className="space-y-3">
          {faqs.map((item) => (
            <details key={item.q} className="surface rounded-[var(--radius)] px-5 py-4">
              <summary className="cursor-pointer font-semibold text-ink">{item.q}</summary>
              <p className="mt-2 text-sm text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      <Section id="docs">
        <SectionHeading eyebrow="Docs" title="Documentation" />
        <p className="max-w-2xl text-muted">
          Architecture notes, admin guides, and integration overviews will live here. Solution pages
          already reserve architecture diagram slots.
        </p>
      </Section>

      <Section id="partner-resources" className="bg-white/40">
        <SectionHeading eyebrow="Channel" title="Partner resources" />
        <p className="max-w-2xl text-muted">
          Enablement packs, battlecards, and portal onboarding links will publish as partner rules
          finalize.{" "}
          <Link href="/partners" className="font-semibold text-signal-deep hover:underline">
            Become a Partner
          </Link>
        </p>
      </Section>

      <Section id="comparisons">
        <SectionHeading eyebrow="Evaluate" title="Comparisons" />
        <p className="max-w-2xl text-muted">
          Competitor-comparison pages can sit here once positioning is finalized — structured,
          factual, and sales-ready.
        </p>
        <div className="mt-10">
          <CtaBand
            title="Need something specific?"
            lede="Ask the on-site assistant, or connect with the team for docs and briefings."
            primaryHref="/contact"
            primaryLabel="Connect With Us"
            secondaryHref="/book-demo"
            secondaryLabel="Book a Demo"
          />
        </div>
      </Section>
    </>
  );
}
