import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const governmentIndustryPage: IndustryPageRecord = {
  slug: "government",
  name: "Government & Public Infrastructure",
  cardLabel: "Government",
  siteNoun: { one: "public facility", many: "public facilities" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Public Infrastructure",
    description:
      "AI video analytics for public infrastructure: service-counter queues, route obstructions and recording availability across facilities, with human review.",
    canonicalPath: "/industries/government",
    image: "/Images/industries/government.webp",
  },
  hero: {
    eyebrow: "Government & Public Infrastructure",
    h1: "AI Video Analytics for Public Infrastructure",
    lede: "Watch service-counter queues, obstructions on public routes and recording availability across public facilities, with every flagged event reviewed by the responsible department.",
    media: {
      kind: "image",
      src: "/Images/industries/government.webp",
      alt: "Government of India administrative building with cars parked in front",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Specify the operational need before selecting the technology.",
    paragraphs: [
      "Public buildings and infrastructure have different users, operators and procurement requirements. A department may need queue visibility at a service counter or perimeter review at one facility, and the right deployment starts with that need. Define the facility, event, permitted use and response team first, and keep every flagged event in human review.",
    ],
    buyers: [
      "Departmental facilities and security",
      "Municipal operations",
      "Public-sector procurement",
      "IT",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Public Site" },
      { label: "Building", example: "Administrative Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Service Zone" },
      { label: "Room", example: "Counter Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected service-counter or common route so questions about the public service-counter area start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the facility changes that should be considered by the responsible team.",
      "Show observations from the public service-counter area today.",
      "Which covered facilities show repeated common-route obstructions?",
    ],
    exampleAnswer:
      "Repeated queue and obstruction observations occur around a shared service approach. Suggested next step: review queue guidance and temporary storage with the facility manager; keep service-entitlement decisions outside the analytics workflow.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated queue and obstruction observations occur around a shared service approach.",
    recommendation:
      "Review queue guidance and temporary storage with the facility manager; keep service-entitlement decisions outside the analytics workflow.",
    decisionOwner: "Facility manager / departmental operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring service-counter pressure and accountable facility review into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare public-facility operational areas only when the assessment basis is consistent; these scores are not citizen risk, eligibility or enforcement measures.",
    dimensions: [
      {
        name: "Service-Counter Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or occupancy at a defined public service counter stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Public-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped public pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined equipment or closed administrative area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable public-service operating window",
    scope: "Selected service counters, public routes and controlled areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map counters, routes and controlled areas",
      body: "Cameras are organised by public site, administrative building and service zone, so a question about the counter area goes to the cameras that cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Check a service counter today",
      body: "Ask Vision Copilot, “Show observations from the public service-counter area today,” to see how the counter area looked across the day.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find repeated route obstructions",
      body: "Ask, “Which covered facilities show repeated common-route obstructions?” to compare public routes across facilities for the same period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Brief the facility manager on changes",
      body: "Ask, “Summarise the facility changes that should be considered by the responsible team.” Suggestions such as queue guidance or temporary storage come with their observations; service-entitlement decisions stay with the department.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Prioritise facility areas for review",
      body: "Scores out of 100 for service-counter flow, public-route readiness and controlled-area practices show which facility areas need attention first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Build a procurement evidence checklist for the exact product versions and hardware. Confirm data governance, retention, network boundaries and which departments can access each view.",
    requiredInputs: [
      "Mapped hierarchy for pilot service counters, public routes and controlled areas",
      "Procurement evidence checklist for exact product versions and hardware",
      "Data governance, retention and departmental access rules",
      "Defined facility, event, permitted use and response team before expansion",
    ],
  },
  standards: {
    publicCopy:
      "Tenders check exact products, versions and certificate scope against STQC's CCTV/IoT scheme where it applies. Public-facility monitoring also gets a dedicated privacy review under India's data protection framework.",
    frameworkIds: ["C19", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed event usefulness",
      definition:
        "Confirmed relevant public-facility events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Labelled observations and authorised system logs",
    },
    {
      label: "Queue/count error",
      definition:
        "Difference between camera-derived queue or occupancy estimates and manual samples for the same service-counter window.",
      sourceOfTruth: "Manual samples and camera-derived counts",
    },
    {
      label: "Usable recording availability by facility",
      definition:
        "Share of required recording minutes with usable footage for priority cameras at each covered facility during agreed monitoring windows.",
      sourceOfTruth: "Authorised system and recording logs by facility",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of counter queues, route obstructions and controlled-area events.",
    },
    {
      solutionSlug: "vms",
      body: "Authorised multi-site review across agreed cameras, with each department's access set by role.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Tracks usable recording minutes at each facility, so missing coverage shows up across the estate.",
    },
  ],
  faqs: [
    {
      question: "How can government facilities use AI video analytics?",
      answer:
        "Start with a defined facility need, such as service-counter queues, obstructions on public routes or entry to controlled areas. OrionAlerts flags those observable events from existing cameras for the responsible department to review, and tracks usable recording availability at each facility so gaps in coverage are visible.",
    },
    {
      question: "Can OrionAlerts measure queues at public service counters?",
      answer:
        "Yes. It estimates queue and occupancy levels at mapped service-counter areas, and pilots compare those estimates with manual samples for the same window. Repeated queue and obstruction observations help the facility manager review queue guidance and temporary storage, while service-entitlement decisions stay with the department.",
    },
    {
      question: "Is the entire platform automatically STQC certified?",
      answer:
        "No. An STQC certificate applies to the specific product, version and scope named on it, so a camera's certificate does not extend to the whole OrionAlerts platform. Procurement teams check those details on the certificate itself rather than relying on a logo or a component's approval, and confirm what the tender requires.",
    },
    {
      question: "Does this predict criminal behaviour?",
      answer:
        "No. OrionAlerts flags observable events, such as service-counter queues, route obstructions and entry to controlled areas, for the responsible department to review. Predicting behaviour, identifying citizens and scoring risk or eligibility are outside its scope, and every flagged event stays with a human reviewer before any action.",
    },
    {
      question: "Can procurement requirements differ?",
      answer:
        "Yes. Requirements depend on the specific tender, product category, jurisdiction and deployment scope, so each procurement is reviewed on its own terms. A procurement evidence checklist for the exact product versions and hardware, together with data governance, retention and departmental access rules, is prepared before the pilot expands.",
    },
  ],
  limits:
    "OrionAlerts flags observable events for human review; it does not predict crime or behaviour, identify citizens or score risk, eligibility or enforcement. A camera's Standardisation Testing and Quality Certification (STQC) certificate covers that product only, not the whole platform.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough", "vms-vs-nvr"],
    glossary: ["vms", "video-analytics"],
    useCases: ["crowd-detection", "restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["banking", "airports-ports-railways", "solar-renewable", "sports-events"],
  finalCta: {
    heading: "Ask Vision Copilot about your public facilities.",
    body: "Bring counter queues, route obstructions and recording availability for every public facility into one review.",
  },
  sources: [
    "README v2 §9.27",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C19/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
