import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { recipes } from '../data/products';

export default function RecipesSection({ onAddToCart, products }) {
  const recipeImages = [
    "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=80"
  ];

  return (
    <section id="recipes" className="py-6 sm:py-10 bg-[#F8F4EB] border-b border-[#E9DDC9]">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-10 space-y-5">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A6261D] font-semibold">
              Culinary Pairings
            </span>
            <h2 className="font-serif-brand text-xl sm:text-2xl text-[#24140F] font-medium">
              Recipes from Authentic Indian Kitchens
            </h2>
          </div>
          <p className="text-[#766B60] text-xs max-w-md font-sans-brand leading-relaxed">
            Discover how pure single-origin spices bloom in ghee, cold-pressed groundnut oil, and simmering broths without scorching.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {recipes.map((r, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl overflow-hidden border border-[#E9DDC9] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={recipeImages[idx % recipeImages.length]}
                    alt={r.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#24140F]/85 backdrop-blur-xs text-[#F8F4EB] text-[9.5px] font-mono px-2 py-0.5 rounded">
                    {r.tag}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-[#766B60] font-mono">
                    <span className="flex items-center gap-1 text-[11px]">
                      <Clock className="w-3 h-3 text-[#A6261D]" /> {r.time}
                    </span>
                    <span className="text-[10px] uppercase font-semibold text-[#24140F]">{r.difficulty}</span>
                  </div>

                  <h3 className="font-serif-brand text-base font-semibold text-[#24140F]">
                    {r.title}
                  </h3>

                  <p className="text-xs text-[#766B60] leading-relaxed font-sans-brand line-clamp-3">
                    {r.desc}
                  </p>

                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#766B60] font-semibold mb-1">
                      Spice Foundation:
                    </div>
                    <div className="space-y-1">
                      {r.spicesUsed.map((s, sIdx) => (
                        <div key={sIdx} className="text-[11px] text-[#24140F] flex items-center gap-1.5 font-medium font-sans-brand">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A6261D]"></span>
                          <span>{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <Link
                  to="/recipes"
                  className="w-full py-2 rounded-lg border border-[#E9DDC9] hover:border-[#24140F] text-center text-xs font-sans-brand font-semibold text-[#24140F] block transition-colors mt-2"
                >
                  Explore Recipe Guide
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
