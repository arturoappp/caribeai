// =====================================================================
// Caribe AI — datos del sitio (ES + EN)
// Para editar contenido: modifica el branch correspondiente en `content`.
// Para campos que NO traducen (URLs, colores, IDs): viven en estructuras
// "base" fuera del branch de idioma.
// =====================================================================

import type { Lang } from "./i18n";

// ---------- Empresa (datos que no traducen) ----------
export const company = {
  name: "Caribe AI",
  legalName: "Caribe AI Systems S.R.L.",
  domain: "caribeai.net",
  email: "contacto@caribeai.net",
  whatsapp: "+1 (314) 328-0994",
  whatsappLink: "https://wa.me/13143280994",
  linkedin: "https://linkedin.com/company/caribeai",
};

// ---------- Trayectoria del equipo (no traducen los nombres de empresa) ----------
// IMPORTANTE: estas son empresas donde miembros del equipo han trabajado/desarrollado
// sistemas, NO son clientes de Caribe AI. Lenguaje cuidadoso para evitar
// implicación de endorsement o uso indebido de marca.
// ORDEN ESTRATÉGICO: infraestructura crítica RD primero (relevancia local máxima
// para audiencia dominicana), luego banca internacional (señal de escala/compliance),
// luego retail/franquicia (señal de operación high-volume).
export const teamBackgroundCompanies = [
  "Claro Dominicana",
  "EDEEste",
  "JPMorgan Chase",
  "Bank of America",
  "Krispy Kreme",
  "Jersey Mike's",
];

// ---------- Tipos ----------
export type Service = {
  number: string;
  id: string;
  title: string;
  short: string;
  long: string;
  bullets: string[];
};

export type ProjectBase = {
  id: string;
  name: string;
  brand: string;
  url: string;
  accent: string;
  linkLabel?: string;
  external?: boolean;
};

export type Project = ProjectBase & {
  tagline: string;
  sector: string;
};

// ---------- Proyectos: base no-traducible ----------
const projectsBase: ProjectBase[] = [
  { id: "ebo",       name: "Ebo",       brand: "EBO",       url: "https://ebodom.com",          accent: "#EAB308" },
  { id: "donde",     name: "Donde.do",  brand: "donde.do",  url: "https://donde.do/negocios",   accent: "#F97316" },
  { id: "movicora",  name: "Movicora",  brand: "MOVICORA",  url: "https://movicora.com",        accent: "#06B6D4" },
];

