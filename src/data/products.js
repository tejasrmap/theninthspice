export const productsData = [
  {
    id: "red-chilli-powder",
    name: "THE NINTH SPICE™ Red Chilli Powder",
    image: "/red-chilli-powder.jpg",
    tagline: "Vibrant Crimson, Balanced Pungency & Lingering Warmth",
    shortDesc: "Crafted from selected whole sun-dried chillies from Andhra Pradesh. Slow cold-milled at low RPM to protect essential capsaicin oils and vibrant natural colour.",
    badge: "Bestseller • Zero Dyes",
    category: "Essential Spices",
    rating: 4.9,
    reviewsCount: 142,
    origin: "Guntur & Warangal, Andhra Pradesh",
    harvestYear: "2026 Batch #042",
    millingType: "Low RPM Cold Milling (< 32°C)",
    heatLevel: 7, // out of 10
    aromaLevel: 8, // out of 10
    color: "#C23321",
    accentBg: "bg-red-50",
    borderAccent: "border-red-200",
    variants: [
      { size: "150g", price: 139, label: "Pouch Pack" },
      { size: "250g", price: 229, label: "Kitchen Jar Pack" },
      { size: "500g", price: 429, label: "Family Pantry Pack" }
    ],
    features: [
      "No artificial Sudan red dyes or synthetic food colorings",
      "Processed without stalks to ensure smooth, non-gritty texture",
      "Low thermal friction preserves high natural capsaicin oil content",
      "Tested for aflatoxins and heavy metals"
    ],
    tastingNotes: "Sun-ripened dry earthiness, rounded smoke, clean spicy burst without acidic harshness.",
    culinaryUses: ["Andhra Kodi Kura (Chicken Curry)", "Guntur Mirchi Bajji Dip", "Rogan Josh & Nihari", "Daily Dal & Rasam Tadka"],
    nutrition: {
      servingSize: "5g",
      calories: "14 kcal",
      carbs: "2.5g",
      protein: "0.6g",
      fat: "0.7g"
    }
  },
  {
    id: "turmeric-powder",
    name: "THE NINTH SPICE™ Turmeric Powder",
    image: "/turmeric-powder.jpg",
    tagline: "Deep Golden Curcumin, Warm Woody Aroma & Potent Purity",
    shortDesc: "High-curcumin finger turmeric harvested from nutrient-rich soil. Milled at low RPM to ensure the essential curcuminoids and volatile aromatic turmerone oils remain intact.",
    badge: "High Curcumin • Single Origin",
    category: "Essential Spices",
    rating: 4.95,
    reviewsCount: 189,
    origin: "Nizamabad & Duggirala, Andhra Pradesh",
    harvestYear: "2026 Batch #078",
    millingType: "Low RPM Cold Milling (< 30°C)",
    heatLevel: 2, // out of 10
    aromaLevel: 9, // out of 10
    color: "#D98200",
    accentBg: "bg-amber-50",
    borderAccent: "border-amber-200",
    variants: [
      { size: "150g", price: 139, label: "Pouch Pack" },
      { size: "250g", price: 229, label: "Kitchen Jar Pack" },
      { size: "500g", price: 429, label: "Family Pantry Pack" }
    ],
    features: [
      "Natural curcumin percentage > 4.5% (lab-certified)",
      "Zero lead chromate or starch adulterants used for fake luster",
      "Ground gently without water steam or high temperatures",
      "Multi-barrier UV & moisture proof pouch"
    ],
    tastingNotes: "Warm ginger undertones, fresh floral musk, deeply earthy and aromatic.",
    culinaryUses: ["Ayurvedic Golden Latte (Haldi Doodh)", "Traditional Sambar & Dal Tadka", "Hyderabadi Biryani Marinade", "Pickles & Chutneys"],
    nutrition: {
      servingSize: "5g",
      calories: "16 kcal",
      carbs: "3.2g",
      protein: "0.4g",
      fat: "0.5g"
    }
  }
];

