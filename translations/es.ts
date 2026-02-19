import { TranslationData } from '../types';
import { IMAGES } from '../assets';

export const esTranslations: TranslationData = {
    ui: {
        viewDetails: "Ver Detalles",
        inquire: "Consultar",
        contribution: "Contribución",
        bookRetreat: "Reservar Retiro",
        bookCeremony: "Reservar Ceremonia",
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
        service: "Servicio",
        dailyJourney: "Jornada Diaria"
    },
    flyer: {
      highlights: "Puntos Clave",
      scan: "Escanear para Detalles",
      reserve: "Reserva tu Lugar",
      limited: "Plazas limitadas",
      flexibleDates: "Fechas Flexibles",
      print: "Imprimir / Guardar PDF",
      oneDayPossible: "Posible unirse por un día"
    },
    nav: { home: "Inicio", about: "La Familia", services: "Ceremonies", gallery: "Galería", contact: "Contacto", faq: "Ayuda / FAQ" },
    hero: {
      title: "Medicina Sagrada de los Andes",
      subtitle: "Reconecta con la Pachamama a través de ceremonias tradicionales de Wachuma en el Valle Sagrado.",
      cta: "Reservar una Ceremonia",
      retreatTeaser: { label: "Inmersión Sagrada", title: "Retiro de 2 Días", location: "Pisac y Kinsacocha" },
      ausangateTeaser: { label: "Más Cerca del Cielo", title: "Ausangate 3 Días", date: "31 Mar - 2 Abr, 2026" },
      costaRicaTeaser: { label: "Evento Especial", title: "Peregrinaje a Costa Rica", date: "21 Feb - 4 Mar, 2026" }
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
            "<strong>Hernan Ccolque</strong> es nativo Quechua y un devoto facilitador de <strong>ceremonias de Wachuma (San Pedro)</strong>, profundamente arraigado en las tradiciones sagradas de los Andes. Nacido por encima de los 5000m en <strong>Viacha</strong>, una comunidad de altura de <strong>Pisac</strong>, Hernan lleva un linaje de sanación medicinal que se remonta a tiempos pre-incas.",
            "Según la tradición ancestral, solo un hijo por generación puede heredar este camino, y debe elegirlo voluntariamente. La sabiduría pasó de su abuelo Carmen a su padre Beninho. Entre siete hermanos, Hernan eligió la medicina a una edad muy temprana, convirtiéndose en el único portador de este antiguo legado y su profunda conexión con la <strong>Pachamama (Madre Tierra)</strong>.",
            "<strong>El Linaje Ccana de Espinar.</strong> Hernan proviene de la provincia de <strong>Espinar</strong> y su linaje is <strong>Ccana (K'ana)</strong>. La cultura K'ana fue una sociedad pre-inca que formó una alianza estratégica pacífica con el Imperio Inca en lugar de una conquista típica. Al integrarse pacíficamente durante el reinado de Pachacutec, se convirtieron en aliados militares vitales—guerreros de élite <strong>'Sinchis'</strong> guerreros que ayudaron a derrotar a los Chancas. Debido a esta reciprocidad, se les concedieron tierras en el Collasuyo y su antigua capital, Kanamarca, fue reconstruida por los Incas.",
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
            description: "Una poderosa jornada con el Apu. Temazcal, Rapé y ceremonia de Wachuma en Pacchanta.", 
            price: "700 Soles",
            details: { duration: "3 Días", location: "Ausangate", groupSize: "Grupo" }
        },
        { 
            title: "Viaje Sagrado Ausangate (7 Días)", 
            description: "La inmersión completa. 3 ceremonias de Wachuma, rituales de Temazcal, caminata a las lagunas y trabajo de sanación profunda.", 
            price: "Consultar",
            details: { duration: "7 Días", location: "Ausangate", groupSize: "Grupo" }
        },
        { 
            title: "Costa Rica: Retiro de 3 Días", 
            description: "Ceremonia de Apertura y conexión con las Selvas Primarias del Valle del Diamante.", 
            price: "$249 / Día",
            details: { duration: "3 Días", location: "Valle del Diamante", groupSize: "Grupo Íntimo" }
        },
        { 
            title: "Costa Rica: Peregrinaje Sagrado", 
            description: "Inmersión profunda en El Chirripó con visitas tribales, caminatas a cascadas y celebración del eclipse lunar.", 
            price: "$249 / Día",
            details: { duration: "8 Días", location: "El Chirripó", groupSize: "Grupo Pequeño" }
        },
        { 
            title: "Inmersión Juchuy Qosqo", 
            description: "2 Días en las ruinas de 'Cusco Pequeño'. Quédate con una familia local, cocina comida tradicional y experiencia una conexión profunda.", 
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
            title: "Sanación Privada", 
            description: "Sesiones individuales adaptadas a tus necesidades espirituales y emocionales específicas. Eliminación de bloqueos profundos.", 
            price: "Consultar",
            details: { duration: "Varía", location: "Wayna Wasi", groupSize: "1 Persona" }
        }
      ],
      ausangateCta: { 
          title: "Costa Rica: Peregrinaje Sagrado", 
          description: "Inmersión profunda en El Chirripó con visitas tribales, caminatas a cascadas y celebración del eclipse lunar.", 
          button: "Ver Peregrinaje" 
      }
    },
    ausangate: {
        title: "Viaje Sagrado al Ausangate",
        subtitle: "Fecha por anunciar",
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
            dates: "31 Mar - 2 Abr, 2026",
            price: "700 Soles",
            bonus: "" // Text removed
        },
        cta: "Reservar Lugar",
        itinerary: [
          { day: "Día 1", title: "Llegada, Purificación y Temazcal", description: "Viaje a Pacchanta. Relajación en las aguas termales naturales. Participaremos en una ceremonia de Temazcal con medicina sagrada de Rapé para una purificación profunda, seguida de una caminata hacia el Ausangate para establecer intenciones." },
          { day: "Día 2", title: "Ceremonia de Wachuma", description: "Abriendo el corazón al Apu. Una profunda ceremonia diurna conectando con el espíritu de la montaña y el vasto cielo andino." },
          { day: "Día 3", title: "Viaje de Regreso", description: "Cerrando el círculo. Caminata de descenso, último baño en las aguas termales de Pacchanta y transporte de regreso a Pisac." }
        ]
    },
    costaRica: {
          title: "Costa Rica: Retiro de 3 Días",
          subtitle: "Apertura de Montañas y Océano",
          intro: "Únete a Hernan Ccolque, Wachumero nativo Quechua del linaje K'ana, para la apertura de nuestro viaje a Costa Rica. Esta inmersión de 3 días se centra en establecer nuestra conexión con el espíritu de Wachuma en medio de la energía vibrante de la costa del Pacífico y las selvas primarias. Es posible unirse solo por un día.",
          description: [
            "Experimenta el primer paso de nuestra histórica reunión en Costa Rica mientras abrimos el contenedor sagrado junto al Océano Pacífico.",
            "Guiados por la sabiduría ancestral de Hernan, nos centramos en profundas ceremonias de apertura del corazón e inmersión en los exuberantes santuarios botánicos del Valle del Diamante.",
            "Este retiro sirve como base para el peregrinaje, ofreciendo purificación y arraigo en un santuario tropical apartado."
          ],
          details: { location: "Valle del Diamante, Costa Rica", capacity: "Grupo Íntimo", dates: "21 Feb - 23 Feb, 2026" },
          cta: "Solicitar Invitación",
          oneDayPrice: "$249 USD / Día",
          visionTitle: "El Llamado del Océano",
          visionText: "La medicina habló de conectar la sabiduría andina con la energía fluida y purificadora del océano. Este retiro es el primer paso de ese puente espiritual.",
          themeValue: "Océano y Selva",
          itinerary: [
            { day: "21 de Feb", title: "Ceremonia de Apertura", description: "Reunión inicial y ceremonia sagrada de apertura junto al Océano Pacífico." },
            { day: "22 de Feb", title: "Conexión con la Selva", description: "Inmersión de día completo con Wachuma dentro de la belleza botánica del Valle del Diamante." },
            { day: "23 de Feb", title: "Integración y Flujo", description: "Rituales de limpieza floral e integración antes de concluir el retiro inicial." }
          ],
          packages: {
            title: "La Participación Incluye",
            items: [
                "3 Días / 2 Noches en Santuario Sagrado",
                "Ceremonias de Wachuma centradas en el Corazón",
                "Comidas Tropicales Orgánicas",
                "Limpieza Floral y Medicina de Rapé",
                "Transporte desde San Isidro"
            ]
        }
    },
    costaRicaPilgrimage: {
        title: "Costa Rica: Peregrinaje Sagrado",
        subtitle: "El Viaje al Chirripó",
        intro: "Don Hernan es un Wachumero nativo Quechua del linaje pre-Inca K’ana y guardián de tradiciones ancestrales. Este viaje conecta la sabiduría de altura de los Andes Peruanos con nuestra amada Montaña Chirripó en ceremonias sagradas de Wachuma centradas en el corazón. Experimenta una sanación profunda y un despertar espiritual con la sabiduría antigua de las tierras. Caminatas medicinales privadas disponibles para grupos pequeños cada día con dos fechas clave muy especiales para unirse.",
        description: [
            "Visitas a sitios sagrados uniendo la sabiduría de la tierra con oraciones y honrando a los antiguos ancestros.",
            "Caminatas medicinales privadas disponibles para grupos pequeños cada día con dos fechas clave muy especiales para unirse.",
            "Nos reunimos en un santuario apartado en El Chirripó para garantizar una atención personal profunda y un contenedor energético cohesivo."
        ],
        details: { location: "El Chirripó, Costa Rica", capacity: "Grupo Pequeño", dates: "25 Feb - 4 Mar, 2026" },
        cta: "Solicitar Invitación",
        visionTitle: "Sabiduría de la Montaña",
        visionText: "Los espíritus de altura de los Andes se encuentran con el sagrado Chirripó. Un peregrinaje del espíritu, honrando a los guardianes indígenas de la tierra.",
        themeValue: "Ancestros y Montañas",
        itinerary: [
            { day: "25 de Feb", title: "Apertura del Chirripó", description: "Comenzando nuestra inmersión profunda en las montañas sagradas de El Chirripó." },
            { day: "1 de Mar", title: "Caminata Sagrada a la Cascada", description: "Caminata Sagrada a la cascada en un santuario natural privado que bordea la reserva nacional más grande de Costa Rica. San Gerardo de Rivas." },
            { day: "3 de Mar", title: "Celebración del Eclipse Lunar", description: "Celebración del Eclipse Lunar y Caminata Sagrada al mirador en una tierra privada protegida de importancia espiritual guiada por un guardián local. Sendero Gigante, San José de Rivas." },
            { day: "4 de Mar", title: "Círculo de Cierre", description: "Integración final y partida del santuario." }
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
          details: { durationLabel: "Duración", durationValue: "Día Completo", locationLabel: "Ubicación", locationValue: "Sitios del Valle Sagrado", focusLabel: "Enfoque", focusValue: "Sanación y Naturaleza" }
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
                    "<strong>Un día típico de ceremonia de Wachuma</strong><br>Tu retiro comenzará con una suave introducción a Wachuma. Bajo la guía de Hernan Ccolque, las ceremonias se desarrollan en un espacio seguro y de apoyo donde se te animará a escuchar tu voz interior. Wachuma ayuda a abrir tu corazón, brindando claridad y una sensación de paz mientras viajas a través del día. El retiro a menudo incluye tiempo tranquilo en la naturaleza, intercambio grupal y tiempo para la reflexión, haciendo que la experiencia sea holística y sanadora.",
                    "<strong>Integrando tu experiencia Wachuma</strong><br>Las ideas obtenidas de Wachuma pueden ser profundas, y es importante tomarse el tiempo para integrar estas lecciones en tu vida diaria. Hernan y su equipo están allí para ayudarte a procesar tus experiencias, ya sea a través de discusiones grupales o apoyo individual. Muchos participantes dejan el retiro con un renovado sentido de propósito y una profunda conexión consigo mismos y con el mundo que los rodea."
                ]
            },
            {
                title: "Descubre el poder curativo de Wachuma",
                content: [
                    "<strong>¿Qué es el cactus San Pedro?</strong><br>El cactus San Pedro, también conocido como Wachuma, es una antigua planta medicinal nativa de las tierras altas de los Andes, principalmente en Perú. Este cactus verde columnar alto, científicamente llamado <em>Echinopsis pachanoi</em>, thrives at high altitudes, often between 2,000 and 3,000 metros. Se reconoce fácilmente por sus costillas pronunciadas, espinas cortas y grandes flores blancas que florecen por la noche.",
                    "<strong>Orígenes e Historia</strong><br>San Pedro has been used for thousands of years by indigenous Andean peoples, especially the Quechua and Aymara communities. Deeply rooted in shamanic tradition, it serves as a bridge between the physical and spiritual worlds. Its name, San Pedro, refers to Saint Peter, the guardian of the gates of heaven, symbolizing access to spiritual dimensions.",
                    "<strong>The Power of la Mescalina: Conectando con la Armonía Universal</strong><br>One of the key active compounds in the San Pedro cactus is mescaline, a naturally occurring psychoactive alkaloid. Mescaline is responsible for the profound visionary and introspective experiences associated with Wachuma. A diferencia de las sustancias sintéticas, la mescalina de San Pedro guía suavemente a las personas a un estado alterado de conciencia, fomentando una sensación de unidad y armonía con el mundo que les rodea.",
                    "Las ceremonias de Wachuma a menudo llevan a los participantes a sentirse profundamente conectados con la Pachamama (Madre Tierra), experimentando el pulso de la naturaleza y el ritmo de la vida misma. Esta conexión ayuda a disolver los límites entre el yo y el universo, permitiendo profundas ideas y claridad espiritual. Muchos de los que se embarcan en este viaje lo describen como una experiencia de apertura del corazón, donde el amor y la compasión fluyen naturalmente.",
                    "<strong>Beneficios Espirituales y Terapéuticos</strong><br>San Pedro es famoso por sus propiedades espirituales y curativas. Sus efectos son generalmente más suaves y graduales en comparación con otras medicinas vegetales como la Ayahuasca. Esto lo hace accesible para aquellos que buscan sanación emocional y claridad interior sin la intensidad de despertares más abruptos.<br><br><strong>Beneficios Espirituales:</strong><br>• Despertar Espiritual: Facilita la reconexión con el verdadero yo y el mundo natural.<br>• Apertura del Corazón: Promueve la compasión, el perdón y la profunda liberación emocional.<br>• Claridad Mental: Ayuda a obtener perspectiva sobre los desafíos de la vida y fomenta la aceptación.<br><br><strong>Beneficios Terapéuticos:</strong><br>• Liberación Emocional: Ayuda a procesar traumas pasados y emociones no resueltas.<br>• Calma y Serenidad: Reduce la ansiedad y cultiva la paz interior.<br>• Conexión con la Naturaleza: Fortalece el vínculo con la Tierra y los elementos."
                ]
            }
        ],
        questionsTitle: "Preguntas Frecuentes",
        questions: [
            { question: "¿Qué es una ceremonia de San Pedro?", answer: "San Pedro (Huachuma) es una medicina sagrada utilizada para sanar y expandir la conciencia. Te guiamos de forma segura a través de la experiencia." },
            { question: "¿Es adecuado para principiantes?", answer: "Sí, es adecuado para todos. Brindamos orientación y apoyo durante todo el viaje." },
            { question: "¿Qué es Kinsacocha?", answer: "Kinsacocha es una hermosa laguna en las alturas de Pisac. Tener una ceremonia allí es una forma profunda de conectar con los Apus (mountains)." },
            { question: "¿Qué debo llevar?", answer: "Ropa abrigada, zapatos cómodos para caminar, un corazón abierto y necesidades personales. Proporcionaremos una lista de empaque detallada." },
            { question: "¿Qué idiomas se hablan?", answer: "Hernan habla Quechua y Español. Tenemos asistentes que hablan Inglés y Francés para ayudar con la traducción." },
            { question: "¿Es seguro?", answer: "Sí, priorizamos la seguridad. Nuestros facilitadores tienen experiencia y no te dejarán desatendido." },
            { question: "¿Hay política de reembolso?", answer: "Sí, por favor infórmanos con anticipación si no puedes asistir. Las políticas varían según el momento de la cancelación." }
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
