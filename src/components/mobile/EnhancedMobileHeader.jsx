// src/components/mobile/EnhancedMobileHeader.jsx
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import SearchOverlay from './SearchOverlay';
import PulsingBadge from '../animations/PulsingBadge';

export default function EnhancedMobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartTotal } = useCart();
  const [searchOpen, setSearchOpen] = useState(false);
  
  const isHomePage = location.pathname === '/';
  const canGoBack = window.history.length > 1 && !isHomePage;

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="lg:hidden sticky top-0 z-40 bg-white/98 backdrop-blur-xl shadow-sm border-b border-slate-200"
      >
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Left: Back or Logo */}
            {canGoBack ? (
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center active:scale-90 transition-transform"
              >
                <ArrowLeft className="w-5 h-5 text-slate-700" />
              </button>
            ) : (
              <Link to="/" className="flex items-center">
                <motion.img
                  src="/logo.png"
                  alt="Ivy Herbals"
                  className="h-10 w-auto"
                  whileTap={{ scale: 0.95 }}
                />
              </Link>
            )}

            {/* Center: Page Title (if not home) */}
            {!isHomePage && (
              <h1 className="text-lg font-bold text-slate-900 line-clamp-1">
                {location.pathname.includes('/shop') && 'Shop'}
                {location.pathname.includes('/about') && 'About Us'}
                {location.pathname.includes('/contact') && 'Contact'}
                {location.pathname.includes('/product') && 'Product'}
              </h1>
            )}

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center active:scale-90 transition-transform"
              >
                <Search className="w-5 h-5 text-slate-700" />
              </button>

              {/* Cart with Badge */}
              <Link
                to="/cart"
                className="relative w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center active:scale-90 transition-transform"
              >
                <ShoppingCart className="w-5 h-5 text-slate-700" />
                <PulsingBadge count={cartTotal} />
              </Link>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

