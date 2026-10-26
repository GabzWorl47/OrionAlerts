import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, LegalList } from "@/components/legal/LegalDoc";
import { legalMeta, processorRegister } from "@/lib/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Trust & Security",
  description:
    "OrionAlerts security program summary, responsible disclosure, certification scope notes, and processors.",
  pathname: "/security",
});

export default function SecurityPage() {
  const activeOrPlanned = processorRegister.filter((row) => row.status !== "not_in_use");

  return (
    <LegalDoc
      path="/security"
      eyebrow="Trust"
      title="Trust & Security"
      description="A concise summary of how we protect the OrionAlerts website and product surfaces visitors interact with today."
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/cookies", label: "Cookie Notice" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/contact", label: "Contact" },
      ]}
      sections={[
        {
          id: "program",
          title: "Security program summary",
          content: (
            <>
              <p>
                OrionAlerts provides enterprise video intelligence software. This page summarises
                how we protect this website and the data you submit through it. For the public
                website and lead forms, we apply the following baseline controls:
              </p>
              <LegalList
                items={[
                  "All production traffic is served over HTTPS.",
                  "HttpOnly, SameSite=Lax admin session cookie (oa_admin_session) with a 12-hour lifetime after successful login.",
                  "Server-side rate limiting on lead submissions and Google reCAPTCHA on the demo form.",
                  "Separation of demo and contact lead kinds in application handling.",
                  "Least-privilege access to admin publishing tools via password-gated sessions.",
                ]}
              />
              <p>
                Customer product deployments (on-prem or cloud) are governed by the customer’s
                architecture review and the commercial agreement, not solely by this website page.
              </p>
            </>
          ),
        },
        {
          id: "disclosure",
          title: "Responsible disclosure",
          content: (
            <>
              <p>
                If you believe you have found a security vulnerability in the OrionAlerts website or
                a product surface you are authorized to test, email{" "}
                <a
                  href={`mailto:${legalMeta.securityEmail}`}
                  className="font-semibold text-blue hover:underline"
                >
                  {legalMeta.securityEmail}
                </a>{" "}
                with steps to reproduce, impact assessment, and your contact details. Please do not
                access or modify other customers’ data, or disrupt production services.
              </p>
              <p>We do not currently operate a public bug-bounty program.</p>
            </>
          ),
        },
        {
          id: "certifications",
          title: "Certifications and marks",
          content: (
            <>
              <p>
                ISO 9001, ISO 27001, SOC 2, ONVIF and similar marks may appear in marketing for
                orientation. Ask{" "}
                <a
                  href="mailto:sales@orionalerts.com"
                  className="font-semibold text-blue hover:underline"
                >
                  sales@orionalerts.com
                </a>{" "}
                for any certificate, scope, and validity evidence that applies to a specific entity
                or engagement.
              </p>
            </>
          ),
        },
        {
          id: "subprocessors",
          title: "Subprocessors and trust center",
          content: (
            <>
              <p>
                Service providers that process data for this website:
              </p>
              <LegalList
                items={activeOrPlanned.map(
                  (row) => `${row.name} — ${row.purpose} (${row.status.replaceAll("_", " ")})`,
                )}
              />
              <p>
                A customer trust center and signed product subprocessor list are not published on
                this website yet. For website processing see the{" "}
                <Link href="/privacy" className="font-semibold text-blue hover:underline">
                  Privacy Policy
                </Link>
                . For enterprise deployments, request details via{" "}
                <a
                  href="mailto:sales@orionalerts.com"
                  className="font-semibold text-blue hover:underline"
                >
                  sales@orionalerts.com
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "contact",
          title: "Security contact",
          content: (
            <p>
              Security:{" "}
              <a
                href={`mailto:${legalMeta.securityEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.securityEmail}
              </a>
              . Privacy:{" "}
              <a
                href={`mailto:${legalMeta.privacyEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.privacyEmail}
              </a>
              . General:{" "}
              <a
                href={`mailto:${legalMeta.generalEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.generalEmail}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
