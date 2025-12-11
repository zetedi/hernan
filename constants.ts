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

// Helper for 1-Day Retreat data
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

// Helper for Costa Rica Data (Shared across languages for now as provided in English)
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

export const TRANSLATIONS: Record<Language, TranslationData> = {
  [Language.EN]: enTranslations,
  [Language.ES]: {
      ...enTranslations, 
      nav: { home: "Inicio", about: "La Familia", services: "Ceremonies", gallery: "Galería", contact: "Contacto" },
      hero: {
          title: "Medicina Sagrada de los Andes",
          subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
          cta: "Reserva una Ceremonia",
          ausangateTeaser: { label: "Inclusivo", title: "Viaje al Ausangate", date: "3 de Enero, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "Próximamente" }
      },
      services: {
          title: "Nuestros Servicios",
          items: [
            { title: "Retiro de 2 Días", description: "Inmersión profunda. Costo base $173 (1 persona). Persona extra +$70. Alojamiento +$20/persona. Máx 10 personas.", price: "$173+" },
            { title: "Ceremonia de 1 Día", description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", price: "$250" },
            { title: "Peregrinaje a Costa Rica", description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", price: "Consultar" },
            { title: "Sanación Privada", description: "Sesiones individuales adaptadas a tus necesidades. Eliminación de bloqueos profundos.", price: "Consultar" }
          ],
          ausangateCta: { title: "Retiro Especial: Expedición Ausangate", description: "Únete a un viaje transformador de 7 días.", button: "Ver Itinerario" }
      },
      about: {
        title: "Conoce a Hernan",
        subtitle: "Guardián del Cactus Sagrado",
        description: [
            "<strong>Hernan Colque</strong> es nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>...",
            "Según la tradición ancestral, solo un hijo por generación puede heredar este camino...",
            "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la provincia de Espinar...",
            "<strong>El Espíritu del Wachuma.</strong> Existe un dicho de que el espíritu del Wachuma conectó primero...",
            "<strong>Pisac y Viacha.</strong> Estamos ubicados en <strong>Pisac</strong>..."
        ]
      },
      retreat1Day: {
          title: "Ceremonia de 1 Día",
          subtitle: "Sitios Sagrados del Valle",
          intro: "Un viaje enfocado y profundo en la medicina, realizado en varios lugares sagrados.",
          days: [
              {
                  title: "La Ceremonia",
                  content: "Comenzamos temprano en la mañana, viajando a un sitio sagrado cuidadosamente seleccionado.",
                  accommodation: "El alojamiento no está incluido, pero se organiza el transporte."
              }
          ],
          conclusion: "Un reinicio poderoso y reconexión con el mundo natural."
      }
  },
  [Language.QU]: {
      ...enTranslations,
      nav: { home: "Qallariy", about: "Ayllu", services: "Ruwaykuna", gallery: "Rikch'akuna", contact: "Willanakuy" },
      services: {
          title: "Ruwaykuna",
          items: [
            { title: "2 P'unchaw T'aqakuy", description: "Qallariy $173. Wayna Wasipi Kinsacochapi ima.", price: "$173+" },
            { title: "1 P'unchaw Ceremonia", description: "Iskay runamanta qallarispa. Hampiwan tinkuy imaymana wak'akunapi.", price: "$250" },
            { title: "Costa Rica Puririy", description: "Hatun puririy Costa Rica suyupi.", price: "Tapukuy" },
            { title: "Sapalla Hampikuy", description: "Sapallaykipar kikiykipaq hampiy.", price: "Tapukuy" }
          ],
          ausangateCta: { title: "Hatun Puririy: Ausangate", description: "Qanchis p'unchaw puririy Apu Ausangatewan.", button: "Qhaway" }
      }
  },
  [Language.AR]: {
      ...enTranslations,
      services: {
          title: "خدماتنا",
          items: [
            { title: "خلوة لمدة يومين", description: "انغماس عميق في واينا واسي وكينساكوتشا.", price: "$173+" },
            { title: "احتفال ليوم واحد", description: "رحلة مقدسة لعدد لا يقل عن شخصين.", price: "$250" },
            { title: "حج كوستاريكا", description: "رحلة مقدسة تربط بين جبال الأنديز والمحيط في كوستاريكا.", price: "استفسر" },
            { title: "شفاء خاص", description: "جلسات فردية مصممة لاحتياجاتك الروحية.", price: "استفسر" }
          ],
          ausangateCta: { title: "خلوة خاصة: رحلة أوسانجاتي", description: "انضم إلينا في رحلة تحويلية مدتها 7 أيام.", button: "عرض خطة الرحلة" }
      }
  },
  [Language.JA]: {
      ...enTranslations,
      services: {
          title: "私たちの提供するもの",
          items: [
            { title: "2日間リトリート", description: "ワイナ・ワシとキンサコチャでの深い没入。", price: "$173+" },
            { title: "1日セレモニー", description: "最低2名様からの聖なる旅。", price: "$250" },
            { title: "コスタリカ巡礼", description: "コスタリカでのアンデスと海を結ぶ聖なる旅。", price: "お問い合わせ" },
            { title: "プライベートヒーリング", description: "あなたの特定のニーズに合わせたマンツーマンセッション。", price: "お問い合わせ" }
          ],
          ausangateCta: { title: "特別リトリート：アウサンガテ遠征", description: "聖なる山アウサンガテへの7日間の変容の旅。", button: "旅程を見る" }
      }
  },
  [Language.HU]: {
      ...enTranslations,
      services: {
          title: "Ajánlataink",
          items: [
            { title: "2 Napos Elvonulás", description: "Mély elmélyülés a Wayna Wasi-ban és Kinsacochában.", price: "$173+" },
            { title: "1 Napos Szertartás", description: "Szent utazás minimum 2 fő részére.", price: "$250" },
            { title: "Costa Rica-i Zarándoklat", description: "Szent utazás, amely összeköti az Andokat és az Óceánt Costa Ricában.", price: "Érdeklődj" },
            { title: "Privát Gyógyítás", description: "Személyre szabott egyéni ülések.", price: "Érdeklődj" }
          ],
          ausangateCta: { title: "Különleges Elvonulás: Ausangate Expedíció", description: "Csatlakozz hozzánk egy 7 napos átalakító utazásra.", button: "Útiterv Megtekintése" }
      }
  },
  [Language.SA]: {
      ...enTranslations,
      services: {
          title: "अस्माकं प्रदानान",
          items: [
            { title: "२ दिवसीय शिबिरम्", description: "वयना वसि तथा किन्साकोच इत्यत्र गभीरं निमज्जनम्।", price: "$173+" },
            { title: "१ दिवसीय संस्कारः", description: "न्यूनतमं २ जनानां कृते पवित्रा यात्रा।", price: "$250" },
            { title: "कोस्टारिका तीर्थयात्रा", description: "कोस्टारिका देशे अण्डीज-समुद्रयोः संयोगः।", price: "पृच्छतु" },
            { title: "व्यक्तिगत चिकित्सा", description: "भवतः आवश्यकताभ्यः अनुकूलिताः एकैकं सत्रम्।", price: "पृच्छतु" }
          ],
          ausangateCta: { title: "विशेष शिबिरम्: औसंगते अभियानम्", description: "पवित्र पर्वत औसंगते प्रति ७ दिवसानां यात्रा।", button: "यात्राक्रमं पश्यतु" }
      }
  }
};