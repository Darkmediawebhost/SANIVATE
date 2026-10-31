import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Maximize2, X, ArrowRight, Eye } from 'lucide-react';
import { smoothEase } from '../ui/Motion';

interface ProjectShowcaseProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
}

interface SlideItem {
  id: string;
  image: string;
  name: string;
}

const PROJECT_SLIDES: SlideItem[] = [
  {
    id: 'hyundai-amiral-1',
    image: '/assets/projects/hyundai-amiral.jpeg',
    name: 'Hyundai NSC / Hyundai Amiral'
  },
  {
    id: 'seg-amiral-1',
    image: '/assets/projects/seg-amiral.jpeg',
    name: 'SEG Amiral'
  },
  {
    id: 'seg-amiral-2',
    image: '/assets/projects/seg-amiral-1.jpeg',
    name: 'SEG Amiral'
  },
  {
    id: 'seg-riyadh-1',
    image: '/assets/projects/seg-riyadh.jpeg',
    name: 'SEG Riyadh'
  },
  {
    id: 'seg-riyadh-2',
    image: '/assets/projects/seg-riyadh-1.jpeg',
    name: 'SEG Riyadh'
  },
  {
    id: 'shengyue-1',
    image: '/assets/projects/Shengyue.jpeg',
    name: 'Shengyue'
  },
  {
    id: 'sinopec-rastanura-1',
    image: '/assets/projects/sinopec-rastanura.jpeg',
    name: 'SINOPEC RASTANURA'
  },
  {
    id: 'sinopec-rastanura-2',
    image: '/assets/projects/sinopec-rastanura-1.jpeg',
    name: 'SINOPEC RASTANURA'
  },
  {
    id: 'sinopec-rastanura-2',
    image: '/assets/projects/Turaif.png',
    name: 'Ma’aden Turaif'
  },
  {
    id: 'sinopec-rastanura-2',
    image: '/assets/projects/Turaif1.png',
    name: 'Ma’aden Turaif'
  }
];

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Responsive visible slides calculator
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(2);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, PROJECT_SLIDES.length - visibleCount);

  // Auto-play timer (slides smoothly every 3.5 seconds when not hovered)
  useEffect(() => {
    if (isPaused || lightboxOpen) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, lightboxOpen, maxIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev + 1) % PROJECT_SLIDES.length);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev - 1 + PROJECT_SLIDES.length) % PROJECT_SLIDES.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleLightboxNext();
      if (e.key === 'ArrowLeft') handleLightboxPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <section className="py-14 sm:py-20 bg-[#FCFDFE]" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean, Minimalist Header Strip (Zero text clutter) */}
        <div className="flex items-center justify-between pb-6 sm:pb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#0798F2]">
              FEATURED PROJECTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#062747] tracking-tight mt-0.5">
              Ongoing Projects
            </h2>
          </div>

          {/* Slider Arrow Controls & View All Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('projects')}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#0798F2] hover:text-[#062747] transition-colors cursor-pointer mr-2"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrev}
                className="p-2 rounded-xl bg-white hover:bg-[#0798F2] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0798F2] shadow-xs transition-all cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 rounded-xl bg-white hover:bg-[#0798F2] text-slate-700 hover:text-white border border-slate-200 hover:border-[#0798F2] shadow-xs transition-all cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* PURE IMAGE SLIDER (Zero descriptions, Zero text clutter)    */}
        {/* ============================================================ */}
        <div 
          className="relative overflow-hidden select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Sliding Track */}
          <motion.div 
            className="flex"
            animate={{ x: `-${currentIndex * (100 / visibleCount)}%` }}
            transition={{ ease: [0.25, 1, 0.5, 1], duration: 0.55 }}
          >
            {PROJECT_SLIDES.map((slide, idx) => (
              <div 
                key={slide.id} 
                style={{ width: `${100 / visibleCount}%` }}
                className="shrink-0 p-2 sm:p-2.5"
              >
                <div 
                  onClick={() => handleOpenLightbox(idx)}
                  className="group relative w-full aspect-[16/11] sm:aspect-[16/10] bg-slate-950 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200/90 hover:border-[#0798F2]/60 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                >
                  {/* Real Authentic Project Image */}
                  <img
                    src={slide.image}
                    alt={slide.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                  {/* ONLY Project Name Overlay Badge */}
                  {/* <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="bg-[#0798F2] px-3 py-1 rounded-lg text-white font-mono font-bold text-xs sm:text-sm tracking-wide shadow-md">
                      {slide.name}
                    </span>
                    
                    <span className="bg-black/60 backdrop-blur-md p-1.5 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div> */}

                  {/* Bottom Counter Pill */}
                  {/* <div className="absolute bottom-3 right-3.5 pointer-events-none">
                    <span className="text-[11px] font-mono text-white/90 bg-black/50 backdrop-blur-sm px-2.5 py-0.5 rounded-md border border-white/10">
                      {idx + 1} / {PROJECT_SLIDES.length}
                    </span>
                  </div> */}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Floating On-Track Navigation Buttons (Visible on Hover) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-sm transition-all cursor-pointer shadow-lg border border-white/20 hidden sm:flex items-center justify-center opacity-80 hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-sm transition-all cursor-pointer shadow-lg border border-white/20 hidden sm:flex items-center justify-center opacity-80 hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot Pagination Bar */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === dotIdx
                  ? 'w-8 bg-[#0798F2]'
                  : 'w-2 bg-slate-200 hover:bg-slate-300'
              }`}
              aria-label={`Jump to slide set ${dotIdx + 1}`}
            />
          ))}
        </div>

        {/* Mobile View All Link */}
        <div className="pt-4 text-center sm:hidden">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0798F2] hover:text-[#062747]"
          >
            <span>View All Projects →</span>
          </button>
        </div>

      </div>

      {/* ============================================================ */}
      {/* FULLSCREEN HIGH-RES LIGHTBOX MODAL                          */}
      {/* ============================================================ */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-3 sm:p-6"
            onClick={() => setLightboxOpen(false)}
          >
            <div 
              className="relative w-full max-w-6xl max-h-[96vh] flex flex-col justify-between"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Lightbox Header Bar */}
              <div className="flex items-center justify-between pb-3 text-white border-b border-white/15">
                <span className="font-mono text-sm sm:text-base font-black text-white bg-[#0798F2] px-3.5 py-1 rounded-lg">
                  {PROJECT_SLIDES[lightboxIndex].name}
                </span>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    {lightboxIndex + 1} / {PROJECT_SLIDES.length}
                  </span>
                  <button
                    onClick={() => setLightboxOpen(false)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Close photo preview"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Lightbox Main Uncropped Photo */}
              <div className="relative my-4 flex items-center justify-center min-h-[50vh] max-h-[75vh] overflow-hidden">
                <img
                  src={PROJECT_SLIDES[lightboxIndex].image}
                  alt={PROJECT_SLIDES[lightboxIndex].name}
                  className="max-h-[73vh] w-auto max-w-full object-contain rounded-xl shadow-2xl select-none"
                />

                <button
                  onClick={handleLightboxPrev}
                  className="absolute left-2 sm:left-4 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleLightboxNext}
                  className="absolute right-2 sm:right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Bottom Thumbnail Strip */}
              <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/15">
                {PROJECT_SLIDES.map((thumb, gIdx) => (
                  <button
                    key={thumb.id}
                    onClick={() => setLightboxIndex(gIdx)}
                    className={`h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      lightboxIndex === gIdx
                        ? 'border-[#0798F2] scale-105'
                        : 'border-white/20 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={thumb.image}
                      alt={thumb.name}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};
