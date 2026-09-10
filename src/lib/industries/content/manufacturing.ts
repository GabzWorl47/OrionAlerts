import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const manufacturingIndustryPage: IndustryPageRecord = {
  slug: "manufacturing",
  name: "Manufacturing",
  cardLabel: "Manufacturing",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about shift handovers, PPE observations and recurring material build-up.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Manufacturing | OrionAlerts",
    description:
      "Explore manufacturing operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/manufacturing",
    ogTitle: "AI Video Analytics for Manufacturing | OrionAlerts",
    ogDescription:
      "Explore manufacturing operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Manufacturing",
    h1: "Vision Copilot for Manufacturing Operations",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about shift handovers, PPE observations and recurring material build-up. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative factory floor photograph used for manufacturing industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "See the exceptions that routine rounds can miss.",
    paragraphs: [
      "A factory can have extensive CCTV coverage and still depend on someone noticing a problem at the right moment. Shift changes, shared vehicle routes and busy production areas make continuous manual observation difficult. Plant leaders need to know where an event happened, whether it needs intervention and which team owns the response. Focus video analytics on these decisions before expanding to more complex production analysis.",
    ],
    buyers: [
      "Plant heads",
      "EHS managers",
      "Production supervisors",
      "Security and IT",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Production Building" },
      { label: "Floor", example: "Shop Floor" },
      { label: "Zone", example: "Assembly Zone" },
      { label: "Room", example: "Workcell" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected location so questions about Assembly Zone start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from Assembly Zone during the last shift.",
      "Which covered production zones had recurring material build-up this week?",
      "What should the plant team review before the next shift?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Material build-up appears repeatedly around the same transfer point during shift handover. Suggested next step: review staging space and replenishment timing at that transfer point, then check the next comparable shift after the change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Material build-up appears repeatedly around the same transfer point during shift handover.",
    recommendation:
      "Review staging space and replenishment timing at that transfer point; check the next comparable shift after the change.",
    decisionOwner: "Plant / production supervisor",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shift handovers, PPE observations and recurring material build-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare production zones and shifts only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Observed Safety Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible PPE item meets the agreed criterion at an observable entry.",
        methodologyStatus: "proposed",
      },
      {
        name: "Production-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or buffer stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Work-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry follows the agreed observable zone or schedule rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift window",
    scope: "Selected production zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect shift handovers, PPE observations and recurring material build-up to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from Assembly Zone during the last shift.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered production zones had recurring material build-up this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the plant team review before the next shift?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across production zones and shifts, interpreted alongside PPE and material-flow observations. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Observed Safety Practices, Production-Area Flow and Work-Zone Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Material build-up appears repeatedly around the same transfer point during shift handover. Ask: “What should the plant team review before the next shift?” Suggested recommendation: Review staging space and replenishment timing at that transfer point; check the next comparable shift after the change. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Begin with stable camera views at production entries, crossings and one material-transfer area. Test each shift, including low light, occlusion and PPE variations. Agree who receives each alert and how camera outages will be handled.`,
    requiredInputs: [
      "Stable camera views at production entries and crossings",
      "Mapped hierarchy for the pilot production areas",
      "Defined alert and Copilot review owners",
      "Representative shift testing including low light and occlusion",
    ],
  },
  standards: {
    publicCopy:
      "Video observations can support internal safety reviews associated with an occupational health and safety programme. ISO 45001 certification concerns the organisation's management system; OrionAlerts does not certify the factory or replace its safety controls.",
    frameworkIds: ["C1"],
    reviewedAt: "2026-09-10",
  },
  metrics: [
    {
      label: "Reviewed PPE exceptions per 100 observable entries",
      definition:
        "Confirmed relevant PPE exceptions divided by sampled observable entries using a predefined review rubric.",
      sourceOfTruth: "Sampled entry footage and supervisor review log",
    },
    {
      label: "Median alert-to-acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered/available alert timestamp for reviewed events.",
      sourceOfTruth: "Alert delivery and acknowledgement records",
    },
    {
      label: "Unavailable camera/recording minutes per monitored shift",
      definition:
        "Usable recorded minutes compared with required recording minutes for the agreed cameras.",
      sourceOfTruth: "Device health and recording availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For manufacturing, focus on location-aware search, recommendations and score-led review of factory events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for shift-level incident review across production areas.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise production-area camera and recording coverage so investigations have usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can AI Vision calculate OEE from CCTV?",
      answer:
        "Video can provide context for visible interruptions. Reliable OEE needs defined availability, performance and quality inputs, normally from production systems. Treat that as a separate integration scope.",
    },
    {
      question: "Does PPE detection prove compliance?",
      answer:
        "It identifies selected visible conditions in the covered scene. It cannot confirm every item, correct fit, equipment condition or whether all legal and site requirements were met.",
    },
    {
      question: "Where should a pilot begin?",
      answer:
        "Choose one well-lit entrance, a clearly defined restricted area and an accountable response team. Expand only after representative shifts have been reviewed.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["automotive", "logistics", "cement"],
  finalCta: {
    heading: "Ask Vision Copilot about your manufacturing operations.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for manufacturing operations.",
  },
  sources: ["README v2 §9.1", "README v2 §§3.1–3.3", "README v2 §7", "framework C1"],
  review: {
    reviewedAt: "2026-09-10",
  },
};
