import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const utilitiesIndustryPage: IndustryPageRecord = {
  slug: "utilities",
  name: "Utilities & Infrastructure",
  cardLabel: "Utilities",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about remote-site access and field-inspection priorities.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Utility Infrastructure Video Analytics | OrionAlerts",
    description:
      "Explore utility infrastructure with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/utilities",
    ogTitle: "Utility Infrastructure Video Analytics | OrionAlerts",
    ogDescription:
      "Explore utility infrastructure with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/.webp",
  },
  hero: {
    eyebrow: "Utilities & Infrastructure",
    h1: "Vision Copilot for Utility Infrastructure",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about remote-site access and field-inspection priorities. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/.webp",
      alt: "Illustrative utility infrastructure photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Verify a remote event before dispatching the right team.",
    paragraphs: [
      "Distributed utility assets can be difficult to inspect quickly. A boundary event may be routine maintenance, an animal or an unexplained entry. Useful remote video helps an operator establish context and prioritise a response. It does not show whether a circuit is isolated, equipment is energised or a process is safe.",
    ],
    buyers: [
      "Utility operations",
      "Security",
      "Substation and site managers",
      "OT engineering",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Utility Site" },
      { label: "Building", example: "Control Building" },
      { label: "Floor", example: "Operating Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Access Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment-zone entrance or access area so questions about the equipment-zone entrance start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations at the selected equipment-zone entrance this week.",
      "Which covered sites show repeated access observations outside planned review windows?",
      "Summarise the observations for today's field-team briefing.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated entry observations appear around an equipment-zone access point. Suggested next step: review the visit schedule, boundary arrangement and camera placement before deciding on a field inspection.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated entry observations appear around an equipment-zone access point.",
    recommendation:
      "Review the visit schedule, boundary arrangement and camera placement before deciding on a field inspection.",
    decisionOwner: "Utility operations / field team lead",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring remote-site access and field-inspection priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered utility locations and periods only when the assessment basis is consistent; these scores are never electrical isolation or installation-safety certification.",
    dimensions: [
      {
        name: "Site Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured perimeter or equipment-zone access point follows the agreed access or schedule rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment-area pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Field Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled remote observation at a defined site is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating or review window",
    scope: "Selected utility sites and equipment zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect remote-site access and field-inspection priorities to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations at the selected equipment-zone entrance this week.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered sites show repeated access observations outside planned review windows?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the observations for today\'s field-team briefing.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered utility locations and periods; never electrical isolation or installation-safety certification. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Site Access Practices, Equipment-Area Orderliness and Field Observation Review; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated entry observations appear around an equipment-zone access point. Ask: “Summarise the observations for today's field-team briefing.” Suggested recommendation: Review the visit schedule, boundary arrangement and camera placement before deciding on a field inspection. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Review power and connectivity resilience, access for maintenance and cyber/network boundaries. Confirm the actual behaviour during connectivity loss and the suitability of all equipment for the installation.`,
    requiredInputs: [
      "Mapped hierarchy for pilot utility sites and equipment zones",
      "Power and connectivity resilience plan for remote cameras",
      "Cyber and network boundary review with OT owners",
      "Confirmed behaviour during connectivity loss and equipment suitability checks",
    ],
  },
  standards: {
    publicCopy:
      "CEA safety regulations provide relevant electrical-safety context in India. Analytics does not replace electrical protection, permit systems or required inspections. Specialised hazardous sites may also require separate hazardous-area equipment assessment.",
    frameworkIds: ["C14", "C5"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Verified perimeter-event usefulness",
      definition:
        "Confirmed relevant perimeter or access events divided by reviewed alerts for the defined sites, using an agreed review rubric.",
      sourceOfTruth: "Work schedules and control-room review records",
    },
    {
      label: "Remote-view unavailable hours",
      definition:
        "Hours of required remote camera or recording unavailability for priority sites during agreed monitoring windows.",
      sourceOfTruth: "Device and connectivity logs",
    },
    {
      label: "Acknowledgement time for reviewed events",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed remote-site events.",
      sourceOfTruth: "Control-room acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For utilities, focus on location-aware search, recommendations and score-led review of remote zone events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for scene verification across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise distributed camera coverage so loss of remote visibility is visible to the maintenance team.`,
    },
  ],
  faqs: [
    {
      question: "Can video show that equipment is de-energised?",
      answer:
        "No. Electrical isolation must be confirmed through the approved procedures and instruments.",
    },
    {
      question: "Can camera events be linked to SCADA?",
      answer:
        "Only after a specific supported integration and its security boundaries are assessed.",
    },
    {
      question: "Can analytics replace patrols?",
      answer:
        "It can support prioritisation in covered areas. Staffing and inspection requirements need an independent operational assessment.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["solar-renewable", "telecom-remote", "oil-gas"],
  finalCta: {
    heading: "Ask Vision Copilot about your utility infrastructure.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for utility infrastructure.",
  },
  sources: [
    "README v2 §9.20",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C14/C5",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
