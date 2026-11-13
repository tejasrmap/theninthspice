import React, { useState } from 'react';
import { Gauge, Thermometer, Wind, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, Flame } from 'lucide-react';

export default function MillingSimulator({ lang, translations }) {
  const [rpmMode, setRpmMode] = useState('low'); // 'low' or 'high'
  const t = translations[lang];

  const isLow = rpmMode === 'low';

  return (
    <section id="science" className="py-20 bg-gradient-to-b from-[#18120F] via-[#221612] to-[#18120F] text-white border-y border-[#3D261C] w-full relative overflow-hidden">
      {/* Background radial spice glow */}
      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-all duration-700 ${
        isLow ? 'bg-emerald-600/15' : 'bg-red-600/25'
      }`} />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-red-950 to-stone-900 border border-red-500/40 text-xs font-bold uppercase tracking-wider text-amber-300 font-mono shadow-lg">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span>The Science of Cold Milling</span>
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-5xl font-bold text-white tracking-wide">
            {t.whyLowRpm}
          </h2>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl mx-auto">
            Spices are living botanicals packed with heat-sensitive volatile oils (Capsaicin in chillies, Curcuminoids in turmeric). Test how temperature destroys flavor below:
          </p>
        </div>

        {/* Interactive Mode Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 bg-[#0D0907] rounded-2xl border border-stone-800 shadow-2xl">
            <button
              onClick={() => setRpmMode('low')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                isLow 
                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-800 text-white shadow-[0_0_25px_rgba(16,185,129,0.4)] border border-emerald-400/40' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>THE NINTH SPICE™ (Low RPM)</span>
            </button>

            <button
              onClick={() => setRpmMode('high')}
              className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2.5 ${
                !isLow 
                  ? 'bg-gradient-to-r from-red-600 via-red-700 to-red-900 text-white shadow-[0_0_25px_rgba(239,68,68,0.5)] border border-red-400/50' 
                  : 'text-stone-400 hover:text-white'
              }`}
            >
              <AlertTriangle className="w-4 h-4 text-amber-300" />
              <span>Commercial Mill (High RPM)</span>
            </button>
          </div>
        </div>

        {/* Live Simulation Display Card */}
        <div className="bg-[#120D0A]/90 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-[#3E281F] shadow-[0_20px_60px_rgba(0,0,0,0.6)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Dynamic Gauges */}
          <div className="lg:col-span-5 space-y-6 lg:border-r border-[#2C1C15] lg:pr-10">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-widest text-stone-400 font-bold">
                Milling Speed
              </span>
              <span className={`text-lg font-bold font-mono px-3 py-1 rounded-lg ${
                isLow ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-800' : 'bg-red-950/80 text-red-400 border border-red-800 animate-pulse'
              }`}>
                {isLow ? '380 RPM (Gentle Stone)' : '3,200+ RPM (Violent Friction)'}
              </span>
            </div>

            {/* Friction Heat Gauge */}
            <div className="p-5 rounded-2xl bg-[#1C1410] border border-[#362118] space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-2 text-stone-300">
                  <Thermometer className="w-4 h-4 text-amber-500" />
                  Milling Chamber Heat
                </span>
                <span className={`font-mono font-bold text-base ${isLow ? 'text-emerald-400' : 'text-red-500 animate-pulse'}`}>
                  {isLow ? '28°C (Cool Ambient)' : '82°C (Scorching Hot)'}
                </span>
              </div>
              <div className="w-full bg-stone-900 h-3 rounded-full overflow-hidden flex border border-stone-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${
                    isLow 
                      ? 'w-[28%] bg-gradient-to-r from-emerald-500 to-teal-400' 
                      : 'w-[90%] bg-gradient-to-r from-amber-500 via-red-500 to-red-600 animate-pulse'
                  }`}
                />
              </div>
              <div className="text-[11px] text-stone-400">
                {isLow ? '✓ Safely protects volatile terpene molecules (&lt; 32°C)' : '⚠️ Heat evaporates natural aromatics and burns botanical fibres'}
              </div>
            </div>

            {/* Aromatic Oil Retention */}
            <div className="p-5 rounded-2xl bg-[#1C1410] border border-[#362118] space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-2 text-stone-300">
                  <Wind className="w-4 h-4 text-sky-400" />
                  Volatile Aromatic Oil Retention
                </span>
                <span className={`font-mono font-bold text-base ${isLow ? 'text-emerald-400' : 'text-amber-500'}`}>
                  {isLow ? '99.4% Trapped &amp; Sealed' : '38.2% Lost / Boiled Off'}
                </span>
              </div>
              <div className="w-full bg-stone-900 h-3 rounded-full overflow-hidden flex border border-stone-800">
                <div 
                  className={`h-full transition-all duration-700 rounded-full ${
                    isLow 
                      ? 'w-[99%] bg-gradient-to-r from-emerald-400 to-emerald-600' 
                      : 'w-[38%] bg-gradient-to-r from-amber-600 to-red-700'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Comparative Findings */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full border ${
                isLow 
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-600/50' 
                  : 'bg-red-950 text-red-300 border-red-600/50'
              }`}>
                {isLow ? 'Our Patented Craft Approach' : 'Mass Factory Production Flaw'}
              </span>
            </div>

            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-white leading-snug">
              {isLow 
                ? 'Cool grinding preserves explosive aroma, natural crimson & pure curcumin' 
                : 'High-speed industrial hammer mills boil off the natural soul of the spice'}
            </h3>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
              {isLow 
                ? 'Because our heavy-duty stone and low-friction mills operate at calibrated low revolutions, the spices never exceed natural ambient temperatures. The natural oils stay trapped inside the micro-particles, giving you that fresh-roasted kitchen punch every single time you cook.'
                : 'Commercial factories grind thousands of kilograms per hour to maximize factory yield. This high RPM acts like an industrial oven, flashing away the delicate top notes of chillies and turmeric. Many commercial brands then add artificial colors, polishes, or starches to compensate for the lost pigment.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-4 rounded-2xl bg-[#1C1410] border border-[#362118] flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0" />
                <span className="font-medium text-stone-200">
                  {isLow ? 'Vibrant natural crimson & sun-gold hue' : 'Faded greyish or dye-polished finish'}
                </span>
              </div>
              <div className="p-4 rounded-2xl bg-[#1C1410] border border-[#362118] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <span className="font-medium text-stone-200">
                  {isLow ? 'Hermetically packed within 60 mins' : 'Bulk stored in open factory vats for months'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
