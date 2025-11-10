// src/pages/HomePage.jsx
import React from 'react';
import Hero from '../components/homepage/Hero';
import MobileHero from '../components/mobile/MobileHero';
import MobileProductShowcase from '../components/mobile/MobileProductShowcase';
import MobileCategorySection from '../components/mobile/MobileCategorySection';
import TrustBadgeBar from '../components/global/TrustBadgeBar';
import AboutSection from '../components/homepage/AboutSection';
import CategoryGrid from '../components/homepage/CategoryGrid';
import TopSellerCarousel from '../components/homepage/TopSellerCarousel';

export default function HomePage() {
  return (
    <div>
      {/* Desktop Hero */}
      <div className="hidden lg:block">
        <Hero />
      </div>
      
      {/* Mobile Hero */}
      <MobileHero />
      
      {/* Mobile Product Showcase */}
      <MobileProductShowcase />
      
      {/* Mobile Category Section */}
      <MobileCategorySection />
      
      {/* Desktop Sections */}
      <div className="hidden lg:block">
        <TrustBadgeBar />
      </div>
      
      <div className="hidden lg:block">
        <AboutSection />
      </div>
      
      {/* Desktop Category Grid */}
      <div className="hidden lg:block">
        <CategoryGrid />
      </div>
      
      {/* Desktop Carousel */}
      <div className="hidden lg:block">
        <TopSellerCarousel />
      </div>
    </div>
  );
}

