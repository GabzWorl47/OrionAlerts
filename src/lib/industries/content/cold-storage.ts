import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const coldStorageIndustryPage: IndustryPageRecord = {
  slug: "cold-storage",
  name: "Cold Storage & Refrigerated Warehousing",
  cardLabel: "Cold Storage",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about door activity and visual context around cold-chain investigations.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Cold Storage Video Analytics | OrionAlerts",
    description:
      "Explore cold storage operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/cold-storage",
    ogTitle: "Cold Storage Video Analytics | OrionAlerts",
    ogDescription:
      "Explore cold storage operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/cold-storage.webp",
  },
  hero: {
    eyebrow: "Cold Storage & Refrigerated Warehousing",
    h1: "Vision Copilot for Cold Storage Operations",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about door activity and visual context around cold-chain investigations. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/cold-storage.webp",
      alt: "Illustrative cold-storage warehouse photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Understand activity around an excursion without guessing its cause.",
    paragraphs: [
      "When a cold-chain issue occurs, teams may need to know whether a door was open, loading took longer than expected or access activity changed. Video can help answer those contextual questions if the scene is visible and timestamps align. It cannot determine product temperature, validate an unbroken cold chain or prove product suitability on its own.",
    ],
    buyers: [
      "Cold-chain operations",
      "QA",
      "Refrigeration engineering",
      "Warehouse and EHS teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Cold-Store Site" },
      { label: "Building", example: "Warehouse Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Cold Zone" },
      { label: "Room", example: "Chamber Entry" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected chamber entry or loading interface so questions about Chamber Entry 2 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations at Chamber Entry 2 during yesterday's loading period.",
      "Where did visible door-opening observations recur?",
      "What loading or doorway practices should the cold-store team review?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated visible door-opening observations align with busy loading periods in the available scene record. Suggested next step: review loading sequence and doorway practices; check calibrated sensor records before attributing temperature effects.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated visible door-opening observations align with busy loading periods in the available scene record.",
    recommendation:
      "Review loading sequence and doorway practices; check calibrated sensor records before attributing temperature effects.",
    decisionOwner: "Cold-store operations / QA",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring door activity and visual context around cold-chain investigations into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare observed door and access activity only when the assessment basis is consistent; these scores are never proof of temperature control or product condition.",
    dimensions: [
      {
        name: "Door-Handling Practices",
        family: "Visible practices",
        criterionSummary:
          "A sampled visible door-opening duration at a fixed chamber view stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Loading-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible vehicle or goods presence at a designated loading interface stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Cold-Zone Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined refrigerated or restricted cold area follows the agreed schedule or access rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable loading or excursion-review window",
    scope: "Selected chamber entries and loading interfaces with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect door activity and visual context around cold-chain investigations to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations at Chamber Entry 2 during yesterday\'s loading period.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Where did visible door-opening observations recur?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What loading or doorway practices should the cold-store team review?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across observed door/access activity only, never proof of temperature control or product condition. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Door-Handling Practices, Loading-Area Flow and Cold-Zone Access Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated visible door-opening observations align with busy loading periods in the available scene record. Ask: “What loading or doorway practices should the cold-store team review?” Suggested recommendation: Review loading sequence and doorway practices; check calibrated sensor records before attributing temperature effects. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Check the camera's operating temperature, condensation management, defrost conditions and enclosure suitability. Assess networking and maintenance access inside cold zones. Validate time alignment with any external sensors.`,
    requiredInputs: [
      "Mapped hierarchy for pilot chamber entries and loading interfaces",
      "Cameras and enclosures suitable for cold-zone operating conditions",
      "Agreed response owners for door, access and loading events",
      "Time alignment checks with any external sensors used in investigations",
    ],
  },
  standards: {
    publicCopy:
      "Apply food-related requirements or pharmaceutical requirements according to the stored goods. Video does not certify temperature control, storage suitability or a cold chain.",
    frameworkIds: ["C7", "C6"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Door-event agreement with ground truth",
      definition:
        "Agreement between reviewed visible door-opening observations and an agreed ground-truth source such as a door sensor or labelled samples for the same window.",
      sourceOfTruth: "Door sensors where available and labelled review samples",
    },
    {
      label: "Time to retrieve excursion-related footage",
      definition:
        "Time for an authorised reviewer to locate the correct chamber or loading clip from a defined starting input such as time window and entry point.",
      sourceOfTruth: "Timed investigation exercises",
    },
    {
      label: "Usable recording availability in cold/defrost conditions",
      definition:
        "Share of required recording minutes with usable footage during representative cold and defrost conditions for the agreed cameras.",
      sourceOfTruth: "Device health and recording availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For cold storage, focus on location-aware search, recommendations and score-led review of visible access and door events where supported.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for excursion-context review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise cold-site camera continuity so investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can CCTV measure the temperature?",
      answer:
        "An ordinary RGB camera cannot. Use calibrated temperature instrumentation; specialist thermal systems have their own limits and validation requirements.",
    },
    {
      question: "Can an open-door alert prove spoilage?",
      answer:
        "No. Product condition depends on measured exposure and the applicable quality assessment.",
    },
    {
      question: "Can existing cameras work inside a freezer?",
      answer:
        "Only if their environmental specifications and installation are suitable. Verify the exact model and actual operating conditions.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["logistics", "food-fmcg", "pharma"],
  finalCta: {
    heading: "Ask Vision Copilot about your cold storage operations.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for cold storage operations.",
  },
  sources: [
    "README v2 §9.12",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C6/C7",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
