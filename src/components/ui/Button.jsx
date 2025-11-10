// src/components/ui/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  to, 
  children, 
  className = '',
  onClick,
  type = 'button',
  variant = 'default'
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 text-center';
  
  const variantStyles = {
    default: '',
    primary: 'bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90',
    secondary: 'border-2 border-primary text-primary px-8 py-3 rounded-full hover:bg-primary hover:text-white',
    accent: 'bg-accent text-white px-8 py-3 rounded-full hover:bg-accent/90'
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant] || variantStyles.default} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
