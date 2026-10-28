import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ArrowRight, Phone, Mail, MapPin, Clock, 
  ChevronDown, ChevronRight, Users, Truck, Home, Layers, Recycle, 
  CheckCircle2, Sparkles, Building2, ExternalLink
} from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { SERVICES } from '../../data/services';
import { smoothEase } from '../ui/Motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesExpanded, setIsMobileServicesExpanded] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const servicesDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Keyboard shortcut listener (ESC to close menu or dropdown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        if (isServicesDropdownOpen) setIsServicesDropdownOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen, isServicesDropdownOpen]);

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsServicesDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsServicesDropdownOpen(false);
    }, 250);
  };

  const navLinks = [
    { label: 'Home', page: 'home', section: undefined },
    { label: 'About Us', page: 'about', section: undefined },
    { label: 'Services', page: 'services', section: undefined, hasDropdown: true },
    // { label: 'Industries', page: 'home', section: 'industries' },
    { label: 'Projects', page: 'projects', section: undefined },
    // { label: 'Case Studies', page: 'home', section: 'case-studies' },
    { label: 'Contact', page: 'contact', section: undefined },
  ];

  const serviceBadges: Record<string, string> = {
    manpower: 'Certified Workforce',
    equipment: 'Fleet & Cranes',
    camps: 'Turnkey Living',
    materials: 'Piping & Steel',
    scrap: 'Industrial Recycling',
    wqt: 'ASME / AWS Testing',
  };

  const handleLinkClick = (page: string, section?: string, service?: string) => {
    onNavigate(page, { section, service });
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-4 h-4 text-[#0798F2]" />;
      case 'Truck': return <Truck className="w-4 h-4 text-[#0798F2]" />;
      case 'Home': return <Home className="w-4 h-4 text-[#0798F2]" />;
      case 'Layers': return <Layers className="w-4 h-4 text-[#0798F2]" />;
      case 'Recycle': return <Recycle className="w-4 h-4 text-[#0798F2]" />;
      case 'CheckCircle2': return <CheckCircle2 className="w-4 h-4 text-[#0798F2]" />;
      default: return <CheckCircle2 className="w-4 h-4 text-[#0798F2]" />;
    }
  };

  return (
    <>
      {/* 1. Top Utility Micro-Bar (Corporate Industrial Contact Strip) */}
      <div className="hidden lg:block bg-[#031A30] text-slate-300 text-xs py-2 border-b border-[#062747]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Left Location & Office Landline */}
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>Al Dana Dist., Al-Jubail, Saudi Arabia</span>
              </span>
              <span className="text-white/20">|</span>
              <a 
                href={`tel:${SITE_CONFIG.contact.officePhone}`} 
                className="flex items-center gap-1.5 hover:text-[#0798F2] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>Tel: {SITE_CONFIG.contact.officePhone}</span>
              </a>
            </div>

            {/* Right Fast Contact & Direct Line */}
            <div className="flex items-center gap-5">
              <a 
                href={`tel:${SITE_CONFIG.contact.phone}`} 
                className="flex items-center gap-1.5 hover:text-[#0798F2] font-medium transition-colors"
                title="Direct Phone"
              >
                <Phone className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.phoneFormatted}</span>
              </a>
              <span className="text-white/20">|</span>
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`} 
                className="flex items-center gap-1.5 hover:text-[#0798F2] transition-colors"
                title="Admin & RFQ"
              >
                <Mail className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.email}</span>
              </a>
              {SITE_CONFIG.contact.secondaryEmail && (
                <>
                  <span className="text-white/20 hidden xl:inline">|</span>
                  <a 
                    href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`} 
                    className="hidden xl:flex items-center gap-1.5 hover:text-[#0798F2] transition-colors"
                    title="Management"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#0798F2]" />
                    <span>{SITE_CONFIG.contact.secondaryEmail}</span>
                  </a>
                </>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* 2. Main Sticky Navigation Bar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-[#F7F7F7] backdrop-blur-md border-b border-slate-200/80 ${
          isScrolled ? 'shadow-sm py-2.5' : 'py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            
            {/* Zone 1: Official Brand Logo with Preserved Proportions */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleLinkClick('home')}
                className="flex items-center focus:outline-none cursor-pointer"
                aria-label="SANIVATE Home"
              >
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt="SANIVATE"
                  className="h-10 sm:h-11 w-auto object-contain"
                />
              </button>
            </div>

            {/* Zone 2: Desktop Navigation Links with Large Enterprise Services Mega Dropdown */}
            <nav className="hidden lg:flex items-center gap-7 xl:gap-9 text-[15px] font-semibold text-slate-700">
              {navLinks.map((link) => {
                const isActive = currentPage === link.page && !link.section;

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.label}
                      ref={servicesDropdownRef}
                      className="relative"
                      onMouseEnter={handleDropdownEnter}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesDropdownOpen(prev => !prev);
                        }}
                        className={`relative flex items-center gap-1.5 py-2.5 transition-colors cursor-pointer hover:text-[#0798F2] ${
                          isActive || isServicesDropdownOpen ? 'text-[#0798F2] font-bold' : 'text-slate-700'
                        }`}
                        aria-expanded={isServicesDropdownOpen}
                      >
                        <span>{link.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180 text-[#0798F2]' : 'text-slate-400'}`} />
                        {(isActive || isServicesDropdownOpen) && (
                          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0798F2] rounded-full" />
                        )}
                      </button>

                      {/* Large, Clean, Premium Enterprise Mega Dropdown Menu */}
                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.16, ease: 'easeOut' }}
                            className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 w-[1060px] xl:w-[1160px] max-w-[calc(100vw-2rem)]"
                          >
                            <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.14)] border border-slate-200/90 p-6 lg:p-7 overflow-hidden">
                              
                              {/* Dropdown Header Bar */}
                             
                              {/* 6 Services in a Spacious 3-Column x 2-Row Visual Grid */}
                              <div className="grid grid-cols-3 gap-4 lg:gap-5">
                                {SERVICES.map((srv) => (
                                  <button
                                    key={srv.id}
                                    onClick={() => handleLinkClick('services', undefined, srv.id)}
                                    className="group text-left p-3 rounded-xl bg-white hover:bg-slate-50/80 border border-slate-200/70 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-200 cursor-pointer flex flex-col"
                                  >
                                    {/* Large Photographic Image Card */}
                                    <div className="relative h-36 lg:h-38 w-full rounded-lg overflow-hidden bg-slate-100 border border-slate-200/70">
                                      <img
                                        src={srv.image}
                                        alt={srv.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                      />
                                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    {/* Service Title with subtle interactive arrow */}
                                    <div className="mt-3 flex items-center justify-between w-full">
                                      <h4 className="text-[14px] lg:text-[15px] font-bold text-slate-900 group-hover:text-[#0798F2] transition-colors">
                                        {srv.title}
                                      </h4>
                                      <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#0798F2] group-hover:translate-x-1 transition-all shrink-0 ml-1.5" />
                                    </div>

                                    {/* Clear, natural, real-world service summary */}
                                   
                                  </button>
                                ))}
                              </div>

                              {/* Clean Enterprise Bottom Bar */}
                              
                            
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.page, link.section)}
                    className={`relative py-2.5 transition-colors cursor-pointer hover:text-[#0798F2] ${
                      isActive ? 'text-[#0798F2] font-bold' : 'text-slate-700'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0798F2] rounded-full" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Actions (Phone number + CTA + Mobile Toggle) */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              
              {/* Direct RFQ Phone Link */}
              {/* <a
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="hidden xl:flex items-center gap-2 text-slate-700 hover:text-[#0798F2] text-xs font-semibold py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors"
                title="Direct RFQ Line"
              >
                <Phone className="w-3.5 h-3.5 text-[#0798F2]" />
                <span>{SITE_CONFIG.contact.phoneFormatted}</span>
              </a> */}

              {/* Primary CTA: Request a Quote (Hidden on mobile screens, visible from sm/tablet upwards) */}
              <button
                onClick={() => handleLinkClick('contact')}
                className="group hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#0798F2] hover:bg-[#0584d4] rounded-xl shadow-xs transition-all duration-200 whitespace-nowrap active:scale-[0.98] cursor-pointer"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>

              {/* Mobile Hamburger Menu Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-[#0798F2] hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6 text-[#0798F2]" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* 3. Redesigned Mobile Drawer Menu (with Full Category Accordion & Contact Details) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden bg-slate-950/70 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: smoothEase }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Drawer Top Header */}
              <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
                <img
                  src={SITE_CONFIG.logoUrl}
                  alt="SANIVATE"
                  className="h-8 w-auto object-contain"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200/60 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-5 space-y-6">
                
                {/* Fast Action Card at Top of Drawer */}
              

                {/* Primary Nav Links */}
                <nav className="space-y-1">
                  {navLinks.map((link) => {
                    const isActive = currentPage === link.page && !link.section;

                    if (link.hasDropdown) {
                      return (
                        <div key={link.label} className="border-b border-slate-100 pb-1">
                          <button
                            onClick={() => setIsMobileServicesExpanded(!isMobileServicesExpanded)}
                            className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-bold transition-colors ${
                              isActive
                                ? 'bg-[#F1F8FD] text-[#0798F2]'
                                : 'text-slate-800 hover:bg-slate-50'
                            }`}
                          >
                            <span>{link.label}</span>
                            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${isMobileServicesExpanded ? 'rotate-180 text-[#0798F2]' : ''}`} />
                          </button>

                          {/* Expandable Services Accordion */}
                          <AnimatePresence>
                            {isMobileServicesExpanded && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-3 pr-1 py-1 space-y-1 overflow-hidden"
                              >
                                {SERVICES.map((srv) => (
                                  <button
                                    key={srv.id}
                                    onClick={() => handleLinkClick('services', undefined, srv.id)}
                                    className="w-full flex items-center gap-3 p-2 rounded-xl text-left hover:bg-[#F1F8FD] transition-colors group cursor-pointer"
                                  >
                                    <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                                      <img
                                        src={srv.image}
                                        alt={srv.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        loading="lazy"
                                      />
                                    </div>
                                    <div className="min-w-0 flex-1">
                                      <div className="flex items-center justify-between">
                                        <span className="text-[10px] font-bold text-[#0798F2] uppercase tracking-wider">
                                          {serviceBadges[srv.id] || 'Industrial'}
                                        </span>
                                      </div>
                                      <p className="font-bold text-xs text-slate-800 group-hover:text-[#0798F2] transition-colors truncate">
                                        {srv.title}
                                      </p>
                                      <p className="text-[10px] text-slate-400 line-clamp-1">
                                        {srv.shortDescription}
                                      </p>
                                    </div>
                                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#0798F2] shrink-0" />
                                  </button>
                                ))}
                                <button
                                  onClick={() => handleLinkClick('services')}
                                  className="w-full pt-2 pb-1 text-xs font-bold text-[#0798F2] text-left hover:underline"
                                >
                                  View All 6 Services →
                                </button>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }

                    return (
                      <button
                        key={link.label}
                        onClick={() => handleLinkClick(link.page, link.section)}
                        className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-left text-sm font-semibold transition-colors ${
                          isActive
                            ? 'bg-[#F1F8FD] text-[#0798F2] font-bold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-[#0798F2]'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronRight className="w-4 h-4 text-slate-400" />
                      </button>
                    );
                  })}
                </nav>


  <div className="p-4 rounded-2xl bg-gradient-to-r from-[#062747] to-[#041D35] text-white shadow-lg space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#0798F2]">
                      Direct Contractor Hub
                    </span>
                    <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-white">
                      Jubail, KSA
                    </span>
                  </div>
                  <p className="text-xs text-slate-300">
                    Need instant manpower rates or crane availability?
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <button
                      onClick={() => handleLinkClick('contact')}
                      className="w-full py-2 px-3 rounded-lg bg-[#0798F2] text-white text-xs font-bold flex items-center justify-center gap-1 shadow-sm"
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href={`tel:${SITE_CONFIG.contact.phone}`}
                      className="w-full py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1 border border-white/10"
                    >
                      <Phone className="w-3 h-3 text-[#0798F2]" />
                      <span>Call Now</span>
                    </a>
                  </div>
                </div>
                {/* Office Contact Info in Drawer */}
                <div className="pt-4 border-t border-slate-100 space-y-3 text-xs text-slate-600">
                  <p className="font-bold uppercase tracking-wider text-slate-400 text-[10px]">
                    Headquarters &amp; Support
                  </p>
                  
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                    <span>Unit 101 &amp; 102, Al Dana Dist., Al-Jubail, KSA</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Phone className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-0.5">
                      <a href={`tel:${SITE_CONFIG.contact.phone}`} className="hover:text-[#0798F2] font-semibold text-slate-800">
                        {SITE_CONFIG.contact.phoneFormatted}
                      </a>
                      <a href={`tel:${SITE_CONFIG.contact.officePhone}`} className="hover:text-[#0798F2] text-slate-500">
                        Tel: {SITE_CONFIG.contact.officePhone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                    <div className="flex flex-col gap-1">
                      <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-[#0798F2] font-semibold hover:underline">
                        {SITE_CONFIG.contact.email}
                      </a>
                      {SITE_CONFIG.contact.secondaryEmail && (
                        <a href={`mailto:${SITE_CONFIG.contact.secondaryEmail}`} className="text-[#0798F2] font-semibold hover:underline">
                          {SITE_CONFIG.contact.secondaryEmail}
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-[#0798F2] shrink-0" />
                    <span>Sun - Thu: 8:00 AM - 6:00 PM</span>
                  </div>
                </div>

              </div>

              {/* Drawer Bottom Bar with Search and Close */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenSearch();
                  }}
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0798F2]"
                >
                  <Search className="w-4 h-4 text-[#0798F2]" />
                  <span>Search Services &amp; Codes</span>
                </button>

                <span className="text-[10px] text-slate-400">
                  © 2026 SANIVATE
                </span>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
