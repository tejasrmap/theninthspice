import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FarmShowcase() {
  const farmStories = [
    {
      title: "Guntur Sun-Drying Yards",
      location: "Guntur District, Andhra Pradesh",
      crop: "Stemless Whole Red Chillies",
      image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
      caption: "Hand-harvested whole red chillies dehydrating naturally under the Deccan sun on clean cotton tarpaulins. Zero chemical color enhancers or diesel oven drying."
    },
    {
      title: "Nizamabad Black Soil Basin",
      location: "Nizamabad Agricultural Belt, AP",
      crop: "Curcuma Longa Finger Rhizomes",
      image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      caption: "Single-origin finger turmeric lifted from mineral-dense black clay soil, yielding naturally high bio-active curcumin content exceeding 4.5%."
    },
    {
      title: "Generational Farm Alliances",
      location: "East Godavari & Krishna Delta",
      crop: "Sustainable Soil Cultivation",
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
      caption: "Cultivated in fertile alluvial river basins in fair partnership with smallholder farmers practicing natural crop rotation and pesticide-conscious agriculture."
    }
  ];

  return (
    <section id="farms" className="py-6 sm:py-10 bg-[#F8F4EB] border-b border-[#E9DDC9] w-full relative overflow-hidden">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10 space-y-5">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[10px] font-mono tracking-[0.2em] uppercase text-[#A6261D] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Andhra Farm Terroir</span>
            </div>
            <h2 className="font-serif-brand text-xl sm:text-2xl text-[#24140F] font-medium">
              Where The Ninth Spice Originates
            </h2>
          </div>
          <p className="text-xs text-[#766B60] max-w-md leading-relaxed font-sans-brand">
            True culinary pungency and color originate in uncompromised agricultural soil. A transparent look at our harvesting grounds in Andhra Pradesh.
          </p>
        </div>

        {/* 3-Card Sourcing Landscape Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {farmStories.map((farm, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-xl overflow-hidden border border-[#E9DDC9] shadow-2xs hover:shadow-xs transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={farm.image}
                    alt={farm.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#24140F]/85 backdrop-blur-xs text-[#F8F4EB] text-[9.5px] font-mono px-2 py-0.5 rounded border border-[#E9DDC9]/30">
                    {farm.crop}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center gap-1 text-[10.5px] font-mono text-[#A6261D]">
                    <MapPin className="w-3 h-3" />
                    <span>{farm.location}</span>
                  </div>

                  <h3 className="font-serif-brand text-base font-semibold text-[#24140F]">
                    {farm.title}
                  </h3>

                  <p className="text-xs text-[#766B60] leading-relaxed font-sans-brand">
                    {farm.caption}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="w-full pt-3 border-t border-[#E9DDC9]/50 flex items-center justify-between text-[11px] font-sans-brand font-medium text-[#24140F]">
                  <span>Single-Origin Sourced</span>
                  <span className="text-[#C49A45]">✻</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/our-story"
            className="inline-flex items-center gap-1.5 text-xs font-sans-brand font-semibold uppercase tracking-wider text-[#24140F] hover:text-[#A6261D] transition-colors"
          >
            <span>Explore Andhra Terroir Clusters</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
