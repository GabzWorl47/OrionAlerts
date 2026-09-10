/**
 * Central standards/framework register (README §10).
 * Framework IDs are internal keys — never render "See C1" publicly.
 */

export type FrameworkRecord = {
  id: string;
  name: string;
  jurisdiction: string;
  publicSummary: string;
  sourceUrl?: string;
  boundary: string;
};

export const frameworks: Record<string, FrameworkRecord> = {
  C1: {
    id: "C1",
    name: "ISO 45001",
    jurisdiction: "International",
    publicSummary:
      "ISO 45001 is an occupational health and safety management-system standard for organisations.",
    sourceUrl: "https://www.iso.org/standard/63787.html",
    boundary:
      "Certification concerns the organisation's management system. Video observations can support internal safety reviews; they do not certify the factory or replace its safety controls.",
  },
  C2: {
    id: "C2",
    name: "IATF 16949",
    jurisdiction: "International automotive supply chain",
    publicSummary:
      "IATF 16949 is a quality-management certification for eligible automotive manufacturing organisations under customer-specific requirements.",
    sourceUrl: "https://www.iatfglobaloversight.org/about-iatf/",
    boundary:
      "It is not an AI or software certificate, and video does not establish that a photographed component meets specification or deliver IATF certification.",
  },
  C5: {
    id: "C5",
    name: "PESO / IECEx / ATEX hazardous-area schemes",
    jurisdiction: "India (PESO); international (IECEx); EU (ATEX)",
    publicSummary:
      "PESO, IECEx and ATEX are distinct hazardous-area equipment and installation schemes with different jurisdictional scopes.",
    sourceUrl: "https://peso.gov.in/",
    boundary:
      "Schemes are distinct; confirm Indian acceptance and approval rather than treating certificates as interchangeable. Verify the exact model and installation conditions.",
  C4: {
    id: "C4",
    name: "DGMS equipment approvals",
    jurisdiction: "India",
    publicSummary:
      "DGMS maintains approval requirements for specified equipment used in relevant mining environments.",
    sourceUrl: "https://www.dgms.gov.in/",
    boundary:
      "Applicability depends on the equipment and mine environment. An ordinary surveillance device must not be described as mine-approved without evidence.",
  C3: {
    id: "C3",
    name: "BIS / QCO product requirements",
    jurisdiction: "India",
    publicSummary:
      "BIS product certification and quality-control orders apply where the notified cement or building-material category requires mandatory certification.",
    sourceUrl: "https://www.bis.gov.in/",
    boundary:
      "Confirm the specific product category, applicable order and current scope. Camera monitoring does not certify product quality.",
  },
  C6: {
    id: "C6",
    name: "Revised Schedule M / GMP record controls",
    jurisdiction: "India (and US FDA Part 11 where applicable)",
    publicSummary:
      "Revised Schedule M sets GMP obligations for applicable manufacturers; Part 11 concerns electronic-record controls where that intended use applies.",
    boundary:
      "These obligations belong to the regulated manufacturer or record owner. Camera monitoring does not create GMP certification or Part 11 compliance by itself.",
  },
  C7: {
    id: "C7",
    name: "FSSAI / food safety management context",
    jurisdiction: "India (ISO 22000 international where chosen)",
    publicSummary:
      "FSSAI licensing and Schedule 4 expectations apply to applicable food businesses; ISO 22000 is a separate management-system route.",
    boundary:
      "A general logistics page must not imply a universal food or logistics certificate. Apply food-storage obligations only where the operation handles food.",
  },
  C8: {
    id: "C8",
    name: "National Building Code / premises and fire planning",
    jurisdiction: "India",
    publicSummary:
      "Premises and fire-planning requirements apply at the building or site level under applicable codes and local rules.",
    sourceUrl: "https://www.bis.gov.in/standards/national-building-code/?lang=en",
    boundary:
      "Video can help review visible conditions; it does not grant fire approval, occupancy permission or building certification.",
  },
  C9: {
    id: "C9",
    name: "Digital Personal Data Protection Act / Rules",
    jurisdiction: "India",
    publicSummary:
      "India's digital personal data protection framework governs purpose, access and retention for personal data, including video where applicable.",
    boundary:
      "Define monitoring purpose, authorised users and retention with legal/privacy owners before deployment.",
  },
  C21: {
    id: "C21",
    name: "NDMA crowd-management guidance",
    jurisdiction: "India",
    publicSummary:
      "NDMA crowd-management guidance supports organised planning and coordinated response for events and public gatherings.",
    sourceUrl: "https://www.pib.gov.in/newsite/printrelease.aspx?lang=2&reg=48&relid=151549",
    boundary:
      "It is not a product certificate or a guarantee that an estimated crowd count defines a safe condition.",
  C20: {
    id: "C20",
    name: "TEC / MTCTE",
    jurisdiction: "India",
    publicSummary:
      "TEC Mandatory Testing and Certification of Telecom Equipment (MTCTE) covers testing and certification for applicable notified telecom equipment.",
    sourceUrl:
      "https://www.tec.gov.in/mandatory-testing-and-certification-of-telecom-equipments-mtcte",
    boundary:
      "Verify equipment category, phase, exemptions and current procedure. A telecom customer does not make all associated software MTCTE certified.",
  },
};

export function getFramework(id: string) {
  return frameworks[id];
}

export function composeStandardsPublicCopy(
  sectorCopy: string,
  frameworkIds: string[],
): string {
  const extras = frameworkIds
    .map((id) => frameworks[id])
    .filter(Boolean)
    .map((fw) => `${fw.name}: ${fw.boundary}`)
    .join(" ");
  return extras ? `${sectorCopy} ${extras}` : sectorCopy;
}
