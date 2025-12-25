// src/pages/divisions/Cosmo3pSciencePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FlaskConical, Microscope, TestTube, Shield, Sparkles, Beaker } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Cosmo3pSciencePage() {
  const { primary, secondary } = useDivisionColor();
  const expertiseItems = [
    {
      title: "Custom Formulation Expertise",
      description: "Tailor-made solutions across skincare, haircare, body care, baby care, and men's grooming.",
      icon: FlaskConical
    },
    {
      title: "Herbal + Clinical Ingredient Integration",
      description: "Ayurvedic extracts combined with science-backed actives for enhanced efficacy.",
      icon: Beaker
    },
    {
      title: "Stability & Safety Testing",
      description: "Microbial testing, compatibility checks, and stability studies as per BIS norms.",
      icon: TestTube
    },
    {
      title: "Texture, Fragrance & Sensory Customization",
      description: "Complete control over feel, aroma, appearance, and performance.",
      icon: Sparkles
    },
    {
      title: "Trend-Driven Product Development",
      description: "Clean beauty, sulphate-free, paraben-free, silicone-free, and eco-conscious ranges.",
      icon: Microscope
    },
    {
      title: "Regulatory-Ready Formulations",
      description: "Documentation support for AYUSH, BIS, and Cosmetic Rules, 2020.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="Research & Development" subtitle="Where Nature Meets Cosmetic Science" />

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
                At Ivy Herbals, Research & Development is the backbone of our cosmetic manufacturing excellence. Our in-house R&D team blends Ayurvedic wisdom, herbal actives, and modern cosmetic science to create formulations that are safe, effective, stable, and market-ready.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                We work closely with brands to develop products that align with current beauty trends, regulatory compliance, and consumer expectations, ensuring every formulation performs consistently across batches and scales seamlessly from pilot to commercial production.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                From concept ideation to final approval, our R&D process is designed to support innovation without compromise.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* What Sets Our R&D Apart Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 mb-6 text-center font-primary" style={{ color: primary }}>
              What Sets Our R&D Apart
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
                    <h3 className="text-base lg:text-lg font-bold mb-3" style={{ color: primary }}>
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
              Whether you are launching your first cosmetic product or expanding an existing portfolio, our R&D team ensures:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Faster go-to-market timelines",
                "Scalable formulations with batch-to-batch consistency",
                "Reduced formulation risk through proven testing protocols",
                "Products aligned with both mass and premium beauty segments",
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
              <h2 className="text-h2 mb-4 text-center font-primary" style={{ color: primary }}>
                Ready to Build Your Cosmetic Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Explore our diverse cosmetic manufacturing capabilities and understand how we transform ideas into shelf-ready products.
              </p>
              
              <div className="space-y-3 mb-4">
                <Link
                  to="/cosmo3p/products"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Explore Product Categories</span>
                </Link>
                <p className="text-sm lg:text-base text-text-body/70 ml-7 leading-loose px-4 md:px-6 lg:px-0 text-left">
                  Discover skincare, haircare, body care, baby care, men's grooming & specialized cosmetic ranges.
                </p>
              </div>

              <div className="mb-4">
                <Link
                  to="/cosmo3p/process"
                  className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                  style={{ color: primary }}
                >
                  <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>View Our 4-Step Third-Party Manufacturing Process</span>
                </Link>
                <p className="text-sm lg:text-base text-text-body/70 mt-2 ml-7 leading-loose px-4 md:px-6 lg:px-0 text-left">
                  Understand how we take your product from concept to formulation, packaging, production, and delivery.
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold italic font-primary leading-loose px-4 md:px-6 lg:px-0 text-left" style={{ color: primary }}>
                Your Brand. Our R&D Expertise. One Seamless Manufacturing Journey.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}
