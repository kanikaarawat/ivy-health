// src/content/data.js
export const content = {
  global: {
    email: 'info@ivyherbals.com',
    phone: '+91 886 509 8678',
    address: 'Ivy Complex, Dehradun Road, Saharanpur, Uttar Pradesh, 247001',
    hours: 'Mon - Sat, 09:00 am - 06:00 pm',
    copyright: '© 2024 Ivy Herbals. All Rights Reserved.',
    certifications: ['ISO Certified', 'HACCP Certified', 'GMP Certified'],
    tagline: 'Ivy Herbals - Growing the Ivy Way'
  },

  sitemap: {
    mainNav: [
      { name: 'Shop', path: '/shop' },
      { name: 'About Us', path: '/about' },
      { name: 'Our Science', path: '/our-science' },
      { name: 'Contract Manufacturing', path: '/contract-manufacturing' },
      { name: 'Contact', path: '/contact' }
    ],
    footerProducts: [
      { name: 'Health Care', path: '/shop/health-care' },
      { name: 'Personal Care', path: '/shop/personal-care' },
      { name: 'Food Supplements', path: '/shop/food-supplements' },
      { name: 'Feed Supplements', path: '/shop/feed-supplements' }
    ],
    footerLinks: [
      { name: 'About Us', path: '/about' },
      { name: 'Our Science', path: '/our-science' },
      { name: 'Contact', path: '/contact' },
      { name: 'Privacy Policy', path: '/legal/privacy-policy' },
      { name: 'Terms & Conditions', path: '/legal/terms-and-conditions' },
      { name: 'Shipping Policy', path: '/legal/shipping-policy' },
      { name: 'Return & Refund Policy', path: '/legal/return-refund-policy' }
    ]
  },

  homePage: {
    hero: {
      title: 'Growing the Ivy Way',
      subtitle: 'Ayurveda Se Swasth Hai Swasth Se Sundarta',
      cta: 'Explore Products'
    },
    about: {
      title: 'About Ivy Herbals, 25+ Years in Ayurveda',
      description: "Ivy Herbals is a company that specializes in the manufacture and supply of various types of health care medicines, personal care products, food supplements, and feed supplements. The company was established in 2003 and is located on Dehradun Road in Saharanpur, Uttar Pradesh, India. The company is certified by ISO, HACCP, and GMP, which means that it adheres to the highest standards of quality and safety in its manufacturing processes. These certifications are recognized internationally and are a testament to the company's commitment to excellence.",
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop'
    },
    categories: [
      {
        title: 'Health Care',
        description: 'Our Ayurvedic Medicines are designed to promote overall health and prosperity.',
        offerings: ['Syrups', 'Powders', 'Oils'],
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop',
        path: '/shop/health-care'
      },
      {
        title: 'Feed Supplements',
        description: "Introducing our premium feed supplements - the perfect solution to keep your livestock, pets, and animals happy and healthy. We've developed specialized supplements for different animals, ensuring that your cattle, pets, and other animals receive the best care.",
        offerings: ['Powders', 'Liquids', 'Bolus'],
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop',
        path: '/shop/feed-supplements'
      },
      {
        title: 'Personal Care',
        description: 'Enter the realm of self-care with Ivy Herbals, where nature meets luxury and science supports beauty.',
        offerings: ['Face Care', 'Body Care', 'Hair Care'],
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800&h=800&fit=crop',
        path: '/shop/personal-care'
      }
    ],
    topSellers: ['rudransh', 'cholesto-free', 'expeller'],
    blogs: {
      title: 'Blogs, Your Pathway to Healing and Happiness.',
      posts: [
        {
          category: 'Diabetes',
          title: 'Managing Diabetes Naturally With A Healthy Lifestyle and Diet',
          snippet: 'According to reports, one in every six persons in the world with diabetes is from India, earning it the title of global diabetes capital. Diabetes occurs when your blood glucose, also known as blood sugar, is abnormally high.',
          image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&h=400&fit=crop',
          path: '/blog/managing-diabetes-naturally'
        },
        {
          category: 'Kidney Stones',
          title: 'Ayurvedic Herbs for Kidney Stone Relief: The Ancient Solution You Need',
          snippet: 'Pain on either side of the lower back or abdomen: This type of pain can be a symptom of various conditions, including kidney stones, urinary tract infections, or even a ruptured ovarian cyst. Pain on one side of the lower back or abdomen can indicate an issue with the kidney or the ureter on that side.',
          image: 'https://images.unsplash.com/photo-1571842908925-a39b72270e2b?w=600&h=400&fit=crop',
          path: '/blog/ayurvedic-herbs-kidney-stone'
        }
      ],
      morePosts: [
        { title: "Discover the Ayurvedic Approach to Women's Health", date: "April 12, 2023", path: "/blog/ayurvedic-approach-womens-health" },
        { title: "Understanding the Factors and the Role of Rudransh Ayurvedic Supplement", date: "April 06, 2023", path: "/blog/understanding-rudransh-supplement" }
      ]
    }
  },

  aboutPage: {
    hero: {
      title: 'About Ivy Herbals'
    },
    overview: {
      title: '25+ Years of Ayurvedic Excellence',
      body: "Ivy Herbals is a company that specializes in the manufacture and supply of various types of health care medicines, personal care products, food supplements, and feed supplements. The company was established in 2003 and is located on Dehradun Road in Saharanpur, Uttar Pradesh, India. The company is certified by ISO, HACCP, and GMP, adhering to the highest standards of quality and safety in its manufacturing processes. They believe that nature can heal and nourish, and are committed to bringing the best of Ayurveda to their customers.",
      tagline: 'Ayurveda Se Swasth Hai Swasth Se Sundarta',
      image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=1200&h=800&fit=crop'
    },
    vision: {
      title: 'Our Vision',
      body: "The company's concept encompasses the integrity of the ivy plant, which symbolizes growth as it continues to produce vines until it approaches the sunlight. We strive to achieve the pinnacle of success by making Ayurveda accessible to everyone. Much like ivy represents eternity, the major agenda we pursue is ongoing evolution for enhancing our products and services to win over customers and dwell in their hearts for eternity."
    },
    quality: {
      title: 'Quality Process',
      body: "Quality is paramount at Ivy Herbals. Our unique Ayurvedic ingredient blend offers a gentle way to remain healthy. We provide a wide selection of conventional well-being products handled and manufactured hygienically, utilizing the highest quality raw ingredients. Our objective is to deliver the finest of nature via our finest natural and caring products, free of toxins and hazardous chemicals."
    },
    resources: {
      title: 'Our Resources',
      body: "Ivy Herbals is managed by a well-organized group of knowledgeable individuals that work together with the primary goal of providing the highest quality products at the most reasonable pricing while maintaining a well-drafted infrastructure. Their knowledgeable team includes research scientists, veterinary consultants, cooperative labor, and innovative and accessible administration. Their facilities cover a large area, and the production operation is fully compliant with GMP norms."
    }
  },

  sciencePage: {
    hero: {
      title: 'Expert Team, Cutting-Edge Research'
    },
    team: {
      title: "Our R&D Team",
      body: "Our R&D team at Ivy Herbals is comprised of experienced and highly trained professionals with expertise in researching Ayurvedic herbs and natural ingredients. The team is dedicated to creating safe and effective products that meet the highest quality standards. Our research includes ongoing clinical trials to test our products' efficacy and identify potential side effects. In addition to traditional Ayurvedic herbs, Ivy Herbals is also exploring new and emerging natural ingredients from around the world to add to its product line."
    },
    process: [
      {
        title: 'Research',
        description: 'Our team researches traditional Ayurvedic formulations and modern scientific studies.',
        icon: 'leaf'
      },
      {
        title: 'Testing',
        description: 'Every batch undergoes rigorous quality testing in our state-of-the-art laboratories.',
        icon: 'flask'
      },
      {
        title: 'Formulation',
        description: 'Expert scientists create optimal formulations combining ancient wisdom with modern science.',
        icon: 'beaker'
      },
      {
        title: 'Validation',
        description: 'Clinical trials and quality checks ensure consistent effectiveness and safety.',
        icon: 'check-circle'
      }
    ]
  },

  contractPage: {
    hero: {
      title: '3rd Party Manufacturing for your Brand',
      subtitle: 'You Say, We Create!'
    },
    overview: {
      title: 'Your Reliable Contract Manufacturing Partner',
      body: "Ivy Herbals positions itself as a reliable 3rd Party Manufacturer for Health Care, Personal Care, Food Supplements, and Feed Supplements products. The service is designed to help small businesses build a name for themselves in the ayurvedic and wellness industry by allowing them to sell more items. Ivy Herbals is an ISO-certified and GMP-compliant third-party manufacturer offering a diverse selection of ayurvedic and herbal products. Our products are result-oriented and promote well-being by using 100% natural raw herbal components and extracts."
    },
    benefits: {
      title: 'Why Choose Ivy Herbals?',
      list: [
        'ISO, HACCP & GMP Certified Manufacturing',
        '20+ Years of Industry Expertise',
        'State-of-the-Art Production Facilities',
        'Quality Assurance at Every Step',
        'Competitive Pricing',
        'Flexible MOQ (Minimum Order Quantity)',
        'Complete Regulatory Support',
        'Custom Formulation Development'
      ]
    },
    process: {
      title: 'Our 4-Step Manufacturing Process',
      steps: [
        { number: '01', title: 'Consultation', description: 'Discuss your requirements, target market, and product specifications' },
        { number: '02', title: 'Formulation', description: 'Our R&D team develops or refines the product formula' },
        { number: '03', title: 'Manufacturing', description: 'GMP-certified production with strict quality controls' },
        { number: '04', title: 'Delivery', description: 'Quality-checked products delivered to your doorstep' }
      ]
    },
    categories: {
      title: 'What Ivy Herbals Does For You',
      list: [
        'Health Care Products (Syrups, Powders, Oils)',
        'Personal Care Products (Face Care, Body Care, Hair Care)',
        'Food Supplements (Protein Powders, Juices)',
        'Feed Supplements (Powders, Liquids, Bolus)',
        'Custom Product Development',
        'Private Labeling & Packaging',
        'Regulatory Compliance Support',
        'Quality Testing & Certification'
      ]
    },
    faqs: {
      title: 'Frequently Asked Questions',
      list: [
        {
          question: 'What is the Minimum Order Quantity (MOQ)?',
          answer: 'The minimum order quantity varies depending on the product category and type. For detailed MOQ information, please contact our team directly with your specific requirements.'
        },
        {
          question: 'How to View the Catalogue/Category?',
          answer: 'Clients can visit the website or view the brochure for the wide range of products. To choose the right category, they should consider their target market\'s specific needs and health concerns and consult with the Ivy Herbals team for guidance and recommendations.'
        },
        {
          question: 'How to Ask for a Quotation?',
          answer: 'Clients can contact Ivy Herbals directly through email or phone, specifying the required quantity, desired product specifications, and any private labelling requirements to receive an accurate and detailed quote.'
        }
      ]
    }
  },

  contactPage: {
    hero: {
      title: 'Contact Us',
      subtitle: 'Get Instant Solution to your queries'
    },
    formIntro: "We're happy to answer any questions and assist you in finding the best products for your needs. Don't hesitate to reach out to us."
  },

  legalPages: {
    'terms-and-conditions': {
      title: 'Terms and Conditions',
      lastUpdated: 'July 05, 2023',
      body: `Welcome to Ivy Herbals! These terms and conditions outline the rules and regulations for the use of Ivy Herbals's Website, located at ivyherbals.com.

By accessing this website we assume you accept these terms and conditions. Do not continue to use ivyherbals.com if you do not agree to take all of the terms and conditions stated on this page.

## License
Unless otherwise stated, Ivy Herbals and/or its licensors own the intellectual property rights for all material on ivyherbals.com. All intellectual property rights are reserved.

## User Comments
Certain parts of this website offer users the opportunity to post and exchange opinions and information. Ivy Herbals does not filter, edit, publish or review Comments prior to their presence on the website.

## Disclaimer
To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website.`
    },
    'privacy-policy': {
      title: 'Privacy Policy',
      lastUpdated: 'July 05, 2023',
      body: `At Ivy Herbals, accessible from ivyherbals.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Ivy Herbals and how we use it.

## Information We Collect
The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.

## How We Use Your Information
We use the information we collect in various ways, including to:
- Provide, operate, and maintain our website
- Improve, personalize, and expand our website
- Understand and analyze how you use our website
- Develop new products, services, features, and functionality
- Communicate with you for customer service and updates

## Log Files
Ivy Herbals follows a standard procedure of using log files. These files log visitors when they visit websites.

## Cookies and Web Beacons
Like any other website, Ivy Herbals uses 'cookies'. These cookies are used to store information including visitors' preferences.`
    },
    'shipping-policy': {
      title: 'Shipping & Delivery Policy',
      lastUpdated: 'July 05, 2023',
      body: `This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms.

## Shipping Methods
We offer various shipping methods to ensure your orders reach you safely and efficiently.

## Delivery Time
Delivery times vary based on your location and the shipping method selected. Standard delivery typically takes 5-7 business days within India.

## Shipping Charges
Shipping charges are calculated based on the weight of your order and your delivery location. Free shipping may be available for orders above a certain amount.

## Order Tracking
Once your order is shipped, you will receive a tracking number to monitor your shipment's progress.

## International Shipping
Currently, we primarily ship within India. For international orders, please contact us directly.`
    },
    'return-refund-policy': {
      title: 'Returns & Refunds Policy',
      lastUpdated: 'July 05, 2023',
      body: `Welcome to Ivy Herbals! You are entitled to cancel your order within 7 days without giving any reason for doing so.

## Returns
You have 7 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.

## Refunds
Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.

If your return is approved, we will initiate a refund to your original method of payment. You will receive the credit within a certain amount of days, depending on your card issuer's policies.

## Shipping Costs
You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable.

## Contact Us
If you have any questions about our Returns and Refunds Policy, please contact us at info@ivyherbals.com`
    }
  },

  productData: {
    categories: {
      'health-care': {
        name: 'Health Care',
        slug: 'health-care',
        description: "Our Ayurvedic Medicines are designed to promote overall health and prosperity.",
        shop_title: 'Embrace the wisdom of ancient healing.',
        shop_description: 'Showing 1–9 of 27 results',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&h=600&fit=crop'
      },
      'personal-care': {
        name: 'Personal Care',
        slug: 'personal-care',
        description: 'Enter the realm of self-care with Ivy Herbals, where nature meets luxury and science supports beauty.',
        shop_title: 'Unwind, Renew, and Radiate with Us.',
        shop_description: 'Natural beauty products for radiant skin and healthy hair',
        image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=1200&h=600&fit=crop',
        subcategories: [
          { name: 'Hair care', products: ['kesh-vardhak'] },
          { name: 'Face care', products: [] },
          { name: 'Body care', products: [] }
        ]
      },
      'food-supplements': {
        name: 'Food Supplements',
        slug: 'food-supplements',
        description: "We only utilize the best, purest components in our formulas at Ivy Herbals.",
        shop_title: 'Nourish your Body, from the Inside Out.',
        shop_description: 'Premium nutritional supplements for optimal health',
        image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=600&fit=crop',
        subcategories: [
          { name: 'Protein Powder', products: [] },
          { name: 'Juices', products: [] }
        ]
      },
      'feed-supplements': {
        name: 'Feed Supplements',
        slug: 'feed-supplements',
        description: 'Introducing our premium feed supplements - the perfect solution to keep your livestock, pets, and animals happy and healthy.',
        shop_title: 'Experience the Power of Balanced Nutrition.',
        shop_description: 'Showing 1–9 of 15 results',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1200&h=600&fit=crop',
        subcategories: ['Cattle', 'Poultry', 'Pets']
      }
    },

    products: {
      // Health Care Products
      'bratine': { 
        name: 'Bratine', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Ayurvedic syrup for holistic wellness and vitality.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop'
      },
      'dermiglo': { 
        name: 'Dermiglo', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Natural syrup for healthy, glowing skin from within.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'
      },
      'feromin': { 
        name: 'Feromin', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Iron-rich Ayurvedic formulation for energy and vitality.',
        image: 'https://images.unsplash.com/photo-1550572017-4a35f5b6e2e0?w=800&h=800&fit=crop'
      },
      'gastrex': { 
        name: 'Gastrex', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Digestive health support with natural Ayurvedic herbs.',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop'
      },
      'herbonidhi': { 
        name: 'Herbonidhi', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Comprehensive Ayurvedic wellness syrup.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop'
      },
      'i-liv': { 
        name: 'I-Liv', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Liver health support with powerful Ayurvedic herbs.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'
      },
      'kidnee': { 
        name: 'Kidnee', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Natural kidney health support formulation.',
        image: 'https://images.unsplash.com/photo-1550572017-4a35f5b6e2e0?w=800&h=800&fit=crop'
      },
      'movement': { 
        name: 'Movement', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Joint and mobility support for active living.',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop'
      },
      'robuston': { 
        name: 'Robuston', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Strength and vitality booster for overall wellness.',
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop'
      },
      'subacid': { 
        name: 'Subacid', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Acidity relief and digestive comfort formula.',
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'
      },
      'leucovy': { 
        name: 'Leucovy', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Women\'s health and wellness support.',
        image: 'https://images.unsplash.com/photo-1550572017-4a35f5b6e2e0?w=800&h=800&fit=crop'
      },
      'glycof': { 
        name: 'Glycof', 
        type: 'Syrup', 
        category: 'health-care',
        description: 'Blood sugar management support formula.',
        image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=800&fit=crop'
      },
      'rudransh': { 
        name: 'Rudransh', 
        type: 'Powder', 
        category: 'health-care',
        description: 'A powerful blend for vitality and wellness, supporting overall system health.',
        fullDescription: 'Rudransh is our flagship Ayurvedic formulation, combining potent herbs to support holistic wellness. This time-tested blend promotes vitality, stamina, and overall system health.',
        benefits: [
          'Supports overall vitality and energy',
          'Promotes healthy digestion',
          'Enhances natural immunity',
          'Supports stress management'
        ],
        ingredients: ['Ashwagandha', 'Shatavari', 'Guduchi', 'Amalaki', 'Haritaki'],
        usage: 'Take 1-2 teaspoons twice daily with warm water or milk, or as directed by a healthcare professional.',
        packaging: ['100g', '250g', '500g'],
        image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&h=800&fit=crop'
      },
      'cholesto-free': { 
        name: 'Cholesto Free', 
        type: 'Powder', 
        category: 'health-care',
        description: 'A natural formulation to help maintain healthy cholesterol levels.',
        fullDescription: 'Cholesto Free is a scientifically-validated Ayurvedic blend designed to support cardiovascular health and maintain healthy cholesterol levels naturally.',
        benefits: [
          'Supports healthy cholesterol levels',
          'Promotes cardiovascular health',
          'Aids in lipid metabolism',
          'Contains natural antioxidants'
        ],
        ingredients: ['Arjuna', 'Guggul', 'Triphala', 'Garlic extract'],
        usage: 'Take 1 teaspoon twice daily with warm water before meals.',
        packaging: ['100g', '200g'],
        image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&h=800&fit=crop'
      },
      'expeller': { 
        name: 'Expeller', 
        type: 'Powder', 
        category: 'health-care',
        description: 'A gentle, natural detox and cleansing powder for digestive health.',
        fullDescription: 'Expeller is a gentle yet effective Ayurvedic formulation designed to support natural detoxification and promote digestive health.',
        benefits: [
          'Supports natural detoxification',
          'Promotes healthy digestion',
          'Gentle and effective cleansing',
          'Supports regular bowel movements'
        ],
        ingredients: ['Triphala', 'Isabgol', 'Senna', 'Fennel'],
        usage: 'Take 1-2 teaspoons at bedtime with warm water.',
        packaging: ['100g', '200g'],
        image: 'https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?w=800&h=800&fit=crop'
      },
      'movement-oil': { 
        name: 'Movement Oil', 
        type: 'Oil', 
        category: 'health-care',
        description: 'Ayurvedic oil for joint and muscle relief.',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=800&fit=crop'
      },
      'kesh-vardhak': { 
        name: 'Kesh Vardhak', 
        type: 'Oil', 
        category: 'health-care',
        description: 'Traditional hair oil for strong, lustrous hair growth.',
        image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&h=800&fit=crop'
      },

      // Feed Supplements
      'bc-plex': {
        name: 'BC-Plex',
        type: 'Liquid',
        category: 'feed-supplements',
        description: 'BC-Plex is a liquid feed supplement from Ivy Herbals that offers complete and balanced nutrition for livestock and poultry. This highly potent formula is specifically designed to support healthy growth, improve egg production, and enhance the overall immunity of livestock. The unique combination of ingredients in the supplement helps improve feed efficiency, increase body weight, and promote health.',
        benefits: [
          'Enhances growth and production',
          'Improves feed efficiency',
          'Boosts immunity and overall health',
          'Supports healthy egg production'
        ],
        ingredients: ['Vitamin B-Complex', 'Choline Chloride', 'L-Lysine', 'Amino Acids'],
        usage: [
          'Poultry: 10-20 ml per 100 birds per day',
          'Cattle: 20-40 ml per head per day',
          'Mix with feed or drinking water'
        ],
        storage: 'Store at room temperature. Do not refrigerate or freeze. Protect from light and moisture.',
        packaging: ['120 ml', '500 ml', '1L'],
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'i-min-super-forte': { 
        name: 'I-Min Super Forte', 
        type: 'Powder', 
        category: 'feed-supplements',
        description: 'Complete mineral supplement for optimal animal health.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'livoboon-h': { 
        name: 'LivoBoon-H', 
        type: 'Liquid', 
        category: 'feed-supplements',
        description: 'Liver health support for livestock and poultry.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      },
      'microcal': { 
        name: 'Microcal', 
        type: 'Gel', 
        category: 'feed-supplements',
        description: 'Calcium supplement for strong bones and milk production.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'microcal-ad3-gold': { 
        name: 'Microcal AD3 Gold', 
        type: 'Liquid', 
        category: 'feed-supplements',
        description: 'Premium calcium with vitamins for enhanced animal health.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      },
      'neo-clean': { 
        name: 'Neo-Clean', 
        type: 'Liquid', 
        category: 'feed-supplements',
        description: 'Detoxification and cleansing support for animals.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'next-h': { 
        name: 'Next-H', 
        type: 'Liquid', 
        category: 'feed-supplements',
        description: 'Complete health supplement for livestock.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      },
      'glowmin': { 
        name: 'Glowmin', 
        type: 'Powder', 
        category: 'feed-supplements',
        description: 'Mineral and vitamin supplement for healthy animals.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'protec-y': { 
        name: 'Protec-Y', 
        type: 'Powder & Bolus', 
        category: 'feed-supplements',
        description: 'Protection and immunity support for livestock.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      },
      'milano': { 
        name: 'Milano', 
        type: 'Bolus', 
        category: 'feed-supplements',
        description: 'Comprehensive health bolus for cattle.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'e-fast': { 
        name: 'E-Fast', 
        type: 'Powder', 
        category: 'feed-supplements',
        description: 'Energy and performance supplement for animals.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      },
      'i-malt': { 
        name: 'I-Malt', 
        type: 'Powder', 
        category: 'feed-supplements',
        description: 'Malt-based nutrition supplement for animals.',
        image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=800&h=800&fit=crop'
      },
      'i-vit': { 
        name: 'I-Vit', 
        type: 'Liquid', 
        category: 'feed-supplements',
        description: 'Complete vitamin supplement for livestock health.',
        image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=800&h=800&fit=crop'
      }
    }
  }
};
