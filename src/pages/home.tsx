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
  DollarSign, ShoppingCart, Hotel, Utensils, Stethoscope, Store, Play, BarChart3, Radio, Users, Check, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FADE_UP = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Home() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeCorridor, setActiveCorridor] = useState<"india" | "usa" | "canada">("india");

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-slate-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      
      {/* Navigation Header */}
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      {/* Top Live Ticker Strip */}
      <div className="bg-slate-900 text-white">
        <LiveTicker />
      </div>

      {/* SECTION 1: ORION-STYLE EXECUTIVE HERO GATEWAY */}
      <section className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Hero Statement */}
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={FADE_UP}
              className="lg:col-span-7 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-serif font-semibold uppercase tracking-wider shadow-sm">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>Re-Imagining Global Trade & B2B Infrastructure</span>
              </div>

              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-serif font-extrabold text-slate-950 leading-[1.15] tracking-tight">
                The Complete <br />
                <span className="corporate-text-gradient">Business Ecosystem</span> <br />
                For Global Enterprise.
              </h1>

              <p className="text-slate-600 text-base sm:text-lg font-light max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                OneTrade360™ unifies entrepreneurs, retailers, investors, manufacturers, suppliers, and service providers across <strong className="text-slate-950 font-medium">India 🇮🇳, USA 🇺🇸, and Canada 🇨🇦</strong> into one trusted, connected trade network.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="w-full sm:w-auto h-13 px-8 text-xs font-serif font-bold uppercase tracking-wider bg-[#0F172A] hover:bg-slate-800 text-white shadow-lg cursor-pointer flex items-center justify-center gap-2 rounded-lg"
                >
                  <span>Explore Ecosystem Solutions</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Button>

                <Link href="/solutions">
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-auto h-13 px-8 text-xs font-serif font-bold uppercase tracking-wider border-slate-300 text-slate-900 bg-white hover:bg-slate-50 cursor-pointer flex items-center justify-center gap-2 rounded-lg"
                  >
                    <span>View All Services</span>
                    <ChevronRight className="w-4 h-4 text-slate-500" />
                  </Button>
                </Link>
              </div>

              {/* Trust Metric Counters */}
              <div className="pt-8 grid grid-cols-3 gap-4 border-t border-slate-200 max-w-lg mx-auto lg:mx-0">
                <div className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-slate-950">
                    <Counter end={1480} suffix="+" />
                  </div>
                  <div className="text-[11px] font-serif text-slate-500 uppercase">Retail Stores Synced</div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-amber-600">
                    <Counter end={120} suffix="+" />
                  </div>
                  <div className="text-[11px] font-serif text-slate-500 uppercase">Audited OEM Plants</div>
                </div>

                <div className="space-y-0.5 border-l border-slate-200 pl-4">
                  <div className="text-2xl sm:text-3xl font-serif font-extrabold text-cyan-700">
                    <Counter end={3} suffix=" Corridors" />
                  </div>
                  <div className="text-[11px] font-serif text-slate-500 uppercase">India • USA • Canada</div>
                </div>
              </div>
            </motion.div>

            {/* Right Card Featured Executive Shield */}
            <div className="lg:col-span-5">
              <div className="orion-card p-6 sm:p-8 space-y-6">
                
                {/* Header Logo Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-between pb-6 border-b border-slate-200 gap-4">
                  <div className="p-3 rounded-xl bg-white border-2 border-amber-400 shadow-md">
                    <img 
                      src={logoImg} 
                      alt="OneTrade360 Logo" 
                      className="h-16 sm:h-20 w-auto object-contain max-w-[240px]" 
                    />
                  </div>

                  <div className="px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold flex items-center gap-1.5 self-start sm:self-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                    VERIFIED B2B NETWORK
                  </div>
                </div>

                {/* Executive Highlights */}
                <div className="space-y-3.5">
                  {[
                    { title: "Direct Factory OEM Sourcing", desc: "120+ Audited Plants in India, USA & Canada", icon: Factory },
                    { title: "StoreSKU™ Retail Management", desc: "1,480+ Active Multi-Location Stores", icon: Cpu },
                    { title: "Turnkey Commercial Setup", desc: "Café, C-Store, Hotel & Wholesale Infrastructure", icon: Building2 },
                    { title: "Business Acquisition Service", desc: "Gas Stations, C-Stores, Laundromats & Car Washes", icon: Briefcase },
                  ].map((item, idx) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-colors flex items-start gap-3.5">
                        <div className="p-2 rounded-lg bg-slate-900 text-amber-400 shrink-0 mt-0.5">
                          <ItemIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-serif font-bold text-slate-950">{item.title}</div>
                          <div className="text-[11px] text-slate-500 font-sans">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <Button 
                  onClick={() => setInquiryOpen(true)}
                  className="w-full h-12 bg-[#0F172A] hover:bg-slate-800 text-white font-serif font-bold text-xs uppercase tracking-wider rounded-lg cursor-pointer"
                >
                  Schedule Corporate Consultation
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: GLOBAL CORRIDORS (INDIA, USA, CANADA) */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-900 text-xs font-serif font-semibold uppercase tracking-wider mb-4">
              <Globe className="w-3.5 h-3.5 text-cyan-600" />
              Cross-Border Trade Corridors
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-950 mb-4">
              Connecting <span className="corporate-text-gradient">India, USA & Canada</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Bridge international suppliers, OEM factories, and retail distribution channels through one unified platform.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                country: "India Corridor 🇮🇳",
                title: "Direct OEM Manufacturing",
                desc: "120+ audited factories across Nutraceuticals, Pharma, Food Packaging, Commercial Kitchens & Tissue Products.",
                metric: "14-21 Days Shipping"
              },
              {
                country: "United States Corridor 🇺🇸",
                title: "Retail & Enterprise Network",
                desc: "1,480+ active retail stores, gas stations, convenience stores, and hospitality chains utilizing StoreSKU™ & X-ON™.",
                metric: "Direct Doorstep Logistics"
              },
              {
                country: "Canada Corridor 🇨🇦",
                title: "Wholesale & Business Acquisition",
                desc: "Cross-border distribution hub and business brokerage consulting for commercial acquisitions.",
                metric: "100% Verified Partners"
              },
            ].map((card, idx) => (
              <div key={idx} className="orion-card p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-serif font-bold inline-block">
                    {card.country}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-950">{card.title}</h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">{card.desc}</p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-200 flex items-center justify-between text-xs font-serif text-slate-700 font-bold">
                  <span>Status: Active</span>
                  <span className="text-amber-600">{card.metric}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: TURNKEY SOLUTIONS BY INDUSTRY */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-900 text-xs font-serif font-semibold uppercase tracking-wider mb-4 shadow-sm">
              <Building2 className="w-3.5 h-3.5 text-amber-500" />
              Turnkey Infrastructure Solutions
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-950 mb-4">
              Comprehensive <span className="corporate-text-gradient">Ecosystem Pillars</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              From concept development to daily store operational execution.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Restaurant & Café Setup",
                desc: "Complete café & restaurant setup, commercial kitchen design, coffee equipment, tea programs, delivery packaging & kiosks.",
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
                <div key={idx} className="orion-card p-6 flex flex-col justify-between group">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-md">
                      <CardIcon className="w-6 h-6 text-amber-400" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-slate-950 group-hover:text-amber-600 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      {card.desc}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200">
                    <Link href={card.link} className="inline-flex items-center gap-1.5 text-xs font-serif font-bold text-slate-900 hover:text-amber-600 transition-colors">
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4 text-amber-500" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: FINANCIAL ROI FEASIBILITY CALCULATOR */}
      <TradeCalculator />

      {/* SECTION 5: CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 6: EXECUTIVE CALL TO ACTION */}
      <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="p-10 sm:p-16 rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl">
            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white mb-6 leading-tight">
              Ready to Accelerate Your <br />
              <span className="shimmer-text">Global Trade Pipeline?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base font-light max-w-2xl mx-auto mb-8 leading-relaxed">
              Connect with our corporate teams in India, USA, and Canada to discuss your business acquisition, OEM manufacturing, or turnkey setup requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setInquiryOpen(true)}
                className="w-full sm:w-auto h-13 px-10 bg-gradient-to-r from-amber-400 to-cyan-400 text-slate-950 font-serif font-bold text-xs uppercase tracking-wider clip-diagonal shadow-lg cursor-pointer"
              >
                Schedule Executive Consultation
              </Button>

              <Link href="/contact">
                <Button variant="outline" className="w-full sm:w-auto h-13 px-8 border-slate-700 text-white hover:bg-slate-800 font-serif text-xs uppercase cursor-pointer rounded-lg">
                  Contact Support Lines
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
