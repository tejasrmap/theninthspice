import React from 'react';
import { MapPin, Sun, Sparkles, CheckCircle2 } from 'lucide-react';

export default function FarmShowcase() {
  const farmStories = [
    {
      title: "Guntur Sun-Drying Yards",
      location: "Guntur District, Andhra Pradesh",
      crop: "Stemless Red Chillies",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
      caption: "Handpicked whole chillies sun-drying under the Andhra sun on clean cotton tarpaulins. Zero chemical color enhancers or artificial ripening agents."
    },
    {
      title: "Nizamabad Turmeric Harvest",
      location: "Nizamabad Belt, Andhra Pradesh",
      crop: "Curcuma Longa Rhizomes",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      caption: "Single-origin finger turmeric lifted from mineral-dense black soil, yielding a certified natural curcumin content exceeding 4.5%."
    },
    {
      title: "Sustainable Generational Soil",
      location: "East Godavari & Krishna Basin",
      crop: "Eco-Agricultural Practices",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      caption: "Grown in partnership with generational farmer clusters committed to natural soil fertility and zero toxic pesticide runoffs."
    }
  ];

  return (
    <section id="farms" className="py-16 lg:py-20 bg-[#FAF7F2] border-b border-[#EAE1D5] w-full relative overflow-hidden">
      {/* Background spice texture */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=80')`
        }}
      />

      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-wider uppercase text-[#B93822]">
              <MapPin className="w-3.5 h-3.5" />
              <span>Andhra Pradesh Terroir</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl font-semibold text-stone-900">
              Mirchi &amp; Turmeric Farm Origins
            </h2>
          </div>
          <p className="text-xs sm:text-[13px] text-stone-600 max-w-md leading-relaxed">
            Authentic flavour begins with honest soil and natural sunlight. A look at the harvest yards and agricultural clusters where THE NINTH SPICE™ is born.
          </p>
        </div>

        {/* 3-Card Farm Photo Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {farmStories.map((farm, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE1D5] shadow-2xs hover:shadow-sm transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative h-52 sm:h-56 overflow-hidden bg-stone-100">
                  <img
                    src={farm.image}
                    alt={farm.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#FCFAF7]/95 backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-stone-800 shadow-2xs border border-stone-200/50">
                    {farm.crop}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-2">
                  <div className="text-[11px] font-mono text-[#B93822] flex items-center gap-1 font-semibold">
                    <MapPin className="w-3 h-3" />
                    <span>{farm.location}</span>
                  </div>

                  <h3 className="font-serif-brand text-base sm:text-lg font-semibold text-stone-900">
                    {farm.title}
                  </h3>

                  <p className="text-xs text-stone-600 leading-relaxed font-normal">
                    {farm.caption}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F0E9DF] flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>Harvest Batch 2026</span>
                  <span className="text-emerald-700 font-semibold">Verified Pure</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Terroir & Origin Metrics Strip */}
        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#EAE1D5] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-[10px] font-mono uppercase text-[#B93822] font-semibold">Terroir Coordinates</div>
            <div className="font-serif-brand text-sm sm:text-base font-semibold text-stone-900 mt-0.5">Guntur &amp; Nizamabad</div>
            <div className="text-[11px] text-stone-500">16.3°N • 18.6°N</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-amber-700 font-semibold">Solar Curing</div>
            <div className="font-serif-brand text-sm sm:text-base font-semibold text-stone-900 mt-0.5">14 Days Sun-Dried</div>
            <div className="text-[11px] text-stone-500">Clean cotton tarpaulins</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-emerald-700 font-semibold">Chemical Purity</div>
            <div className="font-serif-brand text-sm sm:text-base font-semibold text-stone-900 mt-0.5">0.00% Sudan Dyes</div>
            <div className="text-[11px] text-stone-500">Zero artificial colors</div>
          </div>
          <div>
            <div className="text-[10px] font-mono uppercase text-stone-600 font-semibold">Packaging Terroir</div>
            <div className="font-serif-brand text-sm sm:text-base font-semibold text-stone-900 mt-0.5">Visakhapatnam AP</div>
            <div className="text-[11px] text-stone-500">Aroma-lock sealed</div>
          </div>
        </div>

      </div>
    </section>
  );
}
