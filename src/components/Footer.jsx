import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';

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
    <footer className="bg-[#24140F] text-[#E9DDC9] pt-8 pb-6 border-t border-[#382218] text-sm w-full mt-auto">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-6 sm:space-y-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-8 border-b border-[#382218]">
          
          {/* Brand & Corporate Entity Column */}
          <div className="lg:col-span-5 space-y-3.5">
            <Link to="/" className="inline-block font-cinzel text-xl font-bold text-white tracking-[0.22em]">
              THE NINTH SPICE<span className="text-[#C49A45] text-xs">™</span>
            </Link>

            <p className="text-xs text-[#E9DDC9]/75 leading-relaxed max-w-md font-sans-brand">
              An authentic Indian spice enterprise operated by <strong>GT InnoX LLP</strong>. Dedicated to sourcing single-origin farm produce from Guntur and Nizamabad, slow stone-ground without chemical dyes or industrial shortcuts.
            </p>

            <div className="space-y-2 text-xs text-[#E9DDC9]/80 pt-1 font-sans-brand">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C49A45] shrink-0 mt-0.5" />
                <span>Door No: 7-58/1, Paravada, Opposite Canara Bank, Visakhapatnam, Andhra Pradesh – 531021, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C49A45] shrink-0" />
                <a href="tel:+919441413344" className="hover:text-white transition-colors font-mono">+91 9441413344 (Mon–Sat, 9AM–7PM IST)</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C49A45] shrink-0" />
                <a href="mailto:support@theninthspice.com" className="hover:text-white transition-colors">support@theninthspice.com</a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1 text-xs font-mono text-[#E9DDC9]/60">
              <a href="https://www.instagram.com/theninthspice/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Instagram
              </a>
              <span>•</span>
              <a href="https://x.com/theninthspice" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                X (Twitter)
              </a>
              <span>•</span>
              <a href="https://facebook.com/theninthspice" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-2.5">
            <h5 className="text-white text-xs font-mono font-bold uppercase tracking-[0.16em]">
              Explore Spices
            </h5>
            <ul className="space-y-1.5 text-xs text-[#E9DDC9]/75 font-sans-brand">
              <li><Link to="/shop" className="hover:text-white transition-colors">All Pure Spices &amp; Harvests</Link></li>
              <li><Link to="/product/red-chilli-powder" className="hover:text-white transition-colors">Red Chilli Powder (250g Pouch)</Link></li>
              <li><Link to="/product/turmeric-powder" className="hover:text-white transition-colors">Turmeric Powder (250g Pouch)</Link></li>
              <li><Link to="/our-story" className="hover:text-white transition-colors">Andhra Farm Terroir</Link></li>
              <li><Link to="/the-science" className="hover:text-white transition-colors">Cold Stone Milling &amp; Testing</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Customer Care &amp; Support</Link></li>
            </ul>
          </div>

          {/* Newsletter Subscription Column */}
          <div className="lg:col-span-4 space-y-3">
            <h5 className="text-white text-xs font-mono font-bold uppercase tracking-[0.16em]">
              The Spice Circle
            </h5>
            <p className="text-xs text-[#E9DDC9]/75 leading-relaxed font-sans-brand">
              Join our private dispatch list for seasonal farm harvest releases, traditional culinary pairings, and 10% off your first batch.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-950/60 border border-emerald-800 rounded-lg text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Welcome to the Spice Circle! Use code <strong>WELCOME10</strong> at checkout.</span>
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
                    className="flex-1 bg-[#1A0E0A] border border-[#382218] rounded-lg px-3 py-2 text-xs text-white placeholder-[#766B60] focus:outline-none focus:border-[#C49A45]"
                  />
                  <button
                    type="submit"
                    className="bg-[#A6261D] hover:bg-[#851C14] text-white px-4 py-2 rounded-lg text-xs font-sans-brand font-semibold transition-all cursor-pointer shrink-0"
                  >
                    Join
                  </button>
                </div>
                <div className="text-[10px] text-[#766B60] font-sans-brand">
                  Zero spam. Unsubscribe anytime with one click.
                </div>
              </form>
            )}

            <div className="pt-2 text-[11px] text-[#C49A45] flex items-center gap-1.5 font-mono">
              <span>✻</span>
              <span>FSSAI Compliant Standards • Zero Sudan Red</span>
            </div>
          </div>

        </div>

        {/* Bottom Institutional Copyright & Policy Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#766B60] font-sans-brand">
          <div>
            © {new Date().getFullYear()} <strong>The Ninth Spice™</strong>. Developed &amp; Marketed by <strong>GT InnoX LLP</strong>.
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-[#E9DDC9]/60">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-white transition-colors">Shipping &amp; Replacement</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
