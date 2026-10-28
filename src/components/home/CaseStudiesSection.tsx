import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Clock, Quote, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { CASE_STUDIES, CaseStudy } from '../../data/caseStudies';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

interface CaseStudiesSectionProps {
  onOpenCaseStudy: (caseStudy: CaseStudy) => void;
  onNavigateToContact: (service?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({
  onOpenCaseStudy,
  onNavigateToContact
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredStudies = activeFilter === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'workforce', label: 'Workforce Turnaround' },
    { id: 'equipment', label: 'Heavy Equipment' },
    { id: 'camps', label: 'Modular Camps' },
    { id: 'quality', label: 'WQT & Testing' }
  ];

  return (
    <section className="py-20 bg-[#041D35] text-white border-t border-[#062747]" id="case-studies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="FIELD DOCUMENTED PERFORMANCE"
          title="Industrial Support in Action: Video Highlights"
          highlightWord="Action"
          subtitle="Explore documented site walkthroughs and client highlights detailing how SANIVATE delivers safe, on-schedule industrial solutions across Saudi Arabia."
          align="between"
          theme="dark"
          action={{
            label: "Request Project Proposal",
            onClick: () => onNavigateToContact()
          }}
        />

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-4">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#0798F2] text-white shadow-md shadow-[#0798F2]/30'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 2x2 or 4-col Responsive Grid */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: smoothEase } }}
              onClick={() => onOpenCaseStudy(study)}
              className="group bg-[#062747]/90 rounded-3xl border border-white/10 hover:border-[#0798F2]/50 shadow-xl overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-300"
            >
              <div>
                {/* Video Thumbnail Box with Play Button Overlay */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                  <img
                    src={study.thumbnail}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95"
                  />

                  {/* Dark gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062747] via-black/25 to-black/60 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-white text-xs font-mono font-bold border border-white/15">
                      <Clock className="w-3.5 h-3.5 text-[#0798F2]" />
                      <span>{study.duration}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0798F2]/90 backdrop-blur-md text-white text-xs font-semibold shadow-md">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{study.location.split(',')[0]}</span>
                    </span>
                  </div>

                  {/* Center Glowing Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#0798F2] text-white flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-115 group-hover:bg-[#0584d4] border-2 border-white/40">
                      <Play className="w-6 h-6 sm:w-7 sm:h-7 translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Strip on Image: Key Outcome Metric */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-slate-300 pointer-events-none">
                    <span className="font-bold text-[#0798F2] uppercase tracking-wide">
                      {study.clientSector}
                    </span>
                    <span className="bg-black/60 px-2.5 py-0.5 rounded text-white font-mono text-[11px]">
                      {study.stats[0].label}: {study.stats[0].value}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[#0798F2] transition-colors leading-snug">
                    {study.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                    {study.overview}
                  </p>

                  {/* Mini Director Quote */}
                  <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/5 flex items-start gap-2.5">
                    <Quote className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-300 italic line-clamp-2">
                      &quot;{study.testimonial.quote}&quot;
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-2 flex items-center justify-between border-t border-white/5 mt-2">
                <span className="text-xs font-semibold text-[#0798F2] group-hover:underline flex items-center gap-1">
                  <span>Watch Case Study Video</span>
                  <span aria-hidden="true">▶</span>
                </span>

                <div className="w-8 h-8 rounded-full bg-[#0798F2]/20 border border-[#0798F2]/40 text-[#0798F2] flex items-center justify-center transition-all duration-200 group-hover:bg-[#0798F2] group-hover:text-white">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0798F2]/20 text-[#0798F2] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Need documented contractor qualification dossiers?</p>
              <p className="text-xs text-slate-400">We provide verified logs, third-party inspection certificates, and HSE reports for audit review.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigateToContact()}
            className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#062747] text-xs font-bold transition-transform active:scale-95 shrink-0 cursor-pointer"
          >
            Inquire With Our Team →
          </button>
        </div>

      </div>
    </section>
  );
};
