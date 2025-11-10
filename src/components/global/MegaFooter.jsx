// src/components/global/MegaFooter.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { content } from '../../content/data';

export default function MegaFooter() {
  const { global, sitemap } = content;

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-4">
              <img 
                src="/logo.png" 
                alt="Ivy Herbals Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4 text-sm leading-relaxed">
              {global.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {global.certifications.map((cert) => (
                <span
                  key={cert}
                  className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="font-bold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {sitemap.footerProducts.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight size={14} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {sitemap.footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2"
                  >
                    <ArrowRight size={14} />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a href={`mailto:${global.email}`} className="text-white/80 hover:text-white transition-colors text-sm">
                  {global.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a href={`tel:${global.phone}`} className="text-white/80 hover:text-white transition-colors text-sm">
                  {global.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{global.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-white/80 text-sm">{global.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-white/70 text-sm">
            {global.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
