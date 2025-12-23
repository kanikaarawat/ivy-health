/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#FFFFFF', // Pure white
        'cream': '#FCFBF8',      // Soft cream for sections
        'primary': '#254B5A',    // Deep green
        'secondary': '#7F9A83',  // Soft green
        'text-body': '#333333',  // Dark gray
        'text-light': '#666666', // Light gray
        'border': '#E5E5E5',     // Light border
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif': ['Abril Fatface', 'serif'],
        'primary': ['Abril Fatface', 'serif'],
        'secondary': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3rem', { lineHeight: '1.1', fontWeight: '400' }],
        'h2': ['2.25rem', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['1.875rem', { lineHeight: '1.3', fontWeight: '400' }],
        'h4': ['1.5rem', { lineHeight: '1.4', fontWeight: '400' }],
        'h5': ['1.25rem', { lineHeight: '1.5', fontWeight: '400' }],
        'h6': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
      }
    }
  },
  plugins: [],
}

