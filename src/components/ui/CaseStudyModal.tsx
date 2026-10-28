import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, 
  MapPin, CheckCircle2, Award, Calendar, Quote, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { CaseStudy } from '../../data/caseStudies';
import { smoothEase } from './Motion';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onNavigateToQuote: (serviceCategory: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onNavigateToQuote
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(24);
  const [activeTab, setActiveTab] = useState<'highlights' | 'metrics' | 'testimonial'>('highlights');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Video progress simulation when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && caseStudy) {
      interval = setInterval(() => {
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.5));
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying, caseStudy]);

  if (!caseStudy) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: smoothEase }}
          className="relative w-full max-w-4xl bg-[#031A30] text-white rounded-3xl shadow-2xl border border-white/15 overflow-hidden flex flex-col my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar with Title and Close */}
          <div className="flex items-center justify-between px-5 sm:px-7 py-4 border-b border-white/10 bg-[#062747]/90">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0798F2] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#0798F2]">
                SANIVATE PROJECT VIDEO CASE STUDY
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Cinematic Video Player Section */}
          <div className="relative aspect-video w-full bg-slate-950 overflow-hidden group">
            {/* Video frame backdrop */}
            <img
              src={caseStudy.thumbnail}
              alt={caseStudy.title}
              className={`w-full h-full object-cover transition-transform duration-1000 ${
                isPlaying ? 'scale-105 filter brightness-95' : 'scale-100 filter brightness-75'
              }`}
            />

            {/* Cinematic Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#031A30] via-black/30 to-black/60 pointer-events-none" />

            {/* Video HUD Overlays */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 pointer-events-none">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                <span className="text-rose-500 font-bold animate-pulse">● REC</span>
                <span className="font-mono">{caseStudy.videoDetails.recordedDate}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 font-mono text-[11px]">
                <span>1080P • 60FPS</span>
              </div>
            </div>

            {/* Center Big Play/Pause Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#0798F2]/90 hover:bg-[#0798F2] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/40 cursor-pointer"
                aria-label={isPlaying ? "Pause video" : "Play video"}
              >
                {isPlaying ? (
                  <Pause className="w-7 h-7 sm:w-8 sm:h-8" />
                ) : (
                  <Play className="w-7 h-7 sm:w-8 sm:h-8 translate-x-0.5" />
                )}
              </button>
            </div>

            {/* Bottom Video Controls Bar */}
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-4 space-y-2">
              {/* Scrubber Progress Bar */}
              <div 
                className="relative h-1.5 bg-white/20 hover:h-2.5 rounded-full cursor-pointer transition-all overflow-hidden"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const clickPos = (e.clientX - rect.left) / rect.width;
                  setProgress(Math.floor(clickPos * 100));
                }}
              >
                <div 
                  className="h-full bg-[#0798F2] rounded-full relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
                </div>
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="hover:text-[#0798F2] transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <button 
                    onClick={() => setProgress(0)}
                    className="hover:text-[#0798F2] transition-colors"
                    title="Restart"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setIsMuted(!isMuted)}
                    className="hover:text-[#0798F2] transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <span className="font-mono text-[11px] text-slate-300">
                    {Math.floor((progress / 100) * 225)}s / {caseStudy.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-[11px] bg-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                    Official Site Record
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Details & Interactive Information Container */}
          <div className="p-5 sm:p-7 space-y-6">
            
            {/* Header info */}
            <div>
              <div className="flex flex-wrap items-center gap-2.5 text-xs text-[#0798F2] mb-1.5 font-semibold">
                <span className="bg-[#0798F2]/15 px-2.5 py-0.5 rounded-md border border-[#0798F2]/30">
                  {caseStudy.clientSector}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-slate-300">
                  <MapPin className="w-3.5 h-3.5 text-[#0798F2]" />
                  {caseStudy.location}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                {caseStudy.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {caseStudy.overview}
              </p>
            </div>

            {/* Quick KPI stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
              {caseStudy.stats.map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="text-base sm:text-lg font-black text-[#0798F2]">
                    {stat.value}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Tab Navigation */}
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <button
                onClick={() => setActiveTab('highlights')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'highlights'
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Video Chapters &amp; Milestones
              </button>
              <button
                onClick={() => setActiveTab('metrics')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'metrics'
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Challenge &amp; Resolution
              </button>
              <button
                onClick={() => setActiveTab('testimonial')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'testimonial'
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Director Testimonial
              </button>
            </div>

            {/* Tab Contents */}
            <div className="min-h-[110px] text-xs sm:text-sm text-slate-300">
              {activeTab === 'highlights' && (
                <div className="space-y-2.5">
                  <p className="text-xs font-bold text-white uppercase tracking-wider">
                    Key Video Documented Milestones:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {caseStudy.videoDetails.keyHighlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                        <CheckCircle2 className="w-4 h-4 text-[#0798F2] shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-200">{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="font-bold text-[#0798F2] text-xs uppercase">Operational Challenge:</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{caseStudy.challenge}</p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 space-y-1">
                    <p className="font-bold text-emerald-400 text-xs uppercase">Delivered Solution:</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{caseStudy.solution}</p>
                  </div>
                </div>
              )}

              {activeTab === 'testimonial' && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-white/[0.04] to-[#0798F2]/10 border border-[#0798F2]/30 flex items-start gap-3">
                  <Quote className="w-8 h-8 text-[#0798F2] shrink-0 opacity-80" />
                  <div>
                    <p className="italic text-slate-200 text-xs sm:text-sm leading-relaxed mb-3">
                      &quot;{caseStudy.testimonial.quote}&quot;
                    </p>
                    <div>
                      <p className="font-bold text-white text-xs">{caseStudy.testimonial.author}</p>
                      <p className="text-[11px] text-[#0798F2]">{caseStudy.testimonial.role} • {caseStudy.testimonial.organization}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Saudi Industrial Project Delivery</span>
              </div>

              <button
                onClick={() => {
                  onNavigateToQuote(caseStudy.category);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#0798F2] hover:bg-[#0584d4] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#0798F2]/30 transition-transform active:scale-95 cursor-pointer"
              >
                <span>Request Similar Project Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
