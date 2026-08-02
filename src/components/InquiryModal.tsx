import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Building, Mail, Phone, User, Globe } from "lucide-react";
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
    interest: "Retail & Convenience",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-[#0E1626] border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(245,183,0,0.2)] z-10 overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/50 rounded-full flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Inquiry Received!</h3>
                <p className="text-slate-300 max-w-sm text-sm">
                  Thank you for reaching out to OneTrade360™. Our global team will connect with you within 2 hours.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-white">Connect with OneTrade360™</h3>
                    <p className="text-xs text-slate-400">Get custom solutions for setup, trade, or tech</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-slate-900/80 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="email"
                          required
                          placeholder="john@business.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-900/80 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-900/80 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Primary Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-slate-900/80 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    >
                      <option value="Retail & Convenience">Retail & Convenience Store Solutions</option>
                      <option value="Restaurant & Hospitality">Restaurant & Hospitality Setup</option>
                      <option value="StoreSKU AI Platform">StoreSKU™ AI Retail Management</option>
                      <option value="X-ON AI Security">X-ON™ AI Security Surveillance</option>
                      <option value="OEM Factory Sourcing">OEM & Factory Direct Sourcing</option>
                      <option value="Business Acquisition">Business Acquisition & Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Message / Requirements</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your business goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-slate-900/80 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <Button type="submit" className="w-full h-11 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 clip-diagonal group flex items-center justify-center gap-2">
                    Submit Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
