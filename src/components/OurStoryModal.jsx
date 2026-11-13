import React from 'react';
import { X, Sparkles, MapPin, Heart, ShieldCheck } from 'lucide-react';

export default function OurStoryModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#FAF6EF] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#E0D3BE] p-6 sm:p-8 space-y-6 relative">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white text-stone-600 hover:text-stone-900 border border-[#E8DEC9] shadow-sm transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div>
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-[#C23321] bg-red-100/60 px-2.5 py-0.5 rounded-full">
            Our Heritage &amp; Purpose
          </span>
          <h2 className="font-serif-brand text-3xl font-bold text-[#1C1917] mt-2">
            The Story Behind THE NINTH SPICE™
          </h2>
          <div className="text-xs text-stone-500 font-mono mt-1">
            Kundrapu Ventures Private Limited • Visakhapatnam, Andhra Pradesh
          </div>
        </div>

        <div className="space-y-4 text-sm text-stone-700 leading-relaxed">
          <p>
            It began with a simple kitchen revelation: <em>Why did the spices ground in traditional Andhra homes taste profoundly deeper, more fragrant, and more vibrant than anything bought from modern supermarket shelves?</em>
          </p>

          <p>
            The answer was hidden inside industrial machinery. Mass-market spice corporations rely on extreme-speed hammer mills spinning at over 3,000 RPM to churn out thousands of tonnes every day. That violent friction drives chamber temperatures well above 75°C, effectively flash-evaporating the sacred volatile essential oils (curcuminoids, capsaicin, and aromatics) before they even reach packaging.
          </p>

          <div className="p-4 rounded-2xl bg-white border border-[#E8DEC9] space-y-2">
            <div className="font-serif-brand font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Our Foundational Principle: Low RPM Milling</span>
            </div>
            <p className="text-xs text-stone-600 leading-normal">
              We engineered a calibrated cold-milling workflow operating at under 400 RPM. By keeping ambient temperatures cool, zero essential oils escape. The result is pure, vibrant, living spice powders that awaken your senses the second you open the pouch.
            </p>
          </div>

          <p>
            From the fertile soils of Guntur and Warangal to the finger-turmeric fields of Nizamabad, we source directly from trusted farming clusters. We never cut corners with spent spice waste, artificial polish, or Sudan dye adulterants.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
          <div className="p-3 bg-white rounded-2xl border border-[#E8DEC9]">
            <div className="font-bold text-stone-900 font-serif-brand text-lg">100%</div>
            <div className="text-stone-500 text-[10px]">Natural Pigments</div>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-[#E8DEC9]">
            <div className="font-bold text-stone-900 font-serif-brand text-lg">&lt; 32°C</div>
            <div className="text-stone-500 text-[10px]">Cold Milling Process</div>
          </div>
          <div className="p-3 bg-white rounded-2xl border border-[#E8DEC9]">
            <div className="font-bold text-stone-900 font-serif-brand text-lg">Zero</div>
            <div className="text-stone-500 text-[10px]">Artificial Additives</div>
          </div>
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="bg-[#1C1917] hover:bg-black text-white px-8 py-2.5 rounded-full text-xs font-semibold shadow-md transition-all"
          >
            Explore Our Spices
          </button>
        </div>

      </div>
    </div>
  );
}
