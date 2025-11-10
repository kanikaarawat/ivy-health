// src/components/desktop/MegaMenu.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { content } from '../../content/data';

export default function MegaMenu({ label, categories }) {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = content.productData;

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative"
    >
      <button className="flex items-center gap-1 px-4 py-2 text-text-body hover:text-primary transition-colors font-medium">
        {label}
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 pt-4 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 w-[800px]">
              <div className="grid grid-cols-4 gap-6">
                {categories.map((category) => {
                  // Get products for this category
                  const categoryProducts = Object.entries(products)
                    .filter(([id, product]) => product.category === category.slug)
                    .slice(0, 3)
                    .map(([id, product]) => ({ id, ...product }));

                  return (
                    <div key={category.slug} className="space-y-3">
                      <Link
                        to={`/shop/${category.slug}`}
                        className="font-bold text-slate-900 hover:text-primary transition-colors block mb-3"
                      >
                        {category.name}
                      </Link>

                      {/* Featured Products */}
                      <div className="space-y-2">
                        {categoryProducts.map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex items-center gap-2 group"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-12 h-12 rounded-lg object-cover bg-slate-100"
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm text-slate-700 group-hover:text-primary transition-colors line-clamp-1 font-medium">
                                {product.name}
                              </p>
                              <p className="text-xs text-slate-500">{product.type}</p>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to={`/shop/${category.slug}`}
                        className="text-xs text-primary font-semibold hover:underline block"
                      >
                        View All →
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

