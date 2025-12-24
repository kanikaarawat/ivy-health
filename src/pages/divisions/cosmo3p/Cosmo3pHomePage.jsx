// src/pages/divisions/Cosmo3pHomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, CheckCircle, Play } from 'lucide-react';
import DivisionHomePage from '../shared/DivisionHomePage';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { content } from '../../../content/data';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Cosmo3pHomePage() {
  const division = content.divisions.cosmetics;
  const { primary, secondary } = useDivisionColor();

  return (
    <div className="pb-20 lg:pb-0">
      <DivisionHomePage division={division} />
      
      {/* About Us Section */}
      <AnimatedSection className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-h1 lg:text-5xl font-primary mb-6" style={{ color: primary }}>About Us</h2>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <p className="text-lg text-text-body/80 leading-relaxed text-justify">
                  At Ivy Herbals, we unite Ayurveda, herbal science, and modern cosmetic innovation to create products that celebrate natural beauty and skin wellness.
                </p>
                <p className="text-lg text-text-body/80 leading-relaxed text-justify">
                  We specialize in private labeling, custom formulations, and end-to-end skincare manufacturing for both emerging and premium beauty brands.
                </p>
                <p className="text-lg text-text-body/80 leading-relaxed text-justify">
                  From herbal actives to final packaging, every stage at Ivy Herbals is guided by efficacy, safety, and aesthetics.
                </p>
                <p className="text-lg font-semibold leading-relaxed text-justify" style={{ color: primary }}>
                  Pure, Sustainable, and Dermatologically Tested — Every Time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: `${primary}0d` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: primary }}>6+</div>
                  <div className="text-sm" style={{ color: '#29261d' }}>Specialized Divisions</div>
                </div>
                <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: `${primary}0d` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: primary }}>23+</div>
                  <div className="text-sm" style={{ color: '#29261d' }}>Years of Excellence</div>
                </div>
                <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: `${primary}0d` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: primary }}>70+</div>
                  <div className="text-sm" style={{ color: '#29261d' }}>Formulations</div>
                </div>
                <div className="p-6 rounded-2xl text-center" style={{ backgroundColor: `${primary}0d` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: primary }}>100+</div>
                  <div className="text-sm" style={{ color: '#29261d' }}>Business Clients Worldwide</div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/cosmo3p/about"
                className="group text-white px-8 py-4 rounded-full transition-colors inline-flex items-center gap-2"
                style={{ backgroundColor: primary }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <span>Our Story</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/cosmo3p/process"
                className="px-8 py-4 rounded-full border-2 transition-colors"
                style={{ borderColor: `${primary}33`, color: primary }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = primary;
                  e.currentTarget.style.backgroundColor = `${primary}0d`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${primary}33`;
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                4 Step Manufacturing Process
              </Link>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Manufacturing Divisions Section */}
      <AnimatedSection className="py-16 lg:py-24" style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-h1 lg:text-5xl font-primary mb-6" style={{ color: primary }}>Our Manufacturing Divisions</h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
            >
              <ul className="space-y-4 mb-8">
                {division.manufacturingDivisions.map((divisionName, index) => (
                  <li key={index} className="flex items-center gap-3 text-lg text-text-body/80">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" style={{ color: primary }} />
                    <span>{divisionName}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-text-body/70 leading-relaxed text-justify">
                All units are designed to maintain formula integrity, aesthetic consistency, and product stability.
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Facility Overview Video Section */}
      <AnimatedSection className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-h1 lg:text-5xl font-primary mb-6" style={{ color: primary }}>Facility Overview Video</h2>
              <p className="text-lg text-text-body/70 max-w-3xl mx-auto text-justify">
                Walkthrough of manufacturing area, mixing tanks, filling lines, and packaging.
              </p>
              <p className="text-base text-text-body/60 mt-2 text-justify">
                Build trust & show scale and hygiene.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 aspect-video flex items-center justify-center"
            >
              {/* Placeholder for video - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-2 border-white/30"
                >
                  <Play className="w-10 h-10 text-white ml-1" fill="white" />
                </motion.button>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                Video placeholder - Replace with actual video embed
              </p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}

