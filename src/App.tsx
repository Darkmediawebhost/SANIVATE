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

  // Parse route from hash or pathname + search parameters
  const parseCurrentUrl = () => {
    // 1. Check hash first (e.g. #/services, #about, #/services?service=equipment)
    const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
    let hashRoute = '';
    let hashQuery = '';

    if (rawHash) {
      const qIndex = rawHash.indexOf('?');
      if (qIndex !== -1) {
        hashRoute = rawHash.substring(0, qIndex).replace(/^\//, '').toLowerCase();
        hashQuery = rawHash.substring(qIndex + 1);
      } else {
        hashRoute = rawHash.replace(/^\//, '').toLowerCase();
      }
    }

    // 2. Check pathname as fallback (e.g. /services, /about, /projects)
    const rawPath = window.location.pathname.replace(/^\//, '').replace(/\/$/, '').toLowerCase();

    // Determine final route key
    const route = hashRoute || rawPath || 'home';

    // 3. Extract search parameters (combine from search and hash query)
    const params = new URLSearchParams(window.location.search);
    if (hashQuery) {
      const hashParams = new URLSearchParams(hashQuery);
      hashParams.forEach((val, key) => params.set(key, val));
    }

    const serviceParam = params.get('service') || undefined;
    const sectionParam = params.get('section') || undefined;

    if (serviceParam) {
      setSelectedServiceId(serviceParam);
    }
    if (sectionParam) {
      setTargetSection(sectionParam);
    }

    // Map route string to valid page
    if (route.startsWith('about')) {
      setCurrentPage('about');
      if (route.includes('#') || sectionParam) {
        setTargetSection(sectionParam || route.split('#')[1]);
      }
    } else if (route.startsWith('services')) {
      setCurrentPage('services');
    } else if (route.startsWith('projects')) {
      setCurrentPage('projects');
    } else if (route.startsWith('contact')) {
      setCurrentPage('contact');
    } else {
      setCurrentPage('home');
      if (sectionParam) {
        setTargetSection(sectionParam);
      } else if (rawHash && !['about', 'services', 'projects', 'contact'].includes(rawHash)) {
        // If hash is an in-page anchor like #vision-2030 or #industries on homepage
        setTargetSection(rawHash);
      }
    }
  };

  // Sync initial URL on mount and handle both popstate and hashchange (browser back/forward & refresh)
  useEffect(() => {
    parseCurrentUrl();

    const handleLocationChange = () => {
      parseCurrentUrl();
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateTo = (page: string, params?: { service?: string; section?: string }) => {
    setCurrentPage(page);
    setTargetSection(params?.section);
    if (params?.service) {
      setSelectedServiceId(params.service);
    }

    const searchParams = new URLSearchParams();
    if (params?.service) searchParams.set('service', params.service);
    if (params?.section) searchParams.set('section', params.section);
    const queryString = searchParams.toString();

    // Use hash-based navigation so page refresh NEVER causes 404 on any static server or hosting
    const targetHash = (page === 'home' && !params?.section && !params?.service)
      ? ''
      : `#/${page}${queryString ? `?${queryString}` : ''}`;

    // Keep the base pathname and append the hash route
    const newUrl = targetHash ? `${window.location.pathname}${targetHash}` : window.location.pathname;

    window.history.pushState({ page, params }, '', newUrl);

    // Scroll to top if not scrolling to an in-page anchor
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
