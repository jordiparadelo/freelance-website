export const SEO = {
	title: "Jordi Paradelo",
	description:
		"Freelance web developer specialized in React, Next.js, and modern web technologies.",
	keywords: ["web development", "freelance", "React", "Next.js", "TypeScript"],
};

export const SOCIAL_LINKS = [
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

export const SEO_ABOUT = {
	title: "About Jordi Paradelo",
	description:
		"Learn more about Jordi Paradelo, a freelance web developer specialized in React, Next.js, and modern web technologies.",
	keywords: [
		"web development",
		"freelance",
		"React",
		"Next.js",
		"TypeScript",
		"about me",
	],
};

export const BUSINESS_INFO = {
	name: "Jordi Paradelo",
	address: {
		streetAddress: "", // e.g., "123 Main Street"
		addressLocality: "", // e.g., "Barcelona"
		addressRegion: "", // e.g., "Catalonia"
		postalCode: "", // e.g., "08001"
		addressCountry: "ES",
	},
	phone: "", // e.g., "+34 XXX XXX XXX"
	email: "", // e.g., "contact@jordiparadelo.com"
	url: process.env.URL,
	openingHours: ["Mo-Fr 09:00-18:00"], // Adjust according to your availability
	priceRange: "$$", // Optional: indicates price level
	areaServed: ["ES", "UK", "US"], // Areas where you provide services
};

export const ORGANIZATION_DATA = {
	"@context": "https://schema.org",
	"@type": "Organization",
	name: "Jordi Paradelo",
	url: process.env.URL,
	logo: `${process.env.URL}/logo.png`,
	description:
		"Freelance web developer specialized in React, Next.js, and modern web technologies.",
	sameAs: SOCIAL_LINKS.map((link) => link.url),
};

export const METADATA = {
	title: {
		default: "Jordi Paradelo - Freelance Web Developer",
		template: "%s | Jordi Paradelo",
	},
	description:
		"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
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
	metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Jordi Paradelo - Freelance Web Developer",
		description:
			"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
		url: "https://your-domain.com", // Replace with your actual domain
		siteName: "Jordi Paradelo",
		images: [
			{
				url: "/og-image.jpg", // Add your OG image
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
		title: "Jordi Paradelo - Freelance Web Developer",
		description:
			"Freelance web developer specialized in React, Next.js, and modern web technologies. Creating high-performance, scalable web applications with modern tech stack.",
		images: ["/og-image.jpg"], // Same as OG image
		creator: "@yourTwitterHandle", // Replace with your Twitter handle
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			maxVideoPreview: -1,
			maxImagePreview: "large",
			maxSnippet: -1,
		},
	},
	verification: {
		google: "your-google-site-verification", // Add your Google verification code
		// other verification codes as needed
	},
};

export const HOME_METADATA = {
	...METADATA,
	title: "Freelance Web Designer | Webflow & React Developer",
	description:
		"Learn more about Jordi Paradelo, a freelance web developer specialized in React, Next.js, and modern web technologies.",
};

export const ABOUT_METADATA = {
	...METADATA,
	title: "Hi Visitor | Learn more about me",
	description:
		"Learn more about Jordi Paradelo, a freelance web developer specialized in React, Next.js, and modern web technologies.",
};
