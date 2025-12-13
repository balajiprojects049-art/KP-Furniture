export const categories = [
  { id: 'all', name: 'All Products' },
  {
    id: 'sofas',
    name: 'Sofas',
    subCategories: [
      { id: 'l-shape', name: 'L-Shape' },
      { id: 'u-shape', name: 'U-Shape' },
      { id: '3-1-1', name: '3+1+1 Sets' },
      { id: 'longer', name: '3+ Longer' }
    ]
  },
  {
    id: 'cots',
    name: 'Cots',
    subCategories: [
      { id: 'teak', name: 'Teak Wood' },
      { id: 'plywood', name: 'Plywood' },
      { id: 'off-take', name: 'Off Take Wood' }
    ]
  },
  {
    id: 'mattresses',
    name: 'Mattresses',
    subCategories: [
      { id: 'economy', name: 'Economy' },
      { id: 'premium', name: 'Premium' }
    ]
  },
  {
    id: 'dining',
    name: 'Dining Tables',
    subCategories: [
      { id: 'teak', name: 'Teak Wood Table' },
      { id: 'imported', name: 'Imported Table' }
    ]
  },
  {
    id: 'office-tables',
    name: 'Office Tables',
    subCategories: [
      { id: 'ppf', name: 'PPF Office Table' },
      { id: 'imported', name: 'Imported Office Table' }
    ]
  },
  { id: 'visitor-chairs', name: 'Visitor Chairs' },
  { id: 'teapoys', name: 'Teapoys' },
  { id: 'boss-chairs', name: 'Boss Chairs' },
];

export const products = [
  // Sofas
  {
    id: 1,
    name: "Luxury L-Shaped Sofa",
    category: "sofas",
    subCategory: "l-shape",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    description: "Premium L-shaped sofa design for spacious living rooms.",
    price: "Custom"
  },
  {
    id: 2,
    name: "Classic 3+1+1 Sofa Set",
    category: "sofas",
    subCategory: "3-1-1",
    image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=1000",
    description: "Traditional 3+1+1 seating arrangement with durable fabric.",
    price: "Custom"
  },
  {
    id: 3,
    name: "Modern U-Shaped Sectional",
    category: "sofas",
    subCategory: "u-shape",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&q=80&w=1000",
    description: "Spacious U-shaped sofa perfect for large families.",
    price: "Custom"
  },
  {
    id: 15,
    name: "Grand 5-Seater Straight Sofa",
    category: "sofas",
    subCategory: "longer",
    image: "https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&q=80&w=1000",
    description: "Extra long single-piece sofa for expansive spaces.",
    price: "Custom"
  },
  // Cots
  {
    id: 4,
    name: "Solid Teak Wood Cot",
    category: "cots",
    subCategory: "teak",
    image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?auto=format&fit=crop&q=80&w=1000",
    description: "Handcrafted teak wood cot for lifelong durability.",
    price: "Custom"
  },
  {
    id: 5,
    name: "Modern Plywood Cot",
    category: "cots",
    subCategory: "plywood",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=1000",
    description: "Stylish and cost-effective plywood cot design.",
    price: "Custom"
  },
  {
    id: 16,
    name: "Premium Off-Take Wood Cot",
    category: "cots",
    subCategory: "off-take",
    image: "https://images.unsplash.com/photo-1616594039964-40891a904d08?auto=format&fit=crop&q=80&w=1000",
    description: "Engineered wood cot designed for modern homes.",
    price: "Custom"
  },
  // Mattresses
  {
    id: 6,
    name: "Economy Comfort Mattress",
    category: "mattresses",
    subCategory: "economy",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=1000",
    description: "Affordable comfort with good back support.",
    price: "Custom"
  },
  {
    id: 7,
    name: "Premium Orthopedic Mattress",
    category: "mattresses",
    subCategory: "premium",
    image: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&q=80&w=1000",
    description: "Luxury mattress designed for perfect spinal alignment.",
    price: "Custom"
  },
  // Dining
  {
    id: 8,
    name: "Teak Wood Dining Table",
    category: "dining",
    subCategory: "teak",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=80&w=1000",
    description: "Robust teak wood dining table for family gatheings.",
    price: "Custom"
  },
  {
    id: 9,
    name: "Imported Glass Top Table",
    category: "dining",
    subCategory: "imported",
    image: "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=1000",
    description: "Sleek imported dining table with premium glass finish.",
    price: "Custom"
  },
  // Office Tables
  {
    id: 10,
    name: "PPF Office Desk",
    category: "office-tables",
    subCategory: "ppf",
    image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&q=80&w=1000",
    description: "Durable PPF coated office table for daily use.",
    price: "Custom"
  },
  {
    id: 11,
    name: "Director's Imported Table",
    category: "office-tables",
    subCategory: "imported",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000",
    description: "large imported executive table with cable management.",
    price: "Custom"
  },
  // Visitor Chairs
  {
    id: 12,
    name: "Classic Visitor Chair",
    category: "visitor-chairs",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?auto=format&fit=crop&q=80&w=1000",
    description: "Comfortable waiting room chair with chrome legs.",
    price: "Custom"
  },
  // Teapoys
  {
    id: 13,
    name: "Glass Top Teapoy",
    category: "teapoys",
    image: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=1000",
    description: "Elegant center table for your living room.",
    price: "Custom"
  },
  // Boss Chairs
  {
    id: 14,
    name: "High-Back Boss Chair",
    category: "boss-chairs",
    image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&q=80&w=1000",
    description: "Premium leather boss chair with reclining feature.",
    price: "Custom"
  }
];

export const generateWhatsAppLink = (productName, quantity = 1, message = "") => {
  const phoneNumber = "919490032763"; // Business WhatsApp
  const text = `Hi KP Furniture, I am interested in:\n\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Message:* ${message}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};
