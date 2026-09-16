import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const dataCentresIndustryPage: IndustryPageRecord = {
  slug: "data-centres",
  name: "Data Centres",
  cardLabel: "Data Centres",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about controlled entrances and security-review prioritisation.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Data Centre Video Analytics | OrionAlerts",
    description:
      "Explore data centre facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/data-centres",
    ogTitle: "Data Centre Video Analytics | OrionAlerts",
    ogDescription:
      "Explore data centre facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
  },
  hero: {
    eyebrow: "Data Centres",
    h1: "Vision Copilot for Data Centre Facilities",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about controlled entrances and security-review prioritisation. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
      alt: "Illustrative data-centre facility photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Verify the event before treating it as an access breach.",
    paragraphs: [
      "A data-centre entrance may involve escorts, authorised maintenance and multiple access checks. Video can show movement, but it does not establish a person's permissions from appearance. The useful buying case is quicker physical-event review with reliable footage and clear access boundaries. Avoid mixing physical surveillance benefits with claims about server health or facility uptime certification.",
    ],
    buyers: [
      "Physical security",
      "Data-centre operations",
      "Compliance",
      "Infrastructure engineering",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Data Centre Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Controlled Zone" },
      { label: "Room", example: "Access Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected access lobby or controlled entrance so questions about the controlled access lobby start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Show observations at the controlled access lobby overnight.",
      "Which covered entrances had recurring entry observations this week?",
      "Summarise what physical security should investigate, without assuming an access violation.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. Repeated entry observations occur at an entrance used for planned maintenance. Suggested next step: review escort arrangements and access logs before deciding whether the pattern requires a security change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated entry observations occur at an entrance used for planned maintenance.",
    recommendation:
      "Review escort arrangements and access logs before deciding whether the pattern requires a security change.",
    decisionOwner: "Physical security / data-centre operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring controlled entrances and security-review prioritisation into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare defined physical observations and coverage only when the assessment basis is consistent; these are never cyber-security, Tier or access-authorisation scores.",
    dimensions: [
      {
        name: "Controlled-Entry Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured controlled entrance or lobby follows the agreed observable access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped service pathway or loading/staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Physical Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled physical observation at a defined entrance is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable overnight or operating window",
    scope: "Selected controlled entrances and service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect controlled entrances and security-review prioritisation to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Show observations at the controlled access lobby overnight.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which covered entrances had recurring entry observations this week?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise what physical security should investigate, without assuming an access violation.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across defined physical observations and coverage; never a cyber-security, Tier or access-authorisation score. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Controlled-Entry Practices, Service-Area Orderliness and Physical Observation Review; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: Repeated entry observations occur at an entrance used for planned maintenance. Ask: “Summarise what physical security should investigate, without assuming an access violation.” Suggested recommendation: Review escort arrangements and access logs before deciding whether the pattern requires a security change. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Review deployment location, network separation, role controls and export procedures with the customer's security team. Validate the required integration and test camera/recording failure scenarios.`,
    requiredInputs: [
      "Mapped hierarchy for pilot controlled entrances and service areas",
      "Agreed role controls, network separation and export procedures",
      "Verified access-log integration before authorisation claims",
      "Camera and recording failure tests for priority surveillance views",
    ],
  },
  standards: {
    publicCopy:
      "ISO/IEC 27001 concerns an organisation's information-security management system. Uptime Institute Tier certification addresses defined data-centre infrastructure and operational scopes. Neither is conferred by adding video analytics.",
    frameworkIds: ["C11"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed doorway-event usefulness",
      definition:
        "Confirmed relevant doorway or entrance events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Controlled entry tests and operator review logs",
    },
    {
      label: "Time to correlate a known access event",
      definition:
        "Time for an authorised reviewer to locate matching footage for a defined access event from an agreed starting input such as time window and entrance.",
      sourceOfTruth: "Access logs and timed correlation exercises",
    },
    {
      label: "Priority recording availability",
      definition:
        "Share of required recording minutes with usable footage for priority controlled-entrance cameras during agreed monitoring windows.",
      sourceOfTruth: "Recorder availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For data centres, focus on location-aware search, recommendations and score-led review of scoped physical events.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for authorised scene review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise surveillance-system reliability so physical-security investigations retain intended coverage.`,
    },
  ],
  faqs: [
    {
      question: "Does this make a facility Tier III or Tier IV?",
      answer:
        "No. Tier certification is a separate assessment of the relevant data-centre scope.",
    },
    {
      question: "Can video determine whether someone is authorised?",
      answer:
        "Not from presence alone. Use access permissions and escort records through a verified process.",
    },
    {
      question: "Will footage remain on premises?",
      answer:
        "Confirm the actual deployment architecture and data flows in the proposal; this specification does not assert an unverified hosting option.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["banking", "telecom-remote", "commercial-buildings"],
  finalCta: {
    heading: "Ask Vision Copilot about your data centre facilities.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for data centre facilities.",
  },
  sources: [
    "README v2 §9.15",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C11",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
