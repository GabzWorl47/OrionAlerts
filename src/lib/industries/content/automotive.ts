import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const automotiveIndustryPage: IndustryPageRecord = {
  slug: "automotive",
  name: "Automotive & Auto Components",
  cardLabel: "Automotive",
  siteNoun: { one: "automotive plant", many: "automotive plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Automotive Plants",
    description:
      "AI video analytics for automotive plants: line-side buffer dwell, controlled-cell entry alerts and fast clip retrieval by station and changeover.",
    canonicalPath: "/industries/automotive",
    image: "/Images/industries/automotive.webp",
  },
  hero: {
    eyebrow: "Automotive & Auto Components",
    h1: "AI Video Analytics for Automotive Plants",
    lede:
      "Track line-side buffer dwell during replenishment, flag entry into controlled assembly cells and pull up the right station clip when a supervisor asks Vision Copilot.",
    media: {
      kind: "image",
      src: "/Images/industries/automotive.webp",
      alt: "Robotic arms welding car body shells on an automotive assembly line",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Keep attention on the handoffs between people, parts and equipment.",
    paragraphs: [
      "Automotive operations depend on coordinated work across assembly cells, material supply and finished-vehicle movement. A queue of parts or a blocked route can affect more than one workstation. Camera observations are most useful when tied to a known station or route and reviewed alongside production records, where they add investigation context while product quality stays with your inspection systems.",
      "A reference deployment places cameras at line-side buffers, station entries and controlled-cell doors, typically on the plant's existing network where bandwidth and switch capacity allow. Retention matches the window a quality or safety investigation typically needs, with buffer and access alerts routed to the line supervisor and EHS. Where a shift-scheduling or manufacturing execution system (MES) integration is available, align review timestamps with its changeover records so video sits alongside the plant's other sources.",
    ],
    buyers: [
      "Plant directors",
      "Assembly leaders",
      "EHS",
      "Quality and intralogistics teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Assembly Building" },
      { label: "Floor", example: "Production Level" },
      { label: "Zone", example: "Line-Side Zone" },
      { label: "Room", example: "Station" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected station or line-side zone so questions about Station 12 start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the observations I should discuss in today's assembly meeting.",
      "Find observations around Station 12 during yesterday's changeover.",
      "Which line-side zones show repeated congestion during replenishment?",
    ],
    exampleAnswer:
      "A line-side buffer becomes crowded during repeated replenishment windows. Suggested next step: review the replenishment window and buffer layout with the line supervisor before changing the operating plan.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A line-side buffer becomes crowded during repeated replenishment windows.",
    recommendation:
      "Review the replenishment window and buffer layout with the line supervisor before changing the operating plan.",
    decisionOwner: "Line supervisor / assembly lead",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring assembly-cell events and line-side replenishment into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare assembly areas and comparable production windows only when the assessment basis is consistent; never treat these scores as a substitute for product-quality results.",
    dimensions: [
      {
        name: "Assembly-Area Safety",
        family: "Visible practices",
        criterionSummary:
          "Reviewed entry into a configured cell or equipment zone follows the agreed observable rule for the production or maintenance period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Line-Side Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible buffer or queue stays within the agreed operational threshold during replenishment.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Cell Practices",
        family: "Access practices",
        criterionSummary:
          "A specified visible PPE item or access practice meets the agreed criterion at an observable controlled-area entry.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable production window",
    scope: "Selected assembly areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map Station 12 and every line-side zone",
      body: "Each assembly cell, station and line-side buffer sits in the plant hierarchy with its cameras, so a question about Station 12 opens the views that cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Find yesterday's changeover in one question",
      body: "Ask Vision Copilot, “Find observations around Station 12 during yesterday's changeover,” and review the observations for that station and window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which buffers crowd at replenishment",
      body: "Ask, “Which line-side zones show repeated congestion during replenishment?” Scene analysis over time separates a buffer that crowds at every replenishment window from a single busy moment.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Bring evidence to the assembly meeting",
      body: "Ask, “Summarise the observations I should discuss in today's assembly meeting.” Vision Copilot proposes a next step, such as reviewing the replenishment window and buffer layout, for the line supervisor to approve.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score assembly areas by production window",
      body: "Scores out of 100 compare assembly areas across comparable production windows, so the line supervisor sees which station needs attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Validate each camera against moving equipment, reflective parts, lighting changes and line speed. Start with safety and visible flow events; dimensional metrology, weld evaluation and microscopic defect inspection belong to dedicated inspection systems with their own acceptance criteria.",
    requiredInputs: [
      "Stable camera views of pilot stations and line-side buffers",
      "Mapped hierarchy for the selected assembly areas",
      "Clear ownership for production vs maintenance alert rules",
      "Representative testing across line speed, lighting and occlusion",
      "Confirmed alert-routing owners (line supervisor, EHS) and, where available, timestamp alignment with the plant's shift or MES scheduling system",
    ],
  },
  standards: {
    publicCopy:
      "IATF 16949 governs quality-management systems at eligible automotive manufacturers. Station-level video adds investigation context when a quality or safety event is reviewed under that system.",
    frameworkIds: ["C2"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed buffer dwell duration",
      definition:
        "Camera-derived presence duration at selected line-side buffers compared with station observations for the same window; report conditions and definition of start/end events.",
      sourceOfTruth: "Station observations and timed buffer samples",
    },
    {
      label: "Actionable route alerts",
      definition:
        "Confirmed relevant route alerts divided by reviewed alerts for the defined intersections, using an agreed review rubric.",
      sourceOfTruth: "Sampled footage and supervisor review log",
    },
    {
      label: "Known assembly-incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct station clip from a defined starting input such as time window and station.",
      sourceOfTruth: "Timed investigation exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Line-side buffer and controlled-cell alerts, with Vision Copilot search by station and changeover.",
    },
    {
      solutionSlug: "vms",
      body: "Station-based investigation across the agreed assembly cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps critical assembly and line-side views available and shows maintenance when a feed or recording drops.",
    },
  ],
  faqs: [
    {
      question: "How can AI video analytics help on an automotive assembly line?",
      answer:
        "It watches line-side buffers, station entries and controlled-cell doors on existing cameras. Supervisors see when a buffer stays crowded through replenishment and when someone enters a configured cell, each with the station, time window and clip. Alerts for pedestrians at shared vehicle intersections can also be assessed in a pilot, subject to site validation.",
    },
    {
      question: "Can Vision Copilot find a clip from a specific station and shift?",
      answer:
        "Yes. Because cameras are mapped to stations and line-side zones, a question such as “Find observations around Station 12 during yesterday's changeover” returns observations from that station and window. Retrieval time for a known incident is one of the pilot measures, timed against your current process.",
    },
    {
      question: "Can this replace automotive quality inspection?",
      answer:
        "No. Station video gives investigation context around a quality or safety event, while validated inspection, metrology and testing remain the quality method. Weld evaluation, dimensional checks and microscopic defect inspection need dedicated inspection systems with their own acceptance criteria, and any specialist vision inspection is scoped as a separate project.",
    },
    {
      question: "Can a clip be linked to a VIN?",
      answer:
        "Only through a verified method of obtaining and matching the vehicle identification number (VIN), such as an approved integration with your production system. Without that link, Vision Copilot finds clips by station, time window and changeover. Any VIN matching is scoped and tested on its own before investigators rely on it.",
    },
    {
      question: "Will zone alerts change for maintenance?",
      answer:
        "They can, where the site supports it. The pilot defines production and maintenance scenarios, agrees which zone rules apply in each, and checks whether shift schedules or operator controls can support the switch. Ownership of production and maintenance alert rules is confirmed before rollout, so each alert reaches the supervisor responsible for that period.",
    },
  ],
  limits:
    "Station video adds context to quality and safety reviews. Product conformance, weld and dimensional inspection, and IATF certification stay with validated inspection systems and your quality management system.",
  furtherReading: {
    blogs: ["add-ai-to-existing-cctv-cameras", "alert-fatigue-is-an-ops-problem"],
    glossary: ["video-analytics", "vms"],
    useCases: ["restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["manufacturing", "polymers-plastics", "logistics"],
  finalCta: {
    heading: "Ask Vision Copilot about your automotive plant.",
    body:
      "Start with one line-side buffer and one controlled cell on the cameras you already have.",
  },
  sources: ["README v2 §9.2", "README v2 §§3.1–3.3", "README v2 §7", "framework C2"],
  review: {
    reviewedAt: "2026-09-13",
  },
};
