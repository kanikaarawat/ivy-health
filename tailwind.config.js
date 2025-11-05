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
        'sans': ['Manrope', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'], // An elegant, high-contrast serif
      }
    }
  },
  plugins: [],
}

