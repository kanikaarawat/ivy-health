// src/components/ecommerce/ProductTabs.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Sparkles, Leaf, BookOpen } from 'lucide-react';

export default function ProductTabs({ product }) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description', icon: FileText },
    { id: 'benefits', label: 'Benefits', icon: Sparkles },
    { id: 'ingredients', label: 'Ingredients', icon: Leaf },
    { id: 'usage', label: 'Usage', icon: BookOpen }
  ];

  // Filter out tabs that don't have content
  const availableTabs = tabs.filter(tab => {
    if (tab.id === 'description') return product.fullDescription || product.description;
    return product[tab.id];
  });

  return (
    <div className="bg-cream rounded-2xl p-8 border border-border">
      {/* Tab Headers */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-0">
        {availableTabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-4 font-medium transition-all rounded-t-xl ${
                activeTab === tab.id
                  ? 'text-primary bg-white'
                  : 'text-text-light hover:text-primary hover:bg-white/50'
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon size={18} />
                <span>{tab.label}</span>
              </div>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl p-8"
      >
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            <p className="text-text-body text-lg leading-relaxed">
              {product.fullDescription || product.description}
            </p>
          </div>
        )}

        {activeTab === 'benefits' && product.benefits && (
          <div className="space-y-4">
            {product.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 bg-cream rounded-xl"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <p className="text-text-body">{benefit}</p>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'ingredients' && product.ingredients && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {product.ingredients.map((ingredient, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-3 bg-cream rounded-xl border border-border text-center"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-2">
                  <Leaf className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm font-medium text-primary">{ingredient}</span>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'usage' && product.usage && (
          <div className="bg-cream p-8 rounded-xl border border-border">
            <h3 className="font-bold text-primary mb-4 text-lg">How to Use</h3>
            {Array.isArray(product.usage) ? (
              <ul className="space-y-3">
                {product.usage.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-sm font-bold text-primary">
                      {index + 1}
                    </span>
                    <span className="text-text-body">{instruction}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-text-body leading-relaxed">{product.usage}</p>
            )}
            
            {product.storage && (
              <div className="mt-6 pt-6 border-t border-border">
                <h4 className="font-bold text-primary mb-2">Storage Instructions</h4>
                <p className="text-text-light text-sm">{product.storage}</p>
              </div>
            )}
          </div>
        )}
      </motion.div>
    </div>
  );
}
