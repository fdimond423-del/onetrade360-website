import React from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  Coffee, 
  Activity, 
  HeartPulse, 
  Ship 
} from "lucide-react";

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const CONTAINER_STAGGER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const PORTFOLIOS = [
  {
    title: "Import & Export",
    tagline: "Helping Businesses Expand Globally.",
    image: "images/portfolios/import-export.jpeg",
    icon: Ship,
    features: [
      "International Trade",
      "Product Sourcing",
      "Freight Coordination",
      "Customs Support",
      "Wholesale Network",
      "Global Supplier Matching"
    ],
    markets: ["USA", "CANADA", "INDIA"]
  },
  {
    title: "Chai Kofe Espresso",
    tagline: "Complete Café & Restaurant Business Solutions.",
    image: "images/portfolios/chai-kofe.jpeg",
    icon: Coffee,
    features: [
      "Café Setup",
      "Coffee Equipment",
      "Menu Development",
      "Food Packaging",
      "Kitchen Planning",
      "Franchise Development"
    ],
    markets: ["Global"]
  },
  {
    title: "WellOzyn",
    tagline: "Nutraceutical & Wellness for International Markets.",
    image: "images/portfolios/wellozyn.jpeg",
    icon: Activity,
    features: [
      "Multivitamins",
      "Protein Powder",
      "Private Label",
      "Product Formulation",
      "FDA-Compliant Labeling",
      "Export Supply"
    ],
    markets: ["International"]
  },
  {
    title: "OASIS Rehab & Wellness",
    tagline: "Advanced Healthcare and Rehabilitation Services.",
    image: "images/portfolios/oasis-rehab.jpeg",
    icon: HeartPulse,
    features: [
      "Physical Therapy",
      "Sports Rehabilitation",
      "Neurological Rehab",
      "Pain Management",
      "Corporate Wellness",
      "Wellness Consulting"
    ],
    markets: ["USA", "INDIA"]
  },
  {
    title: "Real Estate Investment",
    tagline: "Helping Investors Build Wealth Through Property.",
    image: "images/portfolios/real-estate.jpeg",
    icon: Building2,
    features: [
      "Residential Properties",
      "Commercial Centers",
      "Hospitality (Hotels/Resorts)",
      "Development Land",
      "Property Management",
      "NRI Investment Assistance"
    ],
    markets: ["INDIA", "USA", "CANADA"]
  }
];

export function GlobalPortfolios() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="py-24 bg-white border-b border-slate-200 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-50/50 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={FADE_UP}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-amber-600" />
            Our Core Divisions
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-amber-600 mb-4">
            Global <span className="text-amber-700">Portfolios & Brands</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light">
            Discover our diverse range of business sectors, engineered to deliver excellence, scale internationally, and empower global entrepreneurship.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={CONTAINER_STAGGER}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {PORTFOLIOS.map((portfolio, idx) => {
            const Icon = portfolio.icon;
            
            return (
              <motion.div
                key={idx}
                variants={FADE_UP}
                className="group relative bg-white border border-slate-100 rounded-2xl p-5 sm:p-8 shadow-sm hover:shadow-[0_0_40px_rgba(245,183,0,0.15)] hover:border-amber-200 transition-all duration-500"
              >
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-2xl" />
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center border border-amber-100 shrink-0 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-amber-600 mb-1 group-hover:text-amber-600 transition-colors">
                      {portfolio.title}
                    </h3>
                    <p className="text-sm font-medium text-amber-600">
                      {portfolio.tagline}
                    </p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {portfolio.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-slate-100 flex items-center flex-wrap gap-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2">Markets:</span>
                  {portfolio.markets.map((market, mIdx) => (
                    <span key={mIdx} className="px-2 py-1 rounded bg-slate-50 text-slate-600 text-xs font-medium border border-slate-200">
                      {market}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
