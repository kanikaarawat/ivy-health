// src/components/desktop/AdvancedSearch.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../../content/data';

export default function AdvancedSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [results, setResults] = useState([]);

  const { products } = content.productData;

  const types = ['All', 'Syrup', 'Powder', 'Oil', 'Liquid', 'Tablet'];
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'health-care', label: 'Healthcare' },
    { value: 'feed-supplements', label: 'Feed Supplements' },
    { value: 'personal-care', label: 'Personal Care' },
  ];

  const handleSearch = () => {
    let filtered = Object.entries(products).map(([id, product]) => ({
      id,
      ...product,
    }));

    if (searchQuery) {
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter((p) => p.type.toLowerCase() === selectedType.toLowerCase());
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    setResults(filtered.slice(0, 12));
  };

  React.useEffect(() => {
    if (searchQuery || selectedType !== 'all' || selectedCategory !== 'all') {
      handleSearch();
    } else {
      setResults([]);
    }
  }, [searchQuery, selectedType, selectedCategory]);

  return (
    <div className="hidden lg:block relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors"
      >
        <Search className="w-5 h-5 text-slate-600" />
        <span className="text-slate-600">Search products...</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed top-20 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-2xl shadow-2xl z-50 p-6 max-h-[80vh] overflow-y-auto"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Advanced Search</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Input */}
              <div className="relative mb-4">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by product name or description..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none text-lg"
                  autoFocus
                />
              </div>

              {/* Filters */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-5 h-5 text-slate-600" />
                  <span className="font-semibold text-slate-700">Filters:</span>
                </div>

                {/* Type Filter */}
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {types.map((type) => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>

                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {categories.map((cat) => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedType('all');
                    setSelectedCategory('all');
                  }}
                  className="text-sm text-slate-600 hover:text-slate-900"
                >
                  Clear
                </button>
              </div>

              {/* Results */}
              <div>
                {results.length > 0 ? (
                  <>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-slate-700">
                        {results.length} Results Found
                      </h3>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => setIsOpen(false)}
                          className="bg-slate-50 rounded-xl p-4 hover:bg-slate-100 transition-colors"
                        >
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full aspect-square object-cover rounded-lg mb-3 bg-white"
                          />
                          <h4 className="font-semibold text-slate-900 mb-1 line-clamp-1">
                            {product.name}
                          </h4>
                          <p className="text-sm text-slate-600">{product.type}</p>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : searchQuery || selectedType !== 'all' || selectedCategory !== 'all' ? (
                  <div className="text-center py-12">
                    <p className="text-slate-500">No products found matching your criteria</p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Search className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                    <p className="text-slate-500">Start typing to search for products</p>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

