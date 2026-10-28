import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const ecommerceFulfilmentIndustryPage: IndustryPageRecord = {
  slug: "ecommerce-fulfilment",
  name: "E-commerce Fulfilment Centres",
  cardLabel: "E-commerce Fulfilment",
  siteNoun: { one: "fulfilment centre", many: "fulfilment centres" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Fulfilment Centres",
    description:
      "Fulfilment centre CCTV analytics: flag parcel build-up at packing and sortation transfers and retrieve the right handoff clip quickly for investigations.",
    canonicalPath: "/industries/ecommerce-fulfilment",
    image: "/Images/industries/ecommerce-fc.webp",
  },
  hero: {
    eyebrow: "E-commerce Fulfilment Centres",
    h1: "AI Video Analytics for Fulfilment Centres",
    lede: "Flag parcel build-up at packing stations and sortation transfers, and retrieve the right handoff clip quickly when a parcel is delayed or disputed. Alerts reach the sortation lead with the location and time.",
    media: {
      kind: "image",
      src: "/Images/industries/ecommerce-fc.webp",
      alt: "Workers in hi-vis vests at packing stations beside conveyors in a fulfilment centre",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Find the relevant handoff in a high-volume operation.",
    paragraphs: [
      "Fulfilment centres move goods through many stages, often across several operational systems. When a parcel is delayed or disputed, footage helps most when the right location and time can be found fast. Clear camera coverage at packing stations and transfer points, plus reliable correlation with warehouse management system (WMS) or scan records, makes each handoff easier to review.",
    ],
    buyers: [
      "Fulfilment centre operations",
      "Sortation managers",
      "Loss prevention",
      "EHS and warehouse-system owners",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Fulfilment Site" },
      { label: "Building", example: "Fulfilment Building" },
      { label: "Floor", example: "Processing Floor" },
      { label: "Zone", example: "Sortation Zone" },
      { label: "Room", example: "Transfer Point" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected transfer point or packing area so questions about Sortation Transfer 2 start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the handoff issues for today's fulfilment review.",
      "Find observations around Sortation Transfer 2 during yesterday's peak.",
      "Which covered packing or transfer areas had repeated build-up?",
    ],
    exampleAnswer:
      "Visible build-up recurs at the same sortation transfer during peak processing. Suggested next step: review the local transfer and staging arrangement alongside WMS or line records where available.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible build-up recurs at the same sortation transfer during peak processing.",
    recommendation:
      "Review the local transfer and staging arrangement alongside WMS or line records where available.",
    decisionOwner: "Fulfilment operations / sortation lead",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring parcel-transfer interruptions and investigation context into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered parcel-processing areas and periods only when the assessment basis is consistent; these are not order-accuracy or delivery-SLA scores.",
    dimensions: [
      {
        name: "Transfer-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible build-up or dwell at a known transfer point stays within the agreed operational threshold during peak processing.",
        methodologyStatus: "proposed",
      },
      {
        name: "Packing-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped packing or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Shared-Route Practices",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into designated equipment lanes or shared routes follows the agreed observable boundary rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable peak processing window",
    scope: "Selected packing and transfer areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Start from Sortation Transfer 2",
      body: "Cameras map to sortation zones, packing areas and transfer points, so an investigation opens on the transfer point it concerns.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search yesterday's peak at a transfer",
      body: "Ask Vision Copilot, “Find observations around Sortation Transfer 2 during yesterday's peak,” and review just that window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find transfers that keep backing up",
      body: "Ask which covered packing or transfer areas had repeated build-up to see where parcels accumulate during peak processing.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Review staging alongside WMS records",
      body: "Ask for a summary of today's handoff issues. A typical suggestion is to review the local transfer and staging arrangement alongside WMS or line records.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score parcel flow at each transfer",
      body: "0–100 scores compare covered packing and transfer areas across matching periods, kept separate from order-accuracy or delivery service-level measures.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Pilot camera views at one packing station and one transfer point, testing peak flow, parcel occlusion and label readability. Confirm the WMS or scan integration before parcel identifiers are used in reviews.",
    requiredInputs: [
      "Mapped hierarchy for pilot packing stations and transfer points",
      "Agreed response owners for accumulation, restricted-zone and route events",
      "Peak-flow testing including parcel occlusion and label readability",
      "Verified WMS/scan integration before parcel identifiers are used in reviews",
    ],
  },
  standards: {
    publicCopy:
      "Fulfilment monitoring sits alongside premises safety, occupational safety management and data-privacy duties, and product-specific storage rules follow the goods handled. Time-and-location retrieval of handoff clips gives the site's own investigations the right footage.",
    frameworkIds: ["C8", "C1", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Successful retrieval of known handoff events",
      definition:
        "Share of defined handoff-review requests for which an authorised reviewer located the correct clip from an agreed starting input such as time window and transfer point.",
      sourceOfTruth: "Timed investigation exercises and operator review",
    },
    {
      label: "Visible accumulation duration",
      definition:
        "Confirmed relevant build-up duration at selected transfer points during comparable peaks, using an agreed review rubric.",
      sourceOfTruth: "Sampled footage and operator review",
    },
    {
      label: "Reviewed alert usefulness",
      definition:
        "Confirmed relevant alerts divided by reviewed alerts for the defined zones, using an agreed review rubric.",
      sourceOfTruth: "Sampled footage and operator review log",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of build-up and handoff events at packing and sortation.",
    },
    {
      solutionSlug: "vms",
      body: "Handoff investigation across the agreed cameras, with live and recorded review.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps priority packing and transfer-station cameras recording.",
    },
  ],
  faqs: [
    {
      question: "What can video analytics flag in a fulfilment centre?",
      answer:
        "It flags visible parcel build-up at packing stations and sortation transfers, entry into configured restricted zones and entry into designated equipment lanes. Each alert carries the camera, location and time, so the sortation lead can act during the peak and investigators can retrieve the handoff clip later.",
    },
    {
      question: "How do teams find the right clip when a parcel is disputed?",
      answer:
        "Start from the transfer point and time window. Each camera is mapped to its sortation zone or packing area, so an authorised reviewer opens the right view directly. With a verified WMS or scan integration, parcel identifiers can narrow the search further.",
    },
    {
      question: "Can a parcel ID open the matching clip?",
      answer:
        "Only with a verified integration: if your WMS or scan system can supply a verified parcel identifier with a time and location, that record can point a reviewer to the matching transfer-point clip. The integration is scoped and tested before parcel identifiers are used in reviews; until then, search starts from the transfer point and time window.",
    },
    {
      question: "Can this detect every packing error?",
      answer:
        "No. Wide-angle surveillance shows the visible process events around each packing station, such as build-up, handoffs and entry into restricted zones. Item- and order-level checks come from dedicated inspection and order data, which teams review alongside the footage when a packing error is investigated.",
    },
    {
      question: "What should be piloted first?",
      answer:
        "Choose one repeatable handoff with good visibility and an available ground-truth record, such as one packing station and one sortation transfer. Then test two things: how quickly an authorised reviewer retrieves the right clip for a known handoff, and what share of build-up alerts the sortation lead confirms as useful.",
    },
  ],
  limits: "Wide-angle surveillance shows process events rather than item-level detail. Parcel-ID search depends on a verified WMS or scan integration, and scores describe observed flow, not order accuracy or delivery service levels.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "vms-vs-nvr"],
    glossary: ["vms", "video-analytics"],
    useCases: ["restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["logistics", "dark-stores", "quick-commerce"],
  finalCta: {
    heading: "Ask Vision Copilot about your fulfilment centre.",
    body: "Pick one packing station and one transfer point, and test how quickly a disputed handoff can be found.",
  },
  sources: [
    "README v2 §9.11",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C1/C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
