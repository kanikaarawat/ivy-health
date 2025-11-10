// src/components/homepage/CategoryGrid.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Star } from 'lucide-react';
import AnimatedSection from '../motion/AnimatedSection';
import { content } from '../../content/data';

export default function CategoryGrid() {
  const { categories } = content.homePage;

  return (
    <AnimatedSection className="bg-gradient-to-b from-cream/30 to-white relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2D5F3F 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6"
        >
          <span className="text-sm font-medium text-primary">Our Collections</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Discover Wellness
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-light"
        >
          Explore our range of premium Ayurvedic products
        </motion.p>
      </div>

      {/* Categories Grid with 3D Interactive Cards */}
      {/* Mobile: Horizontal Scroll */}
      <div className="md:hidden relative z-10">
        <div className="flex gap-4 overflow-x-auto pb-4 px-4 -mx-4 snap-x snap-mandatory scrollbar-hide">
          {categories.map((category, index) => (
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
          {categories.map((_, i) => (
            <div key={i} className="w-2 h-2 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>

      {/* Desktop: Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {categories.map((category, index) => (
          <InteractiveCategoryCard 
            key={category.title} 
            category={category} 
            index={index} 
          />
        ))}
      </div>

      {/* Bottom CTA with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-16 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-2xl transition-all group relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">View All Products</span>
            <ArrowRight size={24} className="relative z-10 group-hover:translate-x-2 transition-transform" />
          </Link>
        </motion.div>
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
      <Link to={category.path} className="group block">
        <motion.div
          className="relative bg-white rounded-3xl overflow-hidden shadow-xl border-2 border-primary/10"
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
          <div className="relative h-72 overflow-hidden">
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
            
            {/* Floating Sparkle */}
            <motion.div
              className="absolute top-6 right-6"
              animate={{ 
                rotate: isHovered ? 360 : 0,
                scale: isHovered ? 1.2 : 1
              }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-8 h-8 text-accent drop-shadow-lg" />
            </motion.div>

            {/* Category Badge */}
            <motion.div
              className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <span className="text-sm font-bold text-primary">{category.offerings?.join(' • ')}</span>
            </motion.div>
          </div>

          {/* Content with Reveal Animation */}
          <div className="p-8 space-y-4 relative">
            <motion.h3 
              className="text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: isHovered ? '100% 0' : '0% 0'
              }}
            >
              {category.title}
            </motion.h3>
            
            <p className="text-text-body/80 leading-relaxed">
              {category.description}
            </p>
            
            {/* Explore Button with Animation */}
            <motion.div 
              className="flex items-center gap-2 text-primary font-semibold pt-2"
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span>Explore</span>
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
