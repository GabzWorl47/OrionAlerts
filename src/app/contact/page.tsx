import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Connect With Us",
  description:
    "Reach the OrionAlerts team for sales, support, partnerships, and introductions. Contact leads are stored separately from demo requests.",
};

export default function ContactPage() {
  return (
    <Section className="pt-14">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="eyebrow">Connect With Us</p>
          <h1 className="display mt-3 text-4xl text-ink md:text-5xl">Meet the team behind the reply</h1>
          <p className="lede mt-4">
            Prefer a human path over a demo form? Send a message and we’ll route you to the right
            person — sales, support, partners, or press.
          </p>
          <div className="mt-8 space-y-2 text-sm text-ink-soft">
            <p>
              <span className="font-semibold text-ink">Email:</span>{" "}
              <a href={`mailto:${site.email}`} className="text-signal-deep hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              <span className="font-semibold text-ink">Phone:</span> {site.phone}
            </p>
            <p className="text-muted">{site.address}</p>
          </div>
          <p className="mt-6 text-sm text-muted">
            Looking for faces and roles?{" "}
            <Link href="/about#team" className="font-semibold text-signal-deep hover:underline">
              Meet the Team
            </Link>
            . Want a product walkthrough?{" "}
            <Link href="/book-demo" className="font-semibold text-signal-deep hover:underline">
              Book a Demo
            </Link>
            .
          </p>
        </div>
        <LeadForm
          kind="contact"
          title="Send a message"
          subtitle="Contact leads stay separate from demo requests in the ERP."
        />
      </div>
    </Section>
  );
}
