import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const darkStoresIndustryPage: IndustryPageRecord = {
  slug: "dark-stores",
  name: "Dark Stores & Micro-Fulfilment",
  cardLabel: "Dark Stores",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about compact stockroom layout and local dispatch pressure.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Dark Store Video Analytics | OrionAlerts",
    description:
      "Explore dark stores with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/dark-stores",
    ogTitle: "Dark Store Video Analytics | OrionAlerts",
    ogDescription:
      "Explore dark stores with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Dark Stores & Micro-Fulfilment",
    h1: "Vision Copilot for Dark Stores",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about compact stockroom layout and local dispatch pressure. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative dark-store and micro-fulfilment photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Make compact operating spaces easier to manage.",
    paragraphs: [
      "Dark stores combine dense storage, frequent picking and rapid dispatch in limited space. A short-lived obstruction or unclear handoff may be missed during a busy period. The immediate need is practical site visibility rather than broad network performance claims. Choose camera views that help the store manager understand what happened without turning surveillance into individual productivity scoring.",
      "A reference deployment covers the dispatch handoff point, high-traffic aisles and any restricted stock area, typically on the store's existing small-site network with limited redundancy. Keep retention short and tied to the stated business purpose, and route obstruction and handoff alerts to the store manager rather than a distant network-operations queue that cannot act in time. Where an order-management or dispatch system is available, align review timestamps with its handoff records instead of relying on video alone.",
    ],
    buyers: [
      "Dark-store operators",
      "Store managers",
      "Loss prevention",
      "Network operations",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Local Site" },
      { label: "Building", example: "Store Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Dispatch Zone" },
      { label: "Room", example: "Handoff Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected dispatch handoff area or aisle so questions about the handoff area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the dispatch handoff area during today's peak.",
      "Which aisles had repeated obstruction observations?",
      "What should this store manager change or inspect before tomorrow's peak?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Temporary order staging repeatedly occupies the same compact aisle near dispatch. Suggested next step: review a dedicated staging position and the handoff arrangement with the store manager.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Temporary order staging repeatedly occupies the same compact aisle near dispatch.",
    recommendation:
      "Review a dedicated staging position and the handoff arrangement with the store manager.",
    decisionOwner: "Store manager / operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring compact stockroom layout and local dispatch pressure into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare areas within a store and comparable peak windows only when the assessment basis is consistent; never use these scores to rank individual pickers.",
    dimensions: [
      {
        name: "Aisle Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped aisle or walkway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Dispatch-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or dwell at a defined handoff area stays within the agreed operational threshold during peak windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Stock-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured high-value or restricted stock area follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable peak window",
    scope: "Selected aisles and dispatch areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect compact stockroom layout and local dispatch pressure to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the dispatch handoff area during today\'s peak.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which aisles had repeated obstruction observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should this store manager change or inspect before tomorrow\'s peak?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across areas within a store and comparable peak windows, without ranking individual pickers. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Aisle Readiness, Dispatch-Area Flow and Stock-Area Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Temporary order staging repeatedly occupies the same compact aisle near dispatch. Ask: “What should this store manager change or inspect before tomorrow's peak?” Suggested recommendation: Review a dedicated staging position and the handoff arrangement with the store manager. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test camera occlusion from shelves and staff at peak periods. Limit the field of view to the business purpose and plan short, justified retention rather than collecting footage indefinitely.`,
    requiredInputs: [
      "Mapped hierarchy for pilot aisles, stock areas and dispatch handoff zones",
      "Agreed response owners for obstruction, access and handoff events",
      "Field-of-view and retention plan limited to the stated business purpose",
      "Representative testing across peak picking periods and shelf occlusion",
      "Alert routing to the store manager, not only network operations, so time-sensitive handoff and obstruction events reach someone who can act during the same peak",
    ],
  },
  standards: {
    publicCopy:
      "For food storage and distribution, assess the operation's applicable FSSAI obligations. Apply premises and privacy considerations for building monitoring. These do not amount to a dark-store AI certificate.",
    frameworkIds: ["C7", "C8", "C9"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed aisle-obstruction minutes",
      definition:
        "Confirmed relevant aisle-obstruction duration for defined walkways during comparable peak windows, using an agreed review rubric.",
      sourceOfTruth: "Local observations and labelled review samples",
    },
    {
      label: "Dispatch-area occupancy duration",
      definition:
        "Camera-derived presence duration at the selected handoff area compared with local observations for the same peak window.",
      sourceOfTruth: "Local observations and timed review samples",
    },
    {
      label: "Usable-clip retrieval rate",
      definition:
        "Share of requested known-incident reviews for which an authorised reviewer retrieved usable footage within the agreed time.",
      sourceOfTruth: "Timed review samples and recording logs",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For dark stores, focus on location-aware search, recommendations and score-led review of defined local events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for store incident review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise consistency of small-site camera coverage so local investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Will this identify the wrong item in a bag?",
      answer:
        "Not from ordinary CCTV alone. Item verification needs suitable views, models and a verified order/item data source.",
    },
    {
      question: "Can managers compare individual pickers?",
      answer:
        "This specification does not propose worker productivity scoring. Evaluate space, process exceptions and response effectiveness.",
    },
    {
      question: "How is this different from quick commerce?",
      answer:
        "Dark-store content concerns the individual facility. Quick-commerce content addresses consistent event handling across a distributed operating network.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["quick-commerce", "ecommerce-fulfilment", "retail-shopping"],
  finalCta: {
    heading: "Ask Vision Copilot about your dark stores.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for dark stores.",
  },
  sources: [
    "README v2 §9.9",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C7/C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
