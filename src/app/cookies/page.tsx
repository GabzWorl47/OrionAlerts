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
      path="/cookies"
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
                this website does not use advertising pixels or behavioural analytics. We use one
                admin sign-in cookie, Google reCAPTCHA on the demo form, and a localStorage entry
                that remembers your cookie choice.
              </p>
              <p>
                Categories we use for governance: necessary, preferences, analytics, and
                advertising. We do not currently use any preference, analytics, or advertising
                technologies; if we add one, it stays off until you allow that category.
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
                  "Only necessary technologies run by default. Optional cookies stay off until you allow them.",
                  "The admin session cookie is set only after successful admin login.",
                  "reCAPTCHA loads only where the demo form is shown; that form requires it for abuse prevention.",
                  "If we add analytics or advertising tags, they stay blocked until you allow that category in Cookie Settings.",
                  "Consent records store version, timestamp, region, and category flags only—never lead-form fields.",
                  "The region field is stored as \"unspecified\" because this website does not detect your location.",
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
                <CookieSettingsLink className="link-inline font-semibold text-blue">
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
                <Link href="/privacy" className="link-inline font-semibold text-blue">
                  Privacy Policy
                </Link>{" "}
                or email{" "}
                <a
                  href={`mailto:${legalMeta.privacyEmail}`}
                  className="link-inline font-semibold text-blue"
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
              Cookie inventory last reviewed on{" "}
              <strong className="text-text">{legalMeta.lastReviewed}</strong>. We update this notice
              when the technologies we use change.
            </p>
          ),
        },
      ]}
    />
  );
}
