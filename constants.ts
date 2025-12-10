import { Language, TranslationData } from './types';

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.jpg",
  about: "/about.jpg",
  ausangate: "/ausangate.jpg",
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

// Helper for default 2-Day Retreat data
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

// Helper for Preparation Data
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
      email: "contact@hernan-wachuma.com",
      phone: "+51 928 383 821"
    },
    find: {
      title: "Find us",
      address: "Wayna Wasi, Pisac, Peru"
    }
  },
  rights: "All rights reserved."
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
  [Language.EN]: {
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
        "<strong>Pisac and Viacha, Two Sacred Spaces.</strong> We are based in <strong>Pisac</strong>, a vibrant town in the Sacred Valley, where we host ceremonies and offer peaceful accommodations at <strong>Wayna Wasi Hotel</strong>. For a deeper immersion, our multi-day retreats are held in <strong>Viacha</strong>, a serene community high above Pisac. Here, participants engage with local traditions and enjoy the tranquility of the mountains—ideal for a profound Huachuma experience."
      ]
    },
    services: {
      title: "Our Offerings",
      items: [
        {
          title: "2 Day Retreat",
          description: "Deep immersion at Wayna Wasi and Kinsacocha. Preparation, Ceremony, and Accommodation included.",
          price: "Inquire"
        },
        {
          title: "15 Day Deep Transformation",
          description: "A profound journey of self-discovery and healing. Inquire for details on this intensive retreat.",
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
    retreat2Day: retreat2DayDefault,
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
  },
  [Language.ES]: {
    nav: {
      home: "Inicio",
      about: "La Familia",
      services: "Ceremonies",
      gallery: "Galería",
      contact: "Contacto"
    },
    hero: {
      title: "Medicina Sagrada de los Andes",
      subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
      cta: "Reserva una Ceremonia",
      ausangateTeaser: {
        label: "Inclusivo",
        title: "Viaje al Ausangate",
        date: "3 de Enero, 2026"
      }
    },
    benefits: {
      title: "El Poder del Wachuma",
      subtitle: "Por qué viajamos con el Cactus Sagrado",
      items: [
        {
          title: "Sanación Emocional",
          description: "Libera traumas pasados y bloqueos emocionales almacenados en el cuerpo, encontrando perdón y paz."
        },
        {
          title: "Conexión con la Naturaleza",
          description: "Experimenta una profunda unidad con la Tierra, los elementos y el espíritu vivo de los Andes."
        },
        {
          title: "Claridad y Visión",
          description: "Aquieta la mente para recibir guía, propósito y una perspectiva renovada sobre tu camino de vida."
        }
      ]
    },
    about: {
      title: "Conoce a Hernan",
      subtitle: "Guardián del Cactus Sagrado",
      description: [
        "<strong>Hernan Colque</strong> es nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>, profundamente arraigado en las tradiciones sagradas de los Andes. Nacido a más de 5000m en <strong>Viacha</strong>, una comunidad de altura de <strong>Pisac</strong>, Hernan lleva un linaje de sanación medicinal que se remonta a tiempos pre-incas.",
        "Según la tradición ancestral, solo un hijo por generación puede heredar este camino, y debe elegirlo voluntariamente. La sabiduría pasó de su abuelo Carmen a su padre Beninho. Entre siete hermanos, Hernan eligió la medicina a una edad muy temprana, convirtiéndose en el único portador de este antiguo legado y su profunda conexión con la <strong>Pachamama (Madre Tierra)</strong>.",
        "<strong>Pisac y Viacha, Dos Espacios Sagrados.</strong> Estamos ubicados en <strong>Pisac</strong>, un pueblo vibrante en el Valle Sagrado, donde realizamos ceremonias y ofrecemos alojamiento tranquilo en el <strong>Hotel Wayna Wasi</strong>. Para una inmersión más profunda, nuestros retiros de varios días se llevan a cabo en <strong>Viacha</strong>, una comunidad serena en lo alto de Pisac. Aquí, los participantes se involucran con las tradiciones locales y disfrutan de la tranquilidad de las montañas, ideal para una experiencia profunda de Huachuma."
      ]
    },
    services: {
      title: "Nuestros Servicios",
      items: [
        {
          title: "Retiro de 2 Días",
          description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Preparación, Ceremonia y Alojamiento incluidos.",
          price: "Consultar"
        },
        {
          title: "Transformación Profunda de 15 Días",
          description: "Un viaje profundo de autodescubrimiento y sanación. Consulta para más detalles sobre este retiro intensivo.",
          price: "Consultar"
        },
        {
          title: "Sanación Privada",
          description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.",
          price: "Consultar"
        }
      ],
      ausangateCta: {
        title: "Retiro Especial: Expedición Ausangate",
        description: "Únete a un viaje transformador de 7 días a la montaña sagrada Ausangate. Aguas termales, caminatas y trabajo profundo con medicina.",
        button: "Ver Itinerario"
      }
    },
    ausangate: {
      title: "Viaje Sagrado al Ausangate",
      subtitle: "3 de Enero 2026 - 7 Días de Sanación",
      description: "Una expedición profunda que combina las aguas curativas de Pacchanta, la majestuosa presencia del Apu Ausangate y el poder transformador del Wachuma y el Temazcal.",
      cta: "Reserva tu Lugar",
      itinerary: [
        {
          day: "Día 1",
          title: "Llegada y Purificación",
          description: "Viaje a Pacchanta. Relajación en las aguas termales naturales para limpiar el cuerpo, seguido de una caminata hacia el Ausangate para establecer intenciones."
        },
        {
          day: "Día 2",
          title: "Primera Ceremonia de Wachuma",
          description: "Abriendo el corazón al Apu. Una ceremonia diurna conectando con el espíritu de la montaña y el inmenso cielo andino."
        },
        {
          day: "Día 3",
          title: "Temazcal",
          description: "Un ritual tradicional de baño de vapor que representa el vientre de la Madre Tierra. Desintoxicación física y espiritual."
        },
        {
          day: "Día 4",
          title: "Segunda Ceremonia de Wachuma",
          description: "Profundizando el viaje. Trabajando bloqueos internos y expandiendo la conciencia en el silencio de las alturas."
        },
        {
          day: "Día 5",
          title: "Temazcal",
          description: "Una segunda ceremonia de sudor para asentar las energías recibidas y purificar aún más el espíritu."
        },
        {
          day: "Día 6",
          title: "Tercera Wachuma e Integración",
          description: "La ceremonia final de medicina. Enfocada en la integración, gratitud y sellar la sanación recibida durante la semana."
        },
        {
          day: "Día 7",
          title: "Viaje de Retorno",
          description: "Caminata de descenso, baño final en las aguas termales de Pacchanta y transporte de regreso a Pisac."
        }
      ]
    },
    retreat2Day: {
      title: "Retiro de 2 Días",
      subtitle: "Wayna Wasi y Kinsacocha",
      intro: "Una inmersión profunda en la medicina sagrada, realizada en el santuario de Wayna Wasi y las poderosas montañas de Pisac.",
      days: [
        {
          title: "Día 1: Preparación y Llegada a Wayna Wasi",
          content: "Al llegar a Wayna Wasi, los participantes comenzarán su viaje con la preparación ceremonial de la bebida (la sagrada medicina Wachuma). Esta experiencia inicia un vínculo sagrado con la medicina, preparando el escenario para la exploración interior y la conexión. Hernán guía a cada participante con cuidado, ayudándoles a clarificar sus intenciones y abrir sus corazones a los efectos suaves pero poderosos del Wachuma.",
          accommodation: "Pase la noche en Wayna Wasi, un santuario de paz donde el espíritu de los Andes está siempre presente."
        },
        {
          title: "Día 2: Ceremonia en Kinsacocha, Pisac",
          content: "En el segundo día, viajaremos al venerado sitio de Kinsacocha en Pisac, donde participarán en una ceremonia de Wachuma entre impresionantes vistas de montaña. Con la guía experta de Hernán, los participantes explorarán sus paisajes interiores, buscarán ideas personales y recibirán las enseñanzas que ofrece el Wachuma. Al concluir la ceremonia, un círculo grupal permitirá a los participantes procesar y reflexionar sobre su viaje, mejorando el impacto del retiro.",
          accommodation: "Regreso a Wayna Wasi para una noche tranquila, absorbiendo las experiencias transformadoras del día."
        }
      ],
      conclusion: "Los participantes se irán con un sentido renovado de sí mismos y de propósito, empoderados por la experiencia Wachuma y la sabiduría atemporal de la Pachamama."
    },
    preparation: {
      title: "Preparándose para su Retiro de San Pedro",
      subtitle: "Empoderando el Futuro de la Comunidad Andina",
      intro: "¡Bienvenido a su viaje transformador de tres días de San Pedro! Para aprovechar al máximo esta experiencia, le invitamos a prepararse física y mentalmente de antemano. Aquí hay una guía para asegurar un viaje significativo.",
      diet: {
        title: "Preparación: Dieta Ligera e Intenciones",
        description: "Previo al retiro, una dieta ligera y limpia puede ayudar a abrir su cuerpo y mente a la experiencia. Aquí hay algunas sugerencias para seguir al menos 3-5 días antes de llegar:",
        items: [
          { label: "Dieta Vegetariana", text: "Evite carne y productos animales ya que pueden pesar en el sistema digestivo." },
          { label: "Sin Azúcares Añadidos", text: "Absténgase de consumir azúcares procesados para mantener su energía equilibrada." },
          { label: "Limitar Estimulantes", text: "Reduzca o elimine la cafeína, el alcohol y otros estimulantes para ayudar a despejar su mente y cuerpo." },
          { label: "Evitar Comidas Pesadas", text: "Elimine los alimentos fritos y lácteos para un proceso digestivo más fácil." },
          { label: "Hidratación", text: "Beba mucha agua para ayudar con la claridad y el bienestar general." },
          { label: "Intenciones", text: "Más allá de la dieta, tómese un tiempo cada día para establecer intenciones para el retiro. Ya sea a través de un diario, meditación o reflexión tranquila, sintonice con lo que espera ganar o liberar a través de este viaje." }
        ]
      },
      packing: {
        title: "El Día de la Ceremonia",
        description: "El día de la ceremonia, que tendrá lugar el segundo día del retiro, recomendamos traer algunos artículos personales que pueden mejorar su conexión y contribuir al espacio sagrado.",
        items: [
          { label: "Ropa Cómoda", text: "Vístase con ropa suelta y cómoda adecuada para exteriores." },
          { label: "Sombrero o Gorra", text: "Dado que la ceremonia se llevará a cabo al aire libre, traiga un sombrero o gorra para protegerse del sol." },
          { label: "Traer una Ofrenda", text: "Es costumbre traer frutas y flores como ofrendas para la ceremonia. Este gesto simboliza gratitud y conexión con la naturaleza." },
          { label: "Botella de Agua", text: "Mantenerse hidratado durante todo el día es esencial." },
          { label: "Cuaderno y Bolígrafo", text: "Puede sentirse inspirado a escribir en un diario después de la ceremonia para capturar pensamientos, ideas o emociones." }
        ]
      },
      suggestions: {
        title: "Sugerencias Adicionales para el Retiro",
        description: "Para mejorar su viaje, considere lo siguiente:",
        items: [
          { label: "Respetar el Tiempo de Silencio", text: "Use los períodos de silencio para reflexionar y procesar su experiencia." },
          { label: "Respiración y Meditación", text: "Ejercicios de respiración suave o meditación pueden ayudar a mantenerlo conectado a tierra y centrado." },
          { label: "Desintoxicación Digital", text: "Desconéctese de teléfonos y otros aparatos electrónicos, permitiéndose estar completamente presente." },
          { label: "Conectar con la Naturaleza", text: "Si es posible, pase tiempo en la naturaleza cada día, dejándola apoyar su viaje interior." }
        ]
      },
      closing: "Al prepararse conscientemente y mantenerse abierto, creará espacio para que la medicina de San Pedro lo guíe en un camino profundo de descubrimiento. Esperamos compartir esta experiencia especial con usted.",
      risks: {
        title: "Aviso Importante: Entendiendo los Riesgos y Responsabilidades",
        intro: "Si bien este retiro está diseñado para ofrecer una experiencia segura y transformadora, es importante reconocer que la participación en una ceremonia de San Pedro implica riesgos tanto físicos como psicológicos. Revise las siguientes consideraciones cuidadosamente para garantizar una participación informada:",
        sections: [
          {
            title: "Salud y Divulgación Médica",
            items: [
              { label: "Condiciones Médicas", text: "Los participantes deben informar a los facilitadores de cualquier condición médica, incluidos problemas cardíacos, condiciones de salud mental o cualquier historial de convulsiones. Algunas condiciones preexistentes pueden aumentar los riesgos asociados con la experiencia de San Pedro." },
              { label: "Medicamentos", text: "Ciertos medicamentos, incluidos antidepresivos, antipsicóticos y algunos medicamentos de venta libre, pueden tener interacciones adversas con San Pedro. Por favor, revele cualquier medicamento a los facilitadores mucho antes del retiro." },
              { label: "Sensibilidad Física", text: "San Pedro puede causar efectos físicos temporales, como náuseas, vómitos y aumento de la frecuencia cardíaca. Los participantes deben estar preparados física y mentalmente para estos efectos." }
            ]
          },
          {
            title: "Riesgos Psicológicos y Responsabilidad Emocional",
            items: [
              { label: "Experiencias Intensas", text: "San Pedro puede traer emociones profundas y traumas pasados, que pueden ser difíciles de procesar. Se anima a los participantes a participar en la reflexión personal o buscar orientación profesional de antemano si tienen un historial de trauma." },
              { label: "Apoyo de Integración", text: "Después del retiro, los participantes pueden beneficiarse de apoyo adicional para integrar sus experiencias. Se recomienda planificar tiempo, apoyo y recursos para procesar cualquier idea o emoción que surja." }
            ]
          },
          {
            title: "Responsabilidad Personal",
            items: [
              { label: "Consentimiento Informado", text: "Al participar en este retiro, usted reconoce que está participando voluntariamente en esta experiencia. Cualquier idea, desafío o transformación personal que experimente es su propia responsabilidad." },
              { label: "Precauciones de Seguridad", text: "Siga todas las pautas de seguridad proporcionadas por los facilitadores, incluidas las restricciones dietéticas, el comportamiento sugerido durante las ceremonias y las limitaciones en las actividades físicas." }
            ]
          }
        ]
      }
    },
    testimonials: {
      title: "Voces del Corazón",
      items: [
        {
          name: "Sarah J.",
          location: "EE.UU.",
          text: "Mi experiencia con Hernan cambió mi vida. Sentí una conexión con la tierra que nunca antes había sentido."
        },
        {
          name: "Marc D.",
          location: "Francia",
          text: "Auténtico, poderoso y seguro. Hernan es un verdadero maestro de la medicina."
        }
      ]
    },
    contact: {
      title: "Contáctanos",
      form: {
        name: "Tu Nombre",
        email: "Tu Correo",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje"
      },
      info: "Estamos ubicados en el corazón del Valle Sagrado, cerca de Calca, Cusco."
    },
    footer: {
      ...footerDefault,
      description: "Experimenta el poder transformador del Wachuma, la medicina sagrada de los Andes conocida como San Pedro. Únete a Hernan en ceremonias guiadas que te ayudarán a reconectar con tu ser interior, sanar profundamente y despertar tu espíritu cerca de Cusco, en el corazón del Valle Sagrado de Perú.",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "Enlaces",
            items: [
                { label: "La Familia", href: "/about" },
                { label: "La Comunidad", href: "/about" },
                { label: "Contacto", href: "/contact" }
            ]
        }
      }
    }
  },
  [Language.QU]: {
    nav: {
      home: "Qallariy",
      about: "Ayllu",
      services: "Ruwaykuna",
      gallery: "Rikch'akuna",
      contact: "Willanakuy"
    },
    hero: {
      title: "Andespi Hampi Wachuma",
      subtitle: "Pachamamawan tinkuy, ñawpa Wachuma hampiywan Valle Sagradopi.",
      cta: "Hampiyta mañakuy",
      ausangateTeaser: {
        label: "Llapanpaq",
        title: "Apu Ausangate Puririy",
        date: "3 Enero, 2026"
      }
    },
    benefits: {
      title: "Wachumaq Kallpan",
      subtitle: "Imarayku Hampiwan Purinchik",
      items: [
        {
          title: "Sunqu Hampiy",
          description: "Ñawpa nanaykunata wisch'uspa, sunqu tiyaykuyta tarinki. Pampachakuywan thak kawsaywan."
        },
        {
          title: "Pachamamawan Tinkuy",
          description: "Hallp'awan, wayrawan, yakuwan, ninawan hukllachakuy. Apukunaq kallpanta riqsiy."
        },
        {
          title: "Yuyay Ch'uya",
          description: "Umata ch'uyanchaspa, allin ñanta rikunki. Musuq kawsayta qallarinaykipaq."
        }
      ]
    },
    about: {
      title: "Hernanwan riqsinakuy",
      subtitle: "Wachumaq pakaqnin",
      description: [
        "<strong>Hernan Colque</strong>qa Quechua runan, <strong>Wachuma hampiy</strong> ruwaq, Andes ñawpa yachaykunapi saphichasqa. 5000m hanaqpi paqarisqa <strong>Viacha</strong> ayllupi, <strong>Pisac</strong> qayllapi, Hernan ñawpa hampiy yachayta apamun.",
        "Ñawpa kamachikuykuna hina, sapa miraymanta huk wawakllan kay ñanta qatinan, pay kikinmi akllakunan. Hatun taytan Carmenmanta taytan Beninhoman yachay chayarqan. Qanchis wawqipanantinmanta, Hernanmi huch'uylanpi hampiyta akllakurqan, kay ñawpa yachayta apaspa <strong>Pachamamawan</strong> tinkuspa.",
        "<strong>Pisacwan Viachawan, Iskay Willka T'aqakuna.</strong> Tiyayku <strong>Pisac</strong> llaqtapi, Valle Sagradopi, maypichus ceremoniyakunata ruwayku, thak puñunata <strong>Wayna Wasi Hotel</strong>pi quykuspa. Aswan ukhuman rinapaq, achka p'unchaw t'aqakuykunaqa <strong>Viacha</strong>pi ruwakun, Pisac patapi tiyaq ayllu. Kaypi, runakuna ayllu yachaykunawan tinkunku, urqukunaq thak kaynintapas tarinku—Huachumawan allin tinkunapaq."
      ]
    },
    services: {
      title: "Ruwaykuna",
      items: [
        {
          title: "2 P'unchaw T'aqakuy",
          description: "Wayna Wasipi Kinsacochapi ima. Wakichikuy, Ceremonia, Puñuna ima.",
          price: "Tapukuy"
        },
        {
          title: "15 P'unchaw Hatun T'aqakuy",
          description: "Hatun puririy ukhunchikman. Kay hatun hampikuymanta tapukuy.",
          price: "Tapukuy"
        },
        {
          title: "Sapalla Hampikuy",
          description: "Sapallaykipar kikiykipaq hampiy. Llasa q'epikunata wisch'unapaq.",
          price: "Tapukuy"
        }
      ],
      ausangateCta: {
        title: "Hatun Puririy: Ausangate",
        description: "Qanchis p'unchaw puririy Apu Ausangatewan. Q'uñi yaku, puriy, hampi ima.",
        button: "Qhaway"
      }
    },
    ausangate: {
      title: "Apu Ausangate Puririy",
      subtitle: "3 Enero 2026 - 7 P'unchaw Hampi",
      description: "Hatun puririy Pacchanta q'uñi yakupi, Apu Ausangate ñawpaqninpi, Wachumawan Temazcalwan ima.",
      cta: "Kyllqachikuy",
      itinerary: [
        {
          day: "1 P'unchaw",
          title: "Ch'ayamuy & Ch'uyanchakuy",
          description: "Pacchantaman riy. Q'uñi yakupi armakuy kurku ch'uyanchananpaq, chaymanta Ausangateman wichay."
        },
        {
          day: "2 P'unchaw",
          title: "Ñawpaq Wachuma",
          description: "Sunqu kichariy Apuman. P'unchaw ceremonia urquq espiritunwan tinkunapaq."
        },
        {
          day: "3 P'unchaw",
          title: "Temazcal (Wasi Hampi)",
          description: "Ñawpa yachay, Pachamamaq wiksan hina. Kurku ispiritu ch'uyanchay."
        },
        {
          day: "4 P'unchaw",
          title: "Iskay Wachuma",
          description: "Aswan ukhuman riy. Ukhu llakikunata wisch'uspa, yuyayta mast'arispa."
        },
        {
          day: "5 P'unchaw",
          title: "Temazcal",
          description: "Iskay kaq temazcal kallpakunata tiyachinapaq, ispirituta ch'uyanchaspa."
        },
        {
          day: "6 P'unchaw",
          title: "Kimsa Wachuma & Tinkuchiy",
          description: "Tukuq hampi. Yachasqakunata tinkuchispa, yuspaywan, hampiyta sellaspa."
        },
        {
          day: "7 P'unchaw",
          title: "Kutimuy",
          description: "Urqumanta uraykamuy, q'uñi yakupi armakuy, Pisacman kutimuy."
        }
      ]
    },
    retreat2Day: {
      title: "2 P'unchaw T'aqakuy",
      subtitle: "Wayna Wasi & Kinsacocha",
      intro: "Wachuma hampiwan ukhu tinkuy, Wayna Wasi thak wasipi Pisac urqukunapi ima.",
      days: [
        {
          title: "1 P'unchaw: Wakichikuy Wayna Wasiman Ch'ayamuy ima",
          content: "Wayna Wasiman ch'ayamuspa, hampi wakichiywan qallarinki (Wachuma hampi). Kaywan sunquyki kicharikunqa, ukhuykita riqsinaykipaq. Hernanmi yanapasunki yuyayniykikunata ch'uyanchaypi, Wachumaq kallpanwan tinkunaykipaq.",
          accommodation: "Wayna Wasipi puñuy, thakpi, Andes ispirituwan."
        },
        {
          title: "2 P'unchaw: Ceremonia Kinsacochapi, Pisac",
          content: "Iskay p'unchawpi, Kinsacochaman risun Pisacpi, chaypi Wachuma ceremoniata ruwasun urqukunaq chawpinpi. Hernanpa yanapayninwan, ukhuykita riqsinki, musuq yachaykunata tarinki. Tukuypi, ayllu hina rimanakusun, sunqunchikta kallpachanapaq.",
          accommodation: "Wayna Wasiman kutimuy, thak puñunaykipaq, p'unchaw yachasqaykita sunquykipi waqaychaspa."
        }
      ],
      conclusion: "Musuq kallpawan, musuq yuyaywan, Pachamamaq yachayninwan ima kutipunki."
    },
    preparation: {
      title: "San Pedro T'aqakuypaq Wakichikuy",
      subtitle: "Andes Aylluq Hamuq P'unchawnin",
      intro: "Allin hamusqaykichik! Kay kimsa p'unchaw t'aqakuypaq, allinta wakichikunaykichikta munayku. Kaypi yuyaychaykuna kachkan.",
      diet: {
        title: "Wakichikuy: Mikuy & Yuyay",
        description: "Manaraq hamuspa, 3-5 p'unchaw ñawpaqta kayta ruway:",
        items: [
          { label: "Mana Aychayuq Mikuy", text: "Ama aychata mikuychu, kurkuyki llamp'u kananpaq." },
          { label: "Mana Asukaryuq", text: "Ama asukarta mikuychu, kallpayki thak kananpaq." },
          { label: "Ama Machanachu", text: "Ama trago, cafeina, ni ima kallpachaqtapas ukyaychu." },
          { label: "Llamp'u Mikuy", text: "Ama friturasta, ni llasa mikuykunata mikuychu." },
          { label: "Yaku Ukyay", text: "Achka yakuta ukyay, ch'uya kanaykipaq." },
          { label: "Yuyaykuna", text: "Sapa p'unchaw yuyayniykita ch'uyanchay. Imataq mask'anki, chayta yuyay." }
        ]
      },
      packing: {
        title: "Ceremonia P'unchaw",
        description: "Iskay p'unchawpi, kaykunata apamuy:",
        items: [
          { label: "Llamp'u P'acha", text: "Purinapaq allin p'achawan hamuy." },
          { label: "Chuku", text: "Intimanta pakakunaykipaq chukuta apamuy." },
          { label: "Haywakuy (Ofrenda)", text: "Rurukunata, t'ikakunata apamuy, Pachamamaman haywakunapaq." },
          { label: "Yaku", text: "Yaku botellata apamuy." },
          { label: "Qillqana Mayt'u", text: "Ceremonia qhipaman yuyayniykita qillqanaykipaq." }
        ]
      },
      suggestions: {
        title: "Yapata Yuyaychaykuna",
        description: "Aswan allin kananpaq:",
        items: [
          { label: "Ch'in Kay", text: "Ch'in kaypi yuyaymanay." },
          { label: "Samay & Meditación", text: "Samaywan sunquykita tiyachiy." },
          { label: "Ama Celular", text: "Ama celularwan kaychu, kay pachaawan tinkuy." },
          { label: "Sallqa Pachawan Tinkuy", text: "Urqukunawan, sach'akunawan rimay." }
        ]
      },
      closing: "Allinta wakichikuspa, sunquykita kicharinki Wachuma hampipaq. Suyaykiku.",
      risks: {
        title: "Hatun Willakuy: Llakikunamanta",
        intro: "Kay t'aqakuyqa allinmi, ichaqa Wachumawan tinkuyqa kallpasapan. Kayta ñawinchay:",
        sections: [
          {
            title: "Qhali Kaymanta",
            items: [
              { label: "Unquykuna", text: "Willayku sichus sunqu unquyniyuq kanki, utaq uma unquyniyuq." },
              { label: "Hampikuna", text: "Sichus pastillakunata tomarqanki, willayku. Wakinqa manan allinchu Wachumawan." },
              { label: "Kurku Pachakuy", text: "Wachumaqa aqtuchinmanmi, sunqutapas phawaykachichinmanmi. Chayqa pasaqllan." }
            ]
          },
          {
            title: "Yuyay Llakikuna",
            items: [
              { label: "Hatun Llakikuna", text: "Ñawpa llakikuna rikhurimunman. Sichus hatun llakipi karqanki, willayku." },
              { label: "Yanapay", text: "T'aqakuy qhipaman, samayta necesitanki yuyayniykita allichanaykipaq." }
            ]
          },
          {
            title: "Kikiykimanta",
            items: [
              { label: "Munayniykiwan", text: "Kayman hamuspaqa, munayniykiwanmi hamunki." },
              { label: "Kamachikuykuna", text: "Hernanpa nisqanta kasukuy, allin kanaykipaq." }
            ]
          }
        ]
      }
    },
    testimonials: {
      title: "Sunqumanta Rimaykuna",
      items: [
        {
          name: "Sarah J.",
          location: "USA",
          text: "Hernanwan tinkusqay kawsayniyta tikrarqan. Pachamamawan tinkurqani manan hayk'aq hina."
        },
        {
          name: "Marc D.",
          location: "Francia",
          text: "Chiqaq, kallpasapa. Hernanqa hatun yachaqmi."
        }
      ]
    },
    contact: {
      title: "Willanakusun",
      form: {
        name: "Suti",
        email: "Chaski",
        message: "Willakuy",
        submit: "Apachiy"
      },
      info: "Valle Sagrado sunqunpi tarikuyku, Calca, Cusco qayllapi."
    },
    footer: {
      ...footerDefault,
      description: "Wachumaq hatun kallpanta riqsiy, Andespi hampi San Pedro sutiyuq. Hernanwan tinkuspa, ukhuykita hampi, sunquykita kicharichiy, Cusco qayllapi, Valle Sagrado sunqunpi.",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "T'inkikuna",
            items: [
                { label: "Ayllu", href: "/about" },
                { label: "Ayllu", href: "/about" },
                { label: "Willanakuy", href: "/contact" }
            ]
        }
      }
    }
  },
  [Language.AR]: {
    nav: {
      home: "الرئيسية",
      about: "العائلة",
      services: "الاحتفالات",
      gallery: "المعرض",
      contact: "اتصل بنا"
    },
    hero: {
      title: "الطب المقدس للأنديز",
      subtitle: "أعد الاتصال بـ باتشاماما من خلال احتفالات واتشوما التقليدية في الوادي المقدس.",
      cta: "احجز احتفالاً",
      ausangateTeaser: {
        label: "شامل",
        title: "رحلة أوسانجاتي",
        date: "3 يناير 2026"
      }
    },
    benefits: {
      title: "قوة الواتشوما",
      subtitle: "لماذا نخوض الرحلة مع الصبار المقدس",
      items: [
        {
          title: "الشفاء العاطفي",
          description: "تحرير الصدمات الماضية والانسدادات العاطفية المخزنة في الجسد، وإيجاد الغفران والسلام."
        },
        {
          title: "الاتصال بالطبيعة",
          description: "تجربة وحدة عميقة مع الأرض، والعناصر، والروح الحية للأنديز."
        },
        {
          title: "الوضوح والرؤية",
          description: "تهدئة العقل لتلقي التوجيه، والهدف، ومنظور متجدد لمسار حياتك."
        }
      ]
    },
    about: {
      title: "تعرف على هيرنان",
      subtitle: "حارس الصبار المقدس",
      description: [
        "<strong>هيرنان كولكي</strong> هو من سكان الكيتشوا الأصليين وميسّر مخلص <strong>لاحتفالات واتشوما (سان بيدرو)</strong>، متجذر بعمق في التقاليد المقدسة للأنديز. ولد على ارتفاع يزيد عن 5000 متر في <strong>فياتشا</strong>، وهو مجتمع مرتفع في <strong>بيساك</strong>، ويحمل هيرنان سلالة علاجية طبية تعود إلى عصور ما قبل الإنكا.",
        "وفقًا لتقليد الأجداد، يمكن لطفل واحد فقط في كل جيل أن يرث هذا المسار، ويجب عليه اختياره طواعية. انتقلت الحكمة من جده كارمن إلى والده بنينيو. من بين سبعة أشقاء، اختار هيرنان الطب في سن مبكرة جدًا، ليصبح الحامل الوحيد لهذا الإرث القديم وعلاقته العميقة بـ <strong>باتشاماما (الأرض الأم)</strong>.",
        "<strong>بيساك وفياتشا، مساحتان مقدستان.</strong> نحن موجودون في <strong>بيساك</strong>، وهي بلدة نابضة بالحياة في الوادي المقدس، حيث نستضيف الاحتفالات ونوفر أماكن إقامة هادئة في <strong>فندق واينا واسي</strong>. للحصول على انغماس أعمق، تُعقد خلواتنا لعدة أيام في <strong>فياتشا</strong>، وهو مجتمع هادئ فوق بيساك. هنا، يشارك الحاضرون في التقاليد المحلية ويستمتعون بهدوء الجبال - وهو أمر مثالي لتجربة هواتشوما عميقة."
      ]
    },
    services: {
      title: "خدماتنا",
      items: [
        {
          title: "خلوة لمدة يومين",
          description: "انغماس عميق في واينا واسي وكينساكوتشا. يشمل التحضير والاحتفال والإقامة.",
          price: "استفسر"
        },
        {
          title: "تحول عميق لمدة 15 يومًا",
          description: "رحلة عميقة لاكتشاف الذات والشفاء. استفسر للحصول على تفاصيل حول هذه الخلوة المكثفة.",
          price: "استفسر"
        },
        {
          title: "شفاء خاص",
          description: "جلسات فردية مصممة لاحتياجاتك الروحية والعاطفية المحددة. إزالة الانسداد العميق.",
          price: "استفسر"
        }
      ],
      ausangateCta: {
        title: "خلوة خاصة: رحلة أوسانجاتي",
        description: "انضم إلينا في رحلة تحويلية مدتها 7 أيام إلى جبل أوسانجاتي المقدس. ينابيع ساخنة ومشي وعمل طبي عميق.",
        button: "عرض خطة الرحلة"
      }
    },
    ausangate: {
      title: "رحلة أوسانجاتي المقدسة",
      subtitle: "3 يناير 2026 - 7 أيام من الشفاء",
      description: "رحلة عميقة تجمع بين مياه باتشانتا الشافية، والحضور المهيب لجبل أوسانجاتي، والقوة التحويلية للواتشوما والتيمزكال.",
      cta: "احجز مكانك",
      itinerary: [
        {
          day: "اليوم 1",
          title: "الوصول والتطهير",
          description: "السفر إلى باتشانتا. الاسترخاء في المياه الحرارية الطبيعية لتطهير الجسم، يليه صعود نحو أوسانجاتي لتحديد نوايانا."
        },
        {
          day: "اليوم 2",
          title: "احتفال واتشوما الأول",
          description: "فتح القلب للجبل. احتفال نهاري للتواصل مع روح الجبل وسماء الأنديز الشاسعة."
        },
        {
          day: "اليوم 3",
          title: "تيماسكال (كوخ التعرق)",
          description: "طقس حمام بخار تقليدي يمثل رحم الأرض الأم. إزالة السموم الجسدية والروحية."
        },
        {
          day: "اليوم 4",
          title: "احتفال واتشوما الثاني",
          description: "تعميق الرحلة. العمل من خلال الانسدادات الداخلية وتوسيع الوعي في صمت المرتفعات."
        },
        {
          day: "اليوم 5",
          title: "تيماسكال",
          description: "احتفال تعرق ثانٍ لتثبيت الطاقات المتلقاة وتطهير الروح بشكل أكبر."
        },
        {
          day: "اليوم 6",
          title: "واتشوما الثالث والتكامل",
          description: "احتفال الطب الأخير. التركيز على التكامل والامتنان وختم الشفاء الذي تم تلقيه خلال الأسبوع."
        },
        {
          day: "اليوم 7",
          title: "رحلة العودة",
          description: "النزول من الجبل، نقع أخير في ينابيع باتشانتا الساخنة، والعودة إلى بيساك."
        }
      ]
    },
    retreat2Day: {
      title: "خلوة لمدة يومين",
      subtitle: "واينا واسي وكينساكوتشا",
      intro: "انغماس عميق في الطب المقدس، يقام في ملاذ واينا واسي وجبال بيساك القوية.",
      days: [
        {
          title: "اليوم 1: التحضير والوصول إلى واينا واسي",
          content: "عند الوصول إلى واينا واسي، سيبدأ المشاركون رحلتهم بالتحضير الاحتفالي للمشروب (مشروب واتشوما المقدس). تبدأ هذه التجربة رابطًا مقدسًا مع الطب، مما يمهد الطريق للاستكشاف الداخلي والاتصال. يوجه هيرنان كل مشارك بعناية، مما يساعدهم على توضيح نواياهم وفتح قلوبهم لتأثيرات واتشوما اللطيفة والقوية.",
          accommodation: "قضاء الليلة في واينا واسي، ملاذ السلام حيث روح الأنديز موجودة دائمًا."
        },
        {
          title: "اليوم 2: احتفال في كينساكوتشا، بيساك",
          content: "في اليوم الثاني، سنسافر إلى موقع كينساكوتشا الموقر في بيساك، حيث ستشارك في احتفال واتشوما وسط مناظر جبلية خلابة. بتوجيه هيرنان ذي الخبرة، سيستكشف المشاركون مناظرهم الداخلية، ويبحثون عن رؤى شخصية، ويتلقون التعاليم التي تقدمها واتشوما. مع انتهاء الاحتفال، ستسمح دائرة مشاركة جماعية للمشاركين بمعالجة رحلتهم والتفكير فيها.",
          accommodation: "العودة إلى واينا واسي لقضاء ليلة هادئة، واستيعاب التجارب التحويلية لليوم."
        }
      ],
      conclusion: "سيغادر المشاركون بشعور متجدد بالذات والهدف، مدعومين بتجربة واتشوما والحكمة الخالدة لباتشاماما."
    },
    preparation: {
      title: "التحضير لخلوة سان بيدرو",
      subtitle: "تمكين مستقبل مجتمع الأنديز",
      intro: "مرحبًا بكم في خلوة سان بيدرو التحويلية لمدة ثلاثة أيام! لتحقيق أقصى استفادة من هذه التجربة، ندعوك لإعداد نفسك جسديًا وذهنيًا مسبقًا. إليك دليل لضمان رحلة ذات مغزى.",
      diet: {
        title: "التحضير: نظام غذائي خفيف ونوايا",
        description: "قبل الخلوة، يمكن أن يساعد النظام الغذائي الخفيف والنظيف في فتح جسمك وعقلك للتجربة. فيما يلي بعض الاقتراحات لاتباعها قبل 3-5 أيام على الأقل من الوصول:",
        items: [
          { label: "نظام غذائي نباتي", text: "تجنب اللحوم والمنتجات الحيوانية لأنها يمكن أن تثقل كاهل الجهاز الهضمي." },
          { label: "بدون سكريات مضافة", text: "امتنع عن استهلاك السكريات المصنعة للحفاظ على توازن طاقتك." },
          { label: "الحد من المنبهات", text: "قلل أو تخلص من الكافيين والكحول والمنبهات الأخرى للمساعدة في تصفية ذهنك وجسمك." },
          { label: "تجنب الأطعمة الثقيلة", text: "امتنع عن الأطعمة المقلية ومنتجات الألبان لعملية هضم أسهل." },
          { label: "الترطيب", text: "اشرب الكثير من الماء للمساعدة في الوضوح والرفاهية العامة." },
          { label: "النوايا", text: "بجانب النظام الغذائي، خذ بعض الوقت كل يوم لتحديد النوايا للخلوة. سواء من خلال التدوين أو التأمل أو التفكير الهادئ." }
        ]
      },
      packing: {
        title: "يوم الاحتفال",
        description: "في يوم الاحتفال، الذي سيقام في اليوم الثاني من الخلوة، نوصي بإحضار بعض الأغراض الشخصية.",
        items: [
          { label: "ارتد ملابس مريحة", text: "ارتد ملابس فضفاضة ومريحة مناسبة للتواجد في الهواء الطلق." },
          { label: "قبعة شمسية", text: "بما أن الاحتفال سيقام في الخارج، أحضر قبعة لحماية نفسك من الشمس." },
          { label: "إحضار قربان", text: "من المعتاد إحضار الفواكه والزهور كقرابين للاحتفال. هذه البادرة ترمز إلى الامتنان والاتصال بالطبيعة." },
          { label: "زجاجة ماء", text: "البقاء رطبًا طوال اليوم أمر ضروري." },
          { label: "دفتر وقلم", text: "قد تشعر بالإلهام للتدوين بعد الاحتفال لالتقاط الأفكار أو الرؤى أو العواطف." }
        ]
      },
      suggestions: {
        title: "اقتراحات إضافية للخلوة",
        description: "لتحسين رحلتك، ضع في اعتبارك ما يلي:",
        items: [
          { label: "احترام وقت الهدوء", text: "استخدم فترات الصمت للتفكير ومعالجة تجربتك." },
          { label: "التنفس والتأمل", text: "يمكن أن تساعد تمارين التنفس اللطيفة أو التأمل في الحفاظ على ثباتك ومركزك." },
          { label: "التخلص من السموم الرقمية", text: "افصل الهواتف والأجهزة الإلكترونية الأخرى، واسمح لنفسك بأن تكون حاضرًا تمامًا." },
          { label: "تواصل مع الطبيعة", text: "إذا أمكن، اقض وقتًا في الطبيعة كل يوم، ودعها تدعم رحلتك الداخلية." }
        ]
      },
      closing: "من خلال التحضير بوعي والبقاء منفتحًا، ستخلق مساحة لطب سان بيدرو لإرشادك في طريق عميق للاكتشاف.",
      risks: {
        title: "إشعار مهم: فهم المخاطر والمسؤوليات",
        intro: "في حين أن هذه الخلوة مصممة لتقديم تجربة آمنة وتحويلية، فمن المهم الاعتراف بأن المشاركة في احتفال سان بيدرو تنطوي على مخاطر جسدية ونفسية.",
        sections: [
          {
            title: "الإفصاح الصحي والطبي",
            items: [
              { label: "الحالات الطبية", text: "يجب على المشاركين إبلاغ الميسرين بأي حالات طبية، بما في ذلك مشاكل القلب أو حالات الصحة العقلية." },
              { label: "الأدوية", text: "قد يكون لبعض الأدوية، بما في ذلك مضادات الاكتئاب، تفاعلات سلبية مع سان بيدرو." },
              { label: "الحساسية الجسدية", text: "يمكن أن يسبب سان بيدرو تأثيرات جسدية مؤقتة، مثل الغثيان وزيادة معدل ضربات القلب." }
            ]
          },
          {
            title: "المخاطر النفسية",
            items: [
              { label: "تجارب مكثفة", text: "يمكن لسان بيدرو أن يثير مشاعر عميقة وصدمات ماضية." },
              { label: "دعم التكامل", text: "بعد الخلوة، قد يستفيد المشاركون من دعم إضافي لدمج تجاربهم." }
            ]
          },
          {
            title: "المسؤولية الشخصية",
            items: [
              { label: "الموافقة المستنيرة", text: "من خلال المشاركة، تقر بأنك تشارك طواعية." },
              { label: "احتياطات السلامة", text: "اتبع جميع إرشادات السلامة المقدمة من الميسرين." }
            ]
          }
        ]
      }
    },
    testimonials: {
      title: "أصوات من القلب",
      items: [
        {
          name: "سارة ج.",
          location: "الولايات المتحدة",
          text: "تجربتي مع هيرنان غيرت حياتي. شعرت باتصال بالأرض لم أشعر به من قبل."
        },
        {
          name: "مارك د.",
          location: "فرنسا",
          text: "أصلي، قوي، وآمن. هيرنان سيد حقيقي في الطب."
        }
      ]
    },
    contact: {
      title: "تواصل معنا",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "رسالتك",
        submit: "إرسال الرسالة"
      },
      info: "نحن موجودون في قلب الوادي المقدس، بالقرب من كالكا، كوسكو."
    },
    footer: {
      ...footerDefault,
      description: "جرب القوة التحويلية للواتشوما، طب النباتات الأنديزية المقدسة المعروف باسم سان بيدرو. انضم إلى هيرنان في احتفالات موجهة ستساعدك على إعادة الاتصال بذاتك الداخلية، والشفاء بعمق، وإيقاظ روحك بالقرب من كوسكو، في قلب الوادي المقدس في بيرو.",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "روابط",
            items: [
                { label: "العائلة", href: "/about" },
                { label: "المجتمع", href: "/about" },
                { label: "اتصل بنا", href: "/contact" }
            ]
        },
        reviews: {
          title: "تقييمات جوجل",
          rating: "4,9/5"
        },
        follow: {
          title: "تابعنا",
          facebook: "https://www.facebook.com/hernan.wachuma",
          instagram: "https://www.instagram.com/hernan_wachuma"
        },
        contact: {
          title: "اتصل بنا",
          email: "contact@hernan-wachuma.com",
          phone: "+51 928 383 821"
        },
        find: {
          title: "تجدنا",
          address: "واينا واسي، بيساك، بيرو"
        }
      }
    }
  },
  [Language.JA]: {
    nav: {
      home: "ホーム",
      about: "家族",
      services: "セレモニー",
      gallery: "ギャラリー",
      contact: "お問い合わせ"
    },
    hero: {
      title: "アンデスの聖なる薬",
      subtitle: "聖なる谷で伝統的なワチュマセレモニーを通じてパチャママと再びつながりましょう。",
      cta: "セレモニーを予約する",
      ausangateTeaser: {
        label: "包括的",
        title: "アウサンガテへの旅",
        date: "2026年1月3日"
      }
    },
    benefits: {
      title: "ワチュマの力",
      subtitle: "なぜ聖なるサボテンと共に旅をするのか",
      items: [
        {
          title: "感情の癒し",
          description: "体に蓄積された過去のトラウマや感情的なブロックを解放し、許しと平和を見つけます。"
        },
        {
          title: "自然とのつながり",
          description: "地球、要素、そしてアンデスの生きている精神との深い一体感を体験します。"
        },
        {
          title: "明晰さとビジョン",
          description: "心を静めて、導き、目的、そして人生の道に対する新たな視点を受け取ります。"
        }
      ]
    },
    about: {
      title: "ヘルナンについて",
      subtitle: "聖なるサボテンの守護者",
      description: [
        "<strong>ヘルナン・コルケ</strong>は、ケチュア族の出身であり、<strong>ワチュマ（サンペドロ）セレモニー</strong>の献身的なファシリテーターです。アンデスの神聖な伝統に深く根ざしています。<strong>ピサック</strong>の高地コミュニティである<strong>ヴィアチャ</strong>の標高5000m以上で生まれたヘルナンは、プレ・インカ時代にまで遡る薬用治癒の血統を受け継いでいます。",
        "先祖代々の伝統によれば、各世代に一人の子供だけがこの道を継承することができ、彼らは自発的にそれを選ばなければなりません。知恵は祖父のカルメンから父のベニーニョへと受け継がれました。7人の兄弟の中で、ヘルナンは非常に早い年齢で薬を選び、この古代の遺産と<strong>パチャママ（母なる大地）</strong>との深いつながりの唯一の担い手となりました。",
        "<strong>ピサックとヴィアチャ、二つの聖なる空間。</strong> 私たちは聖なる谷の活気ある町<strong>ピサック</strong>に拠点を置き、そこでセレモニーを開催し、<strong>ワイナ・ワシ・ホテル</strong>で静かな宿泊施設を提供しています。より深い没入体験のために、数日間のリトリートはピサックの高台にある静かなコミュニティ、<strong>ヴィアチャ</strong>で開催されます。ここでは、参加者は地元の伝統に触れ、山の静けさを楽しむことができます。これは、深いワチュマ体験に理想的です。"
      ]
    },
    services: {
      title: "私たちの提供するもの",
      items: [
        {
          title: "2日間リトリート",
          description: "ワイナ・ワシとキンサコチャでの深い没入。準備、セレモニー、宿泊が含まれます。",
          price: "お問い合わせ"
        },
        {
          title: "15日間の深い変容",
          description: "自己発見と癒しの深い旅。この集中的なリトリートの詳細についてはお問い合わせください。",
          price: "お問い合わせ"
        },
        {
          title: "プライベートヒーリング",
          description: "あなたの特定の精神的および感情的なニーズに合わせたマンツーマンセッション。深いブロックの除去。",
          price: "お問い合わせ"
        }
      ],
      ausangateCta: {
        title: "特別リトリート：アウサンガテ遠征",
        description: "聖なる山アウサンガテへの7日間の変容の旅に参加しませんか。温泉、ハイキング、そして深い薬のワーク。",
        button: "旅程を見る"
      }
    },
    ausangate: {
      title: "アウサンガテ聖なる旅",
      subtitle: "2026年1月3日 - アンデス高地での7日間の癒し",
      description: "パッチャンタの癒しの水、アプ・アウサンガテの荘厳な存在、そしてワチュマとテマズカルの変容力を組み合わせた深い遠征。",
      cta: "場所を予約する",
      itinerary: [
        {
          day: "1日目",
          title: "到着と浄化",
          description: "パッチャンタへ移動。天然温泉でリラックスして体を清め、その後アウサンガテに向かってハイキングし、意図を定めます。"
        },
        {
          day: "2日目",
          title: "第1回ワチュマセレモニー",
          description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる昼間のセレモニー。"
        },
        {
          day: "3日目",
          title: "テマズカル（スウェットロッジ）",
          description: "母なる大地の子宮を表す伝統的な蒸し風呂の儀式。肉体的および精神的な解毒。"
        },
        {
          day: "4日目",
          title: "第2回ワチュマセレモニー",
          description: "旅を深める。高地の静寂の中で内部のブロックを通して働きかけ、意識を拡大します。"
        },
        {
          day: "5日目",
          title: "テマズカル",
          description: "受け取ったエネルギーを定着させ、精神をさらに浄化するための2回目のスウェットロッジセレモニー。"
        },
        {
          day: "6日目",
          title: "第3回ワチュマと統合",
          description: "最後の薬のセレモニー。統合、感謝、そして週の間に受け取った癒しを封印することに焦点を当てます。"
        },
        {
          day: "7日目",
          title: "帰路",
          description: "山を下り、パッチャンタ温泉で最後に浸かり、ピサックに戻ります。"
        }
      ]
    },
    retreat2Day: {
      title: "2日間リトリート",
      subtitle: "ワイナ・ワシとキンサコチャ",
      intro: "ワイナ・ワシの聖域とピサックの力強い山々で行われる、聖なる薬への深い没入。",
      days: [
        {
          title: "1日目：準備とワイナ・ワシへの到着",
          content: "ワイナ・ワシに到着すると、参加者は飲み物（聖なるワチュマの飲み物）の儀式的な準備から旅を始めます。この体験は薬との聖なる絆を開始し、内なる探求とつながりのための舞台を設定します。ヘルナンは各参加者を丁寧に導き、意図を明確にし、ワチュマの穏やかでありながら強力な効果に心を開くのを助けます。",
          accommodation: "アンデスの精神が常に存在する平和の聖域、ワイナ・ワシで一泊します。"
        },
        {
          title: "2日目：ピサックのキンサコチャでのセレモニー",
          content: "2日目には、ピサックの崇拝されるキンサコチャの場所に移動し、息をのむような山の景色の中でワチュマセレモニーに参加します。ヘルナンの経験豊富な指導の下、参加者は内面の風景を探求し、個人的な洞察を求め、ワチュマが提供する教えを受け取ります。セレモニーが終わると、グループシェアリングサークルで参加者が旅を処理し、振り返り、リトリートの影響を高めます。",
          accommodation: "ワイナ・ワシに戻り、その日の変容的な体験を吸収しながら静かな夜を過ごします。"
        }
      ],
      conclusion: "参加者は、ワチュマ体験とパチャママの時代を超越した知恵に力を得て、新たな自己と目的意識を持って出発します。"
    },
    preparation: {
      title: "サンペドロリトリートの準備",
      subtitle: "アンデスのコミュニティの未来に力を",
      intro: "変容をもたらす3日間のサンペドロリトリートへようこそ！この体験を最大限に活用するために、事前に肉体的および精神的に準備することをお勧めします。有意義な旅を確実にするためのガイドはこちらです。",
      diet: {
        title: "準備：軽い食事と意図の設定",
        description: "リトリートに向けて、軽く清潔な食事をとることで、体と心を体験に向けて開くことができます。到着の少なくとも3〜5日前に従うべきいくつかの提案があります：",
        items: [
          { label: "菜食主義の食事", text: "消化器系に負担をかける可能性があるため、肉や動物性食品を避けてください。" },
          { label: "添加糖なし", text: "エネルギーのバランスを保つために、加工糖の摂取を控えてください。" },
          { label: "刺激物を制限する", text: "心と体をきれいにするために、カフェイン、アルコール、その他の刺激物を減らすか排除してください。" },
          { label: "重い食事を避ける", text: "消化プロセスを容易にするために、揚げ物や乳製品をカットしてください。" },
          { label: "水分補給", text: "明晰さと全体的な健康を助けるために、たくさんの水を飲んでください。" },
          { label: "意図", text: "食事以外にも、毎日時間を取ってリトリートの意図を設定してください。ジャーナリング、瞑想、または静かな熟考を通じて、この旅を通じて何を得たいか、または解放したいかに同調してください。" }
        ]
      },
      packing: {
        title: "セレモニーの日",
        description: "リトリートの2日目に行われるセレモニーの日には、つながりを高め、聖なる空間に貢献できるいくつかの個人的なアイテムを持参することをお勧めします。",
        items: [
          { label: "快適な服を着る", text: "屋外に適したゆったりとした快適な服を着てください。" },
          { label: "日よけ帽子またはキャップ", text: "セレモニーは屋外で行われるため、日差しから身を守るために帽子を持参してください。" },
          { label: "お供え物を持参する", text: "セレモニーのお供え物として果物や花を持参するのが通例です。このジェスチャーは、感謝と自然へのつながりを象徴しています。" },
          { label: "水筒を持参する", text: "一日中水分補給をすることは不可欠です。" },
          { label: "ノートとペン", text: "思考、洞察、または感情を記録するために、セレモニー後にジャーナリングをするインスピレーションを感じるかもしれません。" }
        ]
      },
      suggestions: {
        title: "リトリートのための追加の提案",
        description: "旅を充実させるために、以下を考慮してください：",
        items: [
          { label: "静かな時間を尊重する", text: "沈黙の期間を使って、体験を振り返り、処理してください。" },
          { label: "呼吸法と瞑想", text: "優しい呼吸法や瞑想は、あなたを接地させ、中心に保つのに役立ちます。" },
          { label: "デジタルデトックス", text: "電話やその他の電子機器から切断し、完全に現在に存在するようにしてください。" },
          { label: "自然とつながる", text: "可能であれば、毎日自然の中で時間を過ごし、それがあなたの内なる旅をサポートするようにしてください。" }
        ]
      },
      closing: "注意深く準備し、オープンでいることで、サンペドロの薬があなたを深い発見の道へと導くためのスペースを作ることができます。この特別な体験をあなたと共有できることを楽しみにしています。",
      risks: {
        title: "重要なお知らせ：リスクと責任の理解",
        intro: "このリトリートは安全で変容をもたらす体験を提供するように設計されていますが、サンペドロセレモニーへの参加には肉体的および精神的なリスクが伴うことを認識することが重要です。情報に基づいた参加を確実にするために、以下の考慮事項を注意深く確認してください：",
        sections: [
          {
            title: "健康と医療の開示",
            items: [
              { label: "病状", text: "参加者は、心臓の問題、精神的健康状態、または発作の病歴を含む病状をファシリテーターに通知する必要があります。一部の既存の病状は、サンペドロ体験に関連するリスクを高める可能性があります。" },
              { label: "薬", text: "抗うつ薬、抗精神病薬、および一部の市販薬を含む特定の薬は、サンペドロと有害な相互作用を示す可能性があります。リトリートのかなり前にファシリテーターに薬を開示してください。" },
              { label: "身体的感受性", text: "サンペドロは、吐き気、嘔吐、心拍数の増加などの一時的な身体的影響を引き起こす可能性があります。参加者は、これらの影響に対して肉体的および精神的に準備する必要があります。" }
            ]
          },
          {
            title: "心理的リスクと感情的責任",
            items: [
              { label: "激しい体験", text: "サンペドロは深い感情や過去のトラウマを引き起こす可能性があり、処理するのが難しい場合があります。トラウマの病歴がある場合、参加者は個人的な振り返りに従事するか、事前に専門家の指導を求めることをお勧めします。" },
              { label: "統合サポート", text: "リトリート後、参加者は体験を統合するための追加サポートから利益を得る可能性があります。生じた洞察や感情を処理するための時間、サポート、およびリソースを計画することをお勧めします。" }
            ]
          },
          {
            title: "個人の責任",
            items: [
              { label: "インフォームドコンセント", text: "このリトリートに参加することにより、あなたはこの体験に自発的に従事していることを認めます。あなたが経験する洞察、課題、または個人的な変容は、あなた自身の責任です。" },
              { label: "安全上の注意", text: "食事制限、セレモニー中の推奨される行動、身体活動の制限など、ファシリテーターが提供するすべての安全ガイドラインに従ってください。" }
            ]
          }
        ]
      }
    },
    testimonials: {
      title: "心からの声",
      items: [
        {
          name: "サラ J.",
          location: "アメリカ",
          text: "ヘルナンとの体験は私の人生を変えました。これまで感じたことのない地球とのつながりを感じました。"
        },
        {
          name: "マーク D.",
          location: "フランス",
          text: "本物で、力強く、安全です。ヘルナンは真の薬のマスターです。"
        }
      ]
    },
    contact: {
      title: "お問い合わせ",
      form: {
        name: "お名前",
        email: "メールアドレス",
        message: "メッセージ",
        submit: "送信する"
      },
      info: "私たちはクスコのカルカ近く、聖なる谷の中心に位置しています。"
    },
    footer: {
      ...footerDefault,
      description: "サンペドロとして知られる聖なるアンデスの植物薬、ワチュマの変容力を体験してください。ヘルナンと共に、内なる自己と再びつながり、深く癒し、ペルーの聖なる谷の中心にあるクスコ近くで精神を目覚めさせるのを助けるガイド付きセレモニーに参加してください。",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "リンク",
            items: [
                { label: "家族", href: "/about" },
                { label: "コミュニティ", href: "/about" },
                { label: "お問い合わせ", href: "/contact" }
            ]
        }
      }
    }
  },
  [Language.HU]: {
    nav: {
      home: "Kezdőlap",
      about: "A Család",
      services: "Szertartások",
      gallery: "Galéria",
      contact: "Kapcsolat"
    },
    hero: {
      title: "Az Andok Szent Gyógyító Ereje",
      subtitle: "Kapcsolódj újra Pacha Mamához hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.",
      cta: "Foglalj Szertartást",
      ausangateTeaser: {
        label: "Inkluzív",
        title: "Ausangate Utazás",
        date: "2026. január 3."
      }
    },
    benefits: {
      title: "A Wachuma Ereje",
      subtitle: "Miért utazunk a Szent Kaktusszal",
      items: [
        {
          title: "Érzelmi Gyógyulás",
          description: "A testben tárolt múltbeli traumák és érzelmi blokkok elengedése, a megbocsátás és a béke megtalálása."
        },
        {
          title: "Kapcsolat a Természettel",
          description: "Tapasztald meg a mély egységet a Földdel, az elemekkel és az Andok élő szellemével."
        },
        {
          title: "Tisztánlátás és Vízió",
          description: "Csendesítsd le az elmét, hogy útmutatást, célt és megújult perspektívát kaphass életutadra."
        }
      ]
    },
    about: {
      title: "Ismerd meg Hernant",
      subtitle: "A Szent Kaktusz Őrzője",
      description: [
        "<strong>Hernan Colque</strong>, a Quechua nép szülötte, elkötelezett vezetője a <strong>Wachuma (San Pedro) szertartásoknak</strong>, melyek gyökerei mélyen az Andok szent hagyományaiba nyúlnak vissza. <strong>Viacha</strong> 5000 méter feletti, <strong>Pisac</strong> melletti közösségében született és nevelkedett, így Hernan egy olyan gyógyító vonalat visz tovább, amely az inka idők előtti korokig nyúlik vissza.",
        "Az ősi hagyományok szerint generációnként csak egy gyermek örökölheti ezt az utat, és ezt önként kell választania. A bölcsesség nagyapjától, Carmentől szállt apjára, Beninhóra. Hét testvére közül Hernan már nagyon fiatalon választotta a gyógyítást, így ő lett ennek az ősi örökségnek és a <strong>Pacha Mamával (Földanya)</strong> való mély kapcsolatnak az egyedüli hordozója.",
        "<strong>Pisac és Viacha, Két Szent Tér.</strong> Székhelyünk <strong>Pisacban</strong>, a Szent Völgy egyik nyüzsgő városában található, ahol szertartásokat tartunk és békés szállást kínálunk a <strong>Wayna Wasi Hotelben</strong>. A mélyebb elmélyülés érdekében többnapos elvonulásainkat <strong>Viachában</strong> tartjuk, egy békés közösségben, magasan Pisac felett. Itt a résztvevők megismerkedhetnek a helyi hagyományokkal és élvezhetik a hegyek nyugalmát – ami ideális egy mély Huachuma élményhez."
      ]
    },
    services: {
      title: "Ajánlataink",
      items: [
        {
          title: "2 Napos Elvonulás",
          description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Felkészülés, Szertartás és Szállás.",
          price: "Érdeklődj"
        },
        {
          title: "15 Napos Mély Átalakulás",
          description: "Az önfelfedezés és gyógyulás mély utazása. Érdeklődj a részletekért erről az intenzív elvonulásról.",
          price: "Érdeklődj"
        },
        {
          title: "Privát Gyógyítás",
          description: "Személyre szabott egyéni ülések a te specifikus spirituális és érzelmi igényeidhez. Mély blokkok oldása.",
          price: "Érdeklődj"
        }
      ],
      ausangateCta: {
        title: "Különleges Elvonulás: Ausangate Expedíció",
        description: "Csatlakozz hozzánk egy 7 napos átalakító utazásra az Ausangate szent hegyéhez. Hőforrások, túrázás és mély gyógyító munka.",
        button: "Útiterv Megtekintése"
      }
    },
    ausangate: {
      title: "Ausangate Szent Utazás",
      subtitle: "2026. január 3. - 7 Nap Gyógyulás a Magas Andokban",
      description: "Egy mély expedíció, amely egyesíti Pacchanta gyógyító vizeit, Apu Ausangate fenséges jelenlétét, valamint a Wachuma és a Temazcal átalakító erejét.",
      cta: "Helyfoglalás",
      itinerary: [
        {
          day: "1. Nap",
          title: "Érkezés és Megtisztulás",
          description: "Utazás Pacchantába. Lazítás a természetes termálvízben a test megtisztítására, majd túra az Ausangate felé a szándékok megfogalmazására."
        },
        {
          day: "2. Nap",
          title: "Első Wachuma Szertartás",
          description: "A szív megnyitása az Apu felé. Nappali szertartás a hegy szellemével és a hatalmas andoki éggel való kapcsolódáshoz."
        },
        {
          day: "3. Nap",
          title: "Temazcal (Izzasztókunyhó)",
          description: "Hagyományos gőzfürdő rituálé, amely a Földanya méhét jelképezi. Fizikai és spirituális méregtelenítés."
        },
        {
          day: "4. Nap",
          title: "Második Wachuma Szertartás",
          description: "Az utazás elmélyítése. Belső blokkok oldása és a tudat tágítása a magaslatok csendjében."
        },
        {
          day: "5. Nap",
          title: "Temazcal",
          description: "Egy második izzasztókunyhó szertartás a kapott energiák leföldelésére és a lélek további tisztítására."
        },
        {
          day: "6. Nap",
          title: "Harmadik Wachuma és Integráció",
          description: "Az utolsó gyógyító szertartás. Fókuszban az integráció, a hála és a hét során kapott gyógyulás lezárása."
        },
        {
          day: "7. Nap",
          title: "Visszautazás",
          description: "Túra le a hegyről, utolsó fürdőzés a Pacchanta hőforrásokban, majd visszautazás Pisacba."
        }
      ]
    },
    retreat2Day: {
      title: "2 Napos Elvonulás",
      subtitle: "Wayna Wasi és Kinsacocha",
      intro: "Mély elmélyülés a szent gyógyító erőben, a Wayna Wasi szentélyében és Pisac erőteljes hegyei között.",
      days: [
        {
          title: "1. Nap: Felkészülés és Érkezés Wayna Wasiba",
          content: "A Wayna Wasiba való megérkezéskor a résztvevők a szent ital (Wachuma) rituális elkészítésével kezdik utazásukat. Ez az élmény szent köteléket teremt a gyógynövénnyel, előkészítve a terepet a belső felfedezéshez és kapcsolódáshoz. Hernan gondosan vezeti a résztvevőket, segítve szándékaik tisztázását és szívük megnyitását a Wachuma gyengéd, mégis erőteljes hatásai előtt.",
          accommodation: "Az éjszakát a Wayna Wasiban töltjük, a béke szentélyében, ahol az Andok szelleme mindig jelen van."
        },
        {
          title: "2. Nap: Szertartás a Kinsacochánál, Pisacban",
          content: "A második napon a Pisacban található, nagy tiszteletnek örvendő Kinsacochához utazunk, ahol lélegzetelállító hegyi kilátás közepette vesztek részt a Wachuma szertartáson. Hernan tapasztalt vezetésével a résztvevők felfedezik belső tájaikat, személyes felismeréseket keresnek, és befogadják a Wachuma tanításait. A szertartás zárásaként egy közös megosztó kör segít a tapasztalatok feldolgozásában és az utazás hatásának elmélyítésében.",
          accommodation: "Visszatérés a Wayna Wasiba egy békés éjszakára, a nap átalakító élményeinek integrálására."
        }
      ],
      conclusion: "A résztvevők megújult éntudattal és céllal távoznak, megerősödve a Wachuma élmény és Pacha Mama időtlen bölcsessége által."
    },
    preparation: {
      title: "Felkészülés a San Pedro Elvonulásra",
      subtitle: "Az Andoki Közösség Jövőjének Erősítése",
      intro: "Üdvözlünk az átalakító háromnapos San Pedro elvonuláson! Hogy a legtöbbet hozhasd ki ebből az élményből, kérjük, készülj fel testben és lélekben egyaránt. Íme egy útmutató a jelentőségteljes utazáshoz.",
      diet: {
        title: "Felkészülés: Könnyű Étrend és Szándékok",
        description: "Az elvonulást megelőzően egy könnyű, tiszta étrend segíthet megnyitni a testet és az elmét az élmény befogadására. Íme néhány javaslat az érkezés előtti 3-5 napra:",
        items: [
          { label: "Vegetáriánus Étrend", text: "Kerüld a húst és az állati termékeket, mivel ezek megterhelhetik az emésztőrendszert." },
          { label: "Hozzáadott Cukor Nélkül", text: "Tartózkodj a feldolgozott cukrok fogyasztásától, hogy energiád kiegyensúlyozott maradjon." },
          { label: "Stimulánsok Korlátozása", text: "Csökkentsd vagy hagyd el a koffeint, alkoholt és egyéb serkentőszereket az elme és a test tisztulása érdekében." },
          { label: "Nehéz Ételek Kerülése", text: "Hagyd el az olajban sült ételeket és a tejtermékeket a könnyebb emésztés érdekében." },
          { label: "Hidratálás", text: "Igyál sok vizet a tisztaság és az általános jó közérzet érdekében." },
          { label: "Szándékok", text: "Az étrend mellett szánj időt naponta a szándékaid megfogalmazására. Naplózással, meditációval vagy csendes elmélkedéssel hangolódj rá arra, mit szeretnél kapni vagy elengedni ezen az utazáson." }
        ]
      },
      packing: {
        title: "A Szertartás Napja",
        description: "A szertartás napjára, amely az elvonulás második napján lesz, javasoljuk néhány személyes tárgy hozatalát, amelyek fokozhatják a kapcsolódást.",
        items: [
          { label: "Kényelmes Ruházat", text: "Viselj laza, kényelmes, kültéri tartózkodásra alkalmas ruhát." },
          { label: "Napkalap vagy Sapka", text: "Mivel a szertartás a szabadban zajlik, hozz kalapot a nap elleni védelem érdekében." },
          { label: "Felajánlás", text: "Szokás gyümölcsöt és virágot hozni felajánlásként a szertartásra. Ez a gesztus a hálát és a természettel való kapcsolatot jelképezi." },
          { label: "Vizespalack", text: "A hidratáltság fenntartása egész nap elengedhetetlen." },
          { label: "Jegyzetfüzet és Toll", text: "Inspirálónak érezheted a naplózást a szertartás után, hogy rögzítsd gondolataidat, felismeréseidet vagy érzelmeidet." }
        ]
      },
      suggestions: {
        title: "További Javaslatok az Elvonuláshoz",
        description: "Utazásod gazdagítása érdekében fontold meg a következőket:",
        items: [
          { label: "Csend Tiszteletben Tartása", text: "Használd a csendes időszakokat az élményeid feldolgozására és a reflexióra." },
          { label: "Légzés és Meditáció", text: "Gyengéd légzőgyakorlatok vagy meditáció segíthetnek a középpontban maradni és földelni magad." },
          { label: "Digitális Detox", text: "Kapcsold ki a telefont és egyéb elektronikai eszközöket, hogy teljesen jelen lehess." },
          { label: "Kapcsolat a Természettel", text: "Ha lehetséges, tölts időt a természetben minden nap, hagyva, hogy támogassa belső utazásodat." }
        ]
      },
      closing: "A tudatos felkészüléssel és nyitottsággal teret engedsz a San Pedro medicinának, hogy egy mély felfedező úton vezessen. Várjuk, hogy megoszthassuk veled ezt a különleges élményt.",
      risks: {
        title: "Fontos Figyelmeztetés: Kockázatok és Felelősség",
        intro: "Bár ezt az elvonulást úgy terveztük, hogy biztonságos és átalakító élményt nyújtson, fontos tudatosítani, hogy a San Pedro szertartáson való részvétel fizikai és pszichológiai kockázatokkal jár.",
        sections: [
          {
            title: "Egészségügyi Nyilatkozat",
            items: [
              { label: "Egészségügyi Állapot", text: "A résztvevőknek tájékoztatniuk kell a vezetőket minden egészségügyi állapotról, beleértve a szívproblémákat, mentális betegségeket vagy rohamokat." },
              { label: "Gyógyszerek", text: "Bizonyos gyógyszerek, például antidepresszánsok, nemkívánatos kölcsönhatásba léphetnek a San Pedróval. Kérjük, időben jelezd a szedett gyógyszereket." },
              { label: "Fizikai Érzékenység", text: "A San Pedro átmeneti fizikai hatásokat okozhat, mint például hányinger vagy megemelkedett pulzus." }
            ]
          },
          {
            title: "Pszichológiai Kockázatok",
            items: [
              { label: "Intenzív Élmények", text: "A San Pedro mély érzelmeket és múltbeli traumákat hozhat felszínre." },
              { label: "Integrációs Támogatás", text: "Az elvonulás után a résztvevőknek szükségük lehet támogatásra az élmények feldolgozásához." }
            ]
          },
          {
            title: "Személyes Felelősség",
            items: [
              { label: "Informált Beleegyezés", text: "A részvétellel elismered, hogy önként veszel részt az élményben." },
              { label: "Biztonsági Óvintézkedések", text: "Kövesd a vezetők által megadott összes biztonsági iránymutatást." }
            ]
          }
        ]
      }
    },
    testimonials: {
      title: "Szívből Jövő Hangok",
      items: [
        {
          name: "Sarah J.",
          location: "USA",
          text: "A Hernannal szerzett tapasztalatom megváltoztatta az életemet. Olyan kapcsolatot éreztem a földdel, amit még soha."
        },
        {
          name: "Marc D.",
          location: "Franciaország",
          text: "Hiteles, erőteljes és biztonságos. Hernan a gyógyító növények igazi mestere."
        }
      ]
    },
    contact: {
      title: "Lépj Kapcsolatba Velünk",
      form: {
        name: "Neved",
        email: "E-mail Címed",
        message: "Üzeneted",
        submit: "Üzenet Küldése"
      },
      info: "A Szent Völgy szívében, Calca közelében, Cuscóban találhatsz meg minket."
    },
    footer: {
      ...footerDefault,
      description: "Tapasztalja meg a Wachuma átalakító erejét, az Andok szent növényi medicináját, amelyet San Pedroként ismernek. Csatlakozzon Hernanhoz vezetett szertartásokon, amelyek segítenek újra kapcsolatba lépni belső énjével, mélyen gyógyulni és felébreszteni szellemét Cusco közelében, Peru Szent Völgyének szívében.",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "Linkek",
            items: [
                { label: "A Család", href: "/about" },
                { label: "A Közösség", href: "/about" },
                { label: "Kapcsolat", href: "/contact" }
            ]
        }
      }
    }
  },
  [Language.SA]: {
    nav: {
      home: "गृहम् (Home)",
      about: "कुटुम्बम् (The Family)",
      services: "संस्काराः (Ceremonies)",
      gallery: "चित्रशाला (Gallery)",
      contact: "संपर्कः (Contact)"
    },
    hero: {
      title: "अण्डीज पर्वतस्य पवित्रा ओषधिः",
      subtitle: "पवित्र उपत्यकायां पारम्परिक वाचुमा संस्कारैः सह पचममया सह पुनः संयोगं कुरुत।",
      cta: "संस्कारस्य आरक्षणं कुरुत",
      ausangateTeaser: {
        label: "सर्वसमावेशक (Inclusive)",
        title: "औसंगते यात्रा",
        date: "जनवरी ३, २०२६"
      }
    },
    benefits: {
      title: "वाचुमायाः शक्तिः",
      subtitle: "वयं पवित्र सिदुना सह किमर्थं यात्रां कुर्मः",
      items: [
        {
          title: "भावनात्मक चिकित्सा",
          description: "शरीरे संचितं पूर्वदोषं भावनात्मकबाधां च मुक्त्वा क्षां शान्तिं च प्राप्नोति।"
        },
        {
          title: "प्रकृत्या सह संयोगः",
          description: "पृथिव्या, तत्त्वैः, अण्डीज पर्वतस्य जीवितात्मना सह गभीरं एकतां अनुभवतु।"
        },
        {
          title: "स्पष्टता दृष्टिः च",
          description: "मार्गदर्शनं, उद्देश्यं, जीवनमार्गस्य नवीकृतदृष्टिकोणं च प्राप्तुं मनः शान्तं कुरुत।"
        }
      ]
    },
    about: {
      title: "हर्नानेन सह मिलतु",
      subtitle: "पवित्र सिदु रक्षकः",
      description: [
        "<strong>हर्नानः (Hernan Colque)</strong> एकः क्वेशुआ (Quechua) देशीयः अस्ति तथा <strong>वाचुमा (San Pedro) संस्काराणां</strong> एकः समर्पितः सुगमकर्ता अस्ति, यः अण्डीज पर्वतस्य पवित्रपरम्परासु गभीरं रूढः अस्ति। <strong>पिसक् (Pisac)</strong> इत्यस्य उच्च-उन्नयन-समुदाये <strong>वियाचा (Viacha)</strong> इत्यत्र ५००० मीटरतः अधिके जातः, हर्नानः औषधीय-चिकित्सा-वंशं वहति यत् पूर्व-इन्का-काले अस्ति।",
        "पैतृकपरम्परानुसारं, प्रति पीढीं केवलं एकः बालः एव एतं मार्गं उत्तराधिकारं प्राप्तुं शक्नोति, सः च स्वेच्छया तस्य चयनं कर्तव्यम्। तस्य पितामहः कार्मेन् इत्यस्मात् तस्य पिता बेनिन्हो इत्यस्मै ज्ञानं प्राप्तम्। सप्तसहोदराणां मध्ये, हर्नानः अतीव बाल्यकाले एव ओषधिं चितवान्, अस्य प्राचीनपरम्परायाः <strong>पचममया (मातृपृथिव्या)</strong> सह तस्य गभीरसम्बन्धस्य च एकमात्रः वाहकः अभवत्।",
        "<strong>पिसक् तथा वियाचा, द्वे पवित्र स्थाने।</strong> वयं पवित्र उपत्यकायाः जीवन्त नगरे <strong>पिसक्</strong> मध्ये स्थिताः स्मः, यत्र वयं संस्कारान् आयोजयामः तथा <strong>वयना वसि होटले</strong> शान्तं आवासं यच्छामः। गभीर निमज्जनाय, अस्माकं बहुदिवसीय शिबिराणि पिसक् उपरि शान्त समुदाय <strong>वियाचा</strong> मध्ये भवन्ति। अत्र, भागिनः स्थानीय परम्पराभिः सह मिलन्ति पर्वतानां शान्तिं च अनुभवन्ति—गभीर वाचुमा अनुभवाय उत्तमम्।"
      ]
    },
    services: {
      title: "अस्माकं प्रदानान",
      items: [
        {
          title: "२ दिवसीय शिबिरम्",
          description: "वयना वसि तथा किन्साकोच इत्यत्र गभीरं निमज्जनम्। सज्जता, संस्कारः, आवासः च।",
          price: "पृच्छतु"
        },
        {
          title: "१५ दिवसीय गभीर परिवर्तन",
          description: "आत्म-आविष्कारस्य चिकित्सायाः च गभीरा यात्रा। अस्य गहनशिबिरस्य विषये विवरणार्थं पृच्छतु।",
          price: "पृच्छतु"
        },
        {
          title: "व्यक्तिगत चिकित्सा",
          description: "भवतः विशिष्टाध्यात्मिकभावनात्मक आवश्यकताभ्यः अनुकूलिताः एकैकं सत्रम्। गभीरबाधा निवारणम्।",
          price: "पृच्छतु"
        }
      ],
      ausangateCta: {
        title: "विशेष शिबिरम्: औसंगते अभियानम्",
        description: "पवित्र पर्वत औसंगते प्रति ७ दिवसानां परिवर्तनकारी यात्रायां अस्माभिः सह सम्मिलितुं। उष्णस्रोताः, पदयात्रा, गभीर ओषधिकार्यं च।",
        button: "यात्राक्रमं पश्यतु"
      }
    },
    ausangate: {
      title: "औसंगते पवित्र यात्रा",
      subtitle: "जनवरी ३, २०२६ - उच्च अण्डीज पर्वते ७ दिवसानां चिकित्सा",
      description: "पच्चान्तायाः चिकित्साजलानाम्, अपु औसंगते इत्यस्य भव्योपस्थितेः, वाचुमा-तेमास्कल् इत्ययोः परिवर्तनकारीशक्तेः च संयोगं कुर्वती गभीरा अभियानम्।",
      cta: "स्वस्थानं आरक्षयतु",
      itinerary: [
        {
          day: "दिनम् १",
          title: "आगमनं शुद्धिः च",
          description: "पच्चान्ता प्रति यात्रा। शरीरं शुद्धीकर्तुं प्राकृतिक उष्णजले विश्रामः, ततः अस्माकं संकल्पान् स्थापयितुं औसंगते प्रति पदयात्रा।"
        },
        {
          day: "दिनम् २",
          title: "प्रथम वाचुमा संस्कारः",
          description: "अपुं प्रति हृदयं उद्घाटनम्। पर्वतस्य आत्मना विशाल अण्डीज आकाशेन सह संयोगं कुर्वन् दिवससंस्कारः।"
        },
        {
          day: "दिनम् ३",
          title: "तेमास्कल् (स्वेद कुटीर)",
          description: "मातृपृथिव्याः गर्भं प्रतिनिधियन्ती पारम्परिक वाष्पस्नानविधिः। शारीरिक आध्यात्मिक विषहरणम्।",
        },
        {
          day: "दिनम् ४",
          title: "द्वितीय वाचुमा संस्कारः",
          description: "यात्रां गभीरीकरणम्। आन्तरिकबाधाः कार्यं कृत्वा उच्चस्थानानां मौने चेतनायाः विस्तारः।"
        },
        {
          day: "दिनम् ५",
          title: "तेमास्कल्",
          description: "प्राप्त ऊर्जाः स्थापयितुं आत्मानं च अधिकं शुद्धीकर्तुं द्वितीयः स्वेदकुटीरसंस्कारः।"
        },
        {
          day: "दिनम् ६",
          title: "तृतीय वाचुमा एकीकरणं च",
          description: "अन्तिम ओषधिसंस्कारः। एकीकरणे, कृतज्ञतायां, सप्ताहकाले प्राप्तचिकित्सायाः मुद्रांकने च ध्यानम्।"
        },
        {
          day: "दिनम् ७",
          title: "प्रत्यागमन यात्रा",
          description: "पर्वतात् अधः पदयात्रा, पच्चान्ता उष्णस्रोतेषु अन्तिमस्नानं, पिसक् प्रति परिवहनं च।"
        }
      ]
    },
    retreat2Day: {
        title: "२ दिवसीय शिबिरम्",
        subtitle: "वयना वसि तथा किन्साकोच",
        intro: "पवित्र ओषध्यां गभीरं निमज्जनम्, वयना वसि आश्रये पिसक् पर्वतयोः मध्ये च आयोजितम्।",
        days: [
            {
                title: "दिनम् १ : सज्जता तथा वयना वसि आगमनम्",
                content: "वयना वसि आगमने, भागिनः पवित्र पेयस्य (वाचुमा) सज्जतया सह यात्रां आरभन्ते। एषः अनुभवः ओषध्या सह पवित्रं सम्बन्धं रचयति।",
                accommodation: "वयना वसि आश्रये रात्रिं यापयतु, यत्र अण्डीज आत्मा सर्वदा वर्तते।"
            },
            {
                title: "दिनम् २ : किन्साकोच, पिसक् इत्यत्र संस्कारः",
                content: "द्वितीयदिवसे, वयं किन्साकोच पवित्रस्थानं गमिष्यामः, यत्र वाचुमा संस्कारः भविष्यति। हर्नानस्य मार्गदर्शनेन, भागिनः आत्मानं अन्वेषयिष्यन्ति।",
                accommodation: "शान्त रात्रये वयना वसि प्रति प्रत्यागमनम्।"
            }
        ],
        conclusion: "भागिनः नवीकृत उद्देशेन सह गमिष्यन्ति, वाचुमा अनुभवेन पचममायाः ज्ञानेन च शक्ताः।"
    },
    preparation: {
        title: "वाचुमा शिबिराय सज्जता",
        subtitle: "अण्डीज समुदायस्य भविष्यं सशक्तं कुरुत",
        intro: "भवतः परिवर्तनकारी त्रिदिवसीय वाचुमा शिबिरे स्वागतम्! अस्य अनुभवस्य कृते, कृपया शारीरिकं मानसिकं च सज्जतां कुरुत।",
        diet: {
            title: "सज्जता: लघुआहारः तथा संकल्पः",
            description: "शिबिरात् पूर्वं, लघुआहारः शरीरं मनः च उद्घाटयितुं साहाय्यं करोति। आगमनात् ३-५ दिनानि पूर्वं एतत् अनुसरतु:",
            items: [
                { label: "शाकाहारी आहारः", text: "मांसं पशूत्पादान् च परिहरतु।" },
                { label: "शर्करा मास्तु", text: "संसाधित शर्करां मा खादतु।" },
                { label: "उत्तेजकानि मास्तु", text: "कॉफी (Caffeine), मद्यं च न्यूनीकुरुत।" },
                { label: "लघुआहारः", text: "भर्जितं भोजनं दुग्धपदार्थान् च परिहरतु।" },
                { label: "जलपानम्", text: "शरीरशुद्धये पर्याप्तं जलं पिबतु।" },
                { label: "संकल्पः", text: "प्रतिदिनं ध्यानेन वा चिन्तनेन शिबिराय संकल्पं स्थापयतु।" }
            ]
        },
        packing: {
            title: "संस्कार दिवसः",
            description: "संस्कारदिवसे, कृपया एतानि वस्तूनि आनयतु:",
            items: [
                { label: "सुखदवस्त्राणि", text: "शिथिलानि वस्त्राणि धारयतु।" },
                { label: "टोपिका (Hat)", text: "सूर्यात् रक्षणाय टोपिकां आनयतु।" },
                { label: "उपहारः", text: "संस्काराय फलं पुष्पं वा आनयतु। एतत् कृतज्ञतां प्रदर्शयति।" },
                { label: "जलपात्रम्", text: "जलं पातुं पात्रं आनयतु।" },
                { label: "लेखनी तथा पुस्तिका", text: "अनुभवान् लेखितुं पुस्तिकां आनयतु।" }
            ]
        },
        suggestions: {
            title: "अतिरिक्ताः सुझावाः",
            description: "यात्रां उत्तमं कर्तुं:",
            items: [
                { label: "मौनं पालयतु", text: "चिन्तनाय मौनस्य उपयोगं कुरुत।" },
                { label: "प्राणायामः तथा ध्यानम्", text: "श्वासक्रिया ध्यानेन च शान्तिं प्राप्नोतु।" },
                { label: "डिजिटल डिटॉक्स", text: "दूरवाणीं (Phone) त्यजतु।" },
                { label: "प्रकृत्या सह संयोगः", text: "प्रतिदिनं प्रकृतौ समयं यापयतु।" }
            ]
        },
        closing: "सज्जतया श्रद्धया च, वाचुमा ओषधिः भवन्तं गभीर मार्गे नेष्यति।",
        risks: {
            title: "महत्वपूर्ण सूचना: आपत्तयः तथा दायित्वम्",
            intro: "एषः शिबिरः सुरक्षितः अस्ति, परन्तु वाचुमा संस्कारे शारीरिक मानसिक आपत्तयः सन्ति। कृपया एतत् पठतु:",
            sections: [
                {
                    title: "स्वास्थ्य प्रकटीकरणम्",
                    items: [
                        { label: "चिकित्सा स्थितिः", text: "हृदयरोगः वा मानसिकरोगः अस्ति चेत् कृपया सूचयतु।" },
                        { label: "औषधयः", text: "केचन औषधयः वाचुमायाः सह प्रतिकूलाः भवितुं अर्हन्ति। कृपया सूचयतु।" },
                        { label: "शारीरिक संवेदनशीलता", text: "वामनं वा हृदयस्पंदनस्य वृद्धिः भवितुं अर्हति।" }
                    ]
                },
                {
                    title: "मानसिक आपत्तयः",
                    items: [
                        { label: "तीव्र अनुभवाः", text: "गभीर भावनाः उद्भवितुं शक्नुवन्ति।" },
                        { label: "एकीकरण सहयोगः", text: "शिबिरात् अनन्तरं, अनुभवान् अवगन्तुं समयं ददातु।" }
                    ]
                },
                {
                    title: "व्यक्तिगत दायित्वम्",
                    items: [
                        { label: "सहमतिः", text: "भवान् स्वेच्छया भागं गृह्णाति इति स्वीकरोतु।" },
                        { label: "सुरक्षा नियमाः", text: "सर्वेषां सुरक्षा नियमानां पालनं कुरुत।" }
                    ]
                }
            ]
        }
    },
    testimonials: {
      title: "हृदयात् स्वराः",
      items: [
        {
          name: "Sarah J.",
          location: "USA",
          text: "हर्नानेन सह मम अनुभवेन मम जीवनं परिवर्तितम्। अहं पृथिव्या सह तादृशं सम्बन्धं अनुभूतवान् यत् पूर्वं कदापि न अनुभूतवान्।"
        },
        {
          name: "Marc D.",
          location: "France",
          text: "प्रामाणिकं, शक्तिशाली, सुरक्षितं च। हर्नानः ओषधेः सत्यः गुरुः अस्ति।"
        }
      ]
    },
    contact: {
      title: "संपर्कं कुरुत",
      form: {
        name: "भवतः नाम",
        email: "भवतः ईमेल",
        message: "भवतः संदेशः",
        submit: "संदेशं प्रेषयतु"
      },
      info: "वयं पवित्र उपत्यकायाः हृदये, काल्का, कुस्को समीपे स्थिताः स्मः।"
    },
    footer: {
      ...footerDefault,
      description: "वाचुमायाः परिवर्तनकारीशक्तिं अनुभवतु, या पवित्र अण्डीज ओषधिः 'San Pedro' इति नाम्ना प्रसिद्धा। हर्नानेन सह संस्कारेषु सम्मिलितुं, यः भवन्तं अन्तरात्मना सह पुनः संयोजयितुं, गभीरं स्वस्थं कर्तुं, कुस्को समीपे, पेरु देशस्य पवित्र उपत्यकायाः हृदये आत्मानं जागृतुं च साहाय्यं करिष्यति।",
      columns: {
        ...footerDefault.columns,
        links: {
            title: "सम्बन्धाः",
            items: [
                { label: "कुटुम्बम्", href: "/about" },
                { label: "समुदायः", href: "/about" },
                { label: "संपर्कः", href: "/contact" }
            ]
        }
      }
    }
  }
};