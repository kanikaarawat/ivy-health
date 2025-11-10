// src/components/mobile/SearchOverlay.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, TrendingUp, Clock, Mic, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../../content/data';

export default function SearchOverlay({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const [isListening, setIsListening] = useState(false);

  const { products } = content.productData;

  useEffect(() => {
    const saved = localStorage.getItem('ivyHerbals_recentSearches');
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (searchQuery.length > 1) {
      const results = Object.entries(products)
        .filter(([id, product]) => 
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 8)
        .map(([id, product]) => ({ id, ...product }));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, products]);

  const saveSearch = (query) => {
    const updated = [query, ...recentSearches.filter(q => q !== query)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('ivyHerbals_recentSearches', JSON.stringify(updated));
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice search (would integrate with Web Speech API)
    setTimeout(() => {
      setIsListening(false);
      setSearchQuery('Immunity booster');
    }, 2000);
  };

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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Search Overlay */}
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed top-0 left-0 right-0 bg-white z-50 max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-4 py-3">
              <div className="flex items-center gap-3">
                <button onClick={onClose} className="p-2">
                  <X className="w-5 h-5 text-slate-600" />
                </button>
                
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    autoFocus
                    className="w-full pl-12 pr-12 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleVoiceSearch}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full ${isListening ? 'bg-red-500 animate-pulse' : 'bg-slate-200'}`}
                  >
                    <Mic className={`w-4 h-4 ${isListening ? 'text-white' : 'text-slate-600'}`} />
                  </button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide">
                {['All', 'Syrup', 'Powder', 'Oil', 'Liquid'].map((filter) => (
                  <button
                    key={filter}
                    className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium whitespace-nowrap active:bg-slate-900 active:text-white transition-colors"
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              {searchQuery.length > 0 ? (
                <>
                  {/* Search Results */}
                  {searchResults.length > 0 ? (
                    <div className="space-y-3">
                      <h3 className="text-sm font-semibold text-slate-600 mb-3">
                        {searchResults.length} Results
                      </h3>
                      {searchResults.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => {
                            saveSearch(searchQuery);
                            onClose();
                          }}
                          className="flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-50 active:bg-slate-100 transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-16 h-16 rounded-xl object-cover bg-slate-100"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-slate-900">{product.name}</h4>
                            <p className="text-sm text-slate-500">{product.type}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-slate-400" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                      <p className="text-slate-500">No products found</p>
                    </div>
                  )}
                </>
              ) : (
                <>
                  {/* Recent Searches */}
                  {recentSearches.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-sm font-semibold text-slate-600 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          Recent Searches
                        </h3>
                        <button
                          onClick={() => {
                            setRecentSearches([]);
                            localStorage.removeItem('ivyHerbals_recentSearches');
                          }}
                          className="text-xs text-slate-500"
                        >
                          Clear
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {recentSearches.map((search, i) => (
                          <button
                            key={i}
                            onClick={() => setSearchQuery(search)}
                            className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm"
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Trending */}
                  <div>
                    <h3 className="text-sm font-semibold text-slate-600 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      Trending Searches
                    </h3>
                    <div className="space-y-2">
                      {['Immunity Booster', 'Hair Oil', 'Digestive Health', 'Joint Pain'].map((term) => (
                        <button
                          key={term}
                          onClick={() => setSearchQuery(term)}
                          className="block w-full text-left px-4 py-3 rounded-xl hover:bg-slate-50 text-slate-700"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

