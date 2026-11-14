import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Sparkles, Search, ShieldCheck } from 'lucide-react';

export default function ShopPage({ 
  lang, 
  translations, 
  onAddToCart, 
  onOpenDetails, 
  products, 
  onToggleWishlist, 
  wishlistIds = [] 
}) {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  // Filtering & Sorting logic
  let filteredProducts = products.filter(p => {
    const matchesCategory = filterCategory === 'all' || 
      (filterCategory === 'chilli' && p.id.includes('chilli')) ||
      (filterCategory === 'turmeric' && p.id.includes('turmeric'));
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.origin.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (sortBy === 'price-low') {
    filteredProducts.sort((a, b) => a.variants[0].price - b.variants[0].price);
  } else if (sortBy === 'price-high') {
    filteredProducts.sort((a, b) => b.variants[0].price - a.variants[0].price);
  } else if (sortBy === 'rating') {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="w-full bg-[#FAF5EC] py-6 sm:py-8">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 space-y-6">
        
        {/* Page Header Banner */}
        <div className="bg-[#F5EDE1] rounded-2xl p-5 sm:p-7 border border-[#EAE1D5] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-1.5">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
              <Link to="/" className="text-stone-500 hover:text-[#9C3A1A]">Home</Link>
              <span>/</span>
              <span>Shop All Spices</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#2C1E18]">
              The Pure Spice Collection
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Single-origin whole spices thoughtfully selected from Guntur and Nizamabad farm clusters. 100% natural, unadulterated, and packaged fresh for lasting kitchen aroma.
            </p>
          </div>
        </div>

        {/* Filter, Search & Controls Bar */}
        <div className="bg-white rounded-xl p-3 sm:p-4 border border-[#EAE1D5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterCategory === 'all'
                  ? 'bg-[#2C1E18] text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Spices ({products.length})
            </button>
            <button
              onClick={() => setFilterCategory('chilli')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterCategory === 'chilli'
                  ? 'bg-[#9C3A1A] text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              🌶️ Red Chilli
            </button>
            <button
              onClick={() => setFilterCategory('turmeric')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filterCategory === 'turmeric'
                  ? 'bg-[#8F6E4E] text-white shadow-2xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              ✨ Turmeric
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2.5 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-60">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search spice or origin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF5EC] border border-[#EAE1D5] rounded-lg pl-8 pr-3 py-1.5 text-xs text-[#2C1E18] placeholder-stone-400 focus:outline-none focus:border-[#2C1E18]"
              />
            </div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#FAF5EC] border border-[#EAE1D5] rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-[#2C1E18] font-mono cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8">
          {filteredProducts.map((prod) => (
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

        {/* Commercial Wholesale Callout */}
        <div className="p-6 rounded-2xl bg-[#2C1E18] text-white flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-amber-300 font-mono text-[11px] uppercase font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Commercial &amp; Restaurant Supply</span>
            </div>
            <h3 className="font-serif-brand text-lg sm:text-xl font-semibold">
              Looking for bulk kitchen supply?
            </h3>
            <p className="text-xs text-stone-400 max-w-xl">
              We supply select restaurants and artisanal kitchens across India with freshly ground wholesale batches milled directly to specification.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#9C3A1A] hover:bg-[#852E12] text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xs shrink-0 transition-all active:scale-95 cursor-pointer"
          >
            Inquire for Wholesale
          </Link>
        </div>

      </div>
    </div>
  );
}
