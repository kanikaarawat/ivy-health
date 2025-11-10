// src/components/mobile/BottomNavigation.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ShoppingBag, Building2, User, Phone } from 'lucide-react';

export default function BottomNavigation() {
  const location = useLocation();

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: ShoppingBag, label: 'Shop', path: '/shop' },
    { icon: Building2, label: 'Mfg', path: '/contract-manufacturing' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Phone, label: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="lg:hidden fixed bottom-4 left-4 right-4 z-50 pb-safe"
    >
      {/* Professional Floating Nav */}
      <div className="bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-slate-200 px-3 py-4">
        <div className="flex justify-around items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path || 
                            (item.path === '/shop' && location.pathname.includes('/shop'));
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative flex flex-col items-center gap-1.5 px-2"
              >
                {/* Icon with Clean Animation */}
                <motion.div
                  className="relative"
                  whileTap={{ scale: 0.9 }}
                  animate={{
                    scale: isActive ? 1 : 0.95,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {/* Background for Active */}
                  {isActive && (
                    <motion.div
                      layoutId="activeBubble"
                      className="absolute -inset-2.5 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  
                  {/* Icon */}
                  <div className="relative z-10 p-2">
                    <Icon 
                      className={`w-5 h-5 transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400'
                      }`}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </div>
                </motion.div>

                {/* Label */}
                <motion.span
                  className={`text-[10px] font-semibold ${isActive ? 'text-slate-900' : 'text-slate-400'}`}
                  animate={{
                    opacity: isActive ? 1 : 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                </motion.span>

                {/* Active Indicator Line */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 w-1 h-1 bg-slate-900 rounded-full"
                    layoutId="activeDot"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}

