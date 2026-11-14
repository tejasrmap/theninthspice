import React from 'react';
import { Link } from 'react-router-dom';
import { X, CheckCircle2, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';

export default function ProductModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-xs transition-opacity duration-300"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF5EC] w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-[#EAE1D5] p-5 sm:p-7 space-y-5 relative animate-modal"
      >
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-white text-stone-600 hover:text-black hover:bg-stone-200 transition-colors border border-[#EAE1D5] cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header with Product Image */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="w-24 h-32 shrink-0 rounded-xl overflow-hidden bg-white p-1 border border-[#EAE1D5] flex items-center justify-center hover:scale-105 transition-transform"
          >
            <img
              src={product.image || (product.id.includes('chilli') ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
              alt={product.name}
              className="w-full h-full object-contain"
            />
          </Link>
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-[10px] uppercase font-mono font-semibold tracking-wider text-[#9C3A1A] bg-white px-2 py-0.5 rounded-full border border-[#EAE1D5]">
                Lab Specification &amp; Terroir
              </span>
              <span className="text-xs font-mono text-stone-500">{product.harvestYear}</span>
            </div>

            <Link
              to={`/product/${product.id}`}
              onClick={onClose}
              className="block font-serif-brand text-base sm:text-lg font-semibold text-[#2C1E18] hover:text-[#9C3A1A] transition-colors"
            >
              {product.name}
            </Link>
            <p className="text-xs text-stone-500 italic">
              "{product.tastingNotes}"
            </p>
          </div>
        </div>

        {/* Terroir & Origin Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
          <div className="p-3 rounded-xl bg-white border border-[#EAE1D5] flex items-start gap-2.5">
            <MapPin className="w-3.5 h-3.5 text-[#9C3A1A] shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[#2C1E18]">Origin Terroir</div>
              <div className="text-stone-600 mt-0.5">{product.origin}</div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-white border border-[#EAE1D5] flex items-start gap-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
            <div>
              <div className="font-bold text-[#2C1E18]">Quality Standard</div>
              <div className="text-stone-600 mt-0.5">100% Unadulterated Produce</div>
            </div>
          </div>
        </div>

        {/* Certified Features */}
        <div className="space-y-1.5">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-600 font-mono">
            Lab-Certified Guarantees
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {product.features.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#EAE1D5]">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-stone-700 leading-snug text-[11px]">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button & Link to Full Dedicated Product Page */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EAE1D5]">
          <Link
            to={`/product/${product.id}`}
            onClick={onClose}
            className="text-xs text-[#9C3A1A] hover:text-[#2C1E18] font-semibold flex items-center gap-1.5"
          >
            <span>Open Individual Product Page</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
          
          <button
            onClick={() => {
              onAddToCart(product, product.variants[1]);
              onClose();
            }}
            className="bg-[#2C1E18] hover:bg-[#9C3A1A] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xs transition-all active:scale-95 cursor-pointer"
          >
            Add 250g Pouch (₹{product.variants[1].price})
          </button>
        </div>

      </div>
    </div>
  );
}
