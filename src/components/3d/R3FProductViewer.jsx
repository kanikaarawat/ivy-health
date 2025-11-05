// src/components/3d/R3FProductViewer.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function R3FProductViewer() {
  return (
    <div className="relative w-full aspect-square bg-gradient-to-br from-cream to-secondary/5 rounded-2xl overflow-hidden flex items-center justify-center border border-border">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(to right, #254B5A 1px, transparent 1px),
                         linear-gradient(to bottom, #254B5A 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Ambient Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      {/* Product Bottle */}
      <motion.div
        className="relative z-10"
        animate={{
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative" style={{ transform: 'rotateX(5deg)' }}>
          {/* Bottle Shadow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-40 h-10 bg-primary/10 rounded-full blur-xl" />
          
          {/* Bottle Body */}
          <motion.div
            className="relative w-40 h-80 rounded-3xl overflow-hidden shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #7F9A83 0%, #5A7A6A 50%, #7F9A83 100%)',
              boxShadow: '0 25px 50px -12px rgba(127, 154, 131, 0.4), inset 0 2px 4px rgba(255,255,255,0.2)',
            }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
            
            {/* Liquid Level */}
            <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-secondary/60 to-secondary/40" />
            
            {/* Label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-white/98 rounded-xl shadow-lg flex flex-col items-center justify-center p-3 border border-primary/10">
              <div className="w-24 h-10 bg-primary/90 rounded flex items-center justify-center mb-2">
                <span className="text-white font-bold text-xs">IVY</span>
              </div>
              <div className="w-20 h-2 bg-primary/60 rounded" />
              <div className="w-16 h-1.5 bg-primary/40 rounded mt-1" />
            </div>

            {/* Highlight */}
            <div className="absolute top-12 left-6 w-8 h-40 bg-white/30 rounded-full blur-sm" />
          </motion.div>

          {/* Bottle Cap */}
          <div
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-14 rounded-t-xl"
            style={{
              background: 'linear-gradient(135deg, #254B5A 0%, #1A3A45 50%, #254B5A 100%)',
              boxShadow: '0 -5px 15px rgba(37, 75, 90, 0.3), inset 0 2px 4px rgba(255,255,255,0.1)',
            }}
          >
            {/* Cap Top */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-gradient-to-b from-primary/80 to-primary rounded-t-lg" />
            
            {/* Cap Ring Detail */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/20" />
          </div>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-secondary/30 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}
