import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, ShieldCheck, ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

// Dynamically import all logos from the 3 Partners folders
const group1Modules = import.meta.glob<{ default: string }>('/src/assets/Partners/1/*.webp', { eager: true });
const group2Modules = import.meta.glob<{ default: string }>('/src/assets/Partners/2/*.webp', { eager: true });
const group3Modules = import.meta.glob<{ default: string }>('/src/assets/Partners/3/*.webp', { eager: true });

const sortByFileNameNumber = (modules: Record<string, { default: string }>) => {
  return Object.entries(modules)
    .sort(([pathA], [pathB]) => {
      const numA = parseInt(pathA.match(/(\d+)\.webp$/)?.[1] || '0', 10);
      const numB = parseInt(pathB.match(/(\d+)\.webp$/)?.[1] || '0', 10);
      return numA - numB;
    })
    .map(([_, mod]) => mod.default);
};

const partnerLogos1 = sortByFileNameNumber(group1Modules);
const partnerLogos2 = sortByFileNameNumber(group2Modules);
const partnerLogos3 = sortByFileNameNumber(group3Modules);

interface OurPartnersProps {
  onNavigate?: (page: string, params?: { service?: string; section?: string }) => void;
}

export const OurPartners: React.FC<OurPartnersProps> = ({ onNavigate }) => {
  // Ensure enough items in each row for a seamless continuous loop
  const row1 = [...partnerLogos1, ...partnerLogos1];
  // Group 2 has 9 items, repeat 4 times so row length matches nicely
  const row2 = [...partnerLogos2, ...partnerLogos2, ...partnerLogos2, ...partnerLogos2];
  const row3 = [...partnerLogos3, ...partnerLogos3];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F1F8FD]/60 via-white to-[#F1F8FD]/40 border-t border-[#E4EDF5] overflow-hidden" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-16">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <SectionHeading
            eyebrow="STRATEGIC COLLABORATION"
            title="Our Trusted Partners"
            highlightWord="Partners"
            subtitle="Powering Saudi Arabia's mega-infrastructure and industrial complexes alongside world-class EPC contractors and energy pioneers."
            align="left"
          />

          {/* Quick Metrics Pills */}
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E4EDF5] shadow-2xs text-xs font-semibold text-slate-700">
              <Handshake className="w-4 h-4 text-[#0798F2]" />
              <span>48+ Industry Partners</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#E4EDF5] shadow-2xs text-xs font-semibold text-slate-700">
              <Award className="w-4 h-4 text-[#0798F2]" />
              <span>Aramco &amp; SABIC Standards</span>
            </div>
          </div>
        </div>

      </div>

      {/* 3 Infinite Smooth Marquee Rows */}
      <div className="relative w-full space-y-4 sm:space-y-6">
        
        {/* Left & Right Gradient Fog Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/80 to-transparent z-20 pointer-events-none" />

        {/* Row 1: Leftward Scrolling (Group 1 - 18 Logos) */}
        <div className="marquee-container overflow-hidden py-1">
          <div className="animate-marquee flex items-center gap-4 sm:gap-6">
            {row1.map((logoUrl, idx) => (
              <div
                key={`row1-${idx}`}
                className="h-20 sm:h-24 min-w-[140px] sm:min-w-[180px] max-w-[200px] px-5 py-3 bg-white rounded-2xl border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 group cursor-pointer"
              >
                <img
                  src={logoUrl}
                  alt="Industrial Partner Logo"
                  className="max-h-10 sm:max-h-12 w-auto max-w-[110px] sm:max-w-[145px] object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Reverse Scrolling (Group 2 - 9 Logos) */}
        <div className="marquee-container overflow-hidden py-1">
          <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-6">
            {row2.map((logoUrl, idx) => (
              <div
                key={`row2-${idx}`}
                className="h-20 sm:h-24 min-w-[140px] sm:min-w-[180px] max-w-[200px] px-5 py-3 bg-white rounded-2xl border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 group cursor-pointer"
              >
                <img
                  src={logoUrl}
                  alt="Industrial Partner Logo"
                  className="max-h-10 sm:max-h-12 w-auto max-w-[110px] sm:max-w-[145px] object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 3: Leftward Fast Scrolling (Group 3 - 21 Logos) */}
        <div className="marquee-container overflow-hidden py-1">
          <div className="animate-marquee-fast flex items-center gap-4 sm:gap-6">
            {row3.map((logoUrl, idx) => (
              <div
                key={`row3-${idx}`}
                className="h-20 sm:h-24 min-w-[140px] sm:min-w-[180px] max-w-[200px] px-5 py-3 bg-white rounded-2xl border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center shrink-0 group cursor-pointer"
              >
                <img
                  src={logoUrl}
                  alt="Industrial Partner Logo"
                  className="max-h-10 sm:max-h-12 w-auto max-w-[110px] sm:max-w-[145px] object-contain transition-all duration-300 opacity-80 group-hover:opacity-100 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Credibility Strip with Vision 2030 Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-16">
        <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#E4EDF5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#F1F8FD] flex items-center justify-center shrink-0 border border-[#0798F2]/20">
              <ShieldCheck className="w-6 h-6 text-[#0798F2]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#062747]">
                Proven Qualification Across Aramco, SABIC, SEC &amp; Royal Commission Sites
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Full compliance with Saudi Labor Regulations, OSHA safety guidelines, and stringent vendor registration protocols.
              </p>
            </div>
          </div>

          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0798F2] hover:bg-[#0584d4] text-white text-xs font-bold transition-all shadow-sm shrink-0 whitespace-nowrap cursor-pointer"
            >
              <span>Become a Partner</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

    </section>
  );
};
