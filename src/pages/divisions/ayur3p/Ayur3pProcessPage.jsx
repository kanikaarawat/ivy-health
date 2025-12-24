// src/pages/divisions/Ayur3pProcessPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText, Code, Package, Factory, Lightbulb } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { content } from '../../../content/data';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Ayur3pProcessPage() {
  const division = content.divisions.ayurvedic;
  const { process } = division;
  const { primary, secondary } = useDivisionColor();

  const faqs = [
    {
      question: "Can I start with small quantities?",
      answer: "Yes, we offer pilot batches and test runs for selected categories."
    },
    {
      question: "Do you help with label design?",
      answer: "Absolutely. We offer branding and packaging assistance to bring your vision alive."
    },
    {
      question: "Are all products AYUSH compliant?",
      answer: "Yes, all formulations are manufactured under AYUSH guidelines."
    },
    {
      question: "Can I customize formulations?",
      answer: "Yes, we support both ready and fully customized formulations."
    }
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="Our 4-Step Manufacturing Process" />

      {/* Process Steps - Ribbon Style */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative">
              {/* Ribbon-like connecting line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 hidden lg:block z-0" style={{ 
                backgroundColor: primary,
                clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 25%, 0 40%, 100% 45%, 100% 60%, 0 65%, 0 80%, 100% 85%, 100% 100%, 0 100%)',
                left: '60px'
              }} />
              
              <div className="space-y-6 lg:space-y-8">
                {process.steps.map((step, index) => {
                  const icons = [FileText, Code, Package, Factory];
                  const Icon = icons[index];
                  
                  return (
                    <motion.div
                      key={step.number}
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      className="relative flex items-start gap-6 lg:gap-8"
                    >
                      {/* Oval Step Circle with Icon */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full text-white flex items-center justify-center shadow-xl border-4 border-white"
                          style={{ background: `linear-gradient(to bottom right, ${primary}, ${primary}cc)` }}>
                          <Icon className="w-8 h-8 lg:w-10 lg:h-10" />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-white p-5 lg:p-6 rounded-2xl shadow-lg"
                        style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}>
                        <h3 className="text-h3 font-primary mb-2" style={{ color: primary }}>
                          Step {step.number}: {step.title}
                        </h3>
                        <p className="text-text-body/80 mb-2 leading-relaxed text-sm lg:text-base text-justify">
                          {step.description}
                        </p>
                        <p className="text-text-body/70 text-xs lg:text-sm flex items-start gap-2">
                          <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 mt-1 flex-shrink-0" style={{ color: primary }} />
                          <span className="text-justify">{step.guidance}</span>
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bonus Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-6 lg:mt-8 flex items-start gap-6 lg:gap-8 relative z-10"
              >
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full text-white flex items-center justify-center shadow-xl border-4 border-white"
                    style={{ background: `linear-gradient(to bottom right, ${primary}, ${secondary})` }}>
                    <Lightbulb className="w-8 h-8 lg:w-10 lg:h-10" />
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 p-5 lg:p-6 rounded-2xl"
                  style={{ borderColor: `${primary}33` }}>
                  <div className="inline-block px-3 py-1 rounded-full font-bold mb-2 text-xs"
                    style={{ backgroundColor: `${primary}20`, color: primary }}>
                    BONUS
                  </div>
                  <h3 className="text-h3 font-primary mb-2" style={{ color: primary }}>
                    {process.bonus.title}
                  </h3>
                  <p className="text-text-body/80 text-sm lg:text-base text-justify">
                    {process.bonus.description}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ready to Build Section - Card Format */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
              style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
            >
              <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>
                Ready to Build Your Ayurvedic Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
                Discover Ivy Herbals' AYUSH-compliant third-party manufacturing capabilities and see how we transform classical wisdom and modern requirements into shelf-ready Ayurvedic products.
              </p>
              
              <div className="mb-4">
                <Link
                  to="/ayur3p/products"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                  replace_all
True
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Explore Ayurvedic Product Categories</span>
                </Link>
              </div>

              <div className="p-4 lg:p-5 rounded-xl mb-4" style={{ backgroundColor: `${primary}0d` }}>
                <p className="text-sm lg:text-base text-text-body/80 font-medium">
                  Hair & Scalp Health • Immunity & Vitality • Digestive Care • Women's & Men's Wellness • Child Care • Lifestyle & Chronic Care • Skin & Anti-Aging Solutions
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold italic font-primary text-justify" style={{ color: primary }}>
                Your Brand. Our Ayurvedic Expertise. One Trusted Manufacturing Journey.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* MOQ & Timelines */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>
              MOQ & Timelines
            </h2>
            <p className="text-sm lg:text-base text-text-body/80 mb-4 leading-relaxed text-justify">
              Our Minimum Order Quantities (MOQs) and production timelines are designed to provide flexibility while maintaining quality precision.
            </p>
            <div className="p-6 lg:p-8 rounded-2xl"
              style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)`, borderColor: `${primary}1a`, borderWidth: '2px' }}>
              <p className="text-sm lg:text-base text-text-body/70 mb-3 leading-relaxed text-justify">
                Both MOQ and delivery schedules may vary based on custom formulation requirements, ingredient sourcing, and packaging selection.
              </p>
              <p className="text-sm lg:text-base text-text-body/70 leading-relaxed text-justify">
                Lead times are indicative and may adjust slightly based on the uniqueness of your product and chosen packaging materials.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Packaging Excellence */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
                Packaging Excellence
              </h2>
              <p className="text-lg lg:text-xl text-text-body/80 italic mb-1 text-center">
                We don't just manufacture products.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 italic mb-4 text-center">
                We create brand experiences.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg"
              style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
                {[
                  'HDPE / PET bottles',
                  'Blister packs',
                  'Glass jars',
                  'Stick packs & sachets',
                  'Premium paper boxes',
                  'Custom color jars & foiling options'
                ].map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="px-4 py-3 rounded-lg text-center"
                    style={{ backgroundColor: `${primary}0d`, borderColor: `${primary}1a`, borderWidth: '1px' }}
                  >
                    <span className="text-text-body font-medium text-xs lg:text-sm">{option}</span>
                  </motion.div>
                ))}
              </div>
              <p className="text-text-body/70 text-sm lg:text-base italic text-justify">
                We ensure compatibility, safety, and aesthetic appeal in every pack.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQs */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-h1 lg:text-4xl font-primary mb-6 lg:mb-8 text-center" style={{ color: primary }}>
              FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 lg:p-6 shadow-md"
                  style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
                >
                  <div className="flex items-start gap-3 lg:gap-4">
                    <div className="flex-shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-full text-white flex items-center justify-center font-bold"
                      style={{ backgroundColor: primary }}>
                      <span className="text-base lg:text-lg">Q</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-base lg:text-lg mb-2 font-primary" style={{ color: primary }}>
                        {faq.question}
                      </h3>
                      <p className="text-text-body/70 leading-relaxed text-sm lg:text-base text-justify">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}
