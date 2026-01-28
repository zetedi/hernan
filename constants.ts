import { Language, TranslationData } from './types';

// Dynamically generate gallery images from photo1.jpg to photo29.jpg
const galleryImages = Array.from({ length: 29 }, (_, i) => `/gallery/photo${i + 1}.jpg`);

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.jpg",
  about: "/about.jpg",
  canyon: "/canyon.jpg",
  ruins: "/ruins.jpg",
  flowers: "/flowers.jpg",
  ausangate: "/ausangate.jpg",
  ausangate3: "/ausangate3.jpg",
  hat: "/hat.jpg",
  costa: "/costa.jpg",
  cr1: "/cr1.jpg",
  cr2: "/cr2.jpg",
  cr3: "/cr3.jpg",
  crbg: "/crbg.jpg",
  diamante1: "/diamante1.jpg",
  diamante2: "/diamante2.jpg",
  chirripo1: "/chirripo1.jpg",
  chirripo2: "/chirripo2.jpg",
  chirripo3: "/chirripo3.jpg",
  chirripo4: "/chirripo4.jpg",
  chirripo5: "/chirripo5.jpg",
  chirripo6: "/chirripo6.jpg",
  chirripo7: "/chirripo7.jpg",
  mayra: "/mayra.jpg",
  drum: "/drum.jpg",
  wachuma: "/wachuma.jpg",
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
  bungalow: "/bungalow.jpg",
  zoltan: "/zoltan.jpg",
  kittel: "/kittel.jpg",
  juchuy: "/juchuy.jpg",
  maestros: "/maestros.jpg",
  gallery: galleryImages
};

export const CREDITS: Record<string, string> = {
    chirripo1: `Photo by <a href="https://unsplash.com/@azzamaulana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Azza Maulana</a> on <a href="https://unsplash.com/photos/a-waterfall-in-the-middle-of-a-forest-iBRtUZd7ykQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo2: `Photo by <a href="https://unsplash.com/@fatihsimsek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Fatih Simsek</a> on <a href="https://unsplash.com/photos/a-green-parrot-perched-on-top-of-a-tree-branch-bBK5m8pPf9w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo3: `Photo by <a href="https://unsplash.com/@moisesvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Moises Guillen</a> on <a href="https://unsplash.com/photos/a-green-plant-in-a-field-JxeoLcp-wuo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo4: `Photo by <a href="https://unsplash.com/@abhiver?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Abhi Verma</a> on <a href="https://unsplash.com/photos/mountain-and-forest-landscape-with-a-resort-at-the-bottom-x2AenH9eQhk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo5: `Photo by <a href="https://unsplash.com/@patresinger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Patrick Langwallner</a> on <a href="https://unsplash.com/photos/aerial-view-of-green-trees-beside-body-of-water-during-daytime-LUN3Yb6U-U4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo6: `Photo by <a href="https://unsplash.com/@hdbernd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/photos/a-waterfall-with-a-man-standing-in-front-of-it-D7rcTJDZEDM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo7: `Photo by <a href="https://unsplash.com/@ehmoy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Moisés Vazquez</a> on <a href="https://unsplash.com/photos/green-trees-near-river-under-cloudy-sky-during-daytime-pMYmKvVsCss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`
};

