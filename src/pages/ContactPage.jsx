// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import PageHero from '../components/global/PageHero';
import AnimatedSection from '../components/motion/AnimatedSection';
import { content } from '../content/data';

export default function ContactPage() {
  const { contactPage } = content;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <PageHero title={contactPage.hero.title} />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-6">
            {contactPage.intro.title}
          </h2>
          <p className="text-xl text-text-body/80 leading-relaxed">
            {contactPage.intro.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection className="bg-gradient-to-br from-background to-secondary/10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-text-body font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-body font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-body font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-body font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-text-body font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-accent text-white px-8 py-4 rounded-lg font-medium flex items-center justify-center space-x-2 hover:bg-accent/90 transition-colors"
              >
                <span>Send Message</span>
                <Send size={20} />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Email</h4>
                    <a href={`mailto:${contactPage.info.email}`} className="text-text-body/70 hover:text-accent transition-colors">
                      {contactPage.info.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Phone</h4>
                    <a href={`tel:${contactPage.info.phone}`} className="text-text-body/70 hover:text-accent transition-colors">
                      {contactPage.info.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Address</h4>
                    <p className="text-text-body/70">
                      {contactPage.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-1">Hours</h4>
                    <p className="text-text-body/70">
                      {contactPage.info.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 text-center">
              <MapPin className="text-accent mx-auto mb-4" size={48} />
              <h4 className="font-serif text-xl font-bold text-primary mb-2">
                Visit Our Facility
              </h4>
              <p className="text-text-body/70">
                We welcome visits to our GMP-certified facility. Please schedule an appointment.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}

