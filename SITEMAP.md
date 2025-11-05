# 🗺️ Ivy Herbals - Site Map

## Navigation Structure

```
Ivy Herbals
│
├── 🏠 Home (/)
│   ├── Hero with 3D Scene
│   ├── Trust Badge Bar
│   ├── About Section
│   ├── Category Grid
│   └── Top Seller Carousel
│
├── 📖 About Us (/about)
│   ├── Philosophy & Overview
│   ├── Vision & Mission
│   ├── Core Values
│   ├── Quality Assurance
│   └── Company Timeline
│
├── 🔬 Our Science (/our-science)
│   ├── Research Approach
│   ├── 4-Step Process
│   └── Laboratory Highlights
│
├── 🏭 Contract Manufacturing (/contract-manufacturing)
│   ├── Services Overview
│   ├── Capabilities
│   └── FAQs
│
├── 📧 Contact (/contact)
│   ├── Contact Form
│   └── Contact Information
│
└── 🛍️ Shop (/shop)
    ├── Shop Landing Page
    │   └── All Categories Overview
    │
    ├── Health Care (/shop/health-care)
    │   ├── Rudransh (3D Viewer) ⭐
    │   ├── Cholesto Free (3D Viewer) ⭐
    │   ├── Expeller (3D Viewer) ⭐
    │   ├── Immunity Boost
    │   ├── Digest Plus
    │   └── Stress Relief
    │
    ├── Personal Care (/shop/personal-care)
    │   ├── Herbal Face Wash
    │   ├── Radiant Skin Serum
    │   ├── Ayurvedic Hair Oil
    │   └── Herbal Body Lotion
    │
    ├── Food Supplements (/shop/food-supplements)
    │   ├── Plant Protein Powder
    │   └── Omega Complex
    │
    └── Feed Supplements (/shop/feed-supplements)
        ├── BC-Plex (Detailed)
        ├── Calcium Plus
        ├── Growth Promoter
        └── Liver Tonic
```

## Footer Links

### Products Column
- Health Care
- Personal Care
- Food Supplements
- Feed Supplements

### Quick Links Column
- About Us
- Our Science
- Contact
- Privacy Policy (/legal/privacy-policy)
- Terms & Conditions (/legal/terms-and-conditions)

### Contact Column
- Email: info@ivyherbals.com
- Phone: +91 886 509 8678
- Address: Ivy Complex, Dehradun Road, Saharanpur
- Hours: Mon - Sat, 09:00 am - 06:00 pm

## Special Features by Page

### Home
- ✨ 3D Beaded Helix Animation
- 🎯 Scroll-triggered Animations
- 🎠 Product Carousel
- 📜 Trust Badges

### Product Pages
- 🎨 3D Product Viewer (Top Sellers)
- 📑 Tabbed Information
- 📦 Size Options
- 🔗 Related Navigation

### Contract Manufacturing
- 📋 Service Cards
- ❓ FAQ Accordion
- 💼 Capabilities Showcase

### All Pages
- 🎬 Smooth Page Transitions
- 📱 Responsive Design
- 🖱️ Hover Animations
- 🎭 Micro-interactions

## Route Patterns

| Pattern | Example | Component |
|---------|---------|-----------|
| `/` | Homepage | HomePage |
| `/about` | About | AboutPage |
| `/shop` | Shop Landing | ShopLandingPage |
| `/shop/:category` | `/shop/health-care` | CategoryPage |
| `/product/:id` | `/product/rudransh` | ProductDetailPage |
| `/legal/:page` | `/legal/privacy-policy` | LegalPage |
| `*` | Any invalid | NotFoundPage |

## Content Sources

All content is centrally managed in:
```
src/content/data.js
```

Structure:
```javascript
{
  global,           // Site-wide info
  sitemap,          // Navigation structure
  homePage,         // Homepage content
  aboutPage,        // About content
  sciencePage,      // Science content
  contractPage,     // Contract manufacturing
  contactPage,      // Contact content
  legalPages,       // Legal documents
  productData       // All products & categories
}
```

## Component Hierarchy

```
App
├── Navbar (sticky)
│   └── MegaMenu (hover on Shop)
│
├── Routes
│   └── [Current Page Component]
│       └── PageHero (inner pages)
│       └── AnimatedSection (all sections)
│           └── [Section Content]
│
└── MegaFooter
    ├── Brand Info
    ├── Products Links
    ├── Quick Links
    └── Contact Info
```

## Animation Layers

1. **Page Load**: Initial fade-in
2. **Scroll**: Section fade-in-up
3. **Hover**: Card lift, button scale
4. **Click**: Tab switch, accordion
5. **Continuous**: 3D scene rotation

## Key User Flows

### Browse & Explore Products
Home → Categories → Category Page → Product Detail

### Learn About Company
Home → About → Science → Quality Assurance

### Business Inquiry
Home → Contract Manufacturing → FAQs → Contact

### Quick Product Access
Home → Top Seller Carousel → Product Detail (with 3D)

---

**Total Pages**: 12+ (dynamic product pages)
**Total Components**: 26
**Total Products**: 16
**Categories**: 4

