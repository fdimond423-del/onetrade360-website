import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Activity, Globe, Factory, Zap } from "lucide-react";

export function LiveTicker() {
  const tickerItems = [
    { label: "USD / INR Corridor", val: "₹84.15", change: "+0.2%", positive: true },
    { label: "CAD / INR Corridor", val: "₹61.40", change: "+0.1%", positive: true },
    { label: "StoreSKU™ Active Outlets", val: "1,480+ Stores", change: "Synced", positive: true },
    { label: "Verified India Plants", val: "120 Audited", change: "OEM Direct", positive: true },
    { label: "X-ON™ Threat Events Filtered", val: "1.4M / day", change: "99.9% Safe", positive: true },
    { label: "Average Freight Speed", val: "14 Days", change: "-3 Days", positive: true },
    { label: "US • IN • CA Trade Corridor", val: "OPERATIONAL", change: "24/7 ACTIVE", positive: true },
  ];

  return (
    <div className="w-full max-w-full bg-gray-50 border-y border-gray-200 py-2.5 overflow-hidden font-mono text-xs z-30 relative backdrop-blur-md">
      <div className="flex w-full max-w-full overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex items-center gap-8"
        >
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="inline-flex items-center gap-2.5 text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-gray-600 font-medium">{item.label}:</span>
              <span className="font-bold text-slate-900 font-extrabold">{item.val}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-primary/10 text-primary border border-primary/30">
                {item.change}
              </span>
              <span className="text-gray-300 mx-2">|</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
