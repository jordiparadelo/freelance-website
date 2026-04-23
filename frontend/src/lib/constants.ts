import avatarPic from "@/assets/avatar-pic.png";
import reviewLogo1 from "@/assets/icons/review-logo-1.svg?url";
import reviewLogo2 from "@/assets/icons/review-logo-2.svg?url";
import reviewLogo3 from "@/assets/icons/review-logo-3.svg?url";
import reviewLogo4 from "@/assets/icons/review-logo-4.svg?url";
import galleryImage1 from "@/assets/images/gallery/gallery-image-01.webp";
import galleryImage2 from "@/assets/images/gallery/gallery-image-02.webp";
import galleryImage3 from "@/assets/images/gallery/gallery-image-03.webp";
import type { Project } from "@/types";

// NAVIGATION
export const NAV_LINKS = [
  {
    key: "home",
    label: "Home",
    href: "/",
    sections: [
      {
        key: "about",
        label: "About",
        href: "#about",
      },
      {
        key: "services",
        label: "Services",
        href: "#services",
      },
      {
        key: "process",
        label: "How It Done",
        href: "#process",
      },
      // {
      // 	key: "products",
      // 	label: "Products",
      // 	href: "#products",
      // },
      {
        key: "projects",
        label: "Projects",
        href: "#selected-works",
      },
      // {
      // 	key: "reviews",
      // 	label: "Reviews",
      // 	href: "#client-reviews",
      // },
    ],
  },
  {
    key: "about",
    label: "About",
    href: "/about",
  },
  // {
  // 	key: "contact",
  // 	label: "Contact",
  // 	href: "/contact",
  // },
  // {
  // 	key: "products",
  // 	label: "Products",
  // 	href: "/products",
  // },
  {
    key: "projects",
    label: "Projects",
    href: "/projects",
  },
];

// GALLERY
export const GALLERY_IMAGES = [
  {
    key: "/image-gallery-01",
    src: galleryImage1,
    alt: "North Star - Website project",
    width: 568,
    height: 456,
  },
  {
    key: "image-gallery-02",
    src: galleryImage2,
    alt: "Glow Ai - Website project",
    width: 568,
    height: 456,
  },
  {
    key: "image-gallery-03",
    src: galleryImage3,
    alt: "Invest - Web Project",
    width: 568,
    height: 456,
  },
];

// PRODUCTS
export const PRODUCTS = [
  {
    id: "product-1",
    href: "/products/product-1",
    image: {
      src: "/assets/image-gallery-1.webp",
      alt: "SaaS Website Kit",
      width: 568,
      height: 456,
    },
    category: "Website",
    title: "SaaS Website Kit",
    details:
      "No-code SaaS kit with the set of free components, sections and 3D assets",
    preview: "https://www.jordiparadelo.com/",
    formats: ["figma", "code"],
    likes: 2,
    comments: [{ id: 1, comment: "Love it ❤️" }],
    price: 29.99,
  },
  {
    id: "product-2",
    href: "/products/product-2",
    image: {
      src: galleryImage2,
      alt: "Project website 2",
      width: 568,
      height: 456,
    },
    category: "Website",
    title: "Electric Cars HTML Coded Version",
    details: "Custom web design for freelancers and other companies",
    preview: "https://www.jordiparadelo.com/",
    formats: ["figma", "code"],
    likes: 2,
    comments: [{ id: 1, comment: "Love it ❤️" }],
    price: 29.99,
  },
  {
    id: "product-3",
    href: "/products/product-3",
    image: {
      src: galleryImage3,
      alt: "Project website 3",
      width: 568,
      height: 456,
    },
    category: "Design System",
    title: "Fintech Design System",
    details: "A design system designed to grow over time.",
    preview: "https://www.jordiparadelo.com/",
    formats: ["figma", "code"],
    likes: 2,
    comments: [{ id: 1, comment: "Love it ❤️" }],
    price: 29.99,
  },
];

