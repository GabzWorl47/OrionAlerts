import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const pulpPaperIndustryPage: IndustryPageRecord = {
  slug: "pulp-paper",
  name: "Pulp, Paper & Packaging",
  cardLabel: "Pulp & Paper",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about roll-handling interfaces and recurring transfer build-up.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Paper and Packaging Video Analytics | OrionAlerts",
    description:
      "Explore paper and packaging plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/pulp-paper",
    ogTitle: "Paper and Packaging Video Analytics | OrionAlerts",
    ogDescription:
      "Explore paper and packaging plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/pulp-paper.webp",
  },
  hero: {
    eyebrow: "Pulp, Paper & Packaging",
    h1: "Vision Copilot for Paper and Packaging Plants",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about roll-handling interfaces and recurring transfer build-up. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/pulp-paper.webp",
      alt: "Illustrative paper and packaging plant photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Improve visibility where material flow and heavy handling meet.",
    paragraphs: [
      "Paper and packaging operations combine continuous processing with heavy rolls, pallets and vehicle movement. An obstruction near a transfer point or access to a controlled machine area may need prompt review. Camera observations are most useful when the view and event are stable. Product inspection and fibre traceability require separate evidence and systems.",
    ],
    buyers: [
      "Mill operations",
      "Converting and packaging managers",
      "EHS",
      "Dispatch teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Mill Site" },
      { label: "Building", example: "Converting Building" },
      { label: "Floor", example: "Production Level" },
      { label: "Zone", example: "Roll-Handling Zone" },
      { label: "Room", example: "Transfer Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected roll-transfer or converting area so questions about the roll-transfer area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from the roll-transfer area during the last shift.",
      "Which converting zones have recurring material accumulation?",
      "What should the converting supervisor inspect before the next run?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Visible accumulation recurs at a roll-transfer interface during handoff periods. Suggested next step: review transfer staging and the operating sequence with the converting supervisor, using production records for process context.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible accumulation recurs at a roll-transfer interface during handoff periods.",
    recommendation:
      "Review transfer staging and the operating sequence with the converting supervisor, using production records for process context.",
    decisionOwner: "Converting supervisor / mill operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring roll-handling interfaces and recurring transfer build-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered handling and converting areas only when the assessment basis is consistent; these scores are not paper quality or certified material provenance measures.",
    dimensions: [
      {
        name: "Roll-Handling Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a defined roll-handling area follows the agreed observable rule for the planned activity.",
        methodologyStatus: "proposed",
      },
      {
        name: "Converting-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible material build-up at a fixed transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Dispatch-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped dispatch or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift or run window",
    scope: "Selected roll-handling, converting and dispatch areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect roll-handling interfaces and recurring transfer build-up to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from the roll-transfer area during the last shift.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which converting zones have recurring material accumulation?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the converting supervisor inspect before the next run?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered handling and converting areas, not paper quality or certified material provenance. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Roll-Handling Practices, Converting-Area Flow and Dispatch-Area Orderliness; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Visible accumulation recurs at a roll-transfer interface during handoff periods. Ask: “What should the converting supervisor inspect before the next run?” Suggested recommendation: Review transfer staging and the operating sequence with the converting supervisor, using production records for process context. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test vibration, dust, high-speed movement and the visual effect of large rolls. Do not promise web-defect, print-quality or dimensional inspection from general CCTV.`,
    requiredInputs: [
      "Mapped hierarchy for pilot roll-handling, converting and dispatch areas",
      "Stable camera views validated against vibration, dust and large-roll occlusion",
      "Clear ownership for handling-zone and accumulation review",
      "Separation of product-inspection and fibre-traceability systems from this pilot",
    ],
  },
  standards: {
    publicCopy:
      "FSC chain-of-custody certification concerns documented handling and claims for eligible forest-based material. Video does not establish certified provenance or replace transaction records. Food-contact packaging needs its own applicable assessment.",
    frameworkIds: ["C15"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed accumulation duration",
      definition:
        "Confirmed relevant material build-up duration at selected transfer points during comparable shifts, using an agreed review rubric.",
      sourceOfTruth: "Operator observations and labelled clips",
    },
    {
      label: "Useful handling-zone alerts",
      definition:
        "Confirmed relevant handling-zone entry alerts divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Operator review logs and labelled samples",
    },
    {
      label: "Time to retrieve a loading event",
      definition:
        "Time for an authorised reviewer to locate the correct dispatch or loading clip from a defined starting input such as time window and transfer area.",
      sourceOfTruth: "Dispatch records and timed retrieval exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For paper and packaging, focus on location-aware search, recommendations and score-led review of scoped handling and process events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for dispatch review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise mill camera continuity so investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can CCTV verify FSC material?",
      answer:
        "No. Certification and material claims depend on the applicable chain-of-custody system and records.",
    },
    {
      question: "Can it detect print defects?",
      answer:
        "That needs suitably designed inspection cameras, lighting and validation. It is not assumed here.",
    },
    {
      question: "Can it track every paper roll?",
      answer:
        "Reliable identity requires a supported label/scan/data method, not just observing movement.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["manufacturing", "food-fmcg", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your paper and packaging plants.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for paper and packaging plants.",
  },
  sources: [
    "README v2 §9.22",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C15",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
