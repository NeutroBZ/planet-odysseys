export interface Transfer {
  id: number;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  metaDescription: string;
  image: string;
  price: number;
  duration: string;
  category: string;
  rating: number;
  reviews: number;
  route: string;
  includes: string[];
  notIncludes: string[];
  importantInfo: string[];
}

export const transfers: Transfer[] = [
  {
    id: 1,
    slug: "route-of-the-sun-cusco-puno",
    title: "Route of the Sun Cusco – Puno Bus Transfer",
    shortTitle: "Cusco – Puno Route",
    description:
      "Travel comfortably between Cusco and Puno through the famous Route of the Sun with panoramic Andean landscapes and cultural stops.",
    metaDescription:
      "Comfortable bus transfer between Cusco and Puno via the Route of the Sun. Safe, reliable and scenic transportation service.",
    image: "/images/tours/route-of-the-sun-planet-odysseys.webp",
    price: 55,
    duration: "Full Day",
    category: "intercity",
    rating: 4.8,
    reviews: 124,
    route: "Cusco – Puno",
    includes: [
      "Professional driver",
      "Comfortable tourist bus",
      "Air conditioning",
      "Hotel pickup (selected areas)"
    ],
    notIncludes: [
      "Meals",
      "Personal expenses",
      "Travel insurance"
    ],
    importantInfo: [
      "Arrive 15 minutes before departure",
      "Bring passport for ID verification",
      "Subject to weather conditions"
    ]
  },

  {
    id: 2,
    slug: "cusco-to-puno-direct-bus",
    title: "Cusco to Puno Direct & Overnight Bus",
    shortTitle: "Cusco – Puno Direct",
    description:
      "Direct and overnight transfer between Cusco and Puno with modern vehicles and professional drivers.",
    metaDescription:
      "Direct bus transfer between Cusco and Puno. Safe, efficient and comfortable transportation service in Peru.",
    image: "/images/tours/cusco-to-puno-cusco-planet-odysseys.webp",
    price: 28,
    duration: "7 Hours",
    category: "intercity",
    rating: 4.6,
    reviews: 89,
    route: "Cusco – Puno",
    includes: [
      "Modern bus",
      "Reclining seats",
      "Luggage assistance"
    ],
    notIncludes: [
      "Meals",
      "Personal expenses"
    ],
    importantInfo: [
      "Overnight option available",
      "Arrive early during high season"
    ]
  },

  {
    id: 3,
    slug: "juliaca-airport-to-puno",
    title: "Airport Transfer Juliaca to Puno",
    shortTitle: "Juliaca Airport Transfer",
    description:
      "Private airport transfer from Juliaca Airport to your hotel in Puno. Safe, punctual and comfortable service.",
    metaDescription:
      "Private airport transfer from Juliaca Airport to Puno. Reliable and professional transportation service.",
    image: "/images/tours/ariport-transfer-planet-odysseys.webp",
    price: 45,
    duration: "1 Hour",
    category: "airport",
    rating: 4.9,
    reviews: 203,
    route: "Juliaca – Puno",
    includes: [
      "Private vehicle",
      "Professional driver",
      "Airport pickup assistance"
    ],
    notIncludes: [
      "Tips",
      "Extra stops"
    ],
    importantInfo: [
      "Provide flight details",
      "Driver waits up to 60 minutes after landing"
    ]
  }
];

// Helpers (igual que tours)

export function getTransferBySlug(slug: string) {
  return transfers.find(t => t.slug === slug);
}

export function getAllTransferSlugs() {
  return transfers.map(t => t.slug);
}

export function getFeaturedTransfers() {
  return transfers.slice(0, 3);
}