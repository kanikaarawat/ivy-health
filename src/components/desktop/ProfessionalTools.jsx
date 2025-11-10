// src/components/desktop/ProfessionalTools.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calculator, MapPin, Building2, Download } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfessionalTools() {
  const [quantity, setQuantity] = useState(1);
  const [pricePerUnit] = useState(100); // Example price

  const handleDownloadCatalog = () => {
    toast.success('PDF Catalog will be downloaded');
    // Implement actual PDF download
  };

  const total = quantity * pricePerUnit;

  return (
    <div className="hidden lg:block space-y-6">
      {/* Quick Quote Calculator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-primary/10 to-green-100 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">Quick Quote Calculator</h3>
            <p className="text-sm text-slate-600">Get instant pricing for bulk orders</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              Quantity (Units)
            </label>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-4 py-3 rounded-xl border-2 border-white focus:border-primary focus:outline-none"
              min="1"
            />
          </div>

          <div className="bg-white rounded-xl p-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-600">Price per unit:</span>
              <span className="font-semibold">₹{pricePerUnit}</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-primary">
              <span>Estimated Total:</span>
              <span>₹{total.toLocaleString()}</span>
            </div>
          </div>

          <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors">
            Request Quote
          </button>
        </div>
      </motion.div>

      {/* Download Catalog */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        onClick={handleDownloadCatalog}
        className="w-full bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-primary transition-colors text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
            <Download className="w-6 h-6 text-slate-700" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-slate-900 mb-1">Download Product Catalog</h3>
            <p className="text-sm text-slate-600">Complete PDF with all products & pricing</p>
          </div>
          <FileText className="w-6 h-6 text-slate-400" />
        </div>
      </motion.button>

      {/* Bulk Inquiry */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-slate-900 text-white rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-6 h-6" />
          <h3 className="text-xl font-bold">Bulk Orders</h3>
        </div>
        <p className="text-white/80 mb-4">
          Get special pricing for bulk orders and become our distribution partner
        </p>
        <button className="w-full bg-white text-slate-900 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">
          Contact for Bulk Pricing
        </button>
      </motion.div>

      {/* Distributor Locator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-slate-200 rounded-2xl p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <MapPin className="w-6 h-6 text-primary" />
          <h3 className="text-xl font-bold text-slate-900">Find Nearest Distributor</h3>
        </div>
        <input
          type="text"
          placeholder="Enter your city or PIN code"
          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary focus:outline-none mb-3"
        />
        <button className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors">
          Search
        </button>
      </motion.div>
    </div>
  );
}

