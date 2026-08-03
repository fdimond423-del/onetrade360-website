import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Factory, Box, ShieldCheck, Globe, CheckCircle2, ChevronRight, ArrowRight,
  Package, Truck, Award, Search, Sparkles, RefreshCw
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ManufacturingPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const industries = [
    "Nutraceuticals", "Pharmaceuticals", "Cosmetics & Skincare", "Food Products",
    "Eco Packaging", "Tissue & Towel Products", "Cleaning & Hygiene Products", "Plastic Products",
    "Medical Supplies & PPE", "Retail Store Equipment", "Construction Materials", "Commercial Kitchen Equipment"
  ];

  const services = [
    { title: "OEM Manufacturing", desc: "Original Equipment Manufacturing to exact technical and product specifications.", icon: Factory },
    { title: "Private Label Manufacturing", desc: "Custom branded product lines packaged under your company identity.", icon: Package },
    { title: "Contract Manufacturing", desc: "Scalable volume production runs across verified ISO-certified plants.", icon: Box },
    { title: "Factory Verification & QA", desc: "On-site plant audits, ethical labor compliance, and batch quality checks.", icon: ShieldCheck },
    { title: "Product Sourcing & Procurement", desc: "Bypassing brokers to connect buyers directly to OEM primary source mills.", icon: Search },
    { title: "Vendor Development", desc: "Custom mold fabrication, ingredient sourcing, and vendor alignment.", icon: RefreshCw },
    { title: "Export Assistance & Logistics", desc: "Full container shipping, customs documentation, and door-to-door freight.", icon: Truck },
    { title: "Custom Packaging Design", desc: "Branded box, pouch, bottle, and cup design with print execution.", icon: Award },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <section className="relative py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-amber-500/10 via-cyan-500/10 to-amber-500/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Factory className="w-4 h-4 text-amber-700" />
            Global Manufacturing Network
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
            Direct Access to Verified <span className="shimmer-text">Factories & OEM</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Connecting North American and global buyers directly with audited manufacturing plants across India, USA, and Canada. Reduce costs and eliminate middleman markups.
          </p>
        </div>
      </section>

      {/* Manufacturing Industries Grid */}
      <section className="py-20 relative border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Manufacturing <span className="text-amber-700">Industries Covered</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Audited production capacity across key global manufacturing sectors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-gray-50/90 border border-gray-200 hover:border-amber-400/60 transition-all flex items-center gap-3 group"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-400/30 flex items-center justify-center text-amber-700 group-hover:bg-gray-950 text-white group-hover:text-slate-950 transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-700 font-semibold">{ind}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              End-to-End <span className="text-amber-400">OEM & Sourcing Services</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              From audit and product design to customs clearance and door delivery.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((srv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card-cyber p-6 rounded-2xl hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{srv.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 text-center glass-card-gold rounded-3xl p-10 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Ready to Source Directly from Verified OEM Factories?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              Submit your RFQ (Request for Quotation) or product specifications to receive direct factory pricing within 24 hours.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              Submit Factory RFQ Request
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
