import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { PartnerForm } from "@/components/PartnerForm";
import { site } from "@/lib/site";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "Partner Application | OrionAlerts",
  description:
    "Apply to join the OrionAlerts partner network. System integrators, distributors, and technology partners receive commercial margins, deal registration, and dedicated support.",
};

export default function PartnerApplyPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners" },
          { name: "Apply", path: "/partners/apply" },
        ])}
      />
      <Section className="pt-14">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="eyebrow">Partner Program</p>
            <h1 className="display mt-3 text-4xl text-text md:text-5xl">
              Become an OrionAlerts Partner
            </h1>
            <p className="lede mt-4">
              Join our certified network of system integrators, distributors, and technology partners.
              Deploy enterprise AI video analytics, VMS, and CCTV health monitoring with wholesale margins
              and tier-3 engineering support.
            </p>
            <div className="mt-8 space-y-2 text-sm text-muted">
              <p>
                <span className="font-semibold text-text">Partner desk:</span>{" "}
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
              <p className="text-sm font-semibold text-text">Looking for general support or sales?</p>
              <p className="mt-1 text-xs text-muted">
                Need customer service, enterprise pilot pricing, or press information?
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center text-xs font-semibold text-cyan hover:underline"
              >
                Go to General Contact & Support &rarr;
              </Link>
            </div>
          </div>

          <div>
            <PartnerForm />
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
