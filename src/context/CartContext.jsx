// src/context/CartContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { triggerShoppingBag, triggerHeartExplosion, triggerSadRemoval } from '../components/animations/MicroInteractions';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [comparison, setComparison] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('ivyHerbals_cart');
    const savedWishlist = localStorage.getItem('ivyHerbals_wishlist');
    const savedViewed = localStorage.getItem('ivyHerbals_viewed');
    
    if (savedCart) setCart(JSON.parse(savedCart));
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    if (savedViewed) setRecentlyViewed(JSON.parse(savedViewed));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('ivyHerbals_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ivyHerbals_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('ivyHerbals_viewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  // Cart functions
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
      toast.success('Quantity updated in cart');
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
      // Trigger shopping bag animation
      triggerShoppingBag();
      toast.success('Added to cart!', {
        icon: '🛒',
        duration: 2000,
      });
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
    // Trigger sad animation - crying face and broken heart
    triggerSadRemoval();
    toast('Removed from cart', {
      icon: '😢',
      duration: 2000,
      style: {
        background: '#F1F5F9',
        color: '#475569',
      },
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => 
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    toast.success('Cart cleared');
  };

  // Wishlist functions
  const addToWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      toast.error('Already in wishlist');
      return;
    }
    setWishlist([...wishlist, product]);
    // Trigger heart explosion
    triggerHeartExplosion();
    toast.success('Added to wishlist!', {
      icon: '❤️',
      duration: 2000,
    });
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter(item => item.id !== productId));
    toast.success('Removed from wishlist');
  };

  const toggleWishlist = (product) => {
    if (wishlist.find(item => item.id === product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  // Recently viewed
  const addToRecentlyViewed = (product) => {
    const filtered = recentlyViewed.filter(item => item.id !== product.id);
    setRecentlyViewed([product, ...filtered].slice(0, 10));
  };

  // Comparison
  const addToComparison = (product) => {
    if (comparison.length >= 3) {
      toast.error('Maximum 3 products for comparison');
      return;
    }
    if (comparison.find(item => item.id === product.id)) {
      toast.error('Already in comparison');
      return;
    }
    setComparison([...comparison, product]);
    toast.success('Added to comparison');
  };

  const removeFromComparison = (productId) => {
    setComparison(comparison.filter(item => item.id !== productId));
  };

  const clearComparison = () => {
    setComparison([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

  const value = {
    cart,
    wishlist,
    recentlyViewed,
    comparison,
    cartTotal,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    addToRecentlyViewed,
    addToComparison,
    removeFromComparison,
    clearComparison,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

