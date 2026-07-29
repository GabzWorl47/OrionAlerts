export type BlogCategory = "Video Intelligence" | "Vision Intelligence" | "Operations";

export type BlogSection =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  dateLabel: string;
  readTime: string;
  author: string;
  authorRole: string;
  image: string;
  takeaways: string[];
  sections: BlogSection[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-traditional-cctv-monitoring-is-no-longer-enough",
    title: "Why Traditional CCTV Monitoring Is No Longer Enough",
    excerpt:
      "Passive recording and manual footage review cannot keep up with modern security and operational demands. AI video analytics turns existing cameras into real-time intelligent sensors.",
    category: "Video Intelligence",
    date: "2026-06-15",
    dateLabel: "June 15, 2026",
    readTime: "6 min read",
    author: "Ayushi",
    authorRole: "Senior Finance Manager",
    image:
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1400&q=80",
    takeaways: [
      "Passive CCTV creates evidence after the fact — not decisions in the moment.",
      "Operator bandwidth does not scale linearly with camera count.",
      "AI Vision turns existing cameras into prioritized exception sensors.",
    ],
    sections: [
      {
        type: "paragraph",
        text: "For years, enterprise security teams treated CCTV as a recording system: install cameras, store footage, review clips after something goes wrong. That model still has value for investigations — but it no longer matches how modern plants, campuses, and logistics sites actually operate.",
      },
      {
        type: "heading",
        text: "The hidden cost of passive monitoring",
      },
      {
        type: "paragraph",
        text: "As camera estates grow, the gap between visibility and action widens. A site may have hundreds of feeds, yet only a handful of operators. Most events are missed in real time, then reconstructed later under pressure. The result is slow response, incomplete context, and fatigue.",
      },
      {
        type: "list",
        items: [
          "Manual monitoring cannot watch every zone continuously",
          "Incident review becomes a scrubbing exercise across NVRs",
          "Low-signal noise competes with true operational exceptions",
          "Multi-site estates lose a shared operating picture",
        ],
      },
      {
        type: "quote",
        text: "More cameras without smarter triage does not create safer operations — it creates more footage to ignore.",
      },
      {
        type: "heading",
        text: "From recording to real-time intelligence",
      },
      {
        type: "paragraph",
        text: "AI video analytics changes the job. Instead of asking operators to stare at walls of video, the system continuously evaluates streams for intrusion, PPE exceptions, crowding, restricted-zone entry, and other policy events — then routes high-confidence alerts with evidence context.",
      },
      {
        type: "paragraph",
        text: "That shift is what turns CCTV from a passive archive into an operational sensor network. Existing cameras stay in place. The upgrade is the intelligence layer on top: prioritized alerts, searchable video, and multi-site command.",
      },
      {
        type: "heading",
        text: "What good looks like for enterprise teams",
      },
      {
        type: "paragraph",
        text: "High-performing teams do not eliminate human judgment — they protect it. They give operators fewer, better signals; they shorten investigation cycles with smart search; and they keep camera estates healthy so blind spots do not appear silently overnight.",
      },
      {
        type: "paragraph",
        text: "If your current model depends on someone noticing the right feed at the right second, it is already behind the operational reality of modern facilities. The next standard is simple: detect early, notify the right role, and investigate with evidence that is already organized.",
      },
    ],
  },
  {
    slug: "what-is-a-vision-intelligence-platform",
    title: "What Is a Vision Intelligence Platform?",
    excerpt:
      "How AI-powered video analytics, computer vision, and intelligent copilots turn CCTV feeds into real-time operational intelligence — beyond security monitoring.",
    category: "Vision Intelligence",
    date: "2026-06-22",
    dateLabel: "June 22, 2026",
    readTime: "5 min read",
    author: "Kawaljeet",
    authorRole: "Head of Growth Marketing",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1400&q=80",
    takeaways: [
      "Vision intelligence is broader than security deterrence alone.",
      "The platform connects detection, search, operations, and reliability.",
      "Value shows up when video becomes actionable workflow — not just footage.",
    ],
    sections: [
      {
        type: "paragraph",
        text: "A vision intelligence platform is the operating layer that turns cameras into a decision system. It sits above hardware, applies computer vision and policy logic in real time, and helps teams monitor, detect, notify, and analyze events across sites.",
      },
      {
        type: "heading",
        text: "More than a camera product",
      },
      {
        type: "paragraph",
        text: "Many buyers still evaluate video as a device purchase. A vision intelligence platform reframes the problem: how do we convert continuous visual data into prioritized actions for security, safety, and operations teams?",
      },
      {
        type: "list",
        items: [
          "Live video command across buildings and facilities",
          "AI detection for safety, intrusion, and operational exceptions",
          "Searchable evidence for investigations and audits",
          "Health and maintenance visibility for the camera estate",
        ],
      },
      {
        type: "heading",
        text: "Security is the entry point — operations is the expansion",
      },
      {
        type: "paragraph",
        text: "Most deployments begin with security outcomes: perimeter awareness, after-hours intrusion, restricted zones. But the same visual intelligence quickly supports production floors, logistics docks, campuses, and regulated environments where process exceptions matter as much as trespassing.",
      },
      {
        type: "quote",
        text: "The strongest platforms do not just show video. They help the right person act on the right moment.",
      },
      {
        type: "heading",
        text: "What to look for when evaluating vendors",
      },
      {
        type: "paragraph",
        text: "Ask whether the system reduces operator load, works with existing cameras, supports multi-site policy, and keeps the estate online. Feature lists are easy. Workflow fit — from alert to investigation to maintenance — is what separates a dashboard from a platform.",
      },
      {
        type: "paragraph",
        text: "OrionAlerts is built around that workflow: AI Vision for detection, VMS for command, Smart Search for investigations, and health/AMC layers so uptime remains part of the operating model.",
      },
    ],
  },
  {
    slug: "alert-fatigue-is-an-ops-problem",
    title: "Alert Fatigue Is an Ops Problem",
    excerpt:
      "More cameras do not equal better coverage. Prioritized AI alerts help operators respond faster without drowning in low-signal noise.",
    category: "Operations",
    date: "2026-07-02",
    dateLabel: "July 2, 2026",
    readTime: "4 min read",
    author: "OrionAlerts Team",
    authorRole: "Product & Operations",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
    takeaways: [
      "Alert volume without triage becomes operational debt.",
      "Confidence, context, and routing matter more than raw detections.",
      "Healthy camera estates reduce false gaps and noisy blind spots.",
    ],
    sections: [
      {
        type: "paragraph",
        text: "Security operations teams rarely fail because they lack cameras. They fail because signal quality collapses under volume. When every motion event competes for attention, true exceptions arrive late — or not at all.",
      },
      {
        type: "heading",
        text: "Why more alerts can make sites less safe",
      },
      {
        type: "paragraph",
        text: "Unfiltered detections create a false sense of coverage. Operators learn to ignore queues. Night shifts inherit noisy policies. Incidents still occur, but the system that was supposed to accelerate response becomes the reason response slows down.",
      },
      {
        type: "list",
        items: [
          "Low-confidence events crowd out critical exceptions",
          "Missing context forces operators to open multiple feeds manually",
          "No role-based routing means everyone sees everything",
          "Camera downtime adds silent gaps that look like quiet sites",
        ],
      },
      {
        type: "quote",
        text: "Alert fatigue is not a people problem. It is a systems design problem.",
      },
      {
        type: "heading",
        text: "Design for prioritized action",
      },
      {
        type: "paragraph",
        text: "Effective video operations platforms emphasize triage: higher-confidence events first, evidence attached, and clear ownership. The goal is not infinite detection. The goal is fewer interruptions with higher decision value.",
      },
      {
        type: "paragraph",
        text: "Pair that with searchable video for after-action review and estate health monitoring so operators are not fighting both noisy alerts and broken cameras. That combination is how multi-site teams stay responsive without scaling headcount one-for-one with camera count.",
      },
    ],
  },
];

export const blogCategories = [
  "All",
  "Video Intelligence",
  "Vision Intelligence",
  "Operations",
] as const;

export type BlogCategoryFilter = (typeof blogCategories)[number];

export function getBlog(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogCategoryCounts() {
  const counts: Record<string, number> = { All: blogPosts.length };
  for (const post of blogPosts) {
    counts[post.category] = (counts[post.category] ?? 0) + 1;
  }
  return counts;
}

export function getRelatedPosts(slug: string, limit = 2) {
  const current = getBlog(slug);
  if (!current) return blogPosts.slice(0, limit);

  const sameCategory = blogPosts.filter(
    (post) => post.slug !== slug && post.category === current.category,
  );
  const others = blogPosts.filter(
    (post) => post.slug !== slug && post.category !== current.category,
  );

  return [...sameCategory, ...others].slice(0, limit);
}
