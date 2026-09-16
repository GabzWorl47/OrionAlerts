import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const ecommerceFulfilmentIndustryPage: IndustryPageRecord = {
  slug: "ecommerce-fulfilment",
  name: "E-commerce Fulfilment Centres",
  cardLabel: "E-commerce FC",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about parcel-transfer interruptions and investigation context.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Fulfilment Centre Video Analytics | OrionAlerts",
    description:
      "Explore fulfilment centres with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/ecommerce-fulfilment",
    ogTitle: "Fulfilment Centre Video Analytics | OrionAlerts",
    ogDescription:
      "Explore fulfilment centres with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "E-commerce Fulfilment Centres",
    h1: "Vision Copilot for Fulfilment Centres",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about parcel-transfer interruptions and investigation context. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative fulfilment-centre parcel handling photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Find the relevant handoff in a high-volume operation.",
    paragraphs: [
      "Fulfilment centres move goods through many stages, often with several operational systems involved. When a parcel is delayed or disputed, footage is useful only if the right location and time can be found. Focus on clear camera coverage and reliable correlation. Avoid promising item-level traceability from wide-angle surveillance alone.",
    ],
    buyers: [
      "FC operations",
      "Sortation managers",
      "Loss prevention",
      "EHS and WMS owners",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "FC Site" },
      { label: "Building", example: "Fulfilment Building" },
      { label: "Floor", example: "Processing Floor" },
      { label: "Zone", example: "Sortation Zone" },
      { label: "Room", example: "Transfer Point" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected transfer point or packing area so questions about Sortation Transfer 2 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations around Sortation Transfer 2 during yesterday's peak.",
      "Which covered packing or transfer areas had repeated build-up?",
      "Summarise the handoff issues for today's fulfilment review.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Visible build-up recurs at the same sortation transfer during peak processing. Suggested next step: review the local transfer and staging arrangement alongside WMS or line records where available.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Visible build-up recurs at the same sortation transfer during peak processing.",
    recommendation:
      "Review the local transfer and staging arrangement alongside WMS or line records where available.",
    decisionOwner: "FC operations / sortation lead",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
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
      title: "Bring the right location into the decision",
      body: "Connect parcel-transfer interruptions and investigation context to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations around Sortation Transfer 2 during yesterday\'s peak.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered packing or transfer areas had repeated build-up?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the handoff issues for today\'s fulfilment review.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered parcel-processing areas and periods, not order accuracy or delivery SLA scores. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Transfer-Area Flow, Packing-Area Orderliness and Shared-Route Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Visible build-up recurs at the same sortation transfer during peak processing. Ask: “Summarise the handoff issues for today's fulfilment review.” Suggested recommendation: Review the local transfer and staging arrangement alongside WMS or line records where available. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Pilot camera views at one packing station and one transfer point. Test peak flow, parcel occlusion and label readability. Confirm WMS/scan integration before including identifiers in the public demonstration.`,
    requiredInputs: [
      "Mapped hierarchy for pilot packing stations and transfer points",
      "Agreed response owners for accumulation, restricted-zone and route events",
      "Peak-flow testing including parcel occlusion and label readability",
      "Verified WMS/scan integration before public identifier demonstrations",
    ],
  },
  standards: {
    publicCopy:
      "Premises and safety considerations apply alongside privacy obligations for fulfilment monitoring. Product-specific storage rules depend on the goods handled. Do not claim a universal fulfilment-centre certificate or automatic chain of custody.",
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
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For fulfilment centres, focus on location-aware search, recommendations and score-led review of visible process events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for handoff investigation across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise recordings at priority packing and transfer stations.`,
    },
  ],
  faqs: [
    {
      question: "Can a parcel ID open the matching clip?",
      answer:
        "Only if the selected configuration supports a verified identifier and time/location integration.",
    },
    {
      question: "Can this detect every packing error?",
      answer:
        "General surveillance cannot establish every item or order detail. Dedicated inspection and order data may be necessary.",
    },
    {
      question: "What should be piloted first?",
      answer:
        "Choose one repeatable handoff with good visibility and an available ground-truth record, then test retrieval and event usefulness.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["logistics", "dark-stores", "quick-commerce"],
  finalCta: {
    heading: "Ask Vision Copilot about your fulfilment centres.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for fulfilment centres.",
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
