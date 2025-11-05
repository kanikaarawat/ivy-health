// src/pages/ContractManufacturingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Package, Factory, Palette } from 'lucide-react';
import PageHero from '../components/global/PageHero';
import AnimatedSection from '../components/motion/AnimatedSection';
import FaqAccordion from '../components/ecommerce/FaqAccordion';
import Button from '../components/ui/Button';
import { content } from '../content/data';

export default function ContractManufacturingPage() {
  const { contractPage } = content;

  const iconMap = {
    'Product Development': Package,
    'Manufacturing': Factory,
    'Packaging': Palette
  };

  return (
    <div>
      <PageHero title={contractPage.hero.title} />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            {contractPage.intro.title}
          </h2>
          <p className="text-xl text-text-body/80 leading-relaxed">
            {contractPage.intro.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Services */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Our Services
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contractPage.services.map((service, index) => {
            const Icon = iconMap[service.title];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Icon className="text-accent" size={32} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                  {service.title}
                </h3>
                <p className="text-text-body/80 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <span className="text-accent mr-2">✓</span>
                      <span className="text-text-body/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </AnimatedSection>

      {/* Capabilities */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
            {contractPage.capabilities.title}
          </h2>
          <div className="bg-gradient-to-br from-primary to-primary/80 text-background p-8 rounded-2xl">
            <p className="text-xl mb-6">{contractPage.capabilities.capacity}</p>
            <div className="flex flex-wrap gap-3">
              {contractPage.capabilities.formats.map((format) => (
                <span
                  key={format}
                  className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-medium"
                >
                  {format}
                </span>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="bg-gradient-to-br from-background to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion faqs={contractPage.faqs} />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-primary text-background text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
          Let's discuss how we can bring your vision to life with our expertise and facilities.
        </p>
        <Button to="/contact" variant="primary">
          Contact Us Today
        </Button>
      </AnimatedSection>
    </div>
  );
}

