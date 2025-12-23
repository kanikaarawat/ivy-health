// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/homepage/Hero';
import CategoryGrid from '../components/homepage/CategoryGrid';

export default function HomePage() {
  return (
    <div>
      {/* Unified Hero for all viewports (desktop + mobile) */}
      <Hero />

      {/* Unified Category Grid for all viewports (desktop + mobile) */}
      <CategoryGrid />
    </div>
  );
}

