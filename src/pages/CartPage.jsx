import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Truck, ShieldCheck, Tag } from 'lucide-react';

export default function CartPage({ cart, updateQuantity, removeItem, onProceedCheckout, lang, translations }) {
  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [promoSuccess, setPromoSuccess] = useState('');

  const t = translations[lang];

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
    <div className="w-full py-10 sm:py-14">
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-10">
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C23321]">
            <Link to="/" className="text-stone-500 hover:text-black">Home</Link>
            <span>/</span>
            <span>Your Spice Bag</span>
          </div>
          <h1 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#1C1917]">
            Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)} Items)
          </h1>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#E8DEC9] space-y-4 max-w-lg mx-auto">
            <div className="w-20 h-20 rounded-full bg-[#FAF6EF] flex items-center justify-center text-3xl mx-auto border border-[#E8DEC9]">
              🌶️
            </div>
            <h3 className="font-serif-brand font-bold text-2xl text-stone-900">Your Bag is Empty</h3>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              You haven't added any spices yet. Explore our cold-milled Red Chilli and Turmeric powders and experience authentic flavor.
            </p>
            <div className="pt-2">
              <Link
                to="/shop"
                className="inline-block bg-[#C23321] hover:bg-[#A32819] text-white px-8 py-3 rounded-full text-xs font-semibold shadow-md"
              >
                Explore Spices Catalog
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Items Column */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Dynamic Free Shipping Bar */}
              <div className="p-4 rounded-2xl bg-white border border-[#E8DEC9] space-y-2 text-xs">
                <div className="flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-2 text-stone-800">
                    <Truck className="w-4 h-4 text-[#C23321]" />
                    {subtotal >= freeShippingThreshold 
                      ? <span className="text-emerald-700 font-bold">🎉 FREE Delivery Unlocked across India!</span>
                      : <span>Add <span className="text-[#C23321] font-bold">₹{remainingForFreeShipping}</span> more for FREE Delivery</span>}
                  </span>
                  <span className="font-mono text-stone-500">Threshold: ₹599</span>
                </div>
                <div className="w-full bg-stone-200 h-2.5 rounded-full overflow-hidden flex">
                  <div
                    className="bg-[#C23321] h-full transition-all duration-500 rounded-full"
                    style={{ width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%` }}
                  ></div>
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-3xl border border-[#E8DEC9] divide-y divide-[#E8DEC9] overflow-hidden">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="w-16 h-18 rounded-2xl overflow-hidden bg-stone-100 flex items-center justify-center shrink-0 border border-[#EAE1D5]">
                        <img
                          src={item.id.includes('chilli') ? '/red-chilli-powder.jpg' : '/turmeric-powder.jpg'}
                          alt={item.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="font-serif-brand font-bold text-base text-stone-900">
                          {item.name}
                        </h4>
                        <div className="text-xs text-stone-500 font-mono mt-0.5">
                          Pack Size: {item.size} • ₹{item.price} each
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-100">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-[#FAF6EF] border border-[#E8DEC9] rounded-xl p-1.5">
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="p-1 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-200"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold font-mono">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="p-1 text-stone-600 hover:text-stone-900 rounded-lg hover:bg-stone-200"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for this line */}
                      <div className="text-base font-bold font-serif-brand text-stone-900 w-20 text-right">
                        ₹{item.price * item.quantity}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-stone-400 hover:text-red-600 p-2 transition-colors"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#E8DEC9] shadow-sm space-y-6">
              <h3 className="font-serif-brand font-bold text-xl text-[#1C1917] border-b border-[#E8DEC9] pb-4">
                Order Summary
              </h3>

              {/* Promo Code Input */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    placeholder="Coupon: WELCOME10"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full bg-[#FAF6EF] border border-[#E8DEC9] rounded-xl pl-8 pr-3 py-2 text-xs uppercase font-mono tracking-wider focus:outline-none focus:border-stone-800"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#1C1917] text-white px-4 py-2 rounded-xl text-xs font-semibold hover:bg-black transition-colors"
                >
                  Apply
                </button>
              </form>

              {promoError && <div className="text-[11px] text-red-600">{promoError}</div>}
              {promoSuccess && <div className="text-[11px] text-emerald-700 font-semibold">{promoSuccess}</div>}

              {/* Financial Breakdown */}
              <div className="space-y-2.5 text-xs text-stone-600 border-t border-[#E8DEC9] pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold">₹{subtotal}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount ({discountPercent}%)</span>
                    <span className="font-mono">- ₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Standard Domestic Shipping</span>
                  <span className="font-mono">
                    {shippingCost === 0 ? <span className="text-emerald-700 font-bold">FREE</span> : `₹${shippingCost}`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-stone-900 border-t border-[#E8DEC9] pt-3">
                  <span className="font-serif-brand">Grand Total</span>
                  <span className="font-mono text-[#C23321] text-xl">₹{grandTotal}</span>
                </div>
              </div>

              {/* Checkout Trigger */}
              <button
                onClick={() => onProceedCheckout({ subtotal, discountAmount, shippingCost, grandTotal })}
                className="w-full bg-[#C23321] hover:bg-[#A32819] text-white py-4 rounded-full text-xs font-bold shadow-lg shadow-red-900/15 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Proceed to Instant Checkout</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 font-medium text-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Instant UPI, Cards &amp; NetBanking Secured Checkout</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