// ---------- Contenido traducible ----------
export const content = {
  // =================== ESPAÑOL ===================
  es: {
    location: "República Dominicana · Operación remota global",
    tagline:  "Construimos sistemas. Operamos infraestructura. Aplicamos IA.",
    pitch:    "Casa de ingeniería de software. Construimos plataformas, agentes de IA y sistemas críticos para organizaciones que exigen control total sobre sus datos. Operación end-to-end, sin intermediarios.",

    nav: { home: "Inicio", services: "Servicios", projects: "Proyectos", about: "Nosotros", contact: "Contacto" },

    btn: {
      talk: "Conversemos",
      viewServices: "Ver servicios",
      viewDetail: "Ver detalle",
      viewFullPortfolio: "Ver portafolio completo",
      requestDemo: "Solicitar demo",
      send: "Enviar",
    },

    labels: {
      caribeai: "// Caribe AI",
      capabilities: "// Capacidades",
      portfolio: "// Portafolio",
      contact: "// Contacto",
      about: "// Nosotros",
      portfolioPlain: "Portafolio",
      sectors: "Sectores que atendemos",
      methodology: "Metodología",
      services: "Servicios",
      whyUs: "Por qué nosotros",
      mission: "Misión",
      vision: "Visión",
      whoWeAre: "Quiénes somos",
      teamBackground: "Trayectoria del equipo",
      teamBackgroundIntro: "Nuestro equipo ha desarrollado sistemas en producción para:",
    },

    home: {
      portfolioH2: "Algunos sistemas que hemos construido.",
      methodologyH2: "Cómo trabajamos.",
      servicesH2: "Lo que hacemos.",
      aboutH2: "La década que define quién controla la inteligencia.",
      ctaH2: "¿Tiene un proyecto en mente?",
      ctaP: "Conversemos sobre alcance, plazos y arquitectura. Respuesta en 24-48h hábiles.",
    },

    nosotros: {
      h1: "Nosotros.",
      intro: "Una casa de ingeniería que cree que la próxima década pertenece a quienes construyan — no a quienes alquilen.",

      whoWeAreP:
        "Caribe AI Systems es una casa de ingeniería de software con base en República Dominicana. Construimos plataformas, sistemas críticos e inteligencia artificial para organizaciones que entienden que el control de los datos es control del futuro. Operamos directo, sin agencias intermediarias, con responsabilidad de principio a fin.",

      missionP:
        "Devolver a las organizaciones de nuestra región la soberanía sobre sus datos y su inteligencia. Construir capacidad de IA propia, en infraestructura propia, libre de proveedores extranjeros que pueden cambiar reglas, precios o términos de un día a otro.",

      visionP:
        "La próxima década definirá quién controla la inteligencia que mueve a las organizaciones críticas de la región. Hoy esa inteligencia se construye y se alquila desde el extranjero. Trabajamos para que en 2030 las instituciones del Caribe y Latinoamérica operen su propia infraestructura de IA — con sus datos, su talento y bajo sus propias reglas.",
    },

    servicios: {
      h1: "Servicios.",
      intro: "Cada servicio listado es una capacidad operativa demostrada en producción.",
      ctaH2: "¿Tiene un proyecto que combina varias de estas capacidades?",
      ctaP: "La mayoría sí. Conversemos sobre cómo armarlo.",
    },

    proyectos: {
      h1: "Proyectos.",
      intro: "Sistemas reales en operación, diseñados y construidos por el equipo de Caribe AI.",
      demoH2: "¿Quiere ver un demo en vivo?",
      demoP: "Mostramos en sesión privada cualquier capacidad relevante para su proyecto.",
    },

    contacto: {
      h1: "Conversemos.",
      intro: "Atendemos directamente. Respuesta en 24-48h hábiles. Disponibles para reuniones presenciales en República Dominicana y remotas globalmente.",
      formH2: "Formulario",
      formIntro: "Describa brevemente su proyecto. Le respondemos por el canal que prefiera.",
      fields: {
        name: "Nombre",
        org: "Organización",
        email: "Email",
        phone: "WhatsApp / teléfono",
        message: "Sobre su proyecto",
      },
      rows: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", location: "Ubicación" },
      privacy: "Su información se trata confidencialmente. No compartimos con terceros.",
    },

    footer: {
      navigate: "Navegar",
      contact: "Contacto",
      availability: "Atención comercial: lun-vie 9:00-18:00 (AST). Operación de sistemas en producción: monitoreo continuo.",
      copy: "Todos los derechos reservados.",
    },

    services: [
      {
        number: "01", id: "plataformas",
        title: "Plataformas a medida",
        short: "Sistemas web, móviles y administrativos completos. End-to-end.",
        long: "Diseñamos, construimos y operamos plataformas completas: marketplaces, ERPs, portales, dashboards y backend services. Un solo equipo responsable de la cadena entera, desde la arquitectura hasta la operación en producción.",
        bullets: [
          "Frontend web, apps móviles y dashboards administrativos",
          "Arquitectura escalable diseñada para crecer sin reescribir",
          "Despliegue en la nube o en infraestructura propia del cliente",
          "Soporte y evolución continua",
        ],
      },
      {
        number: "02", id: "backend",
        title: "Backend, APIs e integraciones de alta escala",
        short: "Sistemas backend que sostienen operación empresarial crítica.",
        long: "Arquitectura y construcción de sistemas backend para operaciones de misión crítica. APIs de alto rendimiento, microservicios, capas de datos transaccionales, procesos batch y motores de integración entre sistemas heterogéneos. Stacks empresariales maduros con capacidad demostrada en producción.",
        bullets: [
          "Stacks empresariales: Java · Spring Boot · Python · FastAPI · Node.js · Laravel",
          "APIs REST y GraphQL de alto rendimiento (decenas de miles de req/s)",
          "Microservicios con observabilidad, trazabilidad y políticas de resiliencia",
          "Integraciones empresariales (ESB, colas de mensajería, ETL, batch nocturno)",
          "Capas de datos sobre PostgreSQL, Oracle, SQL Server, MongoDB",
          "Modernización de sistemas legacy sin disrupción operativa",
        ],
      },
      {
        number: "03", id: "ia-privada",
        title: "Inteligencia artificial privada",
        short: "Modelos de IA ejecutándose en su infraestructura. Sin costos por token. Datos soberanos.",
        long: "Implementamos capacidades de IA generativa que viven dentro del entorno del cliente. Sin enviar información a proveedores extranjeros, sin tarifas por consulta, sin límites de uso. Ideal para organizaciones donde la confidencialidad de los datos es prioridad.",
        bullets: [
          "Modelos de lenguaje de última generación, completamente privados",
          "Sin costo por consulta — uso ilimitado en su propia capacidad",
          "Sus datos nunca salen de su infraestructura",
          "Cumplimiento con requisitos de soberanía y seguridad",
        ],
      },
      {
        number: "04", id: "agentes",
        title: "Agentes y automatización con IA",
        short: "Sistemas autónomos que ejecutan tareas críticas de forma continua, sin supervisión constante.",
        long: "Construimos agentes que trabajan 24/7 sobre datos en tiempo real: monitorean, analizan, deciden y comunican resultados por los canales que su organización utiliza. Reducen hasta 90% del trabajo repetitivo de equipos operativos y entregan resultados consistentes.",
        bullets: [
          "Agentes autónomos sobre infraestructura dedicada",
          "Integración con email, WhatsApp, Telegram, dashboards internos",
          "Detección de patrones, alertas automatizadas y reportes ejecutivos",
          "Operación continua sin costo variable por uso",
        ],
      },
      {
        number: "05", id: "inteligencia",
        title: "Sistemas de inteligencia y monitoreo",
        short: "Análisis en tiempo real de datos masivos. Detección de eventos. Inteligencia accionable.",
        long: "Diseñamos sistemas que ingieren datos de múltiples fuentes — sensores, transacciones, comunicaciones, redes, APIs externas — los procesan en tiempo real y entregan inteligencia operativa: alertas, dashboards ejecutivos, análisis geoespacial y modelos predictivos.",
        bullets: [
          "Ingesta y procesamiento de datos en tiempo real",
          "Detección de anomalías, patrones y eventos críticos",
          "Visualizaciones geoespaciales y dashboards ejecutivos",
          "Alertas multicanal con políticas de escalamiento",
        ],
      },
      {
        number: "06", id: "movil",
        title: "Aplicaciones móviles operativas",
        short: "iOS y Android para equipos en campo, logística, gestión de personal y comunicaciones.",
        long: "Desarrollamos aplicaciones móviles para uso operativo crítico: equipos en campo, supervisores, recolección de datos, gestión de personal, comunicaciones internas. Enfoque en confiabilidad, modo offline, sincronización segura y distribución privada.",
        bullets: [
          "iOS y Android nativos y cross-platform",
          "Modo offline con sincronización diferida",
          "Geolocalización, captura de medios, notificaciones",
          "Distribución pública o privada (MDM corporativo)",
        ],
      },
      {
        number: "07", id: "infraestructura",
        title: "Infraestructura on-premise para IA",
        short: "Diseño y operación de capacidad de cómputo propia. Sin dependencia de la nube.",
        long: "Asesoramos e implementamos infraestructura de cómputo para IA dentro del entorno del cliente. Desde la selección de hardware hasta la operación 24/7, eliminando el gasto recurrente en proveedores externos y manteniendo soberanía total sobre los datos.",
        bullets: [
          "Especificación, procurement e instalación de hardware",
          "Despliegue de modelos en producción",
          "Monitoreo, alertas y operación continua",
          "Capacitación al equipo técnico del cliente",
        ],
      },
      {
        number: "08", id: "capacitacion",
        title: "Capacitación, talleres y conferencias",
        short: "Formación de equipos técnicos y ejecutivos en IA aplicada y arquitectura moderna.",
        long: "Diseñamos e impartimos programas de formación adaptados al nivel del equipo: talleres in-company para equipos técnicos, conferencias para audiencias ejecutivas, y mentoría continua para líderes técnicos que adoptan IA por primera vez.",
        bullets: [
          "Talleres in-company para equipos de desarrollo",
          "Conferencias y keynotes para eventos corporativos",
          "Mentoría a líderes técnicos y arquitectos",
          "Material en español e inglés",
        ],
      },
    ] satisfies Service[],

    // Mismo orden que projectsBase
    projects: [
      { tagline: "Marketplace B2B para construcción",                     sector: "Construcción · República Dominicana" },
      { tagline: "Plataforma gastronómica con reservas",                  sector: "Hospitalidad · República Dominicana" },
      { tagline: "Plataforma SaaS de generación AI de imagen y video",    sector: "IA generativa · SaaS" },
    ],

    sectors: [
      "Tecnología", "Hospitalidad", "Construcción", "Finanzas",
      "Salud", "Gobierno", "Seguridad pública", "Defensa",
    ],

    credentials: [
      { value: "24/7",  label: "operación crítica continua" },
      { value: "100%",  label: "datos del cliente bajo su control" },
      { value: "LATAM", label: "y operación remota global" },
    ],

    methodology: [
      { step: "01", title: "Descubrimiento", text: "Entendemos el dominio, el problema, las restricciones y los criterios de éxito. Documento de alcance firmado antes de codificar." },
      { step: "02", title: "Arquitectura",   text: "Diseño técnico revisado con el cliente: stack, integraciones, seguridad, despliegue y criterios de aceptación." },
      { step: "03", title: "Construcción",   text: "Entregas iterativas con demos semanales. Código auditable, pruebas automatizadas, documentación técnica." },
      { step: "04", title: "Operación",      text: "Despliegue en producción, monitoreo continuo, soporte y evolución. Transferencia de conocimiento si el cliente lo requiere." },
    ],

    valueProps: [
      { title: "Sin costo por tokens", text: "Sus modelos de IA funcionan en su propia capacidad. Uso ilimitado, costo fijo." },
      { title: "Datos soberanos",      text: "La información sensible nunca sale de su entorno. Cero dependencia de nube extranjera." },
      { title: "Trato directo",        text: "Sin agencias intermediarias. Un equipo responsable de la cadena completa." },
    ],
  },

  // =================== ENGLISH ===================
  en: {
    location: "Dominican Republic · Global remote operations",
    tagline:  "We build systems. We run infrastructure. We apply AI.",
    pitch:    "Software engineering firm. We build platforms, AI agents, and critical systems for organizations that demand full control over their data. End-to-end delivery, no intermediaries.",

    nav: { home: "Home", services: "Services", projects: "Projects", about: "About", contact: "Contact" },

    btn: {
      talk: "Let's talk",
      viewServices: "View services",
      viewDetail: "View details",
      viewFullPortfolio: "View full portfolio",
      requestDemo: "Request a demo",
      send: "Send",
    },

    labels: {
      caribeai: "// Caribe AI",
      capabilities: "// Capabilities",
      portfolio: "// Portfolio",
      contact: "// Contact",
      about: "// About",
      portfolioPlain: "Portfolio",
      sectors: "Industries we serve",
      methodology: "Methodology",
      services: "Services",
      whyUs: "Why us",
      mission: "Mission",
      vision: "Vision",
      whoWeAre: "Who we are",
      teamBackground: "Team background",
      teamBackgroundIntro: "Our team has built production systems for:",
    },

    home: {
      portfolioH2: "Some systems we've built.",
      methodologyH2: "How we work.",
      servicesH2: "What we do.",
      aboutH2: "The decade that defines who controls intelligence.",
      ctaH2: "Have a project in mind?",
      ctaP: "Let's discuss scope, timeline and architecture. Reply within 24-48 business hours.",
    },

    nosotros: {
      h1: "About us.",
      intro: "An engineering firm that believes the next decade belongs to those who build — not to those who rent.",

      whoWeAreP:
        "Caribe AI Systems is a software engineering firm based in the Dominican Republic. We build platforms, critical systems and artificial intelligence for organizations that understand that control of data is control of the future. We work directly, without intermediary agencies, with end-to-end accountability.",

      missionP:
        "To return to the organizations of our region sovereignty over their data and their intelligence. To build AI capability on our own infrastructure, free from foreign providers who can change rules, prices, or terms overnight.",

      visionP:
        "The coming decade will define who controls the intelligence that powers the region's critical institutions. Today that intelligence is built and rented from abroad. We work so that by 2030, institutions across the Caribbean and Latin America operate their own AI infrastructure — with their data, their talent, and under their own rules.",
    },

    servicios: {
      h1: "Services.",
      intro: "Every service listed is a proven operational capability in production.",
      ctaH2: "Does your project combine several of these capabilities?",
      ctaP: "Most do. Let's discuss how to put it together.",
    },

    proyectos: {
      h1: "Projects.",
      intro: "Real systems in operation, designed and built by the Caribe AI team.",
      demoH2: "Want to see a live demo?",
      demoP: "We demonstrate any capability relevant to your project in a private session.",
    },

    contacto: {
      h1: "Let's talk.",
      intro: "We respond directly. Reply within 24-48 business hours. Available for in-person meetings in the Dominican Republic and remote sessions globally.",
      formH2: "Form",
      formIntro: "Briefly describe your project. We'll respond through your preferred channel.",
      fields: {
        name: "Name",
        org: "Organization",
        email: "Email",
        phone: "WhatsApp / phone",
        message: "About your project",
      },
      rows: { email: "Email", whatsapp: "WhatsApp", linkedin: "LinkedIn", location: "Location" },
      privacy: "Your information is treated confidentially. We don't share with third parties.",
    },

    footer: {
      navigate: "Navigate",
      contact: "Contact",
      availability: "Business hours: Mon-Fri 9:00-18:00 (AST). Production systems: continuous monitoring.",
      copy: "All rights reserved.",
    },

    services: [
      {
        number: "01", id: "plataformas",
        title: "Custom platforms",
        short: "Complete web, mobile and admin systems. End-to-end.",
        long: "We design, build and operate complete platforms: marketplaces, ERPs, portals, dashboards and backend services. A single team responsible for the full chain, from architecture to production operations.",
        bullets: [
          "Web frontend, mobile apps and administrative dashboards",
          "Scalable architecture designed to grow without rewrites",
          "Deployment in the cloud or on the client's own infrastructure",
          "Ongoing support and evolution",
        ],
      },
      {
        number: "02", id: "backend",
        title: "Backend, APIs and large-scale integrations",
        short: "Backend systems that sustain critical enterprise operations.",
        long: "Architecture and construction of backend systems for mission-critical operations. High-performance APIs, microservices, transactional data layers, batch processes and integration engines across heterogeneous systems. Mature enterprise stacks with proven production capability.",
        bullets: [
          "Enterprise stacks: Java · Spring Boot · Python · FastAPI · Node.js · Laravel",
          "High-performance REST and GraphQL APIs (tens of thousands of req/s)",
          "Microservices with observability, tracing and resilience policies",
          "Enterprise integrations (ESB, message queues, ETL, nightly batch)",
          "Data layers on PostgreSQL, Oracle, SQL Server, MongoDB",
          "Legacy system modernization without operational disruption",
        ],
      },
      {
        number: "03", id: "ia-privada",
        title: "Private artificial intelligence",
        short: "AI models running on your infrastructure. Zero token costs. Sovereign data.",
        long: "We deploy generative AI capabilities that live within the client's environment. No data sent to foreign providers, no per-query fees, no usage limits. Ideal for organizations where data confidentiality is a priority.",
        bullets: [
          "Latest-generation language models, fully private",
          "No cost per query — unlimited use on your own capacity",
          "Your data never leaves your infrastructure",
          "Compliance with sovereignty and security requirements",
        ],
      },
      {
        number: "04", id: "agentes",
        title: "AI agents and automation",
        short: "Autonomous systems that execute critical tasks continuously, without constant supervision.",
        long: "We build agents that work 24/7 on real-time data: monitoring, analyzing, deciding and communicating results through the channels your organization uses. They reduce up to 90% of repetitive work in operations teams and deliver consistent results.",
        bullets: [
          "Autonomous agents on dedicated infrastructure",
          "Integration with email, WhatsApp, Telegram, internal dashboards",
          "Pattern detection, automated alerts and executive reports",
          "Continuous operation with no variable usage costs",
        ],
      },
      {
        number: "05", id: "inteligencia",
        title: "Intelligence and monitoring systems",
        short: "Real-time analysis of massive data. Event detection. Actionable intelligence.",
        long: "We design systems that ingest data from multiple sources — sensors, transactions, communications, networks, external APIs — process them in real time and deliver operational intelligence: alerts, executive dashboards, geospatial analysis and predictive models.",
        bullets: [
          "Real-time data ingestion and processing",
          "Anomaly, pattern and critical event detection",
          "Geospatial visualizations and executive dashboards",
          "Multi-channel alerts with escalation policies",
        ],
      },
      {
        number: "06", id: "movil",
        title: "Operational mobile applications",
        short: "iOS and Android for field teams, logistics, personnel management and communications.",
        long: "We develop mobile applications for critical operational use: field teams, supervisors, data collection, personnel management, internal communications. Focused on reliability, offline mode, secure synchronization and private distribution.",
        bullets: [
          "Native iOS and Android, plus cross-platform",
          "Offline mode with deferred synchronization",
          "Geolocation, media capture, notifications",
          "Public or private distribution (corporate MDM)",
        ],
      },
      {
        number: "07", id: "infraestructura",
        title: "On-premise AI infrastructure",
        short: "Design and operation of your own compute capacity. No cloud dependency.",
        long: "We advise and implement compute infrastructure for AI within the client's environment. From hardware selection to 24/7 operations, eliminating recurring spend on external providers and maintaining full sovereignty over your data.",
        bullets: [
          "Hardware specification, procurement and installation",
          "Model deployment in production",
          "Monitoring, alerts and continuous operation",
          "Training for the client's technical team",
        ],
      },
      {
        number: "08", id: "capacitacion",
        title: "Training, workshops and conferences",
        short: "Training for technical and executive teams in applied AI and modern architecture.",
        long: "We design and deliver training programs tailored to your team's level: in-company workshops for technical teams, conferences for executive audiences, and ongoing mentorship for technical leaders adopting AI for the first time.",
        bullets: [
          "In-company workshops for development teams",
          "Conferences and keynotes for corporate events",
          "Mentorship for technical leaders and architects",
          "Materials in Spanish and English",
        ],
      },
    ] satisfies Service[],

    projects: [
      { tagline: "B2B construction marketplace",                     sector: "Construction · Dominican Republic" },
      { tagline: "Gastronomic platform with reservations",           sector: "Hospitality · Dominican Republic" },
      { tagline: "SaaS platform for AI image and video generation",  sector: "Generative AI · SaaS" },
    ],

    sectors: [
      "Technology", "Hospitality", "Construction", "Finance",
      "Healthcare", "Government", "Public Safety", "Defense",
    ],

    credentials: [
      { value: "24/7",  label: "mission-critical operations" },
      { value: "100%",  label: "client data under their control" },
      { value: "LATAM", label: "and global remote operations" },
    ],

    methodology: [
      { step: "01", title: "Discovery",    text: "We understand the domain, problem, constraints and success criteria. Scope document signed before any code is written." },
      { step: "02", title: "Architecture", text: "Technical design reviewed with the client: stack, integrations, security, deployment and acceptance criteria." },
      { step: "03", title: "Build",        text: "Iterative deliveries with weekly demos. Auditable code, automated testing, technical documentation." },
      { step: "04", title: "Operations",   text: "Production deployment, continuous monitoring, support and evolution. Knowledge transfer when the client requires it." },
    ],

    valueProps: [
      { title: "Zero token costs",   text: "Your AI models run on your own capacity. Unlimited usage, fixed cost." },
      { title: "Sovereign data",     text: "Sensitive information never leaves your environment. Zero foreign cloud dependency." },
      { title: "Direct engagement",  text: "No intermediary agencies. A single team accountable for the full chain." },
    ],
  },
} as const;

// ---------- Helpers ----------

/** Merge translatable parts of a project with non-translatable base. */
export function getProjects(lang: Lang): Project[] {
  return projectsBase.map((p, i) => ({
    ...p,
    tagline: content[lang].projects[i].tagline,
    sector:  content[lang].projects[i].sector,
  }));
}
