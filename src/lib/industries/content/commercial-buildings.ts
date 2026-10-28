import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const commercialBuildingsIndustryPage: IndustryPageRecord = {
  slug: "commercial-buildings",
  name: "Commercial Buildings",
  cardLabel: "Commercial",
  siteNoun: { one: "commercial building", many: "commercial buildings" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Commercial Buildings",
    description:
      "CCTV analytics for commercial buildings: after-hours alerts, lobby and lift-lobby congestion, and fast incident retrieval for facilities and security.",
    canonicalPath: "/industries/commercial-buildings",
    image: "/Images/industries/commercial-buildings.webp",
  },
  hero: {
    eyebrow: "Commercial Buildings",
    h1: "AI Video Analytics for Commercial Buildings",
    lede: "Flag after-hours activity and lobby and lift-lobby congestion, and route each alert to facilities or security. Retrieve the right common-area clip fast when an incident needs review.",
    media: {
      kind: "image",
      src: "/Images/industries/commercial-buildings.webp",
      alt: "Woman drinking a glass of orange juice in a kitchen",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Coordinate a response across shared spaces.",
    paragraphs: [
      "Multi-tenant buildings have overlapping activity at reception, lifts, parking and service entrances. Security may see an event without knowing which facilities or tenant team should act, so each monitored area gets a defined purpose and response owner. Visibility stays focused on common areas, with tenant spaces handled under their own agreements.",
      "A reference deployment covers lobbies, lift lobbies, parking entries and service corridors, typically on the building's own network segment rather than tenant IT. Retention follows the property's privacy and lease obligations, and each alert type goes to its owner: facilities for service and common-area events, security for access and incident review. Where an access-control or building management system (BMS) integration exists, align review with its logs so video and entry records are read together.",
    ],
    buyers: [
      "Facility managers",
      "Property owners",
      "Corporate security",
      "Tenant operations",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Office Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Reception Zone" },
      { label: "Room", example: "Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected lobby or common zone so questions about ground-floor reception start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the facilities team prioritise in today's building review?",
      "Find observations from the ground-floor reception this week.",
      "Which floors or common zones show recurring congestion?",
    ],
    exampleAnswer:
      "Lobby congestion repeatedly coincides with overlapping visitor and service activity. Suggested next step: review reception guidance and service scheduling with facilities, then compare similar operating windows.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Lobby congestion repeatedly coincides with overlapping visitor and service activity.",
    recommendation:
      "Review reception guidance and service scheduling with facilities, then compare similar operating windows.",
    decisionOwner: "Facilities / building operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring tenant-facing common areas and recurring service pressure into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare building floors and common zones where equivalent coverage and score definitions exist only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Common-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common pathway or staging space is clear according to an agreed observable criterion.",
        methodologyStatus: "proposed",
      },
      {
        name: "Reception Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible lobby or reception presence stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured service or restricted area follows the agreed schedule or access rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating window",
    scope: "Selected floors and common zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Start from ground-floor reception",
      body: "Cameras map to floors, reception zones and lobbies, so a question about ground-floor reception opens the right views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search reception activity for the week",
      body: "Ask Vision Copilot, “Find observations from the ground-floor reception this week,” to review visitor and service activity.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which floors keep congesting",
      body: "Ask which floors or common zones show recurring congestion, such as lobby crowding when visitor and service activity overlap.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Adjust reception and service scheduling",
      body: "Ask what facilities should prioritise in today's building review. A typical suggestion is to adjust reception guidance and service scheduling, then compare similar operating windows.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score common zones floor by floor",
      body: "0–100 scores compare building floors and common zones that share equivalent coverage and score definitions.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Separate common and tenant-controlled areas, and agree permissions, notice, retention and incident-sharing responsibilities. Test daylight changes through glass entrances and crowded lobbies.",
    requiredInputs: [
      "Mapped hierarchy for pilot common areas and service zones",
      "Agreed purpose and response owner per monitored area",
      "Permission, notice and retention rules for tenant-facing views",
      "Representative testing across daylight, crowding and after-hours windows",
      "Defined network segmentation between building and tenant systems, and alignment with access-control or BMS logs where those integrations exist",
    ],
  },
  standards: {
    publicCopy:
      "Building owners plan for premises and fire-safety requirements under the National Building Code and local rules, alongside privacy duties for common-area cameras. Observations of visible conditions, such as an obstructed route, feed the building's own safety reviews.",
    frameworkIds: ["C8", "C9"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Useful after-hours alerts",
      definition:
        "Confirmed relevant after-hours zone entries divided by reviewed alerts for the defined service areas, using an agreed review rubric and schedule.",
      sourceOfTruth: "Schedules, sampled footage and supervisor review log",
    },
    {
      label: "Sampled queue/count error",
      definition:
        "Difference between camera-derived aggregate occupancy or queue estimates and manual samples for the same lobby window.",
      sourceOfTruth: "Manual lobby samples and camera-derived counts",
    },
    {
      label: "Incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed investigation exercises",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of lobby, lift-lobby and after-hours events.",
    },
    {
      solutionSlug: "vms",
      body: "Building incident review across the agreed cameras, live and recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps common-area cameras available, so facilities and security can retrieve useful footage.",
    },
  ],
  faqs: [
    {
      question: "What can CCTV analytics do for a commercial building?",
      answer:
        "It flags after-hours activity and congestion in lobbies and lift lobbies, covers parking entries and service corridors, and routes each alert to its owner: facilities for service and common-area issues, security for access and incident review. Authorised staff can retrieve the right common-area clip quickly when an incident needs review.",
    },
    {
      question: "How do facilities and security share one camera system?",
      answer:
        "Each monitored area has a defined purpose and response owner, so the same cameras serve both teams without overlap. Facilities receives service and common-area alerts, security receives access and incident alerts, and role-based access keeps each team to its own scope.",
    },
    {
      question: "Can each tenant access only its authorised views?",
      answer:
        "It can be set up that way. Role-based access limits each user to the sites, cameras and functions in their scope, so a tenant's views can be restricted to its authorised users. The exact permission model for tenant-facing views, along with notice and retention rules, is agreed with your team and checked before rollout.",
    },
    {
      question: "Can occupancy estimates control HVAC?",
      answer:
        "Not within this scope. Lobby occupancy estimates support facilities review, but controlling HVAC would need a separately assessed BMS integration and validated measurements. If that integration is wanted, it is assessed and tested as its own project before any HVAC decision relies on a camera-derived count.",
    },
    {
      question: "Can video prove an exit is legally compliant?",
      answer:
        "No. An observation that an exit route looks obstructed is one input to the building's safety process, arriving with the clip, location and time. Whether an exit meets fire and premises requirements under the National Building Code and local rules is assessed through that process by the people responsible for it.",
    },
  ],
  limits: "Analytics covers common areas rather than tenant spaces. Video observations feed the building's safety process, where fire approval and compliance are assessed, and heating, ventilation and air conditioning (HVAC) control needs a separate BMS integration.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough", "vms-vs-nvr"],
    glossary: ["vms", "nvr-vs-dvr-vs-vms"],
    useCases: ["crowd-detection"],
  },
  relatedIndustrySlugs: ["construction", "data-centres", "hotels-hospitality"],
  finalCta: {
    heading: "Ask Vision Copilot about your building.",
    body: "Pick the main lobby and one service corridor, and see how alerts would split between facilities and security.",
  },
  sources: [
    "README v2 §9.14",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C8/C9",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
