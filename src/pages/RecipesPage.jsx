import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data/products';
import { ChefHat, Clock, Sparkles, Plus, CheckCircle2 } from 'lucide-react';

export default function RecipesPage({ onAddToCart, products }) {
  const [selectedTag, setSelectedTag] = useState('all');

  const filteredRecipes = selectedTag === 'all'
    ? recipes
    : recipes.filter(r => r.tag.toLowerCase().includes(selectedTag));

  return (
    <div className="w-full bg-[#FAF5EC] pt-4 pb-6 sm:pt-6 sm:pb-8 space-y-6">
      
      {/* Top Banner */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="bg-[#F5EDE1] rounded-2xl p-5 sm:p-7 border border-[#EAE1D5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
              <Link to="/" className="text-stone-500 hover:text-[#9C3A1A]">Home</Link>
              <span>/</span>
              <span>Kitchen Notes &amp; Recipes</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#2C1E18] leading-tight">
              Culinary Notes from Andhra Kitchens
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Explore traditional and modern recipes crafted to unlock the rich aromatic oils preserved in our pure single-origin harvest.
            </p>
          </div>
        </div>
      </div>

      {/* Recipes Explorer */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        
        {/* Filter Tabs */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedTag('all')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTag === 'all' ? 'bg-[#1C1917] text-white shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E8DEC9]'
            }`}
          >
            All Recipes ({recipes.length})
          </button>
          <button
            onClick={() => setSelectedTag('andhra')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTag === 'andhra' ? 'bg-[#C23321] text-white shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E8DEC9]'
            }`}
          >
            🌶️ Andhra Specialties
          </button>
          <button
            onClick={() => setSelectedTag('wellness')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTag === 'wellness' ? 'bg-[#D98200] text-white shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E8DEC9]'
            }`}
          >
            ✨ Ayurvedic Wellness
          </button>
          <button
            onClick={() => setSelectedTag('comfort')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedTag === 'comfort' ? 'bg-emerald-800 text-white shadow-xs' : 'bg-white text-stone-700 hover:bg-stone-100 border border-[#E8DEC9]'
            }`}
          >
            🥘 Comfort Food
          </button>
        </div>

        {/* Recipes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((r, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-[#E8DEC9] shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-[#FAF6EF] text-[#C23321] font-bold px-3 py-1 rounded-full border border-[#E8DEC9]">
                    {r.tag}
                  </span>
                  <span className="text-stone-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {r.time}
                  </span>
                </div>

                <h3 className="font-serif-brand text-2xl font-bold text-[#1C1917]">
                  {r.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {r.desc}
                </p>

                <div className="pt-2">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-stone-500 font-mono mb-2">
                    Key Spices Required:
                  </div>
                  <div className="space-y-1.5">
                    {r.spicesUsed.map((s, sIdx) => (
                      <div key={sIdx} className="text-xs text-stone-800 flex items-center gap-2 font-medium bg-[#FAF6EF] p-2 rounded-xl border border-[#E8DEC9]">
                        <span className="w-2 h-2 rounded-full bg-[#C23321]"></span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E8DEC9]">
                <button
                  onClick={() => {
                    if (r.spicesUsed.length > 1) {
                      onAddToCart(products[0], products[0].variants[0]);
                      onAddToCart(products[1], products[1].variants[0]);
                    } else {
                      onAddToCart(products[1], products[1].variants[0]);
                    }
                  }}
                  className="w-full bg-[#FAF6EF] hover:bg-[#F3EBDD] border border-[#E8DEC9] text-[#1C1917] py-3 rounded-2xl text-xs font-semibold transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <Plus className="w-4 h-4 text-[#C23321]" />
                  <span>Add Required Spices to Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

