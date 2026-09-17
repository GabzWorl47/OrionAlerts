import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const commercialBuildingsIndustryPage: IndustryPageRecord = {
  slug: "commercial-buildings",
  name: "Commercial Buildings",
  cardLabel: "Commercial",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about tenant-facing common areas and recurring service pressure.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Commercial Building Video Analytics | OrionAlerts",
    description:
      "Explore commercial buildings with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/commercial-buildings",
    ogTitle: "Commercial Building Video Analytics | OrionAlerts",
    ogDescription:
      "Explore commercial buildings with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/commercial-buildings.jpeg",
  },
  hero: {
    eyebrow: "Commercial Buildings",
    h1: "Vision Copilot for Commercial Buildings",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about tenant-facing common areas and recurring service pressure. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/commercial-buildings.jpeg",
      alt: "Illustrative commercial office building photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Coordinate a response across shared spaces.",
    paragraphs: [
      "Multi-tenant buildings have overlapping activity at reception, lifts, parking and service entrances. Security may see an event without knowing which facilities or tenant team should act. Define the purpose and response owner for each monitored area. Common-area visibility should not become unrestricted access to every tenant's activity.",
      "A reference deployment covers lobbies, lift lobbies, parking entries and service corridors, typically on the building's own network segment rather than tenant IT. Set retention against the property's privacy and lease obligations, and route each alert type to the correct owner: facilities for service and common-area events, security for access and incident review. Where an access-control or BMS integration exists, align review with its logs rather than treating video as the only record of who entered a space and when.",
    ],
    buyers: [
      "Facility managers",
      "Property owners",
      "Corporate security",
      "Tenant operations",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Office Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Reception Zone" },
      { label: "Room", example: "Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected lobby or common zone so questions about ground-floor reception start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from the ground-floor reception this week.",
      "Which floors or common zones show recurring congestion?",
      "What should the facilities team prioritise in today's building review?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Lobby congestion repeatedly coincides with overlapping visitor and service activity. Suggested next step: review reception guidance and service scheduling with facilities, then compare similar operating windows.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Lobby congestion repeatedly coincides with overlapping visitor and service activity.",
    recommendation:
      "Review reception guidance and service scheduling with facilities, then compare similar operating windows.",
    decisionOwner: "Facilities / building operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring tenant-facing common areas and recurring service pressure into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare building floors and common zones where equivalent coverage and score definitions exist only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Common-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Reception Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible lobby or reception presence stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured service or restricted area follows the agreed schedule or access rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating window",
    scope: "Selected floors and common zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect tenant-facing common areas and recurring service pressure to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from the ground-floor reception this week.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which floors or common zones show recurring congestion?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the facilities team prioritise in today\'s building review?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across building floors and common zones where equivalent coverage and score definitions exist. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Common-Area Readiness, Reception Flow and Service-Area Access Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Lobby congestion repeatedly coincides with overlapping visitor and service activity. Ask: “What should the facilities team prioritise in today's building review?” Suggested recommendation: Review reception guidance and service scheduling with facilities, then compare similar operating windows. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Separate common and tenant-controlled areas. Agree permissions, notice, retention and incident-sharing responsibilities. Test daylight changes through glass entrances and crowded lobbies.`,
    requiredInputs: [
      "Mapped hierarchy for pilot common areas and service zones",
      "Agreed purpose and response owner per monitored area",
      "Permission, notice and retention rules for tenant-facing views",
      "Representative testing across daylight, crowding and after-hours windows",
      "Defined network segmentation between building and tenant systems, and alignment with access-control or BMS logs where those integrations exist",
    ],
  },
  standards: {
    publicCopy:
      "Consider premises and fire planning alongside privacy obligations for building monitoring. Video can help review conditions; it does not grant fire approval, occupancy permission or building certification.",
    frameworkIds: ["C8", "C9"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Useful after-hours alerts",
      definition:
        "Confirmed relevant after-hours zone entries divided by reviewed alerts for the defined service areas, using an agreed review rubric and schedule.",
      sourceOfTruth: "Schedules, sampled footage and supervisor review log",
    },
    {
      label: "Sampled queue/count error",
      definition:
        "Difference between camera-derived aggregate occupancy or queue estimates and manual samples for the same lobby window.",
      sourceOfTruth: "Manual lobby samples and camera-derived counts",
    },
    {
      label: "Incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed investigation exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For commercial buildings, focus on location-aware search, recommendations and score-led review of common-area events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for building incident review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise camera availability so facilities and security can retrieve useful footage.`,
    },
  ],
  faqs: [
    {
      question: "Can each tenant access only its authorised views?",
      answer:
        "Verify the required permission model in the selected configuration before rollout.",
    },
    {
      question: "Can occupancy estimates control HVAC?",
      answer:
        "That requires a separately assessed BMS integration and validated measurements. It is not assumed in this scope.",
    },
    {
      question: "Can video prove an exit is legally compliant?",
      answer:
        "No. A visual obstruction observation is only one input to the building's safety process.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["residential", "hotels-hospitality", "data-centres"],
  finalCta: {
    heading: "Ask Vision Copilot about your commercial buildings.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for commercial buildings.",
  },
  sources: [
    "README v2 §9.14",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
