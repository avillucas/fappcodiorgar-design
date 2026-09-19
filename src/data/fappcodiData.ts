import { SupportItem, ArtisanProduct, JobPosting, ProvinceCUDInfo, PressItem } from '../types';

export const INSTITUTIONAL_INFO = {
  fullName: "Fundación Argentina para las Personas con Discapacidad",
  shortName: "FAPPCODI",
  founder: "Silvio Adrián Catania",
  foundedYear: 2000,
  motto: "“Me convertí en cosas inesperadas”",
  legalRegistration: {
    matricula: "21602",
    body: "Dirección Provincial de Personas Jurídicas de Buenos Aires",
    scope: "Con autorización para abrir filiales de la institución en todo el territorio Argentino."
  },
  registries: [
    {
      name: "CENOC",
      description: "Registro Nacional de Organizaciones de la Comunidad - Centro Nacional de Organizaciones de la Comunidad dependiente del Ministerio de Desarrollo de La Nación."
    },
    {
      name: "Dirección Nacional de Juventud",
      description: "Registro Nacional de Organizaciones No Gubernamentales Juveniles dependiente de la Dirección Nacional de Juventud."
    },
    {
      name: "REGICE",
      description: "Registro Nacional de Instituciones de Capacitación y Empleo dependiente del Ministerio de Trabajo de la Nación."
    },
    {
      name: "Subsecretaría de ONG Bs. As.",
      description: "Registro de ONG dependiente de la Subsecretaría de ONG de la Provincia de Buenos Aires."
    }
  ],
  quoteFounder: "Poco después de quedarse ciego, Silvio Catania conoció a Domingo Grimberg, un médico que valoró todo su potencial, le abrió las puertas al mundo del trabajo y lo apoyó a pesar de las resistencias. Lo que el hombre no supo entonces es que su jefe había llegado, incluso, hasta instancias superiores para quejarse por tener que sumarlo a su equipo. La designación del nuevo empleado había sido impulsada por Domingo Grimberg, el secretario de Salud del municipio, quien lo había conocido unos años antes y no tenía dudas de que Silvio cumplía de sobra con los requisitos para ese puesto. Por eso, tras escuchar las quejas del jefe se limitó a responderle: 'Primero conocelo y después hablamos'.",
  missionText: "Fundación Argentina para las Personas con Discapacidad, Organismo no Gubernamental sin fines de lucro, aplica sus esfuerzos a emprendimientos en las personas con discapacidad en general. Las áreas en que se desarrolla abarcan: la salud, la educación, el trabajo y la vivienda. Todo esto fundamental para la evolución y crecimiento de todos los individuos. Los pilares donde se apoyan los objetivos de nuestro trabajo son tres: la equiparación de oportunidades, la integración y la normalización, todos ellos principios fundamentales que constan en documentos internacionales. Los desarrollos y los emprendimientos conllevan un gran esfuerzo y es con el apoyo de todos que pueden lograrse.",
  phone: "+54 11 5562-4202",
  address: "Hipólito Yrigoyen 3863, Lanús, Provincia de Buenos Aires, Argentina",
  email: "contacto@fappcodi.org.ar",
  donationAlias: "FAPPCODI.SOLIDARIA.ARG",
  donationCBU: "0140023601502302160201",
  cuit: "30-70754821-4"
};

export const PILLARS = [
  {
    title: "Equiparación de Oportunidades",
    description: "Garantizar que el sistema general de la sociedad (educación, salud, trabajo) sea accesible y adaptado para todos los individuos sin distinción.",
    icon: "Scale"
  },
  {
    title: "Integración Plena",
    description: "Fomentar la participación activa de las personas con discapacidad en todos los ámbitos sociales, productivos, recreativos y comunitarios.",
    icon: "Users"
  },
  {
    title: "Normalización Social",
    description: "Promover el derecho a condiciones de vida cotidianas tan cercanas como sea posible a las pautas y hábitos de la comunidad general.",
    icon: "HeartHandshake"
  }
];

