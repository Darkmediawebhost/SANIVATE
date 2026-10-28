import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ContactPage } from './pages/ContactPage';
import { SearchModal } from './components/ui/SearchModal';
import { LegalModal } from './components/ui/LegalModal';
import { ScrollToTop } from './components/ui/ScrollToTop';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [targetSection, setTargetSection] = useState<string | undefined>(undefined);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Sync initial URL on mount and handle popstate (browser back/forward)
  useEffect(() => {
    const parsePath = () => {
      const path = window.location.pathname.replace(/^\//, '');
      const params = new URLSearchParams(window.location.search);
      const serviceParam = params.get('service');
      const sectionParam = params.get('section');

      if (serviceParam) {
        setSelectedServiceId(serviceParam);
      }

      if (path === 'about') {
        setCurrentPage('about');
      } else if (path === 'services') {
        setCurrentPage('services');
      } else if (path === 'projects') {
        setCurrentPage('projects');
      } else if (path === 'contact') {
        setCurrentPage('contact');
      } else {
        setCurrentPage('home');
        if (sectionParam) {
          setTargetSection(sectionParam);
        }
      }
    };

    parsePath();
    window.addEventListener('popstate', parsePath);
    return () => window.removeEventListener('popstate', parsePath);
  }, []);

  const navigateTo = (page: string, params?: { service?: string; section?: string }) => {
    setCurrentPage(page);
    setTargetSection(params?.section);
    if (params?.service) {
      setSelectedServiceId(params.service);
    }

    // Update browser URL cleanly
    let newPath = '/';
    if (page === 'about') newPath = '/about';
    else if (page === 'services') newPath = '/services';
    else if (page === 'projects') newPath = '/projects';
    else if (page === 'contact') newPath = '/contact';

    const searchParams = new URLSearchParams();
    if (params?.service) searchParams.set('service', params.service);
    if (params?.section) searchParams.set('section', params.section);
    const queryString = searchParams.toString();
    const finalUrl = queryString ? `${newPath}?${queryString}` : newPath;

    window.history.pushState({}, '', finalUrl);

    // Scroll to top if not scrolling to anchor
    if (!params?.section) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 selection:bg-[#0798F2]/20 selection:text-[#062747]">
      {/* Shared Site Header */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1 w-full overflow-hidden">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <HomePage
                onNavigate={navigateTo}
                targetSection={targetSection}
              />
            </motion.div>
          )}
          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <AboutPage
                onNavigate={navigateTo}
                targetSection={targetSection}
              />
            </motion.div>
          )}
          {currentPage === 'services' && (
            <motion.div
              key="services"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ServicesPage
                onNavigate={navigateTo}
                selectedServiceId={selectedServiceId}
              />
            </motion.div>
          )}
          {currentPage === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectsPage
                onNavigate={navigateTo}
              />
            </motion.div>
          )}
          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ContactPage
                initialServiceId={selectedServiceId}
                initialLocation={targetSection}
                onNavigate={navigateTo}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Shared Site Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Global Scroll to Top Button with Dynamic Progress Indicator */}
      <ScrollToTop />

      {/* Interactive Global Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateTo}
      />

      {/* Legal Notice Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
