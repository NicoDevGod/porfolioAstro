// Traducciones embebidas directamente en el script para evitar problemas de importación
const translations = {
  en: {
    meta: {
      title: "Portfolio of Nicolas - Web Developer and Programmer",
      description: "Let's collaborate in the construction of solutions for all kinds of problems."
    },
    nav: {
      home: "Home",
      experience: "Experience",
      projects: "Projects",
      about: "About me",
      contact: "Contact"
    },
    hero: {
      greeting: "Hi, I'm Nicolas",
      badge: "Ready to work",
      description1: "Passionate programmer with experience in creating innovative digital solutions.",
      description2: "This space is a showcase for my work:",
      description3: "from web applications to complex projects, you will find here a glimpse of my ability to implement creativity in every line of code.",
      description4: "Explore my past projects and discover how I can bring value to your digital ideas.",
      downloadCV: "Download CV"
    },
    sections: {
      workExperience: "Work Experience",
      projects: "Projects",
      aboutMe: "About Me",
      contact: "Contact"
    },
    experience: {
      currently: "Currently...",
      developing: "Developing personal projects.",
      developingDesc: "I am currently working on my potential for the development of digital solutions through the role of Front-End.",
      teacher2023: "Computer teacher - IP/CFT Santo Tomas, Ovalle.",
      teacher2023Desc: "During 2023 I worked as a teacher of some subjects within the computer area of the institute, among which were: Web Programming, Operating Systems and Windows Operating Systems. I also did some assistantships for other subjects such as Object Oriented Programming.",
      internship2023: "Internship for Computer Engineering - Universidad Santo Tomas, La Serena.",
      internship2023Desc: "During this period I did my internship and graduation activity within the IT department of the establishment, in which I performed computer support tasks as part of my internship and for my graduation activity I developed a HelpDesk.",
      junior2021: "Junior Developer - Hospital de Ovalle.",
      junior2021Desc: "Before studying engineering I worked as a junior programmer at the Hospital de Ovalle where I worked on projects with different programming languages such as: PHP, Visual Basic, ASP.Net.",
      internship2019: "Internship for Programmer Analyst",
      internship2019Desc: "First encounter with the programming industry, during my internship I was working as a junior programmer within the company.",
      learnMore: "Learn more"
    },
    projects: {
      medsoft: {
        title: "Medsoft",
        description: "Project developed in Windev, which fulfilled the objective of solving the assigned problem in this case was to manage a private medical clinic, the proposed solution is responsible for organizing the schedule of the doctors of the consultation, scheduling hours for customers, inventory control of medicines, allow controlled access to the software through a login, provide accessibility to examinations and diagnoses resulting from medical consultations, among other features."
      },
      yourFirstHome: {
        title: "Your first home",
        description: "Project developed in React - Vite, which is focused on the real estate business playing the role of being the meeting point between the person who wants to buy/lease a property and the owner of the property."
      },
      operations: {
        title: "Operations request management",
        description: "Project developed in ASP.Net, The operations department of the Universidad Santo Tomas - La Serena, is in charge of the functions of support and management of the furniture area of the establishment, these functions have some drawbacks for which this solution was developed through a web application that supports the operations team and solve the problems that arose."
      },
      esmeralda: {
        title: "Esmeralda Repos",
        description: "Project developed in React - Vite, this project is developed for the business \"Esmeralda Repos\", focused on the sale of delicious cakes of all sizes and flavors."
      },
      portfolio: {
        title: "Porfolio",
        description: "Project developed in Astro, since a portfolio is a fairly static page I used Astro as it is the best in terms of performance for static pages."
      }
    },
    about: {
      name: "Nicolas Alejandro Angel Robles",
      title: "Computer Engineer",
      description1: "Passionate and highly motivated web developer with a solid technical background and endless creativity. My focus is on creating innovative and visually appealing digital solutions.",
      description2: "I am an enthusiastic collaborator, committed to effective communication and building successful team solutions. Ready to face new challenges, I am excited to contribute my experience and passion to the world of web development."
    },
    contact: {
      description: "Have a project in mind or just want to say hi? Send me a message and I'll get back to you as soon as possible.",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      send: "Send message"
    },
    footer: {
      copyright: "© 2023",
      allRights: "All Rights Reserved."
    }
  },
  es: {
    meta: {
      title: "Portafolio de Nicolas - Desarrollador y Programador Web",
      description: "Colaboremos en la construcción de soluciones para todo tipo de problemas."
    },
    nav: {
      home: "Inicio",
      experience: "Experiencia",
      projects: "Proyectos",
      about: "Sobre mí",
      contact: "Contacto"
    },
    hero: {
      greeting: "Hola, soy Nicolas",
      badge: "Listo para trabajar",
      description1: "Programador apasionado con experiencia en la creación de soluciones digitales innovadoras.",
      description2: "Este espacio es una muestra de mi trabajo:",
      description3: "desde aplicaciones web hasta proyectos complejos, aquí encontrarás una muestra de mi capacidad para implementar creatividad en cada línea de código.",
      description4: "Explora mis proyectos pasados y descubre cómo puedo aportar valor a tus ideas digitales.",
      downloadCV: "Descargar CV"
    },
    sections: {
      workExperience: "Experiencia Laboral",
      projects: "Proyectos",
      aboutMe: "Sobre Mí",
      contact: "Contacto"
    },
    experience: {
      currently: "Actualmente...",
      developing: "Desarrollando proyectos personales.",
      developingDesc: "Actualmente estoy trabajando en mi potencial para el desarrollo de soluciones digitales a través del rol de Front-End.",
      teacher2023: "Profesor de Informática - IP/CFT Santo Tomas, Ovalle.",
      teacher2023Desc: "Durante 2023 trabajé como profesor de algunas asignaturas dentro del área informática del instituto, entre las cuales estaban: Programación Web, Sistemas Operativos y Sistemas Operativos Windows. También realicé algunas asistencias para otras asignaturas como Programación Orientada a Objetos.",
      internship2023: "Práctica Profesional de Ingeniería en Informática - Universidad Santo Tomas, La Serena.",
      internship2023Desc: "Durante este período realicé mi práctica profesional y actividad de titulación dentro del departamento de TI del establecimiento, en el cual realicé tareas de soporte informático como parte de mi práctica y para mi actividad de titulación desarrollé un HelpDesk.",
      junior2021: "Desarrollador Junior - Hospital de Ovalle.",
      junior2021Desc: "Antes de estudiar ingeniería trabajé como programador junior en el Hospital de Ovalle donde trabajé en proyectos con diferentes lenguajes de programación como: PHP, Visual Basic, ASP.Net.",
      internship2019: "Práctica de Analista Programador",
      internship2019Desc: "Primer encuentro con la industria de la programación, durante mi práctica estuve trabajando como programador junior dentro de la empresa.",
      learnMore: "Saber más"
    },
    projects: {
      medsoft: {
        title: "Medsoft",
        description: "Proyecto desarrollado en Windev, que cumplió el objetivo de resolver el problema asignado en este caso era gestionar una clínica médica privada, la solución propuesta se encarga de organizar el horario de los médicos de la consulta, agendar horas para clientes, control de inventario de medicamentos, permitir acceso controlado al software mediante un login, brindar accesibilidad a exámenes y diagnósticos resultantes de consultas médicas, entre otras características."
      },
      yourFirstHome: {
        title: "Tu primera casa",
        description: "Proyecto desarrollado en React - Vite, que está enfocado en el negocio inmobiliario desempeñando el rol de ser el punto de encuentro entre la persona que desea comprar/arrendar una propiedad y el dueño de la propiedad."
      },
      operations: {
        title: "Gestión de solicitudes de operaciones",
        description: "Proyecto desarrollado en ASP.Net, El departamento de operaciones de la Universidad Santo Tomas - La Serena, está a cargo de las funciones de soporte y gestión del área de mobiliario del establecimiento, estas funciones tienen algunas desventajas por las cuales se desarrolló esta solución mediante una aplicación web que apoya al equipo de operaciones y resuelve los problemas que surgieron."
      },
      esmeralda: {
        title: "Esmeralda Repos",
        description: "Proyecto desarrollado en React - Vite, este proyecto está desarrollado para el negocio \"Esmeralda Repos\", enfocado en la venta de deliciosos pasteles de todos los tamaños y sabores."
      },
      portfolio: {
        title: "Portafolio",
        description: "Proyecto desarrollado en Astro, dado que un portafolio es una página bastante estática usé Astro ya que es el mejor en términos de rendimiento para páginas estáticas."
      }
    },
    about: {
      name: "Nicolas Alejandro Angel Robles",
      title: "Ingeniero en Informática",
      description1: "Desarrollador web apasionado y altamente motivado con una sólida formación técnica y creatividad infinita. Mi enfoque está en crear soluciones digitales innovadoras y visualmente atractivas.",
      description2: "Soy un colaborador entusiasta, comprometido con la comunicación efectiva y la construcción de soluciones exitosas en equipo. Listo para enfrentar nuevos desafíos, estoy emocionado de contribuir con mi experiencia y pasión al mundo del desarrollo web."
    },
    contact: {
      description: "¿Tienes un proyecto en mente o solo quieres saludar? Envíame un mensaje y te responderé lo antes posible.",
      nameLabel: "Nombre",
      emailLabel: "Correo",
      messageLabel: "Mensaje",
      send: "Enviar mensaje"
    },
    footer: {
      copyright: "© 2023",
      allRights: "Todos los derechos reservados."
    }
  }
};

