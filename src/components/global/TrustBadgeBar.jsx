// src/components/global/TrustBadgeBar.jsx
import React from 'react';
import { Award, Shield, CheckCircle, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { content } from '../../content/data';

export default function TrustBadgeBar() {
  const { certifications } = content.global;
  const icons = [Award, Shield, CheckCircle, Leaf];
  const colors = [
    'from-primary to-primary/60',
    'from-accent to-accent/60',
    'from-secondary to-accent',
    'from-primary to-accent'
  ];

  return (
    <div className="relative bg-gradient-to-r from-white via-cream/30 to-white py-16 border-y-2 border-primary/10 overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, -50, 0]
        }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-16">
          {certifications.map((cert, index) => {
            const Icon = icons[index] || Award;
            const gradient = colors[index];
            
            return (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.15,
                  type: "spring",
                  stiffness: 100 
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                className="flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border-2 border-primary/10 cursor-pointer group"
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white relative z-10" />
                  
                  {/* Pulse Effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{
                      scale: [1, 1.5],
                      opacity: [0.5, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
                
                <div className="text-left">
                  <div className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                    {cert}
                  </div>
                  <div className="text-xs text-text-body/60">Certified Excellence</div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
