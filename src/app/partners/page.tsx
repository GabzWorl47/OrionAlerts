import type { Metadata } from "next";
import { Button, CtaBand, FeatureCard, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join the OrionAlerts partner ecosystem — white-label, pricing, training, portal, partner lookup, and integrations.",
};

const partnerTracks = [
  {
    title: "System integrators",
    description: "Design, deploy, and support multi-site OrionAlerts estates with commercial upside.",
  },
  {
    title: "Technology partners",
    description: "Integrate cameras, sensors, access, and ops systems into the OrionAlerts ecosystem.",
  },
  {
    title: "White-label programs",
    description: "Deliver branded experiences where partner rules and packaging allow.",
  },
];

const enablement = [
  {
    title: "Pricing & packaging",
    description: "Clear commercial frameworks for deal registration and multi-site rollouts.",
  },
  {
    title: "Training & certification",
    description: "Role-based enablement for sales, deployment, and support teams.",
  },
  {
    title: "Partner portal",
    description: "Assets, deal tools, and project visibility in one authenticated workspace (2FA-ready).",
  },
  {
    title: "Partner lookup",
    description: "Help customers find certified partners by region and capability.",
  },
  {
    title: "Ecosystem integrations",
    description: "Documented paths for cameras, VMS overlays, ERP, CMMS, and ticketing.",
  },
  {
    title: "Co-selling support",
    description: "Joint pursuit models for enterprise and critical-infrastructure opportunities.",
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <>
      <Section className="pt-14">
        <p className="eyebrow">Channel & ecosystem</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-text md:text-6xl">Become a Partner</h1>
        <p className="lede mt-4">
          Grow with OrionAlerts as a system integrator or technology partner — with enablement,
          portal access, and clear commercial rails.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact">Apply to partner</Button>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Who we work with" title="Partner tracks" />
        <div className="grid gap-4 md:grid-cols-3">
          {partnerTracks.map((item, index) => (
            <FeatureCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Program"
          title="What partners get"
          lede="Program rules and final commercial packs are still being finalized — structure is ready for content drop-in."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enablement.map((item, index) => (
            <FeatureCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Start a partner conversation"
          lede="Tell us your region, specialties, and whether you’re SI-led, technology-led, or both."
          primaryHref="/contact"
          primaryLabel="Contact Us"
          secondaryHref="/partners"
          secondaryLabel="Partner resources"
        />
      </Section>
    </>
    </PageShell>
  );
}
