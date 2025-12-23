// src/pages/ManufacturingLandingPage.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles, Package, CheckCircle, Factory, Shield, Award, Users } from 'lucide-react';
import { content } from '../content/data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function ManufacturingLandingPage() {
  const { divisions } = content;
  const divisionsList = [divisions.ayurvedic, divisions.feed, divisions.cosmetics];
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const whyChoosePoints = [
    'Dedicated B2B manufacturing company',
    'Expertise in third-party & private label manufacturing',
    'GMP-compliant processes & quality assurance',
    'Scalable production with consistent output',
    'One partner for formulation, manufacturing & supply'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Beautiful Design */}
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
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary/5 rounded-full mb-6"
              >
                <Factory className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">B2B Contract Manufacturing</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-[1.1]"
              >
                Welcome to Ivy Herbals
              </motion.h1>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-body mb-6"
              >
                Your Trusted Third-Party Manufacturing Partner
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-text-light max-w-3xl mx-auto leading-relaxed"
              >
                At Ivy Herbals, we specialize in B2B contract manufacturing of high-quality herbal and Ayurvedic products.
                <br />
                <span className="font-medium text-text-body mt-2 block">
                  If you are a brand owner, marketer, exporter, or distributor, choose the category you want to manufacture and we will take you to the right division.
                </span>
              </motion.p>
            </motion.div>

            {/* Category Selection Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mb-16"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-2xl md:text-3xl font-bold text-primary text-center mb-4"
              >
                What Do You Want to Manufacture?
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-text-light mb-12 text-lg"
              >
                Please select one of the following manufacturing categories to proceed.
              </motion.p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {divisionsList.map((division, index) => {
                  const icons = {
                    ayurvedic: Leaf,
                    feed: Package,
                    cosmetics: Sparkles
                  };
                  const Icon = icons[division.slug.replace('3p', '')] || Factory;
                  
                  return (
                    <motion.div
                      key={division.slug}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 + index * 0.1 }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group"
                    >
                      <Link to={`/${division.slug}`}>
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-primary/10 hover:border-primary/30 transition-all h-full flex flex-col relative overflow-hidden">
                          {/* Hover Background Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                          />
                          
                          {/* Category Label */}
                          <div className="flex items-center gap-3 mb-6 relative z-10">
                            <motion.div 
                              className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Icon className="w-6 h-6 text-primary" />
                            </motion.div>
                            <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                              {index === 0 ? 'A)' : index === 1 ? 'B)' : 'C)'} {division.shortName}
                            </span>
                          </div>

                          {/* Title */}
                          <h4 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors relative z-10">
                            {division.name}
                          </h4>

                          {/* Description */}
                          <p className="text-text-light mb-6 flex-grow leading-relaxed relative z-10">
                            {division.description}
                          </p>

                          {/* Products */}
                          <div className="mb-6 relative z-10">
                            <p className="text-sm font-medium text-text-body mb-2">Products:</p>
                            <p className="text-sm text-text-light">{division.products}</p>
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-2 text-primary font-semibold group-hover:text-accent transition-colors relative z-10">
                            <span>
                              {index === 0
                                ? 'Proceed to Ayurvedic Manufacturing'
                                : index === 1
                                ? 'Proceed to Animal Nutrition Manufacturing'
                                : 'Proceed to Beauty Manufacturing'}
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Ivy Herbals Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Ivy Herbals?
            </h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyChoosePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-lg border border-primary/10"
              >
                <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <span className="text-text-body font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Beautiful Cards */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Award, label: 'Years of Excellence', value: 23 },
              { icon: Users, label: 'Business Clients', value: 500 },
              { icon: Factory, label: 'Formulations', value: 200 },
              { icon: Shield, label: 'Certifications', value: 4 }
            ].map((stat, index) => (
              <motion.div
                key={index}
                ref={index === 0 ? ref : null}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-primary/10"
              >
                <motion.div
                  className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center mx-auto mb-4"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <stat.icon className="w-7 h-7 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-primary mb-1">
                  {inView && <CountUp end={stat.value} duration={2} />}+
                </div>
                <div className="text-sm text-text-light font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start CTA */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/90 text-white overflow-hidden">
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Choose the manufacturing category above to continue.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
