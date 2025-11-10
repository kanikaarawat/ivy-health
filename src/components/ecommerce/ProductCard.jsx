// src/components/ecommerce/ProductCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Star, Heart, ShoppingCart, Sparkles } from 'lucide-react';

export default function ProductCard({ product, productId }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Link to={`/product/${productId}`} className="group block h-full">
        <motion.div 
          className="relative bg-white rounded-3xl overflow-hidden border-2 border-primary/10 h-full shadow-lg"
          whileHover={{ 
            y: -10,
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(45, 95, 63, 0.2)",
            borderColor: "rgba(45, 95, 63, 0.3)"
          }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 opacity-0"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Image Container with Parallax */}
          <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-cream to-secondary/20">
            <motion.img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              animate={{ 
                scale: isHovered ? 1.15 : 1,
                rotate: isHovered ? 2 : 0
              }}
              transition={{ duration: 0.6 }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Type Badge with Animation */}
            <motion.div 
              className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold shadow-xl"
              animate={{ 
                y: isHovered ? -5 : 0,
                boxShadow: isHovered ? "0 10px 20px rgba(0,0,0,0.3)" : "0 4px 6px rgba(0,0,0,0.1)"
              }}
            >
              {product.type}
            </motion.div>

            {/* Favorite Icon */}
            <motion.button
              className="absolute top-4 left-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.preventDefault();
                setIsFavorite(!isFavorite);
              }}
              animate={{ 
                scale: isFavorite ? [1, 1.3, 1] : 1,
              }}
            >
              <Heart 
                className={`w-5 h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-text-body'}`}
              />
            </motion.button>

            {/* Sparkle Effect */}
            <AnimatePresence>
              {isHovered && (
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  <Sparkles className="w-12 h-12 text-accent drop-shadow-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Content with Slide-up Animation */}
          <div className="p-6 space-y-4 relative">
            <motion.h3 
              className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: isHovered ? '100%' : '0%'
              }}
              transition={{ duration: 0.5 }}
            >
              {product.name}
            </motion.h3>
            
            <p className="text-sm text-text-body/70 line-clamp-2 leading-relaxed">
              {product.description}
            </p>

            {/* Interactive Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-primary/10">
              <div className="flex items-center gap-2">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ 
                    boxShadow: [
                      "0 0 0 0 rgba(34, 197, 94, 0.4)",
                      "0 0 0 8px rgba(34, 197, 94, 0)",
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-text-body font-medium">In Stock</span>
              </div>
              
              {/* View Details Button */}
              <motion.div 
                className="flex items-center gap-2 text-primary font-bold"
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-sm">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>

            {/* Rating Stars */}
            <div className="flex items-center gap-1 pt-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Star className="w-4 h-4 fill-accent text-accent" />
                </motion.div>
              ))}
              <span className="text-xs text-text-body/60 ml-2">(5.0)</span>
            </div>
          </div>

          {/* Hover Shine Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
            initial={{ x: "-100%", skewX: -20 }}
            animate={{ x: isHovered ? "200%" : "-100%" }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </Link>
    </motion.div>
  );
}
