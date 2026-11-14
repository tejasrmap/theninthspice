import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Plus, Star, Heart, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ProductCard({ 
  product, 
  onAddToCart, 
  onOpenDetails, 
  lang, 
  translations, 
  onToggleWishlist, 
  isWishlisted 
}) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = product.variants[selectedVariantIndex];
  const isChilli = product.id === 'red-chilli-powder';
  const originalPrice = Math.round(selectedVariant.price * 1.25);
  const discountPercent = Math.round(((originalPrice - selectedVariant.price) / originalPrice) * 100);

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#EAE1D5] shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative">
      
      <div>
        {/* Top Badges & Wishlist */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#9C3A1A] bg-[#FAF5EC] border border-[#EAE1D5] px-2.5 py-0.5 rounded-full">
              {product.badge}
            </span>
            <span className="text-[10px] font-mono font-bold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
              {discountPercent}% OFF
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleWishlist && onToggleWishlist(product)}
              className={`p-1.5 rounded-full border transition-all cursor-pointer ${
                isWishlisted 
                  ? 'bg-red-50 border-red-200 text-[#9C3A1A]' 
                  : 'bg-stone-50 border-stone-200/80 text-stone-400 hover:text-[#9C3A1A] hover:bg-red-50'
              }`}
              title="Add to Wishlist"
              aria-label="Wishlist toggle"
            >
              <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-[#9C3A1A] text-[#9C3A1A]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Clickable Real Product Image Container -> Links to Individual Product Page */}
        <Link 
          to={`/product/${product.id}`}
          className="py-1 flex items-center justify-center block cursor-pointer"
          title={`View individual page for ${product.name}`}
        >
          <div className="w-48 h-56 sm:w-56 sm:h-64 rounded-xl overflow-hidden bg-stone-900/5 p-2 flex items-center justify-center relative">
            <img
              src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
              alt={product.name}
              className="w-full h-full object-contain rounded-lg group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Spiciness Meter */}
            <div className="absolute bottom-2 left-2 bg-[#2C1E18]/85 backdrop-blur-xs text-white px-2 py-0.5 rounded-md text-[10px] font-mono flex items-center gap-1 shadow-sm">
              <span className="text-stone-300">Heat:</span>
              <div className="flex items-center gap-0.5">
                {[...Array(isChilli ? 4 : 1)].map((_, i) => (
                  <Flame key={i} className="w-3 h-3 fill-red-400 text-red-400" />
                ))}
              </div>
            </div>

            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-xs text-[#2C1E18] text-[10px] font-medium px-2 py-0.5 rounded-full shadow-xs flex items-center gap-1">
              <span>View Product</span>
              <ArrowRight className="w-2.5 h-2.5" />
            </div>
          </div>
        </Link>

        {/* Title, Rating & Description -> Links to Individual Product Page */}
        <div className="space-y-1 mt-2.5">
          <div className="flex items-center gap-1 text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-semibold text-[#2C1E18] ml-1 text-xs">{product.rating}</span>
            <span className="text-stone-400 text-[11px]">({product.reviewsCount} reviews)</span>
          </div>

          <Link 
            to={`/product/${product.id}`}
            className="block font-serif-brand text-base sm:text-lg font-semibold text-[#2C1E18] hover:text-[#9C3A1A] transition-colors leading-snug pt-0.5"
          >
            {product.name}
          </Link>

          <p className="text-[11px] font-semibold text-[#9C3A1A] tracking-wide">
            {product.tagline}
          </p>

          <p className="text-xs text-stone-600 leading-relaxed font-normal pt-0.5 line-clamp-2">
            {product.shortDesc}
          </p>
        </div>

        {/* Pack Size Selector */}
        <div className="mt-3.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-1 font-medium">
            Select Size
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            {product.variants.map((v, idx) => {
              const isSelected = selectedVariantIndex === idx;
              return (
                <button
                  key={v.size}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`py-1.5 px-1 rounded-xl text-xs transition-all text-center border cursor-pointer ${
                    isSelected
                      ? 'border-[#2C1E18] bg-[#2C1E18] text-white font-semibold shadow-2xs'
                      : 'border-stone-200 bg-white text-stone-700 hover:border-stone-400 font-medium'
                  }`}
                >
                  <div className="text-[11px]">{v.size}</div>
                  <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-amber-200' : 'text-stone-500'}`}>
                    ₹{v.price}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Bottom Footer Actions */}
      <div className="pt-3.5 mt-3.5 border-t border-[#F0E9DF] flex items-center justify-between gap-2">
        <div>
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] text-stone-400 line-through font-mono">₹{originalPrice}</span>
            <span className="text-[9px] text-emerald-700 font-bold font-mono">SAVE ₹{originalPrice - selectedVariant.price}</span>
          </div>
          <div className="text-lg sm:text-xl font-bold font-serif-brand text-[#2C1E18]">
            ₹{selectedVariant.price}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link
            to={`/product/${product.id}`}
            className="text-stone-600 hover:text-[#9C3A1A] text-xs font-medium px-2.5 py-2 rounded-full border border-stone-200 hover:border-[#9C3A1A] transition-all"
            title="Go to individual product page"
          >
            Details
          </Link>
          <button
            onClick={() => onAddToCart(product, selectedVariant)}
            className="bg-[#9C3A1A] hover:bg-[#2C1E18] text-white px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase shadow-xs active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
        </div>
      </div>

    </div>
  );
}
