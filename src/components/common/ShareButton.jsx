// src/components/common/ShareButton.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, Mail, Copy, Check } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ShareButton({ url, title, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = url || window.location.href;
  const shareTitle = title || 'Check out Ivy Herbals';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      color: 'bg-blue-600',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Twitter',
      icon: Twitter,
      color: 'bg-sky-500',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      color: 'bg-blue-700',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: 'Email',
      icon: Mail,
      color: 'bg-slate-600',
      url: `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`,
    },
  ];

  const handleShare = (link) => {
    window.open(link.url, '_blank', 'width=600,height=400');
  };

  // Native share API for mobile
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <button
        onClick={handleNativeShare}
        className={`flex items-center justify-center gap-2 ${className}`}
      >
        <Share2 className="w-5 h-5" />
        <span>Share</span>
      </button>

      {/* Custom Share Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            />
            
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl z-50 p-6"
            >
              <div className="w-12 h-1 bg-slate-300 rounded-full mx-auto mb-6" />
              
              <h3 className="text-xl font-bold text-slate-900 mb-6">Share this</h3>

              <div className="grid grid-cols-4 gap-4 mb-6">
                {shareLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleShare(link)}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className={`w-14 h-14 ${link.color} rounded-2xl flex items-center justify-center text-white shadow-lg active:scale-95 transition-transform`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs text-slate-600">{link.name}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleCopyLink}
                className="w-full flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-100 text-slate-900 font-semibold active:scale-95 transition-transform"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-green-600">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

