import { Language, TranslationData } from './types';

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.jpg",
  about: "/about.jpg",
  ausangate: "/ausangate.jpg", // Make sure to add this image
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

export const TRANSLATIONS: Record<Language, TranslationData> = {
  [Language.EN]: {
    nav: {
      home: "Home",
      about: "About Hernan",
      services: "Ceremonies",
      gallery: "Gallery",
      contact: "Contact"
    },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      ausangateTeaser: {
        label: "Exclusive",
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
        "Hernan has dedicated his life to the study and preservation of Andean ancestral wisdom. Born in the heart of the Andes, he carries the lineage of his ancestors, sharing the healing power of the Wachuma (San Pedro) cactus.",
        "His ceremonies are not just rituals; they are deep journeys into the self, guided by the spirits of the mountains (Apus) and Mother Earth (Pachamama). With over 20 years of experience, Hernan provides a safe, authentic, and transformative space."
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
      about: "Sobre Hernan",
      services: "Ceremonias",
      gallery: "Galería",
      contact: "Contacto"
    },
    hero: {
      title: "Medicina Sagrada de los Andes",
      subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
      cta: "Reserva una Ceremonia",
      ausangateTeaser: {
        label: "Exclusivo",
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
      about: "Hernanmanta",
      services: "Ruwaykuna",
      gallery: "Rikch'akuna",
      contact: "Willanakuy"
    },
    hero: {
      title: "Andespi Hampi Wachuma",
      subtitle: "Pachamamawan tinkuy, ñawpa Wachuma hampiywan Valle Sagradopi.",
      cta: "Hampiyta mañakuy",
      ausangateTeaser: {
        label: "Sapaq",
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
      about: "عن هيرنان",
      services: "الاحتفالات",
      gallery: "المعرض",
      contact: "اتصل بنا"
    },
    hero: {
      title: "الطب المقدس للأنديز",
      subtitle: "أعد الاتصال بـ باتشاماما من خلال احتفالات واتشوما التقليدية في الوادي المقدس.",
      cta: "احجز احتفالاً",
      ausangateTeaser: {
        label: "حصري",
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
      about: "ヘルナンについて",
      services: "セレモニー",
      gallery: "ギャラリー",
      contact: "お問い合わせ"
    },
    hero: {
      title: "アンデスの聖なる薬",
      subtitle: "聖なる谷で伝統的なワチュマセレモニーを通じてパチャママと再びつながりましょう。",
      cta: "セレモニーを予約する",
      ausangateTeaser: {
        label: "限定",
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
  }
};