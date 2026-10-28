import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const bankingIndustryPage: IndustryPageRecord = {
  slug: "banking",
  name: "Banking & Financial Institutions",
  cardLabel: "Banking",
  siteNoun: { one: "bank branch", many: "bank branches" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "Bank Branch CCTV Monitoring & AI Alerts",
    description:
      "Monitor CCTV across every bank branch: after-hours alerts, offline camera and recording-gap detection, and fast clip retrieval for regional security teams.",
    canonicalPath: "/industries/banking",
    image: "/Images/industries/banking.webp",
  },
  hero: {
    eyebrow: "Banking & Financial Institutions",
    h1: "Bank Branch CCTV Monitoring & AI Alerts",
    lede: "Watch every branch from one place: get after-hours entry alerts at branch entrances, see which cameras and recorders have stopped recording, and pull the right lobby clip fast for regional security.",
    media: {
      kind: "image",
      src: "/Images/industries/banking.webp",
      alt: "Illustration of a bank building surrounded by banking service icons, a phone and a laptop",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "See every branch camera, alert and recording from one place.",
    paragraphs: [
      "Branch networks need two things from CCTV: every camera recording, and a clear way to investigate a physical event across many locations. OrionAlerts reports what cameras show at the branch, such as entry, movement and visible conditions, using neutral event definitions and controlled access to footage. Regulatory scope differs between financial institutions, so each bank applies its own controls.",
    ],
    buyers: [
      "Physical security",
      "Branch operations",
      "Risk and compliance",
      "IT",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Branch Site" },
      { label: "Building", example: "Branch Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Service Zone" },
      { label: "Room", example: "Entrance Lobby" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected branch lobby or service zone so questions about the selected branch lobby start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the physical events regional security should review today.",
      "Show observations from the selected branch lobby this week.",
      "Which covered branches had recurring after-hours observations?",
    ],
    exampleAnswer:
      "After-hours observations recur at a branch entrance used for service visits. Suggested next step: review the service schedule and entry procedure with branch security; establish authorisation before further action.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "After-hours observations recur at a branch entrance used for service visits.",
    recommendation:
      "Review the service schedule and entry procedure with branch security; establish authorisation before further action.",
    decisionOwner: "Regional security / branch operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring branch-event review and regional follow-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered branch areas and equivalent periods only when the assessment basis is consistent; these scores are not fraud likelihood or customer-risk measures.",
    dimensions: [
      {
        name: "Branch Access Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined closed or restricted branch area follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped lobby or service pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Physical Observation Review",
        family: "Visible practices",
        criterionSummary:
          "A sampled physical observation at a defined branch area is reviewed against the agreed investigation rubric within the assessment window.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating or after-hours window",
    scope: "Selected branch lobbies and service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Name the branch, zone and lobby first",
      body: "Each camera is mapped to its branch, service zone and entrance lobby, so regional security reviews an event by place instead of by camera number.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search a branch lobby in plain words",
      body: "Ask Vision Copilot, “Show observations from the selected branch lobby this week,” and get the matching observations for that lobby and period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Spot after-hours patterns across branches",
      body: "Ask, “Which covered branches had recurring after-hours observations?” to see where entry outside opening hours keeps repeating across the network.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn today's events into a review list",
      body: "Ask, “Summarise the physical events regional security should review today.” Each suggestion, such as checking a service schedule, comes with the observations behind it for branch security to decide on.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Rank branch areas for the next review",
      body: "Scores out of 100 for branch access practices and service-area readiness show regional teams which covered branch areas to review first in comparable periods.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Place cameras to cover entrances, lobbies and service areas while keeping PIN entry, customer documents and sensitive screens out of view. Confirm role controls, retention, export procedures and the bank's hosting and security requirements during solution design.",
    requiredInputs: [
      "Mapped hierarchy for pilot branch lobbies and service zones",
      "Neutral physical-event definitions without fraud or intent labelling",
      "Role controls, retention and export procedures aligned to bank policy",
      "Camera placement that avoids unnecessary PIN, document or screen capture",
    ],
  },
  standards: {
    publicCopy:
      "Banks apply Reserve Bank of India (RBI) IT governance directions to their own controls, alongside institution-specific information-security and privacy assessments. OrionAlerts supports that work with role-based access and retention settings managed per camera, zone or site.",
    frameworkIds: ["C18", "C11", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Useful after-hours events",
      definition:
        "Confirmed relevant after-hours branch events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Branch schedules and review exercises",
    },
    {
      label: "Critical recording availability by branch",
      definition:
        "Share of required recording minutes with usable footage for priority branch cameras during agreed monitoring windows.",
      sourceOfTruth: "Recorder logs by branch",
    },
    {
      label: "Authorised incident retrieval time",
      definition:
        "Time for an authorised reviewer to locate the correct branch clip from a defined starting input such as time window and lobby.",
      sourceOfTruth: "Timed review exercises under authorised access",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of after-hours entry and other neutral physical events at each branch.",
    },
    {
      solutionSlug: "vms",
      body: "Live and recorded video from every branch camera in one view for regional security review.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Flags offline cameras and recording gaps by branch, so regional teams can restore coverage before footage is needed.",
    },
  ],
  faqs: [
    {
      question: "How can banks monitor CCTV across hundreds of branches?",
      answer:
        "A central team needs two things: alerts for after-hours activity at branch entrances, and confirmation that every branch camera and recorder is recording. OrionAlerts combines AI video alerts with camera health monitoring, so regional security sees offline cameras, recording gaps and flagged events by branch instead of checking each DVR.",
    },
    {
      question: "Can OrionAlerts alert on after-hours entry at a branch?",
      answer:
        "Yes. Entry into a defined closed or restricted branch area outside the agreed schedule is flagged with the branch, camera and clip, and sent to the dashboard, mobile app and email for regional security. Reviewers check the clip against service visits and branch schedules before deciding on any action.",
    },
    {
      question: "How do regional teams find the right branch clip?",
      answer:
        "Every question starts from the branch and the lobby rather than a camera number. An authorised reviewer selects the branch, area and time window, or asks Vision Copilot in plain language, and gets the matching observations with their clips. Pilots time this retrieval against the bank's current process.",
    },
    {
      question: "Can video analytics detect banking fraud?",
      answer:
        "No. OrionAlerts reports physical events at the branch, such as entry, movement and visible conditions, using neutral event definitions without fraud or intent labels. Deciding whether fraud occurred needs financial evidence and an authorised investigation; the clip, with its branch, camera and time, can support that investigation under your access controls.",
    },
    {
      question: "Is OrionAlerts RBI approved?",
      answer:
        "No. OrionAlerts does not claim RBI approval or certification. RBI IT governance directions apply to regulated entities and their own controls rather than serving as a product approval. Each bank decides how OrionAlerts' role-based access, audit trail and retention settings support those controls, and this is confirmed with your security and compliance teams during solution design.",
    },
    {
      question: "Can all branches use one retention period?",
      answer:
        "Not necessarily. Retention follows your bank's own policy and the obligations that apply to it, so periods can differ by branch type or camera. OrionAlerts manages retention per camera, zone or site, and the settings for each branch category are confirmed with your security and compliance teams during solution design.",
    },
  ],
  limits:
    "OrionAlerts reports physical events at branches. Fraud findings, identifying an offender and verifying financial authorisation need financial evidence and an authorised investigation. Branch scores rank review priorities only; they do not measure fraud likelihood or customer risk.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "why-traditional-cctv-monitoring-is-no-longer-enough"],
    glossary: ["camera-health-monitoring", "vms"],
    useCases: ["unauthorized-area-entry", "no-motion-black-screen-alert"],
  },
  relatedIndustrySlugs: ["data-centres", "retail-shopping", "government"],
  finalCta: {
    heading: "Ask Vision Copilot about your branch network.",
    body: "Bring after-hours alerts, camera health and clip retrieval for every branch into one regional view.",
  },
  sources: [
    "README v2 §9.25",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C18/C11/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
