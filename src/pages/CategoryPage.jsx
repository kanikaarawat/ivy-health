// src/pages/CategoryPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid3x3, List, Search, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ecommerce/ProductCard';
import { content } from '../content/data';

export default function CategoryPage() {
  const { categorySlug } = useParams();
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [searchQuery, setSearchQuery] = useState('');
  
  const { categories, products } = content.productData;
  const category = categories[categorySlug];
  
  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Category Not Found</h1>
        </div>
      </div>
    );
  }

  // Filter products by category
  const categoryProducts = Object.entries(products)
    .filter(([id, product]) => product.category === categorySlug)
    .map(([id, product]) => ({ id, ...product }))
    .filter(product => 
      searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.type.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
            >
              <span className="text-sm font-medium text-white">{categoryProducts.length} Products</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {category.name}
            </h1>
            <p className="text-xl text-white/90 mb-6 max-w-2xl">
              {category.shop_title || category.description}
            </p>
            
            {category.shop_description && (
              <p className="text-white/70">{category.shop_description}</p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Filters & Controls */}
      <section className="bg-cream border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white border border-border rounded-full focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-text-light hidden md:block">View:</span>
              <div className="flex items-center gap-1 bg-white border border-border rounded-full p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === 'grid' ? 'bg-primary text-white' : 'text-text-light hover:bg-cream'
                  }`}
                >
                  <Grid3x3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-full transition-all ${
                    viewMode === 'list' ? 'bg-primary text-white' : 'text-text-light hover:bg-cream'
                  }`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {categoryProducts.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-6 max-w-4xl mx-auto'
            }>
              {categoryProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  {viewMode === 'grid' ? (
                    <ProductCard product={product} productId={product.id} />
                  ) : (
                    <Link to={`/product/${product.id}`} className="group">
                      <div className="bg-white border border-border rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all">
                        <div className="flex flex-col sm:flex-row gap-6 p-6">
                          <div className="relative w-full sm:w-48 h-48 flex-shrink-0 rounded-xl overflow-hidden bg-cream">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-3 right-3 px-3 py-1 bg-white/95 rounded-full text-xs font-medium">
                              {product.type}
                            </div>
                          </div>
                          <div className="flex-1 space-y-3">
                            <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-text-light line-clamp-2">
                              {product.description}
                            </p>
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                                <span className="text-xs text-text-light">In Stock</span>
                              </div>
                              <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
                                <span className="text-sm font-medium">View Details</span>
                                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-text-light">
                {searchQuery ? 'No products found matching your search.' : 'Products coming soon in this category.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
