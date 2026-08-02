import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Globe, Mail, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
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
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto font-sans">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#040711]/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0A0F1F] border border-cyan-400/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_60px_rgba(56,189,248,0.25)] z-10 overflow-hidden"
          >
            {/* Background Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-amber-400/20 text-amber-400 border border-amber-400/50 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received!</h3>
                <p className="text-slate-300 max-w-sm text-sm font-light">
                  Thank you for reaching out to OneTrade360™. Our global team will connect with you within 2 hours.
                </p>
                <div className="text-xs font-mono text-cyan-400">
                  India: +91-7984171515 • USA: +1-272-267-9294
                </div>
              </div>
            ) : (
              <div>
                {/* Logo & Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <div className="p-1.5 rounded-xl bg-white/95 border border-amber-400/80">
                    <img src="/logo.jpeg" alt="Logo" className="h-10 w-auto object-contain rounded-lg" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white">Connect with OneTrade360™</h3>
                    <p className="text-xs text-cyan-400 font-mono">One Platform. Global Connections.</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/90 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="john@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Phone</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900/90 border border-white/10 rounded-xl pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Primary Interest Area</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    >
                      <option value="Restaurant & Café Solutions">Restaurant & Café Solutions</option>
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
                    <label className="block text-xs font-mono text-slate-300 uppercase mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Describe your business goal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/90 border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  <Button type="submit" className="w-full h-12 bg-gradient-to-r from-amber-400 via-amber-500 to-cyan-500 text-slate-950 font-bold hover:brightness-110 clip-diagonal flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,183,0,0.3)]">
                    Submit Inquiry
                    <Send className="w-4 h-4" />
                  </Button>

                  <div className="text-center text-[11px] font-mono text-slate-400 pt-1">
                    India: +91-7984171515 • USA: +1-272-267-9294
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
