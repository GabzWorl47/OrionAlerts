import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const metalsMiningIndustryPage: IndustryPageRecord = {
  slug: "metals-mining",
  name: "Metals, Mining & Minerals",
  cardLabel: "Metals & Mining",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about remote work-zone review and heavy-equipment interfaces.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Mining and Metals Video Analytics | OrionAlerts",
    description:
      "Explore mining and metals with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/metals-mining",
    ogTitle: "Mining and Metals Video Analytics | OrionAlerts",
    ogDescription:
      "Explore mining and metals with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/metals-mining.webp",
  },
  hero: {
    eyebrow: "Metals, Mining & Minerals",
    h1: "Vision Copilot for Mining and Metals",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about remote work-zone review and heavy-equipment interfaces. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/metals-mining.webp",
      alt: "Illustrative mining and mineral-processing photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Prioritise the places where people and heavy equipment meet.",
    paragraphs: [
      "Mines and mineral-processing operations span large areas with uneven coverage and demanding conditions. A control room may need to distinguish routine movement from an event that requires field verification. The most useful camera pilot concentrates on stable, clearly defined locations rather than promising complete surveillance of an entire mine. Vehicle interaction is a recognised mine-safety concern.",
      "A reference deployment concentrates on stable, high-value locations such as a crusher approach, equipment interface or transfer zone, usually connected by wireless links given the distances involved. Retention should match the window a safety investigation typically needs, with vehicle-interaction and access alerts routed to the control room and HSE. Where a fleet-management system is in use, align review timestamps with its vehicle-proximity records instead of treating video as the only source of truth for a pedestrian-vehicle event.",
    ],
    buyers: [
      "Mine managers",
      "Processing-plant heads",
      "HSE",
      "Fleet and control-room teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Mine Site" },
      { label: "Building", example: "Processing Facility" },
      { label: "Floor", example: "Operating Level" },
      { label: "Zone", example: "Transfer Zone" },
      { label: "Room", example: "Station" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected crusher approach or equipment interface so questions about the crusher approach start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find observations from the crusher approach during the last shift.",
      "Which covered equipment interfaces had repeated access observations?",
      "What should the mine supervisor inspect before the next operating period?",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated person-entry observations occur near a controlled equipment approach. Suggested next step: review the boundary marking, approved route and camera view with the mine supervisor; retain the mine's existing safety controls.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated person-entry observations occur near a controlled equipment approach.",
    recommendation:
      "Review the boundary marking, approved route and camera view with the mine supervisor; retain the mine's existing safety controls.",
    decisionOwner: "Mine supervisor / HSE",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring remote work-zone review and heavy-equipment interfaces into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered processing areas and review periods only when the assessment basis is consistent; never claim a whole-mine safety rating.",
    dimensions: [
      {
        name: "Equipment-Interface Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible practice at an observable equipment interface meets the agreed criterion during the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Processing-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible obstruction or accumulation at a defined conveyor or chute view stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Restricted-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured processing or equipment zone follows the agreed schedule or access rule for the operating period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating period",
    scope: "Selected processing areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect remote work-zone review and heavy-equipment interfaces to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find observations from the crusher approach during the last shift.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered equipment interfaces had repeated access observations?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “What should the mine supervisor inspect before the next operating period?” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across covered processing areas and review periods, without claiming a whole-mine safety rating. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Equipment-Interface Practices, Processing-Area Flow and Restricted-Zone Control; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated person-entry observations occur near a controlled equipment approach. Ask: “What should the mine supervisor inspect before the next operating period?” Suggested recommendation: Review the boundary marking, approved route and camera view with the mine supervisor; retain the mine's existing safety controls. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Separate surface mines, underground workings and metals-processing plants in the assessment. Define network and power constraints, camera stand-off distances and environmental limits. Verify the exact hardware approval needed for the proposed mine installation.`,
    requiredInputs: [
      "Mapped hierarchy for pilot processing stations and equipment interfaces",
      "Agreed response owners for restricted-zone and field-verification events",
      "Network, power and environmental limits for selected remote camera views",
      "Hardware-approval check for the proposed mine installation environment",
      "Wireless-link capacity planning for cameras at distance from the core network, verified before committing to full-site coverage",
    ],
  },
  standards: {
    publicCopy:
      "DGMS maintains approval requirements for specified mining equipment. Applicability depends on the equipment and mine environment; an ordinary surveillance device must not be described as mine-approved without evidence.",
    frameworkIds: ["C4"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Verified restricted-zone alerts",
      definition:
        "Confirmed relevant restricted-zone entries divided by reviewed alerts for the defined equipment or processing zones, using an agreed review rubric.",
      sourceOfTruth: "Access/work records and supervisor review log",
    },
    {
      label: "Remote-view unavailable hours",
      definition:
        "Hours when an expected remote camera or recording source was unavailable or not usable for the agreed assessment task during the pilot window.",
      sourceOfTruth: "Device logs and surveillance health records",
    },
    {
      label: "Time from reviewed event to field-team acknowledgement",
      definition:
        "Time from a reviewed observation being presented to acknowledgement by the assigned field or control-room owner, using an agreed review log.",
      sourceOfTruth: "Control-room records and field acknowledgement log",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For mining and metals, focus on location-aware search, recommendations and score-led review of work-zone and equipment-interface events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for remote scene review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise remote surveillance infrastructure so field teams know when coverage is unavailable.`,
    },
  ],
  faqs: [
    {
      question: "Can the same camera be used underground?",
      answer:
        "Suitability depends on the environment and required approvals. Check the exact model, installation and operating conditions before deployment.",
    },
    {
      question: "Can video confirm a blast zone is safe?",
      answer:
        "No. Blast clearance and re-entry remain controlled safety procedures; camera coverage can be incomplete.",
    },
    {
      question: "Can analytics work during network outages?",
      answer:
        "Confirm the proposed architecture's actual local processing, storage and recovery behaviour. Do not assume edge operation or buffered alerts without testing.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["cement", "oil-gas", "utilities"],
  finalCta: {
    heading: "Ask Vision Copilot about your mining and metals.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for mining and metals.",
  },
  sources: [
    "README v2 §9.4",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C4",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
