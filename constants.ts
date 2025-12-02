import { Language, TranslationData } from './types';

export const IMAGES = {
  hero: "/img/alpacas.jpg",
  about: "img/ag.jpg",
  gallery: [
    "https://picsum.photos/seed/ceremony1/600/400",
    "https://picsum.photos/seed/ceremony2/400/600",
    "https://picsum.photos/seed/ceremony3/600/600",
    "https://picsum.photos/seed/ceremony4/600/800",
    "https://picsum.photos/seed/ceremony5/600/400",
    "https://picsum.photos/seed/ceremony6/400/400",
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
      home: "Qallariy", // Start/Home
      about: "Hernanmanta", // About Hernan
      services: "Ruwaykuna", // Ceremonies/Activities
      gallery: "Rikch'akuna", // Images
      contact: "Willanakuy" // Contact
    },
    hero: {
      title: "Andespi Hampi Wachuma",
      subtitle: "Pachamamawan tinkuy, ñawpa Wachuma hampiywan Valle Sagradopi.",
      cta: "Hampiyta mañakuy"
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
  }
};