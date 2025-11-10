// src/components/animations/InteractiveCard.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function InteractiveCard({ children, className = '', glowColor = 'emerald' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const glowColors = {
    emerald: 'rgba(16, 185, 129, 0.15)',
    blue: 'rgba(59, 130, 246, 0.15)',
    purple: 'rgba(168, 85, 247, 0.15)',
    pink: 'rgba(236, 72, 153, 0.15)',
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {/* Spotlight effect */}
      {isHovered && (
        <motion.div
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            width: '300px',
            height: '300px',
            background: glowColors[glowColor],
            transform: 'translate(-50%, -50%)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Animated border */}
      <motion.div
        className="absolute inset-0 rounded-inherit pointer-events-none"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColors[glowColor]}, transparent)`,
        }}
        animate={{
          x: isHovered ? ['-100%', '100%'] : '100%',
        }}
        transition={{
          duration: 2,
          repeat: isHovered ? Infinity : 0,
          ease: 'linear',
        }}
      />
    </motion.div>
  );
}

