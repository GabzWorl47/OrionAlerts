import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const airportsPortsRailwaysIndustryPage: IndustryPageRecord = {
  slug: "airports-ports-railways",
  name: "Airports, Ports & Railways",
  cardLabel: "Airports & Ports",
  siteNoun: { one: "transport hub", many: "airports, ports and railways" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Airports, Ports & Rail",
    description:
      "AI video analytics for airports, ports and rail: perimeter event review, concourse congestion and fast incident retrieval for transport control rooms.",
    canonicalPath: "/industries/airports-ports-railways",
    image: "/Images/industries/airports-ports.webp",
  },
  hero: {
    eyebrow: "Airports, Ports & Railways",
    h1: "AI Video Analytics for Airports, Ports & Rail",
    lede: "Review perimeter and access-zone events, spot recurring concourse congestion and retrieve incident footage fast for transport control rooms. Each deployment follows its own operator's security plan, whether at an airport, a port or a railway station.",
    media: {
      kind: "image",
      src: "/Images/industries/airports-ports.webp",
      alt: "Illustration of an airport, container port and cruise terminal beside a city waterfront",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "One video platform, distinct transport responsibilities.",
    paragraphs: [
      "Airports, ports and railway stations share the need for scene verification, but each mode has its own layout, risks and security plan.",
      "Airports: terminals separate public areas from controlled operational areas, so reviews focus on access-zone events at terminal entrances and congestion in passenger concourses.",
      "Ports: port facilities combine waterside access, cargo activity and vehicle movement, so reviews focus on perimeter and gate events and entry into cargo or operational controlled zones.",
      "Railways: stations manage changing passenger flows and restricted operational spaces, so reviews focus on crowding at entries and concourses and entry into restricted areas.",
      "Each operator sets its own authorisations and response procedures, and verification is configured around them.",
    ],
    buyers: [
      "Transport security",
      "Terminal operations",
      "Infrastructure operators",
      "Control rooms",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Airport, Port or Station" },
      { label: "Building", example: "Terminal or Station Building" },
      { label: "Floor", example: "Concourse Level" },
      { label: "Zone", example: "Access Zone" },
      { label: "Room", example: "Entry Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the places each operator already uses: terminal entrances and access zones at an airport, gates and cargo areas at a port, and entries and concourses at a railway station. Each sits under its own site hierarchy, so a question about one entrance starts from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the observations for the terminal operations briefing.",
      "Show observations from the selected terminal entrance this morning.",
      "Which covered concourse areas show recurring congestion?",
    ],
    exampleAnswer:
      "Congestion observations recur at one passenger interface during a particular arrival window. Suggested next step: review staffing and passenger guidance with the facility operator under its approved plan.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Congestion observations recur at one passenger interface during a particular arrival window.",
    recommendation:
      "Review staffing and passenger guidance with the facility operator under its approved plan.",
    decisionOwner: "Terminal operations / transport security",
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
      title: "Start from the entrance or access zone",
      body: "Cameras map to airport terminals and access zones, port gates and cargo areas, or station entries and concourses, so a control-room question starts from a place in the operator's own plan.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search a terminal entrance by time",
      body: "Ask Vision Copilot, “Show observations from the selected terminal entrance this morning,” and review that entrance's clips.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find concourse congestion that keeps returning",
      body: "Ask which covered concourse areas show recurring congestion, such as one passenger interface during a particular arrival window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Brief terminal operations on what to change",
      body: "Ask for a summary for the terminal operations briefing. A typical suggestion is to review staffing and passenger guidance with the facility operator under its approved plan.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score zones within each transport setting",
      body: "0–100 scores compare like-for-like zones within one airport, port or station, using that operator's own definitions.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Test long distances, weather, crowd occlusion and night scenes, and validate each transport setting separately. Agree control-room permissions and export handling, and keep security-zone layouts out of public materials.",
    requiredInputs: [
      "Mapped hierarchy for pilot terminal, port or station zones",
      "Operator-specific security plan and response ownership",
      "Control-room permissions and export-handling rules",
      "Representative testing across distance, weather, crowding and night scenes",
    ],
  },
  standards: {
    publicCopy:
      "Covered ships and port facilities follow the International Ship and Port Facility Security (ISPS) Code, while airports and railways work under their own operator and regulator requirements. Each operator's security plan defines how camera observations feed its reviews.",
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
      body: "Location-aware search, recommendations and score-led review of defined access and congestion events.",
    },
    {
      solutionSlug: "vms",
      body: "Control-room review of live and recorded video across the agreed cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps the camera estate recording, so control rooms retain usable footage.",
    },
  ],
  faqs: [
    {
      question: "How is AI video analytics used at airports, ports and railway stations?",
      answer:
        "Control rooms use it to review access-zone and perimeter events, see where concourse congestion recurs during arrival windows, and retrieve incident footage quickly. Each deployment is configured around the operator's own security plan, with alerts going to terminal operations or transport security for verification before anyone escalates.",
    },
    {
      question: "Can one platform serve different transport sites?",
      answer:
        "Yes. OrionAlerts can map an airport terminal, a port gate and a railway station under separate site hierarchies, each with its own zones, permissions and response owners. That keeps operator-specific security plans distinct while control rooms work from one consistent review process.",
    },
    {
      question: "Is one assessment enough for airports, ports and railways?",
      answer:
        "No. Each mode is assessed separately. Covered ships and port facilities follow the ISPS Code, while airports and railways work under their own operators and regulators. A deployment is configured and validated for each setting, with its own zones, permissions and response owners, so one site's assessment never stands in for another's.",
    },
    {
      question: "Can analytics identify a dangerous abandoned object?",
      answer:
        "Not on its own: a supported detector can flag an unattended object under defined conditions, with the camera, location and clip, for an operator to verify. What the object contains and why it was left are assessed through the operator's own screening and response procedures, and detector support is confirmed for each view during the pilot.",
    },
    {
      question: "Can the system control train or aircraft movement?",
      answer:
        "No. OrionAlerts supports surveillance and human review, sending alerts to the dashboard, mobile app and email for an operator to verify. Train, vessel and aircraft movement, signalling and other operational safety systems stay with their own control systems and the people who run them, and those controls sit outside the OrionAlerts scope.",
    },
  ],
  limits: "Each transport mode is configured and assessed on its own terms. OrionAlerts supports surveillance and human review: vehicle movement, screening of an object's contents and transport safety ratings stay with each operator's own systems and regulators.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough"],
    glossary: ["vms", "video-analytics"],
    useCases: ["perimeter-intrusion-detection", "crowd-detection", "abandoned-object-detection"],
  },
  relatedIndustrySlugs: ["government", "logistics", "sports-events"],
  finalCta: {
    heading: "Ask Vision Copilot about your transport hub.",
    body: "Start with one terminal entrance and one concourse, and see how the control room would review them.",
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
