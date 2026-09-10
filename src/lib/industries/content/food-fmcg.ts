import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const foodFmcgIndustryPage: IndustryPageRecord = {
  slug: "food-fmcg",
  name: "Food, Beverage & FMCG",
  cardLabel: "Food & FMCG",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about visible hygiene practices and packaging-flow observations.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Food and FMCG Video Analytics | OrionAlerts",
    description:
      "Explore food and fmcg operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/food-fmcg",
    ogTitle: "Food and FMCG Video Analytics | OrionAlerts",
    ogDescription:
      "Explore food and fmcg operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Food, Beverage & FMCG",
    h1: "Vision Copilot for Food and FMCG Operations",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about visible hygiene practices and packaging-flow observations. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative food and packaging facility photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Connect visible behaviour with the right operational response.",
    paragraphs: [
      "Busy production areas combine staff movement, cleaning, material handling and packaging activity. A camera may help reveal a visible exception, but food safety depends on controls far beyond what is visible. Keep the monitoring scope tied to defined practices and review events with production context. Non-food FMCG operations should use their applicable product requirements, rather than inheriting food-specific claims.",
    ],
    buyers: [
      "Plant managers",
      "Food safety/QA",
      "Production",
      "EHS",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Factory" },
      { label: "Building", example: "Processing Building" },
      { label: "Floor", example: "Production Floor" },
      { label: "Zone", example: "Hygiene Zone" },
      { label: "Room", example: "Entry Room" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected packing-area entry or hygiene zone so questions about the packing-area entry start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the packing-area entry this morning.",
      "Which covered packaging zones show recurring build-up?",
      "What should the food-safety and production teams review today?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Visible clothing observations recur at one production entry while nearby staging becomes congested. Suggested next step: review the entry layout and staging practice with the responsible teams; verify food-safety controls through the established process.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible clothing observations recur at one production entry while nearby staging becomes congested.",
    recommendation:
      "Review the entry layout and staging practice with the responsible teams; verify food-safety controls through the established process.",
    decisionOwner: "Food safety / production",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring visible hygiene practices and packaging-flow observations into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare visible hygiene and operational observations only when the assessment basis is consistent; never treat these scores as food contamination or product-safety ratings.",
    dimensions: [
      {
        name: "Visible Hygiene Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible hygiene clothing item meets the agreed criterion at an observable production entry.",
        methodologyStatus: "proposed",
      },
      {
        name: "Packaging-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible accumulation or occupancy at a defined packaging transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured production zone follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable production window",
    scope: "Selected hygiene and packaging zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect visible hygiene practices and packaging-flow observations to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the packing-area entry this morning.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered packaging zones show recurring build-up?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the food-safety and production teams review today?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across visible hygiene and operational observations, not food contamination or product-safety ratings. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Visible Hygiene Practices, Packaging-Area Flow and Controlled-Area Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Visible clothing observations recur at one production entry while nearby staging becomes congested. Ask: “What should the food-safety and production teams review today?” Suggested recommendation: Review the entry layout and staging practice with the responsible teams; verify food-safety controls through the established process. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test washdown conditions, condensation, reflective packaging and protective clothing variations. Keep cameras compatible with the physical environment and avoid claiming contamination detection from general surveillance.`,
    requiredInputs: [
      "Mapped hierarchy for pilot hygiene entries and packaging zones",
      "Agreed response owners for visible hygiene and packaging-flow events",
      "Camera placement plan compatible with washdown and condensation conditions",
      "Representative testing across clothing variations and packaging reflectivity",
    ],
  },
  standards: {
    publicCopy:
      "Food businesses should assess applicable FSSAI licensing and Schedule 4 requirements. ISO 22000 is a food-safety management-system standard; video does not provide certification.",
    frameworkIds: ["C7"],
    reviewedAt: "2026-09-10",
  },
  metrics: [
    {
      label: "Reviewed clothing observations against labelled samples",
      definition:
        "Confirmed relevant visible hygiene-clothing observations divided by reviewed alerts for the defined entries, using a QA-approved review rubric.",
      sourceOfTruth: "QA-approved samples and supervisor review log",
    },
    {
      label: "Packaging-area event review time",
      definition:
        "Time for an authorised reviewer to locate the correct packaging-area clip from a defined starting input such as time window and zone.",
      sourceOfTruth: "Response records and timed retrieval exercises",
    },
    {
      label: "Investigation-footage availability",
      definition:
        "Share of expected assessment windows at priority cameras that remained usable for investigation during the pilot period.",
      sourceOfTruth: "Recording logs and surveillance health records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For food and FMCG operations, focus on location-aware search, recommendations and score-led review of visible practice exceptions.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for production and dispatch review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise priority camera availability so investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can cameras detect food contamination?",
      answer:
        "Ordinary CCTV cannot establish microbial or chemical safety. Use validated testing and process controls.",
    },
    {
      question: "Can this support an audit?",
      answer:
        "Relevant footage may support a review if its handling and use are appropriate. It does not replace required records or inspections.",
    },
    {
      question: "Does this apply to all FMCG?",
      answer:
        "Visual access and workflow use cases can apply broadly. Food-specific requirements only apply to the relevant food operations.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["pharma", "cold-storage", "pulp-paper"],
  finalCta: {
    heading: "Ask Vision Copilot about your food and fmcg operations.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for food and fmcg operations.",
  },
  sources: [
    "README v2 §9.7",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C7",
  ],
  review: {
    reviewedAt: "2026-09-10",
  },
};
