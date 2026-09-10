export type ProductClaim = {
  id: string;
  label: string;
  status:
    | "owner-confirmed"
    | "baseline-claim"
    | "pilot-dependent"
    | "integration-dependent"
    | "specialist";
  publicSafeWording: string;
  notes: string;
  ownerReview: "pending" | "confirmed" | "blocked";
};

export const productClaims: Record<string, ProductClaim> = {
  "vision-copilot": {
    id: "vision-copilot",
    label: "Vision Copilot typed questions and search",
    status: "owner-confirmed",
    publicSafeWording:
      "Ask about a location, time period or observed condition in everyday language through Vision Copilot.",
    notes: "Do not claim universal search across unanalysed footage or voice/image-upload interfaces.",
    ownerReview: "confirmed",
  },
  "building-hierarchy": {
    id: "building-hierarchy",
    label: "Site → Building → Floor → Zone → Room hierarchy",
    status: "owner-confirmed",
    publicSafeWording:
      "Organise the platform around the actual property structure and map cameras to those locations.",
    notes: "Not a 3D twin, CAD/BIM import, or automatic reconstruction.",
    ownerReview: "confirmed",
  },
  "scene-analysis": {
    id: "scene-analysis",
    label: "Ongoing scene analysis with location context",
    status: "owner-confirmed",
    publicSafeWording:
      "Review observations over time and receive alerts connected to mapped location context.",
    notes: "Do not claim every frame is processed or guarantee latency.",
    ownerReview: "confirmed",
  },
  recommendations: {
    id: "recommendations",
    label: "Scene-based recommendations",
    status: "owner-confirmed",
    publicSafeWording:
      "Consider practical next steps such as staging, access arrangements or camera-coverage assessment when evidence supports them.",
    notes: "Human decision retained; no guaranteed root cause or automatic procedure changes.",
    ownerReview: "confirmed",
  },
  "operational-scores": {
    id: "operational-scores",
    label: "Operational scores on a 0–100 scale",
    status: "owner-confirmed",
    publicSafeWording:
      "Use operational scores out of 100 with observation trends to establish review priorities.",
    notes: "Exact names/formulas are proposed design; do not invent live values.",
    ownerReview: "confirmed",
  },
  "ppe-visible-exception": {
    id: "ppe-visible-exception",
    label: "Visible PPE exception at defined entry points",
    status: "baseline-claim",
    publicSafeWording:
      "Review visible helmet or high-visibility clothing exceptions as people enter selected production zones.",
    notes: "Does not verify PPE condition, fit, or full legal compliance.",
    ownerReview: "pending",
  },
  "restricted-zone-entry": {
    id: "restricted-zone-entry",
    label: "Configured restricted-zone entry review",
    status: "baseline-claim",
    publicSafeWording:
      "Flag entry into configured equipment or maintenance areas so supervisors can review the scene.",
    notes: "Crossing a line alone does not establish unauthorised intent.",
    ownerReview: "pending",
  },
  "route-conflict-visible": {
    id: "route-conflict-visible",
    label: "Visible pedestrian/vehicle route conflict monitoring",
    status: "pilot-dependent",
    publicSafeWording:
      "Assess camera-based monitoring of designated crossings and vehicle lanes, subject to detector support and site validation.",
    notes: "Physical segregation and trained operators remain required.",
    ownerReview: "pending",
  },
  "visible-process-interruption": {
    id: "visible-process-interruption",
    label: "Visible production interruption / accumulation",
    status: "pilot-dependent",
    publicSafeWording:
      "Scope monitoring for material accumulation or prolonged absence of expected movement in a defined area.",
    notes: "Machine state/OEE needs operational data sources, not CCTV alone.",
    ownerReview: "pending",
  },
  "surveillance-health": {
    id: "surveillance-health",
    label: "Camera/recording health for usable footage",
    status: "baseline-claim",
    publicSafeWording:
      "Combine event review with surveillance health monitoring so missing feeds or recording interruptions are visible to maintenance teams.",
    notes: "Aligned with Health Monitoring solution positioning.",
    ownerReview: "pending",
  },
  "mes-oee-correlation": {
    id: "mes-oee-correlation",
    label: "MES/OEE correlation from video",
    status: "integration-dependent",
    publicSafeWording:
      "Reliable OEE needs defined availability, performance and quality inputs from production systems. Treat that as a separate integration scope.",
    notes: "Do not claim CCTV calculates OEE.",
    ownerReview: "pending",
  },
};

export function getProductClaim(id: string) {
  return productClaims[id];
}
