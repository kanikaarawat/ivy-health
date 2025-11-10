// src/components/mobile/MobileProductShowcase.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';
import { content } from '../../content/data';

export default function MobileProductShowcase() {
  const { topSellers } = content.homePage;
  const { products } = content.productData;

  const topSellerProducts = topSellers.map(id => ({
    id,
    ...products[id]
  })).slice(0, 4);

  return (
    <section className="lg:hidden px-4 py-8 bg-slate-50">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            Bestsellers
          </h2>
          <p className="text-sm text-slate-500 mt-1">Trusted by thousands</p>
        </div>
        <Link to="/shop" className="text-slate-700 font-semibold text-sm flex items-center gap-1 bg-white px-3 py-2 rounded-xl shadow-sm border border-slate-200">
          <span>View All</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-3">
        {topSellerProducts.map((product, index) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group"
          >
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 active:scale-[0.98] transition-transform shadow-md"
            >
              {/* Image */}
              <div className="relative aspect-square bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                {/* Type Badge */}
                <div className="absolute top-2 right-2 bg-slate-900 text-white px-3 py-1 rounded-lg text-[10px] font-bold shadow-lg">
                  {product.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-bold text-slate-900 mb-1 text-sm line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Rating & Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-slate-900 text-slate-900" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">In Stock</span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

