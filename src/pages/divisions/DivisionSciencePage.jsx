// src/pages/divisions/DivisionSciencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, FlaskConical, Microscope, TestTube } from 'lucide-react';
import PageHero from '../../components/global/PageHero';
import AnimatedSection from '../../components/motion/AnimatedSection';

export default function DivisionSciencePage({ division }) {
  const { science } = division;

  const iconMap = {
    'Research': FlaskConical,
    'Testing': TestTube,
    'Formulation': Microscope,
    'Validation': CheckCircle
  };

  return (
    <div>
      <PageHero title={science.title} subtitle={science.subtitle} />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-text-body/80 leading-relaxed">
            {science.intro}
          </p>
        </div>
      </AnimatedSection>

      {/* Expertise */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            What Sets Our {division.name} R&D Apart
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {science.expertise.map((item, index) => {
            const Icon = iconMap[item.title.split(' ')[0]] || FlaskConical;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="font-serif text-xl font-bold text-primary mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-text-body/70 text-sm text-center">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Supporting Your Brand */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">
            Supporting Your Brand at Every Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Faster formulation finalization with performance-focused design',
              'Scalable products with consistent on-farm results',
              'Reduced formulation risk through validated processes',
              'Solutions aligned with growth, immunity, and productivity',
              'Seamless transition from formulation to manufacturing',
              'Complete regulatory and documentation support'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-primary/5 p-4 rounded-xl"
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <span className="text-text-body">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection className="bg-primary text-background text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Build Your {division.shortName} Line?
          </h2>
          <p className="text-xl text-background/90 mb-8">
            Discover Ivy Herbals' science-backed, compliance-driven third-party manufacturing capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${division.slug}/products`}
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-background transition-colors font-semibold inline-flex items-center justify-center gap-2"
            >
              <span>Explore Product Categories</span>
            </Link>
            <Link
              to={`/${division.slug}/process`}
              className="px-8 py-4 rounded-full border-2 border-white/20 text-white hover:bg-white/10 transition-colors font-semibold"
            >
              View Manufacturing Process
            </Link>
          </div>
          <p className="text-lg text-background/80 mt-8 italic">
            Your Brand. Our {division.name} Expertise. One Trusted Manufacturing Journey.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

