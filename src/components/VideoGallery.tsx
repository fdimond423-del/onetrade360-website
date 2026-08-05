import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlayCircle, Maximize2, X, Film, Sparkles, Video } from "lucide-react";

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
      className="py-20 sm:py-24 bg-white border-b border-slate-200"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Film className="w-3.5 h-3.5 text-amber-600 animate-pulse" />
            Video Walkthrough Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-600 mb-4">
            See Our Operations <span className="text-amber-700">In Motion</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Watch live video tours of our audited OEM plants, distribution centers, and turnkey business setups.
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
              className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col justify-between"
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

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Badge Tag */}
                <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-amber-400 text-[11px] font-mono font-bold uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                {/* Center Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-500/90 text-slate-950 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_30px_rgba(245,183,0,0.4)]">
                    <PlayCircle className="w-9 h-9 sm:w-10 sm:h-10 ml-0.5 fill-current" />
                  </div>
                </div>

                {/* Hover Instruction */}
                <div className="absolute bottom-2 right-3 z-10 text-[10px] font-mono text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Hover to Preview • Click for Fullscreen
                </div>
              </div>

              {/* Video Info Footer */}
              <div className="p-5 bg-slate-900 border-t border-slate-800 flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-mono font-bold text-amber-500 uppercase tracking-wider mb-1">
                    {item.category}
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <button
                  onClick={() => setSelectedVideo(item.id)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-amber-500 text-slate-300 hover:text-slate-950 transition-colors shrink-0 mt-1"
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-amber-500 rounded-full flex items-center justify-center text-white transition-colors z-50 group"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(245,183,0,0.2)] bg-black border border-slate-800"
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
