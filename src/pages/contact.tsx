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
    fetch("https://formsubmit.co/ajax/oneworldtrade360@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,
        _subject: `New OneTrade360 Contact Inquiry from ${formData.name}`
      })
    }).catch(() => {});

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="bg-white min-h-screen text-amber-700 font-sans relative selection:bg-amber-400 selection:text-amber-700 overflow-x-hidden">
      {showSplash && <SplashLoader onComplete={() => setShowSplash(false)} />}
      <InquiryModal isOpen={inquiryOpen} onClose={() => setInquiryOpen(false)} />
      <Navbar onOpenInquiry={() => setInquiryOpen(true)} onReplaySplash={() => setShowSplash(true)} />

      <div className="pt-20 sm:pt-24">
        <LiveTicker />
      </div>

      {/* Hero Header */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 border-b border-gray-200 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-amber-500/10 blur-[160px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 border border-amber-400/30 text-amber-700 text-xs font-mono font-semibold uppercase tracking-wider mb-6">
            <MessageSquare className="w-4 h-4 text-amber-400" />
            Direct Global Support
          </div>

          <h1 className="text-3xl sm:text-6xl font-serif font-extrabold text-amber-700 mb-6 leading-tight break-words">
            Connect With <span className="shimmer-text">OneTrade360™</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
            Our global teams in India, USA, and Canada are standing by to assist with your business setup, OEM sourcing, and technology requirements.
          </p>
        </div>
      </motion.section>

      {/* Contact Info & Form Grid */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 0.6 }}
        className="py-16 sm:py-20 relative"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-start">
            
            {/* Left Contact Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card-cyber rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-amber-700 flex items-center gap-2">
                  <Globe className="w-6 h-6 text-amber-400 shrink-0" />
                  <span>Direct Communication Lines</span>
                </h3>

                <div className="space-y-4">
                  {/* India Line */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-200 hover:border-emerald-400/50 transition-colors">
                    <div className="text-xs font-mono text-emerald-700 uppercase tracking-wider mb-1">India Contact Line</div>
                    <a href="tel:+917984171515" className="text-lg sm:text-xl font-bold text-amber-700 font-serif flex items-center gap-3 hover:text-amber-600">
                      <Phone className="w-5 h-5 text-emerald-700 shrink-0" />
                      <span>+91-7984171515</span>
                    </a>
                  </div>

                  {/* USA Line */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-200 hover:border-amber-400/50 transition-colors">
                    <div className="text-xs font-mono text-amber-700 uppercase tracking-wider mb-1">USA Headquarters Line</div>
                    <a href="tel:+12722679294" className="text-lg sm:text-xl font-bold text-amber-700 font-serif flex items-center gap-3 hover:text-amber-600">
                      <Phone className="w-5 h-5 text-amber-700 shrink-0" />
                      <span>+1-272-267-9294</span>
                    </a>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-200 hover:border-amber-400/50 transition-colors">
                    <div className="text-xs font-mono text-amber-400 uppercase tracking-wider mb-1">Direct Support Email</div>
                    <a href="mailto:oneworldtrade360@gmail.com" className="text-sm sm:text-base font-bold text-amber-700 font-mono flex items-center gap-3 break-all hover:text-amber-600">
                      <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                      <span>oneworldtrade360@gmail.com</span>
                    </a>
                  </div>

                  {/* Corridors */}
                  <div className="p-4 rounded-2xl bg-gray-50/90 border border-gray-200">
                    <div className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-1">Global Trade Corridors</div>
                    <div className="text-xs text-gray-600 font-mono space-y-1">
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
              <div className="glass-card-gold rounded-3xl p-6 sm:p-10 relative overflow-hidden">
                <h3 className="text-2xl font-serif font-bold text-amber-700 mb-2">Send an Inquiry</h3>
                <p className="text-xs text-gray-600 mb-6 font-light">Fill in your requirements below and our global specialists will respond within 2 hours.</p>

                {submitted ? (
                  <div className="py-16 text-center space-y-4">
                    <div className="w-16 h-16 bg-emerald-400/20 text-emerald-700 border border-emerald-400/50 rounded-full flex items-center justify-center mx-auto animate-bounce">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-serif font-bold text-amber-700">Inquiry Received Successfully!</h4>
                    <p className="text-gray-600 text-sm max-w-md mx-auto">
                      Thank you for connecting with OneTrade360™. Your inquiry has been sent to oneworldtrade360@gmail.com and our team will connect shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-gray-600 uppercase mb-1">Full Name *</label>
                        <div className="relative">
                          <User className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-mono text-gray-600 uppercase mb-1">Phone Number *</label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                          <input
                            type="tel"
                            required
                            placeholder="+1 (555) 000-0000"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-400 transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-600 uppercase mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-gray-500 absolute left-3 top-3.5" />
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white border border-gray-200 rounded-xl pl-9 pr-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-600 uppercase mb-1">Service / Division Required</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-slate-900 focus:outline-none focus:border-amber-400 transition-colors font-sans cursor-pointer"
                      >
                        <option value="Restaurant & Café Solutions">Restaurant & Café Solutions (Chai Kofe)</option>
                        <option value="Convenience Store Solutions">Convenience Store & Gas Station Solutions</option>
                        <option value="StoreSKU AI Platform">StoreSKU™ AI Retail Management</option>
                        <option value="Healthcare & Rehab">Oasis Rehab & Healthcare Services</option>
                        <option value="Real Estate Infrastructure">Orion Infrastructure & Real Estate</option>
                        <option value="Nutraceuticals & Wellness">WellOzyn & Pharmaplus Wellness</option>
                        <option value="OEM Factory Sourcing">Global OEM & Factory Direct Sourcing</option>
                        <option value="Business Acquisition">Business Acquisition & M&A</option>
                        <option value="Wholesale Distribution">Wholesale & Bulk Supply</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-600 uppercase mb-1">Inquiry Details</label>
                      <textarea
                        rows={4}
                        placeholder="Tell us about your business goals or sourcing needs..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white border border-gray-200 rounded-xl p-3 text-sm text-slate-900 focus:outline-none focus:border-amber-400 transition-colors font-sans"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold uppercase tracking-wider flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-md"
                    >
                      <span>Submit Inquiry to oneworldtrade360@gmail.com</span>
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      <Footer onReplaySplash={() => setShowSplash(true)} onOpenInquiry={() => setInquiryOpen(true)} />
    </div>
  );
}
