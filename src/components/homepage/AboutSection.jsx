// src/components/homepage/AboutSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedSection from '../motion/AnimatedSection';
import { content } from '../../content/data';

export default function AboutSection() {
  const { about } = content.homePage;

  const stats = [
    { icon: Award, value: '25+', label: 'Years Experience' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '100+', label: 'Products' },
    { icon: CheckCircle, value: '99%', label: 'Purity' }
  ];

  return (
    <AnimatedSection className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left - Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={about.image}
              alt="Ayurvedic Laboratory"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* Right - Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full">
            <span className="text-sm font-medium text-primary">About Us</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              {about.title}
            </h2>
            <p className="text-lg text-text-light leading-relaxed">
              {about.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-cream rounded-xl p-6 border border-border"
              >
                <stat.icon className="w-8 h-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-text-light mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button to="/about" className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90">
              Our Story
            </Button>
            <Button to="/our-science" className="px-8 py-3 border-2 border-primary/20 text-primary rounded-full hover:border-primary hover:bg-primary/5">
              Our Science
            </Button>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
