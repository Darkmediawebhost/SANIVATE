export interface CaseStudy {
  id: string;
  title: string;
  clientSector: string;
  location: string;
  duration: string;
  thumbnail: string;
  category: 'workforce' | 'equipment' | 'camps' | 'quality';
  stats: { label: string; value: string }[];
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  testimonial: {
    quote: string;
    author: string;
    role: string;
    organization: string;
  };
  videoDetails: {
    title: string;
    recordedDate: string;
    aspectRatio: string;
    keyHighlights: string[];
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-refinery-turnaround",
    title: "Major Petrochemical Plant Turnaround: 350+ Certified Trades Mobilized",
    clientSector: "Petrochemical Refining",
    location: "Jubail Industrial City, Saudi Arabia",
    duration: "3:45 MIN",
    thumbnail: "/src/assets/images/service_manpower_industrial_1792910639659.jpg",
    category: "workforce",
    stats: [
      { label: "Manpower Mobilized", value: "350+ Trades" },
      { label: "Mobilization Time", value: "72 Hours" },
      { label: "Safety Record", value: "Zero LTI" },
      { label: "Turnaround Schedule", value: "100% On-Time" }
    ],
    overview: "During a scheduled 28-day major refinery turnaround in Jubail, SANIVATE deployed certified 6G TIG welders, pipefitters, millwrights, and safety supervisors under tight mobilization schedules.",
    challenge: "The EPC contractor needed rapid screening and gate-pass readiness for over 300 skilled craftsmen within 3 days without compromising on Aramco/SABIC safety accreditations.",
    solution: "Leveraging our active roster in the Eastern Province, SANIVATE screened, pre-tested, and conducted safety inductions in our Jubail facility before direct convoy mobilization.",
    result: "All critical piping spools and vessel connections were completed 36 hours ahead of scheduled steam startup with zero lost-time incidents (LTI).",
    testimonial: {
      quote: "SANIVATE's workforce coordination was exemplary. Every welder arrived fully credentialed with verified trade test records, allowing us to hit peak productivity immediately.",
      author: "Turnaround Project Director",
      role: "Site Operations Lead",
      organization: "Major Industrial EPC Contractor"
    },
    videoDetails: {
      title: "Jubail Refinery Turnaround Operations & Workforce Deployment",
      recordedDate: "Q4 Industrial Shutdown Season",
      aspectRatio: "16:9",
      keyHighlights: [
        "Pre-screening & WPS adherence at Jubail testing workshop",
        "Coordinated shift changeover & daily toolbox safety briefings",
        "Pipe spool installation on catalytic cracking towers",
        "Final quality inspection & hydrostatic testing sign-off"
      ]
    }
  },
  {
    id: "cs-equipment-infrastructure",
    title: "Heavy Equipment Fleet Deployment: Module Erection at Coastal Terminal",
    clientSector: "Oil & Gas Marine Terminal",
    location: "Ras Al Khair Industrial Port",
    duration: "4:15 MIN",
    thumbnail: "/src/assets/images/service_heavy_equipment_1792910641621.jpg",
    category: "equipment",
    stats: [
      { label: "Heavy Fleet Deployed", value: "24 Units" },
      { label: "Peak Crane Lift", value: "250 Tons" },
      { label: "Equipment Uptime", value: "99.4%" },
      { label: "Operator Certifications", value: "100% Third-Party" }
    ],
    overview: "SANIVATE supplied a dedicated fleet of 100T to 250T all-terrain cranes, heavy excavators, and low-bed haulage units for critical modular pipe rack erection.",
    challenge: "Tight marine jetty clearances and continuous 24-hour operation required zero machinery breakdowns and certified operators familiar with heavy coastal rigging.",
    solution: "Provided a turnkey package including inspected cranes with Aramco stickers, experienced operators, and on-site mobile mechanics stationed with fast-moving spare parts.",
    result: "All 18 structural modules were placed with precision alignment, maintaining an average equipment availability rating of 99.4%.",
    testimonial: {
      quote: "Having mobile mechanics on-site around the clock gave us complete peace of mind during critical heavy tandem lifts. SANIVATE delivered on every commitment.",
      author: "Heavy Rigging Superintendent",
      role: "Marine Infrastructure Lead",
      organization: "Offshore Engineering Consortium"
    },
    videoDetails: {
      title: "Tandem Crane Lifts & Earthmoving Operations at Ras Al Khair",
      recordedDate: "Commercial Infrastructure Mobilization",
      aspectRatio: "16:9",
      keyHighlights: [
        "Pre-lift safety meetings & computerized load chart verification",
        "Tandem crane lift of 180-ton process pipe rack module",
        "Continuous 24-hour shift changeover with dedicated relief operators",
        "Rigorous preventative maintenance and hydraulic fluid testing"
      ]
    }
  },
  {
    id: "cs-remote-camp",
    title: "Turnkey 800-Person Workforce Camp Setup in 45 Days",
    clientSector: "Remote Infrastructure",
    location: "Yanbu Industrial Basin",
    duration: "3:30 MIN",
    thumbnail: "/src/assets/images/service_modular_camp_1792910642635.jpg",
    category: "camps",
    stats: [
      { label: "Camp Capacity", value: "800 Personnel" },
      { label: "Delivery Duration", value: "45 Days" },
      { label: "Independent Power", value: "2.5 MW" },
      { label: "Compliance", value: "Civil Defense & Baladiya" }
    ],
    overview: "Fast-track engineering, delivery, and commissioning of a complete modular containerized camp complex for engineers and trade workforce on a remote pipeline project.",
    challenge: "The remote location lacked existing electrical grid or municipal water connections, requiring a fully self-sufficient life-support infrastructure.",
    solution: "Fabricated and erected modular residential blocks, commercial kitchen and dining hall, clinic, recreational cabin, auto-sync diesel generator plant, and sewage treatment unit.",
    result: "Workforce moved in seamlessly on day 45, receiving full civil defense and labor welfare compliance approvals from municipal authorities.",
    testimonial: {
      quote: "Our workers enjoyed air-conditioned comfort, hygienic dining, and reliable utilities throughout the hot summer months. SANIVATE built a true home away from home.",
      author: "Camp Administration Manager",
      role: "Workforce Logistics Director",
      organization: "Pipeline Construction Joint Venture"
    },
    videoDetails: {
      title: "Rapid Modular Camp Installation & Self-Sustaining Utilities",
      recordedDate: "Greenfield Pipeline Infrastructure Project",
      aspectRatio: "16:9",
      keyHighlights: [
        "Site grading and structural foundation leveling",
        "Crane positioning of insulated modular container cabins",
        "Utility installation: 2.5MW synchronized diesel power & RO water plant",
        "Inspection tour of mess hall, recreation lounge, and medical unit"
      ]
    }
  },
  {
    id: "cs-wqt-qualification",
    title: "High-Pressure Alloy Welding Qualification (WQT) for Subsea Headers",
    clientSector: "Corrosion-Resistant Fabrication",
    location: "SANIVATE Technical Center, Jubail",
    duration: "2:50 MIN",
    thumbnail: "/src/assets/images/service_welding_wqt_1792910643744.jpg",
    category: "quality",
    stats: [
      { label: "Welders Tested", value: "120 Personnel" },
      { label: "Testing Code", value: "ASME Section IX" },
      { label: "NDT Pass Rate", value: "98.2% Radiography" },
      { label: "Dossier Turnaround", value: "24 Hours" }
    ],
    overview: "Technical screening, coupon preparation, and ASME IX welder qualification testing for 120 specialized GTAW/SMAW alloy welders on high-pressure sour gas lines.",
    challenge: "Stringent client engineering specifications demanded zero defect tolerance and third-party inspection agency witnessing for each test weld coupon.",
    solution: "Organized structured qualification batches at our Jubail testing workshop with full bevel preparation, preheat control, and immediate on-site radiographic & bend testing.",
    result: "118 certified welders were mobilized with official client-approved WPQR cards, allowing fabrication to proceed without delays.",
    testimonial: {
      quote: "The rigor of SANIVATE's WQT facility is top tier. Their welding inspectors understand code tolerances and documentation standards thoroughly.",
      author: "QA/QC Welding Manager",
      role: "Quality Assurance Lead",
      organization: "Pressure Vessel & Piping Manufacturer"
    },
    videoDetails: {
      title: "ASME IX Welder Qualification Testing & Non-Destructive Examination",
      recordedDate: "Technical Quality Verification Program",
      aspectRatio: "16:9",
      keyHighlights: [
        "Coupon bevel verification & root gap fit-up checks",
        "In-process TIG root pass monitoring and interpass temperature logging",
        "Guided bend testing and metallurgical fracture inspection",
        "Third-party inspection endorsement and WPQR documentation issuance"
      ]
    }
  }
];
