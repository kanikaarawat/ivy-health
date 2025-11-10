// src/components/animations/FloatingEmoji.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingEmoji({ emoji, trigger }) {
  const [emojis, setEmojis] = useState([]);

  useEffect(() => {
    if (trigger) {
      const newEmojis = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        emoji,
        x: Math.random() * 200 - 100,
        rotation: Math.random() * 360,
      }));

      setEmojis((prev) => [...prev, ...newEmojis]);

      setTimeout(() => {
        setEmojis((prev) => prev.filter((e) => !newEmojis.includes(e)));
      }, 1500);
    }
  }, [trigger, emoji]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      <AnimatePresence>
        {emojis.map((item) => (
          <motion.div
            key={item.id}
            initial={{
              x: 0,
              y: 0,
              scale: 0,
              opacity: 1,
              rotate: 0,
            }}
            animate={{
              x: item.x,
              y: -200,
              scale: [0, 1.5, 1],
              opacity: [1, 1, 0],
              rotate: item.rotation,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 1.5,
              ease: 'easeOut',
            }}
            className="absolute left-1/2 top-1/2 text-4xl"
          >
            {item.emoji}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

