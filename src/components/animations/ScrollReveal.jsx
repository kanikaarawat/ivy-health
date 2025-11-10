// src/components/animations/ScrollReveal.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollReveal({ 
  children, 
  direction = 'up',
  delay = 0,
  duration = 0.6,
  once = true,
  className = ''
}) {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: once,
  });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const { y, x } = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x, scale: 0.95 }}
      animate={
        inView
          ? { opacity: 1, y: 0, x: 0, scale: 1 }
          : { opacity: 0, y, x, scale: 0.95 }
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

