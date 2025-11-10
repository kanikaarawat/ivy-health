// src/components/motion/SectionDivider.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sparkles } from 'lucide-react';

export default function SectionDivider({ variant = 'default' }) {
  if (variant === 'wave') {
    return (
      <div className="relative h-24 overflow-hidden">
        <svg
          className="absolute bottom-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <motion.path
            fill="currentColor"
            className="text-primary/10"
            d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
          />
        </svg>
      </div>
    );
  }

  if (variant === 'leaves') {
    return (
      <div className="relative h-32 flex items-center justify-center overflow-hidden">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-px w-32 bg-gradient-to-r from-transparent to-primary/30"
          />
          
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100 }}
            whileHover={{ rotate: 360 }}
            className="flex items-center gap-2"
          >
            <Leaf className="w-6 h-6 text-primary" />
            <Sparkles className="w-5 h-5 text-accent" />
            <Leaf className="w-6 h-6 text-primary transform scale-x-[-1]" />
          </motion.div>
          
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="h-px w-32 bg-gradient-to-l from-transparent to-primary/30"
          />
        </div>
      </div>
    );
  }

  // Default divider
  return (
    <div className="relative h-20 flex items-center justify-center">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-0.5 w-full max-w-md bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </div>
  );
}

