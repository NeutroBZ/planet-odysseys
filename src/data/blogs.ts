export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  featured: boolean;
  metaDescription: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'tours-to-lake-titicaca-peru-travel-guide-experiences',
    title: 'Tours to Lake Titicaca Peru — Travel Guide & Experiences',
    excerpt: 'Discover everything you need to know about Lake Titicaca tours from Puno. From the Uros Floating Islands to Taquile and Amantani, explore the best ways to experience this magical lake.',
    author: 'Sreeram (Ram)',
    date: 'January 29, 2026',
    readTime: '8 min',
    category: 'Travel Guides',
    image: '/images/blog/lake-titicaca-guide.jpg',
    featured: true,
    metaDescription: 'Complete guide to Lake Titicaca tours. Learn about Uros, Taquile, Amantani islands, best tour options, when to visit, and practical tips for your Lake Titicaca adventure.',
    keywords: ['Lake Titicaca tours', 'Puno travel guide', 'Uros Islands', 'Peru travel', 'Lake Titicaca guide']
  },
  {
    id: '2',
    slug: 'exploring-the-wonders-of-peru-lake-titicaca',
    title: 'Exploring the Wonders of Peru Lake Titicaca',
    excerpt: 'Dive deep into the natural and cultural wonders of Lake Titicaca. Learn about its unique ecosystem, indigenous communities, and why it\'s a must-visit destination in Peru.',
    author: 'Sreeram (Ram)',
    date: 'January 21, 2026',
    readTime: '7 min',
    category: 'Destinations',
    image: '/images/blog/lake-titicaca-wonders.jpg',
    featured: true,
    metaDescription: 'Explore Lake Titicaca\'s wonders - from floating islands to ancient cultures. Discover what makes Peru\'s highest lake so special and plan your perfect visit.',
    keywords: ['Lake Titicaca Peru', 'Peru destinations', 'Lake Titicaca culture', 'Andean lake']
  },
  {
    id: '3',
    slug: 'raqchi-archaeological-site-unveil-perus-ancient-ruins',
    title: 'Raqchi Archaeological Site: Unveil Peru\'s Ancient Ruins',
    excerpt: 'Journey to Raqchi and discover the magnificent Temple of Wiracocha. Learn about this impressive Incan archaeological site along the Sun Route between Cusco and Puno.',
    author: 'Sreeram (Ram)',
    date: 'January 19, 2026',
    readTime: '6 min',
    category: 'Archaeological Sites',
    image: '/images/blog/raqchi.jpg',
    featured: false,
    metaDescription: 'Explore Raqchi archaeological site and the Temple of Wiracocha. Complete guide to this impressive Incan ruin on the Sun Route from Cusco to Puno.',
    keywords: ['Raqchi Peru', 'Temple of Wiracocha', 'Sun Route stops', 'Incan ruins Peru', 'Cusco Puno route']
  },
  {
    id: '4',
    slug: 'discover-andahuaylillas-chapel',
    title: 'Discover Andahuaylillas Chapel: Peru\'s Artistic Treasure',
    excerpt: 'Visit the "Sistine Chapel of the Americas" in Andahuaylillas. Marvel at the stunning baroque art and learn about this hidden gem on the way to Lake Titicaca.',
    author: 'Sreeram (Ram)',
    date: 'January 17, 2026',
    readTime: '5 min',
    category: 'Cultural Sites',
    image: '/images/blog/andahuaylillas.jpg',
    featured: false,
    metaDescription: 'Andahuaylillas Chapel guide - Peru\'s "Sistine Chapel of the Americas". Discover stunning baroque art and colonial architecture on the Sun Route.',
    keywords: ['Andahuaylillas Chapel', 'Sistine Chapel Americas', 'Peru colonial churches', 'Sun Route Peru']
  },
  {
    id: '5',
    slug: 'how-can-i-travel-from-cusco-or-la-paz-to-lake-titicaca',
    title: 'How can I travel from Cusco or La Paz to Lake Titicaca',
    excerpt: 'Complete transportation guide for reaching Lake Titicaca from Cusco or La Paz. Compare bus options, tour buses, and travel times to plan your journey.',
    author: 'Sreeram (Ram)',
    date: 'January 15, 2026',
    readTime: '7 min',
    category: 'Transportation',
    image: '/images/blog/cusco-puno-travel.jpg',
    featured: false,
    metaDescription: 'How to get to Lake Titicaca from Cusco or La Paz. Compare bus options, Sun Route tours, and travel times. Complete transportation guide.',
    keywords: ['Cusco to Puno', 'La Paz to Puno', 'Lake Titicaca transport', 'Peru bus travel']
  },
  {
    id: '6',
    slug: 'top-lake-titicaca-tour-companies-for-unforgettable-trips',
    title: 'Which tour companies offer the most popular Lake Titicaca excursions',
    excerpt: 'Find the best Lake Titicaca tour operators. Learn what to look for in a quality tour company and why choosing local makes a difference.',
    author: 'Sreeram (Ram)',
    date: 'January 13, 2026',
    readTime: '6 min',
    category: 'Tour Tips',
    image: '/images/blog/tour-companies.jpg',
    featured: false,
    metaDescription: 'Best Lake Titicaca tour companies guide. Find reliable operators, what to expect, and tips for choosing the right tour for your Lake Titicaca adventure.',
    keywords: ['Lake Titicaca tours', 'Puno tour companies', 'Peru tour operators', 'Lake Titicaca operators']
  },
  {
    id: '7',
    slug: 'can-you-recommend-a-tour-to-visit-sillustani',
    title: 'Can you recommend a tour to visit Sillustani',
    excerpt: 'Explore Sillustani\'s mysterious funeral towers. Learn about the pre-Incan Colla culture and plan your visit to this archaeological wonder near Puno.',
    author: 'Sreeram (Ram)',
    date: 'January 11, 2026',
    readTime: '5 min',
    category: 'Archaeological Sites',
    image: '/images/blog/sillustani-towers.jpg',
    featured: false,
    metaDescription: 'Sillustani tour guide - explore pre-Incan funeral towers near Puno. Learn about Colla chullpas, tour options, and what makes this site special.',
    keywords: ['Sillustani tour', 'Sillustani Peru', 'funeral towers Puno', 'pre-Incan Peru', 'chullpas']
  },
  {
    id: '8',
    slug: 'lago-titicaca-hotels-top-stays-travel-tips',
    title: 'Lago Titicaca Hotels: Top Stays & Travel Tips',
    excerpt: 'Find the best hotels around Lake Titicaca. From budget hostels to luxury lodges, discover where to stay for the perfect Lake Titicaca experience.',
    author: 'Sreeram (Ram)',
    date: 'January 9, 2026',
    readTime: '7 min',
    category: 'Accommodation',
    image: '/images/blog/titicaca-hotels.jpg',
    featured: false,
    metaDescription: 'Lake Titicaca hotels guide - find the best places to stay in Puno and around the lake. Budget to luxury options with tips for choosing the right accommodation.',
    keywords: ['Lake Titicaca hotels', 'Puno hotels', 'Lake Titicaca accommodation', 'where to stay Puno']
  },
  {
    id: '9',
    slug: 'cusco-to-puno-bus-travel-2',
    title: 'Cusco to Puno Bus Travel',
    excerpt: 'Everything you need to know about traveling by bus from Cusco to Puno. Compare direct buses vs. Sun Route, prices, and book the right option for you.',
    author: 'Sreeram (Ram)',
    date: 'January 7, 2026',
    readTime: '6 min',
    category: 'Transportation',
    image: '/images/blog/cusco-puno-bus.jpg',
    featured: false,
    metaDescription: 'Cusco to Puno bus guide - compare direct buses and Sun Route options. Prices, schedules, and tips for comfortable overland travel in Peru.',
    keywords: ['Cusco Puno bus', 'Peru bus travel', 'Sun Route Peru', 'Cusco to Puno transport']
  }
];

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getFeaturedBlogs(): BlogPost[] {
  return blogPosts.filter(post => post.featured).slice(0, 6);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

export function getBlogsByCategory(category: string): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}
