import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const healthcareIndustryPage: IndustryPageRecord = {
  slug: "healthcare",
  name: "Healthcare & Hospitals",
  cardLabel: "Healthcare",
  siteNoun: { one: "hospital", many: "hospitals" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Hospitals & Healthcare",
    description:
      "Hospital CCTV analytics for non-clinical areas: waiting-area congestion, access and pathway events, and authorised incident retrieval for security teams.",
    canonicalPath: "/industries/healthcare",
    image: "/Images/industries/healthcare.webp",
  },
  hero: {
    eyebrow: "Healthcare & Hospitals",
    h1: "AI Video Analytics for Hospitals & Healthcare",
    lede: "Watch waiting areas, entrances and non-clinical routes with the cameras the hospital already has. Facilities and security get congestion and pathway alerts with the location and clip, and authorised staff can retrieve an incident quickly.",
    media: {
      kind: "image",
      src: "/Images/industries/healthcare.webp",
      alt: "Nurses and doctors at a hospital nursing station and reception area",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Give the right team context without expanding monitoring unnecessarily.",
    paragraphs: [
      "Hospitals combine public access, urgent activity and sensitive care. Security and facilities teams need to see congestion at entrances and waiting areas, obstructions in service routes and entry into utility or storage rooms. Start with public interfaces and controlled service zones, where the purpose of monitoring is clear and agreed with hospital leadership.",
    ],
    buyers: [
      "Hospital administration",
      "Security",
      "Facilities",
      "Nursing leadership and privacy owners",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Hospital Site" },
      { label: "Building", example: "Hospital Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Public Zone" },
      { label: "Room", example: "Waiting Area" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected public waiting area or non-clinical route so questions about the public waiting area start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise today's facilities issues without making clinical recommendations.",
      "Show observations from the public waiting area this afternoon.",
      "Which covered non-clinical routes had recurring obstruction observations?",
    ],
    exampleAnswer:
      "Recurring objects are observed in a designated non-clinical access route. Suggested next step: ask facilities to review equipment staging and route clearance; clinical priorities remain with hospital staff.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Recurring objects are observed in a designated non-clinical access route.",
    recommendation:
      "Ask facilities to review equipment staging and route clearance; clinical priorities remain with hospital staff.",
    decisionOwner: "Facilities / hospital security",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring non-clinical common-area review and facilities priorities into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare covered non-clinical areas only when the assessment basis is consistent; these scores are not patient health, clinical urgency or treatment-quality measures.",
    dimensions: [
      {
        name: "Public-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible occupancy or queue in an agreed public waiting or entrance area stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Non-Clinical Route Readiness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped non-clinical access route is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
      {
        name: "Service-Area Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a defined utility or storage service area follows the agreed access rule for the review period.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating window",
    scope: "Selected public and non-clinical service areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Start from the waiting area, not a camera",
      body: "Cameras map to hospital buildings, public zones and waiting areas, so a security or facilities question starts from a named place.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search the public waiting area by time",
      body: "Ask Vision Copilot, “Show observations from the public waiting area this afternoon,” and review that area's clips for the period.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Find routes that keep getting blocked",
      body: "Ask which covered non-clinical routes had recurring obstruction observations, then check whether equipment staging is the cause.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Turn obstructions into a facilities task",
      body: "Ask for a summary of today's facilities issues. A typical suggestion is for facilities to review equipment staging and route clearance, while clinical priorities stay with hospital staff.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score public-area flow and route readiness",
      body: "0–100 scores cover public-area flow, non-clinical route readiness and service-area access in the covered areas.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body: "Agree the monitored spaces, excluded spaces and access permissions with hospital leadership, and confirm incident export and retention controls before sensitive footage is used. Any treatment-room or ward use needs its own purpose and assessment.",
    requiredInputs: [
      "Mapped hierarchy for pilot public and non-clinical service areas",
      "Agreed excluded spaces and access permissions with hospital leadership",
      "Incident export and retention controls before sensitive footage use",
      "Clear ownership separating facilities/security review from clinical care",
    ],
  },
  standards: {
    publicCopy:
      "National Accreditation Board for Hospitals & Healthcare Providers (NABH) accreditation evaluates the hospital as an organisation against its programme standards, and privacy obligations shape how cameras in public and service areas are used. Video from non-clinical areas can support selected facilities and security reviews; it does not confer accreditation.",
    frameworkIds: ["C13", "C9"],
    reviewedAt: "2026-09-11",
  },
  metrics: [
    {
      label: "Reviewed access/pathway events",
      definition:
        "Confirmed relevant access or pathway events divided by reviewed alerts for the defined non-clinical areas, using an agreed review rubric.",
      sourceOfTruth: "Controlled tests and hospital review records",
    },
    {
      label: "Non-clinical response acknowledgement",
      definition:
        "Acknowledgement timestamp minus delivered or available alert timestamp for reviewed non-clinical facilities or security events.",
      sourceOfTruth: "Alert delivery and acknowledgement records",
    },
    {
      label: "Incident retrieval time under authorised access",
      definition:
        "Time for an authorised reviewer to locate the correct common-area clip from a defined starting input such as time window and waiting area.",
      sourceOfTruth: "Timed investigation exercises under authorised access",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Location-aware search, recommendations and score-led review of non-clinical events such as waiting-area congestion and blocked routes.",
    },
    {
      solutionSlug: "vms",
      body: "Authorised security review of live and recorded video across the agreed hospital cameras.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps selected hospital cameras recording, so authorised investigations retain usable footage.",
    },
  ],
  faqs: [
    {
      question: "How can hospitals use CCTV analytics without monitoring patients?",
      answer:
        "Start with public and non-clinical areas: entrances, waiting areas, service routes and utility or storage rooms. OrionAlerts flags congestion, route obstructions and entry into configured service areas for facilities and security, while wards, treatment rooms and bedsides stay outside the agreed scope unless a separate purpose is assessed.",
    },
    {
      question: "Which hospital areas should cameras cover first?",
      answer:
        "Public entrances and waiting areas, where congestion builds during busy periods, plus the non-clinical routes that equipment and staff move through. These views give security and facilities a clear purpose, a named response owner and footage that authorised reviewers can retrieve quickly by time window and area.",
    },
    {
      question: "Can this replace a patient fall alarm?",
      answer:
        "No. OrionAlerts is built for public and non-clinical areas and for facilities and security teams, not as a patient-monitoring system. A clinical or patient-monitoring use, such as fall detection at the bedside, would need specifically validated capabilities and a separate assessment with clinical leadership before it could be considered.",
    },
    {
      question: "Does NABH require OrionAlerts?",
      answer:
        "No. NABH accreditation evaluates the hospital against NABH's programme standards, and accreditation is not an endorsement of OrionAlerts. Footage from OrionAlerts can support selected facilities and security reviews the hospital chooses to run, alongside its own records, while accreditation decisions stay entirely with NABH and the hospital.",
    },
    {
      question: "Can all hospital staff view footage?",
      answer:
        "No. Access follows purpose and authorisation: role-based access gives security, facilities and other named users only the sites, cameras and functions they need. Those permissions, along with incident export and retention controls, are agreed with hospital leadership before deployment and before any sensitive footage is used.",
    },
  ],
  limits: "OrionAlerts covers public and non-clinical areas for facilities and security teams. Patient monitoring, fall alarms and clinical decisions stay with validated clinical systems and hospital staff, and scores describe observed conditions rather than patient health or treatment quality.",
  furtherReading: {
    blogs: ["why-traditional-cctv-monitoring-is-no-longer-enough", "cctv-camera-health-monitoring"],
    glossary: ["video-analytics", "vms"],
    useCases: ["crowd-detection", "abandoned-object-detection", "restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["education-campuses", "pharma", "hotels-hospitality"],
  finalCta: {
    heading: "Ask Vision Copilot about your hospital.",
    body: "Pick a waiting area and a service route for the pilot, and see what facilities and security would review each day.",
  },
  sources: [
    "README v2 §9.17",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "frameworks C13/C9",
  ],
  review: {
    reviewedAt: "2026-09-11",
  },
};
