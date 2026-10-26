import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const residentialIndustryPage: IndustryPageRecord = {
  slug: "residential",
  name: "Residential Communities & Townships",
  cardLabel: "Residential",
  siteNoun: { one: "housing society", many: "housing societies" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI CCTV for Housing Societies & Townships",
    description:
      "CCTV analytics for housing societies and townships: gate congestion, perimeter events and authorised incident retrieval, limited to common areas.",
    canonicalPath: "/industries/residential",
    image: "/Images/industries/residential.webp",
  },
  hero: {
    eyebrow: "Residential Communities & Townships",
    h1: "AI CCTV for Housing Societies & Townships",
    lede: "Watch gate congestion and perimeter events in housing societies and townships, and pull the right common-area clip fast, with cameras limited to shared spaces.",
    media: {
      kind: "image",
      src: "/Images/industries/residential.webp",
      alt: "Detached house with a garden path and a swimming pool",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Keep shared spaces safe and private life private.",
    paragraphs: [
      "Residential communities include residents, visitors, staff, deliveries and children using shared spaces. Security needs a clear reason to review an event and a proportionate way to respond, so monitoring focuses on perimeter and facility conditions. The monitoring policy explains who can access footage and how complaints or incidents are handled.",
    ],
    buyers: [
      "Housing societies",
      "Resident associations",
      "Property managers",
      "Security supervisors",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Community Site" },
      { label: "Building", example: "Residential Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Common Zone" },
      { label: "Room", example: "Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected common lobby or entrance so questions about Building 2's common lobby start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the property team review before the evening peak?",
      "Find observations from Building 2's common lobby this week.",
      "Which covered entrances had repeated congestion?",
    ],
    exampleAnswer:
      "Congestion repeatedly appears where deliveries and resident entry share a common approach. Suggested next step: review delivery staging and visitor guidance with property management while preserving appropriate resident access.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion repeatedly appears where deliveries and resident entry share a common approach.",
    recommendation:
      "Review delivery staging and visitor guidance with property management while preserving appropriate resident access.",
    decisionOwner: "Property management / security supervisor",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shared-space events and property-management priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare common areas and periods only when the assessment basis is consistent; never score resident behaviour or visitor trustworthiness.",
    dimensions: [
      {
        name: "Gate-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible vehicle or entry presence around a designated gate lane stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Common-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a plant room or service area follows the community's agreed access policy for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable evening or operating peak",
    scope: "Selected gates, lobbies and common routes with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map gates, lobbies and common routes",
      body: "Cameras sit under the community site, residential building and common zone, so a question about Building 2's common lobby goes to the right views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search Building 2's lobby this week",
      body: "Ask Vision Copilot, “Find observations from Building 2's common lobby this week,” to review that lobby for the period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which entrances congest repeatedly",
      body: "Ask, “Which covered entrances had repeated congestion?” to compare gates and entrances across the same peak periods.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Prepare for the evening peak",
      body: "Ask, “What should the property team review before the evening peak?” Suggestions such as delivery staging or visitor guidance come with their observations for property management to decide.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise gates and common areas",
      body: "Scores out of 100 for gate-area flow, common-route readiness and service-area control show which shared areas need attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Position cameras to cover gates, lobbies and common routes while keeping homes, balconies and private spaces out of view. Document purpose, notices, retention and access, and give authorised reviewers controlled access in place of open live feeds for every resident.",
    requiredInputs: [
      "Mapped hierarchy for pilot gates, lobbies and common routes",
      "Camera placement that avoids homes, balconies and private spaces",
      "Documented purpose, notices, retention and access policy",
      "Authorised review controls instead of unrestricted resident live feeds",
    ],
  },
  standards: {
    publicCopy:
      "Community monitoring follows the site's premises and privacy requirements and works alongside the community's fire approvals and security procedures.",
    frameworkIds: ["C8", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful perimeter events",
      definition:
        "Confirmed relevant perimeter or boundary events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Security logs and reviewed alert samples",
    },
    {
      label: "Reviewed gate congestion duration",
      definition:
        "Confirmed relevant vehicle or entry presence duration at selected gate lanes during comparable peaks, using an agreed review rubric.",
      sourceOfTruth: "Manual samples and security review logs",
    },
    {
      label: "Authorised incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed retrieval exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of gate, lobby and perimeter events.",
    },
    {
      solutionSlug: "vms",
      body: "Controlled review of agreed common-area cameras by authorised staff.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows the property team when a common-area camera stops recording.",
    },
  ],
  faqs: [
    {
      question: "How can housing societies use CCTV analytics?",
      answer:
        "Start with gates, perimeters and common lobbies. OrionAlerts flags perimeter events and gate congestion from existing cameras, sends alerts to the dashboard, mobile app and email for the security supervisor, and lets an authorised reviewer find a common-area clip by time window and lobby instead of scrolling through recordings.",
    },
    {
      question: "Can OrionAlerts help with delivery congestion at the gate?",
      answer:
        "Yes. Repeated congestion where deliveries and resident entry share an approach shows up as a recurring observation at that gate or lobby. Property management can then review delivery staging and visitor guidance, and pilots measure gate congestion duration during comparable peaks to see whether the change helped.",
    },
    {
      question: "Can every resident view all cameras?",
      answer:
        "No. Access is set by purpose and authorisation: authorised reviewers see the cameras their role needs, under controlled review rather than open live feeds for every resident. The permission model, notices and retention policy are documented by the society and verified in the selected setup before rollout.",
    },
    {
      question: "Does this recognise every visitor?",
      answer:
        "No. OrionAlerts reviews events in common areas, such as gate congestion and perimeter events, without identifying the people involved. Identifying and authorising visitors are separate functions, such as a visitor-management system at the gate, and would need their own specific supported scope.",
    },
    {
      question: "Can cameras watch inside homes?",
      answer:
        "No. Deployments cover common areas such as gates, lobbies and shared routes, with cameras positioned to keep homes, balconies and other private spaces out of view. Camera placement, purpose, notices and retention are documented before installation, so residents know what is covered and who can review the footage.",
    },
  ],
  limits:
    "Cameras cover shared spaces only, with no views into homes or balconies. OrionAlerts does not identify visitors or score resident behaviour, and footage access is limited to authorised reviewers.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough", "vms-vs-nvr"],
    glossary: ["nvr-vs-dvr-vs-vms", "video-analytics"],
    useCases: ["perimeter-intrusion-detection", "crowd-detection"],
  },
  relatedIndustrySlugs: ["construction", "hotels-hospitality", "education-campuses"],
  finalCta: {
    heading: "Ask Vision Copilot about your housing society.",
    body: "See gate congestion, perimeter events and common-area clips for every building in your community.",
  },
  sources: [
    "README v2 §9.26",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
