import type { Metadata } from "next";
import { Button, CtaBand, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Company story, team, and credibility behind OrionAlerts.",
};

const team = [
  { name: "Leadership seat", role: "CEO / Founder", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "CTO", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "Head of Partnerships", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "Head of Customer Success", note: "Photo + bio pending" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <>
      <Section className="pt-14">
        <p className="eyebrow">Company</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-text md:text-6xl">
          Building operational clarity for high-stakes environments
        </h1>
        <p className="lede mt-4">
          OrionAlerts exists to help enterprises unify video, AI, assets, and maintenance into one
          trustworthy operating layer — so teams can act with confidence.
        </p>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Story" title="Why we build" />
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-lg leading-relaxed text-muted">
            Security and operations teams are drowning in disconnected systems: NVRs that don’t talk,
            alerts without context, assets that vanish between shifts, and maintenance contracts that
            only surface after downtime. We build software that makes the estate visible, actionable,
            and partner-ready.
          </p>
          <div className="surface rounded-[20px] p-6">
            <p className="text-xs uppercase tracking-[0.14em] text-blue">Brand note</p>
            <p className="mt-3 text-sm text-muted">
              Final logo and brand assets will replace the current wordmark. Design tokens are already
              centralized for a clean swap.
            </p>
          </div>
        </div>
      </Section>

      <Section id="team">
        <SectionHeading
          eyebrow="Meet the Team"
          title="Connect with the people behind OrionAlerts"
          lede="Public-facing contact shifts toward team connection — while footer contact details stay available."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, index) => (
            <article key={`${person.role}-${index}`} className="surface rounded-[20px] p-5">
              <div className="mb-4 aspect-square rounded bg-gradient-to-br from-[#15233a] to-[#0d1626]" />
              <h3 className="display text-xl text-text">{person.name}</h3>
              <p className="text-sm text-blue">{person.role}</p>
              <p className="mt-2 text-xs text-muted">{person.note}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/contact">Connect With Us</Button>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Credibility" title="Investors & trust" />
        <p className="max-w-2xl text-muted">
          Investor information can publish here when appropriate. Security is part of the product
          experience: Cloudflare protection, rate/IP limits on submissions, and 2FA wherever portals
          require it.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {["Cloudflare-protected edge", "Rate-limited lead intake", "2FA-ready partner portal"].map(
            (item) => (
              <div key={item} className="surface rounded-[20px] px-4 py-3 text-sm font-medium text-text">
                {item}
              </div>
            ),
          )}
        </div>
      </Section>

      <Section>
        <div className="surface mb-10 rounded-[20px] p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="font-semibold text-text">Need us directly?</p>
            <p className="mt-1 text-sm text-muted">
              {site.email} · {site.phone}
            </p>
          </div>
          <Button href="/book-demo">Book a Demo</Button>
        </div>
        <CtaBand
          title="Let’s build the operating picture together"
          lede="Demo for buyers. Connect for partnerships, support, and team introductions."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Connect With Us"
        />
      </Section>
    </>
    </PageShell>
  );
}
