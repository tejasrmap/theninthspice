import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailPage from './pages/ProductDetailPage';
import SciencePage from './pages/SciencePage';
import OurStoryPage from './pages/OurStoryPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import WishlistDrawer from './components/WishlistDrawer';
import CheckoutModal from './components/CheckoutModal';
import MirchiPowderIntro from './components/MirchiPowderIntro';
import ScrollProgressIndicator from './components/ScrollProgressIndicator';

import { productsData } from './data/products';
import { translations } from './data/translations';
import { CheckCircle2, ArrowRight } from 'lucide-react';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Animated routes wrapper with smooth page transitions
function AnimatedRoutes({ 
  lang, 
  translations, 
  handleAddToCart, 
  setActiveProductModal, 
  cart, 
  handleUpdateQuantity, 
  handleRemoveItem, 
  handleProceedCheckout,
  handleToggleWishlist,
  wishlistIds
}) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page w-full">
      <Routes location={location}>
        <Route
          path="/"
          element={
            <HomePage
              lang={lang}
              translations={translations}
              onAddToCart={handleAddToCart}
              onOpenDetails={setActiveProductModal}
              products={productsData}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />
        <Route
          path="/shop"
          element={
            <ShopPage
              lang={lang}
              translations={translations}
              onAddToCart={handleAddToCart}
              onOpenDetails={setActiveProductModal}
              products={productsData}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetailPage
              onAddToCart={handleAddToCart}
              lang={lang}
              translations={translations}
              onToggleWishlist={handleToggleWishlist}
              wishlistIds={wishlistIds}
            />
          }
        />
        <Route
          path="/the-science"
          element={
            <SciencePage
              lang={lang}
              translations={translations}
            />
          }
        />
        <Route
          path="/our-story"
          element={<OurStoryPage />}
        />
        <Route
          path="/recipes"
          element={<Navigate to="/shop" replace />}
        />
        <Route
          path="/faqs"
          element={<Navigate to="/contact" replace />}
        />
        <Route
          path="/contact"
          element={<ContactPage />}
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              updateQuantity={handleUpdateQuantity}
              removeItem={handleRemoveItem}
              onProceedCheckout={handleProceedCheckout}
              lang={lang}
              translations={translations}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [introFading, setIntroFading] = useState(false);
  const [lang, setLang] = useState('en');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [activeProductModal, setActiveProductModal] = useState(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);
  const [orderSummary, setOrderSummary] = useState({ grandTotal: 0 });
  const [toast, setToast] = useState({ show: false, message: '' });

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => {
      setToast({ show: false, message: '' });
    }, 2800);
  };

  // Wishlist operations
  const handleToggleWishlist = (product) => {
    setWishlist((prev) => {
      const exists = prev.some((p) => p.id === product.id);
      if (exists) {
        showToast(`Removed from your wishlist.`);
        return prev.filter((p) => p.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to your wishlist!`);
        return [...prev, product];
      }
    });
  };

  const handleRemoveWishlist = (productId) => {
    setWishlist((prev) => prev.filter((p) => p.id !== productId));
  };

  // Cart operations
  const handleAddToCart = (product, variant) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.size === variant.size
      );
      if (existingIndex > -1) {
        const newCart = [...prevCart];
        newCart[existingIndex].quantity += 1;
        return newCart;
      } else {
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            size: variant.size,
            price: variant.price,
            color: product.color,
            quantity: 1
          }
        ];
      }
    });

    showToast(`${product.name} (${variant.size}) added to your bag!`);
  };

  const handleUpdateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.size === size)));
  };

  const handleProceedCheckout = (summary) => {
    setOrderSummary(summary);
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleOrderSuccess = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Router>
      <ScrollToTop />
      
      {/* CINEMATIC FALLING MIRCHI POWDER LOADING SCREEN */}
      {showIntro && (
        <MirchiPowderIntro 
          onFadingStart={() => setIntroFading(true)} 
          onComplete={() => {
            setShowIntro(false);
            setIntroFading(false);
          }} 
        />
      )}

      <div 
        className={`min-h-screen flex flex-col bg-[#F8F4EB] text-[#29221D] w-full transition-all duration-700 ease-out ${
          showIntro && !introFading 
            ? 'filter blur-[4px] scale-[0.995] pointer-events-none select-none' 
            : ''
        }`}
      >
        
        {/* FLOATING SCROLL PROGRESS INDICATOR */}
        <ScrollProgressIndicator />

        {/* 1. TOP ANNOUNCEMENT BAR MARQUEE */}
        <AnnouncementBar />

        {/* 2. RESPONSIVE FULL-WIDTH NAVBAR */}
        <Navbar
          lang={lang}
          setLang={setLang}
          cartCount={totalCartCount}
          openCart={() => setIsCartOpen(true)}
          wishlistCount={wishlist.length}
          openWishlist={() => setIsWishlistOpen(true)}
        />

        {/* 3. MULTI-PAGE SPA ROUTING WITH SMOOTH TRANSITIONS */}
        <main className="flex-1 w-full">
          <AnimatedRoutes
            lang={lang}
            translations={translations}
            handleAddToCart={handleAddToCart}
            setActiveProductModal={setActiveProductModal}
            cart={cart}
            handleUpdateQuantity={handleUpdateQuantity}
            handleRemoveItem={handleRemoveItem}
            handleProceedCheckout={handleProceedCheckout}
            handleToggleWishlist={handleToggleWishlist}
            wishlistIds={wishlist.map(p => p.id)}
          />
        </main>

        {/* 4. FOOTER - THE FINAL ELEMENT OF PAGE CONTAINER */}
        <Footer />
      </div>

      {/* OVERLAYS, MODALS & DRAWERS (MOUNTED OUTSIDE PAGE FLOW) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        onProceedCheckout={handleProceedCheckout}
        lang={lang}
        translations={translations}
      />

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlist={wishlist}
        onAddToCart={handleAddToCart}
        onRemoveWishlist={handleRemoveWishlist}
      />

      <ProductModal
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        orderSummary={orderSummary}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* TOAST NOTIFICATION */}
      {toast.show && (
        <div
          className="fixed bottom-6 right-6 z-50 bg-[#1C1917] text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-xs font-medium">{toast.message}</span>
        </div>
      )}

      {/* MOBILE STICKY FLOATING CART BAR */}
      {cart.length > 0 && !isCartOpen && (
        <div className="lg:hidden fixed bottom-4 left-4 right-4 z-30">
          <button
            onClick={() => setIsCartOpen(true)}
            className="w-full bg-[#1C1917] hover:bg-black text-white px-5 py-3.5 rounded-2xl shadow-2xl flex items-center justify-between border border-stone-800 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <span className="bg-[#C23321] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {totalCartCount} items
              </span>
              <span className="font-serif-brand font-bold text-sm">View Spice Bag</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-amber-400 text-sm">₹{cartSubtotal}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>
      )}

    </Router>
  );
}
