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
};

export const publicVideoAssets: PublicVideoAsset[] = [
  {
    id: "homepage-intro",
    name: "OrionAlerts platform introduction",
    description:
      "Overview of OrionAlerts enterprise video intelligence for multi-site operations and AI alerts.",
    contentPath: "/Videos/video/Intro%20video.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.png",
    pagePath: "/",
  },
  {
    id: "vms-intro",
    name: "Enterprise VMS overview",
    description:
      "Centralized live monitoring, playback, and control across multi-site camera estates.",
    contentPath: "/Videos/VMS.mp4",
    thumbnailPath: "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2001_25_29%20PM.png",
    pagePath: "/solutions/vms",
  },
  {
    id: "ai-analytics-intro",
    name: "AI video analytics and real-time alerts",
    description:
      "Turn live CCTV into prioritized alerts for intrusion, PPE, safety, and operations.",
    contentPath: "/Videos/video/AI_video_analytics_real-time_alerts_202607281709.mp4",
    thumbnailPath: "/visuals/solutions/ai-vision.png",
    pagePath: "/solutions/ai-analytics",
  },
  {
    id: "health-monitoring-intro",
    name: "Camera and infrastructure health monitoring",
    description:
      "Detect camera, NVR, storage, and network issues before they create operational blind spots.",
    contentPath: "/Videos/video/health-monitoring.mp4",
    thumbnailPath:
      "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2012_54_34%20PM.png",
    pagePath: "/solutions/health-monitoring",
  },
];
