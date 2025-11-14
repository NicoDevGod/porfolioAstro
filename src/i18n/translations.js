export const translations = {
  en: {
    // Meta
    meta: {
      title: "Portfolio of Nicolas - Web Developer and Programmer",
      description: "Let's collaborate in the construction of solutions for all kinds of problems."
    },
    // Header
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      contact: "Contact"
    },
    // Hero Section
    hero: {
      greeting: "Hi, I'm Nicolas",
      badge: "Ready to work",
      description1: "Passionate programmer with experience in creating innovative digital solutions.",
      description2: "This space is a showcase for my work:",
      description3: "from web applications to complex projects, you will find here a glimpse of my ability to implement creativity in every line of code.",
      description4: "Explore my past projects and discover how I can bring value to your digital ideas.",
      downloadCV: "Download CV"
    },
    // Sections
    sections: {
      workExperience: "Work Experience",
      projects: "Projects",
      aboutMe: "About Me",
      contact: "Contact"
    }
  },
  es: {
    // Meta
    meta: {
      title: "Portafolio de Nicolas - Desarrollador y Programador Web",
      description: "Colaboremos en la construcción de soluciones para todo tipo de problemas."
    },
    // Header
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto"
    },
    // Hero Section
    hero: {
      greeting: "Hola, soy Nicolas",
      badge: "Listo para trabajar",
      description1: "Programador apasionado con experiencia en la creación de soluciones digitales innovadoras.",
      description2: "Este espacio es una muestra de mi trabajo:",
      description3: "desde aplicaciones web hasta proyectos complejos, aquí encontrarás una muestra de mi capacidad para implementar creatividad en cada línea de código.",
      description4: "Explora mis proyectos pasados y descubre cómo puedo aportar valor a tus ideas digitales.",
      downloadCV: "Descargar CV"
    },
    // Sections
    sections: {
      workExperience: "Experiencia Laboral",
      projects: "Proyectos",
      aboutMe: "Sobre Mí",
      contact: "Contacto"
    }
  }
};

// Mapeo de países/regiones a idiomas
export const countryLanguageMap = {
  // Países de habla hispana
  'AR': 'es', // Argentina
  'BO': 'es', // Bolivia
  'CL': 'es', // Chile
  'CO': 'es', // Colombia
  'CR': 'es', // Costa Rica
  'CU': 'es', // Cuba
  'DO': 'es', // República Dominicana
  'EC': 'es', // Ecuador
  'SV': 'es', // El Salvador
  'GT': 'es', // Guatemala
  'HN': 'es', // Honduras
  'MX': 'es', // México
  'NI': 'es', // Nicaragua
  'PA': 'es', // Panamá
  'PY': 'es', // Paraguay
  'PE': 'es', // Perú
  'PR': 'es', // Puerto Rico
  'ES': 'es', // España
  'UY': 'es', // Uruguay
  'VE': 'es', // Venezuela
  // Estados Unidos (zonas con alta población hispana pueden usar español)
  // Por defecto usaremos inglés para US
};

// Detectar idioma basado en ubicación o preferencias del navegador
export function detectLanguage() {
  // Primero intentar obtener el idioma guardado en localStorage
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
    return savedLanguage;
  }

  // Detectar por idioma del navegador
  const browserLang = navigator.language || navigator.userLanguage;
  const langCode = browserLang.split('-')[0].toLowerCase();
  
  if (langCode === 'es') {
    return 'es';
  }
  
  // Intentar detectar por zona horaria (aproximación)
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    // Zonas horarias de países de habla hispana
    const spanishTimezones = [
      'America/Mexico_City', 'America/Bogota', 'America/Lima', 'America/Santiago',
      'America/Buenos_Aires', 'America/Caracas', 'America/La_Paz', 'America/Guayaquil',
      'America/Asuncion', 'America/Montevideo', 'America/Havana', 'America/Santo_Domingo',
      'America/Guatemala', 'America/Tegucigalpa', 'America/Managua', 'America/San_Salvador',
      'America/Panama', 'America/Costa_Rica', 'Europe/Madrid'
    ];
    
    if (spanishTimezones.some(tz => timezone.includes(tz.split('/')[1]))) {
      return 'es';
    }
  } catch (e) {
    // Si falla, continuar con el idioma del navegador
  }

  // Por defecto inglés
  return 'en';
}

// Obtener traducciones para un idioma específico
export function getTranslations(lang = 'en') {
  return translations[lang] || translations.en;
}

