import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, PlayCircle, 
  Sparkles, ImageIcon, Film
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
      className="py-20 sm:py-24 bg-slate-50 border-b border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
            Live Auto Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-600 mb-4">
            Our Global <span className="text-amber-700">Business Gallery</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Explore our state-of-the-art manufacturing, logistics, and retail ecosystem facilities in action.
          </p>
        </motion.div>

        {/* MAIN SLIDER CONTAINER */}
        <div className="max-w-6xl mx-auto mb-8">
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border border-slate-200 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Top Auto-Progress Bar */}
            <div className="absolute top-0 left-0 right-0 z-30 h-1.5 bg-black/40">
              {isPlaying && !isHovered && (
                <motion.div
                  key={currentIndex}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                  className="h-full bg-gradient-to-r from-amber-400 to-amber-600 shadow-[0_0_12px_rgba(245,183,0,0.8)]"
                />
              )}
            </div>

            {/* Slide Image Display */}
            <div 
              className="relative aspect-[16/9] sm:aspect-[21/9] md:aspect-[2.2/1] w-full flex items-center justify-center cursor-pointer bg-slate-950"
              onClick={() => setSelectedFile(currentFile)}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentFile}
                  src={`${import.meta.env.BASE_URL}images/gallery/${currentFile}`}
                  alt={`Slide ${currentIndex + 1}`}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full h-full object-contain sm:object-cover"
                />
              </AnimatePresence>

              {/* Gradient Overlay for Controls readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

              {/* Counter & Status Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold tracking-wider flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
                  {currentIndex + 1} / {IMAGES.length}
                </span>
                {isHovered && (
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/80 backdrop-blur-md text-black text-[10px] font-mono font-extrabold uppercase tracking-wider animate-pulse">
                    Paused on Hover
                  </span>
                )}
              </div>

              {/* Fullscreen Expand Icon */}
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedFile(currentFile);
                }}
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all flex items-center justify-center backdrop-blur-md shadow-lg"
                title="Expand image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>

              {/* Left / Right Nav Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all flex items-center justify-center backdrop-blur-md group-hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/40 hover:bg-amber-500 text-white hover:text-black border border-white/20 transition-all flex items-center justify-center backdrop-blur-md group-hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Bottom Info Bar & Play/Pause Button */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex items-center justify-between pointer-events-auto">
                <div className="text-white drop-shadow-md hidden sm:block">
                  <div className="text-sm font-bold font-mono text-amber-300 uppercase tracking-wider">
                    OneTrade360 OEM & Distribution Infrastructure
                  </div>
                  <div className="text-xs text-slate-300">Click slide to expand full view</div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsPlaying(!isPlaying);
                  }}
                  className="px-4 py-2 rounded-full bg-black/60 hover:bg-amber-500 text-white hover:text-black border border-white/20 backdrop-blur-md transition-all flex items-center gap-2 text-xs font-mono font-bold ml-auto"
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-current" />
                      <span>Pause Auto-Slide</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play Auto-Slide</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* THUMBNAIL STRIP */}
        <div className="max-w-6xl mx-auto mb-16">
          <div 
            ref={thumbnailRef}
            className="flex items-center gap-3 overflow-x-auto pb-4 pt-1 px-1 scrollbar-thin scrollbar-thumb-amber-500 scrollbar-track-slate-200"
          >
            {IMAGES.map((file, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "border-amber-500 scale-105 shadow-[0_0_15px_rgba(245,183,0,0.5)] ring-2 ring-amber-400" 
                      : "border-slate-300 opacity-60 hover:opacity-100 hover:border-amber-300"
                  }`}
                >
                  <img
                    src={`${import.meta.env.BASE_URL}images/gallery/${file}`}
                    alt={`Thumb ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                  {isActive && (
                    <div className="absolute inset-0 bg-amber-500/10" />
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
          <div className="flex items-center gap-2 mb-4 justify-center">
            <Film className="w-4 h-4 text-amber-600" />
            <h3 className="text-lg font-serif font-extrabold text-amber-700">Featured Video Tour</h3>
          </div>

          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-black aspect-video group cursor-pointer border border-slate-200" 
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
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/10 transition-colors">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_40px_rgba(245,183,0,0.3)]">
                <PlayCircle className="w-12 h-12 text-white ml-1" />
              </div>
            </div>
            
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 z-20" />
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedFile(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-colors z-50 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full rounded-xl overflow-hidden shadow-[0_0_60px_rgba(245,183,0,0.15)] bg-black"
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
