// src/pages/divisions/DivisionAboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Factory } from 'lucide-react';
import PageHero from '../../../components/global/PageHero';
import AnimatedSection from '../../../components/motion/AnimatedSection';

export default function DivisionAboutPage({ division }) {
  const { about } = division;

  return (
    <div>
      <PageHero title={about.title} subtitle={about.subtitle} />

      {/* Intro Section */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-text-body/80 leading-loose mb-6 px-4 md:px-6 lg:px-0 text-left">
            {about.intro}
          </p>
          <p className="text-lg text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
            {about.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { label: 'Specialized Divisions', value: `${division.specializations}+` },
            { label: 'Years of Excellence', value: division.yearsOfExcellence },
            { label: 'Formulations', value: division.formulations },
            { label: 'Business Clients Worldwide', value: division.businessClients }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm text-center"
            >
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-text-light">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Manufacturing Divisions */}
      <AnimatedSection className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Our Manufacturing Divisions
              </h2>
              <ul className="space-y-3 mb-6">
                {division.manufacturingDivisions.map((div, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-text-body text-lg">{div}</span>
                  </motion.li>
                ))}
              </ul>
              <p className="text-text-body/70 leading-loose px-4 md:px-6 text-left lg:px-0">
                {division.slug === 'ayur3p' 
                  ? 'All sections operate under independent quality monitoring and a unified supply chain, guaranteeing standardized quality and on-time delivery.'
                  : division.slug === 'feed3p'
                  ? 'All sections function under independent QA supervision and an integrated supply chain ensuring purity, consistency, and on-time dispatch.'
                  : 'All units are designed to maintain formula integrity, aesthetic consistency, and product stability.'}
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl">
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">
                Facility Overview Video
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-text-body mb-2">Concept:</p>
                  <p className="text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
                    Walkthrough of manufacturing area, mixing tanks, filling lines, and packaging.
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-text-body mb-2">Purpose:</p>
                  <p className="text-text-body/70 text-center">
                    Build trust & show scale and hygiene.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Vision & Mission */}
      <AnimatedSection className="bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="font-serif text-3xl font-bold text-primary mb-4">
              {about.vision.title}
            </h3>
            <p className="text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
              {about.vision.text}
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
              {about.mission.title}
            </h3>
            <ul className="space-y-3">
              {about.mission.points.map((point, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Core Values */}
      <AnimatedSection className="bg-white">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-4">
            Our Core Values
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {about.values.map((value, index) => (
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
              <p className="text-text-body/70 text-sm leading-loose px-4 md:px-6 lg:px-0 text-left">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Certifications */}
      <AnimatedSection className="bg-primary text-background">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Our Certifications & Compliance
          </h2>
          <p className="text-xl text-background/90 max-w-3xl mx-auto leading-loose px-4 md:px-6 lg:px-0 text-left">
            Our {division.name.toLowerCase()} manufacturing facility adheres to stringent quality and regulatory frameworks:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {about.certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
            >
              <Shield className="w-8 h-8 text-background mx-auto mb-3" />
              <p className="text-background/90 text-sm leading-loose px-4 md:px-6 lg:px-0 text-left">{cert}</p>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>

      {/* Journey */}
      <AnimatedSection className="bg-gradient-to-br from-background to-secondary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6 text-center">
            Our Journey
          </h2>
          <p className="text-lg text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
            {about.journey}
          </p>
        </div>
      </AnimatedSection>

      {/* CTAs */}
      <AnimatedSection className="bg-white">
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <Link
            to={`/${division.slug}`}
            className="bg-primary text-white px-8 py-4 rounded-full hover:bg-primary/90 transition-colors text-center font-semibold"
          >
            Our Story
          </Link>
          <Link
            to={`/${division.slug}/process`}
            className="px-8 py-4 rounded-full border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5 transition-colors text-center font-semibold"
          >
            4 Step Manufacturing Process
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}

