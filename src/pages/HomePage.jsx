// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/homepage/Hero';
import TrustBadgeBar from '../components/global/TrustBadgeBar';
import AboutSection from '../components/homepage/AboutSection';
import CategoryGrid from '../components/homepage/CategoryGrid';
import TopSellerCarousel from '../components/homepage/TopSellerCarousel';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <TrustBadgeBar />
      <AboutSection />
      <CategoryGrid />
      <TopSellerCarousel />
    </div>
  );
}