const costaRicaItinerary = [
    { day: "Feb 21st", title: "Opening Ceremony", description: "Opening Ceremony by the Pacific Ocean." },
    { day: "Feb 24th", title: "Primary Rainforests", description: "Connection with the Primary Rainforests of the Diamante Valley." },
    { day: "Feb 25th", title: "Opening of the Medicinal Journey", description: "Beginning our deep immersion in the sacred mountains of El Chirripó." },
    { day: "Mar 3rd", title: "Lunar Eclipse Celebration", description: "Celebrating Lunar Eclipse at Sondero Gigante with the Indigenous tribes of Costa Rica." },
    { day: "Mar 4th", title: "Closing Circle", description: "Final integration and departure from the sanctuary." }
];

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
        viewFlyer: "View Event Flyer",
        duration: "Duration",
        service: "Service"
    },
    flyer: {
      highlights: "Key Dates",
      scan: "Scan for Details",
      reserve: "Reserve Your Spot",
      limited: "Limited spaces available",
      flexibleDates: "Flexible Dates",
      print: "Print / Save PDF",
      oneDayPossible: "Possible to join for a single day"
    },
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact", faq: "Help / FAQ" },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      retreatTeaser: { label: "Sacred Immersion", title: "2 Day Retreat", location: "Pisac & Kinsacocha" },
      ausangateTeaser: { label: "Closer to the Sky", title: "Ausangate 3 Days", date: "Jan 28 - 30, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "Feb 21 - Mar 4, 2026" }
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
        { 
            title: "2 Day Retreat", 
            description: "Deep immersion at Wayna Wasi & Kinsacocha. Base cost $173 (1 person). Each additional person +$70. Accommodation +$20 per person. Max 10 people.", 
            price: "$173+",
            details: { duration: "2 Days", location: "Pisac & Kinsacocha", groupSize: "Max 10" }
        },
        { 
            title: "Ausangate: Closer to the Sky (3 Days)", 
            description: "A powerful journey with the Apu. Temazcal, Rapé, and Wachuma ceremony in Pacchanta. Includes free professional photography.", 
            price: "700 Soles",
            details: { duration: "3 Days", location: "Ausangate", groupSize: "Group" }
        },
        { 
            title: "Ausangate Sacred Journey (7 Days)", 
            description: "The complete immersion. 3 Wachuma ceremonies, Temazcal rituals, hiking to the lagoons, and deep healing work.", 
            price: "Inquire",
            details: { duration: "7 Days", location: "Ausangate", groupSize: "Group" }
        },
        { 
            title: "Juchuy Qosqo Immersion", 
            description: "2 Days at the 'Little Cusco' ruins. Stay with a local family, cook traditional food together, and experience deep connection.", 
            price: "$200+",
            details: { duration: "2 Days", location: "Juchuy Qosqo", groupSize: "Min 2" }
        },
        { 
            title: "1 Day Ceremony", 
            description: "A sacred journey for a minimum of 2 people. Experience the medicine in various sacred sites like ruins, lagoons, and mountains across the Sacred Valley.", 
            price: "$250",
            details: { duration: "1 Day", location: "Sacred Valley", groupSize: "Min 2" }
        },
        { 
            title: "Costa Rica Pilgrimage", 
            description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica.", 
            price: "Inquire",
            details: { duration: "12 Days", location: "Costa Rica", groupSize: "Group" }
        },
        { 
            title: "Private Healing", 
            description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", 
            price: "Inquire",
            details: { duration: "Varies", location: "Wayna Wasi", groupSize: "1 Persona" }
        }
      ],
      ausangateCta: { title: "Ausangate: A Journey Closer to the Sky", description: "Join a special Wachuma Journey to Ausangate. Includes free professional photography.", button: "View 3-Day Journey" }
    },
    ausangate: {
      title: "Ausangate Sacred Journey (7 Days)",
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
    ausangate3Day: {
      title: "Ausangate: A Journey Closer to the Sky (3 Days)",
      subtitle: "Ceremony with the Apu",
      description: "A condensed and powerful plant medicine journey. Connect with the sacred mountain and the healing waters in the high Andes.",
      details: {
          dates: "Jan 28 - 30, 2026",
          price: "700 Soles",
          bonus: "Includes free professional photography session"
      },
      cta: "Reserve Spot",
      itinerary: [
        { day: "Day 1", title: "Arrival, Purification & Temazcal", description: "Travel to Pacchanta. Relax in the natural thermal waters to cleanse the body. We will participate in a Temazcal (Sweat Lodge) ceremony with sacred Rapé medicine for deep purification, followed by a hike up towards Ausangate to set our intentions for the journey." },
        { day: "Day 2", title: "Wachuma Ceremony", description: "Opening the heart to the Apu. A profound daytime ceremony connecting with the spirit of the mountain and the vast Andean sky." },
        { day: "Day 3", title: "Return Journey", description: "Closing the circle. Hike back down from the mountain, final soak in the Pacchanta hot springs, and transport back to Pisac." }
      ]
    },
    costaRica: {
        title: "Sacred Pilgrimage to Costa Rica",
        subtitle: "Mountains & Ocean United",
        intro: "Join Hernan Colque, a Quechua native Wachumero from the pre-Incan K'ana lineage and guardian of ancestral traditions, for a historic pilgrimage to Costa Rica. This unique journey connects the high-altitude wisdom of the Peruvian Andes with the vibrant life of the tropical coast through sacred, heart-centered Wachuma ceremonies, visits to medicinal botanical sanctuaries, and deep communion with indigenous tribes. Experience profound healing and spiritual awakening as we bridge the mountains and the ocean. Possible to join for a single day.",
        description: [
            "Experience a historic gathering as Hernan brings the sacred Wachuma medicine to the vibrant lands of Costa Rica for the first time.",
            "Guided by a profound vision, this retreat is a spiritual pilgrimage connecting the wisdom of the high Andes with the purifying energy of the ocean.",
            "In addition to Wachuma ceremonies, we will share the medicine of Rapé, perform floral cleansing, and journey through guided meditations.",
            "We gather in a secluded sanctuary to ensure deep personal attention and a cohesive energetic container."
        ],
        details: { location: "Secret Location, Costa Rica", capacity: "Intimate Group", dates: "Feb 21 - Mar 4, 2026" },
        cta: "Request Invitation",
        oneDayPrice: "$249 USD (1 Day Pass)",
        visionTitle: "A Vision from the Medicine",
        visionText: "The medicine spoke of connecting the wisdom held in the high Andes with the purifying, fluid energy of the ocean. A pilgrimage of spirit and body.",
        themeValue: "Ocean & Mountain",
        itinerary: costaRicaItinerary,
        packages: {
            title: "Participation Includes",
            items: [
                "11 Days / 10 Nights in Sacred Sanctuary",
                "Wachuma Ceremonies with Indigenous Tribes",
                "Full Lunar Eclipse Ritual",
                "Rapé & Floral Cleansing Rituals",
                "All Organic Meals Provided",
                "Transport from San Isidro"
            ]
        }
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
            { title: "Day 1 : Hike & Traditional Cooking", content: "We begin with a scenic hike up to the archaeological site of Juchuy Qosqo, enjoying panoramic views of the Sacred Valley. Upon arrival, we connect with a local family who will host us. In the afternoon, we explore the ruins and learn about their history, followed by a traditional dinner prepared together with our hosts.", accommodation: "Authentic accommodation with a local family next to the ruins." },
            { title: "Day 2 : Ceremony at the Ruins", content: "Morning breaks over the Apus. We engage in a sacred Wachuma ceremony in the powerful presence of the Juchuy Qosqo ruins. Without the crowds of other sites, we can connect deeply with the history and energy of this royal estate. The ceremony allows for profound reflection and connection with the ancestors.", accommodation: "Descent and return transport to Pisac." }
        ],
        conclusion: "A unique blend of archaeological wonder, living culture, and spiritual work. You will leave with a full belly, a warm heart, and a spirit aligned with the Andes."
    },
    retreat1Day: {
        title: "1 Day Ceremony",
        subtitle: "Sacred Valley Locations",
        intro: "A focused and powerful day of healing, connecting with the medicine in sacred sites around the valley.",
        days: [
            { title: "The Ceremony", content: "We begin early in the morning, traveling to a carefully selected sacred site in the Sacred Valley (such as Pumamarca, Kinsacocha, or other power places). The ceremony is a full-day engagement with the medicine, nature, and oneself. Hernan provides guidance, holding space for deep healing and connection. The experience concludes in the late afternoon.", accommodation: "Accommodation is not included, but transport to and from the site is arranged." }
        ],
        conclusion: "A powerful reset and reconnection with the natural world, leaving you with clarity and a lighter heart.",
        details: {
            durationLabel: "Duration",
            durationValue: "8-10 Hours",
            locationLabel: "Location",
            locationValue: "Varies (Nature)",
            focusLabel: "Focus",
            focusValue: "Healing & Clarity"
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
                { title: "Personal Responsibility", items: [{ label: "Consentimiento Informado", text: "Al participar en este retiro, reconoces que participas voluntariamente en esta experiencia. Cualquier idea, desafío o transformación personal que experimentes es tu propia responsabilidad." }, { label: "Precauciones de Seguridad", text: "Sigue todas las pautas de seguridad proporcionadas por los facilitadores, incluyendo restricciones dietéticas, comportamiento sugerido durante las ceremonias y limitaciones en actividades físicas." }] }
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
                    "<strong>A Sacred Setting for Deep Healing</strong><br>The Sacred Valley near Cusco is the perfect backdrop for your spiritual journey. Nestled among Andean mountains, our retreat space is surrounded by breathtaking landscapes that amplify the power of Wachuma. From the moment you arrive, you’ll feel the profound connection between Earth and cosmos, a connection fundamental to Andean cosmology and the Wachuma tradition.",
                    "<strong>A Typical Wachuma Ceremony Day</strong><br>Your retreat will start with a gentle introduction to Wachuma. Under the guidance of Hernan Colque, the ceremonies unfold in a safe, supportive space where you’ll be encouraged to listen to your inner voice. Wachuma helps open your heart, providing clarity and a sense of peace as you journey through the day. The retreat often includes quiet time in nature, group sharing, and time for reflection, making the experience holistic and healing.",
                    "<strong>Integrating Your Wachuma Experience</strong><br>The insights gained from Wachuma can be profound, and it’s important to take time to integrate these lessons into your daily life. Hernan and his team are there to help you process your experiences, whether through group discussions or one-on-one support. Many participants leave the retreat with a renewed sense of purpose and a deep connection to themselves and the world around them."
                ]
            },
            {
                title: "Discover the Healing Power of Wachuma",
                content: [
                    "<strong>What is the San Pedro Cactus?</strong><br>The San Pedro cactus, also known as Wachuma, is an ancient medicinal plant native to the highlands of the Andes, primarily in Peru. This tall, columnar green cactus, scientifically named <em>Echinopsis pachanoi</em>, thrives at high altitudes, often between 2,000 and 3,000 meters. It is easily recognized by its pronounced ribs, short spines, and large white flowers that bloom at night.",
                    "<strong>Origins and History</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>The Power of Mescaline: Connecting to Universal Harmony</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. Unlike synthetic substances, the mescaline in San Pedro gently guides individuals into an altered state of consciousness, fostering a sense of unity and harmony with the world around them.",
                    "Wachuma ceremonies often lead participants to feel deeply connected to Pachamama (Mother Earth), experiencing the pulse of nature and the rhythm of life itself. This connection helps dissolve the boundaries between self and the universe, allowing for profound insights and spiritual clarity. Many who embark on this journey describe it as a heart-opening experience, where love and compassion flow naturally.",
                    "<strong>Spiritual and Therapeutic Benefits</strong><br>San Pedro is renowned for its spiritual and healing properties. Its effects are generally gentler and more gradual compared to other plant medicines like Ayahuasca. This makes it accessible for those seeking emotional healing and inner clarity without the intensity of more abrupt awakenings.<br><br><strong>Spiritual Benefits:</strong><br>• Spiritual Awakening: Facilitates reconnection with the true self and the natural world.<br>• Heart Opening: Promotes compassion, forgiveness, and deep emotional release.<br>• Mental Clarity: Helps gain perspective on life challenges and encourages acceptance.<br><br><strong>Beneficios Terapéuticos:</strong><br>• Liberación Emocional: Ayuda a procesar traumas pasados y emociones no resueltas.<br>• Calma y Serenidad: Reduce la ansiedad y cultiva la paz interior.<br>• Conexión con la Naturaleza: Fortalece el vínculo con la Tierra y los elementos."
                ]
            }
        ],
        questionsTitle: "Sapa Kuti Tapukuykuna",
        questions: [
            { question: "Imataq San Pedro raymi?", answer: "San Pedro (Huachuma)qa willka hampim, yuyayta kicharinapaq, hampinapaq. Ñuqayku allinta pusayku." },
            { question: "Qallariqkunapaq allinchu?", answer: "Arí, llapapaqmi. Ñuqayku yachachiyku, allinta pusayku tukuy puriypi." },
            { question: "Imataq Kinsacocha?", answer: "Kinsacochaqa huk sumaq qucham, Pisac patapi. Chaypi raymi ruwayqa ancha sumaqmi, apukunawan tinkunapaq." },
            { question: "Imata apasaq?", answer: "Q'uñi p'achata, purinapaq zapatota, sunquykita, imatachus necesitanki chayta. Huk lista qusaykiku." },
            { question: "Ima simita rimanku?", answer: "Hernanqa Quechuata Españoltawan riman. Huk runakuna yanapanqaku, Frances simitapas rimanku." },
            { question: "Segurochu?", answer: "Arí, ñuqayku allinta qhawayku. Yachaqkuna kanku, manan saqisunkichu." },
            { question: "Qullqi kutichiy kanmanchu?", answer: "Arí, willawayku sichus manaña hamuyta atinki, ñawpaqta willay." }
        ]
      },
      testimonials: {
          title: "Runakunaq Rimaynin",
          items: [
              { 
                  name: "Zoltan E.", 
                  location: "Hungría", 
                  text: "Kayqa chiqaq puriymi, allpawan tinkuymi. Hernanwan puriyqa ñawpaq yachaywan tinkuymi karqa. Ancha agradecesqa kani.",
                  image: IMAGES.zoltan 
              },
              {
                name: "Stephanie K.",
                location: "Google Review",
                text: "Ancha kusisqa kani Don Hernanwan puriqtiy. Urqukunaman rirqayku, allpawan tinkurqayku. Payqa allin hampiqmi. Wayna Wasipi lawata mikhurqayku nina patapi. Yupaychani.",
                image: IMAGES.kittel
            }
          ]
      },
      contact: {
          title: "Rimaykakamuy",
          form: { name: "Sutiyki", email: "Chaskiyki", message: "Willayniyki", submit: "Apachiy" },
          info: "Willka Qhichwapi kachkayku."
      },
      footer: {
        description: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
        rights: "All rights reserved.",
        columns: {
          links: {
            title: "Navigation",
            items: [
              { label: "Home", href: "/" },
              { label: "The Family", href: "/about" },
              { label: "Ceremonies", href: "/services" },
              { label: "Gallery", href: "/gallery" },
              { label: "Contact", href: "/contact" }
            ]
          },
          reviews: {
              title: "Reviews",
              rating: "5.0"
          },
          follow: {
              title: "Follow Us",
              facebook: "https://www.facebook.com/hernan.wachuma",
              instagram: "https://www.instagram.com/hernan_wachuma"
          },
          contact: {
              title: "Contact",
              email: "hernan.wachuma@gmail.com",
              phone: "+51 984 316 833"
          },
          find: {
              title: "Find Us",
              address: "Sacred Valley, Cusco, Peru"
          }
        }
      }
};

