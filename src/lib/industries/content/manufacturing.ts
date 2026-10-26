import {
  INDUSTRY_SCHEMA_VERSION,
  industrySharedCtas,
} from "@/lib/industries/shared";
import type { IndustryPageRecord } from "@/lib/industries/types";

export const manufacturingIndustryPage: IndustryPageRecord = {
  slug: "manufacturing",
  name: "Manufacturing",
  cardLabel: "Manufacturing",
  siteNoun: { one: "factory", many: "factories" },
  schemaVersion: INDUSTRY_SCHEMA_VERSION,
  contentVersion: 2,
  status: "reviewed",
  seo: {
    title: "AI Video Analytics for Manufacturing Plants",
    description:
      "AI video analytics for factories: PPE and restricted-zone alerts, forklift–pedestrian crossings and material build-up, on compatible existing IP cameras.",
    canonicalPath: "/industries/manufacturing",
    image: "/Images/industries/manufacturing.webp",
  },
  hero: {
    eyebrow: "Manufacturing",
    h1: "AI Video Analytics for Manufacturing Plants",
    lede:
      "Get alerts when PPE is missing at production entries, someone enters a machine or maintenance zone, or material piles up at a transfer point, on compatible cameras you already have. Ask Vision Copilot what happened last shift and who should act.",
    media: {
      kind: "image",
      src: "/Images/industries/manufacturing.webp",
      alt: "Robotic arms and a conveyor packing boxes on a factory floor, with an engineer at a workstation",
    },
    primaryCta: industrySharedCtas.primary,
    secondaryCta: industrySharedCtas.secondaryHero,
  },
  context: {
    heading: "See the exceptions that routine rounds can miss.",
    paragraphs: [
      "A factory can have extensive CCTV coverage and still depend on someone noticing a problem at the right moment. Shift changes, shared vehicle routes and busy production areas make continuous manual observation difficult. Plant leaders need to know where an event happened, whether it needs intervention and which team owns the response. Start video analytics with these decisions, then expand to more complex production analysis.",
      "A reference deployment places cameras at production entries, vehicle-pedestrian crossings and one material-transfer point, on a network segment separated from the plant's operational technology (OT) systems. Retention matches the window a safety or quality review typically needs. Send PPE and flow alerts to the production supervisor and EHS, the people who know the shift. Where a shift-scheduling system is available, align review timestamps with its records as well as camera time.",
    ],
    buyers: [
      "Plant heads",
      "EHS managers",
      "Production supervisors",
      "Security and IT",
    ],
  },
  locationContext: {
    hierarchyExample: [
      { label: "Site", example: "Plant" },
      { label: "Building", example: "Production Building" },
      { label: "Floor", example: "Shop Floor" },
      { label: "Zone", example: "Assembly Zone" },
      { label: "Room", example: "Workcell" },
    ],
    cameraMappingCopy:
      "Cameras are mapped to the selected location so questions about Assembly Zone start from recognisable operational context.",
  },
  copilot: {
    prompts: [
      "What should the plant team review before the next shift?",
      "Show observations from Assembly Zone during the last shift.",
      "Which covered production zones had recurring material build-up this week?",
    ],
    exampleAnswer:
      "Material build-up appears repeatedly around the same transfer point during shift handover. Suggested next step: review staging space and replenishment timing at that transfer point, then check the next comparable shift after the change.",
    exampleStatus: "illustrative",
  },
  sceneIntelligence: {
    observedPattern:
      "Material build-up appears repeatedly around the same transfer point during shift handover.",
    recommendation:
      "Review staging space and replenishment timing at that transfer point; check the next comparable shift after the change.",
    decisionOwner: "Plant / production supervisor",
  },
  scorecards: {
    heading: "See what needs attention—and what changes after action.",
    body: "Bring shift handovers, PPE observations and recurring material build-up into a structured review with operational scores out of 100. Use the score alongside the location, period and contributing observations to decide where to focus. Compare production zones and shifts only when the assessment basis is consistent.",
    dimensions: [
      {
        name: "Observed Safety Practices",
        family: "Visible practices",
        criterionSummary:
          "A specified visible PPE item meets the agreed criterion at an observable entry.",
        methodologyStatus: "proposed",
      },
      {
        name: "Production-Area Flow",
        family: "Flow",
        criterionSummary:
          "A sampled visible queue or buffer stays within the agreed operational threshold.",
        methodologyStatus: "proposed",
      },
      {
        name: "Work-Zone Control",
        family: "Access practices",
        criterionSummary:
          "Reviewed entry follows the agreed observable zone or schedule rule.",
        methodologyStatus: "proposed",
      },
    ],
    scale: "0-100",
    methodologyStatus: "proposed",
    methodologyVersion: "proposal-3.2",
  },
  scorePresentation: {
    period: "Comparable shift window",
    scope: "Selected production zones with mapped cameras",
    coverage: "Monitoring Coverage shown separately when assessment windows are defined",
    evaluatedChecks: "Not assessed — awaiting approved product dataset",
    exclusions: "Unknown and not-applicable opportunities excluded from score denominators",
    trendBasis: "Trend delta in points between comparable periods with matched rubric and scope",
  },
  useCases: [
    {
      id: "location-into-decision",
      title: "Open the Assembly Zone by name",
      body: "Shift handovers, PPE observations and material build-up are tied to the plant's building tree, so a supervisor opens Assembly Zone or a workcell by name and sees the cameras that cover it.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["building-hierarchy", "vision-copilot"],
    },
    {
      id: "search-observations",
      title: "Search last shift's footage in plain words",
      body: "Ask Vision Copilot, “Show observations from Assembly Zone during the last shift,” and get the observations for that zone and period instead of scrolling through every production camera.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["vision-copilot", "scene-analysis"],
    },
    {
      id: "recurring-conditions",
      title: "Spot build-up that keeps coming back",
      body: "Ask, “Which covered production zones had recurring material build-up this week?” Ongoing scene analysis groups repeat observations by zone, so a recurring transfer-point problem stands out from a one-off alert.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["scene-analysis", "vision-copilot"],
    },
    {
      id: "improvement-decision",
      title: "Plan the next shift from the evidence",
      body: "Ask, “What should the plant team review before the next shift?” Vision Copilot suggests a next step, such as reviewing staging space and replenishment timing, and the production supervisor decides whether to act.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["recommendations"],
    },
    {
      id: "score-led-review",
      title: "Compare production zones and shifts",
      body: "Operational scores out of 100, built from PPE and material-flow observations, show which production zones and shifts to review first.",
      capabilityStatus: "owner-confirmed",
      claimIds: ["operational-scores"],
    },
  ],
  deployment: {
    body:
      "Begin with stable camera views at production entries, crossings and one material-transfer area. Test each shift, including low light, occlusion and PPE variations. Agree who receives each alert and how camera outages are handled.",
    requiredInputs: [
      "Stable camera views at production entries and crossings",
      "Mapped hierarchy for the pilot production areas",
      "Defined alert and Copilot review owners",
      "Representative shift testing including low light and occlusion",
      "Network segmentation between the camera system and plant OT systems, confirmed with IT/OT before installation",
    ],
  },
  standards: {
    publicCopy:
      "Video observations give EHS time-stamped context for internal safety reviews within an occupational health and safety programme. ISO 45001 certification covers the organisation's management system and is assessed separately.",
    frameworkIds: ["C1"],
    reviewedAt: "2026-09-13",
  },
  metrics: [
    {
      label: "Reviewed PPE exceptions per 100 observable entries",
      definition:
        "Confirmed relevant PPE exceptions divided by sampled observable entries using a predefined review rubric.",
      sourceOfTruth: "Sampled entry footage and supervisor review log",
    },
    {
      label: "Median alert-to-acknowledgement time",
      definition:
        "Acknowledgement timestamp minus delivered/available alert timestamp for reviewed events.",
      sourceOfTruth: "Alert delivery and acknowledgement records",
    },
    {
      label: "Unavailable camera/recording minutes per monitored shift",
      definition:
        "Usable recorded minutes compared with required recording minutes for the agreed cameras.",
      sourceOfTruth: "Device health and recording availability records",
    },
  ],
  solutions: [
    {
      solutionSlug: "ai-analytics",
      body: "PPE, restricted-zone and material build-up alerts for each production zone, with Vision Copilot search across shifts.",
    },
    {
      solutionSlug: "vms",
      body: "Live and recorded video for shift-level incident review across production areas.",
    },
    {
      solutionSlug: "health-monitoring",
      body: "Flags offline cameras and recording gaps in production areas so investigations have usable footage.",
    },
  ],
  faqs: [
    {
      question: "What can AI video analytics detect on a factory floor?",
      answer:
        "Typical starting points are missing helmets or hi-vis vests at production entries, people entering configured machine or maintenance zones, and material piling up at a transfer point; pedestrians in vehicle lanes can be assessed in a pilot. Alerts reach the production supervisor or EHS with the clip and location. Machine OEE and product quality need production-system data.",
    },
    {
      question: "Who receives factory alerts, and how?",
      answer:
        "Alerts go to the team that owns the area, typically the production supervisor and EHS for PPE and material-flow events. Each alert arrives on the dashboard, mobile app and email with the camera, location and clip, and the pilot agrees who handles camera outages before rollout.",
    },
    {
      question: "How does Vision Copilot help at shift handover?",
      answer:
        "A supervisor can ask what the plant team should review before the next shift. Vision Copilot answers from observations in the mapped zones, for example material build-up recurring at one transfer point during handover, and suggests a next step such as checking staging space and replenishment timing.",
    },
    {
      question: "Can AI video analytics calculate OEE from CCTV?",
      answer:
        "Not on its own: video shows visible stoppages and material build-up that add context to OEE losses. OEE itself needs defined availability, performance and quality data from your production systems, so linking camera observations to OEE is treated as a separate integration scope, agreed after the safety and flow pilot.",
    },
    {
      question: "Does PPE detection prove compliance?",
      answer:
        "No. It flags selected visible PPE exceptions, such as a missing helmet or hi-vis vest, at defined entry points for a supervisor to review. It cannot confirm every item, correct fit or equipment condition, so those checks, and full legal compliance, stay with your site's own inspections and safety processes.",
    },
    {
      question: "Where should a pilot begin?",
      answer:
        "Choose one well-lit entrance, a clearly defined restricted area and an accountable response team. Test the views across every shift, including low light and occlusion, and agree who receives each alert and how camera outages are handled. Expand only after representative shifts have been reviewed with the production supervisor and EHS.",
    },
  ],
  limits:
    "Video covers visible conditions in each camera's view. Overall equipment effectiveness (OEE), product quality, PPE fit and legal compliance need production data and the site's own inspections.",
  furtherReading: {
    blogs: ["ai-ppe-detection-factories", "add-ai-to-existing-cctv-cameras"],
    glossary: ["ppe-detection", "video-analytics"],
    useCases: ["safety-compliance-detection", "restricted-zone-monitoring"],
  },
  relatedIndustrySlugs: ["automotive", "textile", "polymers-plastics", "pulp-paper"],
  finalCta: {
    heading: "Ask Vision Copilot about your plant.",
    body:
      "Start with one production entry, one crossing and one transfer point on cameras you already have.",
  },
  sources: ["README v2 §9.1", "README v2 §§3.1–3.3", "README v2 §7", "framework C1"],
  review: {
    reviewedAt: "2026-09-13",
  },
};
