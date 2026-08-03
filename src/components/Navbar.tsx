import React, { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, ChevronRight, Phone, Mail, Globe, ArrowRight, ShieldCheck, CheckCircle2, ChevronDown, Sparkles, Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import logoImg from "@/assets/logo.jpeg";

interface NavbarProps {
  onOpenInquiry: () => void;
  onReplaySplash?: () => void;
}

export function Navbar({ onOpenInquiry, onReplaySplash }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Executive Utility Strip - Light Executive Slate */}
      <div className="bg-white text-gray-700 text-xs py-2.5 px-4 border-b border-gray-200 z-50 relative font-sans hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>India: <strong className="text-gray-950 font-bold">+91-7984171515</strong></span>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-300 pl-6">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>USA: <strong className="text-gray-950 font-bold">+1-272-267-9294</strong></span>
            </div>
            <div className="flex items-center gap-2 border-l border-gray-300 pl-6">
              <Mail className="w-3.5 h-3.5 text-emerald-700" />
              <span className="text-gray-950 font-bold">onetradeworld360@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center gap-4">

            <button 
              onClick={onOpenInquiry}
              className="text-[11px] font-bold text-amber-400 hover:text-amber-300 transition-colors uppercase font-mono cursor-pointer border-l border-gray-300 pl-4 flex items-center gap-1.5"
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Get Free RFP & Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Executive Navbar - White Background */}
      <header 
        className={`sticky top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/98 backdrop-blur-xl border-b border-slate-200 py-3 shadow-md" 
            : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3.5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo Card */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <div className="p-2 sm:p-2.5 rounded-xl bg-white border-2 border-amber-400 shadow-md group-hover:shadow-lg transition-all">
              <img 
                src={logoImg} 
                alt="OneTrade360 Logo" 
                className="h-11 sm:h-14 w-auto object-contain max-w-[200px] sm:max-w-[250px]" 
              />
            </div>
          </Link>
          
          {/* Corporate Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all group overflow-hidden ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-700 hover:text-slate-950"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div 
                      layoutId="navbar-indicator" 
                      className="absolute inset-0 bg-amber-400 rounded-xl z-0 shadow-sm" 
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 bg-slate-100 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0" />
                  )}
                </Link>
              );
            })}
          </nav>
          
          {/* Executive Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              onClick={onOpenInquiry} 
              className="bg-white hover:bg-gray-800 text-gray-900 font-bold h-11 px-6 text-xs uppercase font-sans tracking-wider shadow-md hover:brightness-110 cursor-pointer flex items-center gap-2 rounded-xl"
            >
              <span>Connect With Us</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2.5 text-slate-900 bg-slate-100 border border-slate-200 rounded-xl shadow-sm cursor-pointer" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-600" /> : <Menu className="w-6 h-6 text-slate-900" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-30 bg-white pt-32 px-6 pb-10 flex flex-col justify-between lg:hidden border-b border-slate-200 overflow-y-auto"
          >
            <div className="space-y-2">
              <div className="text-xs font-mono text-amber-700 uppercase tracking-widest mb-4">Corporate Navigation</div>
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium border-b border-slate-100 pb-3 flex items-center justify-between ${
                      isActive ? "text-amber-600 font-bold" : "text-slate-800"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-gray-500" />
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-slate-200 space-y-4">
              <Button 
                onClick={() => { setMobileMenuOpen(false); onOpenInquiry(); }} 
                className="w-full h-12 text-xs font-bold uppercase font-sans bg-gray-950 text-white hover:bg-amber-500 hover:text-black cursor-pointer rounded-xl"
              >
                Schedule Consultation
              </Button>
              <div className="text-center text-xs text-slate-600 font-mono">
                India: +91-7984171515 • USA: +1-272-267-9294
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
