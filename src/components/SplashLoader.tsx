import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Sparkles, ShieldCheck, Cpu, ArrowRight } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

interface SplashLoaderProps {
  onComplete?: () => void;
}

export function SplashLoader({ onComplete }: SplashLoaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing OneTrade360 Ecosystem...");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const duration = 2600; // ms
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
          exit={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center overflow-hidden font-sans"
        >
          {/* Subtle ambient glows on white */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100 rounded-full blur-[180px] opacity-80 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[160px] opacity-60 pointer-events-none" />
          <div className="absolute inset-0 bg-grid-cyber opacity-40 pointer-events-none" />

          {/* Main Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xl px-6 text-center">
            
            {/* Logo Container with Dual Orbit Rings */}
            <div className="relative w-64 h-64 sm:w-[340px] sm:h-[340px] mt-4 flex items-center justify-center mb-8">
              {/* Outer Gold Orbit Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-amber-400 p-4"
              >
                <div className="w-4 h-4 bg-amber-400 rounded-full shadow-[0_0_20px_#F59E0B] absolute -top-2 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Inner Navy Orbit Ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-gray-200"
              >
                <div className="w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_15px_rgba(15,23,42,0.4)] absolute -bottom-2 left-1/2 -translate-x-1/2" />
              </motion.div>

              {/* Central Logo Box */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative z-10 w-48 h-48 sm:w-[260px] sm:h-[260px] rounded-3xl bg-white border-2 border-amber-400 p-4 shadow-[0_20px_60px_rgba(245,158,11,0.25)] flex items-center justify-center overflow-hidden"
              >
                <img 
                  src={logoImg} 
                  alt="OneTrade360° Global Network Logo" 
                  className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            </div>

            {/* Title & Brand Tagline */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold uppercase tracking-widest mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Global Business Ecosystem
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-gray-950 tracking-tight mb-2">
                OneTrade<span className="text-amber-600">360™</span>
              </h2>
              
              <p className="text-xs sm:text-sm text-gray-600 font-sans max-w-md mb-6 leading-relaxed">
                One Platform. Global Connections. Endless Opportunities.
              </p>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-full max-w-sm space-y-3">
              <div className="relative w-full h-3 bg-gray-100 rounded-full overflow-hidden p-0.5 border border-gray-200 shadow-inner">
                <motion.div 
                  className="h-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>

              {/* Status and Percentage */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                <span className="truncate max-w-[260px] text-left text-gray-700 font-sans text-[11px]">
                  {statusText}
                </span>
                <span className="font-bold text-amber-600 text-sm ml-2">
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Country Hub Indicators */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex items-center justify-center gap-6 text-[11px] font-mono text-gray-700 border-t border-gray-200 pt-4 w-full"
            >
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                INDIA 🇮🇳
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-gray-800 animate-pulse" />
                USA 🇺🇸
              </span>
              <span className="text-gray-600">•</span>
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
                CANADA 🇨🇦
              </span>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
