// src/components/homepage/CategoryGrid.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';

export default function CategoryGrid() {
  // Manufacturing categories data
  const manufacturingCategories = [
    {
      letter: 'A',
      title: 'Ayurvedic Products Manufacturing',
      subtitle: 'For Human Healthcare',
      description: 'Third-party manufacturing of Ayurvedic and herbal formulations for people, including capsules, tablets, syrups, powders, oils, and more. We offer formulation support, bulk manufacturing, and private labeling with regulatory compliance.',
      offerings: ['Capsules', 'Tablets', 'Syrups', 'Powders', 'Oils'],
      path: '/ayur3p',
      image: '/healthcare.png',
      cta: 'Proceed to Ayurvedic Manufacturing'
    },
    {
      letter: 'B',
      title: 'Herbal Beauty Products Manufacturing',
      subtitle: 'Cosmetics & Personal Care',
      description: 'Contract manufacturing of herbal skincare and haircare products such as creams, gels, shampoos, oils, serums, and lotions. Ideal for brands seeking clean, herbal, and scalable beauty manufacturing.',
      offerings: ['Creams', 'Gels', 'Shampoos', 'Oils', 'Serums', 'Lotions'],
      path: '/cosmo3p',
      image: '/personalcare.png',
      cta: 'Proceed to Beauty Manufacturing'
    },
    {
      letter: 'C',
      title: 'Animal Nutrition Manufacturing',
      subtitle: 'Feed Supplements',
      description: 'Third-party manufacturing of herbal feed supplements for poultry and livestock, focused on nutrition, growth, immunity, and performance.',
      offerings: ['Powders', 'Liquids', 'Bolus'],
      path: '/feed3p',
      image: '/feedsupplements.png',
      cta: 'Proceed to Animal Nutrition Manufacturing'
    }
  ];

  return (
    <AnimatedSection className="bg-gradient-to-r from-primary/10 to-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2D5F3F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Header */}
      <div id="manufacture-section" className="text-center max-w-3xl mx-auto mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          What Do You Want to Manufacture?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-light"
        >
          Please select one of the following manufacturing categories to proceed.
        </motion.p>
      </div>

      {/* Categories Grid with 3D Interactive Cards */}
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden relative z-10">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide">
          {manufacturingCategories.map((category, index) => (
            <div key={category.title} className="flex-shrink-0 w-[85vw] snap-center">
              <InteractiveCategoryCard 
                category={category} 
                index={index} 
              />
            </div>
          ))}
        </div>
        {/* Scroll Indicator */}
        <div className="flex justify-center gap-2 mt-4">
          {manufacturingCategories.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {manufacturingCategories.map((category, index) => (
          <InteractiveCategoryCard 
            key={category.title} 
            category={category} 
            index={index} 
          />
        ))}
      </div>

      {/* Why Choose Ivy Herbals Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-20 relative z-10 mb-4"
      >
        {/* Strong blurred border / glow */}
        <div
          className="absolute -inset-6 bg-primary/20 rounded-3xl blur-[80px] pointer-events-none"
          aria-hidden="true"
        />

        {/* Main card */}
        <div className="relative bg-white/80 backdrop-blur-2xl rounded-3xl p-12 md:p-16 shadow-2xl border border-primary/10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Ivy Herbals?
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10 mb-20">
            {[
              'Dedicated B2B manufacturing company',
              'Expertise in third-party & private label manufacturing',
              'GMP-compliant processes & quality assurance',
              'Scalable production with consistent output',
              'One partner for formulation, manufacturing & supply'
            ].map((point, index, arr) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`bg-white p-6 rounded-xl shadow-lg border border-primary/10 flex items-start gap-3 ${
                  index === arr.length - 1 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-sm md:text-base text-text-body font-medium leading-relaxed">
                  {point}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
      
      {/* Ready to Start CTA - Outside container on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1 }}
        className="text-center px-4 md:px-0 md:max-w-5xl md:mx-auto lg:max-w-none"
      >
        <div 
          onClick={() => {
            const element = document.getElementById('manufacture-section');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl p-10 md:p-14 relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Start?
            </h3>
            <p className="text-xl text-white drop-shadow-md">
              Choose the manufacturing category above to continue.
            </p>
          </div>
        </div>
      </motion.div>

    </AnimatedSection>
  );
}

// Interactive 3D Category Card Component
function InteractiveCategoryCard({ category, index }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, type: "spring", stiffness: 100 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={category.path} className="group block h-full">
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-primary/10 h-full flex flex-col"
          whileHover={{ 
            y: -15,
            scale: 1.03,
            boxShadow: "0 30px 60px rgba(45, 95, 63, 0.25)",
            rotateY: 5
          }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Image with Parallax Effect */}
          <div className="relative h-56 overflow-hidden">
            <motion.img
              src={category.image}
              alt={category.title}
              className="w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            
            {/* Letter Label */}
            <div className="absolute top-4 left-4 z-10">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {category.letter}
              </div>
            </div>
            
            {/* Floating Sparkle */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-7 h-7 text-accent drop-shadow-lg" />
            </motion.div>

            {/* Category Badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span className="text-sm font-bold text-primary">{category.offerings?.join(' • ')}</span>
            </motion.div>
          </div>

          {/* Content with Reveal Animation */}
          <div className="p-6 space-y-3 relative flex flex-col flex-grow">
            <div>
              <motion.h3 
                className="text-2xl md:text-3xl font-bold text-primary mb-2"
              >
                {category.title}
              </motion.h3>
              <p className="text-sm font-semibold text-accent">
                {category.subtitle}
              </p>
            </div>
            
            <p className="text-base text-text-body/80 leading-relaxed flex-grow">
              {category.description}
            </p>
            
            {/* CTA Button with Animation */}
            <motion.div 
              className="flex items-center gap-2 text-primary font-semibold pt-2 mt-auto"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>{category.cta}</span>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.div>

            {/* Shine Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: "-100%", skewX: -20 }}
              animate={{ x: isHovered ? "200%" : "-100%" }}
              transition={{ duration: 0.8 }}
              style={{ pointerEvents: "none" }}
            />
          </div>

          {/* Corner Decorations */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/20 to-transparent rounded-bl-full" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-full" />
        </motion.div>
      </Link>
    </motion.div>
  );
}
