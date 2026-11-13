import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, Menu, X } from 'lucide-react';

export default function Navbar({ lang, setLang, cartCount, openCart, wishlistCount, openWishlist }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItemClass = ({ isActive }) =>
    `text-xs tracking-wider uppercase font-medium transition-colors py-1 ${
      isActive 
        ? 'text-[#9C3A1A] font-semibold border-b border-[#9C3A1A]' 
        : 'text-stone-700 hover:text-[#9C3A1A]'
    }`;

  return (
    <header className="sticky top-0 z-40 bg-[#FAF5EC]/95 backdrop-blur-md border-b border-[#EAE1D5] transition-all w-full select-none">
      <div className="w-full max-w-[1360px] mx-auto px-6 sm:px-10 h-16 sm:h-18 flex items-center justify-between">
        
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
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-[0.2em] text-[#2C1E18] group-hover:text-[#9C3A1A] transition-colors">
              THE NINTH SPICE<span className="text-[10px] align-top text-[#9C3A1A] ml-0.5">™</span>
            </span>
          </Link>
        </div>

        {/* CENTER: Free-Spaced Elegant Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <NavLink to="/" className={navItemClass} end>Home</NavLink>
          <NavLink to="/shop" className={navItemClass}>Shop Spices</NavLink>
          <NavLink to="/our-story" className={navItemClass}>Our Farms</NavLink>
          <NavLink to="/recipes" className={navItemClass}>Recipes</NavLink>
          <NavLink to="/faqs" className={navItemClass}>FAQs</NavLink>
          <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
        </nav>

        {/* RIGHT: Language Switcher, Wishlist & Bag */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          
          {/* Minimal Language Switcher */}
          <div className="hidden sm:flex items-center text-[11px] text-stone-400 gap-1.5 font-medium">
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

          {/* Wishlist Button from KaaramKathalu */}
          <button
            onClick={openWishlist}
            className="flex items-center gap-1 text-stone-800 hover:text-[#9C3A1A] transition-colors p-1.5 rounded-full hover:bg-stone-100 relative"
            aria-label="Open wishlist"
            title="Wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="bg-[#9C3A1A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center -top-1 -right-1 absolute">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Clean Cart Button */}
          <button
            onClick={openCart}
            className="flex items-center gap-1.5 text-stone-900 hover:text-[#9C3A1A] transition-colors px-2.5 py-1 rounded-full hover:bg-stone-100"
            aria-label="Open cart"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="text-[11px] font-semibold tracking-wider uppercase hidden sm:inline">Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#9C3A1A] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EC] border-b border-[#EAE1D5] px-6 py-5 space-y-3">
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
