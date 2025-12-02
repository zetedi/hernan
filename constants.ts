import { Language, TranslationData } from './types';

// SVG Data URI for the Cactus Logo
const LOGO_SVG = `data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0NSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRThCOTIzIiBzdHJva2Utd2lkdGg9IjIiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyNSAyNSkiPjxwYXRoIGQ9Ik0yNSA1MCBMMjUgMTAgQzI1IDUgMzUgNSAzNSAxMCBMMzUgNTAgTTI1IDMwIEwxNSAzMCBDNSAzMCA1IDE1IDE1IDE1IEwyNSAyMCBNMzUgMzAgTDQ1IDMwIEM1NSAzMCA1NSAxNSA0NSAxNSBMMzUgMjAiIGZpbGw9IiM4QTlBNkEiIHN0cm9rZT0iIzI2MjAxQiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48L2c+PC9zdmc+`;

export const IMAGES = {
  logo: "/img/logo.svg",
  hero: "/img/hero.jpg",
  about: "/img/about.jpg",
  gallery: [
    "/img/gallery/1.jpg",
    "/img/gallery/2.jpg",
    "/img/gallery/3.jpg",
    "/img/gallery/4.jpg",
    "/img/gallery/5.jpg",
    "/img/gallery/6.jpg",
    "/img/gallery/7.jpg",
    "/img/gallery/8.jpg",
    "/img/gallery/9.jpg",
    "/img/gallery/10.jpg",
    "/img/gallery/11.jpg",
    "/img/gallery/12.jpg",
    "/img/gallery/13.jpg",
    "/img/gallery/14.jpg",
    "/img/gallery/15.jpg",
    "/img/gallery/16.jpg",
    "/img/gallery/17.jpg",
    "/img/gallery/18.jpg",
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
      cta: "Book a Ceremony"
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
      cta: "Reserva una Ceremonia"
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
      cta: "Hampiyta mañakuy"
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
      cta: "احجز احتفالاً"
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
  }
};