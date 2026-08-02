import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ArrowUpRight, Sparkles, CheckCircle } from "lucide-react";

interface SplashLoaderProps {
  onComplete?: () => void;
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing OneTrade360 Ecosystem...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2200; // ms
    const intervalTime = 30;
    const increment = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment + Math.random() * 2, 100);
        
        if (next < 25) {
          setStatusText("Initializing OneTrade360 Ecosystem...");
        } else if (next < 55) {
          setStatusText("Mapping Global Trade Corridors (USA • India • Canada)...");
        } else if (next < 85) {
          setStatusText("Syncing StoreSKU™ AI & Verified OEM Factories...");
        } else if (next < 99) {
          setStatusText("Establishing 360° Business Connections...");
        } else {
          setStatusText("Ecosystem Ready • Launching OneTrade360");
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 400);
          return 100;
        }
        return next;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="splash-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03, filter: "blur(8px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#070B14] flex flex-col items-center justify-center overflow-hidden selection:bg-primary"
        >
          {/* Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none animate-pulse-gold" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center max-w-lg px-6 text-center">
            
            {/* Logo Wrapper with Orbital Rings */}
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 flex items-center justify-center mb-8">
              {/* Outer Golden Orbit Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary/40 p-2"
              >
                <div className="w-3 h-3 bg-primary rounded-full shadow-[0_0_12px_#F5B700] absolute -top-1.5 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Inner Pulsing Blue Orbit */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full border border-blue-500/30"
              >
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_10px_#60A5FA] absolute -bottom-1.5 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Central Glowing Shield with Logo Image */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-gradient-to-b from-slate-900 to-black p-2 border border-primary/50 shadow-[0_0_50px_rgba(245,183,0,0.3)] flex items-center justify-center overflow-hidden group"
              >
                <img 
                  src="/logo.jpeg" 
                  alt="OneTrade360° Global Network" 
                  className="w-full h-full object-contain rounded-full transform group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Title & Brand Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Global Business Ecosystem
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mb-1">
                OneTrade<span className="text-primary">360°</span>
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-400 uppercase tracking-widest font-mono mb-6">
                Connect • Trade • Grow • Collaborate • Succeed
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-xs space-y-3">
              <div className="relative w-full h-2 bg-slate-800/90 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-primary rounded-full shadow-[0_0_15px_#F5B700]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate max-w-[220px] text-left text-slate-300 font-sans">
                  {statusText}
                </span>
                <span className="font-bold text-primary text-sm ml-2">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Market Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400 border-t border-white/10 pt-4 w-full"
            >
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                USA
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INDIA
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                CANADA
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
