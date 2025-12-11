import { Language, TranslationData } from './types';

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
  gallery: [
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/6.jpg",
    "/gallery/7.jpg",
    "/gallery/8.jpg",
    "/gallery/9.jpg",
    "/gallery/10.jpg",
    "/gallery/11.jpg",
    "/gallery/12.jpg",
    "/gallery/13.jpg",
    "/gallery/14.jpg",
    "/gallery/15.jpg",
    "/gallery/16.jpg",
    "/gallery/17.jpg",
    "/gallery/18.jpg",
  ]
};

// --- BASE ENGLISH DATA HELPERS ---

const retreat2DayDefault = {
    title: "2 Day Retreat",
    subtitle: "Wayna Wasi & Kinsacocha",
    intro: "A deep immersion into the sacred medicine, held in the sanctuary of Wayna Wasi and the powerful mountains of Pisac.",
    days: [
        {
            title: "Day 1 : Preparation and Arrival at Wayna Wasi",
            content: "Upon arrival at Wayna Wasi, participants will begin their journey with the ceremonial preparation of the bedida (the sacred Wachuma drink). This experience initiates a sacred bond with the medicine, setting the stage for inner exploration and connection. Hernan guides each participant with care, helping them clarify their intentions and open their hearts to Wachuma’s gentle yet powerful effects.",
            accommodation: "Spend the night at Wayna Wasi, a sanctuary of peace where the spirit of the Andes is ever-present."
        },
        {
            title: "Day 2 : Ceremony at Kinsacocha, Pisac",
            content: "On the second day, we will travel to the revered site of Kinsacocha in Pisac, where you will partake in a Wachuma ceremony amidst breathtaking mountain vistas. With Hernan’s experienced guidance, participants will explore their inner landscapes, seek personal insights, and receive the teachings Wachuma offers. As the ceremony concludes, a group sharing circle will allow participants to process and reflect on their journey, enhancing the retreat’s impact.",
            accommodation: "Return to Wayna Wasi for a peaceful night, absorbing the transformative experiences of the day."
        }
    ],
    conclusion: "Participants will leave with a renewed sense of self and purpose, empowered by the Wachuma experience and the timeless wisdom of Pachamama."
};

const retreat1DayDefault = {
    title: "1 Day Ceremony",
    subtitle: "Sacred Sites of the Valley",
    intro: "A focused and profound journey into the medicine, held at varying sacred locations such as ancient ruins, serene lagoons, or powerful mountains.",
    days: [
        {
            title: "The Ceremony",
            content: "We begin early in the morning, traveling to a carefully selected sacred site in the Sacred Valley (such as Pumamarca, Kinsacocha, or other power places). The ceremony is a full-day engagement with the medicine, nature, and oneself. Hernan provides guidance, holding space for deep healing and connection. The experience concludes in the late afternoon.",
            accommodation: "Accommodation is not included, but transport to and from the site is arranged."
        }
    ],
    conclusion: "A powerful reset and reconnection with the natural world, leaving you with clarity and a lighter heart."
};

const costaRicaDefault = {
    title: "Sacred Pilgrimage to Costa Rica",
    subtitle: "Mountains & Ocean United",
    intro: "A very special occasion, the first time in Costa Rica in a secret location. A connection of the sacred mountains with the ocean, a special physical and spiritual pilgrimage following a vision and a message from the medicine.",
    description: [
        "Join us for a historic and transformative gathering. For the first time, Hernan brings the sacred Wachuma medicine to the vibrant lands of Costa Rica.",
        "Guided by a profound vision and a direct message from the medicine, this retreat is a spiritual pilgrimage connecting the wisdom of the Andean mountains with the cleansing power of the ocean.",
        "We will gather in a secret, secluded location, immersed in nature's embrace. This intimate experience is strictly limited to 21 participants (including helpers) to ensure deep, personal attention and a cohesive energetic container."
    ],
    details: {
        location: "Secret Location, Costa Rica",
        capacity: "Limited to 21 Souls",
        dates: "Coming Soon"
    },
    cta: "Request Invitation"
};

const preparationDefault = {
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
      {
        title: "Health and Medical Disclosure",
        items: [
          { label: "Medical Conditions", text: "Participants should inform facilitators of any medical conditions, including heart issues, mental health conditions, or any history of seizures. Some pre-existing conditions may increase risks associated with the San Pedro experience." },
          { label: "Medications", text: "Certain medications, including antidepressants, antipsychotics, and some over-the-counter drugs, may have adverse interactions with San Pedro. Please disclose any medications to the facilitators well before the retreat." },
          { label: "Physical Sensitivity", text: "San Pedro can cause temporary physical effects, such as nausea, vomiting, and increased heart rate. Participants should be physically and mentally prepared for these effects." }
        ]
      },
      {
        title: "Psychological Risks and Emotional Responsibility",
        items: [
          { label: "Intense Experiences", text: "San Pedro can bring up deep emotions and past traumas, which can be challenging to process. Participants are encouraged to engage in personal reflection or seek professional guidance beforehand if they have a history of trauma." },
          { label: "Integration Support", text: "Following the retreat, participants may benefit from additional support to integrate their experiences. It is advised to plan for time, support, and resources to process any insights or emotions that arise." }
        ]
      },
      {
        title: "Personal Responsibility",
        items: [
          { label: "Informed Consent", text: "By participating in this retreat, you acknowledge that you are voluntarily engaging in this experience. Any insights, challenges, or personal transformations you experience are your own responsibility." },
          { label: "Safety Precautions", text: "Follow all safety guidelines provided by facilitators, including dietary restrictions, suggested behavior during ceremonies, and limitations on physical activities." }
        ]
      }
    ]
  }
};

const footerDefault = {
  description: "Experience the transformative power of Wachuma, the sacred Andean plant medicine known as San Pedro. Join Hernan in guided ceremonies that will help you reconnect with your inner self, heal deeply, and awaken your spirit near Cusco, in the heart of Peru’s Sacred Valley.",
  columns: {
    links: {
      title: "Links",
      items: [
        { label: "About us", href: "/about" },
        { label: "The Community", href: "/about" },
        { label: "Contact us", href: "/contact" }
      ]
    },
    reviews: {
      title: "Google Reviews",
      rating: "4,9/5"
    },
    follow: {
      title: "Follow us",
      facebook: "https://www.facebook.com/hernan.wachuma",
      instagram: "https://www.instagram.com/hernan_wachuma"
    },
    contact: {
      title: "Contact us",
      email: "hernan.wachuma@gmail.com",
      phone: "+51 928 383 821"
    },
    find: {
      title: "Find us",
      address: "Wayna Wasi, Pisac, Peru"
    }
  },
  rights: "All rights reserved."
};

