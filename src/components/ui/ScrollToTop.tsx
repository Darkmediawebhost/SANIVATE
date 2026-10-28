import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { smoothEase } from './Motion';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (docHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollTop / docHeight) * 100));
        setScrollProgress(progress);
      }

      // Show button after scrolling down past 300px
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Circular progress calculations for SVG
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.6, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 24 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Tooltip Indicator (Desktop) */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.92 }}
                transition={{ duration: 0.16 }}
                className="hidden sm:flex absolute -top-10 left-1/2 -translate-x-1/2 items-center gap-1.5 px-3 py-1 rounded-full bg-[#031A30]/95 border border-[#0798F2]/40 text-white text-[11px] font-semibold tracking-wide backdrop-blur-md shadow-xl whitespace-nowrap pointer-events-none"
              >
                <span>Back to Top</span>
                <span className="text-[#0798F2] font-mono text-[10px] font-bold">
                  {Math.round(scrollProgress)}%
                </span>
                {/* Tooltip caret */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-[#031A30]/95" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Button with Circular Progress Track */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            title="Scroll to top"
            className="group relative w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center bg-[#031A30]/90 hover:bg-[#031A30] text-white border border-white/20 hover:border-[#0798F2]/80 backdrop-blur-xl shadow-[0_8px_25px_rgba(3,26,48,0.45)] hover:shadow-[0_12px_35px_rgba(7,152,242,0.4)] transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0798F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#031A30]"
          >
            {/* SVG Circular Progress Ring */}
            <svg
              className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5"
              viewBox="0 0 48 48"
            >
              {/* Background Ring Track */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-white/15"
                strokeWidth="2.5"
                fill="none"
              />
              {/* Animated Progress Fill Ring */}
              <circle
                cx="24"
                cy="24"
                r={radius}
                className="stroke-[#0798F2] transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                fill="none"
              />
            </svg>

            {/* Glowing Ambient Radial Glow */}
            <div className="absolute inset-0 rounded-full bg-[#0798F2]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm pointer-events-none" />

            {/* Chevron Icon with Micro-Interaction */}
            <ChevronUp className="w-5 h-5 text-white group-hover:text-[#0798F2] transition-all duration-300 group-hover:-translate-y-1 relative z-10" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

