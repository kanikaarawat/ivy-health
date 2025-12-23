// src/components/mobile/DivisionMobileTabs.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDivisionColor } from '../../hooks/useDivisionColor';

export default function DivisionMobileTabs() {
  const location = useLocation();
  const { primary } = useDivisionColor();

  const pathname = location.pathname;

  let baseSlug = null;

  if (pathname.startsWith('/ayur3p')) {
    baseSlug = '/ayur3p';
  } else if (pathname.startsWith('/cosmo3p')) {
    baseSlug = '/cosmo3p';
  } else if (pathname.startsWith('/feed3p')) {
    baseSlug = '/feed3p';
  }

  // Only show on the 3P division routes
  if (!baseSlug) return null;

  // Secondary actions (informational)
  const secondaryTabs = [
    { key: 'story', label: 'Story', path: `${baseSlug}/about` },
    { key: 'science', label: 'Science', path: `${baseSlug}/science` },
    { key: 'process', label: 'Process', path: `${baseSlug}/process` },
    { key: 'products', label: 'Products', path: `${baseSlug}/products` },
  ];

  // Primary action (Contact - most important conversion action)
  const primaryTab = { key: 'contact', label: 'Contact', path: `${baseSlug}/contact` };

  const isActive = (path) => {
    // For contact, only match exact path
    if (path === `${baseSlug}/contact` || path === '/contact') {
      return pathname === `${baseSlug}/contact`;
    }
    // For other paths, match exact or sub-paths
    return pathname === path || pathname.startsWith(path + '/');
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-slate-200 pb-safe shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-3 py-3">
        {/* Hybrid Layout following Gutenberg Principle: 
            Secondary actions horizontal (left), Primary action vertical (right/bottom) */}
        <div className="flex items-stretch gap-2">
          {/* Secondary Actions - Horizontal, smaller, neutral styling */}
          <div className="flex-1 grid grid-cols-4 gap-1.5">
            {secondaryTabs.map((tab) => (
              <Link
                key={tab.key}
                to={tab.path}
                className="flex"
              >
                <button
                  type="button"
                  className={`w-full min-h-[44px] px-2 py-2.5 rounded-lg border text-[10px] font-medium transition-all flex items-center justify-center ${
                    isActive(tab.path)
                      ? 'text-white shadow-md'
                      : 'text-slate-600 bg-white hover:bg-slate-50'
                  }`}
                  style={
                    isActive(tab.path)
                      ? { backgroundColor: primary, borderColor: primary }
                      : { borderColor: 'rgba(148, 163, 184, 0.3)', backgroundColor: 'white' }
                  }
                >
                  <span className="leading-tight text-center">{tab.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* Primary Action - Vertical, larger, prominent, at end of reading gravity */}
          <Link
            to={primaryTab.path}
            className="flex-shrink-0"
          >
            <button
              type="button"
              className={`w-16 min-h-[44px] px-2 py-2.5 rounded-xl font-semibold text-xs transition-all shadow-lg hover:shadow-xl flex items-center justify-center ${
                isActive(primaryTab.path)
                  ? 'text-white ring-2 ring-offset-2'
                  : 'text-white'
              }`}
              style={{
                backgroundColor: isActive(primaryTab.path) ? primary : `${primary}cc`,
                borderColor: primary,
                ringColor: isActive(primaryTab.path) ? primary : 'transparent',
              }}
            >
              <span className="leading-tight text-center">{primaryTab.label}</span>
            </button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}


