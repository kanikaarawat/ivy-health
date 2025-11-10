// src/components/mobile/MobileHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function MobileHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="lg:hidden sticky top-0 z-40 bg-white/98 backdrop-blur-xl shadow-sm border-b border-slate-200"
    >
      <div className="px-4 py-3">
        <div className="flex items-center justify-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="/logo.png"
              alt="Ivy Herbals"
              className="h-11 w-auto"
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

