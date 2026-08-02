import React from "react";
import { Link } from "wouter";
import { Globe, Phone, Mail, MapPin, ChevronRight, RefreshCw, ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";

interface FooterProps {
  onReplaySplash?: () => void;
  onOpenInquiry?: () => void;
}

export function Footer({ onReplaySplash, onOpenInquiry }: FooterProps) {
  return (
    <footer className="bg-[#03060D] border-t border-white/10 text-slate-400 text-sm relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Brand & Large Logo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block p-3 rounded-2xl bg-slate-900/90 border border-amber-400/80 shadow-[0_0_30px_rgba(245,183,0,0.35)] backdrop-blur-xl">
              <img 
                src="/logo-transparent.png" 
                alt="OneTrade360 Logo" 
                className="h-20 sm:h-24 w-auto object-contain max-w-[260px] drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" 
              />
            </div>
            
            <p className="text-slate-300 text-sm font-light leading-relaxed max-w-sm">
              <strong className="text-white font-medium">OneTrade360™</strong> — The Complete Business Ecosystem for Retail, Hospitality, Healthcare, Manufacturing & Global Trade. One Platform. Global Connections. Endless Opportunities.
            </p>

            <div className="flex items-center gap-3 font-mono text-xs text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3.5 py-2 rounded-xl w-fit">
              <Globe className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>India • USA • Canada Trade Corridors</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide uppercase font-mono text-cyan-400">
              Ecosystem Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { name: "Home Overview", href: "/" },
                { name: "Turnkey Solutions", href: "/solutions" },
                { name: "Industries We Serve", href: "/industries" },
                { name: "Business Service & Consulting", href: "/consulting" },
                { name: "Global Manufacturing Network", href: "/manufacturing" },
                { name: "StoreSKU™ & X-ON™ Tech", href: "/technology" },
                { name: "Global Corridors & Network", href: "/network" },
                { name: "Vision & Mission", href: "/about" },
                { name: "Contact & Consultation", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Platforms */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide uppercase font-mono text-amber-400">
              Key Platforms
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>StoreSKU™ AI Retail Management</li>
              <li>X-ON™ AI Surveillance</li>
              <li>Direct Factory OEM Sourcing</li>
              <li>Café & Restaurant Setup</li>
              <li>C-Store & Gas Station Setup</li>
              <li>Business Acquisition</li>
              <li>Wholesale Marketplace</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Lines */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-serif font-bold text-base tracking-wide uppercase font-mono text-emerald-400">
              Global Support
            </h4>
            
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
                <div className="text-slate-400 uppercase text-[10px]">India Office Line</div>
                <div className="text-white font-bold flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-emerald-400" />
                  +91-7984171515
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
                <div className="text-slate-400 uppercase text-[10px]">USA Headquarters Line</div>
                <div className="text-white font-bold flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  +1-272-267-9294
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/90 border border-white/10 space-y-1">
                <div className="text-slate-400 uppercase text-[10px]">Direct Email</div>
                <div className="text-white font-bold flex items-center gap-2 text-xs truncate">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  onetradeworld360@gmail.com
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-slate-400 font-mono">
            © {new Date().getFullYear()} OneTrade360™. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-mono text-slate-400">
            {onReplaySplash && (
              <button 
                onClick={onReplaySplash} 
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Replay Loader
              </button>
            )}
            <Link href="/about" className="hover:text-amber-400 transition-colors">Vision & Mission</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
