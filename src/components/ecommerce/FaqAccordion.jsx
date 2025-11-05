// src/components/ecommerce/FaqAccordion.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-secondary/20 overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background transition-colors"
          >
            <span className="font-serif text-lg font-medium text-primary pr-4">
              {faq.question}
            </span>
            <span className="flex-shrink-0 text-accent">
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </span>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-text-body/80 leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

