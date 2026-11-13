import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, MapPin, ChefHat, HeartPulse } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [rendered, setRendered] = useState(!!product);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (product) {
      setRendered(true);
      const frame = requestAnimationFrame(() => {
        setAnimating(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setAnimating(false);
      const timer = setTimeout(() => {
        setRendered(false);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [product]);

  const handleSmoothClose = () => {
    setAnimating(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  if (!rendered || !product) return null;

  return (
    <div 
      onClick={handleSmoothClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-350 ease-out ${
        animating ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#FCFAF7] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 space-y-6 relative transform transition-all duration-350 ease-out ${
          animating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        
        {/* Close Button */}
        <button
          onClick={handleSmoothClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header with Product Image */}
        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="w-28 h-36 shrink-0 rounded-xl overflow-hidden bg-stone-900/5 p-1 border border-[#EAE1D5] flex items-center justify-center">
            <img
              src={product.image || (product.id.includes('chilli') ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#B93822] bg-red-50/80 px-2.5 py-0.5 rounded-full border border-red-100">
                Lab Specification &amp; Terroir
              </span>
              <span className="text-xs text-stone-400">•</span>
              <span className="text-xs font-mono text-stone-500">{product.harvestYear}</span>
            </div>

            <h2 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900">
              {product.name}
            </h2>
            <p className="text-xs text-stone-500 mt-1 italic">
              "{product.tastingNotes}"
            </p>
          </div>
        </div>

        {/* Terroir & Origin Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C23321] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-stone-800">Origin Terroir</div>
              <div className="text-stone-600 mt-0.5">{product.origin}</div>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-stone-200/80 flex items-start gap-3">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-stone-800">Quality Standard</div>
              <div className="text-stone-600 mt-0.5">100% Unadulterated Produce</div>
            </div>
          </div>
        </div>

        {/* Certified Features */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 font-mono">
            Lab-Certified Guarantees
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-white border border-stone-200/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-stone-700 leading-snug">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex items-center justify-between border-t border-stone-200/80">
          <div className="text-xs text-stone-500">
            Starting from <span className="font-bold text-stone-900 text-sm">₹{product.variants[0].price}</span> for {product.variants[0].size}
          </div>
          <button
            onClick={() => {
              onAddToCart(product, product.variants[0]);
              handleSmoothClose();
            }}
            className="bg-[#1C1917] hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold shadow-md transition-all active:scale-95"
          >
            Add 150g Pouch to Bag
          </button>
        </div>

      </div>
    </div>
  );
}
