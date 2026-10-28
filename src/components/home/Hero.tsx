import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Users, Truck, ArrowRight, Phone, 
  ChevronLeft, ChevronRight, HardHat, CheckCircle2, 
  Sparkles, Clock, Building2, Layers, Wrench, Award
} from 'lucide-react';
import { SITE_CONFIG } from '../../data/site';
import { smoothEase } from '../ui/Motion';

// High-resolution industrial photography bundled by Vite
import heroRefinery from '../../assets/images/hero_industrial_refinery_1792910639649.jpg';
import heroEquipment from '../../assets/images/service_heavy_equipment_1792910641621.jpg';
import heroWorker from '../../assets/images/hero_worker_inspecting_1792910675610.jpg';
import heroPetrochemical from '../../assets/images/industry_petrochemical_1792910674662.jpg';

interface HeroProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
}

interface HeroSlide {
  id: string;
  badge: string;
  titleWhite: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  image: string;
  primaryCta: { label: string; action: () => void };
  secondaryCta: { label: string; action: () => void };
  highlightStat: { value: string; label: string; sub?: string };
  tabLabel: string;
  shortLabel: string;
  tags: string[];
  icon: React.ElementType;
}

const SLIDE_DURATION = 6000; // 6 seconds per slide

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Touch swipe tracking for all mobile/tablet resolutions
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // 4 Flagship Industrial Slides aligned with KSA Vision 2030 Mega-Projects
  const slides: HeroSlide[] = [
    {
      id: 'slide-industrial-excellence',
      badge: 'KINGDOM OF SAUDI ARABIA · PREMIER INDUSTRIAL CONTRACTING',
      titleWhite: 'Building Industrial',
      titleHighlight: 'Excellence',
      titleSuffix: 'Across Saudi Arabia.',
      description: 'Turnkey partner for certified workforce mobilization, heavy crane fleet, modular camp infrastructure, and critical turnaround contracting across Al-Jubail, Ras Tanura & Riyadh.',
      image: heroRefinery,
      primaryCta: {
        label: 'Get a Free Quote',
        action: () => onNavigate('contact'),
      },
      secondaryCta: {
        label: 'Explore Our Services',
        action: () => onNavigate('services'),
      },
      highlightStat: {
        value: '5 Flagship Sites',
        label: 'SATORP Amiral, Ras Tanura & Riyadh',
        sub: 'Approved EPC Turnaround Vendor',
      },
      tabLabel: 'Industrial Solutions',
      shortLabel: 'Industrial',
      tags: ['SATORP Amiral', 'Ras Tanura', 'Riyadh Complexes'],
      icon: Building2,
    },
    {
      id: 'slide-heavy-equipment',
      badge: 'CERTIFIED MACHINERY FLEET · TUV, ARAMCO & SATORP APPROVED',
      titleWhite: 'Heavy Equipment Rentals',
      titleHighlight: '& Crane Solutions',
      titleSuffix: 'for Mega-Sites.',
      description: 'Extensive compliant fleet of mobile, crawler, and rough-terrain cranes up to 4,000T SLT capacity, SPMT modular transporters, boom pumps, and certified rigging crews.',
      image: heroEquipment,
      primaryCta: {
        label: 'Request Equipment Rates',
        action: () => onNavigate('services', { service: 'equipment' }),
      },
      secondaryCta: {
        label: 'View Field Projects',
        action: () => onNavigate('projects'),
      },
      highlightStat: {
        value: '4,000 Ton SLT',
        label: 'Super-Heavy Lifting Capability',
        sub: 'TUV & Aramco Certified Rigging Teams',
      },
      tabLabel: 'Equipment & Cranes',
      shortLabel: 'Equipment',
      tags: ['TUV Certified', 'Aramco Standard', '4,000T SLT Fleet'],
      icon: Truck,
    },
    {
      id: 'slide-certified-workforce',
      badge: 'RAPID MOBILIZATION · 100% ZERO-LTI HSE STANDARD',
      titleWhite: 'Certified Workforce',
      titleHighlight: 'for Critical Plant Turnarounds',
      titleSuffix: '& EPC Complexes.',
      description: 'Immediate mobilization of certified ASME 6G welders, riggers, instrument technicians, and Aramco-compliant safety inspectors tailored for EPC complexes and shutdowns.',
      image: heroWorker,
      primaryCta: {
        label: 'Request Crew Quote',
        action: () => onNavigate('services', { service: 'manpower' }),
      },
      secondaryCta: {
        label: 'Contact Operations',
        action: () => onNavigate('contact'),
      },
      highlightStat: {
        value: 'Under 48 Hours',
        label: 'Emergency Turnaround Mobilization',
        sub: '100% Zero-LTI Safety Performance',
      },
      tabLabel: 'Certified Manpower',
      shortLabel: 'Manpower',
      tags: ['ASME 6G Welders', 'Zero-LTI Standard', '24/7 Rapid Dispatch'],
      icon: Users,
    },
    {
      id: 'slide-petrochemical-solutions',
      badge: 'PLANT SHUTDOWNS · TURNKEY CAMPS & PIPING FABRICATION',
      titleWhite: 'Petrochemical & Energy',
      titleHighlight: 'Infrastructure Support',
      titleSuffix: 'Kingdom-Wide.',
      description: 'End-to-end industrial services including turnkey modular workforce camps, specialized piping spool fabrication, scrap management, and fast-track shutdown maintenance.',
      image: heroPetrochemical,
      primaryCta: {
        label: 'Consult Our Engineers',
        action: () => onNavigate('contact'),
      },
      secondaryCta: {
        label: 'Learn About Turnkey Camps',
        action: () => onNavigate('services', { service: 'camps' }),
      },
      highlightStat: {
        value: '10,000+ Bed Capacity',
        label: 'Turnkey Modular Camp Facilities',
        sub: 'Royal Commission & HCIS Compliant',
      },
      tabLabel: 'Turnkey Camps & Shutdowns',
      shortLabel: 'Turnkey Camps',
      tags: ['Modular Camps', 'Piping Spools', 'Turnaround Management'],
      icon: Layers,
    },
  ];

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Auto-play timer (slides every 6s, smoothly paused on hover or touch)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe gesture handlers for all mobile / tablet devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const distance = touchStartX.current - touchEndX.current;
      if (distance > 45) {
        // Swiped Left -> Next Slide
        handleNext();
      } else if (distance < -45) {
        // Swiped Right -> Prev Slide
        handlePrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  const active = slides[currentSlide];
  const ActiveIcon = active.icon;

  return (
    <section 
      className="relative w-full bg-[#031A30] text-white overflow-hidden min-h-[580px] xs:min-h-[620px] sm:min-h-[680px] lg:min-h-[760px] xl:min-h-[820px] flex flex-col justify-between select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Saudi Industrial Contracting Flagship Projects"
    >
      
      {/* ============================================================ */}
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND SLIDER                    */}
      {/* ============================================================ */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: smoothEase }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${active.image}')` }}
          />
        </AnimatePresence>

        {/* Deep Multi-Stage Cinematic Navy Overlay Scrim (Guarantees Maximum Text Legibility) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#031A30]/95 via-[#031A30]/85 sm:via-[#031A30]/75 to-[#031A30]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021323] via-transparent to-[#031A30]/75" />

        {/* Ambient Radiant Cyan Glow Accents */}
        <div className="absolute top-1/4 left-1/4 w-[450px] md:w-[600px] h-[450px] md:h-[600px] bg-[#0798F2]/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/3 right-10 w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-[#0798F2]/10 rounded-full blur-[130px]" />
      </div>

      {/* ============================================================ */}
      {/* 2. SIDE NAVIGATION BUTTONS (LEFT & RIGHT)                    */}
      {/* Shown on tablet & desktop; on mobile users swipe fluidly    */}
      {/* ============================================================ */}
      <button
        onClick={handlePrev}
        aria-label="Previous Slide"
        className="hidden sm:flex absolute left-3 sm:left-4 md:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 md:p-4 rounded-full bg-slate-950/60 hover:bg-[#0798F2] text-white/90 hover:text-white border border-white/20 hover:border-[#0798F2] backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer group items-center justify-center"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:-translate-x-0.5" />
      </button>

      <button
        onClick={handleNext}
        aria-label="Next Slide"
        className="hidden sm:flex absolute right-3 sm:right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2.5 sm:p-3.5 md:p-4 rounded-full bg-slate-950/60 hover:bg-[#0798F2] text-white/90 hover:text-white border border-white/20 hover:border-[#0798F2] backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-90 cursor-pointer group items-center justify-center"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:translate-x-0.5" />
      </button>

      {/* ============================================================ */}
      {/* 3. FOREGROUND HERO CONTENT STAGE                             */}
      {/* 100% Responsive Padding on All Screen Sizes (Mobile to 4K)   */}
      {/* ============================================================ */}
      <div className="relative max-w-7xl mx-auto px-4 xs:px-6 sm:px-12 md:px-16 lg:px-24 pt-6 xs:pt-8 sm:pt-12 md:pt-16 pb-6 xs:pb-8 sm:pb-12 w-full flex-1 flex flex-col justify-center z-20">
        
        {/* Top Header Bar: Live Eyebrow Pill + Official Saudi Vision 2030 Emblem */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 xs:gap-3 sm:gap-4 mb-3 sm:mb-6">
          
          {/* Live Operational Eyebrow Pill */}
          <motion.div
            key={`badge-${active.id}`}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: smoothEase }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#0798F2]/20 border border-[#0798F2]/40 text-[#0798F2] text-[9px] xs:text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-xs max-w-full"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="truncate max-w-[180px] xs:max-w-[260px] sm:max-w-none">{active.badge}</span>
          </motion.div>

          {/* Official Saudi Vision 2030 Emblem (Hidden on Mobile with display: none / hidden, Visible on Tablet & Desktop) */}
          <div className="hidden sm:inline-flex items-center gap-2 sm:gap-2.5 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-xl sm:rounded-2xl bg-white text-slate-900 shadow-lg border border-white/90 hover:bg-slate-50 transition-all duration-300 group shrink-0">
            <img
              src="/assets/vision-2030.png"
              alt="Saudi Vision 2030"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="h-4 sm:h-5 w-px bg-slate-200" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[9px] uppercase font-bold text-[#0798F2] tracking-wider leading-tight">Vision 2030</p>
              <p className="text-[9px] sm:text-[11px] font-semibold text-[#031A30] leading-none">Kingdom of Saudi Arabia</p>
            </div>
          </div>

        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column (8 cols): Typography, Headlines & CTAs */}
          <div className="lg:col-span-8 space-y-3.5 xs:space-y-4 sm:space-y-6">
            
            {/* Master Headline (Smooth Animated Slide Transitions) */}
            <div className="space-y-1">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`headline-${active.id}`}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.45, ease: smoothEase }}
                >
                  <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-white">
                    {active.titleWhite}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0798F2] via-[#38bdf8] to-[#0798F2] drop-shadow-sm">
                      {active.titleHighlight}
                    </span>{' '}
                    {active.titleSuffix}
                  </h1>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Concise Supporting Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${active.id}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, delay: 0.08, ease: smoothEase }}
                className="text-xs xs:text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>

            {/* Slide Highlight Tags (Responsive Pills) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`tags-${active.id}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.12, ease: smoothEase }}
                className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-0.5 sm:pt-1"
              >
                {active.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-slate-300 text-[11px] sm:text-xs font-medium backdrop-blur-sm"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0798F2]" />
                    <span>{tag}</span>
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Action Buttons & Direct Hotline Shortcut */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2"
            >
              <button
                onClick={active.primaryCta.action}
                className="group w-4xs xs:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-[#0798F2] hover:bg-[#0680cb] text-white text-xs sm:text-base font-bold shadow-xl shadow-[#0798F2]/30 flex items-center justify-center gap-2 sm:gap-2.5 transition-all cursor-pointer hover:translate-x-0.5 active:scale-[0.98]"
              >
                <span>{active.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={active.secondaryCta.action}
                className="w-4xs xs:w-auto px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 hover:border-white text-xs sm:text-base font-bold backdrop-blur-md flex items-center justify-center transition-all cursor-pointer active:scale-[0.98]"
              >
                {active.secondaryCta.label}
              </button>
            </motion.div>

          </div>

          {/* Right Column (4 cols): Dynamic Glassmorphic Slide Highlight Card (Desktop & Tablet) */}
          <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={`card-${active.id}`}
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.45, ease: smoothEase }}
                className="p-6 rounded-2xl bg-gradient-to-br from-[#062747]/95 via-[#041d35]/90 to-[#021323]/95 backdrop-blur-xl border border-[#0798F2]/30 shadow-2xl w-full max-w-sm space-y-4"
              >
                {/* Header with Icon & Active Live Ping */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#0798F2]/20 border border-[#0798F2]/40 text-[#0798F2]">
                      <ActiveIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[#0798F2] tracking-wider leading-none">Flagship Capability</p>
                      <p className="text-xs font-semibold text-white/90 mt-0.5">{active.tabLabel}</p>
                    </div>
                  </div>
                 
                </div>

                {/* Big Stat Value */}
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {active.highlightStat.value}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-[#0798F2] mt-0.5">
                    {active.highlightStat.label}
                  </p>
                  {active.highlightStat.sub && (
                    <p className="text-[11px] text-slate-400 mt-1">
                      {active.highlightStat.sub}
                    </p>
                  )}
                </div>

                {/* Trust Seals Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>HSE Compliant</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-[#0798F2]" />
                    <span>Aramco Standards</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

        </div>

      </div>

      {/* ============================================================ */}
      {/* 4. INTERACTIVE SLIDER TABS & PROGRESS DOCK                   */}
      {/* 100% Responsive for All Screen Resolutions (Mobile to 4K)    */}
      {/* ============================================================ */}
      <div className="relative z-20 bg-[#021323]/95 backdrop-blur-md border-t border-[#0798F2]/30">
        <div className="max-w-7xl mx-auto px-2 xs:px-4 sm:px-6 lg:px-8">
          
          {/* Slide Switcher Tabs with Animated Progress Fill */}
          <div className="grid grid-cols-4 border-b border-white/10">
            {slides.map((s, idx) => {
              const isSelected = currentSlide === idx;
              const TabIcon = s.icon;
              return (
                <button
                  key={s.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative py-2.5 sm:py-4 px-1.5 xs:px-2 sm:px-4 text-left transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected ? 'bg-white/5' : 'hover:bg-white/[0.02]'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${s.tabLabel}`}
                >
                  <div className="flex items-center gap-1.5 xs:gap-2 sm:gap-3 w-full">
                    <span className={`font-mono text-[9px] xs:text-[10px] sm:text-xs font-bold shrink-0 ${isSelected ? 'text-[#0798F2]' : 'text-slate-500'}`}>
                      0{idx + 1}
                    </span>
                    <TabIcon className={`w-3.5 h-3.5 hidden md:block shrink-0 ${isSelected ? 'text-[#0798F2]' : 'text-slate-500'}`} />
                    <span className={`text-[10px] xs:text-[11px] sm:text-xs md:text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                      <span className="sm:hidden">{s.shortLabel}</span>
                      <span className="hidden sm:inline">{s.tabLabel}</span>
                    </span>
                  </div>

                  {/* Active Slide Progress Line Indicator with Auto-Timer Animation */}
                  {isSelected && (
                    <motion.div 
                      key={`progress-${idx}-${isPaused}`}
                      initial={{ width: '0%' }}
                      animate={{ width: isPaused ? '100%' : '100%' }}
                      transition={{ 
                        duration: isPaused ? 0 : SLIDE_DURATION / 1000, 
                        ease: 'linear' 
                      }}
                      className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-[#0798F2] shadow-[0_0_12px_#0798F2]" 
                    />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
