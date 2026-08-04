import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Cpu, MonitorSmartphone, Shield, CheckCircle2, ChevronRight, ArrowRight,
  Activity, Lock, Eye, Cloud, Smartphone, BarChart3, Users, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const storeSkuData = [
  { time: "08:00", sales: 4200, inventory: 98 },
  { time: "10:00", sales: 7800, inventory: 92 },
  { time: "12:00", sales: 12400, inventory: 85 },
  { time: "14:00", sales: 16900, inventory: 78 },
  { time: "16:00", sales: 21500, inventory: 95 },
  { time: "18:00", sales: 28400, inventory: 90 },
  { time: "20:00", sales: 34200, inventory: 86 },
];

const xonData = [
  { time: "00:00", events: 12, threats: 0 },
  { time: "04:00", events: 8, threats: 0 },
  { time: "08:00", events: 140, threats: 1 },
  { time: "12:00", events: 320, threats: 0 },
  { time: "16:00", events: 280, threats: 0 },
  { time: "20:00", events: 190, threats: 0 },
  { time: "23:59", events: 45, threats: 0 },
];

export default function TechnologyPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeTech, setActiveTech] = useState<"storesku" | "xon">("storesku");

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans relative selection:bg-amber-400 selection:text-slate-800 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <section className="relative py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-400/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Cpu className="w-4 h-4 text-amber-400" />
            Proprietary Tech Suite
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
            AI-Powered <span className="shimmer-text">Business Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed mb-8">
            Smart software platforms engineered to automate daily store operations and safeguard commercial enterprise assets 24/7.
          </p>

          {/* Toggle Buttons */}
          <div className="inline-flex p-1.5 rounded-2xl bg-gray-50 border border-gray-200 backdrop-blur-md">
            <button
              onClick={() => setActiveTech("storesku")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                activeTech === "storesku"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-800 font-bold shadow-[0_0_20px_rgba(245,183,0,0.35)]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              StoreSKU™ AI Retail
            </button>
            <button
              onClick={() => setActiveTech("xon")}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                activeTech === "xon"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-800 font-bold shadow-[0_0_20px_rgba(245,183,0,0.35)]"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              X-ON™ AI Security
            </button>
          </div>
        </div>
      </section>

      {/* Main Tech Showcase */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              {activeTech === "storesku" ? (
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400 shadow-[0_0_30px_rgba(245,183,0,0.3)]">
                    <MonitorSmartphone className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">StoreSKU™ AI Platform</h2>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    Retail operations management platform for convenience stores, gas stations, liquor stores, and multi-location retail chains.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "Daily Store Operations & Shift Audit",
                      "Employee Management & Timecard Tracking",
                      "Inventory Control & Shrinkage Prevention",
                      "Compliance Audits & Checklist Workflows",
                      "Automated Task Management",
                      "Real-time Business Analytics & POS Reordering",
                      "Cloud Performance Dashboard & Mobile App"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => setInquiryOpen(true)} className="bg-amber-400 text-slate-800 font-bold hover:bg-amber-500 h-14 px-8 clip-diagonal text-base">
                    Schedule StoreSKU™ Live Demo
                  </Button>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center text-amber-700 shadow-[0_0_30px_rgba(56,189,248,0.3)]">
                    <Shield className="w-8 h-8" />
                  </div>
                  
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900">X-ON™ AI Security System</h2>
                  
                  <p className="text-gray-600 leading-relaxed font-light">
                    Smart surveillance and AI-powered security engineered for commercial retail stores, warehouses, hotels, and industrial plants.
                  </p>

                  <div className="space-y-3 pt-2">
                    {[
                      "AI-Powered Smart Camera Systems",
                      "24/7 Remote Monitoring & Mobile Cloud Stream",
                      "Loss Prevention & Anti-Theft Analytics",
                      "Real-time Threat & Incident Detection",
                      "Encrypted Off-Site Cloud Storage",
                      "Mobile App Control & Instant Alerts",
                      "Commercial Business Security Intelligence"
                    ].map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <Button onClick={() => setInquiryOpen(true)} className="bg-gray-950 text-slate-800 text-slate-800 font-bold hover:bg-gray-800 h-14 px-8 clip-diagonal text-base">
                    Request X-ON™ Security Specs
                  </Button>
                </div>
              )}
            </div>

            {/* Right Interactive Visual Box */}
            <div className="lg:col-span-6">
              <div className="glass-card-cyber rounded-3xl p-6 sm:p-8 relative overflow-hidden font-mono text-xs">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="ml-2 font-bold text-gray-700">
                      {activeTech === "storesku" ? "StoreSKU™_v4.2_NODE" : "X-ON_AI_NODE_09"}
                    </span>
                  </div>
                  <span className="text-emerald-700 flex items-center gap-1 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    ONLINE
                  </span>
                </div>

                {/* Dynamic Chart */}
                <div className="h-56 w-full mb-4 bg-gray-50/60 p-3 rounded-xl border border-gray-100">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activeTech === "storesku" ? storeSkuData : xonData}>
                      <defs>
                        <linearGradient id="techColor" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor={activeTech === "storesku" ? "#F5B700" : "#38BDF8"} stopOpacity={0.4}/>
                          <stop offset="95%" stopColor={activeTech === "storesku" ? "#F5B700" : "#38BDF8"} stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#64748B" fontSize={10} tickLine={false} />
                      <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                      <Tooltip contentStyle={{ backgroundColor: "#0F172A", borderColor: "#334155", color: "#fff", fontSize: 11 }} />
                      <Area type="monotone" dataKey={activeTech === "storesku" ? "sales" : "events"} stroke={activeTech === "storesku" ? "#F5B700" : "#38BDF8"} strokeWidth={2.5} fill="url(#techColor)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-4 bg-gray-50/90 rounded-xl border border-gray-100 space-y-2 text-gray-600 text-xs">
                  <div className="flex justify-between">
                    <span>SYSTEM STATUS:</span>
                    <span className="text-emerald-700 font-bold">100% OPERATIONAL</span>
                  </div>
                  <div className="text-[11px] text-gray-500 font-mono">
                    {activeTech === "storesku" 
                      ? "[StoreSKU AI]: POS sync active. Inventory auto-reorder trigger evaluated across 1,480 stores."
                      : "[X-ON AI]: 24/7 Threat analytics streaming. Zero intrusion breaches logged across connected sites."}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
