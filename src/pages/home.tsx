import React, { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
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
  DollarSign, ShoppingCart, Hotel, Utensils, Stethoscope, Store, Play, BarChart3, Radio
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const FADE_UP = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const STAGGER = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
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
    <div className="bg-[#060A14] min-h-screen text-slate-100 font-sans relative selection:bg-cyan-500 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      
      {/* Navigation Bar */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      {/* Top Live Ticker */}
      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Section - Cyber Luxe Split Banner */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Background Ambient Glow Spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-cyan-500/10 via-amber-500/10 to-indigo-500/10 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-gold" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-cyan" />
        <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Hero Text & Main CTAs */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={STAGGER}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Badge Pills */}
              <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/40 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                <Sparkles className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span>One Platform. Global Connections. Endless Opportunities.</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl xl:text-7xl font-serif font-extrabold tracking-tight text-white leading-[1.1]">
                The Complete <br />
                <span className="shimmer-text">Business Ecosystem</span> <br />
                For Global Trade.
              </motion.h1>

              {/* Sub-headline */}
              <motion.p variants={FADE_UP} className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                OneTrade360™ brings together entrepreneurs, retailers, investors, manufacturers, suppliers, and service providers across <strong className="text-white font-medium">India 🇮🇳, USA 🇺🇸, and Canada 🇨🇦</strong> into one connected ecosystem.
              </motion.p>

              {/* CTAs Button Row */}
              <motion.div variants={FADE_UP} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 clip-diagonal shadow-[0_0_30px_rgba(245,183,0,0.4)] hover:brightness-110 transition-all cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <span>Explore Ecosystem Solutions</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>

                <Link href="/solutions">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-13 px-8 text-sm font-bold uppercase tracking-wider border-white/20 text-white bg-slate-900/60 hover:bg-white/10 hover:border-cyan-400 transition-all clip-diagonal cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>View All Services</span>
                    <ChevronRight className="w-4 h-4 text-cyan-400" />
                  </Button>
                </Link>
              </motion.div>

              {/* Verified Trust Stats Row */}
              <motion.div variants={FADE_UP} className="pt-6 grid grid-cols-3 gap-4 border-t border-white/10 max-w-lg mx-auto lg:mx-0">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-white">
                    <Counter end={1480} suffix="+" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Retail Stores Synced</div>
                </div>

                <div className="space-y-0.5 border-l border-white/10 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-400">
                    <Counter end={120} suffix="+" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">Audited OEM Plants</div>
                </div>

                <div className="space-y-0.5 border-l border-white/10 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-cyan-400">
                    <Counter end={3} suffix=" Corridors" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 uppercase">India • USA • Canada</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column: High-End Glowing Badge Card & Live Interactive Dashboard */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Glowing Card Container */}
                <div className="relative glass-card-cyber rounded-3xl p-6 sm:p-8 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />
                  
                  {/* Card Header with Prominent Large Logo Image */}
                  <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between mb-6 pb-6 border-b border-white/10 gap-4">
                    <div className="p-3 rounded-2xl bg-slate-900/90 border-2 border-amber-400/80 shadow-[0_0_35px_rgba(245,183,0,0.4)] backdrop-blur-xl">
                      <img src={logoImg} alt="OneTrade360 Logo" className="h-16 sm:h-22 w-auto object-contain max-w-[260px] filter drop-shadow-[0_0_12px_rgba(255,255,255,0.75)]" />
                    </div>
                    <span className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5 font-bold self-start">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE CORRIDOR
                    </span>
                  </div>

                  {/* Ecosystem Quick Highlights */}
                  <div className="space-y-3.5 mb-6">
                    {[
                      { title: "Direct Factory OEM Sourcing", tag: "India • USA • Canada", icon: Factory },
                      { title: "StoreSKU™ AI Retail Engine", tag: "Store Operations", icon: Cpu },
                      { title: "Turnkey Commercial Setup", tag: "Café, C-Store, Hotel", icon: Building2 },
                      { title: "Business Acquisition Service", tag: "Buy & Sell Businesses", icon: Briefcase },
                    ].map((item, idx) => {
                      const ItemIcon = item.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-900/80 border border-white/10 hover:border-cyan-400/40 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400">
                              <ItemIcon className="w-4 h-4" />
                            </div>
                            <span className="text-xs font-medium text-white">{item.title}</span>
                          </div>
                          <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {item.tag}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick Action Button */}
                  <Button 
                    onClick={() => setInquiryOpen(true)}
                    className="w-full h-12 bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-bold hover:brightness-110 transition-all clip-diagonal flex items-center justify-center gap-2 text-xs uppercase tracking-wider font-mono cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Connect With OneTrade360™
                  </Button>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Trade Corridors Interactive Map Section */}
      <section className="py-20 bg-[#040711] border-t border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-4 h-4 text-cyan-400" />
              Global Corridors Network
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-4">
              Connecting <span className="shimmer-text">India, USA & Canada</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              Bridge international suppliers, OEM factories, and retail distribution channels through one unified platform.
            </p>
          </div>

          {/* Interactive Country Selector */}
          <div className="flex justify-center gap-3 mb-10">
            {[
              { id: "india", label: "India Corridor 🇮🇳", desc: "120+ Audited OEM Manufacturing Plants" },
              { id: "usa", label: "United States Corridor 🇺🇸", desc: "1,480+ Retail Stores & Commercial Units" },
              { id: "canada", label: "Canada Corridor 🇨🇦", desc: "Wholesale & Cross-Border Logistics" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCorridor(tab.id as any)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold font-sans transition-all cursor-pointer border ${
                  activeCorridor === tab.id
                    ? "bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 border-amber-400 font-bold shadow-[0_0_25px_rgba(245,183,0,0.4)]"
                    : "bg-slate-900/80 text-slate-300 border-white/10 hover:border-white/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Active Corridor Card Info */}
          <div className="max-w-4xl mx-auto glass-card-cyber rounded-3xl p-8 border border-cyan-400/30 shadow-[0_0_50px_rgba(56,189,248,0.15)]">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-amber-400 text-xs font-mono uppercase mb-1">Direct Factory Verification</div>
                <div className="text-white font-bold text-lg">100% On-Site Audited</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-cyan-400 text-xs font-mono uppercase mb-1">Average Shipping Lead Time</div>
                <div className="text-white font-bold text-lg">14-21 Door-to-Door Days</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10">
                <div className="text-emerald-400 text-xs font-mono uppercase mb-1">Cost Savings Potential</div>
                <div className="text-white font-bold text-lg">Up to 35% OEM Margin</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Ecosystem Cards */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4 text-amber-400" />
              Turnkey Ecosystem Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-4">
              One Platform for <span className="shimmer-text">Every Business Need</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-light">
              From concept development to daily AI operations, sourcing, and expansion.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Restaurant & Café Solutions",
                desc: "Complete café & restaurant setup, commercial kitchen design, coffee equipment, tea programs, delivery packaging & kiosks.",
                icon: Utensils,
                color: "from-amber-400 to-amber-600",
                link: "/solutions"
              },
              {
                title: "C-Store & Gas Station Setup",
                desc: "StoreSKU™ AI, X-ON™ Security, POS systems, gondola shelving, refrigeration equipment & food service programs.",
                icon: Store,
                color: "from-cyan-400 to-blue-600",
                link: "/solutions"
              },
              {
                title: "Hospitality & Hotel Supplies",
                desc: "Hotel/motel furniture, fixtures, security systems, guest amenities, cleaning products & facility equipment.",
                icon: Hotel,
                color: "from-emerald-400 to-teal-600",
                link: "/solutions"
              },
              {
                title: "Wholesale & Distribution",
                desc: "Bulk F&B supply, tissue products, coffee cups, packaging, kitchen equipment & commercial retail fixtures.",
                icon: Box,
                color: "from-indigo-400 to-purple-600",
                link: "/solutions"
              },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass-card-cyber rounded-3xl p-6 flex flex-col justify-between group transition-all"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} flex items-center justify-center text-slate-950 shadow-lg`}>
                      <CardIcon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-amber-400 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <Link href={card.link} className="inline-flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 hover:text-amber-400 transition-colors">
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

      {/* Proprietary Technology Suite Dashboard Teaser */}
      <section className="py-24 bg-[#040711] border-t border-b border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                <Cpu className="w-4 h-4 text-amber-400" />
                Proprietary AI Tech Suite
              </div>

              <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight">
                AI-Powered <br />
                <span className="shimmer-text">Business Operations</span>
              </h2>

              <p className="text-slate-300 text-sm font-light leading-relaxed">
                Streamline daily store operations, employee management, inventory control, and AI security surveillance across multi-location enterprises.
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                  <div className="text-amber-400 font-bold font-serif text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                    StoreSKU™ AI Retail Engine
                  </div>
                  <p className="text-xs text-slate-300 font-light">Daily store operations, inventory tracking, task compliance & live analytics dashboard.</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/80 border border-white/10 space-y-1">
                  <div className="text-cyan-400 font-bold font-serif text-lg flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-400" />
                    X-ON™ AI Security Surveillance
                  </div>
                  <p className="text-xs text-slate-300 font-light">AI camera systems, remote loss prevention, real-time threat detection & cloud storage.</p>
                </div>
              </div>

              <Link href="/technology">
                <Button className="h-12 px-8 bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold uppercase font-mono text-xs clip-diagonal shadow-[0_0_25px_rgba(245,183,0,0.4)] cursor-pointer">
                  Launch Tech Live Demo
                </Button>
              </Link>
            </div>

            {/* Interactive Recharts Console Visualizer */}
            <div className="lg:col-span-7">
              <div className="glass-card-cyber rounded-3xl p-6 sm:p-8 border border-cyan-400/40 shadow-[0_0_50px_rgba(56,189,248,0.2)]">
                
                {/* Console Tabs */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div className="flex gap-2">
                    <button 
                      onClick={() => setActiveTab("storesku")}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTab === "storesku" ? "bg-amber-400 text-slate-950 shadow-[0_0_15px_#F5B700]" : "bg-slate-900 text-slate-400 hover:text-white"
                      }`}
                    >
                      StoreSKU™ AI Analytics
                    </button>
                    <button 
                      onClick={() => setActiveTab("xon")}
                      className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                        activeTab === "xon" ? "bg-cyan-400 text-slate-950 shadow-[0_0_15px_#38BDF8]" : "bg-slate-900 text-slate-400 hover:text-white"
                      }`}
                    >
                      X-ON™ AI Security Feed
                    </button>
                  </div>

                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    LIVE SENSORS ONLINE
                  </span>
                </div>

                {/* Live Area Chart */}
                <div className="h-64 sm:h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={activeTab === "storesku" ? storeSkuData : xonData}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F5B700" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#F5B700" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorThreats" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#38BDF8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="time" stroke="#64748B" fontSize={11} />
                      <YAxis stroke="#64748B" fontSize={11} />
                      <Tooltip contentStyle={{ backgroundColor: "#090D16", borderColor: "#334155", color: "#F8FAFC", borderRadius: "12px" }} />
                      <Area 
                        type="monotone" 
                        dataKey={activeTab === "storesku" ? "sales" : "clear"} 
                        stroke={activeTab === "storesku" ? "#F5B700" : "#38BDF8"} 
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

      {/* Interactive ROI Calculator Section */}
      <TradeCalculator />

      {/* Client Testimonials */}
      <TestimonialsSection />

      {/* Final Call to Action Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-indigo-500/10 blur-[160px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="glass-card-cyber rounded-3xl p-10 sm:p-16 border-2 border-amber-400/50 shadow-[0_0_80px_rgba(245,183,0,0.2)]">
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-6 leading-tight">
              Everything Your Business Needs. <br />
              <span className="shimmer-text">All in One Place.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Whether you’re opening a new store, sourcing products globally, expanding your business, or investing in the next opportunity, OneTrade360™ gives you access to trusted suppliers, AI technology, and global manufacturing.
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
