import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const hotelsHospitalityIndustryPage: IndustryPageRecord = {
  slug: "hotels-hospitality",
  name: "Hotels & Hospitality",
  cardLabel: "Hospitality",
  siteNoun: { one: "hotel", many: "hotels" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Hotels & Hospitality",
    description:
      "Hotel CCTV analytics for lobbies and service areas: after-hours alerts, check-in congestion and authorised incident retrieval. No cameras in guest rooms.",
    canonicalPath: "/industries/hotels-hospitality",
    image: "/Images/industries/hospitality.webp",
  },
  hero: {
    eyebrow: "Hotels & Hospitality",
    h1: "AI Video Analytics for Hotels & Hospitality",
    lede: "Spot check-in congestion at reception, flag after-hours entry to service areas and find the right lobby clip fast, with cameras limited to public and service areas.",
    media: {
      kind: "image",
      src: "/Images/industries/hospitality.webp",
      alt: "Guests checking in at a hotel reception desk",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Support attentive service with well-defined monitoring.",
    paragraphs: [
      "Hotels combine public arrival areas with private guest spaces and busy service operations. The right camera event helps staff ease congestion at reception or verify an after-hours entry. Monitoring covers common areas and service operations and gives incident context, while guests' private spaces stay outside camera view.",
    ],
    buyers: [
      "Hotel management",
      "Security",
      "Facilities",
      "Operations",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should the duty manager prioritise before today's arrivals?",
      "Show observations from reception during yesterday's check-in window.",
      "Which covered service areas had recurring access observations?",
    ],
    exampleAnswer:
      "Arrival-area congestion recurs during overlapping guest and service movement. Suggested next step: review reception guidance and service-delivery timing with the duty manager.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Arrival-area congestion recurs during overlapping guest and service movement.",
    recommendation:
      "Review reception guidance and service-delivery timing with the duty manager.",
    decisionOwner: "Duty manager / hotel operations",
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
      title: "Map reception, arrivals and service entries",
      body: "Cameras sit under the property, hotel building and arrival zone, so a question about reception during check-in goes to the right views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Review yesterday's check-in window",
      body: "Ask Vision Copilot, “Show observations from reception during yesterday's check-in window,” to see how arrivals built up.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Track repeated service-area access",
      body: "Ask, “Which covered service areas had recurring access observations?” to see where after-hours or out-of-schedule entry keeps returning.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Get ready for today's arrivals",
      body: "Ask, “What should the duty manager prioritise before today's arrivals?” Suggestions such as adjusting reception guidance or service-delivery timing come with their observations for the duty manager to decide.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise arrival and service areas",
      body: "Scores out of 100 for arrival-area flow, common-area readiness and service-area access practices show which public and service areas need attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Keep guest rooms, bathrooms and changing areas out of scope. Test decorative lighting and busy arrivals, and agree a request-and-review procedure for footage involving guests or staff.",
    requiredInputs: [
      "Mapped hierarchy for pilot reception, arrival and service areas",
      "Exclusion of guest rooms, bathrooms and changing areas",
      "Agreed request-and-review procedure for guest or staff footage",
      "Representative testing across decorative lighting and busy arrivals",
    ],
  },
  standards: {
    publicCopy:
      "Hospitality monitoring follows premises, fire and privacy requirements, plus food-service rules where food is served. Hotel classification, fire approval and food licensing continue through their own authorities.",
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
      sourceOfTruth: "Manual arrival-area samples and camera-derived counts",
    },
    {
      label: "Reception and service-area clip retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct reception or service-area clip from a defined starting input such as time window and area.",
      sourceOfTruth: "Timed review exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of arrival congestion and service-area events.",
    },
    {
      solutionSlug: "vms",
      body: "Incident context from agreed lobby, reception and service-area cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps agreed hotel cameras recording, so authorised investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "How can hotels use AI video analytics in lobbies?",
      answer:
        "Cameras at reception and arrival areas estimate congestion during check-in and alert the duty manager, and service-area cameras flag after-hours entry. Each alert carries the location and clip, so staff can respond to a visible condition and review recurring patterns before the next arrival peak.",
    },
    {
      question: "How do hotels retrieve a clip for an incident?",
      answer:
        "An authorised reviewer starts from the reception or service area and a time window, or asks Vision Copilot in plain language, to find the matching clip. Requests involving guests or staff follow the hotel's agreed request-and-review procedure, and pilots time retrieval against the current process.",
    },
    {
      question: "Does this require cameras in guest rooms?",
      answer:
        "No. Deployments cover public and service areas only, such as reception, arrival zones, lobbies and back-of-house service entries. Guest rooms, bathrooms and changing areas are excluded from camera view, and the hotel agrees a request-and-review procedure for any footage involving guests or staff before the pilot starts.",
    },
    {
      question: "Can a queue alert improve service?",
      answer:
        "Not by itself. A queue alert prompts staff to review a visible condition at reception, such as arrivals building up during check-in, while the duty manager decides what to do. Staffing decisions and service outcomes stay with hotel operations, and recurring patterns help the team plan before the next arrival peak.",
    },
    {
      question: "Can guests receive footage directly?",
      answer:
        "Not directly. Guest requests follow the hotel's approved request and disclosure process, which protects the rights and privacy of others recorded in the same clip. An authorised reviewer locates the footage by area and time window, and the hotel decides what, if anything, can be shared and in what form.",
    },
  ],
  limits:
    "Cameras stay out of guest rooms, bathrooms and changing areas, and OrionAlerts does not profile guests. Queue alerts prompt staff review; staffing and service outcomes stay with hotel operations.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem", "what-is-a-vision-intelligence-platform"],
    glossary: ["video-analytics", "vms"],
    useCases: ["crowd-detection", "unauthorized-area-entry"],
  },
  relatedIndustrySlugs: ["retail-shopping", "healthcare", "commercial-buildings", "residential"],
  finalCta: {
    heading: "Ask Vision Copilot about your hotel.",
    body: "Start with reception and one service entry, and see which alerts your duty manager would act on.",
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
