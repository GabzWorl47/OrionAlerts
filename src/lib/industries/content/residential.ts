import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const residentialIndustryPage: IndustryPageRecord = {
  slug: "residential",
  name: "Residential Communities & Townships",
  cardLabel: "Residential",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about shared-space events and property-management priorities.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Residential Community Video Analytics | OrionAlerts",
    description:
      "Explore residential communities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/residential",
    ogTitle: "Residential Community Video Analytics | OrionAlerts",
    ogDescription:
      "Explore residential communities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Residential Communities & Townships",
    h1: "Vision Copilot for Residential Communities",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about shared-space events and property-management priorities. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative residential community photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Improve common-area awareness without monitoring private life.",
    paragraphs: [
      "Residential communities include residents, visitors, staff, deliveries and children using shared spaces. Security needs a clear reason to review an event and a proportionate way to respond. Focus on perimeter and facility conditions rather than tracking individual routines. The monitoring policy should explain who can access footage and how complaints or incidents are handled.",
    ],
    buyers: [
      "Housing societies",
      "Resident associations",
      "Property managers",
      "Security supervisors",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Community Site" },
      { label: "Building", example: "Residential Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Common Zone" },
      { label: "Room", example: "Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected common lobby or entrance so questions about Building 2's common lobby start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from Building 2's common lobby this week.",
      "Which covered entrances had repeated congestion?",
      "What should the property team review before the evening peak?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Congestion repeatedly appears where deliveries and resident entry share a common approach. Suggested next step: review delivery staging and visitor guidance with property management while preserving appropriate resident access.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion repeatedly appears where deliveries and resident entry share a common approach.",
    recommendation:
      "Review delivery staging and visitor guidance with property management while preserving appropriate resident access.",
    decisionOwner: "Property management / security supervisor",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shared-space events and property-management priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare common areas and periods only when the assessment basis is consistent; never score resident behaviour or visitor trustworthiness.",
    dimensions: [
      {
        name: "Gate-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible vehicle or entry presence around a designated gate lane stays within the agreed operational threshold.",
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
          "Reviewed entry into a plant room or service area follows the community's agreed access policy for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable evening or operating peak",
    scope: "Selected gates, lobbies and common routes with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect shared-space events and property-management priorities to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from Building 2\'s common lobby this week.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered entrances had repeated congestion?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the property team review before the evening peak?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across common areas and periods, never resident behaviour or visitor trustworthiness. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Gate-Area Flow, Common-Route Readiness and Service-Area Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Congestion repeatedly appears where deliveries and resident entry share a common approach. Ask: “What should the property team review before the evening peak?” Suggested recommendation: Review delivery staging and visitor guidance with property management while preserving appropriate resident access. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Avoid views into homes, balconies or other private spaces. Document purpose, notices, retention and access. Do not offer unrestricted live feeds to all residents.`,
    requiredInputs: [
      "Mapped hierarchy for pilot gates, lobbies and common routes",
      "Camera placement that avoids homes, balconies and private spaces",
      "Documented purpose, notices, retention and access policy",
      "Authorised review controls instead of unrestricted resident live feeds",
    ],
  },
  standards: {
    publicCopy:
      "Apply the site's premises and privacy requirements for community monitoring. Video does not replace fire approvals or the community's security procedures, and there is no universal society-specific AI certificate established here.",
    frameworkIds: ["C8", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful perimeter events",
      definition:
        "Confirmed relevant perimeter or boundary events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Security logs and reviewed alert samples",
    },
    {
      label: "Reviewed gate congestion duration",
      definition:
        "Confirmed relevant vehicle or entry presence duration at selected gate lanes during comparable peaks, using an agreed review rubric.",
      sourceOfTruth: "Manual samples and security review logs",
    },
    {
      label: "Authorised incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed retrieval exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For residential communities, focus on location-aware search, recommendations and score-led review of defined community events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for controlled review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise common-area camera continuity so missing coverage is recognised.`,
    },
  ],
  faqs: [
    {
      question: "Can every resident view all cameras?",
      answer:
        "Access should be limited by purpose and authorisation, with required controls verified in the selected setup.",
    },
    {
      question: "Does this recognise every visitor?",
      answer:
        "No. Identity and authorisation are separate functions requiring a specific supported scope.",
    },
    {
      question: "Can cameras watch inside homes?",
      answer:
        "That is outside this blueprint. Position common-area cameras to avoid unnecessary intrusion into private spaces.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["commercial-buildings", "hotels-hospitality", "construction"],
  finalCta: {
    heading: "Ask Vision Copilot about your residential communities.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for residential communities.",
  },
  sources: [
    "README v2 §9.26",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
