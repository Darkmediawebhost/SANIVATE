import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, Maximize2, X, HardHat, 
  ArrowRight, Phone, Mail, MapPin, Eye, Grid3X3, Layers
} from 'lucide-react';
import { PROJECTS_DATA, ProjectItem } from '../data/projects';
import { SITE_CONFIG } from '../data/site';
import { smoothEase } from '../components/ui/Motion';

interface ProjectsPageProps {
  onNavigate: (page: string, params?: { service?: string; section?: string }) => void;
}

interface PhotoCardItem {
  id: string;
  projectName: string;
  image: string;
  photoIndex: number;
  totalPhotos: number;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('all');
  const [galleryIndexMap, setGalleryIndexMap] = useState<Record<string, number>>({});
  const [viewType, setViewType] = useState<'project' | 'all-photos'>('project');

  // Fullscreen Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxImage, setLightboxImage] = useState<string>('');
  const [lightboxTitle, setLightboxTitle] = useState<string>('');
  const [lightboxProject, setLightboxProject] = useState<ProjectItem | null>(null);
  const [lightboxCurrentIndex, setLightboxCurrentIndex] = useState<number>(0);

  // Flat list of all 8 individual project photos for "All Photos" view
  const allProjectPhotos: PhotoCardItem[] = useMemo(() => {
    const list: PhotoCardItem[] = [];
    PROJECTS_DATA.forEach((proj) => {
      proj.gallery.forEach((imgUrl, idx) => {
        list.push({
          id: `${proj.id}-${idx}`,
          projectName: proj.name,
          image: imgUrl,
          photoIndex: idx + 1,
          totalPhotos: proj.gallery.length,
        });
      });
    });
    return list;
  }, []);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedProjectId === 'all') return PROJECTS_DATA;
    return PROJECTS_DATA.filter((p) => p.id === selectedProjectId);
  }, [selectedProjectId]);

  // Filtered photos for "All Photos" view
  const filteredAllPhotos = useMemo(() => {
    if (selectedProjectId === 'all') return allProjectPhotos;
    const target = PROJECTS_DATA.find(p => p.id === selectedProjectId);
    if (!target) return allProjectPhotos;
    return allProjectPhotos.filter(item => item.projectName === target.name);
  }, [selectedProjectId, allProjectPhotos]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNextPhoto();
      if (e.key === 'ArrowLeft') handlePrevPhoto();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleOpenLightbox = (proj: ProjectItem, index: number) => {
    setLightboxProject(proj);
    setLightboxCurrentIndex(index);
    setLightboxImage(proj.gallery[index] || proj.image);
    setLightboxTitle(proj.name);
    setLightboxOpen(true);
  };

  const handleNextPhoto = () => {
    if (!lightboxProject) return;
    const nextIdx = (lightboxCurrentIndex + 1) % lightboxProject.gallery.length;
    setLightboxCurrentIndex(nextIdx);
    setLightboxImage(lightboxProject.gallery[nextIdx]);
  };

  const handlePrevPhoto = () => {
    if (!lightboxProject) return;
    const total = lightboxProject.gallery.length;
    const prevIdx = (lightboxCurrentIndex - 1 + total) % total;
    setLightboxCurrentIndex(prevIdx);
    setLightboxImage(lightboxProject.gallery[prevIdx]);
  };

  const handleThumbnailClick = (projectId: string, index: number) => {
    setGalleryIndexMap((prev) => ({
      ...prev,
      [projectId]: index,
    }));
  };

  const handleCycleImage = (projectId: string, direction: 'next' | 'prev', total: number) => {
    setGalleryIndexMap((prev) => {
      const current = prev[projectId] || 0;
      let next = direction === 'next' ? current + 1 : current - 1;
      if (next < 0) next = total - 1;
      if (next >= total) next = 0;
      return { ...prev, [projectId]: next };
    });
  };

  return (
    <div className="w-full bg-[#F8FAFC] text-slate-800 min-h-screen">
      
      {/* 1. Clean, Compact Corporate Header */}
      <section className="bg-[#062747] text-white py-10 sm:py-14 border-b border-[#0798F2]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0798F2]/20 border border-[#0798F2]/30 text-[#0798F2] text-xs font-bold uppercase tracking-widest mb-3">
                <HardHat className="w-3.5 h-3.5" />
                <span>OFFICIAL FIELD PROJECTS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                Our Projects
              </h1>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 bg-white/10 p-1 rounded-xl border border-white/15 w-fit">
              <button
                onClick={() => setViewType('project')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewType === 'project'
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>By Project (5)</span>
              </button>
              <button
                onClick={() => setViewType('all-photos')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  viewType === 'all-photos'
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Grid3X3 className="w-3.5 h-3.5" />
                <span>All Photos (8)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Project Name Filter Tabs Bar (Sticky) */}
      {/* <section className="sticky top-[68px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
            <button
              onClick={() => setSelectedProjectId('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedProjectId === 'all'
                  ? 'bg-[#062747] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All Projects
            </button>

            {PROJECTS_DATA.map((proj) => (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold font-mono transition-all cursor-pointer whitespace-nowrap ${
                  selectedProjectId === proj.id
                    ? 'bg-[#0798F2] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-[#062747]'
                }`}
              >
                [{proj.name}]
              </button>
            ))}
          </div>
        </div>
      </section> */}

      {/* 3. Main Projects Gallery Grid */}
      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {viewType === 'project' ? (
            /* ============================================================ */
            /* VIEW 1: BY PROJECT (5 Clean Showcase Cards)                 */
            /* ============================================================ */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((proj, idx) => {
                const currentImgIdx = galleryIndexMap[proj.id] || 0;
                const activePhotoUrl = proj.gallery[currentImgIdx] || proj.image;

                return (
                  <motion.div
                    key={proj.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.05, ease: smoothEase }}
                    className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 hover:border-[#0798F2]/60 hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    <div>
                      {/* Image Frame with Click to Expand */}
                      <div className="relative w-full aspect-[16/11] sm:aspect-[16/10] bg-slate-950 overflow-hidden cursor-pointer">
                        <img
                          src={activePhotoUrl}
                          alt={proj.name}
                          onClick={() => handleOpenLightbox(proj, currentImgIdx)}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div 
                          className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" 
                        />

                        {/* Top [Name] Badge overlay */}
                        {/* <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                          <span className="bg-[#0798F2] px-3 py-1 rounded-lg text-white font-mono font-bold text-xs sm:text-sm tracking-wide shadow-md">
                            {proj.name}
                          </span>
                          
                          {proj.gallery.length > 1 && (
                            <span className="bg-black/60 backdrop-blur-md text-white text-[11px] font-mono px-2 py-0.5 rounded-md border border-white/20">
                              {currentImgIdx + 1} / {proj.gallery.length}
                            </span>
                          )}
                        </div> */}

                        {/* Image Navigation Arrows (if project has multiple photos) */}
                        {proj.gallery.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCycleImage(proj.id, 'prev', proj.gallery.length);
                              }}
                              className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-[#0798F2] text-white transition-all backdrop-blur-sm cursor-pointer shadow-md opacity-80 hover:opacity-100"
                              aria-label="Previous image"
                            >
                              <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleCycleImage(proj.id, 'next', proj.gallery.length);
                              }}
                              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/60 hover:bg-[#0798F2] text-white transition-all backdrop-blur-sm cursor-pointer shadow-md opacity-80 hover:opacity-100"
                              aria-label="Next image"
                            >
                              <ChevronRight className="w-4 h-4" />
                            </button>
                          </>
                        )}

                        {/* Inspect Hint Button */}
                        <button
                          onClick={() => handleOpenLightbox(proj, currentImgIdx)}
                          className="absolute bottom-3 right-3 p-2 rounded-lg bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-sm transition-all cursor-pointer opacity-80 hover:opacity-100"
                          title="View Fullscreen High-Res Image"
                          aria-label="View Fullscreen"
                        >
                          <Maximize2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Multiple Photos Thumbnail Strip */}
                      {proj.gallery.length > 0 && (
                        <div className="p-3 bg-slate-50 border-t border-slate-100 flex items-center gap-2 overflow-x-auto no-scrollbar">
                          {proj.gallery.map((thumbUrl, tIdx) => (
                            <button
                              key={tIdx}
                              onClick={() => handleThumbnailClick(proj.id, tIdx)}
                              className={`relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                                currentImgIdx === tIdx
                                  ? 'border-[#0798F2] scale-105 shadow-sm'
                                  : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                              }`}
                            >
                              <img
                                src={thumbUrl}
                                alt={`${proj.name} view ${tIdx + 1}`}
                                className="w-full h-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* ONLY Project Name Bar */}
                    <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between">
                      <h3 className="text-base sm:text-lg font-bold font-mono text-[#062747] group-hover:text-[#0798F2] transition-colors leading-tight">
                        {proj.name}
                      </h3>

                      <button
                        onClick={() => handleOpenLightbox(proj, currentImgIdx)}
                        className="p-2 rounded-lg text-slate-400 hover:text-[#0798F2] hover:bg-slate-100 transition-colors cursor-pointer shrink-0 ml-2"
                        title="Open full photo"
                      >
                        {/* <Eye className="w-4 h-4" /> */}
                      </button>
                    </div>

                  </motion.div>
                );
              })}
            </div>
          ) : (
            /* ============================================================ */
            /* VIEW 2: ALL PHOTOS (Every Single Field Photo Displayed)     */
            /* ============================================================ */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredAllPhotos.map((item, idx) => {
                const parentProj = PROJECTS_DATA.find(p => p.name === item.projectName);

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: idx * 0.04, ease: smoothEase }}
                    className="group bg-white rounded-2xl border border-slate-200/90 hover:border-[#0798F2]/60 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  >
                    {/* Photo Viewport */}
                    <div 
                      className="relative w-full aspect-[4/3] bg-slate-950 overflow-hidden cursor-pointer"
                      onClick={() => {
                        if (parentProj) {
                          handleOpenLightbox(parentProj, item.photoIndex - 1);
                        }
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.projectName}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                      {/* Photo Badge */}
                      {/* <div className="absolute top-3 left-3 pointer-events-none">
                        <span className="bg-[#0798F2] px-2.5 py-1 rounded-md text-white font-mono font-bold text-xs shadow-sm">
                          {item.projectName}
                        </span>
                      </div> */}

                      {/* Expand Icon */}
                      <div className="absolute bottom-3 right-3 p-1.5 rounded-md bg-black/60 text-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* ONLY Project Name */}
                    <div className="p-4 bg-white border-t border-slate-100">
                      <h4 className="text-sm font-bold font-mono text-[#062747] group-hover:text-[#0798F2] transition-colors truncate">
                        {item.projectName}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* 4. Minimal Clean Contact Strip */}
      <section className="bg-white border-t border-slate-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#062747]">
              Inquire Capabilities &amp; Commercial Rates for Your Site
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Al-Jubail, KSA · Direct Line: +966 59 499 7686 · Email: admin-isd@sanivate.co
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-2.5 rounded-xl bg-[#0798F2] hover:bg-[#0680cb] text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            Contact Team →
          </button>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. FULLSCREEN HIGH-RESOLUTION PHOTO MODAL / LIGHTBOX        */}
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
                <div className="flex items-center gap-3">
                  <span className="font-mono text-sm sm:text-base font-black text-white bg-[#0798F2] px-3.5 py-1 rounded-lg">
                    {lightboxTitle}
                  </span>
                  {lightboxProject && lightboxProject.gallery.length > 1 && (
                    <span className="text-xs font-mono text-slate-300">
                      Photo {lightboxCurrentIndex + 1} of {lightboxProject.gallery.length}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Close photo preview"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox Main Uncropped Photo */}
              <div className="relative my-4 flex items-center justify-center min-h-[50vh] max-h-[75vh] overflow-hidden">
                <img
                  src={lightboxImage}
                  alt={lightboxTitle}
                  className="max-h-[73vh] w-auto max-w-full object-contain rounded-xl shadow-2xl select-none"
                />

                {lightboxProject && lightboxProject.gallery.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevPhoto}
                      className="absolute left-2 sm:left-4 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextPhoto}
                      className="absolute right-2 sm:right-4 p-2.5 rounded-full bg-black/60 hover:bg-[#0798F2] text-white backdrop-blur-md transition-all cursor-pointer border border-white/20"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Bottom Thumbnail Strip (if multiple photos) */}
              {lightboxProject && lightboxProject.gallery.length > 1 && (
                <div className="flex items-center justify-center gap-2 overflow-x-auto py-2 border-t border-white/15">
                  {lightboxProject.gallery.map((thumb, gIdx) => (
                    <button
                      key={gIdx}
                      onClick={() => {
                        setLightboxCurrentIndex(gIdx);
                        setLightboxImage(thumb);
                      }}
                      className={`h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        lightboxCurrentIndex === gIdx
                          ? 'border-[#0798F2] scale-105'
                          : 'border-white/20 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumb}
                        alt="Thumbnail preview"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
