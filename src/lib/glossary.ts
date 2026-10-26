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
    related: ["nvr-vs-dvr-vs-vms", "vsaas", "onvif", "rtsp"],
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
    related: ["vms", "onvif", "rtsp", "camera-health-monitoring"],
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
    related: ["edge-ai-video-analytics", "ppe-detection", "camera-tampering-detection", "anpr"],
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
    related: ["camera-tampering-detection", "amc-annual-maintenance-contract", "nvr-vs-dvr-vs-vms"],
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
    related: ["rtsp", "vms", "nvr-vs-dvr-vs-vms"],
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
    related: ["onvif", "vms", "video-analytics"],
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
    related: ["camera-health-monitoring", "vms"],
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
];

export function getGlossaryTerm(slug: string) {
  return glossaryTerms.find((term) => term.slug === slug);
}

/** Hub copy for /glossary. */
export const glossaryHub = {
  title: "Video surveillance and AI video analytics glossary",
  seoTitle: "Video Surveillance & AI Analytics Glossary",
  seoDescription:
    "Plain-English definitions of VMS, VSaaS, NVR vs DVR, ONVIF, RTSP, edge AI, ANPR, camera tampering, PPE detection, camera health monitoring and AMC.",
  answer:
    "This glossary defines the terms buyers meet when evaluating CCTV, video management and AI video analytics: VMS, VSaaS, NVR and DVR, ONVIF, RTSP, edge AI, ANPR, camera tampering, PPE detection, camera health monitoring and AMC. Each entry starts with a neutral definition, then explains how OrionAlerts approaches it.",
};
