import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const oilGasIndustryPage: IndustryPageRecord = {
  slug: "oil-gas",
  name: "Oil, Gas & Petrochemicals",
  cardLabel: "Oil & Gas",
  siteNoun: { one: "oil and gas terminal", many: "oil and gas terminals" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Oil & Gas Terminals",
    description:
      "AI video analytics for oil and gas terminals: tanker-bay activity, controlled-area entry and perimeter alerts, verified by an operator before escalation.",
    canonicalPath: "/industries/oil-gas",
    image: "/Images/industries/oil-gas-hero.webp",
  },
  hero: {
    eyebrow: "Oil, Gas & Petrochemicals",
    h1: "AI Video Analytics for Oil & Gas Terminals",
    lede:
      "Review tanker-bay activity, controlled-area entry and after-hours perimeter events, each verified by an operator before escalation. Ask Vision Copilot what happened at Tanker Bay 2 during the evening loading window.",
    media: {
      kind: "image",
      src: "/Images/industries/oil-gas-hero.webp",
      alt: "Illustration of a coastal refinery, storage tanks, tanker terminal and offshore platform",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Verify access, tanker-bay and perimeter events before you escalate.",
    paragraphs: [
      "Refineries, terminals and petrochemical sites manage controlled access alongside vehicle and contractor activity. An operator benefits from seeing the scene around an event, while gas concentration, process pressure and safe isolation stay with process instruments. Design the video workflow around verification and escalation, with a clear line between surveillance analytics and process safety.",
      "A reference deployment covers tanker bays, controlled-access points and defined perimeter zones, with cabling and enclosures selected for the area's hazardous-area classification. Retention matches the window an HSE or security investigation typically needs, with access and tanker-area alerts routed to HSE and security. Where a permit-to-work or access-control system is in use, align review timestamps with its records so each clip sits next to the permit it relates to.",
    ],
    buyers: [
      "Terminal/refinery operations",
      "HSE",
      "Security",
      "Instrumentation and operational technology (OT) teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "Summarise the terminal issues that need human review today.",
      "Show observations around Tanker Bay 2 during the evening loading window.",
      "Which controlled areas had recurring entry observations this week?",
    ],
    exampleAnswer:
      "Entry observations recur near a tanker working area during overlapping service activity. Suggested next step: review scheduling and access arrangements with terminal operations; verify permits separately before deciding on an intervention.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Entry observations recur near a tanker working area during overlapping service activity.",
    recommendation:
      "Review scheduling and access arrangements with terminal operations; verify permits separately before deciding on an intervention.",
    decisionOwner: "Terminal operations / HSE",
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
      title: "Map Tanker Bay 2 and each controlled zone",
      body: "Tanker bays, controlled-access points and perimeter zones are mapped with their cameras, so HSE asks about Tanker Bay 2 and gets the right views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Pull the evening loading window",
      body: "Ask Vision Copilot, “Show observations around Tanker Bay 2 during the evening loading window,” and review that bay for the selected window.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which controlled areas draw repeat entries",
      body: "Ask, “Which controlled areas had recurring entry observations this week?” A week of observations shows whether entries cluster around overlapping service activity at one tanker area.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Prepare today's human-review list",
      body: "Ask, “Summarise the terminal issues that need human review today.” Vision Copilot suggests a step, such as reviewing scheduling and access arrangements with terminal operations, while permits are verified through their own process.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Rank terminal zones for the next review",
      body: "Scores out of 100 compare selected terminal zones and periods, helping HSE and security decide where to look first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Review hazardous-area classification before selecting cameras, enclosures or edge devices. Confirm network separation with OT/IT and document the scope of any integration. Test glare, night lighting, steam and weather before agreeing alert performance.",
    requiredInputs: [
      "Mapped hierarchy for pilot tanker bays and controlled operational zones",
      "Agreed response owners for perimeter, access and verification events",
      "Representative testing across glare, night lighting, steam and weather",
      "Hazardous-area classification and hardware approvals confirmed for every proposed camera position and cable route before installation",
    ],
  },
  standards: {
    publicCopy:
      "Petroleum and Explosives Safety Organisation (PESO) approval applies to equipment installed in hazardous areas within its jurisdiction, while IECEx and ATEX have their own scopes. Each proposed camera model and installation is checked against the approvals its zone requires.",
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
      body: "Tanker-bay, controlled-zone and perimeter alerts, with Vision Copilot search by bay and loading window.",
    },
    {
      solutionSlug: "vms",
      body: "Incident context across the agreed terminal cameras, live or recorded, for operator verification.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps critical terminal views usable for verification by flagging camera and recording issues.",
    },
  ],
  faqs: [
    {
      question: "How is AI CCTV used at petroleum terminals?",
      answer:
        "Typical uses are controlled-zone entry, visible PPE exceptions, tanker approach lanes and after-hours perimeter events. An operator verifies each alert from the clip before escalating it to HSE or security. Cameras in classified hazardous areas need hardware approved for that zone, which is checked before installation.",
    },
    {
      question: "How do operators verify an alert before escalating?",
      answer:
        "Each alert opens with the camera, mapped location and clip, so the operator sees the scene around the event before deciding to escalate. Where a permit-to-work or access-control system is in use, review timestamps are aligned with its records, keeping the permit process as the authority.",
    },
    {
      question: "Can AI video analytics detect a gas leak?",
      answer:
        "Not with ordinary cameras. Gas leaks are detected by suitable gas instrumentation or separately validated specialist imaging, and ordinary CCTV video cannot measure gas concentration. What video adds is visual context for the operator reviewing the area, such as activity around a tanker bay when an instrument alarm is raised.",
    },
    {
      question: "Is OrionAlerts automatically ATEX or PESO approved?",
      answer:
        "No. Hazardous-area approvals such as PESO, IECEx and ATEX apply to specific equipment and installations, so no blanket approval follows from using the software. Any camera or enclosure in a classified hazardous area must carry the approval its zone requires, and the classification is checked before hardware is chosen for each position.",
    },
    {
      question: "Can video analytics replace fire alarms?",
      answer:
        "No. Any supported visual fire or smoke alert is a supplement to your required fire detection and safety systems, giving the operator a view of the area around an alarm. Whether a fire and smoke detector suits a particular view is assessed in the pilot, and the site's certified fire protection remains the primary system.",
    },
  ],
  limits:
    "Ordinary video shows the visible scene. Gas concentration, process pressure, safe isolation and fire protection stay with instruments, permits and certified safety systems, and hazardous-area cameras need zone-appropriate approvals.",
  furtherReading: {
    blogs: ["alert-fatigue-is-an-ops-problem", "why-traditional-cctv-monitoring-is-no-longer-enough"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["perimeter-intrusion-detection", "restricted-zone-monitoring", "fire-smoke-detection"],
  },
  relatedIndustrySlugs: ["metals-mining", "polymers-plastics", "utilities", "cement"],
  finalCta: {
    heading: "Ask Vision Copilot about your terminal or plant.",
    body:
      "Start with one tanker bay and one controlled-access point, with hardware matched to the zone classification.",
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
