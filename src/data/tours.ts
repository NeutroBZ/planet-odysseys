export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  overview?: string;
  whatToExpect?: {
    description: string;
    quickFacts: string[];
  };
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
  detailedItinerary?: string;
  wetravel?: {
    uid: string;
    uuid: string;
  };
}

export const tours: Tour[] = [
  {
    id: '1',
    slug: 'uros-floating-islands-of-lake-titicaca-tour',
    title: 'Uros Floating Islands of Lake Titicaca Tour',
    shortTitle: 'Uros Islands Half Day',
    description: 'Experience the fascinating Uros Floating Islands, where indigenous communities live on islands made entirely of totora reeds. This half-day tour offers an intimate glimpse into a unique way of life on the world\'s highest navigable lake.',
    overview: `
      <p><strong>Lake Titicaca Floating Islands Tour Details</strong></p>
      <p>Join our half-day Uros Floating Islands tour from Puno and step onto the unique floating reed islands built by the Uros people on Lake Titicaca.</p>
      
      <p>Welcome to the Uros Floating Islands of Lake Titicaca! On this half day tour, will explore these unique islands. They are located about 30 minutes from Puno, on the Peruvian side of the lake.</p>
      
      <p>As we approach, you will notice the islands shimmering on the lake's surface. These aren't ordinary islands. The Uros people make them entirely from Totora reeds.</p>
      
      <p>During our visit, we will see the ingenious utilization of these reeds firsthand. They are the life source of the Uros; they form their homes, their boats, and even the islands they live on.</p>
      
      <p>Our journey will take us to the heart of the Uros islands. We will see the central radio station, a lifeline to the mainland. Don't be surprised to see solar panels nestled amongst the reeds. The Uros people embrace tradition and innovation, as you will see.</p>
      
      <p><strong>Lake Titicaca Boat Tours to Uros Floating Islands:</strong><br>
      The Uros Floating Islands nestles on Lake Titicaca, the highest navigable lake in the world. Lake Titicaca sits at an altitude of around 3810 meters or 12,500 feet above sea level. It straddles the border of Peru and Bolivia. The tour will also offer breathtaking views of the majestic Andean peaks.</p>
      
      <p>At the end of the day, we will leave with a better understanding of the Uros people's way of life. We will cherish the memories of visiting the floating islands.</p>
      
      <p>We will also have the opportunity to navigate the lake on reed boats. This will provide us with a closer look at how these islands float. The tour will give you an in-depth experience of the unique Uros lifestyle on the Floating Islands of Lake Titicaca.</p>
      
      <p>Prepare for a voyage of discovery and marvel at one of the most unique places in Peru. It's a journey that will make you appreciate the brilliant ingenuity of the Uros people. You will also get a peek at the stark beauty of their surroundings.</p>
      
      <p>Get ready to thrill at the sight of the Uros Floating Islands of Lake Titicaca!</p>
      
      <p><em>Keen on exploring more of Peru's Lake Titicaca Islands? Join us on a <a href="/tour/full-day-peru-lake-titicaca-tours">Full Day Tour to Uros and Taquile Island</a>. Get a more insightful experience on our <a href="/tour/lake-titicaca-peru-uros-amantani-island-and-taquile-island">Two Day Locally Guided Tour to Uros, Amantani Island, and Taquile</a>.</em></p>
    `,
    whatToExpect: {
      description: `
        <p>The Uros Floating Islands tour promises to be a unique adventure. We will start our tour journeying to the reed islands on the expansive Lake Titicaca. As the islands come into view, you will see that they are unlike anything you have ever seen before.</p>
        
        <p>They are floating masses, handcrafted from totora reeds by the Uros people. You will get a first-hand experience of the craftsmanship that goes into maintaining these floating islands.</p>
        
        <p>Our exploration won't stop at simply looking. We will step onto the reed islands themselves. The soft reeds underfoot will serve as a constant reminder of the unique nature of this place.</p>
        
        <p>We will meet the Uros people, interact with them, and learn about their way of life. We will see the ingenious ways they use the totora reeds, from building their homes to crafting their boats. This tour of the Uros Islands on Lake Titicaca will not only be an exploration of a unique location. It is also a deep dive into a unique culture.</p>
      `,
      quickFacts: [
        'Boat ride: ~25–30 min from Puno port to the islands',
        'Local interaction: Meet Uros families and see their daily life',
        'Totora demonstration: How reeds are used for homes and boats',
        'Photo stops: Great panoramic views and cultural moments',
        'Optional boat ride on traditional totora boat (not included)'
      ]
    },
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
          `
          <p>Our Half Day Uros Floating Islands Tour from Puno will commence as we collect you from your hotel in Puno. From there, we will transport you to the boat pier, marking the start of your adventure. Next, we will set off on our motorized boat, bound for the Uros Floating Islands. It is only 25 minutes away from Puno.</p>
          
          <p>As we approach the islands, local residents will greet us warmly. Once we dock, our local expert will lead us on an enlightening tour of the island. You will hear the captivating stories of how these unique islands came to be.</p>
          
          <p>Following this, the head of the island will show you how they construct these floating structures, providing a memorable hands-on experience. Then, a local resident will invite you to visit their home. If you wish, don traditional attire for a memorable photo opportunity.</p>
          
          <p>Once you've explored to your heart's content, you will have the choice to embark on a traditional reed boat ride. Please remember, this is an additional cost, not covered in the initial tour fee. Should you opt for this unique journey, locals will guide you to the main island. If you decide against it, our motorized boat will carry you to the principal floating island of Uros.</p>
          
          <p>On the main island, you will find some free time to roam and discover the site. Perhaps, you can even grab a bite to eat at the local restaurant. Finally, as our visit to the Uros Floating Islands concludes, we will board our motorboat for the return journey to Puno.</p>
          
          <p>Upon reaching the pier, our representative will meet you. We will arrange your transfer back to your hotel in the heart of Puno.</p>
          
          <h4>Tour Statistics:</h4>
          <ul>
            <li><strong>Distance Covered:</strong> This tour covers a total round trip of about 15 kilometers or approximately 9.3 miles.</li>
            <li><strong>Highest Altitude:</strong> Lake Titicaca's surface is the highest point of the tour at about 3,810 meters or 12,500 feet above sea level.</li>
            <li><strong>Lowest Altitude:</strong> The surface of the lake, at the same 3,810 meters or 12,500 feet, is also the lowest point.</li>
            <li><strong>Level of Difficulty:</strong> With most activities being low impact, this tour is generally of easy difficulty.</li>
            <li><strong>Duration:</strong> Approximately 4 hours</li>
          </ul>
          `
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
    keywords: ['Uros Islands', 'Lake Titicaca tour', 'Puno tours', 'floating islands Peru', 'Titicaca day trip'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '2',
    slug: 'full-day-peru-lake-titicaca-tours',
    title: 'Full Day Peru Lake Titicaca Tours - Uros & Taquile',
    shortTitle: 'Uros & Taquile Full Day',
    description: 'Comprehensive full-day tour exploring both Uros Floating Islands and Taquile Island, experiencing diverse cultures and spectacular lake scenery.',
    overview: `
    <p><strong>Peru Lake Titicaca Full Day Tour</strong></p>

    <p>Immerse yourself in a captivating journey with our Peru Lake Titicaca Full Day Tour in Peru. Lake Titicaca, the world’s highest navigable lake, will be your playground. At an astonishing 3,812 meters (12,500 feet) above sea level, it spans the border of Peru and Bolivia. You will set sail from the Peruvian side, where the vast bodies of water stretch out towards the horizon.</p>

    <p>As part of this Peru Lake Titicaca Tours full day, we will visit the floating islands. They are an astonishing feat of pre-Columbian ingenuity. You’ll meet the Uros people, natives who have made these islands their home for generations.</p>

    <p>The experience is a tribute to their way of life, showing how people live in harmony with nature. Lake Titicaca Tour, the largest lake in South America, isn’t just a body of water. It’s a living, breathing part of the landscape.</p>

    <p>Our adventure doesn’t stop there. We will make our way to Taquile Island, a UNESCO-recognized site. Here you’ll witness first-hand the mastery of the local textile art.</p>

    <p>The journey to this part of the lake promises to be a sensory delight. You’ll encounter stunning vistas of the lake set against the backdrop of the Andean peaks.</p>

    <p>During the rainy seasons, the lake’s surface temperature drops, adding to the ethereal beauty of this place. Embrace this memorable Lake Titicaca Tour, designed to stir the explorer within you.</p>

    <p><em>Read more about Taquile and its Textile art in our detailed guide about the island’s traditions and weaving techniques.</em></p>
  `,
    whatToExpect: {
    description: `
      <p>On the Peru Lake Titicaca Full Day Tour, you’ll experience the marvel of Peru Lake Titicaca. This is not just any lake, but the highest navigable lake in the world. You will feel the grandeur of its crystal-clear waters beneath the vast sky.</p>

      <p>This aquatic marvel, set high in the Andes, boasts an elevation of 3,812 meters (12,500 feet). As you navigate its waters, you’ll marvel at its sheer size. Additionally, the way the lake blends with the sky at the horizon will captivate you.</p>

      <p>You’ll visit the Uros, floating islands unique to Titicaca Peru. You will discover an astonishing culture as you meet the Uros people, who call these man-made islands home. They will welcome you with open arms and share the stories of their ancient civilization.</p>

      <p>Their way of life, living in close harmony with the lake, will fascinate you. We will then continue to Taquile Island. It is a place where time seems to stand still. Here you’ll encounter weavers producing intricate textiles, a cornerstone of their culture.</p>

      <p>This full-day tour of Lake Titicaca offers an unparalleled opportunity. You’ll be able to delve into the rich tapestry of life on the world’s highest navigable lake.</p>
      <h4>Full-Day Peru Lake Titicaca Tour Highlights:</h4>
    `,
    quickFacts: [
      'Experience Lake Titicaca at 3,812 meters (12,500 feet) above sea level',
      'Explore the unique Uros Floating Islands built entirely from totora reeds.',
      'Immerse yourself in the rich cultural heritage of the Uros people.',
      'Visit Taquile Island, where traditions remain beautifully preserved.',
      'Enjoy stunning panoramas of Lake Titicaca against the Andean peaks.',
      'Encounter skillful weavers producing intricate and symbolic textiles.'
      ]
    },
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
      title: 'Peru Lake Titicaca Tours Full Day - Uros and Taquile Island',
      description: 'Full-day cultural exploration of Lake Titicaca’s most iconic islands',
      activities: [
        `
        <p>In the early morning, we will start your Peru Lake Titicaca full day tour. Around 7:00–7:15 AM, we will pick you up from your Puno hotel. A brief ride takes us to the port where your boat for the day awaits.</p>

        <p>The first stop on our journey will be the Uros Floating Islands. These fascinating islands, constructed entirely from totora reeds, offer a unique insight into the Uros people’s way of life. Here, you will have the option to take a ride on a traditional totora reed boat operated by local families (additional cost paid directly to them).</p>

        <p>From the Uros Islands, we will sail towards Taquile Island. The journey takes approximately two hours (around 30 kilometers or 18.64 miles). This serene island is famous for its vibrant textiles and the strong cultural identity of its inhabitants.</p>

        <p>On Taquile, you will hike up to the village located at 3,950 meters (12,959 feet) above sea level. The hike is moderately challenging but rewarding, offering spectacular views of Lake Titicaca and the surrounding Andes.</p>

        <p>After enjoying a traditional local lunch, we will descend toward the main port and board our boat for the return journey to Puno. We will drop you back at your hotel at approximately 5:00 PM.</p>

        <h4>Tour Statistics:</h4>
        <ul>
          <li><strong>Distance Covered:</strong> Approximately 60 kilometers (37.28 miles)</li>
          <li><strong>Highest Altitude:</strong> Taquile Village – 3,950 meters (12,959 feet)</li>
          <li><strong>Lowest Altitude:</strong> Puno City – 3,830 meters (12,562 feet)</li>
          <li><strong>Difficulty Level:</strong> Moderate (due to hiking on Taquile Island)</li>
          <li><strong>Duration:</strong> Approximately 10 hours</li>
        </ul>
        `
      ]
    }
  ],
    importantInfo: [
      'Wear comfortable walking shoes',
      'Bring layers - temperature varies',
      'Taquile has 530+ steps to climb',
      'Lunch is simple but authentic',
      'Sun protection essential at high altitude'
    ],
    metaDescription: 'Full day Lake Titicaca tour visiting Uros Floating Islands and Taquile Island. Experience authentic Andean culture, traditional lunch, and stunning lake views. Book now!',
    keywords: ['Lake Titicaca full day', 'Taquile Island', 'Uros Islands tour', 'Peru lake tours', 'Puno day trips'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '3',
    slug: 'lake-titicaca-peru-uros-amantani-island-and-taquile-island',
    title: 'Amantani Titicaca Lake Tour - Puno Lake Titicaca 2 Day Tours',
    shortTitle: 'Amantani Homestay 2 Days',
    description: 'Immersive 2-day, 1-night experience with homestay on Amantani Island. The most authentic way to experience Lake Titicaca and connect with local communities.',
    overview: `
      <p><strong>Two-Day Lake Titicaca Homestay Experience: Uros, Amantani & Taquile Islands</strong></p>
      <p>For travelers seeking genuine cultural connection, this two-day tour offers the most authentic Lake Titicaca experience possible. Spend a night with a local family on Amantani Island and discover the true heart of the lake's island communities.</p>
      
      <p>Your adventure begins as we depart from Puno harbor, crossing the sparkling waters toward the famous Uros Floating Islands. These remarkable reed islands have been home to the Uros people for centuries, and your visit offers insight into their ingenious way of life.</p>
      
      <p>After exploring Uros, we continue our journey across the lake to Amantani Island. The three-hour boat ride offers spectacular views of the Andean mountain range and the seemingly endless expanse of South America's largest lake.</p>
      
      <p>Upon arrival at Amantani, you'll be welcomed by your host family - a moment that marks the beginning of a truly immersive cultural experience. The island's terraced hillsides and traditional stone architecture create a timeless atmosphere.</p>
      
      <p>After a traditional lunch with your family, we'll hike to the island's sacred temples at the summit. The Pachatata (Father Earth) temple offers breathtaking sunset views over the lake - a moment of profound beauty and tranquility.</p>
      
      <p>Evening brings a delicious home-cooked dinner with your family, followed by the opportunity to experience traditional music and dance. This cultural evening, while optional, offers a wonderful chance to connect with your hosts and fellow travelers.</p>
      
      <p>Day two begins with a beautiful sunrise over the lake. After breakfast with your family, we'll say our goodbyes and continue to Taquile Island. Here, you'll explore terraced hillsides, learn about the famous Taquile textile tradition, and enjoy another traditional lunch before returning to Puno.</p>
      
      <p>This tour isn't just sightseeing - it's a genuine cultural exchange that creates lasting memories and friendships.</p>
    `,
    whatToExpect: {
      description: `
        <p>This two-day homestay experience offers the most authentic glimpse into life on Lake Titicaca. Unlike day tours that provide only a superficial visit, this overnight stay allows you to experience the rhythm of island life firsthand.</p>
        
        <p>Accommodation on Amantani is basic but comfortable and authentic. You'll stay in a family home with simple amenities - don't expect electricity or hot water. Instead, expect genuine hospitality, home-cooked meals, and the opportunity to observe and participate in daily family activities.</p>
        
        <p>The hike to the Pachatata temple at sunset is a highlight. The path climbs steadily through agricultural terraces, offering ever-expanding views of the lake. At the summit, the 360-degree panorama of Lake Titicaca stretching to the horizon is unforgettable.</p>
        
        <p>The optional cultural evening brings the community together. Local musicians play traditional instruments while families and guests dance together. It's informal, joyful, and genuinely heartwarming.</p>
        
        <p>On Taquile, expect more structured exploration. The island's famous textiles (recognized by UNESCO) are on display, and you'll learn about the unique social structure that makes this community special. The walking involves steps and paths, so comfortable shoes are essential.</p>
        
        <p>Throughout both days, your guide facilitates interactions and provides cultural context while allowing authentic moments to unfold naturally. This is cultural tourism at its most meaningful.</p>
      `,
      quickFacts: [
        'Duration: 2 days / 1 night',
        'Accommodation: Basic homestay (no electricity/hot water)',
        'Meals included: 1 breakfast, 2 lunches, 1 dinner',
        'Walking: Moderate, includes sunset hike',
        'Cultural activities: Optional evening music/dance',
        'Group size: Small groups, personalized experience'
      ]
    },
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
        description: 'Journey to Amantani with Uros Islands stop and sunset temple hike',
        activities: [
          '7:30 AM - Hotel pickup from your Puno accommodation',
          '8:00 AM - Boat departure from Puno port',
          '8:30 AM - Arrival at Uros Floating Islands',
          '8:45 AM - Guided tour of Uros Islands',
          '9:45 AM - Depart Uros, continue to Amantani (3-hour journey)',
          '12:45 PM - Arrival at Amantani Island',
          '1:00 PM - Meet your host family and settle in',
          '2:00 PM - Traditional lunch with your family',
          '3:30 PM - Group hike to Pachatata temple',
          '5:30 PM - Sunset viewing from the temple summit',
          '7:00 PM - Return to family home for dinner',
          '8:30 PM - Optional cultural evening with music and dance'
        ]
      },
      {
        day: 2,
        title: 'Amantani - Taquile - Puno',
        description: 'Morning on Amantani, visit Taquile Island, return to Puno',
        activities: [
          '6:30 AM - Optional sunrise viewing',
          '7:00 AM - Breakfast with host family',
          '8:00 AM - Farewell to your Amantani family',
          '8:30 AM - Boat departure to Taquile Island',
          '10:00 AM - Arrival at Taquile Island',
          '10:15 AM - Guided walking tour of Taquile',
          '12:00 PM - Traditional lunch on Taquile',
          '1:30 PM - Free time for exploration',
          '2:00 PM - Board boat for return to Puno',
          '5:00 PM - Arrival in Puno and hotel drop-off'
        ]
      }
    ],
    importantInfo: [
      'Homestay is basic but authentic - no electricity or hot water',
      'Bring warm sleeping clothes (temperatures drop at night)',
      'Flashlight or headlamp essential for evening',
      'Small gifts for your host family (from your home country) are appreciated',
      'Respectful behavior and photography etiquette expected',
      'Moderate fitness required for temple hike'
    ],
    metaDescription: 'Experience authentic Lake Titicaca with 2-day homestay on Amantani Island. Visit Uros, Amantani & Taquile with local family accommodation. Genuine cultural immersion!',
    keywords: ['Amantani homestay', 'Lake Titicaca 2 days', 'Amantani Island tour', 'Puno overnight tour', 'authentic Peru experience'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '4',
    slug: 'sillustani-peru-half-day-tour',
    title: 'Sillustani Peru Half Day Tour',
    shortTitle: 'Sillustani Funeral Towers',
    description: 'Explore the mysterious pre-Incan funeral towers of Sillustani, perched dramatically above Lake Umayo with stunning altiplano landscapes.',
    overview: `
      <p><strong>Sillustani Archaeological Site Tour: Pre-Incan Funeral Towers</strong></p>
      <p>Journey back in time on this half-day tour to Sillustani, one of the most important archaeological sites in the Lake Titicaca region. Here, overlooking the beautiful Lake Umayo, stand the impressive chullpas - ancient funeral towers built by the Colla people.</p>
      
      <p>Your afternoon adventure begins with a scenic drive from Puno through the altiplano landscape. As we ascend onto the high plain, keep your camera ready - the views of the Andean countryside are spectacular, with llamas and alpacas grazing against a backdrop of snow-capped peaks.</p>
      
      <p>Upon arrival at Sillustani, you'll immediately understand why this location was chosen as a sacred burial ground. The peninsula jutting into Lake Umayo creates a setting of haunting beauty - a fitting final resting place for the region's ancient nobility.</p>
      
      <p>Your guide will lead you through the site, explaining the fascinating history of the Colla civilization that predated the Incas. The chullpas themselves are architectural marvels - cylindrical stone towers reaching up to 12 meters in height, some adorned with lizard and serpent carvings that held deep spiritual meaning.</p>
      
      <p>As you walk among these ancient monuments, you'll learn about the complex burial rituals of the Colla people and how the Incas later modified the site. The precision of the stonework rivals that of Cusco's famous constructions.</p>
      
      <p>The location offers unparalleled photographic opportunities. Lake Umayo stretches below, its waters reflecting the altiplano sky, while the towers stand sentinel against the wind. The play of light and shadow across the landscape creates ever-changing vistas.</p>
      
      <p>As the afternoon progresses, we'll begin our return journey to Puno, leaving you with a deeper appreciation for the civilizations that flourished here long before the Inca Empire rose to power.</p>
    `,
    whatToExpect: {
      description: `
        <p>This half-day excursion offers a perfect introduction to the pre-Incan civilizations of the Lake Titicaca region. The drive itself is part of the experience, crossing the altiplano with its sweeping views and traditional communities.</p>
        
        <p>At Sillustani, you'll walk through an open-air archaeological site. The terrain is uneven but manageable for most visitors. Your guide will bring the site to life with stories of the Colla people and the significance of the chullpas.</p>
        
        <p>The weather on the altiplano can change quickly. Even sunny afternoons can bring strong, cold winds, so dressing in layers is essential. The site's exposed location means wind protection is just as important as sun protection.</p>
        
        <p>Photography enthusiasts will find endless opportunities here. The combination of ancient architecture, dramatic skies, and the lake setting creates stunning images, especially in the golden afternoon light.</p>
        
        <p>This tour is typically offered in the afternoon, which provides the best light for photography and a more comfortable temperature than midday. The pace is relaxed, with plenty of time for questions and photos.</p>
      `,
      quickFacts: [
        'Duration: Approximately 4 hours (2:00 PM - 6:00 PM)',
        'Altitude: 3,900m (12,800 ft) at the site',
        'Walking: Moderate, uneven terrain',
        'Weather: Can be cold and windy - dress warmly',
        'Best for: History enthusiasts, photographers'
      ]
    },
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
          '2:00 PM - Hotel pickup from your Puno accommodation',
          '2:45 PM - Arrive at Sillustani archaeological site',
          '3:00 PM - Guided tour of the chullpas and site',
          '4:30 PM - Free time for photos and exploration',
          '5:00 PM - Begin return journey to Puno',
          '5:45 PM - Hotel drop-off in Puno'
        ]
      }
    ],
    importantInfo: [
      'Afternoon tour only - morning departures not available',
      'Site can be extremely cold and windy - bring warm layers',
      'Good walking shoes recommended (uneven terrain)',
      'Great for photography - bring your camera',
      'Sun protection essential despite cold temperatures'
    ],
    metaDescription: 'Visit Sillustani funeral towers on this half-day tour from Puno. Explore pre-Incan Colla chullpas overlooking Lake Umayo. Perfect afternoon excursion!',
    keywords: ['Sillustani tour', 'funeral towers Peru', 'Puno archaeological tours', 'pre-Incan sites', 'Lake Umayo'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '5',
    slug: 'uyuni-salt-flats-bolivia-salar-de-uyuni-tour',
    title: 'Uyuni Salt Flats Tour - Salar de Uyuni Bolivia',
    shortTitle: 'Uyuni Salt Flats',
    description: 'Cross-border adventure to Bolivia\'s stunning Uyuni Salt Flats, the world\'s largest salt flat and one of the most surreal landscapes on Earth.',
    overview: `
      <p><strong>Uyuni Salt Flats Tour: Cross-Border Adventure to Bolivia</strong></p>
      <p>Embark on an extraordinary journey from Puno to one of the most surreal landscapes on Earth - Bolivia's Uyuni Salt Flats. This full-day adventure crosses international borders to explore the world's largest salt flat, a place where the boundaries between earth and sky dissolve into infinity.</p>
      
      <p>Your day begins early as we depart Puno and head toward the Bolivian border. The drive through the altiplano offers magnificent views of the Andean landscape as the sun rises over the high plain.</p>
      
      <p>After crossing into Bolivia at Kasani, we continue our journey toward Uyuni. The landscape transforms dramatically as we approach the salt flat - the world's largest at over 10,000 square kilometers.</p>
      
      <p>Stepping onto the Salar de Uyuni is like entering another world. A seemingly endless expanse of white stretches to the horizon in every direction. During the rainy season (December to April), a thin layer of water creates the famous mirror effect, reflecting the sky so perfectly that it becomes impossible to tell where the earth ends and the sky begins.</p>
      
      <p>Our exploration includes visits to key sites: the train cemetery on the edge of Uyuni town, where rusting locomotives from the early 20th century create an eerily photogenic scene; Colchani, where we see traditional salt processing methods; and the salt hotel, built entirely from salt blocks.</p>
      
      <p>We'll stop for a unique lunch experience - a picnic literally in the middle of the salt flat, with nothing but white expanse surrounding us. This is also the perfect opportunity for those famous perspective photos, playing with distance and scale to create unforgettable images.</p>
      
      <p>The Incahuasi Island (during dry season) offers a dramatic contrast - a hill covered in giant cacti rising from the salt, providing panoramic views of the endless white landscape.</p>
      
      <p>As afternoon turns to evening, we begin our journey back to Puno, crossing the border as the sun sets over the Andes. It's a long day but an absolutely unforgettable experience.</p>
    `,
    whatToExpect: {
      description: `
        <p>This is a long but rewarding day - prepare for approximately 14-16 hours from pickup to drop-off. The early start is essential to maximize your time at the salt flat and manage the border crossing logistics.</p>
        
        <p>The border crossing requires your passport (valid for at least 6 months). Some nationalities require visas for Bolivia - check requirements well in advance. Your guide will assist with the border formalities.</p>
        
        <p>On the salt flat, the reflection of sunlight off the white surface is intense. Good sunglasses are absolutely essential, as is high-SPF sunscreen. The glare can be overwhelming without proper protection.</p>
        
        <p>The mirror effect that creates those stunning photographs only occurs during the rainy season (typically December to April). During the dry season (May to November), the salt flat is dry and you can drive across its geometric patterns. Both seasons offer unique photographic opportunities.</p>
        
        <p>The altitude on the salt flat is similar to Puno (around 3,650m), so if you've acclimated in Puno, you should be fine. The terrain is flat and easy to walk on.</p>
        
        <p>Lunch is included and is surprisingly good considering the remote location. Your guide will set up a picnic with local specialties.</p>
      `,
      quickFacts: [
        'Duration: 14-16 hours (very long day)',
        'Border crossing: Passport required, visas for some nationalities',
        'Best season for mirror effect: December to April',
        'Altitude: 3,650m (similar to Puno)',
        'Essential: Passport, sunglasses, sunscreen',
        'Lunch: Included, picnic on the salt flat'
      ]
    },
    category: 'bolivia',
    destination: 'Uyuni Salt Flats, Bolivia',
    duration: 'Full Day (14-16 hours)',
    price: 85,
    featured: true,
    reviews: 9,
    rating: 4.8,
    image: '/images/tours/salar-uyuni-full-day-planet-odysseys.webp',
    gallery: [],
    highlights: [
      'Uyuni Salt Flats mirror effect (seasonal)',
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
          '8:30 AM - Border crossing at Kasani',
          '11:00 AM - Arrive in Uyuni area',
          '11:30 AM - Salt flats tour begins',
          '11:45 AM - Train cemetery visit',
          '12:30 PM - Colchani salt processing visit',
          '1:00 PM - Lunch break on the salt flat',
          '2:00 PM - Continue exploration, perspective photos',
          '3:30 PM - Incahuasi Island visit (dry season only)',
          '4:00 PM - Begin return journey',
          '8:00 PM - Arrive back in Puno'
        ]
      }
    ],
    importantInfo: [
      'Passport required for border crossing (valid 6+ months)',
      'Check visa requirements for Bolivia in advance',
      'Very long day (14+ hours) - prepare for early start and late return',
      'Wear sunglasses - intense reflection can damage eyes',
      'Bring high SPF sun protection',
      'Camera essential for perspective photos'
    ],
    metaDescription: 'Uyuni Salt Flats day tour from Puno, Peru. Cross into Bolivia to experience the world\'s largest salt flat. Mirror effect, train cemetery, unforgettable landscapes!',
    keywords: ['Uyuni Salt Flats', 'Salar de Uyuni tour', 'Bolivia from Peru', 'salt flats tour', 'Puno to Uyuni'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '6',
    slug: 'route-of-the-sun-cusco-puno-sun-route-cusco',
    title: 'Route of the Sun Cusco Puno - Sun Route Cusco',
    shortTitle: 'Sun Route Scenic',
    description: 'Spectacular scenic journey between Cusco and Puno, stopping at major archaeological sites including Raqchi, Andahuaylillas, and La Raya Pass.',
    overview: `
      <p><strong>Route of the Sun: Scenic Journey Between Cusco and Puno</strong></p>
      <p>Transform a simple transfer between Cusco and Puno into one of Peru's most memorable travel experiences. The Route of the Sun (Ruta del Sol) combines transportation with guided visits to the region's most fascinating archaeological and cultural sites along the way.</p>
      
      <p>Your journey begins with pickup from your Cusco hotel in the early morning. As we leave the former Inca capital behind, we ascend into the stunning Andean landscape that characterizes this region.</p>
      
      <p>Our first stop is the Church of Andahuaylillas, often called the "Sistine Chapel of the Americas." This modest-looking 17th-century church contains an astonishing interior - walls and ceilings covered in exquisite frescoes and gold leaf, created by indigenous artists under Spanish direction. The contrast between the simple exterior and opulent interior never fails to amaze visitors.</p>
      
      <p>Continuing our journey, we arrive at the impressive archaeological complex of Raqchi. Here stands the enormous Temple of Wiracocha, one of the largest Inca structures ever built. The scale of this temple, with its massive central wall, offers insight into the religious importance of this site. Your guide will explain the theories about its function and the civilization that built it.</p>
      
      <p>We pause for a buffet lunch in the town of Sicuani, offering a variety of Peruvian dishes to refuel for the afternoon.</p>
      
      <p>The journey continues to La Raya Pass, the highest point of our route at 4,335 meters above sea level. Here, the landscape becomes truly spectacular - snow-capped peaks frame the road, and the source of the Amazon's tributaries can be seen. This natural divide between the Cusco and Puno regions offers breathtaking photo opportunities.</p>
      
      <p>Our final stop before reaching Puno is the Pucara Museum, housing an impressive collection of lithic sculptures and ceramics from the pre-Incan Pucara culture. The famous "Pucara bulls" that appear on many Peruvian rooftops originated here.</p>
      
      <p>As evening approaches, we descend toward Puno and the shores of Lake Titicaca. You'll be dropped at the bus station in Puno (not your hotel), from where a short taxi ride will take you to your accommodation.</p>
    `,
    whatToExpect: {
      description: `
        <p>This is not just transportation - it's a full-day tour that happens to end in a different city. The journey takes approximately 10 hours including all stops, making it a long but rewarding day.</p>
        
        <p>The vehicle is comfortable tourist transportation with air conditioning and restroom facilities. The guide provides commentary throughout the journey in both English and Spanish.</p>
        
        <p>Stops at each site range from 30-60 minutes, giving you enough time to explore, take photos, and appreciate each location without feeling rushed. The included buffet lunch offers a good variety of Peruvian cuisine.</p>
        
        <p>The altitude at La Raya Pass (4,335m) is significant. If you're prone to altitude effects, take it easy during this stop. The thin air and cold temperatures are noticeable.</p>
        
        <p>Note that drop-off is at the bus station in Puno, not at your hotel. From the bus station, taxis to city center hotels are readily available and cost approximately $2-3 USD. If you prefer hotel drop-off, this can sometimes be arranged for an additional fee.</p>
        
        <p>The route operates daily in both directions (Cusco to Puno and Puno to Cusco). If you're traveling from Puno to Cusco, the stops are the same but in reverse order.</p>
      `,
      quickFacts: [
        'Duration: Approximately 10 hours',
        'Departure: Daily from Cusco (morning)',
        'Stops: Andahuaylillas, Raqchi, La Raya Pass, Pucara',
        'Lunch: Buffet included in Sicuani',
        'Highest point: 4,335m at La Raya Pass',
        'Drop-off: Puno bus station (not hotel)'
      ]
    },
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
      'Andahuaylillas "Sistine Chapel of the Americas"',
      'Raqchi Temple of Wiracocha',
      'La Raya Pass (4,335m)',
      'Pucara Museum and lithic sculptures',
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
          '8:30 AM - Andahuaylillas Chapel visit',
          '10:00 AM - Raqchi archaeological site exploration',
          '12:00 PM - La Raya Pass photo stop',
          '1:00 PM - Buffet lunch in Sicuani',
          '2:30 PM - Pucara Museum visit',
          '5:00 PM - Arrival at Puno bus terminal'
        ]
      }
    ],
    importantInfo: [
      'Available daily in both directions (Cusco-Puno and Puno-Cusco)',
      'Drop-off at bus station, not at hotel',
      'Taxi from terminal to hotel approximately $2-3 USD',
      'Bring warm clothes for high altitude stops',
      'Camera essential for landscape photography',
      'Altitude at La Raya Pass is significant - move slowly'
    ],
    metaDescription: 'Sun Route from Cusco to Puno - scenic tourist bus with stops at Andahuaylillas, Raqchi, La Raya Pass. Cultural journey through the Andes!',
    keywords: ['Sun Route Peru', 'Cusco to Puno', 'Route of the Sun', 'Peru tourist bus', 'Andahuaylillas', 'Raqchi'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '7',
    slug: 'cusco-to-puno-bus-transfer-direct-and-overnight',
    title: 'Cusco to Puno Bus Transfer (Direct and Overnight)',
    shortTitle: 'Direct Bus Transfer',
    description: 'Comfortable and economical direct bus service between Cusco and Puno, with both daytime and overnight options available.',
    overview: `
      <p><strong>Direct Bus Transfer: Cusco to Puno</strong></p>
      <p>For travelers who need efficient, comfortable transportation between Cusco and Puno without the stops of the tourist route, our direct bus service offers the perfect solution. With multiple departure times including convenient overnight options, you can choose the schedule that best fits your itinerary.</p>
      
      <p>The journey between these two important Peruvian destinations takes approximately 6-7 hours, covering 389 kilometers of Andean highway. While this is a direct service without sightseeing stops, the route itself offers glimpses of the stunning altiplano landscape through your window.</p>
      
      <p>Our buses feature comfortable reclining seats, onboard restroom facilities, and entertainment systems to make your journey pleasant. The vehicles are modern, well-maintained, and operated by professional drivers experienced in high-altitude driving.</p>
      
      <p>For daytime travelers, the journey offers the chance to watch the Andean landscape unfold - from the mountains surrounding Cusco to the high plain approaching Puno. You'll see traditional communities, grazing llamas and alpacas, and the ever-changing sky of the altiplano.</p>
      
      <p>Overnight buses depart in the evening and arrive in Puno early the next morning. This option maximizes your daytime hours for sightseeing and saves a night of accommodation costs. The overnight buses feature fully reclining seats (like business class on an airplane) for comfortable sleeping.</p>
      
      <p>Upon arrival at the Puno bus terminal, you'll find yourself in the heart of the city, with taxis readily available to take you to your hotel (approximately $2-3 USD). The terminal also has basic services including restrooms and small shops.</p>
      
      <p>Whether you choose day or night travel, this direct transfer provides reliable, comfortable transportation between two of Peru's most important destinations.</p>
    `,
    whatToExpect: {
      description: `
        <p>This is straightforward transportation - no guided commentary, no scheduled stops. You board the bus at the terminal, travel to your destination, and depart. It's efficient and economical.</p>
        
        <p>Daytime buses offer the chance to see the Andean landscape. The route passes through small towns and rural areas where traditional life continues much as it has for centuries. Keep your camera handy - even from the bus window, there are photo opportunities.</p>
        
        <p>Overnight buses are designed for sleeping. The seats recline significantly (up to 160 degrees on some services), and blankets are provided. Earplugs and an eye mask can improve your sleep quality. The buses make one brief rest stop around midnight.</p>
        
        <p>Temperature on overnight buses can be cool - dress in layers even though blankets are provided. The bus's heating system maintains a comfortable temperature, but personal preferences vary.</p>
        
        <p>Both daytime and overnight buses require you to make your own way to the bus terminal. There's no hotel pickup with this service. Similarly, arrival is at the destination bus terminal, not your hotel.</p>
        
        <p>Baggage is stored in the compartment beneath the bus. Standard luggage allowances apply (typically one main bag plus hand luggage).</p>
      `,
      quickFacts: [
        'Duration: 6-7 hours',
        'Day buses: Departures 7:00 AM, 2:00 PM',
        'Night buses: Departures 9:00 PM, 10:00 PM',
        'Seats: Reclining, comfortable',
        'Amenities: Onboard bathroom, entertainment',
        'Arrival: Bus terminal (not hotel)'
      ]
    },
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
          'Arrival at destination bus terminal'
        ]
      }
    ],
    importantInfo: [
      'Arrive at terminal at least 30 minutes before departure',
      'Night buses arrive early morning (4:00-5:00 AM)',
      'Taxi from terminal to hotel needed (approx $2-3 USD)',
      'Bring warm clothes for night travel',
      'Store your main luggage in baggage compartment',
      'Keep valuables in your carry-on'
    ],
    metaDescription: 'Direct bus from Cusco to Puno. Comfortable day and overnight options. Reliable, economical ground transportation between Peru\'s key destinations.',
    keywords: ['Cusco Puno bus', 'Peru bus transfer', 'Cusco to Puno transport', 'overnight bus Peru'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '8',
    slug: 'airport-transfer-juliaca-to-puno',
    title: 'Airport Transfer Juliaca to Puno',
    shortTitle: 'Juliaca Airport Transfer',
    description: 'Reliable private transfer service between Juliaca Airport and Puno hotels. Safe, comfortable, and stress-free arrival or departure.',
    overview: `
      <p><strong>Private Airport Transfer: Juliaca to Puno</strong></p>
      <p>Begin or end your Lake Titicaca experience with complete peace of mind. Our private transfer service connects Juliaca's Inca Manco Cápac International Airport with your Puno hotel, providing a seamless, comfortable journey through the altiplano landscape.</p>
      
      <p>After a long flight, the last thing you want is to navigate unfamiliar public transportation or negotiate with taxi drivers. Our professional drivers meet you at the airport arrivals area, holding a sign with your name, ready to assist with your luggage and escort you to a clean, comfortable private vehicle.</p>
      
      <p>The journey from Juliaca to Puno takes approximately 45-60 minutes, covering 45 kilometers of paved highway. As we leave Juliaca behind, the landscape opens onto the altiplano, with views of the surrounding Andean mountains and glimpses of traditional rural life.</p>
      
      <p>Our vehicles are modern, well-maintained, and equipped for comfort. Choose from sedans for solo travelers or couples, or larger vans for groups and families. All vehicles feature comfortable seating, air conditioning, and ample space for luggage.</p>
      
      <p>For departures, our driver will meet you at your Puno hotel at your scheduled time, assist with luggage, and ensure you arrive at Juliaca Airport with plenty of time for your flight check-in.</p>
      
      <p>We monitor flight schedules, so if your incoming flight is delayed, we'll be aware and adjust the pickup time accordingly - no extra charges, no stress.</p>
      
      <p>This service is available 24 hours a day, 7 days a week, accommodating even the most inconvenient flight schedules. Book once, and everything is arranged - no hidden costs, no surprises.</p>
    `,
    whatToExpect: {
      description: `
        <p>This is the ultimate stress-free transfer experience. From the moment you clear customs at Juliaca Airport, you'll be in professional hands.</p>
        
        <p>Your driver will be waiting in the arrivals area with a visible sign. If you have trouble locating them, the contact number provided in your confirmation can be used to connect immediately. They'll assist with luggage and escort you to the vehicle in the airport parking area.</p>
        
        <p>The vehicles are clean, comfortable, and well-maintained. Sedans accommodate up to 3 passengers with luggage, while vans handle groups up to 7-8 passengers. All vehicles have seatbelts for all passengers and air conditioning.</p>
        
        <p>The drive itself is straightforward - approximately 45-60 minutes on good roads. Your driver focuses on safe, comfortable transport rather than providing tour commentary, though they're happy to answer basic questions about the area.</p>
        
        <p>For departures, the driver arrives at your hotel at the scheduled time. We recommend scheduling pickups 3 hours before your flight departure to allow adequate time for check-in and security.</p>
        
        <p>The service includes all costs - no hidden fees, no surprises at the end of the journey. Tipping is optional and at your discretion.</p>
      `,
      quickFacts: [
        'Duration: 45-60 minutes',
        'Distance: 45 km (28 miles)',
        'Vehicle options: Sedan (1-3 pax), Van (4-7 pax)',
        'Flight monitoring: Included',
        'Availability: 24/7, all year',
        'Meet & greet: Driver with name sign in arrivals'
      ]
    },
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
          'Driver meets you at arrivals with name sign',
          'Assistance with luggage',
          '45-60 minute comfortable journey',
          'Direct drop-off at your hotel entrance',
          'OR: Hotel pickup for departure transfer'
        ]
      }
    ],
    importantInfo: [
      'Provide flight details when booking for flight monitoring',
      'Driver monitors flight delays - no extra charge for waiting',
      'Service available 24/7, every day of the year',
      'Maximum 3 passengers per sedan with luggage',
      'Maximum 7 passengers per van with luggage',
      'Extra luggage? Inform in advance for appropriate vehicle'
    ],
    metaDescription: 'Private airport transfer from Juliaca to Puno. Reliable, comfortable door-to-door service. Professional drivers, flight monitoring, stress-free arrival!',
    keywords: ['Juliaca airport transfer', 'Puno airport service', 'Juliaca to Puno transport', 'Peru airport transfer'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '9',
    slug: 'lake-titicaca-sillustani-package-tour',
    title: 'Lake Titicaca and Sillustani Tour (2 Days)',
    shortTitle: 'Titicaca & Sillustani Package',
    description: 'Perfect 2-day package combining the best of Lake Titicaca islands with the mysterious Sillustani archaeological site.',
    overview: `
      <p><strong>Ultimate Lake Titicaca Package: Islands + Sillustani</strong></p>
      <p>Experience the very best of the Puno region with this comprehensive 2-day package that combines the cultural treasures of Lake Titicaca with the archaeological wonders of Sillustani. Perfect for travelers who want to maximize their time and experience the full spectrum of what this unique region offers.</p>
      
      <p><strong>Day One: Lake Titicaca Islands</strong></p>
      <p>Your adventure begins with a full day on the world's highest navigable lake. We depart from Puno harbor, crossing the deep blue waters toward the famous Uros Floating Islands.</p>
      
      <p>On Uros, you'll step onto islands made entirely of living totora reeds - a feat of engineering that has sustained the Uros people for centuries. Meet the families who maintain this ancient lifestyle, learn how the islands are constructed and repaired, and perhaps take a ride on a traditional reed boat.</p>
      
      <p>Continuing across the lake, we arrive at Amantani Island, where the rhythm of traditional life continues much as it has for generations. Here, you'll meet your host family - Quechua-speaking farmers who open their homes to travelers seeking authentic cultural exchange.</p>
      
      <p>After settling in and sharing a traditional lunch with your family, we'll hike to the sacred temple at the island's summit. The Pachatata temple offers breathtaking sunset views across the lake - a truly magical moment.</p>
      
      <p>Evening brings a home-cooked dinner with your family, followed by an optional cultural evening where local musicians play traditional instruments and everyone dances together under the stars.</p>
      
      <p><strong>Day Two: Taquile Island & Sillustani</strong></p>
      <p>After breakfast with your family and heartfelt farewells, we continue to Taquile Island. Known worldwide for its exquisite textile art (recognized by UNESCO), Taquile offers a completely different cultural experience. Explore the terraced island, visit the main square, and enjoy another traditional lunch with spectacular lake views.</p>
      
      <p>Returning to Puno in the afternoon, we're not done yet. From the port, we'll transfer directly to Sillustani for your final adventure. As the afternoon light softens, explore the ancient funeral towers of the Colla civilization. These massive stone chullpas, standing sentinel over Lake Umayo, create one of Peru's most atmospheric archaeological experiences.</p>
      
      <p>As the sun sets over the altiplano, we return to Puno, having experienced the full richness of this remarkable region.</p>
    `,
    whatToExpect: {
      description: `
        <p>This package combines two full-day experiences into one seamless itinerary, maximizing your time and minimizing logistical hassles. You'll experience the cultural immersion of an Amantani homestay plus the archaeological wonder of Sillustani.</p>
        
        <p>On Amantani, expect basic but authentic accommodation. Your family home will have simple amenities - likely no electricity or hot water. This is genuine homestay, not hotel-style lodging. The hospitality, however, is warm and generous.</p>
        
        <p>The temple hike requires moderate fitness. The path climbs steadily for about 45 minutes, but the sunset reward makes every step worthwhile. Bring a flashlight for the return descent in darkness.</p>
        
        <p>The cultural evening is optional but highly recommended. Local musicians create an impromptu celebration where travelers and families dance together. It's informal, joyful, and genuinely memorable.</p>
        
        <p>On Taquile, be prepared for walking. The island involves steps and paths - comfortable shoes essential. The textile demonstrations offer insight into a craft passed down through generations.</p>
        
        <p>Sillustani in the late afternoon light is a photographer's dream. The combination of ancient architecture, Lake Umayo, and the altiplano sky creates stunning images. The site can be windy - dress warmly.</p>
      `,
      quickFacts: [
        'Duration: 2 full days',
        'Accommodation: Basic homestay on Amantani',
        'Meals: 1 breakfast, 2 lunches, 1 dinner included',
        'Walking: Moderate (temple hike, Taquile paths)',
        'Highlights: Uros, Amantani homestay, Taquile, Sillustani',
        'Best for: Comprehensive Lake Titicaca experience'
      ]
    },
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
          '7:30 AM - Hotel pickup, Uros Islands visit',
          '9:30 AM - Continue to Amantani (3-hour journey)',
          '12:30 PM - Arrival, meet host family, lunch',
          '3:30 PM - Hike to Pachatata temple',
          '5:30 PM - Sunset viewing',
          '7:00 PM - Dinner with family',
          '8:30 PM - Optional cultural evening'
        ]
      },
      {
        day: 2,
        title: 'Taquile & Sillustani',
        description: 'Island visit and archaeological site',
        activities: [
          '7:00 AM - Breakfast with family',
          '8:00 AM - Depart Amantani to Taquile',
          '10:00 AM - Taquile Island tour',
          '12:00 PM - Lunch on Taquile',
          '2:00 PM - Return to Puno',
          '3:30 PM - Transfer to Sillustani',
          '4:15 PM - Sillustani archaeological tour',
          '5:45 PM - Return to Puno, hotel drop-off'
        ]
      }
    ],
    importantInfo: [
      'Excellent value package covering all major sites',
      'Basic homestay accommodation (no electricity/hot water)',
      'Moderate physical activity required',
      'Perfect for travelers with limited time',
      'Bring flashlight for Amantani evening',
      'Warm layers essential for Sillustani'
    ],
    metaDescription: '2-day Lake Titicaca and Sillustani package tour. Visit Uros, Amantani, Taquile islands with homestay, plus Sillustani archaeological site. Best value!',
    keywords: ['Lake Titicaca package', 'Sillustani tour', 'Puno 2 day tour', 'Peru tour package', 'Titicaca homestay'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
  },
  {
    id: '10',
    slug: 'lake-titicaca-tour-from-cusco-2-days',
    title: 'Lake Titicaca Tour from Cusco (2 Days)',
    shortTitle: 'Titicaca from Cusco 2D',
    description: 'Complete Lake Titicaca experience departing from Cusco, including scenic Sun Route, island tours, and return transfer. Perfect for travelers based in Cusco.',
    overview: `
      <p><strong>Lake Titicaca Tour from Cusco: Complete 2-Day Package</strong></p>
      <p>Designed specifically for travelers based in Cusco, this comprehensive package combines the scenic Route of the Sun journey with a complete Lake Titicaca experience - all with return transportation included. Experience two of Peru's premier destinations without the hassle of arranging separate transport.</p>
      
      <p><strong>Day One: Cusco to Puno via the Route of the Sun</strong></p>
      <p>Your adventure begins with morning pickup from your Cusco hotel. Rather than a simple bus transfer, you'll travel aboard the tourist Route of the Sun service, turning the journey into a full-day tour.</p>
      
      <p>First stop is Andahuaylillas and its famous "Sistine Chapel of the Americas." This modest church contains one of Peru's most spectacular colonial interiors - every surface covered in gold leaf and exquisite frescoes.</p>
      
      <p>Continue to Raqchi, where the immense Temple of Wiracocha demonstrates the scale of Inca religious architecture. The massive central wall still stands, a testament to the civilization that built it.</p>
      
      <p>After a buffet lunch in Sicuani, we ascend to La Raya Pass at 4,335 meters. Here, the Andes reveal their full majesty - snow-capped peaks and the headwaters of Amazon tributaries create a landscape of stunning beauty.</p>
      
      <p>Our final stop before Puno is the Pucara Museum, housing pre-Incan ceramics and the famous lithic sculptures that inspired Peru's ubiquitous "Pucara bulls."</p>
      
      <p>Arriving in Puno in late afternoon, you'll be transferred to your pre-arranged hotel for overnight.</p>
      
      <p><strong>Day Two: Lake Titicaca Full Day Tour</strong></p>
      <p>After breakfast, we depart Puno harbor for a full day exploring Lake Titicaca. First stop: the incredible Uros Floating Islands, where entire communities live on islands made of living reeds.</p>
      
      <p>Continue to Taquile Island, a terraced paradise known for its exquisite textile art and unique social structure. Enjoy a traditional lunch with panoramic lake views before exploring the island's paths and learning about local traditions.</p>
      
      <p>Returning to Puno in late afternoon, you'll transfer to the bus station for your overnight journey back to Cusco. The comfortable overnight bus (seats recline fully) arrives in Cusco early the next morning, ready for your next Peruvian adventure.</p>
      
      <p>This package handles all transportation, guiding, and logistics - simply enjoy the experience.</p>
    `,
    whatToExpect: {
      description: `
        <p>This package is specifically designed for Cusco-based travelers wanting to experience Lake Titicaca without the complexity of arranging separate transport and tours. Everything is coordinated - you just show up and enjoy.</p>
        
        <p>Day one is the Route of the Sun, a full-day journey with multiple stops. It's long but rewarding - approximately 10 hours including all visits. The bus is comfortable with restroom facilities, and the guide provides commentary throughout.</p>
        
        <p>Upon arrival in Puno, you're on your own for the evening. We recommend booking a hotel in advance (we can assist) and enjoying Puno's main square and local restaurants. Note that the Sun Route drops you at the bus station - you'll need a short taxi to your hotel.</p>
        
        <p>Day two is a standard Lake Titicaca full-day tour visiting Uros and Taquile. Your guide will pick you up from your hotel (included in the package). The day involves boat travel and walking on Taquile - comfortable shoes essential.</p>
        
        <p>The return to Cusco is via overnight bus. Seats recline significantly for sleeping, and blankets are provided. The bus arrives in Cusco around 4:00-5:00 AM - plan accordingly for your onward travel.</p>
        
        <p>If you prefer not to take the overnight bus, optional upgrades include staying another night in Puno and taking a daytime bus back, or flying from nearby Juliaca to Cusco (ask for pricing).</p>
      `,
      quickFacts: [
        'Duration: 2 days',
        'Day 1: Route of the Sun (10 hours)',
        'Overnight: Puno hotel (not included, can be arranged)',
        'Day 2: Lake Titicaca full day tour',
        'Return: Overnight bus to Cusco',
        'Perfect for: Cusco-based travelers'
      ]
    },
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
      'Hotels (can be arranged separately)',
      'Personal expenses',
      'Tips'
    ],
    itinerary: [
      {
        day: 1,
        title: 'Cusco to Puno via Sun Route',
        description: 'Scenic journey with cultural stops',
        activities: [
          '6:30 AM - Hotel pickup in Cusco',
          '7:00 AM - Depart Cusco on Sun Route',
          '8:30 AM - Andahuaylillas Chapel',
          '10:00 AM - Raqchi archaeological site',
          '12:00 PM - La Raya Pass',
          '1:00 PM - Buffet lunch in Sicuani',
          '2:30 PM - Pucara Museum',
          '5:00 PM - Arrival Puno bus station',
          'Evening - Free time in Puno, overnight (hotel not included)'
        ]
      },
      {
        day: 2,
        title: 'Lake Titicaca Tour & Return to Cusco',
        description: 'Full day lake experience and overnight return',
        activities: [
          '7:00 AM - Hotel pickup for lake tour',
          '7:30 AM - Boat departure',
          '8:00 AM - Uros Islands visit',
          '9:30 AM - Continue to Taquile',
          '11:30 AM - Taquile Island tour',
          '1:00 PM - Traditional lunch',
          '2:30 PM - Return to Puno',
          '5:00 PM - Transfer to bus station',
          '9:00 PM - Overnight bus to Cusco'
        ]
      }
    ],
    importantInfo: [
      'Return bus is overnight (arrives Cusco 4:00-5:00 AM)',
      'Can upgrade to daytime Sun Route return for additional cost',
      'Puno hotel not included - can be arranged separately',
      'Alternative: Stay additional night in Puno and fly from Juliaca',
      'Bring warm clothes for overnight bus',
      'Small luggage only for overnight bus (main bags stored underneath)'
    ],
    metaDescription: '2-day Lake Titicaca tour from Cusco including Sun Route, island visits, and return transfer. Perfect package for Cusco-based travelers. Book your adventure!',
    keywords: ['Lake Titicaca from Cusco', 'Cusco to Titicaca tour', '2 day Peru tour', 'Sun Route package', 'Cusco Puno tour'],
    wetravel: {
      uid: '1685394',
      uuid: '78847748'
    }
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