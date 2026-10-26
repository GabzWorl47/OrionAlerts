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
          description: "Every asset mapped to a site, zone and custodian, so it is easier to find",
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
          description: "See asset status across sites before buying more equipment",
          preview: "multisite",
          image: "/Images/solutions/location-department-mapping.webp",
        },
      ];
    case "amc-management":
      return [
        {
          title: "Fewer prolonged camera outages",
          description: "Renewals and open tickets flagged before coverage lapses",
          preview: "alert",
          image: "/Images/solutions/amc-warranty-management.webp",
        },
        {
          title: "Clear partner accountability",
          description: "Track vendors, SLAs, and technician visits in one place",
          preview: "multisite",
          image: "/Images/solutions/vendor-performance-monitoring-clean.webp",
        },
        {
          title: "Preventive work planned ahead",
          description: "Schedule preventive maintenance and renewals before they fall due",
          preview: "livewall",
          image: "/Images/solutions/preventive-maintenance-scheduling-clean.webp",
        },
        {
          title: "Contract and SLA status in one report",
          description: "See coverage and SLA status for every site",
          preview: "search",
          image: "/Images/solutions/sla-compliance-tracking-clean.webp",
        },
      ];
    case "vms":
      return [
        {
          title: "Faster incident awareness across locations",
          description: "Live multi-cam view so operators spot issues sooner",
          preview: "livewall",
          image: "/Images/solutions/centralized-live-monitoring-playback.webp",
        },
        {
          title: "Replace NVR-by-NVR logins with one console",
          description: "Every site, camera and recorder in one operator workflow",
          preview: "alert",
          image: "/Images/solutions/multi-site-surveillance-management-clean.webp",
        },
        {
          title: "Audit-ready access and export trails",
          description: "Searchable evidence clips ready for review",
          preview: "search",
          image: "/Images/solutions/video-search-incident-investigation.webp",
        },
        {
          title: "Ready for AI alerts",
          description: "Add AI video analytics to the same cameras later",
          preview: "multisite",
          image: "/Images/solutions/open-integration-ip-cameras-third-party-clean.webp",
        },
      ];
    case "ai-analytics":
      return [
        {
          title: "Fewer false alarms for security teams",
          description: "Alerts tied to defined events, not raw motion",
          preview: "alert",
          image: "/Images/solutions/real-time-ai-video-analytics.webp",
        },
        {
          title: "Cameras watched around the clock",
          description: "Continuous detection on the cameras you select, not just the ones on screen",
          preview: "livewall",
          image: "/Images/solutions/instant-event-detection-smart-alerts.webp",
        },
        {
          title: "Faster investigation with searchable events",
          description: "Find events by type, camera and site instead of scrubbing footage",
          preview: "search",
          image: "/Images/solutions/intrusion-detection.webp",
        },
        {
          title: "The same safety rules at every site",
          description: "Same PPE, intrusion, and safety rules everywhere",
          preview: "multisite",
          image: "/Images/solutions/intrusion-ppe-safety-monitoring.webp",
        },
      ];
    case "health-monitoring":
      return [
        {
          title: "Fewer blind spots across sites",
          description: "Know as soon as a camera or NVR goes offline at any site",
          preview: "alert",
          image: "/Images/solutions/real-time-device-health-monitoring.webp",
        },
        {
          title: "Faster fault isolation",
          description: "See whether the camera, NVR, storage or network failed",
          preview: "multisite",
          image: "/Images/solutions/camera-nvr-server-status.webp",
        },
        {
          title: "Recording gaps caught early",
          description: "Know when a camera stops recording, not just when it goes offline",
          preview: "livewall",
          image: "/Images/solutions/recording-storage-health-monitoring.webp",
        },
        {
          title: "Uptime proof for audits",
          description: "Availability reports per site and device",
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
