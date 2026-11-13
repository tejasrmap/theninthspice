import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData, recipes } from '../data/products';
import { SpicePouchVisual } from '../components/SpiceVisual';
import { Flame, Sparkles, Star, CheckCircle2, ShieldCheck, MapPin, ChefHat, HeartPulse, Truck, ArrowLeft, Plus } from 'lucide-react';

export default function ProductDetailPage({ onAddToCart, lang, translations }) {
  const { id } = useParams();
  
  // Find product by id (supports handle variations like the-ninth-spice-red-chilli-powder)
  const product = productsData.find(
    p => p.id === id || id?.includes(p.id.replace('-powder', ''))
  ) || productsData[0];

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = product.variants[selectedVariantIndex];
  const isChilli = product.id.includes('chilli');
  const t = translations[lang];

  // Filter recipes using this spice
  const matchingRecipes = recipes.filter(r => 
    r.spicesUsed.some(s => s.toLowerCase().includes(isChilli ? 'chilli' : 'turmeric'))
  );

  return (
    <div className="w-full py-8 sm:py-12">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono font-semibold text-stone-500">
          <Link to="/" className="hover:text-black">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-black">Spices</Link>
          <span>/</span>
          <span className="text-[#C23321]">{product.name}</span>
        </div>

        {/* Top Product Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 items-start">
          
          {/* Left Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-[#E0D3BE] shadow-xl flex flex-col items-center justify-center relative overflow-hidden min-h-[460px]">
              <div 
                className="absolute inset-10 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: isChilli ? '#DC2626' : '#F59E0B' }}
              />
              
              <div className="relative z-10 w-full max-w-sm h-80 sm:h-[420px] flex items-center justify-center">
                <img
                  src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-2xl shadow-md hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Badges on Visual */}
              <div className="absolute top-6 left-6 bg-[#FAF6EF] border border-[#E8DEC9] px-3 py-1 rounded-full text-xs font-bold text-stone-800 flex items-center gap-1.5 shadow-xs">
                {isChilli ? <Flame className="w-3.5 h-3.5 text-[#C23321]" /> : <Sparkles className="w-3.5 h-3.5 text-amber-600" />}
                <span>{product.badge}</span>
              </div>

              <div className="absolute top-6 right-6 font-mono text-xs text-stone-500 bg-white/80 px-2.5 py-1 rounded-full border border-stone-200">
                {product.harvestYear}
              </div>
            </div>

            {/* Quick Terroir & Trust Snippets */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE1D5] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B93822] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Single Origin Terroir</div>
                  <div className="text-stone-500 text-[11px] mt-0.5">{product.origin}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white border border-[#EAE1D5] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-stone-900">Purity Standard</div>
                  <div className="text-stone-500 text-[11px] mt-0.5">0% Dyes • Lab Certified</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Selector & Buying Actions */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Reviews & Title */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-xs text-stone-900">{product.rating}</span>
                <span className="text-xs text-stone-400">({product.reviewsCount} verified reviews)</span>
              </div>

              <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#1C1917]">
                {product.name}
              </h1>

              <p className="text-xs text-[#B93822] font-semibold">
                {product.tagline}
              </p>
            </div>

            {/* Price Display */}
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#F5EDE1] border border-[#EAE1D5] flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#1C1917]">
                ₹{selectedVariant.price}
              </span>
              <span className="text-xs text-stone-500 font-mono">
                for {selectedVariant.size} ({selectedVariant.label})
              </span>
              <span className="ml-auto text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                In Stock • Dispatches 24h
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-stone-700 leading-relaxed">
              {product.shortDesc}
            </p>

            {/* Sensory Gauges */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC9] space-y-3">
              {isChilli ? (
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#C23321]" />
                      <span>{t.heatLevel}</span>
                    </span>
                    <span className="font-mono text-[#C23321] font-bold">7 / 10 (Balanced Fiery)</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#C23321] h-full w-[70%] rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-stone-700 mb-1.5">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>{t.aromaLevel}</span>
                    </span>
                    <span className="font-mono text-amber-700 font-bold">9.5 / 10 (High Curcumin)</span>
                  </div>
                  <div className="w-full bg-stone-200 h-2 rounded-full overflow-hidden flex">
                    <div className="bg-[#D98200] h-full w-[95%] rounded-full"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Pack Size Selector */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider font-mono">
                Select Pack Size:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((v, idx) => {
                  const isSelected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? `border-2 ${isChilli ? 'border-[#C23321] bg-red-50 text-[#C23321]' : 'border-amber-600 bg-amber-50 text-amber-800'} shadow-sm font-bold`
                          : 'border-[#E8DEC9] bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <div className="text-sm font-bold">{v.size}</div>
                      <div className="text-xs font-mono font-semibold text-stone-900 mt-1">₹{v.price}</div>
                      <div className="text-[10px] text-stone-500">{v.label}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add to Cart CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onAddToCart(product, selectedVariant)}
                className={`w-full py-4 rounded-full text-sm font-bold shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2 text-white ${
                  isChilli
                    ? 'bg-[#C23321] hover:bg-[#A32819] shadow-red-900/20'
                    : 'bg-[#D98200] hover:bg-[#BA6F00] shadow-amber-900/20'
                }`}
              >
                <Plus className="w-5 h-5" />
                <span>Add {selectedVariant.size} to Spice Bag (₹{selectedVariant.price})</span>
              </button>
            </div>

            {/* Delivery & Returns Pill */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DEC9] flex items-center justify-between text-xs text-stone-600">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Free shipping across India on orders &gt; ₹599</span>
              </span>
              <span className="font-semibold text-stone-800">Direct from AP</span>
            </div>

          </div>

        </div>

        {/* Nutritional & Chemical Analysis Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E8DEC9] space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23321]">
              Scientific Assay &amp; Nutritional Facts
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
              Laboratory Certified Quality
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 uppercase font-mono tracking-wider">
                Assurance Checks
              </h4>
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FAF6EF] border border-[#E8DEC9]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-stone-700 leading-relaxed font-medium">{feat}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 uppercase font-mono tracking-wider">
                Nutritional Breakdown (Per 5g Serving)
              </h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E8DEC9]">
                  <div className="text-lg font-bold text-[#1C1917]">{product.nutrition.calories}</div>
                  <div className="text-stone-500">Energy Value</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E8DEC9]">
                  <div className="text-lg font-bold text-[#1C1917]">{product.nutrition.carbs}</div>
                  <div className="text-stone-500">Carbohydrates</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E8DEC9]">
                  <div className="text-lg font-bold text-[#1C1917]">{product.nutrition.protein}</div>
                  <div className="text-stone-500">Plant Protein</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF6EF] border border-[#E8DEC9]">
                  <div className="text-lg font-bold text-[#1C1917]">{product.nutrition.fat}</div>
                  <div className="text-stone-500">Essential Fatty Acids</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

