import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { Sparkles, Filter, Search, ArrowUpDown, ShieldCheck, Heart } from 'lucide-react';

export default function ShopPage({ lang, translations, onAddToCart, onOpenDetails, products }) {
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const t = translations[lang];

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
    <div className="w-full py-10 sm:py-14">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        {/* Page Header Banner */}
        <div className="bg-[#F5EDE1] rounded-3xl p-6 sm:p-10 border border-[#EAE1D5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              <Link to="/" className="text-stone-500 hover:text-black">Home</Link>
              <span>/</span>
              <span>Shop All Spices</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#1C1917]">
              The Craft Spice Pantry
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Single-origin whole spices thoughtfully selected from Guntur and Nizamabad farm clusters. 100% natural, unadulterated, and packaged fresh for lasting kitchen aroma.
            </p>
          </div>
        </div>

        {/* Filter, Search & Controls Bar */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 border border-[#E8DEC9] shadow-xs flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'all'
                  ? 'bg-[#1C1917] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              All Spices ({products.length})
            </button>
            <button
              onClick={() => setFilterCategory('chilli')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'chilli'
                  ? 'bg-[#C23321] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              🌶️ Red Chilli
            </button>
            <button
              onClick={() => setFilterCategory('turmeric')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                filterCategory === 'turmeric'
                  ? 'bg-[#D98200] text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              ✨ Turmeric
            </button>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Search by spice or origin..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-none focus:border-stone-800"
              />
            </div>

            {/* Sort Select */}
            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-[#FAF6EF] border border-[#E8DEC9] text-xs font-semibold rounded-xl px-3 py-2 text-stone-800 focus:outline-none cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
          {filteredProducts.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onOpenDetails={onOpenDetails}
              lang={lang}
              translations={translations}
            />
          ))}
        </div>

        {/* Purity Guarantee Callout */}
        <div className="p-8 rounded-3xl bg-[#1C1917] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 font-mono text-xs uppercase font-bold tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified 100% Unadulterated</span>
            </div>
            <h3 className="font-serif-brand text-2xl font-bold">
              Looking for commercial bulk kitchen supply?
            </h3>
            <p className="text-xs text-stone-400 max-w-xl">
              We supply select boutique restaurants and cloud kitchens across India with freshly ground wholesale batches milled directly to specification.
            </p>
          </div>

          <Link
            to="/contact"
            className="bg-[#C23321] hover:bg-[#A32819] text-white px-7 py-3 rounded-full text-xs font-semibold shadow-md shrink-0 transition-transform active:scale-95"
          >
            Inquire for Wholesale
          </Link>
        </div>

      </div>
    </div>
  );
}

