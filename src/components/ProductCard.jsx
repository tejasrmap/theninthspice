import React, { useState } from 'react';
import { Flame, Sparkles, Plus, Info, Star } from 'lucide-react';
import { SpiceJarVisual } from './SpiceVisual';

export default function ProductCard({ product, onAddToCart, onOpenDetails, lang, translations }) {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = product.variants[selectedVariantIndex];
  const t = translations[lang];
  const isChilli = product.id === 'red-chilli-powder';

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EAE1D5] shadow-2xs hover:shadow-xs transition-all duration-300 flex flex-col justify-between group">
      
      <div>
        {/* Top Badges */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-stone-600 bg-[#FAF7F2] border border-[#EAE1D5] px-2.5 py-0.5 rounded-full">
            {product.badge}
          </span>

          <button
            onClick={() => onOpenDetails(product)}
            className="text-stone-400 hover:text-stone-900 text-[11px] font-medium flex items-center gap-1 transition-colors"
            title="View testing report"
          >
            <Info className="w-3.5 h-3.5" />
            <span className="underline underline-offset-2">Specs &amp; Origin</span>
          </button>
        </div>

        {/* Real Product Image Container */}
        <div className="py-2 flex items-center justify-center">
          <div className="w-52 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden bg-stone-900/5 p-1 flex items-center justify-center">
            <img
              src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
              alt={product.name}
              className="w-full h-full object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Title, Rating & Description */}
        <div className="space-y-1.5 mt-2">
          <div className="flex items-center gap-1 text-amber-500 text-xs">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
            ))}
            <span className="font-semibold text-stone-900 ml-1 text-xs">{product.rating}</span>
            <span className="text-stone-400 text-[11px]">({product.reviewsCount} reviews)</span>
          </div>

          <h3 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900 group-hover:text-[#B93822] transition-colors">
            {product.name}
          </h3>

          <p className="text-[11px] font-semibold text-[#B93822] tracking-wide">
            {product.tagline}
          </p>

          <p className="text-xs text-stone-600 leading-relaxed font-normal pt-0.5">
            {product.shortDesc}
          </p>
        </div>

        {/* Pack Size Selector */}
        <div className="mt-6">
          <div className="text-[10px] font-mono uppercase tracking-wider text-stone-400 mb-2 font-medium">
            Select Size
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {product.variants.map((v, idx) => {
              const isSelected = selectedVariantIndex === idx;
              return (
                <button
                  key={v.size}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`py-2 px-1.5 rounded-xl text-xs transition-all text-center border ${
                    isSelected
                      ? 'border-[#1C1917] bg-[#1C1917] text-white font-semibold shadow-2xs'
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
      <div className="pt-6 mt-6 border-t border-[#F0E9DF] flex items-center justify-between">
        <div>
          <div className="text-[9px] uppercase font-mono tracking-wider text-stone-400">Price</div>
          <div className="text-xl sm:text-2xl font-bold font-serif-brand text-stone-900">
            ₹{selectedVariant.price}
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product, selectedVariant)}
          className="bg-[#1C1917] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium tracking-wider uppercase shadow-xs active:scale-95 transition-all flex items-center gap-1.5"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Add to Bag</span>
        </button>
      </div>

    </div>
  );
}
