// src/components/mobile/QuickViewModal.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Star, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import ShareButton from '../common/ShareButton';

export default function QuickViewModal({ product, productId, isOpen, onClose }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  
  if (!product) return null;
  
  const isInWishlist = wishlist.find(item => item.id === productId);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={(e, info) => {
              if (info.offset.y > 100) onClose();
            }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 max-h-[85vh] overflow-y-auto"
          >
            {/* Drag Handle */}
            <div className="sticky top-0 bg-white pt-3 pb-2 flex justify-center border-b border-slate-100">
              <div className="w-12 h-1 bg-slate-300 rounded-full" />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>

              {/* Image */}
              <div className="aspect-square rounded-3xl overflow-hidden bg-slate-100 mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-lg bg-slate-900 text-white text-xs font-bold mb-2">
                      {product.type}
                    </span>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">
                      {product.name}
                    </h2>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-slate-900 text-slate-900" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-600">(5.0)</span>
                </div>

                {/* Features */}
                {product.benefits && (
                  <div className="space-y-2 mb-6">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2" />
                        <span className="text-sm text-slate-600">{benefit}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => {
                      toggleWishlist({ id: productId, ...product });
                    }}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold transition-colors ${
                      isInWishlist
                        ? 'bg-red-50 text-red-600 border-2 border-red-200'
                        : 'bg-slate-100 text-slate-700 border-2 border-slate-200'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-red-600' : ''}`} />
                    <span>{isInWishlist ? 'Saved' : 'Save'}</span>
                  </button>

                  <ShareButton 
                    url={`${window.location.origin}/product/${productId}`}
                    title={product.name}
                    className="flex items-center justify-center gap-2 py-4 rounded-2xl font-semibold bg-slate-100 text-slate-700 border-2 border-slate-200 w-full"
                  />
                </div>

                <button
                  onClick={() => {
                    addToCart({ id: productId, ...product });
                    onClose();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold bg-slate-900 text-white shadow-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <Link
                  to={`/product/${productId}`}
                  onClick={onClose}
                  className="block text-center py-3 text-slate-600 font-semibold"
                >
                  View Full Details
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

