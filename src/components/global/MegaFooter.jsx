// src/components/global/MegaFooter.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { useDivisionColor } from '../../hooks/useDivisionColor';

export default function MegaFooter() {
  const location = useLocation();
  const { primary } = useDivisionColor();
  const isFeed3p = location.pathname.startsWith('/feed3p');
  const isCosmo3p = location.pathname.startsWith('/cosmo3p');
  const isAyur3p = location.pathname.startsWith('/ayur3p');
  
  let website, email, websiteHref;
  if (isFeed3p) {
    website = 'www.ivyherbals.com/feed3p';
    email = 'feed3p@ivyherbals.com';
    websiteHref = 'https://www.ivyherbals.com/feed3p';
  } else if (isCosmo3p) {
    website = 'www.ivyherbals.com/cosmo3p';
    email = 'cosmo3p@ivyherbals.com';
    websiteHref = 'https://www.ivyherbals.com/cosmo3p';
  } else if (isAyur3p) {
    website = 'www.ivyherbals.com/ayur3p';
    email = 'ayur3p@ivyherbals.com';
    websiteHref = 'https://www.ivyherbals.com/ayur3p';
  } else {
    website = 'https://ivy-herbals.vercel.app/';
    email = 'info@ivyherbals.com';
    websiteHref = 'https://ivy-herbals.vercel.app/';
  }

  return (
    <footer className="text-white pb-20 lg:pb-7" style={{ backgroundColor: primary }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-7">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column: Logo and Heading */}
          <div className="space-y-5">
            <div>
              <img
                src={isCosmo3p ? "/cosmo3p b.png" : isAyur3p ? "/ayur3p b.png" : isFeed3p ? "/feed3p b.png" : "/logo.png"}
                alt="Ivy Herbals Logo"
                className="h-20 w-auto mb-7"
              />
            </div>
            <div>
              <h3 className="font-bold text-3xl md:text-4xl mb-3">Let's Collaborate</h3>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed">
                Your brand deserves the best beginning. Let's build it together.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Information - Left aligned */}
          <div className="space-y-15 md:flex md:flex-col md:items-start lg:pl-20">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Globe size={18} className="flex-shrink-0" />
                <span className="font-semibold text-sm">Website</span>
              </div>
              <a
                href={websiteHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors text-sm block"
              >
                {website}
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={18} className="flex-shrink-0" />
                <span className="font-semibold text-sm">E-mail</span>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-white/80 hover:text-white transition-colors text-sm block"
              >
                {email}
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <Phone size={18} className="flex-shrink-0" />
                <span className="font-semibold text-sm">Phone</span>
              </div>
              <a
                href="tel:+919286912529"
                className="text-white/80 hover:text-white transition-colors text-sm block"
              >
                +91 928 691 2529
              </a>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="flex-shrink-0" />
                <span className="font-semibold text-sm">HQ address</span>
              </div>
              <span className="text-white/80 text-sm block">
                Green Land Complex, Dehradun Road,<br />
                Saharanpur, Uttar Pradesh, 247001
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-7 pt-5 text-center">
          <p className="text-white/70 text-sm">
            © 2025 Ivy Herbals. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}