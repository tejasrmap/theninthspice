import React from 'react';
import { Link } from 'react-router-dom';
import MillingSimulator from '../components/MillingSimulator';
import { Sparkles, Thermometer, Wind, ShieldCheck, Microscope, ArrowRight, Gauge, CheckCircle2 } from 'lucide-react';

export default function SciencePage({ lang, translations }) {
  const t = translations[lang];

  return (
    <div className="w-full py-10 sm:py-14 space-y-16">
      
      {/* Top Header Banner */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="bg-[#F4ECDF] rounded-3xl p-8 sm:p-14 border border-[#E8DEC9] relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#C23321]">
              <Link to="/" className="text-stone-500 hover:text-black">Home</Link>
              <span>/</span>
              <span>The Craft &amp; Science</span>
            </div>

            <h1 className="font-serif-brand text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] leading-tight">
              The Science of Low RPM Cold-Milling
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Why do ordinary supermarket spices lose their vibrant aroma within days of opening? The answer lies in the intense thermal friction of industrial machinery. Discover why our calibrated cold-milling technology changes everything.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Simulator Section */}
      <MillingSimulator lang={lang} translations={translations} />

      {/* 3 Scientific Pillars (Full Width) */}
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C23321]">
            Biological Integrity
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#1C1917]">
            How Industrial Mills Destroy Flavor Compounds
          </h2>
          <p className="text-sm text-stone-600">
            A look inside the botanical chemistry of capsicum and curcuma longa when subjected to thermal abuse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DEC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-red-100 text-[#C23321] flex items-center justify-center">
              <Thermometer className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#1C1917]">
              Thermal Flashing Above 70°C
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Industrial hammer mills run at 3,000+ RPM to maximize factory output. The friction acts like a dry oven, boiling off the volatile terpenes that give chillies their rounded earthiness and turmeric its floral bouquet.
            </p>
            <div className="pt-2 text-xs font-semibold text-[#C23321] flex items-center gap-1.5">
              <span>Low RPM keeps temperature &lt; 32°C</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DEC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#1C1917]">
              Essential Oil Entrapment
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              By controlling mechanical shear, our mills crush whole spices gently without bursting cellular cavities prematurely. The essential oils stay sealed inside each particle until you bloom them in hot oil or ghee in your pan.
            </p>
            <div className="pt-2 text-xs font-semibold text-amber-800 flex items-center gap-1.5">
              <span>99.4% essential oils preserved</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-[#E8DEC9] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif-brand text-xl font-bold text-[#1C1917]">
              Zero Sudan Dyes or Fillers
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Because industrial mills burn out color, mass market producers frequently turn to illegal chemical food dyes (like Sudan red or lead chromate) for fake shine. We reject every adulterant and guarantee 100% pure produce.
            </p>
            <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1.5">
              <span>Lab tested for heavy metals</span>
            </div>
          </div>

        </div>

        {/* CTA to Shop */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#1C1917] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold">
              Taste the difference in your kitchen tonight
            </h3>
            <p className="text-xs sm:text-sm text-stone-400">
              Try our freshly cold-milled Red Chilli and Turmeric powders backed by our 100% taste guarantee.
            </p>
          </div>
          <Link
            to="/shop"
            className="bg-[#C23321] hover:bg-[#A32819] text-white px-8 py-3.5 rounded-full text-xs font-semibold shadow-lg transition-transform active:scale-95 shrink-0"
          >
            Explore The Spices
          </Link>
        </div>

      </div>

    </div>
  );
}

