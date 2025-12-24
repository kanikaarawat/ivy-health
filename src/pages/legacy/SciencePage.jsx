// src/pages/SciencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, TestTube, Microscope, CheckCircle } from 'lucide-react';
import PageHero from '../../components/global/PageHero';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { content } from '../../content/data';

export default function SciencePage() {
  const { sciencePage } = content;

  const iconMap = {
    'leaf': Leaf,
    'flask': TestTube,
    'beaker': Microscope,
    'check-circle': CheckCircle
  };

  return (
    <div>
      <PageHero title={sciencePage.hero.title} />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            {sciencePage.intro.title}
          </h2>
          <p className="text-xl text-text-body/80 leading-relaxed">
            {sciencePage.intro.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Process */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Our Process
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sciencePage.process.map((step, index) => {
            const Icon = iconMap[step.icon] || Leaf;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-text-body/70">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Research */}
      <AnimatedSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              {sciencePage.research.title}
            </h2>
            <p className="text-lg text-text-body/80 leading-relaxed mb-6">
              {sciencePage.research.body}
            </p>
            <ul className="space-y-3">
              {sciencePage.research.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start">
                  <CheckCircle className="text-accent mr-3 mt-1 flex-shrink-0" size={24} />
                  <span className="text-text-body">{highlight}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="/aboutpageoverviewimage.png"
              alt="Research Laboratory"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

