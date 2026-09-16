import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const sportsEventsIndustryPage: IndustryPageRecord = {
  slug: "sports-events",
  name: "Sports & Event Venues",
  cardLabel: "Sports & Events",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about event-phase congestion and stewarding decisions.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Stadium and Event Video Analytics | OrionAlerts",
    description:
      "Explore sports and event venues with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/sports-events",
    ogTitle: "Stadium and Event Video Analytics | OrionAlerts",
    ogDescription:
      "Explore sports and event venues with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Sports & Event Venues",
    h1: "Vision Copilot for Sports and Event Venues",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about event-phase congestion and stewarding decisions. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative sports venue and crowd photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Combine visible crowd conditions with trained operational judgment.",
    paragraphs: [
      "Arrival, intervals and dispersal create different crowd patterns within a single event. A count or congestion observation is useful only when staff understand the area and have a response plan. Crowd safety depends on planning, staffing and coordinated action, not a dashboard threshold alone. NDMA guidance addresses organised crowd-management planning.",
      "A reference deployment covers gates, concourse pinch points and egress routes, on a network sized for the peak load of arrival and dispersal rather than an average day. Retention should match the event debrief and any incident-review window, with congestion alerts routed to the stewarding and security control room that owns crowd response. Where a ticketing or access-control system is in use, align review timestamps with its gate records instead of treating a camera count as the only measure of crowd conditions.",
    ],
    buyers: [
      "Venue operators",
      "Event organisers",
      "Security",
      "Stewarding and facilities teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Venue Site" },
      { label: "Building", example: "Stand Building" },
      { label: "Floor", example: "Concourse Level" },
      { label: "Zone", example: "Entry Zone" },
      { label: "Room", example: "Gate Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected gate or concourse so questions about Gate 4 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from Gate 4 during yesterday's arrival period.",
      "Which covered concourses had repeated congestion during the interval?",
      "What should event operations review before the next comparable event?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Congestion repeatedly appears at the same concourse junction during intervals. Suggested next step: review steward positions and passenger guidance with event operations under the venue plan; assess the next comparable event phase.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion repeatedly appears at the same concourse junction during intervals.",
    recommendation:
      "Review steward positions and passenger guidance with event operations under the venue plan; assess the next comparable event phase.",
    decisionOwner: "Event operations / stewarding",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring event-phase congestion and stewarding decisions into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare comparable event phases and covered zones only when the assessment basis is consistent; never treat these scores as an automated crowd-safety authorisation.",
    dimensions: [
      {
        name: "Entrance Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or occupancy at a defined gate stays within the agreed operational threshold for the event phase.",
        methodologyStatus: "proposed",
      },
      {
        name: "Concourse Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped concourse pathway or junction is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured backstage or service area follows the agreed credential or access rule for the event period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable event phase",
    scope: "Selected gates and concourses with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect event-phase congestion and stewarding decisions to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from Gate 4 during yesterday\'s arrival period.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered concourses had repeated congestion during the interval?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should event operations review before the next comparable event?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across comparable event phases and covered zones, not an automated crowd-safety authorisation. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Entrance Flow, Concourse Readiness and Service-Area Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Congestion repeatedly appears at the same concourse junction during intervals. Ask: “What should event operations review before the next comparable event?” Suggested recommendation: Review steward positions and passenger guidance with event operations under the venue plan; assess the next comparable event phase. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Validate separately for arrival, live event and dispersal. Test darkness, flashing lights, flags and occlusion. Establish staffed response ownership and confirm how camera outages are reported during an event.`,
    requiredInputs: [
      "Mapped hierarchy for pilot gates, concourses and service zones",
      "Agreed response owners for arrival, interval and dispersal phases",
      "Event-phase validation plan covering darkness, lighting effects and occlusion",
      "Camera-outage reporting ownership during live events",
      "Network capacity planned for peak arrival and dispersal load, not an average operating day",
    ],
  },
  standards: {
    publicCopy:
      "Use NDMA crowd-management guidance and premises/fire planning context. Event permissions and operating limits are venue- and jurisdiction-specific; camera analytics does not certify crowd safety.",
    frameworkIds: ["C21", "C8"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Count error by event phase",
      definition:
        "Difference between camera-derived aggregate occupancy or queue estimates and manual samples for the same gate or concourse window within a defined event phase.",
      sourceOfTruth: "Manual samples and camera-derived counts",
    },
    {
      label: "Steward acknowledgement time for reviewed observations",
      definition:
        "Time from a reviewed observation being presented to acknowledgement by the assigned stewarding or event-operations owner, using an agreed review log.",
      sourceOfTruth: "Event logs and steward acknowledgement records",
    },
    {
      label: "Critical camera availability during the event",
      definition:
        "Share of expected critical-camera assessment windows that remained usable during the live-event period for the agreed assessment tasks.",
      sourceOfTruth: "Recording records and surveillance health logs",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For sports and event venues, focus on location-aware search, recommendations and score-led review of event-phase congestion and access observations.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for event control-room review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise live-event camera continuity so stewarding and control-room teams retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can analytics guarantee crowd safety?",
      answer:
        "No. It supports situational awareness alongside trained staff, operating limits and established plans.",
    },
    {
      question: "Can the same threshold be used for every event?",
      answer:
        "It needs validation for layout, audience flow, lighting and the response plan. A technical threshold is not a safety authorisation.",
    },
    {
      question: "Can video replace ticket checks?",
      answer:
        "No. Ticket validity and access credentials require the appropriate systems and staff process.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["airports-ports-railways", "government", "education-campuses"],
  finalCta: {
    heading: "Ask Vision Copilot about your sports and event venues.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for sports and event venues.",
  },
  sources: [
    "README v2 §9.30",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C21/C8",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
