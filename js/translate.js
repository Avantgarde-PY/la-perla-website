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
    "de": {
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
        "services.subtitle": "Wir bauen nicht nur Häuser, wir schaffen Lebenswerke.",
        "services.pool.title": "Pool",
        "services.pool.description": "Genießen Sie den Luxus eines atemberaubenden Pools auf dem Dach mit Panoramablick. Ein exklusiver Ort zum Entspannen und Erholen – ideal für sonnige Tage und gesellige Abende.",
        "services.garage.title": "Garage",
        "services.garage.description": "Unsere Garagen bieten sicheren Platz für Ihr Fahrzeug, jedoch in begrenzter Zahl. Zusätzliche Parkmöglichkeiten stehen Ihnen auf dem Gelände zur Verfügung, um Ihren Komfort zu gewährleisten.",
        "services.laundry.title": "Waschküche",
        "services.laundry.description": "Die gemeinschaftliche Waschküche bietet allen Bewohnern modernen Komfort für den Wäscheprozess. Praktisch und gut ausgestattet – für ein stressfreies Haushaltsmanagement.",
        "services.accessible.title": "Rollstuhlgerecht",
        "services.accessible.description": "Barrierefreiheit ist uns wichtig: Mit einem speziell eingerichteten Fahrstuhl bieten wir rollstuhlgerechten Zugang zu allen Etagen, damit jeder sich in seinem Zuhause wohlfühlen kann.",
        "about.title": "Über Uns",
        "about.subtitle": "Ein Zuhause ist nicht nur ein Ort, sondern ein Gefühl von Luxus und Geborgenheit.",
        "about.welcome": "Willkommen bei La Perla",
        "about.p.one": "Mitten im charmanten Villarrica bietet „La Perla“ moderne Wohnungen mit 2-3 Zimmern, perfekt für Familien oder diejenigen, die etwas mehr Platz brauchen. Jede Wohnung ist klimatisiert und verfügt über großzügige Balkone, ideal für den morgendlichen Kaffee mit Ausblick.",
        "about.p.two": "Das Highlight: eine Dachterrasse mit Pool, perfekt für entspannte Tage und gesellige Grillabende. Die zentrale Lage ermöglicht es dir, das Beste von Villarrica zu genießen: Restaurants, Cafés und Einkaufsmöglichkeiten sind nur einen kurzen Spaziergang entfernt. Die Nähe zur Privatschule Don Bosco macht diese Wohnungen besonders attraktiv für Familien mit Kindern.",
        "about.p.three": "Die Fertigstellung ist für Dezember 2025 geplant, also genug Zeit, um deinen Einzug perfekt vorzubereiten. Der Kaufpreis liegt bei attraktiven $1000 pro m², und das Beste daran: Keine Maklerkosten, da Privatverkauf!",
        "about.p.four": "Sichere dir jetzt deinen Platz in diesem exklusiven Projekt und verwirkliche deinen Traum vom idealen Zuhause in Villarrica. Dein neues Leben wartet!",
        "gallery.title": "Galerie",
        "gallery.subtitle": "Jeder Meilenstein erzählt eine Geschichte – von der ersten Idee bis zum fertigen Traumhaus.",
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
        "price.subtitle": "Transparenz, Qualität und Wert – entdecken Sie unsere fairen Preise, die Ihrem Traum vom perfekten Zuhause gerecht werden.",
        "plans.title": "Pläne",
        "plans.groundfloor": "Erdgeschoss",
        "plans.firstfloor": "1. Stock",
        "plans.secondfloor": "2. Stock",
        "plans.thirdfloor": "3. Stock",
        "plans.fourthfloor": "4. Stock",
        "team.title": "Team",
        "team.subtitle": "Zusammenkommen ist ein Beginn, zusammenbleiben ist ein Fortschritt, zusammenarbeiten ist ein Erfolg.",
        "team.one": "Geschäftsführer & Bauführer",
        "partner.title": "Partner",
        "partner.subtitle": "Gemeinsam schaffen wir Fundamente – für erfolgreiche Projekte, innovative Lösungen und eine vertrauensvolle Partnerschaft, die wächst.",
        "partner.one": "Strukturelle Berechnung",
        "partner.two": "Architektonisches Design",
        "partner.three": "Elektrisches Design",
        "partner.four": "Notariat",
        "contact.title": "Kontakt",
        "contact.subtitle": "Warum träumen, wenn Sie in Ihrem Traumhaus leben können?",
        "contact.address": "Adresse:",
        "contact.address.subtitle": "Villarrica Ecke Ria chuelo und Azara",
        "contact.phone.telephone": "Telefon",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:"
    },
    "es": {
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
        "services.subtitle": "No solo construimos casas, creamos obras de vida.",
        "services.pool.title": "Piscina",
        "services.pool.description": "Disfruta del lujo de una impresionante piscina en la azotea con vistas panorámicas. Un lugar exclusivo para relajarse y descansar, ideal para días soleados y noches sociales.",
        "services.garage.title": "Garaje",
        "services.garage.description": "Nuestros garajes ofrecen un espacio seguro para tu vehículo, aunque en número limitado. Hay estacionamiento adicional disponible en el terreno para garantizar tu comodidad.",
        "services.laundry.title": "Lavandería",
        "services.laundry.description": "La lavandería comunitaria ofrece comodidad moderna para todos los residentes durante el proceso de lavado. Práctica y bien equipada, para una gestión del hogar sin estrés.",
        "services.accessible.title": "Accesible para sillas de ruedas",
        "services.accessible.description": "La accesibilidad es importante para nosotros: con un ascensor especialmente diseñado, ofrecemos acceso sin barreras a todos los pisos, para que todos puedan sentirse cómodos en su hogar.",
        "about.title": "Sobre Nosotros",
        "about.subtitle": "Un hogar no es solo un lugar, es un sentimiento de lujo y seguridad.",
        "about.welcome": "Bienvenido a La Perla",
        "about.p.one": "En pleno corazón del encantador Villarrica, ‘La Perla’ ofrece departamentos modernos de 2 a 3 habitaciones, perfectos para familias o para aquellos que necesitan un poco más de espacio. Cada departamento está climatizado y cuenta con amplios balcones, ideales para un café matutino con vista.",
        "about.p.two": "Lo destacado: una terraza en la azotea con piscina, perfecta para días relajados y noches de parrillada. La ubicación central te permite disfrutar de lo mejor de Villarrica: restaurantes, cafés y tiendas están a solo unos minutos a pie. La cercanía al colegio privado Don Bosco hace que estos departamentos sean especialmente atractivos para familias con niños.",
        "about.p.three": "La finalización está prevista para diciembre de 2025, por lo que tienes tiempo suficiente para preparar tu mudanza. El precio de venta es atractivo, $1000 por m², y lo mejor de todo: ¡sin comisiones de agencia, ya que es una venta privada!",
        "about.p.four": "Asegura tu lugar en este proyecto exclusivo y haz realidad tu sueño de tener el hogar ideal en Villarrica. ¡Tu nueva vida te espera!",
        "gallery.title": "Galería",
        "gallery.subtitle": "Cada hito cuenta una historia, desde la primera idea hasta la casa soñada terminada.",
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
        "price.subtitle": "Transparencia, calidad y valor: descubre nuestros precios justos que hacen realidad tu sueño de un hogar perfecto.",
        "plans.title": "Planos",
        "plans.groundfloor": "Planta Baja",
        "plans.firstfloor": "Primer Piso",
        "plans.secondfloor": "Segundo Piso",
        "plans.thirdfloor": "Tercer Piso",
        "plans.fourthfloor": "Cuarto Piso",
        "team.title": "Equipo",
        "team.subtitle": "El llegar juntos es el comienzo, el mantenerse juntos es el progreso, el trabajar juntos es el éxito.",
        "team.one": "Director General & Jefe de Obras",
        "partner.title": "Socios",
        "partner.subtitle": "Juntos construimos los cimientos – para proyectos exitosos, soluciones innovadoras y una asociación basada en la confianza y el crecimiento.",
        "partner.one": "Cálculo Estructural",
        "partner.two": "Diseño Arquitectónico",
        "partner.three": "Diseño Eléctrico",
        "partner.four": "Escribanía",
        "contact.title": "Contacto",
        "contact.subtitle": "¿Por qué soñar, cuando puedes vivir en la casa de tus sueños?",
        "contact.address": "Dirección:",
        "contact.address.subtitle": "Villarrica esquina Ria Chuelo y Azara",
        "contact.phone.telephone": "Teléfono",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:"
    },
    "br": {
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
        "services.subtitle": "Não construímos apenas casas, criamos obras de vida.",
        "services.pool.title": "Piscina",
        "services.pool.description": "Desfrute do luxo de uma impressionante piscina na cobertura com vista panorâmica. Um lugar exclusivo para relaxar e descansar, ideal para dias ensolarados e noites sociais.",
        "services.garage.title": "Garagem",
        "services.garage.description": "Nossas garagens oferecem um espaço seguro para seu veículo, embora em número limitado. Há estacionamento adicional disponível no terreno para garantir seu conforto.",
        "services.laundry.title": "Lavanderia",
        "services.laundry.description": "A lavanderia comunitária oferece conforto moderno para todos os moradores durante o processo de lavagem. Prática e bem equipada, para uma gestão do lar sem estresse.",
        "services.accessible.title": "Acessível para cadeirantes",
        "services.accessible.description": "A acessibilidade é importante para nós: com um elevador especialmente projetado, oferecemos acesso sem barreiras a todos os andares, para que todos possam se sentir confortáveis em seu lar.",
        "about.title": "Sobre Nós",
        "about.subtitle": "Um lar não é apenas um lugar, é um sentimento de luxo e segurança.",
        "about.welcome": "Bem-vindo à La Perla",
        "about.p.one": "No coração do encantador Villarrica, ‘La Perla’ oferece apartamentos modernos de 2 a 3 quartos, perfeitos para famílias ou para quem precisa de um pouco mais de espaço. Cada apartamento é climatizado e possui amplas varandas, ideais para um café da manhã com vista.",
        "about.p.two": "O destaque: uma cobertura com piscina, perfeita para dias relaxantes e noites de churrasco. A localização central permite que você aproveite o melhor de Villarrica: restaurantes, cafés e lojas estão a apenas alguns minutos a pé. A proximidade com a escola privada Don Bosco torna esses apartamentos especialmente atraentes para famílias com crianças.",
        "about.p.three": "A entrega está prevista para dezembro de 2025, então você tem tempo suficiente para preparar sua mudança. O preço de venda é atrativo, $1000 por m², e o melhor de tudo: sem comissões de agência, pois é uma venda privada!",
        "about.p.four": "Garanta seu lugar neste projeto exclusivo e realize seu sonho de ter o lar ideal em Villarrica. Sua nova vida espera por você!",
        "gallery.title": "Galeria",
        "gallery.subtitle": "Cada marco conta uma história, desde a primeira ideia até a casa dos sonhos concluída.",
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
        "price.subtitle": "Transparência, qualidade e valor: descubra nossos preços justos que tornam realidade seu sonho de um lar perfeito.",
        "plans.title": "Plantas",
        "plans.groundfloor": "Térreo",
        "plans.firstfloor": "Primeiro Andar",
        "plans.secondfloor": "Segundo Andar",
        "plans.thirdfloor": "Terceiro Andar",
        "plans.fourthfloor": "Quarto Andar",
        "team.title": "Equipe",
        "team.subtitle": "Chegar juntos é o começo, ficar juntos é o progresso, trabalhar juntos é o sucesso.",
        "team.one": "Diretor Executivo & Gerente de Construção",
        "partner.title": "Parceiros",
        "partner.subtitle": "Juntos, construímos os alicerces – para projetos de sucesso, soluções inovadoras e uma parceria baseada em confiança e crescimento.",
        "partner.one": "Cálculo Estrutural",
        "partner.two": "Design Arquitetônico",
        "partner.three": "Design Elétrico",
        "partner.four": "Tabelionato",
        "contact.title": "Contato",
        "contact.subtitle": "Por que sonhar, quando você pode viver na casa dos seus sonhos?",
        "contact.address": "Endereço:",
        "contact.address.subtitle": "Villarrica esquina Ria Chuelo e Azara",
        "contact.phone.telephone": "Telefone",
        "contact.phone.whatsapp": "WhatsApp",
        "contact.telegram": "Telegram:"
    },
    "en": {
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
        "services.pool.description": "Enjoy the luxury of a stunning rooftop pool with panoramic views. An exclusive place to relax and unwind – perfect for sunny days and social evenings.",
        "services.garage.title": "Garage",
        "services.garage.description": "Our garages provide secure parking for your vehicle, but in limited numbers. Additional parking spaces are available on the property for your convenience.",
        "services.laundry.title": "Laundry Room",
        "services.laundry.description": "The shared laundry room offers modern convenience for all residents. Practical and well-equipped – for stress-free household management.",
        "services.accessible.title": "Wheelchair Accessible",
        "services.accessible.description": "Accessibility is important to us: with a specially designed elevator, we offer wheelchair access to all floors, ensuring everyone feels comfortable in their home.",
        "about.title": "About Us",
        "about.subtitle": "A home is not just a place but a feeling of luxury and security.",
        "about.welcome": "Welcome to La Perla",
        "about.p.one": "Located in charming Villarrica, „La Perla“ offers modern apartments with 2-3 rooms, perfect for families or those needing a bit more space. Each apartment is air-conditioned and features spacious balconies, ideal for morning coffee with a view.",
        "about.p.two": "The highlight: a rooftop terrace with a pool, perfect for relaxing days and social barbecue evenings. Its central location allows you to enjoy the best of Villarrica: restaurants, cafes, and shops are just a short walk away. The proximity to the Don Bosco private school makes these apartments especially appealing to families with children.",
        "about.p.three": "Completion is scheduled for December 2025, giving you plenty of time to prepare for your move. The purchase price is an attractive $1000 per m², and best of all: no broker fees due to private sale!",
        "about.p.four": "Secure your place in this exclusive project now and make your dream of the ideal home in Villarrica a reality. Your new life awaits!",
        "gallery.title": "Gallery",
        "gallery.subtitle": "Every milestone tells a story – from the first idea to the finished dream home.",
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
        "price.subtitle": "Transparency, quality, and value – discover our fair prices that fulfill your dream of the perfect home.",
        "plans.title": "Plans",
        "plans.groundfloor": "Ground Floor",
        "plans.firstfloor": "1st Floor",
        "plans.secondfloor": "2nd Floor",
        "plans.thirdfloor": "3rd Floor",
        "plans.fourthfloor": "4th Floor",
        "team.title": "Team",
        "team.subtitle": "Coming together is a beginning, staying together is progress, working together is success.",
        "team.one": "CEO & Construction Manager",
        "partner.title": "Partner",
        "partner.subtitle": "Together, we lay the foundations – for successful projects, innovative solutions, and a partnership built on trust and growth.",
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
        "contact.telegram": "Telegram:"
    }
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
    const dropdownMenu = document.querySelector(".language-selector .dropdown-menu");

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