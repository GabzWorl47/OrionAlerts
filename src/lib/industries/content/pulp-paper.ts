import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const pulpPaperIndustryPage: IndustryPageRecord = {
  slug: "pulp-paper",
  name: "Pulp, Paper & Packaging",
  cardLabel: "Pulp & Paper",
  siteNoun: { one: "paper or packaging mill", many: "paper and packaging mills" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Pulp, Paper & Packaging",
    description:
      "AI video analytics for paper and packaging mills: roll-handling zone alerts, material build-up at transfer points and fast retrieval of loading events.",
    canonicalPath: "/industries/pulp-paper",
    image: "/Images/industries/pulp-paper-hero.webp",
  },
  hero: {
    eyebrow: "Pulp, Paper & Packaging",
    h1: "AI Video Analytics for Pulp, Paper & Packaging",
    lede:
      "Flag entry into roll-handling zones and material build-up at transfer points, and retrieve a loading-event clip when dispatch needs it. Ask Vision Copilot which converting zones keep accumulating material.",
    media: {
      kind: "image",
      src: "/Images/industries/pulp-paper-hero.webp",
      alt: "Paper machine carrying a wide sheet of paper over rollers in a mill, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Improve visibility where material flow and heavy handling meet.",
    paragraphs: [
      "Paper and packaging operations combine continuous processing with heavy rolls, pallets and vehicle movement. An obstruction near a transfer point or access to a controlled machine area may need prompt review. Camera observations work best where the view and event are stable, with product inspection and fibre traceability handled by their own systems.",
    ],
    buyers: [
      "Mill operations",
      "Converting and packaging managers",
      "EHS",
      "Dispatch teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Mill Site" },
      { label: "Building", example: "Converting Building" },
      { label: "Floor", example: "Production Level" },
      { label: "Zone", example: "Roll-Handling Zone" },
      { label: "Room", example: "Transfer Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected roll-transfer or converting area so questions about the roll-transfer area start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the converting supervisor inspect before the next run?",
      "Find observations from the roll-transfer area during the last shift.",
      "Which converting zones have recurring material accumulation?",
    ],
    exampleAnswer:
      "Visible accumulation recurs at a roll-transfer interface during handoff periods. Suggested next step: review transfer staging and the operating sequence with the converting supervisor, using production records for process context.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible accumulation recurs at a roll-transfer interface during handoff periods.",
    recommendation:
      "Review transfer staging and the operating sequence with the converting supervisor, using production records for process context.",
    decisionOwner: "Converting supervisor / mill operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring roll-handling interfaces and recurring transfer build-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered handling and converting areas only when the assessment basis is consistent; these scores are not paper quality or certified material provenance measures.",
    dimensions: [
      {
        name: "Roll-Handling Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a defined roll-handling area follows the agreed observable rule for the planned activity.",
        methodologyStatus: "proposed",
      },
      {
        name: "Converting-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible material build-up at a fixed transfer point stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Dispatch-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped dispatch or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift or run window",
    scope: "Selected roll-handling, converting and dispatch areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Name the roll-transfer and converting areas",
      body: "Roll-handling, converting and dispatch areas are mapped with their cameras, so the converting supervisor asks about the roll-transfer area directly.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Replay the roll-transfer area's last shift",
      body: "Ask Vision Copilot, “Find observations from the roll-transfer area during the last shift,” and review that area for the shift in question.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find converting zones that keep accumulating",
      body: "Ask, “Which converting zones have recurring material accumulation?” Repeat observations show where build-up returns during handoff periods.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Check staging before the next run",
      body: "Ask, “What should the converting supervisor inspect before the next run?” A suggested step, such as reviewing transfer staging and the operating sequence, comes with the observations behind it, and production records supply the process context.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score handling and converting areas",
      body: "Scores out of 100 compare covered roll-handling, converting and dispatch areas so mill operations can choose where to look first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Test vibration, dust, high-speed movement and the visual effect of large rolls. Scope the pilot to handling and flow events; web-defect, print-quality and dimensional inspection need dedicated inspection systems.",
    requiredInputs: [
      "Mapped hierarchy for pilot roll-handling, converting and dispatch areas",
      "Stable camera views validated against vibration, dust and large-roll occlusion",
      "Clear ownership for handling-zone and accumulation review",
      "Separation of product-inspection and fibre-traceability systems from this pilot",
    ],
  },
  standards: {
    publicCopy:
      "FSC chain-of-custody certification covers documented handling and claims for eligible forest-based material, and food-contact packaging has its own assessment. Mill video supports handling-zone and dispatch reviews alongside those records.",
    frameworkIds: ["C15"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed accumulation duration",
      definition:
        "Confirmed relevant material build-up duration at selected transfer points during comparable shifts, using an agreed review rubric.",
      sourceOfTruth: "Operator observations and labelled clips",
    },
    {
      label: "Useful handling-zone alerts",
      definition:
        "Confirmed relevant handling-zone entry alerts divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Operator review logs and labelled samples",
    },
    {
      label: "Time to retrieve a loading event",
      definition:
        "Time for an authorised reviewer to locate the correct dispatch or loading clip from a defined starting input such as time window and transfer area.",
      sourceOfTruth: "Dispatch records and timed retrieval exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Roll-handling zone and transfer build-up alerts, with Vision Copilot search by area and shift.",
    },
    {
      solutionSlug: "vms",
      body: "Dispatch and loading review across the agreed mill cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps mill camera views and recordings available so investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "What can AI video analytics monitor in a paper or packaging mill?",
      answer:
        "Good starting points are entry into defined roll-handling areas, visible material build-up at fixed transfer points, and dispatch or staging spaces that should stay clear. Alerts go to the converting supervisor and mill operations with the location and clip, and loading events can be retrieved quickly for review.",
    },
    {
      question: "How are roll-handling zones set up?",
      answer:
        "Each zone is drawn on a stable camera view of the roll-handling area and tied to the planned activity there. The pilot validates views against vibration, dust and large-roll occlusion, and confirms who reviews handling-zone and accumulation alerts before the rule set expands.",
    },
    {
      question: "Can CCTV verify FSC material?",
      answer:
        "No. FSC claims are verified through the applicable chain-of-custody system and its transaction records, which video cannot replace or certify. Mill cameras support handling and dispatch review, such as retrieving a loading event by time window and transfer area, alongside the documented material chain your certification relies on.",
    },
    {
      question: "Can it detect print defects?",
      answer:
        "No, not general CCTV. Print-defect and web-defect detection use purpose-designed inspection cameras, lighting and validation on the line, which is a separate system from site surveillance. This pilot stays with handling and flow events, such as entry into roll-handling zones and build-up at transfer points.",
    },
    {
      question: "Can it track every paper roll?",
      answer:
        "Not from video alone. Reliable roll identity comes from a supported label, scan or data method, and video then shows the movement around each roll, such as handling at a transfer interface or loading at dispatch. Linking a roll identifier to a clip would be a separate, verified integration with that data source.",
    },
  ],
  limits:
    "General CCTV covers handling, flow and dispatch events. Print and web defects, roll identity and Forest Stewardship Council (FSC) material claims need inspection systems, labels or scans, and chain-of-custody records.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "vms-vs-nvr"],
    glossary: ["video-analytics", "vms"],
    useCases: ["restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["manufacturing", "textile", "food-fmcg"],
  finalCta: {
    heading: "Ask Vision Copilot about your paper or packaging mill.",
    body:
      "Start with one roll-transfer interface and one dispatch area.",
  },
  sources: [
    "README v2 §9.22",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C15",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
