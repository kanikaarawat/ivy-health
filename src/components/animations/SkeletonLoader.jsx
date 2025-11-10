// src/components/animations/SkeletonLoader.jsx
import React from 'react';
import { motion } from 'framer-motion';

export function SkeletonCard() {
  return (
    <div className="bg-white rounded-2xl p-4 border border-slate-200 overflow-hidden">
      <motion.div
        className="relative"
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
        }}
      >
        <div className="aspect-square bg-slate-200 rounded-xl mb-3" />
        <div className="h-4 bg-slate-200 rounded mb-2 w-3/4" />
        <div className="h-3 bg-slate-200 rounded w-1/2" />
      </motion.div>
    </div>
  );
}

export function SkeletonText({ lines = 3, className = '' }) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <motion.div
          key={i}
          className="h-4 bg-slate-200 rounded"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export function SkeletonCircle({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <motion.div
      className={`${sizes[size]} bg-slate-200 rounded-full ${className}`}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  );
}

