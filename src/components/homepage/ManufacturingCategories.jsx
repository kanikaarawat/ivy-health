// src/components/homepage/ManufacturingCategories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Package, CheckCircle, Factory } from 'lucide-react';
import { content } from '../../content/data';
import AnimatedSection from '../motion/AnimatedSection';

export default function ManufacturingCategories() {
  const { divisions } = content;
  // Order: A) Ayurvedic, B) Cosmetics, C) Feed
  const divisionsList = [divisions.ayurvedic, divisions.cosmetics, divisions.feed];

  const whyChoosePoints = [
    'Dedicated B2B manufacturing company',
    'ISO Certified',
    'HACCP Certified',
    'GMP Certified',
    'AYUSH Certified',
    'Expertise in third-party & private label manufacturing',
    'GMP-compliant processes & quality assurance',
    'Scalable production with consistent output',
    'One partner for formulation, manufacturing & supply'
  ];

  const certificationSubtitles = {
    'ISO Certified': 'Certified Excellence',
    'HACCP Certified': 'Certified Excellence',
    'GMP Certified': 'Certified Excellence',
    'AYUSH Certified': 'Certified Excellence'
  };

  return (
    <AnimatedSection className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Category Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-primary text-center mb-4">
            What Do You Want to Manufacture?
          </h3>
          <p className="text-center text-text-light mb-12 text-lg">
            Please select one of the following manufacturing categories to proceed.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {divisionsList.map((division, index) => {
              const icons = {
                ayurvedic: Leaf,
                feed: Package,
                cosmetics: Sparkles
              };
              const Icon = icons[division.slug.replace('3p', '')] || Factory;
              
              const cardImages = {
                ayur3p: '/healthcare.png',
                feed3p: '/feedsupplements.png',
                cosmo3p: '/personalcare.png'
              };
              
              const cardData = {
                ayur3p: {
                  letter: 'A',
                  title: 'Ayurvedic Products Manufacturing',
                  subtitle: 'For Human Healthcare',
                  badge: 'Capsules • Tablets • Syrups • Powders • Oils',
                  description: 'Third-party manufacturing of Ayurvedic and herbal formulations for people, including capsules, tablets, syrups, powders, oils, and more. We offer formulation support, bulk manufacturing, and private labeling with regulatory compliance.',
                  cta: 'Proceed to Ayurvedic Manufacturing'
                },
                feed3p: {
                  letter: 'C',
                  title: 'Animal Nutrition Manufacturing',
                  subtitle: 'Feed Supplements',
                  badge: 'Powders • Liquids • Bolus',
                  description: 'Third-party manufacturing of herbal feed supplements for poultry and livestock, focused on nutrition, growth, immunity, and performance.',
                  cta: 'Proceed to Animal Nutrition Manufacturing'
                },
                cosmo3p: {
                  letter: 'B',
                  title: 'Herbal Beauty Products Manufacturing',
                  subtitle: 'Cosmetics & Personal Care',
                  badge: 'Creams • Gels • Shampoos • Oils • Serums • Lotions',
                  description: 'Contract manufacturing of herbal skincare and haircare products such as creams, gels, shampoos, oils, serums, and lotions. Ideal for brands seeking clean, herbal, and scalable beauty manufacturing.',
                  cta: 'Proceed to Beauty Manufacturing'
                }
              };
              
              const data = cardData[division.slug];
              
              return (
                <motion.div
                  key={division.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Link to={`/${division.slug}`}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-primary/10 hover:shadow-2xl transition-all h-full flex flex-col relative group/card">
                      {/* Hover Background Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 rounded-2xl"
                        initial={false}
                      />
                      
                      {/* Image Section */}
                      <div className="relative h-64 overflow-hidden">
                        <motion.img
                          src={cardImages[division.slug] || '/hero.png'}
                          alt={division.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                        {/* Letter Label */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                            {data.letter}
                          </div>
                        </div>
                        {/* Product Badge Overlay */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                          <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                            <span className="text-sm font-medium text-primary">{data.badge}</span>
                          </div>
                        </div>
                        {/* Star Icon */}
                        <div className="absolute top-4 right-4 z-10">
                          <Sparkles className="w-5 h-5 text-white/80 drop-shadow-lg" />
                        </div>
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                      </div>
                      
                      <div className="p-6 flex flex-col flex-grow relative z-10">
                        {/* Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-2 group-hover/card:text-accent transition-colors">
                          {data.title}
                        </h4>
                        
                        {/* Subtitle */}
                        <p className="text-sm font-semibold text-accent mb-4">
                          {data.subtitle}
                        </p>

                        {/* Description */}
                        <p className="text-text-light mb-6 flex-grow leading-relaxed group-hover/card:text-text-body transition-colors">
                          {data.description}
                        </p>

                        {/* CTA */}
                        <div className="inline-flex items-center gap-2 bg-gray-100 group-hover/card:bg-primary px-6 py-3 rounded-full transition-colors mt-auto">
                          <span className="font-semibold text-primary group-hover/card:text-white transition-colors">
                            {data.cta}
                          </span>
                          <ArrowRight className="w-5 h-5 text-primary group-hover/card:text-white group-hover/card:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Why Choose Ivy Herbals Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Ivy Herbals?
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoosePoints.map((point, index) => {
              const hasSubtitle = certificationSubtitles[point];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-primary/10 flex flex-col"
                >
                  <div className="flex items-start gap-4 mb-2">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="text-text-body font-medium">{point}</div>
                      {hasSubtitle && (
                        <div className="text-sm text-text-light mt-2">{certificationSubtitles[point]}</div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Ready to Start CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary to-primary/90 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
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
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start?
              </h3>
              <p className="text-xl text-white/90">
                Choose the manufacturing category above to continue.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}

