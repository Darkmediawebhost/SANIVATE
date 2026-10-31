export interface ProjectItem {
  id: string;
  name: string;
  client: string;
  partner: string;
  category: string;
  location: string;
  description: string;
  image: string;
  gallery: string[];
  galleryCaptions?: string[];
  highlights: string;
  year?: string;
  scope: string[];
  stats?: { label: string; value: string }[];
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "hyundai-amiral",
    name: "Hyundai Nsc / Hyundai Amiral",
    client: "Hyundai Engineering Co., Ltd.",
    partner: "SATORP / SINOPEC",
    category: "Heavy Lifting & Petrochemical",
    location: "Jubail Industrial City, Saudi Arabia",
    description: "Strategic execution support for Amiral Project Package 1, delivering heavy lifting operations with massive crawler cranes, self-propelled modular transporter (SPMT) heavy haulage, and specialized technical manpower for petrochemical module assembly.",
    image: "/assets/projects/hyundai-amiral.jpeg",
    gallery: [
      "/assets/projects/hyundai-amiral.jpeg",
      "/assets/projects/seg-amiral-1.jpeg"
    ],
    galleryCaptions: [
      "Amiral PKG 1: SPMT module haulage & heavy lifting milestone banner celebration",
      "Amiral Complex: Multi-crane erection & structural piperack integration"
    ],
    highlights: "First Heavy Lifting Milestone Achieved · SPMT Module Logistics",
    year: "Active Project",
    stats: [
      { label: "Execution Package", value: "PKG 1" },
      { label: "Key Machinery", value: "SPMT + Cranes" },
      { label: "Site Standard", value: "SATORP / Aramco" }
    ],
    scope: [
      "SPMT Module Heavy Transportation",
      "Crawler Crane Heavy Lifting Coordination",
      "Certified Rigging Crews & Mechanical Trades",
      "Package 1 Site Safety & HSE Alignment"
    ]
  },
  {
    id: "seg-amiral",
    name: "SEG Amiral",
    client: "Sinopec Engineering Group (SEG)",
    partner: "TECNIMONT / SATORP",
    category: "Heavy Civil & Foundation Works",
    location: "Jubail Industrial City, Saudi Arabia",
    description: "Major structural execution for the Amiral Petrochemical complex, encompassing high-volume circular foundation concrete pours with dual boom-pumping systems and site logistics support for super-heavy 4,000-ton crawler crane operations.",
    image: "/assets/projects/seg-amiral.jpeg",
    gallery: [
      "/assets/projects/seg-amiral.jpeg",
      "/assets/projects/seg-amiral-1.jpeg",
      "/assets/projects/seg-riyadh-1.jpeg"
    ],
    galleryCaptions: [
      "Amiral Site: Dual boom-pumping high-volume circular foundation pour",
      "Structural Erection: Heavy lattice crane & process tower framework",
      "Heavy Lift Superstructure: 4,000-Ton crawler crane rigging operation"
    ],
    highlights: "SLT 4,000-Ton Heavy Lift · Dual Boom Concrete Foundations",
    year: "Active Project",
    stats: [
      { label: "Crane Rating", value: "4,000T SLT" },
      { label: "Pour Method", value: "Dual Boom Pumps" },
      { label: "Foundation", value: "Circular Tank Base" }
    ],
    scope: [
      "Multi-Boom Continuous Concrete Pumping",
      "Circular Foundation Shuttering & Rebar Support",
      "Process Tower Structural Erection",
      "4000T Crawler Crane Lifting Assistance"
    ]
  },
  {
    id: "seg-riyadh",
    name: "SEG Riyadh",
    client: "Sinopec Engineering Group (SEG)",
    partner: "Refinery Engineering Division",
    category: "Refinery Expansion & Mechanical",
    location: "Riyadh Region, Saudi Arabia",
    description: "Turnkey mechanical, equipment installation, and industrial piping construction across central refinery process units, incorporating high-pressure process columns, extensive piperacks, and precision equipment alignment.",
    image: "/assets/projects/seg-riyadh.jpeg",
    gallery: [
      "/assets/projects/seg-riyadh.jpeg",
      "/assets/projects/seg-riyadh-1.jpeg"
    ],
    galleryCaptions: [
      "Riyadh Complex: Column distillation towers & multi-level piperack assemblies",
      "Process Installation: Super-heavy crawler crane lifting process column"
    ],
    highlights: "Mega Process Unit Execution · High-Pressure Piping Packages",
    year: "Major Milestone Completed",
    stats: [
      { label: "Discipline", value: "Piping & Mechanical" },
      { label: "Welder Grade", value: "6G ASME / TIG" },
      { label: "Structure", value: "Distillation Columns" }
    ],
    scope: [
      "Distillation Column & Vessel Erection",
      "High-Pressure Process Piping & Welding",
      "Certified 6G TIG/SMAW Welder Deployment",
      "Multi-Tier Scaffold Engineering"
    ]
  },
  {
    id: "shengyue",
    name: "Shengyue",
    client: "Shengyue Heavy Industry",
    partner: "International EPC Consortium",
    category: "Gas Processing & Industrial Piping",
    location: "Eastern Province, Saudi Arabia",
    description: "Comprehensive industrial site support for the expansive Shengyue petrochemical and gas processing facility, supplying multi-discipline technical workforce, piping logistics, hydro-testing, and equipment maintenance.",
    image: "/assets/projects/Shengyue.jpeg",
    
    gallery: [
      "/assets/projects/Shengyue.jpeg",
      //  "/assets/projects/Shengyue.jpeg"
    ],
    galleryCaptions: [
      "Shengyue Facility: 24/7 twilight panorama of multi-tier piperack & pressure vessels"
    ],
    highlights: "24/7 Site Support · Continuous Multi-Tier Piping Networks",
    year: "Operational Facility",
    stats: [
      { label: "Operation", value: "24/7 Continuous" },
      { label: "Facility Type", value: "Gas & Petrochem" },
      { label: "Verification", value: "Hydro-Testing" }
    ],
    scope: [
      "Multi-Tier Piperack Mechanical Integration",
      "Hydro-Testing & Pressure Verification",
      "24/7 Equipment & Maintenance Crews",
      "Flange Management & Bolt Torqueing"
    ]
  },
  {
    id: "sinopec-rastanura",
    name: "Sinopec Rastanura",
    client: "SINOPEC",
    partner: "Saudi Aramco Operations",
    category: "Downstream Refining & Maintenance",
    location: "Ras Tanura, Eastern Province, Saudi Arabia",
    description: "Critical refinery maintenance, turnaround support, and plant expansion operations at the world-scale Ras Tanura coastal crude processing complex, delivering certified 6G welding crews, industrial scaffolding, and heavy equipment support.",
    image: "/assets/projects/sinopec-rastanura.jpeg",
    gallery: [
      "/assets/projects/sinopec-rastanura.jpeg",
      "/assets/projects/sinopec-rastanura-1.jpeg"
    ],
    galleryCaptions: [
      "Ras Tanura Plant: Crude distillation units & specialized turnaround maintenance",
      "Coastal Terminal: Giant Persian Gulf crude storage tank farm & marine pipelines"
    ],
    highlights: "World-Scale Coastal Complex · Zero-Disruption Turnaround",
    year: "Turnaround & Maintenance",
    stats: [
      { label: "Refinery Scale", value: "World-Scale Complex" },
      { label: "Safety Record", value: "Zero Disruption" },
      { label: "Mobilization", value: "Under 48 Hours" }
    ],
    scope: [
      "Crude Distillation Unit Maintenance",
      "Tank Farm & Marine Utility Upkeep",
      "Turnaround Crew Mobilization within 48 Hours",
      "Strict Saudi Aramco Safety Directive Compliance"
    ]
  },

   {
    id: "Ma’aden Turaif",
    name: "Ma’aden Turaif",
    client: "Ma’aden Turaif",
    partner: "Saudi Aramco Operations",
    category: "Downstream Refining & Maintenance",
    location: "Ras Tanura, Eastern Province, Saudi Arabia",
    description: "Critical refinery maintenance, turnaround support, and plant expansion operations at the world-scale Ras Tanura coastal crude processing complex, delivering certified 6G welding crews, industrial scaffolding, and heavy equipment support.",
    image: "/assets/projects/sinopec-rastanura.jpeg",
    gallery: [
      "/assets/projects/Turaif.png",
      "/assets/projects/Turaif1.png",
    ],
    galleryCaptions: [
      "Ras Tanura Plant: Crude distillation units & specialized turnaround maintenance",
      "Coastal Terminal: Giant Persian Gulf crude storage tank farm & marine pipelines"
    ],
    highlights: "World-Scale Coastal Complex · Zero-Disruption Turnaround",
    year: "Turnaround & Maintenance",
    stats: [
      { label: "Refinery Scale", value: "World-Scale Complex" },
      { label: "Safety Record", value: "Zero Disruption" },
      { label: "Mobilization", value: "Under 48 Hours" }
    ],
    scope: [
      "Crude Distillation Unit Maintenance",
      "Tank Farm & Marine Utility Upkeep",
      "Turnaround Crew Mobilization within 48 Hours",
      "Strict Saudi Aramco Safety Directive Compliance"
    ]
  }
];

