import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { INDUSTRIES, IndustryItem } from '../../data/industries';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

interface IndustriesSectionProps {
  onNavigate: (page: string, params?: { service?: string }) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryItem | null>(null);

  // Close modal on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedIndustry(null);
    };
    if (selectedIndustry) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedIndustry]);

  return (
    <section className="py-20 bg-white" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="INDUSTRIES WE SERVE"
          title="Building Solutions Across Key Industries"
          highlightWord="Across Key Industries"
          subtitle="We support a wide range of industries with tailored manpower, equipment and material solutions."
          align="between"
          // action={{
          //   label: "Request Industrial Quote",
          //   onClick: () => onNavigate('contact')
          // }}
        />

        {/* 4 Industries Grid with Staggered Entrance */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INDUSTRIES.map((industry) => (
            <motion.div
              key={industry.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: smoothEase } }}
              onClick={() => setSelectedIndustry(industry)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedIndustry(industry);
                }
              }}
              aria-label={`View ${industry.title} details`}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E4EDF5] cursor-pointer flex flex-col justify-end p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0798F2]"
            >
              {/* Background Image with Restrained Zoom */}
              <img
                src={industry.image}
                alt={industry.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Scrim Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#031A30]/95 via-[#031A30]/50 to-transparent pointer-events-none" />

              {/* Content on Image */}
              <div className="relative z-10 flex items-end justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#0798F2] transition-colors leading-snug">
                    {industry.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2 mt-1">
                    {industry.description}
                  </p>
                </div>

                {/* Circular Blue Arrow Button */}
                <div className="w-8 h-8 rounded-full bg-[#0798F2] text-white flex items-center justify-center shadow-md shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Industry Detail Modal Popup */}
        <AnimatePresence>
          {selectedIndustry && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm overflow-y-auto"
              onClick={() => setSelectedIndustry(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: smoothEase }}
                className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header Image with Gradient, Eyebrow & Close Button */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={selectedIndustry.image}
                    alt={selectedIndustry.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#031A30] via-[#031A30]/50 to-transparent" />
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedIndustry(null)}
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  {/* Eyebrow & Title over Image */}
                  <div className="absolute bottom-5 left-6 right-6 z-10 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0798F2]/90 text-white text-[11px] font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
                      <Sparkles className="w-3 h-3" />
                      Industry Sector
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {selectedIndustry.title}
                    </h3>
                  </div>
                </div>

                {/* Modal Body Content */}
                <div className="p-6 sm:p-8 space-y-6">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#0798F2] mb-2">
                      Sector Scope &amp; Industrial Solutions
                    </h4>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                      {selectedIndustry.description}
                    </p>
                  </div>

                  {/* Highlights / Deliverables */}
                  {selectedIndustry.highlights && selectedIndustry.highlights.length > 0 && (
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#062747]">
                        Key Capabilities &amp; Deliverables
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {selectedIndustry.highlights.map((highlight, idx) => (
                          <div 
                            key={idx}
                            className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5 text-xs text-slate-700 font-medium leading-snug"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Compliance & HSE Quality Guarantee */}
                  <div className="p-4 rounded-2xl bg-[#F1F8FD] border border-[#0798F2]/20 flex items-start gap-3 text-xs text-slate-700">
                    <ShieldCheck className="w-5 h-5 text-[#0798F2] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-bold text-[#062747]">Full Compliance with Saudi Aramco &amp; SABIC Standards</p>
                      <p className="text-slate-500 text-[11px]">
                        Every crew mobilization and equipment package is rigorously certified under OSHA, Saudi labor mandates, and Vision 2030 industrial frameworks.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100">
                    <Button
                      variant="secondary"
                      onClick={() => setSelectedIndustry(null)}
                      className="w-full sm:w-auto"
                    >
                      Close
                    </Button>
                    {/* <Button
                      variant="primary"
                      withArrow
                      onClick={() => {
                        setSelectedIndustry(null);
                        onNavigate('contact');
                      }}
                      className="w-full sm:w-auto shadow-md shadow-[#0798F2]/20"
                    >
                      Request Quotation for {selectedIndustry.title}
                    </Button> */}
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
