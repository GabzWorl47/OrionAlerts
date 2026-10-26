import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const cementIndustryPage: IndustryPageRecord = {
  slug: "cement",
  name: "Cement & Building Materials",
  cardLabel: "Cement",
  siteNoun: { one: "cement plant", many: "cement plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Cement Plants",
    description:
      "AI CCTV for cement plants: truck queues at loading bays, conveyor and transfer-point zone entry, and camera health monitoring in dusty conditions.",
    canonicalPath: "/industries/cement",
    image: "/Images/industries/cement.webp",
  },
  hero: {
    eyebrow: "Cement & Building Materials",
    h1: "AI Video Analytics for Cement Plants",
    lede:
      "Watch truck queues at loading bays, entry into conveyor and transfer-point zones, and camera health through dust and vibration. Ask Vision Copilot where loading-area congestion recurred this week and which change dispatch should try first.",
    media: {
      kind: "image",
      src: "/Images/industries/cement.webp",
      alt: "Worker shovelling cement beside a concrete mixer and cement bags on a building site",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Make dusty, distributed plant areas easier to review.",
    paragraphs: [
      "Material transfer, bagging and vehicle dispatch create multiple points where a small interruption can become an operational problem. Dust, vibration and changing daylight also make camera coverage less reliable, so plan lens cleaning and expect the system to report low-visibility periods rather than guess. Start with specific events that operators can verify and act upon.",
      "A reference deployment positions cameras at loading bays, material-transfer points and conveyor-side access, often connected over longer cable runs or wireless links given the size of a typical plant footprint. Retention matches dispatch and safety-review cycles, with loading and transfer alerts routed to dispatch and plant operations. Where a weighbridge or dispatch system is in use, align review timestamps with its vehicle records so each clip lines up with the truck's dispatch entry.",
    ],
    buyers: [
      "Plant heads",
      "EHS",
      "Dispatch",
      "Maintenance and security teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "Which loading-area changes should the dispatch team assess first?",
      "Show observations from Loading Bay 3 this morning.",
      "Where did loading-area congestion recur this week?",
    ],
    exampleAnswer:
      "The same loading approach repeatedly contains waiting vehicles during the morning dispatch period. Suggested next step: review vehicle staging and bay allocation with dispatch, using the observations to select a targeted trial.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "The same loading approach repeatedly contains waiting vehicles during the morning dispatch period.",
    recommendation:
      "Review vehicle staging and bay allocation with dispatch, using the observations to select a targeted trial.",
    decisionOwner: "Dispatch / plant operations",
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
      title: "Name Loading Bay 3 and each transfer point",
      body: "Loading bays, transfer points and conveyor-side access are mapped in the plant hierarchy, so dispatch asks about Loading Bay 3 and sees the cameras that cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Ask about this morning's dispatch",
      body: "Ask Vision Copilot, “Show observations from Loading Bay 3 this morning,” to review truck staging and transfer-point observations for that bay and period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find where truck queues keep forming",
      body: "Ask, “Where did loading-area congestion recur this week?” Observations across the week show whether waiting vehicles build up at the same approach during each morning dispatch.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Give dispatch a staging change to trial",
      body: "Ask, “Which loading-area changes should the dispatch team assess first?” A suggested step, such as reviewing vehicle staging and bay allocation, goes to dispatch and plant operations to decide on a trial.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Compare loading zones by dispatch period",
      body: "Scores out of 100 compare loading zones across comparable dispatch periods, with dust and visibility conditions noted beside each result.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Test cameras during dusty production conditions, night shifts and vehicle movement. Confirm cleaning access, mounting stability and exposure settings. Position hardware outside hazardous conditions unless it carries the approvals required for that installation.",
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
      "BIS product certification and quality-control orders cover the cement or building-material product itself. Plant camera monitoring supports safety and dispatch reviews alongside that product-quality process.",
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
      body: "Truck-staging, transfer-point and conveyor-zone alerts, with Vision Copilot search by bay and dispatch period.",
    },
    {
      solutionSlug: "vms",
      body: "Loading and transfer review across the agreed plant cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Tracks camera and recording availability in dusty, vibration-heavy areas so critical views stay usable.",
    },
  ],
  faqs: [
    {
      question: "How can AI CCTV improve safety in a cement plant?",
      answer:
        "AI video analytics watches CCTV views for events the shift team can act on: people entering configured conveyor or transfer-point zones, trucks queuing at loading bays and, where a pilot confirms the view supports it, visible helmet or hi-vis exceptions at selected entries. Each alert carries the camera, location and clip.",
    },
    {
      question: "Does video analytics work in dusty conditions?",
      answer:
        "It can, but visibility drops in heavy dust, so results depend on camera placement, cleaning access and exposure settings. Where visibility falls below useful levels, the system should report insufficient coverage rather than a confident result. The pilot includes the dustiest periods, so the team sees how each view performs before rollout.",
    },
    {
      question: "Can AI video analytics monitor truck queues at loading bays?",
      answer:
        "Yes. Cameras at the loading approach and bays show waiting vehicles, and dwell at selected loading lanes is compared with dispatch observations during the pilot. Where a weighbridge or dispatch system is in use, review timestamps are aligned with its vehicle records so each queue can be traced to dispatch.",
    },
    {
      question: "Can CCTV measure dust emissions?",
      answer:
        "No. Dust and emissions are measured with calibrated monitoring equipment, and ordinary video is not a calibrated instrument. What video shows is the visible scene around them, such as material accumulation at a transfer point or a view that has become obscured, which helps the team decide where to look and when to check the instruments.",
    },
    {
      question: "Can this predict conveyor failure?",
      answer:
        "No. A visible interruption at a conveyor, such as material piling up at a transfer point, can prompt the team to investigate. Predicting conveyor failure needs additional machine signals and a separately validated model, so predictive maintenance is scoped as its own project alongside the camera pilot.",
    },
  ],
  limits:
    "Video shows visible activity at mapped bays and transfer points. Dust emissions, product quality and conveyor-failure prediction need calibrated instruments, Bureau of Indian Standards (BIS) certification processes and machine data.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "add-ai-to-existing-cctv-cameras"],
    glossary: ["camera-health-monitoring", "video-analytics"],
    useCases: ["vehicle-detection", "restricted-zone-monitoring", "safety-compliance-detection"],
  },
  relatedIndustrySlugs: ["metals-mining", "construction", "oil-gas"],
  finalCta: {
    heading: "Ask Vision Copilot about your cement plant.",
    body:
      "Start with one loading bay and one transfer point, and test them through a dusty shift.",
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
