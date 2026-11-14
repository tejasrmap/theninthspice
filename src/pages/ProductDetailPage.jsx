import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { productsData, recipes } from '../data/products';
import PincodeEstimator from '../components/PincodeEstimator';
import { 
  Flame, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Truck, 
  ArrowLeft, 
  Plus, 
  Minus,
  Heart, 
  Share2, 
  Clock, 
  ChefHat,
  PackageCheck
} from 'lucide-react';

export default function ProductDetailPage({ onAddToCart, lang, translations, onToggleWishlist, wishlistIds = [] }) {
  const { id } = useParams();
  
  // Find product by id
  const product = productsData.find(
    p => p.id === id || id?.includes(p.id.replace('-powder', ''))
  ) || productsData[0];

  const otherProduct = productsData.find(p => p.id !== product.id);

  const [selectedVariantIndex, setSelectedVariantIndex] = useState(1); // Default to 250g
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('overview'); // overview, lab, recipes
  const [copiedLink, setCopiedLink] = useState(false);

  const selectedVariant = product.variants[selectedVariantIndex];
  const isChilli = product.id.includes('chilli');
  const isWishlisted = wishlistIds.includes(product.id);

  const originalPrice = Math.round(selectedVariant.price * 1.25);
  const discountPercent = Math.round(((originalPrice - selectedVariant.price) / originalPrice) * 100);

  // Filter recipes using this spice
  const matchingRecipes = recipes.filter(r => 
    r.spicesUsed.some(s => s.toLowerCase().includes(isChilli ? 'chilli' : 'turmeric'))
  );

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleAddMultiple = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product, selectedVariant);
    }
  };

  return (
    <div className="w-full bg-[#FAF5EC] py-6 sm:py-10">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 space-y-8">
        
        {/* Top Navigation & Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-[#EAE1D5] pb-4">
          <div className="flex items-center gap-2 font-mono font-medium text-stone-500">
            <Link to="/" className="hover:text-[#9C3A1A] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#9C3A1A] transition-colors">Shop Spices</Link>
            <span>/</span>
            <span className="text-[#9C3A1A] font-semibold">{product.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 text-stone-500 hover:text-[#2C1E18] text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Spice'}</span>
          </button>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Real Packaging Photo with Purity Badges */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE1D5] shadow-xs flex flex-col items-center justify-center relative overflow-hidden group">
              
              {/* Soft warm glow behind pouch */}
              <div 
                className="absolute inset-10 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: isChilli ? '#C23321' : '#D98200' }}
              />

              {/* Badges on Visual */}
              <div className="w-full flex items-center justify-between relative z-10 mb-4">
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#9C3A1A] bg-[#FAF5EC] border border-[#EAE1D5] px-3 py-1 rounded-full">
                  {product.badge}
                </span>

                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(product)}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    isWishlisted 
                      ? 'bg-red-50 border-red-200 text-[#9C3A1A]' 
                      : 'bg-stone-50 border-stone-200 text-stone-400 hover:text-[#9C3A1A]'
                  }`}
                  title="Save to Wishlist"
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#9C3A1A] text-[#9C3A1A]' : ''}`} />
                </button>
              </div>

              {/* Real High-Resolution Pouch Image */}
              <div className="relative z-10 w-full max-w-xs sm:max-w-sm h-72 sm:h-96 flex items-center justify-center">
                <img
                  src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
                  alt={product.name}
                  className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
              </div>

              {/* Bottom Terroir Stamp */}
              <div className="w-full mt-4 pt-3 border-t border-[#F0E9DF] flex items-center justify-between text-[11px] font-mono text-stone-500 relative z-10">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#9C3A1A]" />
                  <span>{product.origin}</span>
                </span>
                <span className="bg-[#FAF5EC] px-2 py-0.5 rounded text-stone-700 font-semibold border border-[#EAE1D5]">
                  {product.harvestYear}
                </span>
              </div>
            </div>

            {/* Quick Guarantees 3-Pill Strip */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 rounded-2xl bg-white border border-[#EAE1D5] space-y-0.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700 mx-auto" />
                <div className="font-serif-brand font-semibold text-[11px] text-[#2C1E18]">Zero Chemical Dyes</div>
                <div className="text-[10px] text-stone-500 font-mono">0% Sudan / Chromate</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#EAE1D5] space-y-0.5">
                <Sparkles className="w-4 h-4 text-[#9C3A1A] mx-auto" />
                <div className="font-serif-brand font-semibold text-[11px] text-[#2C1E18]">Slow Stone-Ground</div>
                <div className="text-[10px] text-stone-500 font-mono">Volatile Oils Locked</div>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#EAE1D5] space-y-0.5">
                <Truck className="w-4 h-4 text-stone-800 mx-auto" />
                <div className="font-serif-brand font-semibold text-[11px] text-[#2C1E18]">Express Dispatch</div>
                <div className="text-[10px] text-stone-500 font-mono">Free &gt; ₹599</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Size Selector & Purchase Action */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Title & Star Rating */}
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-xs text-[#2C1E18]">{product.rating}</span>
                <span className="text-xs text-stone-500 font-mono">({product.reviewsCount} verified kitchen reviews)</span>
              </div>

              <h1 className="font-serif-brand text-2xl sm:text-3xl font-semibold text-[#2C1E18]">
                {product.name}
              </h1>

              <p className="text-xs font-semibold text-[#9C3A1A] tracking-wide">
                {product.tagline}
              </p>
            </div>

            {/* Dynamic Price Banner */}
            <div className="p-4 rounded-2xl bg-[#F5EDE1] border border-[#EAE1D5] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#2C1E18]">
                    ₹{selectedVariant.price * quantity}
                  </span>
                  <span className="text-xs text-stone-400 line-through font-mono">
                    ₹{originalPrice * quantity}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full font-mono">
                    {discountPercent}% OFF
                  </span>
                </div>
                <div className="text-[11px] text-stone-600 font-mono mt-0.5">
                  Pack Size: {selectedVariant.size} ({selectedVariant.label})
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full inline-block">
                  ● Fresh 2026 Batch In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
              {product.shortDesc}
            </p>

            {/* Sensory Gauges (Heat / Curcumin) */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#EAE1D5] space-y-2">
              {isChilli ? (
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#9C3A1A]" />
                      <span className="font-serif-brand">Heat &amp; Pungency Level</span>
                    </span>
                    <span className="font-mono text-[#9C3A1A] font-bold">7 / 10 (Balanced Fiery)</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex border border-stone-200">
                    <div className="bg-[#9C3A1A] h-full w-[70%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                    <span>Mild Kashmiri</span>
                    <span className="font-bold text-[#9C3A1A]">Guntur S4 (Our Blend)</span>
                    <span>Bhut Jolokia</span>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-stone-700 mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                      <span className="font-serif-brand">Natural Curcumin Percentage</span>
                    </span>
                    <span className="font-mono text-amber-800 font-bold">&gt; 4.5% High Curcumin</span>
                  </div>
                  <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex border border-stone-200">
                    <div className="bg-amber-600 h-full w-[95%] rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-stone-400 font-mono mt-1">
                    <span>Market Standard (1.5%)</span>
                    <span className="font-bold text-amber-700">Nizamabad High Curcumin (4.8%)</span>
                  </div>
                </div>
              )}
            </div>

            {/* Pack Size Selector */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-stone-500">
                Choose Pack Size:
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {product.variants.map((v, idx) => {
                  const isSelected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSelected
                          ? 'border-[#2C1E18] bg-[#2C1E18] text-white shadow-xs'
                          : 'border-[#EAE1D5] bg-white text-stone-700 hover:border-stone-400'
                      }`}
                    >
                      <div className="text-xs font-semibold">{v.size}</div>
                      <div className={`text-xs font-mono font-bold mt-0.5 ${isSelected ? 'text-amber-200' : 'text-[#2C1E18]'}`}>
                        ₹{v.price}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-stone-300' : 'text-stone-400'}`}>
                        {v.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Add to Bag CTA */}
            <div className="space-y-3 pt-1">
              <div className="flex items-center gap-3">
                {/* Quantity Pill */}
                <div className="flex items-center border border-[#EAE1D5] rounded-full bg-white px-3 py-2">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 text-stone-500 hover:text-black cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-mono font-bold text-xs px-3 text-[#2C1E18]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 text-stone-500 hover:text-black cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Main CTA */}
                <button
                  onClick={handleAddMultiple}
                  className="flex-1 bg-[#9C3A1A] hover:bg-[#2C1E18] text-white py-3 px-6 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add {quantity} to Bag • ₹{selectedVariant.price * quantity}</span>
                </button>
              </div>

              {/* Delivery Estimator On Product Page */}
              <div className="pt-2">
                <PincodeEstimator />
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Terroir, Laboratory Certificate & Kitchen Recipes */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE1D5] shadow-xs space-y-6">
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-[#EAE1D5] pb-3 text-xs overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#2C1E18] text-white font-semibold'
                  : 'text-stone-600 hover:text-black hover:bg-stone-100'
              }`}
            >
              Terroir &amp; Features
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`px-4 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-[#2C1E18] text-white font-semibold'
                  : 'text-stone-600 hover:text-black hover:bg-stone-100'
              }`}
            >
              Lab Purity &amp; Nutrition
            </button>
            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-4 py-2 rounded-xl font-medium transition-all cursor-pointer ${
                activeTab === 'recipes'
                  ? 'bg-[#2C1E18] text-white font-semibold'
                  : 'text-stone-600 hover:text-black hover:bg-stone-100'
              }`}
            >
              Recipes Using This ({matchingRecipes.length})
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-serif-brand text-base font-semibold text-[#2C1E18]">
                  Single-Origin Authenticity
                </h4>
                <p className="text-stone-600 leading-relaxed font-normal">
                  Harvested from generational smallholder farm belts in {product.origin}. Clean sun-drying without industrial diesel hot-air burners guarantees the delicate natural essential oils and aromas remain unblemished.
                </p>
                <div className="p-3.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5] space-y-1">
                  <div className="font-semibold text-[#9C3A1A] font-serif-brand">Tasting &amp; Aroma Notes</div>
                  <div className="text-stone-600 leading-relaxed">{product.tastingNotes}</div>
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="font-serif-brand text-base font-semibold text-[#2C1E18]">
                  Key Quality Assurances
                </h4>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="text-stone-700 leading-relaxed font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: LAB ASSAY & NUTRITION */}
          {activeTab === 'lab' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-3">
                <h4 className="font-serif-brand text-base font-semibold text-[#2C1E18]">
                  Laboratory Chemical Testing Report
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <span className="text-stone-600">Sudan Dyes (I, II, III, IV):</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      0.00% (Not Detected)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <span className="text-stone-600">Lead Chromate Adulteration:</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Zero / Negative
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <span className="text-stone-600">Aflatoxin B1 + B2:</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Passed (Safe Codex Limit)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <span className="text-stone-600">FSSAI Compliance Verification:</span>
                    <span className="font-mono font-bold text-stone-800">
                      Verified Batch #{product.harvestYear.replace('2026 Batch #', '')}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-serif-brand text-base font-semibold text-[#2C1E18]">
                  Nutritional Values (Per 5g Serving)
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <div className="text-base font-bold font-serif-brand text-[#2C1E18]">{product.nutrition.calories}</div>
                    <div className="text-stone-500 text-[11px]">Energy Value</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <div className="text-base font-bold font-serif-brand text-[#2C1E18]">{product.nutrition.carbs}</div>
                    <div className="text-stone-500 text-[11px]">Carbohydrates</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <div className="text-base font-bold font-serif-brand text-[#2C1E18]">{product.nutrition.protein}</div>
                    <div className="text-stone-500 text-[11px]">Plant Protein</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF5EC] border border-[#EAE1D5]">
                    <div className="text-base font-bold font-serif-brand text-[#2C1E18]">{product.nutrition.fat}</div>
                    <div className="text-stone-500 text-[11px]">Natural Essential Oils</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MATCHING RECIPES */}
          {activeTab === 'recipes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {matchingRecipes.map((r, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#FAF5EC] border border-[#EAE1D5] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#9C3A1A] bg-white px-2 py-0.5 rounded-full border border-stone-200">
                      {r.tag}
                    </span>
                    <span className="text-stone-400 text-[11px] flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {r.time}
                    </span>
                  </div>
                  <div className="font-serif-brand font-semibold text-sm text-[#2C1E18]">
                    {r.title}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Pair With Companion Spice Section */}
        {otherProduct && (
          <div className="p-5 sm:p-6 rounded-3xl bg-white border border-[#EAE1D5] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div className="w-16 h-20 rounded-xl overflow-hidden bg-stone-100 p-1 shrink-0 hidden sm:block">
                <img
                  src={otherProduct.image}
                  alt={otherProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#9C3A1A] tracking-wider">
                  Complete Your Kitchen Duo
                </span>
                <div className="font-serif-brand text-base font-semibold text-[#2C1E18]">
                  {otherProduct.name} (250g)
                </div>
                <p className="text-xs text-stone-500">
                  {otherProduct.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="font-serif-brand font-bold text-lg text-[#2C1E18]">
                ₹{otherProduct.variants[1].price}
              </span>
              <button
                onClick={() => onAddToCart(otherProduct, otherProduct.variants[1])}
                className="bg-[#2C1E18] hover:bg-[#9C3A1A] text-white px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all shadow-xs active:scale-95 flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Companion to Bag</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
