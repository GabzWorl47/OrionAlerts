import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const solarRenewableIndustryPage: IndustryPageRecord = {
  slug: "solar-renewable",
  name: "Solar & Renewable Energy Facilities",
  cardLabel: "Renewables",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about remote equipment-compound review and O&M priorities.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Solar and Renewable Site Video Analytics | OrionAlerts",
    description:
      "Explore renewable energy sites with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/solar-renewable",
    ogTitle: "Solar and Renewable Site Video Analytics | OrionAlerts",
    ogDescription:
      "Explore renewable energy sites with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/.webp",
  },
  hero: {
    eyebrow: "Solar & Renewable Energy Facilities",
    h1: "Vision Copilot for Renewable Energy Sites",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about remote equipment-compound review and O&M priorities. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/.webp",
      alt: "Illustrative solar farm photograph used for renewable energy industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Separate site security from energy-performance diagnosis.",
    paragraphs: [
      "Renewable facilities can cover extensive areas with limited on-site presence. A camera event may help an operator decide whether a site visit is needed. The strongest initial case is verification at gates, boundaries and equipment compounds. Panel output, electrical faults and turbine condition require appropriate measurement or specialist inspection, not assumptions from surveillance video.",
    ],
    buyers: [
      "Renewable asset owners",
      "O&M providers",
      "Site security",
      "Operations centres",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Energy Site" },
      { label: "Building", example: "Control Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Compound Entry" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment compound or access point so questions about the equipment compound start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the equipment compound during the last week.",
      "Which covered access points have recurring observations around service periods?",
      "What should the O&M team inspect before changing the site arrangement?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Entry observations recur at an equipment compound during repeated service visits. Suggested next step: review visit coordination, gate arrangement and camera coverage with O&M before requesting a site change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Entry observations recur at an equipment compound during repeated service visits.",
    recommendation:
      "Review visit coordination, gate arrangement and camera coverage with O&M before requesting a site change.",
    decisionOwner: "O&M / operations centre",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring remote equipment-compound review and O&M priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered site observations only when the assessment basis is consistent; these scores are not panel health, generation efficiency or yield-loss measures.",
    dimensions: [
      {
        name: "Site Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured boundary, gate or equipment-compound access point follows the agreed access or schedule rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment-compound pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "O&M Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled remote observation at a defined site is reviewed against the agreed O&M investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable service or operating week",
    scope: "Selected gates, boundaries and equipment compounds with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect remote equipment-compound review and O&M priorities to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the equipment compound during the last week.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered access points have recurring observations around service periods?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the O&M team inspect before changing the site arrangement?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered site observations only, not panel health, generation efficiency or yield-loss scores. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Site Access Practices, Equipment-Area Orderliness and O&M Observation Review; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Entry observations recur at an equipment compound during repeated service visits. Ask: “What should the O&M team inspect before changing the site arrangement?” Suggested recommendation: Review visit coordination, gate arrangement and camera coverage with O&M before requesting a site change. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test dawn/dusk glare, rain, vegetation growth, dust and long-distance views. Assess power and network resilience and confirm actual local recording/processing behaviour during outages.`,
    requiredInputs: [
      "Mapped hierarchy for pilot gates, boundaries and equipment compounds",
      "Power and network resilience plan for remote cameras",
      "Confirmed local recording or processing behaviour during outages",
      "Representative testing across glare, weather, vegetation and long-distance views",
    ],
  },
  standards: {
    publicCopy:
      "Electrical-safety context applies to covered renewable installations. Camera monitoring does not establish solar-module product certification, electrical inspection status or energy-performance guarantees.",
    frameworkIds: ["C14"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful perimeter alerts across weather conditions",
      definition:
        "Confirmed relevant perimeter or boundary alerts divided by reviewed alerts for the defined sites across representative weather conditions, using an agreed review rubric.",
      sourceOfTruth: "Authorised tests, maintenance schedules and review logs",
    },
    {
      label: "Remote camera unavailable hours",
      definition:
        "Hours of required remote camera or recording unavailability for priority sites during agreed monitoring windows.",
      sourceOfTruth: "Device and connectivity logs",
    },
    {
      label: "Reviewed-event acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed remote-site events.",
      sourceOfTruth: "Operations-centre acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For renewable sites, focus on location-aware search, recommendations and score-led review of defined site events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for remote review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise distributed surveillance coverage so connectivity loss is not mistaken for an absence of events.`,
    },
  ],
  faqs: [
    {
      question: "Can these cameras identify faulty solar cells?",
      answer:
        "General CCTV is not a substitute for validated thermography, electrical testing or specialist inspection.",
    },
    {
      question: "Can video prove equipment theft?",
      answer:
        "It may provide relevant context. A removal event, ownership and authorisation require human investigation and other evidence.",
    },
    {
      question: "Does this measure lost generation?",
      answer:
        "No. Generation and loss analysis require appropriate energy and equipment data.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["utilities", "telecom-remote", "government"],
  finalCta: {
    heading: "Ask Vision Copilot about your renewable energy sites.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for renewable energy sites.",
  },
  sources: [
    "README v2 §9.28",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C14",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
