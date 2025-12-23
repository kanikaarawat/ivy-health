// src/pages/divisions/DivisionProductsPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import PageHero from '../../components/global/PageHero';
import AnimatedSection from '../../components/motion/AnimatedSection';
import { content } from '../../content/data';
import { useDivisionColor } from '../../hooks/useDivisionColor';

export default function DivisionProductsPage({ division }) {
  const { primary, secondary } = useDivisionColor();
  const { productCategories } = content;
  let categories = [];

  if (division.slug === 'ayur3p') {
    // Display each Ayurvedic category as its own card with description
    if (productCategories && productCategories.ayurvedic && Array.isArray(productCategories.ayurvedic)) {
      categories = productCategories.ayurvedic.map(cat => ({
        title: typeof cat === 'object' ? cat.name : cat,
        description: typeof cat === 'object' ? cat.description : '',
        items: [] // Each category is displayed as a single card, not a list
      }));
    }
  } else if (division.slug === 'feed3p') {
    categories = [
      {
        title: 'Animal Segments We Serve',
        description: '',
        items: productCategories.feed.animalSegments.map(seg => seg.name)
      },
      {
        title: 'Nutritional & Functional Product Categories',
        description: '',
        items: productCategories.feed.categories
      }
    ];
  } else if (division.slug === 'cosmo3p') {
    categories = [
      {
        title: 'Skin Care Range',
        description: 'Advanced Skincare Powered by Nature & Science',
        items: productCategories.cosmetics.skinCare
      },
      {
        title: 'Hair Care Range',
        description: 'Nourishment, Strength & Scalp Wellness',
        items: productCategories.cosmetics.hairCare
      },
      {
        title: 'Body Care Range',
        description: 'Everyday Luxury for Skin Wellness',
        items: productCategories.cosmetics.bodyCare
      },
      {
        title: 'Specialised Categories',
        description: 'Targeted Solutions for Specific Needs',
        items: productCategories.cosmetics.specialized
      },
      {
        title: 'Trending Segments',
        description: 'Future-Ready Beauty Categories',
        items: productCategories.cosmetics.trending
      }
    ];
  }

  return (
    <div>
      <PageHero 
        title="Product Categories" 
        subtitle={`Comprehensive ${division.name} Manufacturing Solutions`}
      />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xl text-text-body/80 leading-relaxed">
            At Ivy Herbals, we offer a wide range of science-backed, compliant product categories designed to support your brand's needs. Each category is developed with authenticated ingredients, process-controlled manufacturing, ensuring safety, efficacy, and scalability.
          </p>
        </div>
      </AnimatedSection>

      {/* Product Categories */}
      <AnimatedSection style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}>
        <div className="max-w-6xl mx-auto">
          {categories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-body/70 text-lg">No categories found. Please check the data structure.</p>
            </div>
          ) : division.slug === 'ayur3p' ? (
            // Grid layout for Ayurvedic categories (each category is a card)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.05 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <h3 className="text-h3 font-primary" style={{ color: primary }}>
                      {category.title}
                    </h3>
                  </div>
                  {category.description && (
                    <p className="text-text-body/70 text-sm leading-relaxed">
                      {category.description}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            // List layout for Feed and Cosmetics (categories with sub-items)
            <div className="space-y-12">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-h2 font-primary mb-3" style={{ color: primary }}>
                    {category.title}
                  </h2>
                  {category.description && (
                    <p className="text-text-body/70 mb-6 italic">
                      {category.description}
                    </p>
                  )}
                  
                  {category.items && category.items.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: (categoryIndex * 0.1) + (itemIndex * 0.05) }}
                          className="flex items-start gap-3 p-4 rounded-lg"
                          style={{ backgroundColor: `${primary}0d` }}
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                          <div>
                            <span className="text-text-body text-sm font-medium block">{typeof item === 'string' ? item : item.name}</span>
                            {typeof item === 'object' && item.description && (
                              <span className="text-text-body/60 text-xs block mt-1">{item.description}</span>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </AnimatedSection>

      {/* Built for Your Brand */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-h2 font-primary mb-6" style={{ color: primary }}>
            Built for Your Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Customized formulations',
              'Private Labeled',
              'Manufactured at Scale',
              'Supported with Regulatory Documentation'
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ backgroundColor: `${primary}0d` }}
              >
                <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-text-body font-medium">{point}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Box */}
      <AnimatedSection className="text-background text-center" style={{ backgroundColor: primary }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Build Your {division.shortName} Line?
          </h2>
          <p className="text-xl text-background/90 mb-8">
            Discover Ivy Herbals' science-backed, compliance-driven third-party manufacturing capabilities.
          </p>
          <Link
            to={`/${division.slug}/process`}
            className="bg-white px-8 py-4 rounded-full hover:bg-background transition-colors font-semibold inline-flex items-center justify-center gap-2"
            style={{ color: primary }}
          >
            <span>View Our Manufacturing Process</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-lg text-background/80 mt-8 italic">
            Your Brand. Our {division.name} Expertise. One Trusted Manufacturing Journey.
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}

