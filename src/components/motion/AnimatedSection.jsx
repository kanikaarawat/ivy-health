// src/components/motion/AnimatedSection.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '' }) {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] } }
  };

  return (
    <motion.section
      className={`py-16 md:py-24 ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
    >
      {/* Standardized container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
}

