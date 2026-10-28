import React, { useState, useEffect } from 'react';
import { Hero } from '../components/home/Hero';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { IndustriesSection } from '../components/home/IndustriesSection';
import { WorkProcess } from '../components/home/WorkProcess';
import { ProjectShowcase } from '../components/home/ProjectShowcase';
import { CaseStudiesSection } from '../components/home/CaseStudiesSection';
import { OurPartners } from '../components/home/OurPartners';
import { FinalCTA } from '../components/home/FinalCTA';
import { CaseStudyModal } from '../components/ui/CaseStudyModal';
import { CaseStudy } from '../data/caseStudies';

interface HomePageProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
  targetSection?: string;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, targetSection }) => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [targetSection]);

  const handleNavigateToQuote = (serviceCategory: string) => {
    // Map case study category to service id
    let mappedService = 'manpower';
    if (serviceCategory === 'equipment') mappedService = 'equipment';
    else if (serviceCategory === 'camps') mappedService = 'camps';
    else if (serviceCategory === 'quality') mappedService = 'wqt';

    onNavigate('contact', { service: mappedService });
  };

  return (
    <div className="w-full">
      <Hero onNavigate={onNavigate} />
      <ServicesOverview onNavigate={onNavigate} />
      
      <WhyChooseUs onNavigate={onNavigate} />
      <IndustriesSection onNavigate={onNavigate} />
      <WorkProcess />
      <ProjectShowcase onNavigate={onNavigate} />
      
      {/* Video Case Studies & Testimonials Section */}
      <CaseStudiesSection
        onOpenCaseStudy={(study) => setSelectedCaseStudy(study)}
        onNavigateToContact={(service) => onNavigate('contact', { service })}
      />

      {/* 3-Row Continuous Marquee Industrial Partners Section */}
      <OurPartners onNavigate={onNavigate} />
      <FinalCTA onNavigate={onNavigate} />

      {/* Interactive Case Study & Video Testimonial Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onNavigateToQuote={handleNavigateToQuote}
      />
    </div>
  );
};
