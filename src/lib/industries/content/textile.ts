import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const textileIndustryPage: IndustryPageRecord = {
  slug: "textile",
  name: "Textiles & Garments",
  cardLabel: "Textiles",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about material buffers and process-level improvement.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Textile Factory Video Analytics | OrionAlerts",
    description:
      "Explore textile and garment factories with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/textile",
    ogTitle: "Textile Factory Video Analytics | OrionAlerts",
    ogDescription:
      "Explore textile and garment factories with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Textiles & Garments",
    h1: "Vision Copilot for Textile and Garment Factories",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about material buffers and process-level improvement. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative textile and garment factory photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Investigate the process behind a visible interruption.",
    paragraphs: [
      "Textile and garment production depends on movement between preparation, production, finishing and dispatch. A pile-up can reflect downstream capacity, missing material or a planned changeover. Video can provide context, but it should not reduce a worker's contribution to time spent moving in view. Define observations around the process and involve production and safety teams in interpretation.",
    ],
    buyers: [
      "Factory heads",
      "Production managers",
      "EHS",
      "Sourcing and compliance teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Factory Site" },
      { label: "Building", example: "Production Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Finishing Zone" },
      { label: "Room", example: "Staging Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected finishing staging area or buffer so questions about the finishing staging area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the finishing staging area yesterday.",
      "Which covered buffers repeatedly accumulated material this week?",
      "What should the production team review without ranking individual workers?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Material staging repeatedly expands into the same shared route during finishing handoffs. Suggested next step: review buffer capacity and handoff timing with production; assess process changes rather than individual worker movement.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Material staging repeatedly expands into the same shared route during finishing handoffs.",
    recommendation:
      "Review buffer capacity and handoff timing with production; assess process changes rather than individual worker movement.",
    decisionOwner: "Production manager / factory operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring material buffers and process-level improvement into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare process areas and comparable operating windows only when the assessment basis is consistent; never use these scores for employee productivity or textile certification.",
    dimensions: [
      {
        name: "Material-Buffer Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible accumulation in a defined staging buffer stays within the agreed operational threshold during comparable windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Shared-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped walkway or trolley route is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a selected machine or chemical-handling zone follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating window",
    scope: "Selected finishing, buffer and controlled process areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect material buffers and process-level improvement to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the finishing staging area yesterday.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered buffers repeatedly accumulated material this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the production team review without ranking individual workers?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across process areas and comparable operating windows, never employee productivity or textile certification. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Material-Buffer Flow, Shared-Route Readiness and Controlled-Area Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Material staging repeatedly expands into the same shared route during finishing handoffs. Ask: “What should the production team review without ranking individual workers?” Suggested recommendation: Review buffer capacity and handoff timing with production; assess process changes rather than individual worker movement. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test repetitive backgrounds, changing fabric colours and dense workstation layouts. Keep camera purposes process-based and document limits on staff monitoring.`,
    requiredInputs: [
      "Mapped hierarchy for pilot finishing, buffer and controlled process areas",
      "Process-based event definitions that exclude individual worker ranking",
      "Documented limits on staff monitoring and camera purpose",
      "Representative testing across fabric colour change and dense workstation layouts",
    ],
  },
  standards: {
    publicCopy:
      "GOTS and OEKO-TEX STANDARD 100 address specific textile certification and testing claims. They are not awarded through CCTV and are not universal requirements for every textile factory.",
    frameworkIds: ["C16"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed staging duration",
      definition:
        "Confirmed relevant material staging duration at selected buffers during comparable operating windows, using an agreed review rubric.",
      sourceOfTruth: "Production records and representative video samples",
    },
    {
      label: "Confirmed pathway events",
      definition:
        "Confirmed relevant pathway-obstruction events divided by reviewed alerts for the defined routes, using an agreed review rubric.",
      sourceOfTruth: "Production records and labelled review samples",
    },
    {
      label: "Known-handoff retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct fabric-roll or finished-goods handoff clip from a defined starting input such as time window and staging area.",
      sourceOfTruth: "Timed retrieval exercises and production records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For textiles, focus on location-aware search, recommendations and score-led review of visible process and zone events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for material-handoff review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise camera coverage so process investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can this measure each worker's productivity?",
      answer:
        "This blueprint does not propose individual worker scoring. Operational measures should focus on process conditions and validated production data.",
    },
    {
      question: "Can cameras certify fabric quality?",
      answer:
        "General surveillance cannot replace textile testing or dedicated defect inspection.",
    },
    {
      question: "Does GOTS apply to every factory?",
      answer:
        "No. Applicability follows the products, claims and certification scope being pursued.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["manufacturing", "pulp-paper", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your textile and garment factories.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for textile and garment factories.",
  },
  sources: [
    "README v2 §9.23",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C16",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
