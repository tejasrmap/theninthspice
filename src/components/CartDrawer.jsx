import React, { useState, useEffect } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Truck, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function CartDrawer({ isOpen, onClose, cart, updateQuantity, removeItem, onProceedCheckout, lang, translations }) {
  const [rendered, setRendered] = useState(isOpen);
  const [animating, setAnimating] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  useEffect(() => {
    if (isOpen) {
      setRendered(true);
      const frame = requestAnimationFrame(() => {
        setAnimating(true);
      });
      return () => cancelAnimationFrame(frame);
    } else {
      setAnimating(false);
      const timer = setTimeout(() => {
        setRendered(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSmoothClose = () => {
    setAnimating(false);
    setTimeout(() => {
      onClose();
    }, 400);
  };

  if (!rendered) return null;

  const t = translations[lang];

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
      setPromoSuccess('15% VIP Spice Circle Discount Applied!');
      setPromoError('');
    } else {
      setPromoError('Invalid coupon. Try "WELCOME10" for 10% off.');
      setPromoSuccess('');
    }
  };

  return (
    <div 
      onClick={handleSmoothClose}
      className={`fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm transition-opacity duration-400 ease-in-out ${
        animating ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#FCFAF7] w-full max-w-md h-full shadow-2xl border-l border-stone-200 flex flex-col justify-between p-6 overflow-hidden transform transition-transform duration-400 cubic-bezier(0.16, 1, 0.3, 1) ${
          animating ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        
        {/* Cart Header */}
        <div className="space-y-3.5">
          <div className="flex items-center justify-between border-b border-[#EAE1D5] pb-3.5">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-4 h-4 text-[#B93822]" />
              <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-stone-900">
                Your Spice Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h3>
            </div>
            <button
              onClick={handleSmoothClose}
              className="p-1.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-black transition-colors"
              aria-label="Close cart"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Dynamic Free Shipping Progress Bar with Smooth Width Transition */}
          <div className="p-3.5 rounded-2xl bg-white border border-stone-200/80 space-y-2 text-xs shadow-xs">
            <div className="flex items-center justify-between font-semibold">
              <span className="flex items-center gap-1.5 text-stone-700">
                <Truck className="w-4 h-4 text-[#C23321]" />
                {subtotal >= freeShippingThreshold 
                  ? <span className="text-emerald-700 font-bold">🎉 FREE Delivery Unlocked across India!</span>
                  : <span>Add <span className="text-[#C23321] font-bold">₹{remainingForFreeShipping}</span> more for FREE Delivery</span>}
              </span>
              <span className="font-mono text-stone-400 text-[11px]">Goal: ₹599</span>
            </div>
            <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden flex border border-stone-200/50">
              <div
                className="bg-[#C23321] h-full transition-all duration-700 ease-out rounded-full"
                style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto py-4 space-y-3 pr-1">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-2xl border border-stone-200">
                🌶️
              </div>
              <h4 className="font-serif-brand font-bold text-stone-800 text-lg">Your Bag is Empty</h4>
              <p className="text-xs text-stone-500 max-w-xs">
                Explore our pure Red Chilli and Turmeric powders and experience flavour beyond ordinary.
              </p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.id}-${item.size}`}
                className="bg-white rounded-2xl p-4 border border-stone-200/80 flex items-center justify-between gap-3 shadow-xs hover:border-stone-400 transition-all duration-300"
              >
                <div className="w-12 h-14 rounded-xl overflow-hidden bg-stone-100 flex items-center justify-center shrink-0 border border-[#EAE1D5]">
                  <img
                    src={item.id.includes('chilli') ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg'}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="font-serif-brand font-bold text-xs text-stone-900 truncate">
                    {item.name}
                  </h4>
                  <div className="text-[11px] text-stone-500 font-mono">
                    Pack: {item.size} • ₹{item.price} each
                  </div>
                  <div className="text-xs font-bold text-stone-900 mt-0.5">
                    ₹{item.price * item.quantity}
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1 bg-stone-50 border border-stone-200 rounded-xl p-1">
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                    className="p-1 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-5 text-center text-xs font-bold font-mono transition-transform active:scale-125">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                    className="p-1 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-200 transition-colors"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Remove button */}
                <button
                  onClick={() => removeItem(item.id, item.size)}
                  className="text-stone-400 hover:text-red-600 p-1 transition-colors hover:scale-110 active:scale-95"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Calculations */}
        {cart.length > 0 && (
          <div className="border-t border-stone-200/80 pt-4 space-y-3">
            
            {/* Promo Code Form */}
            <form onSubmit={applyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-2.5" />
                <input
                  type="text"
                  placeholder="Code: WELCOME10"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="w-full bg-white border border-stone-200 rounded-xl pl-8 pr-3 py-2 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-stone-800 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[#1C1917] hover:bg-black text-white px-4 py-2 rounded-xl text-xs font-semibold active:scale-95 transition-all"
              >
                Apply
              </button>
            </form>

            {promoError && <div className="text-[11px] text-red-600 transition-all">{promoError}</div>}
            {promoSuccess && <div className="text-[11px] text-emerald-700 font-semibold transition-all">{promoSuccess}</div>}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-mono font-medium">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Discount ({discountPercent}%)</span>
                  <span className="font-mono">- ₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Shipping Delivery</span>
                <span className="font-mono">
                  {shippingCost === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${shippingCost}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-stone-900 border-t border-stone-200 pt-2">
                <span className="font-serif-brand">Grand Total</span>
                <span className="font-mono text-[#C23321] text-lg">₹{grandTotal}</span>
              </div>
            </div>

            {/* Checkout CTA */}
            <button
              onClick={() => onProceedCheckout({ subtotal, discountAmount, shippingCost, grandTotal })}
              className="w-full bg-[#1C1917] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{t.checkout}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-stone-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Instant UPI, Cards &amp; NetBanking Secured Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
