import type { Metadata } from "next";
import Link from "next/link";
import { Button, CtaBand, FeatureCard, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Partner Program for System Integrators",
  description:
    "Join the OrionAlerts partner program. System integrators and AMC providers deploy AI video analytics, VMS and CCTV health monitoring for their clients.",
  pathname: "/partners",
});


const partnerTracks = [
  {
    title: "System integrators",
    description: "Design, deploy and support multi-site OrionAlerts deployments for your clients.",
  },
  {
    title: "Technology partners",
    description: "Integrate cameras, sensors, access, and ops systems into the OrionAlerts ecosystem.",
  },
  {
    title: "White-label programs",
    description: "Branded delivery for your clients, where partner terms and packaging allow.",
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
    description: "Joint pursuit of enterprise and critical-infrastructure opportunities.",
  },
];

export default function PartnersPage() {
  return (
    <PageShell>
      <>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
        ])}
      />
      <Section className="pt-14">
        <p className="eyebrow">Partner program</p>
        <h1 className="display mt-3 max-w-3xl text-3xl text-text md:text-5xl">
          OrionAlerts partner program for system integrators and AMC providers
        </h1>
        <p className="lede mt-4">
          Deploy OrionAlerts for your clients and run their CCTV service delivery on the same
          platform, with camera health, asset records and AMC SLA tracking for each client.
        </p>
        <p className="mt-4 max-w-3xl text-[1.0625rem] leading-[1.72] text-muted">
          Grow with OrionAlerts as a system integrator or technology partner, with enablement,
          clear commercial terms and deal registration. Partners work with the same{" "}
          <Link href="/solutions" className="font-semibold text-blue hover:underline">
            five OrionAlerts modules
          </Link>{" "}
          — VMS, AI video analytics, camera health monitoring, asset tracking and AMC management —
          running on{" "}
          <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
            Nebula OS
          </Link>
          .
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact?topic=partner">Become a Partner</Button>
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
          lede="Enablement, packaging support and joint delivery for system integrators and technology partners."
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
          primaryHref="/contact?topic=partner"
          primaryLabel="Become a Partner"
          secondaryHref="/faqs"
          secondaryLabel="Read FAQs"
        />
      </Section>
    </>
    </PageShell>
  );
}
