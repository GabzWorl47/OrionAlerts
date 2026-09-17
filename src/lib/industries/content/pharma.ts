import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCopy,
  industrySharedCtas,
  industrySharedFaqs,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const pharmaIndustryPage: IndustryPageRecord = {
  slug: "pharma",
  name: "Pharmaceuticals & Life Sciences",
  cardLabel: "Pharma",
  cardSummary:
    "Use Vision Copilot to connect mapped camera observations with decisions about controlled-area observations and QA investigation context.",
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Pharmaceutical Video Analytics | OrionAlerts",
    description:
      "Explore pharmaceutical facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    canonicalPath: "/industries/pharma",
    ogTitle: "Pharmaceutical Video Analytics | OrionAlerts",
    ogDescription:
      "Explore pharmaceutical facilities with Vision Copilot: search mapped camera observations, review recommendations and track operational scores.",
    image: "/Images/industries/pharma.jpeg",
  },
  hero: {
    eyebrow: "Pharmaceuticals & Life Sciences",
    h1: "Vision Copilot for Pharmaceutical Facilities",
    lede: "Map cameras to the places your team manages and ask Vision Copilot about controlled-area observations and QA investigation context. OrionAlerts analyses scenes over time to surface alerts, recommendations and operational scores that help you decide what to review today and what to improve next.",
    media: {
      kind: "image",
      src: "/Images/industries/pharma.jpeg",
      alt: "Illustrative pharmaceutical facility photograph used for industry context",
      demonstrationLabel: "Illustrative photograph — not a verified customer deployment",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Add investigation context without overstating quality assurance.",
    paragraphs: [
      "Pharmaceutical operations need controlled processes and reliable records. A camera can help a reviewer understand an event near an entrance or packaging area, but it cannot establish sterility or batch quality. Define whether video is used for security, operational review or a regulated record before choosing the controls and validation approach. Quality ownership must remain clear.",
      "A reference deployment covers gowning rooms and controlled-zone entries, on a network segment scoped and documented to the standard the facility applies to GxP-adjacent systems. Retention should match the window a QA investigation typically needs, with controlled-area alerts routed to QA and security rather than general facilities. Where a badge or access-control system is in use, align review timestamps with its logs instead of treating video as an independent compliance record.",
    ],
    buyers: [
      "Plant leadership",
      "QA",
      "Engineering",
      "Security and IT validation teams",
    ],
  },
  locationContext: {
    heading: "Your operation, mapped",
    body: "Organise views around the places the team recognises. Select the location to establish the context for scene observations and Copilot questions. This example uses the shared hierarchy; map the actual site rather than inventing rooms or camera coverage.",
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Manufacturing Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Controlled Zone" },
      { label: "Room", example: "Gowning Room" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected gowning room or controlled zone so questions about the production entry start from recognisable operational context.",
  },
  copilot: {
    heading: "Ask Vision Copilot",
    body: industrySharedCopy.copilotIntro,
    prompts: [
      "Find visible gowning observations at the production entry yesterday.",
      "Which controlled areas had recurring observations in this review period?",
      "Summarise the visual observations for QA review, separating findings from recommendations.",
    ],
    exampleAnswer:
      "Illustrative example — not a live product result. A visible gowning observation recurs at one mapped entrance across several operating periods. Suggested next step: ask QA to review the checkpoint arrangement and relevant procedure; assess the supporting records before changing practice.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A visible gowning observation recurs at one mapped entrance across several operating periods.",
    recommendation:
      "Ask QA to review the checkpoint arrangement and relevant procedure; assess the supporting records before changing practice.",
    decisionOwner: "QA / plant operations",
    followUpPrompt:
      "Revisit the same area and comparable period to assess observations, coverage and score movement.",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring controlled-area observations and QA investigation context into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare defined facility observations only when the assessment basis is consistent; never treat these scores as sterility, batch-release or GMP-compliance scores.",
    dimensions: [
      {
        name: "Visible Gowning Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible gowning item meets the agreed criterion at an observable production-entry checkpoint.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured controlled area follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Packaging-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped packaging pathway or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating period",
    scope: "Selected controlled areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Bring the right location into the decision",
      body: "Connect controlled-area observations and QA investigation context to the building tree and its mapped cameras. The team can start with a named operational area instead of trying to remember which camera covers it, making observations easier to interpret and discuss.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search visual observations in everyday language",
      body: 'Ask Vision Copilot, “Find visible gowning observations at the production entry yesterday.” Use the location and review period to focus the search on relevant available observations. The purpose is to reach useful context without manually working through unrelated camera views.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Identify recurring conditions across scenes",
      body: 'Ask, “Which controlled areas had recurring observations in this review period?” Ongoing scene analysis supports review of patterns across the available observations. Use the recurring condition to frame the next investigation rather than treating one isolated alert as the whole operational picture.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn analysis into an improvement decision",
      body: 'Ask, “Summarise the visual observations for QA review, separating findings from recommendations.” Review the recommendation alongside the underlying observations and the team\'s operating knowledge. The example below shows a practical next step; it is a suggested action for human consideration, not an automatic instruction to change equipment or procedures.',
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Use scores to structure the next review",
      body: "Use 0–100 scores to organise attention across defined facility observations; never sterility, batch-release or GMP-compliance scores. Review the contributing observations and coverage before acting. The proposed dimensions for this industry are Visible Gowning Practices, Controlled-Area Practices and Packaging-Area Orderliness; use the approved product methodology when demonstrating actual values.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  workflow: {
    heading: "From scenes to decisions",
    scenario:
      "Illustrative decision story — not a customer result. Observe: A visible gowning observation recurs at one mapped entrance across several operating periods. Ask: “Summarise the visual observations for QA review, separating findings from recommendations.” Suggested recommendation: Ask QA to review the checkpoint arrangement and relevant procedure; assess the supporting records before changing practice. Decide: The responsible team reviews the evidence and agrees an action. Follow up: Revisit the same area and comparable period to assess observations, coverage and score movement. A subsequent change is not proof of causation.",
    steps: industrySharedCopy.workflowLabels.map((label) => ({ label })),
  },
  deployment: {
    heading: industrySharedCopy.deploymentHeading,
    body: `${industrySharedCopy.deploymentIntroduction} Involve QA before defining alerts or retention. Separate ordinary security footage from records relied upon for regulated decisions. Validate required access, time synchronisation, change control, export and audit-trail capabilities against the intended use; do not assume the website's wording proves these controls.`,
    requiredInputs: [
      "Mapped hierarchy for pilot controlled areas and gowning checkpoints",
      "QA-agreed purpose for security, operational review or regulated-record use",
      "Retention, export and audit-trail requirements for the intended use",
      "Representative testing of access, time synchronisation and investigation retrieval",
      "Documented network and validation scope for any camera system positioned near GxP-relevant areas, agreed with QA before installation",
    ],
  },
  standards: {
    publicCopy:
      "India's revised Schedule M addresses GMP requirements for pharmaceutical manufacturing. For FDA-regulated electronic records, assess 21 CFR Part 11 applicability based on intended use and underlying record requirements. Neither framework is a general CCTV product certificate.",
    frameworkIds: ["C6"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed entry/gowning observations against labelled samples",
      definition:
        "Confirmed relevant visible entry or gowning observations divided by reviewed alerts for the defined checkpoints, using a QA-approved review rubric.",
      sourceOfTruth: "QA-approved samples and supervisor review log",
    },
    {
      label: "Time to retrieve a known incident",
      definition:
        "Time for an authorised reviewer to locate the correct controlled-area clip from a defined starting input such as time window and location.",
      sourceOfTruth: "Controlled retrieval exercises",
    },
    {
      label: "Completeness of the agreed investigation package",
      definition:
        "Share of agreed investigation packages that include the required location, period, observations and supporting footage for the defined review plan.",
      sourceOfTruth: "QA investigation checklist and export records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: `${industrySharedCopy.solutionBasis["ai-analytics"]} For pharmaceutical facilities, focus on location-aware search, recommendations and score-led review of scoped visual observations.`,
    },
    {
      solutionSlug: "vms",
      body: `${industrySharedCopy.solutionBasis.vms} Use it for authorised footage review across agreed cameras.`,
    },
    {
      solutionSlug: "health-monitoring",
      body: `${industrySharedCopy.solutionBasis["health-monitoring"]} Prioritise availability of agreed investigation views so QA can retrieve usable footage.`,
    },
  ],
  faqs: [
    {
      question: "Does video prove cleanroom sterility?",
      answer:
        "No. It cannot measure microbial contamination or replace environmental monitoring, process controls or laboratory testing.",
    },
    {
      question: "Is the platform automatically Part 11 compliant?",
      answer:
        "That cannot be inferred. Determine whether the records fall within scope and assess the actual system, procedures and validation evidence.",
    },
    {
      question: "Can footage be linked to a batch?",
      answer:
        "Only through a defined, verified correlation method. Time and camera location alone should not be presented as guaranteed batch traceability.",
    },
    ...industrySharedFaqs,
  ],
  relatedIndustrySlugs: ["food-fmcg", "cold-storage", "healthcare"],
  finalCta: {
    heading: "Ask Vision Copilot about your pharmaceutical facilities.",
    body: "See how Vision Copilot connects a mapped area with visual search, recommendations and scores for pharmaceutical facilities.",
  },
  sources: [
    "README v2 §9.6",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C6",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
