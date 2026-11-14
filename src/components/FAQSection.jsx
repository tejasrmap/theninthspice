import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqsList } from '../data/products';

export default function FAQSection({ lang, translations }) {
  const [openIndex, setOpenIndex] = useState(0);
  const t = translations?.[lang] || {};

  return (
    <section id="faqs" className="pt-6 pb-3 sm:pt-8 sm:pb-4 bg-[#FAF5EC]">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        
        <div className="text-center max-w-lg mx-auto mb-5 space-y-1">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
            Clear Answers
          </span>
          <h2 className="font-serif-brand text-lg sm:text-xl font-semibold text-[#2C1E18]">
            {t.faqs || 'Frequently Asked Questions'}
          </h2>
          <p className="text-xs text-stone-500">
            Everything you need to know about our sourcing, packaging, and pan-India shipping.
          </p>
        </div>

        <div className="space-y-2">
          {faqsList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#EAE1D5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-3.5 sm:p-4 flex items-center justify-between gap-3 hover:bg-[#FAF5EC]/60 transition-colors cursor-pointer"
                >
                  <span className="font-serif-brand text-xs sm:text-sm font-semibold text-[#2C1E18]">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#9C3A1A]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-3.5 sm:px-4 pb-3.5 pt-0.5 text-xs text-stone-600 leading-relaxed border-t border-[#F0E9DF]">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
