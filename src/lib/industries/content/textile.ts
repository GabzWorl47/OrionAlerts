import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const textileIndustryPage: IndustryPageRecord = {
  slug: "textile",
  name: "Textiles & Garments",
  cardLabel: "Textiles",
  siteNoun: { one: "textile or garment factory", many: "textile and garment factories" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Textile & Garment Factory AI CCTV",
    description:
      "Textile and garment factory AI CCTV: track material build-up at staging buffers and pathway events, measuring process conditions, not individual workers.",
    canonicalPath: "/industries/textile",
    image: "/Images/industries/textile-hero.webp",
  },
  hero: {
    eyebrow: "Textiles & Garments",
    h1: "Textile & Garment Factory AI CCTV",
    lede:
      "Track material build-up at staging buffers and obstructions on shared routes, focusing on process conditions rather than individual workers. Ask Vision Copilot which buffers keep accumulating material.",
    media: {
      kind: "image",
      src: "/Images/industries/textile-hero.webp",
      alt: "Engineer with a tablet beside production machines on a factory floor, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Investigate the process behind a visible interruption.",
    paragraphs: [
      "Textile and garment production depends on movement between preparation, production, finishing and dispatch. A pile-up can reflect downstream capacity, missing material or a planned changeover. OrionAlerts measures process conditions, not how long a worker is on camera. Define observations around the process and involve production and safety teams in interpretation.",
    ],
    buyers: [
      "Factory heads",
      "Production managers",
      "EHS",
      "Sourcing and compliance teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should the production team review without ranking individual workers?",
      "Show observations from the finishing staging area yesterday.",
      "Which covered buffers repeatedly accumulated material this week?",
    ],
    exampleAnswer:
      "Material staging repeatedly expands into the same shared route during finishing handoffs. Suggested next step: review buffer capacity and handoff timing with production; assess process changes rather than individual worker movement.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Material staging repeatedly expands into the same shared route during finishing handoffs.",
    recommendation:
      "Review buffer capacity and handoff timing with production; assess process changes rather than individual worker movement.",
    decisionOwner: "Production manager / factory operations",
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
      title: "Map finishing, buffers and shared routes",
      body: "Finishing staging areas, material buffers and shared walkways are mapped with their cameras, so production asks about a named buffer or route.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Look back at yesterday's finishing staging",
      body: "Ask Vision Copilot, “Show observations from the finishing staging area yesterday,” to see staging and route observations for that area and day.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find buffers that fill up every week",
      body: "Ask, “Which covered buffers repeatedly accumulated material this week?” Repeat observations show where staging spills into a shared route during finishing handoffs.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Adjust buffer capacity and handoff timing",
      body: "Ask, “What should the production team review without ranking individual workers?” The suggested step targets the process, such as buffer capacity and handoff timing, for the production manager to assess.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score process areas, not people",
      body: "Scores out of 100 compare process areas over comparable operating windows, giving production a process-level view of where flow breaks down.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Test repetitive backgrounds, changing fabric colours and dense workstation layouts. Keep camera purposes process-based and document which staff monitoring is in scope.",
    requiredInputs: [
      "Mapped hierarchy for pilot finishing, buffer and controlled process areas",
      "Process-based event definitions that exclude individual worker ranking",
      "Documented limits on staff monitoring and camera purpose",
      "Representative testing across fabric colour change and dense workstation layouts",
    ],
  },
  standards: {
    publicCopy:
      "The Global Organic Textile Standard (GOTS) and OEKO-TEX STANDARD 100 apply to specific organic-textile and harmful-substance claims for eligible products. Factory video supports process and safety reviews, while those certifications follow their own programmes.",
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
      body: "Staging-buffer and pathway alerts, with Vision Copilot search by finishing area and operating window.",
    },
    {
      solutionSlug: "vms",
      body: "Material-handoff review across the agreed factory cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Flags camera and recording issues so process investigations keep usable footage.",
    },
  ],
  faqs: [
    {
      question: "How can AI CCTV help a textile or garment factory?",
      answer:
        "It watches staging buffers and shared routes between preparation, production, finishing and dispatch. Supervisors see where material builds up, when staging spills into a walkway, and which buffers fill repeatedly, so they can adjust buffer capacity and handoff timing. Each alert carries the staging area, time and clip.",
    },
    {
      question: "Can we find a fabric-roll or finished-goods handoff on camera?",
      answer:
        "Yes. Cameras are mapped to staging areas, so an authorised reviewer can start from a time window and area and locate the handoff clip. Known-handoff retrieval time is one of the pilot measures, compared with how long the same search takes today.",
    },
    {
      question: "Can this measure each worker's productivity?",
      answer:
        "No. OrionAlerts looks at where material piles up and why, rather than at individual workers. Operational measures focus on process conditions, such as buffer staging duration and blocked routes, with validated production data supplying output and efficiency figures for the production manager.",
    },
    {
      question: "Can cameras certify fabric quality?",
      answer:
        "No. Fabric quality is confirmed through textile testing or dedicated defect inspection, which general surveillance cannot replace. Factory cameras add process context instead, such as where finished goods were staged and when a fabric-roll handoff happened, which helps a quality investigation trace movement between preparation, finishing and dispatch.",
    },
    {
      question: "Does GOTS apply to every factory?",
      answer:
        "No. GOTS applies according to the products, organic-textile claims and certification scope a factory chooses to pursue, so it is not a universal requirement. Where a factory holds it, certification follows the GOTS programme; factory video supports process and safety reviews but does not award or maintain that certification.",
    },
  ],
  limits:
    "Observations describe process conditions such as buffers and routes. Worker productivity, fabric quality and textile certifications are measured with production data, testing and certification programmes.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "what-is-a-vision-intelligence-platform"],
    glossary: ["video-analytics"],
    useCases: [],
  },
  relatedIndustrySlugs: ["manufacturing", "pulp-paper", "polymers-plastics"],
  finalCta: {
    heading: "Ask Vision Copilot about your factory.",
    body:
      "Start with one finishing buffer and the shared route next to it.",
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
