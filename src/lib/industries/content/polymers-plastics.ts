import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const polymersPlasticsIndustryPage: IndustryPageRecord = {
  slug: "polymers-plastics",
  name: "Polymers & Plastics",
  cardLabel: "Polymers",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about downstream build-up and controlled process-zone review.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Plastics Plant Video Analytics | OrionAlerts",
    description:
      "Explore polymer and plastics plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/polymers-plastics",
    ogTitle: "Plastics Plant Video Analytics | OrionAlerts",
    ogDescription:
      "Explore polymer and plastics plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/polymers-plastics.jpeg",
  },
  hero: {
    eyebrow: "Polymers & Plastics",
    h1: "Vision Copilot for Polymer and Plastics Plants",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about downstream build-up and controlled process-zone review. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/polymers-plastics.jpeg",
      alt: "Illustrative polymer and plastics plant photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Separate visible process interruptions from product and chemical quality.",
    paragraphs: [
      "A plastics plant may combine hot processes, raw-material storage and finished-goods movement. Video can show an access event or visible accumulation, but it cannot establish resin composition, melt temperature or emissions. Build the monitoring plan around the events a supervisor can verify and the operational information needed to understand them.",
    ],
    buyers: [
      "Plant heads",
      "Extrusion and moulding operations",
      "EHS",
      "Warehouse teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Moulding Building" },
      { label: "Floor", example: "Production Floor" },
      { label: "Zone", example: "Transfer Zone" },
      { label: "Room", example: "Staging Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected moulding transfer or staging area so questions about the moulding transfer area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the moulding transfer area during the last shift.",
      "Which covered extrusion or moulding areas had recurring build-up?",
      "What should the plant team review before changing the material flow?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Recurring visible build-up appears at one downstream staging interface. Suggested next step: review staging capacity and downstream handoff timing with operators, using process records to assess the cause.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring visible build-up appears at one downstream staging interface.",
    recommendation:
      "Review staging capacity and downstream handoff timing with operators, using process records to assess the cause.",
    decisionOwner: "Plant operations / extrusion-moulding lead",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring downstream build-up and controlled process-zone review into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare visible zone and process observations only when the assessment basis is consistent; these scores are not resin quality, emissions or EPR compliance measures.",
    dimensions: [
      {
        name: "Visible Process-Area Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a defined moulding or extrusion zone follows the agreed observable rule for the current operating state.",
        methodologyStatus: "proposed",
      },
      {
        name: "Transfer-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible build-up at a fixed downstream transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Storage-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped storage or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift window",
    scope: "Selected moulding, transfer and storage areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect downstream build-up and controlled process-zone review to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the moulding transfer area during the last shift.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered extrusion or moulding areas had recurring build-up?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the plant team review before changing the material flow?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across visible zone/process observations, not resin quality, emissions or EPR compliance. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Visible Process-Area Practices, Transfer-Area Flow and Storage-Area Orderliness; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Recurring visible build-up appears at one downstream staging interface. Ask: “What should the plant team review before changing the material flow?” Suggested recommendation: Review staging capacity and downstream handoff timing with operators, using process records to assess the cause. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test glare, reflective surfaces, repetitive machine motion and exposure to heat or chemicals. Hazardous locations may need additional equipment approval assessment under applicable hazardous-area schemes.`,
    requiredInputs: [
      "Mapped hierarchy for pilot moulding, transfer and storage areas",
      "Camera suitability checks for glare, heat, chemicals and reflective surfaces",
      "Clear ownership for restricted-zone and accumulation review",
      "Hazardous-location equipment assessment where the installation requires it",
    ],
  },
  standards: {
    publicCopy:
      "Plastic-packaging EPR obligations apply to relevant regulated entities and activities; video does not establish recycling-credit or EPR compliance. Assess the current CPCB framework and product scope separately. Hazardous locations may also require separate equipment-approval assessment.",
    frameworkIds: ["C17", "C5"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed accumulation duration",
      definition:
        "Confirmed relevant material build-up duration at selected downstream transfer points during comparable shifts, using an agreed review rubric.",
      sourceOfTruth: "Operator records and labelled samples",
    },
    {
      label: "Useful restricted-zone alerts",
      definition:
        "Confirmed relevant restricted machine-area alerts divided by reviewed alerts for the defined zones, using an agreed review rubric.",
      sourceOfTruth: "Operator review logs and labelled samples",
    },
    {
      label: "Known-event retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct moulding or transfer clip from a defined starting input such as time window and staging area.",
      sourceOfTruth: "Timed review exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For plastics plants, focus on location-aware search, recommendations and score-led review of scoped process and zone events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for operational review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise critical camera views so process investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can video verify polymer composition?",
      answer:
        "No. Composition and product conformance require appropriate material testing and process records.",
    },
    {
      question: "Can this prove EPR compliance?",
      answer:
        "No. Applicable reporting, registration and evidence requirements remain separate.",
    },
    {
      question: "Can it detect overheating?",
      answer:
        "Ordinary RGB video cannot measure process temperature. Specialist thermal or instrumentation solutions require separate validation.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["automotive", "manufacturing", "oil-gas"],
  finalCta: {
    heading: "Ask Vision Copilot about your polymer and plastics plants.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for polymer and plastics plants.",
  },
  sources: [
    "README v2 §9.24",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C17/C5",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
