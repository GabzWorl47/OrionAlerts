import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const quickCommerceIndustryPage: IndustryPageRecord = {
  slug: "quick-commerce",
  name: "Quick Commerce",
  cardLabel: "Quick Commerce",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about regional oversight and recurring local handoff problems.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Quick Commerce Video Analytics | OrionAlerts",
    description:
      "Explore quick commerce networks with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/quick-commerce",
    ogTitle: "Quick Commerce Video Analytics | OrionAlerts",
    ogDescription:
      "Explore quick commerce networks with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Quick Commerce",
    h1: "Vision Copilot for Quick Commerce Networks",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about regional oversight and recurring local handoff problems. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative quick-commerce dispatch photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Scale operational visibility without losing local context.",
    paragraphs: [
      "A regional team can see order metrics and still lack context for an issue at a particular location. Video can help explain what happened around a dispatch point or access event. The challenge is making event definitions consistent across varied site layouts. Compare equivalent scenes and operating periods rather than treating every location's alert count as a performance ranking.",
    ],
    buyers: [
      "Network operations",
      "Regional heads",
      "Fulfilment leadership",
      "Loss prevention",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Network Site" },
      { label: "Building", example: "Store Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Dispatch Zone" },
      { label: "Room", example: "Pickup Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected pickup or dispatch area so questions about covered dispatch locations start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Summarise today's observations across the covered dispatch locations.",
      "Which locations show recurring pickup-area congestion during comparable peaks?",
      "What should regional operations prioritise in tomorrow's site reviews?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Several covered locations show recurring pickup congestion, but at different parts of their handoff areas. Suggested next step: review each site's staging and rider waiting arrangement; compare like-for-like periods before standardising a change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Several covered locations show recurring pickup congestion, but at different parts of their handoff areas.",
    recommendation:
      "Review each site's staging and rider waiting arrangement; compare like-for-like periods before standardising a change.",
    decisionOwner: "Regional operations / network operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring regional oversight and recurring local handoff problems into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare locations only where score definitions, coverage and operating periods are comparable and the assessment basis is consistent.",
    dimensions: [
      {
        name: "Pickup-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or dwell at a defined pickup area stays within the agreed operational threshold during comparable peaks.",
        methodologyStatus: "proposed",
      },
      {
        name: "Dispatch-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped dispatch staging space is clear and usable according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Site Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry outside each location's approved operating schedule follows the agreed exception or access rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable peak window across covered locations",
    scope: "Selected dispatch and pickup areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect regional oversight and recurring local handoff problems to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Summarise today\'s observations across the covered dispatch locations.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which locations show recurring pickup-area congestion during comparable peaks?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should regional operations prioritise in tomorrow\'s site reviews?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across locations only where score definitions, coverage and operating periods are comparable. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Pickup-Area Flow, Dispatch-Area Readiness and Site Access Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Several covered locations show recurring pickup congestion, but at different parts of their handoff areas. Ask: “What should regional operations prioritise in tomorrow's site reviews?” Suggested recommendation: Review each site's staging and rider waiting arrangement; compare like-for-like periods before standardising a change. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Pilot more than one representative layout before defining a network-wide rule. Record local camera limits, time synchronisation and response ownership. Confirm multi-site permissions and reporting capabilities in the proposed configuration.`,
    requiredInputs: [
      "Mapped hierarchy for pilot dispatch and pickup areas across representative layouts",
      "Common event categories with local response ownership",
      "Confirmed multi-site permissions and reporting configuration",
      "Time synchronisation and camera-limit notes per pilot site",
    ],
  },
  standards: {
    publicCopy:
      "Match food-related obligations to each applicable operating activity. Apply privacy and premises controls for multi-site monitoring. The business model does not itself create a general AI certification requirement.",
    frameworkIds: ["C7", "C9", "C8"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Event acknowledgement by site",
      definition:
        "Share of reviewed regional/local events acknowledged by the responsible site team within the agreed response window.",
      sourceOfTruth: "Local review logs and acknowledgement records",
    },
    {
      label: "Reviewed dispatch-area congestion duration",
      definition:
        "Confirmed relevant occupancy duration at selected dispatch points during comparable peaks, using an agreed review rubric.",
      sourceOfTruth: "Local review logs and timed samples",
    },
    {
      label: "Priority cameras with usable recordings",
      definition:
        "Proportion of priority cameras at covered sites with usable recordings for the agreed monitoring windows.",
      sourceOfTruth: "Camera and recording availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For quick commerce, focus on location-aware search, recommendations and score-led review with consistent event definitions across sites.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for regional and local review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise site-by-site camera availability so missing coverage is not mistaken for a quiet location.`,
    },
  ],
  faqs: [
    {
      question: "Can video prove a ten-minute delivery promise?",
      answer:
        "No. Delivery performance needs reliable order, dispatch and delivery data. Video can supply context for the on-site portion.",
    },
    {
      question: "Can rules be identical at every location?",
      answer:
        "Definitions can be standardised, but camera geometry, layout and thresholds must be validated locally.",
    },
    {
      question: "Is this the same as QSR monitoring?",
      answer:
        "No. Quick commerce and quick-service restaurants have different workflows. Do not substitute restaurant content on this route.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["dark-stores", "ecommerce-fulfilment", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your quick commerce networks.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for quick commerce networks.",
  },
  sources: [
    "README v2 §9.10",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C7/C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
