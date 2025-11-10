// src/components/mobile/MobileProductShowcase.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Eye, ShoppingCart } from 'lucide-react';
import { content } from '../../content/data';
import QuickViewModal from './QuickViewModal';
import { useCart } from '../../context/CartContext';

export default function MobileProductShowcase() {
  const { topSellers } = content.homePage;
  const { products } = content.productData;
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const { addToCart } = useCart();

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
          <div key={product.id} className="relative group">
            <Link to={`/product/${product.id}`}>
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

                {/* Rating & Add Button */}
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-slate-900 text-slate-900" />
                  ))}
                  <span className="text-[10px] text-slate-500 ml-auto font-medium">In Stock</span>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id: product.id, ...product });
                  }}
                  className="w-full py-2.5 bg-slate-900 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
                </div>
              </motion.div>
            </Link>

            {/* Quick View Button */}
            <motion.button
              onClick={(e) => {
                e.preventDefault();
                setQuickViewProduct({ id: product.id, ...product });
              }}
              className="absolute bottom-3 right-3 w-9 h-9 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg opacity-0 group-active:opacity-100 transition-opacity z-10"
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-4 h-4 text-white" />
            </motion.button>
          </div>
        ))}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <QuickViewModal
          product={quickViewProduct}
          productId={quickViewProduct.id}
          isOpen={!!quickViewProduct}
          onClose={() => setQuickViewProduct(null)}
        />
      )}
    </section>
  );
}

