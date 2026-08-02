import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, RefreshCw, MessageSquare, Globe, Building2, Factory, Cpu,
  Briefcase, Compass, Users, Phone, ArrowUpRight, Sparkles, Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/logo-transparent.png";

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
            ? "bg-white/95 backdrop-blur-2xl border-b border-slate-200 py-3 shadow-[0_10px_30px_rgba(15,23,42,0.08)]" 
            : "bg-gradient-to-b from-white via-white/90 to-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Large Logo Badge Container */}
          <Link href="/" className="flex items-center gap-3.5 z-50 group">
            <motion.div 
              whileHover={{ scale: 1.04 }}
              className="relative p-2.5 rounded-2xl bg-white border-2 border-amber-400/90 shadow-[0_4px_25px_rgba(245,183,0,0.3)] group-hover:shadow-[0_6px_35px_rgba(2,132,199,0.35)] transition-all duration-300 flex items-center justify-center"
            >
              <img 
                src={logoImg} 
                alt="OneTrade360 Logo" 
                className="h-12 sm:h-16 w-auto object-contain max-w-[220px]" 
              />
            </motion.div>
          </Link>
          
          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/90 shadow-sm">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold font-sans transition-all relative ${
                    isActive
                      ? "text-white bg-slate-900 font-bold shadow-[0_4px_14px_rgba(15,23,42,0.3)]"
                      : "text-slate-700 hover:text-slate-950 hover:bg-slate-200/60"
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
                className="text-xs text-slate-500 hover:text-cyan-600 transition-colors p-2 rounded-full hover:bg-slate-100 cursor-pointer" 
                title="Replay Loader"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            )}

            <Button 
              onClick={onOpenInquiry} 
              className="bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold hover:brightness-105 clip-diagonal shadow-[0_4px_20px_rgba(245,183,0,0.35)] h-11 px-6 text-xs tracking-wide uppercase font-mono cursor-pointer"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden z-50 p-2.5 text-slate-900 bg-white border border-slate-200 rounded-2xl shadow-sm cursor-pointer active:scale-95" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-500" /> : <Menu className="w-6 h-6 text-cyan-600" />}
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
            className="fixed inset-0 z-40 bg-white/98 backdrop-blur-2xl pt-28 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-slate-200 overflow-y-auto"
          >
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyan-600 uppercase tracking-widest mb-4">Navigation Menu</div>
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-serif font-medium border-b border-slate-100 pb-3 flex items-center justify-between ${
                      isActive ? "text-amber-500 font-bold" : "text-slate-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-cyan-600" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <Button 
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }} 
                className="w-full h-12 text-sm font-bold bg-gradient-to-r from-amber-400 to-cyan-500 text-slate-950 clip-diagonal cursor-pointer"
              >
                Connect With Us Today
              </Button>
              <div className="text-center text-xs font-mono text-slate-500">
                India: +91-7984171515 • USA: +1-272-267-9294
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
