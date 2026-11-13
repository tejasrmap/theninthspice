import React from 'react';

export function SpiceJarVisual({ type = 'chilli', className = 'w-48 h-64' }) {
  const isChilli = type === 'chilli';
  
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Soft natural ambient shadow */}
      <div className="absolute -bottom-4 w-3/4 h-6 bg-black/15 blur-xl rounded-full" />

      {/* SVG Luxury Glass Spice Jar / Minimalist Pouch */}
      <svg viewBox="0 0 200 280" className="w-full h-full drop-shadow-xl relative z-10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id={isChilli ? "chilliSpice" : "turmericSpice"} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={isChilli ? "#B22222" : "#E68A00"} />
            <stop offset="50%" stopColor={isChilli ? "#8B0000" : "#CC7A00"} />
            <stop offset="100%" stopColor={isChilli ? "#660000" : "#995C00"} />
          </linearGradient>

          <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.1" />
            <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.25" />
          </linearGradient>

          <linearGradient id="lidWood" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2E241E" />
            <stop offset="50%" stopColor="#4A3B32" />
            <stop offset="100%" stopColor="#251D18" />
          </linearGradient>
        </defs>

        {/* Minimal Wood Cap */}
        <rect x="58" y="16" width="84" height="26" rx="6" fill="url(#lidWood)" />
        <rect x="64" y="38" width="72" height="6" fill="#1C1512" />

        {/* Pure Jar Body */}
        <rect x="36" y="44" width="128" height="216" rx="18" fill="url(#glassReflection)" stroke="#E8E2D9" strokeWidth="1.5" />
        
        {/* Rich Ground Spice Powder Filling */}
        <path 
          d="M38 90 Q 100 86 162 90 L 162 242 C 162 252, 154 258, 144 258 L 56 258 C 46 258, 38 252, 38 242 Z" 
          fill={`url(#${isChilli ? "chilliSpice" : "turmericSpice"})`}
        />

        {/* Subtle powder texture flecks */}
        <circle cx="70" cy="130" r="1.5" fill="#FFF" opacity="0.2" />
        <circle cx="125" cy="180" r="1.2" fill="#FFF" opacity="0.2" />
        <circle cx="95" cy="210" r="1.8" fill="#FFF" opacity="0.15" />

        {/* Pure Minimalist White Paper Label */}
        <rect x="50" y="105" width="100" height="110" rx="8" fill="#FCFAF7" stroke="#EAE4DA" strokeWidth="1" filter="drop-shadow(0 2px 6px rgba(0,0,0,0.08))" />

        {/* Brand Name on Label */}
        <text x="100" y="126" textAnchor="middle" fill="#1C1917" fontFamily="Cinzel, serif" fontSize="7.5" fontWeight="700" letterSpacing="1.8">
          THE NINTH SPICE
        </text>
        <line x1="68" y1="133" x2="132" y2="133" stroke="#D6CEC2" strokeWidth="0.8" />

        {/* Product Title */}
        <text x="100" y="152" textAnchor="middle" fill={isChilli ? "#C23321" : "#B36B00"} fontFamily="Cinzel, serif" fontSize="8" fontWeight="700" letterSpacing="1">
          {isChilli ? "RED CHILLI" : "TURMERIC"}
        </text>
        <text x="100" y="163" textAnchor="middle" fill="#78716C" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="5.5" fontWeight="600" letterSpacing="1.2">
          PURE GROUND SPICE
        </text>

        {/* Origin Terroir */}
        <rect x="62" y="174" width="76" height="16" rx="4" fill="#F4EFE6" />
        <text x="100" y="185" textAnchor="middle" fill="#57534E" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="5.8" fontWeight="600">
          {isChilli ? "GUNTUR TERROIR • AP" : "NIZAMABAD • 4.8% CURCUMIN"}
        </text>

        {/* Net Weight */}
        <text x="100" y="204" textAnchor="middle" fill="#A8A29E" fontFamily="monospace" fontSize="6" fontWeight="bold">
          NET 250G
        </text>
      </svg>
    </div>
  );
}

// Alias for backwards compatibility
export const SpicePouchVisual = SpiceJarVisual;

export function HeroSpiceShowcase({ onAddToCart, chilliProduct, turmericProduct }) {
  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center gap-6 sm:gap-10 py-6">
      
      {/* Red Chilli Free-Floating Jar */}
      <div className="group text-center space-y-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
        <div className="relative">
          <SpiceJarVisual type="chilli" className="w-48 h-64 sm:w-56 sm:h-72" />
        </div>
        <div className="space-y-1">
          <div className="font-serif-brand text-base font-bold text-stone-900 tracking-wide">
            Red Chilli Powder
          </div>
          <div className="text-xs text-stone-500 font-mono">From ₹139 • Guntur Harvest</div>
        </div>
      </div>

      {/* Turmeric Free-Floating Jar */}
      <div className="group text-center space-y-4 cursor-pointer transition-transform duration-300 hover:-translate-y-2">
        <div className="relative">
          <SpiceJarVisual type="turmeric" className="w-48 h-64 sm:w-56 sm:h-72" />
        </div>
        <div className="space-y-1">
          <div className="font-serif-brand text-base font-bold text-stone-900 tracking-wide">
            Turmeric Powder
          </div>
          <div className="text-xs text-stone-500 font-mono">From ₹139 • Nizamabad</div>
        </div>
      </div>

    </div>
  );
}
