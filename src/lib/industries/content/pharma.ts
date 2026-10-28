import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const pharmaIndustryPage: IndustryPageRecord = {
  slug: "pharma",
  name: "Pharmaceuticals & Life Sciences",
  cardLabel: "Pharma",
  siteNoun: { one: "pharma plant", many: "pharma plants" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Pharmaceutical Plants",
    description:
      "Flag gowning exceptions and controlled-area entry in pharma plants, retrieve clips fast for QA investigations and confirm CCTV is recording.",
    canonicalPath: "/industries/pharma",
    image: "/Images/industries/pharma.webp",
  },
  hero: {
    eyebrow: "Pharmaceuticals & Life Sciences",
    h1: "AI Video Analytics for Pharmaceutical Plants",
    lede:
      "Flag visible gowning exceptions and controlled-area entry, retrieve the right clip fast for QA investigations, and confirm CCTV is recording. Ask Vision Copilot which controlled areas had recurring observations this review period.",
    media: {
      kind: "image",
      src: "/Images/industries/pharma.webp",
      alt: "Lab-coated staff inspecting vials on a pharmaceutical filling line",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "Add investigation context without overstating quality assurance.",
    paragraphs: [
      "Pharmaceutical operations need controlled processes and reliable records. A camera helps a reviewer understand an event near an entrance or packaging area, while sterility and batch quality are established by QA's own testing. Define whether video is used for security, operational review or a regulated record before choosing the controls and validation approach, and keep quality ownership with QA.",
      "A reference deployment covers gowning rooms and controlled-zone entries, on a documented network segment that QA has approved for systems near good manufacturing practice (GMP) areas. Retention matches the window a QA investigation typically needs, with controlled-area alerts routed to QA and security. Where a badge or access-control system is in use, align review timestamps with its logs so video supports the access record.",
    ],
    buyers: [
      "Plant leadership",
      "QA",
      "Engineering",
      "Security and IT validation teams",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Site" },
      { label: "Building", example: "Manufacturing Building" },
      { label: "Floor", example: "Floor" },
      { label: "Zone", example: "Controlled Zone" },
      { label: "Room", example: "Gowning Room" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected gowning room or controlled zone so questions about the production entry start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "Summarise the visual observations for QA review, separating findings from recommendations.",
      "Find visible gowning observations at the production entry yesterday.",
      "Which controlled areas had recurring observations in this review period?",
    ],
    exampleAnswer:
      "A visible gowning observation recurs at one mapped entrance across several operating periods. Suggested next step: ask QA to review the checkpoint arrangement and relevant procedure; assess the supporting records before changing practice.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "A visible gowning observation recurs at one mapped entrance across several operating periods.",
    recommendation:
      "Ask QA to review the checkpoint arrangement and relevant procedure; assess the supporting records before changing practice.",
    decisionOwner: "QA / plant operations",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring controlled-area observations and QA investigation context into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare defined facility observations only when the assessment basis is consistent; never treat these scores as sterility, batch-release or GMP-compliance scores.",
    dimensions: [
      {
        name: "Visible Gowning Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible gowning item meets the agreed criterion at an observable production-entry checkpoint.",
        methodologyStatus: "proposed",
      },
      {
        name: "Controlled-Area Practices",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry into a configured controlled area follows the agreed schedule or access rule for the review period.",
        methodologyStatus: "proposed",
      },
      {
        name: "Packaging-Area Orderliness",
        family: "Readiness/orderliness",
        criterionSummary:
          "A mapped packaging pathway or staging space is clear according to an agreed observable criterion during sampled assessment windows.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable operating period",
    scope: "Selected controlled areas with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Map gowning rooms and controlled zones",
      body: "Gowning rooms, controlled zones and packaging areas are mapped with their cameras, so QA asks about the production entry by name.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Find yesterday's gowning observations",
      body: "Ask Vision Copilot, “Find visible gowning observations at the production entry yesterday,” to review that checkpoint for the chosen day.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "See which controlled areas recur",
      body: "Ask, “Which controlled areas had recurring observations in this review period?” Repeat observations at one mapped entrance show QA where a checkpoint needs attention.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Give QA findings and a suggested step",
      body: "Ask, “Summarise the visual observations for QA review, separating findings from recommendations.” QA receives the observations and a suggested step, such as reviewing the checkpoint arrangement, and checks supporting records before changing practice.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Score defined facility observations",
      body: "Scores out of 100 summarise defined facility observations, such as gowning and controlled-area practices, to set QA's review order.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Involve QA before defining alerts or retention. Separate ordinary security footage from records relied upon for regulated decisions. Validate required access, time synchronisation, change control, export and audit-trail capabilities against the intended use. Documentation for your validation team is agreed during solution design.",
    requiredInputs: [
      "Mapped hierarchy for pilot controlled areas and gowning checkpoints",
      "QA-agreed purpose for security, operational review or regulated-record use",
      "Retention, export and audit-trail requirements for the intended use",
      "Representative testing of access, time synchronisation and investigation retrieval",
      "Documented network and validation scope for any camera system positioned near GMP-relevant areas, agreed with QA before installation",
    ],
  },
  standards: {
    publicCopy:
      "Revised Schedule M sets GMP requirements for pharmaceutical manufacturers in India, and 21 CFR Part 11 applies to FDA-regulated electronic records based on intended use. QA decides which video records fall within those requirements.",
    frameworkIds: ["C6"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed entry/gowning observations against labelled samples",
      definition:
        "Confirmed relevant visible entry or gowning observations divided by reviewed alerts for the defined checkpoints, using a QA-approved review rubric.",
      sourceOfTruth: "QA-approved samples and supervisor review log",
    },
    {
      label: "Time to retrieve a known incident",
      definition:
        "Time for an authorised reviewer to locate the correct controlled-area clip from a defined starting input such as time window and location.",
      sourceOfTruth: "Controlled retrieval exercises",
    },
    {
      label: "Completeness of the agreed investigation package",
      definition:
        "Share of agreed investigation packages that include the required location, period, observations and supporting footage for the defined review plan.",
      sourceOfTruth: "QA investigation checklist and export records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "Gowning and controlled-area alerts, with Vision Copilot search by checkpoint and review period.",
    },
    {
      solutionSlug: "vms",
      body: "Authorised footage review across the agreed facility cameras, live or recorded.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Keeps agreed investigation views available and shows when a camera or recording stops, so QA can retrieve usable footage.",
    },
  ],
  faqs: [
    {
      question: "Can AI check gowning compliance?",
      answer:
        "It can flag visible gowning exceptions at defined production-entry checkpoints, such as a missing gowning item, for QA review. QA sees the clip, location and time, and decides whether the checkpoint arrangement or procedure needs attention. Sterility and full GMP compliance are confirmed through QA's own controls and testing.",
    },
    {
      question: "Is CCTV footage a GMP record?",
      answer:
        "Footage becomes a GMP-relevant record when QA relies on it for a regulated decision. Agree up front whether video serves security, operational review or a regulated record, then validate access, time synchronisation, export and audit-trail capabilities for that intended use.",
    },
    {
      question: "Does video prove cleanroom sterility?",
      answer:
        "No. Sterility is established by environmental monitoring, process controls and laboratory testing, and video cannot measure microbial contamination. What video shows is the visible side of cleanroom entry, such as when someone entered a controlled area and whether a gowning item was visibly missing, which QA reviews alongside its own monitoring results.",
    },
    {
      question: "Is the platform automatically Part 11 compliant?",
      answer:
        "Not automatically. 21 CFR Part 11 applicability depends on whether your site relies on video as an electronic record for a regulated decision and how those records are controlled. Your validation team decides whether the records fall within scope and assesses the actual system, procedures and validation evidence before footage is relied on.",
    },
    {
      question: "Can footage be linked to a batch?",
      answer:
        "Only through a defined, verified correlation method, such as alignment with batch or access-control records agreed with QA. Time and camera location alone fall short of guaranteed batch traceability, so the method is documented and tested before footage is used in a batch investigation, and QA keeps ownership of the batch record.",
    },
  ],
  limits:
    "Video shows visible gowning and entry events. Sterility, batch quality, GMP compliance and Part 11 status are established by QA, environmental monitoring, testing and your validated systems.",
  furtherReading: {
    blogs: ["cctv-camera-health-monitoring", "what-is-a-vision-intelligence-platform"],
    glossary: ["video-analytics", "camera-health-monitoring"],
    useCases: ["restricted-zone-monitoring", "unauthorized-area-entry"],
  },
  relatedIndustrySlugs: ["healthcare", "food-fmcg", "cold-storage"],
  finalCta: {
    heading: "Ask Vision Copilot about your pharma plant.",
    body:
      "Start with one gowning checkpoint and one controlled-area entry, scoped with QA.",
  },
  sources: [
    "README v2 §9.6",
    "README v2 §§3.1–3.3",
    "README v2 §7",
    "framework C6",
  ],
  review: {
    reviewedAt: "2026-09-13",
  },
};