export const AREAS = [
  {
    name: "Salud",
    desc: "Acompañamiento en rehabilitación integral, cobertura del 100% en prestaciones, equipamiento ortopédico y salud mental.",
    icon: "Activity"
  },
  {
    name: "Educación",
    desc: "Articulación con escuelas especiales y Centros de Formación Integral (CFI), prácticas profesionalizantes y certificación COPRET.",
    icon: "GraduationCap"
  },
  {
    name: "Trabajo",
    desc: "Inserción real y sostenida a través del Inclukiosco, Expendedoras Inclusivas y cumplimiento del cupo laboral del 4% (Ley 22.431).",
    icon: "Briefcase"
  },
  {
    name: "Vivienda & Accesibilidad",
    desc: "Asesoramiento en hábitat accesible, adecuaciones edilicias y eliminación de barreras físicas y actitudinales.",
    icon: "Home"
  }
];

export const SUPPORT_ITEMS: SupportItem[] = [
  {
    id: "silla-estandar",
    name: "Silla de Ruedas Plegable Estándar",
    category: "Sillas de Ruedas",
    description: "Chasis reforzado de acero pintado epoxi, apoyabrazos rebatibles, ruedas neumáticas de autopropulsión. Ideal para traslados y uso cotidiano.",
    status: "Disponible para préstamo",
    availableCount: 4,
    condition: "Excelente",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "baston-blanco",
    name: "Bastón Blanco Plegable para Personas Ciegas",
    category: "Bastones y Guías",
    description: "Construcción en aluminio ultraliviano de 4 y 5 tramos con puntera rodante de nylon de alto impacto y grip ergonómico antideslizante con cinta reflectiva.",
    status: "Disponible para préstamo",
    availableCount: 12,
    condition: "Reacondicionado a nuevo",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "baston-verde",
    name: "Bastón Verde para Disminución Visual (Ley 25.682)",
    category: "Bastones y Guías",
    description: "Elemento oficial de orientación e identificación para personas con baja visión, telescópico, con puntera esférica y señalizador sonoro táctil.",
    status: "Disponible para préstamo",
    availableCount: 8,
    condition: "Excelente",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "andador-ortopedico",
    name: "Andador Ortopédico de Doble Función con Ruedas",
    category: "Muletas y Andadores",
    description: "Estructura de aluminio anodizado regulable en altura, asiento de descanso acolchado, canasto portaobjetos y frenos manuales en manillares.",
    status: "Disponible para préstamo",
    availableCount: 3,
    condition: "Muy bueno",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "muletas-canadienses",
    name: "Par de Muletas Canadienses Regulables",
    category: "Muletas y Andadores",
    description: "Apoyo antebraquial ergonómico anatómico con regulación de altura dual y regatones de caucho de alta adherencia antideslizante.",
    status: "Disponible para préstamo",
    availableCount: 6,
    condition: "Reacondicionado a nuevo",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "almohadon-antiescaras",
    name: "Almohadón Flotante Anti-escaras Celular",
    category: "Accesorios Posturales",
    description: "Almohadón de celdas de aire interconectadas para descarga de presiones isquiáticas y prevención de úlceras por presión con funda impermeable lavable.",
    status: "Disponible para préstamo",
    availableCount: 5,
    condition: "Excelente",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600"
  }
];

export const ARTISAN_PRODUCTS: ArtisanProduct[] = [
  {
    id: "tote-fappcodi",
    title: "Bolsa Ecológica de Lienzo 'Manos que Inspiran'",
    artisanGroup: "Taller Protegido FAPPCODI",
    category: "Textil & Bolsas",
    price: 6800,
    description: "Bolsa de algodón 100% natural estampada artesanalmente en serigrafía con tintas al agua por jóvenes del taller de inclusión textil.",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600",
    inStock: true
  },
  {
    id: "cuaderno-braille",
    title: "Cuaderno Artesanal Reciclado con Portada Háptica",
    artisanGroup: "Emprendimiento Inclukiosco",
    category: "Papelería & Encuadernación",
    price: 5200,
    description: "Cuaderno cosido a mano con hojas de papel reciclado, tapa dura con grabado háptico en relieve y leyenda en alfabeto Braille.",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=600",
    inStock: true
  },
  {
    id: "vela-soja",
    title: "Vela Aromática de Soja en Cuenco Cerámico",
    artisanGroup: "Taller Manos Creativas",
    category: "Cerámica & Velas",
    price: 7500,
    description: "Cera de soja 100% vegetal biodegradable con esencias naturales de lavanda y vainilla en vasija modelada a mano en torno alfarero.",
    image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80&w=600",
    inStock: true
  },
  {
    id: "taza-fappcodi",
    title: "Taza de Cerámica Esmaltada FAPPCODI",
    artisanGroup: "Taller de Alfarería Inclusiva",
    category: "Cerámica & Velas",
    price: 6000,
    description: "Taza de cerámica horneada a alta temperatura con el lema institucional “Me convertí en cosas inesperadas” grabado en relieve.",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600",
    inStock: true
  },
  {
    id: "delantal-cocina",
    title: "Delantal de Barista / Kioskero Profesional Inclukiosco",
    artisanGroup: "Confección Textil Adaptada",
    category: "Textil & Bolsas",
    price: 9800,
    description: "Gabardina pesada de primera calidad con bolsillos divididos codificados por textura para herramientas de trabajo y agarre rápido.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=600",
    inStock: true
  },
  {
    id: "remera-solidaria",
    title: "Remera de Algodón FAPPCODI 'Equiparación e Inclusión'",
    artisanGroup: "Merchandising Institucional",
    category: "Merchandising FAPPCODI",
    price: 11500,
    description: "Remera unisex de algodón peinado con estampado de alto contraste y código QR táctil que conduce a la guía accesible de derechos.",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
    inStock: true
  }
];

