/**
 * AI video analytics use cases (/use-cases). One page per homepage use-case
 * card in `aiUseCases` (src/lib/homepage.ts): title, summary, solution href and
 * preview video come from that card so the two can never drift apart.
 *
 * Rules: the detection explanations are general computer-vision descriptions.
 * Statements about OrionAlerts use only facts already on the site. No accuracy
 * figures, numbers, customers or timelines.
 */

import { aiUseCases } from "@/lib/homepage";

export type UseCaseFaq = { question: string; answer: string };

type UseCaseSource = {
  slug: string;
  /** Slug of the matching card in `aiUseCases` (homepage.ts). */
  homepageSlug: string;
  /** Visible H1. */
  h1: string;
  /** Page title (≤46 chars; " | OrionAlerts" is appended). */
  seoTitle: string;
  /** Meta description (120–155 chars). */
  seoDescription: string;
  /** 40–60 word definition-first answer. */
  definition: string;
  /** General explanation of how the detection works (computer vision). */
  howItWorks: string[];
  /** Replaces the shared OrionAlerts paragraph where the use case is not an AI-runtime detection. */
  orionAlertsNote?: string;
  /** What affects reliability — qualitative, no numbers. */
  reliability: string[];
  /** Requirements specific to this use case, shown after the shared ones. */
  extraRequirements?: string[];
  /** Industry slugs (/industries/[slug]). */
  industries: string[];
  /** Glossary slugs. */
  relatedGlossary: string[];
  /** Other use-case slugs. */
  relatedUseCases: string[];
  faqs: UseCaseFaq[];
};

export type UseCaseRecord = UseCaseSource & {
  /** Card title from the homepage. */
  title: string;
  /** Card description from the homepage. */
  summary: string;
  /** Solution page the homepage card links to. */
  solution: string;
  /** Use-case-specific preview video from the homepage card, when one exists. */
  video?: { src: string; poster: string };
};

export const USE_CASES_PATH = "/use-cases";

/** Shared statement of how detection runs in OrionAlerts (nebula-os.ts, llms.txt). */
export const orionAlertsDetectionNote =
  "In OrionAlerts, the AI runtime reads decoded frames from the same video engine that records the cameras, so detection runs on the streams you already record rather than on a parallel feed into a separate analytics appliance. Inference runs on the on-site Nebula OS node with GPU acceleration, and each event is written to the same record as the camera and site it came from. Alerts reach the dashboard, mobile app and email.";

/** Requirements common to every use case. */
export const sharedRequirements: string[] = [
  "Existing IP cameras that expose video over ONVIF, RTSP or a supported vendor SDK. Compatibility is confirmed per camera model during solution design.",
  "An on-site Nebula OS node with GPU acceleration, sized per deployment to the channel count and the detections you run.",
  "Camera views that actually cover the area to be monitored, with zones and schedules defined for each rule.",
  "Optional: Orion Cloud for a central view of alerts and health across multiple sites, without uploading raw video.",
];

/**
 * Requirements for health-monitoring use cases (no-motion / black-screen). These
 * run in the health engine, not the AI runtime, so no zones or GPU sizing apply.
 */
export const healthRequirements: string[] = [
  "Existing IP cameras and recorders connected over ONVIF, RTSP or a supported vendor SDK. Compatibility is confirmed per camera model during solution design.",
  "An on-site Nebula OS node, whose health engine checks device, stream and recording status for every connected camera.",
  "No-motion rules scheduled only for camera views where activity is normally expected.",
  "Optional: Orion Cloud for a central view of camera health and alerts across multiple sites, without uploading raw video.",
];

/** The requirement list a use-case page shows: the module's base list plus its own extras. */
export function requirementsFor(useCase: Pick<UseCaseRecord, "solution" | "extraRequirements">): string[] {
  const base = useCase.solution === "/solutions/health-monitoring" ? healthRequirements : sharedRequirements;
  return [...base, ...(useCase.extraRequirements ?? [])];
}

/** Generic preview used on the homepage for cards without their own clip. */
const GENERIC_PREVIEW = "/Videos/workflow/ai-alert.mp4";

