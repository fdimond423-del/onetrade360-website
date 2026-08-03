import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, ShieldCheck, Zap, ArrowRight, DollarSign, Clock, Store, Factory, Utensils, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TradeCalculatorProps {
  onOpenInquiry: () => void;
}

export function TradeCalculator({ onOpenInquiry }: TradeCalculatorProps) {
  const [sector, setSector] = useState<"retail" | "restaurant" | "hotel" | "oem">("retail");
  const [scale, setScale] = useState<number>(3); // 1 to 20 units
  const [region, setRegion] = useState<"usa" | "india" | "canada">("usa");

  // Dynamic calculations
  const baseCostPerUnit = sector === "retail" ? 85000 : sector === "restaurant" ? 140000 : sector === "hotel" ? 220000 : 350000;
  const sourcingDiscountPercent = sector === "oem" ? 35 : sector === "restaurant" ? 28 : 22;
  const annualSavings = Math.round((baseCostPerUnit * scale * (sourcingDiscountPercent / 100)) / 1000) * 1000;
  const timeSavedWeeks = Math.round(scale * 2.5 + 4);
  const efficiencyGain = sector === "retail" ? 34 : sector === "restaurant" ? 42 : sector === "hotel" ? 29 : 48;

  return (
    <section className="py-24 relative bg-white border-y border-slate-800 overflow-hidden">
      {/* Subtle ambient glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[400px] bg-amber-600/8 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            Interactive ROI & Sourcing Estimator
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-gray-900 mb-4">
            Calculate Your <span className="shimmer-text">Ecosystem Savings</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg font-light">
            See how much your enterprise saves by tapping into direct OEM factory supply chains and StoreSKU™ AI automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Controls Panel */}
          <div className="lg:col-span-6 bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Select Business Parameters
              </h3>

              {/* 1. Industry Sector */}
              <div className="mb-6">
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  1. Business Sector
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "retail", label: "C-Store & Retail", icon: Store },
                    { id: "restaurant", label: "Café & QSR", icon: Utensils },
                    { id: "hotel", label: "Hospitality & Hotel", icon: Hotel },
                    { id: "oem", label: "Industrial & OEM", icon: Factory },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setSector(item.id as any)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs font-semibold transition-all ${
                        sector === item.id
                          ? "bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-md"
                          : "bg-white/80 border-gray-200 text-gray-600 hover:border-slate-500"
                      }`}
                    >
                      <item.icon className="w-4 h-4 shrink-0" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Target Region */}
              <div className="mb-6">
                <label className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-3">
                  2. Primary Operations Hub
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "usa", label: "🇺🇸 United States" },
                    { id: "india", label: "🇮🇳 India" },
                    { id: "canada", label: "🇨🇦 Canada" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setRegion(item.id as any)}
                      className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                        region === item.id
                          ? "bg-amber-400/20 text-amber-300 border-amber-400"
                          : "bg-white/60 border-gray-200 text-gray-500 hover:text-gray-900"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Scale Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                    3. Number of Locations / Scale
                  </label>
                  <span className="text-sm font-bold font-mono text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded-md border border-amber-400/30">
                    {scale} {scale === 1 ? "Unit" : "Units / Facilities"}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={scale}
                  onChange={(e) => setScale(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                  <span>1 Unit</span>
                  <span>10 Units</span>
                  <span>20 Units</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-500 font-mono flex items-center justify-between">
              <span>Verified Factory Supply Chain Direct API</span>
              <span className="text-emerald-700 flex items-center gap-1 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                LIVE
              </span>
            </div>
          </div>

          {/* Results Output Panel */}
          <div className="lg:col-span-6 bg-white border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_0_40px_rgba(245,183,0,0.12)]">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/8 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-200">
                <div className="text-xs font-mono text-amber-400 uppercase tracking-wider">Estimated Business Impact</div>
                <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-700 border border-emerald-500/40 text-[10px] font-mono font-bold">
                  UPDATED TODAY
                </span>
              </div>

              {/* Big Stat Box */}
              <div className="bg-white p-6 rounded-2xl border border-amber-400/30 mb-6 shadow-inner text-center sm:text-left">
                <div className="text-xs text-gray-500 uppercase font-mono mb-1">Estimated Annual Supply Chain Savings</div>
                <div className="text-4xl sm:text-5xl font-serif font-extrabold text-gray-900 tracking-tight">
                  ${annualSavings.toLocaleString()} <span className="text-amber-400 text-xl font-mono">USD</span>
                </div>
                <div className="mt-2 flex items-center justify-center sm:justify-start gap-2 text-xs text-emerald-700 font-mono">
                  <TrendingUp className="w-4 h-4" />
                  <span>Up to {sourcingDiscountPercent}% direct OEM cost reduction</span>
                </div>
              </div>

              {/* Breakdown Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Time Saved</span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-gray-900">{timeSavedWeeks} Weeks</div>
                  <div className="text-[10px] text-gray-500 font-mono">Faster Turnkey Deployment</div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-gray-200">
                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-1">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span>StoreSKU Efficiency</span>
                  </div>
                  <div className="text-2xl font-serif font-bold text-emerald-700">+{efficiencyGain}%</div>
                  <div className="text-[10px] text-gray-500 font-mono">Operations Boost</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <Button
                onClick={onOpenInquiry}
                className="w-full h-14 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-base clip-diagonal shadow-md transition-all flex items-center justify-center gap-2"
              >
                Lock In Your Custom Estimate
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-center text-[11px] text-gray-500 mt-2 font-mono">
                No obligation • Free consultation with OneTrade360 specialists
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
