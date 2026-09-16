import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const hotelsHospitalityIndustryPage: IndustryPageRecord = {
  slug: "hotels-hospitality",
  name: "Hotels & Hospitality",
  cardLabel: "Hospitality",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about arrival pressure and service-area coordination.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Hotel and Hospitality Video Analytics | OrionAlerts",
    description:
      "Explore hotels and hospitality with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/hotels-hospitality",
    ogTitle: "Hotel and Hospitality Video Analytics | OrionAlerts",
    ogDescription:
      "Explore hotels and hospitality with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/hospitality.webp",
  },
  hero: {
    eyebrow: "Hotels & Hospitality",
    h1: "Vision Copilot for Hotels and Hospitality",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about arrival pressure and service-area coordination. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/hospitality.webp",
      alt: "Illustrative hotel lobby photograph used for hospitality industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Support attentive service with well-defined monitoring.",
    paragraphs: [
      "Hotels combine public arrival areas with private guest spaces and busy service operations. The right camera event can help staff inspect congestion or verify an after-hours entry. Define the boundaries carefully: the buying case is common-area awareness and incident context, not intrusive observation of guests or assumptions about their behaviour.",
    ],
    buyers: [
      "Hotel management",
      "Security",
      "Facilities",
      "Operations",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Property" },
      { label: "Building", example: "Hotel Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Arrival Zone" },
      { label: "Room", example: "Reception Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected reception or service entry so questions about reception during check-in start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from reception during yesterday's check-in window.",
      "Which covered service areas had recurring access observations?",
      "What should the duty manager prioritise before today's arrivals?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Arrival-area congestion recurs during overlapping guest and service movement. Suggested next step: review reception guidance and service-delivery timing with the duty manager.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Arrival-area congestion recurs during overlapping guest and service movement.",
    recommendation:
      "Review reception guidance and service-delivery timing with the duty manager.",
    decisionOwner: "Duty manager / hotel operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring arrival pressure and service-area coordination into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare public and service areas only when the assessment basis is consistent, without guest profiling or private-room monitoring.",
    dimensions: [
      {
        name: "Arrival-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible presence or queue near reception or drop-off stays within the agreed operational threshold during arrival windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Common-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common passageway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured store, plant or back-of-house service area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable check-in or arrival window",
    scope: "Selected public arrival and service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect arrival pressure and service-area coordination to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from reception during yesterday\'s check-in window.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered service areas had recurring access observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the duty manager prioritise before today\'s arrivals?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across public and service areas, without guest profiling or private-room monitoring. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Arrival-Area Flow, Common-Area Readiness and Service-Area Access Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Arrival-area congestion recurs during overlapping guest and service movement. Ask: “What should the duty manager prioritise before today's arrivals?” Suggested recommendation: Review reception guidance and service-delivery timing with the duty manager. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Exclude guest rooms, bathrooms and changing areas. Test decorative lighting and busy arrivals. Agree a request-and-review procedure for footage involving guests or staff.`,
    requiredInputs: [
      "Mapped hierarchy for pilot reception, arrival and service areas",
      "Exclusion of guest rooms, bathrooms and changing areas",
      "Agreed request-and-review procedure for guest or staff footage",
      "Representative testing across decorative lighting and busy arrivals",
    ],
  },
  standards: {
    publicCopy:
      "Apply premises, fire and privacy considerations for hospitality monitoring, and food-service requirements where relevant. Video does not grant a hotel classification, fire approval or food licence.",
    frameworkIds: ["C8", "C9", "C7"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful after-hours alerts",
      definition:
        "Confirmed relevant after-hours boundary or service-area events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Duty logs and reviewed alert samples",
    },
    {
      label: "Sampled arrival-area count error",
      definition:
        "Difference between camera-derived aggregate presence estimates and manual samples for the same arrival window.",
      sourceOfTruth: "Manual samples and camera-derived counts",
    },
    {
      label: "Authorised incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct reception or service-area clip from a defined starting input such as time window and area.",
      sourceOfTruth: "Timed review exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For hotels, focus on location-aware search, recommendations and score-led review of scoped service and common-area events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for incident context across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise agreed camera availability so authorised investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Does this require cameras in guest rooms?",
      answer:
        "No. This scope is limited to appropriate public and service areas.",
    },
    {
      question: "Can a queue alert improve service?",
      answer:
        "It can prompt staff review of a visible condition. Staffing decisions and actual service outcomes remain operational responsibilities.",
    },
    {
      question: "Can guests receive footage directly?",
      answer:
        "Follow the hotel's approved request and disclosure process, including the rights and privacy of others recorded.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["commercial-buildings", "retail-shopping", "residential"],
  finalCta: {
    heading: "Ask Vision Copilot about your hotels and hospitality.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for hotels and hospitality.",
  },
  sources: [
    "README v2 §9.19",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C7/C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
