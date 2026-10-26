import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const darkStoresIndustryPage: IndustryPageRecord = {
  slug: "dark-stores",
  name: "Dark Stores & Micro-Fulfilment",
  cardLabel: "Dark Stores",
  siteNoun: { one: "dark store", many: "dark stores" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Dark Stores",
    description:
      "Dark store CCTV analytics: spot aisle obstructions and dispatch-handoff congestion, and retrieve usable clips fast, without scoring individual pickers.",
    canonicalPath: "/industries/dark-stores",
    image: "/Images/industries/dark-stores-hero.webp",
  },
  hero: {
    eyebrow: "Dark Stores & Micro-Fulfilment",
    h1: "AI Video Analytics for Dark Stores",
    lede: "Spot aisle obstructions and dispatch-handoff congestion in a compact store, and pull the right clip fast when an order is disputed. Alerts go to the store manager, who can act during the same peak.",
    media: {
      kind: "image",
      src: "/Images/industries/dark-stores-hero.webp",
      alt: "Blurred view of stocked shelves and staff picking orders in a dark store, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Make compact operating spaces easier to manage.",
    paragraphs: [
      "Dark stores combine dense storage, frequent picking and rapid dispatch in limited space, so a short-lived obstruction or unclear handoff is easy to miss during a busy period. Camera views at the handoff point and the busiest aisles show the store manager what happened in each space, with the focus on aisles, stock areas and process rather than individual pickers.",
      "A reference deployment covers the dispatch handoff point, high-traffic aisles and any restricted stock area, typically on the store's existing small-site network. Retention stays short and tied to the stated business purpose, and obstruction and handoff alerts go to the store manager, who can act in time. Where an order-management or dispatch system is available, align review timestamps with its handoff records.",
    ],
    buyers: [
      "Dark-store operators",
      "Store managers",
      "Loss prevention",
      "Network operations",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should this store manager change or inspect before tomorrow's peak?",
      "Show observations from the dispatch handoff area during today's peak.",
      "Which aisles had repeated obstruction observations?",
    ],
    exampleAnswer:
      "Temporary order staging repeatedly occupies the same compact aisle near dispatch. Suggested next step: review a dedicated staging position and the handoff arrangement with the store manager.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Temporary order staging repeatedly occupies the same compact aisle near dispatch.",
    recommendation:
      "Review a dedicated staging position and the handoff arrangement with the store manager.",
    decisionOwner: "Store manager / operations",
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
      title: "Start from the handoff area",
      body: "Cameras map to the dispatch zone, handoff area, aisles and stock rooms, so questions start from a place the store manager knows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search today's peak at the handoff point",
      body: "Ask Vision Copilot, “Show observations from the dispatch handoff area during today's peak,” to see what happened while orders queued.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find aisles that keep getting blocked",
      body: "Ask which aisles had repeated obstruction observations, for example where temporary order staging keeps spilling into the same walkway.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Fix staging before tomorrow's peak",
      body: "Ask what the store manager should change or inspect before tomorrow's peak. A typical suggestion is a dedicated staging position near dispatch and a clearer handoff arrangement.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score aisles and handoffs, not pickers",
      body: "0–100 scores compare areas within the store across comparable peak windows, so the manager sees which aisle or handoff point needs attention.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Test camera occlusion from shelves and staff at peak periods. Keep the field of view to the business purpose and plan short, justified retention.",
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
      "Dark stores that store or distribute food assess their applicable Food Safety and Standards Authority of India (FSSAI) obligations, alongside premises safety and data-privacy duties for in-store cameras. Purpose-limited views and short retention are part of that privacy assessment.",
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
      body: "Location-aware search, recommendations and score-led review of aisle, stockroom and handoff events.",
    },
    {
      solutionSlug: "vms",
      body: "Store incident review across the agreed cameras, including the dispatch handoff point.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows when a small-site camera or recorder drops, so local investigations retain usable footage.",
    },
  ],
  faqs: [
    {
      question: "What should CCTV cover in a dark store?",
      answer:
        "Cover the dispatch handoff point, the busiest picking aisles and any high-value or restricted stock area. These views show where orders queue, where staging blocks a walkway and when a stock room was entered, and alerts go to the store manager, who can act during the same peak.",
    },
    {
      question: "How does video help resolve a disputed handoff?",
      answer:
        "The handoff camera is mapped to the dispatch area, so the store manager retrieves the clip for a specific time window instead of scrolling through a recorder. Where an order-management or dispatch system is available, review timestamps can be aligned with its handoff records to check the order in question.",
    },
    {
      question: "Will this identify the wrong item in a bag?",
      answer:
        "Not from ordinary store CCTV. Checking items in a bag needs suitable close-up views, a trained model and a verified order or item data source, which would be scoped separately. Store cameras show the handoff itself, such as when an order was handed to a rider, which helps the manager review a disputed order.",
    },
    {
      question: "Can managers compare individual pickers?",
      answer:
        "No. OrionAlerts looks at aisles, handoff areas and stockrooms rather than individual pickers' speed, and there is no worker productivity score. Managers use it to evaluate space, process exceptions such as blocked aisles, and how quickly the store responds to an alert, with scores comparing areas within the store.",
    },
    {
      question: "How is this different from quick commerce?",
      answer:
        "Dark-store monitoring focuses on one facility: its aisles, stockroom and dispatch handoff, reviewed by the store manager. Quick commerce monitoring looks across a network of stores, with consistent event definitions, site-by-site comparisons and regional review. Running many dark stores? See the Quick Commerce page for network-level monitoring.",
    },
  ],
  limits: "Dark-store analytics covers spaces and process events at aisles, stock areas and the handoff point. Item-level order checks need close-up views and order data, and scores compare areas within a store, never individual pickers.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem"],
    glossary: ["video-analytics", "nvr-vs-dvr-vs-vms"],
    useCases: ["crowd-detection", "unauthorized-area-entry"],
  },
  relatedIndustrySlugs: ["ecommerce-fulfilment", "quick-commerce", "retail-shopping"],
  finalCta: {
    heading: "Ask Vision Copilot about your dark store.",
    body: "Map one store's handoff point and busiest aisles, and see what the manager would review after a peak.",
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
