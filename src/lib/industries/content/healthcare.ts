import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const healthcareIndustryPage: IndustryPageRecord = {
  slug: "healthcare",
  name: "Healthcare & Hospitals",
  cardLabel: "Healthcare",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about non-clinical common-area review and facilities priorities.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Hospital Video Analytics | OrionAlerts",
    description:
      "Explore hospital operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/healthcare",
    ogTitle: "Hospital Video Analytics | OrionAlerts",
    ogDescription:
      "Explore hospital operations with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Healthcare & Hospitals",
    h1: "Vision Copilot for Hospital Operations",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about non-clinical common-area review and facilities priorities. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative hospital common-area photograph used for healthcare industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Give the right team context without expanding monitoring unnecessarily.",
    paragraphs: [
      "Hospitals combine public access, urgent activity and sensitive care. Security and facilities teams may need to inspect congestion or an entry event, but patient observation requires a much more specific purpose and validation. Begin with public interfaces and controlled service zones. Do not position general CCTV analytics as a clinical monitoring device.",
    ],
    buyers: [
      "Hospital administration",
      "Security",
      "Facilities",
      "Nursing leadership and privacy owners",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Hospital Site" },
      { label: "Building", example: "Hospital Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Public Zone" },
      { label: "Room", example: "Waiting Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected public waiting area or non-clinical route so questions about the public waiting area start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the public waiting area this afternoon.",
      "Which covered non-clinical routes had recurring obstruction observations?",
      "Summarise today's facilities issues without making clinical recommendations.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Recurring objects are observed in a designated non-clinical access route. Suggested next step: ask facilities to review equipment staging and route clearance; clinical priorities remain with hospital staff.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring objects are observed in a designated non-clinical access route.",
    recommendation:
      "Ask facilities to review equipment staging and route clearance; clinical priorities remain with hospital staff.",
    decisionOwner: "Facilities / hospital security",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring non-clinical common-area review and facilities priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered non-clinical areas only when the assessment basis is consistent; these scores are not patient health, clinical urgency or treatment-quality measures.",
    dimensions: [
      {
        name: "Public-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or queue in an agreed public waiting or entrance area stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Non-Clinical Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped non-clinical access route is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined utility or storage service area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating window",
    scope: "Selected public and non-clinical service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect non-clinical common-area review and facilities priorities to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the public waiting area this afternoon.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered non-clinical routes had recurring obstruction observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise today\'s facilities issues without making clinical recommendations.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered non-clinical areas, not patient health, clinical urgency or treatment quality. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Public-Area Flow, Non-Clinical Route Readiness and Service-Area Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Recurring objects are observed in a designated non-clinical access route. Ask: “Summarise today's facilities issues without making clinical recommendations.” Suggested recommendation: Ask facilities to review equipment staging and route clearance; clinical priorities remain with hospital staff. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Agree excluded spaces and access permissions with hospital leadership. Avoid treatment-room, ward or bedside expansion without a separate purpose and assessment. Confirm incident export and retention controls before sensitive footage is used.`,
    requiredInputs: [
      "Mapped hierarchy for pilot public and non-clinical service areas",
      "Agreed excluded spaces and access permissions with hospital leadership",
      "Incident export and retention controls before sensitive footage use",
      "Clear ownership separating facilities/security review from clinical care",
    ],
  },
  standards: {
    publicCopy:
      "NABH accreditation evaluates the healthcare organisation under applicable programme standards. Video may support selected reviews but does not confer accreditation or validate clinical performance. Privacy obligations for hospital monitoring also require specific review.",
    frameworkIds: ["C13", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed access/pathway events",
      definition:
        "Confirmed relevant access or pathway events divided by reviewed alerts for the defined non-clinical areas, using an agreed review rubric.",
      sourceOfTruth: "Controlled tests and hospital review records",
    },
    {
      label: "Non-clinical response acknowledgement",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed non-clinical facilities or security events.",
      sourceOfTruth: "Alert delivery and acknowledgement records",
    },
    {
      label: "Incident retrieval time under authorised access",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and waiting area.",
      sourceOfTruth: "Timed investigation exercises under authorised access",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For hospitals, focus on location-aware search, recommendations and score-led review of non-clinical events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for authorised security review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise selected hospital camera coverage so authorised investigations retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Can this replace a patient fall alarm?",
      answer:
        "Not under this scope. A clinical or patient-monitoring use requires specifically validated capabilities and a separate assessment.",
    },
    {
      question: "Does NABH require OrionAlerts?",
      answer:
        "No. Accreditation requirements do not constitute endorsement of this product.",
    },
    {
      question: "Can all hospital staff view footage?",
      answer:
        "Access should follow purpose and authorisation. Verify the needed technical permission controls before deployment.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["pharma", "commercial-buildings", "education-campuses"],
  finalCta: {
    heading: "Ask Vision Copilot about your hospital operations.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for hospital operations.",
  },
  sources: [
    "README v2 §9.17",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C13/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
