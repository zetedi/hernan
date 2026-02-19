import { TranslationData } from '../types';
import { IMAGES } from '../assets';

export const enTranslations: TranslationData = {
    ui: {
        viewDetails: "View Details",
        inquire: "Inquire",
        contribution: "Contribution",
        bookRetreat: "Book This Retreat",
        bookCeremony: "Book This Ceremony",
        accommodation: "Accommodation",
        note: "Note",
        eventDetails: "Event Details",
        location: "Location",
        capacity: "Capacity",
        theme: "Theme",
        email: "Email",
        whatsapp: "WhatsApp",
        connectWithUs: "Connect with us",
        featuredExperience: "Featured Experience",
        viewFlyer: "View Event Flyer",
        duration: "Duration",
        service: "Service",
        dailyJourney: "Daily Journey"
    },
    flyer: {
      highlights: "Key Dates",
      scan: "Scan for Details",
      reserve: "Reserve Your Spot",
      limited: "Limited spaces available",
      flexibleDates: "Flexible Dates",
      print: "Print / Save PDF",
      oneDayPossible: "Possible to join for a single day"
    },
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact", faq: "Help / FAQ" },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      retreatTeaser: { label: "Sacred Immersion", title: "2 Day Retreat", location: "Pisac & Kinsacocha" },
      ausangateTeaser: { label: "Closer to the Sky", title: "Ausangate 3 Days", date: "Mar 31 - Apr 2, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "Feb 21 - Mar 4, 2026" }
    },
    benefits: {
      title: "The Power of Wachuma",
      subtitle: "Why we journey with the Sacred Cactus",
      items: [
        { title: "Emotional Healing", description: "Release past traumas and emotional blockages stored in the body, finding forgiveness and peace." },
        { title: "Connection to Nature", description: "Experience a profound unity with the Earth, the elements, and the living spirit of the Andes." },
        { title: "Clarity & Vision", description: "Quiet the mind to receive guidance, purpose, and a renewed perspective on your life path." }
      ]
    },
    about: {
      title: "Meet Hernan",
      subtitle: "Guardian of the Sacred Cactus",
      description: [
        "<strong>Hernan Ccolque</strong> is a Quechua native and a devoted facilitator of <strong>Wachuma (San Pedro) ceremonies</strong>, deeply rooted in the sacred traditions of the Andes. Born above 5000m in <strong>Viacha</strong>, a high-altitude community of <strong>Pisac</strong>, Hernan carries a medicinal healing lineage that dates back to pre-Inca times.",
        "According to ancestral tradition, only one child per generation may inherit this path, and they must choose it voluntarily. The wisdom passed from his grandfather Carmen to his father Beninho. Among seven siblings, Hernan chose the medicine at a very early age, becoming the sole carrier of this ancient legacy and its profound connection to <strong>Pachamama (Mother Earth)</strong>.",
        "<strong>The Ccana Lineage from Espinar.</strong> Hernan hails from the <strong>Espinar province</strong> and his lineage is <strong>Ccana (K'ana)</strong>. The K'ana culture was a pre-Inca society that formed a unique, peaceful strategic alliance with the Inca Empire rather than typical conquest. Integrating peacefully during the reign of Pachacutec, they became vital military allies—elite <strong>'Sinchis'</strong> warriors who helped defeat the Chancas. Because of this reciprocity, they were granted lands in Collasuyo and their ancient capital, Kanamarca, was rebuilt by the Incas.",
        "<strong>The Spirit of Wachuma.</strong> There is a saying that the spirit of Wachuma connected the people from this region first and they kept it in their heart because the plant told them it will disappear from the land, which happened not too long ago. Hernan carries this memory and spirit forward.",
        "<strong>Pisac and Viacha.</strong> We are based in <strong>Pisac</strong>, a vibrant town in the Sacred Valley, where we host ceremonies and offer peaceful accommodations at <strong>Wayna Wasi Hotel</strong>. For a deeper immersion, our multi-day retreats are held in <strong>Viacha</strong>, a serene community high above Pisac."
      ]
    },
    services: {
      title: "Our Offerings",
      items: [
        { 
            title: "2 Day Retreat", 
            description: "Deep immersion at Wayna Wasi & Kinsacocha. Base cost $173 (1 person). Each additional person +$70. Accommodation +$20 per person. Max 10 people.", 
            price: "$173+",
            details: { duration: "2 Days", location: "Pisac & Kinsacocha", groupSize: "Max 10" }
        },
        { 
            title: "Ausangate: Closer to the Sky (3 Days)", 
            description: "A powerful journey with the Apu. Temazcal, Rapé, and Wachuma ceremony in Pacchanta.", 
            price: "700 Soles",
            details: { duration: "3 Days", location: "Ausangate", groupSize: "Group" }
        },
        { 
            title: "Ausangate Sacred Journey (7 Days)", 
            description: "The complete immersion. 3 Wachuma ceremonies, Temazcal rituals, hiking to the lagoons, and deep healing work.", 
            price: "Inquire",
            details: { duration: "7 Days", location: "Ausangate", groupSize: "Group" }
        },
        { 
            title: "Costa Rica: 3-Day Retreat", 
            description: "Opening Ceremony and connection with the Primary Rainforests of the Diamante Valley.", 
            price: "$249 / Day",
            details: { duration: "3 Days", location: "Diamante Valley", groupSize: "Intimate Group" }
        },
        { 
            title: "Costa Rica: Sacred Pilgrimage", 
            description: "Deep immersion in El Chirripó with tribal visits, waterfall walks, and lunar eclipse celebration.", 
            price: "$249 / Day",
            details: { duration: "8 Days", location: "El Chirripó", groupSize: "Small Group" }
        },
        { 
            title: "Juchuy Qosqo Immersion", 
            description: "2 Days at the 'Little Cusco' ruins. Stay with a local family, cook traditional food together, and experience deep connection.", 
            price: "$200+",
            details: { duration: "2 Days", location: "Juchuy Qosqo", groupSize: "Min 2" }
        },
        { 
            title: "1 Day Ceremony", 
            description: "A sacred journey for a minimum of 2 people. Experience the medicine in various sacred sites like ruins, lagoons, and mountains across the Sacred Valley.", 
            price: "$250",
            details: { duration: "1 Day", location: "Sacred Valley", groupSize: "Min 2" }
        },
        { 
            title: "Private Healing", 
            description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", 
            price: "Inquire",
            details: { duration: "Varies", location: "Wayna Wasi", groupSize: "1 Persona" }
        }
      ],
      ausangateCta: { 
          title: "Costa Rica: Sacred Pilgrimage", 
          description: "Deep immersion in El Chirripó with tribal visits, waterfall walks, and lunar eclipse celebration.", 
          button: "View Pilgrimage" 
      }
    },
    ausangate: {
      title: "Ausangate Sacred Journey (7 Days)",
      subtitle: "To be announced",
      description: "A profound expedition combining the healing waters of Pacchanta, the majestic presence of Apu Ausangate, and the transformative power of Wachuma and Temazcal.",
      cta: "Reserve Your Spot",
      itinerary: [
        { day: "Day 1", title: "Arrival & Purification", description: "Travel to Pacchanta. Relax in the natural thermal waters to cleanse the body, followed by a hike up towards Ausangate to set our intentions." },
        { day: "Day 2", title: "First Wachuma Ceremony", description: "Opening the heart to the Apu. A daytime ceremony connecting with the spirit of the mountain and the vast Andean sky." },
        { day: "Day 3", title: "Temazcal (Sweat Lodge) & Rapé", description: "A traditional steam bath ritual representing the womb of Mother Earth. Physical and spiritual detoxification with sacred Rapé medicine." },
        { day: "Day 4", title: "Second Wachuma Ceremony", description: "Deepening the journey. Working through internal blockages and expanding consciousness in the silence of the highlands." },
        { day: "Day 5", title: "Temazcal & Rapé", description: "A second sweat lodge ceremony to ground the energies received and purify the spirit further with sacred Rapé." },
        { day: "Day 6", title: "Third Wachuma & Integration", description: "The final medicine ceremony. Focusing on integration, gratitude, and sealing the healing received during the week." },
        { day: "Day 7", title: "Return Journey", description: "Hike back down from the mountain, final soak in the Pacchanta hot springs, and transport back to Pisac." }
      ]
    },
    ausangate3Day: {
      title: "Ausangate: A Journey Closer to the Sky (3 Days)",
      subtitle: "Ceremony with the Apu",
      description: "A condensed and powerful plant medicine journey. Connect with the sacred mountain and the healing waters in the high Andes.",
      details: {
          dates: "Mar 31 - Apr 2, 2026",
          price: "700 Soles",
          bonus: "" // Text removed
      },
      cta: "Reserve Spot",
      itinerary: [
        { day: "Day 1", title: "Arrival, Purification & Temazcal", description: "Travel to Pacchanta. Relax in the natural thermal waters to cleanse the body. We will participate in a Temazcal (Sweat Lodge) ceremony with sacred Rapé medicine for deep purification, followed by a hike up towards Ausangate to set our intentions for the journey." },
        { day: "Day 2", title: "Wachuma Ceremony", description: "Opening the heart to the Apu. A profound daytime ceremony connecting with the spirit of the mountain and the vast Andean sky." },
        { day: "Day 3", title: "Return Journey", description: "Closing the circle. Hike back down from the mountain, final soak in the Pacchanta hot springs, and transport back to Pisac." }
      ]
    },
    costaRica: {
        title: "Costa Rica: 3-Day Retreat",
        subtitle: "Mountains & Ocean Opening",
        intro: "Join Hernan Ccolque, a Quechua native Wachumero from the pre-Incan K'ana lineage, for the opening of our Costa Rica journey. This 3-day immersion focuses on establishing our connection with the spirit of Wachuma amidst the vibrant energy of the Pacific coast and the primary rainforests. Possible to join for a single day.",
        description: [
            "Experience the first step of our historic Costa Rica gathering as we open the sacred container by the Pacific Ocean.",
            "Guided by Hernan's ancestral wisdom, we focus on deep heart-opening ceremonies and immersion in the lush botanical sanctuaries of the Diamante Valley.",
            "This retreat serves as the foundation for the pilgrimage, offering purification and grounding in a secluded tropical sanctuary."
        ],
        details: { location: "Diamante Valley, Costa Rica", capacity: "Intimate Group", dates: "Feb 21 - Feb 23, 2026" },
        cta: "Request Invitation",
        oneDayPrice: "$249 / Day",
        visionTitle: "The Ocean's Call",
        visionText: "The medicine spoke of connecting the Andean wisdom with the purifying, fluid energy of the ocean. This retreat is the first step of that spiritual bridge.",
        themeValue: "Ocean & Jungle",
        itinerary: [
            { day: "Feb 21st", title: "Opening Ceremony", description: "Initial gathering and sacred opening ceremony by the Pacific Ocean." },
            { day: "Feb 22nd", title: "Rainforest Connection", description: "Full day Wachuma immersion within the botanical beauty of the Diamante Valley." },
            { day: "Feb 23rd", title: "Integration & Flow", description: "Flower cleansing rituals and integration before concluding the initial retreat." }
        ],
        packages: {
            title: "Participation Includes",
            items: [
                "3 Days / 2 Nights in Sacred Sanctuary",
                "Heart-Centered Wachuma Ceremonies",
                "Organic Tropical Meals",
                "Floral Cleansing & Rapé Medicine",
                "Transport from San Isidro"
            ]
        }
    },
    costaRicaPilgrimage: {
        title: "Costa Rica: Sacred Pilgrimage",
        subtitle: "The Chirripó Journey",
        intro: "Don Hernan is a Quechua native Wachumero from the pre-Incan K’ana lineage and guardian of ancestral traditions. This journey connects the high-altitude wisdom of the Peruvian Andes with our beloved Chirripó Mountain in sacred heart-centred Wachuma ceremonies. Experience profound healing and spiritual awakening with the ancient wisdom of the lands. Private medicine walks available for small groups every day with two very special key dates to join.",
        description: [
            "Visits to the sacred sites linking the wisdom of the land with prayers and honouring the ancient ancestors.",
            "Private medicine walks available for small groups every day with two very special key dates to join.",
            "We gather in a secluded sanctuary in El Chirripó to ensure deep personal attention and a cohesive energetic container."
        ],
        details: { location: "El Chirripó, Costa Rica", capacity: "Small Group", dates: "Feb 25 - Mar 4, 2026" },
        cta: "Request Invitation",
        visionTitle: "Mountain Wisdom",
        visionText: "The high-altitude spirits of the Andes meet the sacred Chirripó. A pilgrimage of spirit, honouring the indigenous guardians of the land.",
        themeValue: "Ancestors & Mountains",
        itinerary: [
            { day: "Feb 25th", title: "Chirripó Opening", description: "Beginning our deep immersion in the sacred mountains of El Chirripó." },
            { day: "Mar 1st", title: "Sacred Waterfall Walk", description: "Sacred Walk to waterfall at a private nature sanctuary bordering Costa Rica’s largest national reserve. San Gerardo de Rivas." },
            { day: "Mar 3rd", title: "Lunar Eclipse Celebration", description: "Lunar Eclipse Celebration and Sacred Walk to vista point at a private protected land of spiritual significance guided by a local guardian. Sendero Gigante, San Jose de Rivas." },
            { day: "Mar 4th", title: "Closing Circle", description: "Final integration and departure from the sanctuary." }
        ]
    },
    retreat2Day: {
        title: "2 Day Retreat",
        subtitle: "Wayna Wasi & Kinsacocha",
        intro: "A deep immersion into the sacred medicine, held in the sanctuary of Wayna Wasi and the powerful mountains of Pisac.",
        days: [
            { title: "Day 1 : Preparation and Arrival at Wayna Wasi", content: "Upon arrival at Wayna Wasi, participants will begin their journey with the ceremonial preparation of the bedida (the sacred Wachuma drink). This experience initiates a sacred bond with the medicine, setting the stage for inner exploration and connection. Hernan guides each participant with care, helping them clarify their intentions and open their hearts to Wachuma’s gentle yet powerful effects.", accommodation: "Spend the night at Wayna Wasi, a sanctuary of peace where the spirit of the Andes is ever-present." },
            { title: "Day 2 : Ceremony at Kinsacocha, Pisac", content: "On the second day, we will travel to the revered site of Kinsacocha in Pisac, where you will partake in a Wachuma ceremony amidst breathtaking mountain vistas. With Hernan’s experienced guidance, participants will explore their inner landscapes, seek personal insights, and receive the teachings Wachuma offers. As the ceremony concludes, a group sharing circle will allow participants to process and reflect on their journey, enhancing the retreat’s impact.", accommodation: "Return to Wayna Wasi for a peaceful night, absorbing the transformative experiences of the day." }
        ],
        conclusion: "Participants will leave with a renewed sense of self and purpose, empowered by the Wachuma experience and the timeless wisdom of Pachamama."
    },
    juchuy: {
        title: "Juchuy Qosqo Immersion",
        subtitle: "Community, Cuisine & Ruins",
        intro: "A special 2-day journey to Juchuy Qosqo ('Little Cusco'), combining a hike to ancient ruins with a deep cultural immersion staying with a local family.",
        days: [
            { title: "Day 1 : Hike & Traditional Cooking", content: "We begin with a scenic hike up to the archaeological site of Juchuy Qosqo, enjoying panoramic views of the Sacred Valley. Upon arrival, we connect with a local family who will host us. In the afternoon, we explore the ruins and learn about their history, followed by a traditional dinner prepared together with our hosts.", accommodation: "Authentic accommodation with a local family next to the ruins." },
            { title: "Day 2 : Ceremony at the Ruins", content: "Morning breaks over the Apus. We engage in a sacred Wachuma ceremony in the powerful presence of the Juchuy Qosqo ruins. Without the crowds of other sites, we can connect deeply with the history and energy of this royal estate. The ceremony allows for profound reflection and connection with the ancestors.", accommodation: "Descent and return transport to Pisac." }
        ],
        conclusion: "A unique blend of archaeological wonder, living culture, and spiritual work. You will leave with a full belly, a warm heart, and a spirit aligned with the Andes."
    },
    retreat1Day: {
        title: "1 Day Ceremony",
        subtitle: "Sacred Valley Locations",
        intro: "A focused and powerful day of healing, connecting with the medicine in sacred sites around the valley.",
        days: [
            { title: "The Ceremony", content: "We begin early in the morning, traveling to a carefully selected sacred site in the Sacred Valley (such as Pumamarca, Kinsacocha, or other power places). The ceremony is a full-day engagement with the medicine, nature, and oneself. Hernan provides guidance, holding space for deep healing and connection. The experience concludes in the late afternoon.", accommodation: "Accommodation is not included, but transport to and from the site is arranged." }
        ],
        conclusion: "A powerful reset and reconnection with the natural world, leaving you with clarity and a lighter heart.",
        details: {
            durationLabel: "Duration",
            durationValue: "8-10 Hours",
            locationLabel: "Location",
            locationValue: "Varies (Nature)",
            focusLabel: "Focus",
            focusValue: "Healing & Clarity"
        }
    },
    preparation: {
        title: "Preparing for Your San Pedro Retreat",
        subtitle: "Empower the Future of the Andean Community",
        intro: "Welcome to your transformative three-day San Pedro retreat! To make the most of this experience, we invite you to prepare yourself both physically and mentally in advance. Here’s a guide to ensure a meaningful journey.",
        diet: {
            title: "Preparation: Light Diet and Setting Intentions",
            description: "Leading up to the retreat, a light, clean diet can help open your body and mind to the experience. Here are some suggestions to follow for at least 3-5 days before arriving:",
            items: [
                { label: "Vegetarian Diet", text: "Avoid meat and animal products as they can weigh on the digestive system." },
                { label: "No Added Sugars", text: "Refrain from consuming processed sugars to keep your energy balanced." },
                { label: "Limit Stimulants", text: "Reduce or eliminate caffeine, alcohol, and other stimulants to help clear your mind and body." },
                { label: "Avoid Heavy Foods", text: "Cut out fried foods and dairy for an easier digestive process." },
                { label: "Hydration", text: "Drink plenty of water to help with clarity and overall well-being." },
                { label: "Intentions", text: "Beyond diet, take some time each day to set intentions for the retreat. Whether through journaling, meditation, or quiet reflection, tune into what you hope to gain or release through this journey." }
            ]
        },
        packing: {
            title: "The Day of the Ceremony",
            description: "On the day of the ceremony, which will take place on the second day of the retreat, we recommend bringing a few personal items that can enhance your connection and contribute to the sacred space.",
            items: [
                { label: "Wear Comfortable Clothing", text: "Dress in loose, comfortable clothing suitable for the outdoors." },
                { label: "Sun Hat or Cap", text: "Since the ceremony will be held outside, bring a hat or cap to protect yourself from the sun." },
                { label: "Bring an Offering", text: "It’s customary to bring fruits and flowers as offerings for the ceremony. This gesture symbolizes gratitude and connection to nature." },
                { label: "Carry a Water Bottle", text: "Staying hydrated throughout the day is essential." },
                { label: "Notebook and Pen", text: "You may feel inspired to journal after the ceremony to capture thoughts, insights, or emotions." }
            ]
        },
        suggestions: {
            title: "Additional Suggestions for the Retreat",
            description: "To enhance your journey, consider the following:",
            items: [
                { label: "Respect Quiet Time", text: "Use periods of silence to reflect and process your experience." },
                { label: "Breathwork and Meditation", text: "Gentle breathing exercises or meditation can help ground you and keep you centered." },
                { label: "Digital Detox", text: "Disconnect from phones and other electronics, allowing yourself to be fully present." },
                { label: "Connect with Nature", text: "If possible, spend time in nature each day, letting it support your journey inward." }
            ]
        },
        closing: "By preparing mindfully and staying open, you’ll create space for the San Pedro medicine to guide you on a profound path of discovery. We look forward to sharing this special experience with you.",
        risks: {
            title: "Important Notice: Understanding the Risks and Responsibilities",
            intro: "While this retreat is designed to offer a safe and transformative experience, it’s important to acknowledge that participation in a San Pedro ceremony involves both physical and psychological risks. Please review the following considerations carefully to ensure informed participation:",
            sections: [
                { title: "Health and Medical Disclosure", items: [{ label: "Medical Conditions", text: "Participants should inform facilitators of any medical conditions, including heart issues, mental health conditions, or any history of seizures. Some pre-existing conditions may increase risks associated with the San Pedro experience." }, { label: "Medications", text: "Certain medications, including antidepressants, antipsychotics, and some over-the-counter drugs, may have adverse interactions with San Pedro. Please disclose any medications to the facilitators well before the retreat." }, { label: "Physical Sensitivity", text: "San Pedro can cause temporary physical effects, such as nausea, vomiting, and increased heart rate. Participants should be physically and mentally prepared for these effects." }] },
                { title: "Psychological Risks and Emotional Responsibility", items: [{ label: "Intense Experiences", text: "San Pedro can bring up deep emotions and past traumas, which can be challenging to process. Participants are encouraged to engage in personal reflection or seek professional guidance beforehand if they have a history of trauma." }, { label: "Integration Support", text: "Following the retreat, participants may benefit from additional support to integrate their experiences. It is advised to plan for time, support, and resources to process any insights or emotions that arise." }] },
                { title: "Personal Responsibility", items: [{ label: "Informed Consent", text: "By participating in this retreat, you acknowledge that you are voluntarily engaging in this experience. Any personal insights, challenges, or transformations you undergo are your own responsibility." }, { label: "Safety Precautions", text: "Follow all safety guidelines provided by facilitators, including dietary restrictions, suggested behavior during ceremonies, and limitations on physical activities." }] }
            ]
        }
    },
    faq: {
        title: "Wachuma Retreat Guide",
        subtitle: "Everything you need to know about the experience",
        articles: [
            {
                title: "What to Expect on a Wachuma Retreat",
                content: [
                    "Planning a Wachuma retreat can feel like preparing for a pilgrimage of the soul. Whether you are new to plant medicine or an experienced seeker, every Wachuma ceremony offers a unique, transformative experience. Here’s what to expect when you embark on a retreat in the Sacred Valley of Peru, where the spirit of the Andes and Pachamama herself are ever-present.",
                    "<strong>A Sacred Setting for Deep Healing</strong><br>The Sacred Valley near Cusco is the perfect backdrop for your spiritual journey. Nestled among Andean mountains, our retreat space is surrounded by breathtaking landscapes that amplify the power of Wachuma. From the moment you arrive, you’ll feel the profound connection between Earth and cosmos, a connection fundamental to Andean cosmology and the Wachuma tradition.",
                    "<strong>A Typical Wachuma Ceremony Day</strong><br>Your retreat will start with a gentle introduction to Wachuma. Under the guidance of Hernan Ccolque, the ceremonies unfold in a safe, supportive space where you’ll be encouraged to listen to your inner voice. Wachuma helps open your heart, providing clarity and a sense of peace as you journey through the day. The retreat often includes quiet time in nature, group sharing, and time for reflection, making the experience holistic and healing.",
                    "<strong>Integrating Your Wachuma Experience</strong><br>The insights gained from Wachuma can be profound, and it’s important to take time to integrate these lessons into your daily life. Hernan and his team are there to help you process your experiences, whether through group discussions or one-on-one support. Many participants leave the retreat with a renewed sense of purpose and a deep connection to themselves and the world around them."
                ]
            },
            {
                title: "Discover the Healing Power of Wachuma",
                content: [
                    "<strong>What is the San Pedro Cactus?</strong><br>The San Pedro cactus, also known as Wachuma, is an ancient medicinal plant native to the highlands of the Andes, primarily in Peru. This tall, columnar green cactus, scientifically named <em>Echinopsis pachanoi</em>, thrives at high altitudes, often between 2,000 and 3,000 metros. It is easily recognized by its pronounced ribs, short spines, and large white flowers that bloom at night.",
                    "<strong>Origins and History</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>The Power of Mescaline: Connecting to Universal Harmony</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. Unlike synthetic substances, the mescaline in San Pedro gently guides individuals into an altered state of consciousness, fostering a sense of unity and harmony with the world around them.",
                    "Wachuma ceremonies often lead participants to feel deeply connected to Pachamama (Mother Earth), experiencing the pulse of nature and the rhythm of life itself. This connection helps dissolve the boundaries between self and the universe, allowing for profound insights and spiritual clarity. Many who embark on this journey describe it as a heart-opening experience, where love and compassion flow naturally.",
                    "<strong>Spiritual and Therapeutic Benefits</strong><br>San Pedro is renowned for its spiritual and healing properties. Its effects are generally gentler and more gradual compared to other plant medicines like Ayahuasca. This makes it accessible for those seeking emotional healing and inner clarity without the intensity of more abrupt awakenings.<br><br><strong>Spiritual Benefits:</strong><br>• Spiritual Awakening: Facilitates reconnection with the true self and the natural world.<br>• Heart Opening: Promotes compassion, forgiveness, and deep emotional release.<br>• Mental Clarity: Helps gain perspective on life challenges and encourages acceptance.<br><br><strong>Therapeutic Benefits:</strong><br>• Emotional Release: Helps process past traumas and unresolved emotions.<br>• Calm and Serenity: Reduces anxiety and cultivates inner peace.<br>• Connection with Nature: Strengthens the bond with the Earth and the elements."
                ]
            }
        ],
        questionsTitle: "Frequently Asked Questions",
        questions: [
            { question: "What is a San Pedro ceremony?", answer: "San Pedro (Huachuma) is a sacred medicine used for healing and expanding consciousness. We guide you safely through the experience." },
            { question: "Is it suitable for beginners?", answer: "Yes, it is suitable for everyone. We provide guidance and support throughout the journey." },
            { question: "What is Kinsacocha?", answer: "Kinsacocha is a beautiful lake in the highlands of Pisac. Having a ceremony there is a profound way to connect with the Apus (mountains)." },
            { question: "What should I bring?", answer: "Warm clothing, comfortable walking shoes, an open heart, and personal necessities. We will provide a detailed packing list." },
            { question: "What languages are spoken?", answer: "Hernan speaks Quechua and Spanish. We have assistants who speak English and French to help with translation." },
            { question: "Is it safe?", answer: "Yes, we prioritize safety. Our facilitators are experienced and will not leave you unattended." },
            { question: "Is there a refund policy?", answer: "Yes, please inform us in advance if you cannot attend. Policies vary based on the timing of cancellation." }
        ]
      },
      testimonials: {
          title: "Voices of the Heart",
          items: [
              { 
                  name: "Zoltan E.", 
                  location: "Hungary", 
                  text: "It is a truly authentic experience of connection with the spirit of the earth and the healing power of plant medicine. It has been a deep connection with the ancient wisdom of Inca and pre-Inca spiritual guides through Maestro Hernan. I am very grateful for the journey.",
                  image: IMAGES.zoltan 
              },
              {
                name: "Stephanie K.",
                location: "Google Review",
                text: "I feel very fortunate to have participated in a full-day Wachuma ceremony with Don Hernan. We traveled to the mountains, through a local village, to commune with nature, spirit, and the energy of reciprocity. His guidance is sincere and his medicine is the best Wachuma I have drunk. We returned to his home to finish the ceremony with a delicious homemade Andean soup and a fire in the garden under the full moon and stars. I highly recommend visiting Wayna Wasi and working with Don Hernan.",
                image: IMAGES.kittel
            }
          ]
      },
      contact: {
          title: "Contact",
          form: { name: "Your Name", email: "Your Email", message: "Your Message", submit: "Send Message" },
          info: "We are located in the heart of the Sacred Valley, near Calca, Cusco."
      },
      footer: {
        description: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
        rights: "All rights reserved.",
        columns: {
          links: {
            title: "Navigation",
            items: [
              { label: "Home", href: "/" },
              { label: "The Family", href: "/about" },
              { label: "Ceremonies", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" }
            ]
          },
          reviews: {
              title: "Reviews",
              rating: "5.0"
          },
          follow: {
              title: "Follow Us",
              facebook: "https://www.facebook.com/hernan.wachuma",
              instagram: "https://www.instagram.com/hernan_wachuma"
          },
          contact: {
              title: "Contact",
              email: "hernan.wachuma@gmail.com",
              phone: "+51 984 316 833"
          },
          find: {
              title: "Find Us",
              address: "Sacred Valley, Cusco, Peru"
          }
        }
      }
};
