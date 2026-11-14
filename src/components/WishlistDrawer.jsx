import React from 'react';
import { Link } from 'react-router-dom';
import { X, Heart, Plus, Trash2 } from 'lucide-react';

export default function WishlistDrawer({ isOpen, onClose, wishlist, onAddToCart, onRemoveWishlist }) {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs transition-opacity duration-300"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#FAF5EC] h-full shadow-2xl border-l border-[#EAE1D5] flex flex-col p-5 sm:p-6 space-y-4 animate-drawer"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EAE1D5] pb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-[#9C3A1A] fill-[#9C3A1A]" />
            <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-[#2C1E18]">
              Your Wishlist ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white hover:bg-stone-200 text-stone-600 hover:text-black transition-colors cursor-pointer border border-[#EAE1D5]"
            aria-label="Close wishlist"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto space-y-2.5">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl border border-[#EAE1D5]">
                🤍
              </div>
              <h4 className="font-serif-brand font-semibold text-[#2C1E18] text-base">Your Wishlist is Empty</h4>
              <p className="text-xs text-stone-500 max-w-xs">
                Tap the heart on any spice to save it for your next cooking session.
              </p>
            </div>
          ) : (
            wishlist.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-3 border border-[#EAE1D5] flex items-center justify-between gap-3 shadow-2xs"
              >
                <Link
                  to={`/product/${item.id}`}
                  onClick={onClose}
                  className="w-14 h-16 rounded-lg overflow-hidden bg-stone-100 flex items-center justify-center shrink-0 border border-[#EAE1D5]"
                >
                  <img
                    src={item.image || (item.id.includes('chilli') ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg')}
                    alt={item.name}
                    className="w-full h-full object-contain hover:scale-105 transition-transform"
                  />
                </Link>

                <div className="flex-1 min-w-0">
                  <Link
                    to={`/product/${item.id}`}
                    onClick={onClose}
                    className="block font-serif-brand font-semibold text-xs text-[#2C1E18] hover:text-[#9C3A1A] transition-colors truncate"
                  >
                    {item.name}
                  </Link>
                  <div className="text-[11px] text-[#9C3A1A] font-semibold mt-0.5">
                    From ₹{item.variants[0].price}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      onAddToCart(item, item.variants[0]);
                      onRemoveWishlist(item.id);
                    }}
                    className="bg-[#2C1E18] hover:bg-[#9C3A1A] text-white px-3 py-1.5 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Add</span>
                  </button>
                  <button
                    onClick={() => onRemoveWishlist(item.id)}
                    className="p-1.5 text-stone-400 hover:text-red-600 transition-colors cursor-pointer"
                    title="Remove from wishlist"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
