import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Counter } from "@/components/Counter";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { TradeCalculator } from "@/components/TradeCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { 
  Globe, Building2, TrendingUp, Box, Shield, Activity, 
  Cpu, Layers, ArrowRight, Menu, X, ChevronRight, CheckCircle2, Factory, MonitorSmartphone, MapPin, Phone, Mail,
  Sparkles, Zap, Lock, RefreshCw, Play, SlidersHorizontal, Share2, Award, ArrowUpRight, MessageSquare, ShieldCheck
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

// Simulated chart data for StoreSKU & X-ON
const storeSkuData = [
  { time: "08:00", sales: 4200, inventory: 98 },
  { time: "10:00", sales: 7800, inventory: 92 },
  { time: "12:00", sales: 12400, inventory: 85 },
  { time: "14:00", sales: 16900, inventory: 78 },
  { time: "16:00", sales: 21500, inventory: 95 }, // Auto-reordered
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

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeSolutionTab, setActiveSolutionTab] = useState(0);
  const [techTab, setTechTab] = useState<"storesku" | "xon">("storesku");
  const [selectedNode, setSelectedNode] = useState<"usa" | "india" | "canada">("usa");

  // Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const openInquiry = () => setInquiryModalOpen(true);

  return (
    <div className="bg-[#070B14] min-h-screen text-slate-100 overflow-hidden selection:bg-primary selection:text-primary-foreground font-sans relative">
      {/* Animated Splash Loader Screen */}
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}

      {/* Inquiry Modal */}
      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />

      {/* Top Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Navbar */}
      <Navbar onOpenInquiry={openInquiry} onReplaySplash={() => setShowSplash(true)} />
      
      {/* Live Market & Corridor Ticker */}
      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[92dvh] flex flex-col justify-center py-16 overflow-hidden">
        {/* Background Glowing Ambient Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] bg-primary/10 rounded-full blur-[160px] pointer-events-none animate-pulse-gold z-0" />
        <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute inset-0 bg-grid-white opacity-15 pointer-events-none z-0" />

        <motion.div style={{ y: heroY }} className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" variants={STAGGER}>
                
                {/* Brand Badge */}
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(245,183,0,0.15)]">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                    One Platform. Global Connections.
                  </span>
                </motion.div>
                
                {/* Main Heading */}
                <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1.08] mb-6 tracking-tight">
                  Endless <br />
                  <span className="shimmer-text">Opportunities.</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-sans font-light">
                  The Complete Business Ecosystem for <span className="text-white font-medium">Retail, Hospitality, Manufacturing & Global Trade</span>. We bridge verified factories, technology platforms, and investors across USA, India, & Canada.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4">
                  <Button 
                    onClick={openInquiry} 
                    size="lg" 
                    className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base font-semibold clip-diagonal shadow-[0_0_30px_rgba(245,183,0,0.35)] hover:shadow-[0_0_45px_rgba(245,183,0,0.55)] transition-all group"
                  >
                    Enter Ecosystem
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                  <a href="#solutions">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-white/20 hover:bg-white/10 hover:border-primary/50 backdrop-blur-md transition-all">
                      Explore Solutions
                    </Button>
                  </a>
                </motion.div>

                {/* 5 Logo Pillars Ribbon */}
                <motion.div variants={FADE_UP} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3 text-xs font-mono text-slate-400">
                  {["CONNECT", "TRADE", "GROW", "COLLABORATE", "SUCCEED"].map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-slate-200 shadow-sm hover:border-primary/40 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right Interactive 3D Card / Logo Feature */}
            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                {/* Glowing Card Container */}
                <div className="relative glass-card-gold rounded-3xl p-6 sm:p-8 overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl pointer-events-none" />
                  
                  {/* Card Header with Logo */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-primary/50 p-1 bg-black/80 shadow-[0_0_25px_rgba(245,183,0,0.35)]">
                        <img src="/logo.jpeg" alt="OneTrade360 Logo" className="w-full h-full object-contain rounded-full" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg text-white">OneTrade360°</h3>
                        <p className="text-xs text-primary font-mono">Global Trade Corridor</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      ACTIVE HUB
                    </span>
                  </div>

                  {/* Ecosystem Quick Highlights */}
                  <div className="space-y-3.5 mb-6">
                    {[
                      { title: "Direct Factory OEM Sourcing", tag: "India & Global", icon: Factory },
                      { title: "StoreSKU™ AI Retail Engine", tag: "Store Automation", icon: MonitorSmartphone },
                      { title: "Turnkey Commercial Setup", tag: "US & Canada", icon: Building2 },
                      { title: "X-ON™ AI Surveillance", tag: "Asset Protection", icon: Shield }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-white/10 hover:border-primary/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-primary" />
                          <span className="text-sm font-medium text-slate-200">{item.title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Action Bar */}
                  <Button onClick={openInquiry} className="w-full h-12 bg-primary/20 hover:bg-primary text-primary hover:text-slate-950 border border-primary/50 font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                    Request Consultation
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* Live Counters */}
        <div className="mt-16 border-y border-white/10 bg-slate-950/80 backdrop-blur-md py-6 z-20 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/5">
              {[
                { label: "Business Categories", value: 18, suffix: "+" },
                { label: "Core Industry Sectors", value: 4, suffix: "" },
                { label: "Trade Corridors", value: 3, suffix: " (US•IN•CA)" },
                { label: "Global Coverage", value: 360, suffix: "°" }
              ].map((stat, idx) => (
                <div key={idx} className="px-4">
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-white mb-1">
                    <Counter value={stat.value} suffix={stat.suffix} delay={0.3 + idx * 0.1} />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE: WHO WE CONNECT */}
      <section className="py-8 bg-slate-900/40 border-b border-white/5 overflow-hidden">
        <div className="flex w-full whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex items-center gap-10 text-xl sm:text-2xl font-serif text-slate-400"
          >
            {[
              "Entrepreneurs", "Investors", "Manufacturers", "Suppliers", "Exporters", "Importers", "Developers", 
              "Commercial Real Estate Brokers", "Retailers", "Franchise Companies", "Consultants", "Healthcare Professionals", 
              "Hospitality Businesses", "Logistics Companies", "Technology Providers", "AI & Software Companies",
              "Entrepreneurs", "Investors", "Manufacturers", "Suppliers", "Exporters", "Importers", "Developers"
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="hover:text-primary transition-colors">{item}</span>
                <span className="text-primary/40 text-xl font-bold">•</span>
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES WE SERVE */}
      <section id="industries" className="py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase mb-3">
                Industry Portfolios
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Industries We <span className="text-primary">Serve</span>
              </h2>
            </motion.div>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Sectors" },
                { id: "retail", label: "Retail & C-Stores" },
                { id: "hospitality", label: "Hospitality & QSR" },
                { id: "industrial", label: "Industrial & OEM" }
              ].map((btn) => (
                <button
                  key={btn.id}
                  onClick={() => setActiveCategory(btn.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
                    activeCategory === btn.id 
                      ? "bg-primary text-slate-950 shadow-[0_0_15px_rgba(245,183,0,0.3)] font-bold" 
                      : "bg-slate-900/60 border border-white/10 text-slate-400 hover:text-white"
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                cat: "retail",
                title: "Retail & Convenience", 
                desc: "C-Stores, Gas Stations, Liquor Stores, Smoke Shops, Grocery & Specialty Retail setups.", 
                icon: Building2,
                items: ["StoreSKU™ Integration", "Inventory POS Setup", "Security Surveillance"]
              },
              { 
                cat: "hospitality",
                title: "Restaurant & Hospitality", 
                desc: "Coffee Shops, QSR Chains, Bakeries, Hotels, Motels, Resorts & Travel Centers.", 
                icon: MapPin,
                items: ["Commercial Kitchen Equip", "Menu Development", "Franchise Matching"]
              },
              { 
                cat: "all",
                title: "Healthcare & Wellness", 
                desc: "Pharmacies, Clinics, Rehab Centers, Nutraceuticals & Medical Suppliers.", 
                icon: Activity,
                items: ["Sourcing Compliance", "Equipment Sourcing", "Facility Security"]
              },
              { 
                cat: "industrial",
                title: "Commercial & Industrial", 
                desc: "Warehouses, Manufacturing Plants, Industrial Parks, Offices & Distribution Hubs.", 
                icon: Factory,
                items: ["OEM Direct Sourcing", "Quality Audits", "Cross-Border Logistics"]
              }
            ]
            .filter(card => activeCategory === "all" || card.cat === activeCategory || card.cat === "all")
            .map((industry, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1.5 clip-diagonal relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-slate-950 transition-all duration-300">
                  <industry.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">{industry.desc}</p>
                
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {industry.items.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPLETE BUSINESS SOLUTIONS */}
      <section id="solutions" className="py-28 bg-slate-950/80 border-y border-white/10 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}>
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase mb-3">
                  Turnkey Infrastructure
                </motion.div>
                <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Complete Business <br/><span className="text-primary">Solutions</span>
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-slate-300 text-base mb-8 leading-relaxed">
                  From setup to global scale, we provide the physical and digital infrastructure needed to build profitable enterprises.
                </motion.p>
                
                <motion.div variants={FADE_UP} className="space-y-3">
                  {[
                    { title: "Restaurant & Café Solutions", desc: "Design, commercial coffee gear, menu & launch support." },
                    { title: "Convenience Store Solutions", desc: "Layout optimization, StoreSKU™ AI, POS, & inventory." },
                    { title: "Hospitality & Travel Solutions", desc: "Facility equipment, guest management & supply chain." },
                    { title: "Wholesale & OEM Sourcing", desc: "Direct factory pricing for packaging, food & hardware." }
                  ].map((sol, i) => (
                    <div 
                      key={i}
                      onClick={() => setActiveSolutionTab(i)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeSolutionTab === i 
                          ? "bg-slate-900 border-primary shadow-[0_0_20px_rgba(245,183,0,0.15)]" 
                          : "bg-slate-950/40 border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${activeSolutionTab === i ? "text-primary" : "text-slate-500"}`} />
                        <div>
                          <div className="font-semibold text-sm text-white">{sol.title}</div>
                          <div className="text-xs text-slate-400 font-light">{sol.desc}</div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${activeSolutionTab === i ? "text-primary" : "text-slate-600"}`} />
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={FADE_UP} className="mt-8">
                  <Button onClick={openInquiry} className="bg-primary text-slate-950 font-semibold hover:bg-primary/90 h-12 px-6 clip-diagonal">
                    Get Custom Solution Quote
                  </Button>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Interactive Tab Visual Box */}
            <div className="lg:col-span-7">
              <div className="glass-card-gold rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Cpu className="w-64 h-64 text-primary" />
                </div>

                <div className="relative z-10">
                  <div className="text-xs font-mono text-primary uppercase mb-2">Solution Spotlight #{activeSolutionTab + 1}</div>
                  
                  {activeSolutionTab === 0 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-serif font-bold text-white">Café & QSR Turnkey Setup</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Complete end-to-end cafe & restaurant launch module including commercial espresso machines, customized refrigeration, kitchen planning, staff training, and ingredient supply pipelines.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Commercial Gear</div>
                          <div className="text-xs text-slate-400">Direct importer pricing on high-grade espresso & kitchen equipment.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Menu & Branding</div>
                          <div className="text-xs text-slate-400">Customized recipes, ingredient formulas, and identity creation.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === 1 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-serif font-bold text-white">StoreSKU™ Retail Automation</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        AI-powered retail management platform crafted for convenience stores, gas stations, liquor stores, and chain markets to monitor sales, control stock, and detect shrinkage.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Stock Control</div>
                          <div className="text-xs text-slate-400">Real-time SKU tracking with auto-reorder triggers and theft alerts.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Multi-Store Sync</div>
                          <div className="text-xs text-slate-400">Manage 1 to 50+ store locations from a unified mobile dashboard.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === 2 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-serif font-bold text-white">Hospitality & Travel Centers</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Comprehensive infrastructure for hotels, motels, resorts, and travel centers. From guest room amenities to high-volume commercial laundry and security integration.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Bulk Supplies</div>
                          <div className="text-xs text-slate-400">Linens, toiletries, and cleaning products straight from OEM mills.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Asset Security</div>
                          <div className="text-xs text-slate-400">X-ON™ AI cameras for perimeter and lobby surveillance.</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSolutionTab === 3 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-serif font-bold text-white">Wholesale & OEM Direct</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Bypass intermediaries. Direct factory supply chain connecting buyers in North America to verified manufacturing plants across India and global hubs.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Verified Plants</div>
                          <div className="text-xs text-slate-400">Audited factories with strict quality control inspections.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5">
                          <div className="text-primary font-bold text-lg mb-1">Custom Packaging</div>
                          <div className="text-xs text-slate-400">Private label manufacturing for food, paper & plastic goods.</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW INTERACTIVE ROI & TRADE ESTIMATOR */}
      <TradeCalculator onOpenInquiry={openInquiry} />

      {/* MANUFACTURING & GLOBAL OEM HUB */}
      <section id="manufacturing" className="py-32 relative flex items-center min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/85 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600" 
            alt="Manufacturing Facility" 
            className="w-full h-full object-cover grayscale opacity-40 mix-blend-overlay scale-105"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-20">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={FADE_UP}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-mono uppercase mb-6 backdrop-blur-md">
              <Box className="w-4 h-4" />
              Verified OEM Factory Network
            </div>
            
            <h2 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Direct access to verified <span className="shimmer-text">factories & OEM</span> globally.
            </h2>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-10 font-light leading-relaxed">
              We eliminate middleman markups. From private label manufacturing to global shipping, we verify plants, coordinate logistics, and inspect quality across India, USA, and Canada.
            </p>
            
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {[
                { val: "120+", label: "Verified Plants" },
                { val: "100%", label: "QA Audited" },
                { val: "End-to-End", label: "Customs & Logistics" }
              ].map((stat, i) => (
                <div key={i} className="p-4 rounded-xl bg-black/60 border-l-4 border-primary border-y border-r border-white/10 backdrop-blur-md">
                  <div className="text-2xl font-bold text-white font-serif">{stat.val}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button onClick={openInquiry} size="lg" className="bg-primary text-slate-950 font-semibold hover:bg-primary/90 clip-diagonal h-14 px-8 text-base shadow-[0_0_20px_rgba(245,183,0,0.3)]">
              Submit Factory Sourcing Request
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROPRIETARY TECHNOLOGY (StoreSKU & X-ON) WITH REAL-TIME RECHARTS VISUALIZATION */}
      <section id="technology" className="py-28 bg-[#090E1A] relative">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono uppercase mb-3">
              Proprietary Tech Suite
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Intelligent <span className="text-primary">Technology</span>
            </h2>
            <p className="text-slate-300 text-lg font-light">
              Smart platforms engineered to run store operations and safeguard commercial assets.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/10 mt-8">
              <button
                onClick={() => setTechTab("storesku")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  techTab === "storesku" ? "bg-primary text-slate-950 shadow-md font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                StoreSKU™ AI Retail
              </button>
              <button
                onClick={() => setTechTab("xon")}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  techTab === "xon" ? "bg-primary text-slate-950 shadow-md font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                X-ON™ AI Surveillance
              </button>
            </div>
          </div>

          {/* Interactive Tech Preview Container */}
          <div className="glass-card-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                {techTab === "storesku" ? (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary">
                      <MonitorSmartphone className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">StoreSKU™ AI Platform</h3>
                    <p className="text-slate-300 leading-relaxed font-light">
                      Next-generation AI Retail Operations software for convenience stores, gas stations, liquor stores, and multi-location retail chains.
                    </p>
                    <div className="space-y-3 pt-2">
                      {[
                        "Daily Shift & Employee Management",
                        "Real-time Inventory & Shrinkage Control",
                        "Automated POS Re-ordering Logic",
                        "Cloud Dashboard & Mobile App Access"
                      ].map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Button onClick={openInquiry} className="bg-primary text-slate-950 font-semibold hover:bg-primary/90 h-12 px-6 clip-diagonal">
                      Schedule StoreSKU™ Demo
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white">X-ON™ AI Security System</h3>
                    <p className="text-slate-300 leading-relaxed font-light">
                      Intelligent camera surveillance and threat detection built for retail stores, warehouses, hotels, and industrial sites.
                    </p>
                    <div className="space-y-3 pt-2">
                      {[
                        "Real-time AI Intrusion & Motion Analytics",
                        "24/7 Mobile Cloud Streaming & Alerts",
                        "License Plate & Face Detection Support",
                        "Tamper-proof Encrypted Off-site Backup"
                      ].map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Button onClick={openInquiry} className="bg-blue-500 text-white font-semibold hover:bg-blue-600 h-12 px-6 clip-diagonal">
                      Request X-ON™ Security Spec
                    </Button>
                  </>
                )}
              </div>

              {/* Simulation Visual Box with Recharts */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-slate-950 border border-white/10 p-6 shadow-2xl overflow-hidden font-mono text-xs">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-2 font-bold text-slate-200">
                        {techTab === "storesku" ? "StoreSKU™_LIVE_ANALYTICS" : "X-ON_AI_MONITORING"}
                      </span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      LIVE FEED
                    </span>
                  </div>

                  {/* Recharts Graphical Visualization */}
                  <div className="h-48 w-full mb-4 bg-slate-900/50 p-2 rounded-xl border border-white/5">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={techTab === "storesku" ? storeSkuData : xonData}>
                        <defs>
                          <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={techTab === "storesku" ? "#F5B700" : "#3B82F6"} stopOpacity={0.4}/>
                            <stop offset="95%" stopColor={techTab === "storesku" ? "#F5B700" : "#3B82F6"} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#64748B" fontSize={10} tickLine={false} />
                        <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: "#0F172A", borderColor: "#334155", color: "#fff", fontSize: 11 }} 
                        />
                        <Area 
                          type="monotone" 
                          dataKey={techTab === "storesku" ? "sales" : "events"} 
                          stroke={techTab === "storesku" ? "#F5B700" : "#3B82F6"} 
                          strokeWidth={2}
                          fillOpacity={1} 
                          fill="url(#colorPrimary)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {techTab === "storesku" ? (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300">AUTO-REORDER LOGIC:</span>
                        <span className="text-primary font-bold">BEVERAGE SKU #8812 TRIGGERED</span>
                      </div>
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-white/5 text-slate-400 text-[11px]">
                        [AI SYS]: Shrinkage risk index down 32% across active Texas & Ontario store clusters.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300 font-bold text-emerald-400">PERIMETER: 100% SECURE</span>
                        <span className="text-xs text-blue-400 font-mono">24/7 ENCRYPTED</span>
                      </div>
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-white/5 text-slate-400 text-[11px]">
                        [X-ON AI]: 0 unauthorized intrusions detected across 1,200 connected camera streams today.
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL FOOTPRINT & INTERACTIVE MAP (USA, INDIA, CANADA) */}
      <section className="py-28 bg-slate-950 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mx-auto mb-6 shadow-[0_0_30px_rgba(245,183,0,0.2)]">
              <Globe className="w-7 h-7" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              A Global <span className="text-primary">Footprint</span>
            </h2>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-light">
              Connecting primary trade hubs across North America, Asia, and international markets. Click a hub to view live node details.
            </p>
            
            {/* Country Cards */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { id: "usa", name: "United States", code: "USA", city: "New York • Texas • California", flag: "🇺🇸", plants: "45 Outlets", status: "Active Corridor" },
                { id: "india", name: "India", code: "IND", city: "Gujarat • Mumbai • Delhi", flag: "🇮🇳", plants: "120+ OEM Plants", status: "Manufacturing Hub" },
                { id: "canada", name: "Canada", code: "CAN", city: "Ontario • Vancouver • Alberta", flag: "🇨🇦", plants: "28 Facilities", status: "Distribution Hub" }
              ].map((country) => (
                <div 
                  key={country.id} 
                  onClick={() => setSelectedNode(country.id as any)}
                  className={`glass-card rounded-2xl p-6 border transition-all text-left cursor-pointer group hover:-translate-y-1 ${
                    selectedNode === country.id 
                      ? "border-primary bg-slate-900 shadow-[0_0_25px_rgba(245,183,0,0.2)]" 
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{country.flag}</span>
                    <span className="px-2.5 py-1 rounded bg-primary/20 text-primary text-xs font-mono font-bold">{country.code}</span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{country.name}</h3>
                  <p className="text-xs text-slate-400 font-mono mb-3">{country.city}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                    <span className="text-slate-300 font-semibold">{country.plants}</span>
                    <span className="text-emerald-400">{country.status}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Trade Route Animation */}
            <div className="relative w-full h-56 max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden flex items-center justify-center p-6 shadow-2xl">
              <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none" />
              
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <motion.path 
                  d="M 150 100 Q 300 30 450 100 T 750 100" 
                  fill="none" 
                  stroke="#F5B700" 
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                {/* Node USA */}
                <g onClick={() => setSelectedNode("usa")} className="cursor-pointer">
                  <circle cx="150" cy="100" r={selectedNode === "usa" ? "12" : "7"} fill="#F5B700" className="animate-ping opacity-75" />
                  <circle cx="150" cy="100" r="6" fill="#F5B700" />
                  <text x="115" y="140" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="mono">USA NODE</text>
                </g>

                {/* Node India */}
                <g onClick={() => setSelectedNode("india")} className="cursor-pointer">
                  <circle cx="450" cy="100" r={selectedNode === "india" ? "12" : "7"} fill="#38BDF8" className="animate-ping opacity-75" />
                  <circle cx="450" cy="100" r="6" fill="#38BDF8" />
                  <text x="410" y="140" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="mono">INDIA OEM</text>
                </g>

                {/* Node Canada */}
                <g onClick={() => setSelectedNode("canada")} className="cursor-pointer">
                  <circle cx="750" cy="100" r={selectedNode === "canada" ? "12" : "7"} fill="#4ADE80" className="animate-ping opacity-75" />
                  <circle cx="750" cy="100" r="6" fill="#4ADE80" />
                  <text x="700" y="140" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="mono">CANADA HUB</text>
                </g>
              </svg>
            </div>

          </motion.div>
        </div>
      </section>

      {/* VERIFIED CLIENT TESTIMONIALS & CASE STUDIES */}
      <TestimonialsSection />

      {/* WHY CHOOSE US */}
      <section className="py-28 bg-[#070B14] relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Why Choose <span className="text-primary">OneTrade360</span>
            </h2>
            <p className="text-slate-400 text-sm font-light">Engineered for seamless enterprise execution</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "One Unified Ecosystem", desc: "A single portal for setup, tech, and sourcing.", icon: Layers },
              { title: "Global Factory Direct", desc: "Direct manufacturer pricing without middlemen.", icon: Globe },
              { title: "AI-Driven Automation", desc: "Powered by StoreSKU™ and X-ON™ software.", icon: Cpu },
              { title: "Verified Due Diligence", desc: "Vetted partners & seamless acquisition support.", icon: Shield },
            ].map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-primary/40 transition-all group"
              >
                <f.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-white mb-2">{f.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed font-light">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGH IMPACT CTA */}
      <section className="py-28 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-primary/5 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/20 blur-[150px] rounded-full pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white mb-6 leading-tight">
              Everything Your Business Needs.<br/>
              <span className="shimmer-text">All in One Place.</span>
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-slate-300 mb-10 font-light">
              OneTrade360™: One Platform. Global Connections. Endless Opportunities.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button onClick={openInquiry} size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-primary text-slate-950 hover:bg-primary/90 clip-diagonal font-bold shadow-[0_0_35px_rgba(245,183,0,0.45)]">
                Connect With Us Today
              </Button>
              <Button onClick={openInquiry} size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg border-primary text-primary hover:bg-primary/10 clip-diagonal font-semibold">
                Explore Partnerships
              </Button>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-left">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Global HQs</h4>
                  <p className="text-xs text-slate-400 font-mono">United States<br/>India<br/>Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Direct Lines</h4>
                  <p className="text-xs text-slate-400 font-mono">USA: +1-272-267-9294<br/>India: +91-7984171515</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Email Support</h4>
                  <p className="text-xs text-slate-400 font-mono">onetradeworld360<br/>@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLOATING ACTION PILL */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={openInquiry}
          className="h-14 px-6 rounded-full bg-primary text-slate-950 font-bold shadow-[0_0_30px_rgba(245,183,0,0.5)] hover:scale-105 transition-transform flex items-center gap-3 border border-yellow-300"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">Quick Inquiry</span>
        </Button>
      </div>

      {/* FOOTER */}
      <footer className="py-10 bg-black border-t border-white/10 text-slate-400 text-sm">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-primary/40 p-0.5 bg-slate-900">
              <img src="/logo.jpeg" alt="Logo" className="w-full h-full object-contain rounded-full" />
            </div>
            <div>
              <div className="text-xl font-serif font-bold text-white">OneTrade<span className="text-primary">360°</span></div>
              <div className="text-[10px] font-mono text-slate-500">GLOBAL NETWORK</div>
            </div>
          </div>

          <p className="text-xs text-slate-500">© {new Date().getFullYear()} OneTrade360™. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <button onClick={() => setShowSplash(true)} className="text-xs font-mono text-primary hover:underline flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> Replay Splash Loader
            </button>
            <span className="text-slate-700">|</span>
            <a href="#" className="hover:text-primary transition-colors text-xs">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors text-xs">Terms</a>
          </div>

        </div>
      </footer>

    </div>
  );
}

function Navbar({ onOpenInquiry, onReplaySplash }: { onOpenInquiry: () => void; onReplaySplash: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Solutions", href: "#solutions" },
    { name: "Industries", href: "#industries" },
    { name: "Manufacturing", href: "#manufacturing" },
    { name: "Technology", href: "#technology" },
  ];

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Badge */}
          <a href="#" className="flex items-center gap-3 z-50 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-primary/50 p-0.5 bg-black shadow-[0_0_15px_rgba(245,183,0,0.3)] group-hover:scale-105 transition-transform">
              <img src="/logo.jpeg" alt="OneTrade360" className="w-full h-full object-contain rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-serif font-extrabold tracking-tight text-white group-hover:text-primary transition-colors">
                OneTrade<span className="text-primary">360°</span>
              </span>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest -mt-1">
                Global Network
              </span>
            </div>
          </a>
          
          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-300 hover:text-primary transition-colors relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>
          
          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <button onClick={onReplaySplash} className="text-xs text-slate-400 hover:text-white transition-colors p-2" title="Replay Splash Screen">
              <RefreshCw className="w-4 h-4" />
            </button>
            <Button onClick={onOpenInquiry} className="bg-primary text-slate-950 font-bold hover:bg-primary/90 clip-diagonal shadow-[0_0_20px_rgba(245,183,0,0.2)]">
              Get Started
            </Button>
          </div>

          <button className="md:hidden z-50 p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6 text-primary" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl pt-28 px-6 flex flex-col gap-6 md:hidden border-b border-white/10"
          >
            {links.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-serif font-medium text-white border-b border-white/10 pb-4 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-5 h-5 text-primary" />
              </a>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <Button onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }} className="w-full h-12 text-base font-bold bg-primary text-slate-950 clip-diagonal">
                Connect With Us
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
