import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Search, ShieldCheck } from 'lucide-react';

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
    <div className="w-full bg-[#F8F4EB] pt-3 pb-6 sm:pt-6 sm:pb-8">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-5">
        
        {/* Page Header Banner */}
        <div className="bg-white rounded-xl p-4 sm:p-7 border border-[#E9DDC9] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#A6261D]">
              <Link to="/" className="text-[#766B60] hover:text-[#A6261D]">Home</Link>
              <span>/</span>
              <span>Shop All Spices</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#24140F]">
              The Pure Spice Collection
            </h1>

            <p className="text-xs sm:text-[13px] text-[#766B60] leading-relaxed font-sans-brand">
              Single-origin whole spices thoughtfully selected from Guntur and Nizamabad farm clusters. 100% natural, unadulterated, and packaged fresh for lasting kitchen aroma.
            </p>
          </div>
        </div>

        {/* Filter, Search & Controls Bar (Responsive for Mobile) */}
        <div className="bg-white rounded-xl p-3 border border-[#E9DDC9] shadow-2xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
          
          {/* Category Tabs (Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pb-1 sm:pb-0">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'all'
                  ? 'bg-[#24140F] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              All Spices ({products.length})
            </button>
            <button
              onClick={() => setFilterCategory('chilli')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'chilli'
                  ? 'bg-[#A6261D] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              🌶️ Red Chilli
            </button>
            <button
              onClick={() => setFilterCategory('turmeric')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'turmeric'
                  ? 'bg-[#D99316] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              ✨ Turmeric
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-56">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search spice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8F4EB] border border-[#E9DDC9] rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-[#24140F] placeholder-[#766B60] focus:outline-none focus:border-[#24140F] font-sans-brand min-h-[36px]"
              />
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-[#F8F4EB] border border-[#E9DDC9] rounded-lg px-2.5 py-1.5 text-xs text-[#29221D] focus:outline-none focus:border-[#24140F] font-mono cursor-pointer min-h-[36px]"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
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
        <div className="p-5 rounded-xl bg-[#24140F] text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1.5 text-[#C49A45] font-mono text-[11px] uppercase font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Commercial Supply</span>
            </div>
            <h3 className="font-serif-brand text-base sm:text-lg font-semibold">
              Looking for commercial bulk kitchen supply?
            </h3>
            <p className="text-xs text-[#E9DDC9]/75 max-w-xl font-sans-brand">
              Operated by <strong>GT InnoX LLP</strong>. We supply select restaurants and artisanal kitchens across India with freshly ground wholesale batches milled directly to specification.
            </p>
          </div>

          <Link
            to="/contact"
            className="w-full md:w-auto text-center bg-[#A6261D] hover:bg-[#851C14] text-white px-5 py-2.5 rounded-full text-xs font-sans-brand font-medium shadow-xs shrink-0 transition-all active:scale-95 cursor-pointer min-h-[40px] flex items-center justify-center"
          >
            Inquire for Wholesale
          </Link>
        </div>

      </div>
    </div>
  );
}
