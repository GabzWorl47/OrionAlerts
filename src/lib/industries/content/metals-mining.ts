import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const metalsMiningIndustryPage: IndustryPageRecord = {
  slug: "metals-mining",
  name: "Metals, Mining & Minerals",
  cardLabel: "Metals & Mining",
  siteNoun: { one: "mine or processing plant", many: "mines and processing plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Mining & Metals",
    description:
      "AI video analytics for mines and processing plants: restricted-zone alerts at crushers and equipment interfaces, plus remote camera outage tracking.",
    canonicalPath: "/industries/metals-mining",
    image: "/Images/industries/metals-mining.webp",
  },
  hero: {
    eyebrow: "Metals, Mining & Minerals",
    h1: "AI Video Analytics for Mining & Metals",
    lede:
      "Flag entry into restricted zones at crusher approaches and equipment interfaces, and see when a remote camera or recording source goes offline. Ask Vision Copilot what the mine supervisor should inspect before the next operating period.",
    media: {
      kind: "image",
      src: "/Images/industries/metals-mining.webp",
      alt: "Open-pit mine with haul trucks and excavators beside a mineral-processing plant",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Prioritise the places where people and heavy equipment meet.",
    paragraphs: [
      "Mines and mineral-processing operations span large areas with uneven coverage and demanding conditions. A control room needs to tell routine movement apart from an event that requires field verification.",
      "A reference deployment concentrates on stable, high-value locations such as a crusher approach, equipment interface or transfer zone, usually connected by wireless links given the distances involved. Retention matches the window a safety investigation typically needs, with vehicle-interaction and access alerts routed to the control room and HSE. Where a fleet-management system is in use, align review timestamps with its vehicle-proximity records so a pedestrian-vehicle event is reviewed with both sources.",
    ],
    buyers: [
      "Mine managers",
      "Processing-plant heads",
      "HSE",
      "Fleet and control-room teams",
    ],
  },
  locationContext: {
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
    prompts: [
      "What should the mine supervisor inspect before the next operating period?",
      "Find observations from the crusher approach during the last shift.",
      "Which covered equipment interfaces had repeated access observations?",
    ],
    exampleAnswer:
      "Repeated person-entry observations occur near a controlled equipment approach. Suggested next step: review the boundary marking, approved route and camera view with the mine supervisor; retain the mine's existing safety controls.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated person-entry observations occur near a controlled equipment approach.",
    recommendation:
      "Review the boundary marking, approved route and camera view with the mine supervisor; retain the mine's existing safety controls.",
    decisionOwner: "Mine supervisor / HSE",
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
      title: "Put the crusher approach on the map",
      body: "Crusher approaches, equipment interfaces and transfer zones sit in the site hierarchy with their cameras, so the control room asks about a named place rather than a camera number.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Review the last shift at the crusher",
      body: "Ask Vision Copilot, “Find observations from the crusher approach during the last shift,” and review that approach for the chosen period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Catch repeated access at equipment interfaces",
      body: "Ask, “Which covered equipment interfaces had repeated access observations?” Observations over time show whether person-entry near a controlled approach is a pattern or a single event.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Hand the supervisor a boundary to check",
      body: "Ask, “What should the mine supervisor inspect before the next operating period?” A suggested step, such as reviewing boundary marking, the approved route and the camera view, goes to the mine supervisor alongside existing safety controls.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score covered areas period by period",
      body: "Scores out of 100 compare covered processing areas across review periods, giving the control room a starting order for field checks.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Separate surface mines, underground workings and metals-processing plants in the assessment. Define network and power constraints, camera stand-off distances and environmental limits. Verify the exact hardware approval needed for the proposed mine installation.",
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
      "DGMS sets approval requirements for specified equipment used in mining environments. The assessment confirms which approvals apply to each proposed camera position and installation.",
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
      body: "Restricted-zone and equipment-interface alerts, with Vision Copilot search by crusher approach, interface or shift.",
    },
    {
      solutionSlug: "vms",
      body: "Remote scene review across the agreed mine and plant cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows field teams when a remote camera or recording source is unavailable, so coverage gaps are known before a review.",
    },
  ],
  faqs: [
    {
      question: "How is AI video analytics used in a mine or processing plant?",
      answer:
        "It focuses on stable, high-value views such as a crusher approach, an equipment interface or a transfer zone. The system flags entry into configured restricted zones for control-room review and shows when a remote camera or recording source is unavailable, so field teams verify events with known coverage.",
    },
    {
      question: "How do remote mine cameras connect?",
      answer:
        "Usually over wireless links, because of the distances involved. Link capacity is planned before committing to full-site coverage, and remote-view unavailable hours are tracked during the pilot so the control room knows which views were usable for each review window.",
    },
    {
      question: "Can the same camera be used underground?",
      answer:
        "Not necessarily. Suitability depends on the environment and the approvals it requires, so surface mines, underground workings and processing plants are assessed separately. The exact camera model, installation and operating conditions are checked against the applicable DGMS requirements before deployment, and an ordinary surveillance camera is never described as mine-approved without evidence.",
    },
    {
      question: "Can video confirm a blast zone is safe?",
      answer:
        "No. Blast clearance and re-entry stay with your controlled safety procedures and the people responsible for them. Camera views can add context for the control room, such as activity near a blast-zone boundary, but coverage of a large site may be incomplete, so video never stands in for a physical clearance check.",
    },
    {
      question: "Can analytics work during network outages?",
      answer:
        "That is confirmed in a pilot outage test. Video and AI inference run on the on-site node rather than in the cloud, but how storage, alert delivery and recovery behave during a network outage depends on the proposed architecture, so the test confirms that behaviour before the control room relies on it.",
    },
  ],
  limits:
    "Camera views cover selected locations rather than the whole mine. Blast clearance, re-entry and mine-approved equipment status stay with your safety procedures and the applicable Directorate General of Mines Safety (DGMS) approvals.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "alert-fatigue-is-an-ops-problem"],
    glossary: ["camera-health-monitoring", "edge-ai-video-analytics"],
    useCases: ["restricted-zone-monitoring", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["cement", "oil-gas", "utilities"],
  finalCta: {
    heading: "Ask Vision Copilot about your mine or processing plant.",
    body:
      "Start with one crusher approach and one equipment interface where people and vehicles meet.",
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
