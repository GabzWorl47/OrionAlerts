import { site } from "@/lib/site";

/**
 * Operational legal/privacy copy for the public website.
 */
export const legalMeta = {
  /** ISO date of the last cookie/privacy inventory scan reflected in these pages. */
  lastReviewed: "2026-09-08",
  /** Human-readable effective date shown on legal pages. */
  effectiveDateLabel: "8 September 2026",
  controllerLegalName: "Global Ace Technology Pvt. Ltd.",
  /** Registered public address for the controller. */
  controllerAddress: site.address,
  privacyEmail: "privacy@orionalerts.com",
  securityEmail: "security@orionalerts.com",
  generalEmail: site.email,
  phone: site.phone,
  leadRetentionDraft:
    "Retained only as long as needed to respond to your inquiry and related follow-up, then deleted or anonymised from application logs when no longer required.",
  logRetentionDraft:
    "Server and application logs that include submission details are kept only as long as needed for security, debugging, and abuse prevention.",
  recaptchaRetentionDraft:
    "Verification is processed under Google’s reCAPTCHA terms; OrionAlerts does not keep a separate long-term reCAPTCHA archive.",
  governingLawDraft:
    "the laws of India. Subject to mandatory rules that cannot be waived, disputes relating to this website are subject to the courts of Mumbai, Maharashtra",
} as const;

export type CookieCategory = "necessary" | "preferences" | "analytics" | "advertising";

export type CookieInventoryRow = {
  name: string;
  provider: string;
  purpose: string;
  duration: string;
  category: CookieCategory;
  party: "first" | "third";
  notes?: string;
};

/** Verified inventory from the 8 Sep 2026 audit (no marketing cookies found). */
export const cookieInventory: CookieInventoryRow[] = [
  {
    name: "oa_admin_session",
    provider: "OrionAlerts",
    purpose: "Keep an authenticated administrator signed in to the admin area.",
    duration: "12 hours",
    category: "necessary",
    party: "first",
    notes: "Set only after successful admin login. HttpOnly; SameSite=Lax; Secure in production.",
  },
  {
    name: "_GRECAPTCHA",
    provider: "Google",
    purpose: "Bot protection for the Book a Demo form (Google reCAPTCHA).",
    duration: "As set by Google (typically up to 6 months)",
    category: "necessary",
    party: "third",
    notes:
      "Loaded only when the demo form mounts (recaptcha.net) for abuse prevention on that form.",
  },
  {
    name: "oa_cookie_consent_v1",
    provider: "OrionAlerts",
    purpose: "Store cookie preference version, timestamp, region, and category choices.",
    duration: "Persists in localStorage until cleared or consent version changes",
    category: "necessary",
    party: "first",
    notes:
      "Not an HTTP cookie: a first-party localStorage record of your cookie choices. It holds no form data, and region is stored as \"unspecified\" because we do not detect your location.",
  },
];

export type ProcessorRow = {
  name: string;
  role: string;
  purpose: string;
  dataTypes: string;
  status: "active" | "planned" | "not_in_use";
};

/**
 * Processor register reflecting current code paths and planned production roles.
 */
export const processorRegister: ProcessorRow[] = [
  {
    name: "Website hosting provider",
    role: "Processor / hosting",
    purpose: "Serve the public website and application APIs.",
    dataTypes: "HTTP request metadata; form submissions while processed by the app",
    status: "active",
  },
  {
    name: "CDN / edge delivery (when configured)",
    role: "Processor",
    purpose: "Deliver static assets and edge caching when configured.",
    dataTypes: "IP address and request metadata for delivery",
    status: "planned",
  },
  {
    name: "Google (reCAPTCHA)",
    role: "Processor",
    purpose: "Abuse prevention on demo lead submissions.",
    dataTypes: "reCAPTCHA token, IP (when sent), browser/device signals per Google",
    status: "active",
  },
  {
    name: "OrionAlerts sales operations",
    role: "Controller / sales follow-up",
    purpose: "Respond to leads via sales@orionalerts.com",
    dataTypes: "Name, work email, company, phone, message, interest/topic",
    status: "active",
  },
  {
    name: "Application monitoring (when configured)",
    role: "Processor",
    purpose: "Operational monitoring and error diagnostics when configured.",
    dataTypes: "Technical logs; may include IP or request identifiers",
    status: "planned",
  },
  {
    name: "Analytics / advertising vendors",
    role: "Processor",
    purpose: "Measurement or advertising tags.",
    dataTypes: "None today — no GA, GTM, Meta Pixel, LinkedIn Insight, Hotjar, or Clarity in source",
    status: "not_in_use",
  },
];

export const leadFormFields = [
  "Full name",
  "Work email",
  "Company",
  "Phone (optional)",
  "Message",
  "Product interest (demo) or contact topic (contact)",
  "Number of sites and approximate camera count (demo, optional)",
] as const;

export function privacyNoticeText() {
  return `By submitting, you send the details above to ${legalMeta.controllerLegalName} (OrionAlerts) so we can respond to your request. We also record your IP address for rate-limiting and abuse prevention. Demo requests use Google reCAPTCHA. We use these details only to respond to your request. See our Privacy Policy for how long we keep them and your rights, or email ${legalMeta.privacyEmail} to request access or deletion.`;
}