export const JOB_POSTINGS: JobPosting[] = [
  {
    id: "job-1",
    title: "Atención al Cliente y Operación de Kiosco / Cafetería",
    company: "Programa Inclukiosco FAPPCODI",
    location: "Lanús, Gran Buenos Aires",
    workMode: "Presencial",
    area: "Comercio & Gastronomía",
    description: "Pasantía profesionalizante de 120 hs con tutoría de Maestro de Inclusión Laboral (MIL). Tareas de caja registradora, reposición clasificada por colores y preparación de café.",
    adaptations: ["Acompañamiento MIL permanente", "Caja táctil y codificación cromática", "Jornada reducida (4 hs)"],
    publishedDate: "Septiembre 2026"
  },
  {
    id: "job-2",
    title: "Operador de Máquinas Expendedoras Corporativas",
    company: "Programa Expendedoras Inclusivas",
    location: "CABA y Zona Sur",
    workMode: "Presencial",
    area: "Logística y Mantenimiento",
    description: "Reposición periódica de snacks, control de stock y limpieza de equipos de autoservicio instalados en empresas asociadas a FAPPCODI.",
    adaptations: ["Rutas de traslado accesibles", "Guías con lector de código de barras parlante", "Incentivo económico formal"],
    publishedDate: "Septiembre 2026"
  },
  {
    id: "job-3",
    title: "Asistente Administrativo y Carga de Datos",
    company: "Empresa de Servicios Tecnológicos (Alianza FAPPCODI)",
    location: "Remoto / Híbrido",
    workMode: "Remoto",
    area: "Administración",
    description: "Gestión de planillas digitales, atención por correo y archivo digital. Adecuado para usuarios de lectores de pantalla (NVDA, JAWS) o movilidad reducida.",
    adaptations: ["100% compatible con lectores de pantalla", "Horarios flexibles", "Equipo adaptado provisto"],
    publishedDate: "Septiembre 2026"
  }
];

