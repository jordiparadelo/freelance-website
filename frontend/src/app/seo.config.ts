const SOCIAL_LINKS = [
  {
    id: "behance",
    title: "Behance",
    url: "https://www.behance.net/Jordi_Paradelo",
  },
  {
    id: "dribbble",
    title: "Dribbble",
    url: "https://dribbble.com/jordiparadelo",
  },
  {
    id: "linkedin",
    title: "Linkedin",
    url: "https://www.linkedin.com/in/jordiparadelo/",
  },
];

export const SITE_URL = "https://www.jordiparadelo.com";

const isIndexable = process.env.VERCEL_ENV === "production";

export const ORGANIZATION_DATA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jordi Paradelo",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "Freelance web developer specialized in React, Next.js, and modern web technologies.",
  sameAs: SOCIAL_LINKS.map((link) => link.url),
};

export const METADATA = {
  title: {
    default: "Jordi Paradelo | Freelance Web Designer & Developer",
    template: "%s | Jordi Paradelo",
  },
  description:
    "Freelance web developer building high-performance React and Next.js sites. Scalable interfaces, modern stack, and careful front-end craft.",
  keywords: [
    "web development",
    "freelance",
    "React",
    "Next.js",
    "TypeScript",
    "frontend developer",
    "web developer",
    "UI/UX",
    "responsive design",
  ],
  authors: [{ name: "Jordi Paradelo" }],
  creator: "Jordi Paradelo",
  publisher: "Jordi Paradelo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Jordi Paradelo | Freelance Web Designer & Developer",
    description:
      "Freelance web developer building high-performance React and Next.js sites. Scalable interfaces, modern stack, and careful front-end craft.",
    url: SITE_URL,
    siteName: "Jordi Paradelo",
    images: [
      {
        url: "/og-image.png", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Jordi Paradelo - Freelance Web Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jordi Paradelo | Freelance Web Designer & Developer",
    description:
      "Freelance web developer building high-performance React and Next.js sites. Scalable interfaces, modern stack, and careful front-end craft.",
    images: ["/og-image.png"],
  },
  robots: {
    index: isIndexable,
    follow: isIndexable,
    googleBot: {
      index: isIndexable,
      follow: isIndexable,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export const HOME_METADATA = {
  ...METADATA,
  title: {
    absolute: "Freelance Web Designer | Webflow & React Developer",
  },
  description:
    "Jordi Paradelo is a freelance web developer specialized in React, Next.js, and modern web technologies for fast, reliable sites.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    ...METADATA.openGraph,
    title: "Freelance Web Designer | Webflow & React Developer",
    description:
      "Jordi Paradelo is a freelance web developer specialized in React, Next.js, and modern web technologies for fast, reliable sites.",
    url: SITE_URL,
  },
};
