// src/components/3d/Hero3DScene.jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero3DScene() {
  return (
    <div className="w-full h-[500px] md:h-[600px] relative flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20" />
      
      {/* Floating Orbs */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${60 + Math.random() * 100}px`,
            height: `${60 + Math.random() * 100}px`,
            background: `radial-gradient(circle, ${
              i % 3 === 0 ? '#E57A4B' : i % 3 === 1 ? '#B4A78A' : '#1A3A32'
            }40, transparent)`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Central Helix Pattern */}
      <div className="relative w-full max-w-md h-full flex items-center justify-center">
        {[...Array(20)].map((_, i) => {
          const angle = (i / 20) * Math.PI * 4;
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = (i / 20) * 400 - 200;
          const z = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gradient-to-br from-accent to-accent/60 shadow-xl"
              style={{
                width: `${30 + Math.sin(i * 0.5) * 10}px`,
                height: `${30 + Math.sin(i * 0.5) * 10}px`,
                left: '50%',
                top: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px) translateZ(${z}px)`,
                opacity: 0.6 + (z / 120) * 0.4,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.1,
              }}
            />
          );
        })}
      </div>

      {/* Decorative Rings */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute border-2 rounded-full"
          style={{
            width: `${ring * 150}px`,
            height: `${ring * 150}px`,
            borderColor: ring % 2 === 0 ? '#E57A4B30' : '#1A3A3230',
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            scale: [1, 1.05, 1],
          }}
          transition={{
            rotate: {
              duration: 15 + ring * 5,
              repeat: Infinity,
              ease: "linear"
            },
            scale: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      ))}
    </div>
  );
}
