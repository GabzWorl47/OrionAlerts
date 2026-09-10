import { automotiveIndustryPage } from "@/lib/industries/content/automotive";
import { commercialBuildingsIndustryPage } from "@/lib/industries/content/commercial-buildings";
import { logisticsIndustryPage } from "@/lib/industries/content/logistics";
import { manufacturingIndustryPage } from "@/lib/industries/content/manufacturing";
import type { IndustryPageRecord, IndustryPublicationStatus } from "@/lib/industries/types";

/** Only reviewed/published records render on the migrated path. */
const industryPageRecords: IndustryPageRecord[] = [
  manufacturingIndustryPage,
  logisticsIndustryPage,
  automotiveIndustryPage,
  commercialBuildingsIndustryPage,
];

const bySlug = new Map(industryPageRecords.map((record) => [record.slug, record]));

export function getIndustryPageRecord(slug: string) {
  return bySlug.get(slug);
}

export function listIndustryPageRecords() {
  return industryPageRecords;
}

export function isMigratedIndustryStatus(status: IndustryPublicationStatus) {
  return status === "reviewed" || status === "published";
}

export function shouldUseMigratedIndustryPage(slug: string) {
  const record = getIndustryPageRecord(slug);
  return Boolean(record && isMigratedIndustryStatus(record.status));
}
