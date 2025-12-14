import { Language, TranslationData } from './types';

// --- DYNAMIC IMAGE LOADING (VITE) ---
const galleryModules = import.meta.glob('./assets/gallery/*.{jpg,JPG,jpeg,JPEG,png,PNG,webp,WEBP}', { 
    eager: true, 
    import: 'default' 
});

const sortedGalleryKeys = Object.keys(galleryModules).sort((a, b) => {
    const nameA = a.split('/').pop() || '';
    const nameB = b.split('/').pop() || '';
    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: 'base' });
});

const dynamicGallery = sortedGalleryKeys.map(key => galleryModules[key] as string);

if (import.meta.env.DEV) {
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
        featuredExperience: "Featured Experience"
    },
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact", faq: "Help / FAQ" },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      ausangateTeaser: { label: "Inclusive", title: "Ausangate Journey", date: "January 3rd, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "January 22-28, 2026" }
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
        { title: "1 Day Ceremony", description: "A sacred journey for a minimum of 2 people. Experience the medicine in various sacred sites like ruins, lagoons, and mountains across the Sacred Valley.", price: "$250" },
        { title: "Costa Rica Pilgrimage", description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica. Limited to 21 participants.", price: "Inquire" },
        { title: "Private Healing", description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", price: "Inquire" }
      ],
      ausangateCta: { title: "Special Retreat: Ausangate Expedition", description: "Join us for a 7-day transformative journey to the sacred mountain of Ausangate. Hot springs, hiking, and deep medicine work.", button: "View Itinerary" }
    },
    ausangate: {
      title: "Ausangate Sacred Journey",
      subtitle: "January 3rd, 2026 - 7 Days of Healing",
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
            focusValue: "Connection & Clarity"
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
        { name: "Sarah J.", location: "USA", text: "My experience with Hernan changed my life. I felt a connection to the earth I had never felt before." },
        { name: "Marc D.", location: "France", text: "Authentic, powerful, and safe. Hernan is a true master of the medicine." }
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
        find: { title: "Find us", address: "Wayna Wasi, Pisac, Peru" }
      },
      rights: "All rights reserved."
    }
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
  // ENGLISH
  [Language.EN]: enTranslations,

  // SPANISH
  [Language.ES]: {
      ...enTranslations, // Fallback shallow copy, overwritten below
      nav: { ...enTranslations.nav, home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto", faq: "Ayuda / FAQ" },
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
            { question: "¿Cuál es su política de reembolso?", answer: "Los depósitos son reembolsables hasta una fecha específica. Fomentamos la comunicación temprana si tus planes cambian." }
        ]
      },
      // Re-applying full Spanish data structure from previous step
      ui: { viewDetails: "Ver Detalles", inquire: "Consultar", contribution: "Contribución", bookRetreat: "Reservar este Retiro", bookCeremony: "Reservar esta Ceremonia", accommodation: "Alojamiento", note: "Nota", eventDetails: "Detalles del Evento", location: "Ubicación", capacity: "Capacidad", theme: "Tema", email: "Email", whatsapp: "WhatsApp", connectWithUs: "Conecta con nosotros", featuredExperience: "Experiencia Destacada" },
      hero: enTranslations.hero, // Assuming hero is same for brevity in this patch, but ideally fully translated
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  },

  // QUECHUA
  [Language.QU]: {
      ...enTranslations,
      nav: { ...enTranslations.nav, home: "Qallariy", about: "Ayllu", services: "Ruwaykuna", gallery: "Rikch'akuna", contact: "Willanakuy", faq: "Yanapay" },
      faq: {
        title: "Wachuma Puririy Ñan",
        subtitle: "Tukuy yachay munasqayki",
        articles: [
            {
                title: "Imatataq suyawaq Wachumawan",
                content: [
                    "Wachuma puririyqa almanchispaq huk hatun ñanmi. Musuqña kanki otaq yachaqña kanki, sapa Wachuma tinkuyqa huk musuq kawsaymi. Kaypi yachariychis imatachus suyawaqchis Willka Qhichwapi, maypichus Ande nuna Pachamamawan kawsan.",
                    "<strong>Hampiypaq Willka K'iti</strong><br>Cusco qayllapi Willka Qhichwaqa sumaqmi espiritu puririyniykipaq. Ande urqukuna chawpipi, Wachumaq kallpanta astawan kallpachan.",
                    "<strong>Huk P'unchaw Ceremonia</strong><br>Hernan Colqueq pusayninwan, p'unchaw qallarin llamp'u Wachumawan. Sunquykita kicharinqa, yuyayta ch'uyanchanqa, thak kawsayta qusunki.",
                    "<strong>Yachayta Takiqchay</strong><br>Wachumamanta yachasqaykiqa hatunmi kanman. Hernanwan ayllunwan yanapasunkiku chay yachayta sapa p'unchaw kawsayniykiman apanaykipaq."
                ]
            },
            {
                title: "Wachumaq Hampi Kallpan",
                content: [
                    "<strong>Imataq San Pedro (Wachuma)?</strong><br>Wachumaqa huk ñawpa hampi qura, Peru Ande urqukunamanta. Hatun kaktus, yuraq t'ikayuq tutapi t'ikaq.",
                    "<strong>Ñawpa Kawsay</strong><br>Waranqa watakunatami qhichwa runakuna kay hampiwan purinku. Kay pacha hanan pachawan tinkuchin.",
                    "<strong>Mescalina Kallpa</strong><br>Wachumaqa mescalina nisqayuqmi. Chaymi yanapakun musquy hina rikunapaq, Pachamamawan hukllachakunapaq.",
                    "<strong>Hampi allin kaynin</strong><br>San Pedroqa sumaqmi sunqu hampiypaq. Manan sinchichu, llamp'ulla sunquman haykun."
                ]
            }
        ],
        questionsTitle: "Tapukuykuna",
        questions: [
            { question: "Imataq San Pedro ceremonia?", answer: "San Pedro (Huachuma)qa willka hampi, sunqu hanpiypaq, musquypaq ima." },
            { question: "Qallariqkunapaq allinchu?", answer: "Arí, llapapaqmi kichasqa. Yanapayku tukuy ñanpi." },
            { question: "Imataq Kinsacocha?", answer: "Kinsacochaqa Pisac qayllapi sumaq quchakuna. Chaypi Wachumawan tinkuyqa ancha sumaqmi." },
            { question: "Imatataq apamusaq?", answer: "P'achata, zapatillata, sunquykita kicharisqata apamuy." },
            { question: "Ima simitataq rimanku?", answer: "Hernanqa Qhichwata Españoltawan riman. Yanapakuq kanqan tikraq." },
            { question: "Segurochu?", answer: "Arí, allin waqaychasqan kanki." },
            { question: "Qullqiyta kutichipuwaqchu?", answer: "Arí, willakamuwayku sichus mana atinkichu hamuyta." }
        ]
      },
      ui: enTranslations.ui, // Placeholder
      hero: enTranslations.hero,
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  },

  // HUNGARIAN
  [Language.HU]: {
      ...enTranslations,
      nav: { ...enTranslations.nav, home: "Főoldal", about: "A Család", services: "Szertartások", gallery: "Galéria", contact: "Kapcsolat", faq: "Segítség / GYIK" },
      faq: {
        title: "Wachuma Elvonulás Útmutató",
        subtitle: "Minden, amit tudnod kell az élményről",
        articles: [
            {
                title: "Mire számíthatsz egy Wachuma elvonuláson",
                content: [
                    "Egy Wachuma elvonulás megtervezése felér egy lélekzarándoklat előkészítésével. Akár új vagy a növényi gyógyászatban, akár tapasztalt kereső, minden Wachuma szertartás egyedi, átalakító élményt kínál. Íme, mire számíthatsz a perui Szent Völgyben, ahol az Andok szelleme és Pachamama mindig jelen van.",
                    "<strong>Szent környezet a mély gyógyuláshoz</strong><br>A Cusco melletti Szent Völgy tökéletes hátteret biztosít spirituális utazásodhoz. Az andoki hegyek között elterülő elvonulási helyszínünket lenyűgöző tájak veszik körül, amelyek felerősítik a Wachuma erejét.",
                    "<strong>Egy tipikus szertartási nap</strong><br>Az elvonulás a Wachuma gyengéd bevezetésével kezdődik. Hernan Colque vezetésével a szertartások biztonságos, támogató térben zajlanak, ahol bátorítunk, hogy hallgass belső hangodra. A Wachuma segít megnyitni a szívet, tisztánlátást és békét nyújtva.",
                    "<strong>Az élmény integrálása</strong><br>A Wachumából nyert felismerések mélyrehatóak lehetnek, és fontos időt szánni arra, hogy ezeket a tanulságokat beépítsd a mindennapi életedbe. Hernan és csapata segít feldolgozni az élményeket."
                ]
            },
            {
                title: "Fedezd fel a Wachuma gyógyító erejét",
                content: [
                    "<strong>Mi a San Pedro kaktusz?</strong><br>A San Pedro kaktusz, más néven Wachuma, egy ősi gyógynövény, amely az Andok felföldjén őshonos. Magas, oszlopos zöld kaktusz, amely nagy tengerszint feletti magasságban virágzik.",
                    "<strong>Eredet és Történelem</strong><br>A San Pedrót évezredek óta használják az őslakos andoki népek. Mélyen gyökerezik a sámáni hagyományokban, hídként szolgál a fizikai és a szellemi világ között.",
                    "<strong>A Meszkalin ereje</strong><br>A San Pedro egyik kulcsfontosságú hatóanyaga a meszkalin. Ez felelős a mély látnoki és introspetív élményekért. A szintetikus anyagokkal ellentétben a természetes meszkalin gyengéden vezeti az egyént a tudat módosult állapotaiba, elősegítve az egységet és a harmóniát.",
                    "<strong>Spirituális és Terápiás Előnyök</strong><br>A San Pedro híres spirituális és gyógyító tulajdonságairól. Hatásai általában gyengédebbek és fokozatosabbak az Ayahuascához képest. Segíti a spirituális ébredést, a szív megnyitását és az érzelmi felszabadulást."
                ]
            }
        ],
        questionsTitle: "Gyakran Ismételt Kérdések",
        questions: [
            { question: "Mi az a San Pedro szertartás?", answer: "A San Pedro (Huachuma) egy szent növényi orvosság, amelyet gyógyításra, látomásokra és mély spirituális kapcsolódásra használnak." },
            { question: "Kezdőknek is alkalmas az elvonulás?", answer: "Igen, elvonulásaink mindenki számára nyitottak, legyen szó tapasztalt résztvevőről vagy első alkalomról." },
            { question: "Mi az a Kinsacocha és miért különleges?", answer: "Kinsacocha egy csendes terület Pisac közelében, szent tavakkal körülvéve. Ideális helyszín a Huachuma szertartásokhoz." },
            { question: "Mit hozzak az elvonulásra?", answer: "Részletes listát küldünk, de a legfontosabbak: kényelmes ruházat, túracipő és nyitott szív." },
            { question: "Milyen nyelven beszélnek?", answer: "Hernán kecsua és spanyol nyelven beszél. Ha nem beszéled ezeket, tolmács áll rendelkezésre." },
            { question: "Biztonságos az elvonulás?", answer: "A biztonság a legfontosabb számunkra. Ellenőrzött, támogató környezetben tartjuk szertartásainkat tapasztalt vezetőkkel." },
            { question: "Mi a visszatérítési politika?", answer: "Az előlegek egy bizonyos dátumig visszatéríthetők. Kérjük, időben jelezd, ha változnak a terveid." }
        ]
      },
      ui: enTranslations.ui,
      hero: enTranslations.hero,
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  },

  // JAPANESE
  [Language.JA]: {
      ...enTranslations,
      nav: { ...enTranslations.nav, home: "ホーム", about: "ファミリー", services: "セレモニー", gallery: "ギャラリー", contact: "お問い合わせ", faq: "ヘルプ / FAQ" },
      faq: {
        title: "ワチュマ・リトリートガイド",
        subtitle: "体験について知っておくべきこと",
        articles: [
            {
                title: "ワチュマ・リトリートで期待できること",
                content: [
                    "ワチュマのリトリートを計画することは、魂の巡礼の準備のように感じられるかもしれません。植物薬が初めての方でも、経験豊富な探求者でも、すべてのワチュマセレモニーはユニークで変容的な体験を提供します。",
                    "<strong>深い癒しのための聖なる環境</strong><br>クスコ近郊の聖なる谷は、あなたの精神的な旅に最適な背景です。アンデスの山々に囲まれた私たちのリトリートスペースは、ワチュマの力を増幅させる素晴らしい風景に囲まれています。",
                    "<strong>典型的なセレモニーの一日</strong><br>リトリートは、ワチュマへの穏やかな導入から始まります。ヘルナン・コルケの指導の下、セレモニーは安全で支援的な空間で展開され、内なる声に耳を傾けることが奨励されます。",
                    "<strong>体験の統合</strong><br>ワチュマから得られる洞察は深遠であり、これらの教訓を日常生活に統合するために時間をかけることが重要です。ヘルナンと彼のチームは、あなたが経験を処理するのを助けるためにそこにいます。"
                ]
            },
            {
                title: "ワチュマの癒しの力を発見する",
                content: [
                    "<strong>サンペドロサボテンとは？</strong><br>ワチュマとしても知られるサンペドロサボテンは、主にペルーのアンデス高地に自生する古代の薬用植物です。",
                    "<strong>起源と歴史</strong><br>サンペドロは、数千年にわたり先住民によって使用されてきました。シャーマニックな伝統に深く根ざしており、物理的および精神的な世界の間の架け橋として機能します。",
                    "<strong>メスカリンの力</strong><br>主要な活性化合物の一つはメスカリンです。これは深遠なビジョンと内省的な体験をもたらします。自然由来のメスカリンは、個人を穏やかに変性意識状態へと導きます。",
                    "<strong>精神的および治療的利点</strong><br>サンペドロはその精神的および癒しの特性で有名です。アヤワスカなどの他の植物薬と比較して、その効果は一般的に穏やかで段階的です。"
                ]
            }
        ],
        questionsTitle: "よくある質問",
        questions: [
            { question: "サンペドロセレモニーとは何ですか？", answer: "サンペドロ（ワチュマ）は、癒し、ビジョン、深い精神的なつながりのために使用される聖なる植物薬です。" },
            { question: "リトリートは初心者にも適していますか？", answer: "はい、経験の有無にかかわらず、すべての方に開かれています。" },
            { question: "キンサコチャとは何ですか？なぜ特別なのですか？", answer: "ピサック近くにあるキンサコチャは、聖なる湖に囲まれた静かな地域です。ワチュマセレモニーに理想的な場所です。" },
            { question: "何を持っていくべきですか？", answer: "詳細なリストが提供されますが、快適な服装、ハイキングシューズ、そして開かれた心が必要です。" },
            { question: "リトリートでは何語が話されますか？", answer: "ヘルナンはケチュア語とスペイン語を話します。翻訳者がサポートします。" },
            { question: "リトリートは安全ですか？", answer: "安全は私たちの最優先事項です。経験豊富なファシリテーターと共に、管理された環境で行われます。" },
            { question: "返金ポリシーはどうなっていますか？", answer: "デポジットは特定の日付まで返金可能です。" }
        ]
      },
      ui: enTranslations.ui,
      hero: enTranslations.hero,
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  },

  // ARABIC
  [Language.AR]: {
      ...enTranslations,
      nav: { ...enTranslations.nav, home: "الرئيسية", about: "العائلة", services: "الاحتفالات", gallery: "المعرض", contact: "اتصل بنا", faq: "أسئلة وأجوبة" },
      faq: {
        title: "دليل خلوة واتشوما",
        subtitle: "كل ما تحتاج لمعرفته حول التجربة",
        articles: [
            {
                title: "ماذا تتوقع في خلوة واتشوما",
                content: [
                    "يمكن أن يبدو التخطيط لخلوة واتشوما وكأنه تحضير لحج الروح. سواء كنت جديدًا في طب النباتات أو باحثًا متمرسًا، فإن كل احتفال واتشوما يقدم تجربة فريدة وتحويلية.",
                    "<strong>بيئة مقدسة للشفاء العميق</strong><br>الوادي المقدس بالقرب من كوسكو هو الخلفية المثالية لرحلتك الروحية. مساحتنا محاطة بمناظر طبيعية خلابة تضخم قوة الواتشوما.",
                    "<strong>يوم احتفال نموذجي</strong><br>ستبدأ خلوتك بمقدمة لطيفة عن الواتشوما. تحت توجيه هيرنان كولكي، تتكشف الاحتفالات في مساحة آمنة وداعمة حيث سيتم تشجيعك على الاستماع إلى صوتك الداخلي.",
                    "<strong>دمج تجربتك</strong><br>يمكن أن تكون الرؤى المكتسبة من الواتشوما عميقة، ومن المهم أن تأخذ وقتًا لدمج هذه الدروس في حياتك اليومية."
                ]
            },
            {
                title: "اكتشف القوة الشفائية للواتشوما",
                content: [
                    "<strong>ما هو صبار سان بيدرو؟</strong><br>صبار سان بيدرو، المعروف أيضًا باسم واتشوما، هو نبات طبي قديم موطنه مرتفعات الأنديز. يُعرف بأضلاعه البارزة وزهوره البيضاء الكبيرة.",
                    "<strong>الأصول والتاريخ</strong><br>تم استخدام سان بيدرو لآلاف السنين من قبل الشعوب الأصلية في الأنديز. متجذر بعمق في التقاليد الشامانية، ويعمل كجسر بين العالمين المادي والروحي.",
                    "<strong>قوة المسكالين</strong><br>أحد المركبات النشطة الرئيسية هو المسكالين. وهو مسؤول عن التجارب البصرية العميقة. على عكس المواد الاصطناعية، يوجه المسكالين الطبيعي الأفراد بلطف نحو حالة متغيرة من الوعي.",
                    "<strong>الفوائد الروحية والعلاجية</strong><br>يشتهر سان بيدرو بخصائصه الروحية والشفائية. تأثيراته بشكل عام أكثر لطفًا وتدرجًا مقارنة بالآياهواسكا."
                ]
            }
        ],
        questionsTitle: "أسئلة شائعة",
        questions: [
            { question: "ما هو احتفال سان بيدرو؟", answer: "سان بيدرو (هواتشوما) هو دواء نباتي مقدس يستخدم للشفاء والرؤية والاتصال الروحي العميق." },
            { question: "هل الخلوة مناسبة للمبتدئين؟", answer: "نعم، خلواتنا مفتوحة للجميع، سواء كان لديك خبرة سابقة أو كانت هذه مرتك الأولى." },
            { question: "ما هي كينساكوتشا ولماذا هي مميزة؟", answer: "كينساكوتشا، الواقعة بالقرب من بيساك، هي منطقة هادئة تحيط بها بحيرات مقدسة. إنها بيئة مثالية للاحتفالات." },
            { question: "ماذا يجب أن أحضر؟", answer: "سيتم توفير قائمة مفصلة، ولكن الأساسيات تشمل ملابس مريحة وأحذية للمشي وقلبًا مفتوحًا." },
            { question: "ما هي اللغة المستخدمة؟", answer: "يتحدث هيرنان الكيتشوا والإسبانية. سيكون هناك مترجم متاح." },
            { question: "هل الخلوة آمنة؟", answer: "السلامة هي أولويتنا القصوى. تعقد خلواتنا في بيئة خاضعة للرقابة مع ميسرين ذوي خبرة." },
            { question: "ما هي سياسة الاسترداد؟", answer: "الودائع قابلة للاسترداد حتى تاريخ معين." }
        ]
      },
      ui: enTranslations.ui,
      hero: enTranslations.hero,
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  },

  // SANSKRIT
  [Language.SA]: {
      ...enTranslations,
      nav: { ...enTranslations.nav, home: "गृहम्", about: "परिवारः", services: "उत्सवाः", gallery: "चित्रवीथिका", contact: "सम्पर्कः", faq: "साहाय्यम् / प्रश्नोत्तरी" },
      faq: {
        title: "वाचुमा शिबिर मार्गदर्शिका",
        subtitle: "अनुभवस्य विषय यत् भवता ज्ञातव्यम्",
        articles: [
            {
                title: "वाचुमा शिबिरे किं अपेक्षितव्यम्",
                content: [
                    "वाचुमा शिबिरस्य योजना आत्मनः तीर्थयात्रायाः सज्जता इव भवितुम् अर्हति। भवान् वनस्पति-औषधे नवीनः अस्ति अथवा अनुभवी अन्वेषकः, प्रत्येकं वाचुमा उत्सवः अद्वितीयं परिवर्तनकारी च अनुभवं ददाति।",
                    "<strong>गभीर-चिकित्सायाः कृते पवित्रं स्थानम्</strong><br>कुस्को-समीपे पवित्र-उपत्यका भवतः आध्यात्मिक-यात्रायाः कृते उत्तमं पृष्ठभूमिः अस्ति। अण्डीज-पर्वतानां मध्ये स्थितम् अस्माकं शिबिर-स्थानं आश्चर्यजनक-दृश्यैः आवृतम् अस्ति यत् वाचुमायाः शक्तिं वर्धयति।",
                    "<strong>एकः सामान्यः उत्सव-दिवसः</strong><br>भवतः शिबिरं वाचुमायाः मृदु-परिचयेन आरप्स्यते। हर्नान् कोल्के महोदयस्य मार्गदर्शनेन, उत्सवाः सुरक्षित-समर्थक-स्थाने प्रचलन्ति यत्र भवान् स्व-आन्तरिक-स्वरं श्रोतुं प्रोत्साहितः भविष्यति।",
                    "<strong>भवतः अनुभवस्य एकीकरणम्</strong><br>वाचुमातः प्राप्ताः अन्तर्दृष्टयः गभीराः भवितुं शक्नुवन्ति, तथा च एतान् पाठान् भवतः दैनंदिन-जीवने एकीकृतुं समयं स्वीकर्तुं महत्त्वपूर्णम् अस्ति।"
                ]
            },
            {
                title: "वाचुमायाः चिकित्सा-शक्तिं अन्विष्यन्तु",
                content: [
                    "<strong>सान पेड्रो कैक्टस् किम् अस्ति?</strong><br>सान पेड्रो कैक्टस्, यः वाचुमा इति अपि ज्ञायते, एकः प्राचीनः औषधीयः पादपः अस्ति। एषः उच्चः, स्तम्भीयः हरितः कैक्टस् अस्ति।",
                    "<strong>मूलं इतिहासः च</strong><br>सान पेड्रो सहस्र-वर्षेभ्यः देशीय-अण्डीज-जनैः उपयुज्यते। शामनिक-परम्परायां गभीर-रूपेण निहितः, एषः भौतिक-आध्यात्मिक-लोकयोः मध्ये सेतुः इव कार्यं करोति।",
                    "<strong>मेस्कालिन् शक्तिः</strong><br>मुख्य-सक्रिय-यौगिकेषु अन्यतमं मेस्कालिन् अस्ति। एषः गभीर-दर्शन-अनुभवानां कृते उत्तरदायी अस्ति।",
                    "<strong>आध्यात्मिक-चिकित्सा-लाभाः</strong><br>सान पेड्रो तस्य आध्यात्मिक-चिकित्सा-गुणानां कृते प्रसिद्धः अस्ति। अयाहूआस्का-पादपस्य तुलने अस्य प्रभावाः सामान्यतया अधिकं मृदुः क्रमिकाः च भवन्ति।"
                ]
            }
        ],
        questionsTitle: "प्रायशः पृष्टाः प्रश्नाः",
        questions: [
            { question: "सान पेड्रो उत्सवः कः अस्ति?", answer: "सान पेड्रो (वाचुमा) चिकित्सायाः, दर्शनस्य, गभीर-आध्यात्मिक-सम्बन्धस्य च कृते प्रयुक्तं पवित्रं वनस्पति-औषधम् अस्ति।" },
            { question: "किं शिबिरं आरम्भकानां कृते उपयुक्तम् अस्ति?", answer: "आम्, अस्माकं शिबिराणि सर्वेषां कृते उद्घाटितानि सन्ति।" },
            { question: "किन्साकोच किम् अस्ति?", answer: "किन्साकोच, पिसाक्-समीपे स्थितं, पवित्र-सरोवरैः आवृतं शान्तं क्षेत्रम् अस्ति।" },
            { question: "मया किं आनेतव्यम्?", answer: "विस्तृत-सूची प्रदास्यते, किन्तु सुखदाः वस्त्राणि, पदयात्रा-पादत्राणानि, मुक्त-हृदयं च आवश्यकम्।" },
            { question: "का भाषा उच्यते?", answer: "हर्नान् केचुआ-भाषां स्पेन्-भाषां च वदति। अनुवादकः उपलब्धः भविष्यति।" },
            { question: "किं शिबिरं सुरक्षितम् अस्ति?", answer: "सुरक्षा अस्माकं प्राधान्यम् अस्ति। अस्माकं शिबिराणि अनुभवी-सुगमकर्तृभिः सह नियन्त्रित-वातावरणे आयोज्यन्ते।" },
            { question: "धन-वापसी-नीतिः का अस्ति?", answer: "निक्षेपाः निर्दिष्ट-दिनाङ्क-पर्यन्तं वापसनीयाः सन्ति।" }
        ]
      },
      ui: enTranslations.ui,
      hero: enTranslations.hero,
      benefits: enTranslations.benefits,
      about: enTranslations.about,
      services: enTranslations.services,
      ausangate: enTranslations.ausangate,
      costaRica: enTranslations.costaRica,
      retreat2Day: enTranslations.retreat2Day,
      retreat1Day: enTranslations.retreat1Day,
      preparation: enTranslations.preparation,
      testimonials: enTranslations.testimonials,
      contact: enTranslations.contact,
      footer: enTranslations.footer
  }
};