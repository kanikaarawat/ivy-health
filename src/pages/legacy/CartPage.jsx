// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md"
        >
          <div className="w-32 h-32 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="w-16 h-16 text-slate-400" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Your Cart is Empty</h2>
          <p className="text-slate-600 mb-8">
            Add products to your cart to see them here
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-colors"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-20 pb-32 lg:pb-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
              Shopping Cart
            </h1>
            <p className="text-slate-600">{total} items in cart</p>
          </div>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="text-red-600 font-semibold hover:text-red-700 transition-colors"
            >
              Clear All
            </button>
          )}
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="bg-white rounded-2xl p-4 shadow-md"
              >
                <div className="flex gap-4">
                  {/* Image */}
                  <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1 min-w-0 pr-2">
                        <h3 className="font-bold text-slate-900 line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-sm text-slate-500">{item.type}</p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-100 transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center bg-slate-100 rounded-xl">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-200 rounded-l-xl transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-12 text-center font-semibold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-9 h-9 flex items-center justify-center text-slate-700 hover:bg-slate-200 rounded-r-xl transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm text-slate-500">
                        {item.quantity} {item.quantity === 1 ? 'unit' : 'units'}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h3>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-slate-600">
              <span>Total Items</span>
              <span className="font-semibold text-slate-900">{total}</span>
            </div>
            <div className="flex justify-between text-slate-600">
              <span>Products</span>
              <span className="font-semibold text-slate-900">{cart.length}</span>
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 mb-6">
            <div className="flex justify-between text-lg font-bold text-slate-900">
              <span>Total</span>
              <span>{total} Items</span>
            </div>
          </div>

          <Link
            to="/contact"
            className="block w-full bg-slate-900 text-white text-center py-4 rounded-2xl font-bold shadow-lg hover:bg-slate-800 transition-colors"
          >
            Request Quote
          </Link>

          <p className="text-xs text-slate-500 text-center mt-4">
            Contact us for pricing and bulk orders
          </p>
        </motion.div>
      </div>
    </div>
  );
}

