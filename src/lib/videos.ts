/**
 * Stable public marketing videos eligible for VideoObject / video sitemap entries.
 * Only include assets that ship under `public/` with stable paths and page destinations.
 * Nebula OS remains excluded until `nebulaVideo.available` is true.
 */
export type PublicVideoAsset = {
  id: string;
  name: string;
  description: string;
  /** Site-relative content URL (URL-encoded path segments as served). */
  contentPath: string;
  /** Site-relative thumbnail / poster. */
  thumbnailPath: string;
  /** Canonical page where the video is primarily presented. */
  pagePath: string;
  /**
   * When the file was first published on the site, ISO 8601 with the IST
   * offset (taken from the commit that first added the asset to `public/`).
   */
  uploadDate: string;
  /** Measured running time (ffprobe), ISO 8601 duration rounded to the second. */
  duration: string;
};

export const publicVideoAssets: PublicVideoAsset[] = [
  {
    id: "homepage-intro",
    name: "OrionAlerts platform introduction",
    description:
      "Overview of OrionAlerts enterprise video intelligence for multi-site operations and AI alerts.",
    contentPath: "/Videos/video/intro.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/",
    uploadDate: "2026-08-03T15:27:02+05:30",
    duration: "PT17S", // ffprobe: 16.83 s
  },
  {
    id: "vms-intro",
    name: "Enterprise VMS overview",
    description:
      "Centralized live monitoring, playback, and control across multi-site camera estates.",
    contentPath: "/Videos/workflow/live-wall.mp4",
    thumbnailPath: "/Images/vms-overview.webp",
    pagePath: "/solutions/vms",
    uploadDate: "2026-07-29T18:35:55+05:30",
    duration: "PT19S", // ffprobe: 18.50 s
  },
  {
    id: "ai-analytics-intro",
    name: "AI video analytics and real-time alerts",
    description:
      "Turn live CCTV into prioritized alerts for intrusion, PPE, safety, and operations.",
    contentPath: "/Videos/outcomes/ai-analytics.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/solutions/ai-analytics",
    uploadDate: "2026-07-29T18:35:55+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "health-monitoring-intro",
    name: "Camera and infrastructure health monitoring",
    description:
      "Detect camera, NVR, storage, and network issues before they create operational blind spots.",
    contentPath: "/Videos/video/health-monitoring.mp4",
    thumbnailPath:
      "/Images/health-monitoring-overview.webp",
    pagePath: "/solutions/health-monitoring",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  /*
   * Use-case demonstration clips, embedded on /use-cases/<slug>. Name and
   * description mirror the homepage card (`aiUseCases` in homepage.ts) shown
   * as the figure caption. Each file is a re-encode of the clip first committed
   * in e13662d, so `uploadDate` is that commit's date.
   */
  {
    id: "use-case-fire-smoke-detection",
    name: "Fire and Smoke Detection demonstration",
    description: "Spot early smoke and fire indicators across monitored zones.",
    contentPath: "/Videos/video/fire-smoke-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/fire-smoke-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-fall-detection",
    name: "Fall Detection demonstration",
    description: "Identify falls quickly so responders can intervene sooner.",
    contentPath: "/Videos/video/fall-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/fall-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-perimeter-intrusion-detection",
    name: "Perimeter Intrusion Detection demonstration",
    description: "Monitor fences, gates, and outer boundaries continuously.",
    contentPath: "/Videos/video/perimeter-intrusion-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/perimeter-intrusion-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-crowd-detection",
    name: "Crowd Detection demonstration",
    description: "Track density build-ups that need operational attention.",
    contentPath: "/Videos/video/crowd-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/crowd-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-loitering-detection",
    name: "Loitering Detection demonstration",
    description: "Flag prolonged presence in sensitive or idle zones.",
    contentPath: "/Videos/video/loitering-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/loitering-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-camera-tampering-detection",
    name: "Camera Tampering Detection demonstration",
    description: "Detect blocked, moved, or otherwise compromised cameras.",
    contentPath: "/Videos/video/camera-tampering-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/camera-tampering-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-no-motion-black-screen-alert",
    name: "No-Motion or Black-Screen Alert demonstration",
    description: "Catch failed feeds and silent sensors before blind spots grow.",
    contentPath: "/Videos/video/no-motion-black-screen-alert.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/no-motion-black-screen-alert",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-vehicle-detection",
    name: "Vehicle Detection demonstration",
    description: "Monitor vehicle presence, movement, and restricted approaches.",
    contentPath: "/Videos/video/vehicle-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/vehicle-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-safety-compliance-detection",
    name: "Safety Compliance Detection demonstration",
    description: "Enforce PPE and site safety rules with visual AI checks.",
    contentPath: "/Videos/video/safety-compliance-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/safety-compliance-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-abandoned-object-detection",
    name: "Abandoned Object Detection demonstration",
    description: "Identify unattended items that may indicate risk.",
    contentPath: "/Videos/video/abandoned-object-detection.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/abandoned-object-detection",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
  {
    id: "use-case-restricted-zone-monitoring",
    name: "Restricted-Zone Monitoring demonstration",
    description: "Keep prohibited zones clear with continuous zone analytics.",
    contentPath: "/Videos/video/restricted-zone-monitoring.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.webp",
    pagePath: "/use-cases/restricted-zone-monitoring",
    uploadDate: "2026-08-04T11:02:02+05:30",
    duration: "PT10S", // ffprobe: 10.00 s
  },
];

/** Look up a public video by its served path (used to fill VideoObject fields). */
export function getPublicVideoByContentPath(contentPath: string) {
  return publicVideoAssets.find((video) => video.contentPath === contentPath);
}
