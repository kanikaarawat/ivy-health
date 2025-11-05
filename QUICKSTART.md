# 🚀 Ivy Herbals - Quick Start Guide

## What's Been Created

A complete, production-ready luxury wellness website for Ivy Herbals with:

✅ **12 Complete Pages**:
- Homepage with 3D hero animation
- About Us
- Our Science
- Contract Manufacturing
- Contact
- Shop Landing
- 4 Category Pages
- Product Detail Pages
- Legal Pages (Privacy, T&C)
- 404 Page

✅ **26 Custom Components**:
- Global: Navbar, Footer, TrustBadges, PageHero
- Motion: AnimatedSection, AnimatedText
- Homepage: Hero, About, Categories, Carousel
- Ecommerce: ProductCard, ProductTabs, FAQs
- 3D: Hero3DScene, ProductViewer
- UI: Button

✅ **Premium Features**:
- Smooth Framer Motion animations
- Interactive 3D graphics with R3F
- Glassmorphism navigation
- Product carousel
- Responsive design
- Custom scrollbar

## 🎯 How to Run

### Option 1: Using the Background Server (Already Running)

The dev server should already be running. Open your browser to:
```
http://localhost:5173
```

### Option 2: Start Fresh

If you need to restart the server:

1. Stop any running servers (Ctrl+C in terminal)
2. Run:
```bash
npm run dev
```
3. Visit `http://localhost:5173`

## 📋 Testing Checklist

### Navigation
- [ ] Click through all main nav items
- [ ] Test the "Shop" mega menu dropdown
- [ ] Test mobile menu (resize browser)

### Homepage
- [ ] 3D beaded helix should rotate
- [ ] Scroll to see fade-in animations
- [ ] Click category cards
- [ ] Navigate carousel with arrows

### Shop
- [ ] Browse all 4 categories
- [ ] Click on products
- [ ] View product details
- [ ] Check 3D viewer on top sellers (Rudransh, Cholesto-Free, Expeller)

### Animations
- [ ] Smooth page transitions
- [ ] Hover effects on buttons and cards
- [ ] Tab switching on product pages
- [ ] Accordion opening on Contract Manufacturing

### Responsive
- [ ] Test on mobile size (< 768px)
- [ ] Test on tablet size (768px - 1024px)
- [ ] Test on desktop (> 1024px)

## 🎨 Customization Guide

### Change Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  'background': '#FBF9F6',
  'primary': '#1A3A32',
  'secondary': '#B4A78A',
  'accent': '#E57A4B',
  'text-body': '#212121',
}
```

### Add/Edit Content
Edit `src/content/data.js`:
```javascript
export const content = {
  // All site content is here
  global: { /* contact info */ },
  homePage: { /* homepage content */ },
  productData: { /* products */ },
  // etc.
}
```

### Add New Product
In `src/content/data.js`:
```javascript
productData: {
  products: {
    'your-product-id': {
      name: 'Product Name',
      type: 'Powder',
      category: 'health-care',
      description: 'Description',
      image: 'https://images.unsplash.com/...',
      // ... more fields
    }
  }
}
```

### Add to Top Sellers
In `src/content/data.js`:
```javascript
homePage: {
  topSellers: ['rudransh', 'cholesto-free', 'expeller', 'your-product-id']
}
```

## 🔧 Common Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install new package
npm install package-name
```

## 📱 View on Mobile

1. Find your local IP (run `ipconfig` in terminal)
2. In Vite output, use the "Network" URL
3. Access from mobile on same network

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F

# Then restart
npm run dev
```

### Images Not Loading
- Images use Unsplash URLs
- Require internet connection
- Can be replaced with local images

### Animations Not Smooth
- Close other browser tabs
- Disable browser extensions
- Ensure hardware acceleration is enabled

### Animations Choppy
- Disable browser extensions
- Close other tabs
- Check GPU acceleration is enabled

## 📖 Key File Locations

| What | Where |
|------|-------|
| All Content | `src/content/data.js` |
| Colors | `tailwind.config.js` |
| Routing | `src/App.jsx` |
| Homepage | `src/pages/HomePage.jsx` |
| Products | `src/content/data.js` → productData |
| Global Styles | `src/index.css` |

## 🎯 Next Steps

1. **Test Everything**: Go through the checklist above
2. **Customize Content**: Update `data.js` with real content
3. **Replace Images**: Add real product photos
4. **Add Backend**: Connect contact form to backend
5. **Deploy**: Build and deploy to hosting service

## 🌟 Pro Tips

- Use `AnimatedSection` wrapper for any new sections
- Keep all content in `data.js` for easy updates
- Product images should be ~800x800px for best results
- Test 3D scenes on different devices

## 📞 Need Help?

Check these files for reference:
- `README.md` - Full documentation
- `src/content/data.js` - Content structure
- Component files - Inline comments

---

**Enjoy your premium Ivy Herbals website! 🌿✨**

