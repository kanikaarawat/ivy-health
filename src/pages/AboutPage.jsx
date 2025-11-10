// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/global/PageHero';
import AnimatedSection from '../components/motion/AnimatedSection';
import { content } from '../content/data';

export default function AboutPage() {
  const { aboutPage } = content;

  return (
    <div>
      <PageHero title={aboutPage.hero.title} />

      {/* Overview Section */}
      <AnimatedSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-primary mb-6">
              {aboutPage.overview.title}
            </h2>
            <p className="text-lg text-text-body/80 leading-relaxed mb-6">
              {aboutPage.overview.body}
            </p>
            <p className="text-2xl font-serif italic text-accent">
              {aboutPage.overview.tagline}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src={aboutPage.overview.image}
              alt="Ivy Herbals Philosophy"
              className="w-full h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              {aboutPage.vision.title}
            </h3>
            <p className="text-text-body/80 leading-relaxed">
              {aboutPage.vision.text}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              {aboutPage.mission.title}
            </h3>
            <p className="text-text-body/80 leading-relaxed">
              {aboutPage.mission.text}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Values */}
      <AnimatedSection className="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutPage.values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-serif text-2xl font-bold">
                  {value.title[0]}
                </span>
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-2">
                {value.title}
              </h3>
              <p className="text-text-body/70">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Quality Assurance */}
      <AnimatedSection className="bg-primary text-background">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">
            {aboutPage.quality.title}
          </h2>
          <p className="text-xl text-background/90 max-w-3xl mx-auto">
            {aboutPage.quality.description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutPage.quality.certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <h3 className="font-serif text-2xl font-bold mb-2">
                {cert.name}
              </h3>
              <p className="text-background/80">
                {cert.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Interactive Timeline */}
      <AnimatedSection className="bg-gradient-to-b from-white to-cream/30 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #2D5F3F 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="text-center mb-16 relative z-10">
          <motion.h2 
            className="font-serif text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Journey
          </motion.h2>
          <motion.p
            className="text-xl text-text-body/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            23+ Years of Excellence and Innovation
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20" />

          {aboutPage.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                delay: index * 0.1 
              }}
              className={`relative flex items-center gap-8 mb-16 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Year Badge */}
              <motion.div 
                className={`flex-shrink-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="inline-block bg-gradient-to-br from-accent to-primary text-white px-8 py-4 rounded-2xl shadow-2xl"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(212, 165, 116, 0.4)",
                    y: -5
                  }}
                >
                  <span className="font-serif text-4xl font-bold">{item.year}</span>
                </motion.div>
              </motion.div>

              {/* Center Dot */}
              <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                <motion.div 
                  className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(45, 95, 63, 0.4)",
                      "0 0 0 20px rgba(45, 95, 63, 0)",
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />
              </div>

              {/* Event Card */}
              <motion.div 
                className="flex-grow md:w-5/12 ml-16 md:ml-0"
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                }}
              >
                <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-primary/10 relative overflow-hidden group">
                  {/* Hover Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <p className="text-text-body leading-relaxed relative z-10 font-medium">
                    {item.event}
                  </p>

                  {/* Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-full" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

