import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const constructionIndustryPage: IndustryPageRecord = {
  slug: "construction",
  name: "Construction Sites",
  cardLabel: "Construction",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about changing routes and supervision across project areas.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Construction Site Video Analytics | OrionAlerts",
    description:
      "Explore construction projects with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/construction",
    ogTitle: "Construction Site Video Analytics | OrionAlerts",
    ogDescription:
      "Explore construction projects with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/construction.jpeg",
  },
  hero: {
    eyebrow: "Construction Sites",
    h1: "Vision Copilot for Construction Projects",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about changing routes and supervision across project areas. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/construction.jpeg",
      alt: "Illustrative construction site photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Update the monitoring plan as the work changes.",
    paragraphs: [
      "Temporary routes, equipment movement and changing work areas make construction monitoring different from a fixed factory. A rule that was useful last month may now cover a different activity. Vehicle and struck-by hazards are established construction concerns. Keep cameras, zone definitions and response responsibilities aligned with the current site plan.",
    ],
    buyers: [
      "Project managers",
      "Contractors",
      "EHS",
      "Site security",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Project Site" },
      { label: "Building", example: "Building" },
      { label: "Floor", example: "Working Level" },
      { label: "Zone", example: "Work Zone" },
      { label: "Room", example: "Access Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment-access or work zone so questions about the current equipment-access zone start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the current equipment-access zone today.",
      "Which covered work zones have recurring entry observations?",
      "What should the supervisor review after this week's layout change?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated zone-entry observations appear after an access route changes. Suggested next step: review the current route, boundary definition and camera mapping with the supervisor before treating the pattern as a new behavioural issue.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated zone-entry observations appear after an access route changes.",
    recommendation:
      "Review the current route, boundary definition and camera mapping with the supervisor before treating the pattern as a new behavioural issue.",
    decisionOwner: "Site supervisor / EHS",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring changing routes and supervision across project areas into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare zones under the same layout version only when the assessment basis is consistent; avoid direct comparison after unrecorded site changes.",
    dimensions: [
      {
        name: "Visible PPE Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible PPE item meets the agreed criterion at an observable stable entry during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Work-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured ground-level equipment or lifting zone follows the agreed observable rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Shared-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped shared site crossing or temporary route is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable period under the same layout version",
    scope: "Selected work zones and access areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric, scope and layout version",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect changing routes and supervision across project areas to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the current equipment-access zone today.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered work zones have recurring entry observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the supervisor review after this week\'s layout change?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across zones under the same layout version; avoid direct comparison after unrecorded site changes. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Visible PPE Practices, Work-Zone Control and Shared-Route Readiness; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated zone-entry observations appear after an access route changes. Ask: “What should the supervisor review after this week's layout change?” Suggested recommendation: Review the current route, boundary definition and camera mapping with the supervisor before treating the pattern as a new behavioural issue. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Revalidate zones after each material layout change. Plan power, network access, mounting and temporary-camera maintenance. Test dust, weather, changing heights and occlusion.`,
    requiredInputs: [
      "Mapped hierarchy aligned to the current site plan",
      "Zone revalidation after each material layout change",
      "Power, network, mounting and temporary-camera maintenance plan",
      "Representative testing across dust, weather, height changes and occlusion",
    ],
  },
  standards: {
    publicCopy:
      "Review project-specific worker-safety, premises and fire requirements with the responsible contractor and local authority. Occupational health and safety management context and premises/fire planning provide supporting boundaries; this page does not establish a complete state-specific statutory checklist.",
    frameworkIds: ["C1", "C8"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed PPE observations per observable entry",
      definition:
        "Confirmed relevant PPE observations divided by sampled observable entries at stable entry points, using an agreed review rubric.",
      sourceOfTruth: "Labelled samples and supervisor review logs",
    },
    {
      label: "Valid zone alerts after layout changes",
      definition:
        "Share of reviewed zone alerts that remain relevant after the current layout version is confirmed against the site plan.",
      sourceOfTruth: "Current site plan and supervisor logs",
    },
    {
      label: "Time to acknowledge reviewed events",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed construction events.",
      sourceOfTruth: "Supervisor acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For construction, focus on location-aware search, recommendations and score-led review of defined site events under the current layout.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for incident review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise temporary camera availability so coverage gaps are visible as the site changes.`,
    },
  ],
  faqs: [
    {
      question: "Can a camera prove a harness is correctly attached?",
      answer:
        "General CCTV cannot reliably verify every attachment and safety condition. Use the required physical inspection and supervision.",
    },
    {
      question: "How often should zones be updated?",
      answer:
        "Whenever the monitored layout or work activity changes materially, followed by a validation check.",
    },
    {
      question: "Can footage prove structural safety?",
      answer:
        "No. Structural assessment requires the appropriate engineering methods and authorised professionals.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["cement", "manufacturing", "residential"],
  finalCta: {
    heading: "Ask Vision Copilot about your construction projects.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for construction projects.",
  },
  sources: [
    "README v2 §9.21",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C1/C8",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
