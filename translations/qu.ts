import { TranslationData } from '../types';
import { IMAGES } from '../assets';
import { enTranslations } from './en';

export const quTranslations: TranslationData = {
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
        service: "Hampi",
        dailyJourney: "Sapa P'unchay Puriy"
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
        ausangateTeaser: { label: "Hanaq Pachaman Astawan Qaylla", title: "Ausangate 3 P'unchay", date: "Mar 31 - Abr 2, 2026" },
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
              title: "Costa Rica: 3-P'unchay T'aqakuy", 
              description: "Qallariy Raymi, Diamante Qhichwa sach'akunawan.", 
              price: "$249 / P'unchay",
              details: { duration: "3 P'unchay", location: "Diamante Qhichwa", groupSize: "Huñu" }
          },
          { 
              title: "Costa Rica: Willka Puriy", 
              description: "Chirripó urqupi ukhu puriy, phaqchakunawan, killa wañuywan.", 
              price: "$249 / P'unchay",
              details: { duration: "8 P'unchay", location: "Chirripó", groupSize: "Pisi Huñu" }
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
              title: "Sapalla Hampikuy", 
              description: "Sapaq hampi qampaqlla. Nanayta qarqoy.", 
              price: "Tapukuy",
              details: { duration: "Sapaq", location: "Wayna Wasi", groupSize: "1 Runa" }
          }
        ],
        ausangateCta: { title: "Costa Rica: Willka Puriy", description: "Chirripó urqupi ukhu puriy, phaqchakunawan, killa wañuywan.", button: "Puriyta Qhaway" }
      },
      costaRica: {
          title: "Costa Rica: 3-P'unchay T'aqakuy",
          subtitle: "Urquwan Mama Qochawan Kichay",
          intro: "Hernan Ccolquewan, K'ana ayllumanta Wachumero, Costa Rica puriyninchikta kicharin. Kay 3 p'unchayqa Wachuma nunawan tinkunapaq, mama qochawan, sach'a-sach'awan ima.",
          description: [
            "Kayqa ñawpaq puriy, Costa Rica tinkuyninchikta kichanapaq, Pacifico mama qochaq patanpi.",
            "Hernanpa yachayninwan, sunquta kicharisun, Diamante Qhichwaq t'ikankunawan.",
            "Kay t'aqakuyqa tiksim, ch'uyay, takyachiy ima."
          ],
          details: { location: "Diamante Qhichwa, Costa Rica", capacity: "Huñu", dates: "Feb 21 - Feb 23, 2026" },
          cta: "Mink'ayta Mañakuy",
          oneDayPrice: "$249 / P'unchay",
          visionTitle: "Mama Qochaq Waqyakuynin",
          visionText: "Hampiqa nirqa: Andespa yachaynin mama qochawan tinkunan. Kay t'aqakuyqa chay p'uñtem.",
          themeValue: "Mama Qochawan Sach'a",
          itinerary: [
            { day: "21 Feb", title: "Qallariy Raymi", description: "Huñunakuy, Pacifico Mama Qochawan tinkuspa raymi." },
            { day: "22 Feb", title: "Sach'awan Tinkuy", description: "Tukuy p'unchay Wachumawan, Diamante Qhichwapi." },
            { day: "23 Feb", title: "Huñuy & Puriy", description: "T'ika ch'uyay, ñawpaq t'aqakuyta tukunapaq." }
          ],
          packages: {
            title: "Kaykunam Kanqa",
            items: [
                "3 P'unchay / 2 Tuta Willka Tiyaypi",
                "Sunqumanta Pacha Wachuma Raymikuna",
                "Misk'i Mikhuykuna",
                "T'ika Ch'uyay & Rapé Hampi",
                "San Isidromanta Apaykachana"
            ]
        }
      },
      costaRicaPilgrimage: {
        title: "Costa Rica: Willka Puriy",
        subtitle: "Chirripó Ñan",
        intro: "Don Hernanqa Wachumero, ñawpaq K'ana yawarniyuq. Kay puriyqa Perou Andeskunata Chirripó Urquwan tinkuchin, sunqumanta pacha Wachuma raymikunawan. Hatun hampiyta, yuyay kicharichiyta tariy.",
        description: [
            "Willka tiyaykunaman puriy, hallp'aq yachayninta huñuspa, ñawpaq runakunata yupaychaspa.",
            "Sapa p'unchay hampi puriykuna kanqa, iskay hatun p'unchaykunawan.",
            "Chirripó ukhupi huñunakusun, allin qhawayta chaskianykipaq."
        ],
        details: { location: "Chirripó, Costa Rica", capacity: "Pisi Huñu", dates: "Feb 25 - Mar 4, 2026" },
        cta: "Mink'ayta Mañakuy",
        visionTitle: "Urquq Yachaynin",
        visionText: "Andespa nunankuna Chirripó Urquwan tinkun. Ñawpaq ayllukunata yupaychana puriy.",
        themeValue: "Ñawpaq Runakuna & Urqukuna",
        itinerary: [
            { day: "25 Feb", title: "Chirripó Qallariy", description: "El Chirripó willka urqukunapi ukhu puriyta qallarichkanchik." },
            { day: "1 Mar", title: "Phaqchaman Willka Puriy", description: "Huk pakasqa phaqchaman puriy, Costa Ricaq hatun tiyayninta qhawaspa. San Gerardo de Rivas." },
            { day: "3 Mar", title: "Killa Wañuy Raymi", description: "Killa Wañuy Raymi, tiyay pusaqwan. Sendero Gigante, San José de Rivas." },
            { day: "4 Mar", title: "Tukuy Raymi", description: "Tukuy yachasqata huñuspa, santuariomanta ripuy." }
        ]
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
            "<strong>Hernan Ccolque</strong> runa simi rimaq, <strong>Wachuma hampiq</strong>, ñawpaq yachaykunata apaq. <strong>Viacha</strong> llaqtapi paqarisqa, <strong>Pisac</strong> patapi, payqa ñawpaq hampiq yawarniyuq.",
            "Ñawpaq yachaykuna willan, sapa miraymanta huklla kay ñanta apanman. Abuelon Carmenmanta taytan Beninhoman yachay chayarqa. Qanchis wawqikunamanta, Hernanllataq kay ñanta akllarqa, <strong>Pachamamawan</strong> tinkuspa.",
            "<strong>Espinar llaqtamanta Ccana yawar.</strong> Hernanpa yawarninqa <strong>Ccana (K'ana)</strong>. K'ana runakunaqa Inka Pachacutecwan thakpi tinkurqanku, manan maqanakuspachu. Chayrayku <strong>'Sinchis'</strong> sutichasqa karqanku, allin awqaq runakuna.",
            "<strong>Wachuma Nunam.</strong> Wachumaqa ñawpaq runakunata tinkuchirqa, chayta sunqunkupi waqaycharqanku. Kay hampiqa yachachikunmi, kunan p'unchaykunaqa Hernan kay yachayta apachkan.",
            "<strong>Pisacwan Viachawan.</strong> <strong>Pisac</strong> llaqtapi tiyayku, <strong>Wayna Wasi Hotelpi</strong> samaykuna kan. Aswan kuraq hampiqa <strong>Viacha</strong> ayllupi ruwakun, urqu patapi."
        ]
      },
      ausangate: {
        title: "Ausangate Willka Puriy",
        subtitle: "Willakunqa",
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
      ausangate3Day: {
        title: "Ausangate: Hanaq Pachaman Astawan Qaylla (3 P'unchay)",
        subtitle: "Apuwan Raymi",
        description: "Huk pisi p'unchaykunallapi hatun hampi puriy. Willka urquwan, hampi yakukunawan tinkuy.",
        details: {
            dates: "Mar 31 - Abr 2, 2026",
            price: "700 Soles",
            bonus: "" // Text removed
        },
        cta: "Tiyayniykita Waqaychay",
        itinerary: [
          { day: "1 P'unchay", title: "Chayamuy, Ch'uyay & Temazcal", description: "Pacchantaman puriy. Q'uñi yakupi ch'uyakuy. Temazcalpi (Wapsi Wasi) Rapé hampiwan ch'uyakusun, chaymanta Ausangate ñawpaqpi mañakusun." },
          { day: "2 P'unchay", title: "Wachuma Raymi", description: "Apuwan tinkuy. P'unchaypi hampi ukyay, urquwan tinkunapaq." },
          { day: "3 P'unchay", title: "Kutimuy", description: "Muyuta wisq'ay. Urqumanta uraykamuy, Pacchanta yakupi samay, Pisacman kutimuy." }
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
