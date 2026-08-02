import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, RefreshCw, MessageSquare, Globe, Building2, Factory, Cpu,
  Briefcase, Compass, Users, Phone, ArrowUpRight, Sparkles, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavbarProps {
  onOpenInquiry: () => void;
  onReplaySplash?: () => void;
}

export function Navbar({ onOpenInquiry, onReplaySplash }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Solutions", href: "/solutions" },
    { name: "Industries", href: "/industries" },
    { name: "Consulting", href: "/consulting" },
    { name: "Manufacturing", href: "/manufacturing" },
    { name: "Technology", href: "/technology" },
    { name: "Network", href: "/network" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-[#060A14]/90 backdrop-blur-2xl border-b border-white/10 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.6)]" 
            : "bg-gradient-to-b from-[#060A14] via-[#060A14]/80 to-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Prominent Large Logo Badge with Transparent Background */}
          <Link href="/" className="flex items-center gap-3.5 z-50 group">
            <motion.div 
              whileHover={{ scale: 1.04 }}
              className="relative p-2.5 rounded-2xl bg-slate-900/90 border-2 border-amber-400/80 shadow-[0_0_30px_rgba(245,183,0,0.4)] backdrop-blur-xl group-hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] transition-all duration-300"
            >
              <img 
                src={`${import.meta.env.BASE_URL}logo-transparent.png`} 
                alt="OneTrade360 Logo" 
                className="h-12 sm:h-14 w-auto object-contain max-w-[200px] drop-shadow-[0_0_12px_rgba(255,255,255,0.7)]" 
              />
            </motion.div>
          </Link>
          
          {/* Main Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-white/10 backdrop-blur-md shadow-inner">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all relative ${
                    isActive
                      ? "text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-400 font-bold shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
          
          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onReplaySplash && (
              <button 
                onClick={onReplaySplash} 
                className="text-xs text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-full hover:bg-white/5" 
                title="Replay Loader"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}

            <Button 
              onClick={onOpenInquiry} 
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal shadow-[0_0_25px_rgba(245,183,0,0.4)] h-11 px-6 text-xs tracking-wide uppercase font-mono"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 p-2.5 text-white bg-slate-900/90 border border-white/10 rounded-2xl shadow-md" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6 text-cyan-400" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#060A14]/98 backdrop-blur-2xl pt-32 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-white/10 overflow-y-auto"
          >
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-4">Navigation Menu</div>
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif font-medium border-b border-white/5 pb-3 flex items-center justify-between ${
                      isActive ? "text-amber-400 font-bold" : "text-slate-200"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4">
              <Button 
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }} 
                className="w-full h-12 text-sm font-bold bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 clip-diagonal"
              >
                Connect With Us Today
              </Button>
              <div className="text-center text-xs font-mono text-slate-400">
                India: +91-7984171515 • USA: +1-272-267-9294
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
