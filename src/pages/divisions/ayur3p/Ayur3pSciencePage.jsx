// src/pages/divisions/Ayur3pSciencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FlaskConical, Microscope, TestTube, Shield, Book } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Ayur3pSciencePage() {
  const { primary, secondary } = useDivisionColor();
  const expertiseItems = [
    {
      title: "Classical & Proprietary Formulation Expertise",
      description: "Development of formulations based on Ayurvedic texts as well as custom proprietary blends for modern healthcare needs.",
      icon: Book
    },
    {
      title: "Authentic Herb Selection & Validation",
      description: "Use of properly identified, authenticated, and tested raw herbs to ensure purity, potency, and efficacy.",
      icon: Shield
    },
    {
      title: "Traditional Knowledge + Scientific Validation",
      description: "Ayurvedic principles supported by process control, documentation, and safety evaluation.",
      icon: FlaskConical
    },
    {
      title: "Stability, Safety & Quality Evaluation",
      description: "Batch-wise quality checks, stability assessment, and safety validation in line with AYUSH and GMP norms.",
      icon: TestTube
    },
    {
      title: "Dosage Form Optimization",
      description: "Expertise across tablets, capsules, syrups, churna, avaleh, oils, and ghrita for optimal therapeutic delivery.",
      icon: Microscope
    },
    {
      title: "Regulatory-Ready Formulations",
      description: "Complete documentation support for AYUSH licensing, product approval, and labeling compliance.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="Research & Development" subtitle="Where Classical Ayurveda Meets Modern Science" />

      {/* Research & Development Section */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                At Ivy Herbals, Research & Development forms the foundation of our Ayurvedic manufacturing excellence. Our in-house R&D team integrates classical Ayurvedic knowledge, authenticated herbal actives, and modern scientific validation to develop formulations that are safe, effective, compliant, and market-ready.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                We work closely with brands to create products aligned with AYUSH guidelines, therapeutic relevance, and evolving healthcare needs, ensuring every formulation maintains batch-to-batch consistency and scales seamlessly from pilot batches to commercial production.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                From classical reference mapping to final formulation approval, our R&D process is designed to preserve Ayurvedic integrity while meeting modern regulatory and quality expectations.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* What Sets Our Ayurvedic R&D Apart Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 mb-6 text-center font-primary" style={{ color: primary }}>
              What Sets Our Ayurvedic R&D Apart
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {expertiseItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-5 lg:p-6 shadow-md"
                    style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
                  >
                    <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${primary}1a` }}>
                      <Icon className="w-6 h-6" style={{ color: primary }} />
                    </div>
                    <h3 className="text-h3 mb-3 font-primary" style={{ color: primary }}>
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Supporting Your Brand at Every Stage Section - Container with Cards */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center" style={{ color: primary }}>
              Supporting Your Brand at Every Stage
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-6 leading-loose px-4 md:px-6 lg:px-0 text-left">
              Whether you are launching a new Ayurvedic healthcare brand or expanding an existing portfolio, our R&D team ensures:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Faster formulation finalization with classical accuracy",
                "Scalable products with consistent therapeutic performance",
                "Reduced formulation risk through validated processes",
                "Products aligned with preventive, therapeutic, and wellness segments",
                "Seamless transition from formulation to manufacturing and packaging"
              ].map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-xl p-4 lg:p-5"
                  style={{ backgroundColor: `${primary}0d`, borderColor: `${primary}1a`, borderWidth: '2px' }}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primary }} />
                    <p className="text-sm lg:text-base text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">{point}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ready to Build Section */}
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
              <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-center" style={{ color: primary }}>
                Ready to Build Your Ayurvedic Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Discover Ivy Herbals' AYUSH-compliant third-party manufacturing capabilities and see how we transform classical wisdom and modern requirements into shelf-ready Ayurvedic products.
              </p>
              
              <div className="space-y-3 mb-4">
                <Link
                  to="/ayur3p/products"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Explore Ayurvedic Product Categories</span>
                </Link>
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${primary}0d` }}>
                  <p className="text-sm lg:text-base text-text-body/80 font-medium">
                    Hair & Scalp Health • Immunity & Vitality • Digestive Care • Women's & Men's Wellness • Child Care • Lifestyle & Chronic Care • Skin & Anti-Aging Solutions
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <Link
                  to="/ayur3p/process"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>View Our Ayurvedic Manufacturing Process</span>
                </Link>
                <p className="text-sm lg:text-base text-text-body/70 mt-2 ml-7 leading-loose px-4 md:px-6 lg:px-0 text-left">
                  Understand how we take your product from formula selection to compliant manufacturing, packaging, and delivery.
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold italic leading-loose px-4 md:px-6 lg:px-0 text-left" style={{ color: primary }}>
                Your Brand. Our Ayurvedic Expertise. One Trusted Manufacturing Journey.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}
