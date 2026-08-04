import { getIndustry, industries, type Industry } from "@/lib/site";

export type IndustryUseCase = {
  title: string;
  description: string;
  video?: string;
};

export type IndustryStep = {
  label: string;
  description: string;
};

export type IndustryPageData = Industry & {
  headline: string;
  useCases: IndustryUseCase[];
  processTitle: string;
  processFlow: string;
  processNarrative: string[];
  stepsTitle: string;
  steps: IndustryStep[];
  solutionBlurbs: Record<string, string>;
};

type Extras = {
  headline: string;
  summary: string;
  useCases: IndustryUseCase[];
  processTitle: string;
  processFlow: string;
  processNarrative: string[];
  stepsTitle: string;
  steps: IndustryStep[];
  solutionBlurbs: Record<string, string>;
};

/** Content sourced from Updated Industries.docx — “How Orion Alerts Helps” → useCases */
const extrasBySlug: Record<string, Extras> = {
  manufacturing: {
    headline: `Smarter Manufacturing Through AI-Powered Operational Intelligence`,
    summary: `Modern manufacturing demands high productivity, worker safety, and reliable operations. Orion Alerts transforms existing CCTV into an AI-powered platform that delivers real-time monitoring, proactive alerts, and actionable insights to reduce downtime, improve compliance, and optimize production.`,
    useCases: [
      {
        title: `AI Workplace Safety`,
        description: `Detects PPE violations, restricted area access, and unsafe activities in real time.`,
        video: "/Videos/industries/manufacturing/usecases/ppe-safety.mp4",
      },
      {
        title: `Production Monitoring`,
        description: `Identifies bottlenecks, machine idle time, workflow deviations, and process anomalies.`,
        video: "/Videos/industries/manufacturing/usecases/production-process.mp4",
      },
      {
        title: `Infrastructure Health`,
        description: `Monitors cameras, NVRs, servers, storage, and network devices to ensure uninterrupted operations.`,
        video: "/Videos/industries/manufacturing/usecases/equipment-health.mp4",
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Instantly notifies teams of critical events and enables AI-powered search to find incidents within seconds.`,
        video: "/Videos/industries/manufacturing/usecases/smart-incident.mp4",
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor production areas.`,
      `AI detects safety and operational issues in real time.`,
      `Alerts are sent instantly to the right teams.`,
      `Events are logged for investigation and compliance.`,
      `Dashboards provide insights to improve performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Observe`,
        description: `Connect existing cameras for centralized visibility.`,
      },
      {
        label: `Automate`,
        description: `Enable AI to detect critical events automatically.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve safety and productivity.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, intrusions, fire/smoke, and production anomalies.`,
      vms: `Centralized live monitoring, playback, and multi-site management.`,
      "health-monitoring": `Proactively monitor surveillance infrastructure and prevent system failures.`,
    },
  },
  automotive: {
    headline: `Precision Manufacturing with AI-Powered Operational Visibility`,
    summary: `Automotive manufacturing requires synchronized production, consistent quality, and uninterrupted operations. Orion Alerts converts existing CCTV into an AI-powered monitoring platform that enhances safety, streamlines production, and improves operational visibility across assembly plants.`,
    useCases: [
      {
        title: `Production Monitoring`,
        description: `Detects bottlenecks, idle stations, process deviations, and abnormal stoppages across assembly lines.`,
      },
      {
        title: `AI Workplace Safety`,
        description: `Identifies PPE violations, restricted area access, and unsafe activities in real time.`,
      },
      {
        title: `Material & Asset Visibility`,
        description: `Tracks component movement, forklifts, finished goods, and critical assets across production and warehouse areas.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Sends instant alerts for operational incidents and enables rapid AI-powered video search for investigations.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor production, warehouses, and loading areas.`,
      `AI detects safety, process, and operational issues in real time.`,
      `Instant alerts are delivered to supervisors.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights for continuous improvement.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing CCTV into a centralized platform.`,
      },
      {
        label: `Automate`,
        description: `Enable AI-driven monitoring and real-time detection.`,
      },
      {
        label: `Optimize`,
        description: `Use analytics to improve productivity, quality, and compliance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, assembly line anomalies, vehicle movement, restricted access, and safety incidents.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  "metals-mining": {
    headline: `AI-Powered Visibility for Safer Mining Operations`,
    summary: `Mining operations demand continuous monitoring of worker safety, heavy equipment, and material handling. Orion Alerts enhances operational visibility with AI-driven monitoring, real-time alerts, and centralized intelligence across mines and processing facilities.`,
    useCases: [
      {
        title: `AI Safety Monitoring`,
        description: `Detects PPE violations, restricted area access, and hazardous activities in real time.`,
      },
      {
        title: `Equipment & Vehicle Monitoring`,
        description: `Tracks heavy equipment movement, unsafe driving, and congestion across mining sites.`,
      },
      {
        title: `Material & Process Monitoring`,
        description: `Identifies conveyor blockages, equipment stoppages, material accumulation, and workflow disruptions.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Instantly notifies teams of critical incidents and enables rapid AI-powered event search.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor mines, processing plants, and operational zones.`,
      `AI detects safety, equipment, and process anomalies in real time.`,
      `Instant alerts are sent to supervisors.`,
      `Events are logged for audits and investigations.`,
      `Dashboards provide insights to improve safety and productivity.`,
    ],
    stepsTitle: `Three Steps to Mining-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing CCTV into a centralized AI platform.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for safety, equipment, and material handling.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve efficiency and compliance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, restricted access, vehicle movement, conveyor issues, fire/smoke, and operational risks.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  cement: {
    headline: `AI-Powered Intelligence for Safer Plant Operations`,
    summary: `Cement plants require continuous monitoring of production, material handling, and worker safety. Orion Alerts delivers AI-powered monitoring, real-time alerts, and centralized visibility to improve operational efficiency and minimize risks.`,
    useCases: [
      {
        title: `AI Safety Monitoring`,
        description: `Detects PPE violations, restricted area access, and unsafe activities in real time.`,
      },
      {
        title: `Conveyor & Material Monitoring`,
        description: `Identifies conveyor blockages, material spillage, equipment stoppages, and process disruptions.`,
      },
      {
        title: `Vehicle & Loading Monitoring`,
        description: `Tracks dumpers, loaders, forklifts, and loading operations to improve logistics and safety.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Sends instant alerts for critical incidents and enables rapid AI-powered event search.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor production, conveyors, loading bays, and plant operations.`,
      `AI detects safety, process, and operational anomalies in real time.`,
      `Instant alerts are sent to supervisors.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve plant performance.`,
    ],
    stepsTitle: `Three Steps to Plant-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing CCTV into a centralized platform.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for safety, logistics, and production.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve efficiency and compliance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, restricted access, conveyor issues, vehicle movement, fire/smoke, and operational risks.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  "oil-gas": {
    headline: `AI-Powered Intelligence for High-Risk Industrial Operations`,
    summary: `Oil, gas, and petrochemical facilities require continuous monitoring of hazardous areas, critical assets, and site security. Orion Alerts provides AI-powered monitoring, real-time alerts, and centralized visibility to enhance safety, security, and operational reliability.`,
    useCases: [
      {
        title: `AI Safety Monitoring`,
        description: `Detects PPE violations, restricted area access, and unsafe activities in hazardous zones.`,
      },
      {
        title: `Perimeter & Asset Protection`,
        description: `Monitors pipelines, storage tanks, terminals, substations, and facility perimeters for security threats.`,
      },
      {
        title: `Vehicle & Loading Monitoring`,
        description: `Tracks tanker movement, loading bays, forklifts, and service vehicles to improve safety and traffic flow.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts for safety, security, fire/smoke, and operational incidents with AI-powered event search.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor critical operational and security areas.`,
      `AI detects safety, security, and operational anomalies in real time.`,
      `Instant alerts are sent to operators.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve safety and operations.`,
    ],
    stepsTitle: `Three Steps to Industry-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing CCTV into a centralized platform.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for safety, security, and critical assets.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve response and compliance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, perimeter breaches, fire/smoke, unauthorized access, unsafe vehicle movement, and suspicious activities.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  schools: {
    headline: `Smarter Campus Security with AI-Powered Video Intelligence`,
    summary: `From classrooms and playgrounds to school buses and entry gates, Orion Alerts uses AI to monitor critical campus activities, detect potential risks, and provide real-time alerts that strengthen safety and operational efficiency.`,
    useCases: [
      {
        title: `Campus Security`,
        description: `Detects unauthorized access, perimeter breaches, and suspicious activities.`,
      },
      {
        title: `Student Safety`,
        description: `Identifies fights, overcrowding, loitering, falls, and unusual behavior in real time.`,
      },
      {
        title: `Bus & Traffic Monitoring`,
        description: `Tracks school buses, visitor vehicles, and parking areas for safer traffic management.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for rapid incident investigations.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Improve`,
    processNarrative: [
      `Existing cameras monitor classrooms, corridors, playgrounds, buses, and campus areas.`,
      `AI detects safety, security, and operational incidents in real time.`,
      `Instant alerts are sent to administrators and security teams.`,
      `Events are recorded for investigations and compliance.`,
      `Dashboards provide insights to improve campus safety.`,
    ],
    stepsTitle: `Three Steps to School-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize all existing campus cameras.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for student safety and campus security.`,
      },
      {
        label: `Protect`,
        description: `Use real-time alerts and dashboards for faster response.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect unauthorized access, fights, crowding, loitering, falls, abandoned objects, and suspicious activities.`,
      vms: `Centralized live monitoring, playback, multi-campus visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  pharma: {
    headline: `Protecting Product Quality with Intelligent Video Analytics`,
    summary: `Maintaining compliance and product integrity requires continuous visibility across every stage of pharmaceutical manufacturing. Orion Alerts delivers AI-powered monitoring, proactive alerts, and centralized oversight to support safer, more efficient operations.`,
    useCases: [
      {
        title: `GMP & Cleanroom Compliance`,
        description: `Detects PPE violations, improper gowning, restricted area access, and unauthorized personnel movement.`,
      },
      {
        title: `Production & Packaging Monitoring`,
        description: `Identifies workflow disruptions, bottlenecks, process deviations, and unauthorized interventions.`,
      },
      {
        title: `Warehouse & Cold Storage Security`,
        description: `Monitors inventory areas, material movement, and controlled access in real time.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for audits, investigations, and compliance reviews.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Analyze → Detect → Alert → Document → Improve`,
    processNarrative: [
      `Existing cameras monitor production, laboratories, warehouses, and packaging areas.`,
      `AI detects compliance, safety, and operational issues in real time.`,
      `Instant alerts are sent to production and quality teams.`,
      `Events are securely recorded for audits and investigations.`,
      `Dashboards provide insights to improve compliance and operations.`,
    ],
    stepsTitle: `Three Steps to Compliance-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across all facilities.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for compliance and production workflows.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve quality, compliance, and efficiency.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, cleanroom access breaches, restricted area intrusions, unattended objects, and operational anomalies.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  "food-fmcg": {
    headline: `Ensuring Food Safety Through Intelligent Video Monitoring`,
    summary: `Food and FMCG manufacturers must maintain strict hygiene, product quality, and production consistency. Orion Alerts uses AI-powered video intelligence to strengthen compliance, improve operational visibility, and support uninterrupted manufacturing.`,
    useCases: [
      {
        title: `Hygiene & PPE Compliance`,
        description: `Detects PPE violations, hygiene lapses, restricted area access, and unauthorized movement.`,
      },
      {
        title: `Production Monitoring`,
        description: `Identifies bottlenecks, equipment idle time, production stoppages, and workflow deviations.`,
      },
      {
        title: `Warehouse & Dispatch Monitoring`,
        description: `Tracks material movement, forklifts, loading operations, and inventory security.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for faster investigations and audits.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Act → Improve`,
    processNarrative: [
      `Existing cameras monitor production, packaging, warehouses, and dispatch areas.`,
      `AI detects hygiene, safety, and operational issues in real time.`,
      `Instant alerts are sent to production and quality teams.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve safety and productivity.`,
    ],
    stepsTitle: `Three Steps to Food Industry-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize existing surveillance across all facilities.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for hygiene, safety, and production.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve compliance and operational performance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE and hygiene violations, restricted access, production stoppages, unattended objects, fire/smoke, and operational risks.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  logistics: {
    headline: `Intelligent Visibility for Faster & Secure Logistics Operations`,
    summary: `Warehouses and distribution centers require continuous visibility to ensure safe operations, inventory security, and on-time deliveries. Orion Alerts uses AI-powered video intelligence to optimize warehouse workflows, strengthen security, and improve operational efficiency.`,
    useCases: [
      {
        title: `Warehouse Safety`,
        description: `Detects PPE violations, restricted area access, and unsafe activities in real time.`,
      },
      {
        title: `Loading & Vehicle Monitoring`,
        description: `Monitors truck movement, loading docks, forklifts, congestion, and dispatch operations.`,
      },
      {
        title: `Inventory Protection`,
        description: `Tracks material movement, high-value storage areas, abandoned objects, and suspicious activities.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for shipment verification and incident investigations.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor warehouses, loading docks, storage areas, and dispatch zones.`,
      `AI detects safety, security, and operational events in real time.`,
      `Instant alerts are sent to warehouse and security teams.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve warehouse performance.`,
    ],
    stepsTitle: `Three Steps to Warehouse-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across warehouses and logistics facilities.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for safety, inventory, and vehicle operations.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve efficiency and security.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, unauthorized access, loading dock congestion, forklift movement, abandoned objects, fire/smoke, and suspicious activities.`,
      "asset-tracking": `Automate vehicle identification, monitor truck entry/exit, and streamline gate and dispatch operations.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
    },
  },
  "commercial-infrastructure": {
    headline: `Intelligent Monitoring for Modern Infrastructure`,
    summary: `Airports, commercial buildings, business parks, and public facilities require continuous visibility to manage security, visitor movement, and daily operations. Orion Alerts delivers AI-powered intelligence that helps improve safety, operational efficiency, and facility performance.`,
    useCases: [
      {
        title: `Access & Perimeter Security`,
        description: `Detects unauthorized access, loitering, tailgating, and perimeter breaches.`,
      },
      {
        title: `Crowd & Occupancy Monitoring`,
        description: `Tracks crowd density, visitor movement, queues, and common areas to improve safety and flow.`,
      },
      {
        title: `Parking & Traffic Management`,
        description: `Monitors vehicle movement, parking violations, congestion, and entry/exit operations.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for faster incident investigations.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Observe → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor entrances, public areas, parking, and restricted zones.`,
      `AI detects security, safety, occupancy, and traffic events in real time.`,
      `Instant alerts are sent to security and facility teams.`,
      `Events are recorded for investigations and compliance.`,
      `Dashboards provide insights to improve facility performance.`,
    ],
    stepsTitle: `Three Steps to Smart Facility Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across all facilities.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for security, occupancy, and traffic.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve safety and operations.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect unauthorized access, crowding, loitering, abandoned objects, fire/smoke, and suspicious activities.`,
      "asset-tracking": `Automate vehicle entry/exit, parking monitoring, and traffic flow management.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
    },
  },
  utilities: {
    headline: `Securing Distributed Infrastructure with AI`,
    summary: `Critical infrastructure demands continuous monitoring to protect assets, maintain compliance, and minimize operational disruptions. Orion Alerts provides AI-driven insights and automated monitoring to improve security and operational continuity across remote facilities.`,
    useCases: [
      {
        title: `Perimeter & Asset Security`,
        description: `Detects unauthorized access, perimeter breaches, vandalism, and suspicious activities across critical sites.`,
      },
      {
        title: `Remote Site Monitoring`,
        description: `Monitors substations, treatment plants, renewable energy sites, and unmanned facilities from a central dashboard.`,
      },
      {
        title: `Worker Safety & Compliance`,
        description: `Detects PPE violations, restricted area access, and unsafe work practices in real time.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for faster investigations and incident response.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor utility sites and critical infrastructure.`,
      `AI detects safety, security, and operational events in real time.`,
      `Instant alerts are sent to operators.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve infrastructure performance.`,
    ],
    stepsTitle: `Three Steps to Smart Infrastructure Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across all utility sites.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for security, safety, and remote assets.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve reliability and response.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect perimeter breaches, PPE violations, fire/smoke, restricted area access, and suspicious activities.`,
      "health-monitoring": `Continuously monitor cameras, NVRs, servers, storage, and network health to ensure uninterrupted surveillance.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
    },
  },
  "pulp-paper": {
    headline: `AI-Powered Intelligence for Continuous Manufacturing`,
    summary: `Pulp, paper, and packaging plants rely on uninterrupted production, safe operations, and efficient material handling. Orion Alerts delivers AI-powered monitoring to improve productivity, enhance worker safety, and strengthen operational control across manufacturing facilities.`,
    useCases: [
      {
        title: `Production Monitoring`,
        description: `Detects conveyor blockages, machine stoppages, bottlenecks, and workflow disruptions.`,
      },
      {
        title: `Safety Monitoring`,
        description: `Identifies PPE violations, restricted area access, hazardous machine interactions, and unsafe activities.`,
      },
      {
        title: `Warehouse & Dispatch Monitoring`,
        description: `Tracks paper rolls, pallets, forklifts, finished goods, and loading operations.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for quality reviews and incident investigations.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor production, packaging, warehouses, and dispatch areas.`,
      `AI detects safety, production, and operational events in real time.`,
      `Instant alerts are sent to supervisors.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve plant performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across manufacturing operations.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for production, safety, and material handling.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve throughput and reduce downtime.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, conveyor issues, restricted area access, forklift movement, fire/smoke, and production anomalies.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  textile: {
    headline: `Enhancing Productivity Through Intelligent Video Analytics`,
    summary: `Textile and garment manufacturers rely on synchronized production and efficient material flow to meet customer demands. Orion Alerts provides AI-driven monitoring that helps identify operational bottlenecks, improve safety, and optimize factory performance.`,
    useCases: [
      {
        title: `Production Monitoring`,
        description: `Detects bottlenecks, idle workstations, workflow interruptions, and material accumulation.`,
      },
      {
        title: `Safety & Compliance`,
        description: `Identifies PPE violations, restricted area access, unsafe machine interactions, and hazardous activities.`,
      },
      {
        title: `Material & Warehouse Monitoring`,
        description: `Tracks fabric rolls, raw materials, finished goods, forklifts, and dispatch operations.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for production and safety incidents.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Improve`,
    processNarrative: [
      `Existing cameras monitor production floors, warehouses, and dispatch areas.`,
      `AI detects production, safety, and operational issues in real time.`,
      `Instant alerts are sent to supervisors.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve factory performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across production and logistics.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for workflows, safety, and inventory.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve productivity and compliance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, machine safety risks, restricted area access, fire/smoke, production bottlenecks, and operational anomalies.`,
      vms: `Centralized live monitoring, playback, multi-site visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
  "polymers-plastics": {
    headline: `AI-Powered Visibility for Polymer & Plastics Manufacturing`,
    summary: `Polymer and plastics plants need continuous monitoring of production lines, worker safety, and material flow. Orion Alerts turns existing CCTV into an AI-powered platform for real-time alerts, centralized visibility, and faster operational decisions.`,
    useCases: [
      {
        title: `Production Monitoring`,
        description: `Detects bottlenecks, idle machines, material accumulation, and workflow disruptions across extrusion and molding lines.`,
      },
      {
        title: `Safety Monitoring`,
        description: `Identifies PPE violations, restricted area access, and unsafe activities in real time.`,
      },
      {
        title: `Warehouse & Dispatch Monitoring`,
        description: `Tracks raw materials, finished goods, forklifts, and loading operations.`,
      },
      {
        title: `Instant Alerts & Investigation`,
        description: `Delivers instant alerts and enables AI-powered search for production and safety incidents.`,
      },
    ],
    processTitle: `How It Works`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing cameras monitor production, warehousing, and dispatch areas.`,
      `AI detects safety, production, and operational events in real time.`,
      `Instant alerts are sent to supervisors.`,
      `Events are recorded for audits and investigations.`,
      `Dashboards provide insights to improve plant performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Centralize surveillance across manufacturing operations.`,
      },
      {
        label: `Automate`,
        description: `Enable AI monitoring for production, safety, and material handling.`,
      },
      {
        label: `Optimize`,
        description: `Use dashboards and analytics to improve throughput and reduce downtime.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, restricted access, production anomalies, fire/smoke, and operational risks.`,
      vms: `Centralized live monitoring, playback, multi-plant visibility, and incident management.`,
      "health-monitoring": `Monitor cameras, NVRs, servers, storage, and network health with proactive alerts.`,
    },
  },
};

export function getIndustryPage(slug: string): IndustryPageData | undefined {
  const industry = getIndustry(slug);
  if (!industry) return undefined;
  const extras = extrasBySlug[slug];
  if (!extras) return undefined;
  return {
    ...industry,
    ...extras,
    relatedSolutions: Object.keys(extras.solutionBlurbs),
  };
}

export function getRelatedIndustries(slug: string, limit = 4) {
  const index = industries.findIndex((i) => i.slug === slug);
  if (index < 0) return industries.slice(0, limit);
  const related: typeof industries = [];
  for (let offset = 1; related.length < limit && offset < industries.length; offset += 1) {
    related.push(industries[(index + offset) % industries.length]);
  }
  return related;
}
