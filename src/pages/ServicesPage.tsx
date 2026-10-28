import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SERVICES } from '../data/services';
import { smoothEase, AnimatedWords } from '../components/ui/Motion';

interface ServicesPageProps {
  onNavigate: (page: string, params?: { service?: string }) => void;
  selectedServiceId?: string;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  selectedServiceId
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (selectedServiceId) {
      const el = document.getElementById(`service-detail-${selectedServiceId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceId]);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'manpower', label: 'Manpower Solutions' },
    { id: 'equipment', label: 'Equipment Services' },
    { id: 'camps', label: 'Camp Setup' },
    { id: 'materials', label: 'Industrial Materials' },
    { id: 'scrap', label: 'Scrap Management' },
    { id: 'wqt', label: 'WQT Services' }
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-white"
    >
      {/* Services Hero */}
      <section className="relative bg-gradient-to-b from-[#031A30] via-[#062747] to-[#041D35] text-white py-20 lg:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
          style={{ backgroundImage: `url('/assets/images/hero_industrial_refinery_1792910639649.jpg')` }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: smoothEase }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0798F2]/20 border border-[#0798F2]/30 text-[#0798F2] text-xs font-bold tracking-widest uppercase"
            >
              OUR CAPABILITIES
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              <AnimatedWords
                text="Industrial Services. Practical Solutions."
                highlightWord="Practical"
              />
            </h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: smoothEase }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal"
            >
              We deliver end-to-end industrial support services designed to help Saudi mega-projects operate safely, efficiently, and with zero operational disruption.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: smoothEase }}
              className="pt-2"
            >
              <Button
                variant="primary"
                withArrow
                onClick={() => onNavigate('contact')}
              >
                Request a Project Proposal
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="sticky top-[61px] z-30 bg-white/95 backdrop-blur-md border-b border-[#E4EDF5] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'bg-[#F1F8FD] text-slate-600 hover:bg-slate-200/70 hover:text-[#062747]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Deep-Dive */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          <AnimatePresence mode="wait">
            {filteredServices.map((service, index) => {
              const isReversed = index % 2 !== 0;

              return (
                <motion.div
                  key={service.id}
                  id={`service-detail-${service.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, ease: smoothEase }}
                  className="scroll-mt-32 p-6 sm:p-8 lg:p-10 rounded-3xl bg-[#F1F8FD]/40 border border-[#E4EDF5] hover:border-[#0798F2]/30 transition-all duration-300"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                    
                    {/* Visual Column (5 cols) */}
                    <div className={`lg:col-span-5 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 group">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-[320px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#062747]/80 via-transparent to-transparent pointer-events-none" />
                        
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#0798F2] bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded">
                            Certified Deployment
                          </span>
                          <h4 className="text-lg font-bold mt-1 text-white">
                            {service.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Text & Scope Column (7 cols) */}
                    <div className={`lg:col-span-7 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                      
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#0798F2]/10 text-[#0798F2] text-xs font-bold uppercase tracking-wider">
                        <span>Service 0{index + 1}</span>
                        <span>•</span>
                        <span>{service.category.toUpperCase()}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062747] tracking-tight">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {service.fullDescription}
                      </p>

                      {/* Scope Items */}
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                          Key Scope &amp; Deliverables
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {service.scope.map((item, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Operational Highlights */}
                      <div className="p-4 rounded-xl bg-white border border-[#E4EDF5] space-y-1.5 text-xs text-slate-600">
                        <p className="font-bold text-[#062747]">Operational Compliance:</p>
                        <ul className="list-disc list-inside space-y-1 text-slate-500">
                          {service.capabilities.slice(0, 2).map((cap, ci) => (
                            <li key={ci}>{cap}</li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-2 flex flex-wrap items-center gap-4">
                        <Button
                          variant="primary"
                          withArrow
                          onClick={() => onNavigate('contact', { service: service.id })}
                        >
                          Request This Service
                        </Button>

                        {/* <Button
                          variant="secondary"
                          onClick={() => onNavigate('contact', { service: service.id })}
                        >
                          Download Scope Sheet (RFQ)
                        </Button> */}
                      </div>

                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#062747] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Need a Custom Multi-Service Package?
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm sm:text-base">
            We regularly bundle manpower supply, mobile equipment, and turnkey camp accommodations for large turnarounds and Greenfield installations.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              withArrow
              onClick={() => onNavigate('contact')}
            >
              Get a Bundled Project Proposal
            </Button>
          </div>
        </div>
      </section>

    </motion.div>
  );
};
