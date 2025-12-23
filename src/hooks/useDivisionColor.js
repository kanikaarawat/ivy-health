// src/hooks/useDivisionColor.js
import { useLocation } from 'react-router-dom';

// Helper function to lighten a hex color
function lightenColor(hex, percent) {
  const num = parseInt(hex.replace('#', ''), 16);
  const r = Math.min(255, (num >> 16) + Math.round((255 - (num >> 16)) * percent / 100));
  const g = Math.min(255, ((num >> 8) & 0x00FF) + Math.round((255 - ((num >> 8) & 0x00FF)) * percent / 100));
  const b = Math.min(255, (num & 0x0000FF) + Math.round((255 - (num & 0x0000FF)) * percent / 100));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}

export function useDivisionColor() {
  const location = useLocation();
  const pathname = location.pathname;

  if (pathname.startsWith('/feed3p')) {
    const primary = '#1a2d57';
    const secondary = lightenColor(primary, 40); // Lighter version
    return {
      primary,
      secondary,
      primaryClass: 'text-[#1a2d57]',
      bgPrimaryClass: 'bg-[#1a2d57]',
      borderPrimaryClass: 'border-[#1a2d57]',
      bgPrimaryOpacity: (opacity) => `bg-[#1a2d57]/${opacity}`,
      textPrimaryClass: 'text-[#1a2d57]',
      bgSecondaryClass: `bg-[${secondary}]`,
      textSecondaryClass: `text-[${secondary}]`,
    };
  } else if (pathname.startsWith('/cosmo3p')) {
    const primary = '#3c1e3a';
    const secondary = lightenColor(primary, 40); // Lighter version
    return {
      primary,
      secondary,
      primaryClass: 'text-[#3c1e3a]',
      bgPrimaryClass: 'bg-[#3c1e3a]',
      borderPrimaryClass: 'border-[#3c1e3a]',
      bgPrimaryOpacity: (opacity) => `bg-[#3c1e3a]/${opacity}`,
      textPrimaryClass: 'text-[#3c1e3a]',
      bgSecondaryClass: `bg-[${secondary}]`,
      textSecondaryClass: `text-[${secondary}]`,
    };
  } else if (pathname.startsWith('/ayur3p')) {
    const primary = '#254336';
    const secondary = lightenColor(primary, 40); // Lighter version
    return {
      primary,
      secondary,
      primaryClass: 'text-[#254336]',
      bgPrimaryClass: 'bg-[#254336]',
      borderPrimaryClass: 'border-[#254336]',
      bgPrimaryOpacity: (opacity) => `bg-[#254336]/${opacity}`,
      textPrimaryClass: 'text-[#254336]',
      bgSecondaryClass: `bg-[${secondary}]`,
      textSecondaryClass: `text-[${secondary}]`,
    };
  } else {
    // Default colors
    const primary = '#254B5A';
    const secondary = lightenColor(primary, 40);
    return {
      primary,
      secondary,
      primaryClass: 'text-primary',
      bgPrimaryClass: 'bg-primary',
      borderPrimaryClass: 'border-primary',
      bgPrimaryOpacity: (opacity) => `bg-primary/${opacity}`,
      textPrimaryClass: 'text-primary',
      bgSecondaryClass: `bg-[${secondary}]`,
      textSecondaryClass: `text-[${secondary}]`,
    };
  }
}

