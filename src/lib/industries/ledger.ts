import type { MigrationLedgerEntry } from "@/lib/industries/types";

/**
 * Migration ledger for industry-page rollout (README v2 §11).
 * Do not mark QA columns as passed until checks are actually done.
 */
export const industryMigrationLedger: MigrationLedgerEntry[] = [
  {
    slug: "manufacturing",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Remapped to README v2 Vision Copilot blueprint on shared renderer. QA columns remain pending until §11 acceptance.",
  },
  {
    slug: "logistics",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Migrated from README v2 §9.8 onto shared Vision Copilot renderer. Regression-check manufacturing after this change. QA pending.",
  },
  {
    slug: "automotive",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Migrated from README v2 §9.2 onto shared Vision Copilot renderer. C2 (IATF 16949) added to frameworks. QA pending.",
  },
  {
    slug: "commercial-buildings",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Migrated from README v2 §9.14 onto shared Vision Copilot renderer. Standards C8/C9. QA pending.",
  },
  {
    slug: "cement",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.3. Standards C3 (BIS/QCO). Further QA deferred.",
  },
  {
    slug: "sports-events",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.30. Standards C21/C8. Further QA deferred.",
  },
  {
    slug: "telecom-remote",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "passed",
    notes:
      "Migrated from README v2 §9.29 onto shared Vision Copilot renderer. Standards C20 (TEC/MTCTE). Build passed; visual/claim QA pending.",
  },
  {
    slug: "metals-mining",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.4. Standards C4 (DGMS). Further QA deferred.",
  },
  {
    slug: "oil-gas",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.5. Standards C5 (PESO/IECEx/ATEX). Further QA deferred.",
  },
  {
    slug: "pharma",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.6. Standards C6 (Schedule M / Part 11). Further QA deferred.",
  },
  {
    slug: "food-fmcg",
    state: "reviewed",
    schemaVersion: 2,
    contentVersion: 2,
    claimReview: "pending",
    standardsReview: "pending",
    visualQA: "pending",
    buildQA: "pending",
    notes:
      "Content migrated from README v2 §9.7. Standards C7 (FSSAI / ISO 22000). Further QA deferred.",
  },
];

export function getLedgerEntry(slug: string) {
  return industryMigrationLedger.find((entry) => entry.slug === slug);
}
