
import { Language, TranslationData } from './types';

// --- DYNAMIC IMAGE LOADING (VITE) ---
// Casting import.meta to any to avoid TypeScript errors with Vite specific properties if types are missing
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

if ((import.meta as any).env && (import.meta as any).env.DEV) {
    if (dynamicGallery.length > 0) {
        console.log(`[Gallery System] Files detected:`, sortedGalleryKeys);
    }
}

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
        viewFlyer: "View Event Flyer"
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
      ausangateTeaser: { label: "Inclusive", title: "Ausangate Journey", date: "Jan 3-9, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "Jan 22-28, 2026" }
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
        { title: "2 Day Retreat", description: "Deep immersion at Wayna Wasi & Kinsacocha. Base cost $173 (1 person). Each additional person +$70. Accommodation +$20 per person. Max 10 people.", price: "$173+" },
        { title: "Juchuy Qosqo Immersion", description: "2 Days at the 'Little Cusco' ruins. Stay with a local family, cook traditional food together, and experience deep connection.", price: "$200+" },
        { title: "1 Day Ceremony", description: "A sacred journey for a minimum of 2 people. Experience the medicine in various sacred sites like ruins, lagoons, and mountains across the Sacred Valley.", price: "$250" },
        { title: "Costa Rica Pilgrimage", description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica. Limited to 21 participants.", price: "Inquire" },
        { title: "Private Healing", description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", price: "Inquire" }
      ],
      ausangateCta: { title: "Special Retreat: Ausangate Expedition", description: "Join us for a 7-day transformative journey to the sacred mountain of Ausangate. Hot springs, hiking, and deep medicine work.", button: "View Itinerary" }
    },
    ausangate: {
      title: "Ausangate Sacred Journey",
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
        details: { location: "Secret Location, Costa Rica", capacity: "Limited to 21 Souls", dates: "January 22-28, 2026" },
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
      ...enTranslations,
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
        viewFlyer: "Ver Folleto del Evento"
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
          ausangateTeaser: { label: "Inclusivo", title: "Viaje al Ausangate", date: "3-9 Enero, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "22-28 Enero, 2026" }
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
            { title: "Retiro de 2 Días", description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Costo base $173 (1 persona). Persona extra +$70. Alojamiento +$20 por persona. Máx 10 personas.", price: "$173+" },
            { title: "Inmersión Juchuy Qosqo", description: "2 Días en las ruinas del 'Pequeño Cusco'. Alójate con una familia local, cocina comida tradicional juntos y experimenta una conexión profunda.", price: "$200+" },
            { title: "Ceremonia de 1 Día", description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", price: "$250" },
            { title: "Peregrinaje a Costa Rica", description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", price: "Consultar" },
            { title: "Sanación Privada", description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", price: "Consultar" }
          ],
          ausangateCta: { title: "Retiro Especial: Expedición Ausangate", description: "Únete a un viaje transformador de 7 días a la montaña sagrada de Ausangate. Aguas termales, caminatas y trabajo profundo con medicina.", button: "Ver Itinerario" }
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
        details: { location: "Ubicación Secreta, Costa Rica", capacity: "Limitado a 21 Almas", dates: "22-28 de Enero, 2026" },
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
                    "Planificar un retiro de Wachuma puede sentirse como prepararse para una peregrinación del alma. Ya seas nuevo en la medicina de plantas o un buscador experimentado, cada ceremonia de Wachuma ofrece una experiencia única y transformadora. Esto es lo que puedes esperar cuando te embarcas en un retiro en el Valle Sagrado de Perú, donde el espíritu de los Andes y la Pachamama están siempre presentes.",
                    "<strong>Un entorno sagrado para la sanación profunda</strong><br>El Valle Sagrado cerca de Cusco es el telón de fondo perfecto para tu viaje espiritual. Ubicado entre las montañas andinas, nuestro espacio de retiro está rodeado de paisajes impresionantes que amplifican el poder del Wachuma.",
                    "<strong>Un día típico de ceremonia</strong><br>Tu retiro comenzará con una suave introducción al Wachuma. Bajo la guía de Hernán Colque, las ceremonias se desarrollan en un espacio seguro y de apoyo donde se te animará a escuchar tu voz interior. Wachuma ayuda a abrir el corazón, proporcionando claridad y una sensación de paz.",
                    "<strong>Integrando tu experiencia</strong><br>Las ideas obtenidas del Wachuma pueden ser profundas, y es importante tomarse el tiempo para integrar estas lecciones en tu vida diaria. Hernán y su equipo están allí para ayudarte a procesar tus experiencias."
                ]
            },
            {
                title: "Descubre el poder curativo del Wachuma",
                content: [
                    "<strong>¿Qué es el cactus San Pedro?</strong><br>El cactus San Pedro, también conocido como Wachuma, es una planta medicinal antigua nativa de las tierras altas de los Andes. Es reconocido por sus costillas pronunciadas y grandes flores blancas.",
                    "<strong>Orígenes e Historia</strong><br>San Pedro ha sido utilizado durante miles de años por los pueblos indígenas andinos. Profundamente arraigado en la tradición chamánica, sirve como un puente entre los mundos físico y espiritual.",
                    "<strong>El poder de la Mescalina</strong><br>Uno de los compuestos activos clave es la mescalina, responsable de las experiencias visionarias. A diferencia de las sustancias sintéticas, la mescalina de San Pedro guía suavemente a las personas hacia un estado alterado de conciencia, fomentando la unidad y la armonía.",
                    "<strong>Beneficios Espirituales y Terapéuticos</strong><br>San Pedro es famoso por sus propiedades espirituales y curativas. Sus efectos son generalmente más suaves y graduales en comparación con la Ayahuasca. Facilita el despertar espiritual, la apertura del corazón y la claridad mental."
                ]
            }
        ],
        questionsTitle: "Preguntas Frecuentes",
        questions: [
            { question: "¿Qué es una ceremonia de San Pedro?", answer: "San Pedro (Huachuma) es una medicina vegetal sagrada utilizada para la curación, la visión y la conexión espiritual profunda." },
            { question: "¿Es el retiro adecuado para principiantes?", answer: "Sí, nuestros retiros están abiertos a todos, ya sea que tengas experiencia previa o sea tu primera vez." },
            { question: "¿Qué es Kinsacocha y por qué es especial?", answer: "Kinsacocha, ubicada cerca de Pisac, es una zona tranquila rodeada de lagos sagrados. Es un entorno ideal para las ceremonias." },
            { question: "¿Qué debo traer al retiro?", answer: "Se proporcionará una lista detallada, pero lo esencial incluye ropa cómoda, zapatos para caminar y un corazón abierto." },
            { question: "¿Qué idioma se habla durante el retiro?", answer: "Hernán habla quechua y español. Si no hablas estos idiomas, habrá un traductor disponible." },
            { question: "¿Es seguro el retiro?", answer: "La seguridad es nuestra prioridad. Nuestros retiros se llevan a cabo en un entorno controlado con facilitadores experimentados." },
            { question: "¿Cuál es su política de reembolso?", answer: "Los depósitos son reembolsables hasta una fecha específica. Fomentamos la comunicación temprana si tus planes change to ensure clarity and support." }
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
        viewFlyer: "Esemény Szórólap"
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
      hero: { title: "Az Andok Szent Gyógyító Ereje", subtitle: "Kapcsolódj újra Pachamamával a hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.", cta: "Szertartás Foglalása", ausangateTeaser: { label: "Exkluzív", title: "Ausangate Utazás", date: "2026. Jan 3-9." }, costaRicaTeaser: { label: "Különleges Esemény", title: "Costa Rica-i Zarándoklat", date: "2026. Jan 22-28." } },
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
        details: { location: "Titkos Helyszín, Costa Rica", capacity: "21 Lélekre Korlátozva", dates: "2026. Január 22-28." },
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
      services: { title: "Ajánlataink", items: [{ title: "2 Napos Elvonulás", description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Alapdíj $173 (1 fő). További személy +$70. Szállás +$20/fő. Max 10 fő.", price: "$173+" }, { title: "Juchuy Qosqo Elmélyülés", description: "2 nap a 'Kis Cusco' romjainál. Szállás helyi családnál, közös hagyományos főzés és mély kapcsolódás.", price: "$200+" }, { title: "1 Napos Szertartás", description: "Szent utazás minimum 2 fő részére. Tapasztald meg a gyógyítást különböző szent helyeken, mint romok, lagúnák vagy hegyek a Szent Völgyben.", price: "$250" }, { title: "Costa Rica-i Zarándoklat", description: "Szent utazás, amely összeköti az Andokat és az Óceánt egy titkos Costa Rica-i helyszínen. 21 résztvevőre korlátozva.", price: "Érdeklődj" }, { title: "Privát Gyógyítás", description: "Személyre szabott egyéni ülések a spirituális és érzelmi igényeidhez igazítva. Mély blokkok oldása.", price: "Érdeklődj" }], ausangateCta: { title: "Különleges Elvonulás: Ausangate Expedíció", description: "Csatlakozz hozzánk egy 7 napos átalakító utazásra az Ausangate szent hegyéhez. Hőforrások, túrázás és mély gyógyító munka.", button: "Útiterv Megtekintése" } },
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
            intro: "Bár ezt az elvonulást úgy terveztük, hogy biztonságos és átalakító élményt nyújtson, fontos tudomásul venni, hogy a San Pedro szertartáson való részvétel fizikai és pszichológiai kockázatokkal jár.",
            sections: [
                { title: "Egészségügyi Nyilatkozat", items: [{ label: "Egészségügyi Állapotok", text: "Tájékoztasd a vezetőket minden egészségügyi állapotról, beleértve a szívproblémákat, mentális betegségeket vagy rohamokat." }, { label: "Gyógyszerek", text: "Bizonyos gyógyszerek, például antidepresszánsok, káros kölcsönhatásba léphetnek a San Pedróval. Kérjük, jelezd a gyógyszerszedést." }, { label: "Fizikai Érzékenység", text: "A San Pedro átmeneti fizikai hatásokat okozhat, mint hányinger vagy pulzusemelkedés." }] },
                { title: "Pszichológiai Kockázatok", items: [{ label: "Intenzív Élmények", text: "A San Pedro mély érzelmeket és múltbéli traumákat hozhat felszínre." }, { label: "Integrációs Támogatás", text: "Az elvonulás után érdemes időt és támogatást tervezni az élmények feldolgozására." }] },
                { title: "Személyes Felelősség", items: [{ label: "Tájékozott Beleegyezés", text: "Részvételével elismeri, hogy önként vesz részt ebben az élményben." }, { label: "Biztonsági Óvintézkedések", text: "Kövesse a vezetők biztonsági utasításait." }] }
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
                    "Egy Wachuma elvonulás tervezése olyan, mintha a lélek zarándoklatára készülnél. Akár új vagy a növényi medicinában, akár tapasztalt kereső, minden Wachuma szertartás egyedi, átalakító élményt kínál.",
                    "<strong>Szent környezet a mély gyógyuláshoz</strong><br>A Cusco melletti Szent Völgy tökéletes hátteret biztosít spirituális utazásodhoz. A helyszínt lenyűgöző tájak veszik körül, amelyek felerősítik a Wachuma erejét.",
                    "<strong>Egy tipikus szertartási nap</strong><br>Az elvonulás a Wachuma gyengéd bemutatásával kezdődik. Hernan Colque vezetésével a szertartások biztonságos, támogató térben zajlanak, ahol bátorítanak belső hangod meghallgatására.",
                    "<strong>A Wachuma élmény integrálása</strong><br>A Wachumától kapott felismerések mélyrehatóak lehetnek, és fontos időt szánni ezek beépítésére a mindennapi életbe."
                ]
            },
            {
                title: "Fedezd fel a Wachuma gyógyító erejét",
                content: [
                    "<strong>Mi az a San Pedro kaktusz?</strong><br>A San Pedro kaktusz, más néven Wachuma, egy ősi gyógynövény, amely az Andok fennsíkjain őshonos.",
                    "<strong>Eredet és Történelem</strong><br>A San Pedrót évezredek óta használják az andoki őslakos népek. Mélyen gyökerezik a sámáni hagyományokban, hídként szolgálva a fizikai és a szellemi világ között.",
                    "<strong>A Meszkalin ereje</strong><br>Az egyik kulcsfontosságú hatóanyag a meszkalin. A szintetikus anyagokkal ellentétben a San Pedróból származó meszkalin gyengéden vezeti az egyént egy módosult tudatállapotba, elősegítve az egységet.",
                    "<strong>Spirituális és Terápiás Előnyök</strong><br>A San Pedro híres spirituális és gyógyító tulajdonságairól. Hatásai általában gyengédebbek és fokozatosabbak az Ayahuascához képest."
                ]
            }
        ],
        questionsTitle: "Gyakori Kérdések",
        questions: [
            { question: "Mi az a San Pedro szertartás?", answer: "A San Pedro (Huachuma) egy szent növényi medicina, amelyet gyógyításra, látomásokra és mély spirituális kapcsolódásra használnak." },
            { question: "Kezdőknek is alkalmas az elvonulás?", answer: "Igen, elvonulásaink mindenki számára nyitottak, legyen szó tapasztalt résztvevőről vagy első alkalomról." },
            { question: "Mi az a Kinsacocha és miért különleges?", answer: "Kinsacocha egy csendes terület Pisac közelében, szent tavakkal körülvéve. Ideális környezet a szertartásokhoz." },
            { question: "Mit hozzak az elvonulásra?", answer: "Részletes listát biztosítunk, de a legfontosabbak: kényelmes ruha, túracipő és nyitott szív." },
            { question: "Milyen nyelven zajlik az elvonulás?", answer: "Hernan kecsua és spanyol nyelven beszél. Ha nem beszéled ezeket, fordító áll rendelkezésre." },
            { question: "Biztonságos az elvonulás?", answer: "A biztonság a legfontosabb számunkra. Elvonulásainkat ellenőrzött környezetben, tapasztalt vezetőkkel tartjuk." },
            { question: "Mi a lemondási szabályzat?", answer: "A foglalók egy meghatározott dátumig visszatéríthetők. Bátorítjuk a korai kommunikációt a tervek változása esetén." }
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
        viewFlyer: "Qhawariy Flyer"
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
      hero: { title: "Willka Hampi Wachuma", subtitle: "Pachamamawan tinkuy, ñawpaq yachaywan.", cta: "Raymita Waqaychay", ausangateTeaser: { label: "Kuraq", title: "Ausangate Puriy", date: "Enero 3-9, 2026" }, costaRicaTeaser: { label: "Hatun Raymi", title: "Costa Rica Puriy", date: "Enero 22-28, 2026" } },
      benefits: { title: "Wachuma Kallpa", subtitle: "Imarayku purinchik kay hampiwan", items: [{ title: "Sonqo Hampi", description: "Llakikunata qarqoy, hawkayayta tariy." }, { title: "Pachamamawan Tinkuy", description: "Allpawan, wayrawan, yakuyan, ninawan huklla kay." }, { title: "Yuyay K'anchay", description: "Musuq yuyayta tariy, ñanniykita rikuriy." }] },
      services: { title: "Munayniyku", items: [{ title: "2 P'unchay T'aqakuy", description: "Wayna Wasi & Kinsacocha. $173+.", price: "$173+" }, { title: "Juchuy Qosqo Puriy", description: "2 P'unchay ñawpaq llaqtapi.", price: "$200+" }, { title: "1 P'unchay Raymi", description: "Huk p'unchay hampiwan.", price: "$250" }, { title: "Costa Rica Puriy", description: "Mama Qochawan tinkuy.", price: "Tapukuy" }, { title: "Sapaq Hampi", description: "Qamllapaq hampi.", price: "Tapukuy" }], ausangateCta: { title: "Ausangate Puriy", description: "7 p'unchay Apu Ausangatewan.", button: "Qhawariy" } },
      footer: { description: "Wachuma hampiwan tinkuy, Hernanwan kuska.", columns: { links: { title: "Tinkiykuna", items: [{label: "Ayllu", href: "/about"}, {label: "Tinkuy", href: "/contact"}] }, reviews: { title: "Google", rating: "4,9/5" }, follow: { title: "Qatipay", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "Tinkuy", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "Tiyay", address: "Wayna Wasi, Pisac, Perú" } }, rights: "Llapallan." }
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
        viewFlyer: "عرض المنشور"
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
      hero: { title: "الطب المقدس في جبال الأنديز", subtitle: "أعد الاتصال مع باتشاماما (الأرض الأم) من خلال مراسم واتشوما التقليدية في الوادي المقدس.", cta: "احجز مراسم", ausangateTeaser: { label: "شامل", title: "رحلة أوسانجاتي", date: "3-9 يناير 2026" }, costaRicaTeaser: { label: "حدث خاص", title: "حج كوستاريكا", date: "22-28 يناير 2026" } },
      benefits: { title: "قوة الواتشوما", subtitle: "لماذا نسافر مع الصبار المقدس", items: [{ title: "الشفاء العاطفي", description: "تحرير الصدمات الماضية والانسدادات العاطفية." }, { title: "الاتصال بالطبيعة", description: "تجربة وحدة عميقة مع الأرض والعناصر." }, { title: "الوضوح والرؤية", description: "تهدئة العقل لتلقي التوجيه والغرض." }] },
      footer: { description: "جرب القوة التحويلية للواتشوما، طب النباتات المقدس في جبال الأنديز.", columns: { links: { title: "روابط", items: [{label: "معلومات عنا", href: "/about"}, {label: "اتصل بنا", href: "/contact"}] }, reviews: { title: "تقييمات جوجل", rating: "4,9/5" }, follow: { title: "تابعنا", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "اتصل بنا", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "موقعنا", address: "Wayna Wasi, Pisac, Perú" } }, rights: "جميع الحقوق محفوظة." }
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
        viewFlyer: "チラシを見る"
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
      hero: { title: "アンデスの聖なる薬", subtitle: "聖なる谷での伝統的なワチュマ・セレモニーを通じて、パチャママ（母なる大地）と再びつながりましょう。", cta: "セレモニーを予約", ausangateTeaser: { label: "特別", title: "アウサンガテへの旅", date: "2026年1月3-9日" }, costaRicaTeaser: { label: "特別イベント", title: "コスタリカ巡礼", date: "2026年1月22-28日" } },
      benefits: { title: "ワチュマの力", subtitle: "なぜ聖なるサボテンと共に旅をするのか", items: [{ title: "感情の癒し", description: "過去のトラウマや感情的なブロックを解放します。" }, { title: "自然とのつながり", description: "大地、要素、そしてアンデスの精霊との深いつながりを体験します。" }, { title: "明晰さとビジョン", description: "心を静め、人生の道に対する導きと目的を受け取ります。" }] },
      services: { title: "提供するサービス", items: [{ title: "2日間リトリート", description: "ワイナ・ワシとキンサコチャでの深い没入。", price: "$173+" }, { title: "フチュイ・コスコ体験", description: "「小さなクスコ」遺跡での2日間。", price: "$200+" }, { title: "1日セレモニー", description: "聖なる谷の様々な場所での聖なる旅。", price: "$250" }, { title: "コスタリカ巡礼", description: "アンデスと海をつなぐ聖なる旅。", price: "要問合せ" }, { title: "プライベートヒーリング", description: "個人のニーズに合わせたセッション。", price: "要問合せ" }], ausangateCta: { title: "アウサンガテ遠征", description: "聖なる山への7日間の変容の旅。", button: "旅程を見る" } },
      footer: { description: "サンペドロとして知られるアンデスの聖なる植物薬、ワチュマの変容の力を体験してください。", columns: { links: { title: "リンク", items: [{label: "私たちについて", href: "/about"}, {label: "お問い合わせ", href: "/contact"}] }, reviews: { title: "Google レビュー", rating: "4,9/5" }, follow: { title: "フォローする", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "連絡先", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "場所", address: "Wayna Wasi, Pisac, Perú" } }, rights: "無断転載を禁じます。" }
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
        viewFlyer: "पत्रकं पश्यन्तु"
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
      hero: { title: "पवित्र अण्डीज ओषधि", subtitle: "पवित्र उपत्यकायाम् परम्परागत वाचुमा संस्कारैः सह पचमामायाः सह पुनः सम्बध्यताम्।", cta: "संस्कारं आरक्षयतु", ausangateTeaser: { label: "विशिष्टः", title: "औसंगाते यात्रा", date: "जनवरी ३-९, २०२६" }, costaRicaTeaser: { label: "विशेष कार्यक्रमः", title: "कोस्टा रिका तीर्थयात्रा", date: "जनवरी २२-२८, २०२६" } },
      benefits: { title: "वाचुमायाः शक्तिः", subtitle: "वयं पवित्र काक्टसनेन सह किमर्थं यात्रां कुर्मः", items: [{ title: "भावनात्मक चिकित्सा", description: "शरीरे सञ्चिताः पूर्वत्रासाः भावनात्मकबाधाः च मोचयन्तु।" }, { title: "प्रकृत्या सह सम्बन्धः", description: "पृथिव्या, तत्त्वैः, अण्डीजस्य जीवच्छक्त्या च सह गभीरं एकत्वं अनुभवन्तु।" }, { title: "स्पष्टता दृष्टिः च", description: "मार्गदर्शनं, उद्देश्यं, जीवनपथस्य नूतनदृष्टिकोणं च प्राप्तुं मनः शान्तं कुरुत।" }] },
      footer: { description: "वाचुमायाः परिवर्तनशक्तिं अनुभवन्तु, या सेन् पेड्रो इति नाम्ना ख्याता अस्ति।", columns: { links: { title: "सम्बन्धाः", items: [{label: "अस्मान् प्रति", href: "/about"}, {label: "सम्पर्कः", href: "/contact"}] }, reviews: { title: "Google समीक्षाः", rating: "४.९/५" }, follow: { title: "अनुसरणं कुरुत", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "सम्पर्कः", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "स्थानम्", address: "Wayna Wasi, Pisac, Perú" } }, rights: "सर्वाधिकारः सुरक्षितः।" }
  },
};
