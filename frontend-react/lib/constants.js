import galleryImage1 from "@/public/image-gallery-1.webp";
import galleryImage2 from "@/public/image-gallery-2.webp";
import galleryImage3 from "@/public/image-gallery-3.webp";
import reviewLogo1 from "@/public/review-logo-1.svg";
import reviewLogo2 from "@/public/review-logo-2.svg";
import reviewLogo3 from "@/public/review-logo-3.svg";
import reviewLogo4 from "@/public/review-logo-4.svg";

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
				key: "gallery",
				label: "Gallery",
				href: "#gallery",
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
	{
		key: "contact",
		label: "Contact",
		href: "/contact",
	},
	{
		key: "products",
		label: "Products",
		href: "/products",
	},
	{
		key: "projects",
		label: "Projects",
		href: "/projects",
	},
];

// GALLERY
export const GALLERY_IMAGES = [
	{
		key: "image-gallery-1",
		src: galleryImage1,
		alt: "Project website 1",
		width: 568,
		height: 456,
	},
	{
		key: "image-gallery-2",
		src: galleryImage2,
		alt: "Project website 2",
		width: 568,
		height: 456,
	},
	{
		key: "image-gallery-3",
		src: galleryImage3,
		alt: "Project website 3",
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
			src: galleryImage1,
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
export const PROJECTS = [
	{
		id: "modum",
		href: "/products/modum",
		image: {
			src: galleryImage1,
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
		},
		challenge:
			"Modum was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
		services: ["Design Website", "Webflow Development", "CMS Integration"],
		preview: "https://www.modumsalud.com.ar/",
		categories: ["Webflow", "Website"],
		gallery: [
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
		],
	},
	{
		id: "modo",
		href: "/products/modo",
		image: {
			src: galleryImage1,
			alt: "Project website 32",
			width: 568,
			height: 456,
		},
		title: "Modo | App Banking",
		details: {
			brief: "Clean website for a wallet bank",
			blob: "Modo es una App que reúne todos los Bancos para que puedas enviar y recibir dinero desde tu celular. También podes pagar o cobrar con código QR.",
			client: "Modo",
			type: ["Website", "Design", "Webflow"],
			industries: ["Finances", "Sass"],
			year: "2023",
			roles: ["Designer", "Developer"],
			collaboration: ["Commute"],
		},
		challenge:
			"Modo was a new modern banking app startup, that want to simplify the process of managing financial transactions. The company's mission is to deliver better banking services to its clients.",
		services: ["Webflow Development", "Animations"],
		preview: "https://www.modo.com.ar/",
		categories: ["Webflow", "Website"],
		gallery: [
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
		],
	},
	{
		id: "receeve",
		href: "/products/receeve",
		image: {
			src: galleryImage1,
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
		},
		challenge:
			"Receeve was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
		services: ["Design Website", "Webflow Development", "CMS Integration"],
		preview: "https://www.receeve.com/",
		categories: ["Webflow", "Website"],
		gallery: [
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
		],
	},
	{
		id: "cledara",
		href: "/products/cledara",
		image: {
			src: galleryImage1,
			alt: "Project website 32",
			width: 568,
			height: 456,
		},
		title: "Cledara",
		details: {
			brief: "Cledara | SaaS Subscription Management Tool",
			blob: "Cledara is the SaaS subscription management platform providing tech stack control to 1,000+ businesses. Pay and reign your software budget in one place.",
			client: "Cledara Salud",
			type: ["Website", "Design", "Webflow"],
			industries: ["Health", "Company"],
			year: "2023",
			roles: ["Designer", "Developer"],
			collaboration: ["Commute", "Cledara"],
		},
		challenge:
			"Cledara want to update their actual site with a modern and modern design. Bring more of their brand identity to the site.",
		services: ["Design Website", "Webflow Development", "CMS Integration"],
		preview: "https://www.cledara.com/",
		categories: ["Webflow", "Website", "Animations"],
		gallery: [
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
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
			src: galleryImage1,
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
		},
		challenge:
			"Kidscorp was created with the aim of simplifying the process of managing health care. The company's mission is to deliver better healthcare services to patients.",
		services: ["Webflow Development"],
		preview: "https://www.kidscorp.digital/",
		categories: ["Webflow"],
		gallery: [
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
				alt: "Project website 32",
				width: 568,
				height: 456,
			},
			{
				src: galleryImage1,
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
		title: "Web apps ",
		description:
			"We design sleek and responsive web apps for any business challenge.",
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
		title: "Mobile apps.",
		description:
			"We design, refine, and make your app shine above the competition.",
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
			"We build robust and cohesive design systems for easy scalability.",
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
		description:
			"We'll tear apart your existing product and help you optimize your product for better results.",
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