export const NATIONAL_LAWS = [
  {
    code: "Ley 22.431",
    name: "Sistema de Protección Integral de los Discapacitados",
    summary: "Instituye el cupo laboral mínimo del 4% en el sector público nacional, transporte gratuito, franquicias para automotores y cobertura médico-asistencial.",
    category: "Marco General y Cupo Laboral"
  },
  {
    code: "Ley 24.314",
    name: "Accesibilidad de Personas con Movilidad Reducida",
    summary: "Modificatoria de la Ley 22.431. Establece la obligatoriedad de suprimir barreras físicas en los ámbitos urbanos, arquitectónicos y del transporte público.",
    category: "Accesibilidad Física"
  },
  {
    code: "Ley 24.901",
    name: "Sistema Único de Prestaciones Básicas de Habilitación y Rehabilitación",
    summary: "Garantiza la cobertura obligatoria e integral del 100% a cargo de Obras Sociales y Empresas de Medicina Prepaga de todas las prestaciones médicas, educativas y de apoyo.",
    category: "Salud y Prestaciones"
  },
  {
    code: "Ley 26.653",
    name: "Accesibilidad de la Información en las Páginas Web",
    summary: "Dispone que los tres poderes del Estado, organismos descentralizados y empresas de servicios públicos deben cumplir con pautas internacionales de accesibilidad digital.",
    category: "Accesibilidad Digital"
  },
  {
    code: "Ley 27.269",
    name: "Certificado Único de Discapacidad (CUD)",
    summary: "Regula el documento público de validez nacional que acredita la discapacidad y habilita el ejercicio directo de todos los derechos y exenciones del Estado.",
    category: "Certificación y Trámites"
  },
  {
    code: "Ley 26.858",
    name: "Acompañamiento por Perro Guía o de Asistencia",
    summary: "Asegura el derecho al acceso, deambulación y permanencia en cualquier lugar público, privado de acceso público y en todos los medios de transporte.",
    category: "Derechos de Tránsito"
  },
  {
    code: "Ley 27.053",
    name: "Día Nacional de Concienciación sobre el Autismo",
    summary: "Promueve acciones de sensibilización social, detección temprana y adecuaciones pedagógicas en el espectro autista.",
    category: "Sensibilización"
  },
  {
    code: "Ley 26.657",
    name: "Derecho a la Protección de la Salud Mental",
    summary: "Reconoce a la salud mental como un proceso determinado por componentes históricos, socioeconómicos, culturales y biológicos, priorizando la atención comunitaria.",
    category: "Salud Mental"
  },
  {
    code: "Ley 26.689",
    name: "Cuidado Integral de Enfermedades Poco Frecuentes (EPOF)",
    summary: "Garantiza el acceso a diagnóstico, tratamiento, medicación de alto costo y cobertura integral para personas con patologías de baja prevalencia.",
    category: "Salud Integral"
  },
  {
    code: "Ley 26.522",
    name: "Servicios de Comunicación Audiovisual (Art. 66)",
    summary: "Exige subtitulado oculto (closed caption), lenguaje de señas y audiodescripción en emisiones televisivas.",
    category: "Comunicación Inclusiva"
  }
];

