import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const airportsPortsRailwaysIndustryPage: IndustryPageRecord = {
  slug: "airports-ports-railways",
  name: "Airports, Ports & Railways",
  cardLabel: "Airports & Ports",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about transport-specific access and passenger-area review.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Transport Hub Video Analytics | OrionAlerts",
    description:
      "Explore transport hubs with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/airports-ports-railways",
    ogTitle: "Transport Hub Video Analytics | OrionAlerts",
    ogDescription:
      "Explore transport hubs with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/airports-ports.webp",
  },
  hero: {
    eyebrow: "Airports, Ports & Railways",
    h1: "Vision Copilot for Transport Hubs",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about transport-specific access and passenger-area review. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/airports-ports.webp",
      alt: "Illustrative transport hub photograph used for airport, port and railway industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "One video platform, distinct transport responsibilities.",
    paragraphs: [
      "Airports need to separate public and controlled operational areas. Ports combine waterside access, cargo activity and vehicle movement. Railway stations face changing passenger flows and restricted operational spaces. These environments share a need for scene verification, but their security plans, authorisations and response procedures differ. Configure each deployment around its operator's actual duties.",
    ],
    buyers: [
      "Transport security",
      "Terminal operations",
      "Infrastructure operators",
      "Control rooms",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Facility Site" },
      { label: "Building", example: "Terminal Building" },
      { label: "Floor", example: "Concourse Level" },
      { label: "Zone", example: "Access Zone" },
      { label: "Room", example: "Entry Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected terminal entrance or access zone so questions about the selected terminal entrance start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations from the selected terminal entrance this morning.",
      "Which covered concourse areas show recurring congestion?",
      "Summarise the observations for the terminal operations briefing.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Congestion observations recur at one passenger interface during a particular arrival window. Suggested next step: review staffing and passenger guidance with the facility operator under its approved plan.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion observations recur at one passenger interface during a particular arrival window.",
    recommendation:
      "Review staffing and passenger guidance with the facility operator under its approved plan.",
    decisionOwner: "Terminal operations / transport security",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring transport-specific access and passenger-area review into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare comparable zones within the appropriate transport context only when the assessment basis is consistent; there is no common airport-port-rail safety rating.",
    dimensions: [
      {
        name: "Passenger-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or queue at a defined concourse or entry stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped service pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Zone Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured perimeter, cargo or operational controlled zone follows the agreed access rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable arrival or operating window",
    scope: "Selected terminal, port or station zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect transport-specific access and passenger-area review to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations from the selected terminal entrance this morning.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered concourse areas show recurring congestion?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the observations for the terminal operations briefing.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across comparable zones within the appropriate transport context; no common airport-port-rail safety rating. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Passenger-Area Flow, Service-Area Orderliness and Controlled-Zone Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Congestion observations recur at one passenger interface during a particular arrival window. Ask: “Summarise the observations for the terminal operations briefing.” Suggested recommendation: Review staffing and passenger guidance with the facility operator under its approved plan. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Test long distances, weather, crowd occlusion and night scenes. Validate each transport setting separately. Agree control-room permissions and export handling, and avoid publishing sensitive maps or security-zone layouts.`,
    requiredInputs: [
      "Mapped hierarchy for pilot terminal, port or station zones",
      "Operator-specific security plan and response ownership",
      "Control-room permissions and export-handling rules",
      "Representative testing across distance, weather, crowding and night scenes",
    ],
  },
  standards: {
    publicCopy:
      "ISPS provisions relate to covered ships and port facilities; they do not certify airport or railway analytics. Aviation and railway requirements need separate operator and regulator review.",
    frameworkIds: ["C10"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed perimeter-event usefulness",
      definition:
        "Confirmed relevant perimeter or controlled-zone events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Authorised test events and operator review logs",
    },
    {
      label: "Count error against sampled manual counts",
      definition:
        "Difference between camera-derived occupancy estimates and manual samples for the same concourse or entry window.",
      sourceOfTruth: "Manual samples and camera-derived counts",
    },
    {
      label: "Known-incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct terminal, port or station clip from a defined starting input such as time window and entry area.",
      sourceOfTruth: "Timed investigation exercises and operator records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For transport hubs, focus on location-aware search, recommendations and score-led review of defined transport events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for control-room review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise camera-estate continuity so control rooms retain usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Does one certificate cover all three transport modes?",
      answer:
        "No. Port, aviation and railway responsibilities must be assessed separately.",
    },
    {
      question: "Can analytics identify a dangerous abandoned object?",
      answer:
        "A supported detector may flag an object under defined conditions. It cannot establish the object's contents or intent.",
    },
    {
      question: "Can the system control train or aircraft movement?",
      answer:
        "This scope is surveillance and human review, not operational safety control.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["government", "logistics", "sports-events"],
  finalCta: {
    heading: "Ask Vision Copilot about your transport hubs.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for transport hubs.",
  },
  sources: [
    "README v2 §9.13",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C10",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
