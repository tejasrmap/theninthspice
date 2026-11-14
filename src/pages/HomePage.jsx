import React from 'react';
import Hero from '../components/Hero';
import BrandPhilosophy from '../components/BrandPhilosophy';
import ProductCard from '../components/ProductCard';
import FarmShowcase from '../components/FarmShowcase';
import RecipesSection from '../components/RecipesSection';
import QualityTrustSection from '../components/QualityTrustSection';
import FAQSection from '../components/FAQSection';
import PincodeEstimator from '../components/PincodeEstimator';
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
  return (
    <div className="w-full flex flex-col bg-[#F8F4EB]">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <Hero
        onAddToCart={onAddToCart}
        products={products}
      />

      {/* 2. BRAND PHILOSOPHY & SOURCING ETHOS */}
      <BrandPhilosophy />

      {/* 3. FEATURED PRODUCTS (THE SIGNATURE DUO) */}
      <section id="spices" className="py-6 sm:py-10 w-full max-w-[1360px] mx-auto px-4 sm:px-10">
        <div className="text-center mb-5 max-w-xl mx-auto space-y-1">
          <span className="font-mono text-[#A6261D] text-[10px] font-semibold tracking-[0.2em] uppercase flex items-center justify-center gap-1.5">
            <span>✻</span> Pure Single-Origin Harvest <span>✻</span>
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif-brand font-medium text-[#24140F]">
            The Signature Collection
          </h2>
          <div className="heritage-divider text-[#C49A45] w-full max-w-[140px]">✻</div>
          <p className="font-serif-brand italic text-[#766B60] text-xs sm:text-[13px] leading-relaxed">
            Time-honored single-origin spices. Zero added chemicals, 100% natural Andhra farm produce.
          </p>
        </div>

        {/* Product Cards Grid with Editorial Styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
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
        <div className="mt-5 max-w-xl mx-auto">
          <PincodeEstimator />
        </div>

        {/* Upcoming Spices Strip */}
        <div className="mt-6 p-4 sm:p-6 rounded-xl bg-white border border-[#E9DDC9]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3.5 gap-1.5">
            <div className="space-y-0.5">
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#A6261D]">
                Expanding The Pantry
              </span>
              <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-[#24140F]">
                Coming Soon to THE NINTH SPICE™
              </h3>
            </div>
            <span className="text-xs text-[#766B60] font-medium font-sans-brand">
              Single-origin whole spices currently in small-batch development.
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
            {upcomingSpices.map((s, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9] space-y-1">
                <span className="text-[9.5px] font-mono font-bold text-[#766B60] bg-white px-2 py-0.5 rounded border border-[#E9DDC9]">
                  {s.tag}
                </span>
                <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#24140F] pt-0.5">
                  {s.name}
                </div>
                <div className="text-[11px] text-[#766B60] leading-normal font-sans-brand">
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ANDHRA FARM TERROIR & HARVEST SHOWCASE */}
      <FarmShowcase />

      {/* 5. CULINARY PAIRINGS & RECIPES */}
      <RecipesSection onAddToCart={onAddToCart} products={products} />

      {/* 6. QUALITY STANDARDS & INSTITUTIONAL TRUST */}
      <QualityTrustSection />

      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection lang={lang} translations={translations} />

    </div>
  );
}
