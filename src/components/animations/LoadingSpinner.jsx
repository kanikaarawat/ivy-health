// src/components/animations/LoadingSpinner.jsx
import React from 'react';
import { motion } from 'framer-motion';

export function SpinnerDots({ size = 'md', color = 'emerald' }) {
  const sizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colors = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    slate: 'bg-slate-500',
  };

  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((index) => (
        <motion.div
          key={index}
          className={`${sizes[size]} ${colors[color]} rounded-full`}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export function SpinnerCircle({ size = 'md', color = 'emerald' }) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  };

  const colors = {
    emerald: 'border-emerald-500',
    blue: 'border-blue-500',
    purple: 'border-purple-500',
    slate: 'border-slate-500',
  };

  return (
    <motion.div
      className={`${sizes[size]} ${colors[color]} border-t-transparent rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );
}

export function SpinnerPulse({ size = 'md', color = 'emerald' }) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const colors = {
    emerald: 'bg-emerald-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    slate: 'bg-slate-500',
  };

  return (
    <div className="relative">
      <motion.div
        className={`${sizes[size]} ${colors[color]} rounded-full opacity-75`}
        animate={{
          scale: [1, 2, 2],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
      <motion.div
        className={`absolute inset-0 ${sizes[size]} ${colors[color]} rounded-full`}
        animate={{
          scale: [0, 1],
          opacity: [1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      />
    </div>
  );
}

