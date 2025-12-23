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
  const canGoBack = window.history.length > 1 && !isHomePage && !isFeed3p && !isCosmo3p && !isAyur3p;

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

            {/* Center: Page Title (if not home) */}
            {!isHomePage && (
              <h1 className="text-lg font-bold text-slate-900 line-clamp-1">
                {/* Division pages */}
                {(isFeed3p || isCosmo3p || isAyur3p) && (
                  <>
                    {pathname.endsWith('/about') && 'Story'}
                    {pathname.endsWith('/science') && 'Science'}
                    {pathname.endsWith('/process') && 'Manufacturing Process'}
                    {pathname.endsWith('/products') && 'Products'}
                    {pathname.endsWith('/contact') && 'Contact'}
                    {pathname.match(/^\/(ayur3p|cosmo3p|feed3p)$/) && 'Home'}
                  </>
                )}
                {/* Other pages */}
                {!isFeed3p && !isCosmo3p && !isAyur3p && (
                  <>
                    {location.pathname.includes('/shop') && 'Shop'}
                    {location.pathname.includes('/about') && 'About Us'}
                    {location.pathname.includes('/contact') && 'Contact'}
                    {location.pathname.includes('/product') && 'Product'}
                  </>
                )}
              </h1>
            )}

            {/* Right: Ivy Herbals Link (not on home page) */}
            {!isHomePage && (
              <Link
                to="/"
                className="text-lg font-bold text-slate-900 hover:text-primary transition-colors"
              >
                Ivy Herbals
              </Link>
            )}
          </div>
        </div>
      </motion.header>
    </>
  );
}

