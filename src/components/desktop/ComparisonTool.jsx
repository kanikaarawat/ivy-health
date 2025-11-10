// src/components/desktop/ComparisonTool.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function ComparisonTool() {
  const { comparison, removeFromComparison, clearComparison } = useCart();

  if (comparison.length === 0) return null;

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="hidden lg:block fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-semibold text-slate-900">
              Compare ({comparison.length}/3)
            </span>
          </div>

          <div className="flex gap-2">
            <AnimatePresence>
              {comparison.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-lg object-cover bg-slate-100"
                  />
                  <button
                    onClick={() => removeFromComparison(product.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <Link
            to="/comparison"
            className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Compare Now
          </Link>

          <button
            onClick={clearComparison}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Clear All
          </button>
        </div>
      </div>
    </motion.div>
  );
}

