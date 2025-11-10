// src/components/animations/FloatingElements.jsx
import React from 'react';
import { motion } from 'framer-motion';

export function FloatingBlob({ className = '', delay = 0 }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 30, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    />
  );
}

export function FloatingIcon({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}

export function FloatingCard({ children, className = '' }) {
  return (
    <motion.div
      className={className}
      whileHover={{
        y: -10,
        rotateY: 5,
        transition: { duration: 0.3 },
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

