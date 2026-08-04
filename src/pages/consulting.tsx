import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Briefcase, TrendingUp, ShieldCheck, DollarSign, Building2, CheckCircle2, ChevronRight,
  ArrowRight, Users, Scale, Search, FileText, Compass, Sparkles, Store, Hotel, Utensils
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ConsultingPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const acquisitionCategories = [
    { title: "Gas Stations & Fuel", desc: "Turnkey gas station & C-store acquisitions with fuel supply contracts.", icon: Store },
    { title: "Convenience Stores", desc: "High-volume independent & chain C-stores across USA & Canada.", icon: Building2 },
    { title: "Liquor Stores", desc: "Licensed retail liquor & beverage business opportunities.", icon: Store },
    { title: "Hotels & Motels", desc: "Boutique hotels, chain motels & resort property acquisitions.", icon: Hotel },
    { title: "Restaurants & QSR", desc: "Established fast food, cafés & fine dining operations.", icon: Utensils },
    { title: "Car Washes", desc: "Express tunnel & self-serve car wash cash-flow assets.", icon: Briefcase },
    { title: "Laundromats", desc: "Coin & card operated laundromats with strong ROI.", icon: Building2 },
    { title: "Retail Businesses", desc: "Specialty retail, grocery & multi-unit franchise portfolios.", icon: Store },
  ];

  const consultingServices = [
    { title: "Business Valuation", desc: "Comprehensive asset and EBITDA business valuation appraisals.", icon: DollarSign },
    { title: "Due Diligence", desc: "In-depth financial, inventory, tax, and operational risk audits.", icon: Search },
    { title: "Financial Analysis", desc: "Revenue forecasting, margin optimization, and cash flow modeling.", icon: TrendingUp },
    { title: "Lease Negotiation", desc: "Commercial real estate lease terms & landlord concession negotiations.", icon: Scale },
    { title: "Operational Improvement", desc: "Shrinkage reduction, inventory workflow, and staffing optimization.", icon: ShieldCheck },
    { title: "Retail Performance", desc: "StoreSKU™ telemetry insights & product merchandising analytics.", icon: FileText },
    { title: "Startup Consulting", desc: "Concept validation, licensing, permits, and supplier onboarding.", icon: Compass },
    { title: "Expansion Planning", desc: "Multi-location expansion strategy, franchise matching & capital raising.", icon: Users },
  ];

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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-r from-emerald-500/10 via-amber-500/10 to-amber-500/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-700 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Briefcase className="w-4 h-4 text-amber-400" />
            Global Business Service™
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
            Business Acquisition & <span className="shimmer-text">Consulting</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Helping entrepreneurs buy, sell, grow, and manage profitable businesses across North America and India with verified due diligence and strategic match-making.
          </p>
        </div>
      </section>

      {/* Business Acquisition Section */}
      <section className="py-20 relative border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Business <span className="text-amber-400">Acquisition Services</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Buy, sell, expand, or match with verified investors for prime commercial enterprises.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["Buy Businesses", "Sell Businesses", "Franchise Opportunities", "Investor Matching", "Business Expansion"].map((pillar, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-lg bg-gray-50 border border-gray-200 text-xs font-mono text-amber-700 font-semibold">
                  {pillar}
                </span>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {acquisitionCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card p-6 rounded-2xl border border-gray-200 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 mb-4 group-hover:bg-amber-400 group-hover:text-slate-800 transition-colors">
                  <cat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Consulting Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Professional <span className="text-amber-700">Consulting & Due Diligence</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Expert advisory services to minimize risk and maximize enterprise valuation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.08 }}
                className="glass-card-cyber p-6 rounded-2xl hover:border-amber-400/70 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-400/30 flex items-center justify-center text-amber-700 mb-4 group-hover:bg-gray-950 text-slate-800 group-hover:text-slate-800 transition-colors">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 text-center glass-card-gold rounded-3xl p-10 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Looking to Buy or Sell a Commercial Business?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              Connect with OneTrade360 certified business brokers and valuation advisors in USA, India, & Canada.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-slate-800 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              Schedule Acquisition Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
