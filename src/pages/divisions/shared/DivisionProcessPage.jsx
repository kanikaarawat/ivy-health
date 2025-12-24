// src/pages/divisions/DivisionProcessPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';

export default function DivisionProcessPage({ division }) {
  const { process } = division;
  const { primary, secondary } = useDivisionColor();

  return (
    <div>
      <PageHero title="Our 4-Step Manufacturing Process" />

      {/* Process Steps */}
      <AnimatedSection className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 hidden md:block"
              style={{ background: `linear-gradient(to bottom, ${primary}, ${secondary}, ${primary}33)` }} />

            <div className="space-y-12">
              {process.steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-16 h-16 rounded-full text-white flex items-center justify-center font-bold text-xl shadow-lg"
                      style={{ background: `linear-gradient(to bottom right, ${primary}, ${secondary})` }}>
                      {step.number}
                    </div>
                    {index < process.steps.length - 1 && (
                      <div className="absolute left-1/2 top-16 w-0.5 h-12 hidden md:block"
                        style={{ background: `linear-gradient(to bottom, ${primary}80, transparent)` }} />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 rounded-2xl"
                    style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
                    <h3 className="text-h2 font-primary mb-3" style={{ color: primary }}>
                      Step {step.number}: {step.title}
                    </h3>
                    <p className="text-text-body/80 mb-2 leading-relaxed text-justify">
                      {step.description}
                    </p>
                    <p className="text-text-body/70 text-sm flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      <span className="text-justify">{step.guidance}</span>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-r from-accent/10 to-primary/10 p-8 rounded-2xl"
          >
            <div className="text-center mb-4">
              <div className="inline-block px-4 py-1.5 bg-accent/20 rounded-full text-accent font-bold mb-4">
                BONUS
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                {process.bonus.title}
              </h3>
            </div>
            <p className="text-text-body/80 text-lg text-justify">
              {process.bonus.description}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* MOQ & Timelines */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6 text-center">
            {process.moq.title}
          </h2>
          <p className="text-xl text-text-body/80 mb-6 leading-relaxed text-justify">
            {process.moq.description}
          </p>
          <div className="bg-white border border-primary/20 p-6 rounded-xl">
            <p className="text-text-body/70 italic text-justify">
              {process.moq.note}
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Packaging Excellence */}
      <AnimatedSection className="bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="font-serif text-4xl font-bold text-primary mb-4 text-center">
              {process.packaging.title}
            </h2>
            <p className="text-xl text-text-body/80 italic text-justify">
              {process.packaging.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {process.packaging.options.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-primary/5 px-6 py-4 rounded-lg text-center border border-primary/10"
              >
                <span className="text-text-body font-medium">{option}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-text-body/70 italic text-justify">
            {process.packaging.description}
          </p>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection className="bg-primary text-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6 text-center">
            Ready to Build Your {division.shortName} Line?
          </h2>
          <p className="text-xl text-background/90 mb-8 text-justify">
            Discover Ivy Herbals' science-backed, compliance-driven third-party manufacturing capabilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${division.slug}/products`}
              className="bg-white text-primary px-8 py-4 rounded-full hover:bg-background transition-colors font-semibold inline-flex items-center justify-center gap-2"
            >
              <span>Explore Product Categories</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-lg text-background/80 mt-8 italic text-justify">
            Your Brand. Our {division.name} Expertise. One Trusted Manufacturing Journey.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

