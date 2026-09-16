import type { OutcomeItem } from "@/components/SolutionVideoSection";
import type { Solution } from "@/lib/site";

export function getSolutionOutcomes(solution: Solution): OutcomeItem[] {
  switch (solution.slug) {
    case "asset-tracking":
      return [
        {
          title: "Complete asset lifecycle visibility",
          description: "Track ownership, warranty, and location from one workspace",
          preview: "livewall",
          image: "/Images/solutions/asset-lifecycle-management.webp",
        },
        {
          title: "Fewer lost or misplaced assets",
          description: "Know where critical equipment is before it goes missing",
          preview: "search",
          image: "/Images/solutions/serial-number-tracking.webp",
        },
        {
          title: "Faster audits and handovers",
          description: "Pull custody and transfer history without spreadsheet hunting",
          preview: "alert",
          image: "/Images/solutions/audit-trail-compliance-reports.webp",
        },
        {
          title: "Smarter utilization planning",
          description: "See idle vs active assets and redeploy with confidence",
          preview: "multisite",
          image: "/Images/solutions/location-department-mapping.webp",
        },
      ];
    case "amc-management":
      return [
        {
          title: "Fewer prolonged camera outages",
          description: "Catch renewals and tickets before downtime spreads",
          preview: "alert",
          image: "/Images/solutions/amc-warranty-management.webp",
        },
        {
          title: "Clear partner accountability",
          description: "Track vendors, SLAs, and technician visits in one place",
          preview: "multisite",
          image: "/Images/solutions/vendor-performance-monitoring.webp",
        },
        {
          title: "Predictable maintenance spend",
          description: "Plan preventive work and renewals with less surprise cost",
          preview: "livewall",
          image: "/Images/solutions/preventive-maintenance-scheduling.webp",
        },
        {
          title: "Executive-ready estate health view",
          description: "See contract and uptime status across every site",
          preview: "search",
          image: "/Images/solutions/sla-compliance-tracking.webp",
        },
      ];
    case "vms":
      return [
        {
          title: "Faster incident awareness across locations",
          description: "Live multi-cam view so operators spot issues sooner",
          preview: "livewall",
          image: "/Images/solutions/centralized-live-monitoring-playback.png",
        },
        {
          title: "Lower operational complexity vs fragmented NVRs",
          description: "AI-prioritized alert with live video context",
          preview: "alert",
          image: "/Images/solutions/multi-site-surveillance-management.png",
        },
        {
          title: "Audit-ready access and export trails",
          description: "Searchable evidence clips ready for review",
          preview: "search",
          image: "/Images/solutions/video-search-incident-investigation.png",
        },
        {
          title: "Foundation for AI analytics overlays",
          description: "Multi-site live feeds in one operator workflow",
          preview: "multisite",
          image: "/Images/solutions/open-integration-ip-cameras-third-party.png",
        },
      ];
    case "ai-analytics":
      return [
        {
          title: "Higher signal-to-noise for security teams",
          description: "Prioritized AI alerts instead of raw camera noise",
          preview: "alert",
          image: "/Images/solutions/real-time-ai-video-analytics.png",
        },
        {
          title: "24/7 coverage without proportional staffing",
          description: "Continuous detection across cameras and sites",
          preview: "livewall",
          image: "/Images/solutions/instant-event-detection-smart-alerts.png",
        },
        {
          title: "Faster investigation with searchable events",
          description: "Jump to the clip and context behind every alert",
          preview: "search",
          image: "/Images/solutions/intrusion-detection.png",
        },
        {
          title: "Consistent policy enforcement multi-site",
          description: "Same PPE, intrusion, and safety rules everywhere",
          preview: "multisite",
          image: "/Images/solutions/intrusion-ppe-safety-monitoring.png",
        },
      ];
    case "health-monitoring":
      return [
        {
          title: "Fewer prolonged camera outages",
          description: "Detect offline cameras and NVRs before blind spots grow",
          preview: "alert",
          image: "/Images/solutions/real-time-device-health-monitoring.webp",
        },
        {
          title: "Clear partner accountability",
          description: "Track vendors, SLAs, and technician visits in one place",
          preview: "multisite",
          image: "/Images/solutions/camera-nvr-server-status.webp",
        },
        {
          title: "Predictable maintenance spend",
          description: "Act on storage, network, and device health early",
          preview: "livewall",
          image: "/Images/solutions/recording-storage-health-monitoring.webp",
        },
        {
          title: "Executive-ready estate health view",
          description: "See uptime and device status across every site",
          preview: "search",
          image: "/Images/solutions/uptime-availability-reports.webp",
        },
      ];
    default:
      return solution.benefits.slice(0, 4).map((title, index) => ({
        title,
        description: solution.workflow[index] ?? title,
        preview: (["livewall", "alert", "search", "multisite"] as const)[index % 4],
        image: solution.image,
      }));
  }
}
