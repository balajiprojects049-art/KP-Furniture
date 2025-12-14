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
    name: "Sky Blue Quilted Luxury Sectional",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-1.jpg",
    description: "Premium sky blue corner sofa featuring diamond quilting and built-in cup holders.",
    price: "Custom"
  },
  {
    id: 23,
    name: "Royal Purple Recliner Suite",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-2.jpg",
    description: "Luxurious purple velvet sectional with recliner functionality and diamond-stitched backrest.",
    price: "Custom"
  },
  {
    id: 24,
    name: "Beige Comfort Cinema Sofa",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-3.jpg",
    description: "Ergonomic beige recliner sofa with center console and cup holders, perfect for home theaters.",
    price: "Custom"
  },
  {
    id: 25,
    name: "Classic White Chesterfield L-Shape",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-4.jpg",
    description: "Elegant white button-tufted sectional with wooden armrest tables and matching ottoman.",
    price: "Custom"
  },
  {
    id: 26,
    name: "Deep Plum Velvet Corner Sofa",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-5.jpg",
    description: "Minimalist warm purple corner sofa designed for modern living spaces.",
    price: "Custom"
  },
  {
    id: 27,
    name: "Grand Beige Recliner Sectional",
    category: "sofas",
    subCategory: "l-shape",
    image: "/products/l-shape-6.jpg",
    description: "Expansive beige reclining sectional with diamond stitching, cup holders, and teal accent pillows.",
    price: "Custom"
  },

  {
    id: 3,
    name: "Rose Pink Channel Tufted U-Sectional",
    category: "sofas",
    subCategory: "u-shape",
    image: "/products/u-shape-1.jpg",
    description: "Elegant dusty pink U-shape sectional with vertical channel tufting, diamond quilted sides, adjustable headrests, matching ottoman and coffee table.",
    price: "Custom"
  },
  {
    id: 28,
    name: "Sage Green Comfort U-Lounger",
    category: "sofas",
    subCategory: "u-shape",
    image: "/products/u-shape-2.jpg",
    description: "Modern sage green U-sectional with plush cushions, built-in cup holders, and extended chaise lounge for maximum relaxation.",
    price: "Custom"
  },
  {
    id: 29,
    name: "Premium Beige Leather U-Suite",
    category: "sofas",
    subCategory: "u-shape",
    image: "/products/u-shape-3.jpg",
    description: "Luxurious cream leather U-sectional featuring reclining headrests, cup holders, storage compartments, and sleek metal legs.",
    price: "Custom"
  },
  {
    id: 30,
    name: "Teal Blue Family U-Sectional Set",
    category: "sofas",
    subCategory: "u-shape",
    image: "/products/u-shape-4.jpg",
    description: "Spacious teal U-sectional set with matching single seater, decorative floral pillows, cup holders, and ottoman coffee table.",
    price: "Custom"
  },
  {
    id: 31,
    name: "Gray Curved Designer U-Sofa",
    category: "sofas",
    subCategory: "u-shape",
    image: "/products/u-shape-5.jpg",
    description: "Contemporary light gray U-sectional with curved corner design, adjustable headrests, storage ottoman chaise, and gold metal legs.",
    price: "Custom"
  },
  {
    id: 32,
    name: "Cream Reclining Sectional Set",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-1.jpg",
    description: "Premium cream leather sectional with reclining seats, matching ottoman coffee table, and cozy armchair.",
    price: "Custom"
  },
  {
    id: 33,
    name: "Modern Grey Cinema Sectional",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-2.jpg",
    description: "Sleek grey sectional featuring a center console with storage and cup holders, plus a matching coffee table.",
    price: "Custom"
  },
  {
    id: 34,
    name: "Contemporary Taupe L-Sofa",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-3.jpg",
    description: "Elegant taupe L-shaped sofa with adjustable headrests and modern metal legs, perfect for spacious living rooms.",
    price: "Custom"
  },
  {
    id: 35,
    name: "Luxury Beige Lounger Sectional",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-4.jpg",
    description: "Spacious beige sectional with plush cushioning, decorative accent pillows, and a large matching ottoman table.",
    price: "Custom"
  },
  {
    id: 36,
    name: "Minimalist Grey Corner Suite",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-5.jpg",
    description: "Clean-lined grey corner sofa with tufted details and a large chaise lounge suitable for modern interiors.",
    price: "Custom"
  },
  {
    id: 37,
    name: "Elegant Taupe Chaise Sectional",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-6.jpg",
    description: "Sophisticated taupe L-sectional with plush cushioning, decorative floral pillow, and sleek wooden legs.",
    price: "Custom"
  },
  {
    id: 38,
    name: "Premium Cream Console Sectional",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-7.jpg",
    description: "Luxurious cream sectional with center console featuring cup holders and storage, set against stunning marble wall.",
    price: "Custom"
  },
  {
    id: 39,
    name: "Classic Beige Rattan-Detail L-Sofa",
    category: "sofas",
    subCategory: "longer",
    image: "/products/3-plus-longer-8.jpg",
    description: "Elegant beige L-shaped sofa with distinctive wicker armrest, adjustable headrests, and gold-toned metal legs.",
    price: "Custom"
  },
  {
    id: 17,
    name: "Prestige Blue & Grey Lounge Set",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-1.jpg",
    description: "Heavy-duty blue fabric upholstery with stylish grey borders and wide armrests for maximum comfort.",
    price: "Custom"
  },
  {
    id: 18,
    name: "Classic Cream & Teak Finish Set",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-2.jpg",
    description: "Sophisticated cream fabric sofa featuring elegant curved wooden armrest facings for a traditional look.",
    price: "Custom"
  },
  {
    id: 19,
    name: "Modern Navy Dual-Tone Sofa",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-3.jpg",
    description: "Contemporary navy blue seating with crisp white highlights and ergonomic back support design.",
    price: "Custom"
  },
  {
    id: 20,
    name: "Ultra-Plush Chocolate Brown Set",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-4.jpg",
    description: "Deep-cushioned brown fabric sofa with pillow-top armrests and high back styling for superior relaxation.",
    price: "Custom"
  },
  {
    id: 21,
    name: "Italian Style Orange Leatherette",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-5.jpg",
    description: "Bold orange leatherette set featuring sleek chrome legs and black accent cushions.",
    price: "Custom"
  },
  {
    id: 22,
    name: "Royal Blue Velvet Fluted Suite",
    category: "sofas",
    subCategory: "3-1-1",
    image: "/products/sofa-set-6.jpg",
    description: "Luxurious velvet upholstery with elegant vertical channel tufting and premium gold-plated legs.",
    price: "Custom"
  },
  // Cots
  {
    id: 40,
    name: "Premium Dark Teak Cot",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-1.jpg",
    description: "Solid teak wood cot with elegant dark finish and durable storage base compatibility.",
    price: "Custom"
  },
  {
    id: 41,
    name: "Royal Floral Carved Cot",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-2.jpg",
    description: "Exquisite teak cot featuring intricate floral carvings on both headboard and footboard.",
    price: "Custom"
  },
  {
    id: 42,
    name: "Grand Masterpiece Teak Bed",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-3.jpg",
    description: "Heavy-duty teak bed with massive, deeply carved frames for a majestic bedroom look.",
    price: "Custom"
  },
  {
    id: 43,
    name: "Traditional Family Teak Cot",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-4.jpg",
    description: "Classic family-style teak cot with a curved headboard and warm traditional finish.",
    price: "Custom"
  },
  {
    id: 44,
    name: "Luxury Rosewood Finish Cot",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-5.jpg",
    description: "High-gloss finished teak cot with detailed craftsmanship and a premium layout.",
    price: "Custom"
  },
  {
    id: 45,
    name: "Sleek Modern Teak Platform Bed",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-6.jpg",
    description: "Minimalist teak platform bed with a deep reddish-brown finish and a clean, curved headboard design.",
    price: "Custom"
  },
  {
    id: 46,
    name: "Heritage Carved Teak Bed",
    category: "cots",
    subCategory: "teak",
    image: "/products/teak-cot-7.jpg",
    description: "Traditional heritage-style teak bed with floral headboard carvings and sturdy turned legs.",
    price: "Custom"
  },
  {
    id: 47,
    name: "Classic Box Design Plywood Cot",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-1.jpg",
    description: "Sturdy plywood cot with a classic box-patterned headboard and rich dark finish.",
    price: "Custom"
  },
  {
    id: 48,
    name: "Modern Dual-Tone Headboard Cot",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-2.jpg",
    description: "Contemporary plywood cot featuring a stylish dual-tone headboard with orange accents.",
    price: "Custom"
  },
  {
    id: 49,
    name: "Standard Double Plywood Bed",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-3.jpg",
    description: "Reliable and spacious standard double plywood bed with a dark polished frame.",
    price: "Custom"
  },
  {
    id: 50,
    name: "Ornate White & Black Plywood Cot",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-4.jpg",
    description: "Unique white and black patterned plywood cot with a central decorative motif.",
    price: "Custom"
  },
  {
    id: 51,
    name: "Elegant Geometric Pattern Cot",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-5.jpg",
    description: "Plywood cot featuring an elegant geometric lattice pattern on the headboard.",
    price: "Custom"
  },
  {
    id: 52,
    name: "Grand Arch Plywood Bed",
    category: "cots",
    subCategory: "plywood",
    image: "/products/plywood-cot-6.jpg",
    description: "Majestic plywood bed with a grand arched headboard and decorative silver accents.",
    price: "Custom"
  },
  {
    id: 53,
    name: "Classic Carved Headboard Cot",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-1.jpg",
    description: "Traditional off-take wood cot featuring a beautifully carved floral headboard.",
    price: "Custom"
  },
  {
    id: 54,
    name: "Grand Floral Relief Bed",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-2.jpg",
    description: "Majestic off-take wood bed with deep floral relief carvings on a high headboard.",
    price: "Custom"
  },
  {
    id: 55,
    name: "Detailed Rose Wood Finish Cot",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-3.jpg",
    description: "Elegant off-take cot with intricate rose motifs and a polished wood finish.",
    price: "Custom"
  },
  {
    id: 56,
    name: "Heavy Duty Carved Cot",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-4.jpg",
    description: "Robust off-take wood cot with heavy-duty frame and classic curved headboard.",
    price: "Custom"
  },
  {
    id: 57,
    name: "Sunrise Pattern Carved Bed",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-5.jpg",
    description: "Stunning off-take wood bed featuring a sunrise-like floral carving pattern.",
    price: "Custom"
  },
  {
    id: 58,
    name: "Premium Floral Carved Cot",
    category: "cots",
    subCategory: "off-take",
    image: "/products/off-take-cot-6.jpg",
    description: "Exquisite off-take wood cot with a large floral centerpiece and elaborate vine carvings.",
    price: "Custom"
  },
  // Mattresses
  {
    id: 59,
    name: "Pink Floral Economy Mattress",
    category: "mattresses",
    subCategory: "economy",
    image: "/products/economy-pink-3.jpg",
    images: [
      "/products/economy-pink-3.jpg",
      "/products/economy-pink-1.jpg",
      "/products/economy-pink-2.jpg"
    ],
    description: "Vibrant pink economy mattress with floral design, featuring detailed hibiscus quilting and durable edge support.",
    price: "Custom"
  },
  {
    id: 7,
    name: "Royal Premium Blue Mattress",
    category: "mattresses",
    subCategory: "premium",
    image: "/products/ortho-blue-3.jpg",
    images: [
      "/products/ortho-blue-3.jpg",
      "/products/ortho-blue-1.jpg",
      "/products/ortho-blue-2.jpg"
    ],
    description: "High-quality orthopedic mattress with blue quilted fabric for superior back support and comfort.",
    price: "Custom"
  },
  // Dining
  {
    id: 62,
    name: "Teak Wood Table Frame Set",
    category: "dining",
    subCategory: "teak",
    image: "/products/teak-dining-1.jpg",
    description: "Premium teak wood dining table frames with matching chairs, ready for customization.",
    price: "Custom"
  },
  {
    id: 63,
    name: "Glass Top Teak Dining Set",
    category: "dining",
    subCategory: "teak",
    image: "/products/teak-dining-2.jpg",
    description: "Elegant teak wood dining set with glass top and upholstered cream chairs.",
    price: "Custom"
  },
  {
    id: 64,
    name: "Modern Teak Dining Set with Bench",
    category: "dining",
    subCategory: "teak",
    image: "/products/teak-dining-3.jpg",
    description: "Contemporary teak dining table with chairs and bench seating for versatile dining.",
    price: "Custom"
  },
  {
    id: 65,
    name: "Round Teak Pedestal Dining Table",
    category: "dining",
    subCategory: "teak",
    image: "/products/teak-dining-4.jpg",
    description: "Classic round teak dining table with pedestal base and upholstered seating.",
    price: "Custom"
  },
  {
    id: 66,
    name: "Black Glass Round Teak Table",
    category: "dining",
    subCategory: "teak",
    image: "/products/teak-dining-5.jpg",
    description: "Sophisticated black glass-top round teak dining table with cushioned chairs.",
    price: "Custom"
  },
  {
    id: 67,
    name: "Luxury Marble Top Dining Set",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-1.jpg",
    description: "Premium imported dining set with marble-effect top and designer upholstered chairs.",
    price: "Custom"
  },
  {
    id: 68,
    name: "Elegant Marble Pedestal Dining Table",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-2.jpg",
    description: "Designer imported table with marble top, pedestal base, and luxurious cream chairs.",
    price: "Custom"
  },
  {
    id: 69,
    name: "Modern White Marble Dining Set",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-3.jpg",
    description: "Contemporary white marble dining table with gold accents and quilted chairs.",
    price: "Custom"
  },
  {
    id: 70,
    name: "Classic Marble Dining Collection",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-4.jpg",
    description: "Timeless marble-top dining set with decorative brown upholstered chairs.",
    price: "Custom"
  },
  {
    id: 71,
    name: "Premium Marble Dining Suite",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-5.jpg",
    description: "Imported marble dining table with gold accents and plush cream seating.",
    price: "Custom"
  },
  {
    id: 72,
    name: "Sage Green Marble Dining Set",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-6.jpg",
    description: "Elegant marble-top dining table with sage green quilted chairs and gold accents.",
    price: "Custom"
  },
  {
    id: 73,
    name: "Designer White Glass Dining Set",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-7.jpg",
    description: "Sophisticated white glass-top dining table with designer chairs featuring art deco styling.",
    price: "Custom"
  },
  {
    id: 74,
    name: "Contemporary Marble Dining Collection",
    category: "dining",
    subCategory: "imported",
    image: "/products/imported-dining-8.jpg",
    description: "Modern marble dining table with unique pedestal base and two-tone upholstered seating.",
    price: "Custom"
  },
  // Office Tables
  {
    id: 75,
    name: "Modern Dual-Tone Office Desk",
    category: "office-tables",
    subCategory: "ppf",
    image: "/products/ppf-office-1.jpg",
    description: "Contemporary PPF office desk with dual-tone wood finish and side storage unit.",
    price: "Custom"
  },
  {
    id: 76,
    name: "Executive Designer Office Table",
    category: "office-tables",
    subCategory: "ppf",
    image: "/products/ppf-office-2.jpg",
    description: "Premium PPF office table with unique geometric design and built-in storage compartments.",
    price: "Custom"
  },
  {
    id: 77,
    name: "Compact Professional Work Desk",
    category: "office-tables",
    subCategory: "ppf",
    image: "/products/ppf-office-3.jpg",
    description: "Space-efficient PPF office desk with side drawers and cabinet in dark wood finish.",
    price: "Custom"
  },
  {
    id: 78,
    name: "Premium Executive Desk",
    category: "office-tables",
    subCategory: "ppf",
    image: "/products/ppf-office-4.jpg",
    description: "Elegant PPF office desk with decorative panel design and ample workspace.",
    price: "Custom"
  },
  {
    id: 79,
    name: "Classic Manager's Office Table",
    category: "office-tables",
    subCategory: "ppf",
    image: "/products/ppf-office-5.jpg",
    description: "Traditional PPF office table with contrasting wood panels and spacious work surface.",
    price: "Custom"
  },
  {
    id: 80,
    name: "Executive Modern Office Suite",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-1.jpg",
    description: "Premium imported executive desk with angular design and matching side cabinet.",
    price: "Custom"
  },
  {
    id: 81,
    name: "Contemporary L-Shape Office Desk",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-2.jpg",
    description: "Modern imported L-shaped desk with LED-lit shelving and integrated storage.",
    price: "Custom"
  },
  {
    id: 82,
    name: "Professional Executive Workstation",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-3.jpg",
    description: "Spacious imported office desk with side cabinet and clean modern design.",
    price: "Custom"
  },
  {
    id: 83,
    name: "Luxury Manager's Office Desk",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-4.jpg",
    description: "High-end imported desk with decorative side panel and premium finish.",
    price: "Custom"
  },
  {
    id: 84,
    name: "Designer Executive Desk Set",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-5.jpg",
    description: "Elegant imported office desk with gold accent trim and matching side unit.",
    price: "Custom"
  },
  {
    id: 85,
    name: "Premium Curved Executive Desk",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-6.jpg",
    description: "Sophisticated imported desk with curved design elements and side storage cabinet.",
    price: "Custom"
  },
  {
    id: 86,
    name: "Modern Textured Panel Office Desk",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-7.jpg",
    description: "Contemporary imported desk with unique textured front panel and side drawers.",
    price: "Custom"
  },
  {
    id: 87,
    name: "Executive Silver Trim Office Table",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-8.jpg",
    description: "Premium imported office table with sleek silver trim and side cabinet.",
    price: "Custom"
  },
  {
    id: 88,
    name: "Designer Wood Accent Workstation",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-9.jpg",
    description: "Elegant imported desk featuring wood accent panels and functional storage.",
    price: "Custom"
  },
  {
    id: 89,
    name: "Luxury Modern Executive Desk",
    category: "office-tables",
    subCategory: "imported",
    image: "/products/imported-office-10.jpg",
    description: "High-end imported desk with modern black and silver design and integrated storage.",
    price: "Custom"
  },
  // Visitor Chairs
  {
    id: 90,
    name: "Modern Mesh Visitor Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-1.jpg",
    description: "Contemporary visitor chair with breathable mesh back and chrome frame.",
    price: "Custom"
  },
  {
    id: 91,
    name: "Professional Guest Seating",
    category: "visitor-chairs",
    image: "/products/visitor-chair-2.jpg",
    description: "Comfortable visitor chair with mesh back and padded seat, perfect for waiting areas.",
    price: "Custom"
  },
  {
    id: 92,
    name: "Executive Visitor Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-3.jpg",
    description: "Premium black mesh visitor chair with fixed arms and cantilever base.",
    price: "Custom"
  },
  {
    id: 93,
    name: "Ergonomic Guest Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-4.jpg",
    description: "Stylish visitor chair with mesh back support and ergonomic fixed arms.",
    price: "Custom"
  },
  {
    id: 94,
    name: "Conference Room Visitor Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-5.jpg",
    description: "Versatile mesh guest chair with wheels, ideal for conference and meeting rooms.",
    price: "Custom"
  },
  {
    id: 95,
    name: "Striped Mesh Cantilever Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-6.jpg",
    description: "Modern visitor chair with striped mesh back and sleek cantilever frame.",
    price: "Custom"
  },
  {
    id: 96,
    name: "Executive Mid-Back Visitor Chair",
    category: "visitor-chairs",
    image: "/products/visitor-chair-7.jpg",
    description: "Professional mid-back visitor chair with mesh support and chrome cantilever base.",
    price: "Custom"
  },
  // Teapoys
  {
    id: 97,
    name: "Luxury Marble Top Center Table",
    category: "teapoys",
    image: "/products/teapoy-1.jpg",
    description: "Premium marble-top center table with storage cabinet, perfect for modern living rooms.",
    price: "Custom"
  },
  {
    id: 98,
    name: "Designer Dual-Level Coffee Table",
    category: "teapoys",
    image: "/products/teapoy-2.jpg",
    description: "Elegant dual-level teapoy with marble tops and modern pedestal base.",
    price: "Custom"
  },
  {
    id: 99,
    name: "Round Marble Teapoy Set",
    category: "teapoys",
    image: "/products/teapoy-3.jpg",
    description: "Sophisticated round center table set with marble finish and integrated seating poufs.",
    price: "Custom"
  },
  {
    id: 100,
    name: "Contemporary Black & White Teapoy",
    category: "teapoys",
    image: "/products/teapoy-4.jpg",
    description: "Modern center table set with contrasting black and white marble tops and side table.",
    price: "Custom"
  },
  {
    id: 101,
    name: "Asymmetric Marble Coffee Table",
    category: "teapoys",
    image: "/products/teapoy-5.jpg",
    description: "Unique dual-circle center table with white and black marble tops on modern base.",
    price: "Custom"
  },
  {
    id: 102,
    name: "Classic Marble Storage Center Table",
    category: "teapoys",
    image: "/products/teapoy-6.jpg",
    description: "Elegant white marble-top center table with copper-tone storage drawers.",
    price: "Custom"
  },
  {
    id: 103,
    name: "Natural Stone Teapoy with Drawers",
    category: "teapoys",
    image: "/products/teapoy-7.jpg",
    description: "Premium natural stone center table with white storage drawers and modern design.",
    price: "Custom"
  },
  {
    id: 104,
    name: "Granite Effect Center Table",
    category: "teapoys",
    image: "/products/teapoy-8.jpg",
    description: "Stylish granite-effect marble teapoy with contrasting white storage cabinets.",
    price: "Custom"
  },
  {
    id: 105,
    name: "Designer Blue Marble Teapoy",
    category: "teapoys",
    image: "/products/teapoy-9.jpg",
    description: "Luxurious blue-tinted marble center table with glossy black storage cabinet.",
    price: "Custom"
  },
  {
    id: 106,
    name: "Statement Black Marble Center Table",
    category: "teapoys",
    image: "/products/teapoy-10.jpg",
    description: "Bold black marble-top teapoy with white storage drawers for contemporary living rooms.",
    price: "Custom"
  },
  // Boss Chairs
  {
    id: 107,
    name: "Executive Khaki Boss Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-1.jpg",
    description: "Sophisticated khaki-colored high-back executive chair with ergonomic design.",
    price: "Custom"
  },
  {
    id: 108,
    name: "Premium Mesh Executive Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-2.jpg",
    description: "High-performance mesh executive chair with advanced ergonomics and headrest.",
    price: "Custom"
  },
  {
    id: 109,
    name: "Luxury Leather Recliner Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-3.jpg",
    description: "Premium leather boss chair with footrest and reclining function for ultimate comfort.",
    price: "Custom"
  },
  {
    id: 110,
    name: "Classic Leather Executive Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-4.jpg",
    description: "Traditional quilted leather boss chair with gold accent stitching and chrome base.",
    price: "Custom"
  },
  {
    id: 111,
    name: "Modern High-Back Executive Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-5.jpg",
    description: "Contemporary black high-back boss chair with sleek design and adjustable features.",
    price: "Custom"
  },
  {
    id: 112,
    name: "Designer Grey Executive Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-6.jpg",
    description: "Elegant grey leather executive chair with modern curved design and chrome base.",
    price: "Custom"
  },
  {
    id: 113,
    name: "Professional Brown Boss Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-7.jpg",
    description: "Classic brown leather executive chair with adjustable arms and premium comfort.",
    price: "Custom"
  },
  {
    id: 114,
    name: "High-Back Leather Executive Chair",
    category: "boss-chairs",
    image: "/products/boss-chair-8.jpg",
    description: "Professional grey leather boss chair with ergonomic high-back design and lumbar support.",
    price: "Custom"
  }
];

export const generateWhatsAppLink = (productName, quantity = 1, message = "") => {
  const phoneNumber = "919490032763"; // Business WhatsApp
  const text = `Hi KP Furniture, I am interested in:\n\n*Product:* ${productName}\n*Quantity:* ${quantity}\n*Message:* ${message}`;
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
};
