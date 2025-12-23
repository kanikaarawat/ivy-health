// src/components/homepage/AboutSection.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle, Leaf } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../motion/AnimatedSection';
import { content } from '../../content/data';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const { about } = content.homePage;
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  const stats = [
    { 
      icon: Award, 
      primaryValue: 23, 
      primaryLabel: 'Years Experience', 
      secondaryValue: 500, 
      secondaryLabel: 'Business Clients',
      color: 'from-primary to-primary/60', 
      suffix: '+' 
    },
    { 
      icon: TrendingUp, 
      primaryValue: 200, 
      primaryLabel: 'Formulations', 
      secondaryValue: 5, 
      secondaryLabel: 'Divisions',
      color: 'from-accent to-accent/60', 
      suffix: '+' 
    }
  ];

  return (
    <AnimatedSection className="bg-gradient-to-b from-white to-cream/30 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Left - Image with Interactive Effects */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Decorative Background Elements */}
          <motion.div 
            className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl"
            whileHover={{ scale: 1.05, rotate: 3 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Main Image Container */}
          <motion.div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 30px 60px rgba(0,0,0,0.25)"
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={about.image}
              alt="Ayurvedic Laboratory"
              className="w-full h-[300px] lg:h-[350px] object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            {/* Image Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <motion.div
              className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Leaf className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-bold text-primary">ISO Certified</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Corner Accent */}
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-full blur-xl opacity-50" />
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              {about.title}
            </h2>
            <p className="text-sm md:text-base text-text-light leading-relaxed">
              {about.description}
            </p>
          </div>

          {/* Stats Grid with Animated Counters */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.primaryLabel}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
                className="relative bg-white rounded-2xl p-4 border-2 border-primary/10 overflow-hidden group cursor-pointer"
              >
                {/* Animated Background Gradient */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                
                {/* Icon with Animation */}
                <motion.div
                  className="relative z-10 mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-primary" />
                </motion.div>
                
                {/* Primary Stat */}
                <div className="relative z-10 mb-3">
                  <div className="text-3xl font-bold text-primary mb-1">
                    {inView && <CountUp end={stat.primaryValue} duration={2.5} delay={index * 0.2} />}{stat.suffix}
                  </div>
                  <div className="text-xs text-text-body font-medium">{stat.primaryLabel}</div>
                </div>

                {/* Secondary Stat */}
                <div className="relative z-10 pt-3 border-t border-primary/10">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {inView && <CountUp end={stat.secondaryValue} duration={2.5} delay={index * 0.2 + 0.3} />}{stat.suffix}
                  </div>
                  <div className="text-xs text-text-body font-medium">{stat.secondaryLabel}</div>
                </div>

                {/* Hover Effect Circle */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/5 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button to="/about" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90">
              Our Story
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
