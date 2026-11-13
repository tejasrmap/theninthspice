import React from 'react';
import { ChefHat, Clock, Sparkles, Plus } from 'lucide-react';
import { recipes } from '../data/products';

export default function RecipesSection({ onAddToCart, products }) {
  return (
    <section id="recipes" className="py-16 bg-[#FAF7F2] border-b border-[#EAE1D5]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-3">
          <div>
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              Culinary Notes
            </span>
            <h2 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#1C1917] mt-1">
              Traditional Kitchen Pairings
            </h2>
          </div>
          <p className="text-stone-500 text-xs sm:text-[13px] max-w-md">
            Discover how pure single-origin spices bloom in ghee, cold-pressed groundnut oil, and simmering broths without scorching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.map((r, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#EAE1D5] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-[#FAF7F2] text-[#B93822] font-semibold text-[10px] px-2.5 py-0.5 rounded-full border border-[#EAE1D5]">
                    {r.tag}
                  </span>
                  <span className="text-stone-400 text-[11px] flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {r.time}
                  </span>
                </div>

                <h3 className="font-serif-brand text-base font-semibold text-[#1C1917]">
                  {r.title}
                </h3>

                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {r.desc}
                </p>

                <div className="pt-1">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-stone-400 font-mono mb-1">
                    Spices Required:
                  </div>
                  <div className="space-y-1">
                    {r.spicesUsed.map((s, sIdx) => (
                      <div key={sIdx} className="text-xs text-stone-700 flex items-center gap-1.5 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B93822]"></span>
                        <span>{s}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#F0E9DF]">
                <button
                  onClick={() => {
                    // Add corresponding product
                    if (r.spicesUsed.length > 1) {
                      onAddToCart(products[0], products[0].variants[0]);
                      onAddToCart(products[1], products[1].variants[0]);
                    } else {
                      onAddToCart(products[1], products[1].variants[0]);
                    }
                  }}
                  className="w-full bg-[#FAF7F2] hover:bg-[#F2ECE2] border border-[#EAE1D5] text-[#1C1917] py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5 text-[#B93822]" />
                  <span>Add Recipe Spices</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

