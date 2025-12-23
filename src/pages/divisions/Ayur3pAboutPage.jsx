// src/pages/divisions/Ayur3pAboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import PageHero from '../../components/global/PageHero';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../components/mobile/DivisionMobileTabs';

export default function Ayur3pAboutPage() {
  const { primary, secondary } = useDivisionColor();
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="About Us" subtitle="Rooted in Ayurveda. Strengthened by Science." />

      {/* About Us Section */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed">
                At Ivy Herbals, our Ayurvedic manufacturing division was founded on a timeless belief: True health begins with balance and balance begins with Ayurveda.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed">
                Deeply rooted in India's classical Ayurvedic heritage and reinforced by modern manufacturing science, we produce safe, effective, and compliant Ayurvedic formulations for brands committed to holistic human healthcare.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed">
                What began as a dedication to authentic herbal remedies has grown into a comprehensive Ayurvedic manufacturing ecosystem, supporting startups, doctor-led brands, exporters, wellness companies, and established pharmaceutical houses across India and global markets.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed">
                From classical formulations to proprietary blends, we partner with brands to transform concepts into AYUSH-compliant, scalable, and market-ready products crafted with discipline, purity, and precision.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed font-semibold">
                Your healthcare vision. Our Ayurvedic manufacturing excellence.
              </p>
              
              {/* Founder's Philosophy - Highlighted Container */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl p-6 lg:p-8 shadow-lg"
                style={{ background: `linear-gradient(to bottom right, ${primary}1a, ${secondary}1a)`, borderColor: `${primary}33`, borderWidth: '2px' }}
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-4 font-primary" style={{ color: primary }}>Founder's Philosophy:</h3>
                <p className="text-lg lg:text-xl italic font-semibold leading-relaxed" style={{ color: primary }}>
                  "Ayurveda se Swasth hai. Swasth se Sundarta." (Health through Ayurveda creates strength, vitality, and balance — in every living being.)
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision Section - Card */}
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
              <h2 className="text-h2 font-primary mb-4" style={{ color: primary }}>Our Vision</h2>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-3">
                To become a globally respected Ayurvedic manufacturing partner, known for preserving classical Ayurvedic integrity while delivering products that meet modern quality, safety, and regulatory expectations.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed">
                We envision Ivy Herbals as a benchmark for authentic, compliant, and innovation-led Ayurveda, where tradition and science work in harmony to improve human health.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission Section - Container with Cards */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-6 text-center" style={{ color: primary }}>Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "To manufacture high-quality, AYUSH-compliant Ayurvedic products with consistency and integrity",
                "To empower brands through custom formulations, private labeling, and end-to-end manufacturing support",
                "To uphold classical Ayurvedic principles without compromising on modern quality standards",
                "To continuously evolve through safe, tested, and scientifically aligned herbal formulations",
                "To promote ethical sourcing, sustainable practices, and responsible healthcare solutions"
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
                    <p className="text-sm lg:text-base text-text-body/80 leading-relaxed">{point}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Core Values Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-6 text-center" style={{ color: primary }}>Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Quality First",
                  description: "Quality is the soul of Ayurveda. Every formulation undergoes strict raw material authentication, in-process checks, and batch-wise quality evaluation to ensure purity, potency, and consistency."
                },
                {
                  title: "Tradition with Precision",
                  description: "We honor classical Ayurvedic texts while applying process control, documentation, and testing to ensure reproducible results and regulatory acceptance."
                },
                {
                  title: "Integrity & Transparency",
                  description: "From herb sourcing to batch records and regulatory documentation, we operate with complete transparency, building long-term trust with our partners."
                },
                {
                  title: "Responsibility & Sustainability",
                  description: "We support ethical herb sourcing, environmentally responsible processes, and sustainable packaging, aligned with the principles of holistic wellness."
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 lg:p-6 shadow-md"
                  style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
                >
                  <h3 className="text-h3 font-primary mb-3" style={{ color: primary }}>{value.title}</h3>
                  <p className="text-sm lg:text-base text-text-body/70 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Certifications & Compliance Section - Container with Cards */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>Our Certifications & Compliance</h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-6 text-center">
              Our Ayurvedic manufacturing facility adheres to all required national and international quality frameworks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "AYUSH Certified Facility – Classical and proprietary Ayurvedic manufacturing",
                "GMP Certified – Assured hygiene, safety, and process consistency",
                "ISO Certified – Robust quality management systems",
                "HACCP Certified – Contamination prevention and controlled processing",
                "Batch-wise COA & Documentation",
                "Compliance with AYUSH Regulations"
              ].map((cert, index) => (
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
                    <Shield className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primary }} />
                    <p className="text-sm lg:text-base text-text-body/80 leading-relaxed">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-base lg:text-lg text-text-body/70 text-center italic">
              These certifications reflect our commitment to safe, authentic, and globally acceptable Ayurvedic manufacturing.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Journey Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>Our Journey</h2>
            <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 mb-6"
              style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4">
                With over two decades of manufacturing excellence, Ivy Herbals has evolved from a formulation-driven enterprise into a multi-division manufacturing partner, trusted by 500+ brands worldwide.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4">
                Our Ayurvedic division stands at the intersection of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  "Classical Ayurvedic wisdom",
                  "Modern process-controlled manufacturing",
                  "Scalable infrastructure",
                  "Regulatory-ready documentation"
                ].map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="rounded-lg p-4"
                    style={{ backgroundColor: `${primary}0d`, borderColor: `${primary}1a`, borderWidth: '1px' }}
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primary }} />
                      <p className="text-sm lg:text-base text-text-body/80">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed">
                Today, Ivy Herbals proudly supports digestive care, immunity, women's health, lifestyle disorders, pediatric wellness, and preventive healthcare brands, helping them grow with credibility and confidence.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Ivy Herbals Section - Container with Cards */}
      <AnimatedSection className="bg-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-6 text-center" style={{ color: primary }}>Why Choose Ivy Herbals</h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-6 text-center">
              At Ivy Herbals, we do more than manufacture Ayurvedic products — we become custodians of your brand's trust.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                {
                  title: "Authentic Ayurvedic & Herbal Ingredient Base",
                  description: "Carefully sourced and authenticated herbs aligned with classical Ayurvedic texts."
                },
                {
                  title: "Safe, Effective & AYUSH-Compliant Products",
                  description: "Manufactured with strict quality checks and documented processes."
                },
                {
                  title: "Custom Formulations for Every Healthcare Segment",
                  description: "From classical medicines to modern wellness formulations."
                },
                {
                  title: "Regulatory & Documentation Support",
                  description: "Assistance with labels, ingredient declarations, and AYUSH compliance."
                },
                {
                  title: "Trusted by Startups, Doctors & Established Brands",
                  description: "Proven experience across diverse Ayurvedic healthcare markets."
                },
                {
                  title: "Dedicated & Supportive Partner Team",
                  description: "A knowledgeable team guiding you through formulation, approvals, manufacturing, and dispatch."
                },
                {
                  title: "Young, Agile & Market-Aware Team",
                  description: "A dynamic team that understands current wellness trends, consumer behavior, and evolving healthcare demands."
                },
                {
                  title: "Transparent & Collaborative Working Culture",
                  description: "Clear communication, structured processes, and partnership-driven execution"
                }
              ].map((item, index) => (
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
                    <div>
                      <h3 className="text-sm lg:text-base font-bold mb-2 font-primary" style={{ color: primary }}>{item.title}</h3>
                      <p className="text-xs lg:text-sm text-text-body/70 leading-relaxed">{item.description}</p>
                    </div>
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
              <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>
                Ready to Build Your Ayurvedic Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-center">
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
                <p className="text-sm lg:text-base text-text-body/70 mt-2 ml-7">
                  Understand how we take your product from formula selection to compliant manufacturing, packaging, and delivery.
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold text-center italic font-primary" style={{ color: primary }}>
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
