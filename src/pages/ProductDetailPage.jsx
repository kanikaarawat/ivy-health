// src/pages/ProductDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, CheckCircle, Leaf, Share2, Heart, ShoppingCart } from 'lucide-react';
import ProductTabs from '../components/ecommerce/ProductTabs';
import R3FProductViewer from '../components/3d/R3FProductViewer';
import ProductCard from '../components/ecommerce/ProductCard';
import { content } from '../content/data';
import { useCart } from '../context/CartContext';
import ShareButton from '../components/common/ShareButton';

export default function ProductDetailPage() {
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState(0);
  const { addToCart, toggleWishlist, wishlist } = useCart();
  
  const { products, categories } = content.productData;
  const { topSellers } = content.homePage;
  
  const product = products[productId];
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Product Not Found</h1>
          <Link to="/shop" className="text-primary hover:text-secondary">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const category = categories[product.category];
  const isTopSeller = topSellers.includes(productId);
  const isInWishlist = wishlist.find(item => item.id === productId);
  
  // Get related products
  const relatedProducts = Object.entries(products)
    .filter(([id, p]) => p.category === product.category && id !== productId)
    .slice(0, 4)
    .map(([id, p]) => ({ id, ...p }));

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-cream border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <Link to="/shop" className="text-text-light hover:text-primary transition-colors">
              Shop
            </Link>
            <span className="text-text-light">/</span>
            <Link to={`/shop/${product.category}`} className="text-text-light hover:text-primary transition-colors">
              {category?.name}
            </Link>
            <span className="text-text-light">/</span>
            <span className="text-primary font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto mb-20">
            {/* Left - Product Image/Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {isTopSeller ? (
                <R3FProductViewer />
              ) : (
                <div className="relative rounded-2xl overflow-hidden shadow-xl bg-cream aspect-square">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {/* Thumbnail Gallery (placeholder) */}
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden border-2 border-transparent hover:border-primary/50 cursor-pointer transition-all"
                  >
                    <img
                      src={product.image}
                      alt={`${product.name} view ${i}`}
                      className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {category?.name}
                </span>
                <span className="px-4 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                  {product.type}
                </span>
                {isTopSeller && (
                  <span className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-medium">
                    ⭐ Best Seller
                  </span>
                )}
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-green-50 text-green-700 rounded-full text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <span className="font-medium">In Stock</span>
                </div>
              </div>

              {/* Product Name */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  {product.name}
                </h1>
                <p className="text-xl text-text-light leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Quick Features */}
              {product.benefits && (
                <div className="bg-cream rounded-2xl p-6 space-y-3">
                  <h3 className="font-bold text-primary flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Key Benefits
                  </h3>
                  <ul className="space-y-2">
                    {product.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-text-body">
                        <span className="text-secondary mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Packaging Options */}
              {product.packaging && (
                <div>
                  <h3 className="font-bold text-primary mb-3 flex items-center gap-2">
                    <Package className="w-5 h-5" />
                    Available Sizes
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {product.packaging.map((size, index) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(index)}
                        className={`px-6 py-3 rounded-full border-2 transition-all font-medium ${
                          selectedSize === index
                            ? 'border-primary bg-primary text-white'
                            : 'border-border hover:border-primary/50 text-text-body'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-4 pt-4">
                {/* Add to Cart - Primary Button */}
                <motion.button
                  onClick={() => addToCart({ id: productId, ...product })}
                  className="w-full px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-slate-800 transition-all shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ShoppingCart className="w-6 h-6" />
                  <span>Add to Cart</span>
                </motion.button>

                {/* Secondary Actions */}
                <div className="flex gap-3">
                  <Link
                    to="/contact"
                    className="flex-1 px-6 py-3 bg-white border-2 border-slate-200 text-slate-900 rounded-xl font-semibold text-center hover:border-slate-300 transition-all"
                  >
                    Inquire Now
                  </Link>
                  
                  <ShareButton 
                    url={`${window.location.origin}/product/${productId}`}
                    title={product.name}
                    className="px-4 py-3 border-2 border-slate-200 hover:border-slate-300 rounded-xl transition-all"
                  />
                  
                  <motion.button
                    onClick={() => toggleWishlist({ id: productId, ...product })}
                    className={`px-4 py-3 border-2 rounded-xl transition-all ${
                      isInWishlist
                        ? 'border-red-200 bg-red-50'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Heart 
                      className={`w-5 h-5 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-slate-700'}`}
                    />
                  </motion.button>
                </div>
              </div>

              {/* Certifications */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <Leaf className="w-8 h-8 text-secondary" />
                <div>
                  <div className="font-bold text-primary">100% Natural</div>
                  <div className="text-sm text-text-light">GMP Certified Manufacturing</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Product Tabs */}
          <div className="max-w-7xl mx-auto">
            <ProductTabs product={product} />
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="max-w-7xl mx-auto mt-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-primary mb-4">Related Products</h2>
                <p className="text-text-light">You might also like these products</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((relProduct) => (
                  <ProductCard key={relProduct.id} product={relProduct} productId={relProduct.id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
