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
