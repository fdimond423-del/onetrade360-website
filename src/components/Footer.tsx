import React from "react";
import { Link } from "wouter";
import { Globe, Phone, Mail, MapPin, ChevronRight, RefreshCw, ArrowUpRight, ShieldCheck, Sparkles, Award, CheckCircle2 } from "lucide-react";
import logoImg from "@/assets/logo.jpeg";

interface FooterProps {
  onReplaySplash?: () => void;
  onOpenInquiry?: () => void;
}

export function Footer({ onReplaySplash, onOpenInquiry }: FooterProps) {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-600 text-sm relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 pt-16 pb-12 relative z-10">
        
        {/* Top Grid */}
        <div className="grid lg:grid-cols-12 gap-10 pb-12 border-b border-gray-200">
          
          {/* Column 1: Brand & Large Logo */}
          <div className="lg:col-span-4 space-y-6">
            <div className="inline-block p-3 rounded-2xl bg-white border-2 border-amber-400 shadow-md">
              <img 
                src={logoImg} 
                alt="OneTrade360 Logo" 
                className="h-20 sm:h-24 w-auto object-contain max-w-[260px]" 
              />
            </div>
            
            <p className="text-gray-600 text-sm font-light leading-relaxed max-w-sm">
              <strong className="text-slate-950 font-medium">OneTrade360™</strong> — The Complete Business Ecosystem for Retail, Hospitality, Healthcare, Manufacturing & Global Trade. One Platform. Global Connections. Endless Opportunities.
            </p>

            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              {["CONNECT", "TRADE", "GROW", "COLLABORATE", "SUCCEED"].map((p, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-amber-400 font-bold">
                  {p}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-gray-700 bg-gray-50 border border-gray-200 px-3.5 py-2 rounded-xl w-fit">
              <Globe className="w-4 h-4 text-amber-400 animate-spin-slow" />
              <span>India 🇮🇳 • USA 🇺🇸 • Canada 🇨🇦 Corridors</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase font-mono text-amber-400">
              Ecosystem Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-mono">
              {[
                { name: "Home Overview", href: "/" },
                { name: "Turnkey Solutions", href: "/solutions" },
                { name: "Industries We Serve", href: "/industries" },
                { name: "Business Service & Consulting", href: "/consulting" },
                { name: "Global OEM Manufacturing Network", href: "/manufacturing" },
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
                    <ChevronRight className="w-3 h-3 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Key Platforms */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase font-mono text-amber-700">
              Key Platforms
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> StoreSKU™ AI POS</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> X-ON™ AI Surveillance</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> Direct Factory OEM</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> Café & Restaurant Setup</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> C-Store & Gas Station Setup</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> Business M&A Buy/Sell</li>
              <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3 h-3 text-emerald-700 shrink-0" /> Wholesale Marketplace</li>
            </ul>
          </div>

          {/* Column 4: Direct Contact Lines */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-slate-900 font-bold text-sm tracking-wide uppercase font-mono text-emerald-700">
              Global Support Lines
            </h4>
            
            <div className="space-y-3 text-xs font-mono">
              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-gray-500 uppercase text-[10px]">India Office Line</div>
                <div className="text-slate-900 font-bold flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-amber-400" />
                  +91-7984171515
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-gray-500 uppercase text-[10px]">USA Headquarters Line</div>
                <div className="text-slate-900 font-bold flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-amber-700" />
                  +1-272-267-9294
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-gray-500 uppercase text-[10px]">Direct Email</div>
                <div className="text-slate-900 font-bold flex items-center gap-2 text-xs truncate">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  onetradeworld360@gmail.com
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="text-gray-500 font-mono">
            © {new Date().getFullYear()} OneTrade360™ GLOBAL NETWORK. All rights reserved.
          </div>

          <div className="flex items-center gap-6 font-mono text-gray-500">
            {onReplaySplash && (
              <button 
                onClick={onReplaySplash} 
                className="hover:text-amber-400 transition-colors flex items-center gap-1.5 cursor-pointer"
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
