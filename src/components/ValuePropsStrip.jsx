import React from 'react';
import { Sparkles, ShieldCheck, Leaf, Truck } from 'lucide-react';

export default function ValuePropsStrip() {
  const props = [
    {
      icon: <Leaf className="w-3.5 h-3.5 text-emerald-800" />,
      bg: "bg-emerald-50 border-emerald-100",
      title: "Farm-Fresh Flavors",
      description: "Harvested directly from local Andhra farm clusters in Guntur and Nizamabad for authentic peak terroir taste."
    },
    {
      icon: <ShieldCheck className="w-3.5 h-3.5 text-[#9C3A1A]" />,
      bg: "bg-red-50 border-red-100",
      title: "Quality You Can Taste",
      description: "Tested for zero Sudan red dyes, zero lead chromate, and zero synthetic food enhancers. 100% pure produce."
    },
    {
      icon: <Sparkles className="w-3.5 h-3.5 text-amber-700" />,
      bg: "bg-amber-50 border-amber-100",
      title: "Slow Stone-Ground Purity",
      description: "Processed at calibrated ambient temperatures (< 32°C) so the heat-sensitive natural volatile aroma oils stay locked in."
    },
    {
      icon: <Truck className="w-3.5 h-3.5 text-[#2C1E18]" />,
      bg: "bg-stone-100 border-stone-200",
      title: "Pan-India Express Dispatch",
      description: "Complimentary shipping on orders above ₹599. Sealed airtight in heavy multi-layer pouches for maximum shelf freshness."
    }
  ];

  return (
    <section className="bg-white py-4 sm:py-5 border-b border-[#EAE1D5] w-full">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {props.map((p, idx) => (
          <div key={idx} className="flex items-start gap-3 group">
            <div className={`w-8 h-8 rounded-lg ${p.bg} border flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-105 transition-transform`}>
              {p.icon}
            </div>
            <div className="space-y-0.5">
              <div className="font-serif-brand font-semibold text-xs text-[#2C1E18]">
                {p.title}
              </div>
              <p className="text-[11px] text-stone-500 leading-relaxed font-normal">
                {p.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
