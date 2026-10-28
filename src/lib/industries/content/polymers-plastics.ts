import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const polymersPlasticsIndustryPage: IndustryPageRecord = {
  slug: "polymers-plastics",
  name: "Polymers & Plastics",
  cardLabel: "Polymers",
  siteNoun: { one: "plastics plant", many: "plastics plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Polymers & Plastics",
    description:
      "AI video analytics for plastics plants: material build-up at moulding and extrusion transfers, restricted-zone alerts and fast retrieval of known events.",
    canonicalPath: "/industries/polymers-plastics",
    image: "/Images/industries/polymers-plastics.webp",
  },
  hero: {
    eyebrow: "Polymers & Plastics",
    h1: "AI Video Analytics for Polymers & Plastics",
    lede:
      "Flag material build-up at moulding and extrusion transfers and entry into restricted machine areas, then ask Vision Copilot which areas had recurring build-up before you change the material flow.",
    media: {
      kind: "image",
      src: "/Images/industries/polymers-plastics.webp",
      alt: "Infographic of polymer molecules and moulded plastic products",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Separate visible process interruptions from product and chemical quality.",
    paragraphs: [
      "A plastics plant may combine hot processes, raw-material storage and finished-goods movement. Video shows access events and visible accumulation, while resin composition, melt temperature and emissions come from instruments and process records. Build the monitoring plan around the events a supervisor can verify and the operational information needed to understand them.",
    ],
    buyers: [
      "Plant heads",
      "Extrusion and moulding operations",
      "EHS",
      "Warehouse teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Moulding Building" },
      { label: "Floor", example: "Production Floor" },
      { label: "Zone", example: "Transfer Zone" },
      { label: "Room", example: "Staging Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected moulding transfer or staging area so questions about the moulding transfer area start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the plant team review before changing the material flow?",
      "Show observations from the moulding transfer area during the last shift.",
      "Which covered extrusion or moulding areas had recurring build-up?",
    ],
    exampleAnswer:
      "Recurring visible build-up appears at one downstream staging interface. Suggested next step: review staging capacity and downstream handoff timing with operators, using process records to assess the cause.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring visible build-up appears at one downstream staging interface.",
    recommendation:
      "Review staging capacity and downstream handoff timing with operators, using process records to assess the cause.",
    decisionOwner: "Plant operations / extrusion-moulding lead",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring downstream build-up and controlled process-zone review into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare visible zone and process observations only when the assessment basis is consistent; these scores are not resin quality, emissions or EPR compliance measures.",
    dimensions: [
      {
        name: "Visible Process-Area Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a defined moulding or extrusion zone follows the agreed observable rule for the current operating state.",
        methodologyStatus: "proposed",
      },
      {
        name: "Transfer-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible build-up at a fixed downstream transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Storage-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped storage or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift window",
    scope: "Selected moulding, transfer and storage areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map moulding, extrusion and storage areas",
      body: "Moulding transfers, extrusion lines and storage areas are mapped with their cameras, so operators ask about the moulding transfer area by name.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Review the moulding transfer shift by shift",
      body: "Ask Vision Copilot, “Show observations from the moulding transfer area during the last shift,” for transfer and staging observations in that window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See where downstream build-up recurs",
      body: "Ask, “Which covered extrusion or moulding areas had recurring build-up?” Repeat observations point to the downstream staging interface where material keeps collecting.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Check staging before changing material flow",
      body: "Ask, “What should the plant team review before changing the material flow?” The suggested step, such as reviewing staging capacity and handoff timing, goes to the extrusion-moulding lead with process records for the cause.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Compare zone and process observations",
      body: "Scores out of 100 summarise visible zone and process observations so plant operations can set the next review's priorities.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Test glare, reflective surfaces, repetitive machine motion and exposure to heat or chemicals. Hazardous locations may need additional equipment approval assessment under applicable hazardous-area schemes.",
    requiredInputs: [
      "Mapped hierarchy for pilot moulding, transfer and storage areas",
      "Camera suitability checks for glare, heat, chemicals and reflective surfaces",
      "Clear ownership for restricted-zone and accumulation review",
      "Hazardous-location equipment assessment where the installation requires it",
    ],
  },
  standards: {
    publicCopy:
      "Plastic-packaging EPR obligations sit with the regulated entity under the current CPCB framework, and hazardous locations follow PESO, IECEx or ATEX equipment schemes. Video supports process and access reviews next to those records and approvals.",
    frameworkIds: ["C17", "C5"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed accumulation duration",
      definition:
        "Confirmed relevant material build-up duration at selected downstream transfer points during comparable shifts, using an agreed review rubric.",
      sourceOfTruth: "Operator records and labelled samples",
    },
    {
      label: "Useful restricted-zone alerts",
      definition:
        "Confirmed relevant restricted machine-area alerts divided by reviewed alerts for the defined zones, using an agreed review rubric.",
      sourceOfTruth: "Operator review logs and labelled samples",
    },
    {
      label: "Known-event retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct moulding or transfer clip from a defined starting input such as time window and staging area.",
      sourceOfTruth: "Timed review exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Transfer build-up and restricted machine-area alerts, with Vision Copilot search by moulding or extrusion area.",
    },
    {
      solutionSlug: "vms",
      body: "Operational review across the agreed plant cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps critical process views recording so investigations retain usable footage.",
    },
  ],
  faqs: [
    {
      question: "What can video analytics monitor in a plastics plant?",
      answer:
        "Useful starting points are visible material build-up at downstream moulding and extrusion transfers, entry into restricted machine areas, and storage or staging spaces that should stay clear. Alerts reach plant operations with the location and clip, and known events can be retrieved by time window and area.",
    },
    {
      question: "What should be tested before installing cameras near moulding lines?",
      answer:
        "Test each view for glare, reflective surfaces, repetitive machine motion and exposure to heat or chemicals. Where an area is a hazardous location, the equipment approval required under the applicable hazardous-area scheme is assessed before hardware is chosen, and owners for zone and accumulation alerts are agreed.",
    },
    {
      question: "Can video verify polymer composition?",
      answer:
        "No. Polymer composition and product conformance are confirmed by material testing and process records, which video cannot replace. What cameras show is the visible flow around the line, such as build-up at a moulding transfer or entry into a restricted machine area, which helps operators find where to look in those records.",
    },
    {
      question: "Can this prove EPR compliance?",
      answer:
        "No. EPR compliance rests on the applicable CPCB registration, reporting and evidence requirements for your role, which are handled separately from video. Footage from the plant supports process and access reviews, but it does not generate EPR credits or replace the records the regulated entity must keep.",
    },
    {
      question: "Can it detect overheating?",
      answer:
        "No. Process temperature is measured by thermal or process instrumentation, which needs its own validation, and ordinary CCTV video cannot measure heat. What cameras can show is the visible scene around hot processes, such as material build-up at an extrusion transfer, so operators know where to check the instrument readings.",
    },
  ],
  limits:
    "Video covers visible build-up and zone entry. Resin composition, process temperature, emissions and extended producer responsibility (EPR) compliance come from material testing, instrumentation and Central Pollution Control Board (CPCB) reporting.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "cctv-camera-health-monitoring"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["manufacturing", "automotive", "textile", "oil-gas"],
  finalCta: {
    heading: "Ask Vision Copilot about your plastics plant.",
    body:
      "Start with one downstream transfer point and one restricted machine area.",
  },
  sources: [
    "README v2 §9.24",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C17/C5",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
