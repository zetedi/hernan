
import { Language, TranslationData } from './types';

// --- DYNAMIC IMAGE LOADING (VITE) ---
const galleryModules = (import.meta as any).glob('./assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', { 
    eager: true, 
    import: 'default' 
});

const sortedGalleryKeys = Object.keys(galleryModules).sort((a, b) => {
    const nameA = a.split('/').pop() || '';
    const nameB = b.split('/').pop() || '';
    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
});

const dynamicGallery = sortedGalleryKeys.map(key => galleryModules[key] as string);

const fallbackGallery = [
    "/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg",
    "/gallery/5.jpg", "/gallery/6.jpg", "/gallery/7.jpg", "/gallery/8.jpg",
    "/gallery/9.jpg", "/gallery/10.jpg", "/gallery/11.jpg", "/gallery/12.jpg",
    "/gallery/13.jpg", "/gallery/14.jpg", "/gallery/15.jpg", "/gallery/16.jpg",
    "/gallery/17.jpg", "/gallery/18.jpg",
];

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.jpg",
  about: "/about.jpg",
  canyon: "/canyon.jpg",
  ruins: "/ruins.jpg",
  flowers: "/flowers.jpg",
  ausangate: "/ausangate.jpg",
  costa: "/costa.jpg",
  mayra: "/mayra.jpg",
  drum: "/drum.jpg",
  connect: "/connect.jpg",
  private: "/private.jpg",
  day1: "/day1.jpg",
  day2: "/day2.jpg",
  day3: "/day3.jpg",
  day4: "/day4.jpg",
  day5: "/day5.jpg",
  day6: "/day6.jpg",
  day7: "/day7.jpg",
  fireVideo: "/fire.mp4",
  zoltan: "/zoltan.jpg",
  kittel: "/kittel.jpg",
  juchuy: "/juchuy.jpg",
  maestros: "/maestros.jpg",
  gallery: dynamicGallery.length > 0 ? dynamicGallery : fallbackGallery
};

// --- ENGLISH DATA (Source of Truth) ---

