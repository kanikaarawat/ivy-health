// src/components/mobile/MobileCategorySection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Pill, Leaf, Sparkles, ArrowRight } from 'lucide-react';

export default function MobileCategorySection() {
  const categories = [
    {
      title: 'Immunity Boosters',
      count: '50+',
      icon: Sparkles,
      gradient: 'from-slate-700 to-slate-900',
      bg: 'bg-slate-50',
      path: '/shop/health-care'
    },
    {
      title: 'Digestive Health',
      count: '35+',
      icon: Leaf,
      gradient: 'from-slate-700 to-slate-900',
      bg: 'bg-slate-50',
      path: '/shop/health-care'
    },
    {
      title: 'Hair & Skin Care',
      count: '40+',
      icon: Sparkles,
      gradient: 'from-slate-700 to-slate-900',
      bg: 'bg-slate-50',
      path: '/shop/personal-care'
    },
    {
      title: 'Pain Relief',
      count: '25+',
      icon: Pill,
      gradient: 'from-slate-700 to-slate-900',
      bg: 'bg-slate-50',
      path: '/shop/health-care'
    },
  ];

  return (
    <section className="lg:hidden px-4 py-8 bg-white">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Shop by Category
        </h2>
        <p className="text-sm text-slate-600">
          Find products for your wellness needs
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-3">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white rounded-2xl p-5 flex items-center justify-between border border-slate-200 shadow-sm active:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center shadow-md`}>
                  <category.icon className="w-7 h-7 text-white" />
                </div>

                {/* Info */}
                <div>
                  <h3 className="font-bold text-slate-900 mb-0.5 text-base">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {category.count} Products
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-slate-400" />
            </motion.div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <Link to="/shop">
        <motion.button
          whileTap={{ scale: 0.98 }}
          className="w-full mt-6 bg-slate-900 text-white py-4 rounded-2xl font-bold shadow-lg flex items-center justify-center gap-2 active:bg-slate-800 transition-colors"
        >
          <span>View All Categories</span>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </Link>
    </section>
  );
}