export const PROVINCES_CUD: ProvinceCUDInfo[] = [
  {
    id: "buenos-aires",
    name: "Buenos Aires (Provincia)",
    region: "Centro",
    organism: "Dirección de Promoción de Derechos para Personas con Discapacidad - Ministerio de Salud PBA",
    address: "Calle 51 Nº 1120 e/ 17 y 18, La Plata / Centro Evaluador Lanús (Hipólito Yrigoyen 3863)",
    phone: "0800-222-0500 / +54 11 5562-4202",
    email: "discapacidadpba@ms.gba.gov.ar",
    website: "https://www.gba.gob.ar/saludprovincia/discapacidad",
    instructions: "Turnos a través de las Juntas Evaluadoras municipales y hospitales zonales. El trámite es 100% gratuito."
  },
  {
    id: "caba",
    name: "Ciudad Autónoma de Buenos Aires (COPIDIS)",
    region: "Centro",
    organism: "Comisión para la Plena Participación e Inclusión de las Personas con Discapacidad (COPIDIS)",
    address: "Roque Sáenz Peña 570, Piso 1, CABA",
    phone: "0800-999-2727 / +54 11 5030-9740",
    email: "copidis@buenosaires.gob.ar",
    website: "https://buenosaires.gob.ar/copidis",
    instructions: "Gestión de turno por la plataforma oficial MiBA o sedes comunales. Disponible CUD digital y presencial."
  },
  {
    id: "cordoba",
    name: "Córdoba",
    region: "Centro",
    organism: "Subsecretaría de Discapacidad, Rehabilitación e Inclusión",
    address: "Rosario de Santa Fe 374, Ciudad de Córdoba",
    phone: "(0351) 434-2437 / 38",
    email: "subsecretariadiscapacidadcba@gmail.com",
    website: "https://www.cba.gov.ar",
    instructions: "Turnero provincial de Ciudadano Digital (CiDi) y juntas descentralizadas en hospitales provinciales."
  },
  {
    id: "santa-fe",
    name: "Santa Fe",
    region: "Centro",
    organism: "Subsecretaría de Inclusión para Personas con Discapacidad",
    address: "1º de Mayo 2198, Ciudad de Santa Fe / 9 de Julio 325, Rosario",
    phone: "(0342) 457-2475 / (0341) 472-1165",
    email: "discapacidadsf@santafe.gov.ar",
    website: "https://www.santafe.gob.ar",
    instructions: "Atención en centros territoriales de Santa Fe, Rosario, Venado Tuerto, Rafaela y Reconquista."
  },
  {
    id: "mendoza",
    name: "Mendoza",
    region: "Cuyo",
    organism: "Dirección de Atención a la Persona con Discapacidad",
    address: "Pedro Molina 565, Ciudad de Mendoza",
    phone: "(0261) 425-3756 / 429-5298",
    email: "dapd@mendoza.gov.ar",
    website: "https://www.mendoza.gov.ar",
    instructions: "Solicitud de turno a través del sistema Ticket Digital Mendoza y Juntas Evaluadoras departamentales."
  },
  {
    id: "tucuman",
    name: "Tucumán",
    region: "NOA",
    organism: "Dirección de Discapacidad del Sistema Provincial de Salud (SIPROSA)",
    address: "Las Piedras 530, San Miguel de Tucumán",
    phone: "(0381) 452-6291",
    email: "discapacidad.tucuman@msptucuman.gov.ar",
    website: "http://msptucuman.gov.ar",
    instructions: "Trámite presencial con turno asignado en el Hospital Avellaneda y Centro de Salud Zenón Santillán."
  },
  {
    id: "entre-rios",
    name: "Entre Ríos",
    region: "Centro",
    organism: "Instituto Provincial de Discapacidad (IPRODI)",
    address: "Gregoria Matorras de San Martín 861, Paraná",
    phone: "(0343) 420-7989 / 420-7990",
    email: "iprodi@entrerios.gov.ar",
    website: "https://www.entrerios.gov.ar/iprodi",
    instructions: "Red de juntas evaluadoras itinerantes y fijas en los 17 departamentos provinciales."
  },
  {
    id: "salta",
    name: "Salta",
    region: "NOA",
    organism: "Secretaría de Discapacidad - Ministerio de Salud Pública",
    address: "Sarmiento 460, Salta Capital",
    phone: "(0387) 431-0031",
    email: "discapacidadsalta@salta.gov.ar",
    website: "https://www.salta.gob.ar",
    instructions: "Atención en Centro de Rehabilitación Dr. Oñativia y juntas del interior salteño."
  },
  {
    id: "misiones",
    name: "Misiones",
    region: "NEA",
    organism: "Consejo Provincial de Discapacidad",
    address: "Félix de Azara 1424, Posadas",
    phone: "(0376) 444-7798",
    email: "discapacidad@misiones.gov.ar",
    website: "https://salud.misiones.gob.ar",
    instructions: "Juntas evaluadoras en Hospital Madariaga y centros zonales de Eldorado, Oberá y Puerto Iguazú."
  },
  {
    id: "chaco",
    name: "Chaco",
    region: "NEA",
    organism: "Instituto Provincial para la Inclusión de las Personas con Discapacidad (IPRODICH)",
    address: "Dónovan 63, Resistencia",
    phone: "(0362) 457-3006 / 0800-555-4776",
    email: "iprodich@chaco.gov.ar",
    website: "https://iprodich.chaco.gob.ar",
    instructions: "Gestión digital y presencial para tramitar y renovar CUD en toda la provincia."
  },
  {
    id: "rio-negro",
    name: "Río Negro",
    region: "Patagonia",
    organism: "Consejo Provincial para las Personas con Discapacidad",
    address: "Belgrano 554, Viedma",
    phone: "(02920) 424-697",
    email: "discapacidad@desarrollohumano.rionegro.gov.ar",
    website: "https://rionegro.gov.ar",
    instructions: "Juntas evaluadoras activas en Viedma, Bariloche, General Roca y Cipolletti."
  },
  {
    id: "neuquen",
    name: "Neuquén",
    region: "Patagonia",
    organism: "Subsecretaría de Discapacidad - Ministerio de Desarrollo Social",
    address: "Perito Moreno 334, Neuquén Capital",
    phone: "(0299) 442-2936",
    email: "subsecretariadiscapacidadnqn@gmail.com",
    website: "https://www.neuquen.gov.ar",
    instructions: "Turnero provincial y coordinación en centros de salud de toda la cuenca y cordillera."
  }
];

