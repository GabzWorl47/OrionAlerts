import type { BlogSlug, GlossarySlug, UseCaseSlug } from "@/lib/industries/further-reading";

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

export type IndustryMetric = {
  label: string;
  definition: string;
  sourceOfTruth: string;
};

export type IndustrySolutionBlurb = {
  solutionSlug: string;
  body: string;
};

export type IndustryFurtherReading = {
  blogs: BlogSlug[];
  glossary: GlossarySlug[];
  /** Only events the page's own content already discusses. */
  useCases: UseCaseSlug[];
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
  /**
   * How the page names one site and several sites of this industry, used to
   * put the industry into section headings ("Your cement plant, mapped",
   * "Use cases for cement plants").
   */
  siteNoun: { one: string; many: string };
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
    hierarchyExample: HierarchyLevel[];
    cameraMappingCopy: string;
  };
  copilot: {
    /** prompts[0] is the question that exampleAnswer answers; the others are shown as further prompts. */
    prompts: [string, string, string];
    exampleAnswer: string;
    exampleStatus: "illustrative";
  };
  sceneIntelligence: {
    observedPattern: string;
    recommendation: string;
    decisionOwner: string;
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
  deployment: {
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
  /** Industry-specific Q&As only; these feed the page's FAQPage JSON-LD. */
  faqs: IndustryFaq[];
  /** One short, plain statement of what the page's capabilities do not cover. */
  limits: string;
  furtherReading: IndustryFurtherReading;
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

/**
 * The subset of a record that is sent to the client page component. Score
 * methodology placeholders, source notes and review metadata are internal and
 * must not reach the rendered HTML (including the RSC payload).
 */
export type PublicIndustryPage = Omit<
  IndustryPageRecord,
  "scorecards" | "scorePresentation" | "sources" | "review"
>;

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
