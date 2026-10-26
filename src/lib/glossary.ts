/**
 * Glossary of video surveillance and AI video analytics terms (/glossary).
 *
 * Rules for this file:
 * - `definition` is a neutral, industry-general definition (40–60 words) shown
 *   as the "Definition" panel under the H1 and used as the DefinedTerm description.
 * - `howOrionAlertsHandles` uses only facts already published on the site
 *   (site.ts, nebula-os.ts, faqs.ts, homepage.ts). Leave it undefined rather
 *   than stretch a claim.
 * - FAQ answers are answer-first, 40–60 words, and must not repeat the wording
 *   of the matching /use-cases, /solutions or /nebula-os FAQs.
 * - No numbers, customers, certifications, accuracy figures or prices.
 */

export type GlossaryFaq = { question: string; answer: string };

export type GlossaryTerm = {
  slug: string;
  /** Display name and DefinedTerm `name`. */
  term: string;
  /** Visible H1, phrased as the question people search for. */
  h1: string;
  /** One sentence for hub cards and link previews. */
  shortDefinition: string;
  /** 40–60 word definition-first answer. */
  definition: string;
  /** Paragraph grounded in site facts; omitted where the site says nothing. */
  howOrionAlertsHandles?: string;
  /** Related glossary slugs. */
  related: string[];
  /** Primary solution page for this term, e.g. "/solutions/vms". */
  solution?: string;
  /** Related /use-cases slugs. */
  useCases?: string[];
  /** Page title (≤46 chars; " | OrionAlerts" is appended). */
  seoTitle: string;
  /** Meta description (120–155 chars). */
  seoDescription: string;
  /** Extra body paragraphs after the definition (general industry context). */
  details?: string[];
  faqs: GlossaryFaq[];
};

export const GLOSSARY_PATH = "/glossary";

