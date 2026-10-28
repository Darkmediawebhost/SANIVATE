import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, FileSearch, CalendarCheck, ShieldCheck, Headphones } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

export const WorkProcess: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <FileSearch className="w-5 h-5 text-[#0798F2]" />,
      title: "Understand Your Needs",
      description: "We analyse your project requirements, technical specifications and timeline."
    },
    {
      number: "02",
      icon: <CalendarCheck className="w-5 h-5 text-[#0798F2]" />,
      title: "Plan & Prepare",
      description: "We create a customized solution, source verified assets, and prepare HSE documentation."
    },
    {
      number: "03",
      icon: <ShieldCheck className="w-5 h-5 text-[#0798F2]" />,
      title: "Execute with Excellence",
      description: "Our certified team delivers on site with safety, precision, and verified quality."
    },
    {
      number: "04",
      icon: <Headphones className="w-5 h-5 text-[#0798F2]" />,
      title: "Ongoing Support",
      description: "We provide continuous coordination, maintenance, and responsive support."
    }
  ];

  return (
    <section className="py-20 bg-[#F1F8FD]/60 border-y border-[#E4EDF5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeading
          eyebrow="OUR WORK PROCESS"
          title="Simple. Efficient. Reliable."
          highlightWord="Efficient. Reliable."
          subtitle="We follow a structured process to ensure smooth execution and complete client satisfaction."
          align="between"
        />

        {/* 4 Steps Row with Staggered Entrance */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={staggerItemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2, ease: smoothEase } }}
              className="relative bg-white rounded-2xl p-6 border border-[#E4EDF5] shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Number & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-[#0798F2] tracking-tight">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#F1F8FD] border border-[#0798F2]/20 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#062747] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 font-medium">
                <span>Phase {step.number} of 04</span>
                {index < steps.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-[#0798F2] hidden lg:block" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
