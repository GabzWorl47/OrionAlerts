import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { industries } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industries",
  description: "See how OrionAlerts solves real-world needs across manufacturing, logistics, campuses, and critical infrastructure.",
};

export default function IndustriesPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Use cases"
          title="Industry realities, not generic slides"
          lede="Each sector page shows challenges, outcomes, and the solution mix that fits."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="surface rounded-[var(--radius)] p-7 transition hover:border-signal/35"
            >
              <h2 className="display text-3xl text-ink">{industry.name}</h2>
              <p className="mt-3 text-muted">{industry.summary}</p>
              <span className="mt-5 inline-block text-sm font-semibold">Open use case →</span>
            </Link>
          ))}
        </div>
      </Section>
      <Section>
        <CtaBand
          title="Bring your site blueprint"
          lede="We’ll walk a demo against your operating constraints — staffing, camera count, SLAs, and partner model."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
        />
      </Section>
    </>
  );
}
