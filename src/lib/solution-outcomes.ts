import type { OutcomeItem } from "@/components/SolutionVideoSection";
import type { Solution } from "@/lib/site";

const ARCHITECTURE_IMAGE: Partial<Record<string, string>> = {
  vms: "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2003_19_19%20PM.png",
  "ai-analytics": "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2003_08_55%20PM.png",
  "health-monitoring": "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2004_00_26%20PM.png",
};

const SCENE_IMAGES = [
  "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
] as const;

function withImages(
  solution: Solution,
  items: Array<Omit<OutcomeItem, "image">>,
): OutcomeItem[] {
  const architecture = ARCHITECTURE_IMAGE[solution.slug] ?? solution.image;
  const pool = [solution.image, architecture, SCENE_IMAGES[0], SCENE_IMAGES[1]];
  return items.map((item, index) => ({
    ...item,
    image: pool[index % pool.length],
  }));
}

export function getSolutionOutcomes(solution: Solution): OutcomeItem[] {
  switch (solution.slug) {
    case "vms":
      return withImages(solution, [
        {
          title: "Faster incident awareness across locations",
          description: "Live multi-cam view so operators spot issues sooner",
          preview: "livewall",
        },
        {
          title: "Lower operational complexity vs fragmented NVRs",
          description: "AI-prioritized alert with live video context",
          preview: "alert",
        },
        {
          title: "Audit-ready access and export trails",
          description: "Searchable evidence clips ready for review",
          preview: "search",
        },
        {
          title: "Foundation for AI analytics overlays",
          description: "Multi-site live feeds in one operator workflow",
          preview: "multisite",
        },
      ]);
    case "ai-analytics":
      return withImages(solution, [
        {
          title: "Higher signal-to-noise for security teams",
          description: "Prioritized AI alerts instead of raw camera noise",
          preview: "alert",
        },
        {
          title: "24/7 coverage without proportional staffing",
          description: "Continuous detection across cameras and sites",
          preview: "livewall",
        },
        {
          title: "Faster investigation with searchable events",
          description: "Jump to the clip and context behind every alert",
          preview: "search",
        },
        {
          title: "Consistent policy enforcement multi-site",
          description: "Same PPE, intrusion, and safety rules everywhere",
          preview: "multisite",
        },
      ]);
    case "amc-management":
      return withImages(solution, [
        {
          title: "Fewer prolonged camera outages",
          description: "Catch renewals and tickets before downtime spreads",
          preview: "alert",
        },
        {
          title: "Clear partner accountability",
          description: "Track vendors, SLAs, and technician visits in one place",
          preview: "multisite",
        },
        {
          title: "Predictable maintenance spend",
          description: "Plan preventive work and renewals with less surprise cost",
          preview: "livewall",
        },
        {
          title: "Executive-ready estate health view",
          description: "See contract and uptime status across every site",
          preview: "search",
        },
      ]);
    case "asset-tracking":
      return withImages(solution, [
        {
          title: "Complete asset lifecycle visibility",
          description: "Track ownership, warranty, and location from one workspace",
          preview: "livewall",
        },
        {
          title: "Fewer lost or misplaced assets",
          description: "Know where critical equipment is before it goes missing",
          preview: "search",
        },
        {
          title: "Faster audits and handovers",
          description: "Pull custody and transfer history without spreadsheet hunting",
          preview: "alert",
        },
        {
          title: "Smarter utilization planning",
          description: "See idle vs active assets and redeploy with confidence",
          preview: "multisite",
        },
      ]);
    case "health-monitoring":
      return withImages(solution, [
        {
          title: "Fewer prolonged camera outages",
          description: "Detect offline cameras and NVRs before blind spots grow",
          preview: "alert",
        },
        {
          title: "Clear partner accountability",
          description: "Track vendors, SLAs, and technician visits in one place",
          preview: "multisite",
        },
        {
          title: "Predictable maintenance spend",
          description: "Act on storage, network, and device health early",
          preview: "livewall",
        },
        {
          title: "Executive-ready estate health view",
          description: "See uptime and device status across every site",
          preview: "search",
        },
      ]);
    default:
      return withImages(
        solution,
        solution.benefits.slice(0, 4).map((title, index) => ({
          title,
          description: solution.workflow[index] ?? title,
          preview: (["livewall", "alert", "search", "multisite"] as const)[index % 4],
        })),
      );
  }
}