// PROJECTS
export const PROJECTS: Project[] = [
  {
    id: "surfrigo",
    href: "/projects/surfrigo",
    image: {
      url: "/images/projects/surfrigo.webp",
      alt: "Project website 32",
      width: 568,
      height: 456,
    },
    title: "Surfrigo | Logistica y Distribucion",
    details: {
      brief:
        "Sitio corporativo para una empresa de logistica y cadena de frio.",
      blob: "Soluciones logísticas en Argentina: transporte, distribución y warehousing con foco en eficiencia, tecnología y sostenibilidad.",
      client: "Surfrigo",
      type: ["Webflow", "Corporate"],
      industries: [
        "Logistics",
        "Transportation",
        "Warehousing",
        "Sustainability",
      ],
      year: "2025", // ajustar si el proyecto se hizo en otro ano
      roles: ["Developer"],
      collaboration: ["Commute"], // ajustar si corresponde
      logo: "/images/logos/surfrigo.svg", // ajustar ruta si todavia no existe
    },
    challenge:
      "Disenar una presencia digital clara y confiable para una empresa logistica de alcance nacional, comunicando su propuesta de valor en transporte, warehousing, flota, cobertura territorial y compromiso con la sostenibilidad.",
    services: ["Design Website", "Webflow Development", "CMS Integration"],
    preview: "https://www.surfrigo.com.ar/",
    categories: ["Webflow", "Website"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "byma",
    href: "/projects/byma",
    image: {
      url: "/images/projects/byma.webp",
      alt: "BYMA website homepage",
      width: 568,
      height: 456,
    },
    title: "BYMA | Argentine Capital Markets Exchange",
    details: {
      brief:
        "Corporate platform for Argentina's capital markets, focused on investment, market data, and financial services.",
      blob: "BYMA unifies Argentina's capital markets, offering real-time data, trading tools, and resources for investors and financial institutions.",
      client: "BYMA",
      type: ["Website", "Corporate", "Financial Services"],
      industries: [
        "Capital Markets",
        "Finance",
        "Market Infrastructure",
        "Financial Technology",
      ],
      year: "2026",
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"],
      logo: "/images/logos/byma.svg",
    },
    challenge:
      "Build a clear and trustworthy digital presence for a complex financial ecosystem, making market information, investment products, and services accessible to diverse audiences while preserving transparency and credibility.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
    ],
    preview: "https://www.byma.com.ar/",
    categories: ["Website", "Corporate"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp",
        alt: "BYMA website section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "BYMA website section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "BYMA website section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "centum",
    href: "/projects/centum",
    image: {
      url: "/images/projects/centum.webp", // TODO: verify
      alt: "Centum ERP platform homepage",
      width: 568,
      height: 456,
    },
    title: "Centum | Intelligent ERP Platform",
    details: {
      brief:
        "ERP platform site merging operations, logistics, finance, and analytics in a unified system for business efficiency.",
      blob: "Centum is an ERP platform unifying business operations with integrated solutions for manufacturing, logistics, retail, and services.",
      client: "Centum",
      type: ["Website", "Corporate", "SaaS"],
      industries: [
        "Enterprise Software",
        "ERP",
        "Logistics",
        "Retail",
        "Manufacturing",
      ],
      year: "2025", // TODO: verify
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"], // TODO: verify
      logo: "/images/logos/centum.png", // TODO: verify
    },
    challenge:
      "Design a clear and scalable digital presence for a complex ERP ecosystem, communicating broad product depth across multiple industries while keeping navigation intuitive for decision-makers evaluating operational software.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
      "Content Strategy",
    ],
    preview: "https://www.centum.com.ar/",
    categories: ["Website", "Corporate", "SaaS"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Centum platform overview section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Centum industry solutions section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Centum integrations and results section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "alertd",
    href: "/projects/alertd",
    image: {
      url: "/images/projects/alertd.webp", // TODO: verify
      alt: "AlertD cloud optimization platform homepage",
      width: 568,
      height: 456,
    },
    title: "AlertD | AI for AWS Cloud Operations",
    details: {
      brief:
        "Corporate SaaS website for an AI platform that helps DevOps teams optimize AWS cost, security, compliance, and performance.",
      blob: "AlertD presents AI agents for AWS that turn plain-English questions into dashboards and actionable cloud insights for cost, security, compliance, and performance.",
      client: "AlertD",
      type: ["Website", "Corporate", "SaaS"],
      industries: [
        "Cloud Infrastructure",
        "DevOps",
        "FinOps",
        "Cybersecurity",
        "SaaS",
      ],
      year: "2026", // TODO: verify
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"], // TODO: verify
      logo: "/images/logos/alertd.svg", // TODO: verify
    },
    challenge:
      "Translate a technically dense AWS operations product into a clear, conversion-focused website that communicates value quickly to DevOps, SRE, and engineering stakeholders.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
      "Content Strategy",
    ],
    preview: "https://www.alertd.ai/",
    categories: ["Website", "Corporate", "SaaS"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "AlertD hero and value proposition section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "AlertD optimization workflow section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "AlertD collaboration and CTA section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "ringtail-digital",
    href: "/projects/ringtail-digital",
    image: {
      url: "/images/projects/ringtail-digital.webp", // TODO: verify
      alt: "Ringtail Digital programmatic media website homepage",
      width: 568,
      height: 456,
    },
    title: "Ringtail Digital | Programmatic Media in LATAM",
    details: {
      brief:
        "Corporate website for a programmatic media partner helping brands and agencies scale campaigns across Latin America.",
      blob: "Boutique LATAM media partner site built to showcase transparent programmatic buying, unified channel activation, and measurable campaign growth.",
      client: "Ringtail Digital",
      type: ["Website", "Corporate", "Marketing"],
      industries: [
        "Digital Advertising",
        "Programmatic Media",
        "Marketing Technology",
        "Media Buying",
      ],
      year: "2025", // TODO: verify
      roles: ["Developer"],
      collaboration: ["Commute"], // TODO: verify
      logo: "/images/logos/ringtail.svg", // TODO: verify
    },
    challenge:
      "Communicate a technical, multi-channel media offer in a simple way, proving operational transparency, campaign efficiency, and regional expertise for agencies and brand teams.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
      "Content Strategy",
    ],
    preview: "https://www.ringtaildigital.com",
    categories: ["Website", "Corporate", "Marketing"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Ringtail Digital value proposition section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Ringtail Digital channels and platforms section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Ringtail Digital methodology and contact section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "glow-ia",
    href: "/projects/glow-ia",
    image: {
      url: "/images/projects/glow-ia.webp", // TODO: verify
      alt: "Glow IA beauty AI platform homepage",
      width: 568,
      height: 456,
    },
    title: "Glow IA | AI Beauty Personalization Platform",
    details: {
      brief:
        "Corporate SaaS website for an AI beauty platform delivering personalized, immersive experiences for digital-first beauty brands.",
      blob: "SaaS site built to showcase AI beauty personalization, AR try-ons, diagnostics, and data insights that boost engagement, conversion, and loyalty.",
      client: "Glow IA",
      type: ["Website", "Corporate", "SaaS"],
      industries: ["Beauty Technology", "Artificial Intelligence", "SaaS"],
      year: "2024", // TODO: verify
      roles: ["Designer", "Developer"],
      collaboration: [""], // TODO: verify
      logo: "/images/logos/glow-ia.svg", // TODO: verify
    },
    challenge:
      "Present a complex AI solution suite in a clear, aspirational way that helps beauty brands understand value quickly and move from discovery to demo conversion.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
      "Content Strategy",
    ],
    preview: "https://glow-ia.webflow.io/",
    categories: ["Website", "Corporate", "SaaS"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Glow IA hero and AI personalization section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Glow IA immersive path and journey section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Glow IA solutions suite and reviews section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "modo-app",
    href: "/projects/modo-app",
    image: {
      url: "/images/projects/modo-app.webp", // TODO: verify
      alt: "Modo digital wallet website homepage", // TODO: verify
      width: 568,
      height: 456,
    },
    title: "Modo | Digital Wallet Platform",
    details: {
      brief:
        "Corporate website for a fintech wallet app that simplifies transfers, payments, and mobile banking interactions.",
      blob: "Fintech product site focused on showing how Modo unifies digital payments, money transfers, and wallet features in one secure mobile experience.",
      client: "Modo",
      type: ["Website", "Corporate", "Fintech"],
      industries: ["Fintech", "Digital Payments", "Banking Technology"],
      year: "2026", // TODO: verify
      roles: ["Designer", "Developer"], // TODO: verify
      collaboration: ["Commute"], // TODO: verify
      logo: "/images/logos/modo.svg", // TODO: verify
    },
    challenge:
      "Create a clear and trustworthy digital presence for a financial app, translating core payment features into simple value propositions that increase confidence and adoption.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
    ], // TODO: verify
    preview: "https://www.modo.com.ar/",
    categories: ["Website", "Corporate", "Fintech"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Modo hero section", // TODO: verify
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Modo features section", // TODO: verify
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Modo CTA section", // TODO: verify
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "modum",
    href: "/products/modum",
    image: {
      url: "/images/image_cover_modum.webp",
      alt: "Project website 32",
      width: 568,
      height: 456,
    },
    title: "Modum Salud | Health Care",
    details: {
      brief: "Modern website for a healthcare company",
      blob: "Modum was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
      client: "Modum Salud",
      type: ["Website", "Design", "Webflow"],
      industries: ["Health", "Company"],
      year: "2022",
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"],
      logo: "/images/logos/modum.svg",
    },
    challenge:
      "Modum was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
    services: ["Design Website", "Webflow Development", "CMS Integration"],
    preview: "https://www.modumsalud.com.ar/",
    categories: ["Webflow", "Website"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "cledara-saas",
    href: "/projects/cledara-saas",
    image: {
      url: "/images/projects/cledara-saas.webp", // TODO: verify
      alt: "Cledara SaaS management platform homepage",
      width: 568,
      height: 456,
    },
    title: "Cledara | SaaS Spend & Risk Management",
    details: {
      brief:
        "Corporate SaaS website for a platform that helps Finance and IT manage software spend, renewals, access, and compliance.",
      blob: "SaaS platform site focused on controlling software spend and risk by unifying purchasing, payments, usage insights, and compliance in one workflow.",
      client: "Cledara",
      type: ["Website", "Corporate", "SaaS"],
      industries: [
        "Fintech",
        "SaaS Management",
        "Finance Operations",
        "IT Operations",
      ],
      year: "2025", // TODO: verify
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"], // TODO: verify
      logo: "/images/logos/cledara.svg", // TODO: verify
    },
    challenge:
      "Explain a broad and technical Finance-IT product suite in a clear, conversion-focused narrative that quickly proves value in spend control, risk reduction, and operational efficiency.",
    services: [
      "Website Design",
      "Frontend Development",
      "Information Architecture",
      "Content Strategy",
    ],
    preview: "https://www.cledara.com",
    categories: ["Website", "Corporate", "SaaS"],
    gallery: [
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Cledara spend visibility and control section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Cledara software purchasing and renewals section",
        width: 568,
        height: 456,
      },
      {
        url: "/assets/image-gallery-1.webp", // TODO: verify
        alt: "Cledara customer stories and CTA section",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "receeve",
    href: "/products/receeve",
    image: {
      url: "/images/image-gallery-1.webp",
      alt: "Project website 32",
      width: 568,
      height: 456,
    },
    title: "Receeve | Debt Collection Software",
    details: {
      brief: "Modern website for SASS company",
      blob: "Receeve Debt Collection Software is used and trusted by Finance leaders. See how it can accelerate debt resolution & retain more customers.",
      client: "Receeve",
      type: ["Website", "Design", "Webflow"],
      industries: ["Sass"],
      year: "2022",
      roles: ["Designer", "Developer"],
      collaboration: ["Commute"],
      logo: "/images/logos/receeve.svg",
    },
    challenge:
      "Receeve was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
    services: ["Design Website", "Webflow Development", "CMS Integration"],
    preview: "https://www.receeve.com/",
    categories: ["Webflow", "Website"],
    gallery: [
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
    ],
  },
  {
    id: "kidscorp",
    href: "/products/kidscorp",
    image: {
      url: "/images/image-gallery-1.webp",
      alt: "Project website 32",
      width: 568,
      height: 456,
    },
    title: "Kidscorp",
    details: {
      brief: "Kids Corp | MarTech solutions for the U18 industry",
      blob: "Kids Corp leads the industry's transformation with our unique technology, empowering organizations for unmatched growth.",
      client: "Kidscorp",
      type: ["Website", "Design", "Webflow"],
      industries: ["Sass", "Kids"],
      year: "2022",
      roles: ["Developer"],
      collaboration: ["Commute"],
      logo: "/images/logos/kidscorp.svg",
    },
    challenge:
      "Kidscorp was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
    services: ["Webflow Development"],
    preview: "https://www.kidscorp.digital/",
    categories: ["Webflow"],
    gallery: [
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
      {
        url: "/images/image-gallery-1.webp",
        alt: "Project website 32",
        width: 568,
        height: 456,
      },
    ],
  },
];

// SERVICES
export const SERVICES = [
  {
    id: "service-1",
    gallery: [
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
    ],
    type: "websites",
    title: "Web Development ",
    description:
      "From designing and developing responsive web apps for any business challenge.",
  },
  {
    id: "service-2",
    gallery: [
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
    ],
    type: "mobile",
    title: "Ui/Ux Design",
    description:
      "Design center on bring the best user experience to your business.",
  },
  {
    id: "service-3",
    gallery: [
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
    ],
    type: "design-system",
    title: "Design system",
    description:
      "Have a robust and cohesive design systems for your product for easy scalability.",
  },
  {
    id: "Consulting",
    gallery: [
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
      {
        src: galleryImage1,
        alt: "service website 32",
        width: 568,
        height: 456,
      },
    ],
    type: "consulting",
    title: "Consulting.",
    description: "Help and improvements to optimize your product.",
  },
];

// PROJECTS
export const REVIEWS = [
  {
    id: "review-1",
    image: {
      src: reviewLogo1,
      width: 40,
      height: 40,
    },
    title: "Garriot",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: "review-2",
    image: {
      src: reviewLogo2,
      width: 40,
      height: 40,
    },
    title: "Oster",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: "review-3",
    image: {
      src: reviewLogo3,
      width: 40,
      height: 40,
    },
    title: "Oak",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: "review-4",
    image: {
      src: reviewLogo4,
      width: 40,
      height: 40,
    },
    title: "Denny",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
  {
    id: "review-5",
    image: {
      src: reviewLogo1,
      width: 40,
      height: 40,
    },
    title: "Stiff",
    description:
      "With a solid track record in designing websites and apps, I deliver strong and user-friendly digital designs. Solid company branding is the foundation of any succesful website.",
  },
];

// SOCIAL LINKS
export const SOCIAL_LINKS = [
  {
    id: "behance",
    icon: {
      src: reviewLogo1,
      width: 40,
      height: 40,
    },
    title: "Behance",
    href: "https://www.behance.net/Jordi_Paradelo",
  },
  {
    id: "dribbble",
    icon: {
      src: reviewLogo2,
      width: 40,
      height: 40,
    },
    title: "Dribbble",
    href: "https://dribbble.com/jordiparadelo",
  },
  {
    id: "linkedin",
    icon: {
      src: reviewLogo3,
      width: 40,
      height: 40,
    },
    title: "Linkedin",
    href: "https://www.linkedin.com/in/jordiparadelo/",
  },
];

export const PROCESS = [
  {
    id: "design",
    category: "Design Visually",
    title: "User-centric designs",
    description:
      "Crafting visually stunning and user-centric designs is at the heart of our process. We transform ideas into beautiful and intuitive interfaces that engage users and enhance their experience.",
    cover: {
      src: galleryImage1,
      width: 600,
      height: 400,
      alt: "Image showing the process of Design Visually",
    },
  },
  {
    id: "cms-integration",
    category: "CMS Integration",
    title: "Manage and update content effortlessly",
    description:
      "A robust Content Management System (CMS) empowers clients to manage and update their content effortlessly. We integrate a powerful CMS that provides flexibility and control over the content, ensuring the site remains dynamic and relevant.",
    cover: {
      src: galleryImage2,
      width: 600,
      height: 400,
      alt: "Image showing the process of CMS Integration",
    },
  },
  {
    id: "custom-code",
    category: "Custom Code",
    title: "Extend functionalities beyond defaults",
    description:
      "To meet unique project requirements, we leverage custom code, providing the flexibility to extend functionalities beyond standard capabilities. This ensures that every aspect of the application is tailored to the specific needs of the project.",
    cover: {
      src: galleryImage3,
      width: 600,
      height: 400,
      alt: "Image showing the process of Custom Code",
    },
  },
  {
    id: "animations",
    category: "Animations & Interactions",
    title: "Engaging and enjoyable experiences",
    description:
      "Animations and interactions bring life to the application, making it more engaging and enjoyable for users. We use advanced animation techniques to create seamless, captivating experiences that enhance the overall user journey.",
    cover: {
      src: galleryImage1,
      width: 600,
      height: 400,
      alt: "Image showing the process of Animations & Interactions",
    },
  },
];

export const ABOUT = {
  id: "contact-info",
  avatar: avatarPic,
  title: "Contact Information",
  description:
    "For any inquiries, please reach out to us at the following contact information:",
  contact: [
    {
      id: "email",
      props: {
        href: "mailto:im.jordiparadelo@gmail.com",
      },
      label: "im.jordiparadelo@gmail.com",
    },
    // {
    // 	id: "fiverr",
    // 	props: {
    // 		href: "https://www.fiverr.com/s/2KpAx9e",
    // 	},
    // 	label: "Fiverr",
    // },
  ],
  business: {
    name: "Jordi Angel Paradelo Palazzo",
    // vatId: "55141044Q",
    location: "Valencia, Spain",
  },
  socials: [...SOCIAL_LINKS],
};

export const SERVICES_OFFERED = [
  {
    title: "Web Design & Development",
    description:
      "From designing and developing responsive web apps for any business challenge.",
    image: "/images/figma-3d.webp",
  },
  {
    title: "Marketing & Design",
    description:
      "From designing and developing responsive web apps for any business challenge.",
    image: "/images/figma-3d.webp",
  },
  {
    title: "Branding & Design",
    description:
      "From designing and developing responsive web apps for any business challenge.",
    image: "/images/figma-3d.webp",
  },
];
