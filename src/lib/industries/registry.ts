import { automotiveIndustryPage } from "@/lib/industries/content/automotive";
import { cementIndustryPage } from "@/lib/industries/content/cement";
import { commercialBuildingsIndustryPage } from "@/lib/industries/content/commercial-buildings";
import { darkStoresIndustryPage } from "@/lib/industries/content/dark-stores";
import { foodFmcgIndustryPage } from "@/lib/industries/content/food-fmcg";
import { logisticsIndustryPage } from "@/lib/industries/content/logistics";
import { manufacturingIndustryPage } from "@/lib/industries/content/manufacturing";
import { metalsMiningIndustryPage } from "@/lib/industries/content/metals-mining";
import { oilGasIndustryPage } from "@/lib/industries/content/oil-gas";
import { pharmaIndustryPage } from "@/lib/industries/content/pharma";
import { sportsEventsIndustryPage } from "@/lib/industries/content/sports-events";
import { telecomRemoteIndustryPage } from "@/lib/industries/content/telecom-remote";
import type { IndustryPageRecord, IndustryPublicationStatus } from "@/lib/industries/types";

/** Only reviewed/published records render on the migrated path. */
const industryPageRecords: IndustryPageRecord[] = [
  manufacturingIndustryPage,
  logisticsIndustryPage,
  automotiveIndustryPage,
  commercialBuildingsIndustryPage,
  darkStoresIndustryPage,
  foodFmcgIndustryPage,
  pharmaIndustryPage,
  oilGasIndustryPage,
  metalsMiningIndustryPage,
  cementIndustryPage,
  sportsEventsIndustryPage,
  telecomRemoteIndustryPage,
];

const bySlug = new Map(industryPageRecords.map((record) => [record.slug, record]));

export function getIndustryPageRecord(slug: string) {
  return bySlug.get(slug);
}

export function listIndustryPageRecords() {
  return industryPageRecords;
}
