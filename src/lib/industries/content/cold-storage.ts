import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const coldStorageIndustryPage: IndustryPageRecord = {
  slug: "cold-storage",
  name: "Cold Storage & Refrigerated Warehousing",
  cardLabel: "Cold Storage",
  siteNoun: { one: "cold store", many: "cold storage facilities" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Cold Storage",
    description:
      "Cold storage CCTV analytics: review chamber door activity and loading periods, and pull the right clip fast when a temperature excursion is investigated.",
    canonicalPath: "/industries/cold-storage",
    image: "/Images/industries/cold-storage.webp",
  },
  hero: {
    eyebrow: "Cold Storage & Refrigerated Warehousing",
    h1: "AI Video Analytics for Cold Storage",
    lede: "Review chamber-door activity, loading periods and access around a cold-chain issue, and pull the right clip fast when a temperature excursion is investigated. Pair the footage with calibrated sensor records for the full picture.",
    media: {
      kind: "image",
      src: "/Images/industries/cold-storage.webp",
      alt: "Cutaway illustration of a cold-storage warehouse with racked pallets and refrigerated trucks at loading docks",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Understand activity around an excursion without guessing its cause.",
    paragraphs: [
      "When a cold-chain issue occurs, teams need to know whether a door was open, loading took longer than expected or access activity changed. Video answers those contextual questions when the scene is visible and timestamps align with sensor data. Product temperature and cold-chain integrity are established by calibrated instruments and the applicable quality assessment.",
    ],
    buyers: [
      "Cold-chain operations",
      "QA",
      "Refrigeration engineering",
      "Warehouse and EHS teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "What loading or doorway practices should the cold-store team review?",
      "Show observations at Chamber Entry 2 during yesterday's loading period.",
      "Where did visible door-opening observations recur?",
    ],
    exampleAnswer:
      "Repeated visible door-opening observations align with busy loading periods in the available scene record. Suggested next step: review loading sequence and doorway practices; check calibrated sensor records before attributing temperature effects.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated visible door-opening observations align with busy loading periods in the available scene record.",
    recommendation:
      "Review loading sequence and doorway practices; check calibrated sensor records before attributing temperature effects.",
    decisionOwner: "Cold-store operations / QA",
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
      title: "Start from Chamber Entry 2",
      body: "Cameras map to cold zones, chamber entries and loading interfaces, so an excursion review begins at the right door.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search a chamber entry by loading period",
      body: "Ask Vision Copilot, “Show observations at Chamber Entry 2 during yesterday's loading period,” to see door and loading activity in that window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See where door openings recur",
      body: "Ask where visible door-opening observations recur, then compare them with the busiest loading periods.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Review loading and doorway practice",
      body: "Ask what loading or doorway practices the cold-store team should review. A typical suggestion is to revisit the loading sequence and check calibrated sensor records before attributing any temperature effect.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score door and access activity",
      body: "0–100 scores cover observed door and access activity in comparable periods, giving QA a structured view of where to look first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Check each camera's operating temperature range, condensation management, defrost conditions and enclosure suitability. Plan networking and maintenance access inside cold zones, and validate time alignment with any external sensors.",
    requiredInputs: [
      "Mapped hierarchy for pilot chamber entries and loading interfaces",
      "Cameras and enclosures suitable for cold-zone operating conditions",
      "Agreed response owners for door, access and loading events",
      "Time alignment checks with any external sensors used in investigations",
    ],
  },
  standards: {
    publicCopy:
      "Food storage follows Food Safety and Standards Authority of India (FSSAI) requirements and pharmaceutical storage follows good manufacturing practice (GMP) obligations, depending on the goods held. Door and access footage aligned with sensor timestamps gives QA context for its own excursion investigations.",
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
      body: "Location-aware search, recommendations and score-led review of visible door and access events at chamber entries.",
    },
    {
      solutionSlug: "vms",
      body: "Excursion-context review across the agreed cameras, aligned with sensor timestamps.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps cold-site cameras recording, so excursion investigations retain usable footage.",
    },
  ],
  faqs: [
    {
      question: "Can CCTV help investigate a temperature excursion?",
      answer:
        "Yes, as context. Video can show when a chamber door stayed open, how long loading took and when people entered the cold zone around the time a sensor logged an excursion. It cannot measure product temperature, so pair the footage with calibrated sensor records.",
    },
    {
      question: "Which cold-store areas should cameras cover first?",
      answer:
        "Chamber entries and loading interfaces, where door activity and loading duration matter most during an investigation. Choose cameras and enclosures rated for the cold-zone temperature, condensation and defrost conditions, and confirm time alignment with any external sensors before relying on the footage.",
    },
    {
      question: "Can CCTV measure the temperature?",
      answer:
        "No. Temperature comes from calibrated instruments, and an ordinary CCTV camera cannot measure it. What the camera shows is door and loading activity around a chamber, which QA reads alongside sensor records. Specialist thermal camera systems exist, but they have their own limits and validation requirements and are scoped separately from this pilot.",
    },
    {
      question: "Can an open-door alert prove spoilage?",
      answer:
        "No. An open-door alert shows exposure context: which door was open, for how long and during which loading period. Whether product was affected is decided from measured exposure, such as temperature records, and the applicable quality assessment, with the clip helping QA reconstruct what happened at the chamber entry.",
    },
    {
      question: "Can existing cameras work inside a freezer?",
      answer:
        "Sometimes. It depends on whether each camera's environmental specifications and installation suit the chamber, so the exact model is checked against actual chamber temperatures, condensation and defrost cycles. Where an existing camera falls short, a cold-rated camera or enclosure is specified for that position, and recording availability is tested through cold and defrost conditions.",
    },
  ],
  limits: "Video gives context around door and loading activity. Temperature, product condition and cold-chain integrity are established by calibrated instruments and QA's own assessment, and scores reflect observed activity only.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["unauthorized-area-entry"],
  },
  relatedIndustrySlugs: ["food-fmcg", "pharma", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your cold store.",
    body: "Start with two chamber entries and one loading bay, and see what an excursion review would look like.",
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
