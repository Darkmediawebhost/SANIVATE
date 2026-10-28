import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

export const ClientLogos: React.FC = () => {
  return (
    <section className="py-16 bg-[#F1F8FD]/50 border-t border-[#E4EDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR CLIENTS"
          title="Trusted by Leading Companies"
          highlightWord="Trusted"
          subtitle="We are proud to support contractor teams working on major installations and industrial complexes across the Kingdom."
          align="between"
        />

        {/* Logos Grid with Staggered Entrance */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-6 lg:gap-8 items-center justify-center pt-2"
        >
          
          {/* 1. Aramco style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <span className="text-xl font-black tracking-tight text-slate-800 group-hover:text-[#062747] transition-colors font-sans">
              aramco
            </span>
            <div className="w-8 h-1 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full mt-1 opacity-80" />
          </motion.div>

          {/* 2. SABIC style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex flex-col items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <span className="text-lg font-extrabold tracking-wide text-slate-800 group-hover:text-[#0798F2] transition-colors font-sans uppercase">
              SABIC
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-widest">سابك</span>
          </motion.div>

          {/* 3. Samsung Engineering style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <div className="px-3 py-1 rounded-full border border-slate-300 text-xs font-black tracking-wider text-slate-800 group-hover:border-[#0798F2] group-hover:text-[#062747] uppercase transition-colors">
              SAMSUNG
            </div>
          </motion.div>

          {/* 4. Petrogas style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-center justify-center gap-1.5 p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-500 to-[#0798F2]" />
            <span className="text-sm font-bold tracking-tight text-slate-800 group-hover:text-[#062747] transition-colors uppercase">
              PETROGAS
            </span>
          </motion.div>

          {/* 5. L&T (Larsen & Toubro) style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <div className="w-9 h-9 rounded-full border-2 border-slate-700 flex items-center justify-center font-black text-sm text-slate-800 group-hover:border-[#0798F2] group-hover:text-[#0798F2] transition-colors">
              L&amp;T
            </div>
          </motion.div>

          {/* 6. Hyundai style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <span className="text-sm font-black tracking-widest text-slate-800 group-hover:text-[#062747] uppercase italic transition-colors">
              HYUNDAI
            </span>
          </motion.div>

          {/* 7. Bechtel style */}
          <motion.div 
            variants={staggerItemVariants}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="flex items-center justify-center p-4 rounded-xl bg-white border border-[#E4EDF5] shadow-xs hover:border-[#0798F2]/40 transition-colors h-20 group"
          >
            <span className="text-base font-black tracking-tight text-slate-800 group-hover:text-[#062747] uppercase transition-colors">
              BECHTEL
            </span>
          </motion.div>

        </motion.div>

        {/* Saudi Vision 2030 National Alignment Badge */}
        <div className="mt-10 pt-6 border-t border-[#E4EDF5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-3">
            <img
              src="/assets/vision-2030.png"
              alt="Saudi Vision 2030"
              className="h-8 w-auto object-contain"
            />
            <span className="font-semibold text-slate-700">
              Supporting the Kingdom&apos;s National Transformation &amp; Industrial Infrastructure Goals
            </span>
          </div>
          <span className="text-[11px] font-medium text-[#0798F2] bg-white px-3 py-1 rounded-full border border-[#E4EDF5] shadow-2xs">
            🇸🇦 Licensed KSA Foreign Investment Enterprise
          </span>
        </div>

      </div>
    </section>
  );
};