const enTranslations: TranslationData = {
    nav: {
      home: "Home",
      about: "The Family",
      services: "Ceremonies",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      ausangateTeaser: {
        label: "Inclusive",
        title: "Ausangate Journey",
        date: "January 3rd, 2026"
      },
      costaRicaTeaser: {
        label: "Special Event",
        title: "Costa Rica Pilgrimage",
        date: "Coming Soon"
      }
    },
    benefits: {
      title: "The Power of Wachuma",
      subtitle: "Why we journey with the Sacred Cactus",
      items: [
        {
          title: "Emotional Healing",
          description: "Release past traumas and emotional blockages stored in the body, finding forgiveness and peace."
        },
        {
          title: "Connection to Nature",
          description: "Experience a profound unity with the Earth, the elements, and the living spirit of the Andes."
        },
        {
          title: "Clarity & Vision",
          description: "Quiet the mind to receive guidance, purpose, and a renewed perspective on your life path."
        }
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
          price: "$173+"
        },
        {
          title: "1 Day Ceremony",
          description: "A sacred journey for a minimum of 2 people. Experience the medicine in various sacred sites like ruins, lagoons, and mountains across the Sacred Valley.",
          price: "$250"
        },
        {
          title: "Costa Rica Pilgrimage",
          description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica. Limited to 21 participants.",
          price: "Inquire"
        },
        {
          title: "Private Healing",
          description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.",
          price: "Inquire"
        }
      ],
      ausangateCta: {
        title: "Special Retreat: Ausangate Expedition",
        description: "Join us for a 7-day transformative journey to the sacred mountain of Ausangate. Hot springs, hiking, and deep medicine work.",
        button: "View Itinerary"
      }
    },
    ausangate: {
      title: "Ausangate Sacred Journey",
      subtitle: "January 3rd, 2026 - 7 Days of Healing",
      description: "A profound expedition combining the healing waters of Pacchanta, the majestic presence of Apu Ausangate, and the transformative power of Wachuma and Temazcal.",
      cta: "Reserve Your Spot",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & Purification",
          description: "Travel to Pacchanta. Relax in the natural thermal waters to cleanse the body, followed by a hike up towards Ausangate to set our intentions."
        },
        {
          day: "Day 2",
          title: "First Wachuma Ceremony",
          description: "Opening the heart to the Apu. A daytime ceremony connecting with the spirit of the mountain and the vast Andean sky."
        },
        {
          day: "Day 3",
          title: "Temazcal (Sweat Lodge)",
          description: "A traditional steam bath ritual representing the womb of Mother Earth. Physical and spiritual detoxification."
        },
        {
          day: "Day 4",
          title: "Second Wachuma Ceremony",
          description: "Deepening the journey. Working through internal blockages and expanding consciousness in the silence of the highlands."
        },
        {
          day: "Day 5",
          title: "Temazcal",
          description: "A second sweat lodge ceremony to ground the energies received and purify the spirit further."
        },
        {
          day: "Day 6",
          title: "Third Wachuma & Integration",
          description: "The final medicine ceremony. Focusing on integration, gratitude, and sealing the healing received during the week."
        },
        {
          day: "Day 7",
          title: "Return Journey",
          description: "Hike back down from the mountain, final soak in the Pacchanta hot springs, and transport back to Pisac."
        }
      ]
    },
    costaRica: costaRicaDefault,
    retreat2Day: retreat2DayDefault,
    retreat1Day: retreat1DayDefault,
    preparation: preparationDefault,
    testimonials: {
      title: "Voices from the Heart",
      items: [
        {
          name: "Sarah J.",
          location: "USA",
          text: "My experience with Hernan changed my life. I felt a connection to the earth I had never felt before."
        },
        {
          name: "Marc D.",
          location: "France",
          text: "Authentic, powerful, and safe. Hernan is a true master of the medicine."
        }
      ]
    },
    contact: {
      title: "Get in Touch",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        submit: "Send Message"
      },
      info: "We are located in the heart of the Sacred Valley, near Calca, Cusco."
    },
    footer: footerDefault
};

// --- TRANSLATION OBJECTS ---

