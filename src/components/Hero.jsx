import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingBag } from 'lucide-react';

export default function Hero({ onAddToCart, products }) {
  const chilli = products?.find(p => p.id === 'red-chilli-powder');
  const turmeric = products?.find(p => p.id === 'turmeric-powder');

  return (
    <section className="relative overflow-hidden pt-4 pb-6 lg:pt-8 lg:pb-10 bg-[#F8F4EB] border-b border-[#E9DDC9] w-full">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 relative z-10 space-y-5 lg:space-y-7">
        
        {/* Editorial Brand Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-[#E9DDC9] text-[10px] font-mono tracking-[0.18em] uppercase text-[#766B60] shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A6261D]"></span>
            <span>Single-Origin Andhra Harvest • 2026 Batch</span>
          </div>

          <h1 className="font-cinzel text-2xl sm:text-4xl lg:text-[44px] font-bold leading-[1.2] text-[#24140F] tracking-[0.08em] uppercase">
            THE ART OF <span className="font-serif-brand italic font-normal text-[#A6261D] lowercase text-3xl sm:text-5xl lg:text-[50px] tracking-normal block sm:inline">pure spices.</span>
          </h1>

          <p className="text-xs sm:text-sm text-[#766B60] leading-relaxed font-sans-brand max-w-lg mx-auto px-2">
            Rooted in tradition. Carefully sourced. Crafted to bring authentic Indian flavours to every kitchen.
          </p>

          <div className="pt-1.5 flex flex-wrap items-center justify-center gap-2.5 text-xs">
            <a
              href="#spices"
              className="inline-flex items-center gap-2 bg-[#24140F] hover:bg-[#A6261D] text-[#F8F4EB] px-5 py-2.5 rounded-full shadow-xs text-xs tracking-[0.14em] uppercase font-sans-brand font-medium transition-all active:scale-95 cursor-pointer min-h-[40px]"
            >
              <span>Shop Our Spices</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#philosophy"
              className="inline-flex items-center gap-1.5 text-xs text-[#766B60] hover:text-[#24140F] px-3.5 py-2 rounded-full font-medium transition-colors cursor-pointer font-sans-brand min-h-[40px]"
            >
              <span>Our Philosophy</span>
              <span className="text-[#C49A45]">✻</span>
            </a>
          </div>
        </div>

        {/* Master Centerpiece Packaging Showcase */}
        <div className="relative max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden border border-[#E9DDC9] shadow-md group bg-[#24140F]">
          <img
            src="/cover-photo.jpg"
            alt="The Ninth Spice - The Art of Pure Spices"
            className="w-full h-auto object-cover transform group-hover:scale-[1.008] transition-transform duration-700 ease-out"
            loading="eager"
          />

          {/* Quick Buy & Individual Page Discovery Dock (Uncrammed on Mobile) */}
          <div className="sm:absolute sm:bottom-3 sm:left-3 sm:right-3 lg:bottom-4 lg:left-4 lg:right-4 flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 bg-[#24140F] sm:bg-[#24140F]/85 sm:backdrop-blur-md border-t sm:border border-[#E9DDC9]/30 text-white shadow-xl">
            <div className="flex items-center gap-2 text-xs text-center sm:text-left">
              <span className="w-2 h-2 rounded-full bg-[#C49A45] shrink-0"></span>
              <div>
                <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#F8F4EB]">
                  The Signature 250g Standup Pouch Duo
                </div>
                <div className="text-[10px] text-stone-300 font-sans-brand">
                  Guntur Red Chilli (250g) &amp; Nizamabad Turmeric (250g)
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              <Link
                to="/product/red-chilli-powder"
                className="flex-1 sm:flex-none text-center bg-white/10 hover:bg-white/20 text-[#F8F4EB] border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-sans-brand font-medium transition-all"
                title="View Red Chilli Powder dedicated page"
              >
                Chilli Page →
              </Link>
              <Link
                to="/product/turmeric-powder"
                className="flex-1 sm:flex-none text-center bg-white/10 hover:bg-white/20 text-[#F8F4EB] border border-white/20 px-3 py-1.5 rounded-full text-[11px] font-sans-brand font-medium transition-all"
                title="View Turmeric Powder dedicated page"
              >
                Turmeric Page →
              </Link>
              <button
                onClick={() => {
                  if (chilli) onAddToCart(chilli, chilli.variants[1]);
                  if (turmeric) onAddToCart(turmeric, turmeric.variants[1]);
                }}
                className="w-full sm:w-auto bg-[#A6261D] hover:bg-[#851C14] text-white px-4 py-1.5 rounded-full text-[11px] font-sans-brand font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <ShoppingBag className="w-3 h-3" />
                <span>Add Duo (₹458)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Quality Pillars Strip — Mobile Friendly */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 text-center">
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/80 border border-[#E9DDC9] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#24140F]">100% Pure Produce</div>
            <div className="text-[10px] text-[#766B60] mt-0.5 font-sans-brand">Zero added color or dyes</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/80 border border-[#E9DDC9] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#24140F]">Slow Stone-Ground</div>
            <div className="text-[10px] text-[#766B60] mt-0.5 font-sans-brand">Aromatic oils intact</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/80 border border-[#E9DDC9] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#24140F]">Single-Origin AP</div>
            <div className="text-[10px] text-[#766B60] mt-0.5 font-sans-brand">Guntur &amp; Nizamabad</div>
          </div>
          <div className="p-2.5 sm:p-3 rounded-lg bg-white/80 border border-[#E9DDC9] shadow-2xs">
            <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#24140F]">Direct Dispatch</div>
            <div className="text-[10px] text-[#766B60] mt-0.5 font-sans-brand">Multi-barrier pouches</div>
          </div>
        </div>

      </div>
    </section>
  );
}
