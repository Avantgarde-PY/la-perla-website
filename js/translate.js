// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie value by name
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Translations object (contains translations for DE, ES, EN)
var translations = {
    de: {
        "navbar.brand": "La Perla",
        "navbar.home": "Home",
        "navbar.about": "Über Uns",
        "navbar.gallery": "Galerie",
        "navbar.prices": "Preise",
        "navbar.team": "Team",
        "navbar.contact": "Kontakt",
        "navbar.language": "Sprache",
        "hero.title": "Ihre Wohnung im Herzen von Villarrica",
        "services.title": "Was Wir Bieten",
        "services.subtitle":
            "Wir bauen nicht nur Häuser, wir schaffen Lebenswerke.",
        "services.pool.title": "Pool",
        "services.pool.description":
            "Genießen Sie den Luxus eines atemberaubenden Pools auf dem Dach mit Panoramablick. Ein exklusiver Ort zum Entspannen und Erholen – ideal für sonnige Tage und gesellige Abende.",
        "services.garage.title": "Garage",
        "services.garage.description":
            "Unsere Garagen bieten sicheren Platz für Ihr Fahrzeug, jedoch in begrenzter Zahl. Zusätzliche Parkmöglichkeiten stehen Ihnen auf dem Gelände zur Verfügung, um Ihren Komfort zu gewährleisten.",
        "services.laundry.title": "Waschküche",
        "services.laundry.description":
            "Die gemeinschaftliche Waschküche bietet allen Bewohnern modernen Komfort für den Wäscheprozess. Praktisch und gut ausgestattet – für ein stressfreies Haushaltsmanagement.",
        "services.accessible.title": "Rollstuhlgerecht",
        "services.accessible.description":
            "Barrierefreiheit ist uns wichtig: Mit einem speziell eingerichteten Fahrstuhl bieten wir rollstuhlgerechten Zugang zu allen Etagen, damit jeder sich in seinem Zuhause wohlfühlen kann.",
        "about.title": "Über Uns",
        "about.subtitle":
            "Ein Zuhause ist nicht nur ein Ort, sondern ein Gefühl von Luxus und Geborgenheit.",
        "about.welcome": "Willkommen bei La Perla",
        "about.p.one":
            "„La Perla“ ist ein modernes Wohnprojekt in zentraler Lage und befindet sich aktuell in der finalen Phase des Innenausbaus. Derzeit stehen noch mehrere Wohneinheiten zur Auswahl, die sich sowohl zur Eigennutzung als auch als Anlageobjekt eignen.",
        "about.p.two":
            "Im ersten Stock werden unterschiedliche Grundrissvarianten angeboten. Dazu zählen kompakte Studios mit 24,5 m² oder 28 m² Wohnfläche inklusive Terrasse sowie bereits zusammengelegte Einheiten mit insgesamt 49 m² Wohnfläche.",
        "about.p.three":
            "Da mit der Verlegung der Fliesen gerade begonnen wurde, besteht aktuell noch die Möglichkeit, bei der Gestaltung mitzuwirken. Fliesen und Türen können nach individuellem Geschmack ausgewählt werden.",
        "about.p.four":
            "Alle Wohnungen sind klimatisiert und verfügen über einen Balkon. Zusätzlich steht eine gemeinschaftliche Dachterrasse mit Pool und Quincho (Grillbereich) zur Verfügung.",
        "about.p.five":
            "Die Lage bietet kurze Wege zu Restaurants, Cafés und Einkaufsmöglichkeiten. Die Privatschule Don Bosco befindet sich in unmittelbarer Nähe. Der Verkauf erfolgt provisionsfrei direkt vom Eigentümer, Besichtigungen sind nach Terminvereinbarung möglich.",
        "gallery.title": "Galerie",
        "gallery.subtitle":
            "Jeder Meilenstein erzählt eine Geschichte – von der ersten Idee bis zum fertigen Traumhaus.",
        "gallery.january": "Januar",
        "gallery.february": "Februar",
        "gallery.march": "März",
        "gallery.april": "April",
        "gallery.may": "Mai",
        "gallery.june": "Juni",
        "gallery.july": "Juli",
        "gallery.august": "August",
        "gallery.september": "September",
        "gallery.october": "Oktober",
        "gallery.november": "November",
        "gallery.december": "Dezember",
        "price.title": "Preise",
        "price.subtitle":
            "Transparenz, Qualität und Wert – entdecken Sie unsere fairen Preise, die Ihrem Traum vom perfekten Zuhause gerecht werden.",
        "plans.title": "Pläne",
        "plans.ground_floor": "Erdgeschoss",
        "plans.first_floor": "1. Stock",
        "plans.second_floor": "2. Stock",
        "plans.third_floor": "3. Stock",
        "plans.fourth_floor": "4. Stock",
        "team.title": "Team",
        "team.subtitle":
            "Zusammenkommen ist ein Beginn, zusammenbleiben ist ein Fortschritt, zusammenarbeiten ist ein Erfolg.",
        "team.one": "Geschäftsführer & Bauführer",
        "partner.title": "Partner",
        "partner.subtitle":
            "Gemeinsam schaffen wir Fundamente – für erfolgreiche Projekte, innovative Lösungen und eine vertrauensvolle Partnerschaft, die wächst.",
        "partner.one": "Strukturelle Berechnung",
        "partner.two": "Architektonisches Design",
        "partner.three": "Elektrisches Design",
        "partner.four": "Notariat",
        "contact.title": "Kontakt",
        "contact.subtitle":
            "Warum träumen, wenn Sie in Ihrem Traumhaus leben können?",
        "contact.address": "Adresse:",
        "contact.address.subtitle": "Villarrica Ecke Ria chuelo und Azara",
        "contact.phone.telephone": "Telefon",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:",
    },
    es: {
        "navbar.brand": "La Perla",
        "navbar.home": "Inicio",
        "navbar.about": "Sobre Nosotros",
        "navbar.gallery": "Galería",
        "navbar.prices": "Precios",
        "navbar.team": "Equipo",
        "navbar.contact": "Contacto",
        "navbar.language": "Idioma",
        "hero.title": "Tu departamento en el corazón de Villarrica",
        "services.title": "Lo que Ofrecemos",
        "services.subtitle":
            "No solo construimos casas, creamos obras de vida.",
        "services.pool.title": "Piscina",
        "services.pool.description":
            "Disfruta del lujo de una impresionante piscina en la azotea con vistas panorámicas. Un lugar exclusivo para relajarse y descansar, ideal para días soleados y noches sociales.",
        "services.garage.title": "Garaje",
        "services.garage.description":
            "Nuestros garajes ofrecen un espacio seguro para tu vehículo, aunque en número limitado. Hay estacionamiento adicional disponible en el terreno para garantizar tu comodidad.",
        "services.laundry.title": "Lavandería",
        "services.laundry.description":
            "La lavandería comunitaria ofrece comodidad moderna para todos los residentes durante el proceso de lavado. Práctica y bien equipada, para una gestión del hogar sin estrés.",
        "services.accessible.title": "Accesible para sillas de ruedas",
        "services.accessible.description":
            "La accesibilidad es importante para nosotros: con un ascensor especialmente diseñado, ofrecemos acceso sin barreras a todos los pisos, para que todos puedan sentirse cómodos en su hogar.",
        "about.title": "Sobre Nosotros",
        "about.subtitle":
            "Un hogar no es solo un lugar, es un sentimiento de lujo y seguridad.",
        "about.welcome": "Bienvenido a La Perla",
        "about.p.one":
            "„La Perla“ es un proyecto residencial moderno en una ubicación céntrica y se encuentra actualmente en la fase final de obra interior. En este momento aún hay varias unidades disponibles, aptas tanto para vivienda propia como para inversión.",
        "about.p.two":
            "En el primer piso se ofrecen distintas variantes de distribución. Hay estudios compactos de 24,5 m² o 28 m² con terraza, así como unidades ya unificadas con un total de 49 m² de superficie habitable.",
        "about.p.three":
            "Como la colocación de los pisos acaba de comenzar, todavía es posible participar en el diseño interior. Los revestimientos y las puertas pueden elegirse según el gusto personal.",
        "about.p.four":
            "Todos los departamentos cuentan con aire acondicionado y balcón. Además, los residentes disponen de una terraza común en la azotea con piscina y quincho.",
        "about.p.five":
            "La ubicación ofrece fácil acceso a restaurantes, cafés y comercios. El colegio privado Don Bosco se encuentra en las inmediaciones. La venta se realiza directamente por el propietario, sin comisión, y las visitas se coordinan con cita previa.",
        "gallery.title": "Galería",
        "gallery.subtitle":
            "Cada hito cuenta una historia, desde la primera idea hasta la casa soñada terminada.",
        "gallery.january": "Enero",
        "gallery.february": "Febrero",
        "gallery.march": "Marzo",
        "gallery.april": "Abril",
        "gallery.may": "Mayo",
        "gallery.june": "Junio",
        "gallery.july": "Julio",
        "gallery.august": "Agosto",
        "gallery.september": "Septiembre",
        "gallery.october": "Octubre",
        "gallery.november": "Noviembre",
        "gallery.december": "Diciembre",
        "price.title": "Precios",
        "price.subtitle":
            "Transparencia, calidad y valor: descubre nuestros precios justos que hacen realidad tu sueño de un hogar perfecto.",
        "plans.title": "Planos",
        "plans.ground_floor": "Planta Baja",
        "plans.first_floor": "Primer Piso",
        "plans.second_floor": "Segundo Piso",
        "plans.third_floor": "Tercer Piso",
        "plans.fourth_floor": "Cuarto Piso",
        "team.title": "Equipo",
        "team.subtitle":
            "El llegar juntos es el comienzo, el mantenerse juntos es el progreso, el trabajar juntos es el éxito.",
        "team.one": "Director General & Jefe de Obras",
        "partner.title": "Socios",
        "partner.subtitle":
            "Juntos construimos los cimientos – para proyectos exitosos, soluciones innovadoras y una asociación basada en la confianza y el crecimiento.",
        "partner.one": "Cálculo Estructural",
        "partner.two": "Diseño Arquitectónico",
        "partner.three": "Diseño Eléctrico",
        "partner.four": "Escribanía",
        "contact.title": "Contacto",
        "contact.subtitle":
            "¿Por qué soñar, cuando puedes vivir en la casa de tus sueños?",
        "contact.address": "Dirección:",
        "contact.address.subtitle": "Villarrica esquina Ria Chuelo y Azara",
        "contact.phone.telephone": "Teléfono",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:",
    },
    br: {
        "navbar.brand": "La Perla",
        "navbar.home": "Início",
        "navbar.about": "Sobre Nós",
        "navbar.gallery": "Galeria",
        "navbar.prices": "Preços",
        "navbar.team": "Equipe",
        "navbar.contact": "Contato",
        "navbar.language": "Idioma",
        "hero.title": "Seu apartamento no coração de Villarrica",
        "services.title": "O que Oferecemos",
        "services.subtitle":
            "Não construímos apenas casas, criamos obras de vida.",
        "services.pool.title": "Piscina",
        "services.pool.description":
            "Desfrute do luxo de uma impressionante piscina na cobertura com vista panorâmica. Um lugar exclusivo para relaxar e descansar, ideal para dias ensolarados e noites sociais.",
        "services.garage.title": "Garagem",
        "services.garage.description":
            "Nossas garagens oferecem um espaço seguro para seu veículo, embora em número limitado. Há estacionamento adicional disponível no terreno para garantir seu conforto.",
        "services.laundry.title": "Lavanderia",
        "services.laundry.description":
            "A lavanderia comunitária oferece conforto moderno para todos os moradores durante o processo de lavagem. Prática e bem equipada, para uma gestão do lar sem estresse.",
        "services.accessible.title": "Acessível para cadeirantes",
        "services.accessible.description":
            "A acessibilidade é importante para nós: com um elevador especialmente projetado, oferecemos acesso sem barreiras a todos os andares, para que todos possam se sentir confortáveis em seu lar.",
        "about.title": "Sobre Nós",
        "about.subtitle":
            "Um lar não é apenas um lugar, é um sentimento de luxo e segurança.",
        "about.welcome": "Bem-vindo à La Perla",
        "about.p.one":
            "„La Perla“ é um projeto residencial moderno em localização central e encontra-se atualmente na fase final de acabamento interno. Ainda há várias unidades disponíveis, adequadas tanto para moradia quanto para investimento.",
        "about.p.two":
            "No primeiro andar, estão disponíveis diferentes opções de planta, incluindo estúdios compactos de 24,5 m² ou 28 m² com terraço, bem como unidades já integradas com área total de 49 m².",
        "about.p.three":
            "Como a instalação dos pisos foi iniciada recentemente, ainda é possível participar das decisões de acabamento. Revestimentos e portas podem ser escolhidos de acordo com o gosto pessoal.",
        "about.p.four":
            "Todos os apartamentos possuem ar-condicionado e varanda. Além disso, os moradores contam com uma área comum na cobertura com piscina e espaço quincho para churrasco.",
        "about.p.five":
            "A localização oferece fácil acesso a restaurantes, cafés e comércios. A escola particular Don Bosco fica nas proximidades. A venda é feita diretamente pelo proprietário, sem comissão, e as visitas podem ser agendadas.",
        "gallery.title": "Galeria",
        "gallery.subtitle":
            "Cada marco conta uma história, desde a primeira ideia até a casa dos sonhos concluída.",
        "gallery.january": "Janeiro",
        "gallery.february": "Fevereiro",
        "gallery.march": "Março",
        "gallery.april": "Abril",
        "gallery.may": "Maio",
        "gallery.june": "Junho",
        "gallery.july": "Julho",
        "gallery.august": "Agosto",
        "gallery.september": "Setembro",
        "gallery.october": "Outubro",
        "gallery.november": "Novembro",
        "gallery.december": "Dezembro",
        "price.title": "Preços",
        "price.subtitle":
            "Transparência, qualidade e valor: descubra nossos preços justos que tornam realidade seu sonho de um lar perfeito.",
        "plans.title": "Plantas",
        "plans.ground_floor": "Térreo",
        "plans.first_floor": "Primeiro Andar",
        "plans.second_floor": "Segundo Andar",
        "plans.third_floor": "Terceiro Andar",
        "plans.fourth_floor": "Quarto Andar",
        "team.title": "Equipe",
        "team.subtitle":
            "Chegar juntos é o começo, ficar juntos é o progresso, trabalhar juntos é o sucesso.",
        "team.one": "Diretor Executivo & Gerente de Construção",
        "partner.title": "Parceiros",
        "partner.subtitle":
            "Juntos, construímos os alicerces – para projetos de sucesso, soluções inovadoras e uma parceria baseada em confiança e crescimento.",
        "partner.one": "Cálculo Estrutural",
        "partner.two": "Design Arquitetônico",
        "partner.three": "Design Elétrico",
        "partner.four": "Tabelionato",
        "contact.title": "Contato",
        "contact.subtitle":
            "Por que sonhar, quando você pode viver na casa dos seus sonhos?",
        "contact.address": "Endereço:",
        "contact.address.subtitle": "Villarrica esquina Ria Chuelo e Azara",
        "contact.phone.telephone": "Telefone",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:",
    },
    en: {
        "navbar.brand": "La Perla",
        "navbar.home": "Home",
        "navbar.about": "About Us",
        "navbar.gallery": "Gallery",
        "navbar.prices": "Prices",
        "navbar.team": "Team",
        "navbar.contact": "Contact",
        "navbar.language": "Language",
        "hero.title": "Your Apartment in the Heart of Villarrica",
        "services.title": "What We Offer",
        "services.subtitle": "We don't just build houses, we create legacies.",
        "services.pool.title": "Pool",
        "services.pool.description":
            "Enjoy the luxury of a stunning rooftop pool with panoramic views. An exclusive place to relax and unwind – perfect for sunny days and social evenings.",
        "services.garage.title": "Garage",
        "services.garage.description":
            "Our garages provide secure parking for your vehicle, but in limited numbers. Additional parking spaces are available on the property for your convenience.",
        "services.laundry.title": "Laundry Room",
        "services.laundry.description":
            "The shared laundry room offers modern convenience for all residents. Practical and well-equipped – for stress-free household management.",
        "services.accessible.title": "Wheelchair Accessible",
        "services.accessible.description":
            "Accessibility is important to us: with a specially designed elevator, we offer wheelchair access to all floors, ensuring everyone feels comfortable in their home.",
        "about.title": "About Us",
        "about.subtitle":
            "A home is not just a place but a feeling of luxury and security.",
        "about.welcome": "Welcome to La Perla",
        "about.p.one":
            "„La Perla“ is a modern residential project in a central location and is currently in the final phase of interior construction. Several units are still available, suitable for both private use and investment.",
        "about.p.two":
            "Various floor plan options are available on the first floor, including compact studios of 24.5 m² or 28 m² with terrace, as well as already combined units offering a total living space of 49 m².",
        "about.p.three":
            "As tile installation has just begun, buyers currently still have the opportunity to influence the interior design. Tiles and doors can be selected according to personal preference.",
        "about.p.four":
            "All apartments are air-conditioned and feature a balcony. In addition, residents have access to a shared rooftop terrace with a pool and quincho (barbecue area).",
        "about.p.five":
            "The location offers short walking distances to restaurants, cafés, and shops. The Don Bosco private school is nearby. Sales are conducted directly by the owner with no commission, and site visits are available by appointment.",
        "gallery.title": "Gallery",
        "gallery.subtitle":
            "Every milestone tells a story – from the first idea to the finished dream home.",
        "gallery.january": "January",
        "gallery.february": "February",
        "gallery.march": "March",
        "gallery.april": "April",
        "gallery.may": "May",
        "gallery.june": "June",
        "gallery.july": "July",
        "gallery.august": "August",
        "gallery.september": "September",
        "gallery.october": "October",
        "gallery.november": "November",
        "gallery.december": "December",
        "price.title": "Prices",
        "price.subtitle":
            "Transparency, quality, and value – discover our fair prices that fulfill your dream of the perfect home.",
        "plans.title": "Plans",
        "plans.ground_floor": "Ground Floor",
        "plans.first_floor": "1st Floor",
        "plans.second_floor": "2nd Floor",
        "plans.third_floor": "3rd Floor",
        "plans.fourth_floor": "4th Floor",
        "team.title": "Team",
        "team.subtitle":
            "Coming together is a beginning, staying together is progress, working together is success.",
        "team.one": "CEO & Construction Manager",
        "partner.title": "Partner",
        "partner.subtitle":
            "Together, we lay the foundations – for successful projects, innovative solutions, and a partnership built on trust and growth.",
        "partner.one": "Structural Calculation",
        "partner.two": "Architectural Design",
        "partner.three": "Electrical Design",
        "partner.four": "Notarial Office",
        "contact.title": "Contact",
        "contact.subtitle": "Why dream when you can live in your dream home?",
        "contact.address": "Address:",
        "contact.address.subtitle": "Villarrica corner of Ria Chuelo and Azara",
        "contact.phone.telephone": "Phone",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:",
    },
};

// Function to set the language based on user selection
function setLanguage(lang) {
    var elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(function (element) {
        var key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });
    // Save language selection in a cookie
    setCookie("language", lang, 30); // Remember for 30 days
}

// Function to initialize language from cookie or default
function initializeLanguage() {
    var lang = getCookie("language") || "de"; // Default to German
    setLanguage(lang);
}

// Dropdown toggle animation and translation handling
document.addEventListener("DOMContentLoaded", function () {
    const dropdownToggle = document.getElementById("languageDropdown");
    const dropdownMenu = document.querySelector(
        ".language-selector .dropdown-menu",
    );

    dropdownToggle.addEventListener("click", function (e) {
        e.preventDefault();
        dropdownMenu.classList.toggle("show");
    });

    dropdownMenu.addEventListener("click", function (event) {
        var lang = event.target.getAttribute("data-lang");
        if (lang) {
            setLanguage(lang);
            dropdownMenu.classList.remove("show"); // Close dropdown
        }
    });

    // Initialize the page with the preferred language
    initializeLanguage();
});
