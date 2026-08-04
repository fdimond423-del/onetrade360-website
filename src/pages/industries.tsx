import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Building2, Utensils, Activity, Factory, CheckCircle2, ChevronRight, ArrowRight,
  ShieldCheck, Store, Hotel, Box, Cpu, Sparkles, MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function IndustriesPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const sectors = [
    {
      id: "retail",
      title: "Retail & Convenience",
      desc: "Comprehensive operational setup, StoreSKU™ inventory automation, and supplier pipelines for fast-paced retail.",
      icon: Store,
      accent: "from-amber-400 to-amber-600",
      border: "border-amber-400/30",
      items: [
        "Convenience Stores", "Gas Stations", "Liquor Stores", 
        "Smoke Shops", "Grocery Stores", "Specialty Retail"
      ]
    },
    {
      id: "hospitality",
      title: "Restaurant & Hospitality",
      desc: "Turnkey equipment, commercial kitchen layout design, guest amenities, and supply chain for food & lodging.",
      icon: Utensils,
      accent: "from-gray-400 to-gray-600",
      border: "border-amber-400/30",
      items: [
        "Coffee Shops", "Cafés", "Full Service Restaurants", "QSR Chains", 
        "Bakeries", "Hotels", "Motels", "Resorts", "Travel Centers"
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare & Wellness",
      desc: "Regulatory-compliant sourcing, medical equipment, nutraceutical supply pipelines, and facility security.",
      icon: Activity,
      accent: "from-emerald-400 to-teal-600",
      border: "border-emerald-400/30",
      items: [
        "Pharmacies", "Medical Clinics", "Rehabilitation Centers", 
        "Wellness Centers", "Nutraceutical Companies", "Medical Suppliers"
      ]
    },
    {
      id: "industrial",
      title: "Commercial & Industrial",
      desc: "Direct factory OEM manufacturing, cross-border logistics, warehouse equipment, and industrial site surveillance.",
      icon: Factory,
      accent: "from-gray-700 to-gray-800",
      border: "border-gray-300",
      items: [
        "Warehouses", "Manufacturing Plants", "Industrial Parks", 
        "Commercial Offices", "Shopping Centers", "Distribution Centers"
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Header */}
      <section className="relative py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-amber-500/10 blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Building2 className="w-4 h-4 text-amber-700" />
            Core Industry Portfolios
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
            Industries We <span className="shimmer-text">Serve Globally</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Tailored supply chain, technology, and commercial setup solutions for high-demand business sectors across USA, India, and Canada.
          </p>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {sectors.map((sec, idx) => (
              <motion.div
                key={sec.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1 }}
                className={`glass-card rounded-3xl p-8 sm:p-10 border ${sec.border} hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1.5 relative overflow-hidden`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sec.accent} flex items-center justify-center text-slate-950 shadow-lg`}>
                    <sec.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gray-900">{sec.title}</h3>
                    <span className="text-xs font-mono text-amber-700">Industry Vertical #{idx + 1}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">{sec.desc}</p>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xs font-mono uppercase text-gray-500 mb-4 tracking-wider">Sub-Sectors & Businesses Served</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sec.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700 bg-gray-50/80 p-2.5 rounded-xl border border-gray-100">
                        <ChevronRight className="w-4 h-4 text-amber-700 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center glass-card-cyber rounded-3xl p-10 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Don't See Your Specific Business Type?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              OneTrade360 serves over 18+ business categories. Contact our team for customized global sourcing and operational match-making.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              Consult Industry Specialists
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
