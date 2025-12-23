// src/components/global/PageHero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useDivisionColor } from '../../hooks/useDivisionColor';

export default function PageHero({ title, subtitle }) {
  const { primary, bgPrimaryClass } = useDivisionColor();
  
  return (
    <div className={`relative ${bgPrimaryClass} overflow-hidden`} style={{ backgroundColor: primary }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-h1 md:text-5xl font-primary text-white leading-tight"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
