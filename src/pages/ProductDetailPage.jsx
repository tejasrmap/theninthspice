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
  Clock
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
  const [activeTab, setActiveTab] = useState('overview'); // overview, lab, storage, recipes
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
    <div className="w-full bg-[#F8F4EB] pt-3 pb-6 sm:pt-6 sm:pb-8">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-5">
        
        {/* Breadcrumb & Share */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-[#E9DDC9] pb-2.5">
          <div className="flex items-center gap-1.5 font-mono font-medium text-[#766B60] text-[11px] sm:text-xs">
            <Link to="/" className="hover:text-[#A6261D] transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3 h-3" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:text-[#A6261D] transition-colors">Shop Spices</Link>
            <span>/</span>
            <span className="text-[#A6261D] font-semibold truncate max-w-[150px] sm:max-w-none">{product.name}</span>
          </div>

          <button
            onClick={handleShare}
            className="inline-flex items-center gap-1 text-[#766B60] hover:text-[#24140F] text-xs font-mono font-medium transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Copied!' : 'Share'}</span>
          </button>
        </div>

        {/* Main Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 items-start">
          
          {/* Left Column: Authentic Packaging Photo */}
          <div className="lg:col-span-6 space-y-3.5">
            <div className="bg-white rounded-xl p-4 sm:p-8 border border-[#E9DDC9] shadow-2xs flex flex-col items-center justify-center relative overflow-hidden group">
              
              {/* Badges on Visual */}
              <div className="w-full flex items-center justify-between relative z-10 mb-2">
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase text-[#A6261D] bg-[#F8F4EB] border border-[#E9DDC9] px-2.5 py-0.5 rounded">
                  {product.badge}
                </span>

                <button
                  onClick={() => onToggleWishlist && onToggleWishlist(product)}
                  className={`p-2 rounded-full border transition-all cursor-pointer ${
                    isWishlisted 
                      ? 'bg-red-50 border-red-200 text-[#A6261D]' 
                      : 'bg-[#F8F4EB] border-[#E9DDC9] text-[#766B60] hover:text-[#A6261D]'
                  }`}
                  title="Save to Wishlist"
                  aria-label="Wishlist toggle"
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-[#A6261D] text-[#A6261D]' : ''}`} />
                </button>
              </div>

              {/* Real High-Resolution Packaging Standup Pouch */}
              <div className="relative z-10 w-full max-w-[240px] sm:max-w-sm h-64 sm:h-96 flex items-center justify-center">
                <img
                  src={product.image || (isChilli ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
                  alt={product.name}
                  className="w-full h-full object-contain rounded group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                />
              </div>

              {/* Bottom Terroir Stamp */}
              <div className="w-full mt-2.5 pt-2.5 border-t border-[#E9DDC9] flex items-center justify-between text-[11px] font-mono text-[#766B60] relative z-10">
                <span className="flex items-center gap-1.5 truncate">
                  <MapPin className="w-3.5 h-3.5 text-[#A6261D] shrink-0" />
                  <span className="truncate">{product.origin}</span>
                </span>
                <span className="bg-[#F8F4EB] px-2 py-0.5 rounded text-[#24140F] font-semibold border border-[#E9DDC9] shrink-0">
                  {product.harvestYear}
                </span>
              </div>
            </div>

            {/* Quick Guarantees 3-Pill Strip */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2 sm:p-3 rounded-lg bg-white border border-[#E9DDC9] space-y-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-800 mx-auto" />
                <div className="font-serif-brand font-semibold text-[10.5px] sm:text-[11px] text-[#24140F]">Zero Dyes</div>
                <div className="text-[9.5px] sm:text-[10px] text-[#766B60] font-mono">0% Sudan</div>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-white border border-[#E9DDC9] space-y-0.5">
                <Sparkles className="w-3.5 h-3.5 text-[#C49A45] mx-auto" />
                <div className="font-serif-brand font-semibold text-[10.5px] sm:text-[11px] text-[#24140F]">Stone-Ground</div>
                <div className="text-[9.5px] sm:text-[10px] text-[#766B60] font-mono">Oils Locked</div>
              </div>
              <div className="p-2 sm:p-3 rounded-lg bg-white border border-[#E9DDC9] space-y-0.5">
                <Truck className="w-3.5 h-3.5 text-[#24140F] mx-auto" />
                <div className="font-serif-brand font-semibold text-[10.5px] sm:text-[11px] text-[#24140F]">Express Post</div>
                <div className="text-[9.5px] sm:text-[10px] text-[#766B60] font-mono">Free &gt; ₹599</div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing, Weight Selector & Purchase Action */}
          <div className="lg:col-span-6 space-y-3.5">
            
            {/* Title & Star Rating */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500 text-xs">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-xs text-[#24140F]">{product.rating}</span>
                <span className="text-xs text-[#766B60] font-mono">({product.reviewsCount} reviews)</span>
              </div>

              <h1 className="font-serif-brand text-xl sm:text-3xl font-semibold text-[#24140F]">
                {product.name}
              </h1>

              <p className="text-xs font-semibold text-[#A6261D] tracking-wide font-sans-brand">
                {product.tagline}
              </p>
            </div>

            {/* Dynamic Price Banner */}
            <div className="p-3 rounded-xl bg-white border border-[#E9DDC9] flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl sm:text-3xl font-serif-brand font-bold text-[#24140F]">
                    ₹{selectedVariant.price * quantity}
                  </span>
                  <span className="text-xs text-[#766B60] line-through font-mono">
                    ₹{originalPrice * quantity}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-mono">
                    {discountPercent}% OFF
                  </span>
                </div>
                <div className="text-[11px] text-[#766B60] font-mono mt-0.5">
                  Pack Size: {selectedVariant.size} ({selectedVariant.label})
                </div>
              </div>

              <div className="text-right">
                <span className="text-[10px] font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-1 rounded inline-block font-mono">
                  ● In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#766B60] leading-relaxed font-sans-brand">
              {product.shortDesc}
            </p>

            {/* Sensory Gauges */}
            <div className="p-3 rounded-xl bg-white border border-[#E9DDC9] space-y-1.5">
              {isChilli ? (
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-[#29221D] mb-1">
                    <span className="flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5 text-[#A6261D]" />
                      <span className="font-serif-brand">Heat Level</span>
                    </span>
                    <span className="font-mono text-[#A6261D] font-bold">7 / 10 (Balanced Fiery)</span>
                  </div>
                  <div className="w-full bg-[#F8F4EB] h-1.5 rounded-full overflow-hidden flex border border-[#E9DDC9]">
                    <div className="bg-[#A6261D] h-full w-[70%] rounded-full"></div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between text-xs font-medium text-[#29221D] mb-1">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D99316]" />
                      <span className="font-serif-brand">Curcumin Percentage</span>
                    </span>
                    <span className="font-mono text-[#D99316] font-bold">&gt; 4.5% High Curcumin</span>
                  </div>
                  <div className="w-full bg-[#F8F4EB] h-1.5 rounded-full overflow-hidden flex border border-[#E9DDC9]">
                    <div className="bg-[#D99316] h-full w-[95%] rounded-full"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Weight Selection Controls */}
            <div className="space-y-1.5">
              <div className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#766B60]">
                Choose Pack Weight:
              </div>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                {product.variants.map((v, idx) => {
                  const isSelected = selectedVariantIndex === idx;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariantIndex(idx)}
                      className={`p-2 sm:p-2.5 rounded-lg border text-center transition-all cursor-pointer min-h-[44px] flex flex-col justify-center items-center ${
                        isSelected
                          ? 'border-[#24140F] bg-[#24140F] text-white shadow-xs'
                          : 'border-[#E9DDC9] bg-white text-[#29221D] hover:border-stone-400'
                      }`}
                    >
                      <div className="text-xs font-semibold font-mono">{v.size}</div>
                      <div className={`text-xs font-mono font-bold mt-0.5 ${isSelected ? 'text-[#C49A45]' : 'text-[#24140F]'}`}>
                        ₹{v.price}
                      </div>
                      <div className={`text-[10px] ${isSelected ? 'text-stone-300' : 'text-[#766B60]'}`}>
                        {v.label}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity & Add to Bag CTA (Mobile Formatted) */}
            <div className="space-y-2.5 pt-1">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                {/* Quantity Pill */}
                <div className="flex items-center justify-between sm:justify-start border border-[#E9DDC9] rounded-full bg-white px-3 py-2 text-xs">
                  <span className="text-[11px] font-mono text-[#766B60] sm:hidden">Select Quantity:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-1 text-[#766B60] hover:text-black cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="font-mono font-bold text-xs px-3 text-[#24140F]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-1 text-[#766B60] hover:text-black cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Main Purchase CTA */}
                <button
                  onClick={handleAddMultiple}
                  className="flex-1 bg-[#A6261D] hover:bg-[#851C14] text-white py-3 px-6 rounded-full text-xs font-sans-brand font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add {quantity} to Bag • ₹{selectedVariant.price * quantity}</span>
                </button>
              </div>

              {/* Delivery Estimator */}
              <div className="pt-1">
                <PincodeEstimator />
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs: Terroir, Chemical Testing & Culinary Notes */}
        <div className="bg-white rounded-xl p-4 sm:p-7 border border-[#E9DDC9] shadow-2xs space-y-4">
          
          {/* Tab Navigation */}
          <div className="flex items-center gap-2 border-b border-[#E9DDC9] pb-2.5 text-xs overflow-x-auto whitespace-nowrap">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg font-sans-brand font-medium transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#24140F] text-white font-semibold'
                  : 'text-[#766B60] hover:text-black hover:bg-stone-100'
              }`}
            >
              Terroir &amp; Origin
            </button>
            <button
              onClick={() => setActiveTab('lab')}
              className={`px-3 py-1.5 rounded-lg font-sans-brand font-medium transition-all cursor-pointer ${
                activeTab === 'lab'
                  ? 'bg-[#24140F] text-white font-semibold'
                  : 'text-[#766B60] hover:text-black hover:bg-stone-100'
              }`}
            >
              Lab Purity &amp; Nutrition
            </button>
            <button
              onClick={() => setActiveTab('storage')}
              className={`px-3 py-1.5 rounded-lg font-sans-brand font-medium transition-all cursor-pointer ${
                activeTab === 'storage'
                  ? 'bg-[#24140F] text-white font-semibold'
                  : 'text-[#766B60] hover:text-black hover:bg-stone-100'
              }`}
            >
              Storage &amp; Usage
            </button>
            <button
              onClick={() => setActiveTab('recipes')}
              className={`px-3 py-1.5 rounded-lg font-sans-brand font-medium transition-all cursor-pointer ${
                activeTab === 'recipes'
                  ? 'bg-[#24140F] text-white font-semibold'
                  : 'text-[#766B60] hover:text-black hover:bg-stone-100'
              }`}
            >
              Recipes ({matchingRecipes.length})
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <h4 className="font-serif-brand text-base font-semibold text-[#24140F]">
                  Single-Origin Authenticity
                </h4>
                <p className="text-[#766B60] leading-relaxed font-sans-brand">
                  Harvested from generational smallholder farm belts in {product.origin}. Clean sun-drying without industrial diesel hot-air burners guarantees the delicate natural essential oils and aromas remain unblemished.
                </p>
                <div className="p-3 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9] space-y-1">
                  <div className="font-semibold text-[#A6261D] font-serif-brand">Tasting &amp; Aroma Profile</div>
                  <div className="text-[#766B60] leading-relaxed font-sans-brand">{product.tastingNotes}</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="font-serif-brand text-base font-semibold text-[#24140F]">
                  Quality Assurances
                </h4>
                {product.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-800 shrink-0 mt-0.5" />
                    <span className="text-[#29221D] leading-relaxed font-sans-brand">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: LAB ASSAY & NUTRITION */}
          {activeTab === 'lab' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="space-y-2">
                <h4 className="font-serif-brand text-base font-semibold text-[#24140F]">
                  Chemical Assay &amp; Safety Verification
                </h4>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <span className="text-[#766B60]">Sudan Dyes (I, II, III, IV):</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      0.00% (Not Detected)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <span className="text-[#766B60]">Lead Chromate:</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Zero / Negative
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <span className="text-[#766B60]">Aflatoxin Limits:</span>
                    <span className="font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Passed Codex Limit
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <span className="text-[#766B60]">Entity:</span>
                    <span className="font-mono font-bold text-[#24140F]">
                      GT InnoX LLP (FSSAI)
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-serif-brand text-base font-semibold text-[#24140F]">
                  Nutritional Breakdown (Per 5g Serving)
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <div className="text-sm font-bold font-serif-brand text-[#24140F]">{product.nutrition.calories}</div>
                    <div className="text-[#766B60] text-[10.5px] font-sans-brand">Energy Value</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <div className="text-sm font-bold font-serif-brand text-[#24140F]">{product.nutrition.carbs}</div>
                    <div className="text-[#766B60] text-[10.5px] font-sans-brand">Carbs</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <div className="text-sm font-bold font-serif-brand text-[#24140F]">{product.nutrition.protein}</div>
                    <div className="text-[#766B60] text-[10.5px] font-sans-brand">Plant Protein</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9]">
                    <div className="text-sm font-bold font-serif-brand text-[#24140F]">{product.nutrition.fat}</div>
                    <div className="text-[#766B60] text-[10.5px] font-sans-brand">Aroma Oils</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: STORAGE INSTRUCTIONS */}
          {activeTab === 'storage' && (
            <div className="space-y-2 text-xs text-[#766B60] font-sans-brand leading-relaxed max-w-2xl">
              <h4 className="font-serif-brand text-base font-semibold text-[#24140F]">
                Preserving Volatile Terpene Aroma
              </h4>
              <p>
                Our spices are slow stone-ground at ambient temperatures without industrial steam or heat, which leaves all natural essential aroma oils intact. To ensure these oils do not evaporate:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Reseal the zipper on the multi-barrier pouch tightly after each cooking session.</li>
                <li>Alternatively, decant into a clean, dry, airtight glass container.</li>
                <li>Store in a cool, dark kitchen cupboard away from direct sunlight and stove heat.</li>
              </ul>
            </div>
          )}

          {/* TAB 4: RECIPES */}
          {activeTab === 'recipes' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {matchingRecipes.map((r, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#F8F4EB] border border-[#E9DDC9] space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#A6261D] bg-white px-2 py-0.5 rounded border border-[#E9DDC9]">
                      {r.tag}
                    </span>
                    <span className="text-[#766B60] text-[11px] flex items-center gap-1 font-mono">
                      <Clock className="w-3 h-3" /> {r.time}
                    </span>
                  </div>
                  <div className="font-serif-brand font-semibold text-sm text-[#24140F]">
                    {r.title}
                  </div>
                  <p className="text-xs text-[#766B60] leading-relaxed font-sans-brand">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Cross-Sell Companion Spice */}
        {otherProduct && (
          <div className="p-3.5 sm:p-5 rounded-xl bg-white border border-[#E9DDC9] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-12 h-14 rounded-lg overflow-hidden bg-[#F8F4EB] p-1 shrink-0 hidden sm:block border border-[#E9DDC9]">
                <img
                  src={otherProduct.image}
                  alt={otherProduct.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono font-bold uppercase text-[#A6261D] tracking-wider">
                  Complete The Kitchen Duo
                </span>
                <div className="font-serif-brand text-sm sm:text-base font-semibold text-[#24140F]">
                  {otherProduct.name} (250g)
                </div>
                <p className="text-xs text-[#766B60] font-sans-brand line-clamp-1">
                  {otherProduct.tagline}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto">
              <span className="font-serif-brand font-bold text-base text-[#24140F]">
                ₹{otherProduct.variants[1].price}
              </span>
              <button
                onClick={() => onAddToCart(otherProduct, otherProduct.variants[1])}
                className="bg-[#24140F] hover:bg-[#A6261D] text-white px-4 py-2 rounded-full text-xs font-sans-brand font-medium tracking-wider uppercase transition-all shadow-2xs active:scale-95 flex items-center gap-1.5 cursor-pointer min-h-[38px]"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Companion</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
