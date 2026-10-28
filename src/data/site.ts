export interface CompanyConfig {
  name: string;
  tagline: string;
  established: string;
  location: {
    city: string;
    district: string;
    region: string;
    country: string;
    fullAddress: string;
    coordinates: { lat: number; lng: number };
    mapEmbedUrl: string;
    googleMapsUrl: string;
  };
  contact: {
    email: string;
    secondaryEmail?: string;
    rfqEmail: string;
    phone: string;
    phoneFormatted: string;
    officePhone: string;
    supportPhone: string;
    workingHours: string;
    workDays: string;
  };
  socials: {
    linkedin: string;
    facebook: string;
    instagram: string;
    twitter: string;
    youtube?: string;
  };
  logoUrl: string;
}

export const SITE_CONFIG: CompanyConfig = {
  name: "SANIVATE",
  tagline: "Industrial Manpower, Equipment & Support Services",
  established: "Kingdom of Saudi Arabia",
  location: {
    city: "Al-Jubail",
    district: "Al Dana Dist.",
    region: "Eastern Province",
    country: "Kingdom of Saudi Arabia",
    fullAddress: "Unit No. 101 & 102, Building No. 3222, Al Harith Ibn Tufail St., Al Dana Dist., Al-Jubail 35514 - 9039, Eastern Province, Kingdom of Saudi Arabia",
    coordinates: { lat: 27.00605, lng: 49.65783 },
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3216.8751569449446!2d49.65525437544263!3d27.006050076591603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDAwJzIxLjgiTiA0OcKwMzknMjguMiJF!5e1!3m2!1sen!2sin!4v1793167173147!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.google.com/?q=27.006050,49.657833"
  },
  contact: {
    email: "admin-isd@sanivate.co",
    secondaryEmail: "md-isd@sanivate.co",
    rfqEmail: "admin-isd@sanivate.co",
    phone: "+966594997686",
    phoneFormatted: "+966 59 499 7686",
    officePhone: "+966 13 362 4445",
    supportPhone: "+966 13 362 4445",
    workingHours: "8:00 AM - 6:00 PM",
    workDays: "Sunday - Thursday"
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/sanivatecorp/home/",
    facebook: "https://www.facebook.com/sanivatecorp",
    instagram: "https://www.instagram.com/sanivate.co/",
    twitter: "https://x.com/4bdullah_4445"
  },
  logoUrl: "/assets/aistudio/1280245e-f431-4f5e-9ca7-a41666d3c017_3180ce54.jpg"
};

export const TRUST_METRICS = [
  {
    title: "Safe Operations",
    subtitle: "Our Priority",
    description: "Zero-compromise HSE culture with rigorous safety briefings, OSHA/Aramco safety guidelines adherence, and comprehensive worker PPE."
  },
  {
    title: "Reliable Workforce",
    subtitle: "On Time, On Demand",
    description: "Vetted skilled, semi-skilled, and specialized labor deployed efficiently across Jubail, Yanbu, Ras Al Khair and major industrial hubs."
  },
  {
    title: "Quality Services",
    subtitle: "Across Industries",
    description: "ISO-aligned quality control standards and stringent operational benchmarks across equipment, materials and testing."
  },
  {
    title: "Trusted Partner",
    subtitle: "For Your Projects",
    description: "Dedicated account management, responsive coordination, and transparent commercial contracts tailored for Saudi mega-projects."
  }
];

export const CLIENT_LOGOS = [
  { name: "Aramco", label: "Aramco Approved Standards" },
  { name: "SABIC", label: "SABIC Industrial Projects" },
  { name: "Samsung Engineering", label: "Samsung E&A Support" },
  { name: "Petrogas", label: "Petrogas Operations" },
  { name: "L&T", label: "Larsen & Toubro EPC" },
  { name: "Hyundai E&C", label: "Hyundai Engineering" },
  { name: "Bechtel", label: "Bechtel Infrastructure" }
];
