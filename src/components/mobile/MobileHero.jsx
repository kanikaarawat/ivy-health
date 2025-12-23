// src/components/mobile/MobileHero.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Award, Users, Package, Star, Sparkles, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { content } from '../../content/data';

export default function MobileHero() {
  const { hero } = content.homePage;
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeSlide, setActiveSlide] = useState(0);

  const features = [
    { 
      icon: Award, 
      title: 'Certified Excellence',
      desc: 'ISO, GMP, HACCP, AYUSH',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-emerald-50'
    },
    { 
      icon: Package, 
      title: '3 Divisions',
      desc: 'Healthcare, Feed, Cosmetics',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50'
    },
    { 
      icon: Star, 
      title: 'Premium Quality',
      desc: '100% Pure Ayurvedic',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-amber-50'
    },
  ];

  return (
    <div className="lg:hidden">
      {/* Professional Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Subtle Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 pt-8 pb-12">
          {/* Professional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-400/30 mb-6"
          >
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-400">ISO • GMP • AYUSH Certified</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-4 leading-tight bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent"
          >
            {hero.title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/90 mb-8 leading-relaxed"
          >
            {hero.subtitle}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 gap-3 mb-8"
          >
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">
                {inView && <CountUp end={23} duration={2} />}+
              </div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              <div className="text-3xl font-bold mb-1">
                {inView && <CountUp end={500} duration={2.5} />}+
              </div>
              <div className="text-sm text-white/80">Business Clients</div>
            </div>
          </motion.div>

        </div>

        {/* Subtle Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>

      {/* Professional Feature Cards */}
      <section className="px-4 py-8 bg-white">
        <div className="grid grid-cols-3 gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-4 border border-slate-200 shadow-sm text-center"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-slate-700 to-slate-900 rounded-xl flex items-center justify-center mb-3 mx-auto shadow-md">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xs font-bold text-slate-800 mb-1">{feature.title}</h3>
              <p className="text-[10px] text-slate-500">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Professional Quick Access */}
      <section className="px-4 py-6 bg-gradient-to-b from-white to-slate-50">
        <h3 className="text-lg font-bold text-slate-800 mb-4">Our Divisions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Link
            to="/shop/health-care"
            className="bg-white rounded-2xl p-4 active:scale-95 transition-transform shadow-md border border-slate-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-sm">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="text-base font-bold text-slate-800 mb-1">Healthcare</div>
            <div className="text-xs text-slate-500 mb-2">200+ Products</div>
            <div className="flex items-center gap-1 text-xs font-semibold text-emerald-600">
              <span>Explore</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/shop/feed-supplements"
            className="bg-white rounded-2xl p-4 active:scale-95 transition-transform shadow-md border border-slate-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-3 shadow-sm">
              <Package className="w-5 h-5 text-white" />
            </div>
            <div className="text-base font-bold text-slate-800 mb-1">Feed</div>
            <div className="text-xs text-slate-500 mb-2">250+ Products</div>
            <div className="flex items-center gap-1 text-xs font-semibold text-blue-600">
              <span>Explore</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/shop/personal-care"
            className="bg-white rounded-2xl p-4 active:scale-95 transition-transform shadow-md border border-slate-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-3 shadow-sm">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-base font-bold text-slate-800 mb-1">Cosmetics</div>
            <div className="text-xs text-slate-500 mb-2">70+ Products</div>
            <div className="flex items-center gap-1 text-xs font-semibold text-purple-600">
              <span>Explore</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>

          <Link
            to="/contract-manufacturing"
            className="bg-white rounded-2xl p-4 active:scale-95 transition-transform shadow-md border border-slate-200"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-xl flex items-center justify-center mb-3 shadow-sm">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div className="text-base font-bold text-slate-800 mb-1">3rd Party</div>
            <div className="text-xs text-slate-500 mb-2">Manufacturing</div>
            <div className="flex items-center gap-1 text-xs font-semibold text-slate-600">
              <span>Explore</span>
              <ChevronRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

