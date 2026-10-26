import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const retailShoppingIndustryPage: IndustryPageRecord = {
  slug: "retail-shopping",
  name: "Retail & Shopping Centres",
  cardLabel: "Retail",
  siteNoun: { one: "store or mall", many: "stores and malls" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Retail Stores & Malls",
    description:
      "AI video analytics for retail stores and malls: checkout queue observations, restricted-area entry and fast incident retrieval, without profiling shoppers.",
    canonicalPath: "/industries/retail-shopping",
    image: "/Images/industries/retail-shopping-hero.webp",
  },
  hero: {
    eyebrow: "Retail & Shopping Centres",
    h1: "AI Video Analytics for Retail Stores & Malls",
    lede: "Estimate checkout queues, flag entry to stockrooms and restricted areas, and find the right incident clip fast across stores and malls, using neutral event definitions instead of shopper profiling.",
    media: {
      kind: "image",
      src: "/Images/industries/retail-shopping-hero.webp",
      alt: "Blurred store aisle with shelves of packaged goods, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Turn a visible event into a proportionate action.",
    paragraphs: [
      "Retail teams balance customer service, stock protection and shared-space operations. Cameras show where queues develop and when a restricted area is entered, and each event is defined neutrally and reviewed with the relevant transaction or operational context.",
    ],
    buyers: [
      "Retail operations",
      "Mall managers",
      "Loss prevention",
      "Facilities teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Retail Site" },
      { label: "Building", example: "Shopping Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Service Zone" },
      { label: "Room", example: "Checkout Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected checkout area or stockroom doorway so questions about the checkout area start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the floor manager review before the next peak?",
      "Find observations from the checkout area during yesterday's peak.",
      "Where did queue observations recur across comparable trading periods?",
    ],
    exampleAnswer:
      "Queue observations repeatedly cluster around one checkout approach. Suggested next step: review queue layout and staffing arrangements with the floor manager, then examine comparable trading periods.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Queue observations repeatedly cluster around one checkout approach.",
    recommendation:
      "Review queue layout and staffing arrangements with the floor manager, then examine comparable trading periods.",
    decisionOwner: "Floor manager / retail operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring checkout queues and stockroom access into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare service areas and periods only when the assessment basis is consistent; these are not shopper-risk, criminal-intent or demographic scores.",
    dimensions: [
      {
        name: "Checkout Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or occupancy at a defined checkout area stays within the agreed operational threshold during peak windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Common-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Stockroom Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a controlled stockroom or back-of-house zone follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable trading peak",
    scope: "Selected checkout, common routes and stockroom areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map checkout areas and stockroom doors",
      body: "Cameras are mapped to each store's service zones, checkout areas and stockroom doorways, so a question about the checkout area goes to the right views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Replay yesterday's checkout peak",
      body: "Ask Vision Copilot, “Find observations from the checkout area during yesterday's peak,” to review how that peak built up.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which checkouts queue repeatedly",
      body: "Ask, “Where did queue observations recur across comparable trading periods?” to compare the same checkout approaches week to week.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Plan for the next trading peak",
      body: "Ask, “What should the floor manager review before the next peak?” Suggestions such as a queue-layout or staffing review come with their observations for the floor manager to decide.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise checkout, route and stockroom reviews",
      body: "Scores out of 100 for checkout flow, common-route readiness and stockroom access practices show which store areas need attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Test seasonal displays, reflections, children and groups in counting samples, using aggregate counts only. Give retailers and landlords separate access to shared-space footage.",
    requiredInputs: [
      "Mapped hierarchy for pilot checkout, common routes and stockroom areas",
      "Neutral event definitions without shopper-intent labelling",
      "Separated retailer and landlord permissions for shared-space footage",
      "Counting validation samples that avoid individual profiling",
    ],
  },
  standards: {
    publicCopy:
      "Retail monitoring follows the site's premises and privacy requirements, plus food-safety obligations where food is handled. Cameras are placed to keep payment-card entry out of view, and card compliance stays with your payment systems.",
    frameworkIds: ["C8", "C9", "C7"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Queue/count error",
      definition:
        "Difference between camera-derived queue or occupancy estimates and manual samples for the same trading window.",
      sourceOfTruth: "Manual counts and camera-derived estimates",
    },
    {
      label: "Service-response acknowledgement",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed service-area events.",
      sourceOfTruth: "Staffing records and alert acknowledgement logs",
    },
    {
      label: "Known-incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct checkout or stockroom clip from a defined starting input such as time window and area.",
      sourceOfTruth: "Controlled review exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of checkout queues, route conditions and stockroom entry.",
    },
    {
      solutionSlug: "vms",
      body: "Incident review across agreed store and mall cameras, with separate retailer and landlord access.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps store and mall recordings available, so investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "Can AI video analytics alert on checkout queues?",
      answer:
        "Yes. OrionAlerts estimates queue length at checkout approaches from existing cameras and can alert the floor manager on the dashboard, mobile app and email when an agreed threshold is passed. Repeated queue observations across comparable trading periods show which checkout needs a layout or staffing review, and pilots check estimates against manual counts.",
    },
    {
      question: "Can OrionAlerts flag after-hours stockroom entry?",
      answer:
        "Yes. Entry to a stockroom or other restricted stock area outside the agreed schedule is flagged with the store, camera and clip for staff to review. Reviewers compare it with staffing and POS records, and the event stays neutral: it records what happened at the door, without labelling the person.",
    },
    {
      question: "How do malls share CCTV between the landlord and retailers?",
      answer:
        "Shared-space footage is set up with separate permissions for the retailer and the landlord, so each reviews the areas it is responsible for. Role-based access gives operators, managers and auditors the right scope, and an authorised reviewer can retrieve a checkout or stockroom clip from a time window and area.",
    },
    {
      question: "Can AI identify shoplifters?",
      answer:
        "No. OrionAlerts flags specific observable events, such as entry to a restricted stock area, for staff to review with transaction records and human judgement. It does not label people as shoplifters or infer criminal intent from appearance or movement, and every event is defined neutrally before it is used in a store review.",
    },
    {
      question: "Can footage be linked to a receipt?",
      answer:
        "Only with a verified integration: linking footage to a receipt needs a verified POS, time and location integration, scoped as a separate project. Until then, staff find the clip by checkout area and time window and compare it with the POS record themselves, and cameras stay positioned away from payment-card entry.",
    },
    {
      question: "Are customer demographics required?",
      answer:
        "No. Queue and occupancy use cases work on aggregate counts, so no demographic profiling is needed. Counting validation uses manual samples of the same trading window, including children and groups, and avoids profiling individual shoppers. Events stay neutral, such as a queue building at a checkout approach.",
    },
  ],
  limits:
    "OrionAlerts records neutral events for staff review; it does not label shoppers, profile demographics or score criminal intent. Receipt matching needs a verified point-of-sale (POS) integration, and payment-card compliance stays with your payment systems.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem", "why-traditional-cctv-monitoring-is-no-longer-enough"],
    glossary: ["video-analytics", "vms"],
    useCases: ["crowd-detection", "unauthorized-area-entry"],
  },
  relatedIndustrySlugs: ["dark-stores", "quick-commerce", "banking", "hotels-hospitality"],
  finalCta: {
    heading: "Ask Vision Copilot about your store or mall.",
    body: "See checkout queues, stockroom entry and incident clips for every store and mall in one place.",
  },
  sources: [
    "README v2 §9.18",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C7/C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
