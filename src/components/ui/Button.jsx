// src/components/ui/Button.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ 
  to, 
  children, 
  className = '',
  onClick,
  type = 'button'
}) {
  const baseStyles = 'inline-block font-medium transition-all duration-300 text-center';

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${className}`}
    >
      {children}
    </button>
  );
}
