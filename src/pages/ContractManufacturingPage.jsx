// src/pages/ContractManufacturingPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Package } from 'lucide-react';
import PageHero from '../components/global/PageHero';
import AnimatedSection from '../components/motion/AnimatedSection';
import FaqAccordion from '../components/ecommerce/FaqAccordion';
import Button from '../components/ui/Button';
import { content } from '../content/data';

export default function ContractManufacturingPage() {
  const { contractPage } = content;

  return (
    <div>
      <PageHero title={contractPage.hero.title} subtitle={contractPage.hero.subtitle} />

      {/* Overview */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            {contractPage.overview.title}
          </h2>
          <p className="text-xl text-text-body/80 leading-relaxed">
            {contractPage.overview.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Why Choose Ivy Herbals */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
            {contractPage.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contractPage.benefits.list.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                <span className="text-text-body text-lg">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 4-Step Manufacturing Process */}
      <AnimatedSection className="bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
            {contractPage.process.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contractPage.process.steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-2xl h-full">
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="font-bold text-xl text-primary mb-3">{step.title}</h3>
                  <p className="text-text-body/80 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          {/* Bonus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-2xl text-center"
          >
            <div className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent font-bold mb-4">
              BONUS
            </div>
            <h3 className="font-bold text-2xl text-primary mb-3">{contractPage.process.bonus.title}</h3>
            <p className="text-text-body/80 text-lg">{contractPage.process.bonus.description}</p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* What We Do For You */}
      <AnimatedSection className="bg-gradient-to-br from-background to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-12 text-center">
            {contractPage.categories.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contractPage.categories.list.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm"
              >
                <Package className="text-primary flex-shrink-0 mt-1" size={24} />
                <span className="text-text-body text-lg">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* MOQ & Timelines */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            {contractPage.moq.title}
          </h2>
          <p className="text-xl text-text-body/80 mb-6 leading-relaxed">
            {contractPage.moq.description}
          </p>
          <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
            <p className="text-text-body/70 italic">{contractPage.moq.note}</p>
          </div>
        </div>
      </AnimatedSection>

      {/* Packaging Excellence */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4">
              {contractPage.packaging.title}
            </h2>
            <p className="text-xl text-text-body/80 italic">
              {contractPage.packaging.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contractPage.packaging.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white px-6 py-4 rounded-lg shadow-sm text-center border border-primary/10"
              >
                <span className="text-text-body font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8 text-center">
            {contractPage.faqs.title}
          </h2>
          <FaqAccordion faqs={contractPage.faqs.list} />
        </div>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection className="bg-primary text-background text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-background/90 mb-8 max-w-2xl mx-auto">
          Your brand deserves the best beginning. Let's build it together.
        </p>
        <Button to="/contact" className="bg-white text-primary px-8 py-3 rounded-full hover:bg-background">
          Contact Us Today
        </Button>
      </AnimatedSection>
    </div>
  );
}

