export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  iconName: "Users" | "Truck" | "Home" | "Layers" | "Recycle" | "CheckCircle2";
  category: "manpower" | "equipment" | "camps" | "materials" | "scrap" | "wqt";
  scope: string[];
  capabilities: string[];
  deliverables: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "manpower",
    slug: "manpower-supply",
    title: "Manpower Solutions",
    shortDescription: "Skilled, semi-skilled and general workforce from high categories to low categories for industrial and project requirements.",
    fullDescription: "SANIVATE delivers tailored workforce deployment designed to fulfill the demanding requirements of oil & gas refineries, petrochemical plants, fabrication yards, and construction complexes across Saudi Arabia. We provide thoroughly verified personnel with complete safety certifications, valid work permits, and trade qualifications.",
    image: "/src/assets/images/service_manpower_industrial_1792910639659.jpg",
    iconName: "Users",
    category: "manpower",
    scope: [
      "Certified 6G/TIG/MIG Welders & Pipefitters",
      "Riggers (Levels 1, 2 & 3 - Aramco/TUV certified)",
      "Millwrights, Mechanical & Electrical Technicians",
      "Structural Steel Erectors & Fabricators",
      "Safety Officers (NEBOSH/OSHA certified)",
      "Semi-skilled labor & General site helpers"
    ],
    capabilities: [
      "Rapid deployment across Jubail, Yanbu, Dammam & Ras Al Khair",
      "Medical checkups and HSE compliance onboardings",
      "Complete Iqama, insurance and payroll administrative handling",
      "Short-term turnaround/shutdown and multi-year contract staffing"
    ],
    deliverables: [
      "Trade-tested manpower with documented credential files",
      "Dedicated on-site coordinator for large team deployments",
      "Immediate replacement guarantee for unscheduled absences",
      "Daily time-card and productivity reporting"
    ]
  },
  {
    id: "equipment",
    slug: "equipment-services",
    title: "Equipment Services",
    shortDescription: "Supply, rental and support for heavy equipment and machinery to keep industrial and construction operations moving.",
    fullDescription: "We supply a modern, certified fleet of industrial heavy equipment and construction machinery on short and long-term lease terms. Every machine undergoes rigorous third-party inspection, preventative maintenance schedules, and is supplied with licensed, certified operators where needed.",
    image: "/src/assets/images/service_heavy_equipment_1792910641621.jpg",
    iconName: "Truck",
    category: "equipment",
    scope: [
      "Hydraulic & Rough Terrain Mobile Cranes (25T to 300T)",
      "Crawler Cranes & Telescopic Boom Lifts",
      "Heavy Earthmoving: Excavators, Wheel Loaders & Bulldozers",
      "Industrial Diesel Generators (50 kVA to 1250 kVA) & Compressors",
      "Forklifts, Telehandlers & Skid Steer Loaders",
      "Water tankers, dump trucks & lowbed trailers"
    ],
    capabilities: [
      "Aramco and SABIC third-party inspection valid stickers",
      "Certified and trained heavy equipment operators",
      "24/7 on-site mobile mechanical support and breakdown relief",
      "Flexible rental models (bare rental or operated & maintained)"
    ],
    deliverables: [
      "Certified load charts and maintenance logs",
      "Mobilization and demobilization logistics management",
      "Fuel management and servicing scheduling support",
      "Replacement equipment dispatch within agreed SLAs"
    ]
  },
  {
    id: "camps",
    slug: "camp-setup-facilities",
    title: "Camp Setup & Facilities",
    shortDescription: "Complete camp setup with accommodation, utilities and facilities to provide comfortable, compliant living for workforce.",
    fullDescription: "SANIVATE provides complete turnkey remote workforce camp solutions, from site preparation and modular containerized housing to catering, power, water, HVAC, and facilities management. Our camp structures comply with Saudi labor standards, civil defense requirements, and municipal sanitary regulations.",
    image: "/src/assets/images/service_modular_camp_1792910642635.jpg",
    iconName: "Home",
    category: "camps",
    scope: [
      "Modular accommodation units (Senior, Junior & Labor rooms)",
      "Central mess halls, commercial kitchen & cold storage facilities",
      "Ablution blocks, laundry facilities & prayer rooms",
      "Site administrative offices, conference rooms & clinic cabins",
      "Water supply, filtration and sewage disposal infrastructure",
      "Perimeter fencing, security gates & access control systems"
    ],
    capabilities: [
      "Rapid turnkey mobilization in remote desert and coastal locations",
      "Fire alarm and suppression systems meeting Civil Defense codes",
      "Comprehensive daily facility management, cleaning and catering",
      "Independent diesel power generation plants with auto-sync backups"
    ],
    deliverables: [
      "Turnkey site layout drawings and utility engineering plans",
      "Sanitary inspections and compliance documentation",
      "Full ongoing facilities maintenance and waste management",
      "Demobilization and environmental site restoration"
    ]
  },
  {
    id: "materials",
    slug: "industrial-materials",
    title: "Industrial Materials",
    shortDescription: "Sourcing and supply of industrial materials, consumables and equipment components for project continuity.",
    fullDescription: "A trusted procurement partner for oilfield, petrochemical, and construction projects. We maintain strong supply relationships with domestic and international manufacturers to provide certified pipes, valves, structural steel, electrical supplies, and daily industrial consumables with complete mill test certificates.",
    image: "/src/assets/images/service_industrial_materials_1792910642661.jpg",
    iconName: "Layers",
    category: "materials",
    scope: [
      "Seamless and welded carbon & stainless steel pipes (API / ASTM)",
      "Flanges, elbows, tees, reducers & high-pressure fittings",
      "Gate, globe, ball, butterfly and check valves (API 6D / 600)",
      "Industrial fastening systems, stud bolts, gaskets & seals",
      "Electrical cables, switchgear, junction boxes & conduit",
      "Industrial consumables, welding electrodes, abrasives & PPE"
    ],
    capabilities: [
      "Just-In-Time site delivery across all Saudi industrial zones",
      "MTC (Mill Test Certificate) verification and heat number traceability",
      "Bulk material stocking for ongoing shutdown schedules",
      "Direct manufacturer partnerships ensuring genuine materials"
    ],
    deliverables: [
      "Comprehensive manufacturer test reports and inspection documents",
      "Export/customs clearance and local transport logistics",
      "Secure warehousing and on-demand replenishment",
      "Transparent batch certification and compliance packets"
    ]
  },
  {
    id: "scrap",
    slug: "scrap-management",
    title: "Scrap Management",
    shortDescription: "Responsible collection, handling and disposal of industrial scrap with full environmental compliance.",
    fullDescription: "We provide comprehensive industrial metal and non-metal scrap management services for manufacturing plants, refineries, and demolition sites. Operating with licensed transport and heavy handling machinery, we ensure systematic sorting, hazardous material segregation, environmental reporting, and maximum recycling value recovery.",
    image: "/src/assets/images/service_scrap_management_1792910673656.jpg",
    iconName: "Recycle",
    category: "scrap",
    scope: [
      "Ferrous scrap: Structural steel, piping, rebar & heavy melting scrap",
      "Non-ferrous scrap: Copper cables, brass, aluminum & stainless alloys",
      "Industrial demolition debris clearing & plant dismantle scrap",
      "Redundant machinery, vessel & pipeline decommissioning",
      "Certified weighing via calibrated public/site weighbridges",
      "Environmental safe handling and regulated disposal coordination"
    ],
    capabilities: [
      "Equipped with material handler cranes, hydraulic shears & grapples",
      "Compliance with Saudi National Center for Waste Management (MWAN)",
      "Site clearing crews trained in industrial safety and hot-work safety",
      "Transparent grading and market-indexed scrap valuation"
    ],
    deliverables: [
      "Weighbridge certificates and certified weight summaries",
      "Environmental waste manifest and recycling traceability records",
      "Safe site clearance certificate post-demolition",
      "Prompt commercial reconciliation and settlement"
    ]
  },
  {
    id: "wqt",
    slug: "wqt-services",
    title: "WQT Services",
    shortDescription: "Workforce Qualification & Training (WQT) support services for certified welding, inspection and safety.",
    fullDescription: "SANIVATE provides dedicated Welder Qualification Testing (WQT) and technical workforce qualification support. We assist EPC contractors and industrial clients in preparing, testing, and qualifying welders and specialized trades to international codes (ASME Section IX, AWS D1.1, API 1104) and client-specific engineering standards.",
    image: "/src/assets/images/service_welding_wqt_1792910643744.jpg",
    iconName: "CheckCircle2",
    category: "wqt",
    scope: [
      "Welder Performance Qualification Testing (WPQ) to ASME IX / AWS D1.1",
      "Preparation of test coupons, backing rings & joint fit-ups",
      "Visual Inspection (VT) and Non-Destructive Examination (RT/UT/MT/PT) coordination",
      "Destructive bend testing and macro-etch examination coordination",
      "Welder pre-screening, skill evaluation & gap-training support",
      "Third-party inspection agency witnessing coordination"
    ],
    capabilities: [
      "Fully equipped qualification bays with multi-process machines (SMAW, GTAW, GMAW, FCAW)",
      "Certified Welding Inspectors (CSWIP / AWS-CWI) on oversight",
      "Rapid turnaround of testing results to meet tight mobilization deadlines",
      "Aramco and SABIC project specification familiarity"
    ],
    deliverables: [
      "Complete Welder Performance Qualification Record (WPQR) certificates",
      "Official NDT inspection reports and radiographs",
      "Welder ID cards with qualified range and expiry tracking",
      "Client submission dossiers ready for project approval"
    ]
  }
];
