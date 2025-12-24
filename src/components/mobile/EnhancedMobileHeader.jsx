// src/components/mobile/EnhancedMobileHeader.jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function EnhancedMobileHeader() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  
  const isHomePage = pathname === '/';
  const isFeed3p = pathname.startsWith('/feed3p');
  const isCosmo3p = pathname.startsWith('/cosmo3p');
  const isAyur3p = pathname.startsWith('/ayur3p');
  const isDivisionPage = isFeed3p || isCosmo3p || isAyur3p;
  const canGoBack = window.history.length > 1 && !isHomePage && !isFeed3p && !isCosmo3p && !isAyur3p;

  const getPageTitle = () => {
    if (isDivisionPage) {
      if (pathname.endsWith('/about')) return 'Story';
      if (pathname.endsWith('/science')) return 'Science';
      if (pathname.endsWith('/process')) return 'Manufacturing Process';
      if (pathname.endsWith('/products')) return 'Products';
      if (pathname.endsWith('/contact')) return 'Contact';
      if (pathname.match(/^\/(ayur3p|cosmo3p|feed3p)$/)) return 'Home';
    }
    if (location.pathname.includes('/shop')) return 'Shop';
    if (location.pathname.includes('/about')) return 'About Us';
    if (location.pathname.includes('/contact')) return 'Contact';
    if (location.pathname.includes('/product')) return 'Product';
    return '';
  };

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
              <Link to={isFeed3p ? "/feed3p" : isCosmo3p ? "/cosmo3p" : isAyur3p ? "/ayur3p" : "/"} className="flex items-center">
                <motion.img
                  src={isFeed3p ? "/feed3p b.png" : isCosmo3p ? "/cosmo3p b.png" : isAyur3p ? "/ayur3p b.png" : "/logo.png"}
                  alt="Ivy Herbals"
                  className="h-10 w-auto"
                  whileTap={{ scale: 0.95 }}
                />
              </Link>
            )}

            {/* Center: Page Title for non-division pages */}
            {!isHomePage && !isDivisionPage && (
              <h1 className="text-lg font-bold text-slate-900 line-clamp-1 flex-1 text-center">
                {getPageTitle()}
              </h1>
            )}

            {/* Right: Page Title for division pages (replaces menu icon) */}
            {isDivisionPage && (
              <h1 className="text-lg font-bold text-slate-900 line-clamp-1 text-right">
                {getPageTitle()}
              </h1>
            )}

            {/* Placeholder for non-division pages to maintain layout */}
            {!isDivisionPage && !isHomePage && <div className="w-10" />}
            {isHomePage && <div className="w-10" />}
          </div>
        </div>
      </motion.header>
    </>
  );
}

