import type { IndustryCta, IndustryFaq } from "@/lib/industries/types";

export const INDUSTRY_SCHEMA_VERSION = 2;

export const industrySharedCtas = {
  primary: { label: "Book a Demo", href: "/book-demo" } satisfies IndustryCta,
  secondaryHero: {
    label: "Explore Vision Copilot",
    href: "#vision-copilot",
  } satisfies IndustryCta,
  secondaryFinal: { label: "Talk to an Expert", href: "/contact" } satisfies IndustryCta,
};

/**
 * Copy that appears on every industry page. Keep each item to one short
 * sentence that reads naturally for any site type (a mine, a tower, a
 * hospital); everything else on a page comes from its own content file.
 */
export const industrySharedCopy = {
  copilotIntro:
    "Type a question in everyday language and Vision Copilot searches the observations from your mapped cameras for that place and time.",
  workflowExplanation:
    "OrionAlerts maps each camera to a place, analyses its scenes over time, and sends alerts to the dashboard, mobile app and email for the team that owns that area.",
  measurementNote:
    "Compare reviewed alerts with what actually happened, including missed events and nuisance alerts, before you set a rollout target.",
  workflowLabels: ["Map", "Observe", "Ask", "Prioritise", "Act", "Review"] as const,
};

/**
 * The two general questions kept on every industry page. They are rendered
 * after the industry Q&As and deliberately left out of FAQPage JSON-LD.
 */
export const industrySharedFaqs: IndustryFaq[] = [
  {
    question: "Can we use our existing CCTV cameras?",
    answer:
      "Yes, in most cases: OrionAlerts connects to compatible IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so working hardware can usually stay in place. A short assessment checks camera position, image quality and network access for each use case, and confirms compatibility model by model before the pilot starts.",
  },
  {
    question: "Where is the video stored, and who can see it?",
    answer:
      "On site: video and AI inference stay on the on-site node, while Orion Cloud syncs alerts, health status and configuration metadata for central management. Role-based access means each user sees only the sites, cameras and functions in their scope, and retention is set per camera, zone or site to follow your own policy.",
  },
];

/** "a cement plant", "an automotive plant", "a utility site". */
export function withArticle(noun: string) {
  return /^(?:[aeio]|u(?!ti))/i.test(noun) ? `an ${noun}` : `a ${noun}`;
}

/** Section headings and eyebrow labels with the industry interpolated. */
export function industrySectionCopy(page: {
  name: string;
  cardLabel: string;
  siteNoun: { one: string; many: string };
}) {
  const { one, many } = page.siteNoun;
  const label = page.cardLabel;
  return {
    mapped: { kicker: `${label} · Location map`, heading: `Your ${one}, mapped` },
    copilot: {
      kicker: `${label} · Vision Copilot`,
      heading: `Ask about your ${one} in plain language`,
    },
    useCases: { kicker: `${label} · Use cases`, heading: `Use cases for ${many}` },
    workflow: { kicker: `${label} · How it works`, heading: `How OrionAlerts works for ${many}` },
    deployment: {
      kicker: `${label} · Deployment`,
      heading: `Preparing ${withArticle(one)} for a pilot`,
    },
    standards: { kicker: `${label} · Standards`, heading: `Standards context for ${many}` },
    pilotMetrics: {
      kicker: `${label} · Pilot evaluation`,
      heading: `What to measure in ${withArticle(one)} pilot`,
    },
    solutions: { kicker: `${label} · Solutions`, heading: `OrionAlerts solutions for ${many}` },
    faqs: {
      kicker: `${label} · Questions`,
      heading: `AI video analytics for ${many}: common questions`,
    },
    furtherReading: { kicker: `${label} · Further reading`, heading: `Further reading for ${one} teams` },
    related: { kicker: `${label} · Related`, heading: `Industries related to ${many}` },
  };
}

export const industrySectionAnchors = {
  mapped: "building-intelligence",
  copilot: "vision-copilot",
  useCases: "use-cases",
  workflow: "workflow",
  scores: "scores",
  deployment: "deployment",
  standards: "standards",
  pilotMetrics: "pilot-metrics",
  solutions: "solutions",
  faqs: "faqs",
  related: "related-industries",
  furtherReading: "further-reading",
  finalCta: "final-cta",
} as const;
