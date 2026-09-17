import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const telecomRemoteIndustryPage: IndustryPageRecord = {
  slug: "telecom-remote",
  name: "Telecom & Remote Sites",
  cardLabel: "Telecom",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about shelter events and remote maintenance coordination.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Telecom Site Video Analytics | OrionAlerts",
    description:
      "Explore telecom and remote sites with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/telecom-remote",
    ogTitle: "Telecom Site Video Analytics | OrionAlerts",
    ogDescription:
      "Explore telecom and remote sites with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/telecom.webp",
  },
  hero: {
    eyebrow: "Telecom & Remote Sites",
    h1: "Vision Copilot for Telecom and Remote Sites",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about shelter events and remote maintenance coordination. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/telecom.webp",
      alt: "Illustrative telecom tower and remote site photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Distinguish an unexplained entry from planned field work.",
    paragraphs: [
      "Telecom sites may have limited staffing and frequent maintenance visits. Remote operators need to know whether visible activity matches an authorised job before dispatching someone. Camera availability is part of that decision: a disconnected feed should never appear to confirm that a site is secure. Plan the response around actual access and connectivity conditions.",
      "A reference deployment covers the shelter entry, equipment zone and site perimeter, typically backhauled over cellular or satellite links whose uptime varies by site. Camera and connectivity health should be visible alongside the alert itself, so a disconnected feed is never mistaken for a secure, unattended site. Route entry alerts to field maintenance and the security operations centre, and where a work-order or ticketing system is available, align review timestamps with dispatched visits instead of guessing whether activity was authorised.",
    ],
    buyers: [
      "Tower companies",
      "Telecom operations",
      "Field maintenance",
      "Security teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Telecom Site" },
      { label: "Building", example: "Shelter Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Shelter Entry" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected shelter entry or equipment zone so questions about Shelter Entry 1 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations at Shelter Entry 1 overnight.",
      "Which covered sites show recurring equipment-area observations?",
      "Summarise the access and coverage issues for today's field review.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Recurring equipment-area observations are difficult to interpret alongside intermittent camera availability. Suggested next step: review camera connectivity and planned visit records before escalating access concerns or commissioning a hardware change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring equipment-area observations are difficult to interpret alongside intermittent camera availability.",
    recommendation:
      "Review camera connectivity and planned visit records before escalating access concerns or commissioning a hardware change.",
    decisionOwner: "Field operations / telecom security",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shelter events and remote maintenance coordination into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered access activity and usable observations only when the assessment basis is consistent; never infer telecom service quality or fuel quantity from these scores.",
    dimensions: [
      {
        name: "Shelter Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured shelter or compound access point follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment or battery zone is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Field Observation Review",
        family: "Review process",
        criterionSummary:
          "A valid observation has a documented human review within an agreed review window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable field-operations window",
    scope: "Selected telecom sites and shelter zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect shelter events and remote maintenance coordination to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations at Shelter Entry 1 overnight.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered sites show recurring equipment-area observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the access and coverage issues for today\'s field review.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered access activity and usable observations; no inference of telecom service quality or fuel quantity. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Shelter Access Practices, Equipment-Area Orderliness and Field Observation Review; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Recurring equipment-area observations are difficult to interpret alongside intermittent camera availability. Ask: “Summarise the access and coverage issues for today's field review.” Suggested recommendation: Review camera connectivity and planned visit records before escalating access concerns or commissioning a hardware change. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Assess intermittent links, power conditions, enclosure ratings and mounting security. Confirm recovery behaviour after outages. Keep surveillance-system health distinct from the health of the telecom network itself.`,
    requiredInputs: [
      "Mapped hierarchy for pilot shelters, compounds and equipment zones",
      "Agreed response owners for unexplained entry versus planned field work",
      "Connectivity and outage-recovery expectations for remote camera links",
      "Representative testing across maintenance visits, after-hours windows and intermittent links",
      "Camera and connectivity health status surfaced alongside alerts, so backhaul loss is never read as a secure site",
    ],
  },
  standards: {
    publicCopy:
      "TEC/MTCTE requirements apply to notified telecom equipment within the applicable scheme and phase. They are not a blanket AI-software certificate; verify the exact equipment and current requirements.",
    frameworkIds: ["C20"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Useful access events",
      definition:
        "Confirmed relevant shelter or compound access observations divided by reviewed alerts for the defined access points, using an agreed review rubric and visit schedule.",
      sourceOfTruth: "Work orders, controlled tests and supervisor review log",
    },
    {
      label: "Unavailable camera/recording hours",
      definition:
        "Hours when an expected camera or recording source was unavailable or not usable for the agreed assessment task during the pilot window.",
      sourceOfTruth: "Infrastructure logs and surveillance health records",
    },
    {
      label: "Time to verify a planned or unplanned visit",
      definition:
        "Time for an authorised reviewer to confirm whether visible activity matches a planned visit or requires escalation, from a defined starting input such as site and time window.",
      sourceOfTruth: "Work orders, timed verification exercises and infrastructure logs",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For telecom and remote sites, focus on location-aware search, recommendations and score-led review of shelter events and field observations.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for remote scene verification across agreed tower and shelter cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise surveillance coverage so intermittent links and recording faults are visible separately from telecom network health.`,
    },
  ],
  faqs: [
    {
      question: "Can CCTV measure diesel theft?",
      answer:
        "Video may supply context around a reported event. Fuel quantity and loss require appropriate measurements and records.",
    },
    {
      question: "Does camera health show telecom network health?",
      answer:
        "No. The monitored surveillance infrastructure and the telecom service are different systems.",
    },
    {
      question: "Will alerts work without connectivity?",
      answer:
        "Confirm the actual proposed local-processing and delivery behaviour through an outage test; do not assume it.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["utilities", "solar-renewable", "data-centres"],
  finalCta: {
    heading: "Ask Vision Copilot about your telecom and remote sites.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for telecom and remote sites.",
  },
  sources: [
    "README v2 §9.29",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C20",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