const esTranslations: TranslationData = {
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
        email: "Correo",
        whatsapp: "WhatsApp",
        connectWithUs: "Conecta con nosotros",
        featuredExperience: "Experiencia Destacada",
        viewFlyer: "Ver Folleto",
        duration: "Duración",
        service: "Servicio"
    },
    flyer: {
      highlights: "Fechas Clave",
      scan: "Escanear para Detalles",
      reserve: "Reserva tu Lugar",
      limited: "Cupos limitados",
      flexibleDates: "Fechas Flexibles",
      print: "Imprimir / Guardar PDF",
      oneDayPossible: "Posible unirse por un día"
    },
    nav: { home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto", faq: "Ayuda / FAQ" },
    hero: {
      title: "Medicina Sagrada de los Andes",
      subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
      cta: "Reservar una Ceremonia",
      retreatTeaser: { label: "Inmersión Sagrada", title: "Retiro de 2 Días", location: "Pisac y Kinsacocha" },
      ausangateTeaser: { label: "Más Cerca del Cielo", title: "Ausangate 3 Días", date: "Ene 28 - 30, 2026" },
      costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "Feb 21 - Mar 4, 2026" }
    },
    benefits: {
      title: "El Poder de Wachuma",
      subtitle: "Por qué viajamos con el Cactus Sagrado",
      items: [
        { title: "Sanación Emocional", description: "Libera traumas pasados y bloqueos emocionales almacenados en el cuerpo, encontrando el perdón y la paz." },
        { title: "Conexión con la Naturaleza", description: "Experimenta una profunda unidad con la Tierra, los elementos y el espíritu vivo de los Andes." },
        { title: "Claridad y Visión", description: "Aquieta la mente para recibir guía, propósito y una perspectiva renovada sobre tu camino de vida." }
      ]
    },
    about: {
      title: "Conoce a Hernan",
      subtitle: "Guardián del Cactus Sagrado",
      description: [
        "<strong>Hernan Colque</strong> es un nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>, profundamente arraigado en las tradiciones sagradas de los Andes. Nacido por encima de los 5000m en <strong>Viacha</strong>, una comunidad de altura de <strong>Pisac</strong>, Hernan lleva un linaje de sanación medicinal que se remonta a tiempos pre-incas.",
        "Según la tradición ancestral, solo un hijo por generación puede heredar este camino, y debe elegirlo voluntariamente. La sabiduría pasó de su abuelo Carmen a su padre Beninho. Entre siete hermanos, Hernan eligió la medicina a una edad muy temprana, convirtiéndose en el único portador de este antiguo legado y su profunda conexión con la <strong>Pachamama (Madre Tierra)</strong>.",
        "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la <strong>provincia de Espinar</strong> y su linaje es <strong>Ccana (K'ana)</strong>. La cultura K'ana fue una sociedad pre-inca que formó una alianza estratégica única y pacífica con el Imperio Inca en lugar de la típica conquista. Integrándose pacíficamente durante el reinado de Pachacutec, se convirtieron en aliados militares vitales—guerreros de élite <strong>'Sinchis'</strong> que ayudaron a derrotar a los Chancas. Debido a esta reciprocidad, se les concedieron tierras en Collasuyo y su antigua capital, Kanamarca, fue reconstruida por los Incas.",
        "<strong>El Espíritu de Wachuma.</strong> Hay un dicho que dice que el espíritu de Wachuma conectó primero a la gente de esta región y lo guardaron en su corazón porque la planta les dijo que desaparecería de la tierra, lo cual sucedió no hace mucho. Hernan lleva esta memoria y espíritu hacia adelante.",
        "<strong>Pisac y Viacha.</strong> Estamos basados en <strong>Pisac</strong>, un pueblo vibrante en el Valle Sagrado, donde organizamos ceremonias y ofrecemos alojamiento tranquilo en <strong>Wayna Wasi Hotel</strong>. Para una inmersión más profunda, nuestros retiros de varios días se llevan a cabo en <strong>Viacha</strong>, una comunidad serena muy por encima de Pisac."
      ]
    },
    services: {
      title: "Nuestras Ofrendas",
      items: [
        { 
            title: "Retiro de 2 Días", 
            description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Costo base $173 (1 persona). Cada persona adicional +$70. Alojamiento +$20 por persona. Máx 10 personas.", 
            price: "$173+",
            details: { duration: "2 Días", location: "Pisac y Kinsacocha", groupSize: "Máx 10" }
        },
        { 
            title: "Ausangate: Más Cerca del Cielo (3 Días)", 
            description: "Un viaje poderoso con el Apu. Temazcal, Rapé y ceremonia de Wachuma en Pacchanta. Incluye fotografía profesional gratuita.", 
            price: "700 Soles",
            details: { duration: "3 Días", location: "Ausangate", groupSize: "Grupo" }
        },
        { 
            title: "Viaje Sagrado a Ausangate (7 Días)", 
            description: "La inmersión completa. 3 ceremonias de Wachuma, rituales de Temazcal, caminatas a las lagunas y trabajo de sanación profunda.", 
            price: "Consultar",
            details: { duration: "7 Días", location: "Ausangate", groupSize: "Grupo" }
        },
        { 
            title: "Inmersión Juchuy Qosqo", 
            description: "2 Días en las ruinas del 'Pequeño Cusco'. Quédate con una familia local, cocinen comida tradicional juntos y experimenten una conexión profunda.", 
            price: "$200+",
            details: { duration: "2 Días", location: "Juchuy Qosqo", groupSize: "Mín 2" }
        },
        { 
            title: "Ceremonia de 1 Día", 
            description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas a través del Valle Sagrado.", 
            price: "$250",
            details: { duration: "1 Día", location: "Valle Sagrado", groupSize: "Mín 2" }
        },
        { 
            title: "Peregrinaje a Costa Rica", 
            description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica.", 
            price: "Consultar",
            details: { duration: "12 Días", location: "Costa Rica", groupSize: "Grupo" }
        },
        { 
            title: "Sanación Privada", 
            description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", 
            price: "Consultar",
            details: { duration: "Varía", location: "Wayna Wasi", groupSize: "1 Persona" }
        }
      ],
      ausangateCta: { title: "Ausangate: Un Viaje Más Cerca del Cielo", description: "Únete a un viaje especial de Wachuma a Ausangate. Incluye fotografía profesional gratuita.", button: "Ver Viaje de 3 Días" }
    },
    ausangate: {
      title: "Viaje Sagrado a Ausangate (7 Días)",
      subtitle: "3 de Enero - 9 de Enero, 2026",
      description: "Una expedición profunda combinando las aguas curativas de Pacchanta, la majestuosa presencia del Apu Ausangate y el poder transformador de Wachuma y Temazcal.",
      cta: "Reserva tu Lugar",
      itinerary: [
        { day: "Día 1", title: "Llegada y Purificación", description: "Viaje a Pacchanta. Relajarse en las aguas termales naturales para limpiar el cuerpo, seguido de una caminata hacia Ausangate para establecer nuestras intenciones." },
        { day: "Día 2", title: "Primera Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
        { day: "Día 3", title: "Temazcal (Cabana de Sudor) y Rapé", description: "Un ritual tradicional de baño de vapor representando el vientre de la Madre Tierra. Desintoxicación física y espiritual con medicina sagrada de Rapé." },
        { day: "Día 4", title: "Segunda Ceremonia de Wachuma", description: "Profundizando el viaje. Trabajando a través de bloqueos internos y expandiendo la conciencia en el silencio de las tierras altas." },
        { day: "Día 5", title: "Temazcal y Rapé", description: "Una segunda ceremonia de cabana de sudor para asentar las energías recibidas y purificar el espíritu aún más con Rapé sagrado." },
        { day: "Día 6", title: "Tercera Ceremonia de Wachuma e Integración", description: "La ceremonia final de medicina. Enfocándose en la integración, gratitud y sellando la sanación recibida durante la semana." },
        { day: "Día 7", title: "Viaje de Retorno", description: "Caminata de regreso desde la montaña, baño final en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
      ]
    },
    ausangate3Day: {
      title: "Ausangate: Un Viaje Más Cerca del Cielo (3 Días)",
      subtitle: "Ceremonia con el Apu",
      description: "Un viaje de medicina vegetal condensado y poderoso. Conecta con la montaña sagrada y las aguas curativas en los altos Andes.",
      details: {
          dates: "Ene 28 - 30, 2026",
          price: "700 Soles",
          bonus: "Incluye sesión de fotografía profesional gratuita"
      },
      cta: "Reservar Lugar",
      itinerary: [
        { day: "Día 1", title: "Llegada, Purificación y Temazcal", description: "Viaje a Pacchanta. Relajarse en las aguas termales naturales para limpiar el cuerpo. Participaremos en una ceremonia de Temazcal (Cabana de Sudor) con medicina sagrada de Rapé para una purificación profunda, seguida de una caminata hacia Ausangate para establecer nuestras intenciones para el viaje." },
        { day: "Día 2", title: "Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una profunda ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
        { day: "Día 3", title: "Viaje de Retorno", description: "Cerrando el círculo. Caminata de regreso desde la montaña, baño final en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
      ]
    },
    costaRica: {
        title: "Peregrinaje Sagrado a Costa Rica",
        subtitle: "Montañas y Océano Unidos",
        intro: "Únete a Hernan Colque, un Wachumero nativo Quechua del linaje pre-inca K'ana y guardián de tradiciones ancestrales, para un peregrinaje histórico a Costa Rica. Este viaje único conecta la sabiduría de gran altitud de los Andes peruanos con la vida vibrante de la costa tropical a través de ceremonias sagradas de Wachuma centradas en el corazón, visitas a santuarios botánicos medicinales y profunda comunión con tribus indígenas. Experimenta una profunda sanación y despertar espiritual mientras unimos las montañas y el océano. Posible unirse por un solo día.",
        description: [
            "Experimenta una reunión histórica mientras Hernan trae la medicina sagrada de Wachuma a las tierras vibrantes de Costa Rica por primera vez.",
            "Guiado por una visión profunda, este retiro es un peregrinaje espiritual conectando la sabiduría de los altos Andes con la energía purificadora del océano.",
            "Además de las ceremonias de Wachuma, compartiremos la medicina de Rapé, realizaremos limpiezas florales y viajaremos a través de meditaciones guiadas.",
            "Nos reunimos en un santuario aislado para asegurar una profunda atención personal y un contenedor energético cohesivo."
        ],
        details: { location: "Ubicación Secreta, Costa Rica", capacity: "Grupo Íntimo", dates: "Feb 21 - Mar 4, 2026" },
        cta: "Solicitar Invitación",
        oneDayPrice: "$249 USD (Pase de 1 Día)",
        visionTitle: "Una Visión de la Medicina",
        visionText: "La medicina habló de conectar la sabiduría sostenida en los altos Andes con la energía purificadora y fluida del océano. Un peregrinaje de espíritu y cuerpo.",
        themeValue: "Océano y Montaña",
        itinerary: costaRicaItinerary,
        packages: {
            title: "La Participación Incluye",
            items: [
                "11 Días / 10 Noches en Santuario Sagrado",
                "Ceremonias de Wachuma con Tribus Indígenas",
                "Ritual de Eclipse Lunar Completo",
                "Rituales de Rapé y Limpieza Floral",
                "Todas las Comidas Orgánicas Provistas",
                "Transporte desde San Isidro"
            ]
        }
    },
    retreat2Day: {
        title: "Retiro de 2 Días",
        subtitle: "Wayna Wasi y Kinsacocha",
        intro: "Una inmersión profunda en la medicina sagrada, celebrada en el santuario de Wayna Wasi y las poderosas montañas de Pisac.",
        days: [
            { title: "Día 1 : Preparación y Llegada a Wayna Wasi", content: "Al llegar a Wayna Wasi, los participantes comenzarán su viaje con la preparación ceremonial de la bebida (la bebida sagrada de Wachuma). Esta experiencia inicia un vínculo sagrado con la medicina, preparando el escenario para la exploración interior y la conexión. Hernan guía a cada participante con cuidado, ayudándoles a clarificar sus intenciones y abrir sus corazones a los efectos suaves pero poderosos de Wachuma.", accommodation: "Pasa la noche en Wayna Wasi, un santuario de paz donde el espíritu de los Andes está siempre presente." },
            { title: "Día 2 : Ceremonia en Kinsacocha, Pisac", content: "En el segundo día, viajaremos al venerado sitio de Kinsacocha en Pisac, donde participarás en una ceremonia de Wachuma en medio de impresionantes vistas montañosas. Con la guía experimentada de Hernan, los participantes explorarán sus paisajes interiores, buscarán ideas personales y recibirán las enseñanzas que ofrece Wachuma. Al concluir la ceremonia, un círculo de compartir grupal permitirá a los participantes procesar y reflexionar sobre su viaje, mejorando el impacto del retiro.", accommodation: "Regreso a Wayna Wasi para una noche tranquila, absorbiendo las experiencias transformadoras del día." }
        ],
        conclusion: "Los participantes se irán con un renovado sentido de ser y propósito, empoderados por la experiencia de Wachuma y la sabiduría atemporal de la Pachamama."
    },
    juchuy: {
        title: "Inmersión Ancestral Juchuy Qosqo",
        subtitle: "Comunidad, Cocina y Ruinas",
        intro: "Un viaje especial de 2 días a Juchuy Qosqo ('Pequeño Cusco'), combinando una caminata a antiguas ruinas con una profunda inmersión cultural quedándose con una familia local.",
        days: [
            { title: "Día 1 : Caminata y Cocina Tradicional", content: "Comenzamos con una caminata escénica hasta el sitio arqueológico de Juchuy Qosqo, disfrutando de vistas panorámicas del Valle Sagrado. Al llegar, conectamos con una familia local que nos hospedará. Por la tarde, exploramos las ruinas y aprendemos sobre su historia, seguido de una cena tradicional preparada junto con nuestros anfitriones.", accommodation: "Alojamiento auténtico con una familia local junto a las ruinas." },
            { title: "Día 2 : Ceremonia en las Ruinas", content: "La mañana rompe sobre los Apus. Nos involucramos en una ceremonia sagrada de Wachuma en la poderosa presencia de las ruinas de Juchuy Qosqo. Sin las multitudes de otros sitios, podemos conectar profundamente con la historia y energía de esta finca real. La ceremonia permite una profunda reflexión y conexión con los antepasados.", accommodation: "Descenso y transporte de regreso a Pisac." }
        ],
        conclusion: "Una mezcla única de maravilla arqueológica, cultura viva y trabajo espiritual. Te irás con la barriga llena, el corazón cálido y el espíritu alineado con los Andes."
    },
    retreat1Day: {
        title: "Ceremonia de 1 Día",
        subtitle: "Ubicaciones del Valle Sagrado",
        intro: "Un día enfocado y poderoso de sanación, conectando con la medicina en sitios sagrados alrededor del valle.",
        days: [
            { title: "La Ceremonia", content: "Comenzamos temprano en la mañana, viajando a un sitio sagrado cuidadosamente seleccionado en el Valle Sagrado (como Pumamarca, Kinsacocha u otros lugares de poder). La ceremonia es un compromiso de día completo con la medicina, la naturaleza y uno mismo. Hernan brinda orientación, manteniendo el espacio para una sanación y conexión profundas. La experiencia concluye a última hora de la tarde.", accommodation: "El alojamiento no está incluido, pero se organiza el transporte hacia y desde el sitio." }
        ],
        conclusion: "Un poderoso reinicio y reconexión con el mundo natural, dejándote con claridad y un corazón más ligero.",
        details: {
            durationLabel: "Duración",
            durationValue: "8-10 Horas",
            locationLabel: "Ubicación",
            locationValue: "Varía (Naturaleza)",
            focusLabel: "Enfoque",
            focusValue: "Sanación y Claridad"
        }
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
                { label: "Limitar Estimulantes", text: "Reduce o elimina la cafeína, el alcohol, y otros estimulantes para ayudar a despejar tu mente y cuerpo." },
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
                { label: "Sombrero o Gorra", text: "Dado que la ceremonia se llevará a cabo al aire libre, trae un sombrero o gorra para protegerte del sol." },
                { label: "Traer una Ofrenda", text: "Es costumbre traer frutas y flores como ofrendas para la ceremonia. Este gesto simboliza gratitud y conexión con la naturaleza." },
                { label: "Botella de Agua", text: "Mantenerse hidratado durante todo el día es esencial." },
                { label: "Cuaderno y Bolígrafo", text: "Puede que te sientas inspirado para escribir en un diario después de la ceremonia para capturar pensamientos, ideas o emociones." }
            ]
        },
        suggestions: {
            title: "Sugerencias Adicionales para el Retiro",
            description: "Para mejorar tu viaje, considera lo siguiente:",
            items: [
                { label: "Respetar el Silencio", text: "Usa períodos de silencio para reflexionar y procesar tu experiencia." },
                { label: "Respiración y Meditación", text: "Los ejercicios de respiración suave o la meditación pueden ayudar a enraizarte y mantenerte centrado." },
                { label: "Desintoxicación Digital", text: "Desconéctate de teléfonos y otros dispositivos electrónicos para estar completamente presente." },
                { label: "Conectar con la Naturaleza", text: "Si es posible, pasa tiempo en la naturaleza cada día." }
            ]
        },
        closing: "Al prepararte conscientemente y mantenerte abierto, crearás espacio para que la medicina de San Pedro te guíe en un profundo camino de descubrimiento. Esperamos compartir esta experiencia especial contigo.",
        risks: {
            title: "Aviso Importante: Riesgos y Responsabilidades",
            intro: "Aunque este retiro está diseñado para ofrecer una experiencia segura y transformadora, es importante reconocer que la participación en una ceremonia de San Pedro implica riesgos tanto físicos como psicológicos. Por favor, revisa cuidadosamente las siguientes consideraciones para asegurar una participación informada:",
            sections: [
                { title: "Declaración de Salud y Médica", items: [{ label: "Condiciones Médicas", text: "Los participantes deben informar a los facilitadores sobre cualquier condición médica, incluyendo problemas cardíacos, condiciones de salud mental o historial de convulsiones. Algunas condiciones preexistentes pueden aumentar los riesgos asociados con la experiencia de San Pedro." }, { label: "Medicamentos", text: "Ciertos medicamentos, incluyendo antidepresivos, antipsicóticos y algunos medicamentos de venta libre, pueden tener interacciones adversas con San Pedro. Por favor, informa sobre cualquier medicamento a los facilitadores mucho antes del retiro." }, { label: "Sensibilidad Física", text: "San Pedro puede causar efectos físicos temporales, como náuseas, vómitos y aumento del ritmo cardíaco. Los participantes deben estar física y mentalmente preparados para estos efectos." }] },
                { title: "Riesgos Psicológicos y Responsabilidad Emocional", items: [{ label: "Experiencias Intensas", text: "San Pedro can bring up deep emotions and past traumas, which can be challenging to process. Participants are encouraged to engage in personal reflection or seek professional guidance beforehand if they have a history of trauma." }, { label: "Integration Support", text: "Después del retiro, los participantes pueden beneficiarse de apoyo adicional para integrar sus experiencias. Se aconseja planificar tiempo, apoyo y recursos para procesar cualquier idea o emoción que surja." }] },
                { title: "Responsabilidad Personal", items: [{ label: "Consentimiento Informado", text: "Al participar en este retiro, reconoces que participas voluntariamente en esta experiencia. Cualquier idea, desafío o transformación personal que experimentes es tu propia responsabilidad." }, { label: "Precauciones de Seguridad", text: "Sigue todas las pautas de seguridad proporcionadas por los facilitadores, incluyendo restricciones dietéticas, comportamiento sugerido durante las ceremonias y limitaciones en actividades físicas." }] }
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
                    "Planear un retiro de Wachuma puede sentirse como prepararse para una peregrinación del alma. Ya sea que seas nuevo en la medicina de plantas o un buscador experimentado, cada ceremonia de Wachuma ofrece una experiencia única y transformadora. Esto es lo que puedes esperar cuando te embarcas en un retiro en el Valle Sagrado de Perú, donde el espíritu de los Andes y la Pachamama misma están siempre presentes.",
                    "<strong>Un entorno sagrado para una sanación profunda</strong><br>El Valle Sagrado cerca de Cusco es el telón de fondo perfecto para tu viaje espiritual. Ubicado entre las montañas andinas, nuestro espacio de retiro está rodeado de impresionantes paisajes que amplifican el poder de Wachuma. Desde el momento en que llegues, sentirás la profunda conexión entre la Tierra y el cosmos, una conexión que es fundamental para la cosmología andina y la tradición de Wachuma.",
                    "<strong>Un día típico de ceremonia de Wachuma</strong><br>Tu retiro comenzará con una suave introducción a Wachuma. Bajo la guía de Hernan Colque, las ceremonias se desarrollan en un espacio seguro y de apoyo donde se te animará a escuchar tu voz interior. Wachuma ayuda a abrir tu corazón, brindando claridad y una sensación de paz mientras viajas a través del día. El retiro a menudo incluye tiempo tranquilo en la naturaleza, intercambio grupal y tiempo para la reflexión, haciendo que la experiencia sea holística y sanadora.",
                    "<strong>Integrando tu experiencia Wachuma</strong><br>Las ideas obtenidas de Wachuma pueden ser profundas, y es importante tomarse el tiempo para integrar estas lecciones en tu vida diaria. Hernan y su equipo están allí para ayudarte a procesar tus experiencias, ya sea a través de discusiones grupales o apoyo individual. Muchos participantes dejan el retiro con un renovado sentido de propósito y una profunda conexión consigo mismos y con el mundo que los rodea."
                ]
            },
            {
                title: "Descubre el poder curativo de Wachuma",
                content: [
                    "<strong>¿Qué es el cactus San Pedro?</strong><br>El cactus San Pedro, también conocido como Wachuma, es una antigua planta medicinal nativa de las tierras altas de los Andes, principalmente en Perú. Este cactus verde columnar alto, científicamente llamado <em>Echinopsis pachanoi</em>, prospera a grandes altitudes, a menudo entre 2,000 y 3,000 metros. Se reconoce fácilmente por sus costillas pronunciadas, espinas cortas y grandes flores blancas que florecen por la noche.",
                    "<strong>Orígenes e Historia</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>The Power of Mescaline: Conectando con la Armonía Universal</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. Unlike synthetic substances, the mescaline in San Pedro gently guides individuals into an altered state of consciousness, fostering a sense of unity and harmony with the world around them.",
                    "Las ceremonias de Wachuma a menudo llevan a los participantes a sentirse profundamente conectados con la Pachamama (Madre Tierra), experimentando el pulso de la naturaleza y el ritmo de la vida misma. Esta conexión ayuda a disolver los límites entre el yo y el universo, permitiendo profundas ideas y claridad espiritual. Muchos de los que se embarcan en este viaje lo describen como una experiencia de apertura del corazón, donde el amor y la compasión fluyen naturalmente.",
                    "<strong>Beneficios Espirituales y Terapéuticos</strong><br>San Pedro es famoso por sus propiedades espirituales y curativas. Sus efectos son generalmente más suaves y graduales en comparación con otras medicinas vegetales como la Ayahuasca. Esto lo hace accesible para aquellos que buscan sanación emocional y claridad interior sin la intensidad de despertares más abruptos.<br><br><strong>Beneficios Espirituales:</strong><br>• Despertar Espiritual: Facilita la reconexión con el verdadero yo y el mundo natural.<br>• Apertura del Corazón: Promueve la compasión, el perdón y la profunda liberación emocional.<br>• Claridad Mental: Ayuda a obtener perspectiva sobre los desafíos de la vida y fomenta la aceptación.<br><br><strong>Beneficios Terapéuticos:</strong><br>• Liberación Emocional: Ayuda a procesar traumas pasados y emociones no resueltas.<br>• Calma y Serenidad: Reduce la ansiedad y cultiva la paz interior.<br>• Conexión con la Naturaleza: Fortalece el vínculo con la Tierra y los elementos."
                ]
            }
        ],
        questionsTitle: "Preguntas Frecuentes",
        questions: [
            { question: "¿Qué es una ceremonia de San Pedro?", answer: "San Pedro (Huachuma) es una medicina vegetal sagrada utilizada para la sanación, la visión y una profunda conexión espiritual. Nuestras ceremonias son guiadas por facilitadores experimentados para garantizar una experiencia segura y transformadora." },
            { question: "¿El retiro es adecuado para principiantes?", answer: "Sí, nuestros retiros están abiertos a todos, ya sea que tengas experiencia previa con la medicina vegetal o seas un participante por primera vez. Brindamos orientación y apoyo completo durante todo el proceso." },
            { question: "¿Qué es Kinsacocha y por qué es especial?", answer: "Kinsacocha, ubicada cerca de Pisac, es una zona tranquila rodeada de lagos sagrados. Es un entorno ideal para las ceremonias de Huachuma, ofreciendo una profunda conexión con la naturaleza y la espiritualidad andina." },
            { question: "¿Qué debo llevar al retiro o ceremonia?", answer: "Se proporcionará una lista detallada, pero lo esencial incluye ropa cómoda, zapatos para caminar, artículos personales y un corazón abierto para la transformación." },
            { question: "¿Qué idioma se habla durante el retiro?", answer: "Hernán habla quechua y español. Si no hablas estos idiomas, habrá un traductor (dependiendo de la disponibilidad o arreglo previo) o asistencia para asegurar la comunicación." },
            { question: "¿Es seguro el retiro?", answer: "La seguridad es nuestra principal prioridad. Nuestros retiros se llevan a cabo en un entorno controlado y de apoyo con facilitadores experimentados para guiarte en cada paso del viaje." },
            { question: "¿Cuál es su política de reembolso o cancelación?", answer: "Los depósitos son reembolsables hasta una fecha específica. Recomendamos una comunicación temprana si tus planes cambian." }
        ]
      },
      testimonials: {
          title: "Voces del Corazón",
          items: [
              { 
                  name: "Zoltan E.", 
                  location: "Hungría", 
                  text: "Es una experiencia verdaderamente auténtica de conexión con el espíritu de la tierra y el poder curativo de la medicina vegetal. Ha sido una conexión profunda con la sabiduría antigua de los guías espirituales Incas y pre-Incas a través del Maestro Hernan. Estoy muy agradecido por el viaje.",
                  image: IMAGES.zoltan 
              },
              {
                name: "Stephanie K.",
                location: "Google Review",
                text: "Me siento muy afortunada de haber participado en una ceremonia de Wachuma de día completo con Don Hernan. Viajamos a las montañas, a través de un pueblo local, para comulgar con la naturaleza, el espíritu y la energía de la reciprocidad. Su guía es sincera y su medicina es la mejor Wachuma que he bebido. Regresamos a su casa para terminar la ceremonia con una deliciosa sopa andina casera y un fuego en el jardín bajo la luna llena y las estrellas. Recomiendo encarecidamente visitar Wayna Wasi y trabajar con Don Hernan.",
                image: IMAGES.kittel
            }
          ]
      },
      contact: {
          title: "Contacto",
          form: { name: "Tu Nombre", email: "Tu Correo", message: "Tu Mensaje", submit: "Enviar Mensaje" },
          info: "Estamos ubicados en el corazón del Valle Sagrado, cerca de Calca, Cusco."
      },
      footer: {
        description: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
        rights: "Todos los derechos reservados.",
        columns: {
          links: {
            title: "Navegación",
            items: [
              { label: "Inicio", href: "/" },
              { label: "La Familia", href: "/about" },
              { label: "Ceremonias", href: "/services" },
              { label: "Galería", href: "/gallery" },
              { label: "Contacto", href: "/contact" }
            ]
          },
          reviews: {
              title: "Reseñas",
              rating: "5.0"
          },
          follow: {
              title: "Síguenos",
              facebook: "https://www.facebook.com/hernan.wachuma",
              instagram: "https://www.instagram.com/hernan_wachuma"
          },
          contact: {
              title: "Contacto",
              email: "hernan.wachuma@gmail.com",
              phone: "+51 984 316 833"
          },
          find: {
              title: "Encuéntranos",
              address: "Valle Sagrado, Cusco, Perú"
          }
        }
      }
};

