import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoBannerProps {
  videoSrc?: string;
  className?: string;
}

export const VideoBanner: React.FC<VideoBannerProps> = ({
  videoSrc = '/assets/Sanivate.mp4',
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [showControlsHint, setShowControlsHint] = useState<boolean>(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState<boolean>(false);

  // Auto-hide the hint badge after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowControlsHint(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  // Safe Play/Pause toggle
  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn('Playback error or interrupted:', err);
            setIsPlaying(false);
          });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  // Safe Mute/Unmute toggle
  const toggleMute = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);

    // If unmuting while paused, resume playback smoothly
    if (!nextMuted && video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    }
  }, []);

  // Sync state if video plays/pauses natively (e.g. OS controls / battery saver)
  const handlePlayEvent = () => setIsPlaying(true);
  const handlePauseEvent = () => setIsPlaying(false);
  const handleVolumeChangeEvent = () => {
    if (videoRef.current) {
      setIsMuted(videoRef.current.muted);
    }
  };

  // Keyboard accessibility: Space to toggle play/pause, M to toggle mute
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only trigger if container is in focus or user is viewing the page
      if (
        document.activeElement?.tagName === 'INPUT' ||
        document.activeElement?.tagName === 'TEXTAREA'
      ) {
        return;
      }

      if (e.code === 'Space') {
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          // Check if banner is visible in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            e.preventDefault();
            togglePlay();
          }
        }
      } else if (e.key === 'm' || e.key === 'M') {
        const container = containerRef.current;
        if (container) {
          const rect = container.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            e.preventDefault();
            toggleMute();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleMute]);

  return (
    <section
      ref={containerRef}
      aria-label="Sanivate Hero Video Banner"
      className={`relative w-full bg-[#021323] overflow-hidden select-none ${className}`}
    >
      {/* Aspect Ratio Container:
          - Mobile (xs/sm): 16:9 aspect-video for 100% full uncropped display
          - Tablet / Desktop: aspect-video up to max-height 85vh
          - Centered with subtle dark letterbox padding on ultra-wide screens */}
      <div 
        className="relative w-full max-w-[1920px] mx-auto aspect-video max-h-[85vh] bg-black overflow-hidden flex items-center justify-center cursor-pointer group"
        onClick={togglePlay}
      >
        {/* HTML5 Video Element */}
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onPlay={handlePlayEvent}
          onPause={handlePauseEvent}
          onVolumeChange={handleVolumeChangeEvent}
          onLoadedData={() => setIsVideoLoaded(true)}
          className="w-full h-full object-cover object-center pointer-events-none transition-opacity duration-500"
          style={{ opacity: isVideoLoaded ? 1 : 0.6 }}
        />

        {/* Ambient Top & Bottom Vignette Overlays for seamless contrast */}
        <div className="absolute inset-x-0 top-0 h-16 sm:h-24 bg-gradient-to-b from-[#021323]/60 via-[#021323]/20 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-20 sm:h-28 bg-gradient-to-t from-[#021323]/80 via-[#021323]/30 to-transparent pointer-events-none" />

        {/* Large Center Play Icon (visible when paused) */}
        <AnimatePresence>
          {!isPlaying && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-slate-950/70 border border-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-2xl pointer-events-none z-20"
              style={{
                width: 'fit-content',
                height: 'fit-content',
                padding: '1.25rem',
              }}
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-[#0798F2] translate-x-0.5 fill-[#0798F2]" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ============================================================ */}
        {/* ONLY VIDEO CONTROLLERS: PLAY/PAUSE & MUTE/UNMUTE            */}
        {/* Responsively styled for Mobile, Tablet, Laptop & Desktop     */}
        {/* ============================================================ */}
        <div 
          className="absolute bottom-3 right-3 xs:bottom-4 xs:right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30 flex items-center gap-2 sm:gap-3"
          onClick={(e) => e.stopPropagation()} // Prevent toggling play when clicking controller container
        >
          {/* Subtle audio status hint on initial load */}
          <AnimatePresence>
            {showControlsHint && isMuted && (
              <motion.div
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="hidden xs:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 border border-white/15 text-white/90 text-xs font-medium backdrop-blur-md shadow-lg pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-[#0798F2] animate-pulse" />
                <span>Tap sound for audio</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 1. PLAY / PAUSE CONTROLLER */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            title={isPlaying ? 'Pause video (Space)' : 'Play video (Space)'}
            className="group relative flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full bg-slate-950/75 hover:bg-[#0798F2] text-white border border-white/20 hover:border-[#0798F2] backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#0798F2]/60"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 xs:w-5 xs:h-5 text-white transition-transform group-hover:scale-110" />
            ) : (
              <Play className="w-4 h-4 xs:w-5 xs:h-5 text-white fill-white translate-x-0.5 transition-transform group-hover:scale-110" />
            )}
            {/* Visual ripple effect on hover */}
            <span className="sr-only">{isPlaying ? 'Pause' : 'Play'}</span>
          </button>

          {/* 2. MUTE / UNMUTE CONTROLLER */}
          <button
            type="button"
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            title={isMuted ? 'Unmute video (M)' : 'Mute video (M)'}
            className={`group relative flex items-center justify-center w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border focus:outline-none focus:ring-2 focus:ring-[#0798F2]/60 ${
              isMuted
                ? 'bg-slate-950/75 hover:bg-[#0798F2] text-white border-white/20 hover:border-[#0798F2]'
                : 'bg-[#0798F2] text-white border-[#0798F2] shadow-[#0798F2]/30'
            }`}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 xs:w-5 xs:h-5 text-white/90 group-hover:text-white transition-transform group-hover:scale-110" />
            ) : (
              <Volume2 className="w-4 h-4 xs:w-5 xs:h-5 text-white transition-transform group-hover:scale-110 animate-pulse" />
            )}
            <span className="sr-only">{isMuted ? 'Unmute' : 'Mute'}</span>
          </button>
        </div>
      </div>
    </section>
  );
};
