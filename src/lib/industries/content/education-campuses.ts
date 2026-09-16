import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const educationCampusesIndustryPage: IndustryPageRecord = {
  slug: "education-campuses",
  name: "Education & Campuses",
  cardLabel: "Education",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about arrival, reception and common-area safeguarding.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Campus Safety Video Analytics | OrionAlerts",
    description:
      "Explore education and campuses with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/education-campuses",
    ogTitle: "Campus Safety Video Analytics | OrionAlerts",
    ogDescription:
      "Explore education and campuses with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/education.webp",
  },
  hero: {
    eyebrow: "Education & Campuses",
    h1: "Vision Copilot for Education and Campuses",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about arrival, reception and common-area safeguarding. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/education.webp",
      alt: "Illustrative campus building photograph used for education industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Help staff respond while respecting the people on campus.",
    paragraphs: [
      "Arrival, dispersal and public events create changing activity around a campus. Staff need timely context without treating ordinary student behaviour as suspicious. Begin with entrances and boundaries, then assess any broader use against a specific safety purpose. Schools and universities have different populations and responsibilities; do not apply a single monitoring policy to both.",
    ],
    buyers: [
      "School administrators",
      "Campus security",
      "Safeguarding",
      "Facilities teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Campus" },
      { label: "Building", example: "School Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Reception Zone" },
      { label: "Room", example: "Admission Office" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected admission-office or reception zone so questions about the admission-office zone start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the admission-office zone this morning.",
      "Which covered common areas had repeated congestion during arrival?",
      "What should the administration team review before tomorrow's arrival period?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated arrival-period congestion appears around the admission-office approach. Suggested next step: review visitor guidance and arrival staffing with administration; assess the outcome during comparable arrival periods.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated arrival-period congestion appears around the admission-office approach.",
    recommendation:
      "Review visitor guidance and arrival staffing with administration; assess the outcome during comparable arrival periods.",
    decisionOwner: "Administration / campus security",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring arrival, reception and common-area safeguarding into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare common areas and operating periods only when the assessment basis is consistent; never score individual students or make safeguarding judgments from these scores alone.",
    dimensions: [
      {
        name: "Arrival-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or queue at a defined gate or waiting area stays within the agreed operational threshold during arrival periods.",
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
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured utility or maintenance service area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable arrival period",
    scope: "Selected entrances and common areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect arrival, reception and common-area safeguarding to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the admission-office zone this morning.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered common areas had repeated congestion during arrival?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the administration team review before tomorrow\'s arrival period?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across common areas and operating periods, never individual students or safeguarding judgments. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Arrival-Area Flow, Common-Route Readiness and Service-Area Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated arrival-period congestion appears around the admission-office approach. Ask: “What should the administration team review before tomorrow's arrival period?” Suggested recommendation: Review visitor guidance and arrival staffing with administration; assess the outcome during comparable arrival periods. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Involve safeguarding, administration and privacy owners. Exclude toilets, changing areas and other private spaces. Validate purpose, access, retention and any child-related requirements before expanding camera coverage.`,
    requiredInputs: [
      "Mapped hierarchy for pilot entrances, reception and common areas",
      "Safeguarding, administration and privacy ownership for the pilot",
      "Purpose, access and retention rules validated before expansion",
      "Exclusion of toilets, changing areas and other private spaces",
    ],
  },
  standards: {
    publicCopy:
      "CBSE school-safety provisions must be assessed for affiliated schools; universities should not inherit CBSE claims. Child-data and monitoring requirements need specific privacy review.",
    frameworkIds: ["C12", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Verified perimeter events",
      definition:
        "Confirmed relevant after-hours or boundary events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Authorised tests and staff observations",
    },
    {
      label: "Staff acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed campus events.",
      sourceOfTruth: "Alert delivery and staff acknowledgement records",
    },
    {
      label: "Count error during sampled arrival periods",
      definition:
        "Difference between camera-derived aggregate occupancy estimates and manual samples for the same arrival window.",
      sourceOfTruth: "Staff observations and camera-derived counts",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For campuses, focus on location-aware search, recommendations and score-led review of scoped boundary and common-area events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for authorised safeguarding review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise continuity of agreed campus views so investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Does the scope include facial-recognition attendance?",
      answer:
        "No. This blueprint focuses on observable safety events without biometric attendance or identity profiling.",
    },
    {
      question: "Can AI determine bullying?",
      answer:
        "Video alone cannot reliably establish intent or the full context. Safeguarding decisions require trained human review.",
    },
    {
      question: "Where should monitoring start?",
      answer:
        "With well-defined entrances and boundaries that have a documented safety purpose and an accountable response team.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["commercial-buildings", "sports-events", "government"],
  finalCta: {
    heading: "Ask Vision Copilot about your education and campuses.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for education and campuses.",
  },
  sources: [
    "README v2 §9.16",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C12/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
