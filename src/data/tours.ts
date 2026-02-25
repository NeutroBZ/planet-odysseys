export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  category: 'lake-titicaca' | 'bolivia' | 'transfers' | 'packages';
  destination: string;
  duration: string;
  price: number;
  featured: boolean;
  reviews: number;
  rating: number;
  image: string;
  gallery: string[];
  highlights: string[];
  includes: string[];
  notIncludes: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  importantInfo: string[];
  metaDescription: string;
  keywords: string[];
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'uros-floating-islands-of-lake-titicaca-tour',
    title: 'Uros Floating Islands of Lake Titicaca Tour',
    shortTitle: 'Uros Islands Half Day',
    description: 'Experience the fascinating Uros Floating Islands, where indigenous communities live on islands made entirely of totora reeds. This half-day tour offers an intimate glimpse into a unique way of life on the world\'s highest navigable lake.',
    category: 'lake-titicaca',
    destination: 'Lake Titicaca - Uros Islands',
    duration: 'Half Day (4 hours)',
    price: 21,
    featured: true,
    reviews: 12,
    rating: 4.8,
    image: '/images/tours/uros-island-puno-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Visit authentic Uros Floating Islands',
      'Learn about totora reed construction',
      'Interact with local Uros families',
      'Boat ride on traditional reed boat',
      'Stunning Lake Titicaca views'
    ],
    includes: [
      'Round-trip boat transportation',
      'Professional bilingual guide',
      'Island entrance fees',
      'Hotel pickup in Puno center'
    ],
    notIncludes: [
      'Optional reed boat ride (extra $5)',
      'Personal expenses',
      'Tips for guides'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Uros Floating Islands Experience',
        description: 'Morning departure from Puno to explore the fascinating Uros Islands',
        activities: [
          '7:30 AM - Hotel pickup in Puno',
          '8:00 AM - Boat departure from Puno port',
          '8:30 AM - Arrival at Uros Islands',
          '9:00 AM - Guided tour and cultural demonstration',
          '10:30 AM - Optional reed boat experience',
          '11:30 AM - Return to Puno',
          '12:00 PM - Drop-off at your hotel'
        ]
      }
    ],
    importantInfo: [
      'Bring warm clothing and sun protection',
      'Altitude is 3,812m - take it easy',
      'Small cash for optional purchases',
      'Respectful photography only with permission'
    ],
    metaDescription: 'Discover the Uros Floating Islands on Lake Titicaca. Half-day tour from Puno visiting indigenous communities living on reed islands. Book your authentic cultural experience today!',
    keywords: ['Uros Islands', 'Lake Titicaca tour', 'Puno tours', 'floating islands Peru', 'Titicaca day trip']
  },
  {
    id: '2',
    slug: 'full-day-peru-lake-titicaca-tours',
    title: 'Full Day Peru Lake Titicaca Tours - Uros & Taquile',
    shortTitle: 'Uros & Taquile Full Day',
    description: 'Comprehensive full-day tour exploring both Uros Floating Islands and Taquile Island, experiencing diverse cultures and spectacular lake scenery.',
    category: 'lake-titicaca',
    destination: 'Lake Titicaca - Uros & Taquile',
    duration: 'Full Day (9 hours)',
    price: 35,
    featured: true,
    reviews: 18,
    rating: 4.9,
    image: '/images/tours/uros-island-full-day-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Visit both Uros and Taquile Islands',
      'Traditional lunch on Taquile',
      'Experience authentic island cultures',
      'Spectacular panoramic lake views',
      'Textile demonstrations'
    ],
    includes: [
      'Round-trip boat transportation',
      'Professional bilingual guide',
      'Traditional lunch on Taquile',
      'All entrance fees',
      'Hotel pickup and drop-off'
    ],
    notIncludes: [
      'Optional reed boat ride on Uros',
      'Personal expenses',
      'Drinks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Uros and Taquile Islands Discovery',
        description: 'Full day exploring two distinct island communities on Lake Titicaca',
        activities: [
          '7:00 AM - Hotel pickup',
          '7:30 AM - Boat departure',
          '8:00 AM - Uros Islands visit',
          '9:30 AM - Continue to Taquile',
          '11:30 AM - Arrival and island exploration',
          '1:00 PM - Traditional lunch',
          '2:30 PM - Return boat journey',
          '5:00 PM - Arrival in Puno'
        ]
      }
    ],
    importantInfo: [
      'Wear comfortable walking shoes',
      'Bring layers - temperature varies',
      'Taquile has 530+ steps to climb',
      'Lunch is simple but authentic'
    ],
    metaDescription: 'Full day Lake Titicaca tour visiting Uros Floating Islands and Taquile Island. Experience authentic Andean culture, traditional lunch, and stunning lake views. Book now!',
    keywords: ['Lake Titicaca full day', 'Taquile Island', 'Uros Islands tour', 'Peru lake tours', 'Puno day trips']
  },
  {
    id: '3',
    slug: 'lake-titicaca-peru-uros-amantani-island-and-taquile-island',
    title: 'Amantani Titicaca Lake Tour - Puno Lake Titicaca 2 Day Tours',
    shortTitle: 'Amantani Homestay 2 Days',
    description: 'Immersive 2-day, 1-night experience with homestay on Amantani Island. The most authentic way to experience Lake Titicaca and connect with local communities.',
    category: 'lake-titicaca',
    destination: 'Lake Titicaca - Uros, Amantani & Taquile',
    duration: '2 Days / 1 Night',
    price: 62,
    featured: true,
    reviews: 31,
    rating: 4.9,
    image: '/images/tours/amantani-2-day-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Authentic homestay experience',
      'Traditional Pachamama ceremony',
      'Sunrise from sacred temples',
      'Visit 3 different islands',
      'Complete cultural immersion'
    ],
    includes: [
      'Round-trip boat transportation',
      'Professional bilingual guide',
      '3 traditional meals',
      'Homestay accommodation',
      'All entrance fees',
      'Hotel pickup and drop-off'
    ],
    notIncludes: [
      'Lunch on Day 1',
      'Dinner drinks',
      'Personal expenses',
      'Optional purchases'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Puno - Uros - Amantani Island',
        description: 'Journey to Amantani with Uros Islands stop',
        activities: [
          '7:30 AM - Hotel pickup and port departure',
          '8:30 AM - Visit Uros Floating Islands',
          '10:00 AM - Continue to Amantani (3 hours)',
          '1:00 PM - Arrival and meet host family',
          '2:00 PM - Lunch with family',
          '3:30 PM - Hike to Pachamama temple',
          '5:30 PM - Sunset viewing',
          '7:00 PM - Traditional dinner',
          '8:30 PM - Optional cultural evening'
        ]
      },
      {
        day: 2,
        title: 'Amantani - Taquile - Puno',
        description: 'Morning on Amantani, visit Taquile, return to Puno',
        activities: [
          '7:00 AM - Breakfast with family',
          '8:00 AM - Farewell and boat to Taquile',
          '10:00 AM - Taquile Island arrival and tour',
          '12:00 PM - Lunch on Taquile',
          '2:00 PM - Return journey to Puno',
          '5:00 PM - Arrival and hotel drop-off'
        ]
      }
    ],
    importantInfo: [
      'Homestay is basic but authentic',
      'No electricity or hot water',
      'Bring warm sleeping clothes',
      'Flashlight/headlamp essential',
      'Respectful behavior expected',
      'Small gifts for host appreciated'
    ],
    metaDescription: 'Experience authentic Lake Titicaca with 2-day homestay on Amantani Island. Visit Uros, Amantani & Taquile with local family accommodation. Genuine cultural immersion!',
    keywords: ['Amantani homestay', 'Lake Titicaca 2 days', 'Amantani Island tour', 'Puno overnight tour', 'authentic Peru experience']
  },
  {
    id: '4',
    slug: 'sillustani-peru-half-day-tour',
    title: 'Sillustani Peru Half Day Tour',
    shortTitle: 'Sillustani Funeral Towers',
    description: 'Explore the mysterious pre-Incan funeral towers of Sillustani, perched dramatically above Lake Umayo with stunning altiplano landscapes.',
    category: 'lake-titicaca',
    destination: 'Sillustani Archaeological Site',
    duration: 'Half Day (4 hours)',
    price: 22,
    featured: false,
    reviews: 28,
    rating: 4.7,
    image: '/images/tours/sillustani-half-day-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Pre-Incan Colla civilization burial towers',
      'Lake Umayo scenic setting',
      'Archaeological site exploration',
      'Altiplano landscapes',
      'Historical insights'
    ],
    includes: [
      'Round-trip transportation',
      'Professional guide',
      'Entrance fees',
      'Hotel pickup and drop-off'
    ],
    notIncludes: [
      'Food and drinks',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Sillustani Archaeological Tour',
        description: 'Afternoon exploration of ancient burial towers',
        activities: [
          '2:00 PM - Hotel pickup',
          '2:45 PM - Arrive at Sillustani',
          '3:00 PM - Guided archaeological tour',
          '4:30 PM - Free time for photos',
          '5:00 PM - Return to Puno',
          '5:45 PM - Hotel drop-off'
        ]
      }
    ],
    importantInfo: [
      'Afternoon tour available',
      'Can be cold and windy',
      'Good walking shoes recommended',
      'Great for photography'
    ],
    metaDescription: 'Visit Sillustani funeral towers on this half-day tour from Puno. Explore pre-Incan Colla chullpas overlooking Lake Umayo. Perfect afternoon excursion!',
    keywords: ['Sillustani tour', 'funeral towers Peru', 'Puno archaeological tours', 'pre-Incan sites', 'Lake Umayo']
  },
  {
    id: '5',
    slug: 'uyuni-salt-flats-bolivia-salar-de-uyuni-tour',
    title: 'Uyuni Salt Flats Tour - Salar de Uyuni Bolivia',
    shortTitle: 'Uyuni Salt Flats',
    description: 'Cross-border adventure to Bolivia\'s stunning Uyuni Salt Flats, the world\'s largest salt flat and one of the most surreal landscapes on Earth.',
    category: 'bolivia',
    destination: 'Uyuni Salt Flats, Bolivia',
    duration: 'Full Day',
    price: 85,
    featured: true,
    reviews: 9,
    rating: 4.8,
    image: '/images/tours/salar-uyuni-full-day-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Uyuni Salt Flats mirror effect',
      'Train cemetery visit',
      'Colchani salt processing',
      'Perspective photography',
      'Cross-border experience'
    ],
    includes: [
      'Border crossing assistance',
      'Transportation in Bolivia',
      'Lunch included',
      'Entrance fees',
      'Professional guide'
    ],
    notIncludes: [
      'Bolivia visa (if required)',
      'Extra drinks',
      'Personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Puno to Uyuni Salt Flats',
        description: 'Full day cross-border tour to Bolivia\'s natural wonder',
        activities: [
          '6:00 AM - Hotel pickup in Puno',
          '6:30 AM - Journey to Bolivia border',
          '8:30 AM - Border crossing',
          '11:00 AM - Arrive in Uyuni',
          '11:30 AM - Salt flats tour begins',
          '1:00 PM - Lunch break',
          '2:00 PM - Continue exploration',
          '4:00 PM - Return journey',
          '8:00 PM - Arrive back in Puno'
        ]
      }
    ],
    importantInfo: [
      'Passport required for border crossing',
      'Check visa requirements for Bolivia',
      'Very long day (14+ hours)',
      'Wear sunglasses - intense reflection',
      'Bring sun protection'
    ],
    metaDescription: 'Uyuni Salt Flats day tour from Puno, Peru. Cross into Bolivia to experience the world\'s largest salt flat. Mirror effect, train cemetery, unforgettable landscapes!',
    keywords: ['Uyuni Salt Flats', 'Salar de Uyuni tour', 'Bolivia from Peru', 'salt flats tour', 'Puno to Uyuni']
  },
  {
    id: '6',
    slug: 'route-of-the-sun-cusco-puno-sun-route-cusco',
    title: 'Route of the Sun Cusco Puno - Sun Route Cusco',
    shortTitle: 'Sun Route Scenic',
    description: 'Spectacular scenic journey between Cusco and Puno, stopping at major archaeological sites including Raqchi, Andahuaylillas, and La Raya Pass.',
    category: 'transfers',
    destination: 'Cusco to Puno (or reverse)',
    duration: '10 hours with stops',
    price: 55,
    featured: true,
    reviews: 24,
    rating: 4.8,
    image: '/images/tours/route-of-the-sun-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Andahuaylillas Sistine Chapel',
      'Raqchi Temple of Wiracocha',
      'La Raya Pass (4,335m)',
      'Pucara Museum',
      'Buffet lunch included'
    ],
    includes: [
      'Tourist bus transportation',
      'Bilingual guide',
      'Buffet lunch',
      'All entrance fees',
      'Hotel pickup'
    ],
    notIncludes: [
      'Hotel drop-off (bus station arrival)',
      'Tips',
      'Extra drinks'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cusco to Puno via Sun Route',
        description: 'Scenic journey with cultural and archaeological stops',
        activities: [
          '6:30 AM - Hotel pickup in Cusco',
          '7:00 AM - Departure from Cusco',
          '8:30 AM - Andahuaylillas Chapel',
          '10:00 AM - Raqchi archaeological site',
          '12:00 PM - La Raya Pass stop',
          '1:00 PM - Buffet lunch in Sicuani',
          '2:30 PM - Pucara Museum',
          '5:00 PM - Arrival in Puno'
        ]
      }
    ],
    importantInfo: [
      'Available daily in both directions',
      'Drop-off at bus station, not hotel',
      'Taxi to hotel approximately $2',
      'Bring warm clothes for high altitude stops',
      'Camera essential'
    ],
    metaDescription: 'Sun Route from Cusco to Puno - scenic tourist bus with stops at Andahuaylillas, Raqchi, La Raya Pass. Cultural journey through the Andes!',
    keywords: ['Sun Route Peru', 'Cusco to Puno', 'Route of the Sun', 'Peru tourist bus', 'Andahuaylillas', 'Raqchi']
  },
  {
    id: '7',
    slug: 'cusco-to-puno-bus-transfer-direct-and-overnight',
    title: 'Cusco to Puno Bus Transfer (Direct and Overnight)',
    shortTitle: 'Direct Bus Transfer',
    description: 'Comfortable and economical direct bus service between Cusco and Puno, with both daytime and overnight options available.',
    category: 'transfers',
    destination: 'Cusco ↔ Puno',
    duration: '6-7 hours',
    price: 28,
    featured: false,
    reviews: 15,
    rating: 4.6,
    image: '/images/tours/cusco-to-puno-cusco-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Direct comfortable service',
      'Reclining seats',
      'Onboard bathroom',
      'Day and night options',
      'Reliable schedules'
    ],
    includes: [
      'Bus ticket',
      'Seat assignment',
      'Basic amenities'
    ],
    notIncludes: [
      'Hotel pickup',
      'Meals',
      'Hotel drop-off'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Direct Bus Journey',
        description: 'Comfortable direct transfer',
        activities: [
          'Multiple departure times available',
          'Day buses: 7:00 AM, 2:00 PM',
          'Night buses: 9:00 PM, 10:00 PM',
          'Direct route without stops',
          'Arrival at Puno bus terminal'
        ]
      }
    ],
    importantInfo: [
      'Arrive at terminal 30 min before departure',
      'Night buses arrive early morning',
      'Taxi from terminal to hotel needed',
      'Bring warm clothes for night travel'
    ],
    metaDescription: 'Direct bus from Cusco to Puno. Comfortable day and overnight options. Reliable, economical ground transportation between Peru\'s key destinations.',
    keywords: ['Cusco Puno bus', 'Peru bus transfer', 'Cusco to Puno transport', 'overnight bus Peru']
  },
  {
    id: '8',
    slug: 'airport-transfer-juliaca-to-puno',
    title: 'Airport Transfer Juliaca to Puno',
    shortTitle: 'Juliaca Airport Transfer',
    description: 'Reliable private transfer service between Juliaca Airport and Puno hotels. Safe, comfortable, and stress-free arrival or departure.',
    category: 'transfers',
    destination: 'Juliaca Airport ↔ Puno',
    duration: '1 hour',
    price: 45,
    featured: false,
    reviews: 8,
    rating: 4.9,
    image: '/images/tours/ariport-transfer-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Private transfer service',
      'Flight monitoring',
      'Professional driver',
      'Door-to-door service',
      'Luggage assistance'
    ],
    includes: [
      'Private vehicle',
      'Professional driver',
      'Airport/hotel pickup',
      'Luggage handling',
      'All tolls and fees'
    ],
    notIncludes: [
      'Tips for driver',
      'Personal expenses'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Airport Transfer Service',
        description: 'Comfortable private transfer',
        activities: [
          'Driver meets you at arrivals',
          'Assistance with luggage',
          '45-60 minute journey',
          'Drop-off at hotel entrance',
          'OR: Hotel pickup for departure'
        ]
      }
    ],
    importantInfo: [
      'Provide flight details when booking',
      'Driver monitors flight delays',
      'Service available 24/7',
      'Maximum 3 passengers per vehicle',
      'Extra luggage? Inform in advance'
    ],
    metaDescription: 'Private airport transfer from Juliaca to Puno. Reliable, comfortable door-to-door service. Professional drivers, flight monitoring, stress-free arrival!',
    keywords: ['Juliaca airport transfer', 'Puno airport service', 'Juliaca to Puno transport', 'Peru airport transfer']
  },
  {
    id: '9',
    slug: 'lake-titicaca-sillustani-package-tour',
    title: 'Lake Titicaca and Sillustani Tour (2 Days)',
    shortTitle: 'Titicaca & Sillustani Package',
    description: 'Perfect 2-day package combining the best of Lake Titicaca islands with the mysterious Sillustani archaeological site.',
    category: 'packages',
    destination: 'Lake Titicaca & Sillustani',
    duration: '2 Days',
    price: 95,
    featured: true,
    reviews: 14,
    rating: 4.8,
    image: '/images/tours/titicaca-sillustani-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Complete Lake Titicaca experience',
      'Uros, Amantani & Taquile islands',
      'Sillustani funeral towers',
      'Homestay on Amantani',
      'Best value combination'
    ],
    includes: [
      'All transportation',
      '1 night homestay',
      '3 meals included',
      'All entrance fees',
      'Professional guides',
      'Hotel pickup and drop-off'
    ],
    notIncludes: [
      'Lunch Day 1',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Uros & Amantani Islands',
        description: 'Full day on the lake with homestay',
        activities: [
          'Morning: Hotel pickup and Uros visit',
          'Midday: Journey to Amantani',
          'Afternoon: Meet host family, lunch',
          'Evening: Temple hike, dinner with family'
        ]
      },
      {
        day: 2,
        title: 'Taquile & Sillustani',
        description: 'Island visit and archaeological site',
        activities: [
          'Morning: Breakfast and Taquile visit',
          'Midday: Lunch and return to Puno',
          'Afternoon: Sillustani archaeological tour',
          'Evening: Hotel drop-off'
        ]
      }
    ],
    importantInfo: [
      'Excellent value package',
      'Basic homestay accommodation',
      'Moderate physical activity',
      'Perfect for limited time'
    ],
    metaDescription: '2-day Lake Titicaca and Sillustani package tour. Visit Uros, Amantani, Taquile islands with homestay, plus Sillustani archaeological site. Best value!',
    keywords: ['Lake Titicaca package', 'Sillustani tour', 'Puno 2 day tour', 'Peru tour package', 'Titicaca homestay']
  },
  {
    id: '10',
    slug: 'lake-titicaca-tour-from-cusco-2-days',
    title: 'Lake Titicaca Tour from Cusco (2 Days)',
    shortTitle: 'Titicaca from Cusco 2D',
    description: 'Complete Lake Titicaca experience departing from Cusco, including scenic Sun Route, island tours, and return transfer. Perfect for travelers based in Cusco.',
    category: 'packages',
    destination: 'Cusco to Lake Titicaca',
    duration: '2 Days',
    price: 145,
    featured: true,
    reviews: 11,
    rating: 4.7,
    image: '/images/tours/titicaca-from-cusco-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Sun Route scenic journey',
      'Complete Lake Titicaca experience',
      'Uros & Taquile islands',
      'No overnight in Puno needed',
      'Perfect for Cusco-based travelers'
    ],
    includes: [
      'Sun Route tourist bus',
      'Lake Titicaca full day tour',
      'All meals mentioned',
      'Return bus to Cusco',
      'All entrance fees',
      'Professional guides'
    ],
    notIncludes: [
      'Hotels (can be arranged)',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cusco to Puno via Sun Route',
        description: 'Scenic journey with cultural stops',
        activities: [
          'Morning: Cusco hotel pickup',
          'Day: Sun Route with multiple stops',
          'Evening: Arrival in Puno, free time'
        ]
      },
      {
        day: 2,
        title: 'Lake Titicaca Tour & Return',
        description: 'Full day lake experience and return',
        activities: [
          'Morning: Uros Islands visit',
          'Midday: Taquile Island with lunch',
          'Afternoon: Return to Puno',
          'Evening: Bus back to Cusco (overnight)'
        ]
      }
    ],
    importantInfo: [
      'Return bus is overnight (arrives early AM)',
      'Can upgrade to Sun Route return',
      'Basic Puno hotel included (optional)',
      'Alternative: Stay longer in Puno'
    ],
    metaDescription: '2-day Lake Titicaca tour from Cusco including Sun Route, island visits, and return transfer. Perfect package for Cusco-based travelers. Book your adventure!',
    keywords: ['Lake Titicaca from Cusco', 'Cusco to Titicaca tour', '2 day Peru tour', 'Sun Route package', 'Cusco Puno tour']
  }
];

export function getTourBySlug(slug: string): Tour | undefined {
  return tours.find(tour => tour.slug === slug);
}

export function getToursByCategory(category: Tour['category']): Tour[] {
  return tours.filter(tour => tour.category === category);
}

export function getFeaturedTours(): Tour[] {
  return tours.filter(tour => tour.featured);
}

export function getAllTourSlugs(): string[] {
  return tours.map(tour => tour.slug);
}

