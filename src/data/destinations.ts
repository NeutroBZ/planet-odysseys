export interface Destination {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  gradient: string;
  highlights: string[];
  category?: 'lake-titicaca' | 'bolivia' | 'colca-canyon';
}

export const destinations: Destination[] = [
  {
    slug: 'lake-titicaca',
    name: 'Lake Titicaca',
    title: 'Lake Titicaca Tours & Experiences',
    subtitle: 'World\'s Highest Navigable Lake',
    description: 'Experience the magic of the world\'s highest navigable lake, where ancient cultures live on floating islands and traditional communities welcome you into their homes.',
    longDescription: 'Lake Titicaca is one of South America\'s most fascinating destinations. Straddling the border between Peru and Bolivia at 3,812 meters above sea level, it is the highest navigable lake in the world. The lake is home to the Uros people, who live on floating islands made entirely of totora reeds, and the Quechua-speaking communities of Taquile and Amantani, who preserve ancient textile traditions and agricultural terraces.',
    image: '/images/tours/category-lake-titicaca.webp',
    gradient: 'from-[#0a3a4d] to-[#002635]',
    category: 'lake-titicaca',
    highlights: [
      'Uros Floating Islands - Man-made islands of totora reed',
      'Taquile Island - UNESCO heritage textile traditions',
      'Amantani Island - Authentic homestay experiences',
      'Kapis - Sacred Inca site with panoramic views',
      'Sillustani - Pre-Incan funeral towers'
    ]
  },
  {
    slug: 'colca-canyon',
    name: 'Colca Canyon',
    title: 'Colca Canyon Tours & Trekking',
    subtitle: 'One of the Deepest Canyons in the World',
    description: 'Discover the majestic Colca Canyon, twice as deep as the Grand Canyon, home to the mighty Andean condor and ancient pre-Inca terraces.',
    longDescription: 'The Colca Canyon is one of Peru\'s most spectacular natural wonders. At its deepest point, it reaches 3,270 meters, making it one of the deepest canyons on Earth. The canyon is not only a geological marvel but also a cultural treasure, with pre-Inca terraces still cultivated by local communities, traditional villages with colonial churches, and the spectacular Cruz del Condor viewpoint where Andean condors soar on thermal currents.',
    image: '/images/tours/category-arequipa.webp',
    gradient: 'from-[#4b2c00] to-[#5a7c86]',
    category: 'colca-canyon',
    highlights: [
      'Cruz del Condor - Andean condor viewpoint',
      'Pre-Inca agricultural terraces',
      'Traditional villages like Yanque and Chivay',
      'Hot springs of La Calera',
      'Multi-day trekking routes'
    ]
  },
  {
    slug: 'bolivia',
    name: 'Bolivia',
    title: 'Bolivia Tours from Peru',
    subtitle: 'Uyuni Salt Flats & Andean Landscapes',
    description: 'Cross-border adventures to Bolivia\'s most spectacular destinations, including the otherworldly Uyuni Salt Flats.',
    longDescription: 'Bolivia offers some of South America\'s most surreal landscapes. The Uyuni Salt Flats, the world\'s largest salt flat, creates a perfect mirror effect during the rainy season and stretches endlessly under the clear altiplano sky. From our base in Puno, we offer convenient cross-border tours that let you experience Bolivia\'s natural wonders before returning to Peru.',
    image: '/images/tours/category-salar-uyuni.webp',
    gradient: 'from-[#c6a15b] to-[#4b2c00]',
    category: 'bolivia',
    highlights: [
      'Uyuni Salt Flats - World\'s largest salt flat',
      'Train Cemetery - Abandoned locomotives',
      'Isla Incahuasi - Giant cacti island',
      'Colorful lagoons and flamingos',
      'Cross-border adventure from Puno'
    ]
  }
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find(dest => dest.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map(dest => dest.slug);
}