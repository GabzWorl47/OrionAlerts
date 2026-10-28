import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const educationCampusesIndustryPage: IndustryPageRecord = {
  slug: "education-campuses",
  name: "Education & Campuses",
  cardLabel: "Education",
  siteNoun: { one: "campus", many: "schools and campuses" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI CCTV for Schools & College Campuses",
    description:
      "AI CCTV for schools and colleges: verified perimeter alerts, arrival congestion at gates and common areas, and staff response tracking, without biometrics.",
    canonicalPath: "/industries/education-campuses",
    image: "/Images/industries/education.webp",
  },
  hero: {
    eyebrow: "Education & Campuses",
    h1: "AI CCTV for Schools & College Campuses",
    lede: "Verify perimeter alerts, see arrival congestion at gates and reception, and give staff the location and clip they need to respond across school and college campuses, with monitoring focused on observable safety events.",
    media: {
      kind: "image",
      src: "/Images/industries/education.webp",
      alt: "Illustration of children using tablets and a holographic globe in a classroom",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Help staff respond while respecting the people on campus.",
    paragraphs: [
      "Arrival, dispersal and public events create changing activity around a campus. Staff need timely context about entrances, boundaries and common areas, without treating ordinary student behaviour as suspicious. Begin with entrances and boundaries, then assess any broader use against a specific safety purpose. Schools and universities have different populations and responsibilities, so each sets its own monitoring policy.",
    ],
    buyers: [
      "School administrators",
      "Campus security",
      "Safeguarding",
      "Facilities teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "School or University Campus" },
      { label: "Building", example: "School Block or Academic Building" },
      { label: "Floor", example: "Ground Floor" },
      { label: "Zone", example: "Reception Zone" },
      { label: "Room", example: "Admission Office" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected reception or admission-office zone, whether that is a school's main block or a university's academic building, so questions about the admission-office zone start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the administration team review before tomorrow's arrival period?",
      "Show observations from the admission-office zone this morning.",
      "Which covered common areas had repeated congestion during arrival?",
    ],
    exampleAnswer:
      "Repeated arrival-period congestion appears around the admission-office approach. Suggested next step: review visitor guidance and arrival staffing with administration; assess the outcome during comparable arrival periods.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Repeated arrival-period congestion appears around the admission-office approach.",
    recommendation:
      "Review visitor guidance and arrival staffing with administration; assess the outcome during comparable arrival periods.",
    decisionOwner: "Administration / campus security",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring arrival, reception and common-area safeguarding into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare common areas and operating periods only when the assessment basis is consistent; never score individual students or make safeguarding judgments from these scores alone.",
    dimensions: [
      {
        name: "Arrival-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or queue at a defined gate or waiting area stays within the agreed operational threshold during arrival periods.",
        methodologyStatus: "proposed",
      },
      {
        name: "Common-Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped common pathway is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured utility or maintenance service area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable arrival period",
    scope: "Selected entrances and common areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map gates, reception and admission offices",
      body: "Cameras sit under the campus, building and reception zone, whether that is a school block or a university academic building, so a question about the admission-office zone goes straight to its views.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Check this morning's reception zone",
      body: "Ask Vision Copilot, “Show observations from the admission-office zone this morning,” to review arrivals at that zone.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find common areas that congest at arrival",
      body: "Ask, “Which covered common areas had repeated congestion during arrival?” to see which areas need guidance or staffing changes.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Plan tomorrow's arrival period",
      body: "Ask, “What should the administration team review before tomorrow's arrival period?” Suggestions such as revised visitor guidance or arrival staffing come with their observations for administration to decide.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Rank common areas for staff attention",
      body: "Scores out of 100 for arrival-area flow, common-route readiness and service-area control compare common areas across operating periods, with every score tied to a place.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Involve safeguarding, administration and privacy owners from the start. Keep toilets, changing areas and other private spaces out of camera view, and validate purpose, access, retention and any child-related requirements before expanding coverage.",
    requiredInputs: [
      "Mapped hierarchy for pilot entrances, reception and common areas",
      "Safeguarding, administration and privacy ownership for the pilot",
      "Purpose, access and retention rules validated before expansion",
      "Exclusion of toilets, changing areas and other private spaces",
    ],
  },
  standards: {
    publicCopy:
      "Affiliated schools assess CBSE school-safety provisions for their campus, while universities follow their own requirements. Child-data and monitoring requirements get a dedicated privacy review.",
    frameworkIds: ["C12", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Verified perimeter events",
      definition:
        "Confirmed relevant after-hours or boundary events divided by reviewed alerts for the defined areas, using an agreed review rubric.",
      sourceOfTruth: "Authorised tests and staff observations",
    },
    {
      label: "Staff acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed campus events.",
      sourceOfTruth: "Alert delivery and staff acknowledgement records",
    },
    {
      label: "Count error during sampled arrival periods",
      definition:
        "Difference between camera-derived aggregate occupancy estimates and manual samples for the same arrival window.",
      sourceOfTruth: "Staff observations and camera-derived counts",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of boundary, gate and common-area events on campus.",
    },
    {
      solutionSlug: "vms",
      body: "Authorised safeguarding review across agreed campus cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps agreed campus views recording, so investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "How can schools use AI CCTV safely?",
      answer:
        "Start with entrances and boundaries that have a documented safety purpose and an accountable response team. Keep toilets and changing rooms out of camera view, limit footage access to authorised staff, and review CBSE school-safety provisions where they apply. Expand coverage only after purpose, access and retention are validated.",
    },
    {
      question: "Can AI CCTV alert staff to a perimeter event on campus?",
      answer:
        "Yes. After-hours or boundary events at mapped gates and boundaries are flagged with the location and clip and sent to the dashboard, mobile app and email for campus security to verify. Pilots measure verified perimeter events and staff acknowledgement time before coverage is expanded.",
    },
    {
      question: "Does the scope include facial-recognition attendance?",
      answer:
        "No. Campus deployments focus on observable safety events at entrances, boundaries and common areas, and biometric attendance and identity profiling are outside this scope. Scores and alerts describe places, such as a gate or reception zone, rather than individual students, and any broader use is assessed against a specific safety purpose first.",
    },
    {
      question: "Can AI determine bullying?",
      answer:
        "No. Video can show a visible incident in a covered common area for trained staff to review, with the location and time. Intent and the full context behind an incident are established through the school's safeguarding processes and human judgement, so an alert is a prompt for staff attention rather than a finding.",
    },
  ],
  limits:
    "Campus monitoring covers observable safety events in agreed areas; it does not take biometric attendance, profile students or establish intent such as bullying. Scores describe places, never individual students, and CBSE provisions apply to affiliated schools only.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough", "alert-fatigue-is-an-ops-problem"],
    glossary: ["video-analytics", "vms"],
    useCases: ["perimeter-intrusion-detection", "crowd-detection"],
  },
  relatedIndustrySlugs: ["sports-events", "healthcare", "residential"],
  finalCta: {
    heading: "Ask Vision Copilot about your campus.",
    body: "Give campus security and administration one view of gates, reception and common areas.",
  },
  sources: [
    "README v2 §9.16",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C12/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
