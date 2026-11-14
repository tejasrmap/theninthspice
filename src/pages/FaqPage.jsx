import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faqsList } from '../data/products';
import { ChevronDown, Search, HelpCircle, Phone, Mail } from 'lucide-react';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState(0);
  const [search, setSearch] = useState('');

  const filteredFaqs = faqsList.filter(f =>
    f.q.toLowerCase().includes(search.toLowerCase()) ||
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full bg-[#FAF5EC] pt-4 pb-6 sm:pt-6 sm:pb-8 space-y-6">
      
      {/* Top Banner */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="bg-[#F5EDE1] rounded-2xl p-5 sm:p-7 border border-[#EAE1D5] relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#9C3A1A]">
              <Link to="/" className="text-stone-500 hover:text-[#9C3A1A]">Home</Link>
              <span>/</span>
              <span>FAQs</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl font-semibold text-[#2C1E18]">
              Frequently Asked Questions
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Find transparent answers about our Andhra farm sourcing, gentle processing, delivery timelines across India, and shelf life guarantees.
            </p>

            {/* Search input */}
            <div className="pt-2 max-w-md">
              <div className="relative">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. shelf life, shipping, farm origin)..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-white border border-[#EAE1D5] rounded-xl pl-9 pr-3.5 py-2 text-xs text-stone-900 focus:outline-none focus:border-stone-800 shadow-2xs"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-8 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="p-8 text-center bg-white rounded-3xl border border-[#E8DEC9]">
                <p className="text-stone-500 text-sm">No matching questions found for "{search}".</p>
              </div>
            ) : (
              filteredFaqs.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl border border-[#E8DEC9] overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 hover:bg-[#FAF6EF]/50 transition-colors"
                    >
                      <span className="font-serif-brand text-base sm:text-lg font-bold text-[#1C1917]">
                        {item.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#C23321]' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-[#F5ECE0]">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Quick Help Card */}
          <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC9] shadow-sm space-y-4">
            <h4 className="font-serif-brand font-bold text-xl text-[#1C1917]">
              Still Have Questions?
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              Our culinary and customer support team is available Monday through Saturday to answer any questions about our batches or orders.
            </p>

            <div className="space-y-3 pt-2 text-xs">
              <a
                href="tel:+919441413344"
                className="p-3.5 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-center gap-3 hover:border-stone-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <div>
                  <div className="font-bold text-stone-900">+91 9441413344</div>
                  <div className="text-[10px] text-stone-500">Call or WhatsApp Support</div>
                </div>
              </a>

              <a
                href="mailto:support@theninthspice.com"
                className="p-3.5 rounded-2xl bg-[#FAF6EF] border border-[#E8DEC9] flex items-center gap-3 hover:border-stone-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-700" />
                <div>
                  <div className="font-bold text-stone-900">support@theninthspice.com</div>
                  <div className="text-[10px] text-stone-500">Email Enquiries</div>
                </div>
              </a>
            </div>

            <div className="pt-2">
              <Link
                to="/contact"
                className="w-full block text-center bg-[#1C1917] hover:bg-black text-white py-3 rounded-full text-xs font-semibold shadow-xs"
              >
                Open Contact Form
              </Link>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

