// src/pages/divisions/Ayur3pProductsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';
import { useDivisionColor } from '../../../hooks/useDivisionColor';
import DivisionMobileTabs from '../../../components/mobile/DivisionMobileTabs';

export default function Ayur3pProductsPage() {
  const { primary, secondary } = useDivisionColor();

  const sections = [
    {
      title: 'Hair & Scalp Health',
      subtitle: 'Root Nourishment & Scalp Balance',
      description:
        'Ayurvedic solutions designed to strengthen hair roots, improve scalp health, and control hair fall.',
      bullets: [
        'Herbal Hair Oils',
        'Ayurvedic Shampoos & Cleansers',
        'Scalp Therapy Oils & Serums',
      ],
    },
    {
      title: 'Children’s Immunity & Growth',
      subtitle: 'Gentle Care for Growing Bodies',
      description:
        'Safe, mild, and effective Ayurvedic formulations for children’s immunity, digestion, and overall development.',
      bullets: [
        'Immunity Boosting Syrups',
        'Growth & Strength Support Tonics',
        'Digestive & Appetite Support',
      ],
    },
    {
      title: 'Gut & Digestive Balance',
      subtitle: 'Foundation of Good Health',
      description:
        'Formulations focused on improving digestion, reducing bloating, and maintaining gut harmony.',
      bullets: [
        'Acidity & Gas Relief Products',
        'Digestive Churna & Tablets',
        'Gut Cleansing & Metabolism Support',
      ],
    },
    {
      title: 'Immunity & Vitality',
      subtitle: 'Strengthen Inner Defense',
      description:
        'Ayurvedic blends crafted to enhance immunity and physical resilience using time-tested herbs.',
      bullets: [
        'Giloy, Ashwagandha & Tulsi Formulations',
        'Immunity Capsules & Syrups',
        'Daily Vitality Boosters.',
      ],
    },
    {
      title: 'Women’s Wellness',
      subtitle: 'Holistic Support Across Life Stages',
      description:
        'Ayurvedic formulations addressing women’s health needs with safety and sensitivity.',
      bullets: [
        'Hormonal Balance Support',
        'Menstrual Wellness Products',
        'Lactation & Pregnancy Care (as per guidelines).',
      ],
    },
    {
      title: 'Men’s Wellness',
      subtitle: 'Strength, Stamina & Balance',
      description:
        'Products focused on vitality, energy, and reproductive wellness.',
      bullets: [
        'Strength & Energy Boosters',
        'Reproductive Health Support',
        'Stress & Lifestyle Management',
      ],
    },
    {
      title: 'Heart & Circulation',
      subtitle: 'Supporting Cardiovascular Health Naturally',
      description:
        'Ayurvedic blends aimed at maintaining healthy circulation and metabolic balance.',
      bullets: [
        'Blood Pressure Support',
        'Cholesterol Management Products',
        'Circulatory Wellness Formulations',
      ],
    },
    {
      title: 'Diabetes Care',
      subtitle: 'Balanced Sugar Management',
      description:
        'Herbal formulations supporting blood sugar balance and metabolic health.',
      bullets: [
        'Jamun & Gudmar-Based Products',
        'Metabolic Support Capsules',
        'Sugar Balance Tonics',
      ],
    },
    {
      title: 'Oral & Dental Health',
      subtitle: 'Natural Oral Hygiene',
      description:
        'Ayurvedic oral care products for daily hygiene and gum health.',
      bullets: [
        'Herbal Toothpastes',
        'Mouthwashes & Oral Rinses',
        'Gum & Teeth Care Powders',
      ],
    },
    {
      title: 'Bone & Joint Relief',
      subtitle: 'Mobility, Strength & Comfort',
      description:
        'Products designed to support joint health, flexibility, and relief from stiffness and inflammation.',
      bullets: [
        'Herbal Oils for External Application',
        'Capsules & Tablets for Joint Support',
        'Arthritis & Mobility Care Products',
      ],
    },
    {
      title: 'Kidney & Urinary Health',
      subtitle: 'Comfort, Detox & Balance',
      description:
        'Formulations supporting urinary tract health and natural detoxification.',
      bullets: [
        'Urinary Cleansing Syrups',
        'Kidney Support Capsules',
        'Hydration & Comfort Products',
      ],
    },
    {
      title: 'Weight & Metabolism',
      subtitle: 'Healthy Weight Management',
      description:
        'Ayurvedic blends to support metabolism, appetite balance, and detoxification.',
      bullets: [
        'Fat-Metabolism Support Products',
        'Appetite-Balancing Formulations',
        'Detox & Digestive Support',
      ],
    },
    {
      title: 'Brain Support',
      subtitle: 'Clarity, Focus & Calm',
      description:
        'Formulations developed to enhance mental performance and relaxation.',
      bullets: [
        'Brahmi & Shankhpushpi Products',
        'Memory & Focus Support',
        'Stress-Relief Blends',
      ],
    },
    {
      title: 'Sexual & Reproductive Health',
      subtitle: 'Vitality & Fertility Support',
      description:
        'Ayurvedic formulations designed for reproductive wellness and vitality.',
      bullets: [
        'Aphrodisiac & Fertility Support',
        'Reproductive Health Capsules',
        'Strength & Endurance Products',
      ],
    },
    {
      title: 'Respiratory & Lung Care',
      subtitle: 'Breath & Comfort Support',
      description:
        'Products supporting respiratory health and seasonal wellness.',
      bullets: [
        'Asthma & Bronchial Support',
        'Cough & Cold Formulations',
        'Lung Cleansing Products',
      ],
    },
    {
      title: 'Vision & Eye Wellness',
      subtitle: 'Clarity & Comfort for the Eyes',
      description:
        'Ayurvedic solutions for eye fatigue, dryness, and overall eye wellness.',
      bullets: [
        'Herbal Eye Drops',
        'Vision Support Supplements',
        'Eye Strain Relief Products',
      ],
    },
    {
      title: 'Sleep & Stress Management',
      subtitle: 'Restorative Balance',
      description:
        'Formulations focused on calming the mind and improving sleep quality.',
      bullets: [
        'Stress-Relief Capsules',
        'Sleep-Support Syrups',
        'Adaptogenic Herbal Blends',
      ],
    },
    {
      title: 'Liver & Detox Support',
      subtitle: 'Internal Cleansing & Metabolic Health',
      description:
        'Ayurvedic detox solutions for liver support and internal purification.',
      bullets: [
        'Liver Tonics',
        'Detox Capsules & Syrups',
        'Digestive Detox Products',
      ],
    },
    {
      title: 'Anti-Aging & Longevity',
      subtitle: 'Graceful Aging & Vitality',
      description:
        'Formulations supporting cellular health and longevity.',
      bullets: [
        'Rasayan Products',
        'Anti-Inflammatory Blends',
        'Rejuvenation Therapies',
      ],
    },
    {
      title: 'Skin Health & Glow',
      subtitle: 'Inner Balance for Outer Radiance',
      description:
        'Ayurvedic skincare solutions that promote healthy, glowing skin.',
      bullets: [
        'Herbal Creams & Oils',
        'Face Packs & Lepas',
        'Skin Detox & Glow Products',
      ],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05 },
    }),
  };

  const renderCategorySection = (section, index) => (
    <AnimatedSection
      key={section.title}
      className="py-8"
      style={{
        background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header outside card */}
        <div className="mb-4 text-center">
          <h2
            className="text-h2 font-primary"
            style={{ color: primary }}
          >
            {section.title}
          </h2>
          <h3 className="text-h3 font-secondary text-text-body/90 mt-1">
            {section.subtitle}
          </h3>
        </div>

        {/* Content card */}
        <motion.div
          custom={index}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
          className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
          style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
        >
          <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
            {section.description}
          </p>
          <ul className="space-y-2">
            {section.bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle
                  className="w-5 h-5 flex-shrink-0 mt-1"
                  style={{ color: primary }}
                />
                <span className="text-sm lg:text-base text-text-body/80 leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </AnimatedSection>
  );

  return (
    <div className="pb-20 lg:pb-0">
      <PageHero
        title="Product Categories"
        subtitle="Comprehensive Ayurvedic Manufacturing Solutions for Human Healthcare"
      />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-text-body/80 leading-relaxed text-justify">
            At Ivy Herbals, we offer a wide range of AYUSH-compliant Ayurvedic product
            categories designed to support preventive care, therapeutic needs, and
            holistic wellness. Each category is developed with authenticated herbs,
            classical references, and process-controlled manufacturing, ensuring safety,
            efficacy, and scalability.
          </p>
          <p className="text-xl text-text-body/80 leading-relaxed mt-4 text-justify">
            Our formulations are suitable for tablets, capsules, syrups, powders, avaleh,
            oils, and ghrita, customized as per your brand positioning and target market.
          </p>
        </div>
      </AnimatedSection>

      {/* Category sections */}
      {sections.map((section, index) => renderCategorySection(section, index))}

      {/* Built for Your Brand */}
      <AnimatedSection
        className="py-8 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header outside card */}
          <div className="mb-4 text-center">
            <h2
              className="text-h2 font-primary"
              style={{ color: primary }}
            >
              Built for Your Brand
            </h2>
          </div>

          {/* Bullet container */}
          <div
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
              All Ayurvedic product categories can be:
            </p>
            <div className="max-w-3xl mx-auto">
              <ul className="space-y-3 text-left">
                {[
                  'Customized (classical or proprietary formulations)',
                  'Private Labeled',
                  'Manufactured at Scale',
                  'Supported with AYUSH-Compliant Documentation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle
                      className="w-5 h-5 flex-shrink-0 mt-1"
                      style={{ color: primary }}
                    />
                    <span className="text-sm lg:text-base text-text-body/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection
        className="py-8"
        style={{
          background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)`,
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-6 lg:p-8"
            style={{ borderColor: `${primary}1a`, borderWidth: '2px' }}
          >
            <h2
              className="text-h2 font-primary mb-4 text-center"
              style={{ color: primary }}
            >
              Ready to Build Your Ayurvedic Line?
            </h2>
            <p className="text-base lg:text-lg text-text-body/80 mb-4 leading-relaxed text-justify">
              Discover Ivy Herbals' AYUSH-compliant third-party manufacturing capabilities
              and see how we transform classical wisdom and modern requirements into
              shelf-ready Ayurvedic products.
            </p>

            <div className="mb-4 text-center">
              <Link
                to="/ayur3p/process"
                className="inline-flex items-center gap-2 font-semibold text-base lg:text-lg transition-colors"
                style={{ color: primary }}
              >
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>View Our Ayurvedic Manufacturing Process</span>
              </Link>
            </div>

            <p
              className="text-lg lg:text-xl font-bold italic font-primary text-justify"
              style={{ color: primary }}
            >
              Your Brand. Our Ayurvedic Expertise. One Trusted Manufacturing Journey.
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      <DivisionMobileTabs />
    </div>
  );
}

