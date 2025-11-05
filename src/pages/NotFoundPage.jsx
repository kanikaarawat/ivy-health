// src/pages/NotFoundPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/10 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <motion.h1
          className="font-serif text-9xl font-bold text-accent mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>
        
        <h2 className="font-serif text-4xl font-bold text-primary mb-4">
          Page Not Found
        </h2>
        
        <p className="text-xl text-text-body/80 mb-8">
          Oops! The page you're looking for seems to have wandered off into the herbal gardens.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button to="/" variant="primary">
            <Home size={20} className="inline mr-2" />
            Go Home
          </Button>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-background transition-all"
          >
            <ArrowLeft size={20} className="mr-2" />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
}

