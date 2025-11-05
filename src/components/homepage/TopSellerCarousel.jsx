// src/components/homepage/TopSellerCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../motion/AnimatedSection';
import ProductCard from '../ecommerce/ProductCard';
import { content } from '../../content/data';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

export default function TopSellerCarousel() {
  const { topSellers } = content.homePage;
  const { products } = content.productData;

  const topSellerProducts = topSellers.map(id => ({
    id,
    ...products[id]
  }));

  return (
    <AnimatedSection className="bg-white">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 bg-primary/10 rounded-full mb-6"
        >
          <span className="text-sm font-medium text-primary">Best Sellers</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary mb-4"
        >
          Most Loved Products
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-text-light"
        >
          Trusted by thousands for their purity and effectiveness
        </motion.p>
      </div>

      <div className="relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            prevEl: '.swiper-prev',
            nextEl: '.swiper-next',
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {topSellerProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} productId={product.id} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-border hover:border-primary shadow-lg flex items-center justify-center text-primary transition-all">
          <ArrowLeft size={20} />
        </button>
        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white border border-border hover:border-primary shadow-lg flex items-center justify-center text-primary transition-all">
          <ArrowRight size={20} />
        </button>
      </div>
    </AnimatedSection>
  );
}
