import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BrandPhilosophy() {
  return (
    <section id="philosophy" className="py-6 sm:py-10 bg-[#F8F4EB] border-b border-[#E9DDC9] w-full">
      <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          {/* Left Column: Intentional Editorial Asymmetrical Narrative */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#A6261D] font-semibold">
                Our Sourcing Philosophy
              </span>
              <h2 className="font-serif-brand text-xl sm:text-3xl text-[#24140F] font-medium leading-tight">
                Authentic Indian spice heritage, ground with patient restraint.
              </h2>
            </div>

            <div className="space-y-2.5 text-xs sm:text-[13px] text-[#766B60] leading-relaxed font-sans-brand">
              <p>
                In Indian kitchens, spices have never been passive pantry ingredients—they are the soul of nourishment, the foundation of morning tempering, and the carriers of generational flavor memory. Yet modern commercial supply chains frequently compromise this heritage by pulverizing crops at high-RPM frictional heats that scorch delicate volatile aroma oils.
              </p>
              <p>
                <strong>The Ninth Spice</strong> was established to return to first principles. In partnership with generational farm clusters in Guntur and Nizamabad, we hand-select whole sun-dried red chillies and mineral-dense finger turmeric, gently stone-ground at calibrated ambient temperatures. The result is pure, vibrant spice powder that blooms with immediate aroma the second it touches hot ghee or groundnut oil.
              </p>
            </div>

            {/* 3 Micro Sourcing Assurances */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1.5 text-xs">
              <div className="p-3 rounded-lg bg-white/80 border border-[#E9DDC9] space-y-0.5">
                <span className="text-[#A6261D] font-mono text-[11px] font-bold">01 / Origin</span>
                <div className="font-serif-brand font-semibold text-[#24140F]">Single-Region Soil</div>
                <div className="text-[11px] text-[#766B60]">Grown strictly in Andhra’s renowned spice belts.</div>
              </div>

              <div className="p-3 rounded-lg bg-white/80 border border-[#E9DDC9] space-y-0.5">
                <span className="text-[#C49A45] font-mono text-[11px] font-bold">02 / Milling</span>
                <div className="font-serif-brand font-semibold text-[#24140F]">Ambient Friction</div>
                <div className="text-[11px] text-[#766B60]">Slow ground under 32°C to protect aroma oils.</div>
              </div>

              <div className="p-3 rounded-lg bg-white/80 border border-[#E9DDC9] space-y-0.5">
                <span className="text-emerald-800 font-mono text-[11px] font-bold">03 / Standard</span>
                <div className="font-serif-brand font-semibold text-[#24140F]">Zero Sudan Red</div>
                <div className="text-[11px] text-[#766B60]">100% natural, chemical-free pigment.</div>
              </div>
            </div>

            <div className="pt-1.5">
              <Link
                to="/our-story"
                className="inline-flex items-center gap-2 text-xs font-sans-brand font-semibold tracking-wider uppercase text-[#24140F] hover:text-[#A6261D] transition-colors py-1"
              >
                <span>Read Our Full Agricultural Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Rustic Farm Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-xl overflow-hidden border border-[#E9DDC9] shadow-sm bg-white p-2">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80"
                alt="Authentic whole Indian spices drying under the sun"
                className="w-full h-60 sm:h-96 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#24140F]/90 backdrop-blur-md p-2.5 rounded-lg text-white border border-[#E9DDC9]/30 text-xs">
                <div className="font-serif-brand font-medium text-amber-200 text-xs">Farm Cluster Terroir</div>
                <div className="text-[10px] text-stone-300 font-sans-brand mt-0.5">
                  Andhra sun-drying tarpaulins in Guntur, naturally dehydrating chillies for peak color.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
