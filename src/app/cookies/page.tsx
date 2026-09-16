import type { Metadata } from "next";
import Link from "next/link";
import { LegalDoc, LegalList } from "@/components/legal/LegalDoc";
import { CookieSettingsLink } from "@/components/consent/CookieSettingsLink";
import { cookieInventory, legalMeta } from "@/lib/legal";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Cookie Notice",
  description:
    "OrionAlerts cookie inventory, categories, providers, durations, and how to manage optional consent.",
  pathname: "/cookies",
});

const categoryLabels: Record<(typeof cookieInventory)[number]["category"], string> = {
  necessary: "Necessary",
  preferences: "Preferences",
  analytics: "Analytics",
  advertising: "Advertising",
};

export default function CookieNoticePage() {
  return (
    <LegalDoc
      eyebrow="Legal"
      title="Cookie Notice"
      description="This notice lists cookies and similar technologies used on the OrionAlerts website, even when no optional marketing cookies are active."
      relatedLinks={[
        { href: "/privacy", label: "Privacy Policy" },
        { href: "/terms", label: "Terms of Service" },
        { href: "/security", label: "Trust & Security" },
      ]}
      sections={[
        {
          id: "overview",
          title: "Overview",
          content: (
            <>
              <p>
                As of the inventory scan dated <strong className="text-text">{legalMeta.lastReviewed}</strong>,
                the public site source does not include advertising pixels, behavioral analytics,
                localStorage, or sessionStorage tracking. Two cookie-related systems were verified:
                an admin authentication cookie and Google reCAPTCHA on the demo form.
              </p>
              <p>
                Categories we use for governance: necessary, preferences, analytics, and
                advertising. Preference, analytics, and advertising categories are empty unless a
                real technology is added and consent-gated.
              </p>
            </>
          ),
        },
        {
          id: "cookie-table",
          title: "Cookie table",
          content: (
            <div className="overflow-x-auto rounded-[16px] border border-line">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-surface text-[11px] uppercase tracking-[0.12em] text-muted">
                  <tr>
                    <th className="px-3 py-2 font-semibold">Name</th>
                    <th className="px-3 py-2 font-semibold">Provider</th>
                    <th className="px-3 py-2 font-semibold">Purpose</th>
                    <th className="px-3 py-2 font-semibold">Duration</th>
                    <th className="px-3 py-2 font-semibold">Category</th>
                    <th className="px-3 py-2 font-semibold">Party</th>
                  </tr>
                </thead>
                <tbody>
                  {cookieInventory.map((row) => (
                    <tr key={row.name} className="border-t border-line align-top">
                      <td className="px-3 py-3 font-medium text-text">{row.name}</td>
                      <td className="px-3 py-3">{row.provider}</td>
                      <td className="px-3 py-3">
                        <p>{row.purpose}</p>
                        {row.notes ? (
                          <p className="mt-2 text-xs text-muted">{row.notes}</p>
                        ) : null}
                      </td>
                      <td className="px-3 py-3">{row.duration}</td>
                      <td className="px-3 py-3">{categoryLabels[row.category]}</td>
                      <td className="px-3 py-3 capitalize">{row.party}-party</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ),
        },
        {
          id: "consent",
          title: "Consent behavior",
          content: (
            <>
              <LegalList
                items={[
                  "Ship only essential functionality by default.",
                  "The admin session cookie is set only after successful admin login.",
                  "reCAPTCHA loads only on the demo form path; that form requires it for abuse prevention.",
                  "Do not add analytics or advertising tags directly. Route them through the consent manager (Cookie Settings) and keep them blocked until the category is granted via loadConsentedScript / ConsentProvider.",
                  "Consent records store version, timestamp, region, and category flags only—never lead-form fields.",
                  "region is always written. With no geo detection in this build it is stored as \"unspecified\"; do not invent a country or GDPR/CCPA label without a real jurisdiction signal.",
                ]}
              />
            </>
          ),
        },
        {
          id: "cookie-settings",
          title: "Cookie Settings and withdrawal",
          content: (
            <>
              <p id="settings">
                Open{" "}
                <CookieSettingsLink className="font-semibold text-blue hover:underline">
                  Cookie Settings
                </CookieSettingsLink>{" "}
                anytime from this page or the site footer to review categories, Accept/Reject
                optional cookies, or withdraw prior optional consent.
              </p>
              <LegalList
                items={[
                  "Consent choices are stored in first-party localStorage (oa_cookie_consent_v1) with version, timestamp, region (\"unspecified\" until geo is available), and category flags only—not form field data.",
                  "Withdrawing optional consent stops future optional processing and deletes first-party optional cookies where possible.",
                  "Necessary authentication for administrators must continue to work when optional consent is rejected.",
                  "Browser controls can block or delete cookies; blocking necessary cookies may break admin sign-in or bot protection.",
                ]}
              />
              <p>
                For privacy questions beyond cookies, see the{" "}
                <Link href="/privacy" className="font-semibold text-blue hover:underline">
                  Privacy Policy
                </Link>{" "}
                or email{" "}
                <a
                  href={`mailto:${legalMeta.privacyEmail}`}
                  className="font-semibold text-blue hover:underline"
                >
                  {legalMeta.privacyEmail}
                </a>
                .
              </p>
            </>
          ),
        },
        {
          id: "scan",
          title: "Last scan date",
          content: (
            <p>
              Cookie inventory last reconciled with the repository on{" "}
              <strong className="text-text">{legalMeta.lastReviewed}</strong>. Re-scan production on
              each release and update this notice when technologies change.
            </p>
          ),
        },
      ]}
    />
  );
}
