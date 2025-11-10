// src/components/animations/AnimatedCounter.jsx
import React, { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  duration = 2,
  suffix = '',
  prefix = '',
  className = ''
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const spring = useSpring(0, { duration: duration * 1000 });

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });

    return () => unsubscribe();
  }, [spring]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {prefix}{displayValue.toLocaleString()}{suffix}
    </motion.span>
  );
}

