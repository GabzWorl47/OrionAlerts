export type IndustryPublicationStatus = "legacy" | "draft" | "reviewed" | "published";

export type CapabilityStatus =
  | "owner-confirmed"
  | "baseline-claim"
  | "pilot-dependent"
  | "integration-dependent"
  | "specialist";

export type IndustryCta = {
  label: string;
  href: string;
};

export type IndustryHeroMedia = {
  kind: "image" | "video";
  src: string;
  poster?: string;
  alt: string;
  caption?: string;
  demonstrationLabel?: string;
};

export type HierarchyLevel = {
  label: string;
  example: string;
};

export type ScoreDimension = {
  name: string;
  family: string;
  criterionSummary: string;
  methodologyStatus: "proposed" | "approved";
};

export type IndustryUseCaseRecord = {
  id: string;
  title: string;
  body: string;
  capabilityStatus: CapabilityStatus;
  claimIds: string[];
  constraints?: string;
};

export type IndustryWorkflowStep = {
  label: string;
  description?: string;
};

export type IndustryMetric = {
  label: string;
  definition: string;
  sourceOfTruth: string;
};

export type IndustrySolutionBlurb = {
  solutionSlug: string;
  body: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustrySeo = {
  title: string;
  description: string;
  canonicalPath: string;
  ogTitle?: string;
  ogDescription?: string;
  image?: string;
};

export type IndustryPageRecord = {
  slug: string;
  name: string;
  cardLabel: string;
  cardSummary: string;
  schemaVersion: number;
  contentVersion: number;
  status: IndustryPublicationStatus;
  seo: IndustrySeo;
  hero: {
    eyebrow: string;
    h1: string;
    lede: string;
    media: IndustryHeroMedia;
    primaryCta: IndustryCta;
    secondaryCta: IndustryCta;
  };
  context: {
    heading: string;
    paragraphs: string[];
    buyers: string[];
  };
  locationContext: {
    heading: string;
    body: string;
    hierarchyExample: HierarchyLevel[];
    cameraMappingCopy: string;
  };
  copilot: {
    heading: string;
    body: string;
    prompts: [string, string, string];
    exampleAnswer: string;
    exampleStatus: "illustrative";
  };
  sceneIntelligence: {
    observedPattern: string;
    recommendation: string;
    decisionOwner: string;
    followUpPrompt: string;
  };
  scorecards: {
    heading: string;
    body: string;
    dimensions: [ScoreDimension, ScoreDimension, ScoreDimension];
    scale: "0-100";
    methodologyStatus: "proposed" | "approved";
    methodologyVersion: string;
  };
  scorePresentation: {
    period: string;
    scope: string;
    coverage: string;
    evaluatedChecks: string;
    exclusions: string;
    trendBasis: string;
  };
  useCases: IndustryUseCaseRecord[];
  workflow: {
    heading: string;
    scenario: string;
    steps: IndustryWorkflowStep[];
  };
  deployment: {
    heading: string;
    body: string;
    requiredInputs: string[];
  };
  standards: {
    publicCopy: string;
    frameworkIds: string[];
    reviewedAt?: string;
  };
  metrics: IndustryMetric[];
  solutions: IndustrySolutionBlurb[];
  faqs: IndustryFaq[];
  relatedIndustrySlugs: string[];
  finalCta: {
    heading: string;
    body: string;
  };
  sources?: string[];
  review?: {
    productOwner?: string;
    complianceOwner?: string;
    contentOwner?: string;
    reviewedAt?: string;
  };
};

export type MigrationLedgerEntry = {
  slug: string;
  state: IndustryPublicationStatus;
  schemaVersion: number;
  contentVersion: number;
  claimReview: "pending" | "passed" | "blocked";
  standardsReview: "pending" | "passed" | "blocked";
  visualQA: "pending" | "passed" | "blocked";
  buildQA: "pending" | "passed" | "blocked";
  releaseDate?: string;
  notes: string;
};
