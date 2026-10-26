import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, LegalList } from "@/components/legal/LegalDoc";
import { legalMeta } from "@/lib/legal";
import { site } from "@/lib/site";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Terms for using the OrionAlerts website, including acceptable use, IP, disclaimers, and contact.",
  pathname: "/terms",
});

export default function TermsOfServicePage() {
  return (
    <LegalDoc
      path="/terms"
      eyebrow="Legal"
      title="Terms of Service"
      description={`These terms govern access to and use of the ${site.name} public website. Product subscriptions and customer deployments are covered by separate agreements.`}
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/cookies", label: "Cookie Notice" },
        { href: "/security", label: "Trust & Security" },
      ]}
      sections={[
        {
          id: "website-use",
          title: "Website use",
          content: (
            <>
              <p>
                By using this website you agree to these Terms. If you do not agree, do not use the
                site. You may browse public pages for informational purposes and submit demo or
                contact requests using the forms provided.
              </p>
              <p>
                You must provide accurate information in lead forms and not impersonate another
                person or organization.
              </p>
            </>
          ),
        },
        {
          id: "ip",
          title: "Intellectual property",
          content: (
            <p>
              Site content, branding, logos, product names, documentation excerpts, and software
              interfaces displayed here are owned by OrionAlerts or its licensors. You may not copy,
              scrape, reverse engineer, or reuse these materials without prior written permission,
              other than for personal evaluation or brief quotations with attribution for editorial
              coverage.
            </p>
          ),
        },
        {
          id: "acceptable-use",
          title: "Acceptable use",
          content: (
            <LegalList
              items={[
                "Do not attempt unauthorized access to admin areas, APIs, or other users’ data.",
                "Do not overload, probe, or disrupt the site (including bypassing rate limits or reCAPTCHA except as a legitimate user).",
                "Do not upload malware or illegal content, or use the site to send spam.",
                "Do not misrepresent affiliation with OrionAlerts or use our marks without permission.",
              ]}
            />
          ),
        },
        {
          id: "disclaimers",
          title: "Disclaimers",
          content: (
            <p>
              Website content is provided for general information and may change without notice. It
              does not constitute professional, legal, or security advice. To the fullest extent
              permitted by law, the site is provided “as is” without warranties of uninterrupted
              availability, accuracy, or fitness for a particular purpose.
            </p>
          ),
        },
        {
          id: "product-information",
          title: "Product information",
          content: (
            <p>
              Descriptions of VMS, AI analytics, asset tracking, AMC, health monitoring, Nebula OS,
              and industry use cases are illustrative. Features, integrations, certifications, and
              performance depend on configuration, customer environment, and executed commercial
              terms. Nothing on this website creates a binding product commitment unless confirmed
              in a signed agreement or order form.
            </p>
          ),
        },
        {
          id: "governing-law",
          title: "Governing law",
          content: (
            <p>These Terms are governed by {legalMeta.governingLawDraft}.</p>
          ),
        },
        {
          id: "contact",
          title: "Contact",
          content: (
            <p>
              Questions about these Terms:{" "}
              <a
                href={`mailto:${legalMeta.generalEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.generalEmail}
              </a>
              . Privacy questions:{" "}
              <a
                href={`mailto:${legalMeta.privacyEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.privacyEmail}
              </a>
              . See also our{" "}
              <Link href="/privacy" className="font-semibold text-blue hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
