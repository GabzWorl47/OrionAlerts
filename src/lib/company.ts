/**
 * "OrionAlerts at a glance" fact sheet (/company).
 *
 * Every value is derived from facts already published elsewhere on the site
 * (site.ts, legal.ts, nebula-os.ts, faqs.ts, about.ts). Do not add a row here unless the fact is
 * confirmed by the team.
 *
 * Deliberately omitted until the team confirms them (see CONTENT-SEO-RECOMMENDATIONS.md
 * "Information needed from the team"):
 *   - Founding year
 *   - Headcount / team size
 *   - Leadership names and roles
 *   - Customers, case studies and client logos (with permission)
 *   - Certifications, with scope (ISO, SOC 2, STQC, etc.)
 *   - Public phone number
 *   - Social profiles (LinkedIn, etc.) / Wikidata / Crunchbase
 */

import { legalMeta } from "@/lib/legal";
import { nebulaDeployment } from "@/lib/nebula-os";
import { industries, site, solutions } from "@/lib/site";

export type CompanyFactLink = { href: string; label: string };

export type CompanyFact = {
  id: string;
  /** <dt> text. */
  label: string;
  /** Main <dd> text. */
  value: string;
  /** Optional bullet items rendered under the value. */
  items?: string[];
  /** Optional internal or mailto links rendered under the value. */
  links?: CompanyFactLink[];
};

export const COMPANY_PATH = "/company";

const MODULE_ORDER = ["vms", "ai-analytics", "health-monitoring", "asset-tracking", "amc-management"];

export const companyFacts: CompanyFact[] = [
  {
    id: "brand",
    label: "Product and brand",
    value: `${site.name}, an enterprise video intelligence platform for single-site and multi-site organizations.`,
  },
  {
    id: "legal-entity",
    label: "Legal entity",
    value: legalMeta.controllerLegalName,
  },
  {
    id: "headquarters",
    label: "Headquarters",
    value: `${site.address}, India`,
    links: [{ href: "/contact", label: "Contact" }],
  },
  {
    id: "primary-market",
    label: "Primary market",
    value: "India. Built and supported in Mumbai for organizations with one site or many.",
  },
  {
    id: "platform",
    label: "Platform",
    value:
      "Nebula OS, a Linux-based Vision AI operating system that runs the modules below on one shared record of every camera, site and event.",
    links: [{ href: "/nebula-os", label: "Nebula OS" }],
  },
  {
    id: "modules",
    label: "Product modules",
    value: "Five modules on Nebula OS:",
    links: MODULE_ORDER.map((slug) => {
      const solution = solutions.find((s) => s.slug === slug);
      return { href: `/solutions/${slug}`, label: solution?.name ?? slug };
    }),
  },
  {
    id: "deployment",
    label: "Deployment models",
    value: "The same operating system image and modules in every model; only the placement of the node changes.",
    items: nebulaDeployment.models.map((m) => `${m.name}. Best for: ${m.bestFor}`),
  },
  {
    id: "protocols",
    label: "Supported camera protocols",
    value:
      "ONVIF, RTSP and vendor (OEM) SDKs through a universal device layer. Existing cameras are brought onto the platform rather than replaced; compatibility is confirmed per model during solution design.",
    links: [
      { href: "/glossary/onvif", label: "ONVIF" },
      { href: "/glossary/rtsp", label: "RTSP" },
    ],
  },
  {
    id: "data-residency",
    label: "Where video is processed",
    value:
      "In the standard deployment, video and AI inference stay on the on-site Nebula OS node. Only health status, alerts, configuration and operational metadata synchronize to Orion Cloud, so raw video does not have to be uploaded. OrionAlerts is not a cloud video recording (VSaaS) service.",
    links: [
      { href: "/security", label: "Security" },
      { href: "/privacy", label: "Privacy" },
    ],
  },
  {
    id: "ai-processing",
    label: "AI processing",
    value:
      "On the on-site node, with GPU acceleration for video decoding and AI inference. Node sizing depends on channel count and the detections running, and is done per deployment.",
  },
  {
    id: "alerts",
    label: "Alert delivery",
    value: "Dashboard, mobile app and email.",
  },
  {
    id: "multi-site",
    label: "Multi-site model",
    value:
      "Each site runs its own Nebula OS node for video, recording and inference; Orion Cloud provides one command view of health, alerts, assets and maintenance across every location.",
  },
  {
    id: "updates",
    label: "Updates",
    value:
      "Managed OS and service updates through a rollback-ready deployment path, including secure over-the-air updates for connected nodes.",
  },
  {
    id: "industries",
    label: "Industries",
    value: `Industry pages for ${industries.length} sectors, from manufacturing and logistics to healthcare, banking and public infrastructure, describing the detections and modules that apply to each.`,
    links: [{ href: "/industries", label: "All industries" }],
  },
  {
    id: "contact",
    label: "Contact",
    value: "Sales, privacy and security inquiries:",
    links: [
      { href: `mailto:${legalMeta.generalEmail}`, label: `Sales: ${legalMeta.generalEmail}` },
      { href: `mailto:${legalMeta.privacyEmail}`, label: `Privacy: ${legalMeta.privacyEmail}` },
      { href: `mailto:${legalMeta.securityEmail}`, label: `Security: ${legalMeta.securityEmail}` },
    ],
  },
];

export const companyPage = {
  title: "OrionAlerts at a glance",
  seoTitle: "OrionAlerts at a Glance: Company Fact Sheet",
  seoDescription:
    "OrionAlerts fact sheet: legal entity, Mumbai headquarters, product modules, Nebula OS, deployment models, camera protocols, video handling and contacts.",
};
