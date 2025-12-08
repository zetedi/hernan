import { Language, TranslationData } from './types';

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.jpg",
  about: "/about.jpg",
  ausangate: "/ausangate.jpg",
  mayra: "/mayra.jpg",
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
        title: "Ausangate Journey"
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
          title: "Day Ceremony",
          description: "A full day immersion in nature, connecting with the medicine under the sun. Includes cleansing and integration.",
          price: "$150"
        },
        {
          title: "Full Moon Retreat",
          description: "Experience the magic of Wachuma under the light of the full moon. A night of fire, music, and deep healing.",
          price: "$200"
        },
        {
          title: "2 Day Retreat",
          description: "Deep immersion at Wayna Wasi and Kinsacocha. Preparation, Ceremony, and Accommodation included.",
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
      subtitle: "7 Days of Healing in the High Andes",
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
    footer: {
      rights: "All rights reserved."
    }
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
        title: "Viaje al Ausangate"
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
        "Hernan ha dedicado su vida al estudio y preservación de la sabiduría ancestral andina. Nacido en el corazón de los Andes, lleva el linaje de sus antepasados, compartiendo el poder curativo del cactus Wachuma (San Pedro).",
        "Sus ceremonias no son solo rituales; son viajes profundos hacia el ser, guiados por los espíritus de las montañas (Apus) y la Madre Tierra (Pachamama). Con más de 20 años de experiencia, Hernan brinda un espacio seguro, auténtico y transformador."
      ]
    },
    services: {
      title: "Nuestros Servicios",
      items: [
        {
          title: "Ceremonia de Día",
          description: "Una inmersión de día completo en la naturaleza, conectando con la medicina bajo el sol. Incluye limpieza e integración.",
          price: "$150"
        },
        {
          title: "Retiro de Luna Llena",
          description: "Experimenta la magia del Wachuma bajo la luz de la luna llena. Una noche de fuego, música y sanación profunda.",
          price: "$200"
        },
        {
          title: "Retiro de 2 Días",
          description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Preparación, Ceremonia y Alojamiento incluidos.",
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
      subtitle: "7 Días de Sanación en los Andes Altos",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "Todos los derechos reservados."
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
        title: "Apu Ausangate Puririy"
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
        "Hernanqa tukuy kawsayninta churarqan Andes yachaykunata waqaychayman. Andes sunqunpi paqarisqa, ñawpa taytankunaq yachayninta apamun, Wachuma (San Pedro) hampiyta runakunaman qaraspa.",
        "Paypa ruwayninkunaqa manan haywarikuyllachu; ukhunchikman puririymi, Apukunaq Pachamamaq pusasqan. 20 wata masñan kaypi llank'an, Hernanqa chiqaq, qhali, allin tinkuyta qusunki."
      ]
    },
    services: {
      title: "Ruwaykuna",
      items: [
        {
          title: "P'unchay Ceremonia",
          description: "Tukuy p'unchaw pachamamawan tinkuy, inti k'anchaypi. Ch'uyanchakuywan ima.",
          price: "$150"
        },
        {
          title: "Killa Hunt'a",
          description: "Wachumaq kallpanta riqsiy killa k'anchaypi. Nina, taki, ukhu hampikuy tuta.",
          price: "$200"
        },
        {
          title: "2 P'unchaw T'aqakuy",
          description: "Wayna Wasipi Kinsacochapi ima. Wakichikuy, Ceremonia, Puñuna ima.",
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
      subtitle: "7 P'unchaw Hampi Hanan Andespi",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "Tukuy derechokuna waqaychasqa."
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
        title: "رحلة أوسانجاتي"
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
        "كرس هيرنان حياته لدراسة وحفظ حكمة الأنديز القديمة. ولد في قلب الأنديز، ويحمل سلالة أسلافه، ويشارك القوة الشفائية لصبار واتشوما (سان بيدرو).",
        "احتفالاته ليست مجرد طقوس؛ إنها رحلات عميقة داخل الذات، تسترشد بأرواح الجبال (آبوس) والأرض الأم (باتشاماما). مع أكثر من 20 عامًا من الخبرة، يوفر هيرنان مساحة آمنة وحقيقية وتحويلية."
      ]
    },
    services: {
      title: "خدماتنا",
      items: [
        {
          title: "احتفال نهاري",
          description: "انغماس كامل ليوم واحد في الطبيعة، والتواصل مع الطب تحت الشمس. يشمل التطهير والتكامل.",
          price: "$150"
        },
        {
          title: "خلوة البدر",
          description: "جرب سحر واتشوما تحت ضوء البدر. ليلة من النار والموسيقى والشفاء العميق.",
          price: "$200"
        },
        {
          title: "خلوة لمدة يومين",
          description: "انغماس عميق في واينا واسي وكينساكوتشا. يشمل التحضير والاحتفال والإقامة.",
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
      subtitle: "7 أيام من الشفاء في أعالي الأنديز",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "جميع الحقوق محفوظة."
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
        title: "アウサンガテへの旅"
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
        "ヘルナンは、アンデスの先祖代々の知恵の研究と保存に人生を捧げてきました。アンデスの中心で生まれた彼は、先祖の血統を受け継ぎ、ワチュマ（サンペドロ）サボテンの治癒力を共有しています。",
        "彼のセレモニーは単なる儀式ではありません。それは、山の精霊（アプ）と母なる大地（パチャママ）に導かれた、自己への深い旅です。20年以上の経験を持つヘルナンは、安全で、本物の、変容的な空間を提供します。"
      ]
    },
    services: {
      title: "私たちの提供するもの",
      items: [
        {
          title: "デイセレモニー",
          description: "太陽の下で薬とつながり、自然に一日中浸ります。浄化と統合が含まれます。",
          price: "$150"
        },
        {
          title: "満月リトリート",
          description: "満月の光の下でワチュマの魔法を体験してください。火、音楽、そして深い癒しの夜。",
          price: "$200"
        },
        {
          title: "2日間リトリート",
          description: "ワイナ・ワシとキンサコチャでの深い没入。準備、セレモニー、宿泊が含まれます。",
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
      subtitle: "アンデス高地での7日間の癒し",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "全著作権所有。"
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
        title: "Ausangate Utazás"
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
        "Hernan életét az andoki ősi bölcsesség tanulmányozásának és megőrzésének szentelte. Az Andok szívében született, ősei vonalát viszi tovább, megosztva a Wachuma (San Pedro) kaktusz gyógyító erejét.",
        "Szertartásai nem csupán rituálék; mély utazások az önvalóba, a hegyek szellemei (Apuk) és a Földanya (Pacha Mama) vezetésével. Több mint 20 éves tapasztalattal Hernan biztonságos, hiteles és átalakító teret biztosít."
      ]
    },
    services: {
      title: "Ajánlataink",
      items: [
        {
          title: "Nappali Szertartás",
          description: "Egész napos elmerülés a természetben, kapcsolódás a gyógyító erővel a nap alatt. Tisztítást és integrációt tartalmaz.",
          price: "$150"
        },
        {
          title: "Telihold Elvonulás",
          description: "Tapasztald meg a Wachuma varázsát a telihold fénye alatt. Tűz, zene és mély gyógyulás éjszakája.",
          price: "$200"
        },
        {
          title: "2 Napos Elvonulás",
          description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában. Felkészülés, Szertartás és Szállás.",
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
      subtitle: "7 Nap Gyógyulás a Magas Andokban",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "Minden jog fenntartva."
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
        title: "औसंगते यात्रा"
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
        "हर्नानः अण्डीज पर्वतस्य पूर्वजज्ञानस्य अध्ययने संरक्षणे च स्वजीवनं समर्पितवान्। अण्डीज पर्वतस्य हृदये जातः सः स्वपूर्वजानां वंशं वहति, वाचुमा (San Pedro) सिदुना चिकित्साशक्तिं वितरति।",
        "तस्य संस्काराः न केवलं कर्मकाण्डाः; ते पर्वतानां (Apus) पृथिव्याः (Pachamama) च आत्मभिः मार्गदर्शिते आत्मनि गभीराः यात्राः सन्ति। २० वर्षाणाम् अधिकानुभवेन सह, हर्नानः सुरक्षितं, प्रामाणिकं, परिवर्तनकारी च स्थानं ददाति।"
      ]
    },
    services: {
      title: "अस्माकं प्रदानान",
      items: [
        {
          title: "दिवस संस्कारः",
          description: "सूर्यस्य अधः ओषध्या सह संयोगं कृत्वा प्रकृतौ पूर्णदिवसस्य निमज्जनम्। शुद्धिः एकीकरणं च सम्मिलितम्।",
          price: "$150"
        },
        {
          title: "पूर्णचन्द्र शिबिरम्",
          description: "पूर्णचन्द्रस्य प्रकाशे वाचुमायाः जादू अनुभवतु। अग्नेः, संगीतस्य, गभीरचिकित्सायाः च रात्रिः।",
          price: "$200"
        },
        {
          title: "२ दिवसीय शिबिरम्",
          description: "वयना वसि तथा किन्साकोच इत्यत्र गभीरं निमज्जनम्। सज्जता, संस्कारः, आवासः च।",
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
      subtitle: "उच्च अण्डीज पर्वते ७ दिवसानां चिकित्सा",
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
    retreat2Day: retreat2DayDefault,
    preparation: preparationDefault,
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
      rights: "सर्वाधिकारः सुरक्षितः।"
    }
  }
};