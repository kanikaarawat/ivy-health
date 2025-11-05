// src/components/global/TrustBadgeBar.jsx
import React from 'react';
import { Award, Shield, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../../content/data';

export default function TrustBadgeBar() {
  const { certifications } = content.global;
  const icons = [Award, Shield, CheckCircle];

  return (
    <div className="bg-white py-12 border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-12">
          {certifications.map((cert, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary">{cert}</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