const sources: UseCaseSource[] = [
  {
    slug: "fire-smoke-detection",
    homepageSlug: "fire-smoke-detection",
    h1: "AI fire and smoke detection from CCTV cameras",
    seoTitle: "AI Fire and Smoke Detection from CCTV",
    seoDescription:
      "How AI video analytics spots visible smoke and flames in CCTV footage, what affects reliability, and what you need to run it on existing cameras.",
    definition:
      "AI fire and smoke detection is video analytics that recognizes the visual signs of smoke and flames in camera footage and raises an alert. It adds an early visual warning layer in open areas such as warehouses, yards and plant floors, where ceiling detectors can be sparse or slow. It supplements, and does not replace, certified fire alarm systems.",
    howItWorks: [
      "A computer-vision model trained on images of smoke and fire analyzes each frame for their characteristic shapes, colors and movement, such as rising, spreading plumes or flickering flame regions. Detections are typically confirmed over several consecutive frames before an alert is raised, which helps filter out brief reflections or passing lights.",
      "Rules restrict detection to the zones where it matters and can exclude areas with expected flames or steam, such as burners, exhausts or process stacks.",
    ],
    reliability: [
      "Camera placement: the camera must see the area where smoke or flames would first appear, without permanent obstructions.",
      "Lighting: glare, sunlight reflections and low light change how smoke and flames look in the image, and smoke is hard to see in darkness.",
      "Resolution and distance: small or distant smoke takes up few pixels and is harder to recognize.",
      "Scene conditions: steam, dust, fog and vehicle exhaust can resemble smoke and need to be accounted for in zones and rules.",
    ],
    extraRequirements: [
      "Video detection supplements, and does not replace, certified fire detection and alarm systems required by code.",
    ],
    industries: ["logistics", "oil-gas", "commercial-buildings", "hotels-hospitality", "polymers-plastics"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["safety-compliance-detection", "restricted-zone-monitoring", "crowd-detection"],
    faqs: [
      {
        question: "Can AI fire and smoke detection replace smoke detectors?",
        answer:
          "No. Video-based fire and smoke detection is an additional early-warning layer, not a life-safety system. It does not replace the certified fire detection and alarm systems that building and fire codes require. Use it alongside them to add visual coverage of open areas, yards and zones where conventional detectors are sparse.",
      },
      {
        question: "Does fire and smoke detection work on existing CCTV cameras?",
        answer:
          "Often, yes, if the camera has a clear view of the area where smoke or flames would first appear. OrionAlerts connects existing IP cameras through ONVIF, RTSP and vendor SDKs, and compatibility is confirmed per camera model during solution design. Cameras with obstructed or poorly lit views may need repositioning.",
      },
      {
        question: "What causes false fire or smoke alerts?",
        answer:
          "Steam, dust, fog, vehicle exhaust, reflections and sudden lighting changes are the usual causes, because they can resemble smoke or flame in the image. Careful zone setup, excluding areas with expected flames or steam such as burners and stacks, and confirming detections over several frames all help reduce them.",
      },
    ],
  },
  {
    slug: "fall-detection",
    homepageSlug: "fall-detection",
    h1: "AI fall detection from CCTV cameras",
    seoTitle: "AI Fall Detection with CCTV Video Analytics",
    seoDescription:
      "How AI video analytics detects a person falling in camera footage so responders can act sooner, what affects reliability, and what you need to run it.",
    definition:
      "AI fall detection is video analytics that recognizes when a person falls, or is lying on the ground after a fall, in camera footage and raises an alert. It helps responders reach people sooner in places such as staircases, corridors, healthcare facilities, industrial floors and lone-working areas where a fall might otherwise go unnoticed.",
    howItWorks: [
      "The model first detects people in the frame, then analyzes body posture and how it changes over time, for example a rapid transition from upright to horizontal, or a person remaining on the ground. Pose-estimation models that track key body points are commonly used for this.",
      "Rules can limit detection to specific zones and schedules, and can require a person to remain down for a short period before alerting, to separate falls from people deliberately sitting or kneeling.",
    ],
    reliability: [
      "Camera angle: elevated views that see the whole body work better than views where furniture or equipment hides the floor.",
      "Occlusion: crowded scenes, shelving and machinery can hide part of the person or the fall itself.",
      "Lighting: poorly lit corridors and stairwells reduce how clearly posture can be recognized.",
      "Resolution and distance: people far from the camera occupy few pixels, which makes posture harder to read.",
    ],
    industries: ["healthcare", "manufacturing", "construction", "logistics", "residential"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["safety-compliance-detection", "no-motion-black-screen-alert", "crowd-detection"],
    faqs: [
      {
        question: "How does video fall detection tell a fall from someone sitting down?",
        answer:
          "It looks at how body posture changes over time. A fall usually shows a sudden move from upright to horizontal, while sitting or kneeling is slower and more controlled. Rules can also require the person to stay on the ground for a short period before alerting, which further separates falls from deliberate movements.",
      },
      {
        question: "Where is fall detection most useful?",
        answer:
          "Fall detection is most useful where a fall might not be seen straight away: staircases, corridors, healthcare and senior-care areas, industrial floors, warehouses and lone-working areas. It works best where cameras see the whole body and the floor clearly, without furniture, shelving or machinery blocking the view.",
      },
      {
        question: "Who receives OrionAlerts fall alerts?",
        answer:
          "The teams you configure for each site and zone, such as security, nursing or EHS staff. OrionAlerts delivers each alert to the dashboard, mobile app and email with its video clip and the camera and site it came from, so the responder knows where to go. Zone and schedule rules decide which events raise an alert.",
      },
    ],
  },
  {
    slug: "unauthorized-area-entry",
    homepageSlug: "unauthorized-area-entry",
    h1: "Unauthorized area entry detection with AI video analytics",
    seoTitle: "Unauthorized Area Entry Detection with AI",
    seoDescription:
      "How AI video analytics alerts when people enter areas they should not access, what affects reliability, and what you need to run it on existing CCTV.",
    definition:
      "Unauthorized area entry detection is video analytics that raises an alert when a person enters a defined area they should not access, such as a server room, store room, control room or hazardous zone, during the times that area is off limits. It turns passive cameras into an active check on access to sensitive spaces.",
    howItWorks: [
      "A person-detection model finds people in each frame and tracks them as they move. An operator draws a zone, or a line at a doorway, on the camera view. When a tracked person enters the zone or crosses the line in the restricted direction during an active schedule, the system raises an alert with an image or short clip of the event.",
      "Because the model detects people rather than general motion, animals, shadows and moving equipment are less likely to trigger alerts than with simple motion detection.",
    ],
    reliability: [
      "Camera placement: the camera should see the entry point clearly, ideally with the doorway or boundary fully in frame.",
      "Lighting: dark entrances and strong backlight from doors or windows make people harder to detect.",
      "Occlusion: doors, racks and partitions can hide people as they enter.",
      "Schedules: rules must match when the area is genuinely restricted, or authorized staff will trigger alerts.",
    ],
    industries: ["data-centres", "banking", "pharma", "manufacturing", "commercial-buildings"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["restricted-zone-monitoring", "perimeter-intrusion-detection", "loitering-detection"],
    faqs: [
      {
        question: "What is the difference between unauthorized entry and restricted-zone monitoring?",
        answer:
          "Unauthorized entry focuses on the moment someone enters a controlled area, often by crossing a line at a doorway or gate. Restricted-zone monitoring watches a whole zone continuously and alerts whenever anyone is present inside it during active hours. Both use person detection with zones and schedules drawn on the camera view.",
      },
      {
        question: "Can authorized staff be excluded from alerts?",
        answer:
          "Not by identity. Video analytics detects people, not who they are, so a rule applies to anyone it sees. Schedules and zones control when and where the rule is active, so alerts can be limited to the hours an area is off limits. Telling authorized from unauthorized individuals needs access control or another identity system.",
      },
      {
        question: "Does this need new cameras?",
        answer:
          "Not necessarily. OrionAlerts works with existing IP cameras over ONVIF, RTSP and vendor SDKs, provided a camera clearly covers the entry point. Compatibility is confirmed per camera model during solution design, and an entrance that is dark, backlit or partly hidden by doors or racks may need a better-placed camera.",
      },
    ],
  },
  {
    slug: "perimeter-intrusion-detection",
    homepageSlug: "perimeter-intrusion",
    h1: "AI perimeter intrusion detection for fences, gates and boundaries",
    seoTitle: "AI Perimeter Intrusion Detection for CCTV",
    seoDescription:
      "How AI video analytics watches fences, gates and outer boundaries for intruders, what affects reliability, and what you need to run it on existing CCTV.",
    definition:
      "Perimeter intrusion detection is video analytics that continuously monitors fences, gates, compound walls and other outer boundaries, and raises an alert when a person or vehicle crosses or approaches them. It gives security teams early warning of a breach while the intruder is still at the edge of the site, not after they reach critical assets.",
    howItWorks: [
      "Object-detection models find people and vehicles in each frame, and tracking follows them over time. Operators draw virtual lines along a fence or gate and zones just inside or outside the boundary. Crossing a line in a defined direction, or entering a zone during an armed schedule, raises an alert.",
      "Classifying objects rather than reacting to any motion helps ignore swaying vegetation, rain, shadows and small animals, which are common causes of nuisance alarms on outdoor perimeters.",
    ],
    reliability: [
      "Camera placement: cameras should cover the full boundary without gaps, with the line of approach visible.",
      "Lighting: outdoor perimeters at night need adequate infrared or visible light for people to be recognized.",
      "Distance and resolution: long fence lines viewed from a single camera make distant people very small in the image.",
      "Weather and environment: rain, fog, dust, insects near infrared lamps and moving vegetation affect image quality.",
    ],
    industries: ["solar-renewable", "utilities", "telecom-remote", "oil-gas", "airports-ports-railways"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics", "camera-tampering-detection"],
    relatedUseCases: ["unauthorized-area-entry", "loitering-detection", "vehicle-detection"],
    faqs: [
      {
        question: "How is AI perimeter detection different from motion detection?",
        answer:
          "Motion detection reacts to any change in the image, including swaying vegetation, rain, shadows and small animals, which causes nuisance alarms outdoors. AI perimeter detection classifies people and vehicles, tracks them and alerts only when they cross a defined line or enter a zone during an armed schedule.",
      },
      {
        question: "Does perimeter intrusion detection work at night?",
        answer:
          "It can, provided the cameras capture a usable image at night, usually with infrared or supplementary lighting. Image quality after dark is one of the main factors in reliability, so night views are checked during the site survey, and long, unlit fence lines may need extra lighting or more cameras.",
      },
      {
        question: "Can remote, unmanned sites be monitored?",
        answer:
          "Yes. In OrionAlerts, analysis runs on an on-site Nebula OS node, so detection does not depend on a fast internet link and is built to work through constrained or intermittent WAN connections. Orion Cloud then gives a central view of alerts and camera health across remote sites without uploading raw video.",
      },
    ],
  },
  {
    slug: "crowd-detection",
    homepageSlug: "crowd-detection",
    h1: "AI crowd detection and density monitoring",
    seoTitle: "AI Crowd Detection and Density Monitoring",
    seoDescription:
      "How AI video analytics tracks crowd build-ups and density in monitored areas, what affects reliability, and what you need to run it on existing CCTV.",
    definition:
      "Crowd detection is video analytics that estimates how many people are in a monitored area, or how densely they are gathered, and raises an alert when a build-up crosses a configured level. Operations and safety teams use it to spot congestion at entrances, queues, platforms and gathering points before it becomes a safety or service problem.",
    howItWorks: [
      "For moderate numbers, a person-detection model counts individuals in a zone. In dense scenes where people overlap heavily, density-estimation models predict how many people occupy each part of the image instead of detecting each person separately.",
      "Rules compare the count or density in each zone against a level the site defines, and can require the condition to persist for a period before alerting, so brief surges do not cause alerts.",
    ],
    reliability: [
      "Camera angle: high, downward-looking views reduce people hiding behind one another.",
      "Occlusion: dense crowds overlap heavily, which is why density estimation is used instead of counting at high densities.",
      "Lighting: changing daylight, stage lighting and night conditions affect how clearly people can be seen.",
      "Zone design: thresholds should reflect the real capacity of each area, set with the operations team.",
    ],
    industries: ["sports-events", "airports-ports-railways", "retail-shopping", "education-campuses", "government"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["loitering-detection", "abandoned-object-detection", "restricted-zone-monitoring"],
    faqs: [
      {
        question: "What is the difference between crowd detection and people counting?",
        answer:
          "People counting tallies individuals, usually as they pass an entrance or line. Crowd detection estimates how many people are gathered in an area, or how densely, and alerts when a build-up crosses the level set for that zone. Counting suits footfall reporting; crowd detection suits congestion and safety monitoring.",
      },
      {
        question: "Can crowd detection use existing cameras?",
        answer:
          "Often, yes, especially elevated cameras that look down over the area, because high angles reduce people hiding behind one another. OrionAlerts connects existing IP cameras through ONVIF, RTSP and vendor SDKs, with compatibility confirmed per camera model during solution design. Low, eye-level cameras are less suited to dense crowds.",
      },
      {
        question: "Who sets the crowd thresholds?",
        answer:
          "The site's operations or safety team sets them, based on the real capacity of each area and how it is normally used. Thresholds and schedules are configured per zone, and a rule can require the build-up to last for a set period, so brief surges at a doorway do not raise alerts.",
      },
    ],
  },
  {
    slug: "loitering-detection",
    homepageSlug: "loitering-detection",
    h1: "AI loitering detection for sensitive and idle zones",
    seoTitle: "AI Loitering Detection for CCTV Cameras",
    seoDescription:
      "How AI video analytics flags people who stay too long in sensitive or idle zones, what affects reliability, and what you need to run it on existing CCTV.",
    definition:
      "Loitering detection is video analytics that raises an alert when a person remains in a defined area for longer than an allowed time. It flags prolonged presence near ATMs, entrances, perimeters, parking areas or idle zones, which can indicate reconnaissance, an attempted break-in or someone who needs assistance.",
    howItWorks: [
      "A person-detection model finds people in each frame and a tracker follows each one, keeping a consistent identity as they move. The system measures how long each tracked person stays within a zone and raises an alert once the dwell time exceeds the limit configured for that zone and schedule.",
      "Because dwell time is measured per person, a busy area with people passing through does not trigger the alert; only someone who stays does.",
    ],
    reliability: [
      "Tracking continuity: occlusion by pillars, vehicles or other people can break a track and reset the dwell timer.",
      "Camera placement: the whole zone should be in view, so people do not leave and re-enter the frame.",
      "Lighting: low light at night makes people harder to detect and track consistently.",
      "Time limits: limits should reflect normal behavior in each zone, such as queues or waiting areas.",
    ],
    industries: ["banking", "retail-shopping", "residential", "telecom-remote", "commercial-buildings"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["perimeter-intrusion-detection", "unauthorized-area-entry", "abandoned-object-detection"],
    faqs: [
      {
        question: "How long does someone have to stay before a loitering alert?",
        answer:
          "That is set per zone by the site team. A short limit suits a sensitive entrance or an ATM lobby at night, while a longer one suits areas where people normally wait, such as a reception or a queue. Schedules let the same zone use different limits at different times of day.",
      },
      {
        question: "Will people walking past trigger loitering alerts?",
        answer:
          "No. Loitering detection tracks each person and measures how long they stay inside the zone, so people passing through do not reach the time limit. An alert is raised only when one tracked person stays longer than allowed. Heavy occlusion can break a track and reset the timer, which is why camera placement matters.",
      },
      {
        question: "Where are loitering alerts delivered in OrionAlerts?",
        answer:
          "To the OrionAlerts dashboard, mobile app and email, for the teams configured for that site and zone. Each alert carries the camera, site and zone it came from, with the video clip attached, so the responder can see who is there and decide whether to act.",
      },
    ],
  },
  {
    slug: "camera-tampering-detection",
    homepageSlug: "camera-tampering",
    h1: "Camera tampering detection with AI video analytics",
    seoTitle: "AI Camera Tampering Detection for CCTV",
    seoDescription:
      "How video analytics detects blocked, covered, moved or defocused CCTV cameras, what affects reliability, and how it works with camera health monitoring.",
    definition:
      "Camera tampering detection is video analytics that recognizes when a camera has been blocked, covered, sprayed, defocused, moved or redirected so it no longer shows its intended scene. It raises an alert when the view is compromised, so the blind spot can be fixed quickly rather than discovered when footage is needed for an investigation.",
    howItWorks: [
      "The system learns what the camera's normal view looks like and compares each new frame against it. A sudden loss of detail or edges suggests covering or defocusing; a very dark frame suggests the lens is blocked; a large, lasting change in the scene suggests the camera has been moved.",
      "Short-lived changes, such as a person walking close to the lens, are ignored by requiring the condition to persist before alerting.",
    ],
    reliability: [
      "Scene changes: lights switching off, large vehicles parking in view or seasonal changes can resemble tampering.",
      "Lighting: day-to-night transitions need to be handled so they are not treated as a blocked lens.",
      "Weather: rain, condensation and dirt on outdoor lenses gradually reduce image quality and may trigger alerts.",
      "Pairing with health checks: tampering detection looks at the image; health monitoring catches cameras that go offline or stop recording.",
    ],
    industries: ["banking", "telecom-remote", "retail-shopping", "solar-renewable", "quick-commerce"],
    relatedGlossary: ["camera-tampering-detection", "camera-health-monitoring", "video-analytics"],
    relatedUseCases: ["no-motion-black-screen-alert", "perimeter-intrusion-detection", "loitering-detection"],
    faqs: [
      {
        question: "What kinds of tampering can be detected?",
        answer:
          "Camera tampering detection typically catches a covered or blocked lens, a sprayed or smeared lens, a defocused image and a camera that has been moved or redirected away from its intended view. Gradual problems such as dirt or condensation on the lens may also be flagged once the image degrades enough.",
      },
      {
        question: "Is tampering detection the same as camera health monitoring?",
        answer:
          "No. Health monitoring checks that a camera is online, streaming and recording. Tampering detection checks whether the image still shows the intended scene. A camera can pass one check and fail the other, so the two work together. OrionAlerts provides both, on the same Nebula OS node that records the camera.",
      },
      {
        question: "Can a tampered camera raise a maintenance request?",
        answer:
          "It can. In OrionAlerts, each camera has one device record shared by health monitoring, asset tracking and AMC management, so a camera issue can raise a service request against the vendor and contract attached to that device, instead of someone working out by hand who maintains it.",
      },
    ],
  },
  {
    slug: "no-motion-black-screen-alert",
    homepageSlug: "no-motion-black-screen",
    h1: "No-motion and black-screen alerts for CCTV cameras",
    seoTitle: "No-Motion and Black-Screen CCTV Alerts",
    seoDescription:
      "How no-motion and black-screen alerts catch failed camera feeds, frozen images and silent sensors before blind spots grow, and what you need to run them.",
    definition:
      "A no-motion or black-screen alert flags a camera whose video has gone black, frozen, or shown no expected activity for an unusually long time. It catches failed feeds, stuck streams and silent sensors that still appear online, so blind spots are fixed before footage is needed rather than discovered during an investigation.",
    howItWorks: [
      "Image checks look for frames that are almost entirely dark or uniform, frames that stop changing because the stream has frozen, and streams that stop arriving altogether. For cameras where activity is expected, a prolonged lack of any visual change can also indicate a problem.",
      "These checks complement network monitoring: a camera can answer a ping while delivering a black, frozen or empty image.",
    ],
    orionAlertsNote:
      "In OrionAlerts this belongs to health monitoring. The health engine inside Nebula OS continuously checks device, stream and recording status per camera, so it can catch a camera that pings but has stopped recording, and it flags conditions such as a black screen, stream interruption or prolonged lack of expected visual activity. Alerts reach the dashboard, mobile app and email.",
    reliability: [
      "Expected activity: some cameras legitimately see no motion for long periods, so no-motion rules should be scheduled for views where activity is normal.",
      "Lighting: scenes that are genuinely dark at night can look like a black screen unless the camera has infrared or the rule is scheduled.",
      "Network quality: intermittent links can cause stream interruptions that need to be distinguished from camera faults.",
      "Recording status: checking that footage is actually being written matters as much as checking the live image.",
    ],
    extraRequirements: [
      "Health checks run on the Nebula OS node itself. GPU acceleration is used where AI analytics are enabled; image, stream and recording checks need no extra camera hardware.",
    ],
    industries: ["telecom-remote", "banking", "quick-commerce", "dark-stores", "government"],
    relatedGlossary: ["camera-health-monitoring", "camera-tampering-detection", "amc-annual-maintenance-contract"],
    relatedUseCases: ["camera-tampering-detection", "perimeter-intrusion-detection", "restricted-zone-monitoring"],
    faqs: [
      {
        question: "Why can a camera look online but still be a blind spot?",
        answer:
          "Because a network ping only proves the device responds. A camera can answer a ping while its image is black, frozen or blocked, or while the recorder has stopped saving footage. Image, stream and recording checks catch what a ping misses, so the blind spot is found before footage is needed.",
      },
      {
        question: "Which OrionAlerts module handles black-screen alerts?",
        answer:
          "Health monitoring. Its health engine runs inside Nebula OS and tracks device, stream and recording status for every connected camera. It flags black screens, stream interruptions and recording failures, and sends alerts to the dashboard, mobile app and email so the responsible team can fix the camera.",
      },
      {
        question: "Can a failed feed raise a maintenance request?",
        answer:
          "Yes. Health monitoring and asset records share one device record in Nebula OS, so a failing camera can raise a service request against the vendor and the AMC or warranty attached to that device. The request is then tracked in AMC management, from intake and vendor dispatch through to closure.",
      },
    ],
  },
  {
    slug: "vehicle-detection",
    homepageSlug: "vehicle-detection",
    h1: "AI vehicle detection for gates, yards and restricted approaches",
    seoTitle: "AI Vehicle Detection with CCTV Analytics",
    seoDescription:
      "How AI video analytics detects vehicle presence, movement and restricted approaches in CCTV footage, what affects reliability, and what you need to run it.",
    definition:
      "Vehicle detection is video analytics that identifies cars, trucks, two-wheelers and other vehicles in camera footage and tracks their presence and movement. It alerts on vehicles entering restricted approaches, stopping in no-parking or emergency zones, or moving in the wrong direction, and supports monitoring of gates, yards, docks and internal roads.",
    howItWorks: [
      "An object-detection model locates vehicles in each frame and classifies them by type, and a tracker follows them across frames. Rules then check vehicle behavior against zones and lines drawn on the camera view: entering a zone, crossing a line in a given direction, or remaining stationary beyond a time limit.",
      "Vehicle detection is distinct from ANPR, which reads the number plate. The two are often combined where vehicles need to be identified as well as detected.",
    ],
    reliability: [
      "Camera placement: views should cover the full approach, gate or zone, not only part of a lane.",
      "Lighting: headlight glare at night and deep shadows can hide or distort vehicles.",
      "Occlusion: queued or parked vehicles can hide others behind them.",
      "Distance and resolution: small or distant vehicles are harder to classify by type.",
    ],
    industries: ["logistics", "cement", "metals-mining", "construction", "residential"],
    relatedGlossary: ["anpr", "video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["perimeter-intrusion-detection", "restricted-zone-monitoring", "crowd-detection"],
    faqs: [
      {
        question: "Is vehicle detection the same as ANPR?",
        answer:
          "No. Vehicle detection finds vehicles, classifies them by type and tracks how they move. ANPR (automatic number plate recognition) reads the number plate as text to identify a specific vehicle. The two are often combined at gates and access points, where a site needs to both detect and identify vehicles.",
      },
      {
        question: "What vehicle events can trigger alerts?",
        answer:
          "Typical events are a vehicle entering a restricted approach or zone, crossing a line in the wrong direction, or stopping where stopping is not allowed, such as a fire lane or a loading-bay entrance. Each rule is set per zone and schedule to match how traffic actually flows on the site.",
      },
      {
        question: "Can vehicle detection run on existing yard cameras?",
        answer:
          "Often, yes. OrionAlerts connects existing IP cameras through ONVIF, RTSP and vendor SDKs, provided the views cover the gates, roads or yard areas to monitor. Compatibility is confirmed per camera model during solution design, and night views with strong headlight glare are checked during the site survey.",
      },
    ],
  },
  {
    slug: "safety-compliance-detection",
    homepageSlug: "safety-compliance",
    h1: "AI safety compliance and PPE detection",
    seoTitle: "AI Safety Compliance and PPE Detection",
    seoDescription:
      "How AI video analytics checks PPE and site safety rules from CCTV in real time, what affects reliability, and what you need to run it on existing cameras.",
    definition:
      "Safety compliance detection is video analytics that checks whether people follow site safety rules, most commonly whether required PPE such as hard hats and high-visibility vests is worn in designated zones. It flags violations in real time so supervisors can intervene, and keeps an event record for safety reviews, audits and training.",
    howItWorks: [
      "A person-detection model finds each worker, then a second model, or a model trained on both, checks for the presence of required equipment on that person, such as a helmet on the head or a vest on the torso. Rules define which items are required in which zone and during which shifts.",
      "Other safety rules use the same building blocks, such as a person inside a hazardous zone that should be empty while machinery is running.",
    ],
    reliability: [
      "Person size in frame: PPE items are small, so workers need to appear large and clearly enough in the image.",
      "Camera angle: views from far above can hide helmets and vests; angled views from the side or front usually work better.",
      "Lighting: dim areas and strong backlight make colors and shapes of PPE harder to recognize.",
      "Site variation: PPE colors and styles differ by site, so detections are typically validated in a pilot before rollout.",
    ],
    industries: ["manufacturing", "construction", "cement", "metals-mining", "oil-gas"],
    relatedGlossary: ["ppe-detection", "video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["restricted-zone-monitoring", "fall-detection", "fire-smoke-detection"],
    faqs: [
      {
        question: "What safety rules can video analytics check?",
        answer:
          "Most commonly, whether required PPE such as hard hats and high-visibility vests is worn in designated zones. Video analytics can also check presence rules, such as people entering hazardous or restricted areas during active hours. Which rules apply, and where, is agreed with the site's EHS team during solution design.",
      },
      {
        question: "Can PPE rules differ between zones?",
        answer:
          "Yes. Rules are set per zone and schedule, so a production floor can require helmets and vests while a loading bay requires only vests and an office area requires nothing. Shift schedules can change the rules over the day, and each zone keeps its own record of violations for review.",
      },
      {
        question: "How are safety alerts delivered?",
        answer:
          "In OrionAlerts, safety alerts reach the teams you configure, such as EHS supervisors, through the dashboard, mobile app and email. Each event is stored against the camera and site it came from, so violations can be reviewed later for safety meetings, audits and training, not only acted on in the moment.",
      },
    ],
  },
  {
    slug: "abandoned-object-detection",
    homepageSlug: "abandoned-object",
    h1: "AI abandoned object detection",
    seoTitle: "AI Abandoned Object Detection for CCTV",
    seoDescription:
      "How AI video analytics flags unattended bags and items left in public or sensitive areas, what affects reliability, and what you need to run it on CCTV.",
    definition:
      "Abandoned object detection is video analytics that raises an alert when an item, such as a bag, box or package, appears in a monitored area and stays there unattended beyond a set time. It helps security teams respond quickly to unattended items in concourses, lobbies, platforms and entrances, where they may indicate a risk.",
    howItWorks: [
      "The system models the normal background of the scene and detects new objects that appear and then remain static. Object-detection models classify the item, and tracking checks whether the person who left it has moved away. If the item stays unattended beyond the configured time, an alert is raised with an image or short clip of the item.",
      "Zones and time limits are set per area, so items that are routinely put down for a while, such as luggage at a check-in counter, do not raise alerts.",
    ],
    reliability: [
      "Busy scenes: heavy foot traffic can hide items behind passing people and interrupt tracking.",
      "Camera placement: elevated views that see the floor clearly work best.",
      "Lighting: changing light and shadows can make the background model see objects that are not there.",
      "Time limits: limits should reflect how long items are normally left, for example at a baggage counter.",
    ],
    industries: ["airports-ports-railways", "government", "sports-events", "retail-shopping", "commercial-buildings"],
    relatedGlossary: ["video-analytics", "edge-ai-video-analytics"],
    relatedUseCases: ["loitering-detection", "crowd-detection", "restricted-zone-monitoring"],
    faqs: [
      {
        question: "How long must an item be left before an alert?",
        answer:
          "That is configured per zone by the site team, based on how long items are normally set down in that area. A short limit suits a platform edge or a building entrance; a longer one suits a waiting area or baggage counter, where people often put bags down for a while.",
      },
      {
        question: "Does abandoned object detection work in crowded areas?",
        answer:
          "It can, but heavy foot traffic hides items behind passing people and interrupts tracking, which makes busy scenes harder. Elevated camera views that see the floor clearly, well-chosen zones and realistic time limits improve results. Each camera view is assessed during solution design before the rule goes live.",
      },
      {
        question: "Can existing cameras be used?",
        answer:
          "Often, yes. OrionAlerts works with existing IP cameras through ONVIF, RTSP and vendor SDKs, with compatibility confirmed per camera model during solution design. The best cameras for this use case are mounted high and look down on the floor, so items are not hidden behind people.",
      },
    ],
  },
  {
    slug: "restricted-zone-monitoring",
    homepageSlug: "restricted-zone",
    h1: "Restricted-zone monitoring with AI video analytics",
    seoTitle: "AI Restricted-Zone Monitoring for CCTV",
    seoDescription:
      "How AI video analytics keeps hazardous and prohibited zones clear, alerting when anyone enters, what affects reliability, and what you need to run it.",
    definition:
      "Restricted-zone monitoring is video analytics that continuously watches a defined area, such as a hazardous machine zone, high-voltage area, tank farm or prohibited walkway, and alerts whenever a person, or optionally a vehicle, is present in it during active hours. It keeps prohibited zones clear without relying on someone watching every screen.",
    howItWorks: [
      "Operators draw one or more zones on each camera view and set the hours each zone is active. Object-detection models find people and vehicles in every frame, and the system checks whether any detected object is inside an active zone, typically using the position of a person's feet on the ground.",
      "Unlike motion detection, which reacts to any change in the zone, AI detection only alerts when a person or vehicle is actually present.",
    ],
    reliability: [
      "Zone drawing: zones should follow the real boundary on the ground as the camera sees it, accounting for perspective.",
      "Camera placement: the whole zone, and the floor within it, should be visible.",
      "Occlusion: machinery and structures inside the zone can hide people.",
      "Lighting: hazardous areas are often poorly lit at night and may need supplementary lighting.",
    ],
    industries: ["manufacturing", "oil-gas", "data-centres", "pharma", "utilities"],
    relatedGlossary: ["video-analytics", "ppe-detection", "edge-ai-video-analytics"],
    relatedUseCases: ["unauthorized-area-entry", "safety-compliance-detection", "perimeter-intrusion-detection"],
    faqs: [
      {
        question: "Can different zones on one camera have different rules?",
        answer:
          "Yes. Several zones can be drawn on the same camera view, each with its own schedule and the object types it should alert on. For example, one zone can alert on any person near a machine at all hours, while another alerts on vehicles in a walkway only during shifts.",
      },
      {
        question: "Is restricted-zone monitoring only for security?",
        answer:
          "No. It is widely used for safety as well as security, keeping people out of hazardous machine areas, high-voltage zones, tank farms and vehicle routes. The same zone can serve both purposes, with alerts going to security after hours and to EHS supervisors during working shifts.",
      },
      {
        question: "Where do restricted-zone alerts go in OrionAlerts?",
        answer:
          "To the OrionAlerts dashboard, mobile app and email, for the teams configured for that site and zone. Each alert carries the camera, site and zone it came from, with the video clip attached, so the responder can see who entered and decide how to respond.",
      },
    ],
  },
];

export const useCases: UseCaseRecord[] = sources.map((source) => {
  const card = aiUseCases.find((c) => c.slug === source.homepageSlug);
  if (!card) throw new Error(`Missing homepage use case: ${source.homepageSlug}`);
  const hasOwnVideo = Boolean(card.previewSrc) && card.previewSrc !== GENERIC_PREVIEW;
  return {
    ...source,
    title: card.title,
    summary: card.description,
    solution: card.href,
    video: hasOwnVideo ? { src: card.previewSrc as string, poster: card.poster } : undefined,
  };
});

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}

/** Hub copy for /use-cases. */
export const useCasesHub = {
  title: "AI video analytics use cases",
  seoTitle: "AI Video Analytics Use Cases for CCTV",
  seoDescription:
    "Twelve AI video analytics use cases for existing CCTV, from fire and smoke to PPE, intrusion and tampering: how each detection works and what it needs.",
  answer:
    "AI video analytics use cases are specific detections that turn live CCTV video into alerts, such as fire and smoke, falls, intrusion, crowding, loitering, PPE compliance and camera tampering. Each page below explains how the detection works, what affects its reliability, what you need to run it and where it is used.",
};
