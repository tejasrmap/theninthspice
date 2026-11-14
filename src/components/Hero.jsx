import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShoppingBag } from 'lucide-react';

export default function Hero({ onAddToCart, products }) {
  const chilli = products?.find(p => p.id === 'red-chilli-powder');
  const turmeric = products?.find(p => p.id === 'turmeric-powder');

  return (
    <section className="relative overflow-hidden pt-4 pb-6 lg:pt-6 lg:pb-8 bg-[#FAF5EC] border-b border-[#EAE1D5] w-full">
      {/* Ambient warm spice glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-red-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 space-y-5 relative z-10">
        
        {/* Editorial Brand Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-white border border-[#EAE1D5] text-[10px] font-mono tracking-wider uppercase text-stone-600 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#9C3A1A]"></span>
            <span>Harvest 2026 • Guntur &amp; Nizamabad Single Origin</span>
          </div>

          <h1 className="font-serif-brand text-2xl sm:text-3xl lg:text-[34px] font-medium leading-[1.22] text-[#2C1E18] tracking-tight">
            Flavour beyond <span className="italic font-normal text-[#9C3A1A]">ordinary.</span>
          </h1>

          <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal max-w-lg mx-auto">
            Pure Spices from India's Heartland. 100% natural, no preservatives, and no added color — slow stone-ground and packed fresh for genuine aroma and radiant kitchen color.
          </p>

          <div className="pt-1 flex items-center justify-center gap-2.5 text-xs">
            <a
              href="#spices"
              className="inline-flex items-center gap-1.5 bg-[#2C1E18] hover:bg-[#9C3A1A] text-white px-4 py-2 rounded-full shadow-xs text-xs tracking-wider uppercase font-medium transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Spices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#farms"
              className="inline-flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#2C1E18] px-3 py-2 rounded-full font-medium transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#9C3A1A]" />
              <span>See Farm Origins</span>
            </a>
          </div>
        </div>

        {/* Grand Centerpiece Cover Photo Frame */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-[#EAE1D5] shadow-lg group bg-stone-950">
          <img
            src="/cover-photo.jpg"
            alt="THE NINTH SPICE™ - Pure Spices from India's Heartland"
            className="w-full h-auto object-cover transform group-hover:scale-[1.008] transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Floating Quick Action Pill Bar on the Cover Photo */}
          <div className="sm:absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 p-3 sm:p-3.5 rounded-xl bg-black/65 backdrop-blur-md border border-white/15 text-white shadow-lg">
            <div className="flex items-center gap-2 text-xs text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0"></span>
              <div>
                <div className="font-serif-brand font-semibold text-xs sm:text-sm text-white">The Signature 250g Pouch Duo</div>
                <div className="text-[10px] text-stone-300">Guntur Red Chilli (250g) &amp; Nizamabad Turmeric (250g)</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <Link
                to="/product/red-chilli-powder"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all"
                title="View individual product page"
              >
                Chilli Page →
              </Link>
              <Link
                to="/product/turmeric-powder"
                className="bg-white/15 hover:bg-white/25 text-white border border-white/20 px-2.5 py-1 rounded-full text-[11px] font-medium transition-all"
                title="View individual product page"
              >
                Turmeric Page →
              </Link>
              <button
                onClick={() => {
                  if (chilli) onAddToCart(chilli, chilli.variants[1]);
                  if (turmeric) onAddToCart(turmeric, turmeric.variants[1]);
                }}
                className="bg-[#9C3A1A] hover:bg-[#852E12] text-white px-3.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Add Duo (₹458)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust & Guarantee Metrics Row (Matching Cover Photo Badges) */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
          <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#2C1E18]">100% Natural</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Whole spice goodness</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#2C1E18]">No Preservatives</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Zero chemicals &amp; fillers</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#2C1E18]">No Added Color</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Zero Sudan red dyes</div>
          </div>
          <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#2C1E18]">Andhra Terroir</div>
            <div className="text-[10px] text-stone-500 mt-0.5">Guntur &amp; Nizamabad</div>
          </div>
        </div>

      </div>
    </section>
  );
}
