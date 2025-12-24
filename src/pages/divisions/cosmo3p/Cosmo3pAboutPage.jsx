// src/pages/divisions/Cosmo3pAboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Cosmo3pAboutPage() {
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
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed text-justify">
                At Ivy Herbals, our cosmetic division was born from a simple yet powerful belief: nature and science work best together.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed text-justify">
                Rooted in India's rich Ayurvedic heritage and strengthened by modern cosmetic science, we create high-performance skincare, haircare, and personal care products for brands that value purity, efficacy, and consistency.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed text-justify">
                What began as a commitment to authentic herbal formulations has evolved into a full-scale cosmetic manufacturing ecosystem, supporting startups, D2C brands, dermatology-inspired labels, and premium beauty houses across India and international markets.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed text-justify">
                From concept to shelf, we partner with brands to transform ideas into safe, scalable, and market-ready cosmetic products — crafted with integrity, precision, and care.
              </p>
              <p className="text-lg lg:text-xl text-text-body/80 leading-relaxed font-semibold text-justify">
                Your brand vision. Our manufacturing excellence.
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
                <p className="text-lg lg:text-xl italic font-semibold leading-relaxed text-justify" style={{ color: primary }}>
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
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-3 text-justify">
                To become a globally trusted cosmetic manufacturing partner, known for blending Ayurvedic wisdom with advanced cosmetic science, while enabling brands to create products that are clean, effective, and future-ready.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed text-justify">
                We envision Ivy Herbals as a symbol of quality-led growth, where innovation, sustainability, and transparency define every formulation we produce.
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
                "To deliver high-quality, compliant, and reliable cosmetic manufacturing solutions",
                "To empower brands through custom formulations, private labeling, and end-to-end support",
                "To maintain global quality standards without compromising on natural integrity",
                "To continuously innovate with safe, dermatologically tested, and trend-aligned products",
                "To support sustainable practices in sourcing, production, and packaging"
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
                    <p className="text-sm lg:text-base text-text-body/80 leading-relaxed text-justify">{point}</p>
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
                  description: "Quality is not a checkpoint — it is our foundation. Every formulation undergoes stringent quality control, microbial testing, and stability evaluation to ensure safety, performance, and consistency."
                },
                {
                  title: "Innovation with Purpose",
                  description: "We innovate responsibly by combining herbal actives, clinical ingredients, and modern delivery systems to meet evolving consumer demands without compromising safety."
                },
                {
                  title: "Integrity & Transparency",
                  description: "From ingredient sourcing to documentation and compliance, we operate with complete honesty and clarity — building long-term partnerships, not just transactions."
                },
                {
                  title: "Sustainability & Responsibility",
                  description: "We actively promote eco-friendly formulations, sustainable packaging options, and ethical manufacturing practices, aligned with the future of conscious beauty."
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
                  <p className="text-sm lg:text-base text-text-body/70 leading-relaxed text-justify">{value.description}</p>
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
            <p className="text-base lg:text-lg text-text-body/80 mb-6 text-justify">
              Our cosmetic manufacturing facility adheres to nationally and internationally recognized quality systems:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {[
                "GMP Certified – Assured manufacturing hygiene, safety, and consistency",
                "ISO Certified – Robust documentation and quality management systems",
                "HACCP Certified – Controlled processes for contamination prevention",
                "AYUSH Certified – Authentic herbal and Ayurvedic formulation base",
                "Dermatologically Tested & Paraben-Free Certification – Available on request",
                "Compliance with BIS & Cosmetic Rules, 2020"
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
                    <p className="text-sm lg:text-base text-text-body/80 leading-relaxed text-justify">{cert}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-base lg:text-lg text-text-body/70 italic text-justify">
              These certifications reflect our unwavering commitment to safe, compliant, and globally acceptable cosmetic manufacturing.
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
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4 text-justify">
                With over two decades of manufacturing excellence, Ivy Herbals has grown from a formulation-focused enterprise into a multi-division manufacturing partner trusted by over 100+ brands worldwide.
              </p>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed mb-4 text-justify">
                Our cosmetic division represents the perfect balance of:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {[
                  "Traditional herbal wisdom",
                  "Advanced cosmetic R&D",
                  "Scalable infrastructure",
                  "Design-forward packaging support"
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
                      <p className="text-sm lg:text-base text-text-body/80 text-justify">{point}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-base lg:text-lg text-text-body/80 leading-relaxed text-justify">
                Today, Ivy Herbals proudly supports brands across skincare, haircare, body care, baby care, and men's grooming — helping them launch, grow, and scale with confidence.
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
            <p className="text-base lg:text-lg text-text-body/80 mb-6 text-justify">
              At Ivy Herbals, we go beyond manufacturing, we become a long-term partner in your brand's growth journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: "Herbal & Ayurvedic Ingredient Base",
                  description: "Thoughtfully sourced herbal and Ayurvedic actives blended with modern cosmetic science."
                },
                {
                  title: "Dermatologically Tested, Safe & Effective Products",
                  description: "Formulations developed with safety, stability, and performance at the core."
                },
                {
                  title: "Custom Formulations for Every Brand Tier",
                  description: "From mass-market to premium and luxury cosmetic segments."
                },
                {
                  title: "Elegant & Trend-Driven Packaging Options",
                  description: "Designs aligned with global beauty trends and evolving consumer preferences."
                },
                {
                  title: "End-to-End Branding & Label Support",
                  description: "Assistance with design, compliance, ingredient declarations, and packaging artwork."
                },
                {
                  title: "Trusted by Cosmetic Startups & Established Beauty Brands",
                  description: "Proven experience across emerging D2C brands and large-scale cosmetic businesses."
                },
                {
                  title: "Dedicated & Supportive Client Success Team",
                  description: "A responsive team that guides you through formulation, approvals, production, and delivery, every step of the way."
                },
                {
                  title: "Young, Trend-Savvy & Agile Team",
                  description: "A dynamic team that understands current beauty trends, social-media-driven demand, and modern consumer expectations, helping brands stay relevant and competitive."
                },
                {
                  title: "Collaborative & Transparent Working Style",
                  description: "Clear communication, quick feedback loops, and a partnership approach rather than a vendor mindset."
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
                      <p className="text-xs lg:text-sm text-text-body/70 leading-relaxed text-justify">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Ready to Build Section - CTA Box */}
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
                Ready to Build Your Cosmetic Line?
              </h2>
              <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
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
                <div className="p-4 rounded-xl" style={{ backgroundColor: `${primary}0d` }}>
                  <p className="text-sm lg:text-base text-text-body/80 font-medium">
                    Discover skincare, haircare, body care, baby care, men's grooming & specialized cosmetic ranges.
                  </p>
                </div>
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
                <p className="text-sm lg:text-base text-text-body/70 mt-2 ml-7 text-justify">
                  Understand how we take your product from concept to formulation, packaging, production, and delivery.
                </p>
              </div>

              <p className="text-lg lg:text-xl font-bold italic font-primary text-justify" style={{ color: primary }}>
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
