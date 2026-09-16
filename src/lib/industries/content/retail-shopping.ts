import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const retailShoppingIndustryPage: IndustryPageRecord = {
  slug: "retail-shopping",
  name: "Retail & Shopping Centres",
  cardLabel: "Retail",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about queues and service-area decisions.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Retail and Mall Video Analytics | OrionAlerts",
    description:
      "Explore retail and shopping centres with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/retail-shopping",
    ogTitle: "Retail and Mall Video Analytics | OrionAlerts",
    ogDescription:
      "Explore retail and shopping centres with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Retail & Shopping Centres",
    h1: "Vision Copilot for Retail and Shopping Centres",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about queues and service-area decisions. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative retail shopping-floor photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Turn a visible event into a proportionate action.",
    paragraphs: [
      "Retail teams balance customer service, stock protection and shared-space operations. Cameras can help show where queues develop or when a restricted area is entered. They should not label shoppers as thieves based on appearance or movement. Define neutral events and review them with the relevant transaction or operational context.",
    ],
    buyers: [
      "Retail operations",
      "Mall managers",
      "Loss prevention",
      "Facilities teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
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
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from the checkout area during yesterday's peak.",
      "Where did queue observations recur across comparable trading periods?",
      "What should the floor manager review before the next peak?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Queue observations repeatedly cluster around one checkout approach. Suggested next step: review queue layout and staffing arrangements with the floor manager, then examine comparable trading periods.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Queue observations repeatedly cluster around one checkout approach.",
    recommendation:
      "Review queue layout and staffing arrangements with the floor manager, then examine comparable trading periods.",
    decisionOwner: "Floor manager / retail operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring queues and service-area decisions into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare service areas and periods only when the assessment basis is consistent; these are not shopper-risk, criminal-intent or demographic scores.",
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
      title: "Bring the right location into the decision",
      body: "Connect queues and service-area decisions to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from the checkout area during yesterday\'s peak.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Where did queue observations recur across comparable trading periods?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the floor manager review before the next peak?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across service areas and periods; no shopper risk, criminal-intent or demographic scores. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Checkout Flow, Common-Route Readiness and Stockroom Access Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Queue observations repeatedly cluster around one checkout approach. Ask: “What should the floor manager review before the next peak?” Suggested recommendation: Review queue layout and staffing arrangements with the floor manager, then examine comparable trading periods. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test seasonal displays, reflections, children and groups in counting samples without creating individual profiles. Separate retailer and landlord access to shared-space footage.`,
    requiredInputs: [
      "Mapped hierarchy for pilot checkout, common routes and stockroom areas",
      "Neutral event definitions without shopper-intent labelling",
      "Separated retailer and landlord permissions for shared-space footage",
      "Counting validation samples that avoid individual profiling",
    ],
  },
  standards: {
    publicCopy:
      "Review premises and privacy requirements for retail monitoring. Food handling invokes applicable food-safety obligations where relevant. Payment-card compliance is not achieved through video analytics, and sensitive payment entry should not be unnecessarily recorded.",
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
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For retail and malls, focus on location-aware search, recommendations and score-led review of neutral customer-area events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for incident review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise store and mall footage availability so investigations retain usable recordings.`,
    },
  ],
  faqs: [
    {
      question: "Can AI identify shoplifters?",
      answer:
        "This scope does not infer criminal intent. Review specific observable events with appropriate evidence and human judgment.",
    },
    {
      question: "Can footage be linked to a receipt?",
      answer:
        "Only when a verified POS/time/location integration supports it.",
    },
    {
      question: "Are customer demographics required?",
      answer:
        "No. Aggregate occupancy and queue use cases do not require demographic profiling.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["dark-stores", "commercial-buildings", "hotels-hospitality"],
  finalCta: {
    heading: "Ask Vision Copilot about your retail and shopping centres.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for retail and shopping centres.",
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
