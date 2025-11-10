// src/components/animations/PulsingBadge.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function PulsingBadge({ count, className = '' }) {
  if (!count || count === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: [1, 1.2, 1],
      }}
      transition={{
        scale: {
          repeat: Infinity,
          duration: 2,
          ease: 'easeInOut',
        },
      }}
      className={`absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg ${className}`}
    >
      <motion.span
        key={count}
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      >
        {count > 9 ? '9+' : count}
      </motion.span>
      
      {/* Ping animation */}
      <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping" />
    </motion.div>
  );
}

