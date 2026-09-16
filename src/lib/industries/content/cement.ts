import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const cementIndustryPage: IndustryPageRecord = {
  slug: "cement",
  name: "Cement & Building Materials",
  cardLabel: "Cement",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about truck staging and material-transfer visibility.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Cement Plant AI Video Analytics | OrionAlerts",
    description:
      "Explore cement plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/cement",
    ogTitle: "Cement Plant AI Video Analytics | OrionAlerts",
    ogDescription:
      "Explore cement plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Cement & Building Materials",
    h1: "Vision Copilot for Cement Plants",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about truck staging and material-transfer visibility. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative cement plant and construction materials photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Make dusty, distributed plant areas easier to review.",
    paragraphs: [
      "Material transfer, bagging and vehicle dispatch create multiple points where a small interruption can become an operational problem. Dust, vibration and changing daylight also make camera coverage less reliable. A useful system needs realistic detection boundaries and a plan for keeping views clear. Start with specific events that operators can verify and act upon.",
      "A reference deployment positions cameras at loading bays, material-transfer points and conveyor-side access, often connected over longer cable runs or wireless links given the size of a typical plant footprint. Retention should match dispatch and safety-review cycles rather than an indefinite archive, with loading and transfer alerts routed to dispatch and plant operations. Where a weighbridge or dispatch system is in use, align review timestamps with its vehicle records instead of treating video as a standalone log.",
    ],
    buyers: [
      "Plant heads",
      "EHS",
      "Dispatch",
      "Maintenance and security teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Dispatch Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Loading Zone" },
      { label: "Room", example: "Bay" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected loading bay or transfer point so questions about Loading Bay 3 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from Loading Bay 3 this morning.",
      "Where did loading-area congestion recur this week?",
      "Which loading-area changes should the dispatch team assess first?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. The same loading approach repeatedly contains waiting vehicles during the morning dispatch period. Suggested next step: review vehicle staging and bay allocation with dispatch, using the observations to select a targeted trial.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "The same loading approach repeatedly contains waiting vehicles during the morning dispatch period.",
    recommendation:
      "Review vehicle staging and bay allocation with dispatch, using the observations to select a targeted trial.",
    decisionOwner: "Dispatch / plant operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring truck staging and material-transfer visibility into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare loading zones across comparable dispatch periods, with dust and visibility conditions noted, only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Loading-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped loading approach or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Material-Transfer Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible truck presence or lane queue at a defined loading bay stays within the agreed operational threshold for the dispatch period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Work-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured conveyor-side or transfer-point zone follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable dispatch period",
    scope: "Selected loading zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect truck staging and material-transfer visibility to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from Loading Bay 3 this morning.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Where did loading-area congestion recur this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Which loading-area changes should the dispatch team assess first?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across loading zones across comparable dispatch periods, with dust and visibility conditions noted. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Loading-Area Orderliness, Material-Transfer Flow and Work-Zone Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: The same loading approach repeatedly contains waiting vehicles during the morning dispatch period. Ask: “Which loading-area changes should the dispatch team assess first?” Suggested recommendation: Review vehicle staging and bay allocation with dispatch, using the observations to select a targeted trial. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test cameras during dusty production conditions, night shifts and vehicle movement. Confirm cleaning access, mounting stability and exposure settings. Position hardware outside hazardous conditions unless it carries the approvals required for that installation.`,
    requiredInputs: [
      "Mapped hierarchy for pilot loading bays and material-transfer zones",
      "Agreed response owners for staging, transfer and work-zone events",
      "Cleaning access and mounting plan for dusty production conditions",
      "Representative testing across dusty periods, night shifts and vehicle movement",
      "Where available, timestamp alignment with the weighbridge or dispatch system for vehicle-level review",
    ],
  },
  standards: {
    publicCopy:
      "Applicable BIS product certification requirements concern the cement or building-material product. Camera monitoring does not certify product quality. Assess the relevant product category and current quality-control order separately from plant safety monitoring.",
    frameworkIds: ["C3"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed loading-lane dwell",
      definition:
        "Camera-derived presence duration at selected loading lanes compared with dispatch observations for the same window; report conditions and definition of start/end events.",
      sourceOfTruth: "Dispatch observations and timed bay samples",
    },
    {
      label: "Confirmed visible obstructions versus nuisance alerts",
      definition:
        "Confirmed relevant visible obstruction or accumulation observations divided by reviewed alerts for the defined transfer areas, using an agreed review rubric.",
      sourceOfTruth: "Labelled clips and supervisor review log",
    },
    {
      label: "Critical-view recording availability",
      definition:
        "Share of expected assessment windows at critical transfer and loading cameras that remained usable during the pilot period.",
      sourceOfTruth: "Recorder logs and surveillance health records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For cement plants, focus on location-aware search, recommendations and score-led review of loading and material-transfer events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for loading and transfer review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise surveillance availability in dusty and vibration-heavy conditions so critical views remain usable.`,
    },
  ],
  faqs: [
    {
      question: "Can CCTV measure dust emissions?",
      answer:
        "Ordinary video is not a calibrated dust or emissions instrument. Use appropriate monitoring equipment for those measurements.",
    },
    {
      question: "Will analytics work through heavy dust?",
      answer:
        "Visibility can fall below useful levels. Pilot the actual scene and include periods where the system should report insufficient coverage rather than a confident result.",
    },
    {
      question: "Can this predict conveyor failure?",
      answer:
        "A visible interruption may prompt investigation. Predictive mechanical maintenance requires additional signals and a separately validated model.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["metals-mining", "manufacturing", "construction"],
  finalCta: {
    heading: "Ask Vision Copilot about your cement plants.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for cement plants.",
  },
  sources: [
    "README v2 §9.3",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C3",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
