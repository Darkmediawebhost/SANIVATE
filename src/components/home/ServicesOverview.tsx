import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Truck, Home, Layers, Recycle, CheckCircle2 } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { SERVICES, ServiceItem } from '../../data/services';
import { smoothEase, staggerContainerVariants, staggerItemVariants } from '../ui/Motion';

interface ServicesOverviewProps {
  onNavigate: (page: string, params?: { service?: string }) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onNavigate }) => {
  const getIcon = (name: ServiceItem['iconName']) => {
    switch (name) {
      case 'Users':
        return <Users className="w-5 h-5 text-white" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-white" />;
      case 'Home':
        return <Home className="w-5 h-5 text-white" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-white" />;
      case 'Recycle':
        return <Recycle className="w-5 h-5 text-white" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-white" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section className="py-20 bg-white" id="services-overview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Framer Motion */}
        <SectionHeading
          eyebrow="OUR SERVICES"
          title="Comprehensive Industrial Support Services"
          highlightWord="Services"
          subtitle="We deliver end-to-end solutions to support your projects with skilled manpower, quality equipment, reliable materials and complete site support."
          align="between"
          // action={{
          //   label: "View All Services",
          //   onClick: () => onNavigate('services')
          // }}
        />

        {/* 6 Services Grid with Staggered Viewport Entrance */}
        <motion.div 
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={staggerItemVariants}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: smoothEase } }}
              onClick={() => onNavigate('services', { service: service.id })}
              className="group relative bg-[#F1F8FD]/50 hover:bg-white rounded-2xl border border-[#E4EDF5] hover:border-[#0798F2]/40 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
            >
              <div>
                {/* Image Container with Restrained Zoom */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Circular Icon Badge */}
                  <div className="absolute bottom-3 left-4 w-10 h-10 rounded-full bg-[#0798F2] border-2 border-white flex items-center justify-center shadow-md transition-transform duration-200 group-hover:scale-110">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5 sm:p-6 pb-2">
                  <h3 className="text-lg sm:text-xl font-bold text-[#062747] group-hover:text-[#0798F2] transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="p-5 sm:p-6 pt-2 flex items-center justify-between border-t border-slate-100/80 mt-4">
                <span className="text-xs font-semibold text-slate-500 group-hover:text-[#0798F2] transition-colors">
                  Explore Capabilities
                </span>
                
                {/* Circular Blue Action Button */}
                <div className="w-8 h-8 rounded-full bg-[#0798F2] text-white flex items-center justify-center shadow transition-all duration-200 group-hover:bg-[#0584d4] group-hover:scale-110">
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
