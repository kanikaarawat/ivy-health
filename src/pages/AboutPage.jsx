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

      {/* Timeline */}
      <AnimatedSection className="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Our Journey
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          {aboutPage.timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-8 mb-8"
            >
              <div className="flex-shrink-0 w-32">
                <span className="font-serif text-3xl font-bold text-accent">
                  {item.year}
                </span>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full" />
              <div className="flex-grow bg-background p-6 rounded-xl">
                <p className="text-text-body">{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}

