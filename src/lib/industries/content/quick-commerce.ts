import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const quickCommerceIndustryPage: IndustryPageRecord = {
  slug: "quick-commerce",
  name: "Quick Commerce",
  cardLabel: "Quick Commerce",
  siteNoun: { one: "quick commerce network", many: "quick commerce networks" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Multi-Site Video Monitoring for Quick Commerce",
    description:
      "Multi-site video monitoring for quick commerce: compare pickup-area congestion across stores, track alert response and spot cameras that stop recording.",
    canonicalPath: "/industries/quick-commerce",
    image: "/Images/industries/quick-commerce-hero.webp",
  },
  hero: {
    eyebrow: "Quick Commerce",
    h1: "Multi-Site Video Monitoring for Quick Commerce",
    lede: "Compare pickup-area congestion across many stores, track how fast each site acknowledges alerts and spot cameras that stop recording. Regional teams see the local context behind a metric without visiting every location.",
    media: {
      kind: "image",
      src: "/Images/industries/quick-commerce-hero.webp",
      alt: "Delivery rider on an electric scooter with an insulated delivery bag on a city street",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Scale operational visibility without losing local context.",
    paragraphs: [
      "A regional team can see order metrics and still need context for an issue at a particular location. Video explains what happened around a dispatch point or access event at that site. The work is making event definitions consistent across varied layouts, then comparing equivalent scenes and operating periods so each site's alerts are read in context.",
    ],
    buyers: [
      "Network operations",
      "Regional heads",
      "Fulfilment leadership",
      "Loss prevention",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should regional operations prioritise in tomorrow's site reviews?",
      "Summarise today's observations across the covered dispatch locations.",
      "Which locations show recurring pickup-area congestion during comparable peaks?",
    ],
    exampleAnswer:
      "Several covered locations show recurring pickup congestion, but at different parts of their handoff areas. Suggested next step: review each site's staging and rider waiting arrangement; compare like-for-like periods before standardising a change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Several covered locations show recurring pickup congestion, but at different parts of their handoff areas.",
    recommendation:
      "Review each site's staging and rider waiting arrangement; compare like-for-like periods before standardising a change.",
    decisionOwner: "Regional operations / network operations",
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
      title: "Organise every site the same way",
      body: "Each store's pickup and dispatch areas are mapped under one hierarchy, so a regional question reaches the right site and camera.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Summarise today across dispatch points",
      body: "Ask Vision Copilot to summarise today's observations across the covered dispatch locations before the regional review.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Compare congestion across like-for-like peaks",
      body: "Ask which locations show recurring pickup-area congestion during comparable peaks, then look at where in each handoff area it builds.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Prioritise tomorrow's site reviews",
      body: "Ask what regional operations should prioritise in tomorrow's site reviews. A typical suggestion is to review each site's staging and rider waiting arrangement before standardising a change.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score sites with matching definitions",
      body: "0–100 scores compare locations where score definitions, coverage and operating periods match.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Pilot more than one representative layout before defining a network-wide rule. Record local camera limits, time synchronisation and response ownership, and confirm multi-site permissions and reporting in the proposed configuration.",
    requiredInputs: [
      "Mapped hierarchy for pilot dispatch and pickup areas across representative layouts",
      "Common event categories with local response ownership",
      "Confirmed multi-site permissions and reporting configuration",
      "Time synchronisation and camera-limit notes per pilot site",
    ],
  },
  standards: {
    publicCopy:
      "Each operating activity carries its own obligations: food-related requirements where food is stored, plus privacy and premises duties for cameras across many sites. Per-site permissions and consistent event definitions are agreed with those duties in view.",
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
      body: "Location-aware search, recommendations and score-led review with consistent event definitions across every site.",
    },
    {
      solutionSlug: "vms",
      body: "Regional and local review of live and recorded video across the agreed cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Tracks camera availability site by site, so a missing feed shows up as an outage rather than a quiet store.",
    },
  ],
  faqs: [
    {
      question: "How do regional teams monitor many quick commerce stores at once?",
      answer:
        "Every store's pickup and dispatch areas sit under one location hierarchy with the same event definitions. Regional operations compare congestion during comparable peaks, see which sites acknowledged alerts within the agreed window, and check which priority cameras have usable recordings, without opening each store's recorder.",
    },
    {
      question: "What should a quick commerce pilot measure?",
      answer:
        "Three measures fit a multi-site pilot: event acknowledgement by site, reviewed dispatch-area congestion duration at selected pickup points, and the share of priority cameras with usable recordings. Pilot more than one representative store layout before turning any rule into a network-wide standard.",
    },
    {
      question: "Can video explain a delayed order?",
      answer:
        "Partly. Video shows what happened at pickup and dispatch, such as congestion in the handoff area or a rider waiting for an order. Delivery times come from your order and delivery systems, so the two are reviewed together, with the clip covering only the on-site part of the order's journey.",
    },
    {
      question: "Can rules be identical at every location?",
      answer:
        "The definitions can be, but each site still needs local checks. Event categories and definitions are standardised across the network, while camera geometry, layout and thresholds are validated at each store. That way, a rule that works in one layout is checked before it is applied everywhere.",
    },
    {
      question: "Is this the same as quick-service restaurant (QSR) monitoring?",
      answer:
        "No. This page covers quick commerce pickup and dispatch operations across a store network. Restaurant kitchens and service counters have different workflows, so they need their own event definitions, camera positions and response owners rather than a copy of the quick commerce setup.",
    },
  ],
  limits: "Network comparisons hold only where layouts, coverage and operating periods match. Video shows pickup and dispatch activity, delivery times come from the order system, and alert counts aren't a site performance ranking.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "alert-fatigue-is-an-ops-problem"],
    glossary: ["camera-health-monitoring", "vsaas"],
    useCases: ["crowd-detection", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["dark-stores", "ecommerce-fulfilment", "retail-shopping"],
  finalCta: {
    heading: "Ask Vision Copilot about your store network.",
    body: "Pick two stores with different layouts and see how one regional view would compare them.",
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
