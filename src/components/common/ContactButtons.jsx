// src/components/common/ContactButtons.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';
import { content } from '../../content/data';

export default function ContactButtons({ className = '', variant = 'floating' }) {
  const { phone } = content.global;

  const handleCall = () => {
    window.location.href = `tel:${phone}`;
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hi, I would like to inquire about your products.');
    window.open(`https://wa.me/${phone.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  if (variant === 'floating') {
    return (
      <div className={`lg:hidden fixed bottom-24 right-4 flex flex-col gap-3 z-40 ${className}`}>
        {/* WhatsApp Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-2xl text-white"
        >
          <MessageCircle className="w-6 h-6" fill="currentColor" />
        </motion.button>

        {/* Call Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCall}
          className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center shadow-2xl text-white"
        >
          <Phone className="w-6 h-6" fill="currentColor" />
        </motion.button>
      </div>
    );
  }

  return (
    <div className={`flex gap-3 ${className}`}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleWhatsApp}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-green-500 text-white font-semibold shadow-md"
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp</span>
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={handleCall}
        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow-md"
      >
        <Phone className="w-5 h-5" />
        <span>Call Now</span>
      </motion.button>
    </div>
  );
}