// Detectar idioma basado en ubicación o preferencias del navegador
function detectLanguage() {
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
    
    if (spanishTimezones.includes(timezone)) {
      return 'es';
    }
  } catch (e) {
    // Si falla, continuar con el idioma del navegador
  }

  // Por defecto inglés
  return 'en';
}

// Obtener traducciones para un idioma específico
function getTranslations(lang = 'en') {
  return translations[lang] || translations.en;
}

// Función para actualizar el contenido de la página con las traducciones
function updatePageContent(lang) {
  const t = getTranslations(lang);
  
  // Actualizar atributo lang del HTML
  document.documentElement.lang = lang;
  
  // Actualizar meta description si existe
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.content = t.meta.description;
  }
  
  // Actualizar título
  document.title = t.meta.title;
  
  // Actualizar navegación
  const navLinks = {
    'nav-home': t.nav.home,
    'nav-experience': t.nav.experience,
    'nav-projects': t.nav.projects,
    'nav-about': t.nav.about,
    'nav-contact': t.nav.contact
  };
  
  Object.keys(navLinks).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = navLinks[id];
    }
  });
  
  // Actualizar hero section
  const heroGreeting = document.getElementById('hero-greeting');
  if (heroGreeting) {
    heroGreeting.textContent = t.hero.greeting;
  }
  
  const heroBadge = document.getElementById('hero-badge');
  if (heroBadge) {
    heroBadge.textContent = t.hero.badge;
  }
  
  const heroDesc1 = document.getElementById('hero-desc-1');
  if (heroDesc1) {
    heroDesc1.textContent = t.hero.description1;
  }
  
  const heroDesc2 = document.getElementById('hero-desc-2');
  if (heroDesc2) {
    heroDesc2.textContent = t.hero.description2;
  }
  
  const heroDesc3 = document.getElementById('hero-desc-3');
  if (heroDesc3) {
    heroDesc3.textContent = t.hero.description3;
  }
  
  const heroDesc4 = document.getElementById('hero-desc-4');
  if (heroDesc4) {
    heroDesc4.textContent = t.hero.description4;
  }
  
  const downloadCV = document.getElementById('download-cv');
  if (downloadCV) {
    downloadCV.textContent = t.hero.downloadCV;
  }
  
  // Actualizar títulos de secciones
  const sectionWorkExp = document.getElementById('section-work-experience');
  if (sectionWorkExp) {
    sectionWorkExp.textContent = t.sections.workExperience;
  }
  
  const sectionProjects = document.getElementById('section-projects');
  if (sectionProjects) {
    sectionProjects.textContent = t.sections.projects;
  }
  
  const sectionAbout = document.getElementById('section-about-me');
  if (sectionAbout) {
    sectionAbout.textContent = t.sections.aboutMe;
  }
  
  const sectionContact = document.getElementById('section-contact');
  if (sectionContact) {
    sectionContact.textContent = t.sections.contact;
  }
  
  // Actualizar Experience (Experiencias laborales)
  const expDates = [
    { id: 'exp-date-0', text: t.experience.currently },
    { id: 'exp-date-1', text: 'May - December 2023' }, // Fechas no se traducen
    { id: 'exp-date-2', text: 'January - March 2023' },
    { id: 'exp-date-3', text: 'January - March 2021' },
    { id: 'exp-date-4', text: 'June - August 2019' }
  ];
  
  const expTitles = [
    { id: 'exp-title-0', text: t.experience.developing },
    { id: 'exp-title-1', text: t.experience.teacher2023 },
    { id: 'exp-title-2', text: t.experience.internship2023 },
    { id: 'exp-title-3', text: t.experience.junior2021 },
    { id: 'exp-title-4', text: t.experience.internship2019 }
  ];
  
  const expDescriptions = [
    { id: 'exp-desc-0', text: t.experience.developingDesc },
    { id: 'exp-desc-1', text: t.experience.teacher2023Desc },
    { id: 'exp-desc-2', text: t.experience.internship2023Desc },
    { id: 'exp-desc-3', text: t.experience.junior2021Desc },
    { id: 'exp-desc-4', text: t.experience.internship2019Desc }
  ];
  
  expDates.forEach(({ id, text }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  
  expTitles.forEach(({ id, text }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  
  expDescriptions.forEach(({ id, text }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  
  // Actualizar botón "Learn more" en Experience
  const expLearnMore = document.getElementById('exp-learn-more');
  if (expLearnMore) {
    // El botón tiene un SVG, así que necesitamos actualizar solo el texto
    const svg = expLearnMore.querySelector('svg');
    if (svg) {
      // Reemplazar todo el contenido pero mantener el SVG
      expLearnMore.innerHTML = t.experience.learnMore + ' ' + svg.outerHTML;
    } else {
      expLearnMore.textContent = t.experience.learnMore;
    }
  }
  
  // Actualizar Projects (Proyectos)
  const projectTitles = [
    { id: 'project-title-0', text: t.projects.medsoft.title },
    { id: 'project-title-1', text: t.projects.yourFirstHome.title },
    { id: 'project-title-2', text: t.projects.operations.title },
    { id: 'project-title-3', text: t.projects.esmeralda.title },
    { id: 'project-title-4', text: t.projects.portfolio.title }
  ];
  
  const projectDescriptions = [
    { id: 'project-desc-0', text: t.projects.medsoft.description },
    { id: 'project-desc-1', text: t.projects.yourFirstHome.description },
    { id: 'project-desc-2', text: t.projects.operations.description },
    { id: 'project-desc-3', text: t.projects.esmeralda.description },
    { id: 'project-desc-4', text: t.projects.portfolio.description }
  ];
  
  projectTitles.forEach(({ id, text }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  
  projectDescriptions.forEach(({ id, text }) => {
    const el = document.getElementById(id);
    if (el) el.textContent = text;
  });
  
  // Actualizar About (Sobre mí)
  const aboutName = document.getElementById('about-name');
  if (aboutName) {
    aboutName.textContent = t.about.name;
  }
  
  const aboutTitle = document.getElementById('about-title');
  if (aboutTitle) {
    aboutTitle.textContent = t.about.title;
  }
  
  const aboutDesc1 = document.getElementById('about-desc-1');
  if (aboutDesc1) {
    aboutDesc1.textContent = t.about.description1;
  }
  
  const aboutDesc2 = document.getElementById('about-desc-2');
  if (aboutDesc2) {
    aboutDesc2.textContent = t.about.description2;
  }

  // Actualizar Contacto
  const contactDesc = document.getElementById('contact-desc');
  if (contactDesc) {
    contactDesc.textContent = t.contact.description;
  }

  const contactNameLabel = document.getElementById('contact-name-label');
  if (contactNameLabel) {
    contactNameLabel.textContent = t.contact.nameLabel;
  }

  const contactEmailLabel = document.getElementById('contact-email-label');
  if (contactEmailLabel) {
    contactEmailLabel.textContent = t.contact.emailLabel;
  }

  const contactMessageLabel = document.getElementById('contact-message-label');
  if (contactMessageLabel) {
    contactMessageLabel.textContent = t.contact.messageLabel;
  }

  const contactSubmit = document.getElementById('contact-submit');
  if (contactSubmit && !contactSubmit.disabled) {
    contactSubmit.textContent = t.contact.send;
  }

  // Actualizar Footer
  const footerCopyright = document.getElementById('footer-copyright');
  if (footerCopyright) {
    footerCopyright.textContent = t.footer.copyright;
  }
  
  const footerRights = document.getElementById('footer-rights');
  if (footerRights) {
    footerRights.textContent = t.footer.allRights;
  }
  
  const footerNavLinks = {
    'footer-nav-home': t.nav.home,
    'footer-nav-experience': t.nav.experience,
    'footer-nav-projects': t.nav.projects,
    'footer-nav-about': t.nav.about
  };
  
  Object.keys(footerNavLinks).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = footerNavLinks[id];
    }
  });
}

// Detectar y aplicar idioma al cargar la página
function initLanguage() {
  try {
    const detectedLang = detectLanguage();
    updatePageContent(detectedLang);
    localStorage.setItem('preferred-language', detectedLang);
  } catch (error) {
    console.error('Error initializing language:', error);
    // Fallback a inglés si hay algún error
    updatePageContent('en');
  }
}

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLanguage);
} else {
  // DOM ya está listo, ejecutar inmediatamente
  initLanguage();
}

// Exportar función para cambio manual de idioma (opcional, para uso global)
window.changeLanguage = function(lang) {
  if (lang === 'es' || lang === 'en') {
    updatePageContent(lang);
    localStorage.setItem('preferred-language', lang);
  }
};

