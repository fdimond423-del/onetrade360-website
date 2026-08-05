import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Maximize2, X, Film, Sparkles, Video, Play } from "lucide-react";

const VIDEOS = [
  {
    id: "video-1.mp4",
    title: "OEM Manufacturing & Production Line",
    category: "Factory Operations",
    badge: "Audited Facility"
  },
  {
    id: "video-2.mp4",
    title: "Global Supply Chain & Logistics Hub",
    category: "Logistics",
    badge: "Cross-Border Cargo"
  },
  {
    id: "video-3.mp4",
    title: "Eco Packaging & Paper Products Processing",
    category: "Eco Sourcing",
    badge: "ISO Certified"
  },
  {
    id: "video-4.mp4",
    title: "StoreSKU™ Retail Outlet Infrastructure",
    category: "Retail Tech",
    badge: "POS Deployment"
  },
  {
    id: "video-5.mp4",
    title: "Turnkey Commercial Café & Hospitality Showcase",
    category: "Commercial Setup",
    badge: "Franchise Ready"
  },
  {
    id: "video-6.mp4",
    title: "Quality Control & Warehousing Walkthrough",
    category: "Quality Audit",
    badge: "100% Inspected"
  },
  {
    id: "video-7.mp4",
    title: "Enterprise Wholesale & Bulk Distribution Network",
    category: "Global Trade",
    badge: "Direct Factory"
  }
];

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-slate-950 border-b border-slate-900 relative overflow-hidden text-white"
    >
      {/* Radiant Background Ambient Orbs */}
      <div className="absolute top-1/3 left-1/4 w-[30rem] h-[30rem] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Film className="w-4 h-4 text-amber-400 animate-pulse" />
            Video Walkthrough Showcase
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold tracking-tight mb-4 leading-tight">
            See Our Operations <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.3)]">In Motion</span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            Watch live video tours of our audited OEM plants, cross-border logistics facilities, and turnkey commercial business setups.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {VIDEOS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group bg-slate-900/80 rounded-2xl overflow-hidden border border-amber-500/20 hover:border-amber-400/70 shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_40px_rgba(245,158,11,0.2)] transition-all duration-500 flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Video Thumbnail Container */}
              <div 
                className="relative aspect-video w-full overflow-hidden cursor-pointer bg-slate-950"
                onClick={() => setSelectedVideo(item.id)}
              >
                <video 
                  src={`${import.meta.env.BASE_URL}videos/${item.id}`}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  muted
                  loop
                  playsInline
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40 pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[11px] font-mono font-bold uppercase tracking-wider shadow-md">
                    {item.badge}
                  </span>
                </div>

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 rounded-full flex items-center justify-center group-hover:scale-115 transition-transform duration-300 shadow-[0_0_35px_rgba(245,158,11,0.6)]">
                    <Play className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" />
                  </div>
                </div>

                {/* Hover Text */}
                <div className="absolute bottom-3 right-3 z-10 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                  Hover to Preview • Click for Fullscreen
                </div>
              </div>

              {/* Video Info Footer */}
              <div className="p-5 bg-slate-900/90 border-t border-slate-800/80 flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-mono font-bold text-amber-400 uppercase tracking-widest mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    {item.category}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-2 leading-snug">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedVideo(item.id)}
                  className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-amber-400 hover:to-yellow-500 text-slate-300 hover:text-slate-950 transition-all duration-300 shrink-0 mt-1 border border-slate-700 hover:border-amber-400"
                  title="Expand Video"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-amber-400 text-white hover:text-slate-950 rounded-full flex items-center justify-center transition-all duration-300 z-50 group border border-white/20 shadow-2xl"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-[0_0_80px_rgba(245,158,11,0.3)] bg-black border border-amber-500/30"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src={`${import.meta.env.BASE_URL}videos/${selectedVideo}`}
                className="w-full max-h-[85vh] object-contain"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
