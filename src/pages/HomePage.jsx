import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ValuePropsStrip from '../components/ValuePropsStrip';
import FarmShowcase from '../components/FarmShowcase';
import ProductCard from '../components/ProductCard';
import TestimonialsSection from '../components/TestimonialsSection';
import PincodeEstimator from '../components/PincodeEstimator';
import SpiceQuiz from '../components/SpiceQuiz';
import RecipesSection from '../components/RecipesSection';
import FAQSection from '../components/FAQSection';
import { ArrowRight } from 'lucide-react';
import { upcomingSpices } from '../data/products';

export default function HomePage({ 
  lang, 
  translations, 
  onAddToCart, 
  onOpenDetails, 
  products, 
  onToggleWishlist, 
  wishlistIds = [] 
}) {
  const t = translations?.[lang] || {};

  return (
    <div className="w-full flex flex-col bg-[#FAF5EC]">
      
      {/* 1. HERO SECTION (WITH OFFICIAL COVER PHOTO & QUICK BUY DOCK) */}
      <Hero
        onAddToCart={onAddToCart}
        products={products}
      />

      {/* 2. VALUE PROPOSITIONS STRIP */}
      <ValuePropsStrip />

      {/* 3. BESTSELLERS SECTION WITH HERITAGE DIVIDER */}
      <section id="spices" className="py-8 sm:py-10 w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="text-center mb-6 max-w-xl mx-auto space-y-1">
          <span className="font-mono text-[#9C3A1A] text-[10px] font-semibold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <span>🌿</span> Curated Favorites <span>🌿</span>
          </span>
          <h2 className="text-xl sm:text-2xl font-serif-brand font-semibold text-[#2C1E18]">
            Our Bestsellers
          </h2>
          <div className="heritage-divider text-[#9C3A1A] w-full max-w-[150px]">✻</div>
          <p className="font-serif-brand italic text-stone-600 text-xs sm:text-[13px] leading-relaxed">
            Time-honored single-origin spices. Zero added chemicals, 100% natural Andhra farm produce.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {products.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
              lang={lang}
              translations={translations}
              onToggleWishlist={onToggleWishlist}
              isWishlisted={wishlistIds.includes(prod.id)}
            />
          ))}
        </div>

        {/* Pincode Serviceability Estimator */}
        <div className="mt-6 max-w-xl mx-auto">
          <PincodeEstimator />
        </div>

        {/* Upcoming Spices Strip */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE1D5]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
                Expanding The Pantry
              </span>
              <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-[#2C1E18]">
                Coming Soon to THE NINTH SPICE™
              </h3>
            </div>
            <span className="text-xs text-stone-400 font-medium">
              Single-origin whole spices currently in small-batch development.
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {upcomingSpices.map((s, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5] space-y-1">
                <span className="text-[10px] font-mono font-bold text-stone-500 bg-white px-2 py-0.5 rounded-full border border-stone-200">
                  {s.tag}
                </span>
                <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#2C1E18] pt-0.5">
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

      {/* 5. CUSTOMER TESTIMONIALS CAROUSEL */}
      <TestimonialsSection />

      {/* 6. CULINARY MATCHER QUIZ */}
      <SpiceQuiz onAddToCart={onAddToCart} products={products} />

      {/* 7. KITCHEN NOTES & RECIPES */}
      <RecipesSection onAddToCart={onAddToCart} products={products} />

      {/* 8. FAQS */}
      <FAQSection lang={lang} translations={translations} />

    </div>
  );
}
