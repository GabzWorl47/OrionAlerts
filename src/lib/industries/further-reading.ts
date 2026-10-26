/**
 * Link catalog for the "Further reading" block on industry pages. Slugs are
 * the exact published paths; labels are short link texts. Each industry
 * content file picks from these via `furtherReading`.
 */

export const blogLinks = {
  "cp-plus-ai-video-analytics-integration": "Adding AI video analytics to CP Plus cameras",
  "alert-fatigue-is-an-ops-problem": "Alert fatigue is an ops problem",
  "what-is-a-vision-intelligence-platform": "What is a vision intelligence platform?",
  "why-traditional-cctv-monitoring-is-no-longer-enough": "Why traditional CCTV monitoring is no longer enough",
  "add-ai-to-existing-cctv-cameras": "How to add AI to existing CCTV cameras",
  "cctv-camera-health-monitoring": "CCTV camera health monitoring",
  "cctv-amc-management-checklist": "CCTV AMC management checklist",
  "vms-vs-nvr": "VMS vs NVR",
  "ai-ppe-detection-factories": "AI PPE detection in factories",
} as const;

export const glossaryLinks = {
  vms: "Video management system (VMS)",
  vsaas: "Video surveillance as a service (VSaaS)",
  "nvr-vs-dvr-vs-vms": "NVR vs DVR vs VMS",
  "video-analytics": "Video analytics",
  "camera-health-monitoring": "Camera health monitoring",
  onvif: "ONVIF",
  rtsp: "RTSP",
  "edge-ai-video-analytics": "Edge AI video analytics",
  anpr: "ANPR",
  "camera-tampering-detection": "Camera tampering detection",
  "ppe-detection": "PPE detection",
  "amc-annual-maintenance-contract": "AMC (annual maintenance contract)",
} as const;

export const useCaseLinks = {
  "fire-smoke-detection": "Fire and smoke detection",
  "fall-detection": "Fall detection",
  "unauthorized-area-entry": "Unauthorized area entry",
  "perimeter-intrusion-detection": "Perimeter intrusion detection",
  "crowd-detection": "Crowd detection",
  "loitering-detection": "Loitering detection",
  "camera-tampering-detection": "Camera tampering detection",
  "no-motion-black-screen-alert": "No-motion and black-screen alerts",
  "vehicle-detection": "Vehicle detection",
  "safety-compliance-detection": "Safety compliance detection",
  "abandoned-object-detection": "Abandoned object detection",
  "restricted-zone-monitoring": "Restricted zone monitoring",
} as const;

export type BlogSlug = keyof typeof blogLinks;
export type GlossarySlug = keyof typeof glossaryLinks;
export type UseCaseSlug = keyof typeof useCaseLinks;
