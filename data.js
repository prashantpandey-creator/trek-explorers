// Trek data embedded for local file access (avoids CORS issues)
const TREK_DATA = 
{
  "treks": [
    {
      "id": "kedarkantha-winter-trek",
      "name": "Kedarkantha Winter Trek",
      "slug": "kedarkantha-winter-trek",
      "tagline": "Best Winter Trek In India",
      "price": 4762,
      "originalPrice": 7000,
      "currency": "₹",
      "duration": { "days": 5, "nights": 4 },
      "difficulty": "Moderate",
      "difficultyColor": "#f59e0b",
      "location": "Uttarakhand",
      "region": "Garhwal Himalayas",
      "basecamp": "Sankri",
      "altitude": { "max": 12631, "unit": "ft" },
      "distance": { "total": 20, "unit": "km" },
      "bestMonths": ["Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      "category": "winter-treks",
      "tags": ["Best Seller", "Winter", "Snow"],
      "rating": 5,
      "reviews": 7,
      "groupSize": { "min": 4, "max": 20 },
      "ageLimit": { "min": 12, "max": 60 },
      "highlights": [
        "360-degree panoramic views of Himalayan peaks",
        "Snow-capped mountains and dense forests",
        "Camping at scenic locations",
        "Rich biodiversity with unique flora and fauna",
        "Cultural immersion with local villages"
      ],
      "overview": "Kedarkantha is considered one of the Best winter treks in India. It is a captivating trip that lets you explore the awe-inspiring sceneries of the Himalayas. This trek is the best combination of breathtaking landscapes, adventure, and natural beauty, making it a perfect place for trekking lovers. The trek starts from Sankri village in the Uttarkashi district. Twenty kilometers is the overall trekking distance that normally takes five days. The road takes you through quaint valleys, charming meadows, and dense forests.",
      "whyDoThis": [
        "Excitement and adventure with steep ascents and snowy trails",
        "Cultural immersion with local communities",
        "Magnificent natural beauty of the Himalayas",
        "Sense of achievement upon reaching the summit"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Dehradun to Sankri",
          "description": "Embark on an extraordinary expedition from Dehradun. The distance is approximately 220 km, and the journey will take around 10 hours. The route along National Highway 123 offers a picturesque drive, unveiling enchanting valleys and dense forests.",
          "altitude": "6,400 ft",
          "distance": "200 km by road",
          "time": "8-10 hrs",
          "highlights": ["Sankri Village", "Pine Forests", "Tons River", "Breathtaking Scenery"]
        },
        {
          "day": 2,
          "title": "Sankri to Juda Ka Talab",
          "description": "Trek to Juda Ka Talab at an altitude of 9,100 feet. The trek covers approximately 5 km, taking around 5 hours. Embrace thrilling experiences on the trail, overcoming ice and slush with expert guides.",
          "altitude": "9,100 ft",
          "distance": "8 km trek",
          "time": "7-8 hours",
          "highlights": ["Enchanting Villages", "Rich Himalayan Flora and Fauna", "Graceful Bridges"]
        },
        {
          "day": 3,
          "title": "Juda Ka Talab to Kedarkantha Base",
          "description": "Wake up early to enjoy the breathtaking Sunrise. Trek to Kedarkantha Base, located at 11,250 feet altitude. The trek covers nearly 6 kms through opaque forests of oak and pine trees.",
          "altitude": "11,250 ft",
          "distance": "6 km trek",
          "time": "7-8 hours",
          "highlights": ["Breathtaking Sunrise", "360-degree View", "Kedar Kantha Peak"]
        },
        {
          "day": 4,
          "title": "Summit Day - Kedarkantha Peak",
          "description": "Rise early around 2:00 AM for the summit push. Experience the warm rays of the sun from Yamunotri and Gangotri mountain ranges. Upon reaching the summit, be mesmerized by the stunning sunrise view.",
          "altitude": "12,500 ft",
          "distance": "9 km trek",
          "time": "8-9 hours",
          "highlights": ["Summit Sunrise", "Panoramic Mountain Views", "Achievement of a Lifetime"]
        },
        {
          "day": 5,
          "title": "Hargaon to Sankri & Drive to Dehradun",
          "description": "After breakfast, descend back to Sankri Village, which is a 4 km trek taking approximately 2-3 hours. Return back from Sankri to Dehradun.",
          "altitude": "6,400 ft",
          "distance": "4 km trek + 200 km drive",
          "time": "3 hrs trek + 9-10 hrs drive",
          "highlights": ["Descent through forests", "Farewell to the Himalayas"]
        }
      ],
      "inclusions": [
        "Accommodation in tents or guesthouses during the trek",
        "All meals during the trek (breakfast, lunch, dinner)",
        "Experienced trekking guide and support staff",
        "Camping equipment and gears",
        "Permits and entry fees",
        "Medical kit and first aid assistance"
      ],
      "exclusions": [
        "Transportation to and from Dehradun",
        "Personal expenses and tips",
        "Travel Insurance",
        "Any additional activities not mentioned in inclusions",
        "Forest permits for foreign trekkers"
      ],
      "thingsToCarry": [
        "Warm layered clothing",
        "Trekking shoes with good grip",
        "Backpack (40-50 liters)",
        "Sunglasses and sunscreen",
        "Water bottle and snacks",
        "Personal medications",
        "Camera"
      ],
      "images": [
        "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=400"
    },
    {
      "id": "brahmatal-trek",
      "name": "Brahmatal Trek",
      "slug": "brahmatal-trek",
      "tagline": "Frozen Lake Winter Trek",
      "price": 4762,
      "originalPrice": 7000,
      "currency": "₹",
      "duration": { "days": 5, "nights": 4 },
      "difficulty": "Moderate",
      "difficultyColor": "#f59e0b",
      "location": "Uttarakhand",
      "region": "Garhwal Himalayas",
      "basecamp": "Lohajung",
      "altitude": { "max": 12250, "unit": "ft" },
      "distance": { "total": 22, "unit": "km" },
      "bestMonths": ["Nov", "Dec", "Jan", "Feb", "Mar"],
      "category": "winter-treks",
      "tags": ["Best Seller", "Winter", "Frozen Lake"],
      "rating": 5,
      "reviews": 12,
      "groupSize": { "min": 4, "max": 20 },
      "ageLimit": { "min": 12, "max": 55 },
      "highlights": [
        "Frozen Brahmatal Lake surrounded by mountains",
        "Panoramic views of Trishul and Nanda Ghunti peaks",
        "Dense rhododendron and oak forests",
        "Pristine snow-covered meadows",
        "Spectacular summit views"
      ],
      "overview": "The Brahmatal Trek is considered one of the Best treks in Uttarakhand. It is situated in the Garhwal area of the Indian Himalayas. This mesmerizing trek gives an exceptional combination of panoramic vistas, thrilling challenges, and natural beauty. This trek will take you through charming villages, dense forests, and pristine snowscapes, giving you an incredible experience you will cherish forever.",
      "whyDoThis": [
        "Witness the stunning frozen Brahmatal Lake",
        "Experience untouched natural beauty",
        "Enjoy spectacular mountain views",
        "Perfect blend of adventure and challenge"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Lohajung",
          "description": "Arrive at Lohajung base camp. Rest and acclimatize to the altitude.",
          "altitude": "7,600 ft",
          "distance": "Transfer day",
          "time": "Full day",
          "highlights": ["Acclimatization", "Lohajung Village"]
        },
        {
          "day": 2,
          "title": "Lohajung to Bekaltal",
          "description": "Begin the trek through dense forests and meadows towards Bekaltal.",
          "altitude": "9,700 ft",
          "distance": "6 km trek",
          "time": "5-6 hours",
          "highlights": ["Dense Forests", "Bekaltal Lake"]
        },
        {
          "day": 3,
          "title": "Bekaltal to Brahmatal",
          "description": "Trek to the beautiful frozen Brahmatal Lake through snow-covered trails.",
          "altitude": "10,450 ft",
          "distance": "5 km trek",
          "time": "4-5 hours",
          "highlights": ["Frozen Lake", "Snow Trails"]
        },
        {
          "day": 4,
          "title": "Summit and Return to Base",
          "description": "Early morning summit push for panoramic views, then descend back.",
          "altitude": "12,250 ft summit",
          "distance": "8 km trek",
          "time": "7-8 hours",
          "highlights": ["Summit Views", "360-degree Panorama"]
        },
        {
          "day": 5,
          "title": "Return to Lohajung",
          "description": "Descend back to Lohajung and depart for Rishikesh.",
          "altitude": "7,600 ft",
          "distance": "6 km trek",
          "time": "4-5 hours",
          "highlights": ["Final Descent", "Departure"]
        }
      ],
      "inclusions": [
        "Accommodation in tents during the trek",
        "All meals during the trek",
        "Experienced trekking guide",
        "Camping equipment",
        "Permits and entry fees",
        "First aid kit"
      ],
      "exclusions": [
        "Transportation to Lohajung",
        "Personal expenses",
        "Travel Insurance",
        "Additional activities"
      ],
      "thingsToCarry": [
        "Warm layered clothing",
        "Trekking shoes",
        "Backpack",
        "Sunglasses",
        "Water bottle",
        "Personal medications"
      ],
      "images": [
        "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=400"
    },
    {
      "id": "nag-tibba-trek",
      "name": "Nag Tibba Trek",
      "slug": "nag-tibba-trek",
      "tagline": "Best Weekend Trek Near Dehradun",
      "price": 1428,
      "originalPrice": 2000,
      "currency": "₹",
      "duration": { "days": 2, "nights": 1 },
      "difficulty": "Easy",
      "difficultyColor": "#22c55e",
      "location": "Uttarakhand",
      "region": "Garhwal Himalayas",
      "basecamp": "Pantwari",
      "altitude": { "max": 9915, "unit": "ft" },
      "distance": { "total": 15, "unit": "km" },
      "bestMonths": ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr"],
      "category": "weekend-treks",
      "tags": ["Best Seller", "Weekend", "Beginner Friendly"],
      "rating": 5,
      "reviews": 24,
      "groupSize": { "min": 4, "max": 25 },
      "ageLimit": { "min": 10, "max": 65 },
      "highlights": [
        "Highest peak in the Nag Tibba range",
        "Views of Bandarpoonch and Swargarohini peaks",
        "Dense oak and rhododendron forests",
        "Stunning camping under starlit sky",
        "Perfect for beginners"
      ],
      "overview": "If you want to start a thrilling venture that leaves you mesmerized, then Nag Tibba Trek is the perfect solution for you. Situated in the splendid Himalayas, this Best trek near Dehradun gives a fascinating combination of thrilling trails, natural beauty, and a sight into the local culture. The trek provides the best balance of breathtaking rewards and moderate challenges.",
      "whyDoThis": [
        "Perfect weekend getaway",
        "Accessible for beginners",
        "Stunning camping experience",
        "Beautiful forest trails"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Pantwari to Nag Tibba Base",
          "description": "Start the trek from Pantwari village through rhododendron forests. Camp at the base of Nag Tibba peak.",
          "altitude": "9,000 ft",
          "distance": "7 km trek",
          "time": "5-6 hours",
          "highlights": ["Forest Trail", "Base Camp"]
        },
        {
          "day": 2,
          "title": "Summit & Return to Pantwari",
          "description": "Early morning summit push for sunrise views. Descend back to Pantwari.",
          "altitude": "9,915 ft summit",
          "distance": "8 km trek",
          "time": "6-7 hours",
          "highlights": ["Sunrise at Summit", "360-degree Views"]
        }
      ],
      "inclusions": [
        "Camping accommodation",
        "All meals during trek",
        "Experienced guide",
        "Camping equipment",
        "First aid"
      ],
      "exclusions": [
        "Transportation",
        "Personal expenses",
        "Travel Insurance"
      ],
      "thingsToCarry": [
        "Warm clothes",
        "Trekking shoes",
        "Small backpack",
        "Water bottle",
        "Torch/Headlamp"
      ],
      "images": [
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=400"
    },
    {
      "id": "kuari-pass-trek",
      "name": "Kuari Pass Trek",
      "slug": "kuari-pass-trek",
      "tagline": "Lord Curzon's Trail",
      "price": 6143,
      "originalPrice": 8500,
      "currency": "₹",
      "duration": { "days": 6, "nights": 5 },
      "difficulty": "Easy-Moderate",
      "difficultyColor": "#84cc16",
      "location": "Uttarakhand",
      "region": "Garhwal Himalayas",
      "basecamp": "Dhak",
      "altitude": { "max": 12516, "unit": "ft" },
      "distance": { "total": 30, "unit": "km" },
      "bestMonths": ["Mar", "Apr", "May", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      "category": "winter-treks",
      "tags": ["Trending", "Historic Trail", "Panoramic Views"],
      "rating": 5,
      "reviews": 6,
      "groupSize": { "min": 4, "max": 18 },
      "ageLimit": { "min": 8, "max": 60 },
      "highlights": [
        "Historic Lord Curzon Trail",
        "Views of Nanda Devi, Chaukhamba, Kamet peaks",
        "Beautiful alpine meadows",
        "Stunning sunrises and sunsets",
        "Rich local culture"
      ],
      "overview": "This tour to the Garhwal region of Uttarakhand, also known as Dev Bhoomi or the Land of the Gods, takes you on a solitary trek found many years ago by an English lord. This trail is known as the Lord Curzon trail. It has some of the most breathtaking landscapes of the iconic Himalayan peaks. The great explorer Eric Shipton aptly defined the region's magnificence when he remarked, 'A vision of such beauty is worth a world of struggle.'",
      "whyDoThis": [
        "Walk the historic Lord Curzon Trail",
        "Panoramic Himalayan views",
        "Beautiful meadows and forests",
        "Suitable for all experience levels"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Rishikesh to Pipalkoti",
          "description": "Travel from Rishikesh to Pipalkoti base camp.",
          "altitude": "6,000 ft",
          "distance": "252 km drive",
          "time": "8-9 hours",
          "highlights": ["Scenic Drive", "Mountain Views"]
        },
        {
          "day": 2,
          "title": "Pipalkoti to Gulling",
          "description": "Drive to Dhak and trek to Gulling campsite.",
          "altitude": "9,500 ft",
          "distance": "8 km trek",
          "time": "5-6 hours",
          "highlights": ["Start of Trek", "Forest Trail"]
        },
        {
          "day": 3,
          "title": "Gulling to Tali",
          "description": "Trek through beautiful meadows to Tali.",
          "altitude": "11,000 ft",
          "distance": "6 km trek",
          "time": "4-5 hours",
          "highlights": ["Alpine Meadows", "Mountain Views"]
        },
        {
          "day": 4,
          "title": "Tali to Kuari Pass to Khullara",
          "description": "Summit Kuari Pass for panoramic views and descend to Khullara.",
          "altitude": "12,516 ft summit",
          "distance": "8 km trek",
          "time": "6-7 hours",
          "highlights": ["Kuari Pass Summit", "360-degree Views"]
        },
        {
          "day": 5,
          "title": "Khullara to Auli",
          "description": "Trek to Auli, famous ski resort.",
          "altitude": "9,000 ft",
          "distance": "6 km trek",
          "time": "4-5 hours",
          "highlights": ["Auli", "Ski Resort"]
        },
        {
          "day": 6,
          "title": "Auli to Rishikesh",
          "description": "Drive back to Rishikesh.",
          "altitude": "-",
          "distance": "250 km drive",
          "time": "8-9 hours",
          "highlights": ["Return Journey"]
        }
      ],
      "inclusions": [
        "Accommodation in tents/guesthouse",
        "All meals during trek",
        "Experienced guide and staff",
        "Camping equipment",
        "Permits"
      ],
      "exclusions": [
        "Transport to/from Rishikesh (Rs 2400 extra)",
        "Personal expenses",
        "Travel Insurance"
      ],
      "thingsToCarry": [
        "Warm layered clothing",
        "Trekking shoes",
        "Backpack",
        "Rain gear",
        "Sunscreen"
      ],
      "images": [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400"
    },
    {
      "id": "dayara-bugyal-trek",
      "name": "Dayara Bugyal Trek",
      "slug": "dayara-bugyal-trek",
      "tagline": "Meadows at 12,000 ft",
      "price": 4760,
      "originalPrice": 6500,
      "currency": "₹",
      "duration": { "days": 4, "nights": 3 },
      "difficulty": "Moderate",
      "difficultyColor": "#f59e0b",
      "location": "Uttarakhand",
      "region": "Garhwal Himalayas",
      "basecamp": "Natin",
      "altitude": { "max": 12100, "unit": "ft" },
      "distance": { "total": 16, "unit": "km" },
      "bestMonths": ["Dec", "Jan", "Feb"],
      "category": "winter-treks",
      "tags": ["Trending", "Meadows", "Snow"],
      "rating": 5,
      "reviews": 6,
      "groupSize": { "min": 4, "max": 20 },
      "ageLimit": { "min": 10, "max": 60 },
      "highlights": [
        "Spectacular alpine meadows at 12,000 ft",
        "Views of Gangotri, Srikanth, and Bandarpoonch peaks",
        "Dense Oak and Maple forests",
        "Perfect weekend trek",
        "Snow-covered landscape in winter"
      ],
      "overview": "Dayara Bugyal is the most preferred trek among Trekkers. The spectacular alpine field of this trek reigns atop an overwhelming 12,000 ft., against a beautiful canvas of Himalayan peaks such as Gangotri Peaks, Srikanth Peak, Shrikhand Mahadev, Kala Nag, and Bandarpoonch. This trek is covered with a rich blanket of wildflowers and dense woods of Oak and Maple.",
      "whyDoThis": [
        "Experience pristine alpine meadows",
        "Perfect for all experience levels",
        "Stunning mountain panoramas",
        "Peaceful natural environment"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Dehradun to Natin",
          "description": "Drive from Dehradun to Natin village. Check into accommodation and rest.",
          "altitude": "7,400 ft",
          "distance": "200 km drive",
          "time": "7 hours",
          "highlights": ["Mountain Drive", "Natin Village"]
        },
        {
          "day": 2,
          "title": "Natin to Gui",
          "description": "Start trek through Oak forests. Reach Gui campsite.",
          "altitude": "9,500 ft",
          "distance": "4 km trek",
          "time": "4-5 hours",
          "highlights": ["Oak Forests", "Gui Campsite"]
        },
        {
          "day": 3,
          "title": "Gui to Dayara Bugyal Top",
          "description": "Trek to the stunning Dayara Bugyal meadows and descend back to Gui.",
          "altitude": "12,100 ft",
          "distance": "7.5 km trek",
          "time": "5-6 hours",
          "highlights": ["Alpine Meadows", "Panoramic Views"]
        },
        {
          "day": 4,
          "title": "Gui to Natin to Dehradun",
          "description": "Descend to Natin and drive back to Dehradun.",
          "altitude": "7,400 ft",
          "distance": "4 km trek + 180 km drive",
          "time": "4 hrs trek + 7 hrs drive",
          "highlights": ["Return Journey"]
        }
      ],
      "inclusions": [
        "Hotel stay in Natin",
        "Camping at Gui",
        "All meals during trek",
        "Trek guide",
        "Camping equipment"
      ],
      "exclusions": [
        "Transportation",
        "Personal expenses",
        "Travel Insurance"
      ],
      "thingsToCarry": [
        "Warm clothing",
        "Trekking shoes",
        "Backpack",
        "Sunglasses",
        "Water bottle"
      ],
      "images": [
        "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=800",
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800",
        "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=400"
    },
    {
      "id": "chadar-trek",
      "name": "Chadar Trek",
      "slug": "chadar-trek",
      "tagline": "Frozen River Expedition",
      "price": 21500,
      "originalPrice": 28000,
      "currency": "₹",
      "duration": { "days": 8, "nights": 7 },
      "difficulty": "Difficult",
      "difficultyColor": "#ef4444",
      "location": "Ladakh",
      "region": "Zanskar Valley",
      "basecamp": "Leh",
      "altitude": { "max": 11150, "unit": "ft" },
      "distance": { "total": 62, "unit": "km" },
      "bestMonths": ["Jan", "Feb"],
      "category": "adventure-treks",
      "tags": ["Epic", "Frozen River", "Extreme"],
      "rating": 4,
      "reviews": 4,
      "groupSize": { "min": 6, "max": 15 },
      "ageLimit": { "min": 18, "max": 50 },
      "highlights": [
        "Walk on the frozen Zanskar River",
        "Frozen Nerak Waterfall",
        "Unique Zanskari culture",
        "Extreme winter adventure",
        "Once in a lifetime experience"
      ],
      "overview": "A thick sheet of ice, beautiful mountains on all sides and the fascinating Zanskari culture are enough to give you an experience of a lifetime. The Chadar trek is one of the most alluring and challenging treks in India at an altitude of approximately 11,150 ft. This trek requires walking on a blanket of ice which is basically the Zanskar river, frozen during winters.",
      "whyDoThis": [
        "Ultimate bucket list adventure",
        "Walk on a frozen river",
        "Witness the frozen Nerak waterfall",
        "Experience unique Zanskari culture"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Leh",
          "description": "Arrive in Leh and acclimatize.",
          "altitude": "11,500 ft",
          "distance": "-",
          "time": "Rest day",
          "highlights": ["Leh City", "Acclimatization"]
        },
        {
          "day": 2,
          "title": "Acclimatization in Leh",
          "description": "Local sightseeing and preparation for the trek.",
          "altitude": "11,500 ft",
          "distance": "-",
          "time": "Full day",
          "highlights": ["Monastery Visits", "Gear Check"]
        },
        {
          "day": 3,
          "title": "Leh to Chilling to Tilat Do",
          "description": "Drive to Chilling and start the frozen river walk.",
          "altitude": "10,500 ft",
          "distance": "4 km on ice",
          "time": "4-5 hours",
          "highlights": ["First Steps on Chadar", "Ice Walking"]
        },
        {
          "day": 4,
          "title": "Tilat Do to Gyalpo",
          "description": "Continue walking on the frozen river.",
          "altitude": "10,600 ft",
          "distance": "8 km on ice",
          "time": "6-7 hours",
          "highlights": ["Frozen River", "Canyon Views"]
        },
        {
          "day": 5,
          "title": "Gyalpo to Nerak",
          "description": "Reach Nerak and witness the frozen waterfall.",
          "altitude": "11,150 ft",
          "distance": "10 km on ice",
          "time": "7-8 hours",
          "highlights": ["Nerak Waterfall", "Frozen Paradise"]
        },
        {
          "day": 6,
          "title": "Nerak to Gyalpo",
          "description": "Start return journey.",
          "altitude": "10,600 ft",
          "distance": "10 km on ice",
          "time": "6-7 hours",
          "highlights": ["Return Trek"]
        },
        {
          "day": 7,
          "title": "Gyalpo to Chilling to Leh",
          "description": "Complete the trek and drive back to Leh.",
          "altitude": "11,500 ft",
          "distance": "12 km on ice + drive",
          "time": "Full day",
          "highlights": ["Trek Completion", "Celebration"]
        },
        {
          "day": 8,
          "title": "Departure from Leh",
          "description": "Departure and farewell.",
          "altitude": "-",
          "distance": "-",
          "time": "-",
          "highlights": ["Departure"]
        }
      ],
      "inclusions": [
        "Accommodation in Leh and camps",
        "All meals during trek",
        "Expert guides and porters",
        "All permits",
        "Camping equipment",
        "First aid and emergency support"
      ],
      "exclusions": [
        "Flight tickets to Leh",
        "Personal gear",
        "Travel Insurance (mandatory)",
        "Personal expenses"
      ],
      "thingsToCarry": [
        "Extreme cold weather gear",
        "Multiple layers of clothing",
        "Ice walking boots",
        "Gaiters",
        "Thermos flasks",
        "High altitude medications"
      ],
      "images": [
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",
        "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800",
        "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400"
    },
    {
      "id": "jibhi-jalori-pass",
      "name": "Jibhi Jalori Pass",
      "slug": "jibhi-jalori-pass",
      "tagline": "Hidden Paradise of Himachal",
      "price": 7799,
      "originalPrice": 9500,
      "currency": "₹",
      "duration": { "days": 3, "nights": 2 },
      "difficulty": "Easy",
      "difficultyColor": "#22c55e",
      "location": "Himachal Pradesh",
      "region": "Tirthan Valley",
      "basecamp": "Jibhi",
      "altitude": { "max": 10800, "unit": "ft" },
      "distance": { "total": 8, "unit": "km" },
      "bestMonths": ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb"],
      "category": "backpacking-trips",
      "tags": ["Trending", "Offbeat", "Relaxing"],
      "rating": 5,
      "reviews": 1,
      "groupSize": { "min": 6, "max": 20 },
      "ageLimit": { "min": 10, "max": 65 },
      "highlights": [
        "Pristine Tirthan Valley",
        "Jalori Pass at 10,800 ft",
        "Serolsar Lake trek",
        "Jibhi Waterfall",
        "Bonfire and local culture"
      ],
      "overview": "The magical escape in the Great Himalayan National Park ecozone will untether you from all the worldly troubles and provide a relaxing environment. The Tirthan Valley is an ideal place for a plethora of activities including trout fishing, hiking, trekking, camping, bonfires, and photography. Unlike popular tourist spots, this destination has managed to remain less traveled.",
      "whyDoThis": [
        "Experience offbeat Himachal",
        "Peaceful and serene environment",
        "Beautiful waterfalls and lakes",
        "Perfect getaway from city life"
      ],
      "itinerary": [
        {
          "day": 0,
          "title": "Delhi to Jibhi",
          "description": "Overnight journey from Delhi to Jibhi in AC bus.",
          "altitude": "-",
          "distance": "450 km drive",
          "time": "Overnight",
          "highlights": ["Overnight Journey"]
        },
        {
          "day": 1,
          "title": "Explore Jibhi",
          "description": "Visit Jibhi waterfall, Mini Thailand, and riverside walk. Evening bonfire.",
          "altitude": "5,500 ft",
          "distance": "Local exploration",
          "time": "Full day",
          "highlights": ["Jibhi Waterfall", "Mini Thailand", "Bonfire"]
        },
        {
          "day": 2,
          "title": "Jalori Pass & Serolsar Lake",
          "description": "Drive to Jalori Pass and trek to Serolsar Lake.",
          "altitude": "10,800 ft",
          "distance": "4 km trek",
          "time": "Full day",
          "highlights": ["Jalori Pass", "Serolsar Lake Trek", "360° Views"]
        },
        {
          "day": 3,
          "title": "Departure",
          "description": "Morning activities and departure for Delhi.",
          "altitude": "-",
          "distance": "450 km drive",
          "time": "Full day",
          "highlights": ["Return Journey"]
        }
      ],
      "inclusions": [
        "2-night accommodation in Jibhi",
        "4 Meals (2 Breakfast, 2 Dinner)",
        "AC Bus transfer from Delhi",
        "All sightseeing",
        "Bonfire and light music",
        "Trip Leader"
      ],
      "exclusions": [
        "5% GST",
        "Lunch and personal meals",
        "Entry tickets",
        "Personal expenses"
      ],
      "thingsToCarry": [
        "Warm clothes",
        "Comfortable shoes",
        "Camera",
        "Sunscreen",
        "Personal medications"
      ],
      "images": [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
        "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?w=800",
        "https://images.unsplash.com/photo-1464278533981-50106e6176b1?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    },
    {
      "id": "marchoi-trek",
      "name": "Marchoi Trek",
      "slug": "marchoi-trek",
      "tagline": "Kashmir's Hidden Winter Gem",
      "price": 8599,
      "originalPrice": 11000,
      "currency": "₹",
      "duration": { "days": 4, "nights": 3 },
      "difficulty": "Easy-Moderate",
      "difficultyColor": "#84cc16",
      "location": "Kashmir",
      "region": "Ganderbal District",
      "basecamp": "Naranag",
      "altitude": { "max": 10500, "unit": "ft" },
      "distance": { "total": 18, "unit": "km" },
      "bestMonths": ["Oct", "Nov", "Dec", "Jan", "Feb"],
      "category": "winter-treks",
      "tags": ["Trending", "Kashmir", "Snow"],
      "rating": 4.5,
      "reviews": 0,
      "groupSize": { "min": 6, "max": 18 },
      "ageLimit": { "min": 12, "max": 55 },
      "highlights": [
        "Panoramic views of Mt Harmukh",
        "Ancient Naranag Temple ruins",
        "Frozen gullies with icicles",
        "Authentic Kashmiri culture",
        "Hot Kehwa tea experience"
      ],
      "overview": "Marchoi Trek in Kashmir is the best highlight you can get of winter trekking in Kashmir. Situated near the famous ancient Naranag Temple ruins, this trek has a trail that meanders beside Wangath river, crosses frozen gullies with icicles, and gives a panoramic view from Marchoi Top of enticing Himalayan mountains including Mt Harmukh and Kotwal Peak.",
      "whyDoThis": [
        "Experience Kashmir in winter",
        "Visit ancient temple ruins",
        "Authentic Kashmiri hospitality",
        "Perfect for beginners"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Srinagar to Naranag",
          "description": "Drive from Srinagar to Naranag base camp.",
          "altitude": "7,500 ft",
          "distance": "40 km drive",
          "time": "2 hours",
          "highlights": ["Srinagar", "Naranag Temple"]
        },
        {
          "day": 2,
          "title": "Naranag to Marchoi Meadow",
          "description": "Trek through forest and along Wangath river to Marchoi meadow.",
          "altitude": "9,500 ft",
          "distance": "8 km trek",
          "time": "5-6 hours",
          "highlights": ["Forest Trail", "River Walk", "Meadows"]
        },
        {
          "day": 3,
          "title": "Marchoi Top and Return",
          "description": "Summit Marchoi Top for panoramic views and return to meadow.",
          "altitude": "10,500 ft",
          "distance": "6 km trek",
          "time": "4-5 hours",
          "highlights": ["Summit Views", "Mt Harmukh", "Photo Opportunities"]
        },
        {
          "day": 4,
          "title": "Return to Srinagar",
          "description": "Descend to Naranag and drive back to Srinagar.",
          "altitude": "-",
          "distance": "4 km trek + 40 km drive",
          "time": "4-5 hours total",
          "highlights": ["Departure"]
        }
      ],
      "inclusions": [
        "Accommodation at base and camps",
        "All meals during trek",
        "Expert guides",
        "Camping equipment",
        "All permits",
        "Kehwa tea service"
      ],
      "exclusions": [
        "Travel to Srinagar",
        "Personal expenses",
        "Travel Insurance"
      ],
      "thingsToCarry": [
        "Heavy winter clothing",
        "Snow boots",
        "Gloves and beanies",
        "Sunglasses",
        "Personal medications"
      ],
      "images": [
        "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=800",
        "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800"
      ],
      "thumbnail": "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?w=400"
    }
  ],
  "categories": [
    { "id": "winter-treks", "name": "Winter Treks", "icon": "❄️" },
    { "id": "weekend-treks", "name": "Weekend Treks", "icon": "🏕️" },
    { "id": "adventure-treks", "name": "Adventure Treks", "icon": "🏔️" },
    { "id": "backpacking-trips", "name": "Backpacking Trips", "icon": "🎒" }
  ],
  "locations": [
    "Uttarakhand",
    "Himachal Pradesh",
    "Ladakh",
    "Kashmir"
  ]
}
;
