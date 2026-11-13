import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqsList } from '../data/products';

export default function FAQSection({ lang, translations }) {
  const [openIndex, setOpenIndex] = useState(0);
  const t = translations[lang];

  return (
    <section id="faqs" className="py-16 bg-[#F5EDE1] border-b border-[#EAE1D5]">
      <div className="max-w-3xl mx-auto px-6 sm:px-10">
        
        <div className="text-center max-w-lg mx-auto mb-10 space-y-1.5">
          <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
            Clear Answers
          </span>
          <h2 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#1C1917]">
            {t.faqs}
          </h2>
          <p className="text-xs text-stone-500">
            Everything you need to know about our sourcing, packaging, and pan-India shipping.
          </p>
        </div>

        <div className="space-y-2.5">
          {faqsList.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-xl border border-[#EAE1D5] overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 hover:bg-[#FAF7F2]/60 transition-colors"
                >
                  <span className="font-serif-brand text-sm sm:text-base font-semibold text-[#1C1917]">
                    {item.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-stone-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#B93822]' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-[#F0E9DF]">
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