export const TRANSLATIONS: Record<Language, TranslationData> = {
  // ENGLISH (Source)
  [Language.EN]: enTranslations,

  // SPANISH (Español)
  [Language.ES]: {
      nav: { home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto" },
      hero: {
          title: "Medicina Sagrada de los Andes",
          subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
          cta: "Reserva una Ceremonia",
          ausangateTeaser: { label: "Inclusivo", title: "Viaje al Ausangate", date: "3 de Enero, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "Próximamente" }
      },
      benefits: {
        title: "El Poder del Wachuma",
        subtitle: "Por qué viajamos con el Cactus Sagrado",
        items: [
            { title: "Sanación Emocional", description: "Libera traumas pasados y bloqueos emocionales almacenados en el cuerpo." },
            { title: "Conexión con la Naturaleza", description: "Experimenta una profunda unidad con la Tierra, los elementos y el espíritu de los Andes." },
            { title: "Claridad y Visión", description: "Aquieta la mente para recibir guía, propósito y una perspectiva renovada." }
        ]
      },
      about: {
        title: "Conoce a Hernan",
        subtitle: "Guardián del Cactus Sagrado",
        description: [
            "<strong>Hernan Colque</strong> es nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>, profundamente arraigado en las tradiciones sagradas de los Andes. Nacido por encima de los 5000m en <strong>Viacha</strong>, una comunidad de altura de <strong>Pisac</strong>, Hernan lleva un linaje de sanación medicinal que se remonta a tiempos pre-incas.",
            "Según la tradición ancestral, solo un hijo por generación puede heredar este camino, y debe elegirlo voluntariamente. La sabiduría pasó de su abuelo Carmen a su padre Beninho. Entre siete hermanos, Hernan eligió la medicina a una edad muy temprana, convirtiéndose en el único portador de este antiguo legado y su profunda conexión con la <strong>Pachamama (Madre Tierra)</strong>.",
            "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la provincia de <strong>Espinar</strong> y su linaje es <strong>Ccana (K'ana)</strong>. La cultura K'ana fue una sociedad pre-inca que formó una alianza estratégica pacífica con el Imperio Inca. Al integrarse pacíficamente durante el reinado de Pachacutec, se convirtieron en aliados militares vitales—guerreros de élite <strong>'Sinchis'</strong> que ayudaron a derrotar a los Chancas. Debido a esta reciprocidad, se les concedieron tierras en el Collasuyo y su antigua capital, Kanamarca, fue reconstruida por los Incas.",
            "<strong>El Espíritu del Wachuma.</strong> Se dice que el espíritu del Wachuma conectó primero a la gente de esta región y lo guardaron en su corazón porque la planta les dijo que desaparecería de la tierra, lo cual sucedió no hace mucho. Hernan lleva adelante esta memoria y espíritu.",
            "<strong>Pisac y Viacha.</strong> Estamos ubicados en <strong>Pisac</strong>, un pueblo vibrante en el Valle Sagrado, donde organizamos ceremonias y ofrecemos alojamiento tranquilo en el <strong>Hotel Wayna Wasi</strong>. Para una inmersión más profunda, nuestros retiros de varios días se llevan a cabo en <strong>Viacha</strong>, una comunidad serena en lo alto de Pisac."
        ]
      },
      services: {
          title: "Nuestras Ofrendas",
          items: [
            { title: "Retiro de 2 Días", description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Costo base $173 (1 persona). Persona extra +$70. Alojamiento +$20/persona. Máx 10 personas.", price: "$173+" },
            { title: "Ceremonia de 1 Día", description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", price: "$250" },
            { title: "Peregrinaje a Costa Rica", description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", price: "Consultar" },
            { title: "Sanación Privada", description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales. Eliminación de bloqueos profundos.", price: "Consultar" }
          ],
          ausangateCta: { title: "Retiro Especial: Expedición Ausangate", description: "Únete a un viaje transformador de 7 días a la montaña sagrada de Ausangate. Aguas termales, caminatas y trabajo profundo con medicina.", button: "Ver Itinerario" }
      },
      ausangate: {
        title: "Viaje Sagrado al Ausangate",
        subtitle: "3 de Enero, 2026 - 7 Días de Sanación",
        description: "Una expedición profunda combinando las aguas curativas de Pacchanta, la majestuosa presencia del Apu Ausangate y el poder transformador del Wachuma y el Temazcal.",
        cta: "Reserva tu Lugar",
        itinerary: [
          { day: "Día 1", title: "Llegada y Purificación", description: "Viaje a Pacchanta. Relajación en aguas termales y caminata hacia el Ausangate para establecer intenciones." },
          { day: "Día 2", title: "Primera Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Ceremonia diurna conectando con el espíritu de la montaña." },
          { day: "Día 3", title: "Temazcal", description: "Ritual de baño de vapor tradicional que representa el vientre de la Madre Tierra. Desintoxicación física y espiritual." },
          { day: "Día 4", title: "Segunda Ceremonia de Wachuma", description: "Profundizando el viaje. Trabajando a través de bloqueos internos en el silencio de las tierras altas." },
          { day: "Día 5", title: "Temazcal", description: "Segundo baño de vapor para asentar las energías recibidas y purificar el espíritu." },
          { day: "Día 6", title: "Tercera Ceremonia de Wachuma", description: "Integración y gratitud. Sellando la sanación recibida durante la semana." },
          { day: "Día 7", title: "Viaje de Regreso", description: "Caminata de descenso, baño final en aguas termales y transporte de regreso a Pisac." }
        ]
      },
      costaRica: {
        title: "Peregrinaje Sagrado a Costa Rica",
        subtitle: "Montañas y Océano Unidos",
        intro: "Una ocasión muy especial, por primera vez en Costa Rica en una ubicación secreta. Una conexión de las montañas sagradas con el océano.",
        description: [
            "Únete a nosotros para una reunión histórica y transformadora. Por primera vez, Hernan trae la medicina sagrada Wachuma a las vibrantes tierras de Costa Rica.",
            "Guiados por una profunda visión y un mensaje directo de la medicina, este retiro es un peregrinaje espiritual que conecta la sabiduría de los Andes con el poder limpiador del océano.",
            "Nos reuniremos en un lugar secreto y apartado, inmersos en el abrazo de la naturaleza. Esta experiencia íntima está estrictamente limitada a 21 participantes."
        ],
        details: { location: "Ubicación Secreta, Costa Rica", capacity: "Limitado a 21 Almas", dates: "Próximamente" },
        cta: "Solicitar Invitación"
      },
      retreat2Day: {
          title: "Retiro de 2 Días",
          subtitle: "Wayna Wasi y Kinsacocha",
          intro: "Una inmersión profunda en la medicina sagrada, realizada en el santuario de Wayna Wasi y las poderosas montañas de Pisac.",
          days: [
              { title: "Día 1: Preparación y Llegada", content: "Llegada a Wayna Wasi y preparación ceremonial de la bebida. Hernan guía a cada participante para clarificar intenciones.", accommodation: "Noche en Wayna Wasi." },
              { title: "Día 2: Ceremonia en Kinsacocha", content: "Viaje a la laguna sagrada de Kinsacocha para la ceremonia de Wachuma. Círculo de compartir al finalizar.", accommodation: "Regreso a Wayna Wasi." }
          ],
          conclusion: "Los participantes se irán con un sentido renovado de sí mismos y propósito, empoderados por la experiencia Wachuma."
      },
      retreat1Day: {
          title: "Ceremonia de 1 Día",
          subtitle: "Sitios Sagrados del Valle",
          intro: "Un viaje enfocado y profundo en la medicina, realizado en varios lugares sagrados.",
          days: [
              { title: "La Ceremonia", content: "Comenzamos temprano viajando a un sitio sagrado (como Pumamarca o Kinsacocha). Un día completo de compromiso con la medicina y la naturaleza.", accommodation: "Alojamiento no incluido." }
          ],
          conclusion: "Un reinicio poderoso y reconexión con el mundo natural, dejándote con claridad y un corazón más ligero."
      },
      preparation: {
        title: "Preparación para tu Retiro",
        subtitle: "Empodera tu Futuro",
        intro: "Para aprovechar al máximo esta experiencia, te invitamos a prepararte física y mentalmente.",
        diet: {
            title: "Dieta y Intenciones",
            description: "Una dieta ligera y limpia ayuda a abrir cuerpo y mente.",
            items: [
                { label: "Dieta Vegetariana", text: "Evita carne y productos animales." },
                { label: "Sin Azúcares Añadidos", text: "Evita azúcares procesados." },
                { label: "Limitar Estimulantes", text: "Reduce cafeína y alcohol." },
                { label: "Hidratación", text: "Bebe mucha agua." },
                { label: "Intenciones", text: "Tómate un tiempo para establecer tus intenciones." }
            ]
        },
        packing: {
            title: "El Día de la Ceremonia",
            description: "Recomendamos traer algunos artículos personales.",
            items: [
                { label: "Ropa Cómoda", text: "Viste ropa suelta adecuada para exteriores." },
                { label: "Sombrero o Gorra", text: "Protégete del sol." },
                { label: "Ofrenda", text: "Frutas o flores como gratitud a la naturaleza." },
                { label: "Botella de Agua", text: "Mantente hidratado." }
            ]
        },
        suggestions: {
            title: "Sugerencias Adicionales",
            items: [
                { label: "Respetar el Silencio", text: "Usa el silencio para reflexionar." },
                { label: "Respiración", text: "Ejercicios suaves para mantenerte centrado." },
                { label: "Desconexión Digital", text: "Desconecta de teléfonos y electrónica." }
            ]
        },
        closing: "Al prepararte conscientemente, creas espacio para que la medicina te guíe.",
        risks: {
            title: "Aviso Importante",
            intro: "La participación implica riesgos físicos y psicológicos. Por favor revisa lo siguiente:",
            sections: [
                { title: "Salud", items: [{ label: "Condiciones Médicas", text: "Informa sobre condiciones cardíacas o salud mental." }, { label: "Medicamentos", text: "Ciertos medicamentos pueden interactuar adversamente." }] },
                { title: "Responsabilidad", items: [{ label: "Consentimiento Informado", text: "Participas voluntariamente." }] }
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
          description: "Experimenta el poder transformador del Wachuma. Únete a Hernan en ceremonias guiadas cerca de Cusco.",
          columns: {
              links: { title: "Enlaces", items: [{label: "Nosotros", href: "/about"}, {label: "Comunidad", href: "/about"}, {label: "Contacto", href: "/contact"}] },
              reviews: { title: "Reseñas Google", rating: "4,9/5" },
              follow: { title: "Síguenos", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "Contacto", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "Ubicación", address: "Wayna Wasi, Pisac, Perú" }
          },
          rights: "Todos los derechos reservados."
      }
  },

  // QUECHUA (Runasimi - Cusco Collao)
  [Language.QU]: {
      nav: { home: "Qallariy", about: "Ayllu", services: "Ruwaykuna", gallery: "Rikch'akuna", contact: "Willanakuy" },
      hero: {
          title: "Ande Suyumanta Willka Hampi",
          subtitle: "Pachamamawan tinkuy ñawpaq Wachuma raymikunawan Willka Qhichwapi.",
          cta: "Hampi Akllay",
          ausangateTeaser: { label: "Llapapaq", title: "Ausangate Puririy", date: "3 Enero killa, 2026" },
          costaRicaTeaser: { label: "Hatun Raymi", title: "Costa Rica Puririy", date: "Chayamuq P'unchawkuna" }
      },
      benefits: {
        title: "Wachumaq Kallpan",
        subtitle: "Imanaqtinmi Willka Hampiwan purinchis",
        items: [
            { title: "Sunqu Hampiy", description: "Ñawpaq nanaykunata qarquy, pampachayta tarispa." },
            { title: "Pachamamawan Tinkuy", description: "Hatun hukllachakuy Hallp'awan, wayrawan, Apuwan ima." },
            { title: "Yuyay K'anchay", description: "Uma thajyay, allin ñan tariypaq." }
        ]
      },
      about: {
        title: "Hernanwan Riqsinakuy",
        subtitle: "Willka Hampi Waqaychaq",
        description: [
            "<strong>Hernan Colque</strong> qhichwa runan, <strong>Wachuma hampiq</strong>, Ande ñawpa yachayniyuq. <strong>Viacha</strong> ayllupi paqarisqa, <strong>Pisaq</strong> patapi, payqa ñawpaq hampiqkunaq yawarnintam apan.",
            "Ñawpaq willakuykuna hina, sapa miraymanta huk churillanmi kay ñanta qatinan. Hernanmi taytanmanta chaskirqan. Qanchis wawqimanta, paymi hampi ñanta akllakurqan, <strong>Pachamamawan</strong> tinkuyninta waqaychaspa.",
            "<strong>Espinar K'ana Ayllu.</strong> Hernanqa <strong>Espinar</strong> llaqtamanta, <strong>K'ana</strong> yawarniyuq. K'ana runakunaqa Inka Pachacutecwan allinta kawsarqanku, 'Sinchis' awqaqkuna kaspa.",
            "<strong>Wachumaq Nuna.</strong> Wachumaqa runakunatan ñawpaqta huñurqan. Hernanmi chay yuyayta apan.",
            "<strong>Pisaqwan Viachawan.</strong> <strong>Pisaq</strong> llaqtapin tarikuyku, <strong>Wayna Wasi</strong> wasipi samachispayku. Hatun hampikunataq <strong>Viacha</strong> ayllupi ruwakun."
        ]
      },
      services: {
          title: "Ruwaykuna",
          items: [
            { title: "2 P'unchaw T'aqakuy", description: "Wayna Wasipi Kinsacochapi ima. $173 (1 runa). Yapay runa +$70. Puñuna +$20. 10 runakama.", price: "$173+" },
            { title: "1 P'unchaw Ceremonia", description: "Iskay runamanta qallarispa. Hampiwan tinkuy imaymana wak'akunapi.", price: "$250" },
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
          { day: "P'unchaw 1", title: "Chayamuy & Ch'uyanchay", description: "Pacchantaman riy. Q'uñi yakupi samay, Ausangatepaq yuyay churay." },
          { day: "P'unchaw 2", title: "Ñawpaq Wachuma", description: "Sunqu kichay Apupaq. P'unchaw ceremonia." },
          { day: "P'unchaw 3", title: "Temazcal", description: "Pachamama wiksanpi humpiy. Kurku ch'uyanchay." },
          { day: "P'unchaw 4", title: "Iskay Kaq Wachuma", description: "Ukhu puri. Ch'in pampapi yuyay." },
          { day: "P'unchaw 5", title: "Temazcal", description: "Iskay kaq humpiy, kallpa chaskisqa takyachinapaq." },
          { day: "P'unchaw 6", title: "Kinsa Kaq Wachuma", description: "Tukuy tinkuchiy. Añaschay." },
          { day: "P'unchaw 7", title: "Kutimpuy", description: "Uraykamuy, q'uñi yaku, Pisaqman kutiy." }
        ]
      },
      costaRica: {
        title: "Costa Rica Willka Puririy",
        subtitle: "Urqukuna Mama Quchawan",
        intro: "Huk sumaq tinkuy, Costa Rica suyupi. Urqukuna mama quchawan hukllachakun.",
        description: [
            "Hamuy kay hatun tinkuyman. Hernanmi Wachuma hampita apan Costa Rica hallp'aman.",
            "Huk musquymi kayta purichin, Ande yachayta mama quchawan tinkuchispa.",
            "Pakasqa k'itipin huñunakusun. 21 runallapaqmi."
        ],
        details: { location: "Pakasqa K'iti, Costa Rica", capacity: "21 Runalla", dates: "Chayamuq P'unchaw" },
        cta: "Mañakuy"
      },
      retreat2Day: {
          title: "2 P'unchaw T'aqakuy",
          subtitle: "Wayna Wasi & Kinsacocha",
          intro: "Ukhu hampi tinkuy Wayna Wasipi, Pisaq urqukunapi ima.",
          days: [
              { title: "P'unchaw 1: Chayamuy", content: "Wayna Wasipi hampi wakichiy. Hernanwan rimay.", accommodation: "Wayna Wasipi puñuy." },
              { title: "P'unchaw 2: Kinsacocha", content: "Kinsacocha quchaman riy Wachumawan tinkunapaq.", accommodation: "Wayna Wasiman kutiy." }
          ],
          conclusion: "Musuq kallpawan kutipunki, Wachuma yachaywan."
      },
      retreat1Day: {
          title: "1 P'unchaw Ceremonia",
          subtitle: "Willka Wak'akuna",
          intro: "Huk p'unchawlla hampiwan tinkuy.",
          days: [
              { title: "Ceremonia", content: "Tutamanta puriy wak'aman (Kinsacocha, Pumamarca).", accommodation: "Mana puñuna kanchu." }
          ],
          conclusion: "Pachamamawan musuqmanta tinkuy."
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
                { label: "Yuyay", text: "Imapaqmi hampikunki, chayta yuyay." }
            ]
        },
        packing: {
            title: "Ceremonia P'unchaw",
            description: "Kaykunata apamuy:",
            items: [
                { label: "P'acha", text: "Q'uñi p'achata apamuy." },
                { label: "Ruphamanta", text: "Sombrero/Gorra." },
                { label: "Haywan", text: "T'ikata, rurutapas apamuy." },
                { label: "Yaku", text: "Yakuta apamuy." }
            ]
        },
        suggestions: {
            title: "Yuyaychaykuna",
            items: [
                { label: "Ch'in Kay", text: "Ch'in kaypi yuyay." },
                { label: "Samay", text: "Allinta samay." }
            ]
        },
        closing: "Allinta wakichikuspaqa, hampiqa sumaqta pusasunki.",
        risks: {
            title: "Willakuy",
            intro: "Hampiqa kallpayuqmi, allinta yachana.",
            sections: [
                { title: "Qhali Kay", items: [{ label: "Unquykuna", text: "Willay sunqu unquymanta." }] },
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
          description: "Wachumaq kallpanta riqsiy. Hernanwan tinkuy Willka Qhichwapi.",
          columns: {
              links: { title: "T'ipikuna", items: [{label: "Nuqayku", href: "/about"}, {label: "Ayllu", href: "/about"}, {label: "Willanakuy", href: "/contact"}] },
              reviews: { title: "Google Rimaykuna", rating: "4,9/5" },
              follow: { title: "Qatiwayku", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "Willanakuy", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "Tarikuy", address: "Wayna Wasi, Pisac, Perú" }
          },
          rights: "Llapallan waqaychasqa."
      }
  },

  // ARABIC (العربية)
  [Language.AR]: {
      nav: { home: "الرئيسية", about: "العائلة", services: "الاحتفالات", gallery: "المعرض", contact: "اتصل بنا" },
      hero: {
          title: "الطب المقدس في جبال الأنديز",
          subtitle: "تواصل مع باتشاماما من خلال احتفالات ووتشوما التقليدية في الوادي المقدس.",
          cta: "احجز احتفالاً",
          ausangateTeaser: { label: "شامل", title: "رحلة أوسانجاتي", date: "3 يناير 2026" },
          costaRicaTeaser: { label: "حدث خاص", title: "حج كوستاريكا", date: "قريباً" }
      },
      benefits: {
        title: "قوة الواتشوما",
        subtitle: "لماذا نرحل مع الصبار المقدس",
        items: [
            { title: "الشفاء العاطفي", description: "تحرير الصدمات الماضية والعوائق العاطفية المخزنة في الجسم." },
            { title: "الاتصال بالطبيعة", description: "تجربة وحدة عميقة مع الأرض والعناصر وروح الأنديز الحية." },
            { title: "الوضوح والرؤية", description: "تهدئة العقل لتلقي التوجيه والهدف ومنظور متجدد." }
        ]
      },
      about: {
        title: "قابل هيرنان",
        subtitle: "حارس الصبار المقدس",
        description: [
            "<strong>هيرنان كولكي</strong> هو من السكان الأصليين للكيتشوا وميسر مخلص <strong>لاحتفالات ووتشوما (سان بيدرو)</strong>، متجذر بعمق في التقاليد المقدسة للأنديز. ولد على ارتفاع يزيد عن 5000 متر في <strong>فياتشا</strong>، وهي مجتمع مرتفع في <strong>بيساك</strong>.",
            "وفقًا للتقاليد القديمة، يمكن لطفل واحد فقط في كل جيل أن يرث هذا المسار. انتقلت الحكمة من جده كارمن إلى والده بنينو. من بين سبعة أشقاء، اختار هيرنان الطب في سن مبكرة جدًا.",
            "<strong>سلالة كانا من إسبينار.</strong> ينحدر هيرنان من مقاطعة <strong>إسبينار</strong> وسلالته هي <strong>كانا</strong>. كانت ثقافة كانا مجتمعًا ما قبل الإنكا شكل تحالفًا استراتيجيًا سلميًا مع إمبراطورية الإنكا.",
            "<strong>روح الواتشوما.</strong> يقال إن روح الواتشوما ربطت الناس من هذه المنطقة أولاً واحتفظوا بها في قلوبهم.",
            "<strong>بيساك وفياتشا.</strong> نحن نقيم في <strong>بيساك</strong>، حيث نستضيف الاحتفالات ونقدم إقامة هادئة في <strong>فندق واينا واسي</strong>. من أجل انغماس أعمق، تقام خلواتنا في <strong>فياتشا</strong>."
        ]
      },
      services: {
          title: "خدماتنا",
          items: [
            { title: "خلوة لمدة يومين", description: "انغماس عميق في واينا واسي وكينساكوتشا. التكلفة الأساسية 173 دولارًا (شخص واحد). الحد الأقصى 10 أشخاص.", price: "$173+" },
            { title: "احتفال ليوم واحد", description: "رحلة مقدسة لعدد لا يقل عن شخصين. اختبر الطب في مواقع مقدسة مختلفة.", price: "$250" },
            { title: "حج كوستاريكا", description: "رحلة مقدسة تربط بين جبال الأنديز والمحيط في كوستاريكا. تقتصر على 21 مشاركًا.", price: "استفسر" },
            { title: "شفاء خاص", description: "جلسات فردية مصممة لاحتياجاتك الروحية والعاطفية.", price: "استفسر" }
          ],
          ausangateCta: { title: "خلوة خاصة: رحلة أوسانجاتي", description: "انضم إلينا في رحلة تحويلية مدتها 7 أيام إلى جبل أوسانجاتي المقدس.", button: "عرض خطة الرحلة" }
      },
      ausangate: {
        title: "رحلة أوسانجاتي المقدسة",
        subtitle: "3 يناير 2026 - 7 أيام من الشفاء",
        description: "بعثة عميقة تجمع بين مياه باتشانتا الشافية وحضور أبو أوسانجاتي المهيب.",
        cta: "احجز مكانك",
        itinerary: [
          { day: "اليوم 1", title: "الوصول والتطهير", description: "السفر إلى باتشانتا. الاسترخاء في المياه الحرارية." },
          { day: "اليوم 2", title: "احتفال واتشوما الأول", description: "فتح القلب للأبو. احتفال نهاري." },
          { day: "اليوم 3", title: "تيمازكال", description: "طقوس حمام البخار التقليدي." },
          { day: "اليوم 4", title: "احتفال واتشوما الثاني", description: "تعميق الرحلة في صمت المرتفعات." },
          { day: "اليوم 5", title: "تيمازكال", description: "حمام بخار ثان لتثبيت الطاقات." },
          { day: "اليوم 6", title: "احتفال واتشوما الثالث", description: "الاندماج والامتنان." },
          { day: "اليوم 7", title: "رحلة العودة", description: "العودة إلى بيساك." }
        ]
      },
      costaRica: {
        title: "الحج المقدس إلى كوستاريكا",
        subtitle: "اتحاد الجبال والمحيط",
        intro: "مناسبة خاصة جداً، لأول مرة في كوستاريكا في مكان سري.",
        description: [
            "انضم إلينا في تجمع تاريخي وتحويلي. لأول مرة، يجلب هيرنان طب الواتشوما المقدس إلى أراضي كوستاريكا.",
            "هذه الخلوة هي حج روحي يربط حكمة جبال الأنديز بالقوة المطهرة للمحيط.",
            "سنجتمع في مكان سري ومعزول."
        ],
        details: { location: "موقع سري، كوستاريكا", capacity: "محدود بـ 21 روحاً", dates: "قريباً" },
        cta: "طلب دعوة"
      },
      retreat2Day: {
          title: "خلوة لمدة يومين",
          subtitle: "واينا واسي وكينساكوتشا",
          intro: "انغماس عميق في الطب المقدس.",
          days: [
              { title: "اليوم 1: التحضير", content: "الوصول إلى واينا واسي والتحضير.", accommodation: "المبيت في واينا واسي." },
              { title: "اليوم 2: كينساكوتشا", content: "الذهاب إلى بحيرة كينساكوتشا للاحتفال.", accommodation: "العودة إلى واينا واسي." }
          ],
          conclusion: "سيغادر المشاركون بشعور متجدد بالذات."
      },
      retreat1Day: {
          title: "احتفال ليوم واحد",
          subtitle: "المواقع المقدسة",
          intro: "رحلة مركزة وعميقة في الطب.",
          days: [
              { title: "الاحتفال", content: "نبدأ في الصباح الباكر بالسفر إلى موقع مقدس.", accommodation: "الإقامة غير مشمولة." }
          ],
          conclusion: "إعادة ضبط قوية واتصال بالعالم الطبيعي."
      },
      preparation: {
        title: "التحضير لخلوتك",
        subtitle: "تمكين مستقبلك",
        intro: "للاستفادة القصوى من هذه التجربة، ندعوك لتحضير نفسك جسديًا وعقليًا.",
        diet: {
            title: "النظام الغذائي والنوايا",
            description: "يساعد النظام الغذائي الخفيف والنظيف على فتح الجسم والعقل.",
            items: [
                { label: "نظام غذائي نباتي", text: "تجنب اللحوم والمنتجات الحيوانية." },
                { label: "بدون سكريات مضافة", text: "الامتناع عن السكريات المصنعة." },
                { label: "الحد من المنبهات", text: "تقليل الكافيين والكحول." },
                { label: "الترطيب", text: "شرب الكثير من الماء." },
                { label: "النوايا", text: "حدد نواياك للرحلة." }
            ]
        },
        packing: {
            title: "يوم الاحتفال",
            description: "نوصي بإحضار بعض الأغراض الشخصية.",
            items: [
                { label: "ملابس مريحة", text: "ارتد ملابس فضفاضة مناسبة للهواء الطلق." },
                { label: "قبعة شمسية", text: "احم نفسك من الشمس." },
                { label: "إحضار قربان", text: "فواكه أو زهور كامتنان." },
                { label: "زجاجة ماء", text: "حافظ على رطوبتك." }
            ]
        },
        suggestions: {
            title: "اقتراحات إضافية",
            items: [
                { label: "احترام الصمت", text: "استخدم الصمت للتفكير." },
                { label: "التنفس", text: "تمارين التنفس للبقاء متمركزًا." },
                { label: "الديتوكس الرقمي", text: "افصل عن الهواتف." }
            ]
        },
        closing: "من خلال التحضير بوعي، تخلق مساحة للطب لإرشادك.",
        risks: {
            title: "إشعار هام",
            intro: "المشاركة تنطوي على مخاطر جسدية ونفسية.",
            sections: [
                { title: "الصحة", items: [{ label: "الحالات الطبية", text: "أبلغ عن أمراض القلب أو الصحة العقلية." }] },
                { title: "المسؤولية", items: [{ label: "الموافقة المستنيرة", text: "أنت تشارك طواعية." }] }
            ]
        }
      },
      testimonials: {
          title: "أصوات من القلب",
          items: [
              { name: "سارة ج.", location: "الولايات المتحدة", text: "غيرت تجربتي مع هيرنان حياتي." },
              { name: "مارك د.", location: "فرنسا", text: "أصيل وقوي وآمن." }
          ]
      },
      contact: {
          title: "تواصل معنا",
          form: { name: "اسمك", email: "بريدك الإلكتروني", message: "رسالتك", submit: "إرسال الرسالة" },
          info: "نحن موجودون في قلب الوادي المقدس، بالقرب من كالكا، كوسكو."
      },
      footer: {
          description: "اختبر القوة التحويلية للواتشوما. انضم إلى هيرنان في احتفالات موجهة.",
          columns: {
              links: { title: "روابط", items: [{label: "عنا", href: "/about"}, {label: "المجتمع", href: "/about"}, {label: "اتصل بنا", href: "/contact"}] },
              reviews: { title: "مراجعات جوجل", rating: "4,9/5" },
              follow: { title: "تابعنا", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "اتصل بنا", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "ابحث عنا", address: "واينا واسي، بيساك، بيرو" }
          },
          rights: "جميع الحقوق محفوظة."
      }
  },

  // JAPANESE (日本語)
  [Language.JA]: {
      nav: { home: "ホーム", about: "ファミリー", services: "セレモニー", gallery: "ギャラリー", contact: "お問い合わせ" },
      hero: {
          title: "アンデスの聖なる薬",
          subtitle: "聖なる谷での伝統的なワチュマセレモニーを通じて、パチャママと再びつながりましょう。",
          cta: "セレモニーを予約する",
          ausangateTeaser: { label: "包括的", title: "アウサンガテの旅", date: "2026年1月3日" },
          costaRicaTeaser: { label: "特別イベント", title: "コスタリカ巡礼", date: "近日公開" }
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
            "<strong>エスピナルのカナの血統。</strong>ヘルナンは<strong>エスピナル県</strong>の出身で、彼の血統は<strong>カナ（カ'ナ）</strong>です。カ'ナ文化は、インカ帝国と平和的な戦略的同盟を結んだプレ・インカ社会でした。",
            "<strong>ワチュマの精神。</strong>ワチュマの精神が最初にこの地域の人々を結びつけたと言われています。",
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
          { day: "1日目", title: "到着と浄化", description: "パッチャンタへ移動。温泉でリラックスし、アウサンガテに向けてハイキング。" },
          { day: "2日目", title: "最初のワチュマセレモニー", description: "アプに心を開く。山の精霊とつながる昼間のセレモニー。" },
          { day: "3日目", title: "テマズカル", description: "母なる地球の子宮を表す伝統的な蒸し風呂の儀式。" },
          { day: "4日目", title: "2回目のワチュマセレモニー", description: "旅を深める。高地の静寂の中で内なるブロックに取り組む。" },
          { day: "5日目", title: "テマズカル", description: "受け取ったエネルギーを定着させ、精神を浄化するための2回目の蒸し風呂。" },
          { day: "6日目", title: "3回目のワチュマ＆統合", description: "最後の薬のセレモニー。統合と感謝に焦点を当てる。" },
          { day: "7日目", title: "帰路", description: "山を下り、パッチャンタの温泉に浸かり、ピサックへ戻る。" }
        ]
      },
      costaRica: {
        title: "コスタリカへの聖なる巡礼",
        subtitle: "山と海の統合",
        intro: "秘密の場所でのコスタリカ初開催の特別な機会。",
        description: [
            "歴史的で変容的な集まりに参加してください。ヘルナンが初めてコスタリカの活気ある土地に聖なるワチュマの薬をもたらします。",
            "深いビジョンと薬からの直接のメッセージに導かれたこのリトリートは、アンデスの山々の知恵と海の浄化力を結ぶ精神的な巡礼です。",
            "自然に抱かれた秘密の人里離れた場所に集まります。"
        ],
        details: { location: "秘密の場所、コスタリカ", capacity: "21名限定", dates: "近日公開" },
        cta: "招待をリクエスト"
      },
      retreat2Day: {
          title: "2日間リトリート",
          subtitle: "ワイナ・ワシとキンサコチャ",
          intro: "聖なる薬への深い没入。",
          days: [
              { title: "1日目：準備", content: "ワイナ・ワシに到着し、準備。ヘルナンが意図を明確にするよう導きます。", accommodation: "ワイナ・ワシ泊。" },
              { title: "2日目：キンサコチャ", content: "ワチュマセレモニーのためにキンサコチャ湖へ移動。", accommodation: "ワイナ・ワシへ戻る。" }
          ],
          conclusion: "参加者は新たな自己意識と目的を持って出発します。"
      },
      retreat1Day: {
          title: "1日セレモニー",
          subtitle: "聖なる場所",
          intro: "薬への集中的で深遠な旅。",
          days: [
              { title: "セレモニー", content: "早朝に聖地（プママカやキンサコチャなど）へ移動します。", accommodation: "宿泊は含まれません。" }
          ],
          conclusion: "自然界との強力なリセットと再接続。"
      },
      preparation: {
        title: "リトリートの準備",
        subtitle: "未来を力づける",
        intro: "この経験を最大限に活用するために、心身の準備をお願いします。",
        diet: {
            title: "食事と意図",
            description: "軽くてきれいな食事は、体と心を開くのに役立ちます。",
            items: [
                { label: "ベジタリアン食", text: "肉や動物性食品を避けてください。" },
                { label: "砂糖添加なし", text: "加工砂糖を控えてください。" },
                { label: "刺激物を制限", text: "カフェインやアルコールを減らしてください。" },
                { label: "水分補給", text: "水をたくさん飲んでください。" },
                { label: "意図", text: "旅の意図を設定する時間を取ってください。" }
            ]
        },
        packing: {
            title: "セレモニー当日",
            description: "いくつかの私物を持参することをお勧めします。",
            items: [
                { label: "快適な服装", text: "屋外に適したゆったりとした服。" },
                { label: "帽子", text: "日差しから身を守ってください。" },
                { label: "お供え物", text: "感謝の気持ちとして果物や花。" },
                { label: "水筒", text: "水分補給を忘れずに。" }
            ]
        },
        suggestions: {
            title: "追加の提案",
            items: [
                { label: "静寂を尊重", text: "振り返りのために沈黙を使ってください。" },
                { label: "呼吸法", text: "中心を保つための穏やかな呼吸。" },
                { label: "デジタルデトックス", text: "電話から離れてください。" }
            ]
        },
        closing: "意識的に準備することで、薬があなたを導くスペースを作ります。",
        risks: {
            title: "重要なお知らせ",
            intro: "参加には身体的および心理的リスクが伴います。",
            sections: [
                { title: "健康", items: [{ label: "病状", text: "心臓病や精神疾患について知らせてください。" }] },
                { title: "責任", items: [{ label: "インフォームドコンセント", text: "あなたは自発的に参加しています。" }] }
            ]
        }
      },
      testimonials: {
          title: "心からの声",
          items: [
              { name: "サラ J.", location: "アメリカ", text: "ヘルナンとの経験は私の人生を変えました。" },
              { name: "マーク D.", location: "フランス", text: "本物で、力強く、安全です。" }
          ]
      },
      contact: {
          title: "お問い合わせ",
          form: { name: "お名前", email: "メールアドレス", message: "メッセージ", submit: "送信" },
          info: "私たちはクスコのカルカ近く、聖なる谷の中心に位置しています。"
      },
      footer: {
          description: "ワチュマの変容力を体験してください。クスコ近くのガイド付きセレモニーに参加しましょう。",
          columns: {
              links: { title: "リンク", items: [{label: "私たちについて", href: "/about"}, {label: "コミュニティ", href: "/about"}, {label: "お問い合わせ", href: "/contact"}] },
              reviews: { title: "Googleレビュー", rating: "4.9/5" },
              follow: { title: "フォロー", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "連絡先", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "場所", address: "ペルー、ピサック、ワイナ・ワシ" }
          },
          rights: "無断転載を禁じます。"
      }
  },

  // HUNGARIAN (Magyar)
  [Language.HU]: {
      nav: { home: "Főoldal", about: "A Család", services: "Szertartások", gallery: "Galéria", contact: "Kapcsolat" },
      hero: {
          title: "Az Andok Szent Gyógyító Ereje",
          subtitle: "Kapcsolódj újra Pachamamával a hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.",
          cta: "Szertartás Foglalása",
          ausangateTeaser: { label: "Exkluzív", title: "Ausangate Utazás", date: "2026. Január 3." },
          costaRicaTeaser: { label: "Különleges Esemény", title: "Costa Rica-i Zarándoklat", date: "Hamarosan" }
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
            "<strong>Hernan Colque</strong> kecsua származású, a <strong>Wachuma (San Pedro) szertartások</strong> elkötelezett vezetője, aki mélyen gyökerezik az Andok szent hagyományaiban. <strong>Viachában</strong>, egy <strong>Pisac</strong> feletti magashegyi közösségben született 5000 méter felett.",
            "Az ősi hagyomány szerint generációnként csak egy gyermek örökölheti ezt az utat, és önként kell választania. A bölcsesség nagyapjától, Carmentől szállt apjára, Beninhóra. Hét testvére közül Hernan nagyon fiatalon választotta a gyógyítást.",
            "<strong>A Ccana Vérvonal Espinarból.</strong> Hernan <strong>Espinar tartományból</strong> származik, vérvonala pedig <strong>Ccana (K'ana)</strong>. A K'ana kultúra egy inka kor előtti társadalom volt, amely békés stratégiai szövetséget kötött az Inka Birodalommal.",
            "<strong>A Wachuma Szelleme.</strong> Azt mondják, hogy a Wachuma szelleme kapcsolta össze először az embereket ebből a régióból.",
            "<strong>Pisac és Viacha.</strong> Székhelyünk <strong>Pisacban</strong>, a Szent Völgy egy nyüzsgő városában található, ahol szertartásokat tartunk és békés szállást kínálunk a <strong>Wayna Wasi Hotelben</strong>. A mélyebb elmélyülés érdekében többnapos elvonulásainkat <strong>Viachában</strong> tartjuk."
        ]
      },
      services: {
          title: "Ajánlataink",
          items: [
            { title: "2 Napos Elvonulás", description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Alapdíj $173 (1 fő). További személy +$70. Szállás +$20/fő. Max 10 fő.", price: "$173+" },
            { title: "1 Napos Szertartás", description: "Szent utazás minimum 2 fő részére. Tapasztald meg a gyógyítást különböző szent helyeken.", price: "$250" },
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
          { day: "1. Nap", title: "Érkezés és Megtisztulás", description: "Utazás Pacchantába. Lazítás a termálvízben." },
          { day: "2. Nap", title: "Első Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Nappali szertartás." },
          { day: "3. Nap", title: "Temazcal", description: "Hagyományos gőzfürdő rituálé." },
          { day: "4. Nap", title: "Második Wachuma Szertartás", description: "Az utazás elmélyítése a felvidéki csendben." },
          { day: "5. Nap", title: "Temazcal", description: "Második gőzfürdő az energiák leföldelésére." },
          { day: "6. Nap", title: "Harmadik Wachuma & Integráció", description: "Záró szertartás. Fókuszban az integráció és hála." },
          { day: "7. Nap", title: "Visszaút", description: "Visszatérés Pisacba." }
        ]
      },
      costaRica: {
        title: "Szent Zarándoklat Costa Ricába",
        subtitle: "Hegyek és Óceán Egyesülése",
        intro: "Különleges alkalom, először Costa Ricában egy titkos helyszínen.",
        description: [
            "Csatlakozz hozzánk ezen a történelmi és átalakító összejövetelen. Hernan először viszi el a szent Wachuma orvosságot Costa Rica vibráló földjére.",
            "Ez az elvonulás egy spirituális zarándoklat, amely összeköti az Andok hegyeinek bölcsességét az óceán tisztító erejével.",
            "Egy titkos, eldugott helyen gyűlünk össze."
        ],
        details: { location: "Titkos Helyszín, Costa Rica", capacity: "21 Lélekre Korlátozva", dates: "Hamarosan" },
        cta: "Meghívó Kérése"
      },
      retreat2Day: {
          title: "2 Napos Elvonulás",
          subtitle: "Wayna Wasi és Kinsacocha",
          intro: "Mély elmélyülés a szent gyógyításban.",
          days: [
              { title: "1. Nap: Felkészülés", content: "Érkezés a Wayna Wasi-ba és felkészülés. Hernan segít tisztázni a szándékokat.", accommodation: "Éjszaka a Wayna Wasi-ban." },
              { title: "2. Nap: Kinsacocha", content: "Utazás a Kinsacocha tóhoz a Wachuma szertartásra.", accommodation: "Visszatérés a Wayna Wasi-ba." }
          ],
          conclusion: "A résztvevők megújult céltudattal távoznak."
      },
      retreat1Day: {
          title: "1 Napos Szertartás",
          subtitle: "Szent Helyek",
          intro: "Fókuszált és mély utazás a gyógyításban.",
          days: [
              { title: "A Szertartás", content: "Kora reggel indulunk egy szent helyre. Egész napos elköteleződés.", accommodation: "Szállást nem tartalmaz." }
          ],
          conclusion: "Erőteljes újraindítás és kapcsolódás a természethez."
      },
      preparation: {
        title: "Felkészülés az Elvonulásra",
        subtitle: "A Jövő Megerősítése",
        intro: "Hogy a legtöbbet hozd ki ebből az élményből, kérjük, készülj fel testben és lélekben.",
        diet: {
            title: "Diéta és Szándékok",
            description: "A könnyű, tiszta étrend segít megnyitni a testet és az elmét.",
            items: [
                { label: "Vegetáriánus Étrend", text: "Kerüld a húst." },
                { label: "Hozzáadott Cukor Nélkül", text: "Kerüld a feldolgozott cukrokat." },
                { label: "Stimulánsok Korlátozása", text: "Csökkentsd a koffeint és az alkoholt." },
                { label: "Hidratálás", text: "Igyál sok vizet." },
                { label: "Szándékok", text: "Szánj időt a szándékaid megfogalmazására." }
            ]
        },
        packing: {
            title: "A Szertartás Napja",
            description: "Javasoljuk néhány személyes tárgy hozatalát.",
            items: [
                { label: "Kényelmes Ruházat", text: "Laza, kültéri ruházat." },
                { label: "Napkalap", text: "Védekezz a nap ellen." },
                { label: "Felajánlás", text: "Gyümölcs vagy virág hálából." },
                { label: "Kulacs", text: "Maradj hidratált." }
            ]
        },
        suggestions: {
            title: "További Javaslatok",
            items: [
                { label: "Csend Tisztelete", text: "Használd a csendet a reflektálásra." },
                { label: "Légzés", text: "Légzőgyakorlatok a középpontban maradáshoz." },
                { label: "Digitális Detox", text: "Szakadj el a telefonoktól." }
            ]
        },
        closing: "A tudatos felkészüléssel teret adsz a gyógyulásnak.",
        risks: {
            title: "Fontos Figyelmeztetés",
            intro: "A részvétel fizikai és pszichológiai kockázatokkal jár.",
            sections: [
                { title: "Egészség", items: [{ label: "Orvosi Állapotok", text: "Jelezd a szívproblémákat vagy mentális állapotokat." }] },
                { title: "Felelősség", items: [{ label: "Tájékozott Beleegyezés", text: "Önként veszel részt." }] }
            ]
        }
      },
      testimonials: {
          title: "Szívből Jövő Hangok",
          items: [
              { name: "Sarah J.", location: "USA", text: "A Hernannal szerzett tapasztalataim megváltoztatták az életemet." },
              { name: "Marc D.", location: "Franciaország", text: "Hiteles, erőteljes és biztonságos." }
          ]
      },
      contact: {
          title: "Lépj Kapcsolatba Velünk",
          form: { name: "Neved", email: "Email Címed", message: "Üzeneted", submit: "Üzenet Küldése" },
          info: "A Szent Völgy szívében vagyunk, Calca közelében, Cusco mellett."
      },
      footer: {
          description: "Tapasztald meg a Wachuma átalakító erejét. Csatlakozz Hernanhoz vezetett szertartásokon.",
          columns: {
              links: { title: "Linkek", items: [{label: "Rólunk", href: "/about"}, {label: "Közösség", href: "/about"}, {label: "Kapcsolat", href: "/contact"}] },
              reviews: { title: "Google Értékelések", rating: "4,9/5" },
              follow: { title: "Kövess minket", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "Kapcsolat", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "Helyszín", address: "Wayna Wasi, Pisac, Peru" }
          },
          rights: "Minden jog fenntartva."
      }
  },

  // SANSKRIT (संस्कृत)
  [Language.SA]: {
      nav: { home: "गृहम्", about: "परिवारः", services: "उत्सवाः", gallery: "चित्रवीथिका", contact: "सम्पर्कः" },
      hero: {
          title: "अण्डीज-पर्वतानां पवित्रम् औषधम्",
          subtitle: "पवित्र-उपत्यकायाम् पारम्परिक-वाचुमा-उत्सवैः सह पचमामायाः सह पुनः संयोगं कुरुत.",
          cta: "उत्सवं आरक्षयतु",
          ausangateTeaser: { label: "सम्पूर्ण", title: "औसंगते यात्रा", date: "३ जनवरी २०२६" },
          costaRicaTeaser: { label: "विशेष आयोजन", title: "कोस्टारिका तीर्थयात्रा", date: "शीघ्रमेव" }
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
            "<strong>हर्नान् कोल्के</strong> एकः केचुआ देशीयः तथा <strong>वाचुमा (सान पेड्रो) उत्सवानां</strong> समर्पितः सुगमकर्ता अस्ति। सः <strong>पिसाक्</strong> नगरस्य उच्च-समुदाये <strong>विआचा</strong> ग्रामे ५००० मीटर् उपरि जातः।",
            "पैतृक-परम्परानुसारं, प्रत्येकं पीढ्यां केवलं एकः एव शिशुः इमं मार्गं उत्तराधिकारित्वेन प्राप्तुं शक्नोति। तस्य पितामहात् कार्मनात् तस्य पितुः बेनिन्हो प्रति ज्ञानं प्राप्तम्।",
            "<strong>एस्पिनार् तः क्काना वंशः।</strong> हर्नान् <strong>एस्पिनार् प्रन्तात्</strong> आगच्छति, तस्य वंशः <strong>क्काना (K'ana)</strong> अस्ति।",
            "<strong>वाचुमायाः आत्मा।</strong> कथ्यते यत् वाचुमायाः आत्मा प्रथमं अस्य क्षेत्रस्य जनान् संयोजयति स्म।",
            "<strong>पिसाक् तथा विआचा।</strong> वयं <strong>पिसाक्</strong> नगरे स्थिताः स्मः, यत्र वयं उत्सवान् आयोजयामः <strong>वायना वसि होटेल्</strong> मध्ये शान्तं आवासं च दद्मः।"
        ]
      },
      services: {
          title: "अस्माकं प्रदानान",
          items: [
            { title: "२ दिवसीय शिबिरम्", description: "वयना वसि तथा किन्साकोच इत्यत्र गभीरं निमज्जनम्। मूल व्ययः $173।", price: "$173+" },
            { title: "१ दिवसीय संस्कारः", description: "न्यूनतमं २ जनानां कृते पवित्रा यात्रा। पवित्र-उपत्यकायाः विविध-स्थलेषु औषधस्य अनुभवं कुर्वन्तु।", price: "$250" },
            { title: "कोस्टारिका तीर्थयात्रा", description: "कोस्टारिका देशे अण्डीज-समुद्रयोः संयोगः। २१ प्रतिभागिनां कृते सीमितम्।", price: "पृच्छतु" },
            { title: "व्यक्तिगत चिकित्सा", description: "भवतः आवश्यकताभ्यः अनुकूलिताः एकैकं सत्रम्। गभीर-अवरोध-निवारणम्।", price: "पृच्छतु" }
          ],
          ausangateCta: { title: "विशेष शिबिरम्: औसंगते अभियानम्", description: "पवित्र पर्वत औसंगते प्रति ७ दिवसानां परिवर्तनकारी यात्रायां अस्माभिः सह आगच्छन्तु।", button: "यात्राक्रमं पश्यतु" }
      },
      ausangate: {
        title: "औसंगते पवित्रा यात्रा",
        subtitle: "३ जनवरी २०२६ - ७ दिवसानां चिकित्सा",
        description: "पच्छान्तायाः चिकित्सा-जलानाम्, अपु-औसंगते-पर्वतस्य भव्य-उपस्थितेः, वाचुमा-तेमाज्कल्-योः परिवर्तनकारी-शक्तेः च संयोगः।",
        cta: "स्थानं आरक्षयतु",
        itinerary: [
          { day: "दिवसः १", title: "आगमनं शुद्धिकरणं च", description: "पच्छान्ता प्रति यात्रा। उष्ण-जले विश्रामः।" },
          { day: "दिवसः २", title: "प्रथमः वाचुमा उत्सवः", description: "अपु प्रति हृदयस्य उद्घाटनम्। दिवा उत्सवः।" },
          { day: "दिवसः ३", title: "तेमाज्कल्", description: "परम्परागतः वाष्प-स्नान-संस्कारः।" },
          { day: "दिवसः ४", title: "द्वितीयः वाचुमा उत्सवः", description: "यात्रां गभीरीकरणम्।" },
          { day: "दिवसः ५", title: "तेमाज्कल्", description: "ऊर्जां स्थापयितुं द्वितीयः वाष्प-स्नानः।" },
          { day: "दिवसः ६", title: "तृतीयः वाचुमा & एकीकरणम्", description: "अन्तिमः औषध-उत्सवः। कृतज्ञता।" },
          { day: "दिवसः ७", title: "प्रत्यागमनम्", description: "पिसाक् प्रति प्रत्यागमनम्।" }
        ]
      },
      costaRica: {
        title: "कोस्टारिका प्रति पवित्र तीर्थयात्रा",
        subtitle: "पर्वताः समुद्रः च मिलितौ",
        intro: "अतीव विशेषः अवसरः, कोस्टारिका देशे गुप्त-स्थाने प्रथमवारम्।",
        description: [
            "अस्मिन् ऐतिहासिके सम्मेलने अस्माभिः सह आगच्छन्तु।",
            "पवित्र-पर्वतानां ज्ञानं समुद्रस्य शुद्धिकरण-शक्त्या सह संयोजयति इयं तीर्थयात्रा।",
            "वयं गुप्त-स्थाने मिलिष्यामः।"
        ],
        details: { location: "गुप्त स्थानम्, कोस्टारिका", capacity: "२१ जनानां कृते सीमितम्", dates: "शीघ्रमेव" },
        cta: "आमन्त्रणं याचताम्"
      },
      retreat2Day: {
          title: "२ दिवसीय शिबिरम्",
          subtitle: "वयना वसि & किन्साकोच",
          intro: "पवित्र-औषधे गभीरं निमज्जनम्।",
          days: [
              { title: "दिवसः १: सज्जता", content: "वयना वसि इत्यत्र आगमनं सज्जता च।", accommodation: "वयना वसि इत्यत्र रात्रिः।" },
              { title: "दिवसः २: किन्साकोच", content: "वाचुमा-उत्सवाय किन्साकोच-सरोवरं प्रति यात्रा।", accommodation: "वयना वसि प्रति प्रत्यागमनम्।" }
          ],
          conclusion: "प्रतिभागिनः नवीकेन उद्देशेन सह गमिष्यन्ति।"
      },
      retreat1Day: {
          title: "१ दिवसीय संस्कारः",
          subtitle: "पवित्र स्थलानि",
          intro: "औषधे केन्द्रितः गभीरः च प्रवासः।",
          days: [
              { title: "संस्कारः", content: "प्रातःकाले पवित्र-स्थलं प्रति यात्रा।", accommodation: "आवासः न समाविष्टः।" }
          ],
          conclusion: "प्राकृतिक-जगता सह शक्तिशालि पुनःसंयोगः।"
      },
      preparation: {
        title: "शिबिराय सज्जता",
        subtitle: "भविष्यं सशक्तं कुरुत",
        intro: "अस्य अनुभवस्य पूर्णं लाभं प्राप्तुं, कृपया शारीरिक-मानसिक-रूपेण सज्जताम् कुर्वन्तु।",
        diet: {
            title: "आहारः सङ्कल्पाः च",
            description: "लघुः शुद्धः च आहारः शरीरं मनः च उद्घाटयितुं साहाय्यं करोति।",
            items: [
                { label: "शाकाहारी आहारः", text: "मांसं वर्जयतु।" },
                { label: "शर्करा नास्ति", text: "संसाधित-शर्करां वर्जयतु।" },
                { label: "उत्तेजकानि न्यूनीकरोतु", text: "कैफीन् मद्यं च न्यूनीकरोतु।" },
                { label: "जलपानम्", text: "प्रभूतं जलं पिबतु।" },
                { label: "सङ्कल्पाः", text: "भवतः सङ्कल्पान् स्थापयितुं समयं यच्छतु।" }
            ]
        },
        packing: {
            title: "संस्कारस्य दिवसः",
            description: "वयं कानिचन व्यक्तिगत-वस्तूनि आनेतुं अनुशंसां कुर्मः।",
            items: [
                { label: "सुखदाः वस्त्राणि", text: "बहिः उपयुक्तं शिथिलं वस्त्रं धारयतु।" },
                { label: "सूर्य-टोपिका", text: "सूर्यात् आत्मानं रक्षतु।" },
                { label: "उपहारः", text: "कृतज्ञतायाः प्रतीकरूपेण फलानि पुष्पाणि वा।" },
                { label: "जल-कूपी", text: "जलयुक्तः तिष्ठतु।" }
            ]
        },
        suggestions: {
            title: "अतिरिक्ताः सुझावः",
            items: [
                { label: "मौनस्य आदरः", text: "चिन्तनाय मौनस्य उपयोगं कुरुत।" },
                { label: "प्राणायामः", text: "केन्द्रितं स्थातुं मृदु-श्वसन-व्यायामाः।" },
                { label: "डिजिटल-विरामः", text: "दूरवाणीभ्यः दूरे तिष्ठतु।" }
            ]
        },
        closing: "सचेतनेन सज्जतायाः माध्यमेन, भवान् औषधस्य मार्गदर्शनं प्राप्तुं स्थानं रचयति।",
        risks: {
            title: "महत्वपूर्णं सूचना",
            intro: "भागग्रहणे शारीरिक-मानसिक-जोखिमाः सन्ति।",
            sections: [
                { title: "स्वास्थ्यम्", items: [{ label: "चिकित्सा-स्थितिः", text: "हृदय-समस्याः वा मानसिक-स्वास्थ्य-विषये सूचयतु।" }] },
                { title: "उत्तरदायित्वम्", items: [{ label: "सूचित-सम्मतिः", text: "भवान् स्वेच्छया भागं गृह्णाति।" }] }
            ]
        }
      },
      testimonials: {
          title: "हृदयस्य स्वराः",
          items: [
              { name: "सारा जे.", location: "अमेरिका", text: "हर्नान् महोदयेन सह मम अनुभवेन मम जीवनं परिवर्तितम्।" },
              { name: "मार्क् डी.", location: "फ्रान्स्", text: "प्रामाणिकः, शक्तिशाली, सुरक्षितः च।" }
          ]
      },
      contact: {
          title: "सम्पर्कं कुर्वन्तु",
          form: { name: "भवतः नाम", email: "भवतः ई-पत्रम्", message: "भवतः सन्देशः", submit: "सन्देशं प्रेषयतु" },
          info: "वयं पवित्र-उपत्यकायाः हृदये, पिसाक् समीपे स्थिताः स्मः।"
      },
      footer: {
          description: "वाचुमायाः परिवर्तनकारी-शक्तेः अनुभवं कुर्वन्तु। पिसाक् समीपे मार्गदर्शित-उत्सवेषु हर्नान् महोदयेन सह आगच्छन्तु।",
          columns: {
              links: { title: "सम्बन्धाः", items: [{label: "अस्मान् प्रति", href: "/about"}, {label: "समुदायः", href: "/about"}, {label: "सम्पर्कः", href: "/contact"}] },
              reviews: { title: "Google समीक्षाः", rating: "4,9/5" },
              follow: { title: "अनुसरणं कुर्वन्तु", facebook: footerDefault.columns.follow.facebook, instagram: footerDefault.columns.follow.instagram },
              contact: { title: "सम्पर्कः", email: footerDefault.columns.contact.email, phone: footerDefault.columns.contact.phone },
              find: { title: "स्थानम्", address: "वयना वसि, पिसाक्, पेरु" }
          },
          rights: "सर्वाधिकारः सुरक्षितः।"
      }
  }
};