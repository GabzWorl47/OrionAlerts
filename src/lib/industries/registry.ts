import { airportsPortsRailwaysIndustryPage } from "@/lib/industries/content/airports-ports-railways";
import { automotiveIndustryPage } from "@/lib/industries/content/automotive";
import { bankingIndustryPage } from "@/lib/industries/content/banking";
import { cementIndustryPage } from "@/lib/industries/content/cement";
import { coldStorageIndustryPage } from "@/lib/industries/content/cold-storage";
import { commercialBuildingsIndustryPage } from "@/lib/industries/content/commercial-buildings";
import { constructionIndustryPage } from "@/lib/industries/content/construction";
import { darkStoresIndustryPage } from "@/lib/industries/content/dark-stores";
import { dataCentresIndustryPage } from "@/lib/industries/content/data-centres";
import { ecommerceFulfilmentIndustryPage } from "@/lib/industries/content/ecommerce-fulfilment";
import { educationCampusesIndustryPage } from "@/lib/industries/content/education-campuses";
import { foodFmcgIndustryPage } from "@/lib/industries/content/food-fmcg";
import { governmentIndustryPage } from "@/lib/industries/content/government";
import { healthcareIndustryPage } from "@/lib/industries/content/healthcare";
import { hotelsHospitalityIndustryPage } from "@/lib/industries/content/hotels-hospitality";
import { logisticsIndustryPage } from "@/lib/industries/content/logistics";
import { manufacturingIndustryPage } from "@/lib/industries/content/manufacturing";
import { metalsMiningIndustryPage } from "@/lib/industries/content/metals-mining";
import { oilGasIndustryPage } from "@/lib/industries/content/oil-gas";
import { pharmaIndustryPage } from "@/lib/industries/content/pharma";
import { polymersPlasticsIndustryPage } from "@/lib/industries/content/polymers-plastics";
import { pulpPaperIndustryPage } from "@/lib/industries/content/pulp-paper";
import { quickCommerceIndustryPage } from "@/lib/industries/content/quick-commerce";
import { residentialIndustryPage } from "@/lib/industries/content/residential";
import { retailShoppingIndustryPage } from "@/lib/industries/content/retail-shopping";
import { solarRenewableIndustryPage } from "@/lib/industries/content/solar-renewable";
import { sportsEventsIndustryPage } from "@/lib/industries/content/sports-events";
import { telecomRemoteIndustryPage } from "@/lib/industries/content/telecom-remote";
import { textileIndustryPage } from "@/lib/industries/content/textile";
import { utilitiesIndustryPage } from "@/lib/industries/content/utilities";
import type {
  IndustryPageRecord,
  IndustryPublicationStatus,
  PublicIndustryPage,
} from "@/lib/industries/types";

/** Only reviewed/published records render on the migrated path. */
const industryPageRecords: IndustryPageRecord[] = [
  manufacturingIndustryPage,
  logisticsIndustryPage,
  automotiveIndustryPage,
  commercialBuildingsIndustryPage,
  darkStoresIndustryPage,
  quickCommerceIndustryPage,
  ecommerceFulfilmentIndustryPage,
  coldStorageIndustryPage,
  airportsPortsRailwaysIndustryPage,
  dataCentresIndustryPage,
  educationCampusesIndustryPage,
  healthcareIndustryPage,
  retailShoppingIndustryPage,
  hotelsHospitalityIndustryPage,
  utilitiesIndustryPage,
  constructionIndustryPage,
  pulpPaperIndustryPage,
  textileIndustryPage,
  polymersPlasticsIndustryPage,
  bankingIndustryPage,
  residentialIndustryPage,
  governmentIndustryPage,
  solarRenewableIndustryPage,
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

/** Strip internal-only fields before handing a record to a client component. */
export function toPublicIndustryPage(record: IndustryPageRecord): PublicIndustryPage {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { scorecards, scorePresentation, sources, review, ...publicPage } = record;
  return publicPage;
}

export function isMigratedIndustryStatus(status: IndustryPublicationStatus) {
  return status === "reviewed" || status === "published";
}

export function shouldUseMigratedIndustryPage(slug: string) {
  const record = getIndustryPageRecord(slug);
  return Boolean(record && isMigratedIndustryStatus(record.status));
}