export const PRESS_ARTICLES: PressItem[] = [
  {
    id: "silvio-catania-entrevista",
    title: "Silvio Catania: A los 21 años se quedó ciego sin explicación y desde ese día no paró de capacitarse",
    media: "Entrevista Especial de Prensa",
    date: "Registro de Prensa FAPPCODI",
    category: "Entrevista",
    excerpt: "“Me convertí en cosas inesperadas”. El fundador de FAPPCODI relata su camino de superación, el apoyo del Dr. Domingo Grimberg y su incansable lucha por abrir puertas a otros.",
    fullText: "Poco después de quedarse ciego a los 21 años sin explicación médica aparente, Silvio Catania conoció a Domingo Grimberg, un médico que valoró todo su potencial, le abrió las puertas al mundo del trabajo y lo apoyó a pesar de las resistencias. Lo que el hombre no supo entonces es que su jefe había llegado, incluso, hasta instancias superiores para quejarse por tener que sumarlo a su equipo. La designación del nuevo empleado había sido impulsada por Domingo Grimberg, el secretario de Salud del municipio, quien lo había conocido unos años antes y no tenía dudas de que Silvio cumplía de sobra con los requisitos para ese puesto. Por eso, tras escuchar las quejas del jefe se limitó a responderle: 'Primero conocelo y después hablamos'. Desde ese momento, Silvio convirtió su experiencia en una causa colectiva fundando FAPPCODI en el año 2000.",
    highlightQuote: "“Primero conocelo y después hablamos” — Dr. Domingo Grimberg a quienes resistían contratar a una persona ciega."
  },
  {
    id: "inclukiosco-lanus-inauguracion",
    title: "Inclukiosco: Un local atendido por personas con discapacidad en el predio de la Municipalidad de Lanús",
    media: "Diario Comunitario & Regional",
    date: "Septiembre",
    category: "Inclukiosco",
    excerpt: "Favorece la inserción social y laboral, una deuda del Estado. Funciona en Hipólito Yrigoyen al 3863 y fue edificado con ladrillos sustentables de plástico reciclado.",
    fullText: "La Fundación Argentina para Personas con Discapacidad (FAPPCODI) supo encontrar en la inmensidad del predio de la Municipalidad de Lanús el lugar indicado para comenzar uno de sus más ambiciosos proyectos en favor de la comunidad: el «Inclukiosco», un kiosco atendido por personas con discapacidad, pensado como un espacio profesionalizante para los chicos de escuelas especiales y del Centro de Formación Integral (CFI) del partido.\n\nEl local, ubicado en Hipólito Yrigoyen al 3863, fue oficialmente inaugurado la última semana de septiembre. Silvio Catania viene gestando esta idea debido a una preocupación que él padece en carne propia: la dificultosa inserción laboral. 'Yo tuve la oportunidad y quiero que los demás también la tengan', asegura.",
    highlightQuote: "“Yo tuve la oportunidad y quiero que los demás también la tengan. Desde el lugar que estoy hoy trato de hacer lo más que puedo.” — Silvio Catania."
  },
  {
    id: "ladrillos-rasti",
    title: "Construcción sustentable con ladrillos de polipropileno: 'Como jugar a los Rastis de chiquito'",
    media: "Suplemento Innovación & Medio Ambiente",
    date: "Octubre",
    category: "Inclukiosco",
    excerpt: "Silvio Catania levantó él mismo las paredes del Inclukiosco con ladrillos reciclados encastrables que le permitieron trabajar de forma autónoma siendo ciego.",
    fullText: "Con el proyecto aprobado a través del Concejo Deliberante de Lanús, Silvio se puso a trabajar en la construcción del kiosco. No solo logró edificar él mismo las paredes, sino que lo hizo de manera sustentable, con ladrillos reciclados hechos de polipropileno. Este sistema es el único que le permite llevar adelante la construcción debido a su condición de persona ciega, además de resultarle divertido y nostálgico en partes iguales: 'Se siente como cuando jugaba con los Rastis de chiquito'. El proyecto no busca quedarse en Lanús: desde la fundación están abiertos a ceder los derechos de uso del nombre y la marca para replicarlo en todo el país.",
    highlightQuote: "“Se siente como cuando jugaba con los Rastis de chiquito: encastrar, alinear y construir futuro con mis propias manos.”"
  },
  {
    id: "practicas-profesionalizantes-copret",
    title: "Prácticas profesionalizantes: Pasantías de 120 horas con certificación oficial del COPRET",
    media: "Educación & Trabajo Inclusivo",
    date: "Noviembre",
    category: "Inclusión Laboral",
    excerpt: "Los pasantes se forman bajo la supervisión de un Maestro de Inclusión Laboral (MIL), aprenden manejo de caja, preparación de café y atención al público con incentivo económico.",
    fullText: "El kiosco les brinda a los alumnos una pasantía profesionalizante de 120 horas totales. Trabajan en turnos de tres personas, de 8 a 12 y de 13 a 15, lo que dura abierto el comercio. Todas las tareas están bajo la supervisión de un Maestro de Inclusión Laboral (MIL). Una vez finalizada la pasantía, los alumnos reciben el certificado para acreditar todo lo aprendido por parte del Consejo Provincial de Educación y Trabajo (COPRET).\n\nEntre las principales tareas se dedican a desarrollar atención al cliente, manejar máquinas registradoras, usar calculadoras para el vuelto, limpiar su lugar de trabajo y aprender a usar la cafetera. Al haber jóvenes que no leen ni escriben, una de las estrategias pedagógicas es ordenar los productos por colores y ubicación para que sean fácilmente localizables.",
    highlightQuote: "Al haber jóvenes que no leen ni escriben, una de las estrategias pedagógicas es ordenar los productos por colores y ubicación."
  },
  {
    id: "cupo-laboral-informe-diputados",
    title: "Cupo laboral del 4% (Ley 22.431): El informe de Diputados revela que solo se cumple en un 0,90%",
    media: "Actualidad Legislativa",
    date: "Análisis Especial",
    category: "Inclusión Laboral",
    excerpt: "Un informe oficial de la Cámara de Diputados demuestra que el 79% de los organismos públicos no alcanza el cupo exigido por ley. FAPPCODI propone soluciones concretas.",
    fullText: "Si bien la preocupación por el empleo formal está contemplada en la Ley 22.431 —que establece un cupo laboral del 4 por ciento para personas con discapacidad en los organismos públicos— la mayoría de las provincias y dependencias no la cumple.\n\nUn informe publicado por la Cámara de Diputados señala que 'según los últimos datos disponibles de 2021, pertenecientes a la Secretaría de Gestión y Empleo Público, el 79 por ciento de las 191 jurisdicciones ministeriales, entidades descentralizadas y universidades nacionales, informaron que tienen 3011 personas con discapacidad contratadas. Dicha cifra representa un 0,90 por ciento de quienes trabajan en cualquiera de las modalidades de empleo o contratación. Muy lejos del 4% que exige la ley'. Ante este panorama, propuestas como el Inclukiosco y las Expendedoras Inclusivas abren caminos reales hacia el empleo digno.",
    highlightQuote: "“Apenas el 0,90% de contratación real en el Estado frente al 4% exigido por la Ley 22.431. Una deuda impostergable que FAPPCODI ayuda a subsanar.”"
  },
  {
    id: "entrevista-sociedad-inutil",
    title: "Entrevista a Silvio Catania: 'Parece que para la sociedad ser discapacitado es ser inútil'",
    media: "Reflexiones y Diálogos",
    date: "Archivo Histórico",
    category: "Entrevista",
    excerpt: "“La inclusión no es beneficencia ni lástima: es valorar la capacidad productiva, la dignidad y el aporte de cada persona en la comunidad.”",
    fullText: "“La inclusión laboral no se trata simplemente de 'ayudar' a quienes son víctimas de la exclusión, sino también de pensar en grande con una perspectiva de innovación y productividad en la que se valoren los aportes de todos los individuos y grupos. Cuando la sociedad asume que una persona con discapacidad no puede producir, está perdiendo un talento enorme. En FAPPCODI demostramos día a día que con los apoyos y ajustes necesarios, cualquier persona puede desenvolverse con orgullo y eficiencia.”",
    highlightQuote: "“La inclusión laboral no se trata de 'ayudar' por caridad, sino de reconocer la productividad y los aportes de cada individuo.”"
  }
];

