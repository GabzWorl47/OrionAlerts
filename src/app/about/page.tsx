import type { Metadata } from "next";
import {
  AboutContactCta,
  AboutEssence,
  AboutEthos,
  AboutHero,
  AboutOverview,
  AboutTrust,
  AboutVirtues,
} from "@/components/AboutPageSections";
import { Button, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} company story, principles, values, and the team behind unified video, AI, and asset intelligence for enterprise operations.`,
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
      <AboutHero />

      <Section id="team" className="bg-surface">
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
          <Button href="/contact" variant="outline">
            Connect With Us
          </Button>
        </div>
      </Section>

      <AboutOverview />
      <AboutEthos />
      <AboutEssence />
      <AboutVirtues />
      <AboutTrust />
      <AboutContactCta />
    </PageShell>
  );
}
