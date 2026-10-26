import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const constructionIndustryPage: IndustryPageRecord = {
  slug: "construction",
  name: "Construction Sites",
  cardLabel: "Construction",
  siteNoun: { one: "construction site", many: "construction sites" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Construction Sites",
    description:
      "Construction site CCTV analytics: PPE observations at site entries, zone-entry alerts that follow layout changes, and event acknowledgement times.",
    canonicalPath: "/industries/construction",
    image: "/Images/industries/construction.webp",
  },
  hero: {
    eyebrow: "Construction Sites",
    h1: "AI Video Analytics for Construction Sites",
    lede:
      "Review PPE at site entries and entry into equipment and lifting zones, with zone rules that follow each layout change. Ask Vision Copilot what the supervisor should review after this week's changes.",
    media: {
      kind: "image",
      src: "/Images/industries/construction.webp",
      alt: "Engineers in hard hats reviewing a multi-storey building under construction with a tower crane",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Update the monitoring plan as the work changes.",
    paragraphs: [
      "Temporary routes, equipment movement and changing work areas make construction monitoring different from a fixed factory. A rule that was useful last month may now cover a different activity. Keep cameras, zone definitions and response responsibilities aligned with the current site plan.",
    ],
    buyers: [
      "Project managers",
      "Contractors",
      "EHS",
      "Site security",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Project Site" },
      { label: "Building", example: "Building" },
      { label: "Floor", example: "Working Level" },
      { label: "Zone", example: "Work Zone" },
      { label: "Room", example: "Access Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment-access or work zone so questions about the current equipment-access zone start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the supervisor review after this week's layout change?",
      "Show observations from the current equipment-access zone today.",
      "Which covered work zones have recurring entry observations?",
    ],
    exampleAnswer:
      "Repeated zone-entry observations appear after an access route changes. Suggested next step: review the current route, boundary definition and camera mapping with the supervisor before treating the pattern as a new behavioural issue.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated zone-entry observations appear after an access route changes.",
    recommendation:
      "Review the current route, boundary definition and camera mapping with the supervisor before treating the pattern as a new behavioural issue.",
    decisionOwner: "Site supervisor / EHS",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring changing routes and supervision across project areas into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare zones under the same layout version only when the assessment basis is consistent; avoid direct comparison after unrecorded site changes.",
    dimensions: [
      {
        name: "Visible PPE Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible PPE item meets the agreed criterion at an observable stable entry during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Work-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured ground-level equipment or lifting zone follows the agreed observable rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Shared-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped shared site crossing or temporary route is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable period under the same layout version",
    scope: "Selected work zones and access areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric, scope and layout version",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Keep zones in step with the site plan",
      body: "Equipment-access and work zones are mapped to the current site plan, so a question about today's equipment-access zone opens the cameras that cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Check today's equipment-access zone",
      body: "Ask Vision Copilot, “Show observations from the current equipment-access zone today,” to review entries and activity there.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Spot repeat entries in work zones",
      body: "Ask, “Which covered work zones have recurring entry observations?” Patterns across the week show whether entries started after an access route changed.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Review the route after a layout change",
      body: "Ask, “What should the supervisor review after this week's layout change?” A suggested step, such as checking the current route, boundary definition and camera mapping, goes to the site supervisor and EHS.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score zones under one layout version",
      body: "Scores out of 100 compare zones under the same layout version, with each site change recorded so comparisons stay fair.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Revalidate zones after each material layout change. Plan power, network access, mounting and temporary-camera maintenance. Test dust, weather, changing heights and occlusion.",
    requiredInputs: [
      "Mapped hierarchy aligned to the current site plan",
      "Zone revalidation after each material layout change",
      "Power, network, mounting and temporary-camera maintenance plan",
      "Representative testing across dust, weather, height changes and occlusion",
    ],
  },
  standards: {
    publicCopy:
      "Worker-safety, premises and fire requirements are reviewed project by project with the responsible contractor and local authority. Site video supports those reviews within an occupational health and safety programme and premises and fire planning.",
    frameworkIds: ["C1", "C8"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed PPE observations per observable entry",
      definition:
        "Confirmed relevant PPE observations divided by sampled observable entries at stable entry points, using an agreed review rubric.",
      sourceOfTruth: "Labelled samples and supervisor review logs",
    },
    {
      label: "Valid zone alerts after layout changes",
      definition:
        "Share of reviewed zone alerts that remain relevant after the current layout version is confirmed against the site plan.",
      sourceOfTruth: "Current site plan and supervisor logs",
    },
    {
      label: "Time to acknowledge reviewed events",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed construction events.",
      sourceOfTruth: "Supervisor acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "PPE observations at site entries and zone-entry alerts that follow layout changes, with Vision Copilot search by zone.",
    },
    {
      solutionSlug: "vms",
      body: "Incident review across the agreed site cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows when temporary site cameras go offline, so coverage gaps are visible as the site changes.",
    },
  ],
  faqs: [
    {
      question: "How can AI CCTV help on a construction site?",
      answer:
        "It reviews visible PPE at stable site entries, flags entry into configured ground-level equipment or lifting zones, and checks that shared crossings stay clear. Alerts go to the site supervisor and EHS with the clip and location, and zones are revalidated whenever the layout changes.",
    },
    {
      question: "What does a construction site pilot need?",
      answer:
        "A mapped hierarchy aligned to the current site plan, a power, network, mounting and maintenance plan for temporary cameras, and owners for each alert. Zones are revalidated after each material layout change, and views are tested through dust, weather, height changes and occlusion.",
    },
    {
      question: "Can a camera prove a harness is correctly attached?",
      answer:
        "No. Harness attachment and other safety conditions are confirmed by physical inspection and supervision. Video adds context on visible practices, such as PPE at stable site entries or entry into a configured lifting zone, so supervisors know where to look. It works alongside the site's inspection regime rather than replacing it.",
    },
    {
      question: "How often should zones be updated?",
      answer:
        "Whenever the monitored layout or work activity changes materially. After each change, zones are redrawn against the current site plan and checked with a short validation run so alerts stay relevant. Scores are compared only within the same layout version, and every layout change is logged against its date.",
    },
    {
      question: "Can footage prove structural safety?",
      answer:
        "No. Structural assessment uses the appropriate engineering methods and authorised professionals. Site video can show visible conditions around a work area, such as an obstructed route or entry into a lifting zone, but loads, deflection and material condition are measured and judged by engineers and the responsible contractor.",
    },
  ],
  limits:
    "Video reviews visible practices and zone entries under the current layout. Harness attachment, structural safety and statutory checklists stay with physical inspection, engineers and the responsible contractor.",
  furtherReading: {
    blogs: ["ai-ppe-detection-factories", "cctv-camera-health-monitoring"],
    glossary: ["ppe-detection", "camera-health-monitoring"],
    useCases: ["safety-compliance-detection", "restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["cement", "residential", "commercial-buildings"],
  finalCta: {
    heading: "Ask Vision Copilot about your construction site.",
    body:
      "Start with one stable site entry and one equipment-access zone.",
  },
  sources: [
    "README v2 §9.21",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C1/C8",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
