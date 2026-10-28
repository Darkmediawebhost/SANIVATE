import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, Mail } from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { smoothEase } from '../ui/Motion';

interface FinalCTAProps {
  onNavigate: (page: string) => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigate }) => {
  return (
    <section className="relative bg-[#031A30] text-white py-16 sm:py-20 overflow-hidden">
      
      {/* Background industrial overlay */}
      <div 
        className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('/src/assets/images/hero_industrial_refinery_1792910639649.jpg')` }}
      />

      {/* Decorative Brand Diagonal */}
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#0798F2]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.7, ease: smoothEase }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#062747] to-[#041D35] border border-white/10 shadow-2xl"
        >
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-3 text-center lg:text-left">
            <p className="text-xs font-bold tracking-widest uppercase text-[#0798F2]">
              LET&apos;S WORK TOGETHER
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Get in touch with our team for manpower, equipment, materials, camp setup, scrap management or WQT services across Saudi Arabia.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <a href={`tel:${SITE_CONFIG.contact.phone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.phoneFormatted}</span>
              </a>
              <span className="text-white/30">•</span>
              <a href={`tel:${SITE_CONFIG.contact.officePhone}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <PhoneCall className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.officePhone}</span>
              </a>
              <span className="text-white/30">•</span>
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              {SITE_CONFIG.contact.secondaryEmail && (
                <>
                  <span className="text-white/30">•</span>
                  <a href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`} className="flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#0798F2]" />
                    <span>{SITE_CONFIG.contact.secondaryEmail}</span>
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => onNavigate('contact')}
              className="group flex items-center gap-3 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-[#062747] font-bold text-base shadow-xl transition-colors cursor-pointer"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-5 h-5 text-[#0798F2] transition-transform duration-200 group-hover:translate-x-1" />
            </motion.button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
