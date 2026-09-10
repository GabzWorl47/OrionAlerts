import type { IndustryCta, IndustryFaq } from "@/lib/industries/types";

/** Shared customer-facing copy from README v2 §§3.1, 3.3, 7. */

export const INDUSTRY_SCHEMA_VERSION = 2;

export const industrySharedCtas = {
  primary: { label: "Book a Demo", href: "/book-demo" } satisfies IndustryCta,
  secondaryHero: {
    label: "Explore Vision Copilot",
    href: "#vision-copilot",
  } satisfies IndustryCta,
  secondaryFinal: { label: "Talk to Our Expert", href: "/contact" } satisfies IndustryCta,
};

export const industrySharedCopy = {
  defaultPositioning:
    "Ask your building what needs attention. OrionAlerts maps cameras to your sites, buildings, floors, zones and rooms, analyses scenes over time, and brings the results into Vision Copilot. Search in everyday language, review alerts and recommendations, and use operational scores to guide daily decisions and improvement priorities.",
  buildingTreeIntro:
    "See your operation in the structure your team uses. Organise sites, buildings, floors, zones and rooms, then map cameras to their locations. A question about reception, a loading bay or a production area starts with a recognisable place and its available camera context.",
  copilotIntro:
    "Ask what happened. Find where it happened. Decide what to review next. Vision Copilot lets you type questions and search available visual observations in everyday language. Use the mapped location and a relevant period to focus the conversation on the operation you manage.",
  recommendationsIntro:
    "Move from an observation to a practical next step. Review scene-based recommendations alongside the conditions the system observed. Use them to plan an inspection, revisit a recurring issue or assess an operational improvement, with the final decision staying with your team.",
  scoreIntro:
    "Bring structure to daily review with operational scores out of 100 and observation trends. Look at the location and period behind each result, inspect the observations that need attention, and revisit comparable periods after action. A score supports judgment; it does not replace the underlying context.",
  deploymentHeading: "Start with the cameras, conditions and decisions that matter.",
  deploymentIntroduction:
    "A useful deployment starts with a defined problem. Review camera coverage, operating hours, lighting, network capacity and who will respond to an alert. Select a small set of observable events, agree how to assess them and expand after the pilot demonstrates useful results.",
  workflowLabels: ["Map", "Observe", "Ask", "Prioritise", "Act", "Review"] as const,
  workflowExplanation:
    "Cameras are mapped to the places your teams manage. Ongoing scene analysis brings observations and alerts into that location context. Use Vision Copilot to ask what happened and what needs attention, review recommendations, and decide on the next action. Return to the same scope and a comparable period to assess the observations and scores after a change.",
  measurementNote:
    "Pilot results depend on scene conditions and event definitions. Compare reviewed alerts with representative ground-truth observations, including missed events. Track nuisance alerts and response times before setting a wider rollout target. The measures shown here are evaluation criteria, not guaranteed improvements.",
  scoreMethodologyNote:
    "Proposed score names and formulas are design recommendations. Demonstrate only approved product values or clearly labelled illustrative states. If no valid opportunities exist, show Not assessed — never invent a flattering percentage.",
  solutionBasis: {
    "ai-analytics":
      "Ask questions about mapped locations, search available visual observations and review scene-based alerts, recommendations and scores with Vision Copilot.",
    vms: "Review live and recorded video across the agreed camera estate.",
    "health-monitoring":
      "Identify supported camera, recording and infrastructure issues that can leave teams without usable footage.",
  } as const,
};

export const industrySharedFaqs: IndustryFaq[] = [
  {
    question: "What is Vision Copilot?",
    answer:
      "Vision Copilot is OrionAlerts' conversational interface for asking questions and searching available visual observations. It uses the mapped operational context to help teams review what needs attention and consider relevant next steps.",
  },
  {
    question: "Why map cameras to a building tree?",
    answer:
      "A camera becomes more useful when its view is connected to a place the team recognises. The hierarchy connects sites, buildings, floors, zones and rooms with their cameras, giving searches and operational reviews a consistent location context.",
  },
  {
    question: "What do scores out of 100 mean?",
    answer:
      "Scores help organise review of observed conditions. Read each score with its stated assessment basis, location, period and supporting observations. A score is not a certificate of safety or compliance, and missing observations do not prove that conditions are satisfactory.",
  },
  {
    question: "Can recommendations guide property improvements?",
    answer:
      "Recommendations can help your team identify issues to inspect and changes to assess, such as staging arrangements, access practices or camera coverage. Review the evidence and operational constraints before deciding on a change; outcomes are not guaranteed.",
  },
  {
    question: "Can we use our existing CCTV cameras?",
    answer:
      "Compatible IP camera streams may be reused after a technical assessment. Camera position, image quality, supported stream formats, network access and available compute determine which use cases are practical. Confirm the selected cameras and deployment architecture before rollout.",
  },
  {
    question: "How should video access and retention be planned?",
    answer:
      "Define the purpose of monitoring, authorised users, retention period and incident-review process before deployment. Discuss the required access, storage and privacy controls during the assessment and verify what the selected configuration supports. Apply your organisation's policies and the requirements relevant to your location and people being recorded.",
  },
];

export const industrySectionLabels = {
  mapped: "Your operation, mapped",
  copilot: "Ask Vision Copilot",
  useCases: "Use cases for your operation",
  workflow: "From scenes to decisions",
  scores: "Scores and observation trends",
  deployment: "Deployment considerations",
  standards: "Standards and procurement considerations",
  pilotMetrics: "What to measure in a pilot",
  solutions: "Recommended OrionAlerts solutions",
  faqs: "Frequently asked questions",
  related: "Related industries",
} as const;

export const industrySectionAnchors = {
  mapped: "building-intelligence",
  copilot: "vision-copilot",
  useCases: "use-cases",
  workflow: "workflow",
  scores: "scores",
  deployment: "deployment",
  standards: "standards",
  pilotMetrics: "pilot-metrics",
  solutions: "solutions",
  faqs: "faqs",
  related: "related-industries",
  finalCta: "final-cta",
} as const;
