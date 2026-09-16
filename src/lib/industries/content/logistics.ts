import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const logisticsIndustryPage: IndustryPageRecord = {
  slug: "logistics",
  name: "Logistics & Warehousing",
  cardLabel: "Logistics",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about cross-aisle obstructions and loading-bay handoffs.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Warehouse and Logistics Video Analytics | OrionAlerts",
    description:
      "Explore warehouses and logistics with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/logistics",
    ogTitle: "Warehouse and Logistics Video Analytics | OrionAlerts",
    ogDescription:
      "Explore warehouses and logistics with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Logistics & Warehousing",
    h1: "Vision Copilot for Warehouses and Logistics",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about cross-aisle obstructions and loading-bay handoffs. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative warehouse loading-bay photograph used for logistics industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Focus on the interfaces where warehouse activity converges.",
    paragraphs: [
      "Forklifts, pedestrians and goods often converge around docks and cross-aisles. Shift peaks make manual observation difficult, while missing video can delay an incident review. Material-handling and powered-vehicle hazards are documented warehouse concerns. Use camera observations to support intervention and investigation while retaining physical safety measures.",
      "A reference deployment covers docks, cross-aisles and staging lanes, usually over PoE or wireless links sized for a large floor plate. Retention should match the window claims and incident investigations typically need, with route and dock alerts routed to the shift lead who can act immediately rather than a back-office queue. Where a WMS is in use, align review timestamps with its dock-scheduling records instead of treating video as a standalone log of dock activity.",
    ],
    buyers: [
      "Warehouse heads",
      "3PL operations",
      "EHS",
      "Transport and security",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Warehouse Site" },
      { label: "Building", example: "Warehouse Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Dispatch Zone" },
      { label: "Room", example: "Dock" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected dock or cross-aisle so questions about Dock 4 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from Dock 4 during the evening dispatch period.",
      "Which cross-aisles had repeated obstruction observations this week?",
      "What layout or scheduling changes should the warehouse manager assess?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. A marked cross-aisle is repeatedly obstructed during dispatch staging. Suggested next step: review pallet staging locations and dispatch timing, then inspect observations from a comparable operating period.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A marked cross-aisle is repeatedly obstructed during dispatch staging.",
    recommendation:
      "Review pallet staging locations and dispatch timing, then inspect observations from a comparable operating period.",
    decisionOwner: "Warehouse manager / shift lead",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring cross-aisle obstructions and loading-bay handoffs into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare warehouse zones and shifts, with traffic exposure and camera coverage considered only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Shared-Route Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into defined vehicle lanes or crossings follows the agreed observable route rule.",
        methodologyStatus: "proposed",
      },
      {
        name: "Dock-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible bay presence or queue stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Storage-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped path or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift or dispatch window",
    scope: "Selected docks and cross-aisles with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect cross-aisle obstructions and loading-bay handoffs to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from Dock 4 during the evening dispatch period.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which cross-aisles had repeated obstruction observations this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What layout or scheduling changes should the warehouse manager assess?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across warehouse zones and shifts, with traffic exposure and camera coverage considered. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Shared-Route Practices, Dock-Area Flow and Storage-Area Orderliness; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: A marked cross-aisle is repeatedly obstructed during dispatch staging. Ask: “What layout or scheduling changes should the warehouse manager assess?” Suggested recommendation: Review pallet staging locations and dispatch timing, then inspect observations from a comparable operating period. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Select stable dock and crossing views. Test peak traffic, tall loads, night operations and changing racking. Keep the first pilot focused on events with a clear supervisor response.`,
    requiredInputs: [
      "Stable dock and crossing camera views",
      "Mapped hierarchy for pilot docks and cross-aisles",
      "Clear supervisor ownership for each alert type",
      "Physical segregation and vehicle controls retained on site",
      "Where available, timestamp alignment with the WMS dock-scheduling records used to investigate a specific dispatch window",
    ],
  },
  standards: {
    publicCopy:
      "Review site fire and life-safety requirements alongside occupational safety context for warehouse operations. Handling food or pharmaceuticals adds the relevant product and storage obligations for those goods; a general warehouse page does not imply a universal logistics certificate.",
    frameworkIds: ["C8", "C1"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Verified route/pathway exceptions",
      definition:
        "Confirmed relevant route or pathway exceptions divided by reviewed alerts for the defined zones, using an agreed review rubric.",
      sourceOfTruth: "Sampled footage and supervisor review log",
    },
    {
      label: "Observed bay dwell",
      definition:
        "Camera-derived presence duration at selected bays compared with dock observations for the same window; report conditions and definition of start/end events.",
      sourceOfTruth: "Dock observations and timed bay samples",
    },
    {
      label: "Known-incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct dock clip from a defined starting input such as time window and bay.",
      sourceOfTruth: "Timed investigation exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For logistics, focus on location-aware search, recommendations and score-led review around docks and cross-aisles.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for dock and warehouse incident review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise warehouse camera continuity so dock investigations have usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can cameras identify every SKU?",
      answer:
        "Not reliably from general warehouse CCTV. Item identity usually needs scanning, labelling or a verified WMS integration.",
    },
    {
      question: "Can this prevent forklift accidents?",
      answer:
        "It can support visibility and response for scoped events. It does not replace segregation, training, vehicle controls or supervision.",
    },
    {
      question: "How does this differ from fulfilment-centre monitoring?",
      answer:
        "This page focuses on warehouse traffic and dock operations. The fulfilment page focuses on parcel-processing handoffs and investigation.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["ecommerce-fulfilment", "cold-storage", "dark-stores"],
  finalCta: {
    heading: "Ask Vision Copilot about your warehouses and logistics.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for warehouses and logistics.",
  },
  sources: ["README v2 §9.8", "README v2 §§3.1–3.3", "README v2 §7", "frameworks C1/C8"],
  review: {
    reviewedAt: "2026-09-13",
  },
};
