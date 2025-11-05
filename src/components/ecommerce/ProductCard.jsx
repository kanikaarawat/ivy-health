// src/components/ecommerce/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function ProductCard({ product, productId }) {
  return (
    <Link to={`/product/${productId}`} className="group block h-full">
      <div className="bg-white rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all h-full hover:shadow-lg">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-cream">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Type Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 rounded-full text-xs font-medium text-primary shadow-sm">
            {product.type}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-text-light line-clamp-2">
            {product.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              <span className="text-xs text-text-light">In Stock</span>
            </div>
            
            <div className="flex items-center text-primary group-hover:text-secondary transition-colors">
              <span className="text-sm font-medium">View</span>
              <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
