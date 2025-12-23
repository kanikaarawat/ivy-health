// src/pages/divisions/DivisionHomePage.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Award, Users, Shield } from 'lucide-react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useDivisionColor } from '../../hooks/useDivisionColor';

export default function DivisionHomePage({ division }) {
  const { primary, secondary } = useDivisionColor();
  const { scrollY } = useScroll();
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const isFeed3p = division.slug === 'feed3p';
  const isCosmo3p = division.slug === 'cosmo3p';
  const isAyur3p = division.slug === 'ayur3p';

  const stats = isFeed3p || isCosmo3p || isAyur3p ? [
    { 
      icon: Award, 
      value: `${division.specializations}+`, 
      label: 'Specialized Divisions',
      detail: `${division.yearsOfExcellence} Years of Excellence`
    },
    { 
      icon: Users, 
      value: division.formulations, 
      label: 'Formulations',
      detail: `${division.businessClients} Business Clients Worldwide`
    }
  ] : [
    { 
      icon: Award, 
      value: division.yearsOfExcellence, 
      label: 'Years',
      detail: `${division.specializations}+ Specialized Divisions`
    },
    { 
      icon: Users, 
      value: division.businessClients, 
      label: 'Clients',
      detail: `${division.formulations} Formulations`
    }
  ];

  // Top SKU images for carousel (placeholder - you can replace with actual product images)
  const topSKUImages = [
    '/feedsupplements.png',
    '/healthcare.png',
    '/personalcare.png',
    '/feedsupplements.png'
  ];

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden" style={{ background: `linear-gradient(to bottom right, white, ${primary}0d, ${secondary}1a)` }}>
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-3xl"
          style={{ background: `linear-gradient(to bottom right, ${primary}33, ${secondary}33)` }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: `linear-gradient(to top right, ${secondary}33, ${primary}33)` }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-10"
            >
              {/* Small Tag */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ backgroundColor: `${primary}0d` }}
              >
                <Leaf className="w-4 h-4" style={{ color: primary }} />
                <span className="text-sm font-medium" style={{ color: primary }}>
                  {isFeed3p || isCosmo3p || isAyur3p ? division.products : 'Ayurvedic Wellness'}
                </span>
              </motion.div>

              {/* Main Heading */}
              <div className="space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-h1 sm:text-6xl lg:text-7xl font-primary leading-[1.1]"
                  style={{ color: primary }}
                >
                  {isFeed3p || isCosmo3p || isAyur3p ? 'Your Brand, Backed by Ivy.' : 'Growing the Ivy Way'}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl max-w-xl leading-relaxed"
                  style={{ color: '#29261d' }}
                >
                  {division.tagline}
                </motion.p>
              </div>

              {/* CTA Buttons - Following Gutenberg Principle: Primary on right, vertical on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col lg:flex-row gap-3 lg:gap-4"
              >
                {/* Secondary Action - Left/Top */}
                <Link
                  to={`/${division.slug}/science`}
                  className="px-6 py-4 lg:px-8 lg:py-4 rounded-xl lg:rounded-full border-2 transition-all inline-flex items-center justify-center font-medium text-sm lg:text-base hover:shadow-md"
                  style={{ borderColor: `${primary}33`, color: primary }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = primary;
                    e.currentTarget.style.backgroundColor = `${primary}0d`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = `${primary}33`;
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Our Science
                </Link>
                {/* Primary Action - Right/Bottom (end of reading gravity) */}
                <Link
                  to={`/${division.slug}/products`}
                  className="group text-white px-6 py-4 lg:px-8 lg:py-4 rounded-xl lg:rounded-full transition-all inline-flex items-center justify-center gap-2 font-semibold text-sm lg:text-base shadow-lg hover:shadow-xl"
                  style={{ backgroundColor: primary }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  <span>Explore Formulations</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats with Animated Counters */}
              <motion.div
                ref={ref}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex flex-row items-center gap-2 sm:gap-4 pt-4"
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="flex-1 flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm px-3 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl shadow-lg border"
                    style={{ borderColor: `${primary}1a` }}
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(45, 95, 63, 0.2)" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div 
                      className="w-10 h-10 sm:w-14 sm:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: `linear-gradient(to bottom right, ${primary}, ${primary}99)` }}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <stat.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div className="min-w-0">
                      <div className="text-xl sm:text-3xl font-bold" style={{ color: primary }}>
                        {inView && <CountUp end={parseInt(stat.value.replace('+', ''))} duration={2} />}+
                      </div>
                      <div className="text-xs sm:text-sm font-medium" style={{ color: '#29261d' }}>{stat.label}</div>
                      <div className="text-[10px] sm:text-xs mt-1" style={{ color: '#29261d' }}>{stat.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image with Parallax - Desktop Only */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y: y2 }}
              className="hidden lg:block lg:col-span-6 mt-8 lg:mt-0"
            >
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {isFeed3p || isCosmo3p || isAyur3p ? (
                  /* Carousel for Feed3p, Cosmo3p, and Ayur3p */
                  <motion.div 
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Swiper
                      modules={[Navigation, Autoplay]}
                      spaceBetween={0}
                      slidesPerView={1}
                      navigation={true}
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      className="w-full h-[400px] lg:h-[600px]"
                    >
                      {topSKUImages.map((image, index) => (
                        <SwiperSlide key={index}>
                          <img
                            src={image}
                            alt={`Top SKU ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to top, ${primary}33, transparent, transparent)` }} />
                  </motion.div>
                ) : (
                  /* Regular Image for other divisions */
                  <>
                    <motion.div 
                      className="relative rounded-3xl overflow-hidden shadow-2xl"
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 30px 60px rgba(0,0,0,0.3)"
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.img
                        src="/hero.png"
                        alt={division.name}
                        className="w-full h-[400px] lg:h-[600px] object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${primary}33, transparent, transparent)` }} />
                    </motion.div>

                    {/* Floating Badge 1 - Certified */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="absolute -bottom-4 -left-2 lg:-bottom-6 lg:-left-6 bg-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-6 max-w-[140px] lg:max-w-xs border-2"
                      style={{ borderColor: `${primary}1a` }}
                    >
                      <div className="flex items-center gap-2 lg:gap-4">
                        <motion.div 
                          className="w-10 h-10 lg:w-14 lg:h-14 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `linear-gradient(to bottom right, ${primary}33, ${secondary}33)` }}
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        >
                          <Leaf className="w-5 h-5 lg:w-7 lg:h-7" style={{ color: primary }} />
                        </motion.div>
                        <div>
                          <div className="text-[10px] lg:text-xs uppercase tracking-wide" style={{ color: '#29261d' }}>Certified</div>
                          <div className="text-sm lg:text-xl font-bold whitespace-nowrap" style={{ color: primary }}>100% Pure</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Floating Badge 2 - AYUSH */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 }}
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="absolute -top-4 -right-2 lg:-top-6 lg:-right-6 bg-gradient-to-br from-accent to-accent/80 text-white rounded-xl lg:rounded-2xl shadow-2xl p-3 lg:p-5 border-2 border-white/20"
                    >
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="text-center"
                      >
                        <Shield className="w-6 h-6 lg:w-8 lg:h-8 mb-1 lg:mb-2 mx-auto" />
                        <div className="text-[10px] lg:text-xs uppercase tracking-wide">AYUSH</div>
                        <div className="text-sm lg:text-lg font-bold whitespace-nowrap">Certified</div>
                      </motion.div>
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

