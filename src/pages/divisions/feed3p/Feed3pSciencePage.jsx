// src/pages/divisions/Feed3pSciencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FlaskConical, Microscope, TestTube, Shield, Beaker } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Feed3pSciencePage() {
  const { primary, secondary } = useDivisionColor();
  const expertiseItems = [
    {
      title: "Segment-Specific Formulation Expertise",
      description: "Customized nutrition solutions for poultry, ruminants, aqua, pets, equine, and swine, designed around growth stage, production goals, and environmental conditions.",
      icon: FlaskConical
    },
    {
      title: "Herbal Actives + Nutrition Science Integration",
      description: "Synergistic use of Ayurvedic herbs, vitamins, minerals, amino acids, enzymes, probiotics, and functional additives for enhanced bioavailability and performance.",
      icon: Beaker
    },
    {
      title: "Ingredient Authentication & Performance Validation",
      description: "Strict raw material identification, quality testing, and functional validation to ensure safety, consistency, and efficacy.",
      icon: Shield
    },
    {
      title: "Stability, Safety & Quality Evaluation",
      description: "Batch-wise quality checks, stability assessment, and safety evaluation in accordance with GMP, HACCP, and feed regulatory norms.",
      icon: TestTube
    },
    {
      title: "Dosage Form & Delivery Optimization",
      description: "Expertise across powders, granules, liquids, premixes, boluses, and water-soluble formulations for efficient intake and on-farm application.",
      icon: Microscope
    },
    {
      title: "Regulatory-Ready Formulations",
      description: "Complete technical documentation support including composition sheets, COA, labels, and statutory compliance for domestic and export markets.",
      icon: CheckCircle
    }
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="Research & Development" subtitle="Where Ayurvedic Wisdom Meets Modern Nutrition Science" />

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
                At Ivy Herbals, Research & Development is the backbone of our Animal Nutrition manufacturing excellence. Our in-house R&D team integrates Ayurvedic principles, functional herbal actives, nutritional science, and performance-based validation to develop safe, effective, compliant, and farm-ready feed supplements.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                We work closely with brands, veterinarians, and nutrition experts to create products aligned with animal health needs, regulatory requirements, and on-field performance expectations, ensuring every formulation delivers consistent results across batches and scales smoothly from pilot trials to commercial production.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                From ingredient selection and nutritional balancing to final formulation approval, our R&D process is designed to deliver measurable outcomes without compromising natural integrity or compliance.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* What Sets Our Animal Nutrition R&D Apart Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 mb-6 text-center font-primary" style={{ color: primary }}>
              What Sets Our Animal Nutrition R&D Apart
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
            <h2 className="text-h2 mb-4 text-center font-primary" style={{ color: primary }}>
              Supporting Your Brand at Every Stage
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-6 leading-loose px-4 md:px-6 lg:px-0 text-left">
              Whether you are launching a new animal nutrition brand or expanding an existing feed supplement portfolio, our R&D team ensures:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Faster formulation finalization with performance-focused design",
                "Scalable products with consistent on-farm results",
                "Reduced formulation risk through validated nutrition protocols",
                "Solutions aligned with growth, immunity, reproduction, gut health, stress management, and productivity",
                "Seamless transition from formulation to manufacturing, packaging, and dispatch"
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
              <h2 className="text-h2 mb-4 text-center font-primary" style={{ color: primary }}>
                Ready to Build Your Animal Nutrition Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Discover Ivy Herbals' science-backed, compliance-driven third-party manufacturing capabilities for feed supplements and veterinary nutrition, where nutrition science, herbal actives, and performance-driven formulations come together to deliver farm-ready, scalable products.
              </p>
              
              <div className="space-y-3 mb-4">
                <Link
                  to="/feed3p/products"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Explore Animal Nutrition Product Categories</span>
                </Link>
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${primary}0d` }}>
                  <p className="text-sm lg:text-base text-text-body/80 font-medium mb-2">
                    Poultry • Ruminants • Aqua • Pets • Equine • Swine
                  </p>
                  <p className="text-sm lg:text-base text-text-body/80 font-medium">
                    Growth & FCR • Immunity • Gut Health • Fertility • Stress & Heat Management • Productivity Solutions
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <Link
                  to="/feed3p/process"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>View Our Manufacturing Process</span>
                </Link>
                <p className="text-sm lg:text-base text-text-body/70 mt-2 ml-7 leading-loose px-4 md:px-6 lg:px-0 text-left">
                  Understand how we take your product from formula selection and validation to compliant manufacturing, packaging, and on-time delivery.
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold italic leading-loose px-4 md:px-6 lg:px-0 text-left" style={{ color: primary }}>
                Your Brand. Our Nutritional Expertise. One Trusted Manufacturing Journey.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}