export const glossaryTerms: GlossaryTerm[] = [
  {
    slug: "vms",
    h1: "What is a video management system (VMS)?",
    term: "Video management system (VMS)",
    shortDefinition:
      "Software that connects cameras and recorders so operators can view live video, record, play back and export footage from one place.",
    definition:
      "A video management system (VMS) is software that connects IP cameras and recorders, then lets operators watch live video, record and retain footage, search and play back events, manage user access and export evidence. Enterprise VMS platforms add multi-site management, alarm handling and integrations with video analytics, access control and other security systems.",
    details: [
      "A VMS sits above the cameras and recording hardware. Where an NVR is a single recording box, a VMS is the software layer that brings many cameras, recorders and sites into one operator console with shared users, permissions and event history.",
      "Most modern VMS platforms connect to cameras using open standards such as ONVIF and RTSP, plus vendor SDKs for features a standard does not cover.",
    ],
    howOrionAlertsHandles:
      "In OrionAlerts, video management is a built-in module of Nebula OS rather than a separate product to integrate. Operators get live walls and playback for every site in one console, set recording and retention per camera, zone or site, search incident timelines and export evidence, all within role-based access. Cameras connect over ONVIF, RTSP and vendor SDKs.",
    related: ["nvr-vs-dvr-vs-vms", "vsaas", "onvif", "rtsp", "video-retention-policy", "video-wall"],
    solution: "/solutions/vms",
    seoTitle: "What Is a VMS (Video Management System)?",
    seoDescription:
      "A VMS connects cameras and recorders for live view, recording, playback and evidence export. Learn what a video management system does and how it works.",
    faqs: [
      {
        question: "Does a VMS run on site or in the cloud?",
        answer:
          "Traditionally a VMS runs on servers at the site or in a company data center and records to local storage. Some vendors now offer cloud-hosted or hybrid VMS, where management or recording moves to the cloud. The main trade-offs are upload bandwidth, where video is stored and who maintains the servers.",
      },
      {
        question: "Does a VMS replace my cameras?",
        answer:
          "No. A VMS is software that connects to cameras rather than replacing them. Most platforms support ONVIF and RTSP, and many add vendor SDKs for brand-specific features, so cameras that are already installed can usually be brought in. Support should still be checked per camera model, because firmware and features vary.",
      },
      {
        question: "Is the OrionAlerts VMS a separate product?",
        answer:
          "No. Video management is one of five modules of Nebula OS, the operating system underneath OrionAlerts. The others are AI video analytics, camera health monitoring, asset tracking and AMC management. Because the modules share one record of every camera, an alert, an outage and a service ticket all refer to the same device.",
      },
    ],
  },
  {
    slug: "vsaas",
    h1: "What is video surveillance as a service (VSaaS)?",
    term: "Video surveillance as a service (VSaaS)",
    shortDefinition:
      "A cloud delivery model where recording, viewing and management of surveillance video are provided as a hosted subscription service.",
    definition:
      "Video surveillance as a service (VSaaS) is a delivery model in which video recording, storage, viewing and management are hosted by a provider and sold as a subscription. Cameras stream to the provider's cloud, often through an on-site gateway, and users access live and recorded video through a web or mobile app instead of running their own servers.",
    details: [
      "VSaaS reduces on-site server management, but it depends on upload bandwidth from every site and places recorded video with the provider. Some VSaaS offerings keep a local recorder or gateway as a buffer and upload only selected footage or events.",
      "The alternative is an on-premise VMS, where video is recorded and processed on site. Hybrid models keep video local and use the cloud for remote access and central management.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts is not a VSaaS product and does not offer cloud video recording. In the standard deployment, video and AI inference stay on an on-site Nebula OS node. Orion Cloud, the central management layer, synchronizes only health status, alerts, configuration and operational metadata across sites, so raw video does not have to be uploaded.",
    related: ["vms", "edge-ai-video-analytics", "nvr-vs-dvr-vs-vms"],
    solution: "/nebula-os",
    seoTitle: "What Is VSaaS? Video Surveillance as a Service",
    seoDescription:
      "VSaaS hosts video recording and viewing in the cloud as a subscription. Learn how it works, its trade-offs, and how it differs from on-premise VMS.",
    faqs: [
      {
        question: "What is the difference between VSaaS and a VMS?",
        answer:
          "A VMS is software for viewing, recording and managing video, traditionally run on your own servers. VSaaS delivers similar functions as a hosted subscription, with video streamed to and stored by the provider. The choice mostly comes down to bandwidth, where footage is kept, the cost model and who maintains the system.",
      },
      {
        question: "Does VSaaS need a lot of bandwidth?",
        answer:
          "Usually more than an on-premise system, because recorded video has to travel from each site to the provider. The amount depends on camera count, resolution, frame rate, compression and whether the service uploads continuously or only on events. Sites with limited or costly upload links often struggle to support continuous cloud recording.",
      },
      {
        question: "Is OrionAlerts a VSaaS platform?",
        answer:
          "No. OrionAlerts is not a cloud recording service. Video is recorded and analyzed on an on-site Nebula OS node, and Orion Cloud synchronizes only health status, alerts, configuration and operational metadata for central management. Multi-site organizations get one command view without uploading raw video from each site.",
      },
    ],
  },
  {
    slug: "nvr-vs-dvr-vs-vms",
    h1: "NVR vs DVR vs VMS: what is the difference?",
    term: "NVR vs DVR vs VMS",
    shortDefinition:
      "A DVR records analog cameras, an NVR records IP cameras, and a VMS is software that manages cameras and recorders across sites.",
    definition:
      "A DVR (digital video recorder) records analog cameras, converting their signal into digital video. An NVR (network video recorder) records IP cameras, which encode video themselves and stream it over the network. A VMS (video management system) is software that manages many cameras and recorders, often across sites, with shared users, alarms, search and evidence export.",
    details: [
      "DVRs and NVRs are recording appliances, usually tied to one location and often managed one box at a time. A VMS is the management layer above them: it can record directly from cameras or work alongside existing recorders.",
      "Many organizations run a mix: older analog cameras on DVRs, newer IP cameras on NVRs, and a VMS to bring them into one view.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts does not require existing recorders to be removed. The Nebula OS device layer connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so an NVR can keep recording while OrionAlerts adds video management, AI video analytics, camera health monitoring, asset records and AMC workflows. Support for each recorder model is confirmed during solution design.",
    related: ["vms", "onvif", "rtsp", "camera-health-monitoring", "poe-power-over-ethernet"],
    solution: "/solutions/vms",
    seoTitle: "NVR vs DVR vs VMS: What Is the Difference?",
    seoDescription:
      "DVRs record analog cameras, NVRs record IP cameras, and a VMS manages cameras and recorders across sites. Compare the three and when each one fits.",
    faqs: [
      {
        question: "Can a DVR record IP cameras?",
        answer:
          "A traditional DVR cannot; it only accepts analog camera inputs. Hybrid DVRs, often sold as XVRs, accept HD-analog cameras plus a limited number of IP cameras, which helps when an estate is migrated gradually. For an all-IP system, an NVR or a VMS recording to its own server is the usual choice.",
      },
      {
        question: "Do I need an NVR if I have a VMS?",
        answer:
          "Not always. Many VMS platforms record directly from IP cameras to their own servers and storage, so a separate NVR is optional. Keeping existing NVRs can still make sense when they work well, are already paid for, or hold footage that must be retained. The right answer depends on the estate and the design.",
      },
      {
        question: "Does OrionAlerts work with existing NVRs?",
        answer:
          "Yes, where the recorder is supported. OrionAlerts connects IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so existing NVRs can stay in place and keep recording. Older or analog cameras are evaluated individually to find a suitable stream or integration path, and each model is confirmed during solution design.",
      },
    ],
  },
  {
    slug: "video-analytics",
    h1: "What is video analytics?",
    term: "Video analytics",
    shortDefinition:
      "Software that analyzes video automatically to detect people, vehicles, objects and events, and raises alerts without constant human watching.",
    definition:
      "Video analytics is software that automatically analyzes video to detect and classify people, vehicles, objects and events, such as intrusion, loitering or missing safety gear. Modern AI video analytics uses computer vision models to process live streams in real time and raise alerts, so operators respond to events instead of watching every screen.",
    details: [
      "Earlier analytics relied on pixel-change rules such as motion detection, which react to shadows, rain and lighting changes. AI video analytics uses trained deep-learning models that recognize what is in the scene, which allows more specific rules.",
      "Analytics can run inside the camera, on an on-site server or appliance, or in the cloud. Where it runs affects bandwidth, privacy and how many detections can run at once.",
    ],
    howOrionAlertsHandles:
      "In OrionAlerts, analytics run on the same video pipeline that records the cameras: the AI runtime takes decoded frames from the Nebula OS video engine, so there is no parallel stream into a separate analytics box. Zone and schedule rules decide when an event raises an alert, and alerts reach operators on the dashboard, mobile app and email.",
    related: ["edge-ai-video-analytics", "ppe-detection", "camera-tampering-detection", "line-crossing-detection", "people-counting", "anpr"],
    solution: "/solutions/ai-analytics",
    useCases: ["perimeter-intrusion-detection", "fire-smoke-detection", "loitering-detection"],
    seoTitle: "What Is Video Analytics? AI Video Analytics",
    seoDescription:
      "Video analytics uses computer vision to detect people, vehicles and events in live video and raise alerts. Learn how AI video analytics works.",
    faqs: [
      {
        question: "Does video analytics replace security operators?",
        answer:
          "No. Video analytics watches every camera continuously and flags defined events, but people still verify alerts, decide on a response and handle situations the rules do not cover. The practical benefit is that operators spend their time on events that matter instead of scanning screens where nothing is happening.",
      },
      {
        question: "Can video analytics work with existing CCTV cameras?",
        answer:
          "Often, yes. Analytics that run on a server or appliance can process streams from existing IP cameras over RTSP or ONVIF, and some setups can use streams from recorders. Results depend on camera placement, lighting, resolution and how large the target appears, so each view should be checked before relying on it.",
      },
      {
        question: "Which detections does OrionAlerts support?",
        answer:
          "The detections OrionAlerts lists cover safety (PPE compliance, falls, fire and smoke), security (intrusion, line crossing, restricted-area entry, loitering, abandoned objects), operations (crowds, occupancy, vehicles) and camera integrity (tampering). Which ones apply depends on the site and each camera view, and custom use cases can be scoped during solution design.",
      },
    ],
  },
  {
    slug: "camera-health-monitoring",
    h1: "What is camera health monitoring?",
    term: "Camera health monitoring",
    shortDefinition:
      "Continuous checks that cameras, recorders, storage and network links are online, streaming and recording, with alerts when they are not.",
    definition:
      "Camera health monitoring is the continuous checking of cameras, NVRs, storage and network links to confirm that every camera is online, streaming a usable image and actually recording. It raises alerts on failures such as offline cameras, recording gaps, full or failing storage and lost connectivity, before missing footage is discovered during an investigation.",
    details: [
      "A camera can respond to a network ping and still be useless: the stream may have stopped, the lens may be blocked, or the recorder may have stopped writing footage. Health monitoring looks at stream, recording and storage status, not just network reachability.",
      "Uptime and availability reports help teams prioritize repairs and hold maintenance vendors to their service levels.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts builds health monitoring into Nebula OS. Its health engine tracks device, stream and recording status for each camera, watches storage capacity and retention risk, and checks servers, services and connectivity through a built-in watchdog. Running inside the platform lets it flag a camera that still answers a ping but is no longer recording, and uptime reports cover every site.",
    related: ["camera-uptime", "camera-tampering-detection", "video-retention-policy", "amc-annual-maintenance-contract", "nvr-vs-dvr-vs-vms"],
    solution: "/solutions/health-monitoring",
    useCases: ["no-motion-black-screen-alert", "camera-tampering-detection"],
    seoTitle: "What Is CCTV Camera Health Monitoring?",
    seoDescription:
      "Camera health monitoring checks that cameras, NVRs, storage and links are online and recording. Learn what it tracks and why ping checks are not enough.",
    faqs: [
      {
        question: "What does camera health monitoring track?",
        answer:
          "Typically whether each camera is online and streaming, whether footage is actually being recorded, storage capacity and disk health, recorder and server status, and network connectivity. Good systems also track how long devices have been down, so teams can see uptime and availability per camera, per site and per maintenance vendor.",
      },
      {
        question: "Who uses camera health monitoring?",
        answer:
          "Security and control-room teams use it to know every camera is recording. IT and facilities teams use it to find and fix failed devices, and maintenance vendors use it to prioritize repairs. Uptime reports also give managers evidence for audits and for checking whether service levels are being met.",
      },
      {
        question: "Can a health failure open a maintenance ticket in OrionAlerts?",
        answer:
          "Yes. In Nebula OS, each camera's health status, asset record and maintenance contract live on one device record. When a camera fails, a service request can be raised against the vendor and contract that cover it, then followed from vendor dispatch to closure, with the SLA tracked along the way.",
      },
    ],
  },
  {
    slug: "onvif",
    h1: "What is ONVIF?",
    term: "ONVIF",
    shortDefinition:
      "An open industry standard that lets IP cameras, recorders and video software from different manufacturers discover and work with each other.",
    definition:
      "ONVIF is an open industry forum, and the family of interface specifications it publishes, for IP-based security products. The specifications let cameras, recorders and video management software from different manufacturers discover each other, stream video, control pan-tilt-zoom and exchange events. Features are grouped into profiles, such as Profile S and Profile T for video streaming.",
    details: [
      "The profiles most relevant to video surveillance are Profile S (basic video streaming, PTZ and audio), Profile T (advanced streaming, including H.265, imaging settings and metadata), Profile G (recording and storage on the device) and Profile M (analytics metadata and events). A product is conformant only for the profiles it is listed for.",
      "Two devices that conform to the same profile should interoperate for the features that profile covers, but implementations vary, and manufacturer-specific features may still require a vendor SDK. ONVIF normally delivers the video itself over RTSP, so the two are often used together.",
    ],
    howOrionAlertsHandles:
      "ONVIF is one of three ways Nebula OS connects to devices, alongside RTSP and vendor SDKs. A universal device layer translates all three into one internal device model, which keeps an OrionAlerts deployment brand-neutral and lets existing cameras be brought onto the platform rather than replaced. Support for each camera model is confirmed during solution design.",
    related: ["rtsp", "vms", "nvr-vs-dvr-vs-vms", "h265-video-compression"],
    solution: "/nebula-os",
    seoTitle: "What Is ONVIF? IP Camera Interoperability",
    seoDescription:
      "ONVIF is an open standard that lets IP cameras, recorders and VMS software from different brands work together. Learn how ONVIF profiles work.",
    faqs: [
      {
        question: "What is the difference between ONVIF and RTSP?",
        answer:
          "RTSP is a protocol for setting up and controlling a media stream. ONVIF is a broader interoperability standard that also covers device discovery, configuration, PTZ control, events and recording search, and it normally relies on RTSP to deliver the video. A camera can offer an RTSP stream without being ONVIF conformant.",
      },
      {
        question: "Does ONVIF guarantee full compatibility?",
        answer:
          "No. Conformance to the same profile makes interoperability likely for that profile's features, but implementations differ between manufacturers and firmware versions. Brand-specific features, such as some analytics or camera settings, may only be available through a vendor SDK. Check each product's conformance and test each camera model before a large rollout.",
      },
      {
        question: "Does OrionAlerts support ONVIF cameras?",
        answer:
          "Yes. The Nebula OS device layer connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs and presents them in the same console, whatever the brand. Because ONVIF implementations vary, support for each specific camera and recorder model at your sites is confirmed during solution design.",
      },
    ],
  },
  {
    slug: "rtsp",
    h1: "What is RTSP (Real Time Streaming Protocol)?",
    term: "RTSP (Real Time Streaming Protocol)",
    shortDefinition:
      "A network protocol used to set up and control live video streams from IP cameras and recorders.",
    definition:
      "RTSP (Real Time Streaming Protocol) is a network protocol for establishing and controlling media streams. In video surveillance, IP cameras and recorders expose an RTSP address that a VMS, recorder or analytics server connects to in order to receive live video. The video itself is usually carried over RTP and encoded as H.264 or H.265.",
    details: [
      "RTSP is the most widely supported way to pull a live stream from an IP camera, which makes it a common baseline for connecting mixed-brand estates. Many cameras offer a main stream for recording and a lower-resolution substream for viewing.",
      "RTSP does not cover device discovery, configuration or events; ONVIF or a vendor SDK handles those. Cameras usually require a username and password for their RTSP stream, and the exact stream address format varies by manufacturer.",
    ],
    howOrionAlertsHandles:
      "RTSP is one of the protocols the Nebula OS universal device layer supports, alongside ONVIF and vendor SDKs. Where a camera or recorder provides a usable RTSP stream, OrionAlerts can bring it onto the platform for video management and AI video analytics without replacing the camera. Support for each model is confirmed during solution design.",
    related: ["onvif", "vms", "video-analytics", "h265-video-compression"],
    solution: "/nebula-os",
    seoTitle: "What Is RTSP? Real Time Streaming Protocol",
    seoDescription:
      "RTSP is the network protocol IP cameras use to deliver live video to a VMS, recorder or analytics server. Learn how RTSP streams work in CCTV.",
    faqs: [
      {
        question: "What is an RTSP URL?",
        answer:
          "An RTSP URL is the network address a VMS, recorder or analytics server uses to request a camera's live stream. It usually includes the camera's IP address, a port (554 by default) and a manufacturer-specific path that selects the main stream or substream. Access normally requires the camera's username and password.",
      },
      {
        question: "Is RTSP secure?",
        answer:
          "Plain RTSP does not encrypt video. RTSPS, which runs RTSP over TLS, does, but camera support varies. Most deployments protect RTSP streams by keeping cameras on a separate network or VLAN, using strong unique passwords and never exposing RTSP ports directly to the internet. Check what each camera model supports.",
      },
      {
        question: "Can AI video analytics use an RTSP stream?",
        answer:
          "Yes. An analytics server can connect to a camera's RTSP stream, decode the video and run detection models on the frames. Stream resolution, frame rate and network capacity affect what can be detected and how many cameras one server can handle. OrionAlerts supports RTSP alongside ONVIF and vendor SDKs.",
      },
    ],
  },
  {
    slug: "edge-ai-video-analytics",
    h1: "What is edge AI video analytics?",
    term: "Edge AI video analytics",
    shortDefinition:
      "AI video analytics that run close to the cameras, in the camera or on an on-site server, instead of in a remote cloud.",
    definition:
      "Edge AI video analytics runs computer-vision models close to the cameras, inside the camera or on an on-site server or appliance, rather than sending video to a remote cloud for analysis. Processing on site reduces upload bandwidth, keeps video inside the local network and can continue working when the internet link is slow or interrupted.",
    details: [
      "Edge processing can mean in-camera analytics, which are limited by the camera's own processor, or an on-site server with GPU acceleration that analyzes many camera streams at once.",
      "Hybrid designs analyze video at the edge and send only events and metadata to a central system for multi-site oversight.",
    ],
    howOrionAlertsHandles:
      "In the standard OrionAlerts deployment, a Nebula OS node sits on site next to the cameras. Video and AI inference stay inside the site network, with GPU acceleration sized per deployment to the channel count and detections running, and only health, alert and configuration metadata sync to Orion Cloud. The on-site deployment is built to work through constrained or intermittent WAN links.",
    related: ["video-analytics", "vsaas", "rtsp"],
    solution: "/solutions/ai-analytics",
    seoTitle: "What Is Edge AI Video Analytics?",
    seoDescription:
      "Edge AI video analytics processes camera video on site instead of in the cloud. Learn how it works, why it saves bandwidth and how it protects privacy.",
    faqs: [
      {
        question: "What is the difference between edge and cloud video analytics?",
        answer:
          "Edge analytics processes video on site, inside the camera or on a local server. Cloud analytics uploads video, clips or frames to a remote service for processing. Edge reduces upload bandwidth and keeps video local; cloud reduces on-site hardware. The on-premise vs cloud comparison covers the trade-offs in more detail.",
      },
      {
        question: "Is edge AI the same as AI cameras?",
        answer:
          "Not exactly. AI cameras run analytics on their own processor, which is one form of edge AI. Edge AI also includes on-site servers or appliances that analyze streams from many ordinary IP cameras at once, usually with GPU acceleration. OrionAlerts takes the second approach, running analytics on a GPU-accelerated node at the site.",
      },
      {
        question: "Does edge AI keep working if the internet goes down?",
        answer:
          "Detection that runs on site does not depend on the internet link, so cameras keep being analyzed during an outage. Functions that need the link, such as remote viewing or notifications sent to phones and email, depend on connectivity. In OrionAlerts, recording and AI detection run on the on-site node.",
      },
    ],
  },
  {
    slug: "anpr",
    h1: "What is ANPR (automatic number plate recognition)?",
    term: "ANPR (automatic number plate recognition)",
    shortDefinition:
      "Video analytics that read vehicle number plates from camera images and turn them into searchable text for access control and logging.",
    definition:
      "ANPR (automatic number plate recognition), also called ALPR or LPR, is video analytics that locates a vehicle's number plate in a camera image, reads the characters and converts them to text. The result is matched against lists or logged with a timestamp, supporting gate access, visitor management, parking and vehicle movement records.",
    details: [
      "ANPR depends heavily on camera setup: plate size in the frame, viewing angle, shutter speed, infrared lighting at night and vehicle speed all affect read quality. Dedicated ANPR cameras are often positioned specifically for this purpose.",
      "Plate formats, fonts and layouts differ by country and region, including two-line plates, so recognition models are typically tuned for the plates they will see.",
    ],
    // Deliberately cautious: ANPR is not in the detection lists in site.ts or faqs.ts.
    // The only on-site mention is one passage in the CP Plus blog. Confirm with the team
    // before claiming ANPR as an OrionAlerts capability.
    howOrionAlertsHandles:
      "The detections OrionAlerts lists include vehicle detection, which identifies and tracks vehicles but does not read number plates. Number-plate recognition can be discussed as a custom requirement during solution design, where feasibility depends on the cameras, their placement and lighting, and how plate reads would need to connect to gate, access or visitor processes.",
    related: ["video-analytics", "edge-ai-video-analytics"],
    solution: "/solutions/ai-analytics",
    useCases: ["vehicle-detection"],
    seoTitle: "What Is ANPR? Number Plate Recognition",
    seoDescription:
      "ANPR reads vehicle number plates from camera video for gate access, visitor management and vehicle logs. Learn how ANPR works and what affects it.",
    faqs: [
      {
        question: "Is ANPR the same as ALPR or LPR?",
        answer:
          "Yes. ANPR (automatic number plate recognition) is the usual term in India, the UK and many other countries. ALPR (automatic license plate recognition) and LPR (license plate recognition) are the usual terms in North America. All three describe the same technology: reading a vehicle's plate from an image and converting it to text.",
      },
      {
        question: "What is ANPR used for?",
        answer:
          "Common uses are gate and boom-barrier access for approved vehicles, visitor and contractor vehicle logging, parking management, and tracing a vehicle's movements after an incident. Plate reads are usually matched against allow lists or watch lists and stored with a timestamp and image, so entries and exits can be reviewed later.",
      },
      {
        question: "Can a normal CCTV camera be used for ANPR?",
        answer:
          "Sometimes, but general-purpose cameras are rarely ideal. Reliable plate reading needs the plate large enough in the frame, a shallow viewing angle, a fast shutter to avoid motion blur and infrared lighting at night. Cameras positioned and configured specifically for plate capture at a gate or lane usually perform much better.",
      },
    ],
  },
  {
    slug: "camera-tampering-detection",
    h1: "What is camera tampering detection?",
    term: "Camera tampering detection",
    shortDefinition:
      "Analytics that detect when a camera is blocked, covered, moved, defocused or otherwise stops showing its intended scene.",
    definition:
      "Camera tampering detection is a video analytics function that recognizes deliberate or accidental interference with a camera's view: a lens that is covered, sprayed or blocked, an image that has been defocused, or a camera that has been moved or turned away. Many IP cameras include a basic tamper alarm, and VMS or analytics platforms can provide it centrally.",
    details: [
      "Tampering can be obvious, such as a bag over the camera or paint on the lens, or subtle, such as a camera nudged a few degrees so it no longer covers a doorway. Detection works best when each camera's expected view is well defined and the alert waits for the change to persist.",
      "It answers a different question from health monitoring. Health monitoring asks whether the camera is online, streaming and recording; tampering detection asks whether the picture still shows what it should. A blinded camera can pass every health check while recording nothing useful.",
    ],
    howOrionAlertsHandles:
      "Camera tampering detection is among the AI detections OrionAlerts lists, flagging cameras that are blocked, moved or otherwise compromised. It complements the platform's health monitoring, which tracks whether each camera is online, streaming and recording, so a camera that has been deliberately blinded and one that has silently failed both surface as alerts on the dashboard, mobile app and email.",
    related: ["camera-health-monitoring", "video-analytics"],
    solution: "/solutions/ai-analytics",
    useCases: ["camera-tampering-detection", "no-motion-black-screen-alert"],
    seoTitle: "What Is Camera Tampering Detection?",
    seoDescription:
      "Camera tampering detection alerts when a CCTV camera is covered, blocked, moved or defocused. Learn how it works and how it differs from health checks.",
    faqs: [
      {
        question: "Do IP cameras have built-in tamper detection?",
        answer:
          "Many do. IP cameras often include a basic tamper or scene-change alarm that sends an event to a recorder or VMS, and ONVIF Profile T includes tampering events. Built-in alarms vary in quality and settings between brands, so central analytics are often used to apply consistent rules across a mixed estate.",
      },
      {
        question: "Where is camera tampering detection most important?",
        answer:
          "Where cameras are within reach and nobody is watching live: bank branches and ATMs, retail stores, telecom shelters, solar farms, construction sites and remote yards. Covering or turning a camera is often a first step before theft or vandalism, so an immediate alert matters more there than at staffed sites.",
      },
      {
        question: "Where do OrionAlerts tampering alerts go?",
        answer:
          "To the OrionAlerts dashboard, mobile app and email, like other alerts on the platform. Each alert is tied to the camera and site it came from, and because cameras are also asset records in Nebula OS, the team can see who is responsible for that device and which maintenance contract covers it.",
      },
    ],
  },
  {
    slug: "ppe-detection",
    h1: "What is PPE detection?",
    term: "PPE detection",
    shortDefinition:
      "AI video analytics that check whether people in a zone are wearing required protective equipment such as helmets or safety vests.",
    definition:
      "PPE detection is AI video analytics that checks whether people in a monitored area are wearing required personal protective equipment, most often hard hats and high-visibility vests, and on some sites other visible items such as masks or gloves. It flags non-compliance in real time so supervisors can intervene, and records events for safety reviews, audits and training.",
    details: [
      "PPE detection is one part of wider safety compliance monitoring, which can also check whether people are inside hazardous zones or too close to moving equipment. It does not replace supervision or safety training; it extends what supervisors can see across shifts and areas.",
      "Because helmets, vests and gloves are small relative to the scene, detection quality depends heavily on the camera view. Requirements also differ by area, so rules are normally defined per zone and shift and tested on site before teams rely on them.",
    ],
    howOrionAlertsHandles:
      "PPE and safety compliance monitoring is part of the OrionAlerts AI video analytics module. Teams define which equipment is required in which zones and during which shifts, each violation is stored against the camera and site it came from for safety reviews and audits, and alerts reach the right team through the dashboard, mobile app and email.",
    related: ["video-analytics", "edge-ai-video-analytics"],
    solution: "/solutions/ai-analytics",
    useCases: ["safety-compliance-detection", "restricted-zone-monitoring"],
    seoTitle: "What Is PPE Detection? AI Safety Compliance",
    seoDescription:
      "PPE detection uses AI video analytics to check helmets, vests and other safety gear in real time. Learn how it works and what affects reliability.",
    faqs: [
      {
        question: "What PPE can video analytics detect?",
        answer:
          "Most commonly hard hats and high-visibility vests, because they are large and distinctive. Smaller items such as gloves, goggles, masks and safety shoes are harder to detect reliably and need closer, clearer camera views. What works on a given site depends on the model, camera placement, image resolution and how visible each item is.",
      },
      {
        question: "Where is PPE detection typically used?",
        answer:
          "Wherever specific protective equipment is mandatory in defined areas: factory floors, construction sites, warehouses and loading bays, cement and metals plants, and oil and gas facilities. It is most useful at the entry points to hazardous zones, where a missing helmet or vest can be flagged before the person reaches the work area.",
      },
    ],
  },
  {
    slug: "amc-annual-maintenance-contract",
    h1: "What is an AMC (annual maintenance contract)?",
    term: "AMC (annual maintenance contract)",
    shortDefinition:
      "A yearly service agreement under which a vendor maintains and repairs equipment, such as CCTV cameras and recorders, to agreed terms.",
    definition:
      "An AMC (annual maintenance contract) is a yearly service agreement under which a vendor maintains and repairs equipment, such as CCTV cameras, recorders and servers, for a fixed term. It typically covers preventive maintenance visits, breakdown support, response and resolution times, and sometimes parts, and is renewed or renegotiated each year.",
    details: [
      "AMCs are common in India for surveillance and IT estates. Contracts generally come in two forms: a comprehensive AMC bundles spare parts into the price, while a non-comprehensive AMC covers service visits and labor, with parts billed on top.",
      "Managing AMCs well means knowing which assets each contract covers, when visits are due, whether the vendor is meeting service levels and when renewals fall due. AMC management software replaces spreadsheets and email threads with a single record of contracts, warranties, service tickets and maintenance history.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts AMC Management attaches AMC and warranty coverage to each device, plans preventive maintenance across sites, and tracks service requests from intake through vendor dispatch to closure, with SLA status, renewal reminders and a service history per asset. Because health and asset data share Nebula OS, a failing camera can raise a service request under the contract that covers it.",
    related: ["camera-health-monitoring", "sla-service-level-agreement", "preventive-maintenance", "vms"],
    solution: "/solutions/amc-management",
    seoTitle: "What Is an AMC (Annual Maintenance Contract)?",
    seoDescription:
      "An AMC is a yearly service agreement covering maintenance and repairs for equipment such as CCTV cameras. Learn what it covers and how to manage it.",
    faqs: [
      {
        question: "What does an AMC usually cover?",
        answer:
          "Typically scheduled preventive maintenance visits, breakdown support, and agreed response and resolution times. Whether spare parts and replacement units are included depends on whether the contract is comprehensive or non-comprehensive. Before signing, check the list of covered devices and exclusions such as physical damage, cabling and consumables.",
      },
      {
        question: "What is the difference between an AMC and a warranty?",
        answer:
          "A warranty is the manufacturer's commitment to repair or replace a defective product for a set period after purchase, at no extra cost. An AMC is a separately purchased service agreement, usually with an installer or service vendor, that is renewed each year and typically takes over once the warranty ends.",
      },
      {
        question: "How does OrionAlerts help manage AMCs?",
        answer:
          "OrionAlerts AMC Management keeps every contract and warranty against the devices it covers, so teams can see coverage per camera and site. It schedules preventive visits, tracks service tickets and vendor SLAs, and sends reminders before an AMC or warranty lapses, so renewals are planned rather than discovered after a failure.",
      },
    ],
  },
  {
    slug: "video-retention-policy",
    h1: "What is a video retention policy?",
    term: "Video retention policy",
    shortDefinition:
      "The rules that set how long recorded CCTV footage is kept, and what happens to it when that period ends.",
    definition:
      "A video retention policy defines how long recorded surveillance footage is kept before it is overwritten or deleted, and which exceptions apply. It typically sets retention periods per camera or area, states whether recording is continuous or event-based, and describes how footage needed for an incident, investigation or legal hold is preserved beyond the normal period.",
    details: [
      "Retention is usually enforced by the recorder or VMS overwriting the oldest footage once the set period ends or the available storage runs out. If storage is undersized, the system can overwrite footage sooner than the policy requires, which is why storage capacity and retention should be monitored together.",
      "How much storage a retention period needs depends on the number of cameras, resolution, frame rate, video compression such as H.264 or H.265, scene activity, and whether cameras record continuously or only on motion or events. Required periods vary by industry, internal policy and local regulation, and privacy rules generally discourage keeping footage longer than needed.",
    ],
    howOrionAlertsHandles:
      "In OrionAlerts, recording and retention policies are set per camera, zone or site in the VMS module of Nebula OS, and footage is recorded on the on-site node rather than in the cloud. The health engine watches storage capacity and retention risk on every recorder and storage volume, so a full disk or a broken retention policy is flagged before footage is lost.",
    related: ["vms", "h265-video-compression", "camera-health-monitoring", "nvr-vs-dvr-vs-vms"],
    solution: "/solutions/vms",
    seoTitle: "What Is a CCTV Video Retention Policy?",
    seoDescription:
      "A video retention policy sets how long CCTV footage is kept before it is overwritten. Learn what it covers, what drives storage and how to enforce it.",
    faqs: [
      {
        question: "How long should CCTV footage be kept?",
        answer:
          "There is no single correct period. It depends on industry rules, internal security policy, insurance and investigation needs, and local privacy law, which generally expects footage not to be kept longer than necessary. Many organizations set different periods for different areas, and preserve specific clips separately when an incident or legal hold requires it.",
      },
      {
        question: "Why does footage disappear before the retention period ends?",
        answer:
          "Usually because storage ran out first. Recorders overwrite the oldest footage when disks fill, so higher bitrates, extra cameras, busier scenes or a failed disk can shorten real retention below the policy. Monitoring storage capacity and the footage actually retained, not just the configured setting, catches this before the evidence is needed.",
      },
      {
        question: "Can OrionAlerts flag a broken retention policy?",
        answer:
          "Yes. The Nebula OS health engine monitors storage capacity and retention risk on recorders and storage volumes, and flags a full disk or a broken retention policy early. Alerts reach the responsible team on the dashboard, mobile app or email, so the storage problem is fixed before footage needed for an investigation or audit is lost.",
      },
    ],
  },
  {
    slug: "h265-video-compression",
    h1: "What is H.265 (HEVC) video compression?",
    term: "H.265 (HEVC) video compression",
    shortDefinition:
      "A video compression standard that encodes surveillance video at lower bitrates than H.264, reducing bandwidth and storage needs.",
    definition:
      "H.265, also called HEVC (High Efficiency Video Coding), is a video compression standard published jointly by ITU-T and ISO/IEC in 2013 as the successor to H.264 (AVC). It is designed to deliver similar picture quality at a substantially lower bitrate, so IP cameras encoding in H.265 typically need less network bandwidth and recording storage for the same footage.",
    details: [
      "Video compression, or encoding, removes redundant information within each frame and between consecutive frames, and a decoder rebuilds the picture for viewing, recording or analysis. H.265 replaces the fixed macroblocks of H.264 with larger, more flexible coding blocks, which helps most on high-resolution video and on largely static scenes, a common case in surveillance.",
      "The savings come at the cost of more processing, so recorders, viewing clients and analytics servers all need to support H.265 decoding. ONVIF Profile T covers H.265 streaming. Many camera makers also offer proprietary smart encoding modes that lower bitrates further on quiet scenes; these are vendor-specific rather than part of the standard, so compatibility should be checked.",
    ],
    howOrionAlertsHandles:
      "Nebula OS is designed for hardware-accelerated video decoding and AI inference. Its AI runtime reads decoded frames from the same video engine that records the cameras, so analytics use the streams already being recorded rather than a parallel stream into a separate appliance. Support for each camera model, including its stream settings, is confirmed during solution design.",
    related: ["rtsp", "onvif", "video-retention-policy", "edge-ai-video-analytics"],
    solution: "/nebula-os",
    seoTitle: "What Is H.265 (HEVC) Video Compression?",
    seoDescription:
      "H.265 (HEVC) compresses CCTV video at lower bitrates than H.264, cutting bandwidth and storage. Learn how it works and what to check before switching.",
    faqs: [
      {
        question: "Is H.265 better than H.264 for CCTV?",
        answer:
          "For bandwidth and storage, usually yes: H.265 can keep similar quality at a lower bitrate, which matters for high-resolution cameras and long retention periods. The trade-off is heavier processing to encode and decode, so every recorder, viewing client and analytics server in the chain must support it. H.264 remains the most widely compatible choice.",
      },
      {
        question: "Does H.265 reduce video quality?",
        answer:
          "Not inherently. Like H.264, it is a lossy codec whose quality depends on the bitrate and encoder settings chosen. At the same bitrate H.265 generally preserves more detail, or it can match H.264 quality using less data. Setting the bitrate too low will still soften fine detail such as faces, text and distant objects.",
      },
      {
        question: "Can AI video analytics work on H.265 streams?",
        answer:
          "Yes, provided the analytics platform can decode H.265. Detection models run on decoded frames, so the codec mainly affects processing load rather than what the model sees, as long as the bitrate preserves enough detail. Decoding many H.265 streams at once is demanding, which is why analytics servers often rely on hardware-accelerated decoding.",
      },
    ],
  },
  {
    slug: "poe-power-over-ethernet",
    h1: "What is PoE (Power over Ethernet)?",
    term: "PoE (Power over Ethernet)",
    shortDefinition:
      "A technology that carries electrical power and network data over the same Ethernet cable, commonly used to power IP cameras.",
    definition:
      "PoE (Power over Ethernet) is a family of IEEE 802.3 standards for delivering electrical power and network data over the same twisted-pair Ethernet cable. In CCTV, one cable from a PoE switch or injector can power an IP camera and carry its video, removing the need for a separate power supply at each camera location.",
    details: [
      "The power source is called power sourcing equipment (PSE), usually a PoE switch, a recorder with built-in PoE ports or a midspan injector, and the camera is the powered device (PD). IEEE 802.3af (PoE, Type 1) supplies up to 15.4 W per port, 802.3at (PoE+, Type 2) up to 30 W, and 802.3bt (Types 3 and 4) up to 60 W or 90 W using all four wire pairs. Less power reaches the device, because some is lost in the cable.",
      "Fixed cameras usually fit within PoE or PoE+, while PTZ cameras, cameras with heaters or strong infrared illuminators, and multi-sensor units may need PoE+ or 802.3bt. When planning, check each camera's power class, the switch's total PoE budget across all ports and the standard Ethernet limit of 100 meters per cable run.",
    ],
    related: ["nvr-vs-dvr-vs-vms", "camera-health-monitoring", "onvif"],
    seoTitle: "What Is PoE (Power over Ethernet) for CCTV?",
    seoDescription:
      "PoE carries power and data over one Ethernet cable to IP cameras. Learn the IEEE 802.3af, at and bt standards, power budgets and cable limits for CCTV.",
    faqs: [
      {
        question: "What is the difference between PoE, PoE+ and PoE++?",
        answer:
          "They are successive IEEE standards with higher power. PoE (802.3af) supplies up to 15.4 W per port, PoE+ (802.3at) up to 30 W, and 802.3bt, often called PoE++ or 4PPoE, up to 60 W or 90 W over all four pairs. Higher-power switches can still power devices designed for the lower classes.",
      },
      {
        question: "How far can a PoE camera be from the switch?",
        answer:
          "Up to 100 meters of cable, the standard limit for an Ethernet run, which covers both data and power. Longer distances need a PoE extender, an intermediate switch, or a fiber link with power supplied locally. Cable quality also matters, because thin or non-standard cable loses more power and can cause cameras to restart under load.",
      },
      {
        question: "What happens to cameras if a PoE switch fails?",
        answer:
          "Every camera powered by that switch loses power and video at once, so a single failure can blind a whole area. Protecting switches with a UPS, keeping spare capacity in the power budget and continuously monitoring camera and network status help a team notice and restore the outage quickly, instead of discovering the gap later.",
      },
    ],
  },
  {
    slug: "video-wall",
    h1: "What is a video wall in video surveillance?",
    term: "Video wall",
    shortDefinition:
      "A large display, or a multi-camera layout in an operator console, that shows many live camera feeds at once for monitoring.",
    definition:
      "A video wall is a large display surface, usually built from multiple monitors or panels tiled together, that shows many live camera feeds, maps and alarm views at once in a control room. In video management software, the term also covers virtual walls: configurable multi-camera layouts that operators view and switch between on their own screens.",
    details: [
      "A physical video wall is driven by a video wall controller or by VMS client workstations that decode the streams and arrange them in layouts. Operators can send cameras, saved layouts or alarm footage to the wall, so everyone in the room shares the same picture of an incident.",
      "Watching many tiles for long periods is tiring, and on a busy wall events are easy to miss. Many control rooms therefore rotate cameras through the wall or bring a camera forward only when an alarm or analytics event fires, so attention goes where something is happening. Wall tiles often use a camera's lower-resolution substream to save bandwidth and decoding effort.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts provides live wall and playback across sites from one operator console, as part of the VMS module of Nebula OS. Operators watch live walls across sites and acknowledge, escalate and clear alarms from one shared queue, with role-based access deciding which sites and cameras each person sees. AI alerts also reach the dashboard, mobile app and email.",
    related: ["vms", "video-analytics", "rtsp"],
    solution: "/solutions/vms",
    seoTitle: "What Is a Video Wall in CCTV Monitoring?",
    seoDescription:
      "A video wall shows many live CCTV feeds at once in a control room or operator console. Learn how video walls work and how to keep operators effective.",
    faqs: [
      {
        question: "What is a video wall controller?",
        answer:
          "A video wall controller is hardware or software that takes video sources, such as camera streams or workstation outputs, and arranges them across the displays of a wall in defined layouts. In surveillance, the VMS often drives the wall directly through client workstations, so layouts and alarm pop-ups follow operator actions in the console.",
      },
      {
        question: "Do I need a physical video wall to monitor many cameras?",
        answer:
          "No. A physical wall helps a staffed control room share one view, but many teams monitor from multi-camera layouts on ordinary workstation screens, combined with alerts that bring the right camera forward. When analytics flag events, operators do not need every camera on screen all the time to know when something needs attention.",
      },
      {
        question: "Can OrionAlerts show cameras from several sites on one wall?",
        answer:
          "Yes. The OrionAlerts VMS module provides live wall and playback across sites from one operator console, so cameras from different locations appear side by side instead of through separate recorder logins. Role-based access controls which sites and cameras each operator, manager or auditor can see, and alarms are handled from one shared queue.",
      },
    ],
  },
  {
    slug: "line-crossing-detection",
    h1: "What is line crossing detection?",
    term: "Line crossing detection",
    shortDefinition:
      "Video analytics that raise an alert when a person or vehicle crosses a virtual line drawn across a camera view.",
    definition:
      "Line crossing detection, sometimes called a virtual tripwire, is video analytics that raises an alert when a person, vehicle or other tracked object crosses a line drawn across a camera's view. The rule can be directional, firing only for crossings one way, and is typically used at fences, gates, doorways and the edges of restricted areas.",
    details: [
      "The analytics detect objects in each frame and track them over time. A crossing is registered when a tracked object moves from one side of the line to the other, so the rule responds to movement across the boundary rather than to any change in the image, such as shadows or rain.",
      "Line crossing differs from area intrusion rules, which alert when an object is inside a region, and from loitering rules, which measure how long someone stays. Many deployments combine them: a line along the fence, a zone just inside it and schedules that arm the rules out of hours. Directional lines are also the basis of entrance people counting.",
    ],
    howOrionAlertsHandles:
      "Line crossing is among the AI detections OrionAlerts lists, alongside perimeter intrusion, restricted-area entry and loitering. Virtual lines are drawn at fences, gates or doorways, zone and schedule rules decide when a crossing raises an alert, and alerts reach the dashboard, mobile app and email. Detection runs on the on-site Nebula OS node, on the same streams that are recorded.",
    related: ["video-analytics", "people-counting", "edge-ai-video-analytics"],
    solution: "/solutions/ai-analytics",
    useCases: ["perimeter-intrusion-detection", "unauthorized-area-entry", "loitering-detection"],
    seoTitle: "What Is Line Crossing Detection in CCTV?",
    seoDescription:
      "Line crossing detection alerts when a person or vehicle crosses a virtual line in a camera view. Learn how virtual tripwires work and where they fit best.",
    faqs: [
      {
        question: "What is the difference between line crossing and intrusion detection?",
        answer:
          "Line crossing fires when a tracked object moves across a drawn line, so it marks the moment a boundary is breached. Area or zone intrusion fires when an object is inside a region, whichever way it got there. Perimeter systems often use both: a line along the fence and a zone covering the ground behind it.",
      },
      {
        question: "Why would a line crossing rule need a direction?",
        answer:
          "Because most boundaries matter only one way. A line across a gate can alert on people entering after hours while ignoring staff leaving, and a doorway line can count people coming in separately from people going out. Directional rules cut irrelevant alerts, provided the camera sees the full approach to the line.",
      },
      {
        question: "Does OrionAlerts support line crossing detection?",
        answer:
          "Yes. Line crossing is one of the security detections OrionAlerts lists, used for virtual lines at fences, gates and doorways. It runs on the on-site Nebula OS node with zone and schedule rules, and suitability is checked for each camera view during solution design, because placement and lighting affect how reliably crossings are seen.",
      },
    ],
  },
  {
    slug: "people-counting",
    h1: "What is people counting in video analytics?",
    term: "People counting",
    shortDefinition:
      "Video analytics that count people entering, leaving or present in an area to measure footfall and occupancy.",
    definition:
      "People counting is video analytics that counts people passing a line, such as an entrance, or present within a defined area. Directional counts of people coming in and going out give footfall and a running occupancy figure, which operations, retail and facilities teams use to understand traffic, plan staffing and keep spaces within their intended capacity.",
    details: [
      "Entrance counting usually relies on a camera mounted overhead or at a steep downward angle, so people are less likely to hide behind one another, and on a directional virtual line across the doorway. Area counting detects every person inside a zone and reports how many are present at a time.",
      "People counting is related to, but not the same as, crowd detection, which estimates how densely an area is filled and alerts on build-ups. Counting individuals works best at moderate densities; once people overlap heavily, density estimation becomes more dependable than trying to separate and count each person.",
    ],
    howOrionAlertsHandles:
      "Crowd and occupancy are among the detections OrionAlerts lists. Its people, vehicle and occupancy analytics track people and occupancy patterns to support crowd awareness and site utilization decisions, running on the on-site Nebula OS node. Specific counting requirements, such as in-and-out counts at a particular entrance, are scoped per camera view during solution design.",
    related: ["video-analytics", "line-crossing-detection", "edge-ai-video-analytics"],
    solution: "/solutions/ai-analytics",
    useCases: ["crowd-detection"],
    seoTitle: "What Is People Counting? Footfall Analytics",
    seoDescription:
      "People counting uses video analytics to count people entering, leaving or inside an area for footfall and occupancy. Learn how it works and what matters.",
    faqs: [
      {
        question: "Can existing CCTV cameras be used for people counting?",
        answer:
          "Sometimes. Cameras that already look down over an entrance or area can often be used, but many security cameras are mounted for wide, angled views where people overlap and doorways are seen from the side. For entrance counts, a camera placed above the doorway and looking down across the flow of people usually performs better.",
      },
      {
        question: "What is the difference between footfall and occupancy?",
        answer:
          "Footfall is the number of people who enter a space over a period, such as visitors per day. Occupancy is the number of people inside at a given moment, usually calculated as entries minus exits or counted directly in an area. Footfall shows demand over time; occupancy shows how full a space is right now.",
      },
      {
        question: "Does people counting identify individuals?",
        answer:
          "No. People counting detects people and follows their movement to count them; it does not need to recognize who anyone is. Results are usually reported as totals per entrance, zone and time period. The underlying video should still be handled under the organization's privacy and data protection policies, as with any CCTV footage.",
      },
    ],
  },
  {
    slug: "sla-service-level-agreement",
    h1: "What is an SLA (service level agreement) for CCTV?",
    term: "SLA (service level agreement)",
    shortDefinition:
      "The measurable service commitments, such as response and resolution times, that a maintenance vendor agrees to meet.",
    definition:
      "An SLA (service level agreement) sets the measurable service levels a provider commits to, such as how quickly it responds to a fault, how fast it restores service and how much uptime the system should achieve. In CCTV maintenance, SLAs usually sit inside an AMC or service contract and often define penalties or service credits when targets are missed.",
    details: [
      "CCTV maintenance SLAs usually distinguish response time, the time until the vendor acknowledges a fault or reaches the site, from resolution time, the time until the fault is fixed. Targets often vary by priority, so a failed camera at a critical entrance is handled faster than a minor fault, and by site location or hours of cover.",
      "An SLA is only as useful as the evidence behind it. Measuring compliance needs reliable timestamps for when a fault started, when it was reported, when the vendor responded and when it was closed. Automated health alerts and ticket records give both parties a shared, objective record instead of disputed recollections.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts AMC Management tracks service requests from intake through vendor dispatch to closure, measures vendor response and completion against each SLA, flags at-risk tickets early and documents breaches. Because camera health monitoring runs on the same Nebula OS platform, a failing camera can raise a service request against the vendor and contract that cover it.",
    related: ["amc-annual-maintenance-contract", "preventive-maintenance", "camera-uptime", "camera-health-monitoring"],
    solution: "/solutions/amc-management",
    seoTitle: "What Is an SLA for CCTV Maintenance?",
    seoDescription:
      "An SLA sets the response, resolution and uptime commitments a CCTV maintenance vendor must meet. Learn what it covers and how compliance is measured.",
    faqs: [
      {
        question: "What is the difference between an SLA and an AMC?",
        answer:
          "An AMC is the maintenance contract itself: which equipment is covered, for how long and on what terms. An SLA defines the service levels within it, such as response times, resolution times and uptime targets. An AMC can exist without a meaningful SLA, but then there is little to hold the vendor to when repairs are slow.",
      },
      {
        question: "What is the difference between response time and resolution time?",
        answer:
          "Response time measures how quickly the vendor acknowledges a fault or reaches the site after it is reported. Resolution time measures how long it takes until the fault is actually fixed and the device is working again. Both matter, because a fast acknowledgment followed by a slow repair still leaves the camera down.",
      },
      {
        question: "How can SLA compliance be proven?",
        answer:
          "With timestamped records for each fault: when the device failed, when the ticket was raised, when the vendor responded and when service was restored. Automatic health alerts make the start time objective rather than dependent on someone noticing. OrionAlerts measures vendor response and completion against each SLA and keeps a service history for every asset.",
      },
    ],
  },
  {
    slug: "preventive-maintenance",
    h1: "What is preventive maintenance for CCTV systems?",
    term: "Preventive maintenance (CCTV)",
    shortDefinition:
      "Scheduled inspection and servicing of cameras, recorders and network equipment to prevent failures before they happen.",
    definition:
      "Preventive maintenance is scheduled inspection and servicing carried out to keep equipment working and catch problems before they cause a failure. For CCTV, it typically covers cleaning lenses and housings, checking camera views and focus, verifying recording and storage, applying firmware updates, and inspecting cabling, power and network equipment, on a planned calendar rather than after a breakdown.",
    details: [
      "Preventive maintenance contrasts with corrective, or breakdown, maintenance, which happens after something has failed. Both are usually part of an AMC: preventive visits on a planned schedule, and breakdown calls when a fault is reported.",
      "Visits are most useful when they produce records of what was checked on each device, what was found and what was fixed. Continuous health monitoring complements scheduled visits: it catches failures between visits and points technicians to the devices that need attention, while visits handle physical checks software cannot, such as loose mounts, corroded connectors or damaged cables.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts AMC Management plans preventive maintenance across sites and asset classes and sends reminders before visits fall due. Every asset keeps a service history of visits, parts, outcomes and vendor notes alongside its AMC and warranty coverage, and because health monitoring runs on the same platform, failures found between visits can raise service requests against the right vendor and contract.",
    related: ["amc-annual-maintenance-contract", "sla-service-level-agreement", "camera-health-monitoring"],
    solution: "/solutions/amc-management",
    seoTitle: "What Is Preventive Maintenance for CCTV?",
    seoDescription:
      "Preventive maintenance keeps CCTV cameras, recorders and networks working through scheduled checks. Learn what a PM visit covers and how to plan it.",
    faqs: [
      {
        question: "What does a CCTV preventive maintenance visit include?",
        answer:
          "Typically cleaning camera lenses and housings, checking that each view, focus and night image still meet requirements, confirming every camera is recording, checking recorder storage and disk health, applying approved firmware updates, and inspecting cables, connectors, mounts and power supplies. Findings should be recorded per device so trends and repeat faults are visible.",
      },
      {
        question: "How often should CCTV preventive maintenance be done?",
        answer:
          "It depends on the environment and the contract. Dusty, coastal, industrial or outdoor sites usually need more frequent visits than clean indoor spaces, and critical cameras may be checked more often than the rest. Many AMCs fix a visit schedule in advance, and health monitoring between visits catches failures the calendar would miss.",
      },
      {
        question: "Does health monitoring replace preventive maintenance?",
        answer:
          "No, they cover different things. Health monitoring continuously checks whether devices are online, streaming and recording, and flags failures as they happen. Preventive visits handle physical work software cannot do, such as tightening mounts, replacing worn cables or cleaning housings. Together they reduce both silent failures and avoidable breakdowns across a camera estate.",
      },
    ],
  },
  {
    slug: "camera-uptime",
    h1: "What is camera uptime in CCTV?",
    term: "Camera uptime",
    shortDefinition:
      "The share of time a camera is online, streaming and recording usable video over a given period.",
    definition:
      "Camera uptime is the share of time a surveillance camera is working over a given period, usually expressed as a percentage. A strict measure counts a camera as up only when it is online, streaming and recording usable video, not merely answering on the network. Uptime is tracked per camera, site and vendor to measure reliability and service levels.",
    details: [
      "Uptime and availability are often used interchangeably, but contracts may define them differently, for example by excluding planned maintenance windows or faults outside the vendor's scope. An SLA should state exactly what counts as downtime, how it is measured and over which period.",
      "Measuring uptime by network ping alone overstates it, because a camera can respond while its stream has stopped, its lens is blocked or the recorder is no longer writing footage. Dependable uptime figures come from monitoring stream and recording status continuously and logging when each outage started and ended.",
    ],
    howOrionAlertsHandles:
      "OrionAlerts health monitoring tracks device, stream and recording status for every camera continuously, so it can flag a camera that responds on the network but has stopped recording. Uptime and availability are reported per site and device across cameras, NVRs and network nodes, and AMC Management, on the same platform, tracks vendor response and completion against each SLA.",
    related: ["camera-health-monitoring", "sla-service-level-agreement", "camera-tampering-detection"],
    solution: "/solutions/health-monitoring",
    useCases: ["no-motion-black-screen-alert"],
    seoTitle: "What Is Camera Uptime in CCTV?",
    seoDescription:
      "Camera uptime is the share of time a CCTV camera is online and recording usable video. Learn how to measure it properly and why ping checks overstate it.",
    faqs: [
      {
        question: "How is camera uptime calculated?",
        answer:
          "Divide the time a camera was working by the total time in the period, then express the result as a percentage. The figure depends on what counts as working, so the definition matters: online only, or online, streaming and recording. Agreements should also say whether planned maintenance windows are excluded from the total.",
      },
      {
        question: "Why does camera uptime matter?",
        answer:
          "Because footage that was never recorded cannot be recovered. Low uptime on a camera means gaps in evidence, often discovered only when an incident is investigated. Tracking uptime per camera, site and vendor shows where repairs are needed, which vendors meet their service levels and which devices fail repeatedly and should be replaced.",
      },
    ],
  },
];

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}

/** Hub copy for /glossary. */
export const glossaryHub = {
  title: "Video surveillance and AI video analytics glossary",
  seoTitle: "Video Surveillance & AI Analytics Glossary",
  seoDescription:
    "Plain-English definitions of CCTV, VMS and AI video analytics terms, from ONVIF, RTSP, H.265 and PoE to line crossing, camera uptime, SLAs and AMC.",
  answer:
    "This glossary defines the terms buyers meet when evaluating CCTV, video management and AI video analytics: recording and connectivity (VMS, VSaaS, NVR and DVR, ONVIF, RTSP, H.265, PoE, video walls, retention), analytics (edge AI, ANPR, line crossing, people counting, camera tampering, PPE detection) and operations (camera health, uptime, AMC, SLAs, preventive maintenance). Each entry starts with a neutral definition, then explains, where relevant, how OrionAlerts approaches it.",
};
