import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, 
  ArrowRight, Users
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import teamPhoto1 from '../assets/team/1.jpeg';
import teamPhoto2 from '../assets/team/2.jpeg';
import teamPhoto3 from '../assets/team/3.jpeg';

interface AboutPageProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
  targetSection?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, targetSection }) => {
  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [targetSection]);

  const businessVerticals = [
    {
      num: "01",
      title: "Manufacturing",
      description: "Integrated production facilities operating across KSA, India, and China, engineering precision industrial components, structural assemblies, and specialized equipment."
    },
    {
      num: "02",
      title: "Trading",
      description: "Direct global procurement and commodity sourcing for industrial consumables, piping packages, structural steel, and critical project hardware."
    },
    {
      num: "03",
      title: "Distribution",
      description: "Strategic warehousing and rapid logistics distribution centers located across Saudi Arabia, India, and Bahrain ensuring uninterrupted supply continuity."
    },
    {
      num: "04",
      title: "Contracting",
      description: "Turnkey multi-disciplinary contracting covering civil, mechanical, piping, electrical, and instrumentation works for energy and infrastructure projects."
    },
    {
      num: "05",
      title: "Projects & Industrial Services",
      description: "Specialized plant shutdown maintenance, turnaround execution, hydro-testing, surface preparation, and scrap lifecycle management."
    },
    {
      num: "06",
      title: "Rental Human Resources",
      description: "Mobilization of certified trades, 6G welders, pipefitters, millwrights, rigging crews, safety officers, and bilingual field superintendents."
    },
    {
      num: "07",
      title: "Rental Vehicles & Equipments",
      description: "Modern, third-party certified mobile crane fleets (up to 300T), earthmoving machinery, transport trailers, and site power generation units."
    }
  ];

  const internationalPresence = [
    {
      country: "Kingdom of Saudi Arabia",
      code: "KSA",
      status: "Foreign Investment Licensed Enterprise",
      facilities: "Manufacturing Unit · Central Warehouses · Distribution Centers · Branch Offices",
      summary: "Serving Jubail Industrial City, Yanbu, Ras Al Khair, Dammam, and major Vision 2030 developments with immediate on-ground deployment."
    },
    {
      country: "India",
      code: "IND",
      status: "Core Manufacturing & Engineering Hub",
      facilities: "State-of-the-Art Manufacturing Unit · Warehouses · Regional Distribution Centers",
      summary: "Foundational manufacturing base, technical trade qualification facilities, and central engineering operations."
    },
    {
      country: "China",
      code: "CHN",
      status: "Advanced Production Base",
      facilities: "High-Precision Manufacturing Unit · International Quality Testing Center",
      summary: "Precision industrial components manufacturing, tooling fabrication, and global logistics dispatch."
    },
    {
      country: "Kingdom of Bahrain",
      code: "BHR",
      status: "GCC Regional Branch Office",
      facilities: "Branch Office · GCC Warehousing & Distribution Hub",
      summary: "Strategic cross-border maritime clearance, GCC distribution, and commercial contracting liaison."
    }
  ];

  const coreValues = [
    {
      title: "Safety First & Always",
      description: "Zero-incident culture embedded into every site induction, tool inspection, and mobilization. Compliant with OSHA and Saudi Aramco safety regulations.",
      icon: <ShieldCheck className="w-5 h-5 text-[#0798F2]" />
    },
    {
      title: "Dependable Reliability",
      description: "Disciplined execution on tight project milestones. When critical refinery turnarounds require emergency staffing or replacement machinery, we deliver on time.",
      icon: <Target className="w-5 h-5 text-[#0798F2]" />
    },
    {
      title: "Uncompromising Quality",
      description: "From ASME Section IX welder testing to calibrated crane load tests and ISO-aligned quality assurance, our work withstands rigorous audits.",
      icon: <Award className="w-5 h-5 text-[#0798F2]" />
    },
    {
      title: "Rapid Responsiveness",
      description: "Direct executive access and responsive site management ensuring immediate commercial decisions, mobilizations, and technical assistance.",
      icon: <CheckCircle2 className="w-5 h-5 text-[#0798F2]" />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full bg-white text-slate-800"
    >
      {/* Editorial Corporate Hero */}
      <section className="relative bg-[#062747] text-white py-10 sm:py-12 lg:py-14 overflow-hidden border-b border-[#0798F2]/20">
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center pointer-events-none mix-blend-luminosity"
          style={{ backgroundImage: `url('/assets/images/hero_industrial_refinery_1792910639649.jpg')` }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-3 sm:space-y-4">
         
            
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
              A Technology Haven with Diversified Business &amp; A Single Vision
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-3xl">
              Delivering end-to-end manufacturing, trading, contracting, industrial services, rental human resources, and equipment across India, China, Bahrain, and the Kingdom of Saudi Arabia.
            </p>

          

            {/* Quick Section Jump Navigation */}
            
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 lg:py-24 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Authoritative Editorial Text (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-3">
                  About Us
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
                  Overview
                </h2>
              </div>

              {/* Exact Verbatim Overview Copy */}
              <div className="border-l-2 border-[#0798F2] pl-6 py-2">
                <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
                  <strong className="text-[#062747] font-bold">Sanivate</strong> is a technology haven with diversified business and a single vision. Sanivate prides itself as one of the global leaders in delivering products and services that consumers desire, providing complete end-to-end Manufacturing, Trading, Distribution, Contracting, Projects &amp; Industrial Services, Rental Human Resources, Rental Vehicles &amp; Equipments – spreading its network across India and the Middle East with its manufacturing unit based in India, China &amp; KSA and Warehouse, Distribution Centers &amp; Branch Offices located in India, KSA and Bahrain.
                </p>
              </div>

              <div className="space-y-4 pt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                <p>
                  As an officially licensed foreign investment enterprise operating within Saudi Arabia, Sanivate combines international production muscle with agile local site deployment. We bridge the critical gap between global supply chain logistics and on-the-ground industrial execution for EPC contractors, plant operators, and mega-infrastructure developers.
                </p>
                <p>
                  Our operational hubs maintain verified safety records, certified trade testing facilities, and round-the-clock technical coordination teams to ensure seamless turnarounds and reliable project mobilization.
                </p>
              </div>

              {/* Corporate Facts Table */}
              <div className="pt-6 border-t border-slate-200">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-xs sm:text-sm">
                  <div>
                    <dt className="text-slate-400 font-medium">Headquarters (KSA)</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">Jubail Industrial City, Eastern Province</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium">Corporate Legal Status</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">Licensed Foreign Investment Enterprise</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium">Active Manufacturing Units</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">Saudi Arabia · India · China</dd>
                  </div>
                  <div>
                    <dt className="text-slate-400 font-medium">Warehouses &amp; Distribution</dt>
                    <dd className="font-semibold text-slate-900 mt-0.5">Saudi Arabia · India · Bahrain</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Right Column: Authentic Industrial Team Photography (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl overflow-hidden border border-[#E4EDF5] shadow-xl bg-white">
                <div className="relative h-72 sm:h-80 overflow-hidden bg-slate-900">
                  <img
                    src={teamPhoto2}
                    alt="Sanivate Corporate Leadership & Operations Team in Jubail, KSA"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031A30]/85 via-transparent to-transparent opacity-80" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[11px] font-bold text-[#062747] shadow-sm flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Jubail Headquarters, KSA
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs font-semibold text-[#0798F2]">Corporate &amp; Field Leadership</p>
                    <p className="text-sm font-bold text-white">Sanivate Operations Team</p>
                  </div>
                </div>

                <div className="p-6 bg-slate-50 border-t border-slate-200">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span className="font-semibold text-[#0798F2]">Authentic Field Presence</span>
                    <span>Al Dana Dist., Jubail</span>
                  </div>
                  <h4 className="text-base font-bold text-[#062747]">
                    End-to-End Industrial Execution
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    Connecting global manufacturing capabilities with specialized workforce deployment across Saudi Arabia&apos;s petrochemical, energy, and construction sectors.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-[#062747] text-white space-y-2">
                <p className="text-xs text-[#0798F2] font-semibold uppercase tracking-wider">
                  Operational Standard
                </p>
                <h4 className="text-lg font-bold">100% Client-Centric Compliance</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every mobilization conforms to Saudi Labor Regulations, Saudi Aramco HSE mandates, SABIC vendor qualifications, and ISO quality management guidelines.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Founder's Message Section */}
      {/* <section className="py-20 lg:py-24 bg-slate-50 border-y border-slate-200" id="founders-message">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2">
              Leadership &amp; Strategy
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
              Founder&apos;s Message
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              A vision of industrial excellence combining technology, dedication, and cross-border innovation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E4EDF5] shadow-xl shadow-slate-200/60 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-sm mx-auto">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#0798F2]/25 to-[#062747]/15 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500" />
                  
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-slate-900 aspect-[3/4] sm:aspect-[4/5]">
                    <img
                      src="/assets/founder.jpg"
                      alt="Abdul Kawsar Asanabail - Founder & CEO, Sanivate Corporation"
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="eager"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031A30]/90 via-[#031A30]/20 to-transparent" />
                    
                    <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#0798F2] font-bold uppercase tracking-wider mb-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#0798F2] animate-pulse" />
                        Executive Leadership
                      </div>
                      <p className="font-bold text-base tracking-wide text-white">Abdul Kawsar Asanabail</p>
                      <p className="text-xs text-slate-300">Founder &amp; CEO, Sanivate Corporation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                
                <div className="text-[#0798F2] opacity-30 font-serif text-6xl lg:text-7xl leading-none select-none -mb-3">
                  &ldquo;
                </div>

                <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  <p>
                    My extensive background in business and management has helped me hone my entrepreneurial desire to realize the dream of starting this company.
                  </p>

                  <p className="border-l-4 border-[#0798F2] pl-5 py-2 text-slate-900 font-medium italic bg-[#F1F8FD] rounded-r-xl">
                    The initiation of manufacturing unit in India and obtaining the foreign investment license in KSA was a major milestone for Sanivate. Each of the team member in higher management has been carefully selected from different backgrounds and each one brings their specific expertise to the table.
                  </p>

                  <p>
                    Sanivate is a dream team of talented and hardworking young individuals that has perfected its technique of combining innovation with technology and client satisfaction.
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <div className="font-serif italic text-2xl sm:text-3xl text-[#062747] tracking-wide mb-1 font-semibold">
                      Abdul Kawsar Asanabail
                    </div>
                    <p className="text-sm font-bold text-[#062747]">
                      Abdul Kawsar Asanabail
                    </p>
                    <p className="text-xs text-[#0798F2] font-semibold mt-0.5">
                      Founder &amp; CEO, Sanivate Corporation
                    </p>
                  </div>

                  <div className="text-left sm:text-right text-xs text-slate-500 space-y-1">
                    <p className="font-semibold text-slate-700">Sanivate Corporation</p>
                    <p>Global Industrial Services · Manufacturing · Contracting</p>
                    <p className="text-[11px] text-slate-400">Kingdom of Saudi Arabia · India · China · Bahrain</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section> */}

      {/* Managing Director Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200" id="managing-director">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2">
              Executive Leadership
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
              Managing Director
            </h2>
            <p className="text-sm text-slate-500 mt-2">
              Driving strategic direction and operational excellence across all Sanivate business verticals.
            </p>
          </div>

          {/* Card */}
          <div className="bg-white rounded-3xl border border-[#E4EDF5] shadow-xl shadow-slate-200/60 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">

              {/* Image Column */}
              <div className="lg:col-span-5 relative bg-gradient-to-br from-[#02182B] via-[#062747] to-[#04335E] flex flex-col items-center justify-center p-8 sm:p-10 min-h-[380px]">
                {/* Ambient glows */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#0798F2]/15 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative group w-full max-w-xs mx-auto">
                  {/* Glow ring */}
                  <div className="absolute -inset-2 bg-gradient-to-tr from-[#0798F2]/30 to-[#062747]/20 rounded-3xl blur-xl opacity-80 group-hover:opacity-100 transition duration-500" />

                  {/* Portrait */}
                  <div className="relative rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl bg-slate-900 aspect-[3/4]">
                    <img  
                      src="/assets/team/Imran.png"
                      alt="Mohammed Imran Sharif — Managing Director, Sanivate Corporation"
                      className="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031A30]/80 via-[#031A30]/10 to-transparent" />

                    {/* Name badge on image */}
                    <div className="absolute bottom-4 left-4 right-4 text-white p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
                      <div className="flex items-center gap-1.5 text-[11px] text-[#0798F2] font-bold uppercase tracking-wider mb-0.5">
                        <span className="w-2 h-2 rounded-full bg-[#0798F2] animate-pulse" />
                        Managing Director
                      </div>
                      <p className="font-bold text-base tracking-wide text-white">Mohammed Imran Sharif</p>
                      <p className="text-xs text-slate-300">Sanivate Corporation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-7 flex flex-col justify-center p-8 sm:p-10 lg:p-12 space-y-6">

                {/* Quote mark */}
                <div className="text-[#0798F2] opacity-25 font-serif text-6xl lg:text-7xl leading-none select-none -mb-4">
                  &ldquo;
                </div>

                {/* Message */}
                <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                  <p>
                    Our strength lies in the depth of our commitment — not just to delivering industrial services, but to building long-term partnerships grounded in trust, technical excellence, and consistent on-site reliability.
                  </p>
                  <p className="border-l-4 border-[#0798F2] pl-5 py-2 text-slate-900 font-medium italic bg-[#F1F8FD] rounded-r-xl text-sm sm:text-base">
                    Every project we undertake reflects Sanivate's promise to its clients: world-class execution standards, fully certified teams, and a supply chain that never lets you down — whether it is a scheduled turnaround or an emergency mobilization.
                  </p>
                  <p>
                    As Managing Director, I am privileged to lead a team whose dedication and expertise place Sanivate among the most trusted industrial partners across the Kingdom of Saudi Arabia and the wider Gulf region.
                  </p>
                </div>

                {/* Signature & Attribution */}
                <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                  <div>
                    <div className="font-serif italic text-2xl sm:text-3xl text-[#062747] tracking-wide mb-1 font-semibold">
                      Mohammed Imran Sharif
                    </div>
                    <p className="text-sm font-bold text-[#062747]">Mohammed Imran Sharif</p>
                    <p className="text-xs text-[#0798F2] font-semibold mt-0.5">
                      Managing Director, Sanivate Corporation
                    </p>
                  </div>

                  {/* Key highlights */}
                  <div className="flex flex-wrap gap-2">
                    {['Strategic Leadership', 'Operations', 'KSA Industrial'].map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-[#F1F8FD] border border-[#0798F2]/20 text-[11px] font-bold text-[#062747] tracking-wide"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Leadership & Operations Team Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-[#F1F8FD]/70 via-white to-slate-50/70 border-b border-[#E4EDF5]" id="our-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header with Animated Highlight */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0798F2]/10 border border-[#0798F2]/20 text-xs font-bold text-[#0798F2] uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Our People &amp; Operational Leadership</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062747] tracking-tight">
              The Driving Force Behind <span className="text-[#0798F2]">Sanivate</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Combining international industrial manufacturing heritage with verified on-the-ground management in Jubail. Meet the dedicated leadership, bilingual field superintendents, and certified workforce delivering every turnaround.
            </p>
          </div>



                    {/* Full Images Showcase - Clean, Uncropped & No Popup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Photo 1: Portrait Team Photo in Jubail Office (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4EDF5] shadow-lg bg-white p-2 sm:p-2.5 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={teamPhoto1}
                  alt="Sanivate Operations and Technical Site Coordination Unit"
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-contain block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Photos 2 & 3: Landscape Team Photos Stacked (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 justify-center">
              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4EDF5] shadow-lg bg-white p-2 sm:p-2.5 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={teamPhoto2}
                  alt="Sanivate Executive Leadership and Jubail Headquarters Operations"
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-contain block"
                  loading="lazy"
                />
              </div>

              <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E4EDF5] shadow-lg bg-white p-2 sm:p-2.5 hover:shadow-xl transition-shadow duration-300">
                <img
                  src={teamPhoto3}
                  alt="Sanivate Industrial Services and Engineering Workforce Assembly"
                  className="w-full h-auto rounded-xl sm:rounded-2xl object-contain block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Verticals & Scope Section */}
      <section className="py-20 bg-white" id="verticals">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
              Diversified Industrial Scope
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Providing complete end-to-end integration across project lifecycles from raw component fabrication to active site execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessVerticals.map((vert) => (
              <div
                key={vert.num}
                className="p-6 rounded-xl border border-slate-200 bg-white hover:border-[#0798F2]/50 hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#0798F2] block mb-2">
                    {vert.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#062747] mb-2">
                    {vert.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {vert.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Inquire Card */}
            <div className="p-6 rounded-xl border border-slate-200 bg-[#062747] text-white flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-[#0798F2] block mb-2">
                  CUSTOM
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  Integrated Scope Solutions
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Need a bundled package combining skilled manpower, certified cranes, and temporary site facilities? We build tailored packages for EPC contractors.
                </p>
              </div>
              <button
                onClick={() => onNavigate('contact')}
                className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-[#0798F2] hover:text-white transition-colors cursor-pointer"
              >
                <span>Request Custom Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Global Infrastructure Network */}
      <section className="py-20 bg-slate-50 border-t border-slate-200" id="network">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2">
              Global Presence
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
              International Network &amp; Facilities
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Our manufacturing bases, distribution centers, and corporate branch offices span the Middle East and Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internationalPresence.map((loc, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#062747]">
                    {loc.country}
                  </h3>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {loc.code}
                  </span>
                </div>
                <p className="text-xs font-semibold text-[#0798F2]">
                  {loc.status}
                </p>
                <div className="pt-2 border-t border-slate-100 text-xs text-slate-600 space-y-1">
                  <p className="font-medium text-slate-800">
                    {loc.facilities}
                  </p>
                  <p className="leading-relaxed">
                    {loc.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Mission */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 text-[#0798F2] flex items-center justify-center mb-5 shadow-2xs">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#062747] mb-3">
                  Our Mission
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  To provide dependable, safe, and cost-effective industrial workforce, equipment, materials, and turnkey site services that accelerate project delivery and uphold the highest safety standards across Saudi Arabia&apos;s critical infrastructure.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500">
                Safety · Dependability · Efficiency
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#062747] text-white rounded-2xl p-8 border border-[#062747] flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 text-[#0798F2] flex items-center justify-center mb-5">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  To become the most reliable and trusted industrial support partner in the Middle East, recognized for workforce excellence, operational integrity, modern equipment solutions, and active contribution to Saudi Vision 2030 development goals.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-white/10 text-xs font-semibold text-[#0798F2]">
                Empowering Saudi Vision 2030
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Saudi Vision 2030 Strategic Alignment Section */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white border-t border-slate-200" id="vision-2030">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-gradient-to-br from-[#02182B] via-[#062747] to-[#04335E] rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl border border-white/10">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0798F2]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
              
              {/* Left Column: Official Vision 2030 Brand Card */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-sm bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-white/40 flex flex-col items-center text-center group hover:shadow-[#0798F2]/20 transition-all duration-300">
                  <div className="w-full aspect-[4/3] flex items-center justify-center p-2 mb-4">
                    <img
                      src="/assets/vision-2030.png"
                      alt="Saudi Vision 2030 - Kingdom of Saudi Arabia"
                      className="max-h-36 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="w-full pt-4 border-t border-slate-100 space-y-1">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#062747]">
                      Strategic National Partner
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Licensed Foreign Investment Enterprise in KSA
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column: Narrative & 4 Strategic Impact Pillars */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold text-[#0798F2] uppercase tracking-wider mb-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Kingdom of Saudi Arabia · National Transformation
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    In Full Alignment with <span className="text-[#0798F2]">Saudi Vision 2030</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                    As an officially licensed foreign investment enterprise based in Jubail Industrial City, Sanivate is proud to contribute directly to the Kingdom&apos;s industrial transformation, economic diversification, and giga-project execution.
                  </p>
                </div>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5 hover:bg-white/10 transition-colors">
                    <div className="text-xs font-bold text-[#0798F2] uppercase tracking-wider">
                      01 · IKTVA &amp; Local Content
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Strengthening Domestic Supply Chains
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Expanding domestic manufacturing and component fabrication capabilities inside Saudi Arabia.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5 hover:bg-white/10 transition-colors">
                    <div className="text-xs font-bold text-[#0798F2] uppercase tracking-wider">
                      02 · Human Capital &amp; Saudization
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Workforce Development
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Training and mobilizing certified local talent across engineering, safety, and specialized trades.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5 hover:bg-white/10 transition-colors">
                    <div className="text-xs font-bold text-[#0798F2] uppercase tracking-wider">
                      03 · Industrial Mega-Projects
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Agile Turnaround &amp; Site Support
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Rapid equipment, scaffolding, and manpower deployment across Jubail, Yanbu, Ras Al Khair &amp; NEOM.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xs space-y-1.5 hover:bg-white/10 transition-colors">
                    <div className="text-xs font-bold text-[#0798F2] uppercase tracking-wider">
                      04 · Global Technology Transfer
                    </div>
                    <h3 className="text-sm font-bold text-white">
                      Cross-Border Manufacturing Power
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Leveraging our multi-national production hubs to deliver world-class precision engineering to KSA.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2] mb-2">
              Our Principles
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062747] tracking-tight">
              Values That Drive Every Deployment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center">
                  {val.icon}
                </div>
                <h3 className="text-base font-bold text-[#062747]">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call to Action */}
      <section className="py-16 bg-[#062747] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Partner with Sanivate for Your Industrial Requirements
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Discuss your manufacturing, workforce supply, equipment leasing, or site contracting needs with our executive and commercial engineering teams.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={() => onNavigate('contact')}
            >
              Request a Commercial Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate('services')}
              className="!text-white !border-white/30 hover:!bg-white/10"
            >
              Explore All 6 Services
            </Button>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
