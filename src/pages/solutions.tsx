import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Utensils, Store, Hotel, Box, CheckCircle2, ChevronRight, ArrowRight, Sparkles,
  Coffee, ShieldCheck, Flame, Cpu, Layers, RefreshCw, ShoppingBag, Package, Truck
} from "lucide-react";
import { Button } from "@/components/ui/button";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function SolutionsPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"restaurant" | "cstore" | "hospitality" | "wholesale">("restaurant");

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans relative selection:bg-amber-400 selection:text-slate-800 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden border-b border-slate-200 bg-slate-50">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-amber-100 via-amber-50 to-amber-50 blur-[160px] pointer-events-none" />
        <div className="absolute inset-0 bg-grid-cyber opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <Layers className="w-4 h-4 text-amber-600" />
            Turnkey Business Infrastructure
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-slate-800 mb-6 leading-tight">
            OneTrade360™ <span className="shimmer-text">Business Solutions</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed mb-8">
            From concept design to direct OEM equipment sourcing and AI store operations, we provide the complete physical and digital infrastructure for high-growth enterprises.
          </p>

          {/* Quick Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {[
              { id: "restaurant", label: "Restaurant & Café", icon: Utensils },
              { id: "cstore", label: "Convenience Store & Gas", icon: Store },
              { id: "hospitality", label: "Hospitality & Hotel", icon: Hotel },
              { id: "wholesale", label: "Wholesale & Distribution", icon: Box },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 font-bold shadow-md"
                    : "text-slate-700 hover:text-slate-800 hover:bg-slate-100"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Solution Content Sections */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">

          {/* 1. Restaurant & Café Solutions */}
          {activeTab === "restaurant" && (
            <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="space-y-12">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-gray-900 shadow-md">
                    <Utensils className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800">Restaurant & Café Solutions</h2>
                    <p className="text-xs font-mono text-amber-700">Concept to Operation • Commercial Equipment • Menu & Launch Support</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-3xl font-light">
                  Helping entrepreneurs build successful food service businesses from concept to full scale operation. We provide factory-direct espresso gear, commercial kitchen design, packaging, and launch programs.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Complete Café Setup", "Restaurant Turnkey Setup", "Commercial Kitchen Design",
                    "Commercial Coffee Equipment", "Tea & Beverage Programs", "Espresso Gear Sourcing",
                    "Commercial Kitchen Gear", "Menu Development & Recipes", "Staff Operational Training",
                    "Franchise Development", "Eco Food Packaging", "Coffee Cups & Lids",
                    "Delivery Packaging", "Smart Kiosk Solutions"
                  ].map((service, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-amber-400 transition-all flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 2. Convenience Store Solutions */}
          {activeTab === "cstore" && (
            <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="space-y-12">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-900 shadow-md">
                    <Store className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800">Convenience Store & Gas Solutions</h2>
                    <p className="text-xs font-mono text-gray-900">StoreSKU™ AI • X-ON™ AI Security • POS • Gondola & Refrigeration</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-3xl font-light">
                  Complete operational solutions for convenience stores, gas stations, liquor stores, and travel centers to optimize layouts, prevent theft, and maximize sales.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "StoreSKU™ AI Retail Operations", "X-ON™ AI Camera Security", "POS Hardware & Software",
                    "Inventory Control Systems", "Commercial Store Fixtures", "Heavy-Duty Gondola Shelving",
                    "Slatwall Display Systems", "Walk-In Refrigeration Equipment", "Hot & Cold Display Cases",
                    "Food Service & Deli Setup", "Thermal Receipt Paper Rolls", "Retail Operating Supplies"
                  ].map((service, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-gray-400 transition-all flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 3. Hospitality Solutions */}
          {activeTab === "hospitality" && (
            <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="space-y-12">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-gray-900 shadow-md">
                    <Hotel className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800">Hospitality & Hotel Solutions</h2>
                    <p className="text-xs font-mono text-gray-900">Hotels • Motels • Resorts • Guest Amenities & Asset Protection</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-3xl font-light">
                  Professional infrastructure and supply programs for hotels, motels, resorts, and travel hubs from guest room amenities to high-volume commercial laundry and perimeter security.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Bulk Hospitality Supplies", "Custom Furniture & Fixtures", "Perimeter AI Security Systems",
                    "Eco Commercial Cleaning Products", "Tissue & Paper Products", "Luxury Guest Amenities",
                    "Property Operations Support", "Commercial Facility Equipment"
                  ].map((service, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-gray-400 transition-all flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-gray-900 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* 4. Wholesale & Distribution */}
          {activeTab === "wholesale" && (
            <motion.div initial="hidden" animate="visible" variants={FADE_UP} className="space-y-12">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-gray-900 shadow-md">
                    <Box className="w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-800">Wholesale & Distribution</h2>
                    <p className="text-xs font-mono text-emerald-700">Direct Factory Importer Pricing • Bulk Supply Pipelines</p>
                  </div>
                </div>

                <p className="text-slate-600 text-base leading-relaxed mb-8 max-w-3xl font-light">
                  Reliable wholesale supply for single or multi-location businesses connecting North American buyers directly to verified manufacturing plants across India and global hubs.
                </p>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    "Food & Beverage Wholesale", "Custom Packaging Products", "Bulk Tissue & Towel Products",
                    "Coffee Cups & Lids", "Takeout Containers", "Industrial Cleaning Supplies",
                    "Kitchen & Cooking Gear", "Retail Store Fixtures", "Medical Supplies & PPE",
                    "Nutraceutical Wellness Products", "Commercial Equipment"
                  ].map((service, i) => (
                    <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-400 transition-all flex items-start gap-3 group">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <span className="text-sm text-slate-800 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA Banner */}
          <div className="mt-16 text-center bg-gray-50 rounded-3xl p-10 relative overflow-hidden border border-gray-200">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Need a Custom Turnkey Solution Package?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              Our specialists configure complete equipment, technology, and sourcing plans tailored to your specific budget and timeline.
            </p>
            <Button 
              onClick={() => setInquiryOpen(true)}
              className="bg-amber-400 hover:bg-amber-500 text-slate-800 font-bold clip-diagonal h-14 px-8 text-base shadow-md"
            >
              Request Solution Proposal
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
