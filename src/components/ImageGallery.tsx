import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, PlayCircle, 
  Sparkles, ImageIcon, Film, Eye, Layers
} from "lucide-react";

const IMAGES = [
  "gallery-1.jpeg", "gallery-2.jpeg", "gallery-3.jpeg", "gallery-4.jpeg",
  "gallery-5.jpeg", "gallery-6.jpeg", "gallery-7.jpeg", "gallery-8.jpeg",
  "gallery-9.jpeg", "gallery-10.jpeg", "gallery-11.jpeg", "gallery-12.jpeg",
  "gallery-13.jpeg", "gallery-14.jpeg", "gallery-15.jpeg", "gallery-16.jpeg",
  "gallery-17.jpeg", "gallery-18.jpeg", "gallery-19.jpeg", "gallery-20.jpeg",
  "gallery-21.jpeg", "gallery-22.jpeg", "gallery-23.jpeg", "gallery-24.jpeg",
  "gallery-25.jpeg", "gallery-26.jpeg", "gallery-27.jpeg", "gallery-28.jpeg"
];

const VIDEO_FILE = "gallery-29.mp4";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const SLIDE_DURATION = 3500; // 3.5 seconds per slide

  // Auto slide effect
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPlaying, isHovered]);

  // Scroll thumbnail into view when current index changes
  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumb = thumbnailRef.current.children[currentIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const currentFile = IMAGES[currentIndex];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-gradient-to-b from-slate-50 via-amber-50/20 to-slate-50 border-b border-slate-200/80 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 to-yellow-500/15 border border-amber-500/30 text-amber-800 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-600 animate-spin-slow" />
            Live Infrastructure Showcase
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight mb-4 text-slate-900 leading-tight">
            Our Global <span className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 bg-clip-text text-transparent drop-shadow-sm">Business Gallery</span>
          </h2>
          
          <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Explore audited manufacturing plants, commercial store setups, and direct supply chain hubs across India, USA, and Canada.
          </p>
        </motion.div>

        {/* MAIN SLIDER CONTAINER WITH LUXURY FRAME */}
        <div className="max-w-6xl mx-auto mb-8">
          <div 
            className="relative p-2 sm:p-3 rounded-[2.2rem] bg-slate-900 shadow-[0_25px_60px_-15px_rgba(217,119,6,0.25)] border border-amber-500/30 transition-all duration-500 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="relative rounded-3xl overflow-hidden bg-slate-950">
              {/* Top Animated Progress Bar */}
              <div className="absolute top-0 left-0 right-0 z-30 h-1.5 bg-black/50 backdrop-blur-sm">
                {isPlaying && !isHovered && (
                  <motion.div
                    key={currentIndex}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    className="h-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.9)]"
                  />
                )}
              </div>

              {/* Slide Display */}
              <div 
                className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] w-full flex items-center justify-center cursor-pointer bg-slate-950"
                onClick={() => setSelectedFile(currentFile)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentFile}
                    src={`${import.meta.env.BASE_URL}images/gallery/${currentFile}`}
                    alt={`Slide ${currentIndex + 1}`}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full h-full object-contain sm:object-cover"
                  />
                </AnimatePresence>

                {/* Elegant Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Counter & Status Badges */}
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-mono font-bold tracking-wider flex items-center gap-2 shadow-lg">
                    <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                    <span>{currentIndex + 1}</span>
                    <span className="text-slate-500">/</span>
                    <span>{IMAGES.length}</span>
                  </span>

                  {isHovered && (
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-[10px] font-mono font-black uppercase tracking-widest shadow-lg flex items-center gap-1.5"
                    >
                      <span className="w-2 h-2 rounded-full bg-slate-950 animate-ping" />
                      Paused On Hover
                    </motion.span>
                  )}
                </div>

                {/* Fullscreen Expand Icon */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedFile(currentFile);
                  }}
                  className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-slate-950/70 hover:bg-amber-500 text-white hover:text-slate-950 border border-amber-500/30 transition-all duration-300 flex items-center justify-center backdrop-blur-md shadow-xl hover:scale-110"
                  title="Expand image"
                >
                  <Maximize2 className="w-4.5 h-4.5" />
                </button>

                {/* Left / Right Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950/60 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 text-white hover:text-slate-950 border border-amber-500/30 transition-all duration-300 flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-110"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-slate-950/60 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 text-white hover:text-slate-950 border border-amber-500/30 transition-all duration-300 flex items-center justify-center backdrop-blur-md shadow-2xl hover:scale-110"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>

                {/* Bottom Overlay Info & Controls */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-auto">
                  <div className="text-white drop-shadow-lg hidden sm:block">
                    <div className="text-sm font-bold font-mono text-amber-300 uppercase tracking-widest flex items-center gap-2">
                      <Layers className="w-4 h-4 text-amber-400" />
                      OneTrade360 OEM Infrastructure & Verified Outlets
                    </div>
                    <div className="text-xs text-slate-300 mt-0.5">Click slide to expand full-screen view</div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsPlaying(!isPlaying);
                    }}
                    className="px-4 py-2 rounded-full bg-slate-950/80 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 text-white hover:text-slate-950 border border-amber-500/40 backdrop-blur-md transition-all duration-300 flex items-center gap-2 text-xs font-mono font-bold ml-auto shadow-lg"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 fill-current" />
                        <span>Pause Auto-Slide</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-current" />
                        <span>Play Auto-Slide</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="max-w-6xl mx-auto mb-16">
          <div 
            ref={thumbnailRef}
            className="flex items-center gap-3 overflow-x-auto pb-4 pt-2 px-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-200"
          >
            {IMAGES.map((file, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "border-amber-500 scale-105 shadow-[0_0_20px_rgba(245,158,11,0.6)] ring-2 ring-amber-400" 
                      : "border-slate-300 opacity-60 hover:opacity-100 hover:border-amber-400"
                  }`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/${file}`}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-amber-500/20 border-2 border-amber-400" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* FEATURED VIDEO SHOWCASE */}
        <motion.div 
          variants={FADE_UP}
          className="max-w-5xl mx-auto"
        >
          <div className="flex items-center gap-2.5 mb-4 justify-center">
            <Film className="w-5 h-5 text-amber-600 animate-bounce" />
            <h3 className="text-xl font-serif font-extrabold text-amber-700">Featured Video Overview</h3>
          </div>

          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer border-2 border-amber-500/30 hover:border-amber-400 transition-all duration-500" 
            onClick={() => setSelectedFile(VIDEO_FILE)}
          >
            <video 
              src={`${import.meta.env.BASE_URL}images/gallery/${VIDEO_FILE}`} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700" 
              muted 
              loop 
              autoPlay 
              playsInline 
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
              <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_50px_rgba(245,158,11,0.5)]">
                <PlayCircle className="w-12 h-12 ml-1 fill-current" />
              </div>
            </div>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-600 z-20" />
          </div>
        </motion.div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedFile(null)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedFile(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-amber-500 text-white hover:text-slate-950 rounded-full flex items-center justify-center transition-all duration-300 z-50 group border border-white/20 shadow-xl"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.3)] bg-slate-950 border border-amber-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedFile === VIDEO_FILE ? (
                <video 
                  src={`${import.meta.env.BASE_URL}images/gallery/${selectedFile}`} 
                  className="max-w-full max-h-[85vh] object-contain" 
                  controls 
                  autoPlay 
                />
              ) : (
                <img 
                  src={`${import.meta.env.BASE_URL}images/gallery/${selectedFile}`} 
                  alt="Gallery full view" 
                  className="max-w-full max-h-[85vh] object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
