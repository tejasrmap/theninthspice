import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function Navbar({ lang, setLang, cartCount, openCart }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `text-xs tracking-wider uppercase font-medium transition-colors py-1 ${
      isActive 
        ? 'text-[#C23321] font-semibold' 
        : 'text-stone-600 hover:text-stone-950'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#FCFAF7]/95 backdrop-blur-md border-b border-stone-200/70 transition-all w-full">
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 h-18 flex items-center justify-between">
        
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-stone-700 hover:text-black transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

          <Link to="/" className="flex flex-col group">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] text-stone-900 group-hover:text-[#B93822] transition-colors">
              THE NINTH SPICE<span className="text-[10px] align-top text-[#B93822] ml-0.5">™</span>
            </span>
          </Link>
        </div>

        {/* CENTER: Free-Spaced Elegant Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navItemClass} end>Home</NavLink>
          <NavLink to="/shop" className={navItemClass}>Shop Spices</NavLink>
          <NavLink to="/our-story" className={navItemClass}>Our Farms</NavLink>
          <NavLink to="/recipes" className={navItemClass}>Recipes</NavLink>
          <NavLink to="/faqs" className={navItemClass}>FAQs</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </nav>

        {/* RIGHT: Subtle Language Toggle & Minimal Cart Pill */}
        <div className="flex items-center gap-4 shrink-0">
          
          {/* Minimal Language Switcher */}
          <div className="flex items-center text-[11px] text-stone-400 gap-1.5 font-medium">
            <button
              onClick={() => setLang('en')}
              className={`hover:text-black transition-colors ${lang === 'en' ? 'text-stone-900 font-bold' : ''}`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('te')}
              className={`hover:text-black transition-colors ${lang === 'te' ? 'text-stone-900 font-bold' : ''}`}
            >
              తెలుగు
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('hi')}
              className={`hover:text-black transition-colors ${lang === 'hi' ? 'text-stone-900 font-bold' : ''}`}
            >
              हिंदी
            </button>
          </div>

          <div className="h-3.5 w-[1px] bg-stone-300 hidden sm:block" />

          {/* Clean Cart Button */}
          <button
            onClick={openCart}
            className="flex items-center gap-1.5 text-stone-900 hover:text-[#C23321] transition-colors px-2.5 py-1 rounded-full hover:bg-stone-100"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span className="text-[11px] font-semibold tracking-wider uppercase">Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#C23321] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FCFAF7] border-b border-stone-200 px-6 py-5 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-xs tracking-wider uppercase font-medium text-stone-800">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="py-1">Home</Link>
            <Link to="/shop" onClick={() => setMobileMenuOpen(false)} className="py-1">Shop Spices</Link>
            <Link to="/our-story" onClick={() => setMobileMenuOpen(false)} className="py-1">Our Farms</Link>
            <Link to="/recipes" onClick={() => setMobileMenuOpen(false)} className="py-1">Recipes</Link>
            <Link to="/faqs" onClick={() => setMobileMenuOpen(false)} className="py-1">FAQs</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="py-1">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
