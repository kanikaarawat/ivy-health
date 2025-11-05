// src/components/global/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../content/data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMenuOpen, setShopMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { mainNav } = content.sitemap;
  const { footerProducts } = content.sitemap;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm border-b border-border'
          : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-xl">I</span>
            </div>
            <div>
              <span className="font-bold text-xl text-primary">Ivy Herbals</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNav.map((item) => (
              item.name === 'Shop' ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setShopMenuOpen(true)}
                  onMouseLeave={() => setShopMenuOpen(false)}
                >
                  <button className={`flex items-center gap-1 py-2 font-medium transition-colors ${
                    location.pathname.includes('/shop') ? 'text-primary' : 'text-text-body hover:text-primary'
                  }`}>
                    {item.name}
                    <ChevronDown size={16} className={`transition-transform ${shopMenuOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {shopMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-border overflow-hidden"
                      >
                        {footerProducts.map((category) => (
                          <Link
                            key={category.name}
                            to={category.path}
                            className="block px-6 py-3 text-text-body hover:bg-cream hover:text-primary transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 font-medium transition-colors ${
                    location.pathname === item.path ? 'text-primary' : 'text-text-body hover:text-primary'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-cream transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden border-t border-border"
            >
              <div className="py-6 space-y-2">
                {mainNav.map((item) => (
                  <div key={item.name}>
                    {item.name === 'Shop' ? (
                      <div>
                        <button
                          onClick={() => setShopMenuOpen(!shopMenuOpen)}
                          className="w-full flex items-center justify-between px-4 py-3 text-text-body hover:bg-cream rounded-lg transition-colors"
                        >
                          <span>{item.name}</span>
                          <ChevronDown size={20} className={`transition-transform ${shopMenuOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {shopMenuOpen && (
                            <motion.div
                              initial={{ height: 0 }}
                              animate={{ height: 'auto' }}
                              exit={{ height: 0 }}
                              className="pl-4 space-y-1 mt-2 overflow-hidden"
                            >
                              {footerProducts.map((category) => (
                                <Link
                                  key={category.name}
                                  to={category.path}
                                  className="block px-4 py-2 text-text-body hover:text-primary rounded-lg hover:bg-cream transition-all"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {category.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          location.pathname === item.path
                            ? 'text-primary bg-primary/5'
                            : 'text-text-body hover:bg-cream'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  to="/contact"
                  className="block mx-4 mt-4 px-6 py-3 bg-primary text-white rounded-full font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
