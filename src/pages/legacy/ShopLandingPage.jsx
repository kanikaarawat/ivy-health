// src/pages/ShopLandingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Package, Sparkles } from 'lucide-react';
import { content } from '../../content/data';

export default function ShopLandingPage() {
  const { categories } = content.productData;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Package className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Premium Ayurvedic Products</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl font-bold text-white"
            >
              Our Product Range
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 max-w-2xl mx-auto"
            >
              Explore our complete collection of Ayurvedic wellness products
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {Object.entries(categories).map(([slug, category], index) => (
              <motion.div
                key={slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/shop/${slug}`} className="group block">
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all hover:shadow-xl">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden bg-cream">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full">
                        <span className="text-sm font-bold text-primary">{category.name}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 space-y-4">
                      <div>
                        <h2 className="text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                          {category.shop_title || category.name}
                        </h2>
                        <p className="text-text-light leading-relaxed">
                          {category.description}
                        </p>
                      </div>

                      {/* Offerings */}
                      {category.subcategories && (
                        <div className="flex flex-wrap gap-2">
                          {(Array.isArray(category.subcategories) 
                            ? category.subcategories 
                            : []
                          ).slice(0, 3).map((item, i) => (
                            <span
                              key={i}
                              className="text-xs px-3 py-1 bg-primary/5 text-primary rounded-full"
                            >
                              {typeof item === 'string' ? item : item.name}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* CTA */}
                      <div className="flex items-center gap-2 text-primary group-hover:text-secondary transition-colors pt-2">
                        <span className="font-semibold">Browse Products</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Package, title: '100% Pure', description: 'Natural ingredients only' },
              { icon: Sparkles, title: 'GMP Certified', description: 'Highest quality standards' },
              { icon: ArrowRight, title: 'Fast Delivery', description: 'Quick shipping across India' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-text-light">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
