import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Counter } from "@/components/Counter";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { TradeCalculator } from "@/components/TradeCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import logoImg from "@/assets/logo-transparent.png";
import { 
  Globe, Building2, TrendingUp, Box, Shield, Activity, 
  Cpu, Layers, ArrowRight, ChevronRight, CheckCircle2, Factory, MonitorSmartphone, MapPin, Phone, Mail,
  Sparkles, Zap, Lock, RefreshCw, Briefcase, Award, ArrowUpRight, MessageSquare, ShieldCheck, Target, Compass,
  DollarSign, ShoppingCart, Hotel, Utensils, Stethoscope, Store, Play, BarChart3, Radio, ArrowDownRight, Users, Grid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

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
  { time: "08:00", threats: 0, clear: 100 },
  { time: "10:00", threats: 1, clear: 99 },
  { time: "12:00", threats: 0, clear: 100 },
  { time: "14:00", threats: 2, clear: 98 },
  { time: "16:00", threats: 0, clear: 100 },
  { time: "18:00", threats: 1, clear: 99 },
  { time: "20:00", threats: 0, clear: 100 },
];

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"storesku" | "xon">("storesku");
  const [activeCorridor, setActiveCorridor] = useState<"india" | "usa" | "canada">("india");

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-slate-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      
      {/* Navigation Header */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      {/* Top Live Ticker */}
      <div className="pt-20 sm:pt-24 bg-slate-900 text-white">
        <LiveTicker />
      </div>

      {/* SECTION 1: CLEAN WHITE BENTO GRID HERO */}
      <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Soft Decorative Ambient Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-500/5 via-amber-500/5 to-blue-500/5 rounded-full blur-[160px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header Title Bar */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs font-mono font-semibold uppercase tracking-widest mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>One Platform. Global Connections. Endless Opportunities.</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-4">
              The Complete <span className="shimmer-text-light">Business Ecosystem</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto leading-relaxed">
              Connecting entrepreneurs, retailers, investors, manufacturers, suppliers, and service providers across <strong className="text-slate-950 font-medium">India 🇮🇳, USA 🇺🇸, and Canada 🇨🇦</strong> into one unified trade network.
            </p>
          </div>

          {/* MAIN WHITE BENTO GRID SHOWCASE */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Bento Cell 1: Prominent Large Logo Shield (2 Cols) */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="lg:col-span-2 glass-card-light rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-2 border-amber-400/80 shadow-[0_10px_35px_rgba(245,183,0,0.15)] relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6 pb-6 border-b border-slate-200/90">
                <div className="p-3.5 rounded-2xl bg-white border-2 border-amber-400 shadow-[0_4px_25px_rgba(245,183,0,0.3)]">
                  <img 
                    src={logoImg} 
                    alt="OneTrade360 Logo" 
                    className="h-16 sm:h-22 w-auto object-contain max-w-[260px]" 
                  />
                </div>

                <div className="flex flex-col items-center sm:items-end gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    SYSTEM ONLINE
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">Verified Global B2B Platform</span>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-serif font-bold text-slate-950 leading-snug">
                  One Login. Unlimited Business Opportunities.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  Whether launching your first business, expanding across multiple locations, sourcing products internationally, or investing in new opportunities — OneTrade360™ unifies your entire growth pipeline.
                </p>
              </div>

              <div className="pt-6 flex items-center gap-3">
                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="h-12 px-6 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold uppercase font-mono text-xs clip-diagonal shadow-[0_4px_20px_rgba(245,183,0,0.35)] cursor-pointer hover:brightness-105"
                >
                  Connect With Us Today
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </motion.div>

            {/* Bento Cell 2: Global Trade Corridors Status */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-card-light rounded-3xl p-6 flex flex-col justify-between border border-slate-200 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-cyan-50 border border-cyan-200 text-cyan-700 flex items-center justify-center">
                  <Globe className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-xs font-mono text-cyan-700 uppercase tracking-widest mb-1">Trade Corridors</div>
                  <h4 className="text-xl font-serif font-bold text-slate-950">India • USA • Canada</h4>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Direct cross-border sourcing, door-to-door export logistics, and verified manufacturer compliance.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Lead Time:</span>
                <span className="text-emerald-700 font-bold">14-21 Days</span>
              </div>
            </motion.div>

            {/* Bento Cell 3: StoreSKU™ AI Retail Engine Stats */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-card-light rounded-3xl p-6 flex flex-col justify-between border border-slate-200 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-700 uppercase tracking-widest mb-1">StoreSKU™ Engine</div>
                  <h4 className="text-2xl font-serif font-bold text-slate-950">
                    <Counter end={1480} suffix="+" /> Stores
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Daily store operations, inventory tracking, task compliance & live analytics dashboard.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Sync Status:</span>
                <span className="text-amber-700 font-bold">Real-Time</span>
              </div>
            </motion.div>

            {/* Bento Cell 4: X-ON™ AI Security Telemetry */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-card-light rounded-3xl p-6 flex flex-col justify-between border border-slate-200 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-emerald-700 uppercase tracking-widest mb-1">X-ON™ Surveillance</div>
                  <h4 className="text-2xl font-serif font-bold text-slate-950">99.9% Safe</h4>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Smart AI camera systems, remote loss prevention & incident detection for commercial businesses.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-600">
                <span>Threat Filter:</span>
                <span className="text-emerald-700 font-bold">1.4M / day</span>
              </div>
            </motion.div>

            {/* Bento Cell 5: Global OEM Manufacturing (2 Cols) */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="md:col-span-2 glass-card-light rounded-3xl p-6 flex flex-col justify-between border border-slate-200 relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-200 text-indigo-700 flex items-center justify-center">
                    <Factory className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-indigo-700 uppercase tracking-widest">Manufacturing Network</div>
                    <h4 className="text-lg font-serif font-bold text-slate-950">120+ Audited OEM Plants</h4>
                  </div>
                </div>

                <Link href="/manufacturing" className="text-xs font-mono text-cyan-700 hover:text-amber-600 transition-colors flex items-center gap-1">
                  <span>Factory Portal</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>

              <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                Source directly from verified factories in Nutraceuticals, Pharma, Cosmetics, Food Packaging, Tissue, Cleaning, and Commercial Kitchen Equipment.
              </p>

              <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[10px]">OEM Sourcing</div>
                  <div className="text-slate-950 font-bold">Direct Factory</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[10px]">QA Verification</div>
                  <div className="text-slate-950 font-bold">100% Audited</div>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="text-slate-500 text-[10px]">Margin Boost</div>
                  <div className="text-emerald-700 font-bold">Up to 35%</div>
                </div>
              </div>
            </motion.div>

            {/* Bento Cell 6: Global Business Service™ & Acquisition */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="glass-card-light rounded-3xl p-6 flex flex-col justify-between border border-slate-200 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-amber-700 uppercase tracking-widest mb-1">Business Acquisition</div>
                  <h4 className="text-lg font-serif font-bold text-slate-950">Buy & Sell Businesses</h4>
                </div>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Gas Stations, C-Stores, Hotels, Restaurants, Car Washes & Laundromats valuation & consulting.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <Link href="/consulting" className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-700 hover:text-amber-600 transition-colors">
                  <span>View Services</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2: CLEAN WHITE BENTO SOLUTIONS SHOWCASE */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-mono font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Grid className="w-4 h-4 text-amber-500" />
              Turnkey Business Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-950 mb-4">
              Designed for <span className="shimmer-text-light">High Performance Operations</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              From concept development to daily store operational execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Restaurant & Café Solutions",
                desc: "Complete café & restaurant setup, commercial kitchen design, coffee equipment, tea programs, beverage solutions, food packaging & kiosks.",
                icon: Utensils,
                color: "from-amber-400 to-amber-600",
                link: "/solutions"
              },
              {
                title: "Convenience Store Solutions",
                desc: "StoreSKU™ AI, X-ON™ Security, POS systems, gondola shelving, slatwall systems, refrigeration equipment, thermal paper rolls & store supplies.",
                icon: Store,
                color: "from-cyan-500 to-blue-600",
                link: "/solutions"
              },
              {
                title: "Hospitality & Hotel Solutions",
                desc: "Hotel/motel supplies, furniture & fixtures, security systems, cleaning products, tissue products, guest amenities & facility equipment.",
                icon: Hotel,
                color: "from-emerald-500 to-teal-600",
                link: "/solutions"
              },
              {
                title: "Wholesale & Distribution",
                desc: "Bulk F&B supply, tissue products, coffee cups, packaging containers, cleaning products, commercial equipment & medical supplies.",
                icon: Box,
                color: "from-indigo-500 to-purple-600",
                link: "/solutions"
              },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card-light rounded-3xl p-6 flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-white shadow-md`}>
                      <CardIcon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <Link href={card.link} className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-700 hover:text-amber-600 transition-colors">
                      <span>Explore Solutions</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: PROPRIETARY AI TECH SUITE CONSOLE */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs font-mono font-semibold uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-amber-500" />
                Proprietary AI Tech Suite
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-950 leading-tight">
                AI-Powered <br />
                <span className="shimmer-text-light">Business Operations</span>
              </h2>

              <p className="text-slate-600 text-sm font-light leading-relaxed">
                Streamline daily store operations, employee management, inventory control, and AI security surveillance across multi-location enterprises.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-amber-600 font-bold font-serif text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-500" />
                    StoreSKU™ AI Retail Engine
                  </div>
                  <p className="text-xs text-slate-600 font-light">Daily store operations, inventory tracking, task compliance & live analytics dashboard.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-cyan-700 font-bold font-serif text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-600" />
                    X-ON™ AI Security Surveillance
                  </div>
                  <p className="text-xs text-slate-600 font-light">AI camera systems, remote loss prevention, real-time threat detection & cloud storage.</p>
                </div>
              </div>

              <Link href="/technology">
                <Button className="h-12 px-8 bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold uppercase font-mono text-xs clip-diagonal shadow-[0_4px_20px_rgba(245,183,0,0.3)] cursor-pointer">
                  Launch Tech Live Demo
                </Button>
              </Link>
            </div>

            {/* Interactive Recharts Console Visualizer */}
            <div className="lg:col-span-7">
              <div className="glass-card-light rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
                
                {/* Console Tabs */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setActiveTab("storesku")}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTab === "storesku" ? "bg-slate-900 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      StoreSKU™ AI Analytics
                    </button>
                    <button 
                      onClick={() => setActiveTab("xon")}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTab === "xon" ? "bg-cyan-600 text-white shadow-sm" : "bg-slate-100 text-slate-600 hover:text-slate-950"
                      }`}
                    >
                      X-ON™ AI Security Feed
                    </button>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    LIVE SENSORS ONLINE
                  </span>
                </div>

                {/* Live Area Chart */}
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activeTab === "storesku" ? storeSkuData : xonData}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#D97706" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#D97706" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0284C7" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#0284C7" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} />
                      <Tooltip contentStyle={{ backgroundColor: "#FFFFFF", borderColor: "#CBD5E1", color: "#0F172A", borderRadius: "12px" }} />
                      <Area 
                        type="monotone" 
                        dataKey={activeTab === "storesku" ? "sales" : "clear"} 
                        stroke={activeTab === "storesku" ? "#D97706" : "#0284C7"} 
                        fillOpacity={1} 
                        fill={activeTab === "storesku" ? "url(#colorSales)" : "url(#colorThreats)"} 
                        strokeWidth={2}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Supply Chain ROI Calculator */}
      <TradeCalculator />

      {/* Verified Client Testimonials */}
      <TestimonialsSection />

      {/* Final Call to Action Section */}
      <section className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="rounded-3xl p-10 sm:p-16 border-2 border-amber-400/50 bg-slate-950/60 shadow-[0_0_80px_rgba(245,183,0,0.2)]">
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-6 leading-tight">
              Everything Your Business Needs. <br />
              <span className="shimmer-text">All in One Place.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether opening a new store, sourcing products globally, expanding your enterprise, or investing in the next business opportunity — OneTrade360™ gives you direct access to trusted suppliers, AI technology, and global manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setInquiryOpen(true)}
                className="w-full sm:w-auto h-13 px-10 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold uppercase font-mono text-xs clip-diagonal shadow-[0_0_30px_rgba(245,183,0,0.4)] cursor-pointer"
              >
                Connect With Us Today
              </Button>

              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto h-13 px-8 border-white/20 text-white hover:border-cyan-400 font-mono text-xs uppercase clip-diagonal cursor-pointer">
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer onReplaySplash={() => setShowSplash(true)} onOpenInquiry={() => setInquiryOpen(true)} />
    </div>
  );
}
