import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const sportsEventsIndustryPage: IndustryPageRecord = {
  slug: "sports-events",
  name: "Sports & Event Venues",
  cardLabel: "Sports & Events",
  siteNoun: { one: "venue", many: "stadiums and venues" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Stadiums & Event Venues",
    description:
      "AI video analytics for stadiums and venues: gate and concourse congestion by event phase, steward response times and camera availability during events.",
    canonicalPath: "/industries/sports-events",
    image: "/Images/industries/sports-events.webp",
  },
  hero: {
    eyebrow: "Sports & Event Venues",
    h1: "AI Video Analytics for Stadiums & Event Venues",
    lede: "See gate and concourse congestion by event phase, track how quickly stewards acknowledge alerts, and confirm critical cameras stay available during live events at stadiums and venues.",
    media: {
      kind: "image",
      src: "/Images/industries/sports-events.webp",
      alt: "Football match with a player scoring in front of a packed stadium crowd",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Combine visible crowd conditions with trained operational judgement.",
    paragraphs: [
      "Arrival, intervals and dispersal create different crowd patterns within a single event. A count or congestion observation is most useful when staff understand the area and have a response plan, because crowd safety rests on planning, staffing and coordinated action. National Disaster Management Authority (NDMA) guidance addresses organised crowd-management planning.",
      "A reference deployment covers gates, concourse pinch points and egress routes, on a network sized for the peak load of arrival and dispersal. Retention matches the event debrief and incident-review window, with congestion alerts routed to the stewarding and security control room that owns crowd response. Where a ticketing or access-control system is in use, review timestamps align with its gate records so camera counts sit alongside other measures.",
    ],
    buyers: [
      "Venue operators",
      "Event organisers",
      "Security",
      "Stewarding and facilities teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should event operations review before the next comparable event?",
      "Show observations from Gate 4 during yesterday's arrival period.",
      "Which covered concourses had repeated congestion during the interval?",
    ],
    exampleAnswer:
      "Congestion repeatedly appears at the same concourse junction during intervals. Suggested next step: review steward positions and spectator guidance with event operations under the venue plan; assess the next comparable event phase.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion repeatedly appears at the same concourse junction during intervals.",
    recommendation:
      "Review steward positions and spectator guidance with event operations under the venue plan; assess the next comparable event phase.",
    decisionOwner: "Event operations / stewarding",
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
      title: "Map gates, stands and concourse levels",
      body: "Cameras sit under the venue site, stand building and concourse level, so a question about Gate 4 goes straight to its views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Replay Gate 4's arrival period",
      body: "Ask Vision Copilot, “Show observations from Gate 4 during yesterday's arrival period,” to review how entry built up at that gate.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find concourse junctions that jam at intervals",
      body: "Ask, “Which covered concourses had repeated congestion during the interval?” to compare the same junctions across event phases.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Debrief before the next event",
      body: "Ask, “What should event operations review before the next comparable event?” Suggestions such as moving steward positions or adding spectator guidance come with their observations, decided under the venue plan.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise zones by event phase",
      body: "Scores out of 100 for entrance flow, concourse readiness and service-area control compare covered zones across comparable event phases.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Validate separately for arrival, live event and dispersal, and test darkness, flashing lights, flags and occlusion. Set staffed response ownership and agree how camera outages are reported during an event.",
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
      "NDMA crowd-management guidance and premises and fire planning shape how venues plan for crowds. Event permissions and operating limits are set per venue and jurisdiction, and camera observations feed into that plan.",
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
      body: "Location-aware search, recommendations and score-led review of event-phase congestion and access observations.",
    },
    {
      solutionSlug: "vms",
      body: "Event control-room review across agreed gate, concourse and egress cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps critical cameras available through the live event, so stewarding and control-room teams have usable footage.",
    },
  ],
  faqs: [
    {
      question: "How can stadiums monitor crowd congestion with existing CCTV?",
      answer:
        "Cameras at gates, concourse pinch points and egress routes estimate occupancy and queues by event phase, and congestion alerts go to the stewarding and security control room. Pilots compare those estimates with manual samples and track steward acknowledgement time, so the venue knows how far to rely on each view.",
    },
    {
      question: "What happens if a camera fails during an event?",
      answer:
        "Camera availability is tracked through the live event, and outages are reported to the team that owns them. Pilots measure the share of critical-camera windows that stayed usable, so the control room knows which views it can rely on during arrival, intervals and dispersal.",
    },
    {
      question: "Can analytics guarantee crowd safety?",
      answer:
        "No. Analytics supports situational awareness alongside trained staff, operating limits and the venue's established crowd plan. Crowd safety stays with that plan and the people running it; camera estimates and alerts help stewards see where congestion is building so they can act under the plan, not instead of it.",
    },
    {
      question: "Can the same threshold be used for every event?",
      answer:
        "No. Each event layout, audience flow, lighting condition and response plan gets its own validated threshold, checked separately for arrival, live play and dispersal. A technical threshold supports the venue plan rather than authorising safety, and counts are compared with manual samples before the control room relies on them.",
    },
    {
      question: "Can video replace ticket checks?",
      answer:
        "No. Ticket validity and access credentials are checked by the venue's ticketing systems and staff. Video adds context at the gate, such as how quickly entry is building during arrival, and where a ticketing or access-control system is in use, review timestamps can be aligned with its gate records.",
    },
  ],
  limits:
    "Analytics supports situational awareness; it does not guarantee crowd safety, authorise operating limits or validate tickets. Thresholds need validation for each layout and event phase.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem", "cctv-camera-health-monitoring"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["crowd-detection"],
  },
  relatedIndustrySlugs: ["airports-ports-railways", "government", "education-campuses"],
  finalCta: {
    heading: "Ask Vision Copilot about your venue.",
    body: "Track gate and concourse congestion and camera availability through every phase of your next event.",
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
