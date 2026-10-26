import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const utilitiesIndustryPage: IndustryPageRecord = {
  slug: "utilities",
  name: "Utilities & Infrastructure",
  cardLabel: "Utilities",
  siteNoun: { one: "utility site", many: "substations and utility sites" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Substation & Utility Site CCTV Analytics",
    description:
      "CCTV analytics for substations and remote utility sites: verified perimeter events, remote-view outage hours and field-team acknowledgement times.",
    canonicalPath: "/industries/utilities",
    image: "/Images/industries/utilities-hero.webp",
  },
  hero: {
    eyebrow: "Utilities & Infrastructure",
    h1: "Substation & Utility Site CCTV Analytics",
    lede: "Verify perimeter and equipment-zone entry at substations and remote utility sites before dispatching a field team, and see which remote cameras have gone offline and for how long.",
    media: {
      kind: "image",
      src: "/Images/industries/utilities-hero.webp",
      alt: "Hydroelectric dam and river in a mountain valley, tinted dark blue",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Verify a remote event before dispatching the right team.",
    paragraphs: [
      "Distributed utility assets are hard to inspect quickly, and a boundary event may be routine maintenance, an animal or an unexplained entry. Remote video gives the operator the context to prioritise a response: what is visible at the equipment-zone entrance, whether a visit was planned and which team should go.",
    ],
    buyers: [
      "Utility operations",
      "Security",
      "Substation and site managers",
      "Operational technology (OT) engineering",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Utility Site" },
      { label: "Building", example: "Control Building" },
      { label: "Floor", example: "Operating Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Access Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected equipment-zone entrance or access area so questions about the equipment-zone entrance start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the observations for today's field-team briefing.",
      "Find observations at the selected equipment-zone entrance this week.",
      "Which covered sites show repeated access observations outside planned review windows?",
    ],
    exampleAnswer:
      "Repeated entry observations appear around an equipment-zone access point. Suggested next step: review the visit schedule, boundary arrangement and camera placement before deciding on a field inspection.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated entry observations appear around an equipment-zone access point.",
    recommendation:
      "Review the visit schedule, boundary arrangement and camera placement before deciding on a field inspection.",
    decisionOwner: "Utility operations / field team lead",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring remote-site access and field-inspection priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered utility locations and periods only when the assessment basis is consistent; these scores are never electrical isolation or installation-safety certification.",
    dimensions: [
      {
        name: "Site Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured perimeter or equipment-zone access point follows the agreed access or schedule rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment-area pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Field Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled remote observation at a defined site is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating or review window",
    scope: "Selected utility sites and equipment zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map each equipment zone and access area",
      body: "Cameras sit under their utility site, control building and equipment zone, so an operator reviews an entry event at the place the field team knows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Ask about an equipment-zone entrance",
      body: "Ask Vision Copilot, “Find observations at the selected equipment-zone entrance this week,” to review that entrance for the period in question.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find repeated entry outside planned windows",
      body: "Ask, “Which covered sites show repeated access observations outside planned review windows?” to see which sites keep showing entry the visit schedule leaves unexplained.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Prepare the field-team briefing",
      body: "Ask, “Summarise the observations for today's field-team briefing.” Suggestions such as reviewing the visit schedule or camera placement arrive with the observations behind them, and the field team lead decides.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise sites for field inspection",
      body: "Scores out of 100 across covered utility locations show where access observations need a field inspection first, compared over consistent periods.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Review power and connectivity resilience, maintenance access and cyber and network boundaries with OT owners. Confirm how cameras behave during connectivity loss and that all equipment suits the installation.",
    requiredInputs: [
      "Mapped hierarchy for pilot utility sites and equipment zones",
      "Power and connectivity resilience plan for remote cameras",
      "Cyber and network boundary review with OT owners",
      "Confirmed behaviour during connectivity loss and equipment suitability checks",
    ],
  },
  standards: {
    publicCopy:
      "Central Electricity Authority (CEA) safety regulations set electrical-safety context for covered installations in India, and specialised hazardous sites may also need a separate hazardous-area equipment assessment. Camera evidence supports the operator's site review alongside the utility's own protection, permit and inspection systems.",
    frameworkIds: ["C14", "C5"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Verified perimeter-event usefulness",
      definition:
        "Confirmed relevant perimeter or access events divided by reviewed alerts for the defined sites, using an agreed review rubric.",
      sourceOfTruth: "Work schedules and control-room review records",
    },
    {
      label: "Remote-view unavailable hours",
      definition:
        "Hours during agreed monitoring windows when a priority substation or site camera, or its recording, was unavailable.",
      sourceOfTruth: "Device and connectivity logs",
    },
    {
      label: "Acknowledgement time for reviewed events",
      definition:
        "Time from an alert being delivered or available to its acknowledgement by the control room, for reviewed substation and remote-site events.",
      sourceOfTruth: "Control-room acknowledgement records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of remote equipment-zone and perimeter events.",
    },
    {
      solutionSlug: "vms",
      body: "Remote scene verification across agreed substation and site cameras before a crew is sent.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Shows the maintenance team which distributed cameras have lost remote visibility, and for how long.",
    },
  ],
  faqs: [
    {
      question: "How can utilities verify a substation intrusion remotely?",
      answer:
        "An entry alert at a perimeter or equipment-zone access point arrives with the site, camera and clip. The operator checks it against the visit schedule and boundary arrangement, then decides whether a field team is needed. Remote-view outage hours are tracked separately, so a lost feed shows up as a coverage gap.",
    },
    {
      question: "Which utility site areas should cameras cover first?",
      answer:
        "Start with the gates, perimeter and equipment-zone entrances at remote sites where an unexplained entry would trigger a field visit. Map those cameras to the utility site, control building and equipment zone, agree who acknowledges each alert, and measure useful perimeter events and acknowledgement time during the pilot.",
    },
    {
      question: "Can video show that equipment is de-energised?",
      answer:
        "No. Electrical isolation and de-energisation are confirmed through the approved procedures and instruments, with permits issued under the utility's own system. Video shows the visible scene around the equipment, such as activity at an equipment-zone entrance, which helps the operator decide whether a field team needs to attend.",
    },
    {
      question: "Can camera events be linked to SCADA?",
      answer:
        "Only through a separate integration. Linking camera events to SCADA is scoped after its security and network boundaries have been assessed with your OT owners, and it is not assumed in the pilot. Until then, operators compare camera events with SCADA data using the site, equipment zone and time window.",
    },
    {
      question: "Can analytics replace patrols?",
      answer:
        "No. It helps prioritise patrols and site visits in covered areas by showing where entry outside planned windows keeps recurring and which remote cameras have gone offline. Staffing and inspection requirements stay with an independent operational assessment, and any change to patrol schedules is decided by the utility, not the analytics.",
    },
  ],
  limits:
    "Video shows what is visible at a site. Electrical isolation, energisation and process safety are confirmed through approved procedures and instruments, and scores are not installation-safety certification. Links to supervisory control and data acquisition (SCADA) systems and changes to patrol staffing need their own assessment.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "why-traditional-cctv-monitoring-is-no-longer-enough"],
    glossary: ["camera-health-monitoring", "video-analytics"],
    useCases: ["perimeter-intrusion-detection", "restricted-zone-monitoring", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["metals-mining", "oil-gas", "solar-renewable", "telecom-remote"],
  finalCta: {
    heading: "Ask Vision Copilot about your utility sites.",
    body: "Verify remote entry events and see which substation cameras are online from one control room.",
  },
  sources: [
    "README v2 §9.20",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C14/C5",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
