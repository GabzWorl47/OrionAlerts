import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact OrionAlerts for sales, support, partnerships, privacy requests, and introductions.",
  pathname: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Contact Us</p>
            <h1 className="display mt-3 text-4xl text-text md:text-5xl">
              Meet the team behind the reply
            </h1>
            <p className="lede mt-4">
              Prefer a human path over a demo form? Send a message and we’ll route you to the right
              person — sales, support, partners, or press.
            </p>
            <div className="mt-8 space-y-2 text-sm text-muted">
              <p>
                <span className="font-semibold text-text">Email:</span>{" "}
                <a href={`mailto:${site.email}`} className="text-blue hover:underline">
                  {site.email}
                </a>
              </p>
              {site.phone ? (
                <p>
                  <span className="font-semibold text-text">Phone:</span> {site.phone}
                </p>
              ) : null}
              <p className="text-muted">{site.address}</p>
            </div>
            <p className="mt-6 text-sm text-muted">
              Want a product walkthrough?{" "}
              <Link href="/book-demo" className="font-semibold text-blue hover:underline">
                Book a Demo
              </Link>
              .
            </p>
          </div>
          <LeadForm
            kind="contact"
            title="Send a message"
            titleAs="h2"
            subtitle="Tell us how to help — sales, support, partners, press, or a privacy request."
          />
        </div>
      </Section>
    </PageShell>
  );
}
