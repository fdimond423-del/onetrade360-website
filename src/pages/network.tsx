import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Globe, Users, Building2, CheckCircle2, ChevronRight, ArrowRight,
  ShieldCheck, MapPin, Sparkles, Factory, Store, Briefcase, Award
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NetworkPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);

  const connectedStakeholders = [
    "Entrepreneurs", "Investors", "Manufacturers", "Suppliers",
    "Exporters", "Importers", "Developers", "Commercial Real Estate Brokers",
    "Retailers", "Franchise Companies", "Consultants", "Healthcare Professionals",
    "Hospitality Businesses", "Logistics Companies", "Technology Providers", "Equipment Manufacturers",
    "Packaging Suppliers", "AI & Software Companies"
  ];

  const perfectForList = [
    { title: "New Entrepreneurs", desc: "Starting a first business with turnkey setup guidance & equipment.", icon: Sparkles },
    { title: "Franchise Owners", desc: "Scaling franchise locations with optimized operational solutions.", icon: Building2 },
    { title: "Multi-Store Operators", desc: "Managing 5 to 50+ stores via StoreSKU™ AI inventory control.", icon: Store },
    { title: "Restaurant Owners", desc: "Commercial kitchen equipment & direct packaging supply pipelines.", icon: Briefcase },
    { title: "Convenience Store Owners", desc: "StoreSKU™ POS, gondola shelving, refrigeration & X-ON™ security.", icon: Store },
    { title: "Hotel & Motel Operators", desc: "Guest amenities, tissue products, commercial laundry & asset security.", icon: Building2 },
    { title: "Healthcare Businesses", desc: "Verified medical supplies, nutraceuticals & facility compliance.", icon: ShieldCheck },
    { title: "Investors & Developers", desc: "Matching with profitable commercial real estate & business acquisitions.", icon: Award },
    { title: "Manufacturers & Distributors", desc: "Exporting products directly to North American retail networks.", icon: Factory },
    { title: "Importers & Exporters", desc: "Seamless customs documentation, shipping & global trade corridors.", icon: Globe },
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
      <section className="relative py-20 border-b border-gray-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-amber-500/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-400/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Globe className="w-4 h-4 text-amber-400" />
            One Platform. Global Connections.
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-gray-900 mb-6 leading-tight">
            Global Network & <span className="shimmer-text">Trade Corridors</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed">
            Connecting businesses across India, USA, and Canada through one integrated B2B ecosystem.
          </p>
        </div>
      </section>

      {/* Countries Served Section */}
      <section className="py-20 relative border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Countries We <span className="text-amber-400">Serve</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Active primary hubs with expanding international trade partnerships.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { country: "United States", code: "USA", cities: "New York • Texas • California • Florida", hub: "Headquarters & Retail Corridor", flagText: "UNITED STATES HUB" },
              { country: "India", code: "IND", cities: "Gujarat • Mumbai • Delhi • Bangalore", hub: "OEM Manufacturing & Factory Network", flagText: "INDIA OEM HUB" },
              { country: "Canada", code: "CAN", cities: "Ontario • Vancouver • Alberta • Quebec", hub: "Distribution & Retail Expansion", flagText: "CANADA HUB" },
            ].map((node, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card-cyber p-8 rounded-3xl border border-gray-200 hover:border-amber-400/60 transition-all text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-400/30 flex items-center justify-center text-amber-700 mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="w-8 h-8 text-amber-400" />
                </div>
                <span className="px-3 py-1 rounded bg-amber-400/20 text-amber-400 text-xs font-mono font-bold">{node.code}</span>
                <h3 className="text-2xl font-serif font-bold text-gray-900 mt-3 mb-2">{node.country}</h3>
                <p className="text-xs text-amber-700 font-mono mb-3">{node.cities}</p>
                <p className="text-xs text-gray-500 font-light border-t border-gray-200 pt-3">{node.hub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Connect Grid */}
      <section className="py-20 relative border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Who We <span className="text-amber-700">Connect</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Uniting key business decision-makers across the commercial trade spectrum.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {connectedStakeholders.map((person, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-gray-50/90 border border-gray-200 flex items-center gap-3 hover:border-amber-400/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="text-sm font-semibold text-gray-700">{person}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-4">
              Perfect <span className="text-amber-400">For Your Enterprise</span>
            </h2>
            <p className="text-gray-600 font-light text-base">
              Built to serve businesses at every stage of growth and international expansion.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectForList.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glass-card p-6 rounded-2xl border border-gray-200 hover:border-amber-400/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-400/30 flex items-center justify-center text-amber-700 mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Box */}
          <div className="mt-16 text-center glass-card-gold rounded-3xl p-10 relative overflow-hidden">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Join the OneTrade360™ Global Network</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              One Platform. One Login. Unlimited Business Opportunities. Connect with verified suppliers, investors, and manufacturers today.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal h-14 px-8 text-base shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              Enter Global Network Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
