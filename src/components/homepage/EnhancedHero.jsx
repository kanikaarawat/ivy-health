// src/components/homepage/EnhancedHero.jsx - Add this to your homepage
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { FloatingBlob, FloatingIcon } from '../animations/FloatingElements';
import { AnimatedWord, GradientText } from '../animations/AnimatedText';
import ScrollReveal from '../animations/ScrollReveal';

export default function EnhancedHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Animated Background Blobs */}
      <FloatingBlob className="w-96 h-96 bg-emerald-200/30 top-10 left-10" delay={0} />
      <FloatingBlob className="w-72 h-72 bg-blue-200/30 bottom-20 right-20" delay={2} />
      <FloatingBlob className="w-80 h-80 bg-purple-200/30 top-1/2 right-10" delay={4} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        {/* Badge */}
        <ScrollReveal direction="down">
          <motion.div
            className="inline-flex items-center gap-2 bg-emerald-100 px-6 py-3 rounded-full mb-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-5 h-5 text-emerald-600" />
            </motion.div>
            <span className="text-emerald-800 font-semibold">
              23+ Years of Excellence
            </span>
          </motion.div>
        </ScrollReveal>

        {/* Main Heading */}
        <ScrollReveal direction="up" delay={0.2}>
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            <AnimatedWord className="block mb-2">Growing the</AnimatedWord>
            <GradientText className="block text-6xl lg:text-8xl">
              Ivy Way
            </GradientText>
          </h1>
        </ScrollReveal>

        {/* Subheading */}
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto">
            Authentic Ayurveda, Modern Science, and Premium Quality
            in Every Product We Create
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-2xl hover:shadow-emerald-500/20"
              >
                <span>Explore Products</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold border-2 border-slate-200 hover:border-emerald-500 transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <FloatingIcon delay={0} className="absolute top-20 left-10">
            <div className="text-6xl">🌿</div>
          </FloatingIcon>
          <FloatingIcon delay={2} className="absolute top-40 right-20">
            <div className="text-6xl">⚗️</div>
          </FloatingIcon>
          <FloatingIcon delay={4} className="absolute bottom-20 left-20">
            <div className="text-6xl">✨</div>
          </FloatingIcon>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-slate-300 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-slate-400 rounded-full"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}

