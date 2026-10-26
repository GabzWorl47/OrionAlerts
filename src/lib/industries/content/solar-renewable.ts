import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const solarRenewableIndustryPage: IndustryPageRecord = {
  slug: "solar-renewable",
  name: "Solar & Renewable Energy Facilities",
  cardLabel: "Renewables",
  siteNoun: { one: "renewable site", many: "solar and renewable sites" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Solar & Renewable Sites",
    description:
      "Remote CCTV analytics for solar and renewable sites: verified perimeter alerts at gates and equipment compounds, plus camera outage tracking.",
    canonicalPath: "/industries/solar-renewable",
    image: "/Images/industries/solar-renewable-hero.webp",
  },
  hero: {
    eyebrow: "Solar & Renewable Energy Facilities",
    h1: "AI Video Analytics for Solar & Renewable Sites",
    lede: "Verify gate, boundary and equipment-compound alerts at remote solar and renewable sites, and track which cameras have dropped offline before deciding whether to send the operations and maintenance (O&M) team.",
    media: {
      kind: "image",
      src: "/Images/industries/solar-renewable-hero.webp",
      alt: "Solar panels, wind turbines and a hydro dam in a green valley",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Separate site security from energy-performance diagnosis.",
    paragraphs: [
      "Renewable facilities cover large areas with few people on site. The strongest starting point is verifying events at gates, boundaries and equipment compounds, so an operator can decide whether a site visit is needed. Panel output, electrical faults and turbine condition stay with measurement and specialist inspection.",
    ],
    buyers: [
      "Renewable asset owners",
      "O&M providers",
      "Site security",
      "Operations centres",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Energy Site" },
      { label: "Building", example: "Control Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Compound Entry" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment compound or access point so questions about the equipment compound start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the O&M team inspect before changing the site arrangement?",
      "Show observations from the equipment compound during the last week.",
      "Which covered access points have recurring observations around service periods?",
    ],
    exampleAnswer:
      "Entry observations recur at an equipment compound during repeated service visits. Suggested next step: review visit coordination, gate arrangement and camera coverage with O&M before requesting a site change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Entry observations recur at an equipment compound during repeated service visits.",
    recommendation:
      "Review visit coordination, gate arrangement and camera coverage with O&M before requesting a site change.",
    decisionOwner: "O&M / operations centre",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring remote equipment-compound review and O&M priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered site observations only when the assessment basis is consistent; these scores are not panel health, generation efficiency or yield-loss measures.",
    dimensions: [
      {
        name: "Site Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured boundary, gate or equipment-compound access point follows the agreed access or schedule rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment-compound pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "O&M Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled remote observation at a defined site is reviewed against the agreed O&M investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable service or operating week",
    scope: "Selected gates, boundaries and equipment compounds with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map compounds and gates across each site",
      body: "Cameras are grouped by energy site, control building and equipment compound, so an alert at a compound entry points to a place the O&M team knows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search the equipment compound by week",
      body: "Ask Vision Copilot, “Show observations from the equipment compound during the last week,” to review compound activity without opening each remote feed.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See entry patterns around service visits",
      body: "Ask, “Which covered access points have recurring observations around service periods?” to separate routine service-visit entry from activity that needs a closer look.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Check before changing the site layout",
      body: "Ask, “What should the O&M team inspect before changing the site arrangement?” Suggestions such as reviewing the gate arrangement or camera coverage come with their observations, and O&M makes the call.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise compounds for the next visit",
      body: "Scores out of 100 across covered site observations show which access points and compounds the operations centre should review first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Test dawn and dusk glare, rain, vegetation growth, dust and long-distance views. Assess power and network resilience, and confirm how local recording and processing behave during outages.",
    requiredInputs: [
      "Mapped hierarchy for pilot gates, boundaries and equipment compounds",
      "Power and network resilience plan for remote cameras",
      "Confirmed local recording or processing behaviour during outages",
      "Representative testing across glare, weather, vegetation and long-distance views",
    ],
  },
  standards: {
    publicCopy:
      "Central Electricity Authority (CEA) electrical-safety regulations give context for covered renewable installations. Camera monitoring adds a security and access record alongside module certification, electrical inspection and energy-performance data from the right instruments.",
    frameworkIds: ["C14"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful perimeter alerts across weather conditions",
      definition:
        "Confirmed relevant perimeter or boundary alerts divided by reviewed alerts for the defined sites across representative weather conditions, using an agreed review rubric.",
      sourceOfTruth: "Authorised tests, maintenance schedules and review logs",
    },
    {
      label: "Remote camera unavailable hours",
      definition:
        "Hours of required remote camera or recording unavailability for priority sites during agreed monitoring windows.",
      sourceOfTruth: "Device and connectivity logs",
    },
    {
      label: "Reviewed-event acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed remote-site events.",
      sourceOfTruth: "Operations-centre acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of gate, boundary and compound events.",
    },
    {
      solutionSlug: "vms",
      body: "Remote review of agreed site cameras from the operations centre.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows connectivity loss and camera outages as coverage gaps, so a dark feed reads as a gap rather than a quiet site.",
    },
  ],
  faqs: [
    {
      question: "How can solar operators verify a remote intrusion without a site visit?",
      answer:
        "A perimeter or compound-entry alert arrives with the camera, location and clip. The operations centre checks it against planned O&M visits and decides whether to dispatch anyone. Camera and connectivity outages are tracked as unavailable hours, so a lost feed is visible instead of looking like a quiet site.",
    },
    {
      question: "Which areas of a solar or wind site should cameras cover first?",
      answer:
        "Start with gates, boundaries and equipment compounds, where verification helps decide whether a visit is needed. Map those cameras to the site, control building and compound, test them across glare, rain, vegetation and long-distance views, and measure useful perimeter alerts across weather conditions during the pilot.",
    },
    {
      question: "Can these cameras identify faulty solar cells?",
      answer:
        "No. Cameras here cover site security and access, not panel condition. Faulty cells are found through validated thermography, electrical testing or specialist inspection, and generation data shows where output has dropped. Site video can add context about access to an equipment compound around the same period, which helps O&M plan a visit.",
    },
    {
      question: "Can video prove equipment theft?",
      answer:
        "Not on its own: video can provide clips of a removal event at a covered compound, with the location and time, for the operations centre to review. Whether it was theft, and who owned or authorised the equipment's removal, is established through human investigation, maintenance records and other evidence.",
    },
    {
      question: "Does this measure lost generation?",
      answer:
        "No. Generation and loss analysis use energy and equipment data from the site's monitoring systems. Video adds context about site access around the same period, such as a compound entry during an unplanned visit, which the operations centre can review alongside the generation record when output drops.",
    },
  ],
  limits:
    "Surveillance video does not diagnose panel faults, measure generation or turbine condition, or prove theft on its own. Scores cover site observations only, not panel health or yield.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "alert-fatigue-is-an-ops-problem"],
    glossary: ["camera-health-monitoring", "video-analytics"],
    useCases: ["perimeter-intrusion-detection", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["utilities", "telecom-remote", "government"],
  finalCta: {
    heading: "Ask Vision Copilot about your renewable sites.",
    body: "Verify compound and boundary events across every remote energy site before you dispatch O&M.",
  },
  sources: [
    "README v2 §9.28",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C14",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