export const upcomingSpices = [
  { name: "Coriander Powder (Dhania)", desc: "Whole roasted seeds cold-milled for citrusy aroma", tag: "Coming Next" },
  { name: "Cumin Powder (Jeera)", desc: "Earthy, robust Gujarat cumin with rich volatile thymol", tag: "In Milling" },
  { name: "Signature Garam Masala", desc: "Craft blend of 14 heritage whole spices", tag: "Artisan Blend" },
  { name: "Malabar Black Pepper", desc: "Bold tellicherry berries coarsely cracked for intense heat", tag: "Coming Soon" }
];

export const recipes = [
  {
    title: "Andhra Guntur Kodi Vepudu (Spicy Chicken Fry)",
    time: "35 mins",
    difficulty: "Medium",
    spicesUsed: ["THE NINTH SPICE™ Red Chilli Powder", "THE NINTH SPICE™ Turmeric Powder"],
    desc: "A legendary Andhra coastal preparation where the slow-milled chilli powder blooms in curry leaves and hot oil for deep mahogany color without burning.",
    tag: "Andhra Specialty"
  },
  {
    title: "Heritage Golden Haldi Latte",
    time: "10 mins",
    difficulty: "Easy",
    spicesUsed: ["THE NINTH SPICE™ Turmeric Powder"],
    desc: "Simmered whole milk or almond milk, cold-pressed coconut oil, fresh crushed ginger, and 1 tsp of high-curcumin turmeric for cellular rejuvenation.",
    tag: "Ayurvedic Wellness"
  },
  {
    title: "Authentic Guntur Tomato Pappu (Dal)",
    time: "25 mins",
    difficulty: "Easy",
    spicesUsed: ["THE NINTH SPICE™ Red Chilli Powder", "THE NINTH SPICE™ Turmeric Powder"],
    desc: "Toor dal cooked with ripe country tomatoes, tempered in ghee with mustard, cumin, garlic, and slow-milled spices.",
    tag: "Comfort Food"
  }
];

export const faqsList = [
  {
    q: "What makes THE NINTH SPICE™ different from ordinary market brands?",
    a: "Most commercial spice brands prioritize high-volume production using high-speed industrial hammer mills (3,000+ RPM). This generates friction heat in excess of 70°C–85°C, effectively vaporizing the essential volatile aroma oils and scorching nutrients. At THE NINTH SPICE™, we practice Low RPM Cold Milling (< 32°C), keeping every batch cool, rich in natural oils, fragrant, and vibrant without synthetic dyes or additives."
  },
  {
    q: "How should I store these spice powders for maximum freshness?",
    a: "Our multi-layer hermetic pouches protect the spices from oxygen, humidity, and UV light degradation. Once opened, we recommend keeping them in a cool, dry, and dark pantry cupboard, or transferring them to an airtight amber/tinted glass jar. Avoid scooping with a wet spoon."
  },
  {
    q: "What is the shelf life of THE NINTH SPICE™ products?",
    a: "Because our spices retain their natural protective essential oils and are packaged with high-barrier seals, they remain intensely fresh for 12 months from the date of milling. The aroma and flavor will remain significantly stronger than standard grocery store spices."
  },
  {
    q: "Are your spice powders free from artificial colors, preservatives, and fillers?",
    a: "100% Yes. We have a zero-tolerance policy for adulterants such as Sudan dyes, lead chromate, chalk, starch, or spent spice waste. What you receive is pure, single-origin whole spices, cold-milled and packed immediately."
  },
  {
    q: "Do you deliver across all PIN codes in India?",
    a: "Yes! We ship across India through reputed express logistics partners. Orders above ₹599 qualify for FREE standard shipping. Real-time tracking links are provided via email and SMS as soon as your dispatch leaves our facility in Visakhapatnam."
  },
  {
    q: "What is your return or replacement policy if I receive a damaged packet?",
    a: "We pack each shipment with care. However, if your package arrives damaged, tampered with, or defective in transit, simply contact our customer care at support@theninthspice.com or WhatsApp us at +91 9441413344 within 48 hours with a photo, and we will dispatch an instant replacement free of charge."
  }
];