const enTranslations: TranslationData = {
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
        service: "Service"
    },
    flyer: {
      highlights: "Experience Highlights",
      scan: "Scan for Details",
      reserve: "Reserve Your Spot",
      limited: "Limited spaces available",
      flexibleDates: "Flexible Dates",
      print: "Print / Save PDF"
    },
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact", faq: "Help / FAQ" },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      retreatTeaser: { label: "Sacred Immersion", title: "2 Day Retreat", location: "Pisac & Kinsacocha" },
      ausangateTeaser: { label: "New Year Special", title: "Ausangate 3-Day", date: "Jan 3-5, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "Feb 24 - Mar 2, 2026" }
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
        "<strong>Hernan Colque</strong> is a Quechua native and a devoted facilitator of <strong>Wachuma (San Pedro) ceremonies</strong>, deeply rooted in the sacred traditions of the Andes. Born above 5000m in <strong>Viacha</strong>, a high-altitude community of <strong>Pisac</strong>, Hernan carries a medicinal healing lineage that dates back to pre-Inca times.",
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
            title: "New Year Ausangate (3 Days)", 
            description: "Start 2026 with the Apu. Temazcal, Rapé, and Wachuma ceremony in Pacchanta. Includes free professional photography.", 
            price: "€173",
            details: { duration: "3 Days", location: "Pacchanta & Ausangate", groupSize: "Group" }
        },
        { 
            title: "Ausangate Sacred Journey (7 Days)", 
            description: "The complete immersion. 3 Wachuma ceremonies, Temazcal rituals, hiking to the lagoons, and deep healing work.", 
            price: "Inquire",
            details: { duration: "7 Days", location: "Pacchanta & Ausangate", groupSize: "Group" }
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
            title: "Costa Rica Pilgrimage", 
            description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica. Limited to 21 participants.", 
            price: "Inquire",
            details: { duration: "7 Days", location: "Costa Rica", groupSize: "Max 21" }
        },
        { 
            title: "Private Healing", 
            description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", 
            price: "Inquire",
            details: { duration: "Varies", location: "Wayna Wasi", groupSize: "1 Person" }
        }
      ],
      ausangateCta: { title: "Special New Year: Ausangate 3-Day", description: "Start the new year with a special Wachuma Journey to Ausangate. Includes free professional photography.", button: "View 3-Day Journey" }
    },
    ausangate: {
      title: "Ausangate Sacred Journey (7 Days)",
      subtitle: "January 3rd - 9th, 2026",
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
      title: "New Year Ausangate Journey (3 Days)",
      subtitle: "Start the New Year with the Apu",
      description: "A condensed and powerful way to begin 2026. Start the new year with a special Wachuma Journey to Ausangate, connecting with the sacred mountain and the healing waters.",
      details: {
          dates: "January 3rd - 5th, 2026",
          price: "€173",
          bonus: "Includes free professional photography session"
      },
      cta: "Reserve Spot",
      itinerary: [
        { day: "Day 1", title: "Arrival, Purification & Temazcal", description: "Travel to Pacchanta. Relax in the natural thermal waters to cleanse the body. We will participate in a Temazcal (Sweat Lodge) ceremony with sacred Rapé medicine for deep purification, followed by a hike up towards Ausangate to set our intentions for the New Year." },
        { day: "Day 2", title: "Wachuma Ceremony", description: "Opening the heart to the Apu. A profound daytime ceremony connecting with the spirit of the mountain and the vast Andean sky." },
        { day: "Day 3", title: "Return Journey", description: "Closing the circle. Hike back down from the mountain, final soak in the Pacchanta hot springs, and transport back to Pisac." }
      ]
    },
    costaRica: {
        title: "Sacred Pilgrimage to Costa Rica",
        subtitle: "Mountains & Ocean United",
        intro: "A very special occasion, the first time in Costa Rica in a secret location. A connection of the sacred mountains with the ocean, a special physical and spiritual pilgrimage following a vision and a message from the medicine.",
        description: [
            "Join us for a historic and transformative gathering. For the first time, Hernan brings the sacred Wachuma medicine to the vibrant lands of Costa Rica.",
            "Guided by a profound vision and a direct message from the medicine, this retreat is a spiritual pilgrimage connecting the wisdom of the Andean mountains with the cleansing power of the ocean.",
            "In addition to the sacred Wachuma ceremonies, we will share the medicine of Rapé, perform cleansing works with flowers, and journey through guided medicine meditations.",
            "We will gather in a secret, secluded location, immersed in nature's embrace. This intimate experience is strictly limited to 21 participants (including helpers) to ensure deep, personal attention and a cohesive energetic container."
        ],
        details: { location: "Secret Location, Costa Rica", capacity: "Limited to 21 Souls", dates: "February 24 - March 2, 2026" },
        cta: "Request Invitation",
        visionTitle: "A Vision from the Medicine",
        visionText: "This gathering is not just a retreat; it is a response to a call. The medicine spoke of connecting the wisdom held in the high Andes with the purifying, fluid energy of the ocean. A pilgrimage of spirit and body.",
        themeValue: "Ocean & Mountain"
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
        title: "Juchuy Qosqo Ancestral Immersion",
        subtitle: "Community, Cuisine & Ruins",
        intro: "A special 2-day journey to Juchuy Qosqo ('Little Cusco'), combining a hike to ancient ruins with a deep cultural immersion staying with a local family.",
        days: [
            { title: "Day 1 : Hike & Traditional Cooking", content: "We begin our journey hiking up to the spectacular ruins of Juchuy Qosqo, overlooking the Sacred Valley. In the afternoon, we settle into an authentic local family home. Here, we will prepare food together, cooking traditional Andean soup and sharing stories by the fire. This communal preparation is a ceremony in itself, grounding us in the local way of life.", accommodation: "Authentic accommodation with a local family next to the ruins." },
            { title: "Day 2 : Ceremony at the Ruins", content: "Morning breaks over the Apus. We engage in a sacred Wachuma ceremony in the powerful presence of the Juchuy Qosqo ruins. Without the crowds of other sites, we can connect deeply with the history and energy of this royal estate. The ceremony allows for profound reflection and connection with the ancestors.", accommodation: "Descent and return transport to Pisac." }
        ],
        conclusion: "A unique blend of archaeological wonder, living culture, and spiritual work. You will leave with a full belly, a warm heart, and a spirit aligned with the Andes."
    },
    retreat1Day: {
        title: "1 Day Ceremony",
        subtitle: "Sacred Sites of the Valley",
        intro: "A focused and profound journey into the medicine, held at varying sacred locations such as ancient ruins, serene lagoons, or powerful mountains.",
        days: [
            { title: "The Ceremony", content: "We begin early in the morning, traveling to a carefully selected sacred site in the Sacred Valley (such as Pumamarca, Kinsacocha, or other power places). The ceremony is a full-day engagement with the medicine, nature, and oneself. Hernan provides guidance, holding space for deep healing and connection. The experience concludes in the late afternoon.", accommodation: "Accommodation is not included, but transport to and from the site is arranged." }
        ],
        conclusion: "A powerful reset and reconnection with the natural world, leaving you with clarity and a lighter heart.",
        details: {
            durationLabel: "Duration",
            durationValue: "Full Day (Morning to Afternoon)",
            locationLabel: "Location",
            locationValue: "Sacred Valley Sites",
            focusLabel: "Focus",
            focusValue: "Healing & Nature"
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
                { title: "Personal Responsibility", items: [{ label: "Informed Consent", text: "By participating in this retreat, you acknowledge that you are voluntarily engaging in this experience. Any insights, challenges, or personal transformations you experience are your own responsibility." }, { label: "Safety Precautions", text: "Follow all safety guidelines provided by facilitators, including dietary restrictions, suggested behavior during ceremonies, and limitations on physical activities." }] }
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
                    "<strong>A Sacred Setting for Deep Healing</strong><br>The Sacred Valley near Cusco is the perfect backdrop for your spiritual journey. Nestled among the Andean mountains, our retreat space is surrounded by stunning landscapes that amplify the power of Wachuma. From the moment you arrive, you’ll feel the deep connection between the Earth and the cosmos—a connection that is central to Andean cosmology and the Wachuma tradition.",
                    "<strong>A Typical Wachuma Ceremony Day</strong><br>Your retreat will start with a gentle introduction to Wachuma. Under the guidance of Hernan Colque, the ceremonies unfold in a safe, supportive space where you’ll be encouraged to listen to your inner voice. Wachuma helps open your heart, providing clarity and a sense of peace as you journey through the day. The retreat often includes quiet time in nature, group sharing, and time for reflection, making the experience holistic and healing.",
                    "<strong>Integrating Your Wachuma Experience</strong><br>The insights gained from Wachuma can be profound, and it’s important to take time to integrate these lessons into your daily life. Hernan and his team are there to help you process your experiences, whether through group discussions or one-on-one support. Many participants leave the retreat with a renewed sense of purpose and a deep connection to themselves and the world around them."
                ]
            },
            {
                title: "Discover the Healing Power of Wachuma",
                content: [
                    "<strong>What is the San Pedro Cactus?</strong><br>The San Pedro cactus, also known as Wachuma, is an ancient medicinal plant native to the highlands of the Andes, primarily in Peru. This tall, columnar green cactus, scientifically named <em>Echinopsis pachanoi</em>, thrives at high altitudes, often between 2,000 and 3,000 meters. It is easily recognized by its pronounced ribs, short spines, and large white flowers that bloom at night.",
                    "<strong>Origins and History</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>The Power of Mescaline: Connecting to Universal Harmony</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. Unlike synthetic substances, mescaline from San Pedro gently guides individuals into an altered state of consciousness, fostering a sense of unity and harmony with the world around them.",
                    "Wachuma ceremonies often lead participants to feel deeply connected to Pachamama (Mother Earth), experiencing the pulse of nature and the rhythm of life itself. This connection helps dissolve the boundaries between self and the universe, allowing for profound insights and spiritual clarity. Many who embark on this journey describe it as a heart-opening experience, where love and compassion naturally flow.",
                    "<strong>Spiritual and Therapeutic Benefits</strong><br>San Pedro is renowned for its spiritual and healing properties. Its effects are generally more gentle and gradual compared to other plant medicines like Ayahuasca. This makes it accessible for those seeking emotional healing and inner clarity without the intensity of more abrupt awakenings.<br><br><strong>Spiritual Benefits:</strong><br>• Spiritual Awakening: Facilitates reconnection with one’s true self and the natural world.<br>• Heart Opening: Promotes compassion, forgiveness, and deep emotional release.<br>• Mental Clarity: Helps gain perspective on life challenges and fosters acceptance.<br><br><strong>Therapeutic Benefits:</strong><br>• Emotional Release: Aids in processing past trauma and unresolved emotions.<br>• Calmness and Serenity: Reduces anxiety and cultivates inner peace.<br>• Nature Connection: Strengthens the bond with the Earth and the elements."
                ]
            }
        ],
        questionsTitle: "Frequently Asked Questions",
        questions: [
            { question: "What is a San Pedro ceremony?", answer: "San Pedro (Huachuma) is a sacred plant medicine used for healing, vision, and deep spiritual connection. Our ceremonies are guided by experienced facilitators to ensure a safe and transformative experience." },
            { question: "Is the retreat suitable for beginners?", answer: "Yes, our retreats are open to everyone, whether you have prior experience with plant medicine or are a first-time participant. We provide full guidance and support throughout the process." },
            { question: "What is Kinsacocha, and why is it special?", answer: "Kinsacocha, located near Pisac, is a tranquil area surrounded by sacred lakes. It is an ideal setting for Huachuma ceremonies, offering a deep connection to nature and Andean spirituality." },
            { question: "What should I bring to the retreat or ceremony?", answer: "A detailed list will be provided, but essentials include comfortable clothing, hiking shoes, personal items, and an open heart for transformation." },
            { question: "What language is spoken during the retreat?", answer: "Hernán speaks Quechua and Spanish. If you don’t speak these languages, a French-Spanish translator will be available to assist you throughout the retreat." },
            { question: "Is the retreat safe?", answer: "Safety is our top priority. Our retreats are held in a controlled, supportive environment with experienced facilitators to guide you through each step of the journey." },
            { question: "What is your refund or cancellation policy?", answer: "Deposits are refundable up to a specific date. We encourage early communication if your plans change to ensure clarity and support." }
        ]
    },
    testimonials: {
      title: "Voices from the Heart",
      items: [
        { 
            name: "Zoltan E.", 
            location: "Hungary", 
            text: `It’s a truly authentic experience of connecting with the spirit of the land and the healing power of the plant medicine. It has been a profound connection with the ancient wisdom of the Incan and pre Incan spiritual guides through Maestro Hernan. I’m very grateful for the journey.`,
            image: IMAGES.zoltan 
        },
        {
            name: "Stephanie K.",
            location: "Google Review",
            text: `I feel so fortunate to have participated in a full-day Wachuma ceremony with Don Hernan. We journeyed way up into the mountains, through a local village, to commune with nature, spirit, and the energy of reciprocity. His guidance is sincere, and his medicine is the best Wachuma I’ve imbibed. We returned to his house to finish the ceremony with delicious homemade Andean soup, and a fire in the garden under the full moon and stars. I highly recommend visiting Wayna Wasi and working with Don Hernan. 🫶🏼✨🌵🙏🏼⛰️`,
            image: IMAGES.kittel
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      form: { name: "Your Name", email: "Your Email", message: "Your Message", submit: "Send Message" },
      info: "We are located in the heart of the Sacred Valley, near Calca, Cusco."
    },
    footer: {
      description: "Experience the transformative power of Wachuma, the sacred Andean plant medicine known as San Pedro. Join Hernan in guided ceremonies that will help you reconnect with your inner self, heal deeply, and awaken your spirit near Cusco, in the heart of Peru’s Sacred Valley.",
      columns: {
        links: { title: "Links", items: [{ label: "About us", href: "/about" }, { label: "The Community", href: "/about" }, { label: "Contact us", href: "/contact" }] },
        reviews: { title: "Google Reviews", rating: "4,9/5" },
        follow: { title: "Follow us", facebook: "https://www.facebook.com/hernan.wachuma", instagram: "https://www.instagram.com/hernan_wachuma" },
        contact: { title: "Contact us", email: "hernan.wachuma@gmail.com", phone: "+51 928 383 821" },
        find: { title: "Find us", address: "Wayna Wasi, Pisac, Perú" }
      },
      rights: "All rights reserved."
    }
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
  // ENGLISH
  [Language.EN]: enTranslations,

  // SPANISH
  [Language.ES]: {
      ...enTranslations, // Keep structure for type safety, but override ALL text fields below
      ui: {
        viewDetails: "Ver Detalles",
        inquire: "Consultar",
        contribution: "Contribución",
        bookRetreat: "Reservar este Retiro",
        bookCeremony: "Reservar esta Ceremonia",
        accommodation: "Alojamiento",
        note: "Nota",
        eventDetails: "Detalles del Evento",
        location: "Ubicación",
        capacity: "Capacidad",
        theme: "Tema",
        email: "Email",
        whatsapp: "WhatsApp",
        connectWithUs: "Conecta con nosotros",
        featuredExperience: "Experiencia Destacada",
        viewFlyer: "Ver Folleto del Evento",
        duration: "Duración",
        service: "Servicio"
      },
      flyer: {
        highlights: "Puntos Destacados",
        scan: "Escanear para Detalles",
        reserve: "Reserva tu Lugar",
        limited: "Plazas limitadas",
        flexibleDates: "Fechas Flexibles",
        print: "Imprimir / Guardar PDF"
      },
      nav: { home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto", faq: "Ayuda / FAQ" },
      hero: {
          title: "Medicina Sagrada de los Andes",
          subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
          cta: "Reserva una Ceremonia",
          retreatTeaser: { label: "Inmersión Sagrada", title: "Retiro de 2 Días", location: "Pisac y Kinsacocha" },
          ausangateTeaser: { label: "Especial Año Nuevo", title: "Ausangate 3 Días", date: "3-5 Enero, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "24 Feb - 2 Mar, 2026" }
      },
      benefits: {
        title: "El Poder del Wachuma",
        subtitle: "Por qué viajamos con el Cactus Sagrado",
        items: [
            { title: "Sanación Emocional", description: "Libera traumas pasados y bloqueos emocionales almacenados en el cuerpo, encontrando el perdón y la paz." },
            { title: "Conexión con la Naturaleza", description: "Experimenta una profunda unidad con la Tierra, los elementos y el espíritu vivo de los Andes." },
            { title: "Claridad y Visión", description: "Aquieta la mente para recibir guía, propósito y una perspectiva renovada de tu camino de vida." }
        ]
      },
      about: {
        title: "Conoce a Hernan",
        subtitle: "Guardián del Cactus Sagrado",
        description: [
            "<strong>Hernan Colque</strong> es nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>, profundamente arraigado en las tradiciones sagradas de los Andes. Nacido por encima de los 5000m en <strong>Viacha</strong>, una comunidad de altura de <strong>Pisac</strong>, Hernan lleva un linaje de sanación medicinal que se remonta a tiempos pre-incas.",
            "Según la tradición ancestral, solo un hijo por generación puede heredar este camino, y debe elegirlo voluntariamente. La sabiduría pasó de su abuelo Carmen a su padre Beninho. Entre siete hermanos, Hernan eligió la medicina a una edad muy temprana, convirtiéndose en el único portador de este antiguo legado y su profunda conexión con la <strong>Pachamama (Madre Tierra)</strong>.",
            "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la provincia de <strong>Espinar</strong> y su linaje es <strong>Ccana (K'ana)</strong>. La cultura K'ana fue una sociedad pre-inca que formó una alianza estratégica pacífica con el Imperio Inca en lugar de una conquista típica. Al integrarse pacíficamente durante el reinado de Pachacutec, se convirtieron en aliados militares vitales—guerreros de élite <strong>'Sinchis'</strong> que ayudaron a derrotar a los Chancas. Debido a esta reciprocidad, se les concedieron tierras en el Collasuyo y su antigua capital, Kanamarca, fue reconstruida por los Incas.",
            "<strong>El Espíritu del Wachuma.</strong> Se dice que el espíritu del Wachuma conectó primero a la gente de esta región y lo guardaron en su corazón porque la planta les dijo que desaparecería de la tierra, lo cual sucedió no hace mucho. Hernan lleva adelante esta memoria y espíritu.",
            "<strong>Pisac y Viacha.</strong> Estamos ubicados en <strong>Pisac</strong>, un pueblo vibrante en el Valle Sagrado, donde organizamos ceremonias y ofrecemos alojamiento tranquilo en el <strong>Hotel Wayna Wasi</strong>. Para una inmersión más profunda, nuestros retiros de varios días se llevan a cabo en <strong>Viacha</strong>, una comunidad serena en lo alto de Pisac."
        ]
      },
      services: {
          title: "Nuestras Ofrendas",
          items: [
            { 
                title: "Retiro de 2 Días", 
                description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Costo base $173 (1 persona). Persona extra +$70. Alojamiento +$20 por persona. Máx 10 personas.", 
                price: "$173+",
                details: { duration: "2 Días", location: "Pisac y Kinsacocha", groupSize: "Máx 10" }
            },
            { 
                title: "Ausangate Año Nuevo (3 Días)", 
                description: "Comienza el 2026 con el Apu. Temazcal, Rapé y ceremonia de Wachuma en Pacchanta. Incluye fotografía profesional gratuita.", 
                price: "€173",
                details: { duration: "3 Días", location: "Pacchanta y Ausangate", groupSize: "Grupo" }
            },
            { 
                title: "Viaje Sagrado Ausangate (7 Días)", 
                description: "La inmersión completa. 3 ceremonias de Wachuma, rituales de Temazcal, caminata a las lagunas y trabajo de sanación profunda.", 
                price: "Consultar",
                details: { duration: "7 Días", location: "Pacchanta y Ausangate", groupSize: "Grupo" }
            },
            { 
                title: "Inmersión Juchuy Qosqo", 
                description: "2 Días en las ruinas de 'Cusco Pequeño'. Quédate con una familia local, cocina comida tradicional juntos y experimenta una conexión profunda.", 
                price: "$200+",
                details: { duration: "2 Días", location: "Juchuy Qosqo", groupSize: "Mín 2" }
            },
            { 
                title: "Ceremonia de 1 Día", 
                description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", 
                price: "$250",
                details: { duration: "1 Día", location: "Valle Sagrado", groupSize: "Mín 2" }
            },
            { 
                title: "Peregrinaje a Costa Rica", 
                description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", 
                price: "Consultar",
                details: { duration: "7 Días", location: "Costa Rica", groupSize: "Máx 21" }
            },
            { 
                title: "Sanación Privada", 
                description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", 
                price: "Consultar",
                details: { duration: "Varía", location: "Wayna Wasi", groupSize: "1 Persona" }
            }
          ],
          ausangateCta: { title: "Año Nuevo Especial: Ausangate 3 Días", description: "Comienza el año nuevo con un viaje especial de Wachuma al Ausangate. Incluye fotografía profesional gratuita.", button: "Ver Viaje de 3 Días" }
      },
      ausangate: {
        title: "Viaje Sagrado al Ausangate",
        subtitle: "3-9 de Enero, 2026",
        description: "Una expedición profunda combinando las aguas curativas de Pacchanta, la majestuosa presencia del Apu Ausangate y el poder transformador del Wachuma y el Temazcal.",
        cta: "Reserva tu Lugar",
        itinerary: [
          { day: "Día 1", title: "Llegada y Purificación", description: "Viaje a Pacchanta. Relajación en las aguas termales naturales para limpiar el cuerpo, seguido de una caminata hacia el Ausangate para establecer nuestras intenciones." },
          { day: "Día 2", title: "Primera Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
          { day: "Día 3", title: "Temazcal y Rapé", description: "Un ritual tradicional de baño de vapor que representa el vientre de la Madre Tierra. Desintoxicación física y espiritual con la medicina sagrada de Rapé." },
          { day: "Día 4", title: "Segunda Ceremonia de Wachuma", description: "Profundizando el viaje. Trabajando a través de bloqueos internos y expandiendo la conciencia en el silencio de las tierras altas." },
          { day: "Día 5", title: "Temazcal y Rapé", description: "Una segunda ceremonia de baño de vapor para asentar las energías recibidas y purificar el espíritu aún más con Rapé sagrado." },
          { day: "Día 6", title: "Tercera Ceremonia de Wachuma e Integración", description: "La ceremonia final de medicina. Enfocada en la integración, la gratitud y el sellado de la sanación recibida durante la semana." },
          { day: "Día 7", title: "Viaje de Regreso", description: "Caminata de descenso de la montaña, baño final en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
        ]
      },
      ausangate3Day: {
        title: "Viaje Ausangate de Año Nuevo (3 Días)",
        subtitle: "Comienza el Año Nuevo con el Apu",
        description: "Una forma condensada y poderosa de comenzar el 2026. Comienza el año nuevo con un viaje especial de Wachuma al Ausangate, conectando con la montaña sagrada y las aguas curativas.",
        details: {
            dates: "3 - 5 de Enero, 2026",
            price: "€173",
            bonus: "Incluye sesión de fotografía profesional gratuita"
        },
        cta: "Reservar Lugar",
        itinerary: [
          { day: "Día 1", title: "Llegada, Purificación y Temazcal", description: "Viaje a Pacchanta. Relajación en las aguas termales naturales. Participaremos en una ceremonia de Temazcal con medicina sagrada de Rapé para una purificación profunda, seguida de una caminata hacia el Ausangate para establecer nuestras intenciones de Año Nuevo." },
          { day: "Día 2", title: "Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una profunda ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
          { day: "Día 3", title: "Viaje de Regreso", description: "Cerrando el círculo. Caminata de descenso de la montaña, baño final en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
        ]
      },
      costaRica: {
        title: "Peregrinaje Sagrado a Costa Rica",
        subtitle: "Montañas y Océano Unidos",
        intro: "Una ocasión muy especial, por primera vez en Costa Rica en una ubicación secreta. Una conexión de las montañas sagradas con el océano, un peregrinaje físico y espiritual especial siguiendo una visión y un mensaje de la medicina.",
        description: [
            "Únete a nosotros para una reunión histórica y transformadora. Por primera vez, Hernan trae la medicina sagrada Wachuma a las vibrantes tierras de Costa Rica.",
            "Guiados por una profunda visión y un mensaje directo de la medicina, este retiro es un peregrinaje espiritual que conecta la sabiduría de los Andes con el poder limpiador del océano.",
            "Además de las ceremonias sagradas de Wachuma, compartiremos la medicina del Rapé, realizaremos trabajos de limpieza con flores y viajaremos a través de meditaciones guiadas con medicina.",
            "Nos reuniremos en un lugar secreto y apartado, inmersos en el abrazo de la naturaleza. Esta experiencia íntima está estrictamente limitada a 21 participantes (incluidos los ayudantes) para garantizar una atención personal profunda y un contenedor energético cohesivo."
        ],
        details: { location: "Ubicación Secreta, Costa Rica", capacity: "Limitado a 21 Almas", dates: "24 de Febrero - 2 de Marzo, 2026" },
        cta: "Solicitar Invitación",
        visionTitle: "Una Visión de la Medicina",
        visionText: "Este encuentro no es solo un retiro; es una respuesta a un llamado. La medicina habló de conectar la sabiduría de los Andes con la energía purificadora y fluida del océano. Un peregrinaje del espíritu y el cuerpo.",
        themeValue: "Océano y Montaña"
      },
      retreat2Day: {
          title: "Retiro de 2 Días",
          subtitle: "Wayna Wasi y Kinsacocha",
          intro: "Una inmersión profunda en la medicina sagrada, realizada en el santuario de Wayna Wasi y las poderosas montañas de Pisac.",
          days: [
              { title: "Día 1: Preparación y Llegada a Wayna Wasi", content: "A su llegada a Wayna Wasi, los participantes comenzarán su viaje con la preparación ceremonial de la bebida (la sagrada bebida Wachuma). Esta experiencia inicia un vínculo sagrado con la medicina, preparando el escenario para la exploración interior y la conexión. Hernan guía a cada participante con cuidado, ayudándoles a clarificar sus intenciones y abrir sus corazones a los efectos suaves pero poderosos del Wachuma.", accommodation: "Pasar la noche en Wayna Wasi, un santuario de paz donde el espíritu de los Andes está siempre presente." },
              { title: "Día 2: Ceremonia en Kinsacocha, Pisac", content: "En el segundo día, viajaremos al venerado sitio de Kinsacocha en Pisac, donde participarán en una ceremonia de Wachuma en medio de impresionantes vistas de montaña. Con la guía experimentada de Hernan, los participantes explorarán sus paisajes interiores, buscarán ideas personales y recibirán las enseñanzas que ofrece el Wachuma. Al concluir la ceremonia, un círculo de compartir grupal permitirá a los participantes procesar y reflexionar sobre su viaje, mejorando el impacto del retiro.", accommodation: "Regreso a Wayna Wasi para una noche tranquila, absorbiendo las experiencias transformadoras del día." }
          ],
          conclusion: "Los participantes se irán con un sentido renovado de sí mismos y propósito, empoderados por la experiencia Wachuma y la sabiduría atemporal de la Pachamama."
      },
      juchuy: {
        title: "Inmersión Ancestral en Juchuy Qosqo",
        subtitle: "Comunidad, Cocina y Ruinas",
        intro: "Un viaje especial de 2 días a Juchuy Qosqo ('Pequeño Cusco'), combinando una caminata a antiguas ruinas con una profunda inmersión cultural alojándose con una familia local.",
        days: [
            { title: "Día 1 : Caminata y Cocina Tradicional", content: "Comenzamos nuestro viaje caminando hacia las espectaculares ruinas de Juchuy Qosqo, con vistas al Valle Sagrado. Por la tarde, nos instalamos en una auténtica casa familiar local. Aquí, prepararemos comida juntos, cocinando sopa andina tradicional y compartiendo historias junto al fuego. Esta preparación comunitaria es una ceremonia en sí misma, conectándonos con la forma de vida local.", accommodation: "Alojamiento auténtico con una familia local junto a las ruinas." },
            { title: "Día 2 : Ceremonia en las Ruinas", content: "La mañana despunta sobre los Apus. Participamos en una ceremonia sagrada de Wachuma en la poderosa presencia de las ruinas de Juchuy Qosqo. Sin las multitudes de otros sitios, podemos conectar profundamente con la historia y la energía de esta finca real. La ceremonia permite una profunda reflexión y conexión con los antepasados.", accommodation: "Descenso y transporte de regreso a Pisac." }
        ],
        conclusion: "Una mezcla única de maravilla arqueológica, cultura viva y trabajo espiritual. Te irás con el estómago lleno, el corazón cálido y el espíritu alineado con los Andes."
      },
      retreat1Day: {
          title: "Ceremonia de 1 Día",
          subtitle: "Sitios Sagrados del Valle",
          intro: "Un viaje enfocado y profundo en la medicina, realizado en varios lugares sagrados como ruinas antiguas, lagunas serenas o montañas poderosas.",
          days: [
              { title: "La Ceremonia", content: "Comenzamos temprano en la mañana, viajando a un sitio sagrado cuidadosamente seleccionado en el Valle Sagrado (como Pumamarca, Kinsacocha u otros lugares de poder). La ceremonia es un compromiso de día completo con la medicina, la naturaleza y uno mismo. Hernan proporciona orientación, manteniendo el espacio para una sanación profunda y conexión. La experiencia concluye a última hora de la tarde.", accommodation: "El alojamiento no está incluido, pero se organiza el transporte hacia y desde el sitio." }
          ],
          conclusion: "Un reinicio poderoso y reconexión con el mundo natural, dejándote con claridad y un corazón más ligero.",
          details: { durationLabel: "Duración", durationValue: "Día Completo (Mañana a Tarde)", locationLabel: "Ubicación", locationValue: "Sitios del Valle Sagrado", focusLabel: "Enfoque", focusValue: "Sanación y Naturaleza" }
      },
      preparation: {
        title: "Preparación para tu Retiro de San Pedro",
        subtitle: "Empodera el Futuro de la Comunidad Andina",
        intro: "¡Bienvenido a tu transformador retiro de San Pedro de tres días! Para aprovechar al máximo esta experiencia, te invitamos a prepararte física y mentalmente con anticipación. Aquí tienes una guía para asegurar un viaje significativo.",
        diet: {
            title: "Preparación: Dieta Ligera y Establecimiento de Intenciones",
            description: "Antes del retiro, una dieta ligera y limpia puede ayudar a abrir tu cuerpo y mente a la experiencia. Aquí hay algunas sugerencias a seguir durante al menos 3-5 días antes de llegar:",
            items: [
                { label: "Dieta Vegetariana", text: "Evita la carne y los productos animales, ya que pueden pesar en el sistema digestivo." },
                { label: "Sin Azúcares Añadidos", text: "Abstente de consumir azúcares procesados para mantener tu energía equilibrada." },
                { label: "Limitar Estimulantes", text: "Reduce o elimina la cafeína, el alcohol y otros estimulantes para ayudar a despejar tu mente y cuerpo." },
                { label: "Evitar Comidas Pesadas", text: "Elimina los alimentos fritos y los lácteos para un proceso digestivo más fácil." },
                { label: "Hidratación", text: "Bebe mucha agua para ayudar con la claridad y el bienestar general." },
                { label: "Intenciones", text: "Más allá de la dieta, tómate un tiempo cada día para establecer intenciones para el retiro. Ya sea a través del diario, la meditación o la reflexión tranquila, sintoniza con lo que esperas ganar o liberar a través de este viaje." }
            ]
        },
        packing: {
            title: "El Día de la Ceremonia",
            description: "El día de la ceremonia, que tendrá lugar el segundo día del retiro, recomendamos traer algunos artículos personales que puedan mejorar tu conexión y contribuir al espacio sagrado.",
            items: [
                { label: "Ropa Cómoda", text: "Viste ropa suelta y cómoda adecuada para el aire libre." },
                { label: "Protección Solar", text: "Dado que la ceremonia se llevará a cabo al aire libre, trae un sombrero o gorra para protegerte del sol." },
                { label: "Traer una Ofrenda", text: "Es costumbre traer frutas y flores como ofrendas para la ceremonia. Este gesto simboliza gratitud y conexión con la naturaleza." },
                { label: "Botella de Agua", text: "Mantenerse hidratado durante todo el día es esencial." },
                { label: "Cuaderno y Bolígrafo", text: "Puede que te sientas inspirado para escribir en un diario después de la ceremonia para capturar pensamientos, ideas o emociones." }
            ]
        },
        suggestions: {
            title: "Sugerencias Adicionales para el Retiro",
            description: "Para mejorar tu viaje, considera lo siguiente:",
            items: [
                { label: "Respetar el Tiempo de Silencio", text: "Usa períodos de silencio para reflexionar y procesar tu experiencia." },
                { label: "Respiración y Meditación", text: "Los ejercicios suaves de respiración o la meditación pueden ayudarte a mantenerte conectado y centrado." },
                { label: "Desintoxicación Digital", text: "Desconéctate de teléfonos y otros dispositivos electrónicos, permitiéndote estar completamente presente." },
                { label: "Conectar con la Naturaleza", text: "Si es posible, pasa tiempo en la naturaleza cada día, dejando que apoye tu viaje interior." }
            ]
        },
        closing: "Al prepararte conscientemente y mantenerte abierto, crearás espacio para que la medicina de San Pedro te guíe en un camino profundo de descubrimiento. Esperamos compartir esta experiencia especial contigo.",
        risks: {
            title: "Aviso Importante: Comprendiendo los Riesgos y Responsabilidades",
            intro: "Si bien este retiro está diseñado para ofrecer una experiencia segura y transformadora, es importante reconocer que la participación en una ceremonia de San Pedro implica riesgos tanto físicos como psicológicos. Por favor, revisa las siguientes consideraciones cuidadosamente para asegurar una participación informada:",
            sections: [
                { title: "Divulgación Médica y de Salud", items: [{ label: "Condiciones Médicas", text: "Los participantes deben informar a los facilitadores de cualquier condición médica, incluidos problemas cardíacos, condiciones de salud mental o cualquier historial de convulsiones. Algunas condiciones preexistentes pueden aumentar los riesgos asociados con la experiencia de San Pedro." }, { label: "Medicamentos", text: "Ciertos medicamentos, incluidos antidepresivos, antipsicóticos y algunos medicamentos de venta libre, pueden tener interacciones adversas con San Pedro. Por favor, revela cualquier medicamento a los facilitadores mucho antes del retiro." }, { label: "Sensibilidad Física", text: "San Pedro puede causar efectos físicos temporales, como náuseas, vómitos y aumento de la frecuencia cardíaca. Los participantes deben estar preparados física y mentalmente para estos efectos." }] },
                { title: "Riesgos Psicológicos y Responsabilidad Emocional", items: [{ label: "Experiencias Intensas", text: "San Pedro puede sacar a la superficie emociones profundas y traumas pasados, que pueden ser difíciles de procesar. Se anima a los participantes a participar en la reflexión personal o buscar orientación profesional de antemano si tienen un historial de trauma." }, { label: "Apoyo de Integración", text: "Después del retiro, los participantes pueden beneficiarse de apoyo adicional para integrar sus experiencias. Se aconseja planificar tiempo, apoyo y recursos para procesar cualquier idea o emoción que surja." }] },
                { title: "Responsabilidad Personal", items: [{ label: "Consentimiento Informado", text: "Al participar en este retiro, reconoces que te involucras voluntariamente en esta experiencia. Cualquier idea, desafío o transformación personal que experimentes es tu propia responsabilidad." }, { label: "Precauciones de Seguridad", text: "Sigue todas las pautas de seguridad proporcionadas por los facilitadores, incluidas las restricciones dietéticas, el comportamiento sugerido durante las ceremonias y las limitaciones en las actividades físicas." }] }
            ]
        }
      },
      faq: {
        title: "Guía de Retiro Wachuma",
        subtitle: "Todo lo que necesitas saber sobre la experiencia",
        articles: [
            {
                title: "Qué esperar en un retiro de Wachuma",
                content: [
                    "Planificar un retiro de Wachuma puede sentirse como prepararse para una peregrinación del alma. Ya seas nuevo en la medicina de plantas o un buscador experimentado, cada ceremonia de Wachuma ofrece una experiencia única y transformadora. Esto es lo que puedes esperar cuando te embarcas en un retiro en el Valle Sagrado de Perú, donde el espíritu de los Andes y la Pachamama misma están siempre presentes.",
                    "<strong>Un entorno sagrado para la sanación profunda</strong><br>El Valle Sagrado cerca de Cusco es el telón de fondo perfecto para tu viaje espiritual. Ubicado entre las montañas andinas, nuestro espacio de retiro está rodeado de paisajes impresionantes que amplifican el poder del Wachuma. Desde el momento en que llegas, sentirás la profunda conexión entre la Tierra y el cosmos—una conexión que es central en la cosmología andina y la tradición del Wachuma.",
                    "<strong>Un día típico de ceremonia</strong><br>Tu retiro comenzará con una suave introducción al Wachuma. Bajo la guía de Hernán Colque, las ceremonias se desarrollan en un espacio seguro y de apoyo donde se te animará a escuchar tu voz interior. Wachuma ayuda a abrir el corazón, proporcionando claridad y una sensación de paz mientras viajas a lo largo del día. El retiro a menudo incluye tiempo de tranquilidad en la naturaleza, intercambio grupal y tiempo para la reflexión, haciendo que la experiencia sea holística y curativa.",
                    "<strong>Integrando tu experiencia Wachuma</strong><br>Las ideas obtenidas del Wachuma pueden ser profundas, y es importante tomarse el tiempo para integrar estas lecciones en tu vida diaria. Hernán y su equipo están allí para ayudarte a procesar tus experiencias, ya sea a través de discusiones grupales o apoyo individual. Muchos participantes dejan el retiro con un renovado sentido de propósito y una conexión profunda consigo mismos y con el mundo que los rodea."
                ]
            },
            {
                title: "Descubre el poder curativo del Wachuma",
                content: [
                    "<strong>¿Qué es el cactus San Pedro?</strong><br>El cactus San Pedro, también conocido como Wachuma, es una planta medicinal antigua nativa de las tierras altas de los Andes, principalmente en Perú. Este cactus verde columnar alto, científicamente llamado <em>Echinopsis pachanoi</em>, prospera en grandes altitudes, a menudo entre 2,000 y 3,000 metros. Es fácilmente reconocido por sus costillas pronunciadas, espinas cortas y grandes flores blancas que florecen por la noche.",
                    "<strong>Orígenes e Historia</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>El poder de la Mescalina: Conectando con la Armonía Universal</strong><br>Uno de los compuestos activos clave en el cactus San Pedro es la mescalina, un alcaloide psicoactivo natural. La mescalina es responsable de las profundas experiencias visionarias e introspectivas asociadas con Wachuma. A diferencia de las sustancias sintéticas, la mescalina de San Pedro guía suavemente a las personas hacia un estado alterado de conciencia, fomentando un sentido de unidad y armonía con el mundo que las rodea.",
                    "Las ceremonias de Wachuma a menudo llevan a los participantes a sentirse profundamente conectados con la Pachamama (Madre Tierra), experimentando el pulso de la naturaleza y el ritmo de la vida misma. Esta conexión ayuda a disolver los límites entre el yo y el universo, permitiendo profundas ideas y claridad espiritual. Muchos de los que se embarcan en este viaje lo describen como una experiencia de apertura del corazón, donde el amor y la compasión fluyen naturalmente.",
                    "<strong>Beneficios Espirituales y Terapéuticos</strong><br>San Pedro es famoso por sus propiedades espirituales y curativas. Sus efectos son generalmente más suaves y graduales en comparación con otras medicinas vegetales como la Ayahuasca. Esto lo hace accesible para aquellos que buscan sanación emocional y claridad interior sin la intensidad de despertares más abruptos.<br><br><strong>Beneficios Espirituales:</strong><br>• Despertar Espiritual: Facilita la reconexión con el verdadero yo y el mundo natural.<br>• Apertura del Corazón: Promueve la compasión, el perdón y la profunda liberación emocional.<br>• Claridad Mental: Ayuda a ganar perspectiva sobre los desafíos de la vida y fomenta la aceptación.<br><br><strong>Beneficios Terapéuticos:</strong><br>• Liberación Emocional: Ayuda a procesar traumas pasados y emociones no resueltas.<br>• Calma y Serenidad: Reduce la ansiedad y cultiva la paz interior.<br>• Conexión con la Naturaleza: Fortalece el vínculo con la Tierra y los elementos."
                ]
            }
        ],
        questionsTitle: "Preguntas Frecuentes",
        questions: [
            { question: "¿Qué es una ceremonia de San Pedro?", answer: "San Pedro (Huachuma) es una medicina vegetal sagrada utilizada para la curación, la visión y la conexión espiritual profunda. Nuestras ceremonias son guiadas por facilitadores experimentados para garantizar una experiencia segura y transformadora." },
            { question: "¿Es el retiro adecuado para principiantes?", answer: "Sí, nuestros retiros están abiertos a todos, ya sea que tengas experiencia previa con la medicina de plantas o sea tu primera vez. Proporcionamos orientación completa y apoyo durante todo el proceso." },
            { question: "¿Qué es Kinsacocha y por qué es especial?", answer: "Kinsacocha, ubicada cerca de Pisac, es una zona tranquila rodeada de lagos sagrados. Es un entorno ideal para las ceremonias de Huachuma, ofreciendo una profunda conexión con la naturaleza y la espiritualidad andina." },
            { question: "¿Qué debo traer al retiro o ceremonia?", answer: "Se proporcionará una lista detallada, pero lo esencial incluye ropa cómoda, zapatos para caminar, artículos personales y un corazón abierto para la transformación." },
            { question: "¿Qué idioma se habla durante el retiro?", answer: "Hernán habla quechua y español. Si no hablas estos idiomas, habrá un traductor francés-español disponible para ayudarte durante todo el retiro." },
            { question: "¿Es seguro el retiro?", answer: "La seguridad es nuestra prioridad. Nuestros retiros se llevan a cabo en un entorno controlado y de apoyo con facilitadores experimentados para guiarte en cada paso del viaje." },
            { question: "¿Cuál es su política de reembolso o cancelación?", answer: "Los depósitos son reembolsables hasta una fecha específica. Fomentamos la comunicación temprana si tus planes cambian para garantizar claridad y apoyo." }
        ]
      },
      testimonials: { title: "Voces del Corazón", items: [{ 
          name: "Zoltan E.", 
          location: "Hungría", 
          text: `Es una experiencia verdaderamente auténtica de conexión con el espíritu de la tierra y el poder curativo de la medicina de las plantas. Ha sido una conexión profunda con la sabiduría antigua de los guías espirituales Incas y Pre-Incas a través del Maestro Hernan. Estoy muy agradecido por el viaje.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `Me siento muy afortunada de haber participado en una ceremonia de Wachuma de día completo con Don Hernan. Viajamos hacia las montañas, a través de un pueblo local, para comulgar con la naturaleza, el espíritu y la energía de la reciprocidad. Su guía es sincera y su medicina es el mejor Wachuma I’ve imbibed. Regresamos a su casa para terminar la ceremonia con una deliciosa sopa andina casera y un fuego en el jardín bajo la luna llena y las estrellas. Recomiendo encarecidamente visitar Wayna Wasi y trabajar con Don Hernan. 🫶🏼✨🌵🙏🏼⛰️`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "Contáctanos",
        form: { name: "Tu Nombre", email: "Tu Email", message: "Tu Mensaje", submit: "Enviar Mensaje" },
        info: "Estamos ubicados en el corazón del Valle Sagrado, cerca de Calca, Cusco."
    },
    footer: {
      description: "Experimenta el poder transformador de Wachuma, la medicina sagrada de las plantas andinas conocida como San Pedro. Únete a Hernan en ceremonias guiadas que te ayudarán a reconectar con tu ser interior, sanar profundamente y despertar tu espíritu cerca de Cusco, en el corazón del Valle Sagrado de Perú.",
      columns: {
        links: { title: "Enlaces", items: [{ label: "Sobre nosotros", href: "/about" }, { label: "La Comunidad", href: "/about" }, { label: "Contáctanos", href: "/contact" }] },
        reviews: { title: "Reseñas de Google", rating: "4,9/5" },
        follow: { title: "Síguenos", facebook: "https://www.facebook.com/hernan.wachuma", instagram: "https://www.instagram.com/hernan_wachuma" },
        contact: { title: "Contáctanos", email: "hernan.wachuma@gmail.com", phone: "+51 928 383 821" },
        find: { title: "Encuéntranos", address: "Wayna Wasi, Pisac, Perú" }
      },
      rights: "Todos los derechos reservados."
    }
  },

  // HUNGARIAN
  [Language.HU]: {
      ...enTranslations,
      ui: {
        viewDetails: "Részletek Megtekintése",
        inquire: "Érdeklődés",
        contribution: "Hozzájárulás",
        bookRetreat: "Elvonulás Foglalása",
        bookCeremony: "Szertartás Foglalása",
        accommodation: "Szállás",
        note: "Megjegyzés",
        eventDetails: "Esemény Részletei",
        location: "Helyszín",
        capacity: "Kapacitás",
        theme: "Téma",
        email: "Email",
        whatsapp: "WhatsApp",
        connectWithUs: "Lépj Kapcsolatba Velünk",
        featuredExperience: "Kiemelt Élmény",
        viewFlyer: "Esemény Szórólap",
        duration: "Időtartam",
        service: "Szolgáltatás"
      },
      flyer: {
        highlights: "Kiemelt Élmények",
        scan: "Részletekért Szkenneld",
        reserve: "Foglald le a Helyed",
        limited: "Korlátozott férőhelyek",
        flexibleDates: "Rugalmas Dátumok",
        print: "Nyomtatás / PDF Mentése"
      },
      nav: { home: "Főoldal", about: "A Család", services: "Szertartások", gallery: "Galéria", contact: "Kapcsolat", faq: "Segítség / GYIK" },
      services: {
          title: "Ajánlataink",
          items: [
            { 
                title: "2 Napos Elvonulás", 
                description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Alapdíj $173 (1 fő). További személy +$70. Szállás +$20/fő. Max 10 fő.", 
                price: "$173+",
                details: { duration: "2 Nap", location: "Pisac és Kinsacocha", groupSize: "Max 10" }
            },
            { 
                title: "Újévi Ausangate (3 Nap)", 
                description: "Kezdd a 2026-os évet az Apuval. Temazcal, Rapé és Wachuma szertartás Pacchantában. Ingyenes professzionális fotózással.", 
                price: "€173",
                details: { duration: "3 Nap", location: "Pacchanta és Ausangate", groupSize: "Csoport" }
            },
            { 
                title: "Ausangate Szent Utazás (7 Nap)", 
                description: "A teljes elmélyülés. 3 Wachuma szertartás, Temazcal rituálék, túrázás a lagúnákhoz és mély gyógyító munka.", 
                price: "Érdeklődj",
                details: { duration: "7 Nap", location: "Pacchanta és Ausangate", groupSize: "Csoport" }
            },
            { 
                title: "Juchuy Qosqo Elmélyülés", 
                description: "2 nap a 'Kis Cusco' romjainál. Szállás helyi családnál, közös hagyományos főzés és mély kapcsolódás.", 
                price: "$200+",
                details: { duration: "2 Nap", location: "Juchuy Qosqo", groupSize: "Min 2" }
            },
            { 
                title: "1 Napos Szertartás", 
                description: "Szent utazás minimum 2 fő részére. Tapasztald meg a gyógyítást különböző szent helyeken, mint romok, lagúnák vagy hegyek a Szent Völgyben.", 
                price: "$250",
                details: { duration: "1 Nap", location: "Szent Völgy", groupSize: "Min 2" }
            },
            { 
                title: "Costa Rica-i Zarándoklat", 
                description: "Szent utazás, amely összeköti az Andokat és az Óceánt egy titkos Costa Rica-i helyszínen. 21 résztvevőre korlátozva.", 
                price: "Érdeklődj",
                details: { duration: "7 Nap", location: "Costa Rica", groupSize: "Max 21" }
            },
            { 
                title: "Privát Gyógyítás", 
                description: "Személyre szabott egyéni ülések a spirituális és érzelmi igényeidhez igazítva. Mély blokkok oldása.", 
                price: "Érdeklődj",
                details: { duration: "Változó", location: "Wayna Wasi", groupSize: "1 Fő" }
            }
          ],
          ausangateCta: { title: "Különleges Újév: Ausangate 3 Nap", description: "Kezdd az évet egy különleges Wachuma utazással az Ausangate-hez. Ingyenes professzionális fotózással.", button: "3 Napos Utazás Megtekintése" } 
      },
      hero: { title: "Az Andok Szent Gyógyító Ereje", subtitle: "Kapcsolódj újra Pachamamával a hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.", cta: "Szertartás Foglalása", retreatTeaser: { label: "Szent Elmélyülés", title: "2 Napos Elvonulás", location: "Pisac és Kinsacocha" }, ausangateTeaser: { label: "Újévi Különleges", title: "Ausangate 3 Nap", date: "2026. Jan 3-5." }, costaRicaTeaser: { label: "Különleges Esemény", title: "Costa Rica-i Zarándoklat", date: "2026. Feb 24 - Már 2." } },
      benefits: {
        title: "A Wachuma Ereje",
        subtitle: "Miért utazunk a Szent Kaktusszal",
        items: [
            { title: "Érzelmi Gyógyulás", description: "A múltbéli traumák és a testben tárolt érzelmi blokkok elengedése, megbocsátás és béke megtalálása." },
            { title: "Kapcsolat a Természettel", description: "Tapasztald meg a mély egységet a Földdel, az elemekkel és az Andok élő szellemével." },
            { title: "Tisztánlátás és Vízió", description: "Csendesítsd el az elmét, hogy útmutatást, célt és megújult perspektívát kaphass életed útjáról." }
        ]
      },
      about: {
        title: "Ismerd meg Hernant",
        subtitle: "A Szent Kaktusz Őrzője",
        description: [
            "<strong>Hernan Colque</strong> kecsua őslakos és a <strong>Wachuma (San Pedro) szertartások</strong> elkötelezett vezetője, aki mélyen gyökerezik az Andok szent hagyományaiban. 5000 méter felett született <strong>Viachában</strong>, <strong>Pisac</strong> egyik magaslati közösségében. Hernan olyan gyógyító vérvonalat hordoz, amely az inkák előtti időkig nyúlik vissza.",
            "Az ősi hagyomány szerint generációnként csak egy gyermek örökölheti ezt az utat, és azt önként kell választania. A bölcsesség nagyapjától, Carmentől szállt apjára, Beninhóra. Hét testvére közül Hernan választotta a gyógyítást nagyon fiatalon, így vált ennek az ősi örökségnek és a <strong>Pachamamával (Földanya)</strong> való mély kapcsolatnak az egyedüli hordozójává.",
            "<strong>A Ccana Vérvonal Espinarból.</strong> Hernan <strong>Espinar tartományból</strong> származik, vérvonala pedig <strong>Ccana (K'ana)</strong>. A K'ana kultúra egy inka előtti társadalom volt, amely egyedülálló, békés stratégiai szövetséget kötött az Inka Birodalommal a tipikus hódítás helyett. Mivel békésen integrálódtak Pachacutec uralkodása alatt, létfontosságú katonai szövetségesekké váltak – elit <strong>'Sinchis'</strong> harcosokká, akik segítettek legyőzni a Chancákat. Ennek a kölcsönösségnek köszönhetően földeket kaptak Collasuyóban, és ősi fővárosukat, Kanamarcát az inkák újjáépítették.",
            "<strong>A Wachuma Szelleme.</strong> Azt mondják, hogy a Wachuma szelleme először e régió embereit kötötte össze, és ők a szívükben őrizték, mert a növény azt mondta nekik, hogy el fog tűnni a földről, ami nem is olyan régen meg is történt. Hernan ezt az emléket és szellemet viszi tovább.",
            "<strong>Pisac és Viacha.</strong> Székhelyünk <strong>Pisacban</strong>, a Szent Völgy egyik nyüzsgő városában található, ahol szertartásokat tartunk és békés szállást kínálunk a <strong>Wayna Wasi Hotelben</strong>. A mélyebb elmélyülés érdekében többnapos elvonulásainkat <strong>Viachában</strong> tartjuk, egy nyugodt közösségben, magasan Pisac felett."
        ]
      },
      ausangate: { title: "Ausangate Szent Utazás", subtitle: "2026. Január 3-9.", description: "Mélyreható expedíció, amely egyesíti Pacchanta gyógyító vizeit, Apu Ausangate fenséges jelenlétét, valamint a Wachuma és a Temazcal átalakító erejét.", cta: "Helyfoglalás", itinerary: [{ day: "1. Nap", title: "Érkezés és Megtisztulás", description: "Utazás Pacchantába. Lazítás a természetes termálvízben a test megtisztítására, majd túra az Ausangate felé a szándékok megfogalmazásához." }, { day: "2. Nap", title: "Első Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Nappali szertartás, kapcsolódás a hegy szellemével és a hatalmas andoki éggel." }, { day: "3. Nap", title: "Temazcal (Izzasztókunyhó) és Rapé", description: "Hagyományos gőzfürdő rituálé, amely a Földanya méhét jelképezi. Fizikai és spirituális méregtelenítés szent Rapé orvossággal." }, { day: "4. Nap", title: "Második Wachuma Szertartás", description: "Az utazás elmélyítése. A belső blokkok feloldása és a tudatosság kiterjesztése a felvidéki csendben." }, { day: "5. Nap", title: "Temazcal és Rapé", description: "Második gőzfürdő szertartás a kapott energiák leföldelésére és a lélek további tisztítására szent Rapéval." }, { day: "6. Nap", title: "Harmadik Wachuma & Integráció", description: "A végső gyógyszertartás. Fókuszban az integráció, a hála és a héten kapott gyógyulás lezárása." }, { day: "7. Nap", title: "Visszaút", description: "Túra le a hegyről, utolsó fürdőzés a Pacchanta hőforrásokban, majd visszautazás Pisacba." }] },
      ausangate3Day: {
        title: "Újévi Ausangate Utazás (3 Nap)",
        subtitle: "Kezdd az Újévet az Apuval",
        description: "Tömör és erőteljes módja a 2026-os év kezdésének. Kezdd az új évet egy különleges Wachuma utazással az Ausangate-hez, kapcsolódva a szent heggyel és a gyógyító vizekkel.",
        details: {
            dates: "2026. Január 3 - 5.",
            price: "€173",
            bonus: "Ingyenes professzionális fotózást tartalmaz"
        },
        cta: "Helyfoglalás",
        itinerary: [
          { day: "1. Nap", title: "Érkezés, Megtisztulás és Temazcal", description: "Utazás Pacchantába. Lazítás a természetes termálvízben. Temazcal (Izzasztókunyhó) szertartáson veszünk részt szent Rapé orvossággal a mély megtisztulásért, majd túra az Ausangate felé az újévi szándékok megfogalmazásához." },
          { day: "2. Nap", title: "Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Mély nappali szertartás, kapcsolódás a hegy szellemével és a hatalmas andoki éggel." },
          { day: "3. Nap", title: "Visszaút", description: "A kör bezárása. Túra le a hegyről, utolsó fürdőzés a Pacchanta hőforrásokban, majd visszautazás Pisacba." }
        ]
      },
      costaRica: {
        title: "Szent Zarándoklat Costa Ricába",
        subtitle: "Hegyek és Óceán Egyesülése",
        intro: "Különleges alkalom, először Costa Ricán, egy titkos helyszínen. A szent hegyek és az óceán összekapcsolása, egy különleges fizikai és spirituális zarándoklat, követve egy látomást és a medicina üzenetét.",
        description: [
            "Csatlakozz hozzánk egy történelmi és átalakító erejű összejövetelre. Hernan először hozza el a szent Wachuma medicinát Costa Rica vibráló földjére.",
            "Egy mély látomás és a medicina közvetlen üzenete által vezérelve ez az elvonulás egy spirituális zarándoklat, amely összeköti az andoki hegyek bölcsességét az óceán tisztító erejével.",
            "A szent Wachuma szertartások mellett megosztjuk a Rapé orvosságot, tisztító munkákat végzünk virágokkal, és vezetett meditációkon keresztül utazunk.",
            "Egy titkos, eldugott helyen gyűlünk össze, a természet ölelésében. Ez a meghitt élmény szigorúan 21 résztvevőre (beleértve a segítőket is) korlátozódik, hogy biztosítsuk a mély, személyes figyelmet és az összetartó energetikai teret."
        ],
        details: { location: "Titkos Helyszín, Costa Rica", capacity: "21 Lélekre Korlátozva", dates: "2026. Február 24 - Március 2." },
        cta: "Meghívó Kérése",
        visionTitle: "Egy Látomás a Medicinától",
        visionText: "Ez az összejövetel nem csupán egy elvonulás; válasz egy hívásra. A medicina arról beszélt, hogy össze kell kötni a magas Andok bölcsességét az óceán tisztító, áramló energiájával. A lélek és a test zarándoklata.",
        themeValue: "Óceán és Hegy"
      },
      retreat2Day: {
        title: "2 Napos Elvonulás",
        subtitle: "Wayna Wasi és Kinsacocha",
        intro: "Mély elmélyülés a szent medicinában, a Wayna Wasi szentélyében és Pisac erőteljes hegyeiben.",
        days: [
            { title: "1. Nap: Felkészülés és Érkezés Wayna Wasiba", content: "Wayna Wasiba érkezéskor a résztvevők a bedida (a szent Wachuma ital) ceremoniális elkészítésével kezdik útjukat. Ez az élmény szent köteléket kezdeményez a medicinával, megteremtve a belső felfedezés és kapcsolat alapjait. Hernan gondosan vezeti a résztvevőket, segítve őket szándékaik tisztázásában és szívük megnyitásában a Wachuma gyengéd, mégis erőteljes hatásai felé.", accommodation: "Éjszaka a Wayna Wasiban, a béke szentélyében, ahol az Andok szelleme mindig jelen van." },
            { title: "2. Nap: Szertartás Kinsacochában, Pisac", content: "A második napon elutazunk a tisztelt Kinsacocha helyszínre Pisacban, ahol Wachuma szertartáson vesztek részt lélegzetelállító hegyi kilátás közepette. Hernan tapasztalt vezetésével a résztvevők felfedezik belső tájaikat, személyes belátásokat keresnek, és fogadják a Wachuma tanításait. A szertartás végén egy közös megosztó kör lehetővé teszi az élmények feldolgozását és reflektálását, fokozva az elvonulás hatását.", accommodation: "Visszatérés Wayna Wasiba egy békés éjszakára, a nap átalakító élményeinek integrálására." }
        ],
        conclusion: "A résztvevők megújult önazonossággal és céltudattal távoznak, megerősödve a Wachuma élmény és Pachamama időtlen bölcsessége által."
      },
      juchuy: {
        title: "Juchuy Qosqo Ősi Elmélyülés",
        subtitle: "Közösség, Konyha és Romok",
        intro: "Egy különleges 2 napos utazás Juchuy Qosqo-ba ('Kis Cusco'), amely ötvözi az ősi romokhoz való túrázást a mély kulturális elmélyüléssel, egy helyi családnál megszállva.",
        days: [
            { title: "1. Nap: Túra és Hagyományos Főzés", content: "Utazásunkat a Juchuy Qosqo látványos romjaihoz való túrával kezdjük, amely a Szent Völgyre néz. Délután egy autentikus helyi családi házban telepedünk le. Itt együtt készítjük el az ételt, hagyományos andoki levest főzünk és történeteket osztunk meg a tűz mellett. Ez a közös készülődés önmagában egy szertartás, amely megalapozza a helyi életmóddal való kapcsolatunkat.", accommodation: "Autentikus szállás egy helyi családnál a romok mellett." },
            { title: "2. Nap: Szertartás a Romoknál", content: "A reggel az Apuk felett virrad. Szent Wachuma szertartáson veszünk részt a Juchuy Qosqo romok erőteljes jelenlétében. Más helyszínek tömegei nélkül mélyen kapcsolódhatunk e királyi birtok történelméhez és energiájához. A szertartás mély reflexiót és az ősökkel való kapcsolódást tesz lehetővé.", accommodation: "Ereszkedés és visszautazás Pisacba." }
        ],
        conclusion: "A régészeti csodák, az élő kultúra és a spirituális munka egyedülálló keveréke. Teli hassal, meleg szívvel és az Andokkal összehangolt lélekkel távozol."
      },
      retreat1Day: {
          title: "1 Napos Szertartás",
          subtitle: "A Völgy Szent Helyei",
          intro: "Fókuszált és mély utazás a medicinába, különböző szent helyszíneken, mint ősi romok, nyugodt lagúnák vagy erőteljes hegyek.",
          days: [
              { title: "A Szertartás", content: "Kora reggel indulunk egy gondosan kiválasztott szent helyre a Szent Völgyben (mint Pumamarca, Kinsacocha vagy más erőhelyek). A szertartás egész napos elköteleződés a medicinával, a természettel és önmagunkkal. Hernan útmutatást nyújt, teret tartva a mély gyógyuláshoz és kapcsolódáshoz. Az élmény késő délután zárul.", accommodation: "A szállást nem tartalmazza, de a helyszínre történő szállítást megszervezzük." }
          ],
          conclusion: "Erőteljes újraindítás és újrakapcsolódás a természeti világgal, tisztánlátással és könnyebb szívvel távozol.",
          details: { durationLabel: "Időtartam", durationValue: "Egész nap (Reggeltől Délutánig)", locationLabel: "Helyszín", locationValue: "Szent Völgyi Helyszínek", focusLabel: "Fókusz", focusValue: "Gyógyítás és Természet" }
      },
      preparation: {
        title: "Felkészülés a San Pedro Elvonulásra",
        subtitle: "Az Andoki Közösség Jövőjének Erősítése",
        intro: "Üdvözlünk a háromnapos, átalakító erejű San Pedro elvonuláson! Hogy a legtöbbet hozd ki ebből az élményből, kérünk, készülj fel fizikailag és mentálisan is. Íme egy útmutató a jelentőségteljes utazáshoz.",
        diet: {
            title: "Felkészülés: Könnyű Diéta és Szándékok",
            description: "Az elvonulást megelőzően egy könnyű, tiszta étrend segíthet megnyitni a tested és az elméd. Íme néhány javaslat legalább 3-5 napra az érkezés előtt:",
            items: [
                { label: "Vegetáriánus Étrend", text: "Kerüld a húst és az állati eredetű termékeket, mivel ezek megterhelhetik az emésztőrendszert." },
                { label: "Hozzáadott Cukor Nélkül", text: "Tartózkodj a feldolgozott cukrok fogyasztásától az energiaszinted kiegyensúlyozása érdekében." },
                { label: "Stimulánsok Korlátozása", text: "Csökkentsd vagy hagyd el a koffeint, alkoholt és egyéb stimulánsokat az elme és a test tisztulása érdekében." },
                { label: "Nehéz Ételek Kerülése", text: "Hagyd el az olajban sült ételeket és a tejtermékeket a könnyebb emésztésért." },
                { label: "Hidratálás", text: "Igyál bőségesen vizet a tisztánlátás és az általános jóllét érdekében." },
                { label: "Szándékok", text: "Az étrend mellett szánj időt minden nap a szándékaid megfogalmazására. Naplóírással, meditációval vagy csendes reflexióval hangolódj rá arra, mit szeretnél elérni vagy elengedni ezen az utazáson." }
            ]
        },
        packing: {
            title: "A Szertartás Napja",
            description: "A szertartás napján, amely az elvonulás második napjára esik, javasoljuk, hogy hozz magaddal néhány személyes tárgyat, amelyek fokozhatják a kapcsolódást.",
            items: [
                { label: "Kényelmes Ruházat", text: "Viselj laza, kényelmes ruházatot, amely alkalmas a szabadban való tartózkodásra." },
                { label: "Napkalap vagy Sapka", text: "Mivel a szertartás a szabadban zajlik, hozz kalapot a nap elleni védelemhez." },
                { label: "Hozz Felajánlást", text: "Szokás gyümölcsöt és virágot hozni felajánlásként. Ez a gesztus a hálát és a természettel való kapcsolatot jelképezi." },
                { label: "Kulacs", text: "A hidratáltság fenntartása egész nap elengedhetetlen." },
                { label: "Füzet és Toll", text: "Inspirálónak érezheted a naplóírást a szertartás után, hogy rögzítsd gondolataidat és érzelmeidet." }
            ]
        },
        suggestions: {
            title: "További Javaslatok",
            description: "Az utazás fokozása érdekében fontold meg a következőket:",
            items: [
                { label: "Csend Tiszteletben Tartása", text: "Használd a csendes időszakokat a reflexióra és az élmények feldolgozására." },
                { label: "Légzés és Meditáció", text: "A gyengéd légzőgyakorlatok segíthetnek a földelésben és a középpontban maradásban." },
                { label: "Digitális Detox", text: "Kapcsolódj le a telefonról és egyéb eszközökről, hogy teljesen jelen lehess." },
                { label: "Kapcsolódás a Természettel", text: "Ha lehetséges, tölts időt a természetben minden nap." }
            ]
        },
        closing: "A tudatos felkészüléssel és nyitottsággal teret teremtesz a San Pedro medicina számára, hogy a felfedezés mély útjára vezessen. Várjuk, hogy megoszthassuk veled ezt a különleges élményt.",
        risks: {
            title: "Fontos Figyelmeztetés: Kockázatok és Felelősség",
            intro: "Bár ezt az elvonulást úgy terveztük, hogy biztonságos és átalakító élményt nyújtson, fontos tudomásul venni, hogy a San Pedro szertartáson való részvétel fizikai és pszichológiai kockázatokkal jár. Kérjük, tekintsd át figyelmesen az alábbi szempontokat a tájékozott részvétel érdekében:",
            sections: [
                { title: "Egészségügyi és Orvosi Nyilatkozat", items: [{ label: "Egészségügyi Állapotok", text: "A résztvevőknek tájékoztatniuk kell a vezetőket minden egészségügyi állapotról, beleértve a szívproblémákat, mentális betegségeket vagy rohamokat. Bizonyos meglévő állapotok növelhetik a San Pedro élménnyel kapcsolatos kockázatokat." }, { label: "Gyógyszerek", text: "Bizonyos gyógyszerek, beleértve az antidepresszánsokat, antipszichotikumokat és egyes vény nélkül kapható gyógyszereket, káros kölcsönhatásba léphetnek a San Pedróval. Kérjük, jelezd bármilyen gyógyszer szedését a vezetőknek jóval az elvonulás előtt." }, { label: "Fizikai Érzékenység", text: "A San Pedro átmeneti fizikai hatásokat okozhat, mint például hányinger, hányás és pulzusemelkedés. A résztvevőknek fizikailag és mentálisan fel kell készülniük ezekre a hatásokra." }] },
                { title: "Pszichológiai Kockázatok és Érzelmi Felelősség", items: [{ label: "Intenzív Élmények", text: "A San Pedro mély érzelmeket és múltbéli traumákat hozhat felszínre, amelyeket nehéz lehet feldolgozni. Bátorítjuk a résztvevőket, hogy végezzenek személyes reflexiót, vagy kérjenek szakmai útmutatást az elvonulás előtt, ha traumás előzményeik vannak." }, { label: "Integrációs Támogatás", text: "Az elvonulást követően a résztvevők számára előnyös lehet a további támogatás az élmények integrálásához. Javasolt időt, támogatást és erőforrásokat tervezni a felmerülő belátások vagy érzelmek feldolgozására." }] },
                { title: "Személyes Felelősség", items: [{ label: "Tájékozott Beleegyezés", text: "Az elvonuláson való részvétellel elismered, hogy önként veszel részt ebben az élményben. Bármilyen belátás, kihívás vagy személyes átalakulás, amit tapasztalsz, a saját felelősséged." }, { label: "Biztonsági Óvintézkedések", text: "Kövesd a vezetők által biztosított összes biztonsági előírást, beleértve az étrendi korlátozásokat, a szertartások alatti javasolt viselkedést és a fizikai tevékenységek korlátozását." }] }
            ]
        }
      },
      faq: {
        title: "Wachuma Elvonulás Útmutató",
        subtitle: "Minden, amit tudnod kell az élményről",
        articles: [
            {
                title: "Mire számíthatsz egy Wachuma elvonuláson",
                content: [
                    "Egy Wachuma elvonulás tervezése olyan érzés lehet, mintha a lélek zarándoklatára készülnél. Akár új vagy a növényi medicinában, akár tapasztalt kereső, minden Wachuma szertartás egyedi, átalakító élményt kínál. Íme, mire számíthatsz, amikor elindulsz egy elvonulásra Peru Szent Völgyében, ahol az Andok szelleme és maga Pachamama mindig jelen van.",
                    "<strong>Szent környezet a mély gyógyuláshoz</strong><br>A Cusco melletti Szent Völgy tökéletes hátteret biztosít spirituális utazásodhoz. Az andoki hegyek között elhelyezkedő elvonulási helyszínünket lenyűgöző tájak veszik körül, amelyek felerősítik a Wachuma erejét. Az érkezés pillanatától érezni fogod a Föld és a kozmosz közötti mély kapcsolatot – egy olyan kapcsolatot, amely központi szerepet játszik az andoki kozmológiában és a Wachuma hagyományban.",
                    "<strong>Egy tipikus szertartási nap</strong><br>Az elvonulás a Wachuma gyengéd bemutatásával kezdődik. Hernan Colque vezetésével a szertartások egy biztonságos, támogató térben zajlanak, ahol arra bátorítanak, hogy hallgass a belső hangodra. A Wachuma segít megnyitni a szívet, tisztánlátást és békét nyújtva, ahogy végigjárod a napot. Az elvonulás gyakran magában foglal csendes időt a természetben, csoportos megosztást és időt a reflexióra, így az élmény holisztikus és gyógyító.",
                    "<strong>A Wachuma élmény integrálása</strong><br>A Wachumától kapott felismerések mélyrehatóak lehetnek, és fontos időt szánni arra, hogy ezeket a tanulságokat beépítsd a mindennapi életedbe. Hernan és csapata ott van, hogy segítsen feldolgozni az élményeidet, akár csoportos beszélgetések, akár egyéni támogatás révén. Sok résztvevő megújult céltudattal és mély kapcsolattal távozik az elvonulásról önmagával és a körülötte lévő világgal."
                ]
            },
            {
                title: "Fedezd fel a Wachuma gyógyító erejét",
                content: [
                    "<strong>Mi az a San Pedro kaktusz?</strong><br>A San Pedro kaktusz, más néven Wachuma, egy ősi gyógynövény, amely az Andok fennsíkjain őshonos, elsősorban Peruban. Ez a magas, oszlopos zöld kaktusz, tudományos nevén <em>Echinopsis pachanoi</em>, nagy magasságokban, gyakran 2000 és 3000 méter között virágzik. Könnyen felismerhető kifejezett bordáiról, rövid tüskéiről és nagy fehér virágairól, amelyek éjszaka nyílnak.",
                    "<strong>Eredet és Történelem</strong><br>A San Pedrót évezredek óta használják az andoki őslakos népek, különösen a kecsua és ajmara közösségek. Mélyen gyökerezik a sámáni hagyományokban, hídként szolgálva a fizikai és a szellemi világ között. Neve, San Pedro (Szent Péter), a mennyország kapujának őrzőjére utal, szimbolizálva a spirituális dimenziókhoz való hozzáférést.",
                    "<strong>A Meszkalin ereje: Kapcsolódás az Univerzális Harmóniához</strong><br>A San Pedro kaktusz egyik kulcsfontosságú hatóanyag a meszkalin, egy természetesen előforduló pszichoaktív alkaloid. A meszkalin felelős a Wachumához társított mély látnoki és introspetív élményekért. A szintetikus anyagokkal ellentétben a San Pedróból származó meszkalin gyengéden vezeti az egyént egy módosult tudatállapotba, elősegítve az egység és harmónia érzését a körülötte lévő világgal.",
                    "A Wachuma szertartások gyakran vezetik a résztvevőket arra, hogy mélyen kapcsolódjanak Pachamamához (Földanya), megtapasztalva a természet pulzusát és magát az élet ritmusát. Ez a kapcsolat segít feloldani a határokat az én és az univerzum között, lehetővé téve a mély belátásokat és a spirituális tisztánlátást. Sokan, akik erre az útra lépnek, szívnyitogató élményként írják le, ahol a szeretet és az együttérzés természetesen áramlik.",
                    "<strong>Spirituális és Terápiás Előnyök</strong><br>A San Pedro híres spirituális és gyógyító tulajdonságairól. Hatásai általában gyengédebbek és fokozatosabbak más növényi medicinákhoz, például az Ayahuascához képest. Ez hozzáférhetővé teszi azok számára, akik érzelmi gyógyulást és belső tisztánlátást keresnek a hirtelenebb ébredések intenzitása nélkül.<br><br><strong>Spirituális Előnyök:</strong><br>• Spirituális Ébredés: Elősegíti az újrakapcsolódást a valódi énnel és a természeti világgal.<br>• Szívnyitás: Elősegíti az együttérzést, a megbocsátást és a mély érzelmi felszabadulást.<br>• Mentális Tisztánlátás: Segít perspektívát nyerni az élet kihívásaival kapcsolatban és elősegíti az elfogadást.<br><br><strong>Terápiás Előnyök:</strong><br>• Érzelmi Felszabadulás: Segít a múltbéli traumák és a feloldatlan érzelmek feldolgozásában.<br>• Nyugalom és Derű: Csökkenti a szorongást és belső békét teremt.<br>• Kapcsolat a Természettel: Erősíti a kötődést a Földdel és az elemekkel."
                ]
            }
        ],
        questionsTitle: "Gyakori Kérdések",
        questions: [
            { question: "Mi az a San Pedro szertartás?", answer: "A San Pedro (Huachuma) egy szent növényi medicina, amelyet gyógyításra, látomásokra és mély spirituális kapcsolódásra használnak. Szertartásainkat tapasztalt vezetők irányítják a biztonságos és átalakító élmény biztosítása érdekében." },
            { question: "Kezdőknek is alkalmas az elvonulás?", answer: "Igen, elvonulásaink mindenki számára nyitottak, legyen szó tapasztalt résztvevőről a növényi medicinában vagy első alkalomról. Teljes útmutatást és támogatást nyújtunk a folyamat során." },
            { question: "Mi az a Kinsacocha és miért különleges?", answer: "Kinsacocha egy csendes terület Pisac közelében, szent tavakkal körülvéve. Ideális környezet a Huachuma szertartásokhoz, mély kapcsolatot kínálva a természettel és az andoki spiritualitással." },
            { question: "Mit hozzak az elvonulásra vagy szertartásra?", answer: "Részletes listát biztosítunk, de a legfontosabbak közé tartozik a kényelmes ruházat, túracipő, személyes tárgyak és egy nyitott szív az átalakulásra." },
            { question: "Milyen nyelven zajlik az elvonulás?", answer: "Hernan kecsua és spanyol nyelven beszél. Ha nem beszéled ezeket a nyelveket, francia-spanyol fordító áll rendelkezésre, hogy segítsen az elvonulás során." },
            { question: "Biztonságos az elvonulás?", answer: "A biztonság a legfontosabb számunkra. Elvonulásainkat ellenőrzött, támogató környezetben tartjuk, tapasztalt vezetőkkel, akik végigkísérnek az utazás minden lépésén." },
            { question: "Mi a visszatérítési vagy lemondási szabályzat?", answer: "A foglalók egy meghatározott dátumig visszatéríthetők. Bátorítjuk a korai kommunikációt, ha a terveid változnak, a tisztánlátás és a támogatás biztosítása érdekében." }
        ]
      },
      testimonials: { title: "Szívből Jövő Hangok", items: [{ 
          name: "Zoltan E.", 
          location: "Magyarország", 
          text: `Ez egy igazán hiteles élmény, amely összeköt a föld szellemével és a növényi orvosság gyógyító erejével. Mély kapcsolódás az inkák és az inkák előtti idők szellemi vezetőinek ősi bölcsességével Hernan mesteren keresztül. Nagyon hálás vagyok ezért az utazásért.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `Olyan szerencsésnek érzem magam, hogy részt vehettem egy egész napos Wachuma szertartáson Don Hernannal. Felutaztunk a hegyekbe, egy helyi falun keresztül, hogy közösséget vállaljunk a természettel, a szellemmel és a kölcsönösség energiájával. Útmutatása őszinte, és az orvossága a legjobb Wachuma, amit valaha ittam. Visszatértünk a házába, hogy ízletes házi andoki levessel és a kertben rakott tűzzel fejezzük be a szertartást a telihold és a csillagok alatt. Erősen ajánlom a Wayna Wasi meglátogatását és a Don Hernannal való munkát. 🫶🏼✨🌵🙏🏼⛰️`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "Kapcsolat",
        form: { name: "Neved", email: "Email Címed", message: "Üzeneted", submit: "Üzenet Küldése" },
        info: "A Szent Völgy szívében, Calca közelében, Cuscóban találhatóunk."
    },
    footer: {
        description: "Tapasztald meg a Wachuma, az Andok szent növényi medicinájának átalakító erejét. Csatlakozz Hernanhoz vezetett szertartásokon, amelyek segítenek újra kapcsolódni belső énedhez, mélyen gyógyulni és felébreszteni szellemedet Peru Szent Völgyének szívében.",
        columns: {
            links: { title: "Linkek", items: [{label: "Rólunk", href: "/about"}, {label: "A Közösség", href: "/about"}, {label: "Kapcsolat", href: "/contact"}] },
            reviews: { title: "Google Értékelések", rating: "4,9/5" },
            follow: { title: "Kövess Minket", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
            contact: { title: "Kapcsolat", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
            find: { title: "Helyszín", address: "Wayna Wasi, Pisac, Peru" }
        },
        rights: "Minden jog fenntartva."
    }
  },
  
  // QUECHUA
  [Language.QU]: {
      ...enTranslations,
      ui: {
        viewDetails: "Qhawariy",
        inquire: "Tapukuy",
        contribution: "Yanapay",
        bookRetreat: "Kayta Waqaychay",
        bookCeremony: "Raymita Waqaychay",
        accommodation: "Puñuna",
        note: "Willakuy",
        eventDetails: "Raymi Willakuykuna",
        location: "Tiyay",
        capacity: "Runakuna",
        theme: "Yuyay",
        email: "Chaski",
        whatsapp: "WhatsApp",
        connectWithUs: "Tinkuy",
        featuredExperience: "Kuraq Experiencia",
        viewFlyer: "Qhawariy Flyer",
        duration: "Unay",
        service: "Raymi"
      },
      flyer: {
        highlights: "Kuraq Yachaykuna",
        scan: "Qhawariy Astawan",
        reserve: "Tiyayniykita Waqaychay",
        limited: "Pisi tiyaykuna kan",
        flexibleDates: "Fechakuna",
        print: "Imprimir / PDF Waqaychay"
      },
      nav: { home: "Qallariy", about: "Ayllu", services: "Raymikuna", gallery: "Rikch'akuna", contact: "Tinkuy", faq: "Yanapana" },
      services: { 
          title: "Munayniyku", 
          items: [{ 
              title: "2 P'unchay T'aqakuy", 
              description: "Wayna Wasi & Kinsacocha. $173+.", 
              price: "$173+",
              details: { duration: "2 P'unchay", location: "Pisac & Kinsacocha", groupSize: "Max 10" } 
          }, 
          { 
            title: "Musuq Wata Ausangate (3 P'unchay)", 
            description: "2026 qallariy Apuwan. Temazcal, Rapé, Wachuma ima. Fotoqrafiya qispisqa.", 
            price: "€173",
            details: { duration: "3 P'unchay", location: "Pacchanta & Ausangate", groupSize: "Huñu" } 
          },
          { 
            title: "Ausangate Willka Puriy (7 P'unchay)", 
            description: "Hatun puriy. 3 Wachuma raymikuna, Temazcal, quchakunaman puriy, ukhu hampi.", 
            price: "Tapukuy",
            details: { duration: "7 P'unchay", location: "Pacchanta & Ausangate", groupSize: "Huñu" } 
          },
          { 
              title: "Juchuy Qosqo Puriy", 
              description: "2 P'unchay ñawpaq llaqtapi.", 
              price: "$200+",
              details: { duration: "2 P'unchay", location: "Juchuy Qosqo", groupSize: "Min 2" }
          }, { 
              title: "1 P'unchay Raymi", 
              description: "Huk p'unchay hampiwan.", 
              price: "$250",
              details: { duration: "1 P'unchay", location: "Willka Qhichwa", groupSize: "Min 2" }
          }, { 
              title: "Costa Rica Puriy", 
              description: "Mama Qochawan tinkuy.", 
              price: "Tapukuy",
              details: { duration: "7 P'unchay", location: "Costa Rica", groupSize: "Max 21" }
          }, { 
              title: "Sapaq Hampi", 
              description: "Qamllapaq hampi.", 
              price: "Tapukuy",
              details: { duration: "-", location: "Wayna Wasi", groupSize: "1 Runa" }
          }], 
          ausangateCta: { title: "Musuq Wata: Ausangate 3 P'unchay", description: "Musuq watata qallariy Wachuma puriywan Ausangateman. Fotoqrafiya qispisqa.", button: "Qhawariy" } 
      },
      hero: { title: "Willka Hampi Wachuma", subtitle: "Pachamamawan tinkuy, ñawpaq yachaywan.", cta: "Raymita Waqaychay", retreatTeaser: { label: "Willka T'aqakuy", title: "2 P'unchay T'aqakuy", location: "Pisac & Kinsacocha" }, ausangateTeaser: { label: "Musuq Wata", title: "Ausangate 3 P'unchay", date: "Enero 3-5, 2026" }, costaRicaTeaser: { label: "Hatun Raymi", title: "Costa Rica Puriy", date: "Febrero 24 - Marzo 2, 2026" } },
      ausangate3Day: {
        title: "Musuq Wata Ausangate Puriy (3 P'unchay)",
        subtitle: "Musuq Watata Apuwan Qallariy",
        description: "Huk pisi ichaqa atiyniyuq puriymi 2026 qallarinapaq. Musuq watata qallariy Wachuma puriywan Ausangateman.",
        details: {
            dates: "Enero 3 - 5, 2026",
            price: "€173",
            bonus: "Fotoqrafiya qispisqa"
        },
        cta: "Tiyayniykita Waqaychay",
        itinerary: [
          { day: "1 P'unchay", title: "Chayamuy, Ch'uyay & Temazcal", description: "Pacchantaman puriy. Q'uñi yakupi ch'uyakuy. Temazcalpi (Wapsi Wasi) Rapé hampiwan ch'uyakusun, chaymanta Ausangate ñawpaqpi musuq wata mañakuy." },
          { day: "2 P'unchay", title: "Wachuma Raymi", description: "Apuwan tinkuy. P'unchaypi hampi ukyay, urquwan tinkunapaq." },
          { day: "3 P'unchay", title: "Kutimuy", description: "Urqumanta uraykamuy, Pacchanta yakupi samay, Pisacman kutimuy." }
        ]
      },
      benefits: { title: "Wachuma Kallpa", subtitle: "Imarayku purinchik kay hampiwan", items: [{ title: "Sonqo Hampi", description: "Llakikunata qarqoy, hawkayayta tariy." }, { title: "Pachamamawan Tinkuy", description: "Allpawan, wayrawan, yakuyan, ninawan huklla kay." }, { title: "Yuyay K'anchay", description: "Musuq yuyayta tariy, ñanniykita rikuriy." }] },
      footer: { description: "Wachuma hampiwan tinkuy, Hernanwan kuska.", columns: { links: { title: "Tinkiykuna", items: [{label: "Ayllu", href: "/about"}, {label: "Tinkuy", href: "/contact"}] }, reviews: { title: "Google", rating: "4,9/5" }, follow: { title: "Qatipay", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "Tinkuy", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "Tiyay", address: "Wayna Wasi, Pisac, Perú" } }, rights: "Llapallan." },
      about: {
        title: "Hernanwan Riqsinakuy",
        subtitle: "Willka Hampi Waqaychaq",
        description: [
            "<strong>Hernan Colque</strong> runa simi rimaq, <strong>Wachuma hampiq</strong>, ñawpaq yachaykunata apaq. <strong>Viacha</strong> llaqtapi paqarisqa, <strong>Pisac</strong> patapi, payqa ñawpaq hampiq yawarniyuq.",
            "Ñawpaq yachaykuna willan, sapa miraymanta huklla kay ñanta apanman. Abuelon Carmenmanta taytan Beninhoman yachay chayarqa. Qanchis wawqikunamanta, Hernanllataq kay ñanta akllarqa, <strong>Pachamamawan</strong> tinkuspa.",
            "<strong>Espinar llaqtamanta Ccana yawar.</strong> Hernanpa yawarninqa <strong>Ccana (K'ana)</strong> llaqtamanta. K'ana runakunaqa Inka Pachacutecwan thakpi tinkurqanku, manan maqanakuspachu. Chayrayku <strong>'Sinchis'</strong> sutichasqa karqanku, allin awqaq runakuna.",
            "<strong>Wachuma Nunam.</strong> Wachumaqa ñawpaq runakunata tinkuchirqa, chayta sunqunkupi waqaycharqanku. Kay hampiqa yachachikunmi, kunan p'unchaykunaqa Hernan kay yachayta apachkan.",
            "<strong>Pisacwan Viachawan.</strong> <strong>Pisac</strong> llaqtapi tiyayku, <strong>Wayna Wasi Hotelpi</strong> samaykuna kan. Aswan kuraq hampiqa <strong>Viacha</strong> ayllupi ruwakun, urqu patapi."
        ]
      },
      ausangate: {
        title: "Ausangate Willka Puriy",
        subtitle: "Enero 3-9, 2026",
        description: "Huk hatun puriy, Pacchanta q'uñi yakupi, Apu Ausangatewan, Wachuma hampiwan, Temazcalwan ima.",
        cta: "Tiyayniykita Waqaychay",
        itinerary: [
          { day: "1 P'unchay", title: "Chayamuy & Ch'uyay", description: "Pacchantaman puriy. Q'uñi yakupi ch'uyakuy, Ausangate ñawpaqpi mañakuy." },
          { day: "2 P'unchay", title: "Ñawpaq Wachuma Raymi", description: "Apuwan tinkuy. P'unchaypi hampi ukyay, urquwan tinkunapaq." },
          { day: "3 P'unchay", title: "Temazcal & Rapé", description: "Pachamama wiksanpi ch'uyay. Hampi wapsiwan, Rapé hampiwan ima." },
          { day: "4 P'unchay", title: "Iskay Kaq Wachuma Raymi", description: "Ukhu yuyayman puriy. Ch'in pampapi yuyayta kicharichiy." },
          { day: "5 P'unchay", title: "Temazcal & Rapé", description: "Iskay kaq wapsi wasi, kallpata tiyachiy." },
          { day: "6 P'unchay", title: "Kimsa Kaq Wachuma & Tukunapaq", description: "Tukuy hampi. Añaschay, kallpachakuy, tukuy yachasqata huñuy." },
          { day: "7 P'unchay", title: "Kutimuy", description: "Urqumanta uraykamuy, Pacchanta yakupi samay, Pisacman kutimuy." }
        ]
      },
      costaRica: {
        title: "Costa Rica Willka Puriy",
        subtitle: "Urquwan Mama Qochawan Tinkun",
        intro: "Huk sapaq kuti, Costa Rica suyu ukhupi. Willka urqukuna mama qochawan tinkunqaku, Wachuma hampiwan.",
        description: [
            "Ñuqaykuwan kay hatun puriyman hamuy. Hernan apamun Wachuma hampita Costa Rica allpaman.",
            "Musquypi rikhurisqa, kay puriyqa urqukunata qochawan tinkuchinapaq.",
            "Wachuma hampiwan, Rapé hampiwan, t'ikakunawan ima ch'uyanchik.",
            "Pakasqa tiyaypi kanqa. 21 runallapaqmi, aswan allin tinkuypaq."
        ],
        details: { location: "Pakasqa Tiyay, Costa Rica", capacity: "21 Runalla", dates: "Febrero 24 - Marzo 2, 2026" },
        cta: "Mink'ata Mañakuy",
        visionTitle: "Hampi Musquy",
        visionText: "Kayqa manan puriyllachu; kayqa apukunaq waqaychayninmi. Hampiqa nirqa: Urquq yachayninta qochawan tinkuchiy.",
        themeValue: "Qocha & Urqu"
      },
      retreat2Day: {
        title: "2 P'unchay T'aqakuy",
        subtitle: "Wayna Wasi & Kinsacocha",
        intro: "Ukhu hampi puriy, Wayna Wasi ukhupi, Pisac urqukunawan.",
        days: [
            { title: "1 P'unchay : Wakichikuy & Wayna Wasiman Chayamuy", content: "Wayna Wasiman chayamuspa, Wachuma hampi wakichiyta qallarinchik. Kayqa hampiwan tinkuymi. Hernan pusasunki allin yuyaywan.", accommodation: "Wayna Wasipi puñuy, apukunaq qhawayninpi." },
            { title: "2 P'unchay : Kinsacocha Raymi", content: "Iskay p'unchaypi, Kinsacocha quchaman risun. Chaypi Wachumata ukyasun, urqukunaq chawpinpi. Hernanwan kuska, ukhu sunquykita qhaway. Tukuypi, rimanakuy kanqa.", accommodation: "Wayna Wasiman kutimuy samarinapaq." }
        ],
        conclusion: "Musuq kallpawan ripunki, Wachuma yachaywan, Pachamamaq kallpanwan."
      },
      juchuy: {
        title: "Juchuy Qosqo Ñawpaq Yachay",
        subtitle: "Ayllu, Mikhuy & Ñawpaq Wasi",
        intro: "2 p'unchay puriy Juchuy Qosqoman, ñawpaq wasikunata qhaway, aylluwan tiyay.",
        days: [
            { title: "1 P'unchay : Puriy & Wayk'uy", content: "Juchuy Qosqoman wicharisun. Ch'isipi, huk ayllu wasipi samasun. Kuska wayk'usun, lawata mikhusun, nina patapi rimanakusun.", accommodation: "Ayllu wasipi puñuy." },
            { title: "2 P'unchay : Raymi Ñawpaq Wasipi", content: "Sut'iyaypi, Wachuma raymita ruwasun Juchuy Qosqo ukhupi. Mana achkha runawanchu, aswan allin tinkuypaq. Ñawpaq runakunawan rimanakusun.", accommodation: "Pisacman kutimuy." }
        ],
        conclusion: "Ñawpaq yachay, kawsay, hampi ima. Wiksa hunt'a, sunqu hunt'a ripunki."
      },
      retreat1Day: {
          title: "1 P'unchay Raymi",
          subtitle: "Willka Tiyaykuna",
          intro: "Huk p'unchay hampiwan, urqukunapi, quchakunapi, ñawpaq wasikunapi.",
          days: [
              { title: "Raymi", content: "Tutallamanta lluqsisun huk willka tiyayman (Pumamarca, Kinsacocha). T'uqay p'unchay hampiwan kasun. Hernan pusasunki. Ch'isipi tukusun.", accommodation: "Manan puñuy kanchu, ichaqa apasaykiku." }
          ],
          conclusion: "Musuqyachiy, ch'uyayachiy, sunqu pampachay.",
          details: { durationLabel: "Unay", durationValue: "Huk P'unchay", locationLabel: "Tiyay", locationValue: "Willka Qhichwa", focusLabel: "Yuyay", focusValue: "Hampi & Pachamama" }
      },
      preparation: {
        title: "San Pedro Raymipaq Wakichikuy",
        subtitle: "Andes Ayllu Kallpachay",
        intro: "Allin hamuy! Kay hatun raymipaq, allinta wakichikunayki tiyan, cuerpoykita, yuyayniykita ima.",
        diet: {
            title: "Mikhuy & Yuyay",
            description: "Manaraq hamuchkaspa, kaykunata ruway 3-5 p'unchay ñawpaqta:",
            items: [
                { label: "Mana Aychata", text: "Ama aychata mikhuychu, wiksayki ch'uya kananpaq." },
                { label: "Mana Misk'ita", text: "Ama azucarta mikhuychu." },
                { label: "Mana Tragu", text: "Ama machaychu, ama cigarrota pitaychu." },
                { label: "Ch'uya Mikhuy", text: "Llasa mikhuyta saqiy." },
                { label: "Yaku", text: "Askha yakuta ukyay." },
                { label: "Yuyay", text: "Sapa p'unchay yuyaymanay, imatachus maskhanki." }
            ]
        },
        packing: {
            title: "Raymi P'unchay",
            description: "Imatachus apamunayki:",
            items: [
                { label: "P'acha", text: "Q'uñi p'achata, sumaq p'achata apamuy." },
                { label: "Ruphamanta", text: "Sombrerota apamuy." },
                { label: "K'intu", text: "T'ikata, frutata apamuy apukunapaq." },
                { label: "Yaku", text: "Yakuykita apamuy." },
                { label: "Qillqana", text: "Yuyayniykita qillqanaykipaq." }
            ]
        },
        suggestions: {
            title: "Yuyaychaykuna",
            description: "Aswan allin kananpaq:",
            items: [
                { label: "Ch'in Kay", text: "Ch'in kayta yachay." },
                { label: "Samay", text: "Allinta samay." },
                { label: "Antikunakunata Saqiy", text: "Celularta waqaychay." },
                { label: "Pachamama", text: "Sapa p'unchay allpawan tinkuy." }
            ]
        },
        closing: "Allin wakichikuwan, Wachuma hampiqa ñanta kicharichisunki. Suyaykiku.",
        risks: {
            title: "Allinta Yachay: Riesgokuna",
            intro: "Kay hampiqa allinmi, ichaqa kanmi imaymanakuna yachanayki:",
            sections: [
                { title: "Qhali Kay", items: [{ label: "Unquykuna", text: "Willay sikuykichus unqusqa kanki, sunquwan otaq umawan unqusqa kanki chayqa. Wakin unquyqa mana allinchu Wachumawan." }, { label: "Hampikuna", text: "Willay sichus hampita ukyashanki, wakin hampiqa, antidepresivos hina, mana allinchu Wachumawan." }, { label: "Kurku", text: "Wakin kuti aqtunallan, otaq sunqu p'atayun. Kayqa pasaqllanmi." }] },
                { title: "Yuyay", items: [{ label: "Hatun Yuyay", text: "Ñawpaq yuyaykuna hamunqa, sasachakuykuna kanman. Allinmi kanman sichus ñawpaqta yuyaymananki." }, { label: "Yanapay", text: "Yanapayta maskhay sichus sasa kanman chayqa. Raymi qhipaman, rimanakuyqa allinmi." }] },
                { title: "Ruranayki", items: [{ label: "Munayniykiwan", text: "Qan kiki munayniykiwan hamunki, qanpa kawsayniyki. Qanmi akllanki kayta." }, { label: "Kasuy", text: "Yachaqta kasuy, tukuy nisqanta ruway, allin kananpaq." }] }
            ]
        }
      },
      faq: {
        title: "Wachuma Tapukuykuna",
        subtitle: "Imatachus yachanayki",
        articles: [
            {
                title: "Imatachus Suyanki Wachuma Raymipi",
                content: [
                    "Wachuma raymiqa manan pukllaychu, kayqa sunquq puriyninmi. Musuqña kanki otaq yachaqña kanki, sapa raymiqa sapaqmi. Kaypiqa Willka Qhichwapi kanki, apukunaq qhawayninpi.",
                    "<strong>Willka Tiyay Hampiypaq</strong><br>Cuscoq qayllanpi, Willka Qhichwaqa sumaqmi. Urqukunaqa kallpata qusunki. Chayamusqaykimantapacha, Pachamamawan tinkunki, kayqa ñawpaq yachaymi.",
                    "<strong>Raymi P'unchay</strong><br>Hernanwan qallarinki. Payqa allinta qhawasunki. Wachumaqa sunquta kicharin, yuyayta ch'uyancham. Ch'in kaypi kanki, aylluwan rimanki, yuyaymananki.",
                    "<strong>Yachayta Huñuy</strong><br>Raymi qhipaman, yachasqaykita kawsayniykiman apay. Hernan yanapasunki yuyaymanaypi. Achkha runakuna musuq kawsaywan ripunku, aswan allin runa kaspa."
                ]
            },
            {
                title: "Wachumaq Hampi Kallpan",
                content: [
                    "<strong>Imataq San Pedro?</strong><br>San Pedro utaq Wachumaqa huk hampi kaktusmi. Andes urqukunapi wiñan. Ñawpaqmantapacha hampinapaq servin. <em>Echinopsis pachanoi</em> sutiyoq, hatun t'ikayuq.",
                    "<strong>Ñawpaq Kawsay</strong><br>Inkakuna, ñawpaq runakuna kaywan purirqanku. Kayqa p'uñtemi kay pachawan hanaq pachawan. San Pedro sutinqa punku kichaqmi.",
                    "<strong>Mescalina Kallpa</strong><br>Kay hampiqa mescalinayuq. Kaymi yanapan yuyayta kicharinapaq. Manan drogachu, kayqa hampim. Pachamamawan tinkuchin, munayta apamun.",
                    "<strong>Hampikuy</strong><br>Wachumaqa sunquta hampin, yuyayta allinchan. Aswan llamp'um Ayahuascamantaqa. Kicharin ñawiykita, sunquykita.<br><br><strong>Nuna Hampi:</strong><br>• Musuq Kawsay: Chiqaq kayniykiwan tinkuy.<br>• Sunqu Kichay: Pampachay, kuyay, sunqu nanayta qarqoy.<br>• Yuyay Ch'uyanchay: Kawsayta allinta qhaway.<br><br><strong>Kurku Hampi:</strong><br>• Llakiyta Qarqoy: Ñawpaq nanayta qarqoy.<br>• Hawkayay: Manchakuyta qarqoy, thak kayta tariy."
                ]
            }
        ],
        questionsTitle: "Sapa Kuti Tapukuykuna",
        questions: [
            { question: "Imataq San Pedro raymi?", answer: "San Pedro (Huachuma)qa willka hampim, yuyayta kicharinapaq, hampinapaq. Ñuqayku allinta pusayku." },
            { question: "Qallariqkunapaq allinchu?", answer: "Arí, llapapaqmi. Ñuqayku yachachiyku, allinta pusayku tukuy puriypi." },
            { question: "Imataq Kinsacocha?", answer: "Kinsacochaqa huk sumaq qucham, Pisac patapi. Chaypi raymi ruwayqa ancha sumaqmi, apukunawan tinkunapaq." },
            { question: "Imata apasaq?", answer: "Q'uñi p'achata, purinapaq zapatota, sunquykita, imatachus necesitanki chayta. Huk lista qusaykiku." },
            { question: "Ima simita rimanku?", answer: "Hernanqa Quechuata Españoltawan riman. Huk runakuna yanapanqaku, Frances simitapas rimanku." },
            { question: "Segurochu?", answer: "Arí, ñuqayku allinta qhawayku. Yachaqkuna kanku, manan saqisunkichu." },
            { question: "Qullqi kutichiy kanmanchu?", answer: "Arí, willawayku sichus manaña hamuyta atinki, ñawpaqta willay." }
        ]
      },
      testimonials: {
          title: "Runakunaq Rimaynin",
          items: [
              { 
                  name: "Zoltan E.", 
                  location: "Hungría", 
                  text: "Kayqa chiqaq puriymi, allpawan tinkuymi. Hernanwan puriyqa ñawpaq yachaywan tinkuymi karqa. Ancha agradecesqa kani.",
                  image: IMAGES.zoltan 
              },
              {
                name: "Stephanie K.",
                location: "Google Review",
                text: "Ancha kusisqa kani Don Hernanwan puriqtiy. Urqukunaman rirqayku, allpawan tinkurqayku. Payqa allin hampiqmi. Wayna Wasipi lawata mikhurqayku nina patapi. Yupaychani.",
                image: IMAGES.kittel
            }
          ]
      },
      contact: {
          title: "Rimaykakamuy",
          form: { name: "Sutiyki", email: "Chaskiyki", message: "Willayniyki", submit: "Apachiy" },
          info: "Willka Qhichwapi kachkayku."
      }
  },

  // ARABIC
  [Language.AR]: {
      ...enTranslations,
      ui: {
        viewDetails: "عرض التفاصيل",
        inquire: "استفسار",
        contribution: "المساهمة",
        bookRetreat: "حجز هذه الخلوة",
        bookCeremony: "حجز هذه المراسم",
        accommodation: "الإقامة",
        note: "ملاحظة",
        eventDetails: "تفاصيل الحدث",
        location: "الموقع",
        capacity: "السعة",
        theme: "الموضوع",
        email: "البريد الإلكتروني",
        whatsapp: "واتساب",
        connectWithUs: "تواصل معنا",
        featuredExperience: "تجربة مميزة",
        viewFlyer: "عرض المنشور",
        duration: "المدة",
        service: "الخدمة"
      },
      flyer: {
        highlights: "أبرز النقاط",
        scan: "مسح للتفاصيل",
        reserve: "احجز مكانك",
        limited: "أماكن محدودة",
        flexibleDates: "تواريخ مرنة",
        print: "طباعة / حفظ PDF"
      },
      nav: { home: "الرئيسية", about: "العائلة", services: "المراسم", gallery: "المعرض", contact: "اتصل بنا", faq: "الأسئلة الشائعة" },
      services: { 
          title: "المراسم", 
          items: [{ 
              title: "خلوة لمدة يومين", 
              description: "انغماس عميق في واينا واسي وكينساكوتشا. التكلفة الأساسية 173 دولارًا (شخص واحد). كل شخص إضافي +70 دولارًا. الإقامة +20 دولارًا للشخص الواحد. بحد أقصى 10 أشخاص.", 
              price: "$173+",
              details: { duration: "يومين", location: "بيساك وكينساكوتشا", groupSize: "الحد الأقصى 10" } 
          }, 
          { 
            title: "العام الجديد في أوسانجاتي (3 أيام)", 
            description: "ابدأ عام 2026 مع الأبو. مراسم تيمزكال، رابي، وواتشوما في باتشانتا. يشمل تصويرًا احترافيًا مجانيًا.", 
            price: "€173",
            details: { duration: "3 أيام", location: "باتشانتا وأوسانجاتي", groupSize: "مجموعة" } 
          },
          { 
            title: "رحلة أوسانجاتي المقدسة (7 أيام)", 
            description: "الانغماس الكامل. 3 مراسم واتشوما، طقوس تيمزكال، المشي إلى البحيرات، وعمل شفاء عميق.", 
            price: "استفسار",
            details: { duration: "7 أيام", location: "باتشانتا وأوسانجاتي", groupSize: "مجموعة" } 
          },
          { 
              title: "انغماس جوتشوي كوسكو", 
              description: "يومين في أطلال 'كوسكو الصغيرة'. إقامة مع عائلة محلية، وطهي الطعام التقليدي معًا، وتجربة اتصال عميق.", 
              price: "$200+",
              details: { duration: "يومين", location: "جوتشوي كوسكو", groupSize: "الحد الأدنى 2" }
          }, { 
              title: "مراسم ليوم واحد", 
              description: "رحلة مقدسة بحد أدنى شخصين. جرب الدواء في مواقع مقدسة مختلفة مثل الأطلال والبحيرات والجبال عبر الوادي المقدس.", 
              price: "$250",
              details: { duration: "يوم واحد", location: "الوادي المقدس", groupSize: "الحد الأدنى 2" }
          }, { 
              title: "حج كوستاريكا", 
              description: "رحلة مقدسة تربط جبال الأنديز والمحيط في مكان سري في كوستاريكا. تقتصر على 21 مشاركًا.", 
              price: "استفسار",
              details: { duration: "7 أيام", location: "كوستاريكا", groupSize: "الحد الأقصى 21" }
          }, { 
              title: "شفاء خاص", 
              description: "جلسات فردية مصممة خصيصًا لاحتياجاتك الروحية والعاطفية. إزالة الانسداد العميق.", 
              price: "استفسار",
              details: { duration: "يختلف", location: "واينا واسي", groupSize: "شخص واحد" }
          }], 
          ausangateCta: { title: "خلوة خاصة: رحلة أوسانجاتي", description: "انضم إلينا في رحلة تحويلية لمدة 7 أيام إلى جبل أوسانجاتي المقدس. الينابيع الساخنة والمشي لمسافات طويلة والعمل الطبي العميق.", button: "عرض مسار الرحلة" } 
      },
      hero: { title: "الطب المقدس في جبال الأنديز", subtitle: "أعد الاتصال مع باتشاماما (الأرض الأم) من خلال مراسم واتشوما التقليدية في الوادي المقدس.", cta: "احجز مراسم", retreatTeaser: { label: "انغماس مقدس", title: "خلوة لمدة يومين", location: "بيساك وكينساكوتشا" }, ausangateTeaser: { label: "خاص بالعام الجديد", title: "أوسانجاتي 3 أيام", date: "3-5 يناير 2026" }, costaRicaTeaser: { label: "حدث خاص", title: "حج كوستاريكا", date: "24 فبراير - 2 مارس 2026" } },
      ausangate3Day: {
        title: "رحلة أوسانجاتي للعام الجديد (3 أيام)",
        subtitle: "ابدأ العام الجديد مع الأبو",
        description: "طريقة مكثفة وقوية لبدء عام 2026. ابدأ العام الجديد برحلة واتشوما خاصة إلى أوسانجاتي، وتواصل مع الجبل المقدس والمياه الشافية.",
        details: {
            dates: "3 - 5 يناير 2026",
            price: "€173",
            bonus: "يشمل جلسة تصوير احترافية مجانية"
        },
        cta: "احجز مكانك",
        itinerary: [
          { day: "اليوم 1", title: "الوصول والتطهير والتيمزكال", description: "السفر إلى باتشانتا. الاسترخاء في المياه الحرارية الطبيعية. سنشارك في مراسم تيمزكال مع طب الرابي المقدس لتطهير عميق، يليه نزهة نحو أوسانجاتي لتحديد نوايا العام الجديد." },
          { day: "اليوم 2", title: "مراسم الواتشوما", description: "فتح القلب. مراسم نهارية عميقة للتواصل مع روح الجبل وسماء الأنديز الشاسعة." },
          { day: "اليوم 3", title: "رحلة العودة", description: "إغلاق الدائرة. المشي نزولاً من الجبل، نقع أخير في الينابيع الساخنة في باتشانتا، والنقل العودة إلى بيساك." }
        ]
      },
      benefits: { title: "قوة الواتشوما", subtitle: "لماذا نسافر مع الصبار المقدس", items: [{ title: "الشفاء العاطفي", description: "تحرير الصدمات الماضية والانسدادات العاطفية." }, { title: "الاتصال بالطبيعة", description: "تجربة وحدة عميقة مع الأرض والعناصر." }, { title: "الوضوح والرؤية", description: "تهدئة العقل لتلقي التوجيه والغرض." }] },
      footer: { description: "جرب القوة التحويلية للواتشوما، طب النباتات المقدس في جبال الأنديز.", columns: { links: { title: "روابط", items: [{label: "معلومات عنا", href: "/about"}, {label: "اتصل بنا", href: "/contact"}] }, reviews: { title: "تقييمات جوجل", rating: "4,9/5" }, follow: { title: "تابعنا", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "اتصل بنا", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "موقعنا", address: "Wayna Wasi, Pisac, Perú" } }, rights: "جميع الحقوق محفوظة." },
      about: {
        title: "تعرف على هيرنان",
        subtitle: "حارس الصبار المقدس",
        description: [
            "<strong>هيرنان كولكي</strong> هو من السكان الأصليين للكيتشوا وميسر مخلص لـ <strong>مراسم واتشوما (سان بيدرو)</strong>، متجذرة بعمق في التقاليد المقدسة لجبال الأنديز. ولد على ارتفاع يزيد عن 5000 متر في <strong>فياشا</strong>، وهو مجتمع مرتفع في <strong>بيساك</strong>، يحمل هيرنان سلالة شفاء طبية تعود إلى ما قبل الإنكا.",
            "وفقًا لتقاليد الأجداد، يمكن لطفل واحد فقط في كل جيل أن يرث هذا المسار، ويجب عليه اختياره طواعية. انتقلت الحكمة من جده كارمن إلى والده بينينيو. من بين سبعة أشقاء، اختار هيرنان الطب في سن مبكرة جدًا، وأصبح الحامل الوحيد لهذا الإرث القديم واتصاله العميق بـ <strong>باتشاماما (الأرض الأم)</strong>.",
            "<strong>سلالة كانا من إسبينار.</strong> ينحدر هيرنان من <strong>مقاطعة إسبينار</strong> وسلالته هي <strong>كانا</strong>. كانت ثقافة كانا مجتمعًا ما قبل الإنكا شكل تحالفًا استراتيجيًا سلميًا فريدًا مع إمبراطورية الإنكا بدلاً من الغزو النموذجي. وبسبب هذا التبادل، تم منحهم أراضي وتم إعادة بناء عاصمتهم القديمة من قبل الإنكا.",
            "<strong>روح الواتشوما.</strong> هناك قول مأثور بأن روح الواتشوما ربطت الناس من هذه المنطقة أولاً واحتفظوا بها في قلوبهم لأن النبات أخبرهم أنه سيختفي من الأرض. يحمل هيرنان هذه الذاكرة والروح إلى الأمام.",
            "<strong>بيساك وفياشا.</strong> نحن متواجدون في <strong>بيساك</strong>، وهي بلدة نابضة بالحياة في الوادي المقدس، حيث نستضيف الاحتفالات ونوفر أماكن إقامة هادئة في <strong>فندق واينا واسي</strong>. لتعميق التجربة، تقام خلواتنا متعددة الأيام في <strong>فياشا</strong>، وهو مجتمع هادئ مرتفع فوق بيساك."
        ]
      },
      ausangate: {
        title: "رحلة أوسانجاتي المقدسة",
        subtitle: "3-9 يناير 2026",
        description: "رحلة استكشافية عميقة تجمع بين مياه باتشانتا العلاجية، والوجود المهيب لـ أبو أوسانجاتي، والقوة التحويلية للواتشوما والتيمزكال.",
        cta: "احجز مكانك",
        itinerary: [
          { day: "اليوم 1", title: "الوصول والتطهير", description: "السفر إلى باتشانتا. الاسترخاء في المياه الحرارية الطبيعية لتطهير الجسم، يليه نزهة نحو أوسانجاتي لتحديد نوايانا." },
          { day: "اليوم 2", title: "مراسم الواتشوما الأولى", description: "فتح القلب. مراسم نهارية للتواصل مع روح الجبل وسماء الأنديز الشاسعة." },
          { day: "اليوم 3", title: "تيمزكال ورابي", description: "طقوس حمام بخار تقليدية تمثل رحم الأرض الأم. التخلص من السموم الجسدية والروحية مع دواء رابي المقدس." },
          { day: "اليوم 4", title: "مراسم الواتشوما الثانية", description: "تعميق الرحلة. العمل من خلال الانسدادات الداخلية وتوسيع الوعي في صمت المرتفعات." },
          { day: "اليوم 5", title: "تيمزكال ورابي", description: "مراسم حمام بخار ثانية لتثبيت الطاقات المستلمة وتطهير الروح بشكل أكبر." },
          { day: "اليوم 6", title: "الواتشوما الثالث والتكامل", description: "مراسم الطب النهائية. التركيز على التكامل والامتنان وختم الشفاء الذي تم تلقيه خلال الأسبوع." },
          { day: "اليوم 7", title: "رحلة العودة", description: "المشي نزولاً من الجبل، نقع أخير في الينابيع الساخنة في باتشانتا، والنقل العودة إلى بيساك." }
        ]
      },
      costaRica: {
        title: "الحج المقدس إلى كوستاريكا",
        subtitle: "اتحاد الجبال والمحيط",
        intro: "مناسبة خاصة جداً، لأول مرة في كوستاريكا في مكان سري. اتصال الجبال المقدسة مع المحيط، حج جسدي وروحي خاص يتبع رؤية ورسالة من الطب.",
        description: [
            "انضم إلينا في تجمع تاريخي وتحويلي. لأول مرة، يجلب هيرنان طب الواتشوما المقدس إلى أراضي كوستاريكا النابضة بالحياة.",
            "مسترشدين برؤية عميقة ورسالة مباشرة من الطب، تعد هذه الخلوة حجاً روحياً يربط حكمة جبال الأنديز بالقوة المنظفة للمحيط.",
            "بالإضافة إلى مراسم الواتشوما المقدسة، سنشارك طب الرابي، ونقوم بأعمال التطهير بالزهور، ونسافر من خلال تأملات الطب الموجهة.",
            "سنجتمع في مكان سري ومعزول، مغمورين في أحضان الطبيعة. هذه التجربة الحميمة محدودة بصرامة بـ 21 مشاركاً لضمان اهتمام شخصي عميق."
        ],
        details: { location: "موقع سري، كوستاريكا", capacity: "محدود بـ 21 روح", dates: "24 فبراير - 2 مارس 2026" },
        cta: "طلب دعوة",
        visionTitle: "رؤية من الطب",
        visionText: "هذا التجمع ليس مجرد خلوة؛ إنه استجابة لنداء. تحدث الطب عن ربط الحكمة الموجودة في أعالي الأنديز بالطاقة النقية والسائلة للمحيط.",
        themeValue: "المحيط والجبل"
      },
      retreat2Day: {
        title: "خلوة لمدة يومين",
        subtitle: "واينا واسي وكينساكوتشا",
        intro: "انغماس عميق في الطب المقدس، يقام في ملاذ واينا واسي وجبال بيساك القوية.",
        days: [
            { title: "اليوم 1: التحضير والوصول", content: "عند الوصول إلى واينا واسي، سيبدأ المشاركون رحلتهم بالتحضير الاحتفالي لمشروب الواتشوما المقدس. تبدأ هذه التجربة رابطة مقدسة مع الطب. يوجه هيرنان كل مشارك بعناية.", accommodation: "قضاء الليلة في واينا واسي، ملاذ للسلام." },
            { title: "اليوم 2: مراسم في كينساكوتشا", content: "في اليوم الثاني، سنسافر إلى موقع كينساكوتشا الموقر، حيث ستشارك في مراسم واتشوما وسط مناظر جبلية خلابة. بتوجيه هيرنان، يستكشف المشاركون مناظرهم الداخلية.", accommodation: "العودة إلى واينا واسي لقضاء ليلة هادئة." }
        ],
        conclusion: "سيغادر المشاركون بشعور متجدد بالذات والهدف، ممكّنين بتجربة الواتشوما وحكمة باتشاماما الخالدة."
      },
      juchuy: {
        title: "انغماس جوتشوي كوسكو",
        subtitle: "المجتمع، المطبخ والآثار",
        intro: "رحلة خاصة لمدة يومين إلى جوتشوي كوسكو ('كوسكو الصغيرة')، تجمع بين المشي إلى الآثار القديمة والانغماس الثقافي العميق مع عائلة محلية.",
        days: [
            { title: "اليوم 1: المشي والطهي التقليدي", content: "نبدأ رحلتنا بالمشي لمسافات طويلة إلى أنقاض جوتشوي كوسكو المذهلة. في فترة ما بعد الظهر، نستقر في منزل عائلة محلية أصيلة. هنا، سنقوم بإعداد الطعام معاً.", accommodation: "إقامة أصيلة مع عائلة محلية بجوار الآثار." },
            { title: "اليوم 2: مراسم في الآثار", content: "ينبلج الصباح فوق الجبال. ننخرط في مراسم واتشوما مقدسة في الوجود القوي لآثار جوتشوي كوسكو. تسمح المراسم بالتفكير العميق والاتصال بالأجداد.", accommodation: "النزول والنقل العودة إلى بيساك." }
        ],
        conclusion: "مزيج فريد من العجائب الأثرية والثقافة الحية والعمل الروحي."
      },
      retreat1Day: {
          title: "مراسم ليوم واحد",
          subtitle: "مواقع الوادي المقدسة",
          intro: "رحلة مركزة وعميقة في الطب، تعقد في مواقع مقدسة مختلفة مثل الآثار القديمة، أو البحيرات الهادئة، أو الجبال القوية.",
          days: [
              { title: "المراسم", content: "نبدأ في الصباح الباكر، ونسافر إلى موقع مقدس مختار بعناية في الوادي المقدس. المراسم هي مشاركة ليوم كامل مع الطب والطبيعة والذات. يقدم هيرنان التوجيه.", accommodation: "الإقامة غير مشمولة، ولكن يتم ترتيب النقل." }
          ],
          conclusion: "إعادة ضبط قوية وإعادة اتصال بالعالم الطبيعي، مما يتركك بوضوح وقلب أخف.",
          details: { durationLabel: "المدة", durationValue: "يوم كامل", locationLabel: "الموقع", locationValue: "مواقع الوادي المقدس", focusLabel: "التركيز", focusValue: "الشفاء والطبيعة" }
      },
      preparation: {
        title: "التحضير لخلوة سان بيدرو",
        subtitle: "تمكين مستقبل مجتمع الأنديز",
        intro: "مرحباً بكم في خلوة سان بيدرو التحويلية! لتحقيق أقصى استفادة من هذه التجربة، ندعوكم لإعداد أنفسكم جسدياً وعقلياً.",
        diet: {
            title: "التحضير: نظام غذائي خفيف ونوايا",
            description: "قبل الخلوة، يمكن لنظام غذائي خفيف ونظيف أن يساعد في فتح جسمك وعقلك. إليك بعض الاقتراحات:",
            items: [
                { label: "نظام غذائي نباتي", text: "تجنب اللحوم والمنتجات الحيوانية." },
                { label: "بدون سكريات مضافة", text: "امتنع عن تناول السكريات المصنعة." },
                { label: "الحد من المنشطات", text: "قلل أو تخلص من الكافيين والكحول." },
                { label: "تجنب الأطعمة الثقيلة", text: "تخلص من الأطعمة المقلية ومنتجات الألبان." },
                { label: "الترطيب", text: "اشرب الكثير من الماء." },
                { label: "النوايا", text: "خذ بعض الوقت كل يوم لتحديد نوايا الخلوة." }
            ]
        },
        packing: {
            title: "يوم المراسم",
            description: "في يوم المراسم، نوصي بإحضار بعض الأغراض الشخصية.",
            items: [
                { label: "ملابس مريحة", text: "ارتد ملابس فضفاضة ومريحة مناسبة للهواء الطلق." },
                { label: "قبعة شمسية", text: "احضر قبعة لحماية نفسك من الشمس." },
                { label: "إحضار عرض", text: "من المعتاد إحضار الفواكه والزهور كقرابين." },
                { label: "زجاجة ماء", text: "البقاء رطباً طوال اليوم أمر ضروري." },
                { label: "دفتر وقلم", text: "لتدوين الأفكار بعد المراسم." }
            ]
        },
        suggestions: {
            title: "اقتراحات إضافية",
            description: "لتعزيز رحلتك، ضع في اعتبارك ما يلي:",
            items: [
                { label: "احترام وقت الصمت", text: "استخدم فترات الصمت للتفكير." },
                { label: "التنفس والتأمل", text: "يمكن أن تساعد تمارين التنفس اللطيفة." },
                { label: "التخلص من السموم الرقمية", text: "افصل الهواتف والأجهزة الإلكترونية." },
                { label: "الاتصال بالطبيعة", text: "اقض وقتاً في الطبيعة كل يوم." }
            ]
        },
        closing: "من خلال التحضير بوعي والبقاء منفتحاً، ستخلق مساحة لطب سان بيدرو لإرشادك.",
        risks: {
            title: "إشعار مهم: المخاطر والمسؤوليات",
            intro: "من المهم الاعتراف بأن المشاركة تنطوي على مخاطر جسدية ونفسية.",
            sections: [
                { title: "الإفصاح الطبي", items: [{ label: "الحالات الطبية", text: "يجب إبلاغ الميسرين بأي حالات طبية." }, { label: "الأدوية", text: "قد يكون لبعض الأدوية تفاعلات ضارة." }, { label: "الحساسية الجسدية", text: "قد يسبب سان بيدرو تأثيرات جسدية مؤقتة." }] },
                { title: "المخاطر النفسية", items: [{ label: "تجارب مكثفة", text: "يمكن أن يجلب سان بيدرو مشاعر عميقة." }, { label: "دعم التكامل", text: "ينصح بالتخطيط للوقت والدعم بعد الخلوة." }] },
                { title: "المسؤولية الشخصية", items: [{ label: "الموافقة المستنيرة", text: "أنت تشارك طواعية." }, { label: "احتياطات السلامة", text: "اتبع جميع إرشادات السلامة." }] }
            ]
        }
      },
      faq: {
        title: "دليل خلوة الواتشوما",
        subtitle: "كل ما تحتاج لمعرفته حول التجربة",
        articles: [
            {
                title: "ماذا تتوقع في خلوة واتشوما",
                content: [
                    "التخطيط لخلوة واتشوما يمكن أن يبدو وكأنه تحضير لحج الروح. سواء كنت جديداً على طب النباتات أو باحثاً متمرساً، تقدم كل مراسم واتشوما تجربة فريدة وتحويلية. إليك ما يمكنك توقعه عند الشروع في خلوة في الوادي المقدس في بيرو، حيث تكون روح الأنديز وباتشاماما حاضرة دائمًا.",
                    "<strong>مكان مقدس للشفاء العميق</strong><br>الوادي المقدس بالقرب من كوسكو هو الخلفية المثالية لرحلتك الروحية. يقع مساحة الخلوة لدينا بين جبال الأنديز، وتحيط به مناظر طبيعية خلابة تضخم قوة الواتشوما. من لحظة وصولك، ستشعر بالاتصال العميق بين الأرض والكون - وهو اتصال مركزي في علم الكونيات الأنديزي وتقاليد الواتشوما.",
                    "<strong>يوم مراسم نموذجي</strong><br>ستبدأ خلوتك بمقدمة لطيفة عن الواتشوما. تحت توجيه هيرنان كولكي، تتكشف المراسم في مساحة آمنة وداعمة حيث سيتم تشجيعك على الاستماع إلى صوتك الداخلي. يساعد الواتشوما على فتح قلبك، مما يوفر الوضوح والشعور بالسلام أثناء رحلتك خلال اليوم. تتضمن الخلوة غالبًا وقتًا هادئًا في الطبيعة، ومشاركة جماعية، ووقتًا للتفكير، مما يجعل التجربة شمولية وعلاجية.",
                    "<strong>دمج تجربتك مع الواتشوما</strong><br>الرؤى المكتسبة من الواتشوما يمكن أن تكون عميقة، ومن المهم تخصيص وقت لدمج هذه الدروس في حياتك اليومية. هيرنان وفريقه موجودون لمساعدتك في معالجة تجاربك، سواء من خلال المناقشات الجماعية أو الدعم الفردي. يغادر العديد من المشاركين الخلوة بشعور متجدد بالهدف واتصال عميق بأنفسهم والعالم من حولهم."
                ]
            },
            {
                title: "اكتشف القوة العلاجية للواتشوما",
                content: [
                    "<strong>ما هو صبار سان بيدرو؟</strong><br>صبار سان بيدرو، المعروف أيضاً باسم واتشوما، هو نبات طبي قديم موطنه مرتفعات الأنديز، وبشكل أساسي في بيرو. يزدهر هذا الصبار الأخضر العمودي الطويل، المسمى علمياً <em>Echinopsis pachanoi</em>، على ارتفاعات عالية، غالباً ما بين 2000 و 3000 متر. يمكن التعرف عليه بسهولة من خلال أضلاعه البارزة وأشواكه القصيرة وزهوره البيضاء الكبيرة التي تتفتح في الليل.",
                    "<strong>الأصول والتاريخ</strong><br>تم استخدام سان بيدرو لآلاف السنين من قبل شعوب الأنديز الأصلية، وخاصة مجتمعات الكيتشوا والأيمارا. متجذر بعمق في التقاليد الشامانية، فهو بمثابة جسر بين العالمين المادي والروحي. يشير اسمه، سان بيدرو، إلى القديس بطرس، حارس أبواب الجنة، مما يرمز إلى الوصول إلى الأبعاد الروحية.",
                    "<strong>قوة المسكالين: الاتصال بالتناغم الكوني</strong><br>أحد المركبات النشطة الرئيسية في صبار سان بيدرو هو المسكالين، وهو قلويد ذو تأثير نفسي طبيعي. المسكالين مسؤول عن التجارب البصرية والاستبطانية العميقة المرتبطة بالواتشوما. على عكس المواد الاصطناعية، يوجه مسكالين سان بيدرو الأفراد بلطف إلى حالة معدلة من الوعي، مما يعزز الشعور بالوحدة والانسجام مع العالم من حولهم.",
                    "غالبًا ما تقود مراسم الواتشوما المشاركين للشعور بارتباط عميق بباتشاماما (الأرض الأم)، وتجربة نبض الطبيعة وإيقاع الحياة نفسها. يساعد هذا الاتصال في إذابة الحدود بين الذات والكون، مما يسمح برؤى عميقة ووضوح روحي. يصف الكثيرون ممن يشرعون في هذه الرحلة بأنها تجربة فتح القلب، حيث يتدفق الحب والرحمة بشكل طبيعي.",
                    "<strong>الفوائد الروحية والعلاجية</strong><br>يشتهر سان بيدرو بخصائصه الروحية والعلاجية. آثاره عموماً أكثر لطفاً وتدرجاً مقارنة بأدوية النباتات الأخرى مثل آياهواسكا. هذا يجعله في متناول أولئك الذين يسعون للشفاء العاطفي والوضوح الداخلي دون شدة اليقظة المفاجئة.<br><br><strong>الفوائد الروحية:</strong><br>• اليقظة الروحية: تسهل إعادة الاتصال بالذات الحقيقية والعالم الطبيعي.<br>• فتح القلب: يعزز الرحمة والمغفرة والتحرر العاطفي العميق.<br>• الوضوح العقلي: يساعد في اكتساب منظور حول تحديات الحياة ويعزز القبول.<br><br><strong>الفوائد العلاجية:</strong><br>• التحرر العاطفي: يساعد في معالجة الصدمات الماضية والمشاعر غير المحلولة.<br>• الهدوء والسكينة: يقلل من القلق ويزرع السلام الداخلي.<br>• الاتصال بالطبيعة: يقوي الرابطة مع الأرض والعناصر."
                ]
            }
        ],
        questionsTitle: "أسئلة مكررة",
        questions: [
            { question: "ما هي مراسم سان بيدرو؟", answer: "سان بيدرو (واتشوما) هو دواء نباتي مقدس يستخدم للشفاء والرؤية والاتصال الروحي العميق. يتم توجيه مراسمنا من قبل ميسرين ذوي خبرة لضمان تجربة آمنة وتحويلية." },
            { question: "هل الخلوة مناسبة للمبتدئين؟", answer: "نعم، خلواتنا مفتوحة للجميع، سواء كانت لديك خبرة سابقة في طب النباتات أو كنت مشاركًا لأول مرة. نحن نقدم التوجيه والدعم الكامل طوال العملية." },
            { question: "ما هي كينساكوتشا، ولماذا هي مميزة؟", answer: "كينساكوتشا، الواقعة بالقرب من بيساك، هي منطقة هادئة تحيط بها البحيرات المقدسة. إنها مكان مثالي لمراسم الواتشوما، حيث توفر اتصالًا عميقًا بالطبيعة والروحانية الأنديزية." },
            { question: "ماذا يجب أن أحضر للخلوة أو المراسم؟", answer: "سيتم توفير قائمة مفصلة، ولكن الأساسيات تشمل ملابس مريحة وأحذية للمشي وأغراض شخصية وقلبًا مفتوحًا للتحول." },
            { question: "ما هي اللغة المستخدمة خلال الخلوة؟", answer: "يتحدث هيرنان الكيتشوا والإسبانية. إذا كنت لا تتحدث هذه اللغات، فسيكون هناك مترجم فرنسي-إسباني متاح لمساعدتك طوال الخلوة." },
            { question: "هل الخلوة آمنة؟", answer: "السلامة هي أولويتنا القصوى. تقام خلواتنا في بيئة خاضعة للرقابة وداعمة مع ميسرين ذوي خبرة لإرشادك خلال كل خطوة من الرحلة." },
            { question: "ما هي سياسة الاسترداد أو الإلغاء الخاصة بك؟", answer: "الودائع قابلة للاسترداد حتى تاريخ محدد. نحن نشجع التواصل المبكر إذا تغيرت خططك لضمان الوضوح والدعم." }
        ]
      },
      testimonials: { title: "أصوات من القلب", items: [{ 
          name: "Zoltan E.", 
          location: "هنغاريا", 
          text: `إنها تجربة أصيلة حقاً للتواصل مع روح الأرض والقوة العلاجية لطب النباتات. لقد كان اتصالاً عميقاً بالحكمة القديمة لمرشدي الإنكا وما قبل الإنكا الروحيين من خلال المايسترو هيرنان. أنا ممتن جداً للرحلة.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `أشعر بأنني محظوظة جداً لأنني شاركت في مراسم واتشوما لمدة يوم كامل مع دون هيرنان. سافرنا إلى الجبال، عبر قرية محلية، للتواصل مع الطبيعة والروح وطاقة المعاملة بالمثل. توجيهه صادق، وطبه هو أفضل واتشوما تناولته. عدنا إلى منزله لإنهاء المراسم بحساء الأنديز محلي الصنع اللذيذ، ونار في الحديقة تحت اكتمال القمر والنجوم. أوصي بشدة بزيارة واينا واسي والعمل مع دون هيرنان.`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "اتصل بنا",
        form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", submit: "إرسال الرسالة" },
        info: "نحن موجودون في قلب الوادي المقدس، بالقرب من كالكا، كوسكو."
    }
  },

  // JAPANESE
  [Language.JA]: {
      ...enTranslations,
      ui: {
        viewDetails: "詳細を見る",
        inquire: "お問い合わせ",
        contribution: "寄付",
        bookRetreat: "リトリートを予約",
        bookCeremony: "セレモニーを予約",
        accommodation: "宿泊施設",
        note: "備考",
        eventDetails: "イベント詳細",
        location: "場所",
        capacity: "定員",
        theme: "テーマ",
        email: "メール",
        whatsapp: "WhatsApp",
        connectWithUs: "お問い合わせ",
        featuredExperience: "おすすめ体験",
        viewFlyer: "チラシを見る",
        duration: "期間",
        service: "サービス"
      },
      flyer: {
        highlights: "ハイライト",
        scan: "詳細をスキャン",
        reserve: "場所を予約",
        limited: "定員に限りがあります",
        flexibleDates: "柔軟な日程",
        print: "印刷 / PDF保存"
      },
      nav: { home: "ホーム", about: "私たちについて", services: "セレモニー", gallery: "ギャラリー", contact: "お問い合わせ", faq: "よくある質問" },
      services: { 
          title: "セレモニー", 
          items: [{ 
              title: "2日間リトリート", 
              description: "ワイナ・ワシ＆キンサコチャでの深い没入。基本費用$173（1名）。追加1名につき+$70。宿泊費1名につき+$20。最大10名。", 
              price: "$173+",
              details: { duration: "2日間", location: "ピサック＆キンサコチャ", groupSize: "最大10名" } 
          }, 
          { 
            title: "新年アウサンガテ（3日間）", 
            description: "アプと共に2026年をスタート。パッチャンタでのテマズカル、ラペ、ワチュマ・セレモニー。無料のプロ写真撮影付き。", 
            price: "€173",
            details: { duration: "3日間", location: "パッチャンタ＆アウサンガテ", groupSize: "グループ" } 
          },
          { 
            title: "アウサンガテ聖なる旅（7日間）", 
            description: "完全な没入体験。3回のワチュマ・セレモニー、テマズカルの儀式、ラグーンへのハイキング、そして深い癒しのワーク。", 
            price: "お問い合わせ",
            details: { duration: "7日間", location: "パッチャンタ＆アウサンガテ", groupSize: "グループ" } 
          },
          { 
              title: "フチュイ・コスコ没入", 
              description: "「小さなクスコ」遺跡での2日間。地元の家族と一緒に滞在し、伝統的な料理を一緒に作り、深いつながりを体験します。", 
              price: "$200+",
              details: { duration: "2日間", location: "フチュイ・コスコ", groupSize: "最小2名" }
          }, { 
              title: "1日セレモニー", 
              description: "最低2名様からの聖なる旅。聖なる谷の遺跡、ラグーン、山々など、様々な聖地で薬を体験してください。", 
              price: "$250",
              details: { duration: "1日", location: "聖なる谷", groupSize: "最小2名" }
          }, { 
              title: "コスタリカ巡礼", 
              description: "コスタリカの秘密の場所でアンデスと海をつなぐ聖なる旅。21名の参加者に限定。", 
              price: "お問い合わせ",
              details: { duration: "7日間", location: "コスタリカ", groupSize: "最大21名" }
          }, { 
              title: "プライベートヒーリング", 
              description: "あなたの特定の精神的および感情的なニーズに合わせたマンツーマンのセッション。深いブロックの除去。", 
              price: "お問い合わせ",
              details: { duration: "様々", location: "ワイナ・ワシ", groupSize: "1名" }
          }], 
          ausangateCta: { title: "特別リトリート：アウサンガテ遠征", description: "アウサンガテの聖なる山への7日間の変容の旅に参加しましょう。温泉、ハイキング、そして深い薬のワーク。", button: "旅程を見る" } 
      },
      hero: { title: "アンデスの聖なる薬", subtitle: "聖なる谷での伝統的なワチュマ・セレモニーを通じて、パチャママ（母なる大地）と再びつながりましょう。", cta: "セレモニーを予約", retreatTeaser: { label: "聖なる没入", title: "2日間リトリート", location: "ピサック＆キンサコチャ" }, ausangateTeaser: { label: "特別", title: "アウサンガテへの旅", date: "2026年1月3-9日" }, costaRicaTeaser: { label: "特別イベント", title: "コスタリカ巡礼", date: "2026年2月24日〜3月2日" } },
      ausangate3Day: {
        title: "新年のアウサンガテの旅（3日間）",
        subtitle: "アプと共に新年を始める",
        description: "2026年を始めるための凝縮された強力な方法。聖なる山と癒しの水とつながり、アウサンガテへの特別なワチュマの旅で新年を始めましょう。",
        details: {
            dates: "2026年1月3日〜5日",
            price: "€173",
            bonus: "無料のプロ写真撮影セッションが含まれています"
        },
        cta: "場所を予約する",
        itinerary: [
          { day: "1日目", title: "到着、浄化、テマズカル", description: "パッチャンタへ移動。天然温泉でリラックスして体を清めます。聖なるラペの薬を使ったテマズカル（スウェットロッジ）セレモニーで深く浄化し、その後アウサンガテに向けてハイキングを行い、新年の意図を設定します。" },
          { day: "2日目", title: "ワチュマ・セレモニー", description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる深遠な日中のセレモニー。" },
          { day: "3日目", title: "帰路", description: "サークルを閉じる。山を下り、パッチャンタの温泉に最後に浸かり、ピサックへ戻ります。" }
        ]
      },
      benefits: { title: "ワチュマの力", subtitle: "なぜ聖なるサボテンと共に旅をするのか", items: [{ title: "感情の癒し", description: "過去のトラウマや感情的なブロックを解放します。" }, { title: "自然とのつながり", description: "大地、要素、そしてアンデスの精霊との深いつながりを体験します。" }, { title: "明晰さとビジョン", description: "心を静め、人生の道に対する導きと目的を受け取ります。" }] },
      footer: { description: "サンペドロとして知られるアンデスの聖なる植物薬、ワチュマの変容の力を体験してください。", columns: { links: { title: "リンク", items: [{label: "私たちについて", href: "/about"}, {label: "お問い合わせ", href: "/contact"}] }, reviews: { title: "Google レビュー", rating: "4,9/5" }, follow: { title: "フォローする", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "連絡先", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "場所", address: "Wayna Wasi, Pisac, Perú" } }, rights: "無断転載を禁じます。" },
      about: {
        title: "エルナンについて",
        subtitle: "聖なるサボテンの守護者",
        description: [
            "<strong>エルナン・コルケ</strong>はケチュアの先住民であり、アンデスの聖なる伝統に深く根ざした<strong>ワチュマ（サンペドロ）セレモニー</strong>の献身的なファシリテーターです。<strong>ピサック</strong>の高地コミュニティである<strong>ビアチャ</strong>の標高5000m以上で生まれたエルナンは、インカ以前の時代にまで遡る薬用治癒の血統を受け継いでいます。",
            "先祖代々の伝統によれば、各世代で一人の子供だけがこの道を継承することができ、それは自発的に選ばれなければなりません。知恵は祖父のカルメンから父のベニーニョへと受け継がれました。7人の兄弟の中で、エルナンは幼い頃に薬を選び、この古代の遺産と<strong>パチャママ（母なる大地）</strong>との深いつながりの唯一の継承者となりました。",
            "<strong>エスピナル出身のカッナの血統。</strong> エルナンは<strong>エスピナル州</strong>の出身で、彼の血統は<strong>カッナ（K'ana）</strong>です。カッナ文化は、典型的な征服ではなく、インカ帝国と独自の平和的な戦略的同盟を結んだインカ以前の社会でした。パチャクテクの治世中に平和的に統合され、彼らは重要な軍事同盟国、つまりチャンカ族を打ち負かすのを助けたエリート<strong>「シンチ」</strong>戦士となりました。この互恵関係により、彼らはコラスヨに土地を与えられ、彼らの古代の首都カナマルカはインカによって再建されました。",
            "<strong>ワチュマの精神。</strong> ワチュマの精神が最初にこの地域の人々をつなぎ、植物が彼らに「私は土地から姿を消すだろう」と告げたため、彼らはそれを心に留めておいたという言い伝えがあります。エルナンはこの記憶と精神を受け継いでいます。",
            "<strong>ピサックとビアチャ。</strong> 私たちは聖なる谷の活気ある町<strong>ピサック</strong>に拠点を置き、セレモニーを開催し、<strong>ワイナ・ワシ・ホテル</strong>で平和な宿泊施設を提供しています。より深く没入するために、数日間のリトリートはピサックのはるか上にある静かなコミュニティ、<strong>ビアチャ</strong>で開催されます。"
        ]
      },
      ausangate: {
        title: "アウサンガテ聖なる旅",
        subtitle: "2026年1月3日〜9日",
        description: "パッチャンタの癒しの水、アプ・アウサンガテの荘厳な存在、そしてワチュマとテマズカルの変容の力を組み合わせた深遠な探検。",
        cta: "場所を予約する",
        itinerary: [
          { day: "1日目", title: "到着と浄化", description: "パッチャンタへ移動。天然温泉でリラックスして体を清め、その後アウサンガテに向けてハイキングを行い、意図を設定します。" },
          { day: "2日目", title: "最初のワチュマ・セレモニー", description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる日中のセレモニー。" },
          { day: "3日目", title: "テマズカル（スウェットロッジ）＆ラペ", description: "母なる大地の子宮を表す伝統的な蒸し風呂の儀式。聖なるラペの薬による肉体的および精神的な解毒。" },
          { day: "4日目", title: "2回目のワチュマ・セレモニー", description: "旅を深める。高地の静寂の中で内部のブロックを通して働き、意識を拡大します。" },
          { day: "5日目", title: "テマズカル＆ラペ", description: "受け取ったエネルギーをグラウンディングし、聖なるラペで精神をさらに浄化するための2回目のスウェットロッジ・セレモニー。" },
          { day: "6日目", title: "3回目のワチュマ＆統合", description: "最後の薬のセレモニー。統合、感謝、そして週の間に受けた癒しの封印に焦点を当てます。" },
          { day: "7日目", title: "帰路", description: "山を下り、パッチャンタの温泉に最後に浸かり、ピサックへ戻ります。" }
        ]
      },
      costaRica: {
        title: "コスタリカへの聖なる巡礼",
        subtitle: "山と海の統合",
        intro: "秘密の場所でのコスタリカ初開催となる非常に特別な機会。聖なる山々と海をつなぐ、薬からのビジョンとメッセージに従った特別な肉体的および精神的な巡礼。",
        description: [
            "歴史的で変容をもたらす集まりに参加しませんか。初めて、エルナンは聖なるワチュマの薬をコスタリカの活気ある土地にもたらします。",
            "深遠なビジョンと薬からの直接のメッセージに導かれ、このリトリートはアンデスの山々の知恵と海の浄化力をつなぐ精神的な巡礼です。",
            "聖なるワチュマのセレモニーに加えて、ラペの薬を共有し、花を使った浄化のワークを行い、ガイド付きの薬の瞑想を通じて旅をします。",
            "私たちは自然に抱かれた秘密の人里離れた場所に集まります。この親密な体験は、深い個人的な注意とまとまりのあるエネルギー的な器を確保するために、厳密に21人の参加者（ヘルパーを含む）に制限されています。"
        ],
        details: { location: "コスタリカ、秘密の場所", capacity: "21名限定", dates: "2026年2月24日〜3月2日" },
        cta: "招待をリクエスト",
        visionTitle: "薬からのビジョン",
        visionText: "この集まりは単なるリトリートではありません。それは呼びかけへの応答です。薬は、高いアンデスに保持されている知恵と、海の浄化する流動的なエネルギーをつなぐことについて語りました。精神と肉体の巡礼です。",
        themeValue: "海と山"
      },
      retreat2Day: {
        title: "2日間リトリート",
        subtitle: "ワイナ・ワシ＆キンサコチャ",
        intro: "ワイナ・ワシの聖域とピサックの力強い山々で開催される、聖なる薬への深い没入。",
        days: [
            { title: "1日目：準備とワイナ・ワシへの到着", content: "ワイナ・ワシに到着すると、参加者はベビダ（聖なるワチュマの飲み物）の儀式的な準備から旅を始めます。この体験は薬との聖なる絆を開始し、内なる探求とつながりの舞台を設定します。エルナンは各参加者を丁寧に導き、意図を明確にし、ワチュマの穏やかでありながら強力な効果に心を開くのを助けます。", accommodation: "アンデスの精霊が常に存在する平和の聖域、ワイナ・ワシで夜を過ごします。" },
            { title: "2日目：ピサック、キンサコチャでのセレモニー", content: "2日目は、ピサックの崇敬される場所キンサコチャへ移動し、息をのむような山の景色の中でワチュマ・セレモニーに参加します。エルナンの経験豊富な指導の下、参加者は内面の風景を探求し、個人的な洞察を求め、ワチュマが提供する教えを受け取ります。セレモニーの終わりに、グループシェアリングサークルが参加者が旅を処理し、振り返ることを可能にし、リトリートの影響を高めます。", accommodation: "変容をもたらす体験を吸収するために、ワイナ・ワシに戻り、静かな夜を過ごします。" }
        ],
        conclusion: "参加者は、ワチュマの体験とパチャママの時代を超越した知恵によって力を与えられ、新たな自己意識と目的を持って出発します。"
      },
      juchuy: {
        title: "フチュイ・コスコ 先祖代々の没入",
        subtitle: "コミュニティ、料理、遺跡",
        intro: "古代遺跡へのハイキングと地元の家族との滞在による深い文化的没入を組み合わせた、フチュイ・コスコ（「小さなクスコ」）への特別な2日間の旅。",
        days: [
            { title: "1日目：ハイキング＆伝統料理", content: "聖なる谷を見下ろすフチュイ・コスコの壮観な遺跡へのハイキングから旅を始めます。午後は、本物の地元の民家に落ち着きます。ここでは、一緒に食事を準備し、伝統的なアンデスのスープを作り、火を囲んで物語を共有します。この共同の準備はそれ自体がセレモニーであり、私たちを地元の生活様式にグラウンディングさせます。", accommodation: "遺跡の隣にある地元の家族との本物の宿泊施設。" },
            { title: "2日目：遺跡でのセレモニー", content: "アプの上に朝が明けます。私たちはフチュイ・コスコ遺跡の強力な存在の中で聖なるワチュマ・セレモニーに従事します。他の場所のような混雑がなく、この王室の邸宅の歴史とエネルギーと深くつながることができます。セレモニーは、先祖との深い反省とつながりを可能にします。", accommodation: "下山し、ピサックへの帰りの送迎。" }
        ],
        conclusion: "考古学的な驚異、生きた文化、そして精神的なワークのユニークな融合。あなたはお腹がいっぱいで、心が温かく、精神がアンデスと一致した状態で出発します。"
      },
      retreat1Day: {
          title: "1日セレモニー",
          subtitle: "聖なる谷の聖地",
          intro: "古代の遺跡、静かなラグーン、力強い山々など、様々な聖地で開催される、薬への集中的かつ深遠な旅。",
          days: [
              { title: "セレモニー", content: "早朝に出発し、聖なる谷（プマママルカ、キンサコチャ、その他のパワースポットなど）の厳選された聖地へ移動します。セレモニーは、薬、自然、そして自分自身との一日がかりの取り組みです。エルナンはガイダンスを提供し、深い癒しとつながりのためのスペースを保持します。体験は午後遅くに終了します。", accommodation: "宿泊施設は含まれていませんが、現地への送迎は手配されます。" }
          ],
          conclusion: "自然界との強力なリセットと再接続により、明晰さと軽い心を持って出発します。",
          details: { durationLabel: "期間", durationValue: "終日（朝から午後まで）", locationLabel: "場所", locationValue: "聖なる谷の聖地", focusLabel: "フォーカス", focusValue: "癒しと自然" }
      },
      preparation: {
        title: "サンペドロ・リトリートの準備",
        subtitle: "アンデス・コミュニティの未来に力を",
        intro: "変容をもたらす3日間のサンペドロ・リトリートへようこそ！この体験を最大限に活用するために、事前に肉体的および精神的に準備することをお勧めします。有意義な旅にするためのガイドはこちらです。",
        diet: {
            title: "準備：軽い食事と意図の設定",
            description: "リトリートに向けて、軽くてきれいな食事は、体験に向けて体と心を開くのに役立ちます。到着の少なくとも3〜5日前に従うべきいくつかの提案があります：",
            items: [
                { label: "ベジタリアンダイエット", text: "肉や動物性製品は消化器系に負担をかける可能性があるため、避けてください。" },
                { label: "砂糖無添加", text: "エネルギーのバランスを保つために、加工糖の摂取を控えてください。" },
                { label: "刺激物を制限する", text: "心と体をきれいにするために、カフェイン、アルコール、その他の刺激物を減らすか排除してください。" },
                { label: "重い食事を避ける", text: "消化プロセスを容易にするために、揚げ物や乳製品をカットしてください。" },
                { label: "水分補給", text: "明晰さと全体的な健康のために、たくさんの水を飲んでください。" },
                { label: "意図", text: "食事以外にも、毎日時間を取ってリトリートの意図を設定してください。ジャーナリング、瞑想、または静かな熟考を通じて、この旅を通じて何を得たいか、または解放したいかに同調してください。" }
            ]
        },
        packing: {
            title: "セレモニーの日",
            description: "リトリートの2日目に行われるセレモニーの日には、つながりを高め、聖なる空間に貢献できるいくつかの私物を持参することをお勧めします。",
            items: [
                { label: "快適な服装", text: "屋外に適した、ゆったりとした快適な服を着てください。" },
                { label: "日よけ帽子", text: "セレモニーは屋外で行われるため、日差しから身を守るために帽子を持参してください。" },
                { label: "供物を持参する", text: "セレモニーのために果物や花を供物として持参するのが通例です。このジェスチャーは感謝と自然とのつながりを象徴しています。" },
                { label: "水筒", text: "一日中水分補給をすることは不可欠です。" },
                { label: "ノートとペン", text: "思考、洞察、または感情を捉えるために、セレモニーの後にジャーナリングをするインスピレーションを感じるかもしれません。" }
            ]
        },
        suggestions: {
            title: "リトリートのための追加の提案",
            description: "旅を充実させるために、以下を検討してください：",
            items: [
                { label: "静かな時間を尊重する", text: "体験を振り返り、処理するために沈黙の期間を使用してください。" },
                { label: "呼吸法と瞑想", text: "穏やかな呼吸法や瞑想は、グラウンディングし、中心を保つのに役立ちます。" },
                { label: "デジタルデトックス", text: "電話やその他の電子機器から切断し、完全に存在することを許可してください。" },
                { label: "自然とつながる", text: "可能であれば、毎日自然の中で過ごし、それが内なる旅をサポートするようにしてください。" }
            ]
        },
        closing: "マインドフルに準備し、オープンでいることで、サンペドロの薬が発見の深遠な道へとあなたを導くためのスペースを作ることができます。この特別な体験をあなたと共有できることを楽しみにしています。",
        risks: {
            title: "重要なお知らせ：リスクと責任の理解",
            intro: "このリトリートは安全で変容をもたらす体験を提供するように設計されていますが、サンペドロ・セレモニーへの参加には肉体的および心理的なリスクが伴うことを認識することが重要です。情報に基づいた参加を確実にするために、以下の考慮事項を慎重に確認してください：",
            sections: [
                { title: "健康および医療開示", items: [{ label: "病状", text: "参加者は、心臓の問題、精神的健康状態、または発作の病歴を含む病状をファシリテーターに通知する必要があります。一部の既往症は、サンペドロ体験に関連するリスクを高める可能性があります。" }, { label: "薬", text: "抗うつ薬、抗精神病薬、および一部の市販薬を含む特定の薬は、サンペドロと悪影響を及ぼす可能性があります。リトリートのかなり前にファシリテーターに薬を開示してください。" }, { label: "身体的感受性", text: "サンペドロは、吐き気、嘔吐、心拍数の増加など、一時的な身体的影響を引き起こす可能性があります。参加者はこれらの影響に対して肉体的および精神的に準備する必要があります。" }] },
                { title: "心理的リスクと感情的責任", items: [{ label: "強烈な体験", text: "サンペドロは深い感情や過去のトラウマを引き起こす可能性があり、処理するのが難しい場合があります。トラウマの病歴がある場合、参加者は事前に個人的な振り返りを行うか、専門家の指導を求めることをお勧めします。" }, { label: "統合サポート", text: "リトリート後、参加者は体験を統合するための追加のサポートから恩恵を受ける場合があります。生じた洞察や感情を処理するための時間、サポート、リソースを計画することをお勧めします。" }] },
                { title: "個人の責任", items: [{ label: "インフォームドコンセント", text: "このリトリートに参加することにより、あなたは自発的にこの体験に従事していることを認めます。あなたが経験する洞察、課題、または個人的な変容は、あなた自身の責任です。" }, { label: "安全上の注意", text: "食事制限、セレモニー中の推奨される行動、身体活動の制限など、ファシリテーターが提供するすべての安全ガイドラインに従ってください。" }] }
            ]
        }
      },
      faq: {
        title: "ワチュマ・リトリートガイド",
        subtitle: "体験について知っておくべきことすべて",
        articles: [
            {
                title: "ワチュマ・リトリートで期待すること",
                content: [
                    "ワチュマ・リトリートを計画することは、魂の巡礼の準備のように感じられるかもしれません。植物薬が初めての方でも、経験豊富な探求者でも、すべてのワチュマ・セレモニーはユニークで変容をもたらす体験を提供します。アンデスの精霊とパチャママ自身が常に存在するペルーの聖なる谷でのリトリートに乗り出す際に期待できることは次のとおりです。",
                    "<strong>深い癒しのための聖なる環境</strong><br>クスコ近くの聖なる谷は、あなたの精神的な旅のための完璧な背景です。アンデスの山々に囲まれたリトリートスペースは、ワチュマの力を増幅する素晴らしい風景に囲まれています。到着した瞬間から、地球と宇宙の間の深いつながりを感じるでしょう。このつながりは、アンデスの宇宙論とワチュマの伝統の中心です。",
                    "<strong>典型的なワチュマ・セレモニーの日</strong><br>リトリートは、ワチュマへの穏やかな紹介から始まります。エルナン・コルケの指導の下、セレモニーは安全で協力的なスペースで展開され、内なる声に耳を傾けることが奨励されます。ワチュマは心を開き、明晰さと安らぎを与えながら、一日を通して旅をします。リトリートには、自然の中での静かな時間、グループシェアリング、内省の時間が含まれることが多く、体験を全体的かつ癒しのあるものにします。",
                    "<strong>ワチュマ体験の統合</strong><br>ワチュマから得られる洞察は深遠であり、これらの教訓を日常生活に統合するために時間を取ることが重要です。エルナンと彼のチームは、グループディスカッションやマンツーマンのサポートを通じて、あなたが体験を処理するのを助けるためにそこにいます。多くの参加者は、新たな目的意識と、自分自身や周りの世界との深いつながりを持ってリトリートを後にします。"
                ]
            },
            {
                title: "ワチュマの治癒力を発見する",
                content: [
                    "<strong>サンペドロサボテンとは？</strong><br>サンペドロサボテン（ワチュマとしても知られる）は、主にペルーのアンデス高地に自生する古代の薬用植物です。学名<em>Echinopsis pachanoi</em>と呼ばれるこの背の高い円柱状の緑色のサボテンは、標高2,000〜3,000メートルの高地で繁栄します。顕著な肋骨、短い棘、そして夜に咲く大きな白い花によって容易に認識されます。",
                    "<strong>起源と歴史</strong><br>サンペドロは、何千年もの間、アンデスの先住民族、特にケチュア族とアイマラ族によって使用されてきました。シャーマニズムの伝統に深く根ざしており、物理的世界と精神的世界の間の架け橋として機能します。サンペドロという名前は、天国の門の守護者である聖ペテロにちなんでおり、精神的な次元へのアクセスを象徴しています。",
                    "<strong>メスカリンの力：普遍的な調和への接続</strong><br>サンペドロサボテンの主要な活性化合物の一つは、天然に存在する向精神性アルカロイドであるメスカリンです。メスカリンは、ワチュマに関連する深遠な幻想的および内省的な体験に関与しています。合成物質とは異なり、サンペドロからのメスカリンは、個人を変性意識状態へと優しく導き、周囲の世界との一体感と調和を育みます。",
                    "ワチュマの儀式は、参加者がパチャママ（母なる大地）と深くつながり、自然の鼓動と生命のリズムそのものを体験するように導くことがよくあります。このつながりは、自己と宇宙の間の境界を解消するのに役立ち、深遠な洞察と精神的な明晰さを可能にします。この旅に乗り出す多くの人々は、それを愛と思いやりの心が自然に流れる、心を開く体験として説明しています。",
                    "<strong>精神的および治療的利点</strong><br>サンペドロはその精神的および治癒的特性で有名です。その効果は一般的に、アヤワスカなどの他の植物薬と比較して、より穏やかで段階的です。これにより、より突然の目覚めの激しさなしに、感情的な癒しと内面の明晰さを求める人々にとってアクセスしやすくなります。<br><br><strong>精神的利点：</strong><br>• スピリチュアルな目覚め：本当の自分や自然界との再接続を促進します。<br>• 心を開く：思いやり、許し、そして深い感情の解放を促進します。<br>• 精神的な明晰さ：人生の課題に対する視点を得るのを助け、受容を促進します。<br><br><strong>治療的利点：</strong><br>• 感情の解放：過去のトラウマや未解決の感情を処理するのに役立ちます。<br>• 平穏と静けさ：不安を軽減し、内面の平和を育みます。<br>• 自然とのつながり：地球や要素との絆を強化します。"
                ]
            }
        ],
        questionsTitle: "よくある質問",
        questions: [
            { question: "サンペドロ・セレモニーとは何ですか？", answer: "サンペドロ（ワチュマ）は、癒し、ビジョン、そして深い精神的なつながりのために使用される聖なる植物薬です。私たちのセレモニーは、安全で変容をもたらす体験を確実にするために、経験豊富なファシリテーターによって導かれます。" },
            { question: "リトリートは初心者にも適していますか？", answer: "はい、私たちのリトリートは、植物薬の経験があるかどうかにかかわらず、すべての人に開かれています。プロセス全体を通して完全なガイダンスとサポートを提供します。" },
            { question: "キンサコチャとは何ですか、なぜ特別な場所なのですか？", answer: "ピサックの近くにあるキンサコチャは、聖なる湖に囲まれた静かな地域です。自然やアンデスの精神性との深いつながりを提供する、ワチュマのセレモニーに理想的な環境です。" },
            { question: "リトリートやセレモニーには何を持っていくべきですか？", answer: "詳細なリストが提供されますが、必需品には快適な服、ハイキングシューズ、私物、そして変容のためのオープンな心が含まれます。" },
            { question: "リトリート中に話される言語は何ですか？", answer: "エルナンはケチュア語とスペイン語を話します。これらの言語を話さない場合は、リトリート全体を通してフランス語-スペイン語の通訳が利用可能です。" },
            { question: "リトリートは安全ですか？", answer: "安全は私たちの最優先事項です。私たちのリトリートは、旅の各ステップをガイドする経験豊富なファシリテーターと共に、管理された支援的な環境で開催されます。" },
            { question: "返金またはキャンセルポリシーは何ですか？", answer: "デポジットは特定の日付まで返金可能です。計画が変更された場合は、明確さとサポートを確保するために、早期の連絡をお勧めします。" }
        ]
      },
      testimonials: { title: "心からの声", items: [{ 
          name: "Zoltan E.", 
          location: "ハンガリー", 
          text: `大地の精霊と植物薬の治癒力とつながる、本当に本物の体験です。マエストロ・エルナンを通して、インカおよびインカ以前のスピリチュアルガイドの古代の知恵との深いつながりがありました。この旅にとても感謝しています。`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `ドン・エルナンとの終日ワチュマ・セレモニーに参加できたことはとても幸運でした。私たちは山へ、地元の村を通り、自然、精神、そして互恵性のエネルギーと交信するために旅をしました。彼の指導は誠実で、彼の薬は私がこれまでに飲んだ中で最高のワチュマです。私たちは彼の家に戻り、美味しい自家製のアンデススープと、満月と星空の下での庭の焚き火でセレモニーを終えました。ワイナ・ワシを訪れ、ドン・エルナンと一緒にワークすることを強くお勧めします。`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "お問い合わせ",
        form: { name: "お名前", email: "メールアドレス", message: "メッセージ", submit: "メッセージを送信" },
        info: "私たちはクスコのカルカ近く、聖なる谷の中心に位置しています。"
    }
  },

  // SANSKRIT
  [Language.SA]: {
      ...enTranslations,
      ui: {
        viewDetails: "विवरणं पश्यन्तु",
        inquire: "प्रच्छन्तु",
        contribution: "योगदानम्",
        bookRetreat: "आरक्षणं कुरुत",
        bookCeremony: "संस्कारस्य आरक्षणं कुरुत",
        accommodation: "निवासः",
        note: "टिप्पणी",
        eventDetails: "कार्यक्रमस्य विवरणम्",
        location: "स्थानम्",
        capacity: "क्षमता",
        theme: "विषयः",
        email: "ईपत्रम्",
        whatsapp: "WhatsApp",
        connectWithUs: "अस्माभिः सह सम्पर्कं कुरुत",
        featuredExperience: "विशिष्टः अनुभवः",
        viewFlyer: "पत्रकं पश्यन्तु",
        duration: "अवधिः",
        service: "सेवा"
      },
      flyer: {
        highlights: "मुख्यांशाः",
        scan: "विवरणार्थं पश्यन्तु",
        reserve: "स्वस्थानं रक्षितं कुरुत",
        limited: "सीमितं स्थानम्",
        flexibleDates: "लचीलाः दिनाङ्काः",
        print: "मुद्रणम् / PDF रक्षणम्"
      },
      nav: { home: "गृहम्", about: "परिवारः", services: "संस्काराः", gallery: "चित्रवीथिका", contact: "सम्पर्कः", faq: "प्रश्नोत्तराणि" },
      services: { 
          title: "संस्काराः", 
          items: [{ 
              title: "२ दिवसीय शिबिरः", 
              description: "वायना वासी तथा किन्साकोचा मध्ये गभीरं निमज्जनम्। मूल व्ययः $१७३ (१ जनः)। प्रत्येकं अतिरिक्तः जनः +$७०। निवासः +$२० प्रति जनः। अधिकतमं १० जनाः।", 
              price: "$१७३+",
              details: { duration: "२ दिनानि", location: "पिसाक तथा किन्साकोचा", groupSize: "अधिकतमं १०" } 
          }, 
          { 
            title: "नूतनवर्ष औसंगाते (३ दिनानि)", 
            description: "अपुना सह २०२६ आरभत। पाच्छन्ता मध्ये तेमाज्काल, रापे, तथा वाचुमा संस्कारः। निःशुल्क व्यावसायिक छायाचित्रणम् समाविष्टम्।", 
            price: "€१७३",
            details: { duration: "३ दिनानि", location: "पाच्छन्ता तथा औसंगाते", groupSize: "समूहः" } 
          },
          { 
            title: "औसंगाते पवित्र यात्रा (७ दिनानि)", 
            description: "पूर्ण निमज्जनम्। ३ वाचुमा संस्काराः, तेमाज्काल विधयः, सरोवरेभ्यः पदयात्रा, तथा गभीर चिकित्सा कार्यम्।", 
            price: "प्रच्छन्तु",
            details: { duration: "७ दिनानि", location: "पाच्छन्ता तथा औसंगाते", groupSize: "समूहः" } 
          },
          { 
              title: "जुचुय कोस्को निमज्जनम्", 
              description: "२ दिनानि 'लघु कुस्को' भग्नावशेषेषु। स्थानीयपरिवारेण सह निवासः, पारम्परिक भोजनं पाकः, तथा गभीरसम्बन्धः।", 
              price: "$२००+",
              details: { duration: "२ दिनानि", location: "जुचुय कोस्को", groupSize: "न्यूनतमं २" }
          }, { 
              title: "१ दिवसीय संस्कारः", 
              description: "न्यूनतमं २ जनानां कृते एका पवित्र यात्रा। पवित्र उपत्यकायाः विभिन्नेषु पवित्रस्थलेषु ओषधेः अनुभवः।", 
              price: "$२५०",
              details: { duration: "१ दिनम्", location: "पवित्र उपत्यका", groupSize: "न्यूनतमं २" }
          }, { 
              title: "कोस्टा रिका तीर्थयात्रा", 
              description: "कोस्टा रिका मध्ये एकस्मिन् गुप्तस्थाने अण्डीज तथा सागरं योजनं कुर्वती एका पवित्र यात्रा। २१ प्रतिभागिषु सीमितः।", 
              price: "प्रच्छन्तु",
              details: { duration: "७ दिनानि", location: "कोस्टा रिका", groupSize: "अधिकतमं २१" }
          }, { 
              title: "व्यक्तिगत चिकित्सा", 
              description: "भवतः विशिष्ट आध्यात्मिक तथा भावनात्मक आवश्यकतानुसारं एक-एक सत्रम्। गभीरबाधानां निवारणम्।", 
              price: "प्रच्छन्तु",
              details: { duration: "भिन्नः", location: "वायना वासी", groupSize: "१ जनः" }
          }], 
          ausangateCta: { title: "नूतनवर्ष विशेष: औसंगाते ३ दिनानि", description: "औसंगाते प्रति विशिष्ट वाचुमा यात्रा सह नूतनवर्षं आरभत। निःशुल्क छायाचित्रणम् समाविष्टम्।", button: "३ दिवसीय यात्रां पश्यन्तु" } 
      },
      hero: { title: "पवित्र अण्डीज ओषधि", subtitle: "पवित्र उपत्यकायाम् परम्परागत वाचुमा संस्कारैः सह पचमामायाः सह पुनः सम्बध्यताम्।", cta: "संस्कारं आरक्षयतु", retreatTeaser: { label: "पवित्र निमज्जनम्", title: "२ दिवसीय शिबिरः", location: "पिसाक तथा किन्साकोचा" }, ausangateTeaser: { label: "नूतनवर्ष विशेष", title: "औसंगाते ३ दिनानि", date: "जनवरी ३-५, २०२६" }, costaRicaTeaser: { label: "विशेष कार्यक्रमः", title: "कोस्टा रिका तीर्थयात्रा", date: "फरवरी २४ - मार्च २, २०२६" } },
      ausangate3Day: {
        title: "नूतनवर्ष औसंगाते यात्रा (३ दिनानि)",
        subtitle: "अपुना सह नूतनवर्षं आरभत",
        description: "२०२६ आरभितुं एकः संक्षिप्तः शक्तिशाली च मार्गः। पवित्रपर्वतेन तथा चिकित्साजलैः सह सम्बध्य, औसंगाते प्रति विशिष्ट वाचुमा यात्रा सह नूतनवर्षं आरभत।",
        details: {
            dates: "जनवरी ३ - ५, २०२६",
            price: "€१७३",
            bonus: "निःशुल्क व्यावसायिक छायाचित्रण सत्र समाविष्टम्"
        },
        cta: "स्वस्थानं रक्षितं कुरुत",
        itinerary: [
          { day: "दिनम् १", title: "आगमनं, शुद्धिः तथा तेमाज्काल", description: "पाच्छन्ता प्रति यात्रा। प्राकृतिकुष्णजलेषु विश्रामः। वयं गभीरशुद्धये पवित्र रापे ओषधिना सह तेमाज्काल संस्कारे भागं ग्रहीष्यामः, ततः नूतनवर्षस्य सङ्कल्पान् स्थापयितुं औसंगाते प्रति पदयात्रा।" },
          { day: "दिनम् २", title: "वाचुमा संस्कारः", description: "अपु प्रति हृदयं उद्घाटनम्। पर्वतस्य आत्मना तथा विशाल अण्डीज आकाशेन सह सम्बन्धं स्थापयितुं एकः गभीरः दिवससंस्कारः।" },
          { day: "दिनम् ३", title: "प्रत्यागमनयात्रा", description: "चक्रं पिधाय। पर्वतात् अधः पदयात्रा, पाच्छन्ता उष्णजलेषु अन्तिमं स्नानम्, तथा पिसाक प्रति प्रत्यागमनम्।" }
        ]
      },
      benefits: { title: "वाचुमायाः शक्तिः", subtitle: "वयं पवित्र काक्टसनेन सह किमर्थं यात्रां कुर्मः", items: [{ title: "भावनात्मक चिकित्सा", description: "शरीरे सञ्चिताः पूर्वत्रासाः भावनात्मकबाधाः च मोचयन्तु।" }, { title: "प्रकृत्या सह सम्बन्धः", description: "पृथिव्या, तत्त्वैः, अण्डीजस्य जीवच्छक्त्या च सह गभीरं एकत्वं अनुभवन्तु।" }, { title: "स्पष्टता दृष्टिः च", description: "मार्गदर्शनं, उद्देश्यं, जीवनपथस्य नूतनदृष्टिकोणं च प्राप्तुं मनः शान्तं कुरुत।" }] },
      footer: { description: "वाचुमायाः परिवर्तनशक्तिं अनुभवन्तु, या सेन् पेड्रो इति नाम्ना ख्याता अस्ति।", columns: { links: { title: "सम्बन्धाः", items: [{label: "अस्मान् प्रति", href: "/about"}, {label: "सम्पर्कः", href: "/contact"}] }, reviews: { title: "Google समीक्षाः", rating: "४.९/५" }, follow: { title: "अनुसरणं कुरुत", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "सम्पर्कः", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "स्थानम्", address: "Wayna Wasi, Pisac, Perú" } }, rights: "सर्वाधिकारः सुरक्षितः।" },
      about: {
        title: "हर्नन् वर्यस्य सह मिलन्तु",
        subtitle: "पवित्र कण्टकस्य रक्षकः",
        description: [
            "<strong>हर्नन् कोल्के</strong> क्वेशुआ देशीयः तथा <strong>वाचुमा (सेन् पेड्रो) संस्काराणाम्</strong> समर्पितः संचालकः अस्ति, यः अण्डीजस्य पवित्रपरम्परासु गभीररूपेण स्थितः अस्ति। <strong>पिसाक</strong> नगरस्य <strong>वियाचा</strong> नामके उच्चसमुदाये ५००० मीटोर्ध्वं जातः, हर्नन् ओषधीयचिकित्सायाः वंशं वहति यः इन्काकालात् पूर्वं गच्छति।",
            "पैतृकपरम्परायाः अनुसारं, प्रत्येकं पीढ्याम् केवलं एकः एव बालः इमं मार्गं प्राप्तुं शक्नोति, स च स्वेच्छया तत् चिनुयात्। प्रज्ञा तस्य पितामहात् कार्मेनतः तस्य पितरं बेनिन्हो प्रति गता। सप्तसु भ्रातृषु, हर्नन् अतिबाल्यकाले एव ओषधिं चितवान्, यः अस्य प्राचीनपरम्परायाः तथा <strong>पचमामायाः (मातृभूम्याः)</strong> सह तस्य गभीरसम्बन्धस्य एकः एव वाहकः अभवत्।",
            "<strong>एस्पिनार् तः क्काना वंशः।</strong> हर्नन् <strong>एस्पिनार् प्रान्तात्</strong> अस्ति तथा तस्य वंशः <strong>क्काना (K'ana)</strong> अस्ति। क्काना संस्कृतिः इन्काकालात् पूर्वं समाजः आसीत् यः इन्कासाम्राज्येन सह विशिष्टं, शान्तिपूर्णं रणनीतिकं सम्बन्धं स्थापितवान् न तु सामान्यविजयम्। पाचाकुतेकस्य शासनकाले शान्तिपूर्णरूपेण मिलित्वा, ते अत्यावश्यकाः सैनिकाः मित्राणि अभवन्—विशिष्टाः <strong>'सिञ्चिस्'</strong> योद्धारः ये चङ्काः पराजयितुं साहाय्यं कृतवन्तः। अस्य पारस्परिकतायाः कारणात्, तेभ्यः कोल्लासुयोमध्ये भूमिः प्रदत्ता तथा तेषां प्राचीनराजधानी, कानामार्का, इन्काभिः पुनःनिर्मिता।",
            "<strong>वाचुमायाः आत्मा।</strong> एकं कथनं अस्ति यत् वाचुमायाः आत्मा प्रथमं अस्य क्षेत्रस्य जनान् योजितवान् तथा ते तत् स्वहृदये रक्षितवन्तः यतोहि वनस्पतिः तान् उक्तवान् यत् सा भूम्याः लुप्ता भविष्यति, यत् नातिचिरं पूर्वं अभवत्। हर्नन् इमां स्मृतिं तथा आत्मानं अग्रे नयति।",
            "<strong>पिसाक तथा वियाचा।</strong> वयं पवित्र उपत्यकायाः <strong>पिसाक</strong> नगरे स्थिताः स्मः, यत्र वयं संस्कारान् आयोजयामः तथा <strong>वायना वासी होटेल्</strong> मध्ये शान्तं निवासं प्रदद्मः। गभीरानुभवाय, अस्माकं बहुदिवसीयाः शिबिराः <strong>वियाचा</strong> मध्ये आयोज्यन्ते, यः पिसाकात् उपरि एकः शान्तः समुदायः अस्ति।"
        ]
      },
      ausangate: {
        title: "औसंगाते पवित्र यात्रा",
        subtitle: "जनवरी ३-९, २०२६",
        description: "पाच्छन्तायाः चिकित्साजलानाम्, अपु औसंगातेः भव्योपस्थितेः, तथा वाचुमायाः तेमाज्कालस्य च परिवर्तनशक्तेः संयोजनं कुर्वती एका गभीरा यात्रा।",
        cta: "स्वस्थानं रक्षितं कुरुत",
        itinerary: [
          { day: "दिनम् १", title: "आगमनं तथा शुद्धिः", description: "पाच्छन्ता प्रति यात्रा। शरीरं शोधयितुं प्राकृतिकुष्णजलेषु विश्रामः, ततः अस्माकं सङ्कल्पान् स्थापयितुं औसंगाते प्रति पदयात्रा।" },
          { day: "दिनम् २", title: "प्रथमः वाचुमा संस्कारः", description: "अपु प्रति हृदयं उद्घाटनम्। पर्वतस्य आत्मना तथा विशाल अण्डीज आकाशेन सह सम्बन्धं स्थापयितुं एकः दिवससंस्कारः।" },
          { day: "दिनम् ३", title: "तेमाज्काल & रापे", description: "मातृभूम्याः गर्भं प्रदर्शयन्ती एका पारम्परिका वाष्पस्नानविधिः। पवित्र रापे ओषधिना सह शारीरिकं तथा आध्यात्मिकं विषहरणम्।" },
          { day: "दिनम् ४", title: "द्वितीयः वाचुमा संस्कारः", description: "यात्रायाः गभीरीकरणम्। उच्चभूमीनां मौने आन्तरिकबाधानां निवारणं तथा चेतनायाः विस्तारः।" },
          { day: "दिनम् ५", title: "तेमाज्काल & रापे", description: "प्राप्तशक्तीनां स्थापनार्थं तथा आत्मानं अधिकं शोधयितुं द्वितीयः वाष्पस्नानसंस्कारः।" },
          { day: "दिनम् ६", title: "तृतीयः वाचुमा & एकीकरणम्", description: "अन्तिमः ओषधिसंस्कारः। एकीकरणे, कृतज्ञतायाम्, तथा सप्ताहस्य चिकित्सायाः रक्षणे ध्यानम्।" },
          { day: "दिनम् ७", title: "प्रत्यागमनयात्रा", description: "पर्वतात् अधः पदयात्रा, पाच्छन्ता उष्णजलेषु अन्तिमं स्नानम्, तथा पिसाक प्रति प्रत्यागमनम्।" }
        ]
      },
      costaRica: {
        title: "कोस्टा रिका प्रति पवित्र तीर्थयात्रा",
        subtitle: "पर्वताः सागराः च मिलिताः",
        intro: "एकः अतिविशेषः अवसरः, कोस्टा रिका मध्ये प्रथमवारं एकस्मिन् गुप्तस्थाने। पवित्रपर्वतानां सागरेण सह सम्बन्धः, ओषधेः दृष्टिं तथा सन्देशं अनुसरन्ती एका विशेषः शारीरिकः तथा आध्यात्मिकः तीर्थयात्रा।",
        description: [
            "एकस्मिन् ऐतिहासिके तथा परिवर्तनकारिणि समागमे अस्माभिः सह मिलन्तु। प्रथमवारं, हर्नन् पवित्र वाचुमा ओषधिं कोस्टा रिकायाः जीवन्तभूमिषु आनयति।",
            "एकया गभीरदृष्ट्या तथा ओषधेः प्रत्यक्षसन्देशेन मार्गदर्शिता, इयं शिबिरः एका आध्यात्मिकी तीर्थयात्रा अस्ति या उच्च अण्डीजस्य प्रज्ञां सागरस्य शोधकशक्त्या सह योजयति।",
            "पवित्र वाचुमा संस्कारैः सह, वयं रापे ओषधिं विभजेम, पुष्पैः सह शुद्धिं करिष्यामः, तथा मार्गदर्शितैः ओषधिध्यानैः यात्रां करिष्यामः।",
            "वयं प्रकृतेः क्रोडे, एकस्मिन् गुप्तस्थाने मिलिष्यामः। इयं आत्मीया अनुभवः गभीरं व्यक्तिगतं ध्यानं तथा एकं सुसङ्गतं ऊर्जापात्रं सुनिश्चितं कर्तुं २१ प्रतिभागिषु (सहायकैः सह) सीमितः अस्ति।"
        ],
        details: { location: "गुप्तस्थानम्, कोस्टा रिका", capacity: "२१ जीवाः सीमिताः", dates: "फरवरी २४ - मार्च २, २०२६" },
        cta: "आमन्त्रणं प्रार्थयन्तु",
        visionTitle: "ओषधेः एका दृष्टिः",
        visionText: "अयम् समागमः न केवलं एकं शिबिरं अस्ति; एतत् एकस्य आह्वानस्य उत्तरं अस्ति। ओषधिः उच्च अण्डीज मध्ये स्थितां प्रज्ञां सागरस्य पवित्र, प्रवाहितऊर्जया सह योजनस्य विषयं उक्तवती। आत्मनः शरीरस्य च तीर्थयात्रा।",
        themeValue: "सागरः पर्वतः च"
      },
      retreat2Day: {
        title: "२ दिवसीय शिबिरः",
        subtitle: "वायना वासी तथा किन्साकोचा",
        intro: "पवित्र ओषधौ गभीरं निमज्जनम्, वायना वासी पवित्राश्रमे तथा पिसाकस्य शक्तिमत्पर्वतेषु आयोजितम्।",
        days: [
            { title: "दिनम् १ : सज्जीकरणं तथा वायना वासी मध्ये आगमनम्", content: "वायना वासी मध्ये आगमनेन, प्रतिभागिनः बेबिदा (पवित्र वाचुमा पानम्) स्य संस्कारिकसज्जीकरणेन स्वयात्रां आरप्स्यन्ते। अयम् अनुभवः ओषधिना सह एकं पवित्रं बन्धनं आरभते। हर्नन् प्रत्येकं प्रतिभागिनं ध्यानेन मार्गदर्शयति।", accommodation: "वायना वासी मध्ये रात्रिं यापयन्तु, यत्र अण्डीजस्य आत्मा सर्वदा वर्तते।" },
            { title: "दिनम् २ : किन्साकोचा, पिसाक मध्ये संस्कारः", content: "द्वितीये दिने, वयं पिसाकस्य पूजितस्थलं किन्साकोचा प्रति यात्रां करिष्यामः, यत्र भवान् पर्वतदृश्यानां मध्ये वाचुमा संस्कारे भागं ग्रहीष्यति। हर्नन् वर्यस्य मार्गदर्शनेन, प्रतिभागिनः स्वान्तरिकदृश्यान् अन्वेषयिष्यन्ति।", accommodation: "वायना वासी प्रति प्रत्यागमनं शान्तरात्रये।" }
        ],
        conclusion: "प्रतिभागिनः वाचुमा अनुभवेन तथा पचमामायाः शाश्वतप्रज्ञया शक्ताः सन्तः, नूतनआत्मज्ञानेन उद्देश्येन च प्रस्थास्यन्ते।"
      },
      juchuy: {
        title: "जुचुय कोस्को पैतृक निमज्जनम्",
        subtitle: "समुदायः, पाककला तथा भग्नावशेषाः",
        intro: "जुचुय कोस्को ('लघु कुस्को') प्रति एका विशिष्टा २ दिवसीय यात्रा, प्राचीनभग्नावशेषान् प्रति पदयात्रां स्थानीयपरिवारेण सह निवासेन सह संयोजयति।",
        days: [
            { title: "दिनम् १ : पदयात्रा & पारम्परिक पाकः", content: "वयं पवित्र उपत्यकायाः उपरि जुचुय कोस्को इत्यस्य दर्शनीयभग्नावशेषान् प्रति पदयात्रया स्वयात्रां आरभामहे। अपराने, वयं एकस्मिन् प्रामाणिके स्थानीयपरिवारगृहे निवसामः। अत्र, वयं मिलित्वा भोजनं पचामः।", accommodation: "भग्नावशेषाणां समीपे स्थानीयपरिवारेण सह प्रामाणिकः निवासः।" },
            { title: "दिनम् २ : भग्नावशेषेषु संस्कारः", content: "प्रातः अपुनां उपरि भवति। वयं जुचुय कोस्को भग्नावशेषाणां शक्तिमत् उपस्थितौ एकस्मिन् पवित्र वाचुमा संस्कारे रताः भवामः।", accommodation: "अवरोहणं तथा पिसाक प्रति प्रत्यागमनम्।" }
        ],
        conclusion: "पुरातत्व आश्चर्यस्य, जीवन्तसंस्कृतेः, तथा आध्यात्मिककार्यस्य एकं अद्वितीयं मिश्रणम्।"
      },
      retreat1Day: {
          title: "१ दिवसीय संस्कारः",
          subtitle: "उपत्यकायाः पवित्रस्थलानि",
          intro: "ओषधौ एका एकाग्रा गभीरा च यात्रा, प्राचीनभग्नावशेषेषु, शान्तसरोवरेषु, शक्तिमत्पर्वतेषु वा आयोजिता।",
          days: [
              { title: "संस्कारः", content: "वयं प्रातःकाले आरभामहे, पवित्र उपत्यकायाः एकस्मिन् चयितपवित्रस्थले (यथा पुमामारका, किन्साकोचा वा अन्येषु शक्तिस्थलेषु) गच्छामः। संस्कारः ओषधिना, प्रकृत्या, तथा आत्मना सह पूर्णदिवसस्य संलग्नता अस्ति।", accommodation: "निवासः न समाविष्टः, किन्तु यातायातस्य व्यवस्था अस्ति।" }
          ],
          conclusion: "प्राकृतिकजरा सह एकः शक्तिशाली पुनःारम्भः तथा पुनःसम्बन्धः, स्पष्टतया तथा लघuhृदयेन सह प्रस्थानम्।",
          details: { durationLabel: "अवधिः", durationValue: "पूर्णदिवसः (प्रातः तः अपराह्न पर्यन्तम्)", locationLabel: "स्थानम्", locationValue: "पवित्र उपत्यकायाः स्थलानि", focusLabel: "ध्यानम्", focusValue: "चिकित्सा तथा प्रकृतिः" }
      },
      preparation: {
        title: "भवतः सेन् पेड्रो शिबिराय सज्जीकरणम्",
        subtitle: "अण्डीज समुदायस्य भविष्यस्य सशक्तिकरणम्",
        intro: "भवतः परिवर्तनकारिणि त्रिदिवसीये सेन् पेड्रो शिबिरे स्वागतम्! अस्य अनुभवस्य पूर्णलाभं प्राप्तुं, वयं भवन्तं आह्वयामः यत् भवान् पूर्वमेव शारीरिकरूपेण तथा मानसिकरूपेण आत्मानं सज्जीकरोतु। सार्थकयात्रायै अत्र एकं मार्गदर्शकं वर्तते।",
        diet: {
            title: "सज्जीकरणम्: लघु आहारः तथा सङ्कल्पाः",
            description: "शिबिरात् पूर्वं, एकः लघुः, शुद्धः आहारः भवतः शरीरं मनः च अनुभवाय उद्घाटयितुं साहाय्यं कर्तुं शक्नोति। अत्र आगमनात् न्यूनातिन्यूनं ३-५ दिनानि पूर्वं अनुसरणं कर्तुं काश्चन सूचनाः सन्ति:",
            items: [
                { label: "शाकाहारी आहारः", text: "मांसं तथा पशुउत्पादान् परिहरतु यतोहि ते पाचनतन्त्रे भारं जनयितुं शक्नुवन्ति।" },
                { label: "योजितशर्करा नास्ति", text: "भवतः ऊर्जां सन्तुलितं कर्तुं संस्कृतशर्करायाः सेवनात् विरमतु।" },
                { label: "उत्तेजकान् न्यूनीकरोतु", text: "भवतः मनः शरीरं च शोधयितुं साहाय्यं कर्तुं काफीन्, मद्यं, तथा अन्येषां उत्तेजकानां न्यूनीकरणं वा त्यागं कुरुत।" },
                { label: "गुरुभोजनानि परिहरतु", text: "सरलपाचनाय भर्जितभोजनानि तथा दुग्धउत्पादान् त्यजतु।" },
                { label: "जलयोजनम्", text: "स्पष्टतायै तथा समग्रकल्याणाय पर्याप्तं जलं पिबतु।" },
                { label: "सङ्कल्पाः", text: "आहारात् परं, शिबिराय सङ्कल्पान् स्थापयितुं प्रतिदिनं किञ्चित् समयं यच्छतु। दैनन्दिनलेखनेन, ध्यानेन वा शान्तचिन्तनेन वा, भवान् अस्मिन् यात्रायां किं प्राप्तुं वा मोचयितुं इच्छति इति विचारयतु।" }
            ]
        },
        packing: {
            title: "संस्कारस्य दिवसः",
            description: "संस्कारस्य दिने, यः शिबिरस्य द्वितीये दिने भविष्यति, वयं कानिचन व्यक्तिगतवस्तूनि आनेतुं अनुशंसां कुर्मः यानि भवतः सम्बन्धं वर्धयितुं तथा पवित्रस्थाने योगदानं दातुं शक्नुवन्ति।",
            items: [
                { label: "सुखदवस्त्राणि", text: "बहिः उपयुक्तं शिथिलं, सुखदं वस्त्रं धरतु।" },
                { label: "आतपत्रं वा टोपी", text: "यतोहि संस्कारः बहिः भविष्यति, सूर्यतः रक्षितुं टोपीं आनयतु।" },
                { label: "उपहारं आनयतु", text: "संस्काराय फलानि पुष्पाणि च उपहाररूपेण आनेतुं प्रथा अस्ति। इदं कृतज्ञतां तथा प्रकृत्या सह सम्बन्धं प्रती करोति।" },
                { label: "जलपात्रम्", text: "पूर्णदिने जलयुक्तः भवितुं आवश्यकम् अस्ति।" },
                { label: "लेखनीपुस्तिका", text: "संस्कारात् परं विचारान्, अन्तर्दृष्टीः, भावनाः वा लिखितुं प्रेरणां प्राप्तुं शक्नुवन्ति।" }
            ]
        },
        suggestions: {
            title: "शिबिराय अतिरिक्ताः सूचनाः",
            description: "भवतः यात्रां वर्धयितुं, निम्नलिखितं विचारयतु:",
            items: [
                { label: "शान्तसमयस्य आदरः", text: "भवतः अनुभवं चिन्तयितुं संसाधितुं च मौनसमयस्य उपयोगं कुरुत।" },
                { label: "प्राणायामः तथा ध्यानम्", text: "मृदु श्वसनव्यायामाः वा ध्यानं भवन्तं स्थिरं कर्तुं साहाय्यं कर्तुं शक्नुवन्ति।" },
                { label: "अङ्कीय-उपवासः", text: "दूरवाणीभ्यः तथा अन्येभ्यः विद्युतीययन्त्रेभ्यः विच्छेदनं कुरुत, पूर्णतया उपस्थिताः भवितुं।" },
                { label: "प्रकृत्या सह सम्बन्धः", text: "यदि शक्यं चेत्, प्रतिदिनं प्रकृतौ समयं यापयन्तु, यत् भवतः आन्तरिकयात्रायां साहाय्यं करोति।" }
            ]
        },
        closing: "सचेतनतया सज्जीकरणेन तथा उद्घाटितः भूत्वा, भवान् सेन् पेड्रो ओषधये भवन्तं अन्वेषणस्य गभीरमार्गे मार्गदर्शयितुं स्थानं रचयिष्यति। वयं भवता सह इमं विशेषानुभवं विभक्तुं उत्सुकाः स्मः।",
        risks: {
            title: "महत्वपूर्णा सूचना: जोखिमान् तथा दायित्वान् अवगच्छन्तु",
            intro: "यद्यपि इदं शिबिरं सुरक्षितं तथा परिवर्तनकारिणं अनुभवं प्रदातुं परिकल्पितं अस्ति, तथापि सेन् पेड्रो संस्कारे भागग्रहणेन शारीरिकाः मानसिकी च जोखिमाः सन्ति इति स्वीकरणं महत्वपूर्णं अस्ति। कृपया सूचितभागग्रहणाय निम्नलिखितविषयान् ध्यानेन पश्यन्तु:",
            sections: [
                { title: "चिकित्सा प्रकटीकरणम्", items: [{ label: "चिकित्सा स्थितिः", text: "प्रतिभागिभिः हृदयसमस्याः, मानसिकस्वास्थ्यस्थितिः, वा आक्षेपस्य इतिहासः इत्यादीनां विषये संचालकान् सूचयितव्यम्। काश्चन पूर्वस्थितयः सेन् पेड्रो अनुभवेन सह जोखिमान् वर्धयितुं शक्नुवन्ति।" }, { label: "ओषधयः", text: "केचन ओषधयः, यथा अवसादविरोधकाः, मनोविकृतिविरोधकाः तथा काश्चन सामान्यौषधयः, सेन् पेड्रो इत्यनेन सह प्रतिकूलाः भवितुं शक्नुवन्ति। कृपया शिबिरात् बहुपूर्वमेव संचालकेभ्यः कानिचित् औषधानि प्रकटयतु।" }, { label: "शारीरिकसंवेदनशीलता", text: "सेन् पेड्रो अस्थायी शारीरिकप्रभावान् जनयितुं शक्नोति, यथा वमनं, उद्वमनं तथा हृदयस्पन्दनवृद्धिः। प्रतिभागिनः एतेभ्यः प्रभावेभ्यः शारीरिकरूपेण तथा मानसिकरूपेण सज्जाः भवेयुः।" }] },
                { title: "मानसिकजोखिमाः तथा भावनात्मकदायित्वम्", items: [{ label: "तीव्रानुभवाः", text: "सेन् पेड्रो गभीरभावनाः तथा पूर्वत्रासान् आनेतुं शक्नोति, येषां संसाधनं कठिनं भवितुं शक्नोति। प्रतिभागिनः स्वकीयचिन्तने रताः भवेयुः अथवा यदि तेषां त्रासस्य इतिहासः अस्ति तर्हि पूर्वमेव व्यावसायिकमार्गदर्शनं प्राप्तुं प्रोत्साहिताः सन्ति।" }, { label: "एकीकरणसहयोगः", text: "शिबिरात् परं, प्रतिभागिनः स्वानुभवान् एकीकृतुं अतिरिक्तसहयोगात् लाभं प्राप्तुं शक्नुवन्ति। उत्पद्यमानान् कान् अपि अन्तर्दृष्टीः वा भावनाः संसाधितुं समयस्य, सहयोगस्य तथा संसाधनानां योजनां कर्तुं परामर्शः दीयते।" }] },
                { title: "व्यक्तिगतदायित्वम्", items: [{ label: "सूचितसहमतिः", text: "अस्मिन् शिबिरे भागग्रहणेन, भवान् स्वीकरोति यत् भवान् स्वेच्छया अस्मिन् अनुभवे भागं गृह्णाति। यः कोऽपि अन्तर्दृष्टिः, चुनौती वा व्यक्तिगतपरिवर्तनं भवान् अनुभवति, सा भवतः स्वस्य दायित्वम् अस्ति।" }, { label: "सुरक्षासावधानयः", text: "संचालकैः प्रदत्ताः सर्वाः सुरक्षासूचनाः पालयन्तु, यत्र आहारप्रतिबन्धाः, संस्काराणां समये सुझावितव्यवहारः, तथा शारीरिकक्रियासु सीमाः समाविष्टाः सन्ति।" }] }
            ]
        }
      },
      faq: {
        title: "वाचुमा शिबिर मार्गदर्शिका",
        subtitle: "अनुभवस्य विषये भवता ज्ञातव्यं सर्वम्",
        articles: [
            {
                title: "वाचुमा शिबिरे किं अपेक्षितव्यम्",
                content: [
                    "वाचुमा शिबिरस्य योजना आत्मनः तीर्थयात्रायाः सज्जीकरणमिव भवितुं शक्नोति। भवान् वनस्पतिओषधौ नूतनः अस्ति वा अनुभवी अन्वेषकः, प्रत्येकं वाचुमा संस्कारः अद्वितीयं तथा परिवर्तनकारिणं अनुभवं प्रददाति। पेरु देशस्य पवित्र उपत्यकायां, यत्र अण्डीजस्य आत्मा तथा स्वयं पचमाना सर्वदा वर्तते, शिबिरे गमनेन भवान् किं अपेक्षितुं शक्नोति इति अत्र अस्ति।",
                    "<strong>गभीरचिकित्सायै पवित्रस्थानम्</strong><br>कुस्को समीपे पवित्र उपत्यका भवतः आध्यात्मिकयात्रायाः कृते उत्तमं पृष्ठभूमिः अस्ति। अण्डीजपर्वतैः आवृतं, अस्माकं शिबिरस्थानं आश्चर्यजनकदृश्यैः युक्तं अस्ति यानि वाचुमायाः शक्तिं वर्धयन्ति। यदा भवान् आगच्छति, तदा भवान् पृथिव्याः ब्रह्माण्डस्य च मध्ये गभीरसम्बन्धं अनुभविष्यति—यः सम्बन्धः अण्डीज ब्रह्माण्डविज्ञाने तथा वाचुमा परम्परायां केन्द्रीयः अस्ति।",
                    "<strong>एकः सामान्यः संस्कारदिवसः</strong><br>भवतः शिबिरं वाचुमायाः मृदुपरिचयेन आरप्स्यते। हर्नन् कोल्के वर्यस्य मार्गदर्शनेन, संस्काराः एकस्मिन् सुरक्षते, सहायके स्थाने अनावृताः भवन्ति यत्र भवान् स्वान्तरिकस्वरं श्रोतुं प्रोत्साहितः भविष्यति। वाचुमा भवतः हृदयं उद्घाटयितुं साहाय्यं करोति, स्पष्टतां तथा शान्तिं प्रददाति यदा भवान् दिवसे यात्रां करोति। शिबिरे प्रायः प्रकृतौ शान्तसमयः, सामूहिकसाझाकरणं, तथा चिन्तनस्य समयः समाविष्टः भवति, येन अनुभवः समग्रः चिकित्सात्मकः च भवति।",
                    "<strong>भवतः वाचुमा अनुभवस्य एकीकरणम्</strong><br>वाचुमातः प्राप्ताः अन्तर्दृष्टयः गभीराः भवितुं शक्नुवन्ति, तथा एतान् पाठान् भवतः दैनन्दिनजीवने एकीकृतुं समयं स्वीकरणं महत्वपूर्णं अस्ति। हर्नन् तथा तस्य दलः भवतः अनुभवान् संसाधितुं साहाय्यं कर्तुं तत्र सन्ति, सामूहिकचर्चाद्वारा वा व्यक्तिगतसहयोगद्वारा वा। बहवः प्रतिभागिनः नूतनोद्देश्येन तथा स्वयम् अमीन विश्वेन च सह गभीरसम्बन्धेन सह शिबिरात् गच्छन्ति।"
                ]
            },
            {
                title: "वाचुमायाः चिकित्साशक्तिं अन्वेषयन्तु",
                content: [
                    "<strong>सेन् पेड्रो काक्टस् किम् अस्ति?</strong><br>सेन् पेड्रो काक्टस्, यः वाचुमा इति अपि ज्ञायते, एकः प्राचीनः ओषधीयवनस्पतिः अस्ति यः अण्डीजस्य उच्चभूमिषु, मुख्यतः पेरु देशे, उद्भवति। अयम् उच्चः, स्तम्भाकारः हरितः काक्टस्, वैज्ञानिकरूपेण <em>Echinopsis pachanoi</em> इति नाम्ना ख्यातः, २००० तः ३००० मीटोर्ध्वं उच्येषु स्थानेषु वर्धते। अयम् तस्य स्पष्टपर्शुभिः, लघुकण्टकैः, तथा रात्रौ विकसद्भिः विशालश्वेतपुष्पैः सहजतया ज्ञायते।",
                    "<strong>उत्पत्तिः इतिहासः च</strong><br>सेन् पेड्रो इत्यस्य उपयोगः अण्डीजदेशीयजनैः, विशेषतः क्वेशुआ तथा अयमारा समुदायैः, सहस्रवर्षेभ्यः क्रियते। शामानिकपरम्परायां गभीररूपेण स्थितः, अयम् भौतिक तथा आध्यात्मिकलोकयोः मध्ये सेतुः इव कार्यं करोति। अस्य नाम, सेन् पेड्रो, स्वर्गद्वारस्य रक्षकं सेन् पीटरं निर्दिशति, यत् आध्यात्मिकआयामानां प्रवेशं प्रती करोति।",
                    "<strong>मेस्कालिन इत्यस्य शक्तिः: सार्वभौमिकसामंजस्येन सह सम्बन्धः</strong><br>सेन् पेड्रो काक्टस् मध्ये मुख्यसक्रियघटकेषु अन्यतमं मेस्कालिन अस्ति, यत् एकं प्राकृतिकं मनोदशापरिवर्तकम् अस्ति। मेस्कालिन वाचुमा इत्यनेन सह सम्बद्धानां गभीरदिव्यदर्शनानां तथा आत्मनिरीक्षणअनुभवानां कृते उत्तरदायी अस्ति। कृत्रिमपदार्थानां विपरीतं, सेन् पेड्रो तः मेस्कालिन व्यक्तिं मृदुतया चेतनायाः परिवर्तितस्थितौ नयति, यत् तान् परितः विश्वेन सह एकतां सामंजस्यं च पोषयति।",
                    "वाचुमा संस्काराः प्रायः प्रतिभागिनः पचमामायाः (मातृभूम्याः) सह गभीरसम्बन्धं अनुभवितुं नयन्ति, प्रकृतेः स्पन्दनं तथा जीवनस्य लयं च अनुभवन्ति। अयम् सम्बन्धः आत्मनः ब्रह्माण्डस्य च मध्ये सीमाः विलीनं कर्तुं साहाय्यं करोति, यत् गभीरान्तर्दृष्टीः तथा आध्यात्मिकस्पष्टतां अनुमन्यते। ये इमां यात्रां कुर्वन्ति ते प्रायः इदं हृदयोद्घाटनस्य अनुभवं वर्णयन्ति, यत्र प्रेम तथा करुणा स्वाभाविकरूपेण प्रवहति।",
                    "<strong>आध्यात्मिकाः उपचारात्मकाः च लाभाः</strong><br>सेन् पेड्रो तस्य आध्यात्मिकचिकित्सागुणैः प्रसिद्धः अस्ति। अस्य प्रभावाः सामान्यतः अन्येषां वनस्पतिओषधीनां, यथा अयाह्वास्का, पेक्षायाः अधिकं मृदुः क्रमिकाः च सन्ति। इदं तान् जनान् प्रति सुलभं करोति ये भावनात्मकचिकित्सां तथा आन्तरिकस्पष्टतां इच्छन्ति, विना अधिकतीव्रजागतेः।<br><br><strong>आध्यात्मिकाः लाभाः:</strong><br>• आध्यात्मिकजागृतिः: सत्यआत्मना तथा प्राकृतिकजरा सह पुनःसम्बन्धं सुकरं करोति।<br>• हृदयोद्घाटनम्: करुणां, क्षमां, तथा गभीर भावनात्मकविमोचनं पोषयति।<br>• मानसिकस्पष्टता: जीवनस्य आव्हानानां विषये दृष्टिकोणं प्राप्तुं साहाय्यं करोति तथा स्वीकारं पोषयति।<br><br><strong>उपचारात्मकाः लाभाः:</strong><br>• भावनात्मकविमोचनम्: पूर्वत्रासान् तथा असमाहितभावनाः संसाधितुं साहाय्यं करोति।<br>• शान्तिः तथा स्थिरता: चिन्तां न्यूनीकरोति तथा आन्तरिकशान्तिं पोषयति।<br>• प्रकृत्या सह सम्बन्धः: पृथिव्या तथा तत्त्वैः सह बन्धनं दृढं करोति।"
                ]
            }
        ],
        questionsTitle: "प्रायशः पृष्टाः प्रश्नाः",
        questions: [
            { question: "सेन् पेड्रो संस्कारः कः अस्ति?", answer: "सेन् पेड्रो (वाचुमा) एकः पवित्रः वनस्पतिओषधिः अस्ति यः चिकित्सा, दृष्टिः, तथा गभीर आध्यात्मिकसम्बन्धाय उपयुज्यते। अस्माकं संस्काराः अनुभविभिः संचालकैः मार्ग दर्शिताः सन्ति येन सुरक्षितः तथा परिवर्तनकारी अनुभवः सुनिश्चितः भवति।" },
            { question: "किं शिबिरं प्रारम्भिकेभ्यः उपयुक्तं अस्ति?", answer: "आम्, अस्माकं शिबिराः सर्वेषां कृते उद्घाटिताः सन्ति, भवान् वनस्पतिओषधौ अनुभवी अस्ति वा प्रथमवारं भागं गृह्णाति। वयं प्रक्रियायाः समये पूर्णं मार्गदर्शनं तथा सहयोगं प्रदद्मः।" },
            { question: "किन्साकोचा कः अस्ति, किमर्थं च विशिष्टः?", answer: "किन्साकोचा, पिसाकसमीपे स्थितः, एकः शान्तः क्षेत्रः अस्ति यः पवित्रसरोवरैः आवृतः अस्ति। इदं वाचुमा संस्कारेभ्यः उत्तमं वातावरणं अस्ति, यत् प्रकृत्या तथा अण्डीज आध्यात्मिकतया सह गभीरसम्बन्धं प्रददाति।" },
            { question: "शिबिरे वा संस्कारे मया किं आनेतव्यम्?", answer: "विस्तृतसूची प्रदास्यते, किन्तु अत्यावश्यकवस्तुषु सुखदवस्त्राणि, पदयात्रापादुकाः, व्यक्तिगतवस्तूनि, तथा परिवर्तनार्थं एकं मुक्तहृदयं समाविष्टानि सन्ति।" },
            { question: "शिबिरे का भाषा उच्यते?", answer: "हर्नन् क्वेशुआ तथा स्पेनिश भाषां वदति। यदि भवान् एताः भाषाः न वदति, तर्हि फ्रेंच-स्पेनिश अनुवादकः शिबिरस्य समये साहाय्यं कर्तुं उपलब्धः भविष्यति।" },
            { question: "किं शिबिरं सुरक्षितं अस्ति?", answer: "सुरक्षा अस्माकं प्राथमिकता अस्ति। अस्माकं शिबिराः एकस्मिन् नियन्त्रित, सहयोगि वातावरणे आयोजिताः सन्ति, यत्र अनुभविणः संचालकाः सन्ति ये भवन्तं यात्रायाः प्रत्येकं चरणे मार्गदर्शयन्ति।" },
            { question: "भवतः धनप्रत्यार्पणनीतिः वा रद्दीकरणनीतिः का अस्ति?", answer: "निक्षेपाः एकविशिष्टदिनाङ्कपर्यन्तं प्रतिदेयाः सन्ति। वयं पूर्वसञ्चारं प्रोत्साहयामः यदि भवतः योजनाः परिवर्तन्ते, स्पष्टतां तथा सहयोगं सुनिश्चितं कर्तुं।" }
        ]
      },
      testimonials: { title: "हृदयात् स्वराः", items: [{ 
          name: "जोल्टन् ई.", 
          location: "हङ्गरी", 
          text: `इदं भूम्याः आत्मना तथा वनस्पतिओषधेः चिकित्साशक्त्या सह सम्बन्धस्य एकः सत्यः प्रामाणिकः अनुभवः अस्ति। माएस्ट्रो हर्नन् द्वारा इन्का तथा पूर्व-इन्का आध्यात्मिकमार्गदर्शकानां प्राचीनप्रज्ञया सह गभीरसम्बन्धः अभवत्। अहं यात्रायाः कृते अतीव कृतज्ञः अस्मि।`, 
          image: IMAGES.zoltan 
      }, {
        name: "स्टेफानी के.",
        location: "Google समीक्षा",
        text: `अहं डान् हर्नन् सह पूर्णदिवसस्य वाचुमा संस्कारे भागं ग्रहीतुं अतीव भाग्यशाली अनुभवामि। वयं पर्वतेषु, एकस्य स्थानीयग्रामस्य माध्यमेन, प्रकृत्या, आत्मना, तथा पारस्परिकतायाः ऊर्जया सह सम्भाषितुं यात्रां कृतवन्त। तस्य मार्गदर्शनं सच्चा अस्ति, तथा तस्य ओषधिः श्रेष्ठा वाचुमा अस्ति। वयं तस्य गृहं प्रत्यागतवन्तौ यत्र स्वादिष्टेन गृहनिर्मित-अण्डीज-सूप् तथा उद्याने अग्निना सह संस्कारं समापितवन्तौ।`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "सम्पर्कं कुरुत",
        form: { name: "भवतः नाम", email: "भवतः ईपत्रम्", message: "भवतः सन्देशः", submit: "सन्देशं प्रेषयतु" },
        info: "वयं पवित्र उपत्यकायाः हृदये, काल्का समीपे, कुस्को नगरे स्थिताः स्मः।"
    }
  },
};
