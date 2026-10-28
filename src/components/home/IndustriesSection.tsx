import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { INDUSTRIES } from '../../data/industries';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

interface IndustriesSectionProps {
  onNavigate: (page: string, params?: { service?: string }) => void;
}

export const IndustriesSection: React.FC<IndustriesSectionProps> = ({ onNavigate }) => {
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
          action={{
            label: "Request Industrial Quote",
            onClick: () => onNavigate('contact')
          }}
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
              onClick={() => onNavigate('contact')}
              className="group relative h-64 sm:h-72 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-[#E4EDF5] cursor-pointer flex flex-col justify-end p-5"
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
                <div className="w-8 h-8 rounded-full bg-[#0798F2] text-white flex items-center justify-center shadow shrink-0 transition-transform duration-200 group-hover:scale-110">
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
