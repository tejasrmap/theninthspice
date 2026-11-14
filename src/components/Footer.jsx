import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#2C1E18] text-stone-300 pt-7 pb-6 border-t border-[#3D2C24] text-sm w-full mt-auto">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 pb-6 border-b border-[#3D2C24]">
          
          {/* Brand & Address Column */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block font-cinzel text-xl font-bold text-white tracking-[0.2em]">
              THE NINTH SPICE<span className="text-[#9C3A1A] text-xs">™</span>
            </Link>

            <p className="text-xs text-stone-400 leading-relaxed max-w-md font-normal">
              Operated under <strong>Kundrapu Ventures Private Limited</strong>. Sourcing genuine Andhra farm produce from Guntur and Nizamabad, packaged fresh without chemical additives, synthetic colors, or industrial shortcuts.
            </p>

            <div className="space-y-2.5 text-xs text-stone-400 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#9C3A1A] shrink-0 mt-0.5" />
                <span>Door No: 7-58/1, Paravada, Opposite Canara Bank, Visakhapatnam, Andhra Pradesh – 531021, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+919441413344" className="hover:text-white transition-colors font-mono">+91 9441413344 (Mon–Sat, 9AM–7PM)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="mailto:support@theninthspice.com" className="hover:text-white transition-colors">support@theninthspice.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2 text-xs">
              <a href="https://www.instagram.com/theninthspice/" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors">
                Instagram
              </a>
              <span className="text-stone-600">•</span>
              <a href="https://x.com/theninthspice" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors">
                X (Twitter)
              </a>
              <span className="text-stone-600">•</span>
              <a href="https://facebook.com/theninthspice" target="_blank" rel="noreferrer" className="text-stone-400 hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Explore Pages
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Spices &amp; Products</Link></li>
              <li><Link to="/product/red-chilli-powder" className="hover:text-white transition-colors">Red Chilli Powder (250g)</Link></li>
              <li><Link to="/product/turmeric-powder" className="hover:text-white transition-colors">Turmeric Powder (250g)</Link></li>
              <li><Link to="/our-story" className="hover:text-white transition-colors">Our Andhra Farm Terroir</Link></li>
              <li><Link to="/recipes" className="hover:text-white transition-colors">Kitchen Notes &amp; Recipes</Link></li>
              <li><Link to="/faqs" className="hover:text-white transition-colors">Frequently Asked Questions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Customer Care &amp; Support</Link></li>
            </ul>
          </div>

          {/* Newsletter / Spice Circle Column */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-white text-xs font-mono font-bold uppercase tracking-wider">
              Join The Spice Circle
            </h5>
            <p className="text-xs text-stone-400 leading-relaxed font-normal">
              Receive traditional culinary notes, seasonal farm harvest alerts, and 10% off your first batch.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Welcome to the Spice Circle! Use code WELCOME10 for 10% off.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#1F1511] border border-[#3D2C24] text-xs text-white rounded-xl px-3.5 py-2.5 focus:outline-none focus:border-[#9C3A1A]"
                  />
                  <button
                    type="submit"
                    className="bg-[#9C3A1A] hover:bg-[#B93822] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shrink-0 cursor-pointer"
                  >
                    Join
                  </button>
                </div>
                <div className="text-[10px] text-stone-500">
                  Zero spam. Unsubscribe anytime.
                </div>
              </form>
            )}

            <div className="pt-2 flex items-center gap-2 text-xs text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>FSSAI Certified Standards • Zero Sudan Red</span>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Payment Icons */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-4">
          <div>
            © 2026 THE NINTH SPICE™. All rights reserved. Built for discerning Indian kitchens.
          </div>
          <div className="flex items-center gap-3 text-[11px] font-mono text-stone-500">
            <span>UPI Instant</span>
            <span>•</span>
            <span>RuPay / Visa</span>
            <span>•</span>
            <span>NetBanking</span>
            <span>•</span>
            <span>Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
