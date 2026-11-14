import React, { useState } from 'react';
import { Sparkles, Utensils, Heart, Check, Plus } from 'lucide-react';

export default function SpiceQuiz({ onAddToCart, products }) {
  const [selectedPreference, setSelectedPreference] = useState('andhra');

  const preferences = [
    {
      id: 'andhra',
      icon: '🌶️',
      title: 'Fiery & Authentic',
      tagline: 'Andhra curries, roasts & bold spicy tadkas',
      recommendation: {
        product: products[0], // Red Chilli
        variant: products[0].variants[1], // 250g
        note: 'Best paired with ghee tadka and slow meat or vegetable roasts.'
      }
    },
    {
      id: 'wellness',
      icon: '✨',
      title: 'Ayurvedic Wellness',
      tagline: 'Immunity milk, gentle broths & golden lattes',
      recommendation: {
        product: products[1], // Turmeric
        variant: products[1].variants[1], // 250g
        note: 'High-curcumin finger turmeric delivers pure bioavailability.'
      }
    },
    {
      id: 'daily',
      icon: '🥘',
      title: 'Everyday Household',
      tagline: 'Balanced dal, sambar, sabzi & comfort food',
      recommendation: {
        isBundle: true,
        items: [
          { product: products[0], variant: products[0].variants[0] },
          { product: products[1], variant: products[1].variants[0] }
        ],
        note: 'The Essential Starter Duo: 150g Red Chilli + 150g Turmeric for ₹278.'
      }
    }
  ];

  const current = preferences.find(p => p.id === selectedPreference);

  return (
    <section className="py-8 sm:py-10 bg-[#FAF5EC] border-b border-[#EAE1D5]">
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
        
        <div className="bg-white rounded-2xl p-5 sm:p-7 border border-[#EAE1D5] shadow-xs space-y-5">
          
          <div className="text-center space-y-1.5 max-w-md mx-auto">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              Pantry Matcher
            </span>
            <h3 className="font-serif-brand text-lg sm:text-xl font-semibold text-[#1C1917]">
              Which best describes your cooking rhythm?
            </h3>
            <p className="text-xs text-stone-500">
              Select your priority to see our recommended grind and pack size.
            </p>
          </div>

          {/* Preference Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {preferences.map((p) => {
              const active = p.id === selectedPreference;
              return (
                <button
                  key={p.id}
                  onClick={() => setSelectedPreference(p.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    active
                      ? 'border-[#1C1917] bg-[#FAF7F2] shadow-2xs'
                      : 'border-[#EAE1D5] bg-stone-50/50 hover:bg-stone-50'
                  }`}
                >
                  <div className="text-xl mb-1.5">{p.icon}</div>
                  <div className="font-serif-brand font-semibold text-xs sm:text-sm text-[#1C1917]">{p.title}</div>
                  <div className="text-[11px] text-stone-500 mt-0.5 leading-snug">{p.tagline}</div>
                </button>
              );
            })}
          </div>

          {/* Recommendation Display */}
          <div className="p-4 rounded-xl bg-[#FAF7F2] border border-[#EAE1D5] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="space-y-0.5 text-center sm:text-left">
              <div className="text-[10px] font-mono font-semibold text-[#B93822] uppercase">
                Recommended Match
              </div>
              <div className="font-serif-brand font-semibold text-sm sm:text-base text-[#1C1917]">
                {current.recommendation.isBundle
                  ? 'The Essential Pantry Duo (Chilli 150g + Turmeric 150g)'
                  : `${current.recommendation.product.name} (${current.recommendation.variant.size})`}
              </div>
              <p className="text-xs text-stone-600 max-w-lg">
                {current.recommendation.note}
              </p>
            </div>

            <div>
              {current.recommendation.isBundle ? (
                <button
                  onClick={() => {
                    current.recommendation.items.forEach(item => {
                      onAddToCart(item.product, item.variant);
                    });
                  }}
                  className="bg-[#1C1917] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xs active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Duo (₹278)</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    onAddToCart(current.recommendation.product, current.recommendation.variant);
                  }}
                  className="bg-[#1C1917] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xs active:scale-95 transition-all flex items-center gap-1.5 shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add to Bag (₹{current.recommendation.variant.price})</span>
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