const quTranslations: TranslationData = {
      ...enTranslations,
      ui: {
        viewDetails: "Astawan Qhaway",
        inquire: "Tapukuy",
        contribution: "Chanin",
        bookRetreat: "Tiyayta Waqaychay",
        bookCeremony: "Raymita Waqaychay",
        accommodation: "Puñuna",
        note: "Willay",
        eventDetails: "Raymi Yachaykuna",
        location: "Kiti",
        capacity: "Hayk'a Runa",
        theme: "Yuyay",
        email: "Chaski",
        whatsapp: "WhatsApp",
        connectWithUs: "Tinkuy",
        featuredExperience: "Hatun Raymi",
        viewFlyer: "Flyer Qhaway",
        duration: "Unay",
        service: "Hampi"
      },
      nav: { 
        home: "Qallariy", 
        about: "Ayllu", 
        services: "Raymikuna", 
        gallery: "Rikch'akuna", 
        contact: "Tinkuy", 
        faq: "Yanapay" 
      },
      hero: {
        title: "Andes Willka Hampi",
        subtitle: "Pachamamawan tinkuy, Wachuma hampiwan, Willka Qhichwapi.",
        cta: "Hampi Raymita Waqaychay",
        retreatTeaser: { label: "Willka T'aqakuy", title: "2 P'unchay T'aqakuy", location: "Pisac & Kinsacocha" },
        ausangateTeaser: { label: "Hanaq Pachaman Astawan Qaylla", title: "Ausangate 3 P'unchay", date: "Ene 28 - 30, 2026" },
        costaRicaTeaser: { label: "Hatun Puriy", title: "Costa Rica Puriy", date: "Feb 21 - Mar 4, 2026" }
      },
      benefits: {
        title: "Wachumaq Kallpan",
        subtitle: "Imaraykutaq Willka Kaktuswan purinchik",
        items: [
          { title: "Sunqu Hampiy", description: "Ñawpaq nanaykunata qarqoy, pampachayta tariy." },
          { title: "Pachamamawan Tinkuy", description: "Allpawan, wayrawan, yakumawan huklla kay." },
          { title: "Yuyay Ch'uyay", description: "Musuq ñanta rikhurichiy, yuyayta kichariy." }
        ]
      },
      services: {
        title: "Ñuqaykuq Quykuna",
        items: [
          { 
              title: "2 P'unchay T'aqakuy", 
              description: "Ukhu hampi puriy Wayna Wasi & Kinsacochapi. Chanin $173 (1 runa). Huk runa yapay +$70. Puñuna +$20 sapa runa. Astawan 10 runakuna.", 
              price: "$173+",
              details: { duration: "2 P'unchay", location: "Pisac & Kinsacocha", groupSize: "Astawan 10" }
          },
          { 
              title: "Ausangate: Hanaq Pachaman Qaylla (3 P'unchay)", 
              description: "Hatun puriy Apuwan. Temazcal, Rapé, Wachuma raymi Pacchantapi. Foto toqyayta qukyku.", 
              price: "700 Soles",
              details: { duration: "3 P'unchay", location: "Ausangate", groupSize: "Huñu" }
          },
          { 
              title: "Ausangate Willka Puriy (7 P'unchay)", 
              description: "Tukuy hampi puriy. 3 Wachuma raymi, Temazcal, quchakunaman puriy.", 
              price: "Tapukuy",
              details: { duration: "7 P'unchay", location: "Ausangate", groupSize: "Huñu" }
          },
          { 
              title: "Juchuy Qosqo Puriy", 
              description: "2 P'unchay 'Huch'uy Qosqo'pi. Aylluwan tiyay, kuska wayk'uy.", 
              price: "$200+",
              details: { duration: "2 P'unchay", location: "Juchuy Qosqo", groupSize: "Pisi 2" }
          },
          { 
              title: "1 P'unchay Raymi", 
              description: "Willka raymi pisi 2 runapaq. Urqukunapi, quchakunapi, Willka Qhichwapi.", 
              price: "$250",
              details: { duration: "1 P'unchay", location: "Willka Qhichwa", groupSize: "Pisi 2" }
          },
          { 
              title: "Costa Rica Puriy", 
              description: "Willka puriy Andeskunata Mama Qochawan tinkuchiy.", 
              price: "Tapukuy",
              details: { duration: "12 P'unchay", location: "Costa Rica", groupSize: "Huñu" }
          },
          { 
              title: "Sapalla Hampikuy", 
              description: "Sapaq hampi qampaqlla. Nanayta qarqoy.", 
              price: "Tapukuy",
              details: { duration: "Sapaq", location: "Wayna Wasi", groupSize: "1 Runa" }
          }
        ],
        ausangateCta: { title: "Ausangate: Huk Puriy Hanaq Pachaman", description: "Wachuma puriy Ausangatewan. Foto toqyayta qukyku.", button: "3-P'unchay Puriyta Qhaway" }
      },
      costaRica: {
          title: "Costa Rica Willka Puriy",
          subtitle: "Urquwan Mama Qochawan Tinkun",
          intro: "Hernan Colquewan, K'ana ayllumanta Wachumero, Costa Ricaman hatun puriy. Kay sapaq puriyqa Perou Andeskunaq yachayninta tinkuchin mama qochawan, sunqumanta pacha Wachuma hampiwan, hampi sach'akunawan, ñawpaq runakunawan ima. Huk p'unchayllapas hamuyta atinki.",
          description: [
            "Kayqa huk hatun tinkuymi, Hernan Wachuma hampita Costa Ricaman apamun.",
            "Huk hatun rikhuypa pusasqan, kay puriyqa Andespa yachayninta mama qochawan tinkuchin.",
            "Wachumawan kuska, Rapé hampita, t'ika ch'uyayta ima ruwasun, yuyaymanaypi purispa.",
            "Huk ch'in tiyaypi huñunakusun, allin qhawayta chaskianykipaq."
          ],
          details: { location: "Pakasqa Tiyay, Costa Rica", capacity: "Huñu", dates: "Feb 21 - Mar 4, 2026" },
          cta: "Mink'ayta Mañakuy",
          oneDayPrice: "$249 USD (1 P'unchay)",
          visionTitle: "Hampi Rikhuy",
          visionText: "Hampiqa nirqa: Andespa yachaynin mama qochawan tinkunan.",
          themeValue: "Mama Qochawan Urquwan",
          itinerary: [
            { day: "21 Feb", title: "Qallariy Raymi", description: "Pacifico Mama Qochawan tinkuspa raymi." },
            { day: "24 Feb", title: "Sach'a-sach'a", description: "Diamante Qhichwapi hatun sach'akunawan tinkuy." },
            { day: "25 Feb", title: "Hampi Puriy Qallariy", description: "El Chirripó willka urqukunapi ukhu puriyta qallarichkanchik." },
            { day: "3 Mar", title: "Killa Wañuy Raymi", description: "Sondero Gigantepi killa wañuy raymi Costa Rica ayllukunawan." },
            { day: "4 Mar", title: "Tukuy Raymi", description: "Tukuy yachasqata huñuspa, santuariomanta ripuy." }
          ],
          packages: {
            title: "Kaykunam Kanqa",
            items: [
                "11 P'unchay / 10 Tuta Willka Tiyaypi",
                "Wachuma Raymi Ñawpaq Runakunawan",
                "Killa Wañuy Raymi",
                "Rapé & T'ika Ch'uyay",
                "Tukuy Mikhuykuna",
                "San Isidromanta Apaykachana"
            ]
        }
      },
      flyer: {
        ...enTranslations.flyer,
        highlights: "Willka Fechakuna",
        scan: "Qhawariy Astawan",
        reserve: "Tiyayniykita Waqaychay",
        limited: "Pisi tiyaykuna kan",
        print: "Imprimir / PDF Waqaychay",
        oneDayPossible: "Huk p'unchayllapas hamuyta atinki"
      },
      about: {
        ...enTranslations.about,
        title: "Hernanwan Riqsinakuy",
        subtitle: "Willka Hampi Waqaychaq",
        description: [
            "<strong>Hernan Colque</strong> runa simi rimaq, <strong>Wachuma hampiq</strong>, ñawpaq yachaykunata apaq. <strong>Viacha</strong> llaqtapi paqarisqa, <strong>Pisac</strong> patapi, payqa ñawpaq hampiq yawarniyuq.",
            "Ñawpaq yachaykuna willan, sapa miraymanta huklla kay ñanta apanman. Abuelon Carmenmanta taytan Beninhoman yachay chayarqa. Qanchis wawqikunamanta, Hernanllataq kay ñanta akllarqa, <strong>Pachamamawan</strong> tinkuspa.",
            "<strong>Espinar llaqtamanta Ccana yawar.</strong> Hernanpa yawarninqa <strong>Ccana (K'ana)</strong>. K'ana runakunaqa Inka Pachacutecwan thakpi tinkurqanku, manan maqanakuspachu. Chayrayku <strong>'Sinchis'</strong> sutichasqa karqanku, allin awqaq runakuna.",
            "<strong>Wachuma Nunam.</strong> Wachumaqa ñawpaq runakunata tinkuchirqa, chayta sunqunkupi waqaycharqanku. Kay hampiqa yachachikunmi, kunan p'unchaykunaqa Hernan kay yachayta apachkan.",
            "<strong>Pisacwan Viachawan.</strong> <strong>Pisac</strong> llaqtapi tiyayku, <strong>Wayna Wasi Hotelpi</strong> samaykuna kan. Aswan kuraq hampiqa <strong>Viacha</strong> ayllupi ruwakun, urqu patapi."
        ]
      },
      ausangate: {
        title: "Ausangate Willka Puriy",
        subtitle: "Enero 3-9, 2026",
        description: "Huk hatun puriy, Pacchanta q'uñi yakupi, Apu Ausangatewan, Wachuma hampiwan, Temazcalwan ima.",
        cta: "Tiyayniykita Waqaychay",
        itinerary: [
          { day: "1 P'unchay", title: "Chayamuy & Ch'uyay", description: "Pacchantaman puriy. Q'uñi yakupi ch'uyakuy, Ausangate ñawpaqpi mañakuy." },
          { day: "2 P'unchay", title: "Ñawpaq Wachuma Raymi", description: "Apuwan tinkuy. P'unchaypi hampi ukyay, urquwan tinkunapaq." },
          { day: "3 P'unchay", title: "Temazcal & Rapé", description: "Pachamama wiksanpi ch'uyay. Hampi wapsiwan, Rapé hampiwan ima." },
          { day: "4 P'unchay", title: "Iskay Kaq Wachuma Raymi", description: "Ukhu yuyayman puriy. Ch'in pampapi yuyayta kicharichiy." },
          { day: "5 P'unchay", title: "Temazcal & Rapé", description: "Iskay kaq wapsi wasi, kallpata tiyachiy." },
          { day: "6 P'unchay", title: "Kimsa Kaq Wachuma & Tukunapaq", description: "Tukuy hampi. Añaschay, kallpachakuy, tukuy yachasqata huñuy." },
          { day: "7 P'unchay", title: "Kutimuy", description: "Urqumanta uraykamuy, Pacchanta yakupi samay, Pisacman kutimuy." }
        ]
      },
      retreat2Day: {
        title: "2 P'unchay T'aqakuy",
        subtitle: "Wayna Wasi & Kinsacocha",
        intro: "Ukhu hampi puriy, Wayna Wasi ukhupi, Pisac urqukunawan.",
        days: [
            { title: "1 P'unchay : Wakichikuy & Wayna Wasiman Chayamuy", content: "Wayna Wasiman chayamuspa, Wachuma hampi wakichiyta qallarinchik. Kayqa hampiwan tinkuymi. Hernan pusasunki allin yuyaywan.", accommodation: "Wayna Wasipi puñuy, apukunaq qhawayninpi." },
            { title: "2 P'unchay : Kinsacocha Raymi", content: "Iskay p'unchaypi, Kinsacocha quchaman risun. Chaypi Wachumata ukyasun, urqukunaq chawpinpi. Hernanwan kuska, ukhu sunquykita qhaway. Tukuypi, rimanakuy kanqa.", accommodation: "Wayna Wasiman kutimuy samarinapaq." }
        ],
        conclusion: "Musuq kallpawan ripunki, Wachuma yachaywan, Pachamamaq kallpanwan."
      },
      juchuy: {
        title: "Juchuy Qosqo Ñawpaq Yachay",
        subtitle: "Ayllu, Mikhuy & Ñawpaq Wasi",
        intro: "2 p'unchay puriy Juchuy Qosqoman, ñawpaq wasikunata qhaway, aylluwan tiyay.",
        days: [
            { title: "1 P'unchay : Puriy & Wayk'uy", content: "Juchuy Qosqoman wicharisun. Ch'isipi, huk ayllu wasipi samasun. Kuska wayk'usun, lawata mikhusun, nina patapi rimanakusun.", accommodation: "Ayllu wasipi puñuy." },
            { title: "2 P'unchay : Raymi Ñawpaq Wasipi", content: "Sut'iyaypi, Wachuma raymita ruwasun Juchuy Qosqo ukhupi. Mana achkha runawanchu, aswan allin tinkuypaq. Ñawpaq runakunawan rimanakusun.", accommodation: "Pisacman kutimuy." }
        ],
        conclusion: "Ñawpaq yachay, kawsay, hampi ima. Wiksa hunt'a, sunqu hunt'a ripunki."
      },
      retreat1Day: {
          title: "1 P'unchay Raymi",
          subtitle: "Willka Tiyaykuna",
          intro: "Huk p'unchay hampiwan, urqukunapi, quchakunapi, ñawpaq wasikunapi.",
          days: [
              { title: "Raymi", content: "Tutallamanta lluqsisun huk willka tiyayman (Pumamarca, Kinsacocha). T'uqay p'unchay hampiwan kasun. Hernan pusasunki. Ch'isipi tukusun.", accommodation: "Manan puñuy kanchu, ichaqa apasaykiku." }
          ],
          conclusion: "Musuqyachiy, ch'uyayachiy, sunqu pampachay.",
          details: { durationLabel: "Unay", durationValue: "Huk P'unchay", locationLabel: "Tiyay", locationValue: "Willka Qhichwa", focusLabel: "Yuyay", focusValue: "Hampi & Pachamama" }
      },
      preparation: {
        title: "San Pedro Raymipaq Wakichikuy",
        subtitle: "Andes Ayllu Kallpachay",
        intro: "Allin hamuy! Kay hatun raymipaq, allinta wakichikunayki tiyan, cuerpoykita, yuyayniykita ima.",
        diet: {
            title: "Mikhuy & Yuyay",
            description: "Manaraq hamuchkaspa, kaykunata ruway 3-5 p'unchay ñawpaqta:",
            items: [
                { label: "Mana Aychata", text: "Ama aychata mikhuychu, wiksayki ch'uya kananpaq." },
                { label: "Mana Misk'ita", text: "Ama azucarta mikhuychu." },
                { label: "Mana Tragu", text: "Ama machaychu, ama cigarrota pitaychu." },
                { label: "Ch'uya Mikhuy", text: "Llasa mikhuyta saqiy." },
                { label: "Yaku", text: "Askha yakuta ukyay." },
                { label: "Yuyay", text: "Sapa p'unchay yuyaymanay, imatachus maskhanki." }
            ]
        },
        packing: {
            title: "Raymi P'unchay",
            description: "Imatachus apamunayki:",
            items: [
                { label: "P'acha", text: "Q'uñi p'achata, sumaq p'achata apamuy." },
                { label: "Ruphamanta", text: "Sombrerota apamuy." },
                { label: "K'intu", text: "T'ikata, frutata apamuy apukunapaq." },
                { label: "Yaku", text: "Yakuykita apamuy." },
                { label: "Qillqana", text: "Yuyayniykita qillqanaykipaq." }
            ]
        },
        suggestions: {
            title: "Yuyaychaykuna",
            description: "Aswan allin kananpaq:",
            items: [
                { label: "Ch'in Kay", text: "Ch'in kayta yachay." },
                { label: "Samay", text: "Allinta samay." },
                { label: "Antikunakunata Saqiy", text: "Celularta waqaychay." },
                { label: "Pachamama", text: "Sapa p'unchay allpawan tinkuy." }
            ]
        },
        closing: "Allin wakichikuwan, Wachuma hampiqa ñanta kicharichisunki. Suyaykiku.",
        risks: {
            title: "Allinta Yachay: Riesgokuna",
            intro: "Kay hampiqa allinmi, ichaqa kanmi imaymanakuna yachanayki:",
            sections: [
                { title: "Qhali Kay", items: [{ label: "Unquykuna", text: "Willay sikuykichus unqusqa kanki, sunquwan otaq umawan unqusqa kanki chayqa. Wakin unquyqa mana allinchu Wachumawan." }, { label: "Hampikuna", text: "Willay sichus hampita ukyashanki, wakin hampiqa, antidepresivos hina, mana allinchu Wachumawan." }, { label: "Kurku", text: "Wakin kuti aqtunallan, otaq sunqu p'atayun. Kayqa pasaqllanmi." }] },
                { title: "Yuyay", items: [{ label: "Hatun Yuyay", text: "Wachumaqa ukhu yuyayta kicharin." }, { label: "Yanapay", text: "Raymi qhipaman, rimanakuyqa allinmi." }] },
                { title: "Responsabilidad", items: [{ label: "Yachaspa", text: "Qam kikiymi munanki kayta ruwayta." }, { label: "Kasuy", text: "Hampiqpa nisqanta kasuy." }] }
            ]
        }
      },
      faq: {
        title: "Wachuma Tapukuykuna",
        subtitle: "Imatachus yachanayki",
        articles: [
            {
                title: "Imatachus Suyanki Wachuma Raymipi",
                content: [
                    "Wachuma raymiqa manan pukllaychu, kayqa sunquq puriyninmi. Musuqña kanki otaq yachaqña kanki, sapa raymiqa sapaqmi. Kaypiqa Willka Qhichwapi kanki, apukunaq qhawayninpi.",
                    "<strong>Willka Tiyay Hampiypaq</strong><br>Cuscoq qayllanpi, Willka Qhichwaqa sumaqmi. Urqukunaqa kallpata qusunki. Chayamusqaykimantapacha, Pachamamawan tinkunki, kayqa ñawpaq yachaymi.",
                    "<strong>Raymi P'unchay</strong><br>Hernanwan qallarinki. Payqa allinta qhawasunki. Wachumaqa sunquta kicharin, yuyayta ch'uyancham. Ch'in kaypi kanki, aylluwan rimanki, yuyaymananki.",
                    "<strong>Yachayta Huñuy</strong><br>Raymi qhipaman, yachasqaykita kawsayniykiman apay. Hernan yanapasunki yuyaymanaypi. Achkha runakuna musuq kawsaywan ripunku, aswan allin runa kaspa."
                ]
            },
            {
                title: "Wachumaq Hampi Kallpan",
                content: [
                    "<strong>Imataq San Pedro?</strong><br>San Pedro utaq Wachumaqa huk hampi kaktusmi. Andes urqukunapi wiñan. Ñawpaqmantapacha hampinapaq servin. <em>Echinopsis pachanoi</em> sutiyoq, hatun t'ikayuq.",
                    "<strong>Ñawpaq Kawsay</strong><br>Inkakuna, ñawpaq runakuna kaywan purirqanku. Kayqa p'uñtemi kay pachawan hanaq pachawan. San Pedro sutinqa punku kichaqmi.",
                    "<strong>Mescalina Kallpa</strong><br>Kay hampiqa mescalinayuq. Kaymi yanapan yuyayta kicharinapaq. Manan drogachu, kayqa hampim. Pachamamawan tinkuchin, munayta apamun.",
                    "<strong>Hampikuy</strong><br>Wachumaqa sunquta hampin, yuyayta allinchan. Aswan llamp'um Ayahuascamantaqa. Kicharin ñawiykita, sunquykita.<br><br><strong>Nuna Hampi:</strong><br>• Musuq Kawsay: Chiqaq kayniykiwan tinkuy.<br>• Sunqu Kichay: Pampachay, kuyay, sunqu nanayta qarqoy.<br>• Yuyay Ch'uyanchay: Kawsayta allinta qhaway.<br><br><strong>Kurku Hampi:</strong><br>• Llakiyta Qarqoy: Ñawpaq nanayta qarqoy.<br>• Hawkayay: Manchakuyta qarqoy, thak kayta tariy."
                ]
            }
        ],
        questionsTitle: "Sapa Kuti Tapukuykuna",
        questions: [
            { question: "Imataq San Pedro raymi?", answer: "San Pedro (Huachuma)qa willka hampim, yuyayta kicharinapaq, hampinapaq. Ñuqayku allinta pusayku." },
            { question: "Qallariqkunapaq allinchu?", answer: "Arí, llapapaqmi. Ñuqayku yachachiyku, allinta pusayku tukuy puriypi." },
            { question: "Imataq Kinsacocha?", answer: "Kinsacochaqa huk sumaq qucham, Pisac patapi. Chaypi raymi ruwayqa ancha sumaqmi, apukunawan tinkunapaq." },
            { question: "Imata apasaq?", answer: "Q'uñi p'achata, purinapaq zapatota, sunquykita, imatachus necesitanki chayta. Huk lista qusaykiku." },
            { question: "Ima simita rimanku?", answer: "Hernanqa Quechuata Españoltawan riman. Huk runakuna yanapanqaku, Frances simitapas rimanku." },
            { question: "Segurochu?", answer: "Arí, ñuqayku allinta qhawayku. Yachaqkuna kanku, manan saqisunkichu." },
            { question: "Qullqi kutichiy kanmanchu?", answer: "Arí, willawayku sichus manaña hamuyta atinki, ñawpaqta willay." }
        ]
      },
      testimonials: {
          title: "Runakunaq Rimaynin",
          items: [
              { 
                  name: "Zoltan E.", 
                  location: "Hungría", 
                  text: "Kayqa chiqaq puriymi, allpawan tinkuymi. Hernanwan puriyqa ñawpaq yachaywan tinkuymi karqa. Ancha agradecesqa kani.",
                  image: IMAGES.zoltan 
              },
              {
                name: "Stephanie K.",
                location: "Google Review",
                text: "Ancha kusisqa kani Don Hernanwan puriqtiy. Urqukunaman rirqayku, allpawan tinkurqayku. Payqa allin hampiqmi. Wayna Wasipi lawata mikhurqayku nina patapi. Yupaychani.",
                image: IMAGES.kittel
            }
          ]
      },
      contact: {
          title: "Rimaykakamuy",
          form: { name: "Sutiyki", email: "Chaskiyki", message: "Willayniyki", submit: "Apachiy" },
          info: "Willka Qhichwapi kachkayku."
      },
      footer: {
        description: "Pachamamawan tinkuy, Wachuma hampiwan, Willka Qhichwapi.",
        rights: "Llapan derechokuna waqaychasqa.",
        columns: {
          links: {
            title: "Puriy",
            items: [
              { label: "Qallariy", href: "/" },
              { label: "Ayllu", href: "/about" },
              { label: "Raymikuna", href: "/services" },
              { label: "Rikch'akuna", href: "/gallery" },
              { label: "Tinkuy", href: "/contact" }
            ]
          },
          reviews: {
              title: "Rimaykuna",
              rating: "5.0"
          },
          follow: {
              title: "Qatipayku",
              facebook: "https://www.facebook.com/hernan.wachuma",
              instagram: "https://www.instagram.com/hernan_wachuma"
          },
          contact: {
              title: "Tinkuy",
              email: "hernan.wachuma@gmail.com",
              phone: "+51 984 316 833"
          },
          find: {
              title: "Tariwayku",
              address: "Willka Qhichwa, Cusco, Perú"
          }
        }
      }
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
    [Language.EN]: enTranslations,
    [Language.ES]: esTranslations,
    [Language.QU]: quTranslations
};