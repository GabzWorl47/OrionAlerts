import type { Metadata } from "next";
import { Button, CtaBand, FeatureCard, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Become a Partner",
  description:
    "Join the OrionAlerts partner ecosystem — system integrators, distributors, and hardware technology partners with dedicated enablement, commercial margins, and priority support.",
};

const partnerTracks = [
  {
    title: "System Integrators",
    description: "Design, deploy, and support multi-site OrionAlerts estates with recurring margins and enterprise backing.",
  },
  {
    title: "Technology Partners",
    description: "Integrate cameras, VMS, sensors, access control, and operational systems into the OrionAlerts AI ecosystem.",
  },
  {
    title: "Distributors & VARs",
    description: "Equip your regional dealer and installer network with next-gen AI video analytics and VMS licenses.",
  },
];

const enablement = [
  {
    title: "Pricing & Margins",
    description: "Tiered wholesale pricing, deal registration protection, and healthy margins on multi-site rollouts.",
  },
  {
    title: "Technical Training & Certification",
    description: "Role-based training and certification for your presales engineers, field technicians, and support staff.",
  },
  {
    title: "Partner Portal & Deal Registration",
    description: "Register prospective projects, access collateral, and track delivery pipelines in one central workspace.",
  },
  {
    title: "Co-Selling & Presales Support",
    description: "Joint pursuit models, RFP architecture assistance, and dedicated presales solution engineers.",
  },
  {
    title: "Ecosystem Integrations",
    description: "Direct RTSP/ONVIF certification and API/webhook bridges for ERP, command centers, and ticketing systems.",
  },
  {
    title: "NFR & Demo Licenses",
    description: "Not-for-resale lab licenses and demonstration software to showcase live AI capabilities to your clients.",
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <Section className="pt-14">
        <p className="eyebrow">Channel & Ecosystem</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-text md:text-6xl">Become a Partner</h1>
        <p className="lede mt-4">
          Grow your surveillance business with OrionAlerts as an authorized system integrator, distributor,
          or technology partner. Get commercial incentives, direct tier-3 support, and deal registration.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/partners/apply">Apply to partner</Button>
          <Button href="/book-demo" variant="outline">
            Request partner briefing
          </Button>
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
          eyebrow="Program Benefits"
          title="What partners get"
          lede="Designed to help integrators and distributors close larger enterprise opportunities and build recurring revenue."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {enablement.map((item, index) => (
            <FeatureCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <CtaBand
          title="Ready to join our partner ecosystem?"
          lede="Submit your details to receive commercial pricing, deal registration access, and direct engineering enablement."
          primaryHref="/partners/apply"
          primaryLabel="Apply to Partner"
          secondaryHref="/book-demo"
          secondaryLabel="Request Partner Briefing"
        />
      </Section>
    </PageShell>
  );
}
