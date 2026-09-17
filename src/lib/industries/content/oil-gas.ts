import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const oilGasIndustryPage: IndustryPageRecord = {
  slug: "oil-gas",
  name: "Oil, Gas & Petrochemicals",
  cardLabel: "Oil & Gas",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about tanker-area activity and controlled operational access.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Oil and Gas AI Video Analytics | OrionAlerts",
    description:
      "Explore oil and gas facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/oil-gas",
    ogTitle: "Oil and Gas AI Video Analytics | OrionAlerts",
    ogDescription:
      "Explore oil and gas facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/oil-gas.webp",
  },
  hero: {
    eyebrow: "Oil, Gas & Petrochemicals",
    h1: "Vision Copilot for Oil and Gas Facilities",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about tanker-area activity and controlled operational access. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/oil-gas.webp",
      alt: "Illustrative oil and gas facility photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Separate useful visual awareness from safety-critical detection.",
    paragraphs: [
      "Refineries, terminals and petrochemical sites need to manage controlled access alongside vehicle and contractor activity. An operator benefits from seeing the scene around an event, but ordinary cameras cannot establish gas concentration, process pressure or safe isolation. Design the video workflow around verification and escalation, with a clear boundary between surveillance analytics and process safety.",
      "A reference deployment covers tanker bays, controlled-access points and defined perimeter zones, with cabling and enclosures selected for the area's hazardous-area classification. Retention should match the window an HSE or security investigation typically needs, with access and tanker-area alerts routed to HSE and security rather than a general control room. Where a permit-to-work or access-control system is in use, align review timestamps with its records instead of treating video as a substitute for the permit process.",
    ],
    buyers: [
      "Terminal/refinery operations",
      "HSE",
      "Security",
      "Instrumentation and OT teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Terminal" },
      { label: "Building", example: "Operations Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Tanker Zone" },
      { label: "Room", example: "Loading Bay" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected tanker bay or controlled zone so questions about Tanker Bay 2 start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations around Tanker Bay 2 during the evening loading window.",
      "Which controlled areas had recurring entry observations this week?",
      "Summarise the terminal issues that need human review today.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Entry observations recur near a tanker working area during overlapping service activity. Suggested next step: review scheduling and access arrangements with terminal operations; verify permits separately before deciding on an intervention.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Entry observations recur near a tanker working area during overlapping service activity.",
    recommendation:
      "Review scheduling and access arrangements with terminal operations; verify permits separately before deciding on an intervention.",
    decisionOwner: "Terminal operations / HSE",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring tanker-area activity and controlled operational access into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare selected terminal zones and periods only when the assessment basis is consistent; never treat these scores as a process-safety or explosion-risk certification.",
    dimensions: [
      {
        name: "Visible Site Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible PPE or site practice meets the agreed criterion at an observable entry or work area.",
        methodologyStatus: "proposed",
      },
      {
        name: "Tanker-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped tanker approach or loading staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Zone Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured operational or restricted zone follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable terminal operating window",
    scope: "Selected terminal zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect tanker-area activity and controlled operational access to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations around Tanker Bay 2 during the evening loading window.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which controlled areas had recurring entry observations this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the terminal issues that need human review today.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across selected terminal zones and periods; never a process-safety or explosion-risk certification. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Visible Site Practices, Tanker-Area Orderliness and Controlled-Zone Practices; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Entry observations recur near a tanker working area during overlapping service activity. Ask: “Summarise the terminal issues that need human review today.” Suggested recommendation: Review scheduling and access arrangements with terminal operations; verify permits separately before deciding on an intervention. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Review hazardous-area classification before selecting cameras, enclosures or edge devices. Confirm network separation with OT/IT and document the limits of any integration. Test glare, night lighting, steam and weather before agreeing alert performance.`,
    requiredInputs: [
      "Mapped hierarchy for pilot tanker bays and controlled operational zones",
      "Agreed response owners for perimeter, access and verification events",
      "Hazardous-area classification and hardware-approval check for proposed installs",
      "Representative testing across glare, night lighting, steam and weather",
      "Hazardous-area classification confirmed for every proposed camera position and cable route before installation",
    ],
  },
  standards: {
    publicCopy:
      "Equipment installed in hazardous areas may require PESO approval within its jurisdiction. IECEx certification and EU ATEX requirements have distinct scopes and do not automatically replace Indian approvals. Verify the exact model and installation conditions.",
    frameworkIds: ["C5"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Actionable perimeter alerts",
      definition:
        "Confirmed relevant perimeter or boundary observations divided by reviewed alerts for the defined site boundaries, using an agreed review rubric.",
      sourceOfTruth: "Security review log and labelled alert samples",
    },
    {
      label: "Time to review a known alarm scene",
      definition:
        "Time for an authorised reviewer to locate the correct camera clip from a defined starting input such as time window and zone after a known event.",
      sourceOfTruth: "Timed drills and recording logs",
    },
    {
      label: "Recording continuity at selected critical views",
      definition:
        "Share of expected assessment windows at selected critical cameras that remained usable during the pilot period.",
      sourceOfTruth: "Recording logs and surveillance health records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For oil and gas facilities, focus on location-aware search, recommendations and score-led review of perimeter and zone observations.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for incident context across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise surveillance availability so critical terminal views remain usable for verification.`,
    },
  ],
  faqs: [
    {
      question: "Can AI Vision detect a gas leak?",
      answer:
        "Ordinary RGB video cannot establish gas concentration or reliably identify all leaks. Gas detection requires suitable instrumentation or separately validated specialist imaging.",
    },
    {
      question: "Is OrionAlerts automatically ATEX or PESO approved?",
      answer:
        "No blanket approval can be inferred from software use. Approval must be checked for the actual equipment and installation scope.",
    },
    {
      question: "Can video analytics replace fire alarms?",
      answer:
        "No. Any supported visual fire/smoke alert is supplementary and must not be represented as a replacement for the required fire and safety systems.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["metals-mining", "utilities", "polymers-plastics"],
  finalCta: {
    heading: "Ask Vision Copilot about your oil and gas facilities.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for oil and gas facilities.",
  },
  sources: [
    "README v2 §9.5",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C5",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
