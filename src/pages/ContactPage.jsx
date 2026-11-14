import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <div className="w-full bg-[#FAF5EC] pt-4 pb-6 sm:pt-6 sm:pb-8 space-y-6">
      
      {/* Top Banner */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="bg-[#F5EDE1] rounded-2xl p-5 sm:p-7 border border-[#EAE1D5] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
              <Link to="/" className="text-stone-500 hover:text-[#9C3A1A]">Home</Link>
              <span>/</span>
              <span>Contact Us</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#2C1E18]">
              Customer Care &amp; Support
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Have questions about your order, Andhra farm origins, or restaurant culinary supplies? Reach out to our team in Visakhapatnam.
            </p>
          </div>
        </div>
      </div>

      {/* Main Contact Grid */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Corporate Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-[#E8DEC9] shadow-sm space-y-6">
              
              <div className="space-y-1">
                <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C23321]">
                  Direct Channels
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
                  Speak With Us
                </h3>
              </div>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-[#C23321] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Customer Helpline</div>
                    <a href="tel:+919441413344" className="text-stone-700 font-mono font-semibold hover:text-[#C23321] transition-colors">
                      +91 9441413344
                    </a>
                    <div className="text-[11px] text-stone-400 mt-0.5">Available for Call &amp; WhatsApp Support</div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-amber-800 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Email Support</div>
                    <a href="mailto:support@theninthspice.com" className="text-stone-700 font-semibold hover:text-[#C23321] transition-colors">
                      support@theninthspice.com
                    </a>
                    <div className="text-[11px] text-stone-400 mt-0.5">Response within 24 business hours</div>
                  </div>
                </div>

                {/* Hours */}
                <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900 text-sm">Facility Hours</div>
                    <div className="text-stone-700 font-medium">Monday – Saturday: 9:00 AM – 7:00 PM IST</div>
                    <div className="text-[11px] text-stone-400 mt-0.5">Sunday: Closed for routine machine calibration</div>
                  </div>
                </div>

                {/* Location */}
                <div className="p-4 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-stone-200 flex items-center justify-center text-stone-800 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="leading-relaxed">
                    <div className="font-bold text-stone-900 text-sm">Registered Facility</div>
                    <div className="text-stone-700 font-medium mt-0.5">Kundrapu Ventures Private Limited</div>
                    <div className="text-stone-500">Assessment No: 1715, Door No: 7-58/1, Paravada, Opposite Canara Bank, Visakhapatnam, Andhra Pradesh – 531021, India</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC9] shadow-sm space-y-6">
            <div>
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C23321]">
                Online Inquiries
              </span>
              <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Fill in the form below and our team will get back to you promptly.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-serif-brand font-bold text-emerald-900 text-xl">Thank You for Reaching Out!</h4>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Your inquiry has been received by our Visakhapatnam support team. We will review your message and reply via email or phone within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-2xl px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-800"
                    />
                  </div>
                  <div>
                    <label className="block text-stone-700 font-semibold mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-2xl px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-800"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-2xl px-4 py-3 text-stone-900 focus:outline-none focus:border-stone-800"
                  />
                </div>

                <div>
                  <label className="block text-stone-700 font-semibold mb-1">Your Message or Order Inquiries *</label>
                  <textarea
                    rows={5}
                    required
                    placeholder="How can we assist you with our spices or your delivery?"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-2xl p-4 text-stone-900 focus:outline-none focus:border-stone-800 resize-none leading-relaxed"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C23321] hover:bg-[#A32819] text-white py-3.5 rounded-full text-xs font-semibold shadow-lg shadow-red-900/15 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Your Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>

    </div>
  );
}