export const VIRTUAL_ASSISTANT_KNOWLEDGE = [
  {
    keywords: ["cud", "certificado", "tramitar", "tramite", "discapacidad", "junta"],
    answer: "El Certificado Único de Discapacidad (CUD) es un documento público y gratuito válido en todo el país. Te brinda cobertura del 100% en salud y rehabilitación, gratuidad en transporte terrestre, asignaciones familiares y exención de peajes e impuestos. Para obtenerlo: 1) Reuní la documentación médica con tus profesionales de salud; 2) Acercate a la Junta Evaluadora de tu municipio o provincia; 3) Asistí al turno asignado. Además, podés visualizar el CUD digital en la aplicación 'Mi Argentina'."
  },
  {
    keywords: ["inclukiosco", "kiosco", "lanus", "pasantia", "rasti", "ladrillo", "mil"],
    answer: "El Inclukiosco es un proyecto modelo de FAPPCODI ubicado en Hipólito Yrigoyen 3863 (Lanús). Es atendido por jóvenes de escuelas especiales y CFI que realizan pasantías de 120 horas con certificación oficial de COPRET, supervisados por un Maestro de Inclusión Laboral (MIL) y con incentivo económico. El kiosco fue construido con ladrillos plásticos reciclados por el propio Silvio Catania. ¡Podés solicitar abrir un Inclukiosco en tu institución llamando al +54 11 5562-4202!"
  },
  {
    keywords: ["expendedora", "expendedoras", "maquina", "empresa", "cafe", "golosinas"],
    answer: "El programa de Expendedoras Inclusivas instala máquinas expendedoras de café, bebidas y snacks en empresas y edificios públicos, operadas y mantenidas por personas con discapacidad. Esto genera empleo genuino y dividendos para sostener las actividades de FAPPCODI. Podés pedir la instalación de una expendedora completando nuestro formulario o escribiendo a contacto@fappcodi.org.ar."
  },
  {
    keywords: ["silvio", "catania", "fundador", "presidente", "grimberg", "historia"],
    answer: "Silvio Adrián Catania fundó FAPPCODI en el año 2000. Tras perder la visión a los 21 años, contó con el respaldo del Dr. Domingo Grimberg ('Primero conocelo y después hablamos'). Su lema de vida es: 'Me convertí en cosas inesperadas'. Dirige la fundación con el objetivo de equiparar oportunidades y generar trabajo real."
  },
  {
    keywords: ["donar", "donacion", "colaborar", "ayudar", "alcancia", "cbu", "alias"],
    answer: "¡Muchas gracias por querer colaborar! Podés donar mediante transferencia a nuestro Alias: FAPPCODI.SOLIDARIA.ARG (CBU: 0140023601502302160201, CUIT: 30-70754821-4). También podés sumarte a nuestra Alcancía Solidaria digital mensual para financiar pasantías e insumos del banco ortopédico."
  },
  {
    keywords: ["banco", "silla", "ruedas", "baston", "muletas", "ortopedico", "prestamo"],
    answer: "En nuestro Catálogo Solidario y Banco Ortopédico disponemos de sillas de ruedas estándar y posturales, bastones blancos y verdes (baja visión), muletas canadienses, andadores y almohadones anti-escaras para préstamo gratuito a quienes lo necesiten o en comodato solidario. Podés solicitar un elemento en la sección 'Catálogo Solidario'."
  },
  {
    keywords: ["tienda", "manos", "inspiran", "comprar", "artesanias", "bolsas"],
    answer: "La tienda solidaria 'Manos que inspiran' es el espacio exclusivo donde comercializamos productos confeccionados en talleres protegidos y de inclusión: bolsas ecológicas de lienzo, cuadernos artesanales con braille, velas de soja y tazas FAPPCODI. Todo lo recaudado se reinvierte en los programas de capacitación."
  },
  {
    keywords: ["empleo", "cv", "trabajo", "curriculum", "cupo", "4%"],
    answer: "En la sección de Inserción Laboral podés cargar tu CV detallando qué ajustes razonables requerís (lectores de pantalla, accesibilidad física, jornada adaptada). También brindamos asesoramiento a empresas para el cumplimiento del cupo legal del 4% (Ley 22.431)."
  },
  {
    keywords: ["contacto", "telefono", "direccion", "donde", "ubicacion", "horario"],
    answer: "Nuestra sede central y el Inclukiosco están en Hipólito Yrigoyen 3863, Lanús, Provincia de Buenos Aires. Nuestro teléfono de contacto directo es +54 11 5562-4202 y nuestro correo es contacto@fappcodi.org.ar."
  }
];
