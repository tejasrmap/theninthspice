import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Star, Heart, ArrowRight } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  onOpenDetails, 
  lang, 
  translations, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(1); // Default to 250g
  const selectedVariant = product.variants[selectedVariantIndex];
  const isChilli = product.id === 'red-chilli-powder';
  const originalPrice = Math.round(selectedVariant.price * 1.25);
  const discountPercent = Math.round(((originalPrice - selectedVariant.price) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 border border-[#E9DDC9] shadow-2xs hover:shadow-sm transition-all duration-300 flex flex-col justify-between group relative w-full">
      
      <div>
        {/* Top Badges & Wishlist Action */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#A6261D] bg-[#F8F4EB] border border-[#E9DDC9] px-2.5 py-0.5 rounded-md">
              {product.badge}
            </span>
            <span className="text-[10px] font-mono font-semibold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
              {discountPercent}% OFF
            </span>
          </div>

          <button
            onClick={() => onToggleWishlist && onToggleWishlist(product)}
            className={`p-1.5 rounded-full border transition-all cursor-pointer ${
              isWishlisted 
                ? 'bg-red-50 border-red-200 text-[#A6261D]' 
                : 'bg-[#F8F4EB] border-[#E9DDC9] text-[#766B60] hover:text-[#A6261D] hover:bg-white'
            }`}
            title="Save to Wishlist"
            aria-label="Wishlist toggle"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#A6261D] text-[#A6261D]' : ''}`} />
          </button>
        </div>

        {/* Real Product Image Container -> Direct Link to Individual Page */}
        <Link 
          to={`/product/${product.id}`}
          className="py-1 flex items-center justify-center block cursor-pointer group/img"
          title={`View individual page for ${product.name}`}
        >
          <div className="w-full max-w-[240px] h-52 sm:h-64 rounded-lg overflow-hidden bg-[#F8F4EB] p-2 flex items-center justify-center relative border border-[#E9DDC9]/50">
            <img
              src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
              alt={product.name}
              className="w-full h-full object-contain rounded group-hover/img:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            
            {/* Heat / Curcumin Indicator Tag */}
            <div className="absolute bottom-2 left-2 bg-[#24140F]/90 backdrop-blur-xs text-[#F8F4EB] px-2 py-0.5 rounded text-[10px] font-mono flex items-center gap-1 shadow-sm">
              <span className="text-stone-300">
                {isChilli ? 'Heat: 7/10' : 'Curcumin: >4.5%'}
              </span>
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover/img:opacity-100 transition-opacity bg-white/95 text-[#24140F] text-[10px] font-medium px-2 py-0.5 rounded shadow-xs flex items-center gap-1 font-sans-brand">
              <span>View Spice</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>
        </Link>

        {/* Title, Rating & Description */}
        <div className="space-y-1 mt-2.5">
          <div className="flex items-center gap-1 text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-semibold text-[#24140F] ml-1 text-xs">{product.rating}</span>
            <span className="text-[#766B60] text-[11px] font-mono">({product.reviewsCount} verified reviews)</span>
          </div>

          <Link 
            to={`/product/${product.id}`}
            className="block font-serif-brand text-base sm:text-lg font-semibold text-[#24140F] hover:text-[#A6261D] transition-colors leading-snug pt-0.5"
          >
            {product.name}
          </Link>

          <p className="text-[11px] font-semibold text-[#A6261D] tracking-wide font-sans-brand">
            {product.tagline}
          </p>

          <p className="text-xs text-[#766B60] leading-relaxed font-normal pt-0.5 line-clamp-2 font-sans-brand">
            {product.shortDesc}
          </p>
        </div>

        {/* Weight Selector */}
        <div className="mt-3">
          <div className="text-[10px] font-mono uppercase tracking-wider text-[#766B60] mb-1 font-medium">
            Select Weight
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {product.variants.map((v, idx) => {
              const isSelected = selectedVariantIndex === idx;
              return (
                <button
                  key={v.size}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`py-2 px-1 rounded-lg text-xs transition-all text-center border cursor-pointer min-h-[44px] flex flex-col justify-center items-center ${
                    isSelected
                      ? 'border-[#24140F] bg-[#24140F] text-white font-semibold shadow-2xs'
                      : 'border-[#E9DDC9] bg-white text-[#29221D] hover:border-stone-400 font-medium'
                  }`}
                >
                  <div className="text-[11px] font-mono leading-none">{v.size}</div>
                  <div className={`text-[10px] mt-1 leading-none ${isSelected ? 'text-[#C49A45]' : 'text-[#766B60]'}`}>
                    ₹{v.price}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Pricing & Actions (Optimized for Mobile Screens) */}
      <div className="pt-3 mt-3 border-t border-[#E9DDC9] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
        <div className="flex items-baseline sm:flex-col justify-between sm:justify-start gap-2 sm:gap-0">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-[#766B60] line-through font-mono">₹{originalPrice}</span>
            <span className="text-[9px] text-emerald-800 font-bold font-mono bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              SAVE ₹{originalPrice - selectedVariant.price}
            </span>
          </div>
          <div className="text-xl sm:text-xl font-bold font-serif-brand text-[#24140F]">
            ₹{selectedVariant.price}
          </div>
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 sm:flex-none text-center text-[#24140F] hover:text-[#A6261D] text-xs font-medium py-2 px-3 rounded-full border border-[#E9DDC9] hover:border-[#A6261D] transition-all font-sans-brand min-h-[38px] flex items-center justify-center"
            title="Go to individual product page"
          >
            Details
          </Link>
          <button
            onClick={() => onAddToCart(product, selectedVariant)}
            className="flex-2 sm:flex-none bg-[#A6261D] hover:bg-[#851C14] text-white py-2 px-4 rounded-full text-xs font-sans-brand font-semibold tracking-wider uppercase shadow-xs active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer min-h-[38px]"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

    </div>
  );
}
