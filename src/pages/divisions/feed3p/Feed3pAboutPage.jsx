// src/pages/divisions/Feed3pAboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Feed3pAboutPage() {
  const { primary, secondary } = useDivisionColor();
  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <PageHero title="About Us" subtitle="Rooted in Ayurveda. Strengthened by Nutrition Science." />

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
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                At Ivy Herbals, our Animal Nutrition & Feed Supplements Division was founded on a simple yet powerful belief: Healthy animals are the foundation of a healthy food system and true animal health begins with balanced nutrition.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Inspired by the timeless wisdom of Ayurveda and reinforced by modern veterinary and nutrition science, we manufacture safe, effective, and performance-driven feed supplements for poultry, livestock, aqua, pets, and specialty animal segments.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                What began as a commitment to herbal animal wellness has evolved into a comprehensive animal nutrition manufacturing ecosystem, supporting integrators, feed brands, veterinarians, exporters, and progressive farmers across India and global markets.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                From growth promoters and gut health solutions to immunity boosters and stress-management formulations, we partner with brands to transform concepts into compliant, scalable, and farm-ready nutrition solutions, crafted with discipline, efficacy, and consistency.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed font-semibold leading-loose px-4 md:px-6 lg:px-0 text-left">
                Your nutrition vision. Our manufacturing excellence.
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
                <p className="text-lg lg:text-xl italic font-semibold leading-loose px-4 md:px-6 lg:px-0 text-left" style={{ color: primary }}>
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
              <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>Our Vision</h2>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-3 leading-loose px-4 md:px-6 lg:px-0 text-left">
                To become a globally trusted animal nutrition manufacturing partner, recognized for combining Ayurvedic wisdom, nutritional science, and performance-based formulations to improve animal health, productivity, and sustainability.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                We envision Ivy Herbals as a benchmark for ethical, compliant, and innovation-driven animal nutrition, where natural balance and scientific precision work together to support modern farming systems.
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
                "To manufacture high-quality, compliant feed supplements with consistent performance",
                "To empower brands through custom formulations, private labeling, and end-to-end manufacturing support",
                "To integrate herbal actives with modern nutritional science for measurable on-farm results",
                "To ensure batch-to-batch consistency, safety, and scalability",
                "To promote ethical sourcing, responsible nutrition, and sustainable animal health solutions"
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

      {/* Core Values Section - Container with Cards */}
      <AnimatedSection className="py-8" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-h2 font-primary mb-6 text-center" style={{ color: primary }}>Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Quality First",
                  description: "Quality is the backbone of animal nutrition. Every formulation undergoes raw material authentication, in-process checks, stability evaluation, and batch-wise quality control to ensure safety, efficacy, and consistent performance."
                },
                {
                  title: "Tradition with Performance Precision",
                  description: "We apply Ayurvedic principles alongside nutritional balancing, dosage accuracy, and process control to deliver reliable results across diverse farming conditions."
                },
                {
                  title: "Integrity & Transparency",
                  description: "From ingredient sourcing and formulation logic to documentation and compliance, we operate with complete transparency, building long-term trust with brands and farmers alike."
                },
                {
                  title: "Responsibility & Sustainability",
                  description: "We support ethical raw material sourcing, environmentally responsible manufacturing, and sustainable nutrition practices, aligned with the future of animal agriculture."
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
                  <p className="text-sm lg:text-base text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">{value.description}</p>
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
            <p className="text-base lg:text-lg text-text-body/80 mb-6 leading-loose px-4 md:px-6 lg:px-0 text-left">
              Our Animal Nutrition manufacturing facility adheres to stringent quality and regulatory frameworks:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "GMP Certified – Assured hygiene, safety, and process consistency",
                "ISO Certified – Robust quality management systems",
                "HACCP Certified – Controlled processes and contamination prevention",
                "AYUSH-Aligned Herbal Inputs – For herbal and natural feed formulations",
                "Batch-wise COA & Technical Documentation",
                "FSSAI / State Feed Authority Compliance (where applicable)"
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
                    <p className="text-sm lg:text-base text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-base lg:text-lg text-text-body/70 italic leading-loose px-4 md:px-6 lg:px-0 text-left">
              These certifications reflect our commitment to safe, compliant, and globally acceptable animal nutrition manufacturing.
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
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4 leading-loose px-4 md:px-6 lg:px-0 text-left">
                With over two decades of manufacturing excellence, Ivy Herbals has evolved from a formulation-driven enterprise into a multi-division manufacturing partner, trusted by 500+ brands worldwide.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Our Animal Nutrition Division stands at the intersection of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  "Ayurvedic & herbal animal wellness",
                  "Modern feed formulation science",
                  "Scalable, process-controlled infrastructure",
                  "Regulatory-ready documentation and traceability"
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
                      <p className="text-sm lg:text-base text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-base lg:text-lg text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
                Today, Ivy Herbals proudly supports poultry, ruminant, aqua, pet, equine, and swine nutrition brands, enabling better growth, improved FCR, enhanced immunity, stress resilience, and long-term animal well-being.
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
            <p className="text-base lg:text-lg text-text-body/80 mb-6 leading-loose px-4 md:px-6 lg:px-0 text-left">
              At Ivy Herbals, we do more than manufacture feed supplements — we become custodians of your brand's trust and farm-level performance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Herbal & Nutrition-Driven Ingredient Base",
                  description: "Carefully selected herbs, nutrients, enzymes, and functional additives designed for real-world animal performance."
                },
                {
                  title: "Safe, Effective & Compliance-Ready Products",
                  description: "Manufactured with strict quality systems, documented processes, and consistent results."
                },
                {
                  title: "Custom Formulations for Every Animal Segment",
                  description: "From poultry and dairy to aqua, pets, and specialty livestock nutrition."
                },
                {
                  title: "Regulatory & Technical Documentation Support",
                  description: "Support for labels, composition sheets, COA, and statutory compliance."
                },
                {
                  title: "Trusted by Integrators, Feed Brands & Veterinarians",
                  description: "Proven experience across commercial farms and export-oriented markets."
                },
                {
                  title: "Dedicated & Supportive Partner Team",
                  description: "A knowledgeable team guiding you through formulation, trials, approvals, manufacturing, and dispatch."
                },
                {
                  title: "Young, Agile & Market-Aware Team",
                  description: "A dynamic team that understands modern farming challenges, performance metrics, and evolving nutrition trends."
                },
                {
                  title: "Transparent & Collaborative Working Culture",
                  description: "Clear communication, structured processes, and a true partnership-first approach."
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
                      <p className="text-xs lg:text-sm text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">{item.description}</p>
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

              <p className="text-lg lg:text-xl font-bold italic font-primary leading-loose px-4 md:px-6 lg:px-0 text-left" style={{ color: primary }}>
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
