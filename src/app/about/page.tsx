import type { Metadata } from "next";
import {
  AboutContactCta,
  AboutHero,
  AboutWhoWeAre,
  AboutWhyWeExist,
} from "@/components/AboutPageSections";
import { Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { leadershipMessage } from "@/lib/about";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Orion Alerts is an enterprise AI video intelligence platform by Global Ace Technology — transforming existing CCTV into operational intelligence for security, safety, and business outcomes.",
};

const team = [
  { name: "Leadership seat", role: "Founder / Business Head", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "Technical Leadership", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "Engineering Team Lead", note: "Photo + bio pending" },
  { name: "Leadership seat", role: "Head of Customer Success", note: "Photo + bio pending" },
];

export default function AboutPage() {
  return (
    <PageShell>
      <AboutHero />

      <Section id="team" className="bg-surface">
        <SectionHeading
          eyebrow="Leadership"
          title="The team behind Orion Alerts"
          lede={leadershipMessage}
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
      </Section>

      <AboutWhoWeAre />
      <AboutWhyWeExist />
      <AboutContactCta />
    </PageShell>
  );
}
