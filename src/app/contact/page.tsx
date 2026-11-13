import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm, type ContactTopic } from "@/components/LeadForm";
import { Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

const CONTACT_DESCRIPTION =
  "Contact OrionAlerts for sales inquiries, customer support, press or privacy requests. Send a message and the right team will reply.";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Sales & Support",
  description: CONTACT_DESCRIPTION,
  pathname: "/contact",
});

// LeadForm is a client module, so the topic check lives here (server side).
const CONTACT_TOPICS: readonly ContactTopic[] = [
  "sales",
  "support",
  "press",
  "privacy",
  "other",
];

function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === "string" && (CONTACT_TOPICS as readonly string[]).includes(value as ContactTopic);
}

function contactPageJsonLd() {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${site.name}`,
    description: CONTACT_DESCRIPTION,
    url: `${origin}/contact`,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${origin}/#organization` },
    mainEntity: { "@id": `${origin}/#organization` },
  };
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string | string[] }>;
}) {
  const { topic } = await searchParams;
  const defaultTopic = isContactTopic(topic) ? topic : undefined;

  return (
    <PageShell>
      <JsonLdScript data={contactPageJsonLd()} />
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h1 className="display mt-3 text-4xl text-text md:text-5xl">
              Contact OrionAlerts
            </h1>
            <p className="lede mt-4">
              Questions about sales, customer support, press, or privacy? Send a message and the right
              OrionAlerts team will reply. For a product walkthrough,{" "}
              <Link href="/book-demo" className="font-semibold text-blue hover:underline">
                book a demo
              </Link>
              .
            </p>
            <div className="mt-8 space-y-2 text-sm text-muted">
              <p>
                <span className="font-semibold text-text">Email:</span>{" "}
                <a href="mailto:websitelead@orionalerts.com" className="text-blue hover:underline">
                  websitelead@orionalerts.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-text">Sales & Demos:</span>{" "}
                <a href="mailto:sales@orionalerts.com" className="text-blue hover:underline">
                  sales@orionalerts.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-text">Partners:</span>{" "}
                <a href="mailto:partner@orionalerts.com" className="text-blue hover:underline">
                  partner@orionalerts.com
                </a>
              </p>
              {site.phone ? (
                <p>
                  <span className="font-semibold text-text">Phone:</span> {site.phone}
                </p>
              ) : null}
              <p className="text-muted">{site.address}</p>
            </div>
            <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
              <p className="text-sm font-semibold text-text">Looking to partner with OrionAlerts?</p>
              <p className="mt-1 text-xs text-muted">
                System integrators, distributors, and hardware technology partners can join our partner ecosystem.
              </p>
              <Link
                href="/partners/apply"
                className="mt-3 inline-flex items-center text-xs font-semibold text-cyan hover:underline"
              >
                Go to Partner Application →
              </Link>
            </div>
          </div>
          <LeadForm
            kind="contact"
            title="Send a message"
            titleAs="h2"
            defaultTopic={defaultTopic}
            subtitle="Tell us how to help — sales, support, press, or a privacy request."
          />
        </div>
      </Section>
    </PageShell>
  );
}
