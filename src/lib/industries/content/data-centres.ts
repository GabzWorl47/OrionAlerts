import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const dataCentresIndustryPage: IndustryPageRecord = {
  slug: "data-centres",
  name: "Data Centres",
  cardLabel: "Data Centres",
  siteNoun: { one: "data centre", many: "data centres" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Data Centres",
    description:
      "Data centre CCTV analytics: review controlled-entrance events, check clips against access logs once integrated, and confirm security cameras are recording.",
    canonicalPath: "/industries/data-centres",
    image: "/Images/industries/data-centres.webp",
  },
  hero: {
    eyebrow: "Data Centres",
    h1: "AI Video Analytics for Data Centres",
    lede: "Find the right access-lobby clip fast, check it against access-control logs once that integration is verified, and confirm every priority security camera is recording. Physical security sees controlled-entrance events in context before deciding what to investigate.",
    media: {
      kind: "image",
      src: "/Images/industries/data-centres.webp",
      alt: "Technician walking between rows of server racks in a data centre hall",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Verify the event before treating it as an access breach.",
    paragraphs: [
      "A data-centre entrance may involve escorts, authorised maintenance and multiple access checks. Video shows movement at each controlled entrance, while access permissions and escort records establish who was authorised. Keep the case for physical surveillance separate from server health and facility uptime certification.",
    ],
    buyers: [
      "Physical security",
      "Data-centre operations",
      "Compliance",
      "Infrastructure engineering",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Data Centre Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Controlled Zone" },
      { label: "Room", example: "Access Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected access lobby or controlled entrance so questions about the controlled access lobby start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise what physical security should investigate, without assuming an access violation.",
      "Show observations at the controlled access lobby overnight.",
      "Which covered entrances had recurring entry observations this week?",
    ],
    exampleAnswer:
      "Repeated entry observations occur at an entrance used for planned maintenance. Suggested next step: review escort arrangements and access logs before deciding whether the pattern requires a security change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated entry observations occur at an entrance used for planned maintenance.",
    recommendation:
      "Review escort arrangements and access logs before deciding whether the pattern requires a security change.",
    decisionOwner: "Physical security / data-centre operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring controlled entrances and security-review prioritisation into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare defined physical observations and coverage only when the assessment basis is consistent; these are never cyber-security, Tier or access-authorisation scores.",
    dimensions: [
      {
        name: "Controlled-Entry Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured controlled entrance or lobby follows the agreed observable access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped service pathway or loading/staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Physical Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled physical observation at a defined entrance is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable overnight or operating window",
    scope: "Selected controlled entrances and service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Start from the controlled access lobby",
      body: "Cameras map to controlled zones and access lobbies, so an investigation opens on the entrance it concerns.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search the access lobby overnight",
      body: "Ask Vision Copilot, “Show observations at the controlled access lobby overnight,” and review the entries in that window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which entrances show repeat entries",
      body: "Ask which covered entrances had recurring entry observations this week, for example at an entrance used for planned maintenance.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Check escorts and logs before acting",
      body: "Ask what physical security should investigate. A typical suggestion is to review escort arrangements and access logs before deciding on a security change.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score physical observations and coverage",
      body: "0–100 scores cover defined physical observations and camera coverage at controlled entrances, kept separate from cyber-security or Tier measures.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Review deployment location, network separation, role controls and export procedures with the customer's security team. Validate the access-log integration and test camera and recording failure scenarios.",
    requiredInputs: [
      "Mapped hierarchy for pilot controlled entrances and service areas",
      "Agreed role controls, network separation and export procedures",
      "Verified access-log integration before authorisation claims",
      "Camera and recording failure tests for priority surveillance views",
    ],
  },
  standards: {
    publicCopy:
      "ISO/IEC 27001 covers an organisation's information-security management system, and Uptime Institute Tier certification covers defined data-centre infrastructure and operational scopes. Camera observations at controlled entrances support the operator's own physical-security reviews; adding video analytics confers neither certification.",
    frameworkIds: ["C11"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed doorway-event usefulness",
      definition:
        "Confirmed relevant doorway or entrance events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Controlled entry tests and operator review logs",
    },
    {
      label: "Time to correlate a known access event",
      definition:
        "Time for an authorised reviewer to locate matching footage for a defined access event from an agreed starting input such as time window and entrance.",
      sourceOfTruth: "Access logs and timed correlation exercises",
    },
    {
      label: "Priority recording availability",
      definition:
        "Share of required recording minutes with usable footage for priority controlled-entrance cameras during agreed monitoring windows.",
      sourceOfTruth: "Recorder availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of controlled-entrance events.",
    },
    {
      solutionSlug: "vms",
      body: "Authorised scene review across the agreed cameras, live and recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Confirms priority security cameras are recording, so physical-security investigations keep their intended coverage.",
    },
  ],
  faqs: [
    {
      question: "Can CCTV clips be matched to access-control logs?",
      answer:
        "Yes, through an access-control integration that is scoped and verified during the pilot. Once it is in place, a door or badge event can be looked up against the mapped entrance camera for the same time, so physical security sees the entry and the access record together. Until then, reviewers search by entrance and time window.",
    },
    {
      question: "How do we know every security camera is recording?",
      answer:
        "Camera health monitoring tracks priority security cameras and recorders, flagging offline feeds and recording interruptions so they are fixed before footage is needed. During the pilot, test camera and recording failure scenarios on purpose to confirm the alerts reach the right team.",
    },
    {
      question: "Does this make a facility Tier III or Tier IV?",
      answer:
        "No. Tier certification is a separate assessment of the relevant data-centre infrastructure and operational scope by Uptime Institute. OrionAlerts covers physical surveillance and camera availability within the facility: controlled-entrance events, clip retrieval and recording health. These support the operator's own physical-security reviews and sit outside any Tier assessment.",
    },
    {
      question: "Can video determine whether someone is authorised?",
      answer:
        "Not from presence alone. Authorisation comes from access permissions and escort records, and video shows the entry itself: how many people passed through the controlled entrance, when, and whether an escort was visible. Security reviews the clip alongside those records through a verified process before deciding whether an entry needs further investigation.",
    },
  ],
  limits: "Video shows movement at entrances; authorisation comes from access and escort records. Physical-surveillance scores are separate from cyber-security, Tier or uptime measures, and adding analytics confers no certification.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring"],
    glossary: ["camera-health-monitoring", "edge-ai-video-analytics"],
    useCases: ["no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["telecom-remote", "banking", "commercial-buildings"],
  finalCta: {
    heading: "Ask Vision Copilot about your data centre.",
    body: "Map one controlled access lobby and its cameras, and see how an entry review would run against your access logs.",
  },
  sources: [
    "README v2 §9.15",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C11",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
