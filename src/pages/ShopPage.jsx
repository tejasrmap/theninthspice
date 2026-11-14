import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { upcomingSpices } from '../data/products';
import { Search, ShieldCheck, Bell, Check, Sparkles, Sprout, Flame } from 'lucide-react';

export default function ShopPage({ 
  lang, 
  translations, 
  onAddToCart, 
  onOpenDetails, 
  products, 
  onToggleWishlist, 
  wishlistIds = [] 
}) {
  const [filterCategory, setFilterCategory] = useState('all'); // all, available, upcoming, chilli, turmeric, seeds
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [notifiedItems, setNotifiedItems] = useState({});

  const handleNotifyMe = (itemId, itemName) => {
    setNotifiedItems(prev => ({ ...prev, [itemId]: true }));
  };

  // Filter Available Products
  let filteredAvailable = products.filter(p => {
    if (filterCategory === 'upcoming') return false;
    const matchesCategory = 
      filterCategory === 'all' || 
      filterCategory === 'available' ||
      (filterCategory === 'chilli' && p.id.includes('chilli')) ||
      (filterCategory === 'turmeric' && p.id.includes('turmeric'));

    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      !searchQuery ||
      p.name.toLowerCase().includes(query) ||
      p.shortDesc.toLowerCase().includes(query) ||
      p.origin.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Filter Upcoming Spices
  let filteredUpcoming = upcomingSpices.filter(item => {
    if (filterCategory === 'available') return false;
    const matchesCategory = 
      filterCategory === 'all' || 
      filterCategory === 'upcoming' ||
      (filterCategory === 'chilli' && (item.category === 'chilli' || item.id.includes('chilli') || item.id.includes('pepper'))) ||
      (filterCategory === 'turmeric' && (item.category === 'turmeric' || item.id.includes('turmeric'))) ||
      (filterCategory === 'seeds' && (item.category === 'seeds' || item.category === 'blends'));

    const query = searchQuery.toLowerCase();
    const matchesSearch = 
      !searchQuery ||
      item.name.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query) ||
      item.origin.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  // Sorting for available products
  if (sortBy === 'price-low') {
    filteredAvailable.sort((a, b) => a.variants[0].price - b.variants[0].price);
  } else if (sortBy === 'price-high') {
    filteredAvailable.sort((a, b) => b.variants[0].price - a.variants[0].price);
  } else if (sortBy === 'rating') {
    filteredAvailable.sort((a, b) => b.rating - a.rating);
  }

  const totalResults = filteredAvailable.length + filteredUpcoming.length;

  return (
    <div className="w-full bg-[#F8F4EB] pt-3 pb-8 sm:pt-6 sm:pb-12">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-6">
        
        {/* Page Header Banner */}
        <div className="bg-white rounded-xl p-4 sm:p-7 border border-[#E9DDC9] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-1">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#A6261D]">
              <Link to="/" className="text-[#766B60] hover:text-[#A6261D]">Home</Link>
              <span>/</span>
              <span>The Pantry Catalog</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#24140F]">
              The Pure Spice Collection
            </h1>

            <p className="text-xs sm:text-[13px] text-[#766B60] leading-relaxed font-sans-brand">
              Handpicked single-origin harvests thoughtfully sourced from certified generational farm clusters in Guntur, Nizamabad, and the Western Ghats. 100% natural and unadulterated.
            </p>
          </div>
        </div>

        {/* Filter, Search & Controls Bar */}
        <div className="bg-white rounded-xl p-3 border border-[#E9DDC9] shadow-2xs space-y-3">
          
          {/* Category Tabs (Scalable Horizontal Scrollable on Mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto whitespace-nowrap pb-1 no-scrollbar">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'all'
                  ? 'bg-[#24140F] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              All Harvests ({products.length + upcomingSpices.length})
            </button>
            <button
              onClick={() => setFilterCategory('available')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'available'
                  ? 'bg-[#24140F] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              Available Now ({products.length})
            </button>
            <button
              onClick={() => setFilterCategory('upcoming')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'upcoming'
                  ? 'bg-[#24140F] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              Upcoming Harvests ({upcomingSpices.length})
            </button>
            <button
              onClick={() => setFilterCategory('chilli')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'chilli'
                  ? 'bg-[#A6261D] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              🌶️ Chilli &amp; Pepper
            </button>
            <button
              onClick={() => setFilterCategory('turmeric')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'turmeric'
                  ? 'bg-[#D99316] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              ✨ Turmeric &amp; Roots
            </button>
            <button
              onClick={() => setFilterCategory('seeds')}
              className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all cursor-pointer min-h-[36px] ${
                filterCategory === 'seeds'
                  ? 'bg-[#382218] text-white shadow-2xs font-semibold'
                  : 'bg-[#F8F4EB] text-[#29221D] hover:bg-stone-200'
              }`}
            >
              🌿 Seeds &amp; Blends
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-1 border-t border-[#E9DDC9]/60">
            <div className="relative flex-1 max-w-md">
              <Search className="w-3.5 h-3.5 text-stone-400 absolute left-2.5 top-2.5" />
              <input
                type="text"
                placeholder="Search by spice name, origin, or terroir..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#F8F4EB] border border-[#E9DDC9] rounded-lg pl-8 pr-2.5 py-1.5 text-xs text-[#24140F] placeholder-[#766B60] focus:outline-none focus:border-[#24140F] font-sans-brand min-h-[36px]"
              />
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3">
              <span className="text-[11px] font-mono text-[#766B60]">
                {totalResults} {totalResults === 1 ? 'item' : 'items'} found
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#F8F4EB] border border-[#E9DDC9] rounded-lg px-2.5 py-1.5 text-xs text-[#29221D] focus:outline-none focus:border-[#24140F] font-mono cursor-pointer min-h-[36px]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* 1. AVAILABLE HARVESTS SECTION */}
        {filteredAvailable.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-[#E9DDC9] pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                <h2 className="font-serif-brand text-base sm:text-lg font-semibold text-[#24140F]">
                  Available Fresh Batches
                </h2>
              </div>
              <span className="text-[11px] font-mono text-[#766B60]">
                Ready for Dispatch
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 xl:gap-8">
              {filteredAvailable.map((prod) => (
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
          </div>
        )}

        {/* 2. UPCOMING HARVESTS & EXPERIMENTAL RELEASES SECTION */}
        {filteredUpcoming.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between border-b border-[#E9DDC9] pb-2">
              <div className="flex items-center gap-2">
                <Sprout className="w-4 h-4 text-[#C49A45]" />
                <h2 className="font-serif-brand text-base sm:text-lg font-semibold text-[#24140F]">
                  Upcoming Single-Origins &amp; Blends
                </h2>
              </div>
              <span className="text-[11px] font-mono text-[#C49A45] font-semibold">
                In Small-Batch Development
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredUpcoming.map((item) => {
                const isNotified = notifiedItems[item.id];
                return (
                  <div 
                    key={item.id}
                    className="p-4 sm:p-5 rounded-xl bg-white border border-[#E9DDC9] hover:border-[#C49A45]/80 transition-all flex flex-col justify-between shadow-2xs space-y-3 group"
                  >
                    <div className="space-y-2">
                      {/* Top Badges */}
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[9.5px] font-mono font-bold uppercase tracking-wider text-[#766B60] bg-[#F8F4EB] px-2 py-0.5 rounded border border-[#E9DDC9]">
                          {item.origin}
                        </span>
                        <span className="text-[9.5px] font-mono font-semibold uppercase text-[#A6261D] bg-[#A6261D]/10 px-2 py-0.5 rounded">
                          {item.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif-brand text-base font-semibold text-[#24140F] group-hover:text-[#A6261D] transition-colors">
                        {item.name}
                      </h3>

                      {/* Terroir Detail */}
                      <div className="text-[11px] font-mono text-[#766B60] flex items-center gap-1.5">
                        <span className="text-[#C49A45]">✻</span>
                        <span>Terroir: {item.terroir}</span>
                      </div>

                      {/* Description */}
                      <p className="text-xs text-[#766B60] leading-relaxed font-sans-brand">
                        {item.desc}
                      </p>
                    </div>

                    {/* Bottom Status & Action */}
                    <div className="pt-3 border-t border-[#E9DDC9]/60 flex items-center justify-between gap-2">
                      <div className="text-[10px] font-mono text-stone-500">
                        {item.expectedRelease}
                      </div>

                      <button
                        onClick={() => handleNotifyMe(item.id, item.name)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-sans-brand font-medium transition-all flex items-center gap-1.5 cursor-pointer min-h-[34px] ${
                          isNotified 
                            ? 'bg-emerald-800 text-white' 
                            : 'bg-[#F8F4EB] hover:bg-[#24140F] hover:text-white text-[#24140F] border border-[#E9DDC9]'
                        }`}
                      >
                        {isNotified ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Reserved</span>
                          </>
                        ) : (
                          <>
                            <Bell className="w-3 h-3 text-[#C49A45]" />
                            <span>Notify Me</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty State */}
        {totalResults === 0 && (
          <div className="p-10 text-center bg-white rounded-xl border border-[#E9DDC9] space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F8F4EB] mx-auto flex items-center justify-center text-xl">
              🔍
            </div>
            <h3 className="font-serif-brand text-base font-semibold text-[#24140F]">
              No Spices Found
            </h3>
            <p className="text-xs text-[#766B60] max-w-sm mx-auto font-sans-brand">
              No products match "{searchQuery}". Try searching for chilli, turmeric, pepper, or coriander.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setFilterCategory('all'); }}
              className="bg-[#24140F] text-white px-4 py-2 rounded-lg text-xs font-sans-brand cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

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
