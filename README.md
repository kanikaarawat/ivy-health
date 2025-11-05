# 🌿 Ivy Herbals - Luxury Wellness Experience

A stunning, premium Ayurvedic wellness website built with React, Framer Motion, and React Three Fiber. This project showcases a modern, immersive web experience with fluid animations, beautiful 3D elements, and a sophisticated design system.

## ✨ Features

### Design & Aesthetics
- **Premium Organic Design System**: Warm, luxurious color palette with custom Tailwind configuration
- **Fluid Animations**: Framer Motion-powered scroll animations and micro-interactions
- **3D-Style Elements**: 
  - Animated floating orbs and helix pattern on homepage hero
  - Interactive product viewer with CSS 3D transforms and shadows
- **Glassmorphism UI**: Modern navigation with backdrop blur effects
- **Responsive Design**: Fully responsive across all device sizes

### Pages & Functionality
- **Homepage**: Hero with 3D scene, about section, category grid, and top seller carousel
- **About Page**: Company story, values, timeline, and quality certifications
- **Science Page**: Research process and laboratory highlights
- **Contract Manufacturing**: Services, capabilities, and FAQs
- **Contact Page**: Contact form and information
- **Shop**: 
  - Shop landing page with all categories
  - Category pages with filtered products
  - Product detail pages with 3D viewer for top sellers
  - Product tabs for detailed information
- **Legal Pages**: Privacy policy and terms & conditions

### Technical Highlights
- **Modular Architecture**: Clean component structure with reusable elements
- **Single Source of Truth**: All content managed in `src/content/data.js`
- **Animated Sections**: Every section uses scroll-triggered animations
- **Interactive Components**: 
  - Mega menu navigation
  - Product carousel with custom controls
  - Accordion FAQs
  - Product tabs
- **Custom Scrollbar**: Premium styled scrollbar matching brand colors

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository (if applicable) or navigate to the project directory:
```bash
cd "Ivy Herbals"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the local server URL (typically `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📦 Tech Stack

- **Framework**: React 18.3.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom configuration
- **Animations**: Framer Motion (scroll animations, 3D CSS transforms)
- **Routing**: React Router DOM
- **Carousel**: Swiper.js
- **Icons**: Lucide React
- **Fonts**: 
  - Manrope (Sans-serif)
  - Playfair Display (Serif)

## 🎨 Design System

### Colors
- **Background**: `#FCFBF8` - Soft cream
- **Primary**: `#254B5A` - Deep green
- **Secondary**: `#7F9A83` - Soft green
- **Accent**: `#9D5F1B` - Earthy rust
- **CTA**: `#D95F3B` - Bright terracotta
- **Text Body**: `#333333` - Dark gray

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Manrope (Sans-serif)

## 📁 Project Structure

```
src/
├── components/
│   ├── global/          # Navbar, Footer, Hero, TrustBadges
│   ├── motion/          # AnimatedSection, AnimatedText
│   ├── homepage/        # Hero, About, Categories, Carousel
│   ├── ecommerce/       # ProductCard, ProductTabs, FAQs
│   ├── 3d/             # 3D scenes and viewers
│   └── ui/             # Reusable UI components (Button)
├── pages/              # All page components
├── content/            # data.js - Single source of truth
├── App.jsx            # Main app with routing
├── main.jsx           # React entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Components

### AnimatedSection
Wrapper component that adds scroll-triggered fade-in-up animations to sections:
```jsx
<AnimatedSection>
  {/* Your content */}
</AnimatedSection>
```

### Button
Reusable button component with variants:
```jsx
<Button to="/path" variant="primary">Text</Button>
<Button to="/path" variant="secondary">Text</Button>
```

### ProductCard
Animated product card with hover effects:
```jsx
<ProductCard product={productData} productId="product-id" />
```

### Hero3DScene
Animated floating orbs and helix pattern using CSS and Framer Motion.

### R3FProductViewer
Beautiful product bottle with CSS 3D transforms and gradient effects.

## 🌐 Content Management

All site content is managed in `src/content/data.js`. This includes:
- Global information (contact, certifications)
- Navigation menus
- Page content for all pages
- Product data with images
- Legal content

To update content, simply edit the `data.js` file - no need to touch component files.

## 🎭 Animations

The site uses Framer Motion extensively:
- **Scroll Animations**: Via `AnimatedSection` component
- **Hover Effects**: On buttons, cards, and interactive elements
- **Page Transitions**: Smooth entrance animations
- **Micro-interactions**: Tab switching, accordion opening, etc.

## 🔧 Customization

### Changing Colors
Edit `tailwind.config.js` to update the color palette.

### Adding New Products
Add products to `src/content/data.js` in the `productData.products` object.

### Adding New Pages
1. Create page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Add content in `src/content/data.js`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🙏 Credits

- **Design Inspiration**: Awwwards-winning premium wellness sites
- **Images**: Unsplash (placeholder images)
- **Icons**: Lucide React

## 📄 License

This project is created for Ivy Herbals. All rights reserved.

---

**Built with ❤️ and ancient wisdom meets modern technology**

