import React, { useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Sparkles, Zap, Lock, RefreshCw, Briefcase, Award, ArrowUpRight, MessageSquare, ShieldCheck, Target, Compass
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

  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const openInquiry = () => setInquiryModalOpen(true);

  return (
    <div className="bg-[#060A14] min-h-screen text-slate-100 overflow-hidden selection:bg-cyan-500 selection:text-slate-950 font-sans relative">
      {/* Animated Splash Loader Screen */}
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}

      {/* Inquiry Modal */}
      <InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} />

      {/* Top Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-cyan-400 to-indigo-500 z-[60] origin-left"
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
        {/* Ambient VFX Orbs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[180px] pointer-events-none animate-pulse-cyan z-0" />
        <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none animate-pulse-gold z-0" />
        <div className="absolute inset-0 bg-grid-cyber opacity-20 pointer-events-none z-0" />

        <motion.div style={{ y: heroY }} className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div initial="hidden" animate="visible" variants={STAGGER}>
                
                {/* Brand Badge */}
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(56,189,248,0.2)]">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase font-mono">
                    One Platform. Global Connections. Endless Opportunities.
                  </span>
                </motion.div>
                
                {/* Main Heading */}
                <motion.h1 variants={FADE_UP} className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1.08] mb-6 tracking-tight">
                  One Platform. <br />
                  <span className="shimmer-text">Global Trade Ecosystem.</span>
                </motion.h1>
                
                {/* Subtitle */}
                <motion.p variants={FADE_UP} className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-8 leading-relaxed font-sans font-light">
                  The Complete Business Ecosystem for <strong className="text-white font-medium">Retail, Hospitality, Healthcare, Manufacturing & Global Trade</strong>. We bridge verified factories, technology platforms, and investors across USA, India, & Canada.
                </motion.p>
                
                {/* CTA Buttons */}
                <motion.div variants={FADE_UP} className="flex flex-wrap items-center gap-4">
                  <Button 
                    onClick={openInquiry} 
                    size="lg" 
                    className="bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 hover:brightness-110 h-14 px-8 text-base font-bold clip-diagonal shadow-[0_0_30px_rgba(245,183,0,0.35)] transition-all group"
                  >
                    Enter Ecosystem
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                  <Link href="/solutions">
                    <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-white/20 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-md transition-all">
                      Explore Solutions
                    </Button>
                  </Link>
                </motion.div>

                {/* Pillars Ribbon */}
                <motion.div variants={FADE_UP} className="mt-12 pt-8 border-t border-white/10 flex flex-wrap gap-3 text-xs font-mono text-slate-300">
                  {["CONNECT", "TRADE", "GROW", "COLLABORATE", "SUCCEED"].map((pillar, idx) => (
                    <div key={idx} className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/90 border border-white/10 text-slate-200 shadow-sm hover:border-cyan-400/40 transition-colors">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{pillar}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Right Interactive 3D Card with Large Prominent Logo Image */}
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
                      { title: "StoreSKU™ AI Retail Engine", tag: "Store Operations", icon: MonitorSmartphone },
                      { title: "Turnkey Commercial Setup", tag: "Café, C-Store & Hotel", icon: Building2 },
                      { title: "X-ON™ AI Surveillance", tag: "Smart Security", icon: Shield }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <item.icon className="w-5 h-5 text-amber-400" />
                          <span className="text-sm font-medium text-slate-200">{item.title}</span>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5">
                          {item.tag}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Dynamic Action Bar */}
                  <Button onClick={openInquiry} className="w-full h-12 bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold rounded-xl transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
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
                { label: "Trade Corridors", value: 3, suffix: " (IN•US•CA)" },
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
      <section className="py-8 bg-slate-900/50 border-b border-white/5 overflow-hidden">
        <div className="flex w-full whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex items-center gap-10 text-xl sm:text-2xl font-serif text-slate-300"
          >
            {[
              "Entrepreneurs", "Investors", "Manufacturers", "Suppliers", "Exporters", "Importers", "Developers", 
              "Commercial Real Estate Brokers", "Retailers", "Franchise Companies", "Consultants", "Healthcare Professionals", 
              "Hospitality Businesses", "Logistics Companies", "Technology Providers", "AI & Software Companies",
              "Entrepreneurs", "Investors", "Manufacturers", "Suppliers", "Exporters", "Importers", "Developers"
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-10">
                <span className="hover:text-cyan-400 transition-colors font-medium">{item}</span>
                <span className="text-amber-400 text-xl font-bold">•</span>
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
                Industry Portfolios
              </div>
              <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white tracking-tight">
                Industries We <span className="text-amber-400">Serve</span>
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
                      ? "bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(56,189,248,0.3)]" 
                      : "bg-slate-900/80 border border-white/10 text-slate-400 hover:text-white"
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
                desc: "Convenience Stores, Gas Stations, Liquor Stores, Smoke Shops, Grocery & Specialty Retail.", 
                icon: Building2,
                items: ["StoreSKU™ AI Integration", "POS & Inventory Setup", "X-ON™ Surveillance"]
              },
              { 
                cat: "hospitality",
                title: "Restaurant & Hospitality", 
                desc: "Coffee Shops, Cafés, Restaurants, QSR Chains, Bakeries, Hotels, Motels, Resorts & Travel Centers.", 
                icon: MapPin,
                items: ["Commercial Kitchen Equip", "Menu Development", "Franchise Matching"]
              },
              { 
                cat: "all",
                title: "Healthcare & Wellness", 
                desc: "Pharmacies, Clinics, Rehabilitation Centers, Wellness Centers, Nutraceuticals & Medical Suppliers.", 
                icon: Activity,
                items: ["Regulatory Sourcing", "Equipment Procurement", "Facility Security"]
              },
              { 
                cat: "industrial",
                title: "Commercial & Industrial", 
                desc: "Warehouses, Manufacturing Plants, Industrial Parks, Commercial Offices & Distribution Hubs.", 
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
                className="glass-card rounded-2xl p-8 hover:border-cyan-400/50 transition-all duration-300 group hover:-translate-y-1.5 clip-diagonal relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <industry.icon className="w-7 h-7" />
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-white mb-3">{industry.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">{industry.desc}</p>
                
                <ul className="space-y-2 border-t border-white/10 pt-4">
                  {industry.items.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-mono text-slate-300">
                      <ChevronRight className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/industries">
              <Button variant="outline" className="border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 px-6 font-mono text-xs uppercase">
                View All Industry Portfolios
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* COMPLETE BUSINESS SOLUTIONS */}
      <section id="solutions" className="py-28 bg-slate-950/90 border-y border-white/10 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={STAGGER}>
                <motion.div variants={FADE_UP} className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
                  Turnkey Infrastructure
                </motion.div>
                <motion.h2 variants={FADE_UP} className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                  Complete Business <br/><span className="text-amber-400">Solutions</span>
                </motion.h2>
                <motion.p variants={FADE_UP} className="text-slate-300 text-base mb-8 leading-relaxed font-light">
                  From setup to global scale, we provide the physical and digital infrastructure needed to build profitable enterprises.
                </motion.p>
                
                <motion.div variants={FADE_UP} className="space-y-3">
                  {[
                    { title: "Restaurant & Café Solutions", desc: "Design, commercial coffee gear, menu & launch support." },
                    { title: "Convenience Store Solutions", desc: "Layout optimization, StoreSKU™ AI, POS, & inventory." },
                    { title: "Hospitality & Travel Solutions", desc: "Facility equipment, guest management & supply chain." },
                    { title: "Wholesale & Distribution", desc: "Direct factory pricing for packaging, food & hardware." }
                  ].map((sol, i) => (
                    <div 
                      key={i}
                      onClick={() => setActiveSolutionTab(i)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        activeSolutionTab === i 
                          ? "bg-slate-900 border-cyan-400 shadow-[0_0_20px_rgba(56,189,248,0.2)]" 
                          : "bg-slate-950/40 border-white/5 hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${activeSolutionTab === i ? "text-amber-400" : "text-slate-500"}`} />
                        <div>
                          <div className="font-semibold text-sm text-white">{sol.title}</div>
                          <div className="text-xs text-slate-400 font-light">{sol.desc}</div>
                        </div>
                      </div>
                      <ChevronRight className={`w-4 h-4 ${activeSolutionTab === i ? "text-cyan-400" : "text-slate-600"}`} />
                    </div>
                  ))}
                </motion.div>

                <motion.div variants={FADE_UP} className="mt-8 flex gap-3">
                  <Button onClick={openInquiry} className="bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold hover:brightness-110 h-12 px-6 clip-diagonal">
                    Get Custom Solution Quote
                  </Button>
                  <Link href="/solutions">
                    <Button variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 h-12 px-6">
                      View Solutions Page
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>
            </div>
            
            {/* Interactive Tab Visual Box */}
            <div className="lg:col-span-7">
              <div className="glass-card-cyber rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="text-xs font-mono text-cyan-400 uppercase mb-2">Solution Spotlight #{activeSolutionTab + 1}</div>
                  
                  {activeSolutionTab === 0 && (
                    <div className="space-y-6 animate-fadeIn">
                      <h3 className="text-3xl font-serif font-bold text-white">Café & QSR Turnkey Setup</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        Complete end-to-end cafe & restaurant launch module including commercial espresso machines, customized refrigeration, kitchen planning, staff training, and ingredient supply pipelines.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-amber-400 font-bold text-lg mb-1">Commercial Gear</div>
                          <div className="text-xs text-slate-400">Direct importer pricing on high-grade espresso & kitchen equipment.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-cyan-400 font-bold text-lg mb-1">Menu & Packaging</div>
                          <div className="text-xs text-slate-400">Customized recipes, eco coffee cups, lids, and delivery containers.</div>
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
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-amber-400 font-bold text-lg mb-1">Stock Control</div>
                          <div className="text-xs text-slate-400">Real-time SKU tracking with auto-reorder triggers and theft alerts.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-cyan-400 font-bold text-lg mb-1">Store Fixtures</div>
                          <div className="text-xs text-slate-400">Heavy-duty gondola shelving, refrigeration & thermal receipt paper.</div>
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
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-amber-400 font-bold text-lg mb-1">Bulk Supplies</div>
                          <div className="text-xs text-slate-400">Linens, toiletries, and cleaning products straight from OEM mills.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-cyan-400 font-bold text-lg mb-1">Asset Security</div>
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
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-amber-400 font-bold text-lg mb-1">Verified Plants</div>
                          <div className="text-xs text-slate-400">Audited factories with strict quality control inspections.</div>
                        </div>
                        <div className="p-4 rounded-xl bg-slate-900/90 border border-white/5">
                          <div className="text-cyan-400 font-bold text-lg mb-1">Custom Packaging</div>
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

      {/* INTERACTIVE ROI & TRADE ESTIMATOR */}
      <TradeCalculator onOpenInquiry={openInquiry} />

      {/* MANUFACTURING & GLOBAL OEM HUB */}
      <section id="manufacturing" className="py-32 relative flex items-center min-h-[75vh] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-slate-950/90 z-10" />
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 text-xs font-mono uppercase mb-6 backdrop-blur-md">
              <Box className="w-4 h-4 text-amber-400" />
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
                <div key={i} className="p-4 rounded-xl bg-black/70 border-l-4 border-amber-400 border-y border-r border-white/10 backdrop-blur-md">
                  <div className="text-2xl font-bold text-white font-serif">{stat.val}</div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-mono">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button onClick={openInquiry} size="lg" className="bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_20px_rgba(245,183,0,0.3)]">
                Submit Factory Sourcing Request
              </Button>
              <Link href="/manufacturing">
                <Button size="lg" variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 h-14 px-8 text-base">
                  Explore Manufacturing Page
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROPRIETARY TECHNOLOGY (StoreSKU & X-ON) */}
      <section id="technology" className="py-28 bg-[#060A14] relative">
        <div className="container mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase mb-3">
              Proprietary Tech Suite
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              Intelligent <span className="text-amber-400">Technology</span>
            </h2>
            <p className="text-slate-300 text-lg font-light">
              Smart platforms engineered to run store operations and safeguard commercial assets.
            </p>

            {/* Toggle Tabs */}
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 mt-8">
              <button
                onClick={() => setTechTab("storesku")}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                  techTab === "storesku" ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-md font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                StoreSKU™ AI Retail
              </button>
              <button
                onClick={() => setTechTab("xon")}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                  techTab === "xon" ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-md font-bold" : "text-slate-400 hover:text-white"
                }`}
              >
                X-ON™ AI Surveillance
              </button>
            </div>
          </div>

          {/* Interactive Tech Preview Container */}
          <div className="glass-card-cyber rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                {techTab === "storesku" ? (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-400">
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
                          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={openInquiry} className="bg-amber-400 text-slate-950 font-bold hover:bg-amber-500 h-12 px-6 clip-diagonal">
                        Schedule StoreSKU™ Demo
                      </Button>
                      <Link href="/technology">
                        <Button variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 h-12 px-6">
                          View Tech Details
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
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
                        "License Plate & Incident Detection Support",
                        "Tamper-proof Encrypted Off-site Backup"
                      ].map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={openInquiry} className="bg-cyan-400 text-slate-950 font-bold hover:bg-cyan-500 h-12 px-6 clip-diagonal">
                        Request X-ON™ Security Spec
                      </Button>
                      <Link href="/technology">
                        <Button variant="outline" className="border-white/20 text-slate-200 hover:bg-white/10 h-12 px-6">
                          View Tech Details
                        </Button>
                      </Link>
                    </div>
                  </>
                )}
              </div>

              {/* Simulation Visual Box with Recharts */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl bg-slate-950 border border-white/10 p-6 shadow-2xl overflow-hidden font-mono text-xs">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-slate-400">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500" />
                      <span className="ml-2 font-bold text-slate-200">
                        {techTab === "storesku" ? "StoreSKU™_LIVE_ANALYTICS" : "X-ON_AI_MONITORING"}
                      </span>
                    </div>
                    <span className="text-emerald-400 flex items-center gap-1 font-bold">
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
                            <stop offset="5%" stopColor={techTab === "storesku" ? "#F5B700" : "#38BDF8"} stopOpacity={0.4}/>
                            <stop offset="95%" stopColor={techTab === "storesku" ? "#F5B700" : "#38BDF8"} stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="time" stroke="#64748B" fontSize={10} tickLine={false} />
                        <YAxis stroke="#64748B" fontSize={10} tickLine={false} />
                        <Tooltip contentStyle={{ backgroundColor: "#0F172A", borderColor: "#334155", color: "#fff", fontSize: 11 }} />
                        <Area type="monotone" dataKey={techTab === "storesku" ? "sales" : "events"} stroke={techTab === "storesku" ? "#F5B700" : "#38BDF8"} strokeWidth={2} fill="url(#colorPrimary)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {techTab === "storesku" ? (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300">AUTO-REORDER LOGIC:</span>
                        <span className="text-amber-400 font-bold">BEVERAGE SKU #8812 TRIGGERED</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-white/5 text-slate-400 text-[11px]">
                        [AI SYS]: Shrinkage risk index down 32% across active Texas & Ontario store clusters.
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-white/5 flex items-center justify-between">
                        <span className="text-slate-300 font-bold text-emerald-400">PERIMETER: 100% SECURE</span>
                        <span className="text-xs text-cyan-400 font-mono">24/7 ENCRYPTED</span>
                      </div>
                      <div className="p-3 bg-slate-900/90 rounded-lg border border-white/5 text-slate-400 text-[11px]">
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

      {/* GLOBAL FOOTPRINT & INTERACTIVE MAP */}
      <section className="py-28 bg-slate-950 border-t border-white/10 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={FADE_UP}>
            <div className="w-14 h-14 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mx-auto mb-6 shadow-[0_0_30px_rgba(56,189,248,0.2)]">
              <Globe className="w-7 h-7 text-amber-400" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
              A Global <span className="text-cyan-400">Footprint</span>
            </h2>
            
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12 font-light">
              Connecting primary trade hubs across North America, Asia, and international markets. Click a hub to view live node details.
            </p>
            
            {/* Country Cards */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              {[
                { id: "usa", name: "United States", code: "USA", city: "New York • Texas • California", hub: "Active Corridor" },
                { id: "india", name: "India", code: "IND", city: "Gujarat • Mumbai • Delhi", hub: "120+ OEM Plants" },
                { id: "canada", name: "Canada", code: "CAN", city: "Ontario • Vancouver • Alberta", hub: "Distribution Hub" }
              ].map((country) => (
                <div 
                  key={country.id} 
                  onClick={() => setSelectedNode(country.id as any)}
                  className={`glass-card rounded-2xl p-6 border transition-all text-left cursor-pointer group hover:-translate-y-1 ${
                    selectedNode === country.id 
                      ? "border-cyan-400 bg-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.2)]" 
                      : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-bold text-white">{country.name}</span>
                    <span className="px-2.5 py-1 rounded bg-amber-400/20 text-amber-400 text-xs font-mono font-bold">{country.code}</span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono mb-3">{country.city}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono">
                    <span className="text-slate-300 font-semibold">{country.hub}</span>
                    <span className="text-emerald-400">OPERATIONAL</span>
                  </div>
                </div>
              ))}
            </div>

            {/* SVG Trade Route Animation */}
            <div className="relative w-full h-56 max-w-4xl mx-auto rounded-3xl bg-slate-900/80 border border-white/10 overflow-hidden flex items-center justify-center p-6 shadow-2xl">
              <div className="absolute inset-0 bg-grid-cyber opacity-10 pointer-events-none" />
              
              <svg className="w-full h-full" viewBox="0 0 800 200">
                <motion.path 
                  d="M 150 100 Q 300 30 450 100 T 750 100" 
                  fill="none" 
                  stroke="#38BDF8" 
                  strokeWidth="3"
                  strokeDasharray="8 8"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
                
                <g onClick={() => setSelectedNode("usa")} className="cursor-pointer">
                  <circle cx="150" cy="100" r={selectedNode === "usa" ? "12" : "7"} fill="#F5B700" className="animate-ping opacity-75" />
                  <circle cx="150" cy="100" r="6" fill="#F5B700" />
                  <text x="115" y="140" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="mono">USA NODE</text>
                </g>

                <g onClick={() => setSelectedNode("india")} className="cursor-pointer">
                  <circle cx="450" cy="100" r={selectedNode === "india" ? "12" : "7"} fill="#38BDF8" className="animate-ping opacity-75" />
                  <circle cx="450" cy="100" r="6" fill="#38BDF8" />
                  <text x="410" y="140" fill="#fff" fontSize="13" fontWeight="bold" fontFamily="mono">INDIA OEM</text>
                </g>

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

      {/* VERIFIED CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* HIGH IMPACT CTA */}
      <section className="py-28 relative overflow-hidden border-t border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-cyan-500/5 z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-cyan-500/15 blur-[170px] rounded-full pointer-events-none z-0" />
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white mb-6 leading-tight">
              Everything Your Business Needs.<br/>
              <span className="shimmer-text">All in One Place.</span>
            </motion.h2>
            
            <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-xl text-slate-300 mb-10 font-light">
              OneTrade360™ — One Platform. One Click. Unlimited Business Opportunities.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Button onClick={openInquiry} size="lg" className="w-full sm:w-auto h-16 px-10 text-lg bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 hover:brightness-110 clip-diagonal font-bold shadow-[0_0_35px_rgba(245,183,0,0.45)]">
                Connect With Us Today
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto h-16 px-10 text-lg border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 clip-diagonal font-semibold">
                  Contact Us Direct
                </Button>
              </Link>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 text-left">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <MapPin className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Global HQs</h4>
                  <p className="text-xs text-slate-300 font-mono">India • USA • Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <Phone className="w-6 h-6 text-cyan-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Direct Lines</h4>
                  <p className="text-xs text-slate-300 font-mono">India: +91-7984171515<br/>USA: +1-272-267-9294</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-900/80 border border-white/5">
                <Mail className="w-6 h-6 text-amber-400 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white mb-1">Direct Email</h4>
                  <p className="text-xs text-slate-300 font-mono truncate">onetradeworld360<br/>@gmail.com</p>
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
          className="h-14 px-6 rounded-full bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 font-bold shadow-[0_0_30px_rgba(56,189,248,0.5)] hover:scale-105 transition-transform flex items-center gap-3 border border-cyan-300"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="hidden sm:inline">Quick Inquiry</span>
        </Button>
      </div>

      {/* FOOTER */}
      <Footer onOpenInquiry={openInquiry} onReplaySplash={() => setShowSplash(true)} />

    </div>
  );
}
