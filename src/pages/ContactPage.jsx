// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import PageHero from '../components/global/PageHero';
import AnimatedSection from '../components/motion/AnimatedSection';
import { content } from '../content/data';
import { useDivisionColor } from '../hooks/useDivisionColor';
import DivisionMobileTabs from '../components/mobile/DivisionMobileTabs';

export default function ContactPage() {
  const { contactPage } = content;
  const { primary, secondary } = useDivisionColor();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'phone':
        return value && !/^\+?[\d\s-()]{10,}$/.test(value) ? 'Invalid phone number' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setSubmitSuccess(false);
      setTouched({});
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true
    });
    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  return (
    <div className="pb-20 lg:pb-0">
      <PageHero title={contactPage.hero.title} />

      {/* Intro */}
      <AnimatedSection className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-h2 font-primary mb-6 text-center" style={{ color: primary }}>
            {contactPage.intro.title}
          </h2>
          <p className="text-xl text-text-body/80 leading-loose px-4 md:px-6 lg:px-0 text-left">
            {contactPage.intro.body}
          </p>
        </div>
      </AnimatedSection>

      {/* Contact Form & Info */}
      <AnimatedSection
        className=""
        style={{ background: `linear-gradient(to bottom right, #FCFBF8, ${primary}0d, ${secondary}14)` }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-h3 font-primary mb-6" style={{ color: primary }}>
              Send us a Message
            </h3>
            {/* Success Message */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="bg-green-50 border-2 border-green-500 rounded-2xl p-6 flex items-center gap-4"
                >
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <h4 className="font-bold text-green-700">Success!</h4>
                    <p className="text-sm text-green-600">Your message has been sent successfully.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-text-body font-semibold mb-2 flex items-center gap-2">
                  Full Name *
                  {touched.name && !errors.name && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                  )}
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.name && touched.name
                        ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                        : touched.name && !errors.name
                        ? 'border-green-400 bg-green-50/50 focus:border-green-500'
                        : 'border-secondary/30'
                    } focus:outline-none focus:ring-2`}
                    style={
                      errors.name && touched.name
                        ? {}
                        : touched.name && !errors.name
                        ? {}
                        : { borderColor: '#CBD5CE' }
                    }
                    placeholder="Enter your full name"
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.name && touched.name && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-text-body font-semibold mb-2 flex items-center gap-2">
                  Email Address *
                  {touched.email && !errors.email && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                  )}
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.email && touched.email
                        ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                        : touched.email && !errors.email
                        ? 'border-green-400 bg-green-50/50 focus:border-green-500'
                        : 'border-secondary/30'
                    } focus:outline-none focus:ring-2`}
                    style={
                      errors.email && touched.email
                        ? {}
                        : touched.email && !errors.email
                        ? {}
                        : { borderColor: '#CBD5CE' }
                    }
                    placeholder="your.email@example.com"
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.email && touched.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Phone Field */}
              <div>
                <label className="block text-text-body font-semibold mb-2 flex items-center gap-2">
                  Phone Number
                  {touched.phone && !errors.phone && formData.phone && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </motion.div>
                  )}
                </label>
                <motion.div
                  whileFocus={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-5 py-4 rounded-xl border-2 transition-all duration-300 ${
                      errors.phone && touched.phone
                        ? 'border-red-400 bg-red-50/50 focus:border-red-500'
                        : touched.phone && !errors.phone
                        ? 'border-green-400 bg-green-50/50 focus:border-green-500'
                        : 'border-secondary/30'
                    } focus:outline-none focus:ring-2`}
                    style={
                      errors.phone && touched.phone
                        ? {}
                        : touched.phone && !errors.phone
                        ? {}
                        : { borderColor: '#CBD5CE' }
                    }
                    placeholder="+91 XXX XXX XXXX"
                  />
                </motion.div>
                <AnimatePresence>
                  {errors.phone && touched.phone && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-red-500 text-sm mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      {errors.phone}
                    </motion.p>
                  )}
                </AnimatePresence>
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
                  className="w-full px-4 py-3 rounded-lg border focus:outline-none transition-colors"
                  style={{ 
                    borderColor: '#CBD5CE'
                  }}
                  onFocus={(e) => e.target.style.borderColor = primary}
                  onBlur={(e) => e.target.style.borderColor = '#CBD5CE'}
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
                  rows={3}
                  className="w-full px-4 py-3 rounded-lg border border-secondary/30 focus:outline-none transition-colors resize-none"
                  style={{ 
                    borderColor: '#CBD5CE',
                    focusBorderColor: primary 
                  }}
                  onFocus={(e) => e.target.style.borderColor = primary}
                  onBlur={(e) => e.target.style.borderColor = '#CBD5CE'}
                />
              </div>

              {/* Enhanced Submit Button */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                type="submit"
                disabled={isSubmitting || submitSuccess}
                className={`w-full px-8 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 overflow-hidden relative group ${
                  isSubmitting || submitSuccess
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'text-white shadow-xl hover:shadow-2xl'
                }`}
                style={
                  isSubmitting || submitSuccess
                    ? {}
                    : { 
                        backgroundColor: primary,
                        background: `linear-gradient(to right, ${primary}, ${secondary})`
                      }
                }
              >
                {/* Animated Background */}
                {!isSubmitting && !submitSuccess && (
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                )}

                {/* Loading Spinner */}
                <AnimatePresence>
                  {isSubmitting && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                    >
                      <motion.div
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Success Icon */}
                <AnimatePresence>
                  {submitSuccess && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                    >
                      <CheckCircle className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Button Text */}
                <span className="relative z-10 text-lg">
                  {isSubmitting ? 'Sending...' : submitSuccess ? 'Sent Successfully!' : 'Send Message'}
                </span>
                
                {!isSubmitting && !submitSuccess && (
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Send size={22} className="relative z-10" />
                  </motion.div>
                )}
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
              <h3 className="text-h3 font-primary mb-6" style={{ color: primary }}>
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{ color: primary }}>Email</h4>
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
                    <h4 className="font-medium mb-1" style={{ color: primary }}>Phone</h4>
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
                    <h4 className="font-medium mb-1" style={{ color: primary }}>Address</h4>
                    <p className="text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
                      {contactPage.info.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{ color: primary }}>Hours</h4>
                    <p className="text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
                      {contactPage.info.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div
              className="rounded-2xl p-8 text-center"
              style={{ background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)` }}
            >
              <MapPin className="text-accent mx-auto mb-4" size={48} />
              <h4 className="text-h3 font-primary mb-2" style={{ color: primary }}>
                Visit Our Facility
              </h4>
              <p className="text-text-body/70 leading-loose px-4 md:px-6 lg:px-0 text-left">
                We welcome visits to our GMP-certified facility. Please schedule an appointment.
              </p>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Division-Specific Contacts */}
      <AnimatedSection className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-h2 font-primary mb-4 text-center" style={{ color: primary }}>
            Division-Specific Contacts
          </h2>
          <p className="text-xl text-text-body/80 mb-12 leading-loose px-4 md:px-6 lg:px-0 text-left">
            For inquiries about specific product divisions, reach out directly to our specialized teams
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactPage.divisionContacts.map((division, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border"
                style={{
                  background: `linear-gradient(to bottom right, ${primary}0d, ${secondary}0d)`,
                  borderColor: `${primary}1a`
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${primary}0d` }}
                >
                  <Mail style={{ color: primary }} size={32} />
                </div>
                <h3 className="font-bold text-xl mb-3 font-primary" style={{ color: primary }}>
                  {division.name}
                </h3>
                <a 
                  href={`mailto:${division.email}`}
                  className="text-accent hover:text-accent/80 transition-colors font-medium"
                >
                  {division.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Division Mobile Bottom Tabs (for /ayur3p/contact, /cosmo3p/contact, /feed3p/contact) */}
      <DivisionMobileTabs />
    </div>
  );
}

