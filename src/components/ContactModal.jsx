import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF6EF] w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#E0D3BE] p-6 sm:p-8 space-y-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-stone-600 hover:text-stone-900 border border-[#E8DEC9] shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C23321] bg-red-100/60 px-2.5 py-0.5 rounded-full">
            Customer Care &amp; Support
          </span>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] mt-2">
            Get in Touch
          </h2>
          <p className="text-xs text-stone-600 mt-1">
            Questions about bulk kitchen orders, custom milling batches, or your delivery? We are here to help.
          </p>
        </div>

        {/* Quick Contact Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <a
            href="tel:+919441413344"
            className="p-3.5 rounded-2xl bg-white border border-[#E8DEC9] flex items-center gap-3 hover:border-stone-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-[#C23321]">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">Customer Support</div>
              <div className="font-bold text-stone-900">+91 9441413344</div>
            </div>
          </a>

          <a
            href="mailto:support@theninthspice.com"
            className="p-3.5 rounded-2xl bg-white border border-[#E8DEC9] flex items-center gap-3 hover:border-stone-400 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-stone-400 font-bold uppercase">Email Enquiries</div>
              <div className="font-bold text-stone-900">support@theninthspice.com</div>
            </div>
          </a>
        </div>

        {/* Physical Address */}
        <div className="p-3.5 rounded-2xl bg-white border border-[#E8DEC9] text-xs flex items-start gap-3">
          <MapPin className="w-4 h-4 text-[#C23321] shrink-0 mt-0.5" />
          <div className="text-stone-700 leading-snug">
            <span className="font-bold text-stone-900">Registered Office:</span> Kundrapu Ventures Private Limited, Assessment No: 1715, Door No: 7-58/1, Paravada, Opposite Canara Bank, Visakhapatnam, Andhra Pradesh – 531021, India.
          </div>
        </div>

        {/* Submission Form */}
        {submitted ? (
          <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-serif-brand font-bold text-emerald-900 text-lg">Message Sent Successfully!</h4>
            <p className="text-xs text-emerald-700">Thank you for reaching out. Our support team will reply within 24 hours.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-stone-600 font-medium mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Varma"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-white border border-[#E8DEC9] rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800"
                />
              </div>
              <div>
                <label className="block text-stone-600 font-medium mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-white border border-[#E8DEC9] rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-stone-600 font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full bg-white border border-[#E8DEC9] rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800"
              />
            </div>

            <div>
              <label className="block text-stone-600 font-medium mb-1">Message or Order Number</label>
              <textarea
                rows={3}
                required
                placeholder="How can we assist you with our products or your order?"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-white border border-[#E8DEC9] rounded-xl px-3.5 py-2.5 text-stone-900 focus:outline-none focus:border-stone-800 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#C23321] hover:bg-[#A32819] text-white py-3 rounded-full text-xs font-semibold shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Message</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

