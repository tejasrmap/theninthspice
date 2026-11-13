import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import FarmShowcase from '../components/FarmShowcase';
import ProductCard from '../components/ProductCard';
import SpiceQuiz from '../components/SpiceQuiz';
import RecipesSection from '../components/RecipesSection';
import FAQSection from '../components/FAQSection';
import { Sparkles, ArrowRight, ShieldCheck, Leaf, Truck } from 'lucide-react';
import { upcomingSpices } from '../data/products';

export default function HomePage({ lang, translations, onAddToCart, onOpenDetails, products }) {
  const t = translations[lang];

  return (
    <div className="w-full flex flex-col bg-[#FAF7F2]">
      {/* 1. HERO SECTION (FREE-SPACED & BREATHABLE) */}
      <Hero
        onAddToCart={onAddToCart}
        products={products}
      />

      {/* 2. VALUE PROPOSITION STRIP */}
      <section className="bg-white/80 backdrop-blur-xs py-7 border-b border-[#EAE1D5] w-full">
        <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <Sparkles className="w-4 h-4 text-[#B93822]" />
            </div>
            <div>
              <div className="font-serif-brand font-semibold text-xs sm:text-sm text-stone-900">Thoughtfully Sourced</div>
              <div className="text-[11px] text-stone-500">Quality whole spices</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <ShieldCheck className="w-4 h-4 text-stone-800" />
            </div>
            <div>
              <div className="font-serif-brand font-semibold text-xs sm:text-sm text-stone-900">Zero Adulteration</div>
              <div className="text-[11px] text-stone-500">No dyes or artificial fillers</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <Leaf className="w-4 h-4 text-emerald-700" />
            </div>
            <div>
              <div className="font-serif-brand font-semibold text-xs sm:text-sm text-stone-900">Single Origin AP</div>
              <div className="text-[11px] text-stone-500">Guntur &amp; Nizamabad Terroir</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-stone-100 flex items-center justify-center text-stone-800 shrink-0">
              <Truck className="w-4 h-4 text-stone-800" />
            </div>
            <div>
              <div className="font-serif-brand font-semibold text-xs sm:text-sm text-stone-900">Pan-India Delivery</div>
              <div className="text-[11px] text-stone-500">Complimentary above ₹599</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SIGNATURE SPICES */}
      <section id="spices" className="py-16 lg:py-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-1.5">
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#B93822]">
              Signature Essentials
            </span>
            <h2 className="font-serif-brand text-xl sm:text-2xl font-semibold text-stone-900">
              {t.ourSpices}
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <p className="text-stone-500 text-xs sm:text-[13px] max-w-md leading-relaxed">
              Carefully processed to preserve natural aroma, deep color, and pure taste. Packed airtight for lasting freshness.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-stone-900 hover:text-[#B93822] transition-colors"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Product Cards Grid with Generous Spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-10">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
              lang={lang}
              translations={translations}
            />
          ))}
        </div>

        {/* Upcoming Spices Strip */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-[#EAE1D5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div className="space-y-1">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
                Expanding The Pantry
              </span>
              <h3 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900">
                Coming Soon to THE NINTH SPICE™
              </h3>
            </div>
            <span className="text-xs text-stone-400 font-medium">
              Single-origin whole spices currently in small-batch development.
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {upcomingSpices.map((s, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5] space-y-1.5">
                <span className="text-[10px] font-mono font-bold text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                  {s.tag}
                </span>
                <div className="font-serif-brand font-semibold text-xs sm:text-sm text-stone-900 pt-1">
                  {s.name}
                </div>
                <div className="text-[11px] text-stone-500 leading-normal">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ANDHRA FARM TERROIR & HARVEST SHOWCASE */}
      <FarmShowcase />

      {/* 5. CULINARY MATCHER QUIZ */}
      <SpiceQuiz onAddToCart={onAddToCart} products={products} />

      {/* 6. KITCHEN NOTES & RECIPES */}
      <RecipesSection onAddToCart={onAddToCart} products={products} />

      {/* 7. FAQS */}
      <FAQSection lang={lang} translations={translations} />
    </div>
  );
}
