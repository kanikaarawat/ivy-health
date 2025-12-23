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
    return null; // Hide floating buttons on mobile
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

