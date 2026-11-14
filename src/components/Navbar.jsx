import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ lang, setLang, cartCount, openCart, wishlistCount, openWishlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `text-xs tracking-[0.14em] uppercase font-sans-brand font-medium transition-all py-1 ${
      isActive 
        ? 'text-[#A6261D] font-semibold border-b border-[#A6261D]' 
        : 'text-[#29221D] hover:text-[#A6261D]'
    }`;

  const mobileNavLinkClass = ({ isActive }) =>
    `text-sm tracking-[0.12em] uppercase font-sans-brand font-medium py-2.5 px-3 rounded-lg block transition-colors ${
      isActive
        ? 'bg-[#E9DDC9]/50 text-[#A6261D] font-semibold'
        : 'text-[#29221D] hover:bg-white/60'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#F8F4EB]/95 backdrop-blur-md border-b border-[#E9DDC9] transition-all w-full select-none">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 h-16 sm:h-18 flex items-center justify-between">
        
        {/* LEFT: Logo & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#29221D] hover:text-[#A6261D] transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex flex-col group">
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.22em] text-[#24140F] group-hover:text-[#A6261D] transition-colors">
              THE NINTH SPICE<span className="text-[10px] align-top text-[#C49A45] ml-0.5">™</span>
            </span>
            <span className="text-[8.5px] font-mono tracking-[0.28em] text-[#766B60] uppercase hidden sm:block">
              Single-Origin Terroir
            </span>
          </Link>
        </div>

        {/* CENTER: Free-Spaced Editorial Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          <NavLink to="/" className={navItemClass} end>Home</NavLink>
          <NavLink to="/shop" className={navItemClass}>Shop Spices</NavLink>
          <NavLink to="/our-story" className={navItemClass}>Our Farms</NavLink>
          <NavLink to="/recipes" className={navItemClass}>Recipes</NavLink>
          <NavLink to="/faqs" className={navItemClass}>FAQs</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </nav>

        {/* RIGHT: Language Switcher, Wishlist & Bag */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Subtle Language Switcher */}
          <div className="hidden sm:flex items-center text-[11px] text-[#766B60] gap-1.5 font-mono font-medium">
            <button
              onClick={() => setLang('en')}
              className={`hover:text-[#24140F] transition-colors cursor-pointer ${lang === 'en' ? 'text-[#24140F] font-bold border-b border-[#24140F]' : ''}`}
            >
              EN
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('te')}
              className={`hover:text-[#24140F] transition-colors cursor-pointer ${lang === 'te' ? 'text-[#24140F] font-bold border-b border-[#24140F]' : ''}`}
            >
              తెలుగు
            </button>
            <span>/</span>
            <button
              onClick={() => setLang('hi')}
              className={`hover:text-[#24140F] transition-colors cursor-pointer ${lang === 'hi' ? 'text-[#24140F] font-bold border-b border-[#24140F]' : ''}`}
            >
              हिंदी
            </button>
          </div>

          <div className="h-3.5 w-[1px] bg-[#E9DDC9] hidden sm:block" />

          {/* Wishlist Button */}
          <button
            onClick={openWishlist}
            className="flex items-center gap-1 text-[#29221D] hover:text-[#A6261D] transition-colors p-1.5 rounded-full hover:bg-white/80 relative cursor-pointer"
            aria-label="Open wishlist"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="bg-[#A6261D] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center -top-1 -right-1 absolute">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Refined Bag Button */}
          <button
            onClick={openCart}
            className="flex items-center gap-1.5 text-[#24140F] hover:text-[#A6261D] transition-colors px-3 py-1.5 rounded-full bg-white/70 hover:bg-white border border-[#E9DDC9] shadow-2xs cursor-pointer"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[11px] font-mono tracking-wider uppercase font-semibold hidden sm:inline">Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#24140F] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>

      </div>

      {/* Mobile Slide-Down Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F8F4EB] border-b border-[#E9DDC9] px-6 py-4 space-y-3 shadow-lg animate-page">
          <nav className="flex flex-col space-y-1">
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass} end>Home</NavLink>
            <NavLink to="/shop" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>Shop Spices</NavLink>
            <NavLink to="/our-story" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>Our Farms</NavLink>
            <NavLink to="/recipes" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>Recipes</NavLink>
            <NavLink to="/faqs" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>FAQs</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={mobileNavLinkClass}>Contact</NavLink>
          </nav>

          <div className="pt-3 border-t border-[#E9DDC9] flex items-center justify-between text-xs text-[#766B60]">
            <span className="font-mono text-[10px] uppercase">Language:</span>
            <div className="flex gap-2">
              <button onClick={() => { setLang('en'); setMobileMenuOpen(false); }} className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-[#24140F] text-white' : ''}`}>EN</button>
              <button onClick={() => { setLang('te'); setMobileMenuOpen(false); }} className={`px-2 py-0.5 rounded ${lang === 'te' ? 'bg-[#24140F] text-white' : ''}`}>తెలుగు</button>
              <button onClick={() => { setLang('hi'); setMobileMenuOpen(false); }} className={`px-2 py-0.5 rounded ${lang === 'hi' ? 'bg-[#24140F] text-white' : ''}`}>हिंदी</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
