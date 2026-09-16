import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const bankingIndustryPage: IndustryPageRecord = {
  slug: "banking",
  name: "Banking & Financial Institutions",
  cardLabel: "Banking",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about branch-event review and regional follow-up.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Banking Video Analytics | OrionAlerts",
    description:
      "Explore bank branch networks with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/banking",
    ogTitle: "Banking Video Analytics | OrionAlerts",
    ogDescription:
      "Explore bank branch networks with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Banking & Financial Institutions",
    h1: "Vision Copilot for Bank Branch Networks",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about branch-event review and regional follow-up. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative bank branch exterior photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Review a physical event without inferring financial wrongdoing.",
    paragraphs: [
      "Branch networks need consistent surveillance availability and a clear way to investigate incidents across locations. Video can show movement or a visible condition, but it cannot establish fraud, identify a criminal or verify financial authorisation on its own. Focus on neutral event definitions and controlled access to footage. Different financial institutions may fall under different regulatory scopes.",
    ],
    buyers: [
      "Physical security",
      "Branch operations",
      "Risk and compliance",
      "IT",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Branch Site" },
      { label: "Building", example: "Branch Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Service Zone" },
      { label: "Room", example: "Entrance Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected branch lobby or service zone so questions about the selected branch lobby start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the selected branch lobby this week.",
      "Which covered branches had recurring after-hours observations?",
      "Summarise the physical events regional security should review today.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. After-hours observations recur at a branch entrance used for service visits. Suggested next step: review the service schedule and entry procedure with branch security; establish authorisation before further action.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "After-hours observations recur at a branch entrance used for service visits.",
    recommendation:
      "Review the service schedule and entry procedure with branch security; establish authorisation before further action.",
    decisionOwner: "Regional security / branch operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring branch-event review and regional follow-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered branch areas and equivalent periods only when the assessment basis is consistent; these scores are not fraud likelihood or customer-risk measures.",
    dimensions: [
      {
        name: "Branch Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined closed or restricted branch area follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped lobby or service pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Physical Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled physical observation at a defined branch area is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating or after-hours window",
    scope: "Selected branch lobbies and service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect branch-event review and regional follow-up to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the selected branch lobby this week.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered branches had recurring after-hours observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the physical events regional security should review today.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered branch areas and equivalent periods, not fraud likelihood or customer risk. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Branch Access Practices, Service-Area Readiness and Physical Observation Review; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: After-hours observations recur at a branch entrance used for service visits. Ask: “Summarise the physical events regional security should review today.” Suggested recommendation: Review the service schedule and entry procedure with branch security; establish authorisation before further action. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Avoid recording PIN entry, customer documents or sensitive screens unnecessarily. Confirm role controls, retention, export procedures and the bank's hosting and security requirements.`,
    requiredInputs: [
      "Mapped hierarchy for pilot branch lobbies and service zones",
      "Neutral physical-event definitions without fraud or intent labelling",
      "Role controls, retention and export procedures aligned to bank policy",
      "Camera placement that avoids unnecessary PIN, document or screen capture",
    ],
  },
  standards: {
    publicCopy:
      "RBI IT governance directions apply to specified regulated entities and controls; they are not a general product approval. Do not label OrionAlerts as RBI certified. Information-security and privacy frameworks also require institution-specific assessment.",
    frameworkIds: ["C18", "C11", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful after-hours events",
      definition:
        "Confirmed relevant after-hours branch events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Branch schedules and review exercises",
    },
    {
      label: "Critical recording availability by branch",
      definition:
        "Share of required recording minutes with usable footage for priority branch cameras during agreed monitoring windows.",
      sourceOfTruth: "Recorder logs by branch",
    },
    {
      label: "Authorised incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct branch clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed review exercises under authorised access",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For banking, focus on location-aware search, recommendations and score-led review of neutral physical events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for branch review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise network surveillance availability so regional teams can restore coverage promptly.`,
    },
  ],
  faqs: [
    {
      question: "Can video analytics detect banking fraud?",
      answer:
        "This scope concerns physical events. Fraud determination requires appropriate financial evidence and authorised investigation.",
    },
    {
      question: "Is OrionAlerts RBI approved?",
      answer:
        "No such approval is established by this research. Any specific approval claim requires direct evidence and scope.",
    },
    {
      question: "Can all branches use one retention period?",
      answer:
        "Follow the institution's applicable policy and obligations; do not assume a universal duration from this content.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["data-centres", "commercial-buildings", "government"],
  finalCta: {
    heading: "Ask Vision Copilot about your bank branch networks.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for bank branch networks.",
  },
  sources: [
    "README v2 §9.25",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C18/C11/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
