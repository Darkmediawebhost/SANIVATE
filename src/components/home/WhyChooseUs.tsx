import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, Award, Clock, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { SITE_CONFIG } from '../../data/site';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

interface WhyChooseUsProps {
  onNavigate: (page: string) => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onNavigate }) => {
  const cards = [
    {
      id: 'safety',
      title: 'Safety First',
      description: 'A culture of safety in everything we do.',
      icon: <ShieldCheck className="w-6 h-6 text-[#0798F2]" />,
    },
    {
      id: 'team',
      title: 'Experienced Team',
      description: 'Skilled and dedicated professionals.',
      icon: <Users className="w-6 h-6 text-[#0798F2]" />,
    },
    {
      id: 'quality',
      title: 'Quality Standards',
      description: 'Committed to international standards.',
      icon: <Award className="w-6 h-6 text-[#0798F2]" />,
    },
    {
      id: 'delivery',
      title: 'On-Time Delivery',
      description: 'Reliable support across all project stages.',
      icon: <Clock className="w-6 h-6 text-[#0798F2]" />,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-slate-900" id="why-choose-us">
      
      {/* 1. Full Panoramic Industrial Refinery Background (Newly Generated High-Res Asset) */}
      <div className="relative w-full min-h-[580px] lg:min-h-[620px] flex items-center py-12 lg:py-16">
        
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center pointer-events-none"
          style={{ 
            backgroundImage: `url('/src/assets/images/why_choose_refinery_engineer_1792915875039.jpg')`,
            backgroundPosition: 'center 40%'
          }}
        />

        {/* Ambient Overlay for depth and text contrast */}
        <div className="absolute inset-0 bg-slate-950/20 backdrop-brightness-[0.92] pointer-events-none" />

        {/* 2. Center Industrial Engineer with Exact SANIVATE Logo on Uniform */}
        <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10 pb-0">
          <div className="relative hidden md:flex flex-col items-center">
            {/* Exact SANIVATE Logo Branding on Engineer Uniform Back */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: smoothEase }}
              className="absolute top-[32%] sm:top-[34%] z-20 px-4 py-1.5 rounded-md bg-[#062747]/95 border border-[#0798F2]/40 shadow-xl flex items-center gap-2"
            >
              <img
                src={SITE_CONFIG.logoUrl}
                alt="SANIVATE"
                className="h-5 sm:h-6 w-auto object-contain filter brightness-110"
              />
              <span className="text-white font-extrabold text-xs tracking-wider uppercase">
                CERTIFIED SITE PERSONNEL
              </span>
            </motion.div>
          </div>
        </div>

        {/* 3. Main Container for Left Polygon Card and Right Floating Cards */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Angled Deep-Navy Polygon Card matching image reference */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, ease: smoothEase }}
              className="lg:col-span-5 relative"
            >
              {/* Outer Cyan Accent Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0798F2]/30 to-sky-400/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

              {/* Main Navy Box with Signature Polygonal Arrow Cutout on Right */}
              <div className="relative bg-[#062747]/95 backdrop-blur-md text-white p-7 sm:p-10 rounded-3xl border border-[#0798F2]/40 shadow-2xl">
                
                {/* Eyebrow with Blue Accent Line */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="w-8 h-1 bg-[#0798F2] rounded-full" />
                  <p className="text-xs font-bold tracking-widest uppercase text-white/90">
                    WHY CHOOSE SANIVATE
                  </p>
                </div>

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-white mb-4">
                  Your Trusted Partner <br />
                  <span className="text-white">in </span>
                  <span className="text-[#0798F2]">Industrial Growth</span>
                </h2>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  We are committed to delivering safe, reliable and efficient solutions that help our clients achieve their project goals with confidence.
                </p>

                {/* White Action Button matching screenshot */}
                <div>
                  <button
                    onClick={() => onNavigate('about')}
                    className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-[#062747] text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 cursor-pointer"
                  >
                    <span>Learn More About Us</span>
                    <ArrowRight className="w-4 h-4 text-[#0798F2] transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

                {/* Decorative Right Chevron Accent on Desktop */}
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-12 bg-[#0798F2] clip-path-chevron opacity-80 pointer-events-none" />
              </div>
            </motion.div>

            {/* Spacer for center engineer visual on desktop */}
            <div className="hidden lg:block lg:col-span-2" />

            {/* Right Column: 2x2 Floating White Cards matching reference screenshot */}
            <motion.div 
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {cards.map((card) => (
                <motion.div
                  key={card.id}
                  variants={staggerItemVariants}
                  whileHover={{ y: -5, transition: { duration: 0.2, ease: smoothEase } }}
                  className="bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border border-white/60 hover:border-[#0798F2]/40 transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    {/* Circular Blue Icon Badge */}
                    <div className="w-11 h-11 rounded-full bg-[#F1F8FD] border border-[#0798F2]/20 text-[#0798F2] flex items-center justify-center shrink-0 shadow-inner">
                      {card.icon}
                    </div>

                    <h3 className="text-base font-bold text-[#062747] leading-tight">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed pl-1">
                    {card.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
