import { Language, TranslationData } from './types';

const galleryImages = [
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
  ausangate3: "/ausangate3.jpg",
  hat: "/hat.jpg",
  costa: "/costa.jpg",
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
    { day: "Feb 25", title: "Arrival & Ocean Connection", description: "We begin by connecting with the vast energy of the Pacific Ocean, grounding ourselves in the land before journeying to the Diamante Valley." },
    { day: "Feb 26-28", title: "Diamante Valley Immersion", description: "A transformative time in the lush Diamante Valley. This first part is intimate and strictly limited to 9 spots, fostering a deep connection with nature and the group." },
    { day: "Mar 1", title: "Journey to El Chirripó", description: "We travel to the sacred lands of El Chirripó to connect with the indigenous tribes and prepare for the initiation journey." },
    { day: "Mar 2", title: "First Wachuma Ceremony", description: "Opening the initiation journey. A profound ceremony guided by Maestro Hernan in the presence of the mountains." },
    { day: "Mar 3", title: "Rest & Integration", description: "A day to rest, reflect, and integrate the teachings of the medicine in the peace of the mountains." },
    { day: "Mar 4", title: "Second Wachuma Ceremony", description: "Deepening the work. A second ceremony to explore further into the spirit and the ancestral wisdom." },
    { day: "Mar 5", title: "Rest & Integration", description: "Time for solitude, community sharing, and gentle integration of the journey's lessons." },
    { day: "Mar 6", title: "Third Wachuma Ceremony", description: "The final ceremony of the initiation. Closing the circle with gratitude and sealing the transformation." },
    { day: "Mar 7", title: "Closing & Departure", description: "Final words, gratitude to the land and the tribes, and beginning our journey home." }
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
      highlights: "Experience Highlights",
      scan: "Scan for Details",
      reserve: "Reserve Your Spot",
      limited: "Limited spaces available",
      flexibleDates: "Flexible Dates",
      print: "Print / Save PDF"
    },
    nav: { home: "Home", about: "The Family", services: "Ceremonies", gallery: "Gallery", contact: "Contact", faq: "Help / FAQ" },
    hero: {
      title: "Sacred Medicine of the Andes",
      subtitle: "Reconnect with Pachamama through traditional Wachuma ceremonies in the Sacred Valley.",
      cta: "Book a Ceremony",
      retreatTeaser: { label: "Sacred Immersion", title: "2 Day Retreat", location: "Pisac & Kinsacocha" },
      ausangateTeaser: { label: "Closer to the Sky", title: "Ausangate 3 Days", date: "Jan 28 - 30, 2026" },
      costaRicaTeaser: { label: "Special Event", title: "Costa Rica Pilgrimage", date: "Feb 24 - Mar 2, 2026" }
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
            price: "$199",
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
            description: "A sacred journey connecting the Andes and the Ocean in a secret location in Costa Rica. Limited to 21 participants.", 
            price: "Inquire",
            details: { duration: "7 Days", location: "Costa Rica", groupSize: "Max 21" }
        },
        { 
            title: "Private Healing", 
            description: "One-on-one sessions tailored to your specific spiritual and emotional needs. Deep blockage removal.", 
            price: "Inquire",
            details: { duration: "Varies", location: "Wayna Wasi", groupSize: "1 Person" }
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
          price: "$199",
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
        intro: "A very special occasion, the first time in Costa Rica in a secret location. A connection of the sacred mountains with the ocean, a special physical and spiritual pilgrimage following a vision and a message from the medicine.",
        description: [
            "Join us for a historic and transformative gathering. For the first time, Hernan brings the sacred Wachuma medicine to the vibrant lands of Costa Rica.",
            "Guided by a profound vision and a direct message from the medicine, this retreat is a spiritual pilgrimage connecting the wisdom of the Andean mountains with the cleansing power of the ocean.",
            "In addition to the sacred Wachuma ceremonies, we will share the medicine of Rapé, perform cleansing works with flowers, and journey through guided medicine meditations.",
            "We will gather in a secret, secluded location, immersed in nature's embrace. This intimate experience is strictly limited to 21 participants (including helpers) to ensure deep, personal attention and a cohesive energetic container."
        ],
        details: { location: "Secret Location, Costa Rica", capacity: "Limited to 21 Souls", dates: "February 24 - March 2, 2026" },
        cta: "Request Invitation",
        visionTitle: "A Vision from the Medicine",
        visionText: "This gathering is not just a retreat; it is a response to a call. The medicine spoke of connecting the wisdom held in the high Andes with the purifying, fluid energy of the ocean. A pilgrimage of spirit and body.",
        themeValue: "Ocean & Mountain",
        itinerary: costaRicaItinerary,
        packages: {
            title: "Participation Includes",
            items: [
                "7 Days / 6 Nights in Sacred Sanctuary",
                "3 Full Wachuma Ceremonies",
                "Rapé & Floral Cleansing Rituals",
                "Daily Integration Circles",
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
                    "<strong>The Power of Mescaline: Connecting to Universal Harmony</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. Unlike synthetic substances, the mescaline in San Pedro gently guides individuals into an altered state of consciousness, fostering a sense of unity and harmony with the world around them.",
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
      testimonials: { title: "Voices from the Heart", items: [{ 
          name: "Zoltan E.", 
          location: "Hungary", 
          text: `It’s a truly authentic experience of connecting with the spirit of the land and the healing power of the plant medicine. It has been a profound connection with the ancient wisdom of the Incan and pre Incan spiritual guides through Maestro Hernan. I’m very grateful for the journey.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `I feel so fortunate to have participated in a full-day Wachuma ceremony with Don Hernan. We journeyed way up into the mountains, through a local village, to commune with nature, spirit, and the energy of reciprocity. His guidance is sincere, and his medicine is the best Wachuma I’ve imbibed. We returned to his house to finish the ceremony with delicious homemade Andean soup, and a fire in the garden under the full moon and stars. I highly recommend visiting Wayna Wasi and working with Don Hernan. 🫶🏼✨🌵🙏🏼⛰️`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "Get in Touch",
        form: { name: "Your Name", email: "Your Email", message: "Your Message", submit: "Send Message" },
        info: "We are located in the heart of the Sacred Valley, near Calca, Cusco."
    },
    footer: {
      description: "Experience the transformative power of Wachuma, the sacred Andean plant medicine known as San Pedro. Join Hernan in guided ceremonies that will help you reconnect with your inner self, heal deeply, and awaken your spirit.",
      columns: {
        links: {
          title: "Quick Links",
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
            rating: "5.0 on Google"
        },
        follow: {
            title: "Follow Us",
            facebook: "https://www.facebook.com/hernan.wachuma",
            instagram: "https://www.instagram.com/hernan_wachuma"
        },
        contact: {
            title: "Contact",
            email: "hernan.wachuma@gmail.com",
            phone: "+51 984 316 283"
        },
        find: {
            title: "Find Us",
            address: "Sacred Valley, Calca, Cusco, Peru"
        }
      },
      rights: "All rights reserved."
    }
};

export const TRANSLATIONS: Record<Language, TranslationData> = {
  // ENGLISH
  [Language.EN]: enTranslations,

  // SPANISH
  [Language.ES]: {
      ...enTranslations, 
      costaRica: {
          ...enTranslations.costaRica,
          title: "Peregrinaje Sagrado a Costa Rica",
          subtitle: "Montañas y Océano Unidos",
          intro: "Una ocasión muy especial, la primera vez en Costa Rica en una ubicación secreta. Una conexión de las montañas sagradas con el océano, un peregrinaje físico y espiritual especial siguiendo una visión y un mensaje de la medicina.",
          description: [
              "Únete a nosotros para una reunión histórica y transformadora. Por primera vez, Hernan trae la medicina sagrada Wachuma a las vibrantes tierras de Costa Rica.",
              "Guiados por una profunda visión y un mensaje directo de la medicina, este retiro es un peregrinaje espiritual que conecta la sabiduría de los Andes con el poder limpiador del océano.",
              "Además de las ceremonias sagradas de Wachuma, compartiremos la medicina del Rapé, realizaremos trabajos de limpieza con flores y viajaremos a través de meditaciones guiadas con medicina.",
              "Nos reuniremos en un lugar secreto y apartado, inmersos en el abrazo de la naturaleza. Esta experiencia íntima está estrictamente limitada a 21 participantes (incluidos los ayudantes) para garantizar una atención personal profunda y un contenedor energético cohesivo."
          ],
          details: { location: "Ubicación Secreta, Costa Rica", capacity: "Limitado a 21 Almas", dates: "24 de Febrero - 2 de Marzo, 2026" },
          cta: "Solicitar Invitación",
          visionTitle: "Una Visión de la Medicina",
          visionText: "Este encuentro no es solo un retiro; es una respuesta a un llamado. La medicina habló de conectar la sabiduría de los Andes con la energía purificadora y fluida del océano. Un peregrinaje del espíritu y el cuerpo.",
          themeValue: "Océano y Montaña",
          itinerary: [
            { day: "25 Feb", title: "Llegada y Conexión con el Océano", description: "Comenzamos conectando con la vasta energía del Océano Pacífico, arraigándonos en la tierra antes de viajar al Valle Diamante." },
            { day: "26-28 Feb", title: "Inmersión en el Valle Diamante", description: "Un tiempo transformador en el exuberante Valle Diamante. Esta primera parte es íntima y estrictamente limitada a 9 plazas, fomentando una profunda conexión con la naturaleza y el grupo." },
            { day: "1 Mar", title: "Viaje a El Chirripó", description: "Viajamos a las tierras sagradas de El Chirripó para conectar con las tribus indígenas y prepararnos para el viaje de iniciación." },
            { day: "2 Mar", title: "Primera Ceremonia de Wachuma", description: "Abriendo el viaje de iniciación. Una profunda ceremonia guiada por el Maestro Hernan en presencia de las montañas." },
            { day: "3 Mar", title: "Descanso e Integración", description: "Un día para descansar, reflexionar e integrar las enseñanzas de la medicina en la paz de las montañas." },
            { day: "4 Mar", title: "Segunda Ceremonia de Wachuma", description: "Profundizando en el trabajo. Una segunda ceremonia para explorar más a fondo en el espíritu y la sabiduría ancestral." },
            { day: "5 Mar", title: "Descanso e Integración", description: "Tiempo para la soledad, compartir en comunidad y la integración suave de las lecciones del viaje." },
            { day: "6 Mar", title: "Tercera Ceremonia de Wachuma", description: "La ceremonia final de la iniciación. Cerrando el círculo con gratitud y sellando la transformación." },
            { day: "7 Mar", title: "Cierre y Partida", description: "Palabras finales, gratitud a la tierra y a las tribus, y comienzo de nuestro viaje a casa." }
          ],
          packages: {
            title: "La Participación Incluye",
            items: [
                "7 Días / 6 Noches en Santuario Sagrado",
                "3 Ceremonias Completas de Wachuma",
                "Rituales de Rapé y Limpieza Floral",
                "Círculos Diarios de Integración",
                "Todas las Comidas Orgánicas",
                "Transporte desde San Isidro"
            ]
          }
      },
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
        featuredExperience: "Experiencia Destacada",
        viewFlyer: "Ver Folleto del Evento",
        duration: "Duración",
        service: "Servicio"
      },
      flyer: {
        highlights: "Puntos Destacados",
        scan: "Escanear para Detalles",
        reserve: "Reserva tu Lugar",
        limited: "Plazas limitadas",
        flexibleDates: "Fechas Flexibles",
        print: "Imprimir / Guardar PDF"
      },
      nav: { home: "Inicio", about: "La Familia", services: "Ceremonias", gallery: "Galería", contact: "Contacto", faq: "Ayuda / FAQ" },
      hero: {
          title: "Medicina Sagrada de los Andes",
          subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
          cta: "Reserva una Ceremonia",
          retreatTeaser: { label: "Inmersión Sagrada", title: "Retiro de 2 Días", location: "Pisac y Kinsacocha" },
          ausangateTeaser: { label: "Más Cerca del Cielo", title: "Viaje Ausangate", date: "28 - 30 Ene, 2026" },
          costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "24 Feb - 2 Mar, 2026" }
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
            "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la provincia de <strong>Espinar</strong> y su linaje es <strong>Ccana (K'ana)</strong>. La cultura K'ana fue una sociedad pre-inca que formó una alianza estratégica pacífica con el Imperio Inca en lugar de una conquista típica. Al integrarse pacíficamente durante el reinado de Pachacutec, se convirtieron en aliados militares vitales—guerreros de élite <strong>'Sinchis'</strong> guerreros que ayudaron a derrotar a los Chancas. Debido a esta reciprocidad, se les concedieron tierras en el Collasuyo y su antigua capital, Kanamarca, fue reconstruida por los Incas.",
            "<strong>El Espíritu del Wachuma.</strong> Se dice que el espíritu del Wachuma conectó primero a la gente de esta región y lo guardaron en su corazón porque la planta les dijo que desaparecería de la tierra, lo cual sucedió no hace mucho. Hernan lleva adelante esta memoria y espíritu.",
            "<strong>Pisac y Viacha.</strong> Estamos ubicados en <strong>Pisac</strong>, un pueblo vibrante en el Valle Sagrado, donde organizamos ceremonias y ofrecemos alojamiento tranquilo en el <strong>Hotel Wayna Wasi</strong>. Para una inmersión más profunda, nuestros retiros de varios días se llevan a cabo en <strong>Viacha</strong>, una comunidad serena en lo alto de Pisac."
        ]
      },
      services: {
          title: "Nuestras Ofrendas",
          items: [
            { 
                title: "Retiro de 2 Días", 
                description: "Inmersión profunda en Wayna Wasi y Kinsacocha. Costo base $173 (1 persona). Persona extra +$70. Alojamiento +$20 por persona. Máx 10 personas.", 
                price: "$173+",
                details: { duration: "2 Días", location: "Pisac y Kinsacocha", groupSize: "Max 10" }
            },
            { 
                title: "Ausangate: Más Cerca del Cielo (3 Días)", 
                description: "Una poderosa jornada con el Apu. Temazcal, Rapé y ceremonia de Wachuma en Pacchanta. Incluye fotografía profesional gratuita.", 
                price: "$199",
                details: { duration: "3 Días", location: "Ausangate", groupSize: "Grupo" }
            },
            { 
                title: "Viaje Sagrado Ausangate (7 Días)", 
                description: "La inmersión completa. 3 ceremonias de Wachuma, rituales de Temazcal, caminata a las lagunas y trabajo de sanación profunda.", 
                price: "Consultar",
                details: { duration: "7 Días", location: "Ausangate", groupSize: "Grupo" }
            },
            { 
                title: "Inmersión Juchuy Qosqo", 
                description: "2 Días en las ruinas de 'Cusco Pequeño'. Quédate con una familia local, cocina comida tradicional y experimenta una conexión profunda.", 
                price: "$200+",
                details: { duration: "2 Días", location: "Juchuy Qosqo", groupSize: "Mín 2" }
            },
            { 
                title: "Ceremonia de 1 Día", 
                description: "Un viaje sagrado para un mínimo de 2 personas. Experimenta la medicina en varios sitios sagrados como ruinas, lagunas y montañas en todo el Valle Sagrado.", 
                price: "$250",
                details: { duration: "1 Día", location: "Valle Sagrado", groupSize: "Mín 2" }
            },
            { 
                title: "Peregrinaje a Costa Rica", 
                description: "Un viaje sagrado conectando los Andes y el Océano en una ubicación secreta en Costa Rica. Limitado a 21 participantes.", 
                price: "Consultar",
                details: { duration: "7 Días", location: "Costa Rica", groupSize: "Máx 21" }
            },
            { 
                title: "Sanación Privada", 
                description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", 
                price: "Consultar",
                details: { duration: "Varía", location: "Wayna Wasi", groupSize: "1 Persona" }
            }
          ],
          ausangateCta: { title: "Ausangate: Un Viaje Más Cerca del Cielo", description: "Únete a un viaje especial de Wachuma al Ausangate. Incluye fotografía profesional gratuita.", button: "Ver Viaje de 3 Días" }
      },
      ausangate: {
        title: "Viaje Sagrado al Ausangate",
        subtitle: "3-9 de Enero, 2026",
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
      ausangate3Day: {
        title: "Ausangate: Un Viaje Más Cerca del Cielo (3 Días)",
        subtitle: "Ceremonia con el Apu",
        description: "Un viaje de medicina vegetal condensado y poderoso en los altos Andes. Conecta con la montaña sagrada y las aguas curativas.",
        details: {
            dates: "28 - 30 Ene, 2026",
            price: "$199",
            bonus: "Incluye sesión de fotografía profesional gratuita"
        },
        cta: "Reservar Lugar",
        itinerary: [
          { day: "Día 1", title: "Llegada, Purificación y Temazcal", description: "Viaje a Pacchanta. Relajación en las aguas termales naturales. Participaremos en una ceremonia de Temazcal con medicina sagrada de Rapé para una purificación profunda, seguida de una caminata hacia el Ausangate para establecer intenciones." },
          { day: "Día 2", title: "Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una profunda ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
          { day: "Día 3", title: "Viaje de Regreso", description: "Cerrando el círculo. Caminata de descenso, último baño en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
        ]
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
      juchuy: {
        title: "Inmersión Ancestral en Juchuy Qosqo",
        subtitle: "Comunidad, Cocina y Ruinas",
        intro: "Un viaje especial de 2 días a Juchuy Qosqo ('Pequeño Cusco'), combinando una caminata a antiguas ruinas con una profunda inmersión cultural alojándose con una familia local.",
        days: [
            { title: "Día 1 : Caminata y Cocina Tradicional", content: "Comenzamos nuestro viaje caminando hacia las espectaculares ruinas de Juchuy Qosqo, con vistas al Valle Sagrado. Por la tarde, nos instalamos en una auténtica casa familiar local. Aquí, prepararemos comida juntos, cocinando sopa andina tradicional y compartiendo historias junto al fuego. Esta preparación comunitaria es una ceremonia en sí misma, conectándonos con la forma de vida local.", accommodation: "Alojamiento auténtico con una familia local junto a las ruinas." },
            { title: "Día 2 : Ceremonia en las Ruinas", content: "La mañana despunta sobre los Apus. Participamos en una ceremonia sagrada de Wachuma en la poderosa presencia de las ruinas de Juchuy Qosqo. Sin las multitudes de otros sitios, podemos conectar profundamente con la historia y la energía de esta finca real. La ceremonia permite una profunda reflexión y conexión con los antepasados.", accommodation: "Descenso y transporte de regreso a Pisac." }
        ],
        conclusion: "Una mezcla única de maravilla arqueológica, cultura viva y trabajo espiritual. Te irás con el estómago lleno, el corazón cálido y el espíritu alineado con los Andes."
      },
      retreat1Day: {
          title: "Ceremonia de 1 Día",
          subtitle: "Sitios Sagrados del Valle",
          intro: "Un viaje enfocado y profundo en la medicina, realizado en varios lugares sagrados como ruinas antiguas, lagunas serenas o montañas poderosas.",
          days: [
              { title: "La Ceremonia", content: "Comenzamos temprano en la mañana, viajando a un sitio sagrado cuidadosamente seleccionado en el Valle Sagrado (como Pumamarca, Kinsacocha u otros lugares de poder). La ceremonia es un compromiso de día completo con la medicina, la naturaleza y uno mismo. Hernan proporciona orientación, manteniendo el espacio para una sanación profunda y conexión. La experiencia concluye a última hora de la tarde.", accommodation: "El alojamiento no está incluido, pero se organiza el transporte hacia y desde el sitio." }
          ],
          conclusion: "Un reinicio poderoso y reconexión con el mundo natural, dejándote con claridad y un corazón más ligero.",
          details: { durationLabel: "Duración", durationValue: "Día Completo (Mañana a Tarde)", locationLabel: "Ubicación", locationValue: "Sitios del Valle Sagrado", focusLabel: "Enfoque", focusValue: "Sanación y Naturaleza" }
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
                { title: "Riesgos Psicológicos y Responsabilidad Emocional", items: [{ label: "Experiencias Intensas", text: "San Pedro puede traer a la superficie emociones profundas y traumas pasados, que pueden ser difíciles de procesar. Se anima a los participantes a realizar una reflexión personal o buscar orientación profesional de antemano si tienen un historial de trauma." }, { label: "Apoyo de Integración", text: "Después del retiro, los participantes pueden beneficiarse de apoyo adicional para integrar sus experiencias. Se aconseja planificar tiempo, apoyo y recursos para procesar cualquier idea o emoción que surja." }] },
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
                    "<strong>¿Qué es el cactus San Pedro?</strong><br>El cactus San Pedro, también conocido como Wachuma, es una antigua planta medicinal nativa de las tierras altas de los Andes, principalmente en Perú. Este cactus verde columnar alto, científicamente llamado <em>Echinopsis pachanoi</em>, thrives at high altitudes, often between 2,000 and 3,000 meters. Se reconoce fácilmente por sus costillas pronunciadas, espinas cortas y grandes flores blancas que florecen por la noche.",
                    "<strong>Orígenes e Historia</strong><br>San Pedro ha sido utilizado durante miles de años por los pueblos indígenas andinos, especialmente las comunidades Quechua y Aymara. Profundamente arraigado en la tradición chamánica, sirve como un puente entre el mundo físico y espiritual. Su nombre, San Pedro, se refiere a San Pedro, el guardián de las puertas del cielo, simbolizando el acceso a las dimensiones espirituales.",
                    "<strong>El Poder de la Mescalina: Conectando con la Armonía Universal</strong><br>Uno de los compuestos activos clave en el cactus San Pedro es la mescalina, un alcaloide psicoactivo natural. La mescalina es responsable de las profundas experiencias visionarias e introspectivas asociadas con Wachuma. A diferencia de las sustancias sintéticas, la mescalina de San Pedro guía suavemente a las personas a un estado alterado de conciencia, fomentando una sensación de unidad y armonía con el mundo que les rodea.",
                    "Las ceremonias de Wachuma a menudo llevan a los participantes a sentirse profundamente conectados con la Pachamama (Madre Tierra), experimentando el pulso de la naturaleza y el ritmo de la vida misma. Esta conexión ayuda a disolver los límites entre el yo y el universo, permitiendo profundas ideas y claridad espiritual. Muchos de los que se embarcan en este viaje lo describen como una experiencia de apertura del corazón, donde el amor y la compasión fluyen naturalmente.",
                    "<strong>Beneficios Espirituales y Terapéuticos</strong><br>San Pedro es famoso por sus propiedades espirituales y curativas. Sus efectos son generalmente más suaves y graduales en comparación con otras medicinas vegetales como la Ayahuasca. Esto lo hace accesible para aquellos que buscan sanación emocional y claridad interioruras sin la intensidad de despertares más abruptos.<br><br><strong>Beneficios Espirituales:</strong><br>• Despertar Espiritual: Facilita la reconexión con el verdadero yo y el mundo natural.<br>• Apertura del Corazón: Promueve la compasión, el perdón y la profunda liberación emocional.<br>• Claridad Mental: Ayuda a obtener perspectiva sobre los desafíos de la vida y fomenta la aceptación.<br><br><strong>Beneficios Terapéuticos:</strong><br>• Liberación Emocional: Ayuda a procesar traumas pasados y emociones no resueltas.<br>• Calma y Serenidad: Reduce la ansiedad y cultiva la paz interior.<br>• Conexión con la Naturaleza: Fortalece el vínculo con la Tierra y los elementos."
                ]
            }
        ],
        questionsTitle: "Preguntas Frecuentes",
        questions: [
            { question: "¿Qué es una ceremonia de San Pedro?", answer: "San Pedro (Huachuma) es una medicina vegetal sagrada utilizada para la sanación, la visión y la profunda conexión espiritual. Nuestras ceremonias son guiadas por facilitadores experimentados para garantizar una experiencia segura y transformadora." },
            { question: "¿El retiro es adecuado para principiantes?", answer: "Sí, nuestros retiros están abiertos a todos, ya sea que tengas experiencia previa con medicina vegetal o seas un participante por primera vez. Brindamos orientación y apoyo completos durante todo el proceso." },
            { question: "¿Qué es Kinsacocha y por qué es especial?", answer: "Kinsacocha, ubicada cerca de Pisac, es un área tranquila rodeada de lagos sagrados. Es un entorno ideal para las ceremonias de Huachuma, ofreciendo una profunda conexión con la naturaleza y la espiritualidad andina." },
            { question: "¿Qué debo llevar al retiro o ceremonia?", answer: "Se proporcionará una lista detallada, pero lo esencial incluye ropa cómoda, zapatos para caminar, artículos personales y un corazón abierto para la transformación." },
            { question: "¿Qué idioma se habla durante el retiro?", answer: "Hernán habla Quechua y Español. Si no hablas estos idiomas, habrá un traductor francés-español disponible para ayudarte durante todo el retiro." },
            { question: "¿Es seguro el retiro?", answer: "La seguridad es nuestra principal prioridad. Nuestros retiros se llevan a cabo en un entorno controlado y de apoyo con facilitadores experimentados para guiarte en cada paso del viaje." },
            { question: "¿Cuál es su política de reembolso o cancelación?", answer: "Los depósitos son reembolsables hasta una fecha específica. Fomentamos la comunicación temprana si tus planes cambian para garantizar claridad y apoyo." }
        ]
      },
      testimonials: { title: "Voces del Corazón", items: [{ 
          name: "Zoltan E.", 
          location: "Hungría", 
          text: `Es una experiencia verdaderamente auténtica de conexión con el espíritu de la tierra y el poder curativo de la medicina vegetal. Ha sido una conexión profunda con la sabiduría antigua de los guías espirituales Incas y pre-Incas a través del Maestro Hernan. Estoy muy agradecido por el viaje.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `Me siento muy afortunada de haber participado en una ceremonia de Wachuma de día completo con Don Hernan. Viajamos a las montañas, a través de un pueblo local, para comulgar con la naturaleza, el espíritu y la energía de la reciprocidad. Su guía es sincera y su medicina es la mejor Wachuma que he bebido. Regresamos a su casa para terminar la ceremonia con una deliciosa sopa andina casera y un fuego en el jardín bajo la luna llena y las estrellas. Recomiendo encarecidamente visitar Wayna Wasi y trabajar con Don Hernan.`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "Contacto",
        form: { name: "Tu Nombre", email: "Tu Email", message: "Tu Mensaje", submit: "Enviar Mensaje" },
        info: "Estamos ubicados en el corazón del Valle Sagrado, cerca de Calca, Cusco."
    }
  },

  // HUNGARIAN
  [Language.HU]: {
      ...enTranslations,
      costaRica: {
          ...enTranslations.costaRica,
          title: "Szent Zarándoklat Costa Ricába",
          subtitle: "Hegyek és Óceán Egyesülése",
          intro: "Különleges alkalom, először Costa Ricában egy titkos helyszínen. A szent hegyek és az óceán összekapcsolása, különleges fizikai és spirituális zarándoklat a medicina látomása és üzenete nyomán.",
          description: [
              "Csatlakozz hozzánk egy történelmi és átalakító összejövetelre. Hernan először viszi el a szent Wachuma medicinát Costa Rica vibráló földjeire.",
              "Egy mély látomás és a medicina közvetlen üzenete által vezérelve, ez az elvonulás egy spirituális zarándoklat, amely összeköti az andoki hegyek bölcsességét az óceán tisztító erejével.",
              "A szent Wachuma szertartások mellett megosztjuk a Rapé medicinát, tisztító munkákat végzünk virágokkal, és vezetett medicina meditációkon veszünk részt.",
              "Egy titkos, eldugott helyszínen gyűlünk össze, a természet ölelésében. Ez a bensőséges élmény szigorúan 21 résztvevőre korlátozódik (a segítőket is beleértve), hogy biztosítsuk a mély, személyes figyelmet és az összetartó energetikai teret."
          ],
          details: { location: "Titkos Helyszín, Costa Rica", capacity: "21 Lélekre Korlátozva", dates: "2026. Február 24 - Március 2." },
          cta: "Meghívó Kérése",
          visionTitle: "Látomás a Medicinától",
          visionText: "Ez az összejövetel nem csupán egy elvonulás; válasz egy hívásra. A medicina arról beszélt, hogy össze kell kötni a magas Andokban őrzött bölcsességet az óceán tisztító, áramló energiájával. A szellem és a test zarándoklata.",
          themeValue: "Óceán és Hegy",
          itinerary: [
            { day: "Feb 25", title: "Érkezés és Kapcsolódás az Óceánhoz", description: "A Csendes-óceán hatalmas energiájával való kapcsolódással kezdünk, leföldelve magunkat a földön, mielőtt a Diamante-völgybe utaznánk." },
            { day: "Feb 26-28", title: "Elmélyülés a Diamante-völgyben", description: "Átalakító időszak a buja Diamante-völgyben. Ez az első rész meghitt és szigorúan 9 főre korlátozódik, elősegítve a mély kapcsolatot a természettel és a csoporttal." },
            { day: "Már 1", title: "Utazás El Chirripóba", description: "El Chirripó szent földjére utazunk, hogy kapcsolatba lépjünk az őslakos törzsekkel és felkészüljünk a beavatási utazásra." },
            { day: "Már 2", title: "Első Wachuma Szertartás", description: "A beavatási utazás megnyitása. Mélyreható szertartás Hernan mester vezetésével a hegyek jelenlétében." },
            { day: "Már 3", title: "Pihenés és Integráció", description: "Egy nap a pihenésre, elmélkedésre és a medicina tanításainak integrálására a hegyek békéjében." },
            { day: "Már 4", title: "Második Wachuma Szertartás", description: "A munka elmélyítése. Egy második szertartás a szellem és az ősi bölcsesség további felfedezésére." },
            { day: "Már 5", title: "Pihenés és Integráció", description: "Idő az egyedüllétre, a közösségi megosztásra és az utazás tanulságainak gyengéd integrálására." },
            { day: "Már 6", title: "Harmadik Wachuma Szertartás", description: "A beavatás utolsó szertartása. A kör bezárása hálával és az átalakulás megpecsételése." },
            { day: "Már 7", title: "Zárás és Hazautazás", description: "Végső szavak, hála a földnek és a törzseknek, és hazaútunk megkezdése." }
          ],
          packages: {
            title: "A Részvétel Tartalmazza",
            items: [
                "7 Nap / 6 Éjszaka Szent Menedékhelyen",
                "3 Teljes Wachuma Szertartás",
                "Rapé és Virágos Tisztító Rituálék",
                "Napi Integrációs Körök",
                "Minden Bio Étkezés",
                "Szállítás San Isidróból"
            ]
          }
      },
      ui: {
        viewDetails: "Részletek megtekintése",
        inquire: "Érdeklődés",
        contribution: "Hozzájárulás",
        bookRetreat: "Foglalás",
        bookCeremony: "Szertartás foglalása",
        accommodation: "Szállás",
        note: "Megjegyzés",
        eventDetails: "Esemény részletei",
        location: "Helyszín",
        capacity: "Kapacitás",
        theme: "Téma",
        email: "Email",
        whatsapp: "WhatsApp",
        connectWithUs: "Kapcsolat",
        featuredExperience: "Kiemelt Élmény",
        viewFlyer: "Szórólap megtekintése",
        duration: "Időtartam",
        service: "Szolgáltatás"
      },
      flyer: {
        highlights: "Kiemelt Élmények",
        scan: "Részletek szkennelése",
        reserve: "Helyfoglalás",
        limited: "Korlátozott helyek",
        flexibleDates: "Rugalmas Dátumok",
        print: "Nyomtatás / Mentés PDF-ként"
      },
      nav: { home: "Kezdőlap", about: "A Család", services: "Szertartások", gallery: "Galéria", contact: "Kapcsolat", faq: "GYIK" },
      hero: {
        title: "Az Andok Szent Medicinája",
        subtitle: "Kapcsolódj újra Pachamamával a hagyományos Wachuma szertartásokon keresztül a Szent Völgyben.",
        cta: "Szertartás Foglalása",
        retreatTeaser: { label: "Szent Elmélyülés", title: "2 Napos Elvonulás", location: "Pisac & Kinsacocha" },
        ausangateTeaser: { label: "Közelebb az Éghez", title: "Ausangate 3 Nap", date: "2026. Jan 28 - 30." },
        costaRicaTeaser: { label: "Különleges Esemény", title: "Costa Rica Zarándoklat", date: "2026. Feb 24 - Már 2." }
      },
      benefits: {
        title: "A Wachuma Ereje",
        subtitle: "Miért utazunk a Szent Kaktusszal",
        items: [
          { title: "Érzelmi Gyógyulás", description: "Múltbeli traumák és érzelmi blokkok elengedése, megbocsátás és béke megtalálása." },
          { title: "Kapcsolat a Természettel", description: "Tapasztald meg a mély egységet a Földdel, az elemekkel és az Andok élő szellemével." },
          { title: "Tisztánlátás és Vízió", description: "Csendesítsd el az elmét, hogy útmutatást, célt és megújult perspektívát kaphass életutadhoz." }
        ]
      },
      about: {
        title: "Találkozz Hernannal",
        subtitle: "A Szent Kaktusz Őrzője",
        description: [
          "<strong>Hernan Colque</strong> kecsua származású, a <strong>Wachuma (San Pedro) szertartások</strong> elkötelezett vezetője, aki mélyen gyökerezik az Andok szent hagyományaiban. 5000 méter felett született <strong>Viachában</strong>, <strong>Pisac</strong> egy magashegyi közösségében, Hernan olyan gyógyító vérvonalat hordoz, amely az inka idők előtti korokra nyúlik vissza.",
          "Az ősi hagyomány szerint generációnként csak egy gyermek örökölheti ezt az utat, és önként kell választania. A bölcsesség nagyapjától, Carmentől szállt apjára, Beninhóra. Hét testvér közül Hernan nagyon fiatalon választotta a medicinát, így ő lett ennek az ősi örökségnek és a <strong>Pachamamával (Földanya)</strong> való mély kapcsolatának egyetlen hordozója.",
          "<strong>A Ccana Vérvonal Espinarból.</strong> Hernan <strong>Espinar tartományból</strong> származik, vérvonala <strong>Ccana (K'ana)</strong>. A K'ana kultúra egy inka előtti társadalom volt, amely egyedülálló, békés stratégiai szövetséget kötött az Inka Birodalommal a tipikus hódítás helyett. Pachacutec uralkodása alatt békésen integrálódtak, és létfontosságú katonai szövetségesekké váltak - elit <strong>'Sinchis'</strong> harcosokká, akik segítettek legyőzni a Chancákat. Ennek a kölcsönösségnek köszönhetően földeket kaptak Collasuyoban, és ősi fővárosukat, Kanamarcát az inkák újjáépítették.",
          "<strong>A Wachuma Szelleme.</strong> A mondás szerint a Wachuma szelleme először ennek a régiónak az embereit kötötte össze, és ők a szívükben őrizték, mert a növény azt mondta nekik, hogy el fog tűnni a földről, ami nem is olyan régen meg is történt. Hernan ezt az emléket és szellemet viszi tovább.",
          "<strong>Pisac és Viacha.</strong> Székhelyünk <strong>Pisacban</strong>, a Szent Völgy egyik élettel teli városában található, ahol szertartásokat tartunk és békés szállást kínálunk a <strong>Wayna Wasi Hotelben</strong>. A mélyebb elmélyülés érdekében többnapos elvonulásainkat <strong>Viachában</strong> tartjuk, egy csendes közösségben, magasan Pisac felett."
        ]
      },
      services: {
        title: "Kínálatunk",
        items: [
          { 
              title: "2 Napos Elvonulás", 
              description: "Mély elmélyülés a Wayna Wasiban és a Kinsacochánál. Alapár $173 (1 fő). Minden további fő +$70. Szállás +$20/fő. Max 10 fő.", 
              price: "$173+",
              details: { duration: "2 Nap", location: "Pisac & Kinsacocha", groupSize: "Max 10" }
          },
          { 
              title: "Ausangate: Közelebb az Éghez (3 Nap)", 
              description: "Egy erőteljes utazás az Apuval. Temazcal, Rapé és Wachuma szertartás Pacchantában. Ingyenes professzionális fotózással.", 
              price: "$199",
              details: { duration: "3 Nap", location: "Ausangate", groupSize: "Csoport" }
          },
          { 
              title: "Ausangate Szent Utazás (7 Nap)", 
              description: "A teljes elmélyülés. 3 Wachuma szertartás, Temazcal rituálék, túrázás a lagúnákhoz és mély gyógyító munka.", 
              price: "Érdeklődés",
              details: { duration: "7 Nap", location: "Ausangate", groupSize: "Csoport" }
          },
          { 
              title: "Juchuy Qosqo Elmélyülés", 
              description: "2 nap a 'Kis Cusco' romjainál. Szállás egy helyi családnál, hagyományos ételek közös főzése és mély kapcsolódás.", 
              price: "$200+",
              details: { duration: "2 Nap", location: "Juchuy Qosqo", groupSize: "Min 2" }
          },
          { 
              title: "1 Napos Szertartás", 
              description: "Szent utazás minimum 2 fő részére. Tapasztald meg a medicinát különböző szent helyeken, mint romok, lagúnák és hegyek a Szent Völgyben.", 
              price: "$250",
              details: { duration: "1 Nap", location: "Szent Völgy", groupSize: "Min 2" }
          },
          { 
              title: "Costa Rica Zarándoklat", 
              description: "Szent utazás, amely összeköti az Andokat és az Óceánt egy titkos helyszínen Costa Ricában. 21 résztvevőre korlátozva.", 
              price: "Érdeklődés",
              details: { duration: "7 Nap", location: "Costa Rica", groupSize: "Max 21" }
          },
          { 
              title: "Privát Gyógyítás", 
              description: "Személyre szabott ülések az egyedi spirituális és érzelmi igényeidhez. Mély blokkok oldása.", 
              price: "Érdeklődés",
              details: { duration: "Változó", location: "Wayna Wasi", groupSize: "1 Fő" }
          }
        ],
        ausangateCta: { title: "Ausangate: Utazás Közelebb az Éghez", description: "Csatlakozz egy különleges Wachuma utazáshoz az Ausangate-hoz. Ingyenes professzionális fotózással.", button: "3 Napos Utazás Megtekintése" }
      },
      ausangate: {
        title: "Ausangate Szent Utazás (7 Nap)",
        subtitle: "2026. Január 3-9.",
        description: "Mélyreható expedíció, amely ötvözi Pacchanta gyógyító vizeit, Apu Ausangate fenséges jelenlétét, valamint a Wachuma és a Temazcal átalakító erejét.",
        cta: "Helyfoglalás",
        itinerary: [
          { day: "1. Nap", title: "Érkezés és Megtisztulás", description: "Utazás Pacchantába. Lazítás a természetes termálvizekben a test megtisztítására, majd túra az Ausangate felé szándékaink megfogalmazására." },
          { day: "2. Nap", title: "Első Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Nappali szertartás, kapcsolódás a hegy szellemével és a végtelen andoki éggel." },
          { day: "3. Nap", title: "Temazcal (Izzasztókunyhó) és Rapé", description: "Hagyományos gőzfürdő rituálé, amely Földanya méhét jelképezi. Fizikai és spirituális méregtelenítés szent Rapé medicinával." },
          { day: "4. Nap", title: "Második Wachuma Szertartás", description: "Az utazás elmélyítése. Munka a belső blokkokon és a tudat tágítása a felföld csendjében." },
          { day: "5. Nap", title: "Temazcal és Rapé", description: "Második izzasztókunyhó szertartás a kapott energiák földelésére és a szellem további tisztítására szent Rapéval." },
          { day: "6. Nap", title: "Harmadik Wachuma és Integráció", description: "Az utolsó medicina szertartás. Fókuszban az integráció, a hála és a héten kapott gyógyulás lezárása." },
          { day: "7. Nap", title: "Visszautazás", description: "Túra le a hegyről, utolsó mártózás a pacchantai hőforrásokban, és transzfer vissza Pisacba." }
        ]
      },
      ausangate3Day: {
        title: "Ausangate: Utazás Közelebb az Éghez (3 Nap)",
        subtitle: "Szertartás az Apuval",
        description: "Egy tömör és erőteljes növényi medicina utazás. Kapcsolódj a szent heggyel és a gyógyító vizekkel a magas Andokban.",
        details: {
            dates: "2026. Január 28 - 30.",
            price: "$199",
            bonus: "Ingyenes professzionális fotózást tartalmaz"
        },
        cta: "Helyfoglalás",
        itinerary: [
          { day: "1. Nap", title: "Érkezés, Megtisztulás és Temazcal", description: "Utazás Pacchantába. Lazítás a természetes termálvizekben. Részt veszünk egy Temazcal (Izzasztókunyhó) szertartáson szent Rapé medicinával a mély megtisztulásért, majd túrázunk az Ausangate felé, hogy megfogalmazzuk az utazás szándékait." },
          { day: "2. Nap", title: "Wachuma Szertartás", description: "A szív megnyitása az Apu felé. Mélyreható nappali szertartás, kapcsolódás a hegy szellemével és a végtelen andoki éggel." },
          { day: "3. Nap", title: "Visszautazás", description: "A kör bezárása. Túra le a hegyről, utolsó mártózás a pacchantai hőforrásokban, és transzfer vissza Pisacba." }
        ]
      },
      retreat2Day: {
          title: "2 Napos Elvonulás",
          subtitle: "Wayna Wasi és Kinsacocha",
          intro: "Mély elmélyülés a szent medicinában, a Wayna Wasi szentélyében és Pisac erőteljes hegyei között.",
          days: [
              { title: "1. Nap: Felkészülés és Érkezés a Wayna Wasiba", content: "A Wayna Wasiba érkezéskor a résztvevők a bedida (a szent Wachuma ital) ceremoniális elkészítésével kezdik meg utazásukat. Ez az élmény szent köteléket kezdeményez a medicinával, megteremtve a teret a belső felfedezéshez és kapcsolódáshoz. Hernan gondosan vezeti a résztvevőket, segítve őket szándékaik tisztázásában és szívük megnyitásában a Wachuma gyengéd, mégis erőteljes hatásai előtt.", accommodation: "Az éjszakát a Wayna Wasiban töltjük, a béke szentélyében, ahol az Andok szelleme mindig jelen van." },
              { title: "2. Nap: Szertartás Kinsacochánál, Pisac", content: "A második napon a Pisacban található, nagy tiszteletnek örvendő Kinsacochához utazunk, ahol lélegzetelállító hegyi kilátás közepette vesztek részt a Wachuma szertartáson. Hernan tapasztalt vezetésével a résztvevők felfedezik belső tájaikat, személyes felismeréseket keresnek, és fogadják a Wachuma tanításait. A szertartás végén egy csoportos megosztó kör lehetővé teszi a résztvevők számára, hogy feldolgozzák és reflektáljanak utazásukra, fokozva az elvonulás hatását.", accommodation: "Visszatérés a Wayna Wasiba egy békés éjszakára, a nap átalakító élményeinek befogadására." }
          ],
          conclusion: "A résztvevők megújult önérzettel és céltudattal távoznak, megerősödve a Wachuma élménye és Pachamama időtlen bölcsessége által."
      },
      juchuy: {
          title: "Juchuy Qosqo Ősi Elmélyülés",
          subtitle: "Közösség, Konyha és Romok",
          intro: "Különleges 2 napos utazás Juchuy Qosqóba ('Kis Cusco'), amely ötvözi az ősi romokhoz való túrázást egy mély kulturális elmélyüléssel egy helyi családnál.",
          days: [
              { title: "1. Nap: Túra és Hagyományos Főzés", content: "Utazásunkat a Szent Völgyre néző látványos Juchuy Qosqo romjaihoz való túrával kezdjük. Délután egy autentikus helyi családi házban szállunk meg. Itt együtt készítünk ételt, hagyományos andoki levest főzünk és történeteket osztunk meg a tűz mellett. Ez a közös készülődés önmagában is egy szertartás, amely leföldel minket a helyi életmódban.", accommodation: "Autentikus szállás egy helyi családnál a romok mellett." },
              { title: "2. Nap: Szertartás a Romoknál", content: "A reggel az Apuk felett virrad. Szent Wachuma szertartáson veszünk részt Juchuy Qosqo romjainak erőteljes jelenlétében. Más helyszínek tömegétől mentesen mélyen kapcsolódhatunk ennek a királyi birtoknak a történelméhez és energiájához. A szertartás mély reflexiót és az ősökkel való kapcsolatot tesz lehetővé.", accommodation: "Ereszkedés és transzfer vissza Pisacba." }
          ],
          conclusion: "A régészeti csodák, az élő kultúra és a spirituális munka egyedülálló keveréke. Teli hassal, meleg szívvel és az Andokkal összhangban lévő lélekkel távozol."
      },
      retreat1Day: {
          title: "1 Napos Szertartás",
          subtitle: "A Völgy Szent Helyei",
          intro: "Fókuszált és mély utazás a medicinába, különböző szent helyszíneken, mint például ősi romok, csendes lagúnák vagy erőteljes hegyek.",
          days: [
              { title: "A Szertartás", content: "Kora reggel indulunk egy gondosan kiválasztott szent helyre a Szent Völgyben (mint például Pumamarca, Kinsacocha vagy más erőhelyek). A szertartás egy egész napos elköteleződés a medicinával, a természettel és önmagunkkal. Hernan útmutatást nyújt, teret tartva a mély gyógyuláshoz és kapcsolódáshoz. Az élmény késő délután zárul.", accommodation: "A szállást nem tartalmazza, de a helyszínre és vissza történő szállítást megszervezzük." }
          ],
          conclusion: "Erőteljes újraindítás és újrakapcsolódás a természeti világgal, tisztánlátással és könnyebb szívvel távozva.",
          details: { durationLabel: "Időtartam", durationValue: "Egész Nap (Reggeltől Délutánig)", locationLabel: "Helyszín", locationValue: "Szent Völgy Helyszínei", focusLabel: "Fókusz", focusValue: "Gyógyulás és Természet" }
      },
      preparation: {
        title: "Felkészülés a San Pedro Elvonulásra",
        subtitle: "Az Andoki Közösség Jövőjének Megerősítése",
        intro: "Üdvözlünk az átalakító háromnapos San Pedro elvonuláson! Hogy a legtöbbet hozd ki ebből az élményből, kérjük, készülj fel előre mind fizikailag, mind mentálisan. Íme egy útmutató a jelentőségteljes utazás biztosításához.",
        diet: {
            title: "Felkészülés: Könnyű Étrend és Szándékok",
            description: "Az elvonulást megelőzően egy könnyű, tiszta étrend segíthet megnyitni a tested és elméd az élményre. Íme néhány javaslat legalább 3-5 nappal az érkezés előtt:",
            items: [
                { label: "Vegetáriánus Étrend", text: "Kerüld a húst és az állati eredetű termékeket, mivel ezek megterhelhetik az emésztőrendszert." },
                { label: "Hozzáadott Cukor Nélkül", text: "Tartózkodj a feldolgozott cukrok fogyasztásától az energiaszinted kiegyensúlyozása érdekében." },
                { label: "Stimulánsok Korlátozása", text: "Csökkentsd vagy iktasd ki a koffeint, alkoholt és egyéb stimulánsokat, hogy segítsd az elméd és tested tisztulását." },
                { label: "Nehéz Ételek Kerülése", text: "Hagyd el az olajban sült ételeket és a tejtermékeket a könnyebb emésztés érdekében." },
                { label: "Hidratálás", text: "Igyál sok vizet a tisztánlátás és az általános jólét érdekében." },
                { label: "Szándékok", text: "Az étrenden túl szánj időt minden nap az elvonulással kapcsolatos szándékaid megfogalmazására. Naplózással, meditációval vagy csendes elmélkedéssel hangolódj rá arra, mit remélsz nyerni vagy elengedni ezen az utazáson keresztül." }
            ]
        },
        packing: {
            title: "A Szertartás Napja",
            description: "A szertartás napján, amelyre az elvonulás második napján kerül sor, javasoljuk, hogy hozz magaddal néhány személyes tárgyat, amelyek fokozhatják a kapcsolódást és hozzájárulhatnak a szent térhez.",
            items: [
                { label: "Kényelmes Ruházat", text: "Viselj laza, kényelmes ruházatot, amely alkalmas a szabadban való tartózkodásra." },
                { label: "Napsapka", text: "Mivel a szertartás a szabadban zajlik, hozz magaddal kalapot vagy sapkát a nap elleni védelemhez." },
                { label: "Felajánlás", text: "Szokás gyümölcsöt és virágot hozni felajánlásként a szertartásra. Ez a gesztus a hálát és a természettel való kapcsolatot szimbolizálja." },
                { label: "Kulacs", text: "A hidratáltság megőrzése egész nap elengedhetetlen." },
                { label: "Jegyzetfüzet és Toll", text: "Lehet, hogy a szertartás után inspirációt érzel a naplózásra, hogy rögzítsd gondolataidat, felismeréseidet vagy érzelmeidet." }
            ]
        },
        suggestions: {
            title: "További Javaslatok az Elvonuláshoz",
            description: "Utazásod fokozása érdekében fontold meg a következőket:",
            items: [
                { label: "Csendes Idő Tiszteletben Tartása", text: "Használd a csendes időszakokat az élményeidre való reflektálásra és feldolgozásra." },
                { label: "Légzés és Meditáció", text: "A gyengéd légzőgyakorlatok segíthetnek a földelésben és a középpontban maradásban." },
                { label: "Digitális Detox", text: "Kapcsolódj le a telefonról és egyéb eszközökről, hogy teljesen jelen lehess." },
                { label: "Kapcsolódás a Természettel", text: "Ha lehetséges, tölts időt a természetben minden nap." }
            ]
        },
        closing: "A tudatos felkészüléssel és nyitottsággal teret teremtesz a San Pedro medicina számára, hogy a felfedezés mély útjára vezessen. Várjuk, hogy megoszthassuk veled ezt a különleges élményt.",
        risks: {
            title: "Fontos Figyelmeztetés: Kockázatok és Felelősség",
            intro: "Bár ezt az elvonulást úgy terveztük, hogy biztonságos és átalakító élményt nyújtson, fontos tudomásul venni, hogy a San Pedro szertartáson való részvétel fizikai és pszichológiai kockázatokkal jár. Kérjük, tekintsd át figyelmesen az alábbi szempontokat a tájékozott részvétel érdekében:",
            sections: [
                { title: "Egészségügyi és Orvosi Nyilatkozat", items: [{ label: "Egészségügyi Állapotok", text: "A résztvevőknek tájékoztatniuk kell a vezetőket minden egészségügyi állapotról, beleértve a szívproblémákat, mentális betegségeket vagy rohamokat. Bizonyos meglévő állapotok növelhetik a San Pedro élménnyel kapcsolatos kockázatokat." }, { label: "Gyógyszerek", text: "Bizonyos gyógyszerek, beleértve az antidepresszánsokat, antipszichotikumokat és egyes vény nélkül kapható gyógyszereket, káros kölcsönhatásba léphetnek a San Pedróval. Kérjük, jelezd bármilyen gyógyszer szedését a vezetőknek jóval az elvonulás előtt." }, { label: "Fizikai Érzékenység", text: "A San Pedro átmeneti fizikai hatásokat okozhat, mint például hányinger, hányás és pulzusemelkedés. A résztvevőknek fizikailag és mentálisan fel kell készülniük ezekre a hatásokra." }] },
                { title: "Pszichológiai Kockázatok és Érzelmi Felelősség", items: [{ label: "Intenzív Élmények", text: "A San Pedro mély érzelmeket és múltbéli traumákat hozhat felszínre, amelyeket nehéz lehet feldolgozni. Bátorítjuk a résztvevőket, hogy végezzenek személyes reflexiót, vagy kérjenek szakmai útmutatást az elvonulás előtt, ha traumás előzményeik vannak." }, { label: "Integrációs Támogatás", text: "Az elvonulást követően a résztvevők számára előnyös lehet a további támogatás az élmények integrálásához. Javasolt időt, támogatást és erőforrásokat tervezni a felmerülő belátások vagy érzelmek feldolgozására." }] },
                { title: "Személyes Felelősség", items: [{ label: "Tájékozott Beleegyezés", text: "Az elvonuláson való részvétellel elismered, hogy önként veszel részt ebben az élményben. Bármilyen belátás, kihívás vagy személyes átalakulás, amit tapasztalsz, a saját felelősséged." }, { label: "Biztonsági Óvintézkedések", text: "Kövesd a vezetők által biztosított összes biztonsági előírást, beleértve az étrendi korlátozásokat, a szertartások alatti javasolt viselkedést és a fizikai tevékenységek korlátozását." }] }
            ]
        }
      },
      faq: {
        title: "Wachuma Elvonulás Útmutató",
        subtitle: "Minden, amit tudnod kell az élményről",
        articles: [
            {
                title: "Mire számíthatsz egy Wachuma elvonuláson",
                content: [
                    "Egy Wachuma elvonulás tervezése olyan érzés lehet, mintha a lélek zarándoklatára készülnél. Akár új vagy a növényi medicinában, akár tapasztalt kereső, minden Wachuma szertartás egyedi, átalakító élményt kínál. Íme, mire számíthatsz, amikor elindulsz egy elvonulásra Peru Szent Völgyében, ahol az Andok szelleme és maga Pachamama mindig jelen van.",
                    "<strong>Szent környezet a mély gyógyuláshoz</strong><br>A Cusco melletti Szent Völgy tökéletes hátteret biztosít spirituális utazásodhoz. Az andoki hegyek között elhelyezkedő elvonulási helyszínünket lenyűgöző tájak veszik körül, amelyek felerősítik a Wachuma erejét. Az érkezés pillanatától érezni fogod a Föld és a kozmosz közötti mély kapcsolatot – egy olyan kapcsolatot, amely központi szerepet játszik az andoki kozmológiában és a Wachuma hagyományban.",
                    "<strong>Egy tipikus szertartási nap</strong><br>Az elvonulás a Wachuma gyengéd bemutatásával kezdődik. Hernan Colque vezetésével a szertartások egy biztonságos, támogató térben zajlanak, ahol arra bátorítanak, hogy hallgass a belső hangodra. A Wachuma segít megnyitni a szívet, tisztánlátást és békét nyújtva, ahogy végigjárod a napot. Az elvonulás gyakran magában foglal csendes időt a természetben, csoportos megosztást és időt a reflexióra, így az élmény holisztikus és gyógyító.",
                    "<strong>A Wachuma élmény integrálása</strong><br>A Wachumától kapott felismerések mélyrehatóak lehetnek, és fontos időt szánni arra, hogy ezeket a tanulságokat beépítsd a mindennapi életedbe. Hernan és csapata ott van, hogy segítsen feldolgozni az élményeidet, akár csoportos beszélgetések, akár egyéni támogatás révén. Sok résztvevő megújult céltudattal és mély kapcsolattal távozik az elvonulásról önmagával és a körülötte lévő világgal."
                ]
            },
            {
                title: "Fedezd fel a Wachuma gyógyító erejét",
                content: [
                    "<strong>Mi az a San Pedro kaktusz?</strong><br>A San Pedro kaktusz, más néven Wachuma, egy ősi gyógynövény, amely az Andok fennsíkjain őshonos, elsősorban Peruban. Ez a magas, oszlopos zöld kaktusz, tudományos nevén <em>Echinopsis pachanoi</em>, nagy magasságokban, gyakran 2000 és 3000 méter között virágzik. Könnyen felismerhető kifejezett bordáiról, rövid tüskéiről és nagy fehér virágairól, amelyek éjszaka nyílnak.",
                    "<strong>Eredet és Történelem</strong><br>A San Pedrót évezredek óta használják az andoki őslakos népek, különösen a kecsua és ajmara közösségek. Mélyen gyökerezik a sámáni hagyományokban, hídként szolgálva a fizikai és a szellemi világ között. Neve, San Pedro (Szent Péter), a mennyország kapujának őrzőjére utal, szimbolizálva a spirituális dimenziókhoz való hozzáférést.",
                    "<strong>A Meszkalin ereje: Kapcsolódás az Univerzális Harmóniához</strong><br>A San Pedro kaktusz egyik kulcsfontosságú hatóanyag a meszkalin, egy természetesen előforduló pszichoaktív alkaloid. A meszkalin felelős a Wachumához társított mély látnoki és introspetív élményekért. A szintetikus anyagokkal ellentétben a San Pedróból származó meszkalin gyengéden vezeti az egyént egy módosult tudatállapotba, elősegítve az egység és harmónia érzését a körülötte lévő világgal.",
                    "A Wachuma szertartások gyakran vezetik a résztvevőket arra, hogy mélyen kapcsolódjanak Pachamamához (Földanya), megtapasztalva a természet pulzusát és magát az élet ritmusát. Ez a kapcsolat segít feloldani a határokat az én és az univerzum között, lehetővé téve a mély belátásokat és a spirituális tisztánlátást. Sokan, akik erre az útra lépnek, szívnyitogató élményként írják le, ahol a szeretet és az együttérzés természetesen áramlik.",
                    "<strong>Spirituális és Terápiás Előnyök</strong><br>A San Pedro híres spirituális és gyógyító tulajdonságairól. Hatásai általában gyengédebbek és fokozatosabbak más növényi medicinákhoz, például az Ayahuascához képest. Ez hozzáférhetővé teszi azok számára, akik érzelmi gyógyulást és belső tisztánlátást keresnek a hirtelenebb ébredések intenzitása nélkül.<br><br><strong>Spirituális Előnyök:</strong><br>• Spirituális Ébredés: Elősegíti az újrakapcsolódást a valódi énnel és a természeti világgal.<br>• Szívnyitás: Elősegíti az együttérzést, a megbocsátást és a mély érzelmi felszabadulást.<br>• Mentális Tisztánlátás: Segít perspektívát nyerni az élet kihívásaival kapcsolatban és elősegíti az elfogadást.<br><br><strong>Terápiás Előnyök:</strong><br>• Érzelmi Felszabadulás: Segít a múltbéli traumák és a feloldatlan érzelmek feldolgozásában.<br>• Nyugalom és Derű: Csökkenti a szorongást és belső békét teremt.<br>• Kapcsolat a Természettel: Erősíti a kötődést a Földdel és az elemekkel."
                ]
            }
        ],
        questionsTitle: "Gyakori Kérdések",
        questions: [
            { question: "Mi az a San Pedro szertartás?", answer: "A San Pedro (Huachuma) egy szent növényi medicina, amelyet gyógyításra, látomásokra és mély spirituális kapcsolódásra használnak. Szertartásainkat tapasztalt vezetők irányítják a biztonságos és átalakító élmény biztosítása érdekében." },
            { question: "Kezdőknek is alkalmas az elvonulás?", answer: "Igen, elvonulásaink mindenki számára nyitottak, legyen szó tapasztalt résztvevőről a növényi medicinában vagy első alkalomról. Teljes útmutatást és támogatást nyújtunk a folyamat során." },
            { question: "Mi az a Kinsacocha és miért különleges?", answer: "Kinsacocha egy csendes terület Pisac közelében, szent tavakkal körülvéve. Ideális környezet a Huachuma szertartásokhoz, mély kapcsolatot kínálva a természettel és az andoki spiritualitással." },
            { question: "Mit hozzak az elvonulásra vagy szertartásra?", answer: "Részletes listát biztosítunk, de a legfontosabbak közé tartozik a kényelmes ruházat, túracipő, személyes tárgyak és egy nyitott szív az átalakulásra." },
            { question: "Milyen nyelven zajlik az elvonulás?", answer: "Hernan kecsua és spanyol nyelven beszél. Ha nem beszéled ezeket a nyelveket, francia-spanyol fordító áll rendelkezésre, hogy segítsen az elvonulás során." },
            { question: "Biztonságos az elvonulás?", answer: "A biztonság a legfontosabb számunkra. Elvonulásainkat ellenőrzött, támogató környezetben tartjuk, tapasztalt vezetőkkel, akik végigkísérnek az utazás minden lépésén." },
            { question: "Mi a visszatérítési vagy lemondási szabályzat?", answer: "A foglalók egy meghatározott dátumig visszatéríthetők. Bátorítjuk a korai kommunikációt, ha a terveid változnak, a tisztánlátás és a támogatás biztosítása érdekében." }
        ]
      },
      testimonials: { title: "Szívből Jövő Hangok", items: [{ 
          name: "Zoltan E.", 
          location: "Magyarország", 
          text: `Ez egy igazán hiteles élmény, amely összeköt a föld szellemével és a növényi orvosság gyógyító erejével. Mély kapcsolódás az inkák és az inkák előtti idők szellemi vezetőinek ősi bölcsességével Hernan mesteren keresztül. Nagyon hálás vagyok ezért az utazásért.`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `Olyan szerencsésnek érzem magam, hogy részt vehettem egy egész napos Wachuma szertartáson Don Hernannal. Felutaztunk a hegyekbe, egy helyi falun keresztül, hogy közösséget vállaljunk a természettel, a szellemmel és a kölcsönösség energiájával. Útmutatása őszinte, és az orvossága a legjobb Wachuma, amit valaha ittam. Visszatértünk a házába, hogy ízletes házi andoki levessel és a kertben rakott tűzzel fejezzük be a szertartást a telihold és a csillagok alatt. Erősen ajánlom a Wayna Wasi meglátogatását és a Don Hernannal való munkát. 🫶🏼✨🌵🙏🏼⛰️`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "Kapcsolat",
        form: { name: "Neved", email: "Email Címed", message: "Üzeneted", submit: "Üzenet Küldése" },
        info: "A Szent Völgy szívében, Calca közelében, Cuscóban találhatóunk."
    }
  },
  
  // QUECHUA
  [Language.QU]: {
      ...enTranslations,
      costaRica: {
          ...enTranslations.costaRica,
          title: "Costa Rica Willka Puriy",
          subtitle: "Urquwan Mama Qochawan Tinkun",
          intro: "Huk sapaq kuti, Costa Rica suyu ukhupi. Willka urqukuna mama qochawan tinkunqaku, Wachuma hampiwan.",
          description: [
              "Ñuqaykuwan kay hatun puriyman hamuy. Hernan apamun Wachuma hampita Costa Rica allpaman.",
              "Musquypi rikhurisqa, kay puriyqa urqukunata qochawan tinkuchinapaq.",
              "Wachuma hampiwan, Rapé hampiwan, t'ikakunawan ima ch'uyanchik.",
              "Pakasqa tiyaypi kanqa. 21 runallapaqmi, aswan allin tinkuypaq."
          ],
          details: { location: "Pakasqa Tiyay, Costa Rica", capacity: "21 Runalla", dates: "Febrero 24 - Marzo 2, 2026" },
          cta: "Mink'ata Mañakuy",
          visionTitle: "Hampi Musquy",
          visionText: "Kayqa manan puriyllachu; kayqa apukunaq waqaychayninmi. Hampiqa nirqa: Urquq yachayninta qochawan tinkuchiy.",
          themeValue: "Qocha & Urqu",
          itinerary: [
            { day: "25 Hatun Puquy", title: "Chayamuy & Mama Qochawan Tinkuy", description: "Pacifico Mama Qochawan tinkuspa qallarinchik, allpapi kallpachakuspa manaraq Diamante Wayq'oman purichkaspa." },
            { day: "26-28 Hatun Puquy", title: "Diamante Wayq'opi Ukhunchay", description: "Huk tikray pacha sumaq Diamante Wayq'opi. Kay ñawpaq rakiqa pisi runallapaqmi (9 tiyay), sallqa pachawan aylluwan sumaqta tinkunapaq." },
            { day: "1 Pawqar Waray", title: "El Chirripóman Puriy", description: "El Chirripó willka allpakunaman purinchik, chaypi tiyaq runakunawan tinkunapaq, qallariy puriypaq wakichikunapaq." },
            { day: "2 Pawqar Waray", title: "Ñawpaq Wachuma Raymi", description: "Qallariy puriyta kicharispa. Huk ukhu raymi Maestro Hernanwan, urqukunaq ñawpaqinpi." },
            { day: "3 Pawqar Waray", title: "Samay & Yachay Huñuy", description: "Samana p'unchay, yuyaymanana, hampi yachaykunata sunquman churanapaq willka tiyay thak kayninpi." },
            { day: "4 Pawqar Waray", title: "Iskay Kaq Wachuma Raymi", description: "Llank'ayta ukhunchaspa. Iskay kaq raymi aswan ukhuta nunaman ñawpaq yachaymanpis purinapaq." },
            { day: "5 Pawqar Waray", title: "Samay & Yachay Huñuy", description: "Sapalla kay pacha, aylluwan rimanakuy, puriy yachaykunata llamp'u sunquwan huñuy." },
            { day: "6 Pawqar Waray", title: "Kimsa Kaq Wachuma Raymi", description: "Tukuq qallariy raymi. Muyuta wisq'aspa yupaychaywan, tikrayta sellaspa." },
            { day: "7 Pawqar Waray", title: "Tukuy & Ripuy", description: "Tukuq rimaykuna, allpaman runakunaman yupaychay, wasiman kutiy qallariy." }
          ],
          packages: {
            title: "Kaykuna Kanqa",
            items: [
                "7 P'unchay / 6 Tuta Willka Tiyaypi",
                "3 Hunt'asqa Wachuma Raymikuna",
                "Rapé & T'ika Ch'uyay",
                "Sapa P'unchay Rimanakuy",
                "Lliw Mikhuykuna",
                "San Isidromanta Apay"
            ]
          }
      },
      ui: {
        viewDetails: "K'iskiykuna",
        inquire: "Tapukuy",
        contribution: "Yanapay",
        bookRetreat: "Kayta Waqaychay",
        bookCeremony: "Raymita Waqaychay",
        accommodation: "Puñuna",
        note: "Willakuy",
        eventDetails: "Raymi Willakuykuna",
        location: "Tiyay",
        capacity: "Runakuna",
        theme: "Yuyay",
        email: "Chaski",
        whatsapp: "WhatsApp",
        connectWithUs: "Tinkuy",
        featuredExperience: "Kuraq Experiencia",
        viewFlyer: "Qhawariy Flyer",
        duration: "Unay",
        service: "Raymi"
      },
      flyer: {
        highlights: "Kuraq Yachaykuna",
        scan: "Qhawariy Astawan",
        reserve: "Tiyayniykita Waqaychay",
        limited: "Pisi tiyaykuna kan",
        flexibleDates: "Fechakuna",
        print: "Imprimir / PDF Waqaychay"
      },
      nav: { home: "Qallariy", about: "Ayllu", services: "Raymikuna", gallery: "Rikch'akuna", contact: "Rimay", faq: "Yanapana" },
      services: { 
          title: "Munayniyku", 
          items: [{ 
              title: "2 P'unchay T'aqakuy", 
              description: "Wayna Wasi & Kinsacocha. $173+.", 
              price: "$173+",
              details: { duration: "2 P'unchay", location: "Pisac & Kinsacocha", groupSize: "Max 10" } 
          }, 
          { 
            title: "Ausangate: Hanaq Pacha (3 P'unchay)", 
            description: "Huk atiyniyuq puriy Apuwan. Temazcal, Rapé, Wachuma ima. Fotoqrafiya qispisqa.", 
            price: "$199",
            details: { duration: "3 P'unchay", location: "Ausangate", groupSize: "Huñu" } 
          },
          { 
            title: "Ausangate Willka Puriy (7 P'unchay)", 
            description: "Hatun puriy. 3 Wachuma raymikuna, Temazcal, quchakunaman puriy, ukhu hampi.", 
            price: "Tapukuy",
            details: { duration: "7 P'unchay", location: "Ausangate", groupSize: "Huñu" } 
          },
          { 
              title: "Juchuy Qosqo Puriy", 
              description: "2 P'unchay ñawpaq llaqtapi.", 
              price: "$200+",
              details: { duration: "2 P'unchay", location: "Juchuy Qosqo", groupSize: "Min 2" }
          }, { 
              title: "1 P'unchay Raymi", 
              description: "Huk p'unchay hampiwan.", 
              price: "$250",
              details: { duration: "1 P'unchay", location: "Willka Qhichwa", groupSize: "Min 2" }
          }, { 
              title: "Costa Rica Puriy", 
              description: "Mama Qochawan tinkuy.", 
              price: "Tapukuy",
              details: { duration: "7 P'unchay", location: "Costa Rica", groupSize: "Max 21" }
          }, { 
              title: "Sapaq Hampi", 
              description: "Qamllapaq hampi.", 
              price: "Tapukuy",
              details: { duration: "-", location: "Wayna Wasi", groupSize: "1 Runa" }
          }], 
          ausangateCta: { title: "Ausangate: Hanaq Pachaman Astawan Qaylla", description: "Hamuy kay Wachuma puriyman Ausangatepi. Fotoqrafiya qispisqa.", button: "Qhawariy" } 
      },
      ausangate3Day: {
        title: "Ausangate: Hanaq Pacha Puriy (3 P'unchay)",
        subtitle: "Raymi Apuwan",
        description: "Huk pisi ichaqa atiyniyuq hampi puriy. Willka urquwan hampi yakuwan tinkuy hanaq pachapi.",
        details: {
            dates: "Enero 28 - 30, 2026",
            price: "$199",
            bonus: "Fotoqrafiya qispisqa"
        },
        cta: "Tiyayniykita Waqaychay",
        itinerary: [
          { day: "1 P'unchay", title: "Chayamuy, Ch'uyay & Temazcal", description: "Pacchantaman puriy. Q'uñi yakupi ch'uyakuy. Temazcalpi (Wapsi Wasi) Rapé hampiwan ch'uyakusun, chaymanta Ausangate ñawpaqpi puriypaq mañakuy." },
          { day: "2 P'unchay", title: "Wachuma Raymi", description: "Apuwan tinkuy. P'unchaypi hampi ukyay, urquwan tinkunapaq." },
          { day: "3 P'unchay", title: "Kutimuy", description: "Urqumanta uraykamuy, Pacchanta yakupi samay, Pisacman kutimuy." }
        ]
      },
      benefits: { title: "Wachuma Kallpa", subtitle: "Imarayku purinchik kay hampiwan", items: [{ title: "Sonqo Hampi", description: "Llakikunata qarqoy, hawkayayta tariy." }, { title: "Pachamamawan Tinkuy", description: "Allpawan, wayrawan, yakuyan, ninawan huklla kay." }, { title: "Yuyay K'anchay", description: "Musuq yuyayta tariy, ñanniykita rikuriy." }] },
      footer: { description: "Wachuma hampiwan tinkuy, Hernanwan kuska.", columns: { links: { title: "Tinkiykuna", items: [{label: "Ayllu", href: "/about"}, {label: "Tinkuy", href: "/contact"}] }, reviews: { title: "Google", rating: "4,9/5" }, follow: { title: "Qatipay", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "Tinkuy", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "Tiyay", address: "Wayna Wasi, Pisac, Perú" } }, rights: "Llapallan." },
      about: {
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
      }
  },

  // JAPANESE
  [Language.JA]: {
      ...enTranslations,
      costaRica: {
          ...enTranslations.costaRica,
          title: "コスタリカへの聖なる巡礼",
          subtitle: "山と海の統合",
          intro: "秘密の場所でのコスタリカ初開催となる非常に特別な機会。聖なる山々と海をつなぐ、薬からのビジョンとメッセージに従った特別な肉体的および精神的な巡礼。",
          description: [
              "歴史的で変容をもたらす集まりに参加しませんか。初めて、エルナンは聖なるワチュマの薬をコスタリカの活気ある土地にもたらします。",
              "深遠なビジョンと薬からの直接のメッセージに導かれ、このリトリートはアンデスの山々の知恵と海の浄化力をつなぐ精神的な巡礼です。",
              "聖なるワチュマのセレモニーに加えて、ラペの薬を共有し、花を使った浄化のワークを行い、ガイド付きの薬の瞑想を通じて旅をします。",
              "私たちは自然に抱かれた秘密の人里離れた場所に集まります。この親密な体験は、深い個人的な注意とまとまりのあるエネルギー的な器を確保するために、厳密に21人の参加者（ヘルパーを含む）に制限されています。"
          ],
          details: { location: "コスタリカ、秘密の場所", capacity: "21名限定", dates: "2026年2月24日〜3月2日" },
          cta: "招待をリクエスト",
          visionTitle: "薬からのビジョン",
          visionText: "この集まりは単なるリトリートではありません。それは呼びかけへの応答です。薬は、高いアンデスに保持されている知恵と、海の浄化する流動的なエネルギーをつなぐことについて語りました。精神と肉体の巡礼です。",
          themeValue: "海と山",
          itinerary: [
            { day: "2月25日", title: "到着と海とのつながり", description: "私たちは太平洋の広大なエネルギーとつながり、ディアマンテ渓谷への旅の前に大地に自分自身をグラウンディングさせることから始めます。" },
            { day: "2月26-28日", title: "ディアマンテ渓谷への没入", description: "緑豊かなディアマンテ渓谷での変容の時。この最初の部分は親密で、9名限定となっており、自然やグループとの深いつながりを育みます。" },
            { day: "3月1日", title: "エル・チリポへの旅", description: "先住民族とつながり、イニシエーションの旅の準備をするために、エル・チリポの聖なる土地へ移動します。" },
            { day: "3月2日", title: "最初のワチュマ・セレモニー", description: "イニシエーションの旅の始まり。山々の前でマエストロ・エルナンが導く深遠なセレモニー。" },
            { day: "3月3日", title: "休息と統合", description: "聖域の静けさの中で、休息し、振り返り、薬の教えを統合する日。" },
            { day: "3月4日", title: "2回目のワチュマ・セレモニー", description: "ワークを深める。精神と先祖代々の知恵をさらに探求するための2回目のセレモニー。" },
            { day: "3月5日", title: "休息と統合", description: "孤独、コミュニティでの共有、そして旅の教訓の穏やかな統合のための時間。" },
            { day: "3月6日", title: "3回目のワチュマ・セレモニー", description: "イニシエーションの最後のセレモニー。感謝の気持ちでサークルを閉じ、変容を封印します。" },
            { day: "3月7日", title: "閉会と出発", description: "最後の言葉、土地と部族への感謝、そして家路への旅の始まり。" }
          ],
          packages: {
            title: "参加に含まれるもの",
            items: [
                "聖なる聖域での7日間/6泊",
                "3回の完全なワチュマ・セレモニー",
                "ラペと花の浄化の儀式",
                "毎日の統合サークル",
                "すべてのオーガニック食",
                "サン・イシドロからの移動"
            ]
          }
      },
      ui: {
        viewDetails: "詳細を見る",
        inquire: "お問い合わせ",
        contribution: "寄付",
        bookRetreat: "リトリートを予約",
        bookCeremony: "セレモニーを予約",
        accommodation: "宿泊施設",
        note: "備考",
        eventDetails: "イベント詳細",
        location: "場所",
        capacity: "定員",
        theme: "テーマ",
        email: "メール",
        whatsapp: "WhatsApp",
        connectWithUs: "お問い合わせ",
        featuredExperience: "おすすめ体験",
        viewFlyer: "チラシを見る",
        duration: "期間",
        service: "サービス"
      },
      flyer: {
        highlights: "ハイライト",
        scan: "詳細をスキャン",
        reserve: "場所を予約",
        limited: "定員に限りがあります",
        flexibleDates: "柔軟な日程",
        print: "印刷 / PDF保存"
      },
      nav: { home: "ホーム", about: "私たちについて", services: "セレモニー", gallery: "ギャラリー", contact: "お問い合わせ", faq: "よくある質問" },
      services: { 
          title: "セレモニー", 
          items: [{ 
              title: "2日間リトリート", 
              description: "ワイナ・ワシ＆キンサコチャでの深い没入。基本費用$173（1名）。追加1名につき+$70。宿泊費1名につき+$20。最大10名。", 
              price: "$173+",
              details: { duration: "2日間", location: "ピサック＆キンサコチャ", groupSize: "最大10名" } 
          }, 
          { 
            title: "アウサンガテ：空に近い旅（3日間）", 
            description: "アプとの強力な旅。パッチャンタでのテマズカル、ラペ、ワチュマ・セレモニー。無料のプロ写真撮影付き。", 
            price: "$199",
            details: { duration: "3日間", location: "アウサンガテ", groupSize: "グループ" } 
          },
          { 
            title: "アウサンガテ聖なる旅（7日間）", 
            description: "完全な没入体験。3回のワチュマ・セレモニー、テマズカルの儀式、ラグーンへのハイキング、そして深い癒しのワーク。", 
            price: "お問い合わせ",
            details: { duration: "7日間", location: "アウサンガテ", groupSize: "グループ" } 
          },
          { 
              title: "フチュイ・コスコ没入", 
              description: "「小さなクスコ」遺跡での2日間。地元の家族と一緒に滞在し、伝統的な料理を一緒に作り、深いつながりを体験します。", 
              price: "$200+",
              details: { duration: "2日間", location: "フチュイ・コスコ", groupSize: "最小2名" }
          }, { 
              title: "1日セレモニー", 
              description: "最低2名様からの聖なる旅。聖なる谷の遺跡、ラグーン、山々など、様々な聖地で薬を体験してください。", 
              price: "$250",
              details: { duration: "1日", location: "聖なる谷", groupSize: "最小2名" }
          }, { 
              title: "コスタリカ巡礼", 
              description: "コスタリカの秘密の場所でアンデスと海をつなぐ聖なる旅。21名の参加者に限定。", 
              price: "お問い合わせ",
              details: { duration: "7日間", location: "コスタリカ", groupSize: "最大21名" }
          }, { 
              title: "プライベートヒーリング", 
              description: "あなたの特定の精神的および感情的なニーズに合わせたマンツーマンのセッション。深いブロックの除去。", 
              price: "お問い合わせ",
              details: { duration: "様々", location: "ワイナ・ワシ", groupSize: "1名" }
          }], 
          ausangateCta: { title: "アウサンガテ：空に近い旅", description: "アウサンガテへの特別なワチュマの旅に参加しましょう。無料のプロ写真撮影付き。", button: "旅程を見る" } 
      },
      ausangate3Day: {
        title: "アウサンガテ：空に近い旅（3日間）",
        subtitle: "アプとのセレモニー",
        description: "高地アンデスでの凝縮された強力な植物薬の旅。聖なる山と癒しの水とつながりましょう。",
        details: {
            dates: "2026年1月28日〜30日",
            price: "$199",
            bonus: "無料のプロ写真撮影セッションが含まれています"
        },
        cta: "場所を予約する",
        itinerary: [
          { day: "1日目", title: "到着と浄化", description: "パッチャンタへ移動。天然温泉でリラックスして体を清め、その後アウサンガテに向けてハイキングを行い、意図を設定します。" },
          { day: "2日目", title: "最初のワチュマ・セレモニー", description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる日中のセレモニー。" },
          { day: "3日目", title: "テマズカル（スウェットロッジ）＆ラペ", description: "母なる大地の子宮を表す伝統的な蒸し風呂の儀式。聖なるラペの薬による肉体的および精神的な解毒。" },
          { day: "4日目", title: "2回目のワチュマ・セレモニー", description: "旅を深める。高地の静寂の中で内部のブロックを通して働き、意識を拡大します。" },
          { day: "5日目", title: "テマズカル＆ラペ", description: "受け取ったエネルギーをグラウンディングし、聖なるラペで精神をさらに浄化するための2回目のスウェットロッジ・セレモニー。" },
          { day: "6日目", title: "3回目のワチュマ＆統合", description: "最後の薬のセレモニー。統合、感謝、そして週の間に受けた癒しの封印に焦点を当てます。" },
          { day: "7日目", title: "帰路", description: "山を下り、パッチャンタの温泉に最後に浸かり、ピサックへ戻ります。" }
        ]
      },
      benefits: { title: "ワチュマの力", subtitle: "なぜ聖なるサボテンと共に旅をするのか", items: [{ title: "感情の癒し", description: "過去のトラウマや感情的なブロックを解放します。" }, { title: "自然とのつながり", description: "大地、要素、そしてアンデスの精霊との深いつながりを体験します。" }, { title: "明晰さとビジョン", description: "心を静め、人生の道に対する導きと目的を受け取ります。" }] },
      footer: { description: "サンペドロとして知られるアンデスの聖なる植物薬、ワチュマの変容の力を体験してください。", columns: { links: { title: "リンク", items: [{label: "私たちについて", href: "/about"}, {label: "お問い合わせ", href: "/contact"}] }, reviews: { title: "Google レビュー", rating: "4,9/5" }, follow: { title: "フォローする", facebook: enTranslations.footer.columns.follow.facebook, instagram: enTranslations.footer.columns.follow.instagram }, contact: { title: "連絡先", email: enTranslations.footer.columns.contact.email, phone: enTranslations.footer.columns.contact.phone }, find: { title: "場所", address: "Wayna Wasi, Pisac, Perú" } }, rights: "無断転載を禁じます。" },
      about: {
        title: "エルナンについて",
        subtitle: "聖なるサボテンの守護者",
        description: [
            "<strong>エルナン・コルケ</strong>はケチュアの先住民であり、アンデスの聖なる伝統に深く根ざした<strong>ワチュマ（サンペドロ）セレモニー</strong>の献身的なファシリテーターです。<strong>ピサック</strong>の高地コミュニティである<strong>ビアチャ</strong>の標高5000m以上で生まれたエルナンは、インカ以前の時代にまで遡る薬用治癒の血統を受け継いでいます。",
            "先祖代々の伝統によれば、各世代で一人の子供だけがこの道を継承することができ、それは自発的に選ばれなければなりません。知恵は祖父のカルメンから父のベニーニョへと受け継がれました。7人の兄弟の中で、エルナンは幼い頃に薬を選び、この古代の遺産と<strong>パチャママ（母なる大地）</strong>との深いつながりの唯一の継承者となりました。",
            "<strong>エスピナル出身のカッナの血統。</strong> エルナンは<strong>エスピナル州</strong>の出身で、彼の血統は<strong>カッナ（K'ana）</strong>です。カッナ文化は、典型的な征服ではなく、インカ帝国と独自の平和的な戦略的同盟を結んだインカ以前の社会でした。パチャクテクの治世中に平和的に統合され、彼らは重要な軍事同盟国、つまりチャンカ族を打ち負かすのを助けたエリート<strong>「シンチ」</strong>戦士となりました。この互恵関係により、彼らはコラスヨに土地を与えられ、彼らの古代の首都カナマルカはインカによって再建されました。",
            "<strong>ワチュマの精神。</strong> ワチュマの精神が最初にこの地域の人々をつなぎ、植物が彼らに「私は土地から姿を消すだろう」と告げたため、彼らはそれを心に留めておいたという言い伝えがあります。エルナンはこの記憶と精神を受け継いでいます。",
            "<strong>ピサックとビアチャ。</strong> 私たちは聖なる谷の活気ある町<strong>ピサック</strong>に拠点を置き、セレモニーを開催し、<strong>ワイナ・ワシ・ホテル</strong>で平和な宿泊施設を提供しています。より深く没入するために、数日間のリトリートはピサックのはるか上にある静かなコミュニティ、<strong>ビアチャ</strong>で開催されます。"
        ]
      },
      ausangate: {
        title: "アウサンガテ聖なる旅",
        subtitle: "2026年1月3日〜9日",
        description: "パッチャンタの癒しの水、アプ・アウサンガテの荘厳な存在、そしてワチュマとテマズカルの変容の力を組み合わせた深遠な探検。",
        cta: "場所を予約する",
        itinerary: [
          { day: "1日目", title: "到着と浄化", description: "パッチャンタへ移動。天然温泉でリラックスして体を清め、その後アウサンガテに向けてハイキングを行い、意図を設定します。" },
          { day: "2日目", title: "最初のワチュマ・セレモニー", description: "アプに心を開く。山の精霊と広大なアンデスの空とつながる日中のセレモニー。" },
          { day: "3日目", title: "テマズカル（スウェットロッジ）＆ラペ", description: "母なる大地の子宮を表す伝統的な蒸し風呂の儀式。聖なるラペの薬による肉体的および精神的な解毒。" },
          { day: "4日目", title: "2回目のワチュマ・セレモニー", description: "旅を深める。高地の静寂の中で内部のブロックを通して働き、意識を拡大します。" },
          { day: "5日目", title: "テマズカル＆ラペ", description: "受け取ったエネルギーをグラウンディングし、聖なるラペで精神をさらに浄化するための2回目のスウェットロッジ・セレモニー。" },
          { day: "6日目", title: "3回目のワチュマ＆統合", description: "最後の薬のセレモニー。統合、感謝、そして週の間に受けた癒しの封印に焦点を当てます。" },
          { day: "7日目", title: "帰路", description: "山を下り、パッチャンタの温泉に最後に浸かり、ピサックへ戻ります。" }
        ]
      },
      retreat2Day: {
        title: "2日間リトリート",
        subtitle: "ワイナ・ワシ＆キンサコチャ",
        intro: "ワイナ・ワシの聖域とピサックの力強い山々で開催される、聖なる薬への深い没入。",
        days: [
            { title: "1日目：準備とワイナ・ワシへの到着", content: "ワイナ・ワシに到着すると、参加者はベビダ（聖なるワチュマの飲み物）の儀式的な準備から旅を始めます。この体験は薬との聖なる絆を開始し、内なる探求とつながりの舞台を設定します。エルナンは各参加者を丁寧に導き、意図を明確にし、ワチュマの穏やかでありながら強力な効果に心を開くのを助けます。", accommodation: "アンデスの精霊が常に存在する平和の聖域、ワイナ・ワシで夜を過ごします。" },
            { title: "2日目：ピサック、キンサコチャでのセレモニー", content: "2日目は、ピサックの崇敬される場所キンサコチャへ移動し、息をのむような山の景色の中でワチュマ・セレモニーに参加します。エルナンの経験豊富な指導の下、参加者は内面の風景を探求し、個人的な洞察を求め、ワチュマが提供する教えを受け取ります。セレモニーの終わりに、グループシェアリングサークルが参加者が旅を処理し、振り返ることを可能にし、リトリートの影響を高めます。", accommodation: "変容をもたらす体験を吸収するために、ワイナ・ワシに戻り、静かな夜を過ごします。" }
        ],
        conclusion: "参加者は、ワチュマの体験とパチャママの時代を超越した知恵によって力を与えられ、新たな自己意識と目的を持って出発します。"
      },
      juchuy: {
        title: "フチュイ・コスコ 先祖代々の没入",
        subtitle: "コミュニティ、料理、遺跡",
        intro: "古代遺跡へのハイキングと地元の家族との滞在による深い文化的没入を組み合わせた、フチュイ・コスコ（「小さなクスコ」）への特別な2日間の旅。",
        days: [
            { title: "1日目：ハイキング＆伝統料理", content: "聖なる谷を見下ろすフチュイ・コスコの壮観な遺跡へのハイキングから旅を始めます。午後は、本物の地元の民家に落ち着きます。ここでは、一緒に食事を準備し、伝統的なアンデスのスープを作り、火を囲んで物語を共有します。この共同の準備はそれ自体がセレモニーであり、私たちを地元の生活様式にグラウンディングさせます。", accommodation: "遺跡の隣にある地元の家族との本物の宿泊施設。" },
            { title: "2日目：遺跡でのセレモニー", content: "アプの上に朝が明けます。私たちはフチュイ・コスコ遺跡の強力な存在の中で聖なるワチュマ・セレモニーに従事します。他の場所のような混雑がなく、この王室の邸宅の歴史とエネルギーと深くつながることができます。セレモニーは、先祖との深い反省とつながりを可能にします。", accommodation: "下山し、ピサックへの帰りの送迎。" }
        ],
        conclusion: "考古学的な驚異、生きた文化、そして精神的なワークのユニークな融合。あなたはお腹がいっぱいで、心が温かく、精神がアンデスと一致した状態で出発します。"
      },
      retreat1Day: {
          title: "1日セレモニー",
          subtitle: "聖なる谷の聖地",
          intro: "古代の遺跡、静かなラグーン、力強い山々など、様々な聖地で開催される、薬への集中的かつ深遠な旅。",
          days: [
              { title: "セレモニー", content: "早朝に出発し、聖なる谷（プマママルカ、キンサコチャ、その他のパワースポットなど）の厳選された聖地へ移動します。セレモニーは、薬、自然、そして自分自身との一日がかりの取り組みです。エルナンはガイダンスを提供し、深い癒しとつながりのためのスペースを保持します。体験は午後遅くに終了します。", accommodation: "宿泊施設は含まれていませんが、現地への送迎は手配されます。" }
          ],
          conclusion: "自然界との強力なリセットと再接続により、明晰さと軽い心を持って出発します。",
          details: { durationLabel: "期間", durationValue: "終日（朝から午後まで）", locationLabel: "場所", locationValue: "聖なる谷の聖地", focusLabel: "フォーカス", focusValue: "癒しと自然" }
      },
      preparation: {
        title: "サンペドロ・リトリートの準備",
        subtitle: "アンデス・コミュニティの未来に力を",
        intro: "変容をもたらす3日間のサンペドロ・リトリートへようこそ！この体験を最大限に活用するために、事前に肉体的および精神的に準備することをお勧めします。有意義な旅にするためのガイドはこちらです。",
        diet: {
            title: "準備：軽い食事と意図の設定",
            description: "リトリートに向けて、軽くてきれいな食事は、体験に向けて体と心を開くのに役立ちます。到着の少なくとも3〜5日前に従うべきいくつかの提案があります：",
            items: [
                { label: "ベジタリアンダイエット", text: "肉や動物性製品は消化器系に負担をかける可能性があるため、避けてください。" },
                { label: "砂糖無添加", text: "エネルギーのバランスを保つために、加工糖の摂取を控えてください。" },
                { label: "刺激物を制限する", text: "心と体をきれいにするために、カフェイン、アルコール、その他の刺激物を減らすか排除してください。" },
                { label: "重い食事を避ける", text: "消化プロセスを容易にするために、揚げ物や乳製品をカットしてください。" },
                { label: "水分補給", text: "明晰さと全体的な健康のために、たくさんの水を飲んでください。" },
                { label: "意図", text: "食事以外にも、毎日時間を取ってリトリートの意図を設定してください。ジャーナリング、瞑想、または静かな熟考を通じて、この旅を通じて何を得たいか、または解放したいかに同調してください。" }
            ]
        },
        packing: {
            title: "セレモニーの日",
            description: "リトリートの2日目に行われるセレモニーの日には、つながりを高め、聖なる空間に貢献できるいくつかの私物を持参することをお勧めします。",
            items: [
                { label: "快適な服装", text: "屋外に適した、ゆったりとした快適な服を着てください。" },
                { label: "日よけ帽子", text: "セレモニーは屋外で行われるため、日差しから身を守るために帽子を持参してください。" },
                { label: "供物を持参する", text: "セレモニーのために果物や花を供物として持参するのが通例です。このジェスチャーは感謝と自然とのつながりを象徴しています。" },
                { label: "水筒", text: "一日中水分補給をすることは不可欠です。" },
                { label: "ノートとペン", text: "思考、洞察、または感情を捉えるために、セレモニーの後にジャーナリングをするインスピレーションを感じるかもしれません。" }
            ]
        },
        suggestions: {
            title: "リトリートのための追加の提案",
            description: "旅を充実させるために、以下を検討してください：",
            items: [
                { label: "静かな時間を尊重する", text: "体験を振り返り、処理するために沈黙の期間を使用してください。" },
                { label: "呼吸法と瞑想", text: "穏やかな呼吸法や瞑想は、グラウンディングし、中心を保つのに役立ちます。" },
                { label: "デジタルデトックス", text: "電話やその他の電子機器から切断し、完全に存在することを許可してください。" },
                { label: "自然とつながる", text: "可能であれば、毎日自然の中で過ごし、それが内なる旅をサポートするようにしてください。" }
            ]
        },
        closing: "マインドフルに準備し、オープンでいることで、サンペドロの薬が発見の深遠な道へとあなたを導くためのスペースを作ることができます。この特別な体験をあなたと共有できることを楽しみにしています。",
        risks: {
            title: "重要なお知らせ：リスクと責任の理解",
            intro: "このリトリートは安全で変容をもたらす体験を提供するように設計されていますが、サンペドロ・セレモニーへの参加には肉体的および心理的なリスクが伴うことを認識することが重要です。情報に基づいた参加を確実にするために、以下の考慮事項を慎重に確認してください：",
            sections: [
                { title: "健康および医療開示", items: [{ label: "病状", text: "参加者は、心臓の問題、精神的健康状態、または発作の病歴を含む病状をファシリテーターに通知する必要があります。一部の既往症は、サンペドロ体験に関連するリスクを高める可能性があります。" }, { label: "薬", text: "抗うつ薬、抗精神病薬、および一部の市販薬を含む特定の薬は、サンペドロと悪影響を及ぼす可能性があります。リトリートのかなり前にファシリテーターに薬を開示してください。" }, { label: "身体的感受性", text: "サンペドロは、吐き気、嘔吐、心拍数の増加など、一時的な身体的影響を引き起こす可能性があります。参加者はこれらの影響に対して肉体的および精神的に準備する必要があります。" }] },
                { title: "心理的リスクと感情的責任", items: [{ label: "強烈な体験", text: "サンペドロは深い感情や過去のトラウマを引き起こす可能性があり、処理するのが難しい場合があります。トラウマの病歴がある場合、参加者は事前に個人的な振り返りを行うか、専門家の指導を求めることをお勧めします。" }, { label: "統合サポート", text: "リトリート後、参加者は体験を統合するための追加のサポートから恩恵を受ける場合があります。生じた洞察や感情を処理するための時間、サポート、リソースを計画することをお勧めします。" }] },
                { title: "個人の責任", items: [{ label: "インフォームドコンセント", text: "このリトリートに参加することにより、あなたは自発的にこの体験に従事していることを認めます。あなたが経験する洞察、課題、または個人的な変容は、あなた自身の責任です。" }, { label: "安全上の注意", text: "食事制限、セレモニー中の推奨される行動、身体活動の制限など、ファシリテーターが提供するすべての安全ガイドラインに従ってください。" }] }
            ]
        }
      },
      faq: {
        title: "ワチュマ・リトリートガイド",
        subtitle: "体験について知っておくべきことすべて",
        articles: [
            {
                title: "ワチュマ・リトリートで期待すること",
                content: [
                    "ワチュマ・リトリートを計画することは、魂の巡礼の準備のように感じられるかもしれません。植物薬が初めての方でも、経験豊富な探求者でも、すべてのワチュマ・セレモニーはユニークで変容をもたらす体験を提供します。アンデスの精霊とパチャママ自身が常に存在するペルーの聖なる谷でのリトリートに乗り出す際に期待できることは次のとおりです。",
                    "<strong>深い癒しのための聖なる環境</strong><br>クスコ近くの聖なる谷は、あなたの精神的な旅のための完璧な背景です。アンデスの山々に囲まれたリトリートスペースは、ワチュマの力を増幅する素晴らしい風景に囲まれています。到着した瞬間から、地球と宇宙の間の深いつながりを感じるでしょう。このつながりは、アンデスの宇宙論とワチュマの伝統の中心です。",
                    "<strong>典型的なワチュマ・セレモニーの日</strong><br>リトリートは、ワチュマへの穏やかな紹介から始まります。エルナン・コルケの指導の下、セレモニーは安全で協力的なスペースで展開され、内なる声に耳を傾けることが奨励されます。ワチュマは心を開き、明晰さと安らぎを与えながら、一日を通して旅をします。リトリートには、自然の中での静かな時間、グループシェアリング、内省の時間が含まれることが多く、体験を全体的かつ癒しのあるものにします。",
                    "<strong>ワチュマ体験の統合</strong><br>ワチュマから得られる洞察は深遠であり、これらの教訓を日常生活に統合するために時間を取ることが重要です。エルナンと彼のチームは、グループディスカッションやマンツーマンのサポートを通じて、あなたが体験を処理するのを助けるためにそこにいます。多くの参加者は、新たな目的意識と、自分自身や周りの世界との深いつながりを持ってリトリートを後にします。"
                ]
            },
            {
                title: "ワチュマの治癒力を発見する",
                content: [
                    "<strong>サンペドロサボテンとは？</strong><br>サンペドロサボテン（ワチュマとしても知られる）は、主にペルーのアンデス高地に自生する古代の薬用植物です。",
                    "<strong>起源と歴史</strong><br>サンペドロは、アンデスの先住民、特にケチュア族とアイマラ族によって何千年もの間使用されてきました。",
                    "<strong>メスカリンの力</strong><br>主要な活性化合物の一つはメスカリンであり、幻想的で内省的な体験に関与しています。",
                    "<strong>精神的および治療的利点</strong><br>サンペドロはその精神的および治癒的特性で有名です。その効果は一般的に、アヤワスカなどの他の植物薬と比較して、より穏やかで段階的です。"
                ]
            }
        ],
        questionsTitle: "よくある質問",
        questions: [
            { question: "サンペドロ・セレモニーとは何ですか？", answer: "サンペドロ（ワチュマ）は、癒し、ビジョン、そして深い精神的なつながりのために使用される聖なる植物薬です。" },
            { question: "リトリートは初心者にも適していますか？", answer: "はい、私たちのリトリートは、植物薬の経験があるかどうかにかかわらず、すべての人に開かれています。" },
            { question: "キンサコチャとは何ですか、なぜ特別な場所なのですか？", answer: "ピサックの近くにあるキンサコチャは、聖なる湖に囲まれた静かな地域です。セレモニーに理想的な環境です。" },
            { question: "リトリートには何を持っていくべきですか？", answer: "詳細なリストが提供されますが、必需品には快適な服、ハイキングシューズ、そしてオープンな心が含まれます。" },
            { question: "リトリート中に話される言語は何ですか？", answer: "エルナンはケチュア語とスペイン語を話します。通訳が利用可能です。" },
            { question: "リトリートは安全ですか？", answer: "安全は私たちの最優先事項です。" },
            { question: "返金ポリシーは何ですか？", answer: "デポジットは特定の日付まで返金可能です。" }
        ]
      },
      testimonials: { title: "心からの声", items: [{ 
          name: "Zoltan E.", 
          location: "ハンガリー", 
          text: `大地の精霊と植物薬の治癒力とつながる、本当に本物の体験です。マエストロ・エルナンを通して、インカおよびインカ以前のスピリチュアルガイドの古代の知恵との深いつながりがありました。この旅にとても感謝しています。`, 
          image: IMAGES.zoltan 
      }, {
        name: "Stephanie K.",
        location: "Google Review",
        text: `ドン・エルナンとの終日ワチュマ・セレモニーに参加できたことはとても幸運でした。私たちは山へ、地元の村を通り、自然、精神、そして互恵性のエネルギーと交信するために旅をしました。彼の指導は誠実で、彼の薬は私がこれまでに飲んだ中で最高のワチュマです。私たちは彼の家に戻り、美味しい自家製のアンデススープと、満月と星空の下での庭の焚き火でセレモニーを終えました。ワイナ・ワシを訪れ、ドン・エルナンと一緒にワークすることを強くお勧めします。`,
        image: IMAGES.kittel
    }] },
    contact: {
        title: "お問い合わせ",
        form: { name: "お名前", email: "メールアドレス", message: "メッセージ", submit: "メッセージを送信" },
        info: "私たちはクスコのカルカ近く、聖なる谷の中心に位置しています。"
    }
  },
};