import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const telecomRemoteIndustryPage: IndustryPageRecord = {
  slug: "telecom-remote",
  name: "Telecom & Remote Sites",
  cardLabel: "Telecom",
  siteNoun: { one: "telecom site", many: "telecom and remote sites" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Telecom & Remote Sites",
    description:
      "Telecom site CCTV analytics: shelter-entry alerts checked against planned visits, with camera and link health shown so a dropped feed isn't read as secure.",
    canonicalPath: "/industries/telecom-remote",
    image: "/Images/industries/telecom-remote-hero.webp",
  },
  hero: {
    eyebrow: "Telecom & Remote Sites",
    h1: "AI Video Analytics for Telecom & Remote Sites",
    lede: "Check shelter and equipment-zone entry alerts against planned maintenance visits, with camera and link health shown beside each alert so the operations centre can tell a dropped feed from a quiet site.",
    media: {
      kind: "image",
      src: "/Images/industries/telecom-remote-hero.webp",
      alt: "Operators at desks in a network operations centre with a wall of monitoring screens",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Distinguish an unexplained entry from planned field work.",
    paragraphs: [
      "Telecom sites have limited staffing and frequent maintenance visits. Remote operators need to know whether visible activity matches an authorised job before dispatching someone, and whether the camera was online to see it.",
      "A reference deployment covers the shelter entry, equipment zone and site perimeter, typically backhauled over cellular or satellite links whose uptime varies by site. Camera and connectivity health appear alongside each alert. Entry alerts go to field maintenance and the security operations centre, and where a work-order or ticketing system is available, review timestamps align with dispatched visits.",
    ],
    buyers: [
      "Tower companies",
      "Telecom operations",
      "Field maintenance",
      "Security teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Telecom Site" },
      { label: "Building", example: "Shelter Building" },
      { label: "Floor", example: "Ground Level" },
      { label: "Zone", example: "Equipment Zone" },
      { label: "Room", example: "Shelter Entry" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected shelter entry or equipment zone so questions about Shelter Entry 1 start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the access and coverage issues for today's field review.",
      "Find observations at Shelter Entry 1 overnight.",
      "Which covered sites show recurring equipment-area observations?",
    ],
    exampleAnswer:
      "Recurring equipment-area observations are difficult to interpret alongside intermittent camera availability. Suggested next step: review camera connectivity and planned visit records before escalating access concerns or commissioning a hardware change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring equipment-area observations are difficult to interpret alongside intermittent camera availability.",
    recommendation:
      "Review camera connectivity and planned visit records before escalating access concerns or commissioning a hardware change.",
    decisionOwner: "Field operations / telecom security",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shelter events and remote maintenance coordination into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered access activity and usable observations only when the assessment basis is consistent; never infer telecom service quality or fuel quantity from these scores.",
    dimensions: [
      {
        name: "Shelter Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured shelter or compound access point follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Equipment-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped equipment or battery zone is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Field Observation Review",
        family: "Review process",
        criterionSummary:
          "A valid observation has a documented human review within an agreed review window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable field-operations window",
    scope: "Selected telecom sites and shelter zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map shelters, compounds and equipment zones",
      body: "Each camera sits under its telecom site, shelter building and equipment zone, so a question about Shelter Entry 1 goes straight to that entrance.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Check a shelter entry overnight",
      body: "Ask Vision Copilot, “Find observations at Shelter Entry 1 overnight,” and review that entrance for the hours in question.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Compare equipment-area activity across sites",
      body: "Ask, “Which covered sites show recurring equipment-area observations?” and read the pattern next to each camera's availability for the same period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Build today's field-review list",
      body: "Ask, “Summarise the access and coverage issues for today's field review.” Suggestions such as checking connectivity and planned visit records come with their observations for field operations to decide.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise sites by access and coverage",
      body: "Scores out of 100 across covered access activity and usable observations show which sites need field attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Assess intermittent links, power conditions, enclosure ratings and mounting security, and confirm how cameras recover after an outage. Report surveillance-system health separately from the health of the telecom network itself.",
    requiredInputs: [
      "Mapped hierarchy for pilot shelters, compounds and equipment zones",
      "Agreed response owners for unexplained entry versus planned field work",
      "Connectivity and outage-recovery expectations for remote camera links",
      "Representative testing across maintenance visits, after-hours windows and intermittent links",
      "Camera and connectivity health status surfaced alongside alerts, so backhaul loss is never read as a secure site",
    ],
  },
  standards: {
    publicCopy:
      "Equipment in a telecom deployment is checked against the Telecommunication Engineering Centre's Mandatory Testing and Certification of Telecom Equipment (TEC/MTCTE) scheme and phase that currently apply to it, with exact models confirmed during solution design.",
    frameworkIds: ["C20"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Useful access events",
      definition:
        "Confirmed relevant shelter or compound access observations divided by reviewed alerts for the defined access points, using an agreed review rubric and visit schedule.",
      sourceOfTruth: "Work orders, controlled tests and supervisor review log",
    },
    {
      label: "Unavailable camera/recording hours",
      definition:
        "Hours when an expected camera or recording source was unavailable or not usable for the agreed assessment task during the pilot window.",
      sourceOfTruth: "Infrastructure logs and surveillance health records",
    },
    {
      label: "Time to verify a planned or unplanned visit",
      definition:
        "Time for an authorised reviewer to confirm whether visible activity matches a planned visit or requires escalation, from a defined starting input such as site and time window.",
      sourceOfTruth: "Work orders, timed verification exercises and infrastructure logs",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of shelter events and field observations.",
    },
    {
      solutionSlug: "vms",
      body: "Remote scene verification across agreed tower and shelter cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Intermittent links and recording faults show up separately from telecom network health, so field teams see coverage gaps clearly.",
    },
  ],
  faqs: [
    {
      question: "How do tower companies verify an intrusion without sending a technician?",
      answer:
        "An entry alert at the shelter or compound is checked against the day's planned maintenance visits. If no visit is scheduled, the operations centre reviews the clip before dispatching anyone. Camera and link health are shown with the alert, so a dropped connection is not mistaken for a quiet, secure site.",
    },
    {
      question: "Which telecom site areas should cameras cover?",
      answer:
        "Start with the shelter entry, the equipment zone and the site perimeter. Map each camera to the telecom site, shelter and zone, route entry alerts to field maintenance and the security operations centre, and align review timestamps with work orders where a ticketing system is available.",
    },
    {
      question: "Can CCTV measure diesel theft?",
      answer:
        "No. Fuel quantity and loss come from appropriate fuel measurements and records, such as tank sensors and refuelling logs. Video adds context around a reported event at the site, such as an entry to the equipment zone outside a planned visit, which field operations can review alongside those records.",
    },
    {
      question: "Does camera health show telecom network health?",
      answer:
        "No. Camera health covers the surveillance infrastructure: cameras, recording and the links they use. Telecom service health is monitored by your network systems, and the two are reported separately, so a dropped camera feed shows up as a coverage gap rather than a network fault or a quiet site.",
    },
    {
      question: "Will alerts work without connectivity?",
      answer:
        "A pilot outage test settles that. How local processing, recording and alert delivery behave when a site's cellular or satellite link drops depends on the proposed architecture. The test also checks how cameras recover afterwards, and camera and link health stay visible so the operations centre knows which periods had coverage.",
    },
  ],
  limits:
    "Video gives context around site events; fuel quantity, telecom service quality and network health come from their own systems. Behaviour during connectivity loss depends on the architecture and is confirmed in a pilot outage test.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "alert-fatigue-is-an-ops-problem"],
    glossary: ["camera-health-monitoring", "edge-ai-video-analytics"],
    useCases: ["perimeter-intrusion-detection", "unauthorized-area-entry", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["utilities", "solar-renewable", "data-centres"],
  finalCta: {
    heading: "Ask Vision Copilot about your remote sites.",
    body: "Check every shelter alert against planned visits and live camera health from one operations centre.",
  },
  sources: [
    "README v2 §9.29",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C20",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
