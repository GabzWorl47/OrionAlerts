import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const logisticsIndustryPage: IndustryPageRecord = {
  slug: "logistics",
  name: "Logistics & Warehousing",
  cardLabel: "Logistics",
  siteNoun: { one: "warehouse", many: "warehouses" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Warehouses & Logistics",
    description:
      "Warehouse CCTV analytics for docks and cross-aisles: flag route exceptions where forklifts and pedestrians meet, track bay dwell and find clips fast.",
    canonicalPath: "/industries/logistics",
    image: "/Images/industries/logistics-hero.webp",
  },
  hero: {
    eyebrow: "Logistics & Warehousing",
    h1: "AI Video Analytics for Warehouses & Logistics",
    lede: "Flag pedestrians in forklift lanes, blocked cross-aisles and dock dwell from the warehouse cameras you already run. Ask Vision Copilot what happened at Dock 4 last night, and send route alerts to the shift lead who can act.",
    media: {
      kind: "image",
      src: "/Images/industries/logistics-hero.webp",
      alt: "Aerial view of a logistics hub with shipping containers, trucks at loading docks and a rail line",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Focus on the interfaces where warehouse activity converges.",
    paragraphs: [
      "Forklifts, pedestrians and goods converge around docks and cross-aisles, and shift peaks make manual observation difficult. Camera observations help the shift lead intervene at a crossing and help investigators find the right dock clip, alongside the site's physical safety measures.",
      "A reference deployment covers docks, cross-aisles and staging lanes, usually over Power over Ethernet (PoE) cabling or wireless links sized for a large floor plate. Retention matches the window claims and incident investigations typically need, and route and dock alerts go to the shift lead who can act immediately rather than a back-office queue. Where a warehouse management system (WMS) is in use, align review timestamps with its dock-scheduling records so video and dock data tell one story.",
    ],
    buyers: [
      "Warehouse heads",
      "3PL operations",
      "EHS",
      "Transport and security",
    ],
  },
  locationContext: {
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
    prompts: [
      "What layout or scheduling changes should the warehouse manager assess?",
      "Find observations from Dock 4 during the evening dispatch period.",
      "Which cross-aisles had repeated obstruction observations this week?",
    ],
    exampleAnswer:
      "A marked cross-aisle is repeatedly obstructed during dispatch staging. Suggested next step: review pallet staging locations and dispatch timing, then inspect observations from a comparable operating period.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A marked cross-aisle is repeatedly obstructed during dispatch staging.",
    recommendation:
      "Review pallet staging locations and dispatch timing, then inspect observations from a comparable operating period.",
    decisionOwner: "Warehouse manager / shift lead",
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
      title: "Start from Dock 4, not a camera ID",
      body: "Cameras map to dispatch zones, docks and cross-aisles, so a question about Dock 4 opens the views that actually cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search a dock's evening dispatch",
      body: "Ask Vision Copilot, “Find observations from Dock 4 during the evening dispatch period,” and jump to the clips for that window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find cross-aisles that keep getting blocked",
      body: "Ask which cross-aisles had repeated obstruction observations this week to see where pallet staging spills into marked routes.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Rethink staging and dispatch timing",
      body: "Ask what layout or scheduling changes the warehouse manager should assess. A typical suggestion is to move pallet staging or shift dispatch timing, then check a comparable operating period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score routes, docks and storage areas",
      body: "0–100 scores cover shared-route practices, dock-area flow and storage-area orderliness across warehouse zones and shifts.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Select stable dock and crossing views, then test peak traffic, tall loads, night operations and changing racking. Keep the first pilot on events with a clear supervisor response.",
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
      "Warehouses plan around site fire and life-safety requirements and occupational safety management. Sites handling food or pharmaceuticals add the product and storage obligations for those goods. Route and dock observations can feed the site's own safety reviews.",
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
      body: "Location-aware search, recommendations and score-led review of route exceptions and dock activity.",
    },
    {
      solutionSlug: "vms",
      body: "Dock and warehouse incident review across the agreed cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps dock and aisle cameras recording, so investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "Can AI cameras prevent forklift–pedestrian accidents?",
      answer:
        "Not on their own. They help by flagging pedestrians in configured forklift lanes, blocked cross-aisles and dock congestion, so the shift lead can step in. Start with two or three busy crossings and validate each view in the pilot. Physical segregation, speed controls, operator training and supervision remain the primary safety measures.",
    },
    {
      question: "How does video analytics help with dock investigations?",
      answer:
        "Each dock camera is mapped to its bay, so an authorised reviewer can pull the right clip from a time window and bay number instead of searching a recorder. Where a WMS is in use, review timestamps can be aligned with its dock-scheduling records to investigate a specific dispatch window.",
    },
    {
      question: "Which warehouse areas should we cover first?",
      answer:
        "Start with docks, cross-aisles where forklifts meet pedestrians, and staging lanes. These are the points where activity converges and where a clear view helps the shift lead act. Two or three busy crossings and one dock make a manageable first pilot, with a named supervisor owning each alert type.",
    },
    {
      question: "Can cameras identify every SKU?",
      answer:
        "No. Item identity comes from scanning, labelling or a verified WMS integration, and general warehouse CCTV cannot read every SKU reliably. What the cameras show is where pallets, vehicles and people moved around docks and cross-aisles, which complements those records when a shipment or incident is investigated.",
    },
  ],
  limits: "Warehouse CCTV analytics flags visible route and dock events. SKU identification needs scanning or a verified WMS integration, physical segregation, vehicle controls and training stay in place, and scores describe observed conditions in the covered zones.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem", "add-ai-to-existing-cctv-cameras"],
    glossary: ["video-analytics", "edge-ai-video-analytics"],
    useCases: ["vehicle-detection", "restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["cold-storage", "ecommerce-fulfilment", "automotive", "airports-ports-railways"],
  finalCta: {
    heading: "Ask Vision Copilot about your warehouse.",
    body: "Choose two busy crossings and one dock for the pilot, and see what the shift lead would receive.",
  },
  sources: ["README v2 §9.8", "README v2 §§3.1–3.3", "README v2 §7", "frameworks C1/C8"],
  review: {
    reviewedAt: "2026-09-13",
  },
};
