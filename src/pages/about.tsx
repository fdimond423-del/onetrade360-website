import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Globe, Compass, Target, ShieldCheck, CheckCircle2, ChevronRight, ArrowRight,
  Sparkles, Layers, Cpu, Store, Factory, Building2, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const pillars = [
    { title: "One Platform for Every Need", desc: "A single integrated login for turnkey setup, technology, wholesale, and acquisition.", icon: Layers },
    { title: "Global Factory Network", desc: "Direct manufacturer pricing from verified ISO-audited plants in India, USA, and Canada.", icon: Factory },
    { title: "AI-Powered Platforms", desc: "StoreSKU™ retail management and X-ON™ camera security software suite.", icon: Cpu },
    { title: "Business Buying & Selling", desc: "Acquisition support, due diligence, business valuation, and investor matching.", icon: Building2 },
    { title: "Wholesale Marketplace", desc: "Direct importer pricing on food service packaging, tissue, and store supplies.", icon: Store },
    { title: "Commercial Equipment", desc: "Espresso machinery, kitchen line gear, refrigeration, and gondola shelving.", icon: Target },
    { title: "Eco Packaging & Supplies", desc: "Custom private label packaging, coffee cups, lids, and delivery supplies.", icon: Sparkles },
    { title: "Import & Export Logistics", desc: "End-to-end customs documentation, freight forwarding, and compliance.", icon: Globe },
    { title: "Trusted Due Diligence", desc: "Rigorous partner auditing, background checks, and license verification.", icon: ShieldCheck },
    { title: "Scalable Operations", desc: "Tailored infrastructure built for single stores up to 50+ chain enterprises.", icon: Award },
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <section className="relative py-20 bg-slate-50 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-50 via-gray-50 to-amber-50 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Compass className="w-4 h-4 text-gray-700" />
            About OneTrade360™
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-950 mb-6 leading-tight">
            Building the World's Leading <br/>
            <span className="shimmer-text">Business Ecosystem</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            OneTrade360 brings together entrepreneurs, retailers, investors, manufacturers, and technology partners into one intelligent, connected platform.
          </p>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-white border-b border-gray-200 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-gold rounded-3xl p-8 sm:p-10 border border-amber-400/40 relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-6">
                <Compass className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-950 mb-4">Our Vision</h2>
              <p className="text-gray-700 text-base leading-relaxed font-light">
                To become the world’s leading business ecosystem by connecting entrepreneurs, manufacturers, investors, suppliers, and technology partners through one intelligent platform that simplifies sourcing, business growth, and global trade.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card-cyber rounded-3xl p-8 sm:p-10 border border-gray-200 relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 border border-gray-200 flex items-center justify-center text-gray-700 mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-950 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-base leading-relaxed font-light">
                Empower businesses with the products, technology, expertise, and global connections needed to build profitable, scalable, and sustainable enterprises.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Choose OneTrade360 Grid */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-950 mb-4">
              Why Choose <span className="text-amber-400">OneTrade360™</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              The 10 core advantages that power enterprise success across global trade corridors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:border-amber-400 hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-amber-400 group-hover:text-black transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-950 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 text-center glass-card-gold rounded-3xl p-10 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-gray-950 mb-4">Everything Your Business Needs. All in One Place.</h3>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 font-light">
              OneTrade360™ — One Platform. One Click. Endless Business Opportunities.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
