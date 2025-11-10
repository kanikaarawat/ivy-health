// src/components/animations/ButtonWithAnimation.jsx
import React from 'react';
import { motion } from 'framer-motion';
import RippleButton from './RippleButton';

export default function ButtonWithAnimation({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary',
  withRipple = true,
  withHover = true,
  withTap = true,
  ...props 
}) {
  const variants = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800',
    secondary: 'bg-white text-slate-900 border-2 border-slate-200 hover:border-slate-300',
    success: 'bg-emerald-500 text-white hover:bg-emerald-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  const Component = withRipple ? RippleButton : motion.button;

  return (
    <Component
      className={`${variants[variant]} ${className} transition-all duration-200`}
      whileHover={withHover ? { scale: 1.05 } : {}}
      whileTap={withTap ? { scale: 0.95 } : {}}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
}

