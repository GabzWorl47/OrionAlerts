import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const governmentIndustryPage: IndustryPageRecord = {
  slug: "government",
  name: "Government & Public Infrastructure",
  cardLabel: "Government",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about service-counter pressure and accountable facility review.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Public Infrastructure Video Analytics | OrionAlerts",
    description:
      "Explore public facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/government",
    ogTitle: "Public Infrastructure Video Analytics | OrionAlerts",
    ogDescription:
      "Explore public facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/government.jpeg",
  },
  hero: {
    eyebrow: "Government & Public Infrastructure",
    h1: "Vision Copilot for Public Facilities",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about service-counter pressure and accountable facility review. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/government.jpeg",
      alt: "Illustrative public administrative building photograph used for government industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Specify the operational need before selecting the technology.",
    paragraphs: [
      "Public buildings and infrastructure have different users, operators and procurement requirements. A department may need queue visibility or perimeter review without needing broad citywide surveillance. Define the facility, event, permitted use and response team first. Avoid vague claims about predicting crime or identifying suspicious citizens.",
    ],
    buyers: [
      "Departmental facilities and security",
      "Municipal operations",
      "Public-sector procurement",
      "IT",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Public Site" },
      { label: "Building", example: "Administrative Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Service Zone" },
      { label: "Room", example: "Counter Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected service-counter or common route so questions about the public service-counter area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the public service-counter area today.",
      "Which covered facilities show repeated common-route obstructions?",
      "Summarise the facility changes that should be considered by the responsible team.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated queue and obstruction observations occur around a shared service approach. Suggested next step: review queue guidance and temporary storage with the facility manager; keep service-entitlement decisions outside the analytics workflow.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated queue and obstruction observations occur around a shared service approach.",
    recommendation:
      "Review queue guidance and temporary storage with the facility manager; keep service-entitlement decisions outside the analytics workflow.",
    decisionOwner: "Facility manager / departmental operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring service-counter pressure and accountable facility review into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare public-facility operational areas only when the assessment basis is consistent; these scores are not citizen risk, eligibility or enforcement measures.",
    dimensions: [
      {
        name: "Service-Counter Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or occupancy at a defined public service counter stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Public-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped public pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined equipment or closed administrative area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable public-service operating window",
    scope: "Selected service counters, public routes and controlled areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect service-counter pressure and accountable facility review to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the public service-counter area today.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered facilities show repeated common-route obstructions?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the facility changes that should be considered by the responsible team.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across public-facility operational areas, not citizen risk, eligibility or enforcement scores. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Service-Counter Flow, Public-Route Readiness and Controlled-Area Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated queue and obstruction observations occur around a shared service approach. Ask: “Summarise the facility changes that should be considered by the responsible team.” Suggested recommendation: Review queue guidance and temporary storage with the facility manager; keep service-entitlement decisions outside the analytics workflow. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Create a procurement evidence checklist for the exact product versions and hardware. Confirm data governance, retention, network boundaries and which departments can access each view. Do not expose sensitive operational maps in public marketing.`,
    requiredInputs: [
      "Mapped hierarchy for pilot service counters, public routes and controlled areas",
      "Procurement evidence checklist for exact product versions and hardware",
      "Data governance, retention and departmental access rules",
      "Defined facility, event, permitted use and response team before expansion",
    ],
  },
  standards: {
    publicCopy:
      "STQC's CCTV/IoT scheme provides product assessment routes and certified-product information. Verify exact products and applicable procurement requirements; do not extend a camera certificate to an entire AI platform. Privacy obligations for public-facility monitoring also require specific review.",
    frameworkIds: ["C19", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed event usefulness",
      definition:
        "Confirmed relevant public-facility events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Labelled observations and authorised system logs",
    },
    {
      label: "Queue/count error",
      definition:
        "Difference between camera-derived queue or occupancy estimates and manual samples for the same service-counter window.",
      sourceOfTruth: "Manual samples and camera-derived counts",
    },
    {
      label: "Usable recording availability by facility",
      definition:
        "Share of required recording minutes with usable footage for priority cameras at each covered facility during agreed monitoring windows.",
      sourceOfTruth: "Authorised system and recording logs by facility",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For public facilities, focus on location-aware search, recommendations and score-led review of defined facility events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for authorised multi-site review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise camera-estate continuity so missing coverage is visible across facilities.`,
    },
  ],
  faqs: [
    {
      question: "Is the entire platform automatically STQC certified?",
      answer:
        "No. Verify the actual certificate, product/version and scope rather than relying on a logo or a component's approval.",
    },
    {
      question: "Does this predict criminal behaviour?",
      answer:
        "No. The proposed use cases concern observable events and human review.",
    },
    {
      question: "Can procurement requirements differ?",
      answer:
        "Yes. Review the specific tender, product category, jurisdiction and deployment scope.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["airports-ports-railways", "utilities", "sports-events"],
  finalCta: {
    heading: "Ask Vision Copilot about your public facilities.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for public facilities.",
  },
  sources: [
    "README v2 §9.27",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C19/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
