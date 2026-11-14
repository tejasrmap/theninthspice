export const productsData = [
  {
    id: "red-chilli-powder",
    name: "The Ninth Spice Red Chilli Powder",
    image: "/red-chilli-powder.jpg",
    tagline: "Vibrant Crimson, Balanced Pungency & Lingering Culinary Warmth",
    shortDesc: "Carefully selected whole sun-dried red chillies from Andhra Pradesh farm clusters. Slow stone-ground at controlled ambient temperatures to safeguard natural capsaicin oils and authentic culinary aroma.",
    badge: "100% Pure • Single Origin",
    category: "Pure Ground Spices",
    rating: 4.9,
    reviewsCount: 142,
    origin: "Guntur & Warangal, Andhra Pradesh",
    harvestYear: "2026 Batch #042",
    millingType: "Gentle Stone-Ground Ambient Milling (< 32°C)",
    heatLevel: 7, // out of 10
    aromaLevel: 8, // out of 10
    color: "#A6261D",
    accentBg: "bg-red-50",
    borderAccent: "border-red-200",
    variants: [
      { size: "150g", price: 139, label: "Pouch Pack" },
      { size: "250g", price: 229, label: "Kitchen Jar Pack" },
      { size: "500g", price: 429, label: "Family Pantry Pack" }
    ],
    features: [
      "Zero artificial Sudan red dyes (I, II, III, IV) or synthetic colorings",
      "De-stemmed whole chillies to ensure a clean, smooth, non-gritty texture",
      "Slow stone-ground processing to lock in natural capsaicin aromatic oils",
      "Tested for aflatoxins and heavy metal safety under FSSAI standards"
    ],
    tastingNotes: "Sun-ripened dry earthiness, rounded roasted warmth, clean spicy burst without harsh acidity.",
    culinaryUses: [
      "Andhra Kodi Kura (Chicken Curry)",
      "Traditional Sambars & Rasam Tadkas",
      "Slow-Simmered Veg & Meat Curries",
      "Daily Lentil & Sabzi Seasoning"
    ],
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
    name: "The Ninth Spice Turmeric Powder",
    image: "/turmeric-powder.jpg",
    tagline: "Deep Golden Curcumin, Warm Woody Aroma & Potent Natural Purity",
    shortDesc: "High-curcumin finger turmeric harvested from mineral-rich black soils of Nizamabad. Ground gently at low temperatures to ensure bio-active curcuminoids and volatile aromatic turmerone oils remain intact.",
    badge: "High Curcumin • Single Origin",
    category: "Pure Ground Spices",
    rating: 4.95,
    reviewsCount: 189,
    origin: "Nizamabad & Duggirala, Andhra Pradesh",
    harvestYear: "2026 Batch #078",
    millingType: "Slow Ambient Stone Milling (< 30°C)",
    heatLevel: 2, // out of 10
    aromaLevel: 9, // out of 10
    color: "#D99316",
    accentBg: "bg-amber-50",
    borderAccent: "border-amber-200",
    variants: [
      { size: "150g", price: 139, label: "Pouch Pack" },
      { size: "250g", price: 229, label: "Kitchen Jar Pack" },
      { size: "500g", price: 429, label: "Family Pantry Pack" }
    ],
    features: [
      "Natural curcumin percentage exceeding 4.5% (verified purity standard)",
      "Zero lead chromate, starch, or chalk adulterants used for synthetic luster",
      "Ground gently without moisture steam to maintain authentic fragrance",
      "Heavy multi-barrier moisture-proof and UV-resistant packaging"
    ],
    tastingNotes: "Warm ginger undertones, fresh floral musk, deeply earthy and aromatic bloom in hot ghee.",
    culinaryUses: [
      "Ayurvedic Golden Latte (Haldi Doodh)",
      "Traditional Andhra Dal & Sambar Tadka",
      "Hyderabadi Biryani Marinade & Pulao",
      "Vegetable Curries & Healing Broths"
    ],
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
  { name: "Coriander Powder (Dhania)", desc: "Whole roasted seeds stone-ground for citrusy brightness", tag: "In Development" },
  { name: "Cumin Powder (Jeera)", desc: "Earthy, robust cumin rich in volatile natural thymol", tag: "In Development" },
  { name: "Signature Garam Masala", desc: "Heritage blend of 14 single-origin whole spices", tag: "Artisan Recipe" },
  { name: "Tellicherry Black Pepper", desc: "Bold South Indian peppercorns coarsely cracked for crisp heat", tag: "Next Harvest" }
];

export const recipes = [
  {
    title: "Andhra Guntur Kodi Vepudu (Spicy Chicken Roast)",
    time: "35 mins",
    difficulty: "Medium",
    spicesUsed: ["The Ninth Spice Red Chilli Powder", "The Ninth Spice Turmeric Powder"],
    desc: "A legendary Andhra coastal preparation where stone-ground chilli powder blooms in curry leaves and hot groundnut oil for deep mahogany color and rounded heat.",
    tag: "Andhra Classic"
  },
  {
    title: "Heritage Golden Haldi Latte (Haldi Doodh)",
    time: "10 mins",
    difficulty: "Easy",
    spicesUsed: ["The Ninth Spice Turmeric Powder"],
    desc: "Simmered whole milk or almond milk infused with high-curcumin finger turmeric, crushed green cardamom, and raw honey for traditional bedtime restorative nourishment.",
    tag: "Wellness Elixir"
  },
  {
    title: "Slow-Tempered Pappu Charu (Tomato Lentil Broth)",
    time: "25 mins",
    difficulty: "Easy",
    spicesUsed: ["The Ninth Spice Red Chilli Powder", "The Ninth Spice Turmeric Powder"],
    desc: "A comforting Andhra staple where pure turmeric imparts sunlit brilliance while a teaspoon of red chilli in hot ghee tadka releases warm, fragrant aroma.",
    tag: "Everyday Comfort"
  }
];

export const faqsList = [
  {
    q: "What makes The Ninth Spice different from mass-market grocery brands?",
    a: "Most commercial brands pulverize spices using industrial hammer mills running at 3,000+ RPM. The resulting frictional heat often exceeds 70°C, scorching volatile aroma oils and leaving spices dull. We slow stone-grind in small batches at ambient temperatures (< 32°C), preserving the authentic volatile oils, rich color, and nuanced flavor profile."
  },
  {
    q: "Are any artificial colors or Sudan red dyes added to the Red Chilli Powder?",
    a: "Never. The Ninth Spice Red Chilli Powder is 100% natural and unadulterated. The vibrant crimson color is entirely derived from ripe, sun-dried chillies harvested in Guntur. Every batch undergoes strict compliance checks to ensure zero Sudan dyes (I–IV) and zero synthetic additives."
  },
  {
    q: "What is the natural curcumin content of your Turmeric Powder?",
    a: "Our turmeric is sourced directly from certified finger turmeric rhizomes in the Nizamabad agricultural belt, yielding a natural curcumin content exceeding 4.5%. It is entirely free from lead chromate, starch, or artificial yellow enhancers."
  },
  {
    q: "How should I store The Ninth Spice powders to maintain peak freshness?",
    a: "Keep the spices in their airtight resealable multi-barrier pouches, or transfer them to a dry, clean glass jar stored in a cool, dark kitchen cupboard away from direct sunlight and stove heat."
  },
  {
    q: "Do you deliver across all PIN codes in India?",
    a: "Yes. We partner with reliable express couriers to deliver across all major cities and rural PIN codes across India. Orders above ₹599 receive complimentary express dispatch."
  },
  {
    q: "What is your return or replacement policy if I receive a damaged packet?",
    a: "If your parcel arrives damaged or compromised during transit, contact our customer support at support@theninthspice.com or +91 9441413344 within 48 hours with a photograph of the package. We will immediately dispatch a fresh replacement free of charge."
  }
];
