import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cart, 
  updateQuantity, 
  removeItem, 
  onProceedCheckout, 
  lang, 
  translations 
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  if (!isOpen) return null;

  const t = translations?.[lang] || {};

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 599;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 60;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  const applyPromo = (e) => {
    e.preventDefault();
    const code = promoCode.trim().toUpperCase();
    if (code === 'WELCOME10') {
      setDiscountPercent(10);
      setPromoSuccess('10% Welcome Discount Applied!');
      setPromoError('');
    } else if (code === 'SPICE15' && subtotal >= 600) {
      setDiscountPercent(15);
      setPromoSuccess('15% Spice Circle Discount Applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "WELCOME10" for 10% off.');
      setPromoSuccess('');
    }
  };

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs transition-opacity duration-300"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-[#FAF5EC] w-full max-w-md h-full shadow-2xl border-l border-[#EAE1D5] flex flex-col justify-between p-5 sm:p-6 overflow-hidden animate-drawer"
      >
        
        {/* Cart Header */}
        <div className="space-y-3">
          <div className="flex items-center justify-between border-b border-[#EAE1D5] pb-3">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#9C3A1A]" />
              <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-[#2C1E18]">
                Your Spice Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white hover:bg-stone-200 text-stone-600 hover:text-black transition-colors cursor-pointer border border-[#EAE1D5]"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dynamic Free Shipping Progress Bar */}
          <div className="p-3 rounded-xl bg-white border border-[#EAE1D5] space-y-1.5 text-xs shadow-2xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-[#2C1E18]">
                <Truck className="w-3.5 h-3.5 text-[#9C3A1A]" />
                {subtotal >= freeShippingThreshold 
                  ? <span className="text-emerald-700 font-bold">🎉 FREE Express Delivery across India!</span>
                  : <span>Add <span className="text-[#9C3A1A] font-bold font-mono">₹{remainingForFreeShipping}</span> more for Free Delivery</span>}
              </span>
              <span className="font-mono text-stone-400 text-[10px]">Goal: ₹599</span>
            </div>
            <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden flex border border-stone-200">
              <div
                className="bg-[#9C3A1A] h-full transition-all duration-500 ease-out rounded-full"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-3 space-y-2.5 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl border border-[#EAE1D5]">
                🌶️
              </div>
              <div className="space-y-1">
                <h4 className="font-serif-brand font-semibold text-[#2C1E18] text-base">Your Bag is Empty</h4>
                <p className="text-xs text-stone-500 max-w-xs">
                  Experience true single-origin Andhra spice powders slow stone-ground for rich kitchen aroma.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 bg-[#9C3A1A] text-white px-5 py-2 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xs hover:bg-[#2C1E18] transition-all cursor-pointer"
              >
                Explore Spices
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
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
                  <div className="text-[11px] text-stone-500 font-mono mt-0.5">
                    Pack: {item.size} • <span className="text-[#2C1E18] font-bold">₹{item.price}</span>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex items-center border border-[#EAE1D5] rounded-full bg-[#FAF5EC] px-2 py-0.5 text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                        className="text-stone-500 hover:text-black p-0.5 cursor-pointer"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-mono font-bold px-2 text-[11px] text-[#2C1E18]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                        className="text-stone-500 hover:text-black p-0.5 cursor-pointer"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.id, item.size)}
                      className="text-stone-400 hover:text-red-600 transition-colors p-1 cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-mono font-bold text-sm text-[#2C1E18]">
                    ₹{item.price * item.quantity}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Actions */}
        {cart.length > 0 && (
          <div className="pt-3 border-t border-[#EAE1D5] space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={applyPromo} className="space-y-1">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3 h-3 text-stone-400 absolute left-2.5 top-2.5" />
                  <input
                    type="text"
                    placeholder="Coupon (e.g. WELCOME10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-white border border-[#EAE1D5] rounded-lg pl-7 pr-2.5 py-1.5 text-xs text-[#2C1E18] font-mono focus:outline-none focus:border-[#2C1E18]"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#2C1E18] hover:bg-[#9C3A1A] text-white px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>

              {promoSuccess && <div className="text-[10px] text-emerald-700 font-medium">{promoSuccess}</div>}
              {promoError && <div className="text-[10px] text-red-600 font-medium">{promoError}</div>}
            </form>

            {/* Price Calculations */}
            <div className="space-y-1 text-xs text-stone-600 pt-1">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-mono font-semibold text-[#2C1E18]">₹{subtotal}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700">
                  <span>Discount ({discountPercent}%):</span>
                  <span className="font-mono font-semibold">-₹{discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Pan-India Delivery:</span>
                <span className="font-mono font-semibold">
                  {shippingCost === 0 ? <span className="text-emerald-700">FREE</span> : `₹${shippingCost}`}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-[#2C1E18] border-t border-[#EAE1D5] pt-2">
                <span className="font-serif-brand">Total Payable:</span>
                <span className="font-mono text-base text-[#9C3A1A]">₹{grandTotal}</span>
              </div>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={() => onProceedCheckout({ subtotal, discountAmount, shippingCost, grandTotal, cart })}
              className="w-full bg-[#9C3A1A] hover:bg-[#2C1E18] text-white py-3 rounded-full text-xs font-medium tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
