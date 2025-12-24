// src/pages/divisions/Feed3pProductsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import { content } from '../../../content/data';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Feed3pProductsPage() {
  const division = content.divisions.feed;
  const { primary, secondary } = useDivisionColor();

  const animalSegments = [
    'Aqua (Fish & Shrimp) – Formulations focused on growth performance, FCR improvement, immunity enhancement, and disease resistance for intensive and semi-intensive aquaculture systems.',
    'Canine (Dogs & Companion Pets) – Nutritional supplements for coat health, joint mobility, digestion, immunity, and overall vitality, designed for daily wellness and preventive care.',
    'Equine (Horses) – Performance and endurance formulas supporting muscle strength, stamina, joint health, and recovery for working and sport horses.',
    'Poultry (Broilers, Layers & Breeders) – Solutions targeting growth rate, feed efficiency (FCR), immunity, egg production, fertility, and stress management across all production phases.',
    'Ruminants (Cattle, Buffalo, Sheep & Goat) – Products supporting milk yield, fertility, rumen health, digestion, metabolic balance, and overall productivity in dairy and meat animals.',
    'Swine (Pigs & Piglets) – Gut health, growth, and performance-oriented formulations for better feed utilization, immunity, and survival rates.'
  ];

  const nutritionCategories = [
    'Gut Health & Digestion – Herbal digestives, probiotics, enzymes, and gut conditioners to improve nutrient absorption and feed efficiency.',
    'Liver Health & Growth Promoters – Formulations supporting detoxification, metabolism, and growth performance.',
    'Immune Modulators & Antioxidants – Herbal and nutritional blends to strengthen natural immunity and oxidative stress control.',
    'Stress Management & Heat Relief – Electrolyte and herbal solutions to manage heat stress, transport stress, and environmental challenges.',
    'Respiratory Health – Supportive formulations for respiratory efficiency and disease resistance.',
    'Reproductive Performance & Fertility – Nutrition solutions enhancing breeding performance, conception rates, and reproductive health.',
    'Toxin Management & Mycotoxin Binders – Binders and detox solutions to counter feed-borne toxins and mycotoxin exposure.',
    'Anti-Parasitic & Anti-Coccidial Solutions – Herbal alternatives and supportive formulations for parasite control and gut protection.',
    'Milk Production Enhancers – Feed supplements designed to increase milk yield, quality, and lactation persistence.',
    'Bone & Joint Health – Mineral and herbal blends for skeletal strength and mobility.',
    'Renal & Urinary Health – Formulations supporting kidney function and urinary comfort.',
    'Skin & Coat Care – Nutrition solutions promoting healthy skin, coat shine, and overall appearance.',
    'Farm Environment & Water Care – Products for water sanitation, hygiene management, and environmental health.',
    'Natural Anti-Microbial Growth Promoters – Herbal growth promoters aligned with antibiotic-free and residue-free farming practices.',
    'Digestive & Enzyme Group – Multi-enzyme blends to improve feed breakdown and nutrient utilization.',
    'Specialty & Preventive Care – Targeted solutions for seasonal, disease-prone, or high-stress conditions.',
    'Organic & Antibiotic-Free Nutrition Range – Clean-label formulations supporting organic, residue-free, and export-compliant production systems.'
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 }
    })
  };

  const renderListCards = (items) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-start gap-3 p-4 rounded-xl"
          style={{ backgroundColor: `${primary}0d` }}
        >
          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: primary }} />
          <p className="text-sm lg:text-base text-text-body/80 leading-relaxed text-justify">{item}</p>
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="pb-20 lg:pb-0">
      <PageHero
        title="Product Categories"
        subtitle="Comprehensive Animal Nutrition & Feed Supplement Solutions"
      />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-text-body/80 leading-relaxed text-justify">
            At Ivy Herbals, we manufacture a wide range of science-backed, herbal feed supplements
            designed to improve animal health, productivity, and farm profitability. Our
            formulations are developed to meet species-specific nutritional requirements, production
            stages, and environmental challenges.
          </p>
        </div>
      </AnimatedSection>

      {/* Animal Segments We Serve */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3 text-center" style={{ color: primary }}>
              Animal Segments We Serve
            </h2>
            {renderListCards(animalSegments)}
          </div>
        </div>
      </AnimatedSection>

      {/* Nutritional & Functional Product Categories */}
      <AnimatedSection className="bg-white py-8">
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2 className="text-h2 font-primary mb-3 text-center" style={{ color: primary }}>
              Nutritional &amp; Functional Product Categories
            </h2>
            {renderListCards(nutritionCategories)}
          </div>
        </div>
      </AnimatedSection>

      {/* Built for Your Brand */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
        <div className="max-w-6xl mx-auto">
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2
              className="text-h2 font-primary mb-4 text-center"
              style={{ color: primary }}
            >
              Built for Your Brand
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
              All animal nutrition product categories can be:
            </p>

            <div className="max-w-4xl mx-auto mb-4">
              <ul className="space-y-3 text-left">
                {[
                  'Custom formulated as per species and production stage',
                  'Private labeled for domestic and export markets',
                  'Manufactured at scale with consistent quality',
                  'Supported with technical documentation and compliance'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: primary }}
                    />
                    <span className="text-sm lg:text-base text-text-body/80 leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-base lg:text-lg font-semibold text-text-body/90 italic text-center">
              Your Brand. Our Nutritional Expertise. Performance You Can Measure.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection
        className="py-8"
        style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
      >
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
            <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
              Discover Ivy Herbals' science-backed, compliance-driven third-party manufacturing
              capabilities for feed supplements and veterinary nutrition, where nutrition science,
              herbal actives, and performance-driven formulations come together to deliver
              farm-ready, scalable products.
            </p>

            <div className="mb-4 text-center">
              <Link
                to="/feed3p/process"
                className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                style={{ color: primary }}
              >
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>View Our Manufacturing Process</span>
              </Link>
            </div>

            <p className="text-lg lg:text-xl font-bold italic font-primary text-justify" style={{ color: primary }}>
              Your Brand. Our Nutritional Expertise. One Trusted Manufacturing Journey.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}


