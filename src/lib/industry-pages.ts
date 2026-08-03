import { getIndustry, industries, type Industry } from "@/lib/site";

export type IndustryUseCase = {
  title: string;
  description: string;
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

const extrasBySlug: Record<string, Extras> = {
  "manufacturing": {
    headline: `Smarter Manufacturing Through AI-Powered Operational Intelligence`,
    summary: `Modern manufacturing plants operate in a highly competitive environment where production efficiency, worker safety, equipment reliability, and quality control directly impact profitability. However, manual monitoring, fragmented surveillance, and delayed issue detection often lead to production losses, safety incidents, and operational inefficiencies. Orion Alerts transforms existing camera infrastructure into an intelligent operational platform that delivers real-time visibility, proactive alerts, and actionable insights across the manufacturing lifecycle.`,
    useCases: [
      {
        title: `AI-Powered PPE & Workplace Safety`,
        description: `Automatically detects missing helmets, safety vests, gloves, masks, and other PPE violations while monitoring restricted zones and hazardous production areas to improve workplace compliance.`,
      },
      {
        title: `Production Process Monitoring`,
        description: `Continuously monitors critical manufacturing processes to identify production bottlenecks, material accumulation, machine idle time, and workflow deviations before they impact throughput.`,
      },
      {
        title: `Intelligent Equipment & Infrastructure Health`,
        description: `Monitor the health of cameras, NVRs, servers, storage devices, and network infrastructure while ensuring uninterrupted surveillance across production facilities.`,
      },
      {
        title: `Smart Incident Search & Real-Time Alerts`,
        description: `Receive instant notifications for safety violations, equipment abnormalities, unauthorized access, or operational incidents. AI-powered Smart Search enables operators to locate critical events within seconds instead of reviewing hours of footage.`,
      },
    ],
    processTitle: `AI-Powered Manufacturing Intelligence`,
    processFlow: `Monitor → Detect → Alert → Respond → Analyze → Optimize`,
    processNarrative: [
      `Existing CCTV Cameras continuously monitor production lines, warehouses, utilities, and critical manufacturing zones.`,
      `Orion AI analyzes video streams in real time to detect safety violations, operational anomalies, equipment issues, and unauthorized activities.`,
      `Intelligent alerts are instantly delivered to supervisors through dashboards, mobile devices, email, or integrated systems.`,
      `Teams respond immediately while every event is automatically logged for investigation and compliance.`,
      `AI dashboards provide operational analytics to improve productivity, safety, and manufacturing performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Observe`,
        description: `Connect existing surveillance infrastructure to create centralized visibility across the entire manufacturing facility.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered analytics that automatically detect critical events without continuous manual monitoring.`,
      },
      {
        label: `Optimize`,
        description: `Use operational dashboards, reports, and business intelligence to continuously improve productivity, compliance, and manufacturing efficiency.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Detect PPE violations, unauthorized access, machine area intrusion, fire and smoke indicators, production anomalies, and safety incidents in real time, enabling faster corrective action and minimizing operational risks.`,
      "vms": `Centralize live monitoring, playback, multi-site management, user access, and event investigations through a single platform, eliminating fragmented surveillance across production facilities.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage, and network devices. Receive proactive alerts before surveillance failures create security or operational blind spots.`,
      "smart-search": `Quickly locate production incidents, safety events, equipment abnormalities, or operational exceptions using AI-powered natural language search instead of manually reviewing recorded footage.`,
    },
  },
  "automotive": {
    headline: `Driving Intelligent Manufacturing with AI-Powered Operational Visibility`,
    summary: `The automotive and auto components industry relies on precision manufacturing, synchronized production lines, and strict quality standards to meet demanding delivery schedules. Unplanned downtime, safety incidents, process deviations, and delayed issue detection can quickly impact production targets and profitability. Orion Alerts transforms existing surveillance systems into intelligent operational assets, providing real-time visibility, AI-driven alerts, and centralized monitoring to improve safety, quality, and production efficiency across manufacturing facilities.`,
    useCases: [
      {
        title: `Production Line & Process Monitoring`,
        description: `Continuously monitor assembly lines, robotic workstations, conveyor systems, and material flow to detect production bottlenecks, idle stations, abnormal stoppages, and process deviations before they impact output.`,
      },
      {
        title: `AI-Powered Workplace Safety`,
        description: `Detect missing PPE, unauthorized access to robotic cells, restricted production zones, and unsafe worker behavior in real time to improve compliance and reduce workplace incidents.`,
      },
      {
        title: `Material Movement & Asset Visibility`,
        description: `Monitor the movement of critical components, finished goods, forklifts, and production assets while maintaining complete visibility across manufacturing, warehouse, and dispatch areas.`,
      },
      {
        title: `Intelligent Incident Detection & Smart Search`,
        description: `Automatically generate alerts for operational events, safety violations, vehicle movements, or production anomalies. Instantly retrieve relevant footage using AI-powered Smart Search for faster investigations.`,
      },
    ],
    processTitle: `AI-Powered Automotive Manufacturing Intelligence`,
    processFlow: `Capture → Analyze → Alert → Respond → Improve → Optimize`,
    processNarrative: [
      `Existing cameras continuously monitor production lines, assembly stations, warehouses, loading bays, and critical operational zones.`,
      `Orion AI analyzes live video streams to identify safety violations, production disruptions, unauthorized access, equipment abnormalities, and workflow inefficiencies.`,
      `Real-time alerts are delivered to supervisors through dashboards, mobile applications, email, or integrated enterprise systems.`,
      `Every event is automatically recorded, categorized, and made searchable for audits, investigations, and operational improvements.`,
      `Business dashboards provide actionable insights that support continuous process optimization and operational excellence.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing CCTV infrastructure into a centralized monitoring platform without replacing current camera investments.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-driven monitoring that continuously detects operational, safety, and process-related events without manual surveillance.`,
      },
      {
        label: `Optimize`,
        description: `Leverage dashboards, reports, and analytics to improve production efficiency, reduce downtime, strengthen compliance, and support continuous improvement initiatives.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Monitor PPE compliance, restricted zones, assembly line abnormalities, vehicle movement, loading operations, and safety incidents. Automated alerts enable immediate response, minimizing production disruptions and workplace risks.`,
      "vms": `Centralize live monitoring, playback, multi-plant visibility, user management, and incident investigations from a single platform, improving operational control across manufacturing facilities.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network devices. Proactive alerts ensure uninterrupted surveillance and eliminate blind spots that could impact production and security.`,
      "smart-search": `Locate quality incidents, production stoppages, safety events, vehicle movements, or operational exceptions within seconds using AI-powered search, dramatically reducing investigation time and improving root cause analysis.`,
    },
  },
  "metals-mining": {
    headline: `Building Safer, Smarter & More Efficient Mining Operations with AI`,
    summary: `The metals, minerals, and mining industry operates in some of the most demanding environments, where worker safety, heavy equipment operations, material movement, and process continuity are critical to productivity. Manual surveillance and delayed incident detection often result in safety risks, equipment downtime, production losses, and compliance challenges. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform that provides real-time visibility, proactive monitoring, and automated alerts across mining sites, processing plants, and material handling operations.`,
    useCases: [
      {
        title: `AI-Powered Safety & Hazard Monitoring`,
        description: `Monitor PPE compliance, restricted mining zones, hazardous work areas, and worker safety in real time. Instantly detect unauthorized access and unsafe activities to improve compliance and reduce workplace incidents.`,
      },
      {
        title: `Heavy Equipment & Vehicle Monitoring`,
        description: `Track the movement of dump trucks, excavators, loaders, forklifts, and other heavy equipment across mining and processing facilities. Detect unsafe vehicle movement, congestion, and operational risks before they escalate.`,
      },
      {
        title: `Material Handling & Process Monitoring`,
        description: `Monitor conveyors, crushers, stockyards, loading points, and ore handling processes to identify blockages, abnormal material accumulation, equipment stoppages, or workflow disruptions that impact production.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive real-time alerts for operational incidents, safety violations, equipment abnormalities, and surveillance infrastructure failures. Use AI-powered Smart Search to retrieve critical events within seconds for rapid investigation.`,
      },
    ],
    processTitle: `AI-Powered Mining Operations Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Improve`,
    processNarrative: [
      `Existing CCTV cameras monitor mining zones, processing plants, conveyor systems, stockyards, workshops, and critical operational areas.`,
      `Orion AI continuously analyzes live video streams to detect safety risks, equipment movement, production anomalies, restricted area intrusions, and operational disruptions.`,
      `Intelligent alerts are delivered instantly to supervisors through dashboards, mobile applications, email, or integrated control systems.`,
      `All incidents are automatically recorded, categorized, and made searchable for compliance, audits, and investigations.`,
      `Operational dashboards provide actionable insights to improve productivity, safety, and asset utilization across the mining operation.`,
    ],
    stepsTitle: `Three Steps to Mining-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure into a centralized AI-powered monitoring platform without replacing existing camera systems.`,
      },
      {
        label: `Automate`,
        description: `Deploy intelligent video analytics to continuously monitor safety, equipment movement, material handling, and operational events with minimal manual intervention.`,
      },
      {
        label: `Optimize`,
        description: `Leverage centralized dashboards, operational reports, and business intelligence to improve production efficiency, strengthen compliance, and enhance site-wide visibility.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted zone intrusions, vehicle movement, conveyor abnormalities, material accumulation, fire and smoke indicators, and other operational risks. Real-time alerts enable faster response while minimizing safety incidents and production disruptions.`,
      "vms": `Centralize live monitoring, playback, multi-site visibility, operator access, and incident investigations across mines, beneficiation plants, and processing facilities, improving operational coordination and response.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create operational blind spots or compromise security.`,
      "smart-search": `Instantly locate incidents involving heavy equipment, material handling, worker safety, unauthorized access, or production interruptions using AI-powered event search, reducing investigation time and improving operational decision-making.`,
    },
  },
  "cement": {
    headline: `Building Safer, More Efficient Cement Operations with AI-Powered Video Intelligence`,
    summary: `Cement and building material plants operate continuously under demanding conditions where production uptime, worker safety, heavy equipment coordination, and process consistency are essential for profitability. Dust-intensive environments, large production facilities, and high-risk operational zones make manual monitoring both difficult and inefficient. Orion Alerts enhances existing surveillance infrastructure with AI-powered operational intelligence, delivering real-time visibility, automated alerts, and centralized monitoring to improve safety, operational continuity, and plant performance.`,
    useCases: [
      {
        title: `AI-Powered Safety & PPE Compliance`,
        description: `Continuously monitor PPE compliance, restricted zones, kiln areas, conveyor galleries, and loading sections. Detect unsafe activities and unauthorized access in real time to improve worker safety and regulatory compliance.`,
      },
      {
        title: `Conveyor & Material Handling Monitoring`,
        description: `Monitor conveyors, crushers, hoppers, clinker transport, and raw material movement to identify material blockages, spillage, abnormal stoppages, or operational disruptions before they affect production.`,
      },
      {
        title: `Vehicle & Loading Operations Monitoring`,
        description: `Track the movement of dumpers, loaders, forklifts, and bulk loading vehicles across plant premises. Detect unsafe driving, congestion, and unauthorized vehicle movement to improve logistics efficiency.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for operational anomalies, safety incidents, equipment-area intrusions, or surveillance failures. AI-powered Smart Search enables rapid retrieval of critical events for investigation and compliance reporting.`,
      },
    ],
    processTitle: `AI-Powered Cement Plant Intelligence`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras monitor production units, conveyor systems, loading bays, warehouses, utility areas, and critical operational zones.`,
      `Orion AI continuously analyzes live video streams to identify safety violations, process disruptions, equipment-area risks, vehicle movement, and abnormal operational events.`,
      `Intelligent alerts are instantly delivered to supervisors through dashboards, mobile devices, email, or integrated monitoring systems.`,
      `Every event is automatically recorded and indexed for audits, compliance, and incident investigations.`,
      `Operational dashboards provide actionable insights that help optimize production efficiency, safety, and plant operations.`,
    ],
    stepsTitle: `Three Steps to Plant-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing camera infrastructure into a centralized monitoring platform without replacing existing surveillance investments.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered analytics that continuously monitor plant operations, safety, logistics, and production processes with minimal manual intervention.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated reports, and operational intelligence to improve productivity, strengthen compliance, and reduce operational risks.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted area intrusions, conveyor abnormalities, vehicle movement, fire and smoke indicators, and unsafe operational activities. Real-time alerts help minimize safety risks and production interruptions.`,
      "vms": `Centralize live monitoring, playback, multi-site visibility, user management, and incident investigations across manufacturing plants, grinding units, and dispatch facilities from a single platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures impact operational visibility or plant security.`,
      "smart-search": `Instantly retrieve footage related to production interruptions, loading operations, safety violations, vehicle movement, or operational incidents using AI-powered natural language search, reducing investigation time and improving decision-making.`,
    },
  },
  "oil-gas": {
    headline: `Strengthening Industrial Safety & Operational Reliability with AI-Powered Video Intelligence`,
    summary: `Oil, gas, and petrochemical facilities operate in hazardous, high-value environments where even minor operational deviations can lead to significant safety, environmental, and financial consequences. Ensuring continuous monitoring of critical assets, hazardous zones, workforce safety, and site security is essential for uninterrupted operations. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform, enabling real-time monitoring, automated incident detection, and centralized visibility across refineries, processing plants, terminals, and storage facilities.`,
    useCases: [
      {
        title: `AI-Powered Safety & Hazard Monitoring`,
        description: `Continuously monitor PPE compliance, hazardous processing areas, restricted zones, flare stacks, tank farms, and high-risk operational locations. Instantly detect unauthorized access and unsafe activities to improve workforce safety and regulatory compliance.`,
      },
      {
        title: `Perimeter Security & Critical Asset Protection`,
        description: `Monitor refinery perimeters, storage tanks, pipelines, substations, loading terminals, and restricted facilities for unauthorized entry, suspicious activities, and security threats using intelligent video analytics.`,
      },
      {
        title: `Vehicle & Loading Operations Monitoring`,
        description: `Track tanker trucks, forklifts, service vehicles, and loading bay activities to improve traffic management, prevent unauthorized vehicle movement, and ensure safer loading and unloading operations.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for operational incidents, safety violations, fire and smoke indicators, security breaches, or surveillance infrastructure failures. AI-powered Smart Search enables rapid investigation of critical events without manually reviewing hours of video.`,
      },
    ],
    processTitle: `AI-Powered Industrial Operations Intelligence`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor process units, storage terminals, loading bays, utility areas, perimeters, and other critical operational zones.`,
      `Orion AI analyzes live video streams to identify safety violations, unauthorized access, abnormal operational events, vehicle movement, and security risks in real time.`,
      `Intelligent alerts are immediately delivered to operators through centralized dashboards, mobile applications, email, or integrated control room systems.`,
      `Every incident is automatically recorded, classified, and indexed for audits, investigations, and compliance reporting.`,
      `Operational dashboards provide actionable insights that support safer operations, improved security, and better decision-making across facilities.`,
    ],
    stepsTitle: `Three Steps to Industry-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure into a centralized monitoring platform without replacing current camera investments.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor safety, security, critical assets, and operational activities without relying solely on manual surveillance.`,
      },
      {
        label: `Optimize`,
        description: `Utilize centralized dashboards, automated reports, and operational intelligence to improve response times, strengthen compliance, and enhance facility-wide operational visibility.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted area intrusions, perimeter breaches, fire and smoke indicators, unsafe vehicle movement, and suspicious activities. Real-time alerts enable immediate intervention, reducing operational and safety risks.`,
      "vms": `Centralize live monitoring, playback, multi-site operations, user management, and incident investigations across refineries, terminals, pipelines, and petrochemical plants from a single platform.`,
      "health-monitoring": `Continuously monitor cameras, NVRs, servers, storage systems, and network infrastructure to ensure uninterrupted surveillance. Proactive alerts help eliminate blind spots before they impact security or operations.`,
      "smart-search": `Quickly retrieve incidents related to safety violations, security events, vehicle movements, perimeter breaches, or operational anomalies using AI-powered natural language search, significantly reducing investigation time.`,
    },
  },
  "schools": {
    headline: `Creating Safer, Smarter & More Connected Learning Environments with AI`,
    summary: `Educational institutions must provide a secure environment where students, staff, and visitors can learn and work with confidence. Managing campus safety, monitoring multiple buildings, preventing unauthorized access, and responding quickly to incidents are constant challenges for school administrators. Orion Alerts transforms existing CCTV infrastructure into an AI-powered campus intelligence platform that delivers real-time monitoring, proactive alerts, and centralized visibility to enhance safety, operational efficiency, and regulatory compliance.`,
    useCases: [
      {
        title: `Campus Safety & Unauthorized Access Monitoring`,
        description: `Monitor school entrances, exits, corridors, playgrounds, and restricted areas to detect unauthorized access, perimeter breaches, and suspicious activities in real time, enabling faster intervention.`,
      },
      {
        title: `Student Safety & Incident Detection`,
        description: `Automatically identify fights, overcrowding, loitering, falls, and other unusual activities in common areas, helping staff respond quickly before situations escalate.`,
      },
      {
        title: `School Bus & Vehicle Movement Monitoring`,
        description: `Track school buses, visitor vehicles, and staff parking areas to improve traffic management, student pick-up and drop-off safety, and campus security.`,
      },
      {
        title: `Smart Incident Search & Infrastructure Health`,
        description: `Instantly retrieve incidents using AI-powered Smart Search instead of manually reviewing hours of footage. Continuously monitor the health of cameras, recording systems, and network devices to ensure uninterrupted surveillance.`,
      },
    ],
    processTitle: `AI-Powered School Safety Intelligence`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Improve`,
    processNarrative: [
      `Existing CCTV cameras monitor classrooms, entrances, corridors, playgrounds, parking areas, school buses, and other critical campus locations.`,
      `Orion AI continuously analyzes live video streams to detect unauthorized access, unusual behavior, safety incidents, overcrowding, and operational anomalies.`,
      `Real-time alerts are delivered to security personnel and administrators through dashboards, mobile applications, email, or integrated notification systems.`,
      `Every event is automatically recorded, categorized, and made searchable for investigations, compliance, and parent or authority reporting.`,
      `Centralized dashboards provide actionable insights that help improve campus safety, security operations, and resource management.`,
    ],
    stepsTitle: `Three Steps to School-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate all existing cameras across classrooms, buildings, buses, and campus facilities into a centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor student safety, campus security, and operational activities without relying solely on manual surveillance.`,
      },
      {
        label: `Protect`,
        description: `Leverage real-time alerts, centralized dashboards, and AI-powered search to improve incident response, strengthen campus security, and support a safer learning environment.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect unauthorized entry, restricted area access, fights, crowding, loitering, falls, abandoned objects, and suspicious activities. Real-time alerts enable staff to respond immediately, improving student safety and reducing security risks.`,
      "vms": `Centralize live monitoring, playback, multi-campus management, user access, and incident investigations from a single platform, giving administrators complete visibility across all school facilities.`,
      "health-monitoring": `Continuously monitor cameras, NVRs, servers, storage systems, and network infrastructure to ensure surveillance systems remain operational. Receive proactive alerts before equipment failures create security blind spots.`,
      "smart-search": `Instantly locate incidents involving student safety, visitor movement, unauthorized access, bus operations, or emergency events using AI-powered natural language search, significantly reducing investigation time.`,
    },
  },
  "pharma": {
    headline: `Enhancing Compliance, Product Integrity & Operational Excellence with AI`,
    summary: `Pharmaceutical and life sciences facilities operate under stringent regulatory standards where product quality, process compliance, cleanroom discipline, and operational traceability are essential. Manual monitoring and delayed incident detection can lead to compliance risks, product loss, production delays, and costly investigations. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform, providing real-time visibility, automated compliance monitoring, and centralized incident management across manufacturing, laboratories, warehouses, and packaging facilities.`,
    useCases: [
      {
        title: `GMP & Cleanroom Compliance Monitoring`,
        description: `Continuously monitor PPE compliance, gowning procedures, restricted cleanroom access, and personnel movement to support GMP compliance and maintain controlled manufacturing environments.`,
      },
      {
        title: `Production & Packaging Process Monitoring`,
        description: `Monitor filling lines, packaging operations, material movement, and critical production areas to detect workflow interruptions, unauthorized interventions, bottlenecks, or process deviations before they affect product quality.`,
      },
      {
        title: `Warehouse & Cold Storage Security`,
        description: `Secure raw material stores, finished goods warehouses, cold storage facilities, and controlled inventory areas by monitoring unauthorized access, material movement, and operational activities in real time.`,
      },
      {
        title: `Smart Incident Search & Infrastructure Health`,
        description: `Receive instant alerts for compliance violations, operational incidents, unauthorized access, or surveillance failures. AI-powered Smart Search enables quality and compliance teams to locate critical events within seconds for audits and investigations.`,
      },
    ],
    processTitle: `AI-Powered Pharmaceutical Operations Intelligence`,
    processFlow: `Monitor → Analyze → Detect → Alert → Document → Improve`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor production suites, cleanrooms, laboratories, packaging lines, warehouses, and restricted operational areas.`,
      `Orion AI analyzes live video streams to identify compliance violations, safety risks, unauthorized access, workflow disruptions, and abnormal operational activities.`,
      `Intelligent alerts are immediately delivered to production, quality, and security teams through dashboards, mobile devices, email, or integrated monitoring systems.`,
      `Every event is automatically recorded, indexed, and securely stored to support audits, regulatory compliance, investigations, and quality assurance.`,
      `Operational dashboards provide actionable insights that improve compliance, operational efficiency, and manufacturing visibility.`,
    ],
    stepsTitle: `Three Steps to Compliance-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across manufacturing, laboratories, warehouses, and packaging facilities into a centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor compliance, production activities, security, and operational workflows without relying solely on manual supervision.`,
      },
      {
        label: `Optimize`,
        description: `Utilize real-time dashboards, automated alerts, and operational analytics to strengthen regulatory compliance, improve productivity, and reduce operational risks.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, unauthorized cleanroom access, restricted area intrusions, abnormal personnel movement, unattended objects, and operational anomalies. Real-time alerts enable immediate corrective action, helping maintain product integrity and compliance.`,
      "vms": `Centralize live monitoring, playback, multi-site operations, role-based user access, and incident investigations across manufacturing plants, research facilities, and distribution centers, improving operational control and traceability.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create compliance gaps or operational blind spots.`,
      "smart-search": `Quickly retrieve footage related to production events, cleanroom activities, material movement, compliance violations, or quality investigations using AI-powered natural language search, significantly reducing audit preparation and investigation time.`,
    },
  },
  "food-fmcg": {
    headline: `Driving Smarter, Safer & More Efficient Food Manufacturing with AI`,
    summary: `Food and FMCG manufacturers operate in fast-paced, high-volume production environments where product quality, hygiene, worker safety, and production continuity are critical. Even minor disruptions, compliance failures, or quality issues can lead to product recalls, operational losses, and reputational damage. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform, enabling real-time monitoring, automated alerts, and centralized visibility across production, packaging, warehousing, and distribution facilities.`,
    useCases: [
      {
        title: `Hygiene & PPE Compliance Monitoring`,
        description: `Continuously monitor PPE compliance, hygiene practices, restricted production areas, and personnel movement to support food safety standards and ensure a compliant manufacturing environment.`,
      },
      {
        title: `Production & Packaging Line Monitoring`,
        description: `Monitor production lines, filling stations, packaging machines, conveyors, and material flow to detect bottlenecks, idle equipment, abnormal stoppages, and workflow deviations before they impact output.`,
      },
      {
        title: `Warehouse & Dispatch Monitoring`,
        description: `Track the movement of raw materials, finished goods, forklifts, loading docks, and dispatch operations to improve inventory security, logistics efficiency, and loading accuracy.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for safety incidents, unauthorized access, operational disruptions, or surveillance failures. AI-powered Smart Search helps quality and operations teams locate critical events within seconds for faster investigations.`,
      },
    ],
    processTitle: `AI-Powered Food Manufacturing Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Act → Improve`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor production areas, processing units, packaging lines, warehouses, cold storage, and dispatch zones.`,
      `Orion AI analyzes live video streams to detect hygiene violations, PPE non-compliance, production anomalies, unauthorized access, and operational disruptions.`,
      `Real-time alerts are delivered to production managers, quality teams, and supervisors through dashboards, mobile devices, email, or integrated enterprise systems.`,
      `Every event is automatically recorded and indexed for quality audits, compliance reporting, investigations, and operational analysis.`,
      `Interactive dashboards provide actionable insights to improve production efficiency, food safety, and operational performance.`,
    ],
    stepsTitle: `Three Steps to Food Industry-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across production, packaging, warehouses, and logistics into one centralized AI-powered platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy intelligent video analytics that continuously monitor hygiene compliance, production efficiency, worker safety, and operational activities without relying on manual observation.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated alerts, and business intelligence to improve food safety, production performance, and operational decision-making.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE and hygiene violations, unauthorized access, production stoppages, restricted area intrusions, unattended objects, fire and smoke indicators, and unsafe operational activities. Real-time alerts help maintain compliance while minimizing production losses.`,
      "vms": `Centralize live monitoring, playback, multi-site visibility, user management, and incident investigations across manufacturing plants, warehouses, cold storage facilities, and distribution centers, improving operational control and traceability.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create blind spots that affect compliance, security, or operational continuity.`,
      "smart-search": `Instantly locate production incidents, hygiene violations, packaging issues, warehouse events, or dispatch activities using AI-powered natural language search, significantly reducing investigation and audit preparation time.`,
    },
  },
  "logistics": {
    headline: `Enabling Intelligent Warehousing with AI-Powered Visibility & Operational Control`,
    summary: `Modern warehouses and logistics hubs operate around the clock, handling high volumes of inventory, vehicles, and personnel under tight delivery timelines. Manual monitoring often results in delayed incident detection, inventory security risks, loading errors, and operational inefficiencies. Orion Alerts transforms existing CCTV infrastructure into an AI-powered logistics intelligence platform, delivering real-time monitoring, automated alerts, and centralized visibility across warehouses, distribution centers, fulfillment hubs, and logistics operations.`,
    useCases: [
      {
        title: `Warehouse Safety & PPE Compliance`,
        description: `Continuously monitor PPE compliance, restricted storage zones, loading docks, and high-risk operational areas. Detect unsafe behavior, unauthorized access, and workplace incidents in real time to improve employee safety and regulatory compliance.`,
      },
      {
        title: `Loading Dock & Vehicle Operations Monitoring`,
        description: `Track truck arrivals, loading and unloading activities, dock occupancy, forklift movement, and dispatch operations. Detect unauthorized vehicle movement, dock congestion, and operational delays before they impact delivery schedules.`,
      },
      {
        title: `Inventory Protection & Material Movement`,
        description: `Monitor warehouse aisles, storage racks, high-value inventory zones, and material handling operations. Detect suspicious activity, unauthorized movement, abandoned objects, and inventory-related incidents to strengthen warehouse security.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for operational disruptions, safety incidents, unauthorized access, or surveillance failures. AI-powered Smart Search enables logistics teams to quickly retrieve events related to shipments, inventory movement, or warehouse operations.`,
      },
    ],
    processTitle: `AI-Powered Logistics Operations Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor warehouse floors, loading docks, storage areas, dispatch zones, parking yards, and perimeter locations.`,
      `Orion AI analyzes live video streams to detect safety violations, unauthorized access, vehicle movement, loading delays, operational bottlenecks, and suspicious activities.`,
      `Real-time alerts are delivered instantly to warehouse supervisors, security teams, and operations managers through dashboards, mobile devices, email, or integrated systems.`,
      `Every event is automatically recorded, categorized, and indexed for shipment verification, investigations, audits, and operational analysis.`,
      `Centralized dashboards provide actionable insights to improve warehouse productivity, security, and logistics performance.`,
    ],
    stepsTitle: `Three Steps to Warehouse-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across warehouses, loading docks, distribution centers, and logistics facilities into a centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor warehouse safety, inventory movement, vehicle operations, and logistics workflows with minimal manual intervention.`,
      },
      {
        label: `Optimize`,
        description: `Leverage intelligent dashboards, automated alerts, and operational analytics to improve dispatch efficiency, strengthen inventory security, and reduce operational delays.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, unauthorized access, loading dock congestion, forklift movement, restricted area intrusions, abandoned objects, fire and smoke indicators, and suspicious activities. Real-time alerts help improve warehouse safety, inventory security, and operational efficiency.`,
      "vms": `Centralize live monitoring, playback, multi-site visibility, user management, and incident investigations across warehouses, fulfillment centers, and distribution hubs, providing complete operational control from a single platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create blind spots that impact warehouse security or logistics operations.`,
      "smart-search": `Instantly retrieve footage related to loading activities, shipment verification, vehicle movement, inventory handling, or security incidents using AI-powered natural language search, significantly reducing investigation time and improving operational traceability.`,
    },
  },
  "commercial-infrastructure": {
    headline: `Transforming Facilities into Intelligent, Secure & Efficient Spaces with AI`,
    summary: `Airports, commercial buildings, business parks, retail complexes, and mixed-use facilities manage thousands of people, vehicles, and critical assets every day. Ensuring seamless security, operational efficiency, and occupant safety requires more than traditional surveillance. Orion Alerts transforms existing CCTV infrastructure into an AI-powered operational intelligence platform, delivering real-time monitoring, automated alerts, and centralized visibility to improve security, facility management, and operational performance across single or multiple sites.`,
    useCases: [
      {
        title: `Intelligent Access Control & Perimeter Security`,
        description: `Continuously monitor entrances, exits, restricted areas, parking facilities, and perimeters to detect unauthorized access, tailgating, loitering, and suspicious activities. Real-time alerts enable faster security response and stronger facility protection.`,
      },
      {
        title: `Crowd, Occupancy & Visitor Monitoring`,
        description: `Monitor crowd density, visitor movement, waiting areas, lobbies, terminals, elevators, and common spaces to prevent overcrowding, optimize occupant flow, and improve visitor experience.`,
      },
      {
        title: `Parking & Vehicle Management`,
        description: `Track vehicle movement across parking areas, entry gates, loading zones, and service roads. Detect congestion, unauthorized parking, wrong-way driving, and traffic bottlenecks to improve mobility and site operations.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for security incidents, safety hazards, operational disruptions, or surveillance infrastructure failures. AI-powered Smart Search enables facility teams to locate critical events within seconds for faster investigations and compliance reporting.`,
      },
    ],
    processTitle: `AI-Powered Facility Operations Intelligence`,
    processFlow: `Observe → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor entrances, public areas, parking facilities, commercial spaces, utility rooms, corridors, and restricted zones.`,
      `Orion AI analyzes live video streams to identify security threats, crowd congestion, unauthorized access, safety incidents, vehicle movement, and abnormal activities.`,
      `Intelligent alerts are instantly delivered to security teams and facility managers through dashboards, mobile applications, email, or integrated building management systems.`,
      `Every incident is automatically recorded, indexed, and made searchable for investigations, compliance, audits, and operational review.`,
      `Centralized dashboards provide actionable insights that improve security operations, facility performance, and resource utilization.`,
    ],
    stepsTitle: `Three Steps to Smart Facility Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across buildings, terminals, campuses, parking facilities, and commercial spaces into a centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics that continuously monitor security, occupancy, visitor movement, vehicle traffic, and operational activities without relying on constant manual observation.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated alerts, and operational analytics to improve facility management, reduce response times, and enhance the occupant experience.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect unauthorized access, crowd congestion, loitering, perimeter breaches, abandoned objects, fire and smoke indicators, parking violations, and suspicious activities. Real-time alerts enable security teams to respond proactively before incidents escalate.`,
      "vms": `Centralize live monitoring, playback, multi-site management, user access, and incident investigations across airports, commercial buildings, office campuses, retail centers, and mixed-use developments through a single unified platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create security blind spots or affect operational continuity.`,
      "smart-search": `Instantly locate security incidents, visitor movement, parking events, occupancy trends, unauthorized access, or emergency situations using AI-powered natural language search, significantly reducing investigation time and improving operational decision-making.`,
    },
  },
  "utilities": {
    headline: `Enabling Intelligent Infrastructure with AI-Powered Monitoring & Operational Visibility`,
    summary: `Utilities and smart infrastructure operators manage critical assets that deliver essential services, including power distribution, water treatment, renewable energy, substations, data centers, and public infrastructure. Maintaining operational continuity, securing remote assets, and responding quickly to incidents are essential to ensuring uninterrupted services. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform, providing real-time monitoring, automated alerts, and centralized visibility across geographically distributed infrastructure.`,
    useCases: [
      {
        title: `Critical Infrastructure & Perimeter Security`,
        description: `Continuously monitor substations, water treatment plants, pumping stations, solar farms, wind farms, utility buildings, and remote infrastructure for unauthorized access, perimeter breaches, vandalism, and suspicious activities.`,
      },
      {
        title: `Remote Asset & Site Monitoring`,
        description: `Monitor unmanned or geographically distributed facilities through centralized dashboards. Detect equipment-area intrusion, abnormal site activity, fire and smoke indicators, and operational incidents without requiring continuous on-site supervision.`,
      },
      {
        title: `Worker Safety & Operational Compliance`,
        description: `Automatically monitor PPE compliance, restricted work zones, maintenance activities, and hazardous operational areas. Generate real-time alerts for unsafe practices to improve worker safety and regulatory compliance.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for operational incidents, security threats, surveillance failures, or abnormal activities. AI-powered Smart Search enables operators to quickly retrieve critical events, while Health Monitoring ensures surveillance infrastructure remains fully operational.`,
      },
    ],
    processTitle: `AI-Powered Utility Operations Intelligence`,
    processFlow: `Monitor → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor utility facilities, substations, pumping stations, control rooms, renewable energy sites, and critical infrastructure assets.`,
      `Orion AI analyzes live video streams to detect unauthorized access, perimeter breaches, safety violations, abnormal activities, vehicle movement, and operational incidents.`,
      `Real-time alerts are instantly delivered to operators through dashboards, mobile devices, email, or integrated control room systems.`,
      `Every event is automatically recorded, categorized, and indexed for audits, investigations, regulatory reporting, and operational analysis.`,
      `Centralized dashboards provide actionable insights that improve infrastructure security, operational reliability, and asset visibility across multiple locations.`,
    ],
    stepsTitle: `Three Steps to Smart Infrastructure Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate surveillance infrastructure across substations, treatment plants, renewable energy sites, utility buildings, and remote facilities into a centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor security, worker safety, asset protection, and operational activities without depending on manual surveillance.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated alerts, and operational intelligence to improve service reliability, accelerate incident response, and enhance infrastructure management.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect unauthorized access, perimeter breaches, PPE violations, restricted area intrusions, fire and smoke indicators, suspicious activities, and abnormal vehicle movement. Real-time alerts enable operators to respond quickly, reducing operational and security risks.`,
      "vms": `Centralize live monitoring, playback, multi-site management, role-based access, and incident investigations across distributed utility assets, providing complete visibility from a single control center.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create blind spots that could compromise critical infrastructure.`,
      "smart-search": `Instantly retrieve footage related to maintenance activities, security incidents, asset inspections, vehicle movement, or operational events using AI-powered natural language search, significantly reducing investigation and audit time.`,
    },
  },
  "pulp-paper": {
    headline: `Optimizing Production, Safety & Quality with AI-Powered Video Intelligence`,
    summary: `Pulp, paper, and packaging plants operate continuous production lines where machine uptime, product quality, worker safety, and material handling efficiency directly impact operational performance. Manual monitoring often delays the detection of process disruptions, safety incidents, and equipment-related issues, resulting in downtime and production losses. Orion Alerts transforms existing CCTV infrastructure into an AI-powered operational intelligence platform, providing real-time monitoring, automated alerts, and centralized visibility across production, finishing, warehousing, and dispatch operations.`,
    useCases: [
      {
        title: `Production Line & Conveyor Monitoring`,
        description: `Continuously monitor paper machines, converting lines, conveyors, packaging stations, and material flow to detect production bottlenecks, conveyor blockages, abnormal stoppages, and workflow disruptions before they affect output.`,
      },
      {
        title: `AI-Powered Safety & Restricted Area Monitoring`,
        description: `Monitor PPE compliance, hazardous machinery zones, restricted maintenance areas, and forklift operations. Detect unsafe activities and unauthorized access in real time to improve worker safety and regulatory compliance.`,
      },
      {
        title: `Warehouse & Finished Goods Monitoring`,
        description: `Track the movement of paper rolls, packaging materials, pallets, forklifts, and finished goods across warehouses and dispatch areas to improve inventory visibility and loading efficiency.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for production interruptions, safety incidents, security breaches, or surveillance failures. AI-powered Smart Search enables operations teams to quickly retrieve critical events for investigations, audits, and quality reviews.`,
      },
    ],
    processTitle: `AI-Powered Manufacturing Operations Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor production lines, finishing areas, warehouses, dispatch zones, loading docks, and utility sections.`,
      `Orion AI analyzes live video streams to detect safety violations, machine-area intrusions, production bottlenecks, material movement issues, and operational anomalies.`,
      `Intelligent alerts are instantly delivered to supervisors, production teams, and plant managers through dashboards, mobile applications, email, or integrated enterprise systems.`,
      `Every event is automatically recorded, indexed, and made searchable for investigations, quality audits, and compliance reporting.`,
      `Operational dashboards provide actionable insights that help improve productivity, plant safety, and operational efficiency.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across production, converting, packaging, warehousing, and dispatch operations into one centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor production processes, worker safety, material handling, and operational activities with minimal manual intervention.`,
      },
      {
        label: `Optimize`,
        description: `Utilize real-time dashboards, automated alerts, and operational intelligence to improve throughput, reduce downtime, strengthen safety, and enhance production visibility.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted area intrusions, conveyor congestion, forklift movement, material accumulation, fire and smoke indicators, and unsafe operational activities. Real-time alerts enable immediate corrective action while reducing production interruptions.`,
      "vms": `Centralize live monitoring, playback, multi-plant visibility, user management, and incident investigations across manufacturing facilities, warehouses, and dispatch centers from a single platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create operational blind spots or affect plant security.`,
      "smart-search": `Instantly retrieve production events, loading operations, quality incidents, warehouse activities, or safety violations using AI-powered natural language search, significantly reducing investigation time and improving operational traceability.`,
    },
  },
  "textile": {
    headline: `Transforming Textile Manufacturing with AI-Powered Visibility & Operational Intelligence`,
    summary: `Textile and garment manufacturing depends on synchronized production lines, skilled workforce coordination, consistent quality, and timely order fulfillment. Manual supervision across spinning, weaving, dyeing, stitching, finishing, and warehousing often makes it difficult to identify operational inefficiencies, safety risks, and production delays in real time. Orion Alerts transforms existing CCTV infrastructure into an AI-powered operational intelligence platform, delivering centralized monitoring, real-time alerts, and actionable insights to improve productivity, workplace safety, and operational excellence.`,
    useCases: [
      {
        title: `Production Line & Workflow Monitoring`,
        description: `Continuously monitor spinning, weaving, knitting, dyeing, cutting, stitching, finishing, and packaging operations. Detect production bottlenecks, idle workstations, workflow interruptions, and material accumulation before they impact delivery schedules.`,
      },
      {
        title: `Workplace Safety & Compliance Monitoring`,
        description: `Automatically monitor PPE compliance, restricted machinery zones, emergency exits, and unsafe worker behavior. Detect unauthorized access and hazardous situations in real time to improve workplace safety and regulatory compliance.`,
      },
      {
        title: `Warehouse & Material Movement Monitoring`,
        description: `Track the movement of fabric rolls, finished garments, raw materials, forklifts, and dispatch operations across warehouses and loading bays to improve inventory visibility and logistics efficiency.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for operational disruptions, safety incidents, unauthorized access, or surveillance failures. AI-powered Smart Search enables managers to quickly locate production events, dispatch activities, or workplace incidents for faster investigations.`,
      },
    ],
    processTitle: `AI-Powered Textile Manufacturing Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Improve`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor production floors, cutting sections, stitching lines, dyeing units, warehouses, loading docks, and critical operational areas.`,
      `Orion AI analyzes live video streams to identify production delays, safety violations, unauthorized access, material handling issues, and operational anomalies.`,
      `Intelligent alerts are instantly delivered to supervisors, production managers, and security teams through dashboards, mobile applications, email, or integrated enterprise systems.`,
      `Every event is automatically recorded, categorized, and indexed for production analysis, compliance reporting, investigations, and audits.`,
      `Interactive dashboards provide actionable insights that improve production efficiency, worker safety, and operational performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across production units, warehouses, quality inspection areas, and dispatch operations into one centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics that continuously monitor production workflows, worker safety, inventory movement, and operational activities without relying solely on manual supervision.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated alerts, and business intelligence to improve production planning, reduce downtime, strengthen compliance, and optimize factory performance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted area intrusions, machine safety violations, production bottlenecks, unattended materials, fire and smoke indicators, and suspicious activities. Real-time alerts enable immediate intervention, minimizing production delays and workplace risks.`,
      "vms": `Centralize live monitoring, playback, multi-factory visibility, user management, and incident investigations across production plants, warehouses, and distribution facilities through a unified platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create operational blind spots or compromise security.`,
      "smart-search": `Instantly retrieve footage related to production issues, quality inspections, dispatch activities, worker safety incidents, or inventory movement using AI-powered natural language search, significantly reducing investigation and audit time.`,
    },
  },
  "polymers-plastics": {
    headline: `Driving Smarter Polymer Manufacturing with AI-Powered Operational Intelligence`,
    summary: `Polymer and plastics manufacturing facilities operate continuous, high-speed production processes where product quality, machine uptime, worker safety, and material flow directly impact profitability. Manual monitoring often makes it difficult to identify process disruptions, equipment-related issues, and safety incidents before they affect production. Orion Alerts transforms existing CCTV infrastructure into an AI-powered operational intelligence platform, delivering real-time monitoring, automated alerts, and centralized visibility across production, warehousing, and dispatch operations.`,
    useCases: [
      {
        title: `Production Line & Process Monitoring`,
        description: `Continuously monitor extrusion lines, injection molding machines, blow molding, thermoforming, and packaging operations. Detect production bottlenecks, idle machines, material accumulation, and workflow disruptions before they impact output.`,
      },
      {
        title: `AI-Powered Workplace Safety`,
        description: `Automatically monitor PPE compliance, restricted machinery zones, maintenance activities, and hazardous operational areas. Detect unsafe behavior and unauthorized access in real time to improve worker safety and compliance.`,
      },
      {
        title: `Material Handling & Warehouse Monitoring`,
        description: `Track raw materials, resin storage, finished products, forklifts, pallets, and loading operations across warehouses and dispatch areas to improve inventory visibility and logistics efficiency.`,
      },
      {
        title: `Smart Incident Detection & Infrastructure Health`,
        description: `Receive instant alerts for production anomalies, safety incidents, unauthorized access, or surveillance failures. AI-powered Smart Search enables operations teams to retrieve production events and incidents within seconds for faster investigations.`,
      },
    ],
    processTitle: `AI-Powered Polymer Manufacturing Intelligence`,
    processFlow: `Capture → Analyze → Detect → Alert → Respond → Optimize`,
    processNarrative: [
      `Existing CCTV cameras continuously monitor production lines, machine cells, warehouses, loading docks, utility areas, and critical operational zones.`,
      `Orion AI analyzes live video streams to detect production delays, machine-area intrusions, safety violations, material handling issues, and abnormal operational activities.`,
      `Intelligent alerts are delivered instantly to supervisors, production managers, and security teams through dashboards, mobile applications, email, or integrated enterprise systems.`,
      `Every event is automatically recorded, categorized, and indexed for production analysis, compliance reporting, quality investigations, and operational audits.`,
      `Interactive dashboards provide actionable insights that improve production efficiency, worker safety, and operational performance.`,
    ],
    stepsTitle: `Three Steps to Production-Ready Operations`,
    steps: [
      {
        label: `Connect`,
        description: `Integrate existing surveillance infrastructure across production, warehousing, utilities, and dispatch operations into one centralized monitoring platform.`,
      },
      {
        label: `Automate`,
        description: `Deploy AI-powered video analytics to continuously monitor production workflows, machine safety, material movement, and operational activities without relying solely on manual supervision.`,
      },
      {
        label: `Optimize`,
        description: `Leverage real-time dashboards, automated alerts, and business intelligence to improve production efficiency, reduce downtime, strengthen compliance, and optimize plant performance.`,
      },
    ],
    solutionBlurbs: {
      "ai-analytics": `Automatically detect PPE violations, restricted area intrusions, machine safety violations, production bottlenecks, unattended materials, fire and smoke indicators, and suspicious activities. Real-time alerts enable immediate corrective action, reducing production interruptions and improving workplace safety.`,
      "vms": `Centralize live monitoring, playback, multi-plant visibility, user management, and incident investigations across manufacturing plants, warehouses, and distribution facilities through a unified platform.`,
      "health-monitoring": `Continuously monitor the health of cameras, NVRs, servers, storage systems, and network infrastructure. Receive proactive alerts before surveillance failures create operational blind spots or affect production continuity.`,
      "smart-search": `Instantly retrieve production events, material movement, safety incidents, loading activities, or operational anomalies using AI-powered natural language search, significantly reducing investigation time and improving operational traceability.`,
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
