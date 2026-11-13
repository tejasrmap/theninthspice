import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ShieldCheck, QrCode, CreditCard, Banknote, ArrowRight, Loader2 } from 'lucide-react';
import { fetchPincodeDetails } from '../utils/pincode';

export default function CheckoutModal({ isOpen, onClose, orderSummary, onOrderSuccess }) {
  const [rendered, setRendered] = useState(isOpen);
  const [animating, setAnimating] = useState(false);
  const [step, setStep] = useState('shipping');
  const [shippingData, setShippingData] = useState({
    name: 'Srinivas Rao',
    phone: '9848012345',
    email: 'srinivas@example.com',
    pincode: '530001',
    address: 'Plot 42, Beach Road, MVP Colony',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh'
  });
  const [paymentMethod, setPaymentMethod] = useState('upi');

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
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSmoothClose = () => {
    setAnimating(false);
    setTimeout(() => {
      onClose();
    }, 350);
  };

  if (!rendered) return null;

  const handlePlaceOrder = () => {
    setStep('success');
    onOrderSuccess();
  };

  const orderId = "TNS-2026-" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div 
      onClick={handleSmoothClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-opacity duration-350 ease-out ${
        animating ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#FCFAF7] w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl border border-stone-200 p-6 sm:p-8 relative transform transition-all duration-350 ease-out ${
          animating ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-4'
        }`}
      >
        
        <button
          onClick={handleSmoothClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-stone-100 text-stone-600 hover:text-stone-900 hover:bg-stone-200 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'shipping' && (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822] bg-red-50/80 px-2.5 py-0.5 rounded-full border border-red-100">
                Step 1 of 2
              </span>
              <h3 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900 mt-1.5">
                Shipping Destination
              </h3>
              <p className="text-xs text-stone-500">Orders are dispatched within 24 hours from Visakhapatnam.</p>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    value={shippingData.name}
                    onChange={(e) => setShippingData({...shippingData, name: e.target.value})}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">Mobile Phone (for tracking SMS)</label>
                  <input
                    type="tel"
                    value={shippingData.phone}
                    onChange={(e) => setShippingData({...shippingData, phone: e.target.value})}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Email Address (for invoice)</label>
                <input
                  type="email"
                  value={shippingData.email}
                  onChange={(e) => setShippingData({...shippingData, email: e.target.value})}
                  className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                />
              </div>

              <div>
                <label className="block text-stone-600 font-medium mb-1">Street Address, Flat / House No.</label>
                <input
                  type="text"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({...shippingData, address: e.target.value})}
                  className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="block text-stone-600 font-medium mb-1">PIN Code</label>
                  <input
                    type="text"
                    maxLength={6}
                    value={shippingData.pincode}
                    onChange={async (e) => {
                      const val = e.target.value.replace(/\D/g, '');
                      setShippingData(prev => ({ ...prev, pincode: val }));
                      if (val.length === 6) {
                        const details = await fetchPincodeDetails(val);
                        if (details) {
                          setShippingData(prev => ({
                            ...prev,
                            pincode: val,
                            city: details.city || prev.city,
                            state: details.state || prev.state
                          }));
                        }
                      }
                    }}
                    placeholder="530001"
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors font-mono"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">City</label>
                  <input
                    type="text"
                    value={shippingData.city}
                    onChange={(e) => setShippingData({...shippingData, city: e.target.value})}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-stone-600 font-medium mb-1">State</label>
                  <input
                    type="text"
                    value={shippingData.state}
                    onChange={(e) => setShippingData({...shippingData, state: e.target.value})}
                    className="w-full bg-white border border-stone-200 rounded-xl px-3 py-2 text-stone-900 focus:outline-none focus:border-stone-800 transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 flex justify-between items-center text-xs">
              <span className="text-stone-600 font-medium">Payable Amount:</span>
              <span className="font-mono text-lg font-bold text-[#C23321]">₹{orderSummary.grandTotal}</span>
            </div>

            <button
              onClick={() => setStep('payment')}
              className="w-full bg-[#1C1917] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md active:scale-95 transition-all flex items-center justify-center gap-1.5"
            >
              <span>Continue to Payment Method</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {step === 'payment' && (
          <div className="space-y-5">
            <div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#C23321] bg-red-50 px-2 py-0.5 rounded-full border border-red-100">
                Step 2 of 2
              </span>
              <h3 className="font-serif-brand text-2xl font-bold text-stone-900 mt-1.5">
                Choose Payment Method
              </h3>
              <p className="text-xs text-stone-500">Encrypted 256-bit bank-grade SSL processing.</p>
            </div>

            {/* Payment Options */}
            <div className="space-y-2.5 text-xs">
              <button
                onClick={() => setPaymentMethod('upi')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'upi' ? 'border-2 border-stone-900 bg-white shadow-xs' : 'border-stone-200 bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                    UPI
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Instant UPI (GPay, PhonePe, Paytm, CRED)</div>
                    <div className="text-[11px] text-stone-500">Zero surcharge • Instant confirmation</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'upi'} readOnly className="accent-stone-900" />
              </button>

              <button
                onClick={() => setPaymentMethod('cards')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'cards' ? 'border-2 border-stone-900 bg-white shadow-xs' : 'border-stone-200 bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Debit / Credit Card &amp; NetBanking</div>
                    <div className="text-[11px] text-stone-500">RuPay, Visa, Mastercard, SBI, HDFC, ICICI</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'cards'} readOnly className="accent-stone-900" />
              </button>

              <button
                onClick={() => setPaymentMethod('cod')}
                className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                  paymentMethod === 'cod' ? 'border-2 border-stone-900 bg-white shadow-xs' : 'border-stone-200 bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-900">Cash on Delivery (COD)</div>
                    <div className="text-[11px] text-stone-500">Pay upon parcel arrival</div>
                  </div>
                </div>
                <input type="radio" checked={paymentMethod === 'cod'} readOnly className="accent-stone-900" />
              </button>
            </div>

            {/* Total Summary */}
            <div className="p-4 bg-white rounded-2xl border border-stone-200 space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Shipping To:</span>
                <span className="font-medium text-stone-800">{shippingData.city}, {shippingData.pincode}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-stone-900 border-t border-stone-100 pt-2">
                <span>Total Amount:</span>
                <span className="font-mono text-[#C23321] text-lg">₹{orderSummary.grandTotal}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setStep('shipping')}
                className="w-1/3 border border-stone-200 bg-white hover:bg-stone-100 text-stone-800 py-3.5 rounded-full text-xs font-semibold transition-colors"
              >
                Back
              </button>
              <button
                onClick={handlePlaceOrder}
                className="w-2/3 bg-[#1C1917] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Confirm &amp; Place Order</span>
              </button>
            </div>
          </div>
        )}

        {step === 'success' && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Order Confirmed
              </span>
              <h3 className="font-serif-brand text-2xl font-bold text-stone-900 pt-2">
                Thank You, {shippingData.name}!
              </h3>
              <p className="text-xs text-stone-500">
                Your spice pack will be packed fresh and sealed with care.
              </p>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-stone-200 text-xs space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-stone-500">Order ID:</span>
                <span className="font-mono font-bold text-stone-900">{orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Dispatch Location:</span>
                <span className="font-medium text-stone-800">Visakhapatnam AP (Facility #1715)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">Estimated Delivery:</span>
                <span className="font-medium text-emerald-700">2 - 4 Business Days</span>
              </div>
              <div className="flex justify-between border-t border-stone-100 pt-2 font-bold">
                <span>Amount Paid:</span>
                <span className="font-mono text-[#C23321]">₹{orderSummary.grandTotal}</span>
              </div>
            </div>

            <button
              onClick={handleSmoothClose}
              className="w-full bg-[#1C1917] hover:bg-black text-white py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-md transition-all active:scale-95"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
