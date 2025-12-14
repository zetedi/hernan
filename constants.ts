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
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact" },
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
        featuredExperience: "Experiencia Destacada"
      },
      nav: { home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto" },
      hero: {
          title: "Medicina Sagrada de los Andes",
          subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
          cta: "Reserva una Ceremonia",
          ausangateTeaser: { label: "Inclusivo", title: "Viaje al Ausangate", date: "3 de Enero, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "22-28 de Enero, 2026" }
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
            { title: "Ceremonia de 1 Día", description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", price: "$250" },
            { title: "Peregrinaje a Costa Rica", description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", price: "Consultar" },
            { title: "Sanación Privada", description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", price: "Consultar" }
          ],
          ausangateCta: { title: "Retiro Especial: Expedición Ausangate", description: "Únete a un viaje transformador de 7 días a la montaña sagrada de Ausangate. Aguas termales, caminatas y trabajo profundo con medicina.", button: "Ver Itinerario" }
      },
      ausangate: {
        title: "Viaje Sagrado al Ausangate",
        subtitle: "3 de Enero, 2026 - 7 Días de Sanación",
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
      retreat1Day: {
          title: "Ceremonia de 1 Día",
          subtitle: "Sitios Sagrados del Valle",
          intro: "Un viaje enfocado y profundo en la medicina, realizado en varios lugares sagrados como ruinas antiguas, lagunas serenas o montañas poderosas.",
          days: [
              { title: "La Ceremonia", content: "Comenzamos temprano en la mañana, viajando a un sitio sagrado cuidadosamente seleccionado en el Valle Sagrado (como Pumamarca, Kinsacocha u otros lugares de poder). La ceremonia es un compromiso de día completo con la medicina, la naturaleza y uno mismo. Hernan proporciona orientación, manteniendo el espacio para una sanación profunda y conexión. La experiencia concluye a última hora de la tarde.", accommodation: "El alojamiento no está incluido, pero se organiza el transporte hacia y desde el sitio." }
          ],
          conclusion: "Un reinicio poderoso y reconexión con el mundo natural, dejándote con claridad y un corazón más ligero.",
          details: { durationLabel: "Duración", durationValue: "Día Completo (Mañana a Tarde)", locationLabel: "Ubicación", locationValue: "Sitios del Valle Sagrado", focusLabel: "Enfoque", focusValue: "Conexión y Claridad" }
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
      testimonials: {
          title: "Voces del Corazón",
          items: [
              { name: "Sarah J.", location: "EE.UU.", text: "Mi experiencia con Hernan cambió mi vida. Sentí una conexión con la tierra que nunca antes había sentido." },
              { name: "Marc D.", location: "Francia", text: "Auténtico, poderoso y seguro. Hernan es un verdadero maestro de la medicina." }
          ]
      },
      contact: {
          title: "Contáctanos",
          form: { name: "Tu Nombre", email: "Tu Email", message: "Tu Mensaje", submit: "Enviar Mensaje" },
          info: "Estamos ubicados en el corazón del Valle Sagrado, cerca de Calca, Cusco."
      },
      footer: {
          description: "Experimenta el poder transformador del Wachuma, la medicina sagrada de plantas andinas conocida como San Pedro. Únete a Hernan en ceremonias guiadas que te ayudarán a reconectar con tu ser interior, sanar profundamente y despertar tu espíritu cerca de Cusco, en el corazón del Valle Sagrado del Perú.",
          columns: {
              links: { title: "Enlaces", items: [{label: "Nosotros", href: "/about"}, {label: "La Comunidad", href: "/about"}, {label: "Contacto", href: "/contact"}] },
              reviews: { title: "Reseñas de Google", rating: "4,9/5" },
              follow: { title: "Síguenos", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "Contacto", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "Ubicación", address: "Wayna Wasi, Pisac, Perú" }
          },
          rights: "Todos los derechos reservados."
      }
  },

  // QUECHUA
  [Language.QU]: {
      ui: {
        viewDetails: "Rikuy",
        inquire: "Tapukuy",
        contribution: "Yanapay",
        bookRetreat: "Kayta Akllay",
        bookCeremony: "Kayta Akllay",
        accommodation: "Puñuna",
        note: "Willay",
        eventDetails: "Raymimanta",
        location: "Tiyay",
        capacity: "Runakuna",
        theme: "Yuyay",
        email: "E-mail",
        whatsapp: "WhatsApp",
        connectWithUs: "Tinkuy",
        featuredExperience: "Hatun Ruway"
      },
      nav: { home: "Qallariy", about: "Ayllu", services: "Ruwaykuna", gallery: "Rikch'akuna", contact: "Willanakuy" },
      hero: {
          title: "Ande Suyumanta Willka Hampi",
          subtitle: "Pachamamawan tinkuy ñawpaq Wachuma raymikunawan Willka Qhichwapi.",
          cta: "Hampi Akllay",
          ausangateTeaser: { label: "Llapapaq", title: "Ausangate Puririy", date: "3 Enero, 2026" },
          costaRicaTeaser: { label: "Hatun Raymi", title: "Costa Rica Puririy", date: "22-28 Enero, 2026" }
      },
      benefits: {
        title: "Wachumaq Kallpan",
        subtitle: "Imanaqtinmi Willka Hampiwan purinchis",
        items: [
            { title: "Sunqu Hampiy", description: "Ñawpaq nanaykunata qarquy, pampachayta tarispa kurkupi waqaychasqa." },
            { title: "Pachamamawan Tinkuy", description: "Hatun hukllachakuy Hallp'awan, wayrawan, Ande urqukunaq nunanwan." },
            { title: "Yuyay K'anchay", description: "Uma thajyay, allin ñan tariypaq, musuq yuyayta chaskiy." }
        ]
      },
      about: {
        title: "Hernanwan Riqsinakuy",
        subtitle: "Willka Hampi Waqaychaq",
        description: [
            "<strong>Hernan Colque</strong> qhichwa runan, <strong>Wachuma (San Pedro) hampiq</strong>, Ande ñawpa yachayniyuq. <strong>Viacha</strong> ayllupi paqarisqa, <strong>Pisaq</strong> patapi (5000m), payqa ñawpaq hampiqkunaq yawarnintam apan.",
            "Ñawpaq willakuykuna hina, sapa miraymanta huk churillanmi kay ñanta qatinan, kikillanmantataqmi akllakunan. Hernanmi taytanmanta (Beninho) hatun taytanmanta (Carmen) yachayta chaskirqan. Qanchis wawqimanta, paymi hampi ñanta akllakurqan, <strong>Pachamamawan</strong> tinkuyninta waqaychaspa.",
            "<strong>Espinar K'ana Ayllu.</strong> Hernanqa <strong>Espinar</strong> llaqtamanta, <strong>K'ana</strong> yawarniyuq. K'ana runakunaqa Inka Pachacutecwan allinta kawsarqanku, 'Sinchis' awqaqkuna kaspa, manan atipisqachu karqanku. Chayraykun Collasuyupi hallp'ata chaskirqanku, Kanamarca llaqtankutapas Inkaqa allicharqan.",
            "<strong>Wachumaq Nuna.</strong> Wachumaqa runakunatan ñawpaqta huñurqan, sunqunkupitaq waqaycharqanku, hampiqa willarqanmi chinkapunanta, chaytaqmi karqan. Hernanmi chay yuyayta apan.",
            "<strong>Pisaqwan Viachawan.</strong> <strong>Pisaq</strong> llaqtapin tarikuyku, <strong>Wayna Wasi</strong> wasipi samachispayku. Hatun hampikunataq <strong>Viacha</strong> ayllupi ruwakun."
        ]
      },
      services: {
          title: "Ruwaykuna",
          items: [
            { title: "2 P'unchaw T'aqakuy", description: "Wayna Wasipi Kinsacochapi ima. $173 (1 runa). Yapay runa +$70. Puñuna +$20. 10 runakama.", price: "$173+" },
            { title: "1 P'unchaw Ceremonia", description: "Iskay runamanta qallarispa. Hampiwan tinkuy imaymana wak'akunapi (Urqu, Qucha, Raqay).", price: "$250" },
            { title: "Costa Rica Puririy", description: "Hatun puririy Costa Rica suyupi, mama quchawan tinkuspa. 21 runallapaq.", price: "Tapukuy" },
            { title: "Sapalla Hampikuy", description: "Sapallaykipar kikiykipaq hampiy. Sunqu nanay qarquypaq.", price: "Tapukuy" }
          ],
          ausangateCta: { title: "Hatun Puririy: Ausangate", description: "Qanchis p'unchaw puririy Apu Ausangatewan. Q'uñi yaku, puriy, hampiwan ima.", button: "Qhaway" }
      },
      ausangate: {
        title: "Ausangate Willka Puririy",
        subtitle: "3 Enero, 2026 - 7 P'unchaw Hampi",
        description: "Hatun puririy Pacchanta yakupi, Apu Ausangate ñawpaqpi, Wachuma Temazcalwan ima.",
        cta: "K'itita Hap'iy",
        itinerary: [
          { day: "P'unchaw 1", title: "Chayamuy & Ch'uyanchay", description: "Pacchantaman riy. Q'uñi yakupi samay, kurku ch'uyanchay, Ausangatepaq yuyay churay." },
          { day: "P'unchaw 2", title: "Ñawpaq Wachuma", description: "Sunqu kichay Apupaq. P'unchaw ceremonia, urquwan tinkuy." },
          { day: "P'unchaw 3", title: "Temazcal & Rapé", description: "Pachamama wiksanpi humpiy. Kurku ch'uyanchay, Rapé hampiwan." },
          { day: "P'unchaw 4", title: "Iskay Kaq Wachuma", description: "Ukhu puri. Ch'in pampapi yuyay, ukhu nanayta qarquy." },
          { day: "P'unchaw 5", title: "Temazcal & Rapé", description: "Iskay kaq humpiy, kallpa chaskisqa takyachinapaq, Rapé hampiwan." },
          { day: "P'unchaw 6", title: "Kinsa Kaq Wachuma", description: "Tukuy tinkuchiy. Añaschay, hampi chaskisqata takyachiy." },
          { day: "P'unchaw 7", title: "Kutimpuy", description: "Uraykamuy, q'uñi yaku, Pisaqman kutiy." }
        ]
      },
      costaRica: {
        title: "Costa Rica Willka Puririy",
        subtitle: "Urqukuna Mama Quchawan",
        intro: "Huk sumaq tinkuy, Costa Rica suyupi. Urqukuna mama quchawan hukllachakun, pakasqa k'itipi.",
        description: [
            "Hamuy kay hatun tinkuyman. Hernanmi Wachuma hampita apan Costa Rica hallp'aman.",
            "Huk musquymi kayta purichin, Ande yachayta mama quchawan tinkuchispa.",
            "Wachumawan, Rapé hampiwan, t'ikakunawan ima ch'uyanchakusun.",
            "Pakasqa k'itipin huñunakusun. 21 runallapaqmi."
        ],
        details: { location: "Pakasqa K'iti, Costa Rica", capacity: "21 Runalla", dates: "22-28 Enero killa, 2026" },
        cta: "Mañakuy",
        visionTitle: "Hampi Musquy",
        visionText: "Kayqa manan puririyllachu; kayqa Apukunaq waqaychayninmi mama quchawan tinkun. Kurku nuna ima puririy.",
        themeValue: "Mama Qucha & Urqu"
      },
      retreat2Day: {
          title: "2 P'unchaw T'aqakuy",
          subtitle: "Wayna Wasi & Kinsacocha",
          intro: "Ukhu hampi tinkuy Wayna Wasipi, Pisaq urqukunapi ima.",
          days: [
              { title: "P'unchaw 1: Chayamuy", content: "Wayna Wasipi hampi wakichiy. Hernanwan rimay, sunqu kichay.", accommodation: "Wayna Wasipi puñuy, samay." },
              { title: "P'unchaw 2: Kinsacocha", content: "Kinsacocha quchaman riy Wachumawan tinkunapaq. Urqukunawan rimay.", accommodation: "Wayna Wasiman kutiy, samay." }
          ],
          conclusion: "Musuq kallpawan kutipunki, Wachuma yachaywan, Pachamamawan."
      },
      retreat1Day: {
          title: "1 P'unchaw Ceremonia",
          subtitle: "Willka Wak'akuna",
          intro: "Huk p'unchawlla hampiwan tinkuy, wak'akunapi.",
          days: [
              { title: "Ceremonia", content: "Tutamanta puriy wak'aman (Kinsacocha, Pumamarca). Tukuy p'unchaw hampiwan.", accommodation: "Mana puñuna kanchu." }
          ],
          conclusion: "Pachamamawan musuqmanta tinkuy, sunqu ch'uyanchay.",
          details: { durationLabel: "P'unchaw", durationValue: "Tukuy P'unchaw", locationLabel: "Tiyay", locationValue: "Willka Qhichwa", focusLabel: "Yuyay", focusValue: "Tinkuy" }
      },
      preparation: {
        title: "Wakichikuy",
        subtitle: "Kallpachakuy",
        intro: "Allin tinkuypaqqa, kurkuta yuyaytawan wakichina.",
        diet: {
            title: "Mikhuy & Yuyay",
            description: "Ch'uya mikhuyqa allinmi.",
            items: [
                { label: "Qura Mikhuy", text: "Ama aychata mikhuychu." },
                { label: "Ama Misk'ita", text: "Ama asukarta." },
                { label: "Yaku Ukyay", text: "Achka yakuta ukyay." },
                { label: "Yuyay", text: "Imapaqmi hampikunki, chayta yuyay." },
                { label: "Ama Machaychu", text: "Ama trago ukyaychu." }
            ]
        },
        packing: {
            title: "Ceremonia P'unchaw",
            description: "Kaykunata apamuy:",
            items: [
                { label: "P'acha", text: "Q'uñi p'achata apamuy." },
                { label: "Ruphamanta", text: "Sombrero/Gorra." },
                { label: "Haywan", text: "T'ikata, rurutapas apamuy." },
                { label: "Yaku", text: "Yakuta apamuy." },
                { label: "Qillqana", text: "Yuyayniyki qillqanapaq." }
            ]
        },
        suggestions: {
            title: "Yuyaychaykuna",
            description: "Allin purinapaq:",
            items: [
                { label: "Ch'in Kay", text: "Ch'in kaypi yuyay." },
                { label: "Samay", text: "Allinta samay." },
                { label: "Ama Celular", text: "Ama celularta apaychu." }
            ]
        },
        closing: "Allinta wakichikuspaqa, hampiqa sumaqta pusasunki.",
        risks: {
            title: "Willakuy",
            intro: "Hampiqa kallpayuqmi, allinta yachana.",
            sections: [
                { title: "Qhali Kay", items: [{ label: "Unquykuna", text: "Willay sunqu unquymanta, umanmanta." }, { label: "Hampikuna", text: "Willay sichus hampita toman." }] },
                { title: "Kikiyki", items: [{ label: "Yachaspa", text: "Munayniykiwanmi ruwanki." }] }
            ]
        }
      },
      testimonials: {
          title: "Runakunaq Rimaynin",
          items: [
              { name: "Sarah J.", location: "USA", text: "Kawsayniytan tikrarqan. Pachamamawan tinkurqani." },
              { name: "Marc D.", location: "Francia", text: "Cheqaq hampi. Hernanqa allin yachaqmi." }
          ]
      },
      contact: {
          title: "Willanakuy",
          form: { name: "Suti", email: "E-mail", message: "Willakuy", submit: "Apachiy" },
          info: "Willka Qhichwapi tarikuyku, Calca qayllapi."
      },
      footer: {
          description: "Wachumaq kallpanta riqsiy. Hernanwan tinkuy Willka Qhichwapi, Pisac llaqtapi.",
          columns: {
              links: { title: "T'ipikuna", items: [{label: "Nuqayku", href: "/about"}, {label: "Ayllu", href: "/about"}, {label: "Willanakuy", href: "/contact"}] },
              reviews: { title: "Google Rimaykuna", rating: "4,9/5" },
              follow: { title: "Qatiwayku", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "Willanakuy", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "Tarikuy", address: "Wayna Wasi, Pisac, Perú" }
          },
          rights: "Llapallan waqaychasqa."
      }
  },

  // HUNGARIAN
  [Language.HU]: {
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
        featuredExperience: "Kiemelt Élmény"
      },
      nav: { home: "Főoldal", about: "A Család", services: "Szertartások", gallery: "Galéria", contact: "Kapcsolat" },
      hero: {
          title: "Az Andok Szent Gyógyító Ereje",
          subtitle: "Kapcsolódj újra Pachamamával a hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.",
          cta: "Szertartás Foglalása",
          ausangateTeaser: { label: "Exkluzív", title: "Ausangate Utazás", date: "2026. Január 3." },
          costaRicaTeaser: { label: "Különleges Esemény", title: "Costa Rica-i Zarándoklat", date: "2026. Január 22-28." }
      },
      benefits: {
        title: "A Wachuma Ereje",
        subtitle: "Miért utazunk a Szent Kaktusszal",
        items: [
            { title: "Érzelmi Gyógyulás", description: "Engedd el a testben tárolt múltbeli traumákat és érzelmi blokkokat, meglelve a megbocsátást és a békét." },
            { title: "Kapcsolódás a Természethez", description: "Tapasztald meg a mély egységet a Földdel, az elemekkel és az Andok élő szellemével." },
            { title: "Tisztánlátás és Vízió", description: "Csendesítsd le az elmét, hogy útmutatást, célt és megújult perspektívát kapj életutadhoz." }
        ]
      },
      about: {
        title: "Ismerd meg Hernant",
        subtitle: "A Szent Kaktusz Őrzője",
        description: [
            "<strong>Hernan Colque</strong> kecsua származású, a <strong>Wachuma (San Pedro) szertartások</strong> elkötelezett vezetője, aki mélyen gyökerezik az Andok szent hagyományaiban. <strong>Viachában</strong>, egy <strong>Pisac</strong> feletti magashegyi közösségben született 5000 méter felett, Hernan egy olyan gyógyító vérvonalat hordoz, amely az inka kor előtti időkig nyúlik vissza.",
            "Az ősi hagyomány szerint generációnként csak egy gyermek örökölheti ezt az utat, és önként kell választania. A bölcsesség nagyapjától, Carmentől szállt apjára, Beninhóra. Hét testvére közül Hernan nagyon fiatalon választotta a gyógyítást, így ő lett ennek az ősi örökségnek és a <strong>Pachamamával (Földanya)</strong> való mély kapcsolatnak az egyedüli hordozója.",
            "<strong>A Ccana Vérvonal Espinarból.</strong> Hernan <strong>Espinar tartományból</strong> származik, vérvonala pedig <strong>Ccana (K'ana)</strong>. A K'ana kultúra egy inka kor előtti társadalom volt, amely békés stratégiai szövetséget kötött az Inka Birodalommal a meghódítás helyett. Pachacutec uralkodása alatt békésen integrálódtak, és létfontosságú katonai szövetségesekké váltak – elit <strong>'Sinchis'</strong> harcosokká, akik segítettek legyőzni a Chancákat. Ennek a kölcsönösségnek köszönhetően földeket kaptak Collasuyóban, és ősi fővárosukat, Kanamarcát az inkák újjáépítették.",
            "<strong>A Wachuma Szelleme.</strong> Azt mondják, hogy a Wachuma szelleme kapcsolta össze először az embereket ebből a régióból, és a szívükben őrizték, mert a növény azt mondta nekik, hogy el fog tűnni a földről, ami nem is olyan régen meg is történt. Hernan ezt az emléket és szellemet viszi tovább.",
            "<strong>Pisac és Viacha.</strong> Székhelyünk <strong>Pisacban</strong>, a Szent Völgy egy nyüzsgő városában található, ahol szertartásokat tartunk és békés szállást kínálunk a <strong>Wayna Wasi Hotelben</strong>. A mélyebb elmélyülés érdekében többnapos elvonulásainkat <strong>Viachában</strong>, egy Pisac feletti csendes közösségben tartjuk."
        ]
      },
      services: {
          title: "Ajánlataink",
          items: [
            { title: "2 Napos Elvonulás", description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Alapdíj $173 (1 fő). További személy +$70. Szállás +$20/fő. Max 10 fő.", price: "$173+" },
            { title: "1 Napos Szertartás", description: "Szent utazás minimum 2 fő részére. Tapasztald meg a gyógyítást különböző szent helyeken, mint romok, lagúnák vagy hegyek a Szent Völgyben.", price: "$250" },
            { title: "Costa Rica-i Zarándoklat", description: "Szent utazás, amely összeköti az Andokat és az Óceánt egy titkos Costa Rica-i helyszínen. 21 résztvevőre korlátozva.", price: "Érdeklődj" },
            { title: "Privát Gyógyítás", description: "Személyre szabott egyéni ülések a spirituális és érzelmi igényeidhez igazítva. Mély blokkok oldása.", price: "Érdeklődj" }
          ],
          ausangateCta: { title: "Különleges Elvonulás: Ausangate Expedíció", description: "Csatlakozz hozzánk egy 7 napos átalakító utazásra az Ausangate szent hegyéhez. Hőforrások, túrázás és mély gyógyító munka.", button: "Útiterv Megtekintése" }
      },
      ausangate: {
        title: "Ausangate Szent Utazás",
        subtitle: "2026. Január 3. - 7 Nap Gyógyulás",
        description: "Mélyreható expedíció, amely egyesíti Pacchanta gyógyító vizeit, Apu Ausangate fenséges jelenlétét, valamint a Wachuma és a Temazcal átalakító erejét.",
        cta: "Helyfoglalás",
        itinerary: [
          { day: "1. Nap", title: "Érkezés és Megtisztulás", description: "Utazás Pacchantába. Lazítás a természetes termálvízben a test megtisztítására, majd túra az Ausangate felé a szándékok megfogalmazásához." },
          { day: "2. Nap", title: "Első Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Nappali szertartás, kapcsolódás a hegy szellemével és a hatalmas andoki éggel." },
          { day: "3. Nap", title: "Temazcal (Izzasztókunyhó) és Rapé", description: "Hagyományos gőzfürdő rituálé, amely a Földanya méhét jelképezi. Fizikai és spirituális méregtelenítés szent Rapé orvossággal." },
          { day: "4. Nap", title: "Második Wachuma Szertartás", description: "Az utazás elmélyítése. A belső blokkok feloldása és a tudatosság kiterjesztése a felvidéki csendben." },
          { day: "5. Nap", title: "Temazcal és Rapé", description: "Második gőzfürdő szertartás a kapott energiák leföldelésére és a lélek további tisztítására szent Rapéval." },
          { day: "6. Nap", title: "Harmadik Wachuma & Integráció", description: "A végső gyógyszertartás. Fókuszban az integráció, a hála és a héten kapott gyógyulás lezárása." },
          { day: "7. Nap", title: "Visszaút", description: "Túra le a hegyről, utolsó fürdőzés a Pacchanta hőforrásokban, majd visszautazás Pisacba." }
        ]
      },
      costaRica: {
        title: "Szent Zarándoklat Costa Ricába",
        subtitle: "Hegyek és Óceán Egyesülése",
        intro: "Különleges alkalom, először Costa Ricában egy titkos helyszínen. A szent hegyek és az óceán összekapcsolása, egy különleges fizikai és spirituális zarándoklat egy látomás és a gyógyszer üzenete nyomán.",
        description: [
            "Csatlakozz hozzánk ezen a történelmi és átalakító összejövetelen. Hernan először viszi el a szent Wachuma orvosságot Costa Rica vibráló földjére.",
            "Egy mély látomás és a gyógyszer közvetlen üzenete által vezérelve, ez az elvonulás egy spirituális zarándoklat, amely összeköti az Andok hegyeinek bölcsességét az óceán tisztító erejével.",
            "A szent Wachuma szertartások mellett megosztjuk a Rapé orvosságot, tisztító munkákat végzünk virágokkal, és vezetett gyógyszeres meditációkon veszünk részt.",
            "Egy titkos, eldugott helyen gyűlünk össze, a természet ölelésében. Ez a bensőséges élmény szigorúan 21 résztvevőre korlátozódik (beleértve a segítőket is) a mély, személyes figyelem és az összetartó energetikai tér biztosítása érdekében."
        ],
        details: { location: "Titkos Helyszín, Costa Rica", capacity: "21 Lélekre Korlátozva", dates: "2026. Január 22-28." },
        cta: "Meghívó Kérése",
        visionTitle: "Vízió a Gyógyítótól",
        visionText: "Ez az összejövetel nem csupán egy elvonulás; ez válasz egy hívásra. A gyógyszer arról beszélt, hogy össze kell kötni a magas Andokban őrzött bölcsességet az óceán tisztító, áramló energiájával. A lélek és a test zarándoklata.",
        themeValue: "Óceán és Hegy"
      },
      retreat2Day: {
          title: "2 Napos Elvonulás",
          subtitle: "Wayna Wasi és Kinsacocha",
          intro: "Mély elmélyülés a szent gyógyításban, a Wayna Wasi szentélyében és Pisac erőteljes hegyei között.",
          days: [
              { title: "1. Nap: Felkészülés és Érkezés Wayna Wasi-ba", content: "A Wayna Wasi-ba érkezéskor a résztvevők a bedida (a szent Wachuma ital) ceremoniális elkészítésével kezdik útjukat. Ez az élmény szent köteléket hoz létre a gyógyszerrel, előkészítve a terepet a belső felfedezéshez. Hernan gondosan vezeti a résztvevőket, segítve szándékaik tisztázását és szívük megnyitását a Wachuma gyengéd, mégis erőteljes hatásai előtt.", accommodation: "Éjszaka a Wayna Wasi-ban, a béke szentélyében, ahol az Andok szelleme mindig jelen van." },
              { title: "2. Nap: Szertartás Kinsacochában, Pisac", content: "A második napon a Pisacban található tisztelt Kinsacocha helyszínre utazunk, ahol lélegzetelállító hegyi kilátások közepette vesztek részt a Wachuma szertartáson. Hernan tapasztalt vezetésével a résztvevők felfedezik belső tájaikat, személyes felismeréseket keresnek, és befogadják a Wachuma tanításait. A szertartás végén egy csoportos megosztó kör lehetővé teszi a feldolgozást és a reflektálást, fokozva az elvonulás hatását.", accommodation: "Visszatérés a Wayna Wasi-ba egy békés éjszakára, feldolgozva a nap átalakító élményeit." }
          ],
          conclusion: "A résztvevők megújult éntudattal és céllal távoznak, megerősödve a Wachuma élmény és Pachamama időtlen bölcsessége által."
      },
      retreat1Day: {
          title: "1 Napos Szertartás",
          subtitle: "A Völgy Szent Helyei",
          intro: "Fókuszált és mély utazás a gyógyításban, különböző szent helyszíneken, mint ősi romok, csendes lagúnák vagy erőteljes hegyek.",
          days: [
              { title: "A Szertartás", content: "Kora reggel indulunk egy gondosan kiválasztott szent helyre a Szent Völgyben (például Pumamarca, Kinsacocha vagy más erőhelyek). A szertartás egy egész napos elköteleződés a gyógyszerrel, a természettel és önmagunkkal. Hernan útmutatást nyújt, teret tartva a mély gyógyuláshoz és kapcsolódáshoz. Az élmény késő délután zárul.", accommodation: "A szállást az ár nem tartalmazza, de a helyszínre történő utazást megszervezzük." }
          ],
          conclusion: "Erőteljes újraindítás és újrakapcsolódás a természeti világgal, tisztánlátással és könnyebb szívvel távozva.",
          details: { durationLabel: "Időtartam", durationValue: "Egész Nap (Reggeltől Délutánig)", locationLabel: "Helyszín", locationValue: "Szent Völgy Helyszínei", focusLabel: "Fókusz", focusValue: "Kapcsolódás és Tisztánlátás" }
      },
      preparation: {
        title: "Felkészülés a San Pedro Elvonulásra",
        subtitle: "Az Andoki Közösség Jövőjének Megerősítése",
        intro: "Üdvözlünk az átalakító háromnapos San Pedro elvonulásodon! Hogy a legtöbbet hozd ki ebből az élményből, kérjük, készülj fel testben és lélekben előre. Íme egy útmutató a jelentőségteljes utazáshoz.",
        diet: {
            title: "Felkészülés: Könnyű Étrend és Szándékok",
            description: "Az elvonulást megelőzően egy könnyű, tiszta étrend segíthet megnyitni a testet és az elmét az élményre. Íme néhány javaslat, amit érdemes követni legalább 3-5 nappal az érkezés előtt:",
            items: [
                { label: "Vegetáriánus Étrend", text: "Kerüld a húst és az állati termékeket, mivel ezek megterhelhetik az emésztőrendszert." },
                { label: "Hozzáadott Cukor Nélkül", text: "Tartózkodj a feldolgozott cukrok fogyasztásától az energiaszinted kiegyensúlyozása érdekében." },
                { label: "Stimulánsok Korlátozása", text: "Csökkentsd vagy iktasd ki a koffeint, az alkoholt és más serkentőszereket, hogy kitisztítsd az elmédet és a testedet." },
                { label: "Nehéz Ételek Kerülése", text: "Hagyd el a sült ételeket és a tejtermékeket a könnyebb emésztés érdekében." },
                { label: "Hidratálás", text: "Igyál sok vizet a tisztánlátás és az általános jó közérzet érdekében." },
                { label: "Szándékok", text: "A diétán túl szánj időt minden nap a szándékaid megfogalmazására. Naplóírás, meditáció vagy csendes elmélkedés révén hangolódj rá arra, mit remélsz elérni vagy elengedni ezen az utazáson." }
            ]
        },
        packing: {
            title: "A Szertartás Napja",
            description: "A szertartás napjára, amely az elvonulás második napján lesz, javasoljuk néhány személyes tárgy hozatalát, amelyek fokozhatják a kapcsolódást és hozzájárulhatnak a szent térhez.",
            items: [
                { label: "Kényelmes Ruházat", text: "Viselj laza, kényelmes, kültéri viseletre alkalmas ruhát." },
                { label: "Napvédelem", text: "Mivel a szertartás a szabadban lesz, hozz kalapot vagy sapkát a nap elleni védelemhez." },
                { label: "Felajánlás", text: "Szokás gyümölcsöt és virágot hozni felajánlásként a szertartásra. Ez a gesztus a hálát és a természettel való kapcsolatot jelképezi." },
                { label: "Kulacs", text: "A hidratáltság megőrzése egész nap elengedhetetlen." },
                { label: "Jegyzetfüzet és Toll", text: "Lehet, hogy inspirációt érzel a naplóírásra a szertartás után, hogy megörökítsd gondolataidat, felismeréseidet vagy érzelmeidet." }
            ]
        },
        suggestions: {
            title: "További Javaslatok az Elvonuláshoz",
            description: "Az utazásod elmélyítése érdekében fontold meg a következőket:",
            items: [
                { label: "Csend Tisztelete", text: "Használd a csendes időszakokat az élményeid reflektálására és feldolgozására." },
                { label: "Légzés és Meditáció", text: "A gyengéd légzőgyakorlatok vagy a meditáció segíthetnek a földelésben és a középpontban maradásban." },
                { label: "Digitális Detox", text: "Szakadj el a telefonoktól és egyéb elektronikai eszközöktől, hogy teljesen jelen lehess." },
                { label: "Kapcsolódás a Természethez", text: "Ha lehetséges, tölts időt a természetben minden nap, hagyva, hogy támogassa belső utazásodat." }
            ]
        },
        closing: "A tudatos felkészüléssel és a nyitottsággal teret adsz a San Pedro orvosságnak, hogy a felfedezés mély útjára vezessen. Várjuk, hogy megoszthassuk veled ezt a különleges élményt.",
        risks: {
            title: "Fontos Figyelmeztetés: A Kockázatok és Felelősségek Megértése",
            intro: "Bár ezt az elvonulást úgy terveztük, hogy biztonságos és átalakító élményt nyújtson, fontos tudomásul venni, hogy a San Pedro szertartáson való részvétel fizikai és pszichológiai kockázatokkal jár. Kérjük, figyelmesen olvasd el az alábbiakat a tájékozott részvétel érdekében:",
            sections: [
                { title: "Egészségügyi Nyilatkozat", items: [{ label: "Orvosi Állapotok", text: "A résztvevőknek tájékoztatniuk kell a facilitátorokat minden orvosi állapotról, beleértve a szívproblémákat, mentális egészségügyi állapotokat vagy rohamokat. Bizonyos meglévő állapotok növelhetik a San Pedro élménnyel kapcsolatos kockázatokat." }, { label: "Gyógyszerek", text: "Bizonyos gyógyszerek, beleértve az antidepresszánsokat, antipszichotikumokat és egyes vény nélkül kapható szereket, káros kölcsönhatásba léphetnek a San Pedróval. Kérjük, jelezz minden gyógyszert a facilitátoroknak jóval az elvonulás előtt." }, { label: "Fizikai Érzékenység", text: "A San Pedro átmeneti fizikai hatásokat okozhat, mint hányinger, hányás és emelkedett pulzusszám. A résztvevőknek fizikailag és mentálisan fel kell készülniük ezekre a hatásokra." }] },
                { title: "Pszichológiai Kockázatok és Érzelmi Felelősség", items: [{ label: "Intenzív Élmények", text: "A San Pedro mély érzelmeket és múltbeli traumákat hozhat felszínre, amelyek feldolgozása kihívást jelenthet. A résztvevőket arra bátorítjuk, hogy végezzenek önreflexiót, vagy kérjenek szakmai útmutatást előzetesen, ha traumás múltjuk van." }, { label: "Integrációs Támogatás", text: "Az elvonulást követően a résztvevőknek hasznos lehet a további támogatás az élményeik integrálásához. Javasolt időt, támogatást és erőforrásokat tervezni a felmerülő felismerések vagy érzelmek feldolgozására." }] },
                { title: "Személyes Felelősség", items: [{ label: "Tájékozott Beleegyezés", text: "Az elvonuláson való részvétellel elismered, hogy önként veszel részt ebben az élményben. Minden felismerés, kihívás vagy személyes átalakulás a saját felelősséged." }, { label: "Biztonsági Óvintézkedések", text: "Kövesd a facilitátorok által adott összes biztonsági iránymutatást, beleértve az étrendi korlátozásokat, a szertartások alatti javasolt viselkedést és a fizikai tevékenységek korlátozását." }] }
            ]
        }
      },
      testimonials: {
          title: "Szívből Jövő Hangok",
          items: [
              { name: "Sarah J.", location: "USA", text: "A Hernannal szerzett tapasztalataim megváltoztatták az életemet. Olyan kapcsolatot éreztem a földdel, amit korábban soha." },
              { name: "Marc D.", location: "Franciaország", text: "Hiteles, erőteljes és biztonságos. Hernan a gyógyszer igazi mestere." }
          ]
      },
      contact: {
          title: "Lépj Kapcsolatba Velünk",
          form: { name: "Neved", email: "Email Címed", message: "Üzeneted", submit: "Üzenet Küldése" },
          info: "A Szent Völgy szívében vagyunk, Calca közelében, Cusco mellett."
      },
      footer: {
          description: "Tapasztald meg a Wachuma, a San Pedroként ismert szent andoki növényi orvosság átalakító erejét. Csatlakozz Hernanhoz vezetett szertartásokon, amelyek segítenek újra kapcsolatba lépni belső éneddel, mélyen gyógyulni és felébreszteni lelkedet Cusco közelében, Peru Szent Völgyének szívében.",
          columns: {
              links: { title: "Linkek", items: [{label: "Rólunk", href: "/about"}, {label: "A Közösség", href: "/about"}, {label: "Kapcsolat", href: "/contact"}] },
              reviews: { title: "Google Értékelések", rating: "4,9/5" },
              follow: { title: "Kövess minket", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "Kapcsolat", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "Helyszín", address: "Wayna Wasi, Pisac, Peru" }
          },
          rights: "Minden jog fenntartva."
      }
  },

  // JAPANESE
  [Language.JA]: {
      ui: {
        viewDetails: "詳細を見る",
        inquire: "お問い合わせ",
        contribution: "寄付",
        bookRetreat: "このリトリートを予約",
        bookCeremony: "このセレモニーを予約",
        accommodation: "宿泊",
        note: "注意",
        eventDetails: "イベント詳細",
        location: "場所",
        capacity: "定員",
        theme: "テーマ",
        email: "メール",
        whatsapp: "WhatsApp",
        connectWithUs: "接続する",
        featuredExperience: "おすすめ体験"
      },
      nav: { home: "ホーム", about: "ファミリー", services: "セレモニー", gallery: "ギャラリー", contact: "お問い合わせ" },
      hero: {
          title: "アンデスの聖なる薬",
          subtitle: "聖なる谷での伝統的なワチュマセレモニーを通じて、パチャママと再びつながりましょう。",
          cta: "セレモニーを予約する",
          ausangateTeaser: { label: "包括的", title: "アウサンガテの旅", date: "2026年1月3日" },
          costaRicaTeaser: { label: "特別イベント", title: "コスタリカ巡礼", date: "2026年1月22日-28日" }
      },
      benefits: {
        title: "ワチュマの力",
        subtitle: "なぜ私たちは聖なるサボテンと共に旅をするのか",
        items: [
            { title: "感情的な癒し", description: "体に蓄積された過去のトラウマや感情的なブロックを解放し、許しと平和を見つけます。" },
            { title: "自然とのつながり", description: "地球、元素、そしてアンデスの生きている精神との深い一体感を体験します。" },
            { title: "明晰さとビジョン", description: "心を静めて、導き、目的、そして人生の道に対する新たな視点を受け取ります。" }
        ]
      },
      about: {
        title: "ヘルナンについて",
        subtitle: "聖なるサボテンの守護者",
        description: [
            "<strong>ヘルナン・コルケ</strong>はケチュアの先住民であり、アンデスの聖なる伝統に深く根ざした<strong>ワチュマ（サンペドロ）セレモニー</strong>の献身的なファシリテーターです。<strong>ピサック</strong>の高地コミュニティである<strong>ビアチャ</strong>の標高5000m以上で生まれたヘルナンは、プレ・インカ時代にまで遡る癒しの血統を受け継いでいます。",
            "先祖代々の伝統によれば、各世代に一人の子供だけがこの道を継承でき、自発的に選択しなければなりません。知恵は祖父カルメンから父ベニーニョへと受け継がれました。7人の兄弟の中で、ヘルナンは非常に幼い頃に薬を選び、この古代の遺産と<strong>パチャママ（母なる地球）</strong>との深い結びつきの唯一の継承者となりました。",
            "<strong>エスピナルのカナの血統。</strong>ヘルナンは<strong>エスピナル県</strong>の出身で、彼の血統は<strong>カナ（カ'ナ）</strong>です。カ'ナ文化は、典型的な征服ではなく、インカ帝国と平和的な戦略的同盟を結んだプレ・インカ社会でした。パチャクテクの治世中に平和的に統合され、彼らは重要な軍事同盟国、つまりチャンカ族を打ち負かすのを助けたエリート<strong>「シンチ」</strong>戦士となりました。この相互関係により、彼らはコラスヨに土地を与えられ、彼らの古代の首都カナマルカはインカによって再建されました。",
            "<strong>ワチュマの精神。</strong>ワチュマの精神が最初にこの地域の人々を結びつけ、彼らはそれを心に留めていたと言われています。なぜなら、植物は彼らに、それが土地から消えるだろうと告げたからです（そしてそれは少し前に実際に起こりました）。ヘルナンはこの記憶と精神を引き継いでいます。",
            "<strong>ピサックとビアチャ。</strong>私たちは聖なる谷の活気ある町<strong>ピサック</strong>を拠点としており、<strong>ワイナ・ワシ・ホテル</strong>でセレモニーを開催し、平和な宿泊施設を提供しています。より深い没入のために、数日間のリトリートはピサックの上の静かなコミュニティである<strong>ビアチャ</strong>で開催されます。"
        ]
      },
      services: {
          title: "私たちの提供するもの",
          items: [
            { title: "2日間リトリート", description: "ワイナ・ワシとキンサコチャでの深い没入。基本費用 $173 (1名)。追加1名 +$70。宿泊 +$20/人。最大10名。", price: "$173+" },
            { title: "1日セレモニー", description: "最低2名様からの聖なる旅。聖なる谷の遺跡、ラグーン、山々など、様々な聖地で薬を体験してください。", price: "$250" },
            { title: "コスタリカ巡礼", description: "コスタリカの秘密の場所でアンデスと海を結ぶ聖なる旅。21名の参加者に限定。", price: "お問い合わせ" },
            { title: "プライベートヒーリング", description: "あなたの精神的・感情的なニーズに合わせたマンツーマンセッション。深いブロックの除去。", price: "お問い合わせ" }
          ],
          ausangateCta: { title: "特別リトリート：アウサンガテ遠征", description: "聖なる山アウサンガテへの7日間の変容の旅に参加しましょう。温泉、ハイキング、そして深い薬のワーク。", button: "旅程を見る" }
      },
      ausangate: {
        title: "アウサンガテ聖なる旅",
        subtitle: "2026年1月3日 - 7日間の癒し",
        description: "パッチャンタの癒しの水、アプ・アウサンガテの荘厳な存在、そしてワチュマとテマズカルの変容の力を組み合わせた深遠な遠征。",
        cta: "場所を予約する",
        itinerary: [
          { day: "1日目", title: "到着と浄化", description: "パッチャンタへ移動。体を浄化するために天然温泉でリラックスし、その後、意図を設定するためにアウサンガテに向かってハイキングします。" },
          { day: "2日目", title: "最初のワチュマセレモニー", description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる昼間のセレモニー。" },
          { day: "3日目", title: "テマズカル（スウェットロッジ）＆ラペ", description: "母なる地球の子宮を表す伝統的な蒸し風呂の儀式。聖なるラペの薬による身体的および精神的な解毒。" },
          { day: "4日目", title: "2回目のワチュマセレモニー", description: "旅を深める。高地の静寂の中で内なるブロックに取り組み、意識を拡大する。" },
          { day: "5日目", title: "テマズカル＆ラペ", description: "受け取ったエネルギーを定着させ、聖なるラペで精神をさらに浄化するための2回目のスウェットロッジセレモニー。" },
          { day: "6日目", title: "3回目のワチュマ＆統合", description: "最後の薬のセレモニー。統合、感謝、そしてその週に受け取った癒しを封印することに焦点を当てます。" },
          { day: "7日目", title: "帰路", description: "山を下り、パッチャンタの温泉に最後に浸かり、ピサックへ戻る。" }
        ]
      },
      costaRica: {
        title: "コスタリカへの聖なる巡礼",
        subtitle: "山と海の統合",
        intro: "秘密の場所でのコスタリカ初開催の特別な機会。聖なる山々と海とのつながり、薬からのビジョンとメッセージに従った特別な肉体的・精神的巡礼。",
        description: [
            "歴史的で変容的な集まりに参加してください。ヘルナンが初めてコスタリカの活気ある土地に聖なるワチュマの薬をもたらします。",
            "深いビジョンと薬からの直接のメッセージに導かれたこのリトリートは、アンデスの山々の知恵と海の浄化力を結ぶ精神的な巡礼です。",
            "聖なるワチュマの儀式に加えて、ラペの薬を分かち合い、花を使った浄化のワークを行い、ガイド付きの薬の瞑想を通じて旅をします。",
            "自然に抱かれた秘密の人里離れた場所に集まります。この親密な体験は、深い個人的な注意とまとまりのあるエネルギー的な器を確保するために、厳密に21名の参加者（ヘルパーを含む）に限定されています。"
        ],
        details: { location: "秘密の場所、コスタリカ", capacity: "21名限定", dates: "2026年1月22日-28日" },
        cta: "招待をリクエスト",
        visionTitle: "薬からのビジョン",
        visionText: "この集まりは単なるリトリートではなく、呼びかけへの応答です。薬は、アンデスの高地に保持されている知恵と、海の浄化され流れるエネルギーを結びつけることについて語りました。精神と肉体の巡礼。",
        themeValue: "海と山"
      },
      retreat2Day: {
          title: "2日間リトリート",
          subtitle: "ワイナ・ワシとキンサコチャ",
          intro: "ワイナ・ワシの聖域とピサックの力強い山々で行われる、聖なる薬への深い没入。",
          days: [
              { title: "1日目：準備とワイナ・ワシへの到着", content: "ワイナ・ワシに到着すると、参加者はベディダ（聖なるワチュマの飲み物）の儀式的な準備から旅を始めます。この経験は薬との聖なる絆を開始し、内なる探求とつながりのための舞台を設定します。ヘルナンは各参加者を注意深く導き、意図を明確にし、ワチュマの穏やかでありながら強力な効果に心を開くのを助けます。", accommodation: "アンデスの精神が常に存在する平和の聖域、ワイナ・ワシで一泊します。" },
              { title: "2日目：ピサック、キンサコチャでのセレモニー", content: "2日目には、ピサックの崇拝される場所であるキンサコチャへ移動し、息をのむような山の景色の中でワチュマセレモニーに参加します。ヘルナンの経験豊富な指導の下、参加者は内なる風景を探求し、個人的な洞察を求め、ワチュマが提供する教えを受け取ります。セレモニーの終了時には、グループシェアリングサークルが参加者が旅を処理し振り返ることを可能にし、リトリートの影響を高めます。", accommodation: "ワイナ・ワシに戻り、その日の変容的な経験を吸収しながら平和な夜を過ごします。" }
          ],
          conclusion: "参加者は、ワチュマの経験とパチャママの時代を超越した知恵によって力を与えられ、新たな自己意識と目的を持って出発します。"
      },
      retreat1Day: {
          title: "1日セレモニー",
          subtitle: "聖なる谷の聖地",
          intro: "古代の遺跡、静かなラグーン、力強い山々など、様々な聖地で開催される、薬への集中的で深遠な旅。",
          days: [
              { title: "セレモニー", content: "早朝、聖なる谷の厳選された聖地（プママカ、キンサコチャ、その他のパワースポットなど）へ移動します。セレモニーは、薬、自然、そして自分自身との一日がかりの取り組みです。ヘルナンはガイダンスを提供し、深い癒しとつながりのためのスペースを保持します。体験は夕方遅くに終了します。", accommodation: "宿泊は含まれていませんが、現地への往復送迎は手配されます。" }
          ],
          conclusion: "自然界との強力なリセットと再接続により、明晰さと軽い心を持って出発します。",
          details: { durationLabel: "期間", durationValue: "終日（朝から午後まで）", locationLabel: "場所", locationValue: "聖なる谷の聖地", focusLabel: "フォーカス", focusValue: "つながりと明晰さ" }
      },
      preparation: {
        title: "サンペドロリトリートの準備",
        subtitle: "アンデスコミュニティの未来を力づける",
        intro: "変容をもたらす3日間のサンペドロリトリートへようこそ！この経験を最大限に活用するために、事前に心身の準備をお願いします。有意義な旅にするためのガイドはこちらです。",
        diet: {
            title: "準備：軽い食事と意図の設定",
            description: "リトリートに向けて、軽くてきれいな食事は、体と心を開くのに役立ちます。到着の少なくとも3〜5日前に従うべきいくつかの提案があります：",
            items: [
                { label: "ベジタリアン食", text: "消化器系に負担をかける可能性があるため、肉や動物性食品を避けてください。" },
                { label: "砂糖添加なし", text: "エネルギーのバランスを保つために、加工砂糖の摂取を控えてください。" },
                { label: "刺激物を制限", text: "心と体をきれいにするために、カフェイン、アルコール、その他の刺激物を減らすか排除してください。" },
                { label: "重い食事を避ける", text: "消化プロセスを容易にするために、揚げ物や乳製品を控えてください。" },
                { label: "水分補給", text: "明晰さと全体的な健康を助けるために、水をたくさん飲んでください。" },
                { label: "意図", text: "食事以外にも、リトリートの意図を設定するために毎日時間を取ってください。ジャーナリング、瞑想、または静かな熟考を通じて、この旅を通じて得たいことや解放したいことに同調してください。" }
            ]
        },
        packing: {
            title: "セレモニー当日",
            description: "リトリートの2日目に行われるセレモニー当日は、つながりを高め、聖なる空間に貢献できるいくつかの私物を持参することをお勧めします。",
            items: [
                { label: "快適な服装", text: "屋外に適したゆったりとした快適な服を着てください。" },
                { label: "日よけ帽子", text: "セレモニーは屋外で行われるため、日差しから身を守るために帽子を持参してください。" },
                { label: "お供え物を持参", text: "セレモニーのお供え物として果物や花を持参するのが習慣です。このジェスチャーは感謝と自然とのつながりを象徴しています。" },
                { label: "水筒", text: "一日を通して水分補給を続けることが不可欠です。" },
                { label: "ノートとペン", text: "考え、洞察、または感情を記録するために、セレモニー後にジャーナリングをするインスピレーションを感じるかもしれません。" }
            ]
        },
        suggestions: {
            title: "リトリートのための追加の提案",
            description: "旅を深めるために、以下を考慮してください：",
            items: [
                { label: "静寂な時間を尊重", text: "沈黙の期間を使って、経験を振り返り、処理してください。" },
                { label: "呼吸法と瞑想", text: "穏やかな呼吸法や瞑想は、グラウンディングし、中心を保つのに役立ちます。" },
                { label: "デジタルデトックス", text: "電話やその他の電子機器から離れ、完全に存在できるようにしてください。" },
                { label: "自然とつながる", text: "可能であれば、毎日自然の中で過ごし、それがあなたの内なる旅をサポートするようにしてください。" }
            ]
        },
        closing: "意識的に準備し、オープンでいることで、サンペドロの薬があなたを発見の深い道へと導くスペースを作ります。この特別な経験をあなたと共有できることを楽しみにしています。",
        risks: {
            title: "重要なお知らせ：リスクと責任の理解",
            intro: "このリトリートは安全で変容的な体験を提供するように設計されていますが、サンペドロの儀式への参加には身体的および心理的リスクが伴うことを認識することが重要です。インフォームドコンセントを確実にするために、以下の考慮事項を注意深く確認してください：",
            sections: [
                { title: "健康および医療開示", items: [{ label: "病状", text: "参加者は、心臓の問題、精神的健康状態、または発作の既往歴を含むあらゆる病状をファシリテーターに知らせる必要があります。一部の既往症は、サンペドロの経験に関連するリスクを高める可能性があります。" }, { label: "薬", text: "抗うつ薬、抗精神病薬、および一部の市販薬を含む特定の薬は、サンペドロと有害な相互作用をする可能性があります。リトリートのかなり前に、ファシリテーターに薬を開示してください。" }, { label: "身体的感受性", text: "サンペドロは、吐き気、嘔吐、心拍数の増加などの一時的な身体的影響を引き起こす可能性があります。参加者は、これらの影響に対して身体的および精神的に準備する必要があります。" }] },
                { title: "心理的リスクと感情的責任", items: [{ label: "激しい経験", text: "サンペドロは深い感情や過去のトラウマを表面化させる可能性があり、処理するのが難しい場合があります。トラウマの既往歴がある場合、参加者は事前に個人的な振り返りを行うか、専門家の指導を求めることをお勧めします。" }, { label: "統合サポート", text: "リトリート後、参加者は経験を統合するための追加のサポートから利益を得る場合があります。発生する洞察や感情を処理するための時間、サポート、およびリソースを計画することをお勧めします。" }] },
                { title: "個人の責任", items: [{ label: "インフォームドコンセント", text: "このリトリートに参加することにより、あなたは自発的にこの経験に参加していることを認めます。あなたが経験する洞察、課題、または個人的な変容は、あなた自身の責任です。" }, { label: "安全上の予防措置", text: "食事制限、セレモニー中の推奨される行動、身体活動の制限など、ファシリテーターによって提供されるすべての安全ガイドラインに従ってください。" }] }
            ]
        }
      },
      testimonials: {
          title: "心からの声",
          items: [
              { name: "サラ J.", location: "アメリカ", text: "ヘルナンとの経験は私の人生を変えました。これまで感じたことのないような地球とのつながりを感じました。" },
              { name: "マーク D.", location: "フランス", text: "本物で、力強く、安全です。ヘルナンは薬の真のマスターです。" }
          ]
      },
      contact: {
          title: "お問い合わせ",
          form: { name: "お名前", email: "メールアドレス", message: "メッセージ", submit: "メッセージを送信" },
          info: "私たちはクスコのカルカ近く、ペルーの聖なる谷の中心に位置しています。"
      },
      footer: {
          description: "サンペドロとして知られる聖なるアンデスの植物薬、ワチュマの変容力を体験してください。ペルーの聖なる谷の中心、クスコ近くでのガイド付きセレモニーに参加して、内なる自己と再接続し、深く癒し、精神を目覚めさせましょう。",
          columns: {
              links: { title: "リンク", items: [{label: "私たちについて", href: "/about"}, {label: "コミュニティ", href: "/about"}, {label: "お問い合わせ", href: "/contact"}] },
              reviews: { title: "Googleレビュー", rating: "4.9/5" },
              follow: { title: "フォロー", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "連絡先", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "場所", address: "ペルー、ピサック、ワイナ・ワシ" }
          },
          rights: "無断転載を禁じます。"
      }
  },

  // ARABIC
  [Language.AR]: {
      ui: {
        viewDetails: "عرض التفاصيل",
        inquire: "استفسار",
        contribution: "مساهمة",
        bookRetreat: "حجز هذه الخلوة",
        bookCeremony: "حجز هذا الاحتفال",
        accommodation: "إقامة",
        note: "ملاحظة",
        eventDetails: "تفاصيل الحدث",
        location: "الموقع",
        capacity: "السعة",
        theme: "الموضوع",
        email: "بريد إلكتروني",
        whatsapp: "واتساب",
        connectWithUs: "تواصل معنا",
        featuredExperience: "تجربة مميزة"
      },
      nav: { home: "الرئيسية", about: "العائلة", services: "الاحتفالات", gallery: "المعرض", contact: "اتصل بنا" },
      hero: {
          title: "الطب المقدس في جبال الأنديز",
          subtitle: "تواصل مع باتشاماما من خلال احتفالات ووتشوما التقليدية في الوادي المقدس.",
          cta: "احجز احتفالاً",
          ausangateTeaser: { label: "شامل", title: "رحلة أوسانجاتي", date: "3 يناير 2026" },
          costaRicaTeaser: { label: "حدث خاص", title: "حج كوستاريكا", date: "22-28 يناير 2026" }
      },
      benefits: {
        title: "قوة الواتشوما",
        subtitle: "لماذا نرحل مع الصبار المقدس",
        items: [
            { title: "الشفاء العاطفي", description: "تحرير الصدمات الماضية والعوائق العاطفية المخزنة في الجسم، وإيجاد المغفرة والسلام." },
            { title: "الاتصال بالطبيعة", description: "تجربة وحدة عميقة مع الأرض والعناصر وروح الأنديز الحية." },
            { title: "الوضوح والرؤية", description: "تهدئة العقل لتلقي التوجيه والهدف ومنظور متجدد لمسار حياتك." }
        ]
      },
      about: {
        title: "قابل هيرنان",
        subtitle: "حارس الصبار المقدس",
        description: [
            "<strong>هيرنان كولكي</strong> هو من السكان الأصليين للكيتشوا وميسر مخلص <strong>لاحتفالات ووتشوما (سان بيدرو)</strong>، متجذر بعمق في التقاليد المقدسة للأنديز. ولد على ارتفاع يزيد عن 5000 متر في <strong>فياتشا</strong>، وهي مجتمع مرتفع في <strong>بيساك</strong>، يحمل هيرنان سلالة علاجية طبية تعود إلى عصور ما قبل الإنكا.",
            "وفقًا للتقاليد القديمة، يمكن لطفل واحد فقط في كل جيل أن يرث هذا المسار، ويجب أن يختاره طواعية. انتقلت الحكمة من جده كارمن إلى والده بنينو. من بين سبعة أشقاء، اختار هيرنان الطب في سن مبكرة جدًا، ليصبح الحامل الوحيد لهذا الإرث القديم واتصاله العميق بـ <strong>باتشاماما (الأرض الأم)</strong>.",
            "<strong>سلالة كانا من إسبينار.</strong> ينحدر هيرنان من مقاطعة <strong>إسبينار</strong> وسلالته هي <strong>كانا (K'ana)</strong>. كانت ثقافة كانا مجتمعًا ما قبل الإنكا شكل تحالفًا استراتيجيًا سلميًا مع إمبراطورية الإنكا بدلاً من الغزو النموذجي. من خلال الاندماج السلمي خلال عهد باتشاكوتيك، أصبحوا حلفاء عسكريين حيويين - محاربي النخبة <strong>'سينشيس'</strong> الذين ساعدوا في هزيمة التشانكا. وبسبب هذه المعاملة بالمثل، مُنحوا أراضي في كولاسويو وأعاد الإنكا بناء عاصمتهم القديمة، كاناماركا.",
            "<strong>روح الواتشوما.</strong> يقال إن روح الواتشوما ربطت الناس من هذه المنطقة أولاً واحتفظوا بها في قلوبهم لأن النبات أخبرهم أنه سيختفي من الأرض، وهو ما حدث منذ وقت ليس ببعيد. يحمل هيرنان هذه الذكرى والروح إلى الأمام.",
            "<strong>بيساك وفياتشا.</strong> نحن نقيم في <strong>بيساك</strong>، وهي بلدة نابضة بالحياة في الوادي المقدس، حيث نستضيف الاحتفالات ونقدم إقامة هادئة في <strong>فندق واينا واسي</strong>. من أجل انغماس أعمق، تقام خلواتنا متعددة الأيام في <strong>فياتشا</strong>، وهو مجتمع هادئ عالياً فوق بيساك."
        ]
      },
      services: {
          title: "خدماتنا",
          items: [
            { title: "خلوة لمدة يومين", description: "انغماس عميق في واينا واسي وكينساكوتشا. التكلفة الأساسية 173 دولارًا (شخص واحد). كل شخص إضافي +70 دولارًا. الإقامة +20 دولارًا للشخص. الحد الأقصى 10 أشخاص.", price: "$173+" },
            { title: "احتفال ليوم واحد", description: "رحلة مقدسة لعدد لا يقل عن شخصين. اختبر الطب في مواقع مقدسة مختلفة مثل الآثار القديمة أو البحيرات الهادئة أو الجبال القوية عبر الوادي المقدس.", price: "$250" },
            { title: "حج كوستاريكا", description: "رحلة مقدسة تربط بين جبال الأنديز والمحيط في موقع سري في كوستاريكا. تقتصر على 21 مشاركًا.", price: "استفسر" },
            { title: "شفاء خاص", description: "جلسات فردية مصممة لاحتياجاتك الروحية والعاطفية المحددة. إزالة العوائق العميقة.", price: "استفسر" }
          ],
          ausangateCta: { title: "خلوة خاصة: رحلة أوسانجاتي", description: "انضم إلينا في رحلة تحويلية مدتها 7 أيام إلى جبل أوسانجاتي المقدس. الينابيع الساخنة، والمشي لمسافات طويلة، والعمل الطبي العميق.", button: "عرض خطة الرحلة" }
      },
      ausangate: {
        title: "رحلة أوسانجاتي المقدسة",
        subtitle: "3 يناير 2026 - 7 أيام من الشفاء",
        description: "بعثة عميقة تجمع بين مياه باتشانتا الشافية وحضور أبو أوسانجاتي المهيب والقوة التحويلية للواتشوما والتيمازكال.",
        cta: "احجز مكانك",
        itinerary: [
          { day: "اليوم 1", title: "الوصول والتطهير", description: "السفر إلى باتشانتا. الاسترخاء في المياه الحرارية الطبيعية لتطهير الجسم، يليه المشي لمسافات طويلة نحو أوسانجاتي لتحديد نوايانا." },
          { day: "اليوم 2", title: "احتفال واتشوما الأول", description: "فتح القلب للأبو. احتفال نهاري يربط بروح الجبل وسماء الأنديز الواسعة." },
          { day: "اليوم 3", title: "تيمازكال (كوخ التعرق) ورابي", description: "طقوس حمام البخار التقليدي الذي يمثل رحم الأرض الأم. التخلص من السموم الجسدية والروحية مع طب الرابي المقدس." },
          { day: "اليوم 4", title: "احتفال واتشوما الثاني", description: "تعميق الرحلة. العمل من خلال العوائق الداخلية وتوسيع الوعي في صمت المرتفعات." },
          { day: "اليوم 5", title: "تيمازكال ورابي", description: "حفل كوخ تعرق ثان لتثبيت الطاقات التي تم تلقيها وتطهير الروح أكثر مع الرابي المقدس." },
          { day: "اليوم 6", title: "احتفال واتشوما الثالث والاندماج", description: "حفل الطب النهائي. التركيز على الاندماج والامتنان وختم الشفاء الذي تم تلقيه خلال الأسبوع." },
          { day: "اليوم 7", title: "رحلة العودة", description: "المشي لمسافات طويلة نزولاً من الجبل، ونقع نهائي في ينابيع باتشانتا الساخنة، والنقل مرة أخرى إلى بيساك." }
        ]
      },
      costaRica: {
        title: "الحج المقدس إلى كوستاريكا",
        subtitle: "اتحاد الجبال والمحيط",
        intro: "مناسبة خاصة جداً، لأول مرة في كوستاريكا في مكان سري. اتصال الجبال المقدسة بالمحيط، حج جسدي وروحي خاص يتبع رؤية ورسالة من الطب.",
        description: [
            "انضم إلينا في تجمع تاريخي وتحويلي. لأول مرة، يجلب هيرنان طب الواتشوما المقدس إلى أراضي كوستاريكا النابضة بالحياة.",
            "مسترشدين برؤية عميقة ورسالة مباشرة من الطب، تعد هذه الخلوة حجاً روحياً يربط حكمة جبال الأنديز بالقوة المطهرة للمحيط.",
            "بالإضافة إلى احتفالات واتشوما المقدسة، سنشارك طب الرابي، ونؤدي أعمال التطهير بالزهور، ونرحل عبر تأملات الطب الموجهة.",
            "سنجتمع في مكان سري ومعزول، مغمورين في أحضان الطبيعة. تقتصر هذه التجربة الحميمة بشكل صارم على 21 مشاركًا (بما في ذلك المساعدين) لضمان اهتمام شخصي عميق وحاوية طاقة متماسكة."
        ],
        details: { location: "موقع سري، كوستاريكا", capacity: "محدود بـ 21 روحاً", dates: "22-28 يناير 2026" },
        cta: "طلب دعوة",
        visionTitle: "رؤية من الطب",
        visionText: "هذا التجمع ليس مجرد خلوة؛ إنه استجابة لنداء. تحدث الطب عن ربط الحكمة الموجودة في أعالي الأنديز بالطاقة المتدفقة والمطهرة للمحيط. حج للروح والجسد.",
        themeValue: "المحيط والجبل"
      },
      retreat2Day: {
          title: "خلوة لمدة يومين",
          subtitle: "واينا واسي وكينساكوتشا",
          intro: "انغماس عميق في الطب المقدس، يقام في ملاذ واينا واسي وجبال بيساك القوية.",
          days: [
              { title: "اليوم 1: التحضير والوصول إلى واينا واسي", content: "عند الوصول إلى واينا واسي، سيبدأ المشاركون رحلتهم بالإعداد الاحتفالي للبديدا (مشروب الواتشوما المقدس). تبدأ هذه التجربة رابطة مقدسة مع الطب، مما يمهد الطريق للاستكشاف الداخلي والاتصال. يرشد هيرنان كل مشارك بعناية، ويساعدهم على توضيح نواياهم وفتح قلوبهم لتأثيرات الواتشوما اللطيفة والقوية.", accommodation: "قضاء الليلة في واينا واسي، ملاذ للسلام حيث تكون روح الأنديز حاضرة دائماً." },
              { title: "اليوم 2: احتفال في كينساكوتشا، بيساك", content: "في اليوم الثاني، سنسافر إلى موقع كينساكوتشا الموقر في بيساك، حيث ستشارك في احتفال واتشوما وسط مناظر جبلية خلابة. بتوجيه هيرنان الخبير، سيستكشف المشاركون مناظرهم الطبيعية الداخلية، ويسعون للحصول على رؤى شخصية، ويتلقون التعاليم التي تقدمها واتشوما. مع اختتام الاحتفال، ستسمح دائرة المشاركة الجماعية للمشاركين بمعالجة رحلتهم والتفكير فيها، مما يعزز تأثير الخلوة.", accommodation: "العودة إلى واينا واسي لقضاء ليلة هادئة، واستيعاب التجارب التحويلية لليوم." }
          ],
          conclusion: "سيغادر المشاركون بشعور متجدد بالذات والهدف، متمكنين من تجربة الواتشوما والحكمة الخالدة لباتشاماما."
      },
      retreat1Day: {
          title: "احتفال ليوم واحد",
          subtitle: "المواقع المقدسة في الوادي",
          intro: "رحلة مركزة وعميقة في الطب، تقام في مواقع مقدسة مختلفة مثل الآثار القديمة أو البحيرات الهادئة أو الجبال القوية.",
          days: [
              { title: "الاحتفال", content: "نبدأ في الصباح الباكر بالسفر إلى موقع مقدس مختار بعناية في الوادي المقدس (مثل بوماماركا أو كينساكوتشا أو غيرها من أماكن القوة). الاحتفال هو مشاركة ليوم كامل مع الطب والطبيعة والذات. يوفر هيرنان التوجيه، ويحفظ المساحة للشفاء العميق والاتصال. تنتهي التجربة في وقت متأخر من بعد الظهر.", accommodation: "الإقامة غير مشمولة، ولكن يتم ترتيب النقل من وإلى الموقع." }
          ],
          conclusion: "إعادة ضبط قوية وإعادة اتصال بالعالم الطبيعي، مما يتركك بوضوح وقلب أخف.",
          details: { durationLabel: "المدة", durationValue: "يوم كامل (من الصباح إلى بعد الظهر)", locationLabel: "الموقع", locationValue: "مواقع الوادي المقدس", focusLabel: "التركيز", focusValue: "الاتصال والوضوح" }
      },
      preparation: {
        title: "التحضير لخلوة سان بيدرو الخاصة بك",
        subtitle: "تمكين مستقبل مجتمع الأنديز",
        intro: "مرحبًا بك في خلوة سان بيدرو التحويلية لمدة ثلاثة أيام! للاستفادة القصوى من هذه التجربة، ندعوك لتحضير نفسك جسديًا وعقليًا مسبقًا. إليك دليل لضمان رحلة ذات مغزى.",
        diet: {
            title: "التحضير: نظام غذائي خفيف وتحديد النوايا",
            description: "قبل الخلوة، يمكن أن يساعد النظام الغذائي الخفيف والنظيف على فتح جسمك وعقلك للتجربة. إليك بعض الاقتراحات لاتباعها لمدة 3-5 أيام على الأقل قبل الوصول:",
            items: [
                { label: "نظام غذائي نباتي", text: "تجنب اللحوم والمنتجات الحيوانية لأنها يمكن أن تثقل كاهل الجهاز الهضمي." },
                { label: "بدون سكريات مضافة", text: "امتنع عن تناول السكريات المصنعة للحفاظ على توازن طاقتك." },
                { label: "الحد من المنبهات", text: "قلل أو تخلص من الكافيين والكحول والمنبهات الأخرى للمساعدة في تصفية ذهنك وجسمك." },
                { label: "تجنب الأطعمة الثقيلة", text: "تخلص من الأطعمة المقلية ومنتجات الألبان لعملية هضم أسهل." },
                { label: "الترطيب", text: "اشرب الكثير من الماء للمساعدة في الوضوح والرفاهية العامة." },
                { label: "النوايا", text: "بعد النظام الغذائي، خصص بعض الوقت كل يوم لتحديد نوايا الخلوة. سواء من خلال الكتابة في اليوميات أو التأمل أو التفكير الهادئ، استمع إلى ما تأمل في اكتسابه أو تحريره من خلال هذه الرحلة." }
            ]
        },
        packing: {
            title: "يوم الاحتفال",
            description: "في يوم الاحتفال، الذي سيقام في اليوم الثاني من الخلوة، نوصي بإحضار بعض الأغراض الشخصية التي يمكن أن تعزز اتصالك وتساهم في الفضاء المقدس.",
            items: [
                { label: "ارتداء ملابس مريحة", text: "ارتد ملابس فضفاضة ومريحة مناسبة للهواء الطلق." },
                { label: "قبعة شمسية", text: "بما أن الاحتفال سيقام في الخارج، أحضر قبعة لحماية نفسك من الشمس." },
                { label: "إحضار قربان", text: "من المعتاد إحضار الفواكه والزهور كقرابين للاحتفال. ترمز هذه البادرة إلى الامتنان والاتصال بالطبيعة." },
                { label: "زجاجة ماء", text: "البقاء رطبًا طوال اليوم أمر ضروري." },
                { label: "دفتر وقلم", text: "قد تشعر بالإلهام للكتابة في اليوميات بعد الاحتفال لالتقاط الأفكار أو الرؤى أو العواطف." }
            ]
        },
        suggestions: {
            title: "اقتراحات إضافية للخلوة",
            description: "لتحسين رحلتك، ضع في اعتبارك ما يلي:",
            items: [
                { label: "احترام وقت الصمت", text: "استخدم فترات الصمت للتفكير ومعالجة تجربتك." },
                { label: "التنفس والتأمل", text: "يمكن أن تساعد تمارين التنفس اللطيفة أو التأمل في تثبيتك وإبقائك متمركزًا." },
                { label: "الديتوكس الرقمي", text: "افصل عن الهواتف والأجهزة الإلكترونية الأخرى، مما يسمح لك بأن تكون حاضرًا تمامًا." },
                { label: "تواصل مع الطبيعة", text: "إذا أمكن، اقض بعض الوقت في الطبيعة كل يوم، ودعها تدعم رحلتك الداخلية." }
            ]
        },
        closing: "من خلال التحضير بوعي والبقاء منفتحًا، ستخلق مساحة لطب سان بيدرو لإرشادك في مسار عميق من الاكتشاف. نتطلع إلى مشاركة هذه التجربة الخاصة معك.",
        risks: {
            title: "إشعار هام: فهم المخاطر والمسؤوليات",
            intro: "بينما تم تصميم هذه الخلوة لتقديم تجربة آمنة وتحويلية، من المهم الاعتراف بأن المشاركة في احتفال سان بيدرو تنطوي على مخاطر جسدية ونفسية. يرجى مراجعة الاعتبارات التالية بعناية لضمان المشاركة المستنيرة:",
            sections: [
                { title: "الكشف الطبي والصحي", items: [{ label: "الحالات الطبية", text: "يجب على المشاركين إبلاغ الميسرين بأي حالات طبية، بما في ذلك مشاكل القلب أو حالات الصحة العقلية أو أي تاريخ من النوبات. قد تزيد بعض الحالات الموجودة مسبقًا من المخاطر المرتبطة بتجربة سان بيدرو." }, { label: "الأدوية", text: "قد يكون لبعض الأدوية، بما في ذلك مضادات الاكتئاب ومضادات الذهان وبعض الأدوية التي لا تستلزم وصفة طبية، تفاعلات ضارة مع سان بيدرو. يرجى الكشف عن أي أدوية للميسرين قبل الخلوة بوقت طويل." }, { label: "الحساسية الجسدية", text: "يمكن أن يسبب سان بيدرو تأثيرات جسدية مؤقتة، مثل الغثيان والقيء وزيادة معدل ضربات القلب. يجب أن يكون المشاركون مستعدين جسديًا وعقليًا لهذه التأثيرات." }] },
                { title: "المخاطر النفسية والمسؤولية العاطفية", items: [{ label: "تجارب مكثفة", text: "يمكن لسان بيدرو أن يبرز مشاعر عميقة وصدمات ماضية، والتي قد يكون من الصعب معالجتها. يتم تشجيع المشاركين على الانخراط في التفكير الشخصي أو طلب التوجيه المهني مسبقًا إذا كان لديهم تاريخ من الصدمة." }, { label: "دعم التكامل", text: "بعد الخلوة، قد يستفيد المشاركون من دعم إضافي لدمج تجاربهم. يُنصح بالتخطيط للوقت والدعم والموارد لمعالجة أي رؤى أو عواطف تنشأ." }] },
                { title: "المسؤولية الشخصية", items: [{ label: "الموافقة المستنيرة", text: "من خلال المشاركة في هذه الخلوة، فإنك تقر بأنك تشارك طواعية في هذه التجربة. أي رؤى أو تحديات أو تحولات شخصية تواجهها هي مسؤوليتك الخاصة." }, { label: "احتياطات السلامة", text: "اتبع جميع إرشادات السلامة المقدمة من الميسرين، بما في ذلك القيود الغذائية والسلوك المقترح أثناء الاحتفالات والقيود المفروضة على الأنشطة البدنية." }] }
            ]
        }
      },
      testimonials: {
          title: "أصوات من القلب",
          items: [
              { name: "سارة ج.", location: "الولايات المتحدة", text: "غيرت تجربتي مع هيرنان حياتي. شعرت باتصال بالأرض لم أشعر به من قبل." },
              { name: "مارك د.", location: "فرنسا", text: "أصيل وقوي وآمن. هيرنان هو سيد حقيقي للطب." }
          ]
      },
      contact: {
          title: "تواصل معنا",
          form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", submit: "إرسال الرسالة" },
          info: "نحن موجودون في قلب الوادي المقدس، بالقرب من كالكا، كوسكو."
      },
      footer: {
          description: "اختبر القوة التحويلية للواتشوما، طب النباتات الأنديزي المقدس المعروف باسم سان بيدرو. انضم إلى هيرنان في احتفالات موجهة ستساعدك على إعادة الاتصال بذاتك الداخلية، والشفاء بعمق، وإيقاظ روحك بالقرب من كوسكو، في قلب الوادي المقدس في بيرو.",
          columns: {
              links: { title: "روابط", items: [{label: "عنا", href: "/about"}, {label: "المجتمع", href: "/about"}, {label: "اتصل بنا", href: "/contact"}] },
              reviews: { title: "مراجعات جوجل", rating: "4,9/5" },
              follow: { title: "تابعنا", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "اتصل بنا", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "ابحث عنا", address: "واينا واسي، بيساك، بيرو" }
          },
          rights: "جميع الحقوق محفوظة."
      }
  },

  // SANSKRIT (Detailed reconstruction)
  [Language.SA]: {
      ui: {
        viewDetails: "विवरणं पश्यतु",
        inquire: "पृच्छतु",
        contribution: "योगदानम्",
        bookRetreat: "शिबिरं आरक्षयतु",
        bookCeremony: "संस्कारं आरक्षयतु",
        accommodation: "आवासः",
        note: "टिप्पणी",
        eventDetails: "आयोजन-विवरणम्",
        location: "स्थानम्",
        capacity: "क्षमता",
        theme: "विषयः",
        email: "ई-पत्रम्",
        whatsapp: "व्हाट्सएप्प",
        connectWithUs: "अस्माभिः सह सम्बद्ध्यताम्",
        featuredExperience: "विशेष अनुभवः"
      },
      nav: { home: "गृहम्", about: "परिवारः", services: "उत्सवाः", gallery: "चित्रवीथिका", contact: "सम्पर्कः" },
      hero: {
          title: "अण्डीज-पर्वतानां पवित्रम् औषधम्",
          subtitle: "पवित्र-उपत्यकायाम् पारम्परिक-वाचुमा-उत्सवैः सह पचमामायाः सह पुनः संयोगं कुरुत.",
          cta: "उत्सवं आरक्षयतु",
          ausangateTeaser: { label: "सम्पूर्ण", title: "औसंगते यात्रा", date: "३ जनवरी २०२६" },
          costaRicaTeaser: { label: "विशेष आयोजन", title: "कोस्टारिका तीर्थयात्रा", date: "२२-२८ जनवरी २०२६" }
      },
      benefits: {
        title: "वाचुमायाः शक्तिः",
        subtitle: "किमर्थं वयं पवित्र-कैक्टस् सह यात्रां कुर्मः",
        items: [
            { title: "भावनात्मक चिकित्सा", description: "शरीरे सञ्चिताः पूर्व-आघाताः भावनात्मक-अवरोधाः च मुञ्चतु, क्षमां शान्तिं च प्राप्नोतु।" },
            { title: "प्रकृत्या सह सम्बन्धः", description: "पृथिव्या, तत्त्वैः, अण्डीज-पर्वतानां जीवन्त-आत्मना सह च गभीरं ऐक्यं अनुभवतु।" },
            { title: "स्पष्टता दृष्टिः च", description: "मार्गदर्शनं, उद्देश्यं, जीवन-मार्गस्य नवीन-दृष्टिकोणं च प्राप्तुं मनः शान्तं कुरुत।" }
        ]
      },
      about: {
        title: "हर्नान् महोदयं जानन्तु",
        subtitle: "पवित्र-कैक्टस् रक्षकः",
        description: [
            "<strong>हर्नान् कोल्के</strong> एकः केचुआ देशीयः तथा <strong>वाचुमा (सान पेड्रो) उत्सवानां</strong> समर्पितः सुगमकर्ता अस्ति, यः अण्डीज-पर्वतानां पवित्र-परम्परासु गभीर-रूपेण निहितः अस्ति। <strong>पिसाक्</strong> नगरस्य उच्च-समुदाये <strong>विआचा</strong> ग्रामे ५००० मीटर् उपरि जातः, हर्नान् एकं औषधीय-चिकित्सा-वंशं वहति यः इन्का-पूर्व-कालात् आरभ्यते।",
            "पैतृक-परम्परानुसारं, प्रत्येकं पीढ्यां केवलं एकः एव शिशुः इमं मार्गं उत्तराधिकारित्वेन प्राप्तुं शक्नोति, तथा च तेन स्वेच्छया एतत् चयनीयम्। ज्ञानं तस्य पितामहात् कार्मनात् तस्य पितुः बेनिन्हो प्रति प्राप्तम्। सप्त-सहोदराणां मध्ये, हर्नान् अतीव अल्पायुषि औषधं चतवान्, अस्य प्राचीन-परम्परायाः तथा <strong>पचमामायाः (मातृ-पृथिव्याः)</strong> सह तस्य गभीर-सम्बन्धस्य एकमात्र-वाहकः अभवत्।",
            "<strong>एस्पिनार् तः क्काना वंशः।</strong> हर्नान् <strong>एस्पिनार् प्रन्तात्</strong> आगच्छति तथा च तस्य वंशः <strong>क्काना (K'ana)</strong> अस्ति। क्काना संस्कृतिः एका इन्का-पूर्व-समाजा आसीत् या इन्का-साम्राज्येन सह शान्तिपूर्णं रणनीतिकं गठबन्धनं कृतवती। पाचाकुटेक्-शासने शान्तिपूर्ण-रूपेण विलीनं भूत्वा, ते महत्त्वपूर्णाः सैन्य-मित्रराष्ट्राः अभवन् - उच्च-स्तरीय <strong>'सिञ्चिस'</strong> योद्धाः ये चान्कास्-जनान् पराजयितुं साहाय्यं कृतवन्तः। अस्य पारस्परिकतायाः कारणात्, तेभ्यः कोलासुयो-प्रदेशे भूमिः दत्ता तथा च तेषां प्राचीन-राजधानी, कानामारका, इन्का-जनैः पुनः निर्मिता।",
            "<strong>वाचुमायाः आत्मा।</strong> कथ्यते यत् वाचुमायाः आत्मा प्रथमं अस्य क्षेत्रस्य जनान् संयोजयति स्म तथा च ते तत् हृदये रक्षितवन्तः यतोहि पादपः तान् उक्तवान् यत् सः भूमेश् नश्यति, यत् नातिचिरं पूर्वं अभवत्। हर्नान् इमां स्मृतिं आत्मानं च अग्रे नयति।",
            "<strong>पिसाक् तथा विआचा।</strong> वयं पवित्र-उपत्यकायाः एकस्मिन् जीवन्त-नगरे <strong>पिसाक्</strong> मध्ये स्थिताः स्मः, यत्र वयं उत्सवान् आयोजयामः तथा च <strong>वायना वसि होटेल्</strong> मध्ये शान्तं आवासं दद्मः। गभीर-निमज्जनाय, अस्माकं बहु-दिवसीय-शिबिराणि पिसाक्-नगरात् उपरि एकस्मिन् शान्त-समुदाये <strong>विआचा</strong> मध्ये आयोज्यन्ते।"
        ]
      },
      services: {
          title: "अस्माकं प्रदानान",
          items: [
            { title: "२ दिवसीय शिबिरम्", description: "वयना वसि तथा किन्साकोच इत्यत्र गभीरं निमज्जनम्। मूल व्ययः $173 (१ जनः)। प्रत्येकं अतिरिक्तः जनः +$70। आवासः +$20 प्रति जनम्। अधिकतमं १० जनाः।", price: "$173+" },
            { title: "१ दिवसीय संस्कारः", description: "न्यूनतमं २ जनानां कृते पवित्रा यात्रा। पवित्र-उपत्यकायाः विविध-पवित्र-स्थलेषु यथा प्राचीन-भग्नावशेषेषु, शान्त-सरोवरेषु, शक्तिशालि-पर्वतेषु वा औषधस्य अनुभवं कुर्वन्तु।", price: "$250" },
            { title: "कोस्टारिका तीर्थयात्रा", description: "कोस्टारिका देशे एकस्मिन् गुप्त-स्थाने अण्डीज-पर्वतानां समुद्रस्य च संयोग-कारिणी पवित्रा यात्रा। २१ प्रतिभागिनां कृते सीमितम्।", price: "पृच्छतु" },
            { title: "व्यक्तिगत चिकित्सा", description: "भवतः विशिष्ट-आध्यात्मिक-भावनात्मक-आवश्यकताभ्यः अनुकूलिताः एकैकं सत्रम्। गभीर-अवरोध-निवारणम्।", price: "पृच्छतु" }
          ],
          ausangateCta: { title: "विशेष शिबिरम्: औसंगते अभियानम्", description: "पवित्र पर्वत औसंगते प्रति ७ दिवसानां परिवर्तनकारी यात्रायां अस्माभिः सह आगच्छन्तु। उष्ण-जले स्नानं, पदयात्रा, गभीर-औषध-कार्यं च।", button: "यात्राक्रमं पश्यतु" }
      },
      ausangate: {
        title: "औसंगते पवित्रा यात्रा",
        subtitle: "३ जनवरी २०२६ - ७ दिवसानां चिकित्सा",
        description: "पच्छान्तायाः चिकित्सा-जलानाम्, अपु-औसंगते-पर्वतस्य भव्य-उपस्थितेः, तथा वाचुमा-तेमाज्कल्-योः परिवर्तनकारी-शक्तेः च संयोग-कारिणी गभीरा यात्रा।",
        cta: "स्थानं आरक्षयतु",
        itinerary: [
          { day: "दिवसः १", title: "आगमनं शुद्धिकरणं च", description: "पच्छान्ता प्रति यात्रा। शरीरं शुद्धं कर्तुं प्राकृतिक-उष्ण-जले विश्रामः, तदनन्तरं अस्माकं सङ्कल्पान् स्थापयितुं औसंगते प्रति पदयात्रा।" },
          { day: "दिवसः २", title: "प्रथमः वाचुमा उत्सवः", description: "अपु प्रति हृदयस्य उद्घाटनम्। पर्वतस्य आत्मना तथा विशाल-अण्डीज-आकाशेन सह संयोग-कारी दिवा उत्सवः।" },
          { day: "दिवसः ३", title: "तेमाज्कल् (स्वेद-कुटी) & रापे", description: "मातृ-पृथिव्याः गर्भं निरूपयन् परम्परागतः वाष्प-स्नान-संस्कारः। पवित्र-रापे-औषधेन सह शारीरिक-आध्यात्मिक-शुद्धिकरणम्।" },
          { day: "दिवसः ४", title: "द्वितीयः वाचुमा उत्सवः", description: "यात्रां गभीरीकरणम्। उच्च-भूमीनां मौने आन्तरिक-अवरोधानां निवारणं तथा चेतनायाः विस्तारः।" },
          { day: "दिवसः ५", title: "तेमाज्कल् & रापे", description: "प्राप्त-ऊर्जां स्थापयितुं तथा पवित्र-रापे-औषधेन आत्मानं पुनः शुद्धं कर्तुं द्वितीयः वाष्प-स्नान-संस्कारः।" },
          { day: "दिवसः ६", title: "तृतीयः वाचुमा & एकीकरणम्", description: "अन्तिमः औषध-उत्सवः। एकीकरणे, कृतज्ञतायां, तथा सप्ताहे प्राप्त-चिकित्सायाः मुद्रणे ध्यानम्।" },
          { day: "दिवसः ७", title: "प्रत्यागमनम्", description: "पर्वतात् अवरोहणम्, पच्छान्ता-उष्ण-जले अन्तिमं स्नानं, तथा पिसाक् प्रति प्रत्यागमनम्।" }
        ]
      },
      costaRica: {
        title: "कोस्टारिका प्रति पवित्र तीर्थयात्रा",
        subtitle: "पर्वताः समुद्रः च मिलितौ",
        intro: "अतीव विशेषः अवसरः, कोस्टारिका देशे गुप्त-स्थाने प्रथमवारम्। पवित्र-पर्वतानां समुद्रेण सह संयोगः, औषधात् प्राप्तं दृष्टिं सन्देशं च अनुसरन्ती विशेष-शारीरिक-आध्यात्मिक-तीर्थयात्रा।",
        description: [
            "अस्मिन् ऐतिहासिके परिवर्तनकारिणि च सम्मेलने अस्माभिः सह आगच्छन्तु। प्रथमवारं, हर्नान् कोस्टारिका देशस्य जीवन्त-भूमिषु पवित्रं वाचुमा-औषधं आनयति।",
            "गभीर-दृष्ट्या औषधात् प्रत्यक्ष-सन्देशेन च मार्गदर्शिता, इयं तीर्थयात्रा अण्डीज-पर्वतानां ज्ञानं समुद्रस्य शुद्धिकरण-शक्त्या सह संयोजयति।",
            "पवित्र-वाचुमा-उत्सवानां अतिरिक्पं, वयं रापे-औषधं विभजिष्यामः, पुष्पैः सह शुद्धिकरण-कार्यं करिष्यामः, तथा मार्गदर्शित-औषध-ध्यानेन यात्रां करिष्यामः।",
            "वयं प्रकृतेः आलिङ्गाने निमग्नाः, एकस्मिन् गुप्त-निर्जन-स्थाने मिलिष्यामः। गभीर-व्यक्तिगत-ध्यानं तथा सुसंगत-ऊर्जा-पात्रं सुनिश्चितं कर्तुं एषः अन्तरंग-अनुभवः कठोरतापूर्वकं २१ प्रतिभागिनां (सहायकान् सहित) कृते सीमितः अस्ति।"
        ],
        details: { location: "गुप्त स्थानम्, कोस्टारिका", capacity: "२१ जनानां कृते सीमितम्", dates: "२२-२८ जनवरी २०२६" },
        cta: "आमन्त्रणं याचताम्",
        visionTitle: "औषधात् दृष्टिः",
        visionText: "इदं सम्मेलनं केवलं शिबिरं नास्ति; इदं आह्वानस्य उत्तरम् अस्ति। औषधं उच्च-अण्डीज-पर्वतेषु रक्षितं ज्ञानं समुद्रस्य शुद्धिकरण-प्रवाह-शक्त्या सह संयोजयितुं उक्तवान्। आत्मनः शरीरस्य च तीर्थयात्रा।",
        themeValue: "समुद्रः पर्वतः च"
      },
      retreat2Day: {
          title: "२ दिवसीय शिबिरम्",
          subtitle: "वयना वसि & किन्साकोच",
          intro: "पवित्र-औषधे गभीरं निमज्जनम्, यत् वयना वसि अभयारण्ये तथा पिसाक्-नगरस्य शक्तिशालि-पर्वतेषु आयोजितं भवति।",
          days: [
              { title: "दिवसः १: वयना वसि इत्यत्र आगमनं सज्जता च", content: "वयना वसि इत्यत्र आगमने, प्रतिभागिनः बेदिदा (पवित्र वाचुमा पेयम्) इत्यस्य औपचारिक-सज्जतायाः सह स्व-यात्रां आरप्स्यन्ते। एषः अनुभवः औषधेन सह पवित्र-बन्धं आरभते, आन्तरिक-अन्वेषणाय संयोगाय च रङ्गमञ्चं स्थापयति। हर्नान् प्रत्येकं प्रतिभागिनं ध्यानेन मार्गदर्शयति, तेषां सङ्कल्पान् स्पष्टीकर्तुं तथा वाचुमायाः मृदु-किन्तु-शक्तिशालि-प्रभावान् प्रति हृदयं उद्घाटयितुं साहाय्यं करोति।", accommodation: "वयना वसि इत्यत्र रात्रिं यापयन्तु, यत् शान्तेः अभयारण्यं अस्ति यत्र अण्डीज-पर्वतानां आत्मा सर्वदा विद्यते।" },
              { title: "दिवसः २: किन्साकोच, पिसाक् इत्यत्र संस्कारः", content: "द्वितीये दिवसे, वयं पिसाक् नगरे किन्साकोच इति पूजित-स्थलं प्रति गमिष्यामः, यत्र भवान् आश्चर्यजनक-पर्वत-दृश्यानां मध्ये वाचुमा-उत्सवे भागं ग्रहीष्यति। हर्नान् महोदयस्य अनुभवी-मार्गदर्शनेन, प्रतिभागिनः स्व-आन्तरिक-दृश्यान् अन्वेषिष्यन्ति, व्यक्तिगत-अन्तर्दृष्टिं अन्वेषिष्यन्ति, तथा वाचुमा यत् शिक्षणं ददाति तत् प्राप्स्यन्ति। यदा उत्सवः समाप्तः भवति, तदा समूह-साझाकरण-मण्डलं प्रतिभागिनः स्व-यात्रां संसाधितुं विचारयितुं च अनुमन्यते, यत् शिबिरस्य प्रभावं वर्धयति।", accommodation: "दिवसस्य परिवर्तनकारि-अनुभवान् अवशोष्य, शान्त-रात्रये वयना वसि प्रति प्रत्यागमनम्।" }
          ],
          conclusion: "प्रतिभागिनः आत्मनः उद्देश्यस्य च नवीकेन भावनया सह गमिष्यन्ति, वाचुमा-अनुभवेन तथा पचमामायाः कालातीत-ज्ञानेन च सशक्ताः।"
      },
      retreat1Day: {
          title: "१ दिवसीय संस्कारः",
          subtitle: "पवित्र उपत्यकायाः पवित्र स्थलानि",
          intro: "औषधे केन्द्रितः गभीरः च प्रवासः, यः विविध-पवित्र-स्थलेषु यथा प्राचीन-भग्नावशेषेषु, शान्त-सरोवरेषु, शक्तिशालि-पर्वतेषु वा आयोजितः भवति।",
          days: [
              { title: "संस्कारः", content: "वयं प्रातःकाले शीघ्रं, पवित्र-उपत्यकायाम् (यथा पुमामारका, किन्साकोच, अन्येषु शक्ति-स्थलेषु वा) एकं सावधानीपूर्वकं चयनितं पवित्र-स्थलं प्रति यात्रां आरभामहे। उत्सवः औषधेन, प्रकृत्या, आत्मना च सह पूर्ण-दिवसीयः बन्धः अस्ति। हर्नान् मार्गदर्शनं ददाति, गभीर-चिकित्सायाः संयोगस्य च कृते स्थानं धारयति। अनुभवः अपराह्णे समाप्तः भवति।", accommodation: "आवासः न समाविष्टः, किन्तु स्थलं प्रति गमनागमनं व्यवस्थितं भवति।" }
          ],
          conclusion: "प्राकृतिक-जगता सह शक्तिशालि पुनःसंयोगः, स्पष्टतायाः सह तथा लघु-हृदयेन सह गमनम्।",
          details: { durationLabel: "कालः", durationValue: "पूर्ण दिवसः (प्रातःकालात् अपराह्णपर्यन्तम्)", locationLabel: "स्थानम्", locationValue: "पवित्र उपत्यका स्थलानि", focusLabel: "ध्यानम्", focusValue: "सम्बन्धः स्पष्टता च" }
      },
      preparation: {
        title: "भवतः सान पेड्रो शिबिराय सज्जता",
        subtitle: "अण्डीज-समुदायस्य भविष्यं सशक्तं कुरुत",
        intro: "भवतः परिवर्तनकारिणि त्रि-दिवसीय सान पेड्रो शिबिरे स्वागतम्! अस्य अनुभवस्य पूर्णं लाभं प्राप्तुं, कृपया पूर्वमेव शारीरिक-मानसिक-रूपेण आत्मानं सज्जं कुर्वन्तु। अत्र एकः मार्गदर्शिका अस्ति।",
        diet: {
            title: "सज्जता: लघु आहारः सङ्कल्पाः च",
            description: "शिबिरात् पूर्वं, लघुः शुद्धः च आहारः भवतः शरीरं मनः च अनुभवं प्रति उद्घाटयितुं साहाय्यं कर्तुं शक्नोति। अत्र आगमनात् न्यूनातिन्यूनं ३-५ दिवसपूर्वम् अनुसरणं कर्तुं कानिचन सुझावः सन्ति:",
            items: [
                { label: "शाकाहारी आहारः", text: "मांसं पशूत्पादान् च वर्जयतु यतोहि ते पाचनतन्त्रे भारं जनयितुं शक्नुवन्ति।" },
                { label: "शर्करा नास्ति", text: "भवतः ऊर्जां सन्तुलितं रक्षितुं संसाधित-शर्करायाः सेवनात् विरमतु।" },
                { label: "उत्तेजकानि न्यूनीकरोतु", text: "भवतः मनः शरीरं च स्वच्छं कर्तुं साहाय्यं कर्तुं कैफीन्, मद्यं, अन्य-उत्तेजकानि च न्यूनीकरोतु अथवा निष्कासयतु।" },
                { label: "गुरु आहारं वर्जयतु", text: "सरल-पाचनाय भर्जित-भोजनानि दुग्ध-उत्पादान् च निष्कासयतु।" },
                { label: "जलपानम्", text: "स्पष्टतायाः समग्र-कल्याणस्य च साहाय्यार्थं प्रभूतं जलं पिबतु।" },
                { label: "सङ्कल्पाः", text: "आहारात् परं, शिबिराय सङ्कल्पान् स्थापयितुं प्रतिदिनं किञ्चित् समयं यच्छतु। दैनंदिनी-लेखनेन, ध्यानेन, शान्त-चिन्तनेन वा, भवान् अस्याः यात्रायाः माध्यमेन यत् प्राप्तुं वा मोचयितुं वा आशां करोति तस्मिन् ध्यानं ददातु।" }
            ]
        },
        packing: {
            title: "संस्कारस्य दिवसः",
            description: "संस्कारस्य दिवसे, यः शिबिरस्य द्वितीये दिवसे भविष्यति, वयं कानिचन व्यक्तिगत-वस्तूनि आनेतुं अनुशंसां कुर्मः यानि भवतः सम्बन्धं वर्धयितुं शक्नुवन्ति तथा पवित्र-स्थाने योगदानं दातुं शक्नुवन्ति।",
            items: [
                { label: "सुखदाः वस्त्राणि", text: "बहिः उपयुक्तं शिथिलं, सुखदं वस्त्रं धारयतु।" },
                { label: "सूर्य-टोपिका", text: "यतोहि उत्सवः बहिः भविष्यति, अतः सूर्यात् आत्मानं रक्षतुं टोपिकां आनयतु।" },
                { label: "उपहारः आनयतु", text: "उत्सवाय उपहाररूपेण फलानि पुष्पाणि च आनयनं प्रथा अस्ति। एषः हावभावः कृतज्ञतां प्रकृत्या सह सम्बन्धं च प्रतियति।" },
                { label: "जल-कूपी", text: "दिनभरं जलयुक्तः स्थातुं आवश्यकम् अस्ति।" },
                { label: "टिप्पणी-पुस्तिका लेखनी च", text: "विचारान्, अन्तर्दृष्टीः, भावनाः वा ग्रहीतुं संस्कारात् परं दैनंदिनीं लिखितुं भवान् प्रेरितः भवितुम् अर्हति।" }
            ]
        },
        suggestions: {
            title: "शिबिराय अतिरिक्ताः सुझावः",
            description: "भवतः यात्रां वर्धयितुं, निम्नलिखितं विचारयतु:",
            items: [
                { label: "मौनस्य आदरं कुरुत", text: "भवतः अनुभवं विचारयितुं संसाधितुं च मौन-अवधीनां उपयोगं कुरुत।" },
                { label: "प्राणायामः ध्यानं च", text: "मृदु-श्वसन-व्यायामाः ध्यानं वा भवंतं भूमिसंलग्नं कर्तुं केन्द्रितं च रक्षितुं साहाय्यं कर्तुं शक्नोति।" },
                { label: "डिजिटल-विरामः", text: "दूरवाणीभ्यः अन्य-इलेक्ट्रॉनिक-उपकरणेभ्यः च विच्छिन्नः भवतु, येन भवान् पूर्णतया उपस्थितः भवितुं शक्नोति।" },
                { label: "प्रकृत्या सह सम्बन्धः", text: "यदि शक्यं चेत्, प्रतिदिनं प्रकृतौ समयं यापयतु, तस्याः भवतः आन्तरिक-यात्रायां साहाय्यं कर्तुं अनुमतिं ददातु।" }
            ]
        },
        closing: "सचेतनेन सज्जतायाः माध्यमेन तथा मुक्तेन स्थित्वा, भवान् सान पेड्रो औषधस्य कृते अन्वेषणस्य गभीर-मार्गे भवंतं मार्गदर्शयितुं स्थानं रचयति। वयं भवता सह इमं विशेष-अनुभवं साझां कर्तुं उत्सुकाः स्मः।",
        risks: {
            title: "महत्वपूर्णं सूचना: जोखिमानां दायित्वानां च अवगमनम्",
            intro: "यद्यपि इदं शिबिरं सुरक्षितं परिवर्तनकारि-अनुभवं प्रदातुं परिकल्पितं अस्ति, तथापि एतत् स्वीकरणं महत्त्वपूर्णं अस्ति यत् सान पेड्रो उत्सवे भागग्रहणे शारीरिक-मानसिक-जोखिमाः सन्ति। कृपया सूचित-भागग्रहणं सुनिश्चितं कर्तुं निम्नलिखित-विचारान् सावधानीपूर्वकं पश्यतु:",
            sections: [
                { title: "स्वास्थ्यं तथा चिकित्सा प्रकटीकरणम्", items: [{ label: "चिकित्सा-स्थितिः", text: "प्रतिभागिभिः सुगमकर्तृभ्यः कस्यापि चिकित्सा-स्थितेः विषयं सूचनीयं, यत्र हृदय-समस्याः, मानसिक-स्वास्थ्य-स्थितयः, अथवा मूर्छायाः इतिहासः अन्तर्भवति। काश्चन पूर्व-विद्यमानाः स्थितयः सान पेड्रो अनुभवेन सह सम्बद्धानां जोखिमानां वर्धनं कर्तुं शक्नुवन्ति।" }, { label: "औषधानि", text: "केचन औषधानि, यत्र अवसाद-विरोधिनः, मनोविकृति-विरोधिनः, तथा च कानिचन सामान्य-औषधानि सन्ति, सान पेड्रो औषधेन सह प्रतिकूल-अन्तक्रियाः कर्तुं शक्नुवन्ति। कृपया शिबिरात् बहु पूर्वं सुगमकर्तृभ्यः कानि अपि औषधानि प्रकटयतु।" }, { label: "शारीरिक संवेदनशीलता", text: "सान पेड्रो अस्थायी-शारीरिक-प्रभावान् जनयितुं शक्नोति, यथा वमनम्, वमन-इच्छा, तथा हृदय-स्पन्दनस्य वर्धनम्। प्रतिभागिनः एतेषां प्रभावानां कृते शारीरिक-मानसिक-रूपेण सज्जाः भवेयुः।" }] },
                { title: "मानसिक जोखिमाः तथा भावनात्मक उत्तरदायित्वम्", items: [{ label: "तीव्र अनुभवाः", text: "सान पेड्रो गभीर-भावनाः पूर्व-आघातान् च उपरि आनेतुं शक्नोति, येषां संसाधनं कठिनं भवितुम् अर्हति। प्रतिभागिनः व्यक्तिगत-चिन्तने प्रवृत्ताः भवितुं अथवा यदि तेषां आघातस्य इतिहासः अस्ति तर्हि पूर्वमेव व्यावसायिक-मार्गदर्शनं प्राप्तुं प्रोत्साह्यन्ते।" }, { label: "एकीकरण समर्थनम्", text: "शिबिरात् परं, प्रतिभागिनः स्व-अनुभवान् एकीकृतुं अतिरिक्त-समर्थनात् लाभं प्राप्तुं शक्नुवन्ति। उत्पद्यमानानां कासामपि अन्तर्दृष्टीनां भावनानां वा संसाधनाय समयं, समर्थनं, संसाधनानां च योजनां कर्तुं परामर्शः दीyate।" }] },
                { title: "व्यक्तिगत उत्तरदायित्वम्", items: [{ label: "सूचित-सम्मतिः", text: "अस्मिन् शिबिरे भागं गृहीत्वा, भवान् स्वीकरोति यत् भवान् स्वेच्छया अस्मिन् अनुभवे प्रवृत्तः अस्ति। भवान् यत्किमपि अन्तर्दृष्टिं, आव्हानानि, अथवा व्यक्तिगत-परिवर्तनं अनुभवति तत् भवतः स्वस्य उत्तरदायित्वं अस्ति।" }, { label: "सुरक्षा-सावधानयः", text: "सुगमकर्तृभिः प्रदत्तानां सर्वासां सुरक्षा-मार्गदर्शिकानां पालनं कुर्वन्तु, यत्र आहार-प्रतिबन्धाः, उत्सवानां समये सुझावित-व्यवहारः, तथा शारीरिक-क्रियाकलापानां सीमाः अन्तर्भवन्ति।" }] }
            ]
        }
      },
      testimonials: {
          title: "हृदयस्य स्वराः",
          items: [
              { name: "सारा जे.", location: "अमेरिका", text: "हर्नान् महोदयेन सह मम अनुभवेन मम जीवनं परिवर्तितम्। अहं पृथिव्या सह तादृशं सम्बन्धं अनुभूतवती यः मया पूर्वं कदापि न अनुभूतः।" },
              { name: "मार्क् डी.", location: "फ्रान्स्", text: "प्रामाणिकः, शक्तिशाली, सुरक्षितः च। हर्नान् औषधस्य सत्यः गुरुः अस्ति।" }
          ]
      },
      contact: {
          title: "अस्माभिः सह सम्पर्कं कुर्वन्तु",
          form: { name: "भवतः नाम", email: "भवतः ई-पत्रम्", message: "भवतः सन्देशः", submit: "सन्देशं प्रेषयतु" },
          info: "वयं पवित्र-उपत्यकायाः हृदये, काल्का-समीपे, कुस्को-निकटे स्थिताः स्मः।"
      },
      footer: {
          description: "वाचुमायाः परिवर्तनकारी-शक्तेः अनुभवं कुर्वन्तु, यत् सान पेड्रो इति नाम्ना प्रसिद्धं पवित्रं अण्डीज-पादप-औषधं अस्ति। पेरु-देशस्य पवित्र-उपत्यकायाः हृदये, कुस्को-समीपे, मार्गदर्शित-उत्सवेषु हर्नान् महोदयेन सह आगच्छन्तु, ये भवन्तं भवतः आन्तरिक-आत्मना सह पुनः संयोजयितुं, गभीर-रूपेण स्वस्थं कर्तुं, तथा भवतः आत्मानं जागृतुं साहाय्यं करिष्यन्ति।",
          columns: {
              links: { title: "सम्बन्धाः", items: [{label: "अस्मान् प्रति", href: "/about"}, {label: "समुदायः", href: "/about"}, {label: "सम्पर्कः", href: "/contact"}] },
              reviews: { title: "Google समीक्षाः", rating: "4,9/5" },
              follow: { title: "अस्मान् अनुसरणं कुर्वन्तु", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram },
              contact: { title: "सम्पर्कः", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone },
              find: { title: "अस्मान् अन्विष्यन्तु", address: "वयना वसि, पिसाक्, पेरु" }
          },
          rights: "सर्वाधिकारः सुरक्षितः।"
      }
  }
};