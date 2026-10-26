import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, LegalList } from "@/components/legal/LegalDoc";
import {
  leadFormFields,
  legalMeta,
  processorRegister,
} from "@/lib/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How OrionAlerts collects and uses personal data from website visitors and lead forms, including processors and rights.",
  pathname: "/privacy",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalDoc
      path="/privacy"
      eyebrow="Legal"
      title="Privacy Policy"
      description="This policy explains how OrionAlerts processes personal data collected through this website, including demo and contact forms."
      relatedLinks={[
        { href: "/cookies", label: "Cookie Notice" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/security", label: "Trust & Security" },
        { href: "/contact", label: "Contact" },
      ]}
      sections={[
        {
          id: "controller",
          title: "Controller identity and contact",
          content: (
            <>
              <p>
                The data controller for personal data collected on this website is{" "}
                <strong className="font-semibold text-text">{legalMeta.controllerLegalName}</strong>{" "}
                operating as OrionAlerts.
              </p>
              <LegalList
                items={[
                  `Address: ${legalMeta.controllerAddress}`,
                  `Privacy requests: ${legalMeta.privacyEmail}`,
                  `General contact: ${legalMeta.generalEmail}`,
                  ...(legalMeta.phone ? [`Phone: ${legalMeta.phone}`] : []),
                ]}
              />
              <p>
                To exercise privacy rights or ask a privacy question, email{" "}
                <a
                  href={`mailto:${legalMeta.privacyEmail}`}
                  className="font-semibold text-blue hover:underline"
                >
                  {legalMeta.privacyEmail}
                </a>{" "}
                or use the{" "}
                <Link href="/contact" className="font-semibold text-blue hover:underline">
                  contact form
                </Link>{" "}
                and select a privacy-related topic in your message.
              </p>
            </>
          ),
        },
        {
          id: "purposes",
          title: "Purposes and lawful bases",
          content: (
            <>
              <p>We process website-related personal data for the following purposes:</p>
              <LegalList
                items={[
                  "Responding to demo requests and contact inquiries (legitimate interests / steps prior to a contract).",
                  "Preventing abuse and automated submissions via rate-limiting and Google reCAPTCHA on the demo form (legitimate interests / security).",
                  "Operating and securing the website and admin authentication cookie for staff (legitimate interests / necessary for service).",
                  "Complying with applicable law when required (legal obligation).",
                ]}
              />
              <p>
                The lawful bases above describe how we operate this website under India&apos;s Digital
                Personal Data Protection Act and other regimes that may apply to visitors or
                customers. Where another law requires consent or a different basis for a specific
                activity, we will apply that requirement.
              </p>
            </>
          ),
        },
        {
          id: "data-fields",
          title: "Personal data we collect",
          content: (
            <>
              <p>
                Lead forms collect the following fields (phone is optional; product interest or
                contact topic depends on the form):
              </p>
              <LegalList items={[...leadFormFields]} />
              <p>
                The server also records the requester IP address for rate-limiting and writes the
                submission details to application logs (the full message text is not logged; only
                its length). This is personal data processing even when no marketing cookie is set.
              </p>
              <p>
                We do not use advertising pixels, behavioural analytics, or sessionStorage-based
                tracking on this website. Cookie preference choices are stored in first-party
                localStorage (<code>oa_cookie_consent_v1</code>) with version, timestamp, region
                (<code>unspecified</code>, because we do not detect your location), and category
                flags only.
              </p>
            </>
          ),
        },
        {
          id: "processors",
          title: "Processors and transfers",
          content: (
            <>
              <p>
                The following register lists the service providers that process data for this
                website and their roles.
              </p>
              <div className="overflow-x-auto rounded-[16px] border border-line">
                <table className="min-w-full text-left text-sm">
                  <thead className="bg-surface text-[11px] uppercase tracking-[0.12em] text-muted">
                    <tr>
                      <th className="px-3 py-2 font-semibold">Name</th>
                      <th className="px-3 py-2 font-semibold">Purpose</th>
                      <th className="px-3 py-2 font-semibold">Data</th>
                      <th className="px-3 py-2 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {processorRegister.map((row) => (
                      <tr key={row.name} className="border-t border-line align-top">
                        <td className="px-3 py-3 text-text">
                          <p className="font-medium">{row.name}</p>
                          <p className="mt-1 text-xs text-muted">{row.role}</p>
                        </td>
                        <td className="px-3 py-3">{row.purpose}</td>
                        <td className="px-3 py-3">{row.dataTypes}</td>
                        <td className="px-3 py-3 capitalize text-muted-strong">
                          {row.status.replaceAll("_", " ")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                Some processors, such as Google for reCAPTCHA, may process personal data outside
                India.
              </p>
            </>
          ),
        },
        {
          id: "retention",
          title: "Retention",
          content: (
            <>
              <LegalList
                items={[
                  `Lead submissions: ${legalMeta.leadRetentionDraft}`,
                  `Application / server logs containing submission details: ${legalMeta.logRetentionDraft}`,
                  `reCAPTCHA verification records: ${legalMeta.recaptchaRetentionDraft}`,
                  "Rejected or rate-limited attempts: retain only as needed for abuse monitoring, then delete or anonymize.",
                ]}
              />
              <p>
                Rate-limiting counters keyed by IP address are held in server memory only; they are
                not written to a database and are discarded after they expire or when the server restarts.
                Lead entries in application logs omit the full message text.
              </p>
            </>
          ),
        },
        {
          id: "rights",
          title: "Your rights",
          content: (
            <>
              <p>
                Depending on where you live, you may have rights to access, correct, delete,
                restrict, or withdraw consent for certain processing, and to receive information
                about how we use your data. Under India&apos;s Digital Personal Data Protection Act
                2023 and related rules, additional rights and duties may apply once in force for
                OrionAlerts&apos; operations.
              </p>
              <p>
                To make a request, email{" "}
                <a
                  href={`mailto:${legalMeta.privacyEmail}`}
                  className="font-semibold text-blue hover:underline"
                >
                  {legalMeta.privacyEmail}
                </a>
                . We may need to verify your identity before fulfilling a request.
              </p>
            </>
          ),
        },
        {
          id: "complaints",
          title: "Complaints",
          content: (
            <p>
              You may also have the right to complain to a competent data protection authority or,
              when applicable, India&apos;s Data Protection Board. Contact{" "}
              <a
                href={`mailto:${legalMeta.privacyEmail}`}
                className="font-semibold text-blue hover:underline"
              >
                {legalMeta.privacyEmail}
              </a>{" "}
              first.
            </p>
          ),
        },
        {
          id: "security",
          title: "Security",
          content: (
            <p>
              We apply administrative and technical measures appropriate to the nature of website
              lead data, including HTTPS in production, HttpOnly session cookies for admin access,
              and rate-limiting on lead endpoints. See our{" "}
              <Link href="/security" className="font-semibold text-blue hover:underline">
                Trust &amp; Security
              </Link>{" "}
              page for the program summary and responsible disclosure contact. No method of
              transmission or storage is completely secure.
            </p>
          ),
        },
        {
          id: "children",
          title: "Children",
          content: (
            <p>
              This website and its lead forms are directed to business and institutional users. We
              do not knowingly collect personal data from children. If you believe a child has
              provided personal data, contact {legalMeta.privacyEmail} so we can delete it.
            </p>
          ),
        },
        {
          id: "changes",
          title: "Changes",
          content: (
            <p>
              We may update this Privacy Policy to reflect product, vendor, or legal changes. The
              effective date at the top of this page will be revised when material changes are
              published. Continued use of the website after an update constitutes notice of the
              revised policy where permitted by law.
            </p>
          ),
        },
      ]}
    />
  );
}
