import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sparkles, ShieldCheck, Cpu } from "lucide-react";
import logoImg from "@/assets/logo-transparent.png";

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
          setStatusText("Mapping Global Trade Corridors (India • USA • Canada)...");
        } else if (next < 85) {
          setStatusText("Syncing StoreSKU™ AI & Verified OEM Factories...");
        } else if (next < 99) {
          setStatusText("Establishing 360° Business Connections...");
        } else {
          setStatusText("Ecosystem Ready • Launching OneTrade360™");
        }

        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            if (onComplete) onComplete();
          }, 450);
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
          exit={{ opacity: 0, scale: 1.05, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#040711] flex flex-col items-center justify-center overflow-hidden selection:bg-cyan-500 font-sans"
        >
          {/* Cyber Ambient Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-cyan-500/10 rounded-full blur-[170px] pointer-events-none animate-pulse-cyan" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none animate-pulse-gold" />
          <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xl px-6 text-center">
            
            {/* Very Large Prominent Transparent Logo Container with Dual Orbit Rings */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center mb-8">
              {/* Outer Golden Orbit Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400/50 p-4"
              >
                <div className="w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_20px_#F5B700] absolute -top-2 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Inner Cyan Orbit Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-cyan-400/50"
              >
                <div className="w-3.5 h-3.5 bg-cyan-400 rounded-full shadow-[0_0_15px_#38BDF8] absolute -bottom-2 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Central Shield Container with Large Transparent Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-56 h-56 sm:w-72 sm:h-72 rounded-3xl bg-slate-900/90 border-2 border-amber-400/80 p-5 shadow-[0_0_70px_rgba(245,183,0,0.4)] backdrop-blur-2xl flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={logoImg} 
                  alt="OneTrade360° Global Network Logo" 
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                />
              </motion.div>
            </div>

            {/* Title & Brand Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Global Business Ecosystem
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-white tracking-tight mb-2">
                OneTrade<span className="text-amber-400">360™</span>
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-md mb-6 leading-relaxed">
                One Platform. Global Connections. Endless Opportunities.
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-sm space-y-3">
              <div className="relative w-full h-3 bg-slate-900 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-500 rounded-full shadow-[0_0_20px_#38BDF8]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="truncate max-w-[260px] text-left text-slate-300 font-sans">
                  {statusText}
                </span>
                <span className="font-bold text-amber-400 text-sm ml-2">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Country Hub Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-6 text-[11px] font-mono text-slate-300 border-t border-white/10 pt-4 w-full"
            >
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                INDIA
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                USA
              </span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1.5 font-bold">
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
