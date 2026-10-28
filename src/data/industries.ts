export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "oil-gas",
    title: "Oil & Gas",
    description: "Supporting upstream extraction, midstream transmission, and downstream refining with certified manpower, specialized equipment, and JIT industrial piping supplies.",
    image: "/assets/images/industry_oil_gas_1792910673856.jpg",
    highlights: ["Refinery turnaround crews", "High-pressure piping & valves", "Rig-site modular camp facilities"]
  },
  {
    id: "construction",
    title: "Construction",
    description: "Supplying civil and structural infrastructure projects across the Kingdom with heavy earthmoving machinery, crane rental, site helpers, and scrap clearing.",
    image: "/assets/images/service_heavy_equipment_1792910641621.jpg",
    highlights: ["Mobile & crawler crane supply", "Skilled carpenters & steel fixers", "Turnkey labor accommodation"]
  },
  {
    id: "petrochemical",
    title: "Petrochemical",
    description: "Assisting major petrochemical complexes in Jubail and Yanbu with critical shutdown manpower, specialized welding qualification (WQT), and plant maintenance.",
    image: "/assets/images/industry_petrochemical_1792910674662.jpg",
    highlights: ["Certified 6G TIG welders", "Corrosion-resistant alloy fittings", "Safe chemical scrap processing"]
  },
  {
    id: "manufacturing",
    title: "Industrial & Manufacturing",
    description: "Providing production lines, fabrication facilities, and industrial warehouses with dependable workforce, mechanical maintenance, consumables, and scrap collection.",
    image: "/assets/images/service_industrial_materials_1792910642661.jpg",
    highlights: ["Millwrights & machine operators", "Industrial fastening & fasteners", "Continuous recycling programs"]
  }
];

import { PROJECTS_DATA, ProjectItem } from './projects';
export type { ProjectItem };

export const FEATURED_PROJECTS = PROJECTS_DATA.map(p => ({
  id: p.id,
  title: p.name,
  category: p.category,
  description: p.description,
  image: p.image,
  location: p.location,
  highlights: p.highlights
}));
