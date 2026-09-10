import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const automotiveIndustryPage: IndustryPageRecord = {
  slug: "automotive",
  name: "Automotive & Auto Components",
  cardLabel: "Automotive",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about assembly-cell events and line-side replenishment.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Automotive Plant Video Analytics | OrionAlerts",
    description:
      "Explore automotive plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/automotive",
    ogTitle: "Automotive Plant Video Analytics | OrionAlerts",
    ogDescription:
      "Explore automotive plants with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Automotive & Auto Components",
    h1: "Vision Copilot for Automotive Plants",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about assembly-cell events and line-side replenishment. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative automotive assembly photograph used for plant industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Keep attention on the handoffs between people, parts and equipment.",
    paragraphs: [
      "Automotive operations depend on coordinated work across assembly cells, material supply and finished-vehicle movement. A queue of parts or a blocked route can affect more than one workstation. Camera-based observations are most useful when tied to a known station or route and reviewed alongside production records. They should strengthen investigation without overstating what video can say about product quality.",
    ],
    buyers: [
      "Plant directors",
      "Assembly leaders",
      "EHS",
      "Quality and intralogistics teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Assembly Building" },
      { label: "Floor", example: "Production Level" },
      { label: "Zone", example: "Line-Side Zone" },
      { label: "Room", example: "Station" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected station or line-side zone so questions about Station 12 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations around Station 12 during yesterday's changeover.",
      "Which line-side zones show repeated congestion during replenishment?",
      "Summarise the observations I should discuss in today's assembly meeting.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. A line-side buffer becomes crowded during repeated replenishment windows. Suggested next step: review the replenishment window and buffer layout with the line supervisor before changing the operating plan.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A line-side buffer becomes crowded during repeated replenishment windows.",
    recommendation:
      "Review the replenishment window and buffer layout with the line supervisor before changing the operating plan.",
    decisionOwner: "Line supervisor / assembly lead",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring assembly-cell events and line-side replenishment into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare assembly areas and comparable production windows only when the assessment basis is consistent; never treat these scores as a substitute for product-quality results.",
    dimensions: [
      {
        name: "Assembly-Area Safety",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a configured cell or equipment zone follows the agreed observable rule for the production or maintenance period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Line-Side Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible buffer or queue stays within the agreed operational threshold during replenishment.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Cell Practices",
        family: "Access practices",
        criterionSummary:
          "A specified visible PPE item or access practice meets the agreed criterion at an observable controlled-area entry.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable production window",
    scope: "Selected assembly areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect assembly-cell events and line-side replenishment to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations around Station 12 during yesterday\'s changeover.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which line-side zones show repeated congestion during replenishment?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the observations I should discuss in today\'s assembly meeting.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across assembly areas and comparable production windows; never a substitute for product-quality results. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Assembly-Area Safety, Line-Side Flow and Controlled-Cell Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: A line-side buffer becomes crowded during repeated replenishment windows. Ask: “Summarise the observations I should discuss in today's assembly meeting.” Suggested recommendation: Review the replenishment window and buffer layout with the line supervisor before changing the operating plan. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Validate each camera against moving equipment, reflective parts, lighting changes and line speed. Start with safety and visible flow events. Dimensional metrology, weld evaluation and microscopic defect inspection need dedicated inspection systems and their own acceptance criteria.`,
    requiredInputs: [
      "Stable camera views of pilot stations and line-side buffers",
      "Mapped hierarchy for the selected assembly areas",
      "Clear ownership for production vs maintenance alert rules",
      "Representative testing across line speed, lighting and occlusion",
    ],
  },
  standards: {
    publicCopy:
      "IATF 16949 is relevant to eligible automotive manufacturing quality systems and customer requirements. Video may provide investigation context; it does not establish product conformance or deliver IATF certification.",
    frameworkIds: ["C2"],
    reviewedAt: "2026-09-10",
  },
  metrics: [
    {
      label: "Reviewed buffer dwell duration",
      definition:
        "Camera-derived presence duration at selected line-side buffers compared with station observations for the same window; report conditions and definition of start/end events.",
      sourceOfTruth: "Station observations and timed buffer samples",
    },
    {
      label: "Actionable route alerts",
      definition:
        "Confirmed relevant route alerts divided by reviewed alerts for the defined intersections, using an agreed review rubric.",
      sourceOfTruth: "Sampled footage and supervisor review log",
    },
    {
      label: "Known assembly-incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct station clip from a defined starting input such as time window and station.",
      sourceOfTruth: "Timed investigation exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For automotive plants, focus on location-aware search, recommendations and score-led review of assembly-area events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for station-based investigation across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise continuity of critical assembly and line-side camera views.`,
    },
  ],
  faqs: [
    {
      question: "Can this replace automotive quality inspection?",
      answer:
        "No. General surveillance is not a substitute for validated inspection, metrology or testing. Scope specialist vision inspection separately if available.",
    },
    {
      question: "Can a clip be linked to a VIN?",
      answer:
        "Only through a verified method of obtaining and matching that identifier, such as an approved production-system integration.",
    },
    {
      question: "Will zone alerts change for maintenance?",
      answer:
        "The pilot should define production and maintenance scenarios and verify whether schedules or operator controls support the required rule changes.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["manufacturing", "polymers-plastics", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your automotive plants.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for automotive plants.",
  },
  sources: ["README v2 §9.2", "README v2 §§3.1–3.3", "README v2 §7", "framework C2"],
  review: {
    reviewedAt: "2026-09-10",
  },
};
