// src/pages/divisions/Cosmo3pProductsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import { content } from '../../../content/data';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Cosmo3pProductsPage() {
  const division = content.divisions.cosmetics;
  const { primary, secondary } = useDivisionColor();

  const skinCareItems = [
    'Face Creams & Moisturizers – Lightweight to rich textures for daily hydration and skin barrier repair.',
    'Anti-Aging & Collagen Boosting Creams – Formulations targeting fine lines, firmness, and skin elasticity.',
    'Skin Brightening & De-Tanning Gels – Glow-enhancing, pigment-correcting, and soothing gel-based solutions.',
    'Herbal Face Washes – Neem, Aloe, Charcoal, Saffron & customized blends for all skin types.',
    'Clay Masks & Face Packs – Detoxifying, purifying, and rejuvenating mask formulations.',
    'Scrubs & Exfoliators – Gentle to intensive exfoliation with natural beads and actives.',
    'Toners & Facial Mists – Balancing, hydrating, and pore-refining solutions.',
    'Herbal Sunscreens (SPF Range) – Broad-spectrum protection with skin-friendly herbal bases.'
  ];

  const hairCareItems = [
    'Herbal Hair Oils – Onion, Bhringraj, Amla, Hibiscus & custom oil blends.',
    'Hair Serums & Leave-In Conditioners – Frizz control, shine enhancement, and damage repair.',
    'Shampoos – Anti-dandruff, anti-hairfall, nourishing, and scalp-care variants.',
    'Hair Masks & Conditioners – Deep conditioning and repair-focused formulations.'
  ];

  const bodyCareItems = [
    'Body Lotions & Body Butters – Long-lasting hydration for all skin types.',
    'Body Scrubs & Polishes – Exfoliating and skin-renewing formulations.',
    'Massage Oils – Relaxation-focused and therapeutic herbal blends.',
    'Herbal Soaps – Glycerin, Charcoal, Sandalwood, Turmeric & customized bases.',
    'Bath Gels & Shower Creams – Mild, foaming, and skin-friendly cleansing solutions.'
  ];

  const specialisedItems = [
    'Under-Eye Creams & Serums – Dark circle, puffiness, and fine line solutions.',
    'Lip Balms & Lip Scrubs – Nourishing, repairing, and exfoliating lip care.',
    'Foot & Hand Creams – Repair, hydration, and barrier-protection formulas.',
    'Stretch Mark & Pigmentation Care – Specialized blends for skin tone correction and elasticity.',
    'Baby Care & Sensitive Skin Range – Ultra-mild, safe, and dermatologically tested formulations.',
    'Beard Oils & Men’s Grooming Essentials – Premium grooming solutions for modern men.'
  ];

  const trendingItems = [
    'Ayurvedic Luxury Skincare Line – Premium formulations rooted in traditional herbs with modern aesthetics.',
    'Eco-Friendly & Sustainable Packaging Series – PCR plastics, refill packs, glass, and recyclable options.',
    'Sulphate-Free, Paraben-Free & Silicone-Free Range – Clean-label products aligned with conscious beauty.',
    'Clinical-Grade Herbal Actives – High-performance formulations for informed, modern consumers.'
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 }
    })
  };

  const renderListCards = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{ backgroundColor: `${primary}0d` }}
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primary }} />
          <p className="text-sm lg:text-base text-text-body/80 leading-relaxed text-justify">{item}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="pb-20 lg:pb-0">
      <PageHero
        title="Product Categories"
        subtitle="Comprehensive Cosmetic Manufacturing Solutions"
      />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-text-body/80 leading-relaxed text-justify">
            At Ivy Herbals, we offer a wide spectrum of cosmetic product categories designed to serve
            mass, premium, dermatology-inspired, and ayurvedic beauty brands. Each category is
            developed with a focus on safety, efficacy, sensory appeal, and regulatory compliance,
            ensuring products that perform well and scale effortlessly.
          </p>
        </div>
      </AnimatedSection>

      {/* Skin Care Range */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
              Skin Care Range
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-2 font-semibold">
              Advanced Skincare Powered by Nature &amp; Science
            </p>
            <p className="text-sm lg:text-base text-text-body/80 mb-6 leading-relaxed text-justify">
              Our skincare formulations combine herbal actives with modern cosmetic technology to
              deliver visible results while remaining gentle on the skin.
            </p>
            {renderListCards(skinCareItems)}
          </div>
        </div>
      </AnimatedSection>

      {/* Hair Care Range */}
      <AnimatedSection className="bg-white py-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
              Hair Care Range
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-2 font-semibold">
              Nourishment, Strength &amp; Scalp Wellness
            </p>
            <p className="text-sm lg:text-base text-text-body/80 mb-6 leading-relaxed text-justify">
              Our hair care range is designed to support scalp health and hair vitality using
              time-tested herbs and modern conditioning systems.
            </p>
            {renderListCards(hairCareItems)}
          </div>
        </div>
      </AnimatedSection>

      {/* Body Care Range */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
              Body Care Range
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-2 font-semibold">
              Everyday Luxury for Skin Wellness
            </p>
            <p className="text-sm lg:text-base text-text-body/80 mb-6 leading-relaxed text-justify">
              We manufacture body care products that balance indulgent textures with functional skin
              benefits.
            </p>
            {renderListCards(bodyCareItems)}
          </div>
        </div>
      </AnimatedSection>

      {/* Specialised Categories */}
      <AnimatedSection className="bg-white py-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
              Specialised Categories
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-2 font-semibold">
              Targeted Solutions for Specific Needs
            </p>
            <p className="text-sm lg:text-base text-text-body/80 mb-6 leading-relaxed text-justify">
              Designed for niche markets and focused skincare requirements.
            </p>
            {renderListCards(specialisedItems)}
          </div>
        </div>
      </AnimatedSection>

      {/* Trending Segments */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
              Trending Segments
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-2 font-semibold">
              Future-Ready Beauty Categories
            </p>
            <p className="text-sm lg:text-base text-text-body/80 mb-6 leading-relaxed text-justify">
              We help brands stay ahead of market trends with innovative and consumer-preferred
              segments.
            </p>
            {renderListCards(trendingItems)}
          </div>
        </div>
      </AnimatedSection>

      {/* Built for Your Brand */}
      <AnimatedSection className="bg-white py-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-h2 font-primary mb-4" style={{ color: primary }}>
            Built for Your Brand
          </h2>
          <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
            All product categories can be:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-4">
            {[
              'Customized (formulation, fragrance, texture, color)',
              'Private Labeled',
              'Manufactured at scale',
              'Supported with branding & regulatory documentation'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-3 p-3 rounded-xl"
                style={{ backgroundColor: `${primary}0d` }}
              >
                <CheckCircle className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: primary }} />
                <p className="text-sm lg:text-base text-text-body/80">{point}</p>
              </motion.div>
            ))}
          </div>
          <p className="text-base lg:text-lg font-semibold text-text-body/90 italic">
            Your Product Vision. Our Manufacturing Expertise.
          </p>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>
              Ready to Build Your Cosmetic Line?
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
              Explore our diverse cosmetic manufacturing capabilities and understand how we
              transform ideas into shelf-ready products.
            </p>

            <div className="mb-4 text-center">
              <Link
                to="/cosmo3p/process"
                className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                style={{ color: primary }}
              >
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>View Our 4-Step Third-Party Manufacturing Process</span>
              </Link>
            </div>

            <p className="text-lg lg:text-xl font-bold italic font-primary text-justify" style={{ color: primary }}>
              Your Brand. Our R&D Expertise. One Seamless Manufacturing Journey.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}


