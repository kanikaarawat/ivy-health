// src/components/homepage/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { content } from '../../content/data';

export default function Hero() {
  const { hero } = content.homePage;
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-20 items-start">
            {/* Left Content - Full width on mobile, half on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-8 lg:space-y-10 lg:pt-12 max-w-full lg:max-w-xl"
            >

              {/* Main Heading */}
              <div className="space-y-6 lg:space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] text-center"
                >
                  Welcome to Ivy Herbals
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl lg:text-xl text-text-light leading-relaxed text-justify"
                >
                  Your Trusted Third-Party Manufacturing Partner
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  className="text-lg lg:text-base text-text-light leading-relaxed text-justify"
                >
                  At Ivy Herbals, we specialize in B2B contract manufacturing of high-quality herbal and Ayurvedic products.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-lg lg:text-base text-text-light leading-relaxed text-justify"
                >
                  If you are a brand owner, marketer, exporter, or distributor, choose the category you want to manufacture and we will take you to the right division.
                </motion.p>
              </div>


            </motion.div>

            {/* Right Image with Parallax - Hidden on mobile */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y: y2 }}
              className="hidden lg:block lg:col-span-6 mt-4 lg:mt-8 lg:pt-4"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none overflow-visible">
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
                    className="w-full h-[260px] md:h-[360px] lg:h-[600px] object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Image Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
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
