// src/components/homepage/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Leaf, Award, Users, Sparkles, Shield } from 'lucide-react';
import Button from '../ui/Button';
import { content } from '../../content/data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function Hero() {
  const { hero } = content.homePage;
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center bg-gradient-to-br from-white via-primary/5 to-secondary/10 overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-secondary/10 to-accent/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-10"
            >
              {/* Small Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full"
              >
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Ayurvedic Wellness</span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.1]"
                >
                  {hero.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-text-light max-w-xl leading-relaxed"
                >
                  {hero.subtitle}
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                <Button to="/shop" className="group bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90">
                  <span className="flex items-center gap-2">
                    {hero.cta || 'Explore Products'}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button to="/our-science" className="px-8 py-4 rounded-full border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5">
                  Our Science
                </Button>
              </motion.div>

              {/* Stats with Animated Counters */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 pt-4"
              >
                <motion.div 
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-primary/10"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 95, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Award className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {inView && <CountUp end={23} duration={2} />}+
                    </div>
                    <div className="text-sm text-text-light font-medium">Years</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-primary/10"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 95, 63, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(45, 95, 63, 0.4)",
                        "0 0 0 20px rgba(45, 95, 63, 0)",
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Users className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      {inView && <CountUp end={500} duration={2.5} />}+
                    </div>
                    <div className="text-sm text-text-light font-medium">Clients</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right Image with Parallax */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y: y2 }}
              className="lg:col-span-6 mt-8 lg:mt-0"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Decorative Elements */}
                <motion.div 
                  className="hidden lg:block absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5] 
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div 
                  className="hidden lg:block absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-secondary/30 to-accent/30 rounded-full blur-2xl"
                  animate={{ 
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.7, 0.5] 
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* Main Image with 3D Effect */}
                <motion.div 
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 5,
                    rotateX: -5,
                    boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.img
                    src="/hero.png"
                    alt="Ayurvedic Products"
                    className="w-full h-[400px] lg:h-[600px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                </motion.div>

                {/* Floating Badge 1 - Certified */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="absolute -bottom-4 -left-2 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-6 max-w-[140px] lg:max-w-xs border-2 border-primary/10"
                >
                    <div className="flex items-center gap-2 lg:gap-4">
                    <motion.div 
                      className="w-10 h-10 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                      <Leaf className="w-5 h-5 lg:w-7 lg:h-7 text-primary" />
                    </motion.div>
                    <div>
                      <div className="text-[10px] lg:text-xs text-text-light uppercase tracking-wide">Certified</div>
                      <div className="text-sm lg:text-xl font-bold text-primary whitespace-nowrap">100% Pure</div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Badge 2 - AYUSH */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 bg-gradient-to-br from-accent to-accent/80 text-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-5 border-2 border-white/20"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-center"
                  >
                    <Shield className="w-6 h-6 lg:w-8 lg:h-8 mb-1 lg:mb-2 mx-auto" />
                    <div className="text-[10px] lg:text-xs uppercase tracking-wide">AYUSH</div>
                    <div className="text-sm lg:text-lg font-bold whitespace-nowrap">Certified</div>
                  </motion.div>
                </motion.div>

                {/* Sparkle Effects */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-accent rounded-full"
                    style={{
                      top: `${20 + i * 15}%`,
                      right: `${10 + i * 10}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.4,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
