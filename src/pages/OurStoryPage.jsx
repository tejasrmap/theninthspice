import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Heart, ShieldCheck, Users, Award, ArrowRight, Sun, Leaf } from 'lucide-react';

export default function OurStoryPage() {
  const farmGallery = [
    {
      title: "Guntur Sun-Drying Yards",
      location: "Guntur District, Andhra Pradesh",
      crop: "Stemless Red Chillies",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
      description: "Generations of farmers spreading ripe crimson chillies across clean cotton tarpaulins under the intense Deccan sun. No artificial drying ovens or chemical dyes."
    },
    {
      title: "Nizamabad Turmeric Harvest",
      location: "Nizamabad Region, Andhra Pradesh",
      crop: "Curcuma Longa Rhizomes",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      description: "Harvested from mineral-rich black cotton clay, yielding naturally vibrant golden rhizomes with certified curcumin content exceeding 4.5%."
    },
    {
      title: "East Godavari Generational Soil",
      location: "Krishna & Godavari Basin",
      crop: "Sustainable Agriculture",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      description: "Cultivated in fertile alluvial river basins by family-run farm clusters practicing natural crop rotation and pesticide-conscious agriculture."
    }
  ];

  return (
    <div className="w-full py-8 sm:py-12 bg-[#FAF7F2] space-y-12">
      
      {/* Top Hero Banner */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10">
        <div className="bg-[#F5EDE1] rounded-3xl p-6 sm:p-10 border border-[#EAE1D5] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl space-y-2.5">
            <div className="flex items-center gap-2 text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              <Link to="/" className="text-stone-500 hover:text-black">Home</Link>
              <span>/</span>
              <span>Our Story &amp; Farms</span>
            </div>

            <h1 className="font-serif-brand text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1C1917] leading-tight">
              Flavour Born From Andhra Soil &amp; Pure Sunshine
            </h1>

            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed font-normal">
              Founded under Kundrapu Ventures in Visakhapatnam, THE NINTH SPICE™ was born from an obsession with the intoxicating aroma and honest vibrancy of traditional Andhra farm spices.
            </p>
          </div>
        </div>
      </div>

      {/* Real Farm Photos Showcase */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="space-y-1">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              Direct From The Fields
            </span>
            <h2 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900">
              Generational Andhra Farm Terroir
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-md leading-relaxed">
            Every batch of our chilli and turmeric can be traced back to these regional farming yards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {farmGallery.map((farm, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden border border-[#EAE1D5] shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-52 sm:h-56 relative overflow-hidden bg-stone-100">
                  <img 
                    src={farm.image} 
                    alt={farm.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#FCFAF7]/95 px-2.5 py-1 rounded-full text-[10px] font-mono font-medium text-stone-800 border border-stone-200/50">
                    {farm.crop}
                  </div>
                </div>

                <div className="p-5 space-y-1.5">
                  <div className="flex items-center gap-1 text-[11px] font-mono text-[#B93822] font-semibold">
                    <MapPin className="w-3 h-3" />
                    <span>{farm.location}</span>
                  </div>
                  <h3 className="font-serif-brand text-base font-semibold text-stone-900">
                    {farm.title}
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-normal pt-1">
                    {farm.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#F0E9DF] flex items-center justify-between text-[11px] text-stone-400 font-mono">
                  <span>Sun Cured</span>
                  <span className="text-emerald-700 font-semibold">100% Traceable</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Narrative */}
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 space-y-10">
        
        {/* Narrative Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-[#EAE1D5]">
          <div className="lg:col-span-7 space-y-3">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#B93822]">
              Our Heritage Promise
            </span>
            <h2 className="font-serif-brand text-lg sm:text-xl font-semibold text-stone-900">
              Why Traditional Home Spices Tasted So Profoundly Different
            </h2>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
              Anyone who grew up in Andhra Pradesh remembers the unmistakable sensory aroma of freshly hand-stemmed chillies and turmeric. A single spoon bloomed with fragrant warmth, filling the entire kitchen before the curry even hit the flame.
            </p>
            <p className="text-xs sm:text-[13px] text-stone-600 leading-relaxed">
              Mass industrial packets often taste flat and burnt because high-speed commercial grinding destroys heat-sensitive volatile oils. We choose a gentle, slow approach that traps the living aromatic terpenes and natural pigments inside every micro-particle.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl p-6 border border-[#EAE1D5] space-y-4">
            <div className="font-serif-brand font-semibold text-sm sm:text-base text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Purity Standard</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center pt-2">
              <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5]">
                <div className="font-serif-brand font-bold text-base text-[#B93822]">0.00%</div>
                <div className="text-[10px] text-stone-500 font-medium mt-0.5">Sudan Dyes</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5]">
                <div className="font-serif-brand font-bold text-base text-emerald-700">100%</div>
                <div className="text-[10px] text-stone-500 font-medium mt-0.5">Andhra Sourced</div>
              </div>
              <div className="p-2.5 rounded-xl bg-white border border-[#EAE1D5]">
                <div className="font-serif-brand font-bold text-base text-amber-700">&gt; 4.5%</div>
                <div className="text-[10px] text-stone-500 font-medium mt-0.5">Curcumin</div>
              </div>
            </div>

            <p className="text-[11px] text-stone-500 leading-relaxed pt-1">
              Every batch is hermetically sealed in our Paravada facility within 60 minutes of gentle milling to lock in freshness.
            </p>
          </div>
        </div>

        {/* Corporate Transparency */}
        <div className="p-6 rounded-2xl bg-[#F5EDE1] border border-[#EAE1D5] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center md:text-left">
            <span className="font-mono text-stone-400 font-semibold text-[10px] uppercase">Corporate Governance</span>
            <div className="font-serif-brand font-semibold text-sm text-stone-900">Kundrapu Ventures Private Limited</div>
            <div className="text-xs text-stone-500">Door No 7-58/1, Paravada, Visakhapatnam AP 531021</div>
          </div>

          <Link
            to="/shop"
            className="bg-[#1C1917] hover:bg-black text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-xs shrink-0 transition-transform active:scale-95 flex items-center gap-1.5"
          >
            <span>Explore The Pantry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>

    </div>
  );
}
