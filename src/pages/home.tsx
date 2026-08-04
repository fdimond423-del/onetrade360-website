import React, { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { Counter } from "@/components/Counter";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { TradeCalculator } from "@/components/TradeCalculator";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import { 
  Globe, Building2, TrendingUp, Box, Shield, Activity, 
  Cpu, Layers, ArrowRight, ChevronRight, CheckCircle2, Factory, MonitorSmartphone, MapPin, Phone, Mail,
  Sparkles, Zap, Lock, RefreshCw, Briefcase, Award, ArrowUpRight, MessageSquare, ShieldCheck, Target, Compass,
  DollarSign, ShoppingCart, Hotel, Utensils, Stethoscope, Store, Play, BarChart3, Radio, Users, Check, ExternalLink,
  Handshake, Network, Share2, Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FADE_UP = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const FADE_SCALE = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

const SLIDE_RIGHT = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const CONTAINER_STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeCorridor, setActiveCorridor] = useState<"india" | "usa" | "canada" | "global">("india");
  const [activeCatalogTab, setActiveCatalogTab] = useState<"packaging" | "coffee" | "pos" | "hotel">("packaging");

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } });
    
    tl.fromTo('.hero-tag', { y: 30, opacity: 0 }, { y: 0, opacity: 1, delay: 0.2 })
      .fromTo('.hero-title', { y: 40, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1 }, '-=0.9')
      .fromTo('.hero-desc', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.9')
      .fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2 }, '-=1')
      .fromTo('.hero-stats', { opacity: 0 }, { opacity: 1, duration: 2 }, '-=0.5');
    
    gsap.utils.toArray('.orion-card').forEach((card) => {
      gsap.fromTo(card as Element, 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: card as Element, start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
    });

    gsap.utils.toArray('.section-reveal').forEach((el) => {
      gsap.fromTo(el as Element, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', scrollTrigger: { trigger: el as Element, start: 'top 85%', toggleActions: 'play none none reverse' } }
      );
    });
  }, { scope: undefined });

  const corridorData = {
    india: {
      flag: "🇮🇳",
      name: "India Corridor",
      subtitle: "Manufacturing & OEM Export Hub",
      stat1: "120+ Audited OEM Plants",
      stat2: "14-21 Days Express Sea Freight",
      stat3: "ISO & FSSAI Certified Products",
      desc: "Direct access to audited manufacturing plants in Gujarat, Maharashtra, and NCR for paper packaging, coffee gear, nutraceuticals, and commercial fixtures."
    },
    usa: {
      flag: "🇺🇸",
      name: "United States Corridor",
      subtitle: "Retail & Commercial Store Distribution",
      stat1: "1,480+ Active StoreSKU Outlets",
      stat2: "24-48 Hr Local Fulfillment",
      stat3: "X-ON Security Monitored",
      desc: "Empowering convenience stores, gas stations, supermarkets, and restaurants across NY, TX, CA, and FL with automated POS and direct inventory replenishment."
    },
    canada: {
      flag: "🇨🇦",
      name: "Canada Corridor",
      subtitle: "Wholesale & Business Brokerage Hub",
      stat1: "100+ Verified Business Listings",
      stat2: "Cross-Border Tax Cleared",
      stat3: "Turnkey Franchise Licensing",
      desc: "Comprehensive business acquisition support for gas stations, car washes, and laundromats, alongside bulk wholesale distribution across ON & BC."
    },
    global: {
      flag: "🌐",
      name: "Global Network",
      subtitle: "360° International Trade Ecosystem",
      stat1: "$85M+ Facilitated Volume",
      stat2: "3 Tier-1 Shipping Hubs",
      stat3: "End-to-End Customs Audit",
      desc: "Connecting international enterprise buyers directly with verified manufacturers and turnkey commercial store locations worldwide."
    }
  };

  const catalogItems = {
    packaging: [
      { title: "Double-Wall Eco Paper Cups", desc: "Custom branded, leak-proof, food-grade certified", code: "OEM-PAK-801" },
      { title: "Kraft Bio-Bags & Takeout Boxes", desc: "Heavy-duty eco packaging for QSR & delivery", code: "OEM-PAK-805" },
      { title: "Biodegradable Cutlery Sets", desc: "Compostable PLA cutlery & container lids", code: "OEM-PAK-809" },
    ],
    coffee: [
      { title: "Commercial Dual-Group Espresso Machine", desc: "Italian rotary pump, PID temp control, high-volume", code: "OEM-EQU-301" },
      { title: "Smart Burr Coffee Grinder", desc: "Stepless micro-adjustment, digital timer display", code: "OEM-EQU-304" },
      { title: "Industrial Boba & Tea Brewer", desc: "Programmable temperature control, high throughput", code: "OEM-EQU-309" },
    ],
    pos: [
      { title: "StoreSKU™ Dual-Screen POS Terminal", desc: "Built-in thermal printer, inventory auto-sync", code: "TECH-POS-101" },
      { title: "X-ON™ AI Smart Security Camera", desc: "Loss prevention, license plate recognition", code: "TECH-SEC-202" },
      { title: "Handheld Wireless Inventory Scanner", desc: "Bar-code & QR, 50m range, rugged casing", code: "TECH-POS-105" },
    ],
    hotel: [
      { title: "Premium Commercial Bed Linen Sets", desc: "300TC Egyptian cotton, bleach-resistant", code: "OEM-HTL-501" },
      { title: "Luxury Guest Amenity Kits", desc: "Eco dispenser bottles, organic formulation", code: "OEM-HTL-504" },
      { title: "High-Volume Hotel Tissue Supplies", desc: "2-Ply ultra soft, 100% virgin pulp", code: "OEM-HTL-508" },
    ]
  };

  return (
    <div className="bg-white min-h-screen text-amber-700 font-sans relative selection:bg-amber-400 selection:text-amber-700 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      
      {/* Navigation Header */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      {/* Top Live Ticker Strip */}
      <LiveTicker />

      {/* SECTION 1: HERO */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="relative pt-16 pb-20 lg:pt-20 lg:pb-28 border-b border-gray-200 overflow-hidden bg-white">

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Statement */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={FADE_UP}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              {/* Floating Tagline Badge */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="hero-tag inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm"
              >
                <Globe className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
                <span>ONE PLATFORM. GLOBAL CONNECTIONS. ENDLESS OPPORTUNITIES.</span>
              </motion.div>

              <h1 className="hero-title text-4xl sm:text-6xl xl:text-7xl font-serif font-extrabold text-amber-700 leading-[1.12] tracking-tight">
                The Complete <br />
                <span className="shimmer-text">Business Ecosystem</span> <br />
                For Retail, Hospitality, Manufacturing & Global Trade
              </h1>

              <p className="hero-desc text-slate-600 text-base sm:text-lg font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                OneTrade360™ is a global B2B platform built to help entrepreneurs, retailers, investors, manufacturers, suppliers, and service providers connect, trade, and grow. Whether you’re launching your first business, expanding across multiple locations, or sourcing products globally.
              </p>

              {/* Action Buttons */}
              <div className="hero-btns flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="w-full sm:w-auto h-13 px-8 text-xs font-bold uppercase tracking-wider bg-white hover:bg-gray-100 text-amber-700 shadow-lg hover:brightness-110 cursor-pointer flex items-center justify-center gap-2 rounded-xl border border-slate-900"
                >
                  <span>Explore Ecosystem Solutions</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Button>

                <a 
                  href="https://wa.me/917984171515?text=Hello%20OneTrade360,%20I%20am%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button 
                    variant="outline" 
                    className="w-full h-13 px-8 text-xs font-bold uppercase tracking-wider border-emerald-600/60 text-amber-700 bg-emerald-50 hover:bg-emerald-100 cursor-pointer flex items-center justify-center gap-2 rounded-xl"
                  >
                    <MessageSquare className="w-4 h-4 text-gray-700" />
                    <span>Instant WhatsApp</span>
                  </Button>
                </a>
              </div>

              {/* Trust Metric Counters */}
              <div className="hero-stats pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-700">
                    <Counter value={1480} suffix="+" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 uppercase">Retail Outlets Synced</div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-600">
                    <Counter value={120} suffix="+" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 uppercase">Audited OEM Plants</div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-700">
                    <Counter value={3} suffix=" Corridors" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-600 uppercase">India • USA • Canada</div>
                </div>
              </div>
            </motion.div>

            {/* Right Card — Clean white card with feature highlights */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={SLIDE_RIGHT}
              className="lg:col-span-5"
            >
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                <div className="bg-slate-50 border-y border-slate-200 px-6 py-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-amber-700 font-mono tracking-wide">OneTrade360™ Ecosystem</span>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-200 text-emerald-700 text-[10px] font-mono font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    VERIFIED
                  </div>
                </div>
                <div className="divide-y divide-gray-100">
                  {[
                    { title: "Direct Factory OEM Sourcing", desc: "120+ Audited Plants — India, USA & Canada", icon: Factory, accent: "bg-amber-50 text-amber-700 border-amber-200" },
                    { title: "StoreSKU™ Retail Management", desc: "1,480+ Active Multi-Location Stores", icon: Cpu, accent: "bg-gray-100 text-gray-800 border-gray-200" },
                    { title: "Turnkey Commercial Setup", desc: "Café, C-Store, Hotel & Wholesale Infrastructure", icon: Building2, accent: "bg-amber-50 text-amber-700 border-amber-200" },
                    { title: "Business Acquisition Service", desc: "Gas Stations, C-Stores, Laundromats & Car Washes", icon: Briefcase, accent: "bg-gray-100 text-gray-800 border-gray-200" },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className="flex items-center gap-4 px-5 py-4 hover:bg-amber-50 transition-colors group"
                      >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${item.accent}`}>
                          <ItemIcon className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-amber-700 group-hover:text-amber-700 transition-colors">{item.title}</div>
                          <div className="text-xs text-gray-500 mt-0.5 truncate">{item.desc}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-amber-500 shrink-0 transition-colors" />
                      </motion.div>
                    );
                  })}
                </div>
                <div className="px-5 py-4 bg-gray-50 border-t border-gray-100">
                  <Button 
                    onClick={() => setInquiryOpen(true)}
                    className="w-full h-11 bg-white border-2 border-slate-900 text-amber-700 font-bold text-xs uppercase tracking-wider rounded-xl cursor-pointer transition-colors"
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* SECTION 2: THE 5 BRAND PILLARS */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              Core Ecosystem Pillars
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-700 mb-4">
              Built On <span className="gold-text-gradient">5 Pillars Of Excellence</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Guiding global businesses from initial connection to sustainable market leadership.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={CONTAINER_STAGGER}
            className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto"
          >
            {[
              {
                pillar: "CONNECT",
                icon: Handshake,
                color: "bg-amber-50 border border-amber-200 text-amber-600",
                text: "Linking buyers, suppliers, OEM plants, and retail outlets into one unified digital trade ecosystem."
              },
              {
                pillar: "TRADE",
                icon: Globe,
                color: "bg-amber-50 border border-amber-200 text-amber-600",
                text: "Streamlining international shipping, customs, cross-border payments, and supply chain logistics."
              },
              {
                pillar: "GROW",
                icon: TrendingUp,
                color: "bg-amber-50 border border-amber-200 text-amber-600",
                text: "Scaling store revenue with StoreSKU™ POS AI automation and direct factory cost savings."
              },
              {
                pillar: "COLLABORATE",
                icon: Users,
                color: "bg-amber-50 border border-amber-200 text-amber-600",
                text: "Uniting investors, franchisors, and business brokers for turnkey acquisition deals."
              },
              {
                pillar: "SUCCEED",
                icon: Target,
                color: "bg-amber-50 border border-amber-200 text-amber-600",
                text: "Ensuring long-term profitability, operational compliance, and business enterprise value."
              },
            ].map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={FADE_UP}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="orion-card p-5 flex flex-col justify-between group hover:border-amber-400"
                >
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center font-extrabold shadow-md`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <div className="text-xs font-mono font-bold text-amber-700 tracking-wider">PILLAR {idx + 1}</div>
                    <h3 className="text-xl font-serif font-extrabold text-amber-700 group-hover:text-amber-600 transition-colors">
                      {item.pillar}
                    </h3>

                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {item.text}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-600">
                    <span>Verified</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-gray-700" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 3: INTERACTIVE GLOBAL CORRIDORS (INDIA, USA, CANADA) */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="py-24 bg-white border-b border-slate-200 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={FADE_UP}
            className="section-reveal text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 border border-gray-300 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Network className="w-3.5 h-3.5 text-amber-700" />
              Interactive Cross-Border Trade Corridors
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-700 mb-4">
              Connecting <span className="shimmer-text">India, USA & Canada</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Select a trade corridor below to explore live OEM facilities, retail networks, and logistics channels.
            </p>

            {/* Corridor Tabs Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-8 p-2 rounded-2xl bg-slate-100 border border-slate-200">
              {(["india", "usa", "canada", "global"] as const).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveCorridor(key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeCorridor === key
                      ? "bg-white text-amber-700 shadow-md"
                      : "text-slate-700 hover:text-amber-700 hover:bg-white"
                  }`}
                >
                  <span className="text-base">{corridorData[key].flag}</span>
                  <span>{corridorData[key].name}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Dynamic Corridor Detail View */}
          <motion.div 
            key={activeCorridor}
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-4xl mx-auto orion-card-navy p-8 sm:p-12 border-gray-200 relative"
          >
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{corridorData[activeCorridor].flag}</span>
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-amber-700">{corridorData[activeCorridor].name}</h3>
                    <p className="text-xs font-mono text-amber-400">{corridorData[activeCorridor].subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm font-light leading-relaxed">
                  {corridorData[activeCorridor].desc}
                </p>

                <div className="space-y-2 pt-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>{corridorData[activeCorridor].stat1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>{corridorData[activeCorridor].stat2}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>{corridorData[activeCorridor].stat3}</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 flex flex-col justify-center space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-200 text-center">
                <div className="text-xs font-mono text-gray-500 uppercase">Live Corridor Status</div>
                <div className="text-3xl font-serif font-bold text-emerald-700 flex items-center justify-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                  100% ACTIVE
                </div>
                <p className="text-xs text-gray-500 font-light">Customs Cleared & Standardized Logistics Protocols</p>
                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="w-full h-11 bg-amber-400 hover:bg-amber-500 text-amber-700 font-bold text-xs uppercase cursor-pointer rounded-xl"
                >
                  Initiate Trade Proposal
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 4: TURNKEY SOLUTIONS & ECOSYSTEM SERVICES */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-200 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Building2 className="w-3.5 h-3.5 text-amber-700" />
              Turnkey Infrastructure Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-700 mb-4">
              Comprehensive <span className="shimmer-text">Ecosystem Solutions</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              From concept development to direct OEM equipment sourcing and daily store operational execution.
            </p>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.15 }}
            variants={CONTAINER_STAGGER}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "Restaurant & Café Setup",
                desc: "Complete café & restaurant setup, commercial kitchen design, espresso machines, tea programs, delivery packaging & kiosks.",
                icon: Utensils,
                link: "/solutions"
              },
              {
                title: "C-Store & Gas Station",
                desc: "StoreSKU™ AI, X-ON™ Security, POS systems, gondola shelving, slatwall systems, refrigeration & store supplies.",
                icon: Store,
                link: "/solutions"
              },
              {
                title: "Hospitality & Hotel",
                desc: "Hotel/motel furniture, fixtures, security systems, guest amenities, tissue products & facility equipment.",
                icon: Hotel,
                link: "/solutions"
              },
              {
                title: "Wholesale Marketplace",
                desc: "Bulk F&B supply, tissue products, coffee cups, packaging containers, commercial equipment & medical supplies.",
                icon: Box,
                link: "/solutions"
              },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <motion.div 
                  key={idx} 
                  variants={FADE_UP}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="orion-card p-6 flex flex-col justify-between group hover:border-amber-400"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-amber-700 flex items-center justify-center shadow-sm">
                      <CardIcon className="w-6 h-6 text-amber-700" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-amber-700 group-hover:text-amber-600 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100">
                    <Link href={card.link} className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 hover:text-amber-700 transition-colors">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-600" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 5: INTERACTIVE OEM CATALOG PREVIEW */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="py-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={FADE_UP}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
              <Factory className="w-3.5 h-3.5 text-amber-700" />
              Direct OEM Product Catalog
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-700 mb-4">
              Factory Direct <span className="gold-text-gradient">Sourcing Specs</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Audited products shipped directly from verified manufacturing facilities in India & North America.
            </p>

            {/* Catalog Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              {[
                { id: "packaging", label: "Paper & Packaging" },
                { id: "coffee", label: "Café & Coffee Gear" },
                { id: "pos", label: "StoreSKU POS & AI Hardware" },
                { id: "hotel", label: "Hotel & Facility Supplies" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCatalogTab(tab.id as any)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                    activeCatalogTab === tab.id
                      ? "bg-amber-400 text-amber-700 shadow-md"
                      : "text-slate-700 hover:text-amber-700 hover:bg-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Catalog Items Display */}
          <motion.div 
            key={activeCatalogTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {catalogItems[activeCatalogTab].map((item, idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ scale: 1.03, y: -4 }}
                className="orion-card p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="text-[10px] font-mono text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded w-fit">
                    {item.code}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-amber-700">{item.title}</h3>
                  <p className="text-xs text-slate-600 font-light">{item.desc}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-amber-700 font-bold">100% Factory Audit</span>
                  <Button 
                    onClick={() => setInquiryOpen(true)}
                    size="sm"
                    className="h-8 text-[11px] bg-white hover:bg-amber-500 hover:text-amber-700 text-amber-700 font-mono font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    Request Quote
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* SECTION 6: FINANCIAL ROI FEASIBILITY CALCULATOR */}
      <TradeCalculator onOpenInquiry={() => setInquiryOpen(true)} />

      {/* SECTION 7: CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 8: EXECUTIVE CALL TO ACTION */}
      <motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.1 }}
  transition={{ duration: 0.6 }}
  className="py-24 bg-slate-50 text-amber-700 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={FADE_SCALE}
            className="p-10 sm:p-16 rounded-3xl border border-slate-300 bg-white shadow-xl"
          >
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-700 mb-6 leading-tight">
              Ready to Accelerate Your <br />
              <span className="shimmer-text">Global Trade Pipeline?</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with our corporate teams in India, USA, and Canada to discuss your business acquisition, OEM manufacturing, or turnkey setup requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setInquiryOpen(true)}
                className="w-full sm:w-auto h-13 px-10 bg-white hover:bg-gray-100 text-amber-700 font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer rounded-xl"
              >
                Schedule Executive Consultation
              </Button>

              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto h-13 px-8 border-slate-300 text-amber-700 hover:bg-slate-100 font-serif text-xs uppercase cursor-pointer rounded-xl">
                  Contact Support Lines
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <Footer onReplaySplash={() => setShowSplash(true)} onOpenInquiry={() => setInquiryOpen(true)} />
    </div>
  );
}
