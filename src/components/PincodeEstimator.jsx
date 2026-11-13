import React, { useState } from 'react';
import { Truck, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { fetchPincodeDetails } from '../utils/pincode';

export default function PincodeEstimator() {
  const [pin, setPin] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCheck = async (e) => {
    e.preventDefault();
    if (pin.length !== 6) {
      setError('Please enter a valid 6-digit Indian PIN code.');
      setResult(null);
      return;
    }

    setLoading(true);
    setError('');
    const details = await fetchPincodeDetails(pin);
    setLoading(false);

    if (details) {
      setResult(details);
      setError('');
    } else {
      setError('Serviceable via India Post Express. Delivery in 3-5 days.');
      setResult({ city: 'India', state: 'Pan-India Express' });
    }
  };

  return (
    <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#EAE1D5] space-y-3 shadow-2xs">
      <div className="flex items-center gap-2 text-xs font-semibold text-[#2C1E18]">
        <Truck className="w-4 h-4 text-[#9C3A1A]" />
        <span>Check Express Delivery Timeline</span>
      </div>

      <form onSubmit={handleCheck} className="flex gap-2">
        <input
          type="text"
          maxLength={6}
          value={pin}
          onChange={(e) => {
            setPin(e.target.value.replace(/\D/g, ''));
            if (error) setError('');
          }}
          placeholder="Enter 6-digit PIN code..."
          className="flex-1 bg-[#FAF5EC] border border-[#EAE1D5] rounded-xl px-3 py-2 text-xs text-[#2C1E18] focus:outline-none focus:border-[#9C3A1A] font-mono"
        />
        <button
          type="submit"
          disabled={loading || pin.length < 6}
          className="bg-[#2C1E18] hover:bg-black disabled:opacity-50 text-white px-4 py-2 rounded-xl text-xs font-medium transition-all shrink-0 cursor-pointer"
        >
          {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Check'}
        </button>
      </form>

      {result && (
        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-[11px] flex items-start gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold">Express Delivery to {result.city}, {result.state}</div>
            <div className="text-emerald-700 text-[10px]">Estimated delivery: 2–3 business days. Free shipping above ₹599.</div>
          </div>
        </div>
      )}

      {error && !result && (
        <div className="text-[11px] text-[#9C3A1A] flex items-center gap-1.5 font-medium">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
