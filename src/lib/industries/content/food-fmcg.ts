import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const foodFmcgIndustryPage: IndustryPageRecord = {
  slug: "food-fmcg",
  name: "Food, Beverage & FMCG",
  cardLabel: "Food & FMCG",
  siteNoun: { one: "food or FMCG plant", many: "food and FMCG plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Food, Beverage & FMCG",
    description:
      "AI video analytics for food, beverage and FMCG plants: hygiene-zone entry observations, packaging-area build-up and footage ready for QA investigations.",
    canonicalPath: "/industries/food-fmcg",
    image: "/Images/industries/food-fmcg-hero.webp",
  },
  hero: {
    eyebrow: "Food, Beverage & FMCG",
    h1: "AI Video Analytics for Food, Beverage & FMCG",
    lede: "Review hygiene-zone entries and packaging transfer points from the cameras you already have. Ask Vision Copilot what happened at the packing-area entry this morning, and route visible exceptions to food safety and production with the clip and location.",
    media: {
      kind: "image",
      src: "/Images/industries/food-fmcg-hero.webp",
      alt: "Cartons moving along a roller conveyor on a factory production line, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Connect visible behaviour with the right operational response.",
    paragraphs: [
      "Busy production areas combine staff movement, cleaning, material handling and packaging activity. Cameras at defined hygiene-zone entries and packaging transfer points show visible practice exceptions and material build-up, which QA reviews alongside production context. Non-food FMCG operations apply their own product requirements to the same access and workflow use cases.",
      "A reference deployment places cameras at production and hygiene-zone entries and packaging transfer points, using washdown-rated enclosures and cabling suited to the facility's cleaning cycle. Retention matches the window a QA investigation typically needs, and hygiene and packaging-flow alerts go to food safety and production rather than general security. Where a production-scheduling or batch system is in use, align review timestamps with its records so video adds context to batch traceability.",
    ],
    buyers: [
      "Plant managers",
      "Food safety/QA",
      "Production",
      "EHS",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Factory" },
      { label: "Building", example: "Processing Building" },
      { label: "Floor", example: "Production Floor" },
      { label: "Zone", example: "Hygiene Zone" },
      { label: "Room", example: "Entry Room" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected packing-area entry or hygiene zone so questions about the packing-area entry start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the food-safety and production teams review today?",
      "Show observations from the packing-area entry this morning.",
      "Which covered packaging zones show recurring build-up?",
    ],
    exampleAnswer:
      "Visible clothing observations recur at one production entry while nearby staging becomes congested. Suggested next step: review the entry layout and staging practice with the responsible teams; verify food-safety controls through the established process.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible clothing observations recur at one production entry while nearby staging becomes congested.",
    recommendation:
      "Review the entry layout and staging practice with the responsible teams; verify food-safety controls through the established process.",
    decisionOwner: "Food safety / production",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring visible hygiene practices and packaging-flow observations into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare visible hygiene and operational observations only when the assessment basis is consistent; never treat these scores as food contamination or product-safety ratings.",
    dimensions: [
      {
        name: "Visible Hygiene Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible hygiene clothing item meets the agreed criterion at an observable production entry.",
        methodologyStatus: "proposed",
      },
      {
        name: "Packaging-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible accumulation or occupancy at a defined packaging transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured production zone follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable production window",
    scope: "Selected hygiene and packaging zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Start from the packing-area entry",
      body: "Cameras map to named hygiene zones, entry rooms and packing areas on the production floor, so a QA question starts from the place rather than a camera number.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search the packing entry by time",
      body: "Ask Vision Copilot, “Show observations from the packing-area entry this morning,” and review the clips for that entry and period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Spot recurring packaging build-up",
      body: "Ask, “Which covered packaging zones show recurring build-up?” to see which transfer points keep accumulating material across comparable production windows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Plan entry and staging changes with QA",
      body: "Ask what the food-safety and production teams should review today. A typical suggestion is to rework entry layout and staging practice, with food-safety controls verified through the established process.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score hygiene entries and packaging flow",
      body: "0–100 scores cover visible hygiene practices, packaging-area flow and controlled-area entry, compared across matching production windows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Test washdown conditions, condensation, reflective packaging and protective clothing variations, and choose enclosures that suit the physical environment.",
    requiredInputs: [
      "Mapped hierarchy for pilot hygiene entries and packaging zones",
      "Agreed response owners for visible hygiene and packaging-flow events",
      "Camera placement plan compatible with washdown and condensation conditions",
      "Representative testing across clothing variations and packaging reflectivity",
      "Washdown-rated camera enclosures and cabling confirmed against the facility's cleaning cycle before installation",
    ],
  },
  standards: {
    publicCopy:
      "Food businesses assess their Food Safety and Standards Authority of India (FSSAI) licensing and Schedule 4 hygiene requirements, and some also run ISO 22000 as a food-safety management system. Footage from hygiene entries and packaging areas can support the internal reviews behind those programmes.",
    frameworkIds: ["C7"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed clothing observations against labelled samples",
      definition:
        "Confirmed relevant visible hygiene-clothing observations divided by reviewed alerts for the defined entries, using a QA-approved review rubric.",
      sourceOfTruth: "QA-approved samples and supervisor review log",
    },
    {
      label: "Packaging-area event review time",
      definition:
        "Time for an authorised reviewer to locate the correct packaging-area clip from a defined starting input such as time window and zone.",
      sourceOfTruth: "Response records and timed retrieval exercises",
    },
    {
      label: "Investigation-footage availability",
      definition:
        "Share of expected assessment windows at priority cameras that remained usable for investigation during the pilot period.",
      sourceOfTruth: "Recording logs and surveillance health records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of visible practice exceptions at hygiene entries and packaging lines.",
    },
    {
      solutionSlug: "vms",
      body: "Live and recorded review of production and dispatch areas across the agreed cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps priority hygiene-entry and packaging cameras recording, so QA investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "What can AI video analytics watch in a food or FMCG plant?",
      answer:
        "Typical starting points are visible hygiene-clothing exceptions at production and hygiene-zone entries, entry into configured production zones, and material build-up at packaging transfer points. Alerts reach food safety or production with the camera, location and clip, so QA can review each event alongside batch and production records.",
    },
    {
      question: "How does CCTV footage help a food-safety QA investigation?",
      answer:
        "Authorised reviewers pull the clip for a specific packing entry or transfer point by time window and zone instead of scrolling through recorders. Camera health monitoring flags priority cameras that stop recording, so the footage QA expects is available when a batch question comes up.",
    },
    {
      question: "Can cameras detect food contamination?",
      answer:
        "No. Microbial and chemical contamination are confirmed through validated testing and process controls, which ordinary CCTV cannot replace. What cameras show is the visible practice around the product, such as hygiene clothing at an entry or material build-up near packaging, which QA reviews alongside those test results.",
    },
    {
      question: "Can this support an audit?",
      answer:
        "Yes, as supporting context. Relevant footage, handled and retained appropriately, can support an internal review or audit alongside the required records and inspections, which it does not replace. Agree with QA which cameras, retention period and export steps apply before footage is relied on, so the clip is available when an auditor asks.",
    },
    {
      question: "Does this apply to all FMCG?",
      answer:
        "Largely, yes. Visual access and workflow use cases, such as controlled-area entry and packaging-area build-up, apply broadly across FMCG. Food-specific hygiene and FSSAI requirements apply only to food operations, so a non-food plant scopes its pilot against its own product and safety requirements.",
    },
  ],
  limits: "CCTV analytics shows visible practices and material flow. It doesn't measure microbial or chemical safety, certify food safety or replace required records, and its scores rate observed conditions rather than product safety.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "cctv-camera-health-monitoring"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["pharma", "cold-storage", "pulp-paper"],
  finalCta: {
    heading: "Ask Vision Copilot about your food or FMCG plant.",
    body: "Start with one hygiene-zone entry and one packaging transfer point, and see what QA could review each shift.",
  },
  sources: [
    "README v2 §9.7",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C7",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
