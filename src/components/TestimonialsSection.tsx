import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, Building2, MapPin, CheckCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const TESTIMONIALS = [
  {
    name: "Rajesh Patel",
    role: "Owner, 8 C-Store & Gas Station Locations",
    location: "Dallas, Texas, USA",
    quote: "OneTrade360 transformed our entire supply chain. By integrating StoreSKU™ AI, shrinkage plummeted by 38% and direct OEM paper & coffee cup sourcing cut our store inventory costs significantly.",
    stat: "38% Shrinkage Cut",
    industry: "Retail & C-Store",
    rating: 5,
  },
  {
    name: "Michael Sharma",
    role: "Franchise Developer & Hospitality Director",
    location: "Toronto, Ontario, Canada",
    quote: "Launching our 3 newest QSR cafes used to take 6 months each. With OneTrade360's turnkey equipment sourcing and factory direct kitchen setups, we opened all 3 in under 60 days!",
    stat: "60 Days Turnkey Launch",
    industry: "Restaurant & QSR",
    rating: 5,
  },
  {
    name: "Amitabh Mehta",
    role: "Managing Director, Global Packaging OEM",
    location: "Ahmedabad, Gujarat, India",
    quote: "As an Indian manufacturer, finding verified commercial buyers in the US & Canada used to require heavy agent commissions. OneTrade360 bridged direct trade corridors with transparent compliance.",
    stat: "$2.4M Direct Exports",
    industry: "Manufacturing & OEM",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const prev = () => setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const next = () => setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  const current = TESTIMONIALS[activeIdx];

  return (
    <section className="py-28 bg-[#070B14] relative border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono uppercase mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Verified Client Success
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-white mb-4">
            Trusted Across <span className="text-primary">Global Corridors</span>
          </h2>
          <p className="text-slate-400 text-base font-light">
            Real stories from business owners, franchisees, and manufacturers thriving with OneTrade360.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card-gold rounded-3xl p-8 sm:p-12 relative overflow-hidden"
            >
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-28 h-28 text-primary" />
              </div>

              <div className="relative z-10">
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-primary mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                  <span className="ml-3 px-2.5 py-0.5 rounded bg-primary/20 text-primary text-xs font-mono font-bold">
                    {current.industry}
                  </span>
                </div>

                <p className="text-xl sm:text-2xl text-slate-100 font-serif italic mb-8 leading-relaxed">
                  "{current.quote}"
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                  <div>
                    <h4 className="text-lg font-bold text-white font-serif">{current.name}</h4>
                    <p className="text-xs text-primary font-mono">{current.role}</p>
                    <p className="text-xs text-slate-400 font-sans flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {current.location}
                    </p>
                  </div>

                  <div className="px-4 py-2.5 rounded-xl bg-slate-900 border border-primary/40 text-center sm:text-right shrink-0">
                    <div className="text-xs text-slate-400 uppercase font-mono">Key Milestone</div>
                    <div className="text-lg font-bold text-emerald-400 font-serif">{current.stat}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`h-2.5 rounded-full transition-all ${
                    activeIdx === idx ? "w-8 bg-primary" : "w-2.5 bg-slate-800 hover:bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={prev}
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-full border-white/10 hover:border-primary/50 text-white hover:bg-white/10"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              <Button
                onClick={next}
                variant="outline"
                size="icon"
                className="w-11 h-11 rounded-full border-white/10 hover:border-primary/50 text-white hover:bg-white/10"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
