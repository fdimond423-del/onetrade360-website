import React, { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SplashLoader } from "@/components/SplashLoader";
import { InquiryModal } from "@/components/InquiryModal";
import { LiveTicker } from "@/components/LiveTicker";
import { 
  Phone, Mail, MapPin, Globe, Send, CheckCircle2, User, Building, MessageSquare, Sparkles, ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [showSplash, setShowSplash] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "Restaurant & Café Solutions",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans relative selection:bg-amber-400 selection:text-slate-950 overflow-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <section className="relative py-16 border-b border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-indigo-500/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            Direct Global Support
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-white mb-6 leading-tight">
            Connect With <span className="shimmer-text">OneTrade360™</span>
          </h1>

          <p className="text-lg text-slate-300 font-light leading-relaxed">
            Our global teams in India, USA, and Canada are standing by to assist with your business setup, OEM sourcing, and technology requirements.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card-cyber rounded-3xl p-8 space-y-6">
                <h3 className="text-2xl font-serif font-bold text-white flex items-center gap-2">
                  <Globe className="w-6 h-6 text-amber-400" />
                  Direct Direct Lines
                </h3>

                <div className="space-y-4">
                  {/* India Line */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-emerald-400/50 transition-colors">
                    <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">India Contact Line</div>
                    <div className="text-xl font-bold text-white font-serif flex items-center gap-3">
                      <Phone className="w-5 h-5 text-emerald-400 shrink-0" />
                      +91-7984171515
                    </div>
                  </div>

                  {/* USA Line */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-cyan-400/50 transition-colors">
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">USA Headquarters Line</div>
                    <div className="text-xl font-bold text-white font-serif flex items-center gap-3">
                      <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                      +1-272-267-9294
                    </div>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10 hover:border-amber-400/50 transition-colors">
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Direct Support Email</div>
                    <div className="text-base font-bold text-white font-mono flex items-center gap-3 truncate">
                      <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                      onetradeworld360@gmail.com
                    </div>
                  </div>

                  {/* Corridors */}
                  <div className="p-4 rounded-2xl bg-slate-900/90 border border-white/10">
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-1">Global Trade Corridors</div>
                    <div className="text-xs text-slate-300 font-mono space-y-1">
                      <div>🇺🇸 United States (New York • Texas • California)</div>
                      <div>🇮🇳 India (Gujarat • Mumbai • Delhi)</div>
                      <div>🇨🇦 Canada (Ontario • Vancouver • Alberta)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="glass-card-gold rounded-3xl p-8 sm:p-10 relative overflow-hidden">
                <h3 className="text-2xl font-serif font-bold text-white mb-2">Send an Inquiry</h3>
                <p className="text-xs text-slate-300 mb-6 font-light">Fill in your requirements below and our global specialists will respond within 2 hours.</p>

                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-400/20 text-emerald-400 border border-emerald-400/50 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-white">Inquiry Received Successfully!</h4>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you for connecting with OneTrade360™. Your dedicated account manager will call or email you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Email Address</label>
                        <input
                          type="email"
                          required
                          placeholder="john@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Phone Number</label>
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Primary Interest Area</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      >
                        <option value="Restaurant & Café Solutions">Restaurant & Café Turnkey Setup</option>
                        <option value="Convenience Store Solutions">Convenience Store & Gas Station Solutions</option>
                        <option value="StoreSKU AI Platform">StoreSKU™ AI Retail Management</option>
                        <option value="X-ON AI Security">X-ON™ AI Security Surveillance</option>
                        <option value="OEM Factory Sourcing">Global OEM & Factory Direct Sourcing</option>
                        <option value="Business Acquisition">Business Acquisition & Consulting</option>
                        <option value="Hospitality Solutions">Hospitality & Hotel Solutions</option>
                        <option value="Wholesale Distribution">Wholesale & Bulk Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Project Details / Requirements</label>
                      <textarea
                        rows={4}
                        placeholder="Describe your business goals, preferred location, or sourcing requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <Button type="submit" className="w-full h-14 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold text-base clip-diagonal shadow-[0_0_25px_rgba(245,183,0,0.35)]">
                      Submit Inquiry Now
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />
    </div>
  );
}
