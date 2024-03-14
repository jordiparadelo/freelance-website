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
			{
				key: "products",
				label: "Products",
				href: "#products",
			},
			{
				key: "projects",
				label: "Projects",
				href: "#selected-works",
			},
			{
				key: "reviews",
				label: "Reviews",
				href: "#client-reviews",
			},
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
export const PRODUCTS_ITEMS = [
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
		details: "No-code SaaS kit with the set of free components, sections and 3D assets",
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
export const PROJECTS_ITEMS = [
	{
		id: "project-1",
		href: "/products/project-1",
		image: {
			src: galleryImage1,
			alt: "Project website 32",
			width: 568,
			height: 456,
		},
		title: "Project website 1",
		details: "12 high resolution mockup scenes",
		preview: "https://www.jordiparadelo.com/",
		categories: ["Ui/Ux", "Website"],
		likes: 2,
		comments: [{ id: 1, comment: "Love it ❤️" }],
		price: 29.99,
	},
	{
		id: "project-2",
		href: "/products/project-2",
		image: {
			src: galleryImage2,
			alt: "Project website 2",
			width: 568,
			height: 456,
		},
		title: "Project website 2",
		details: "12 high resolution mockup scenes",
		preview: "https://www.jordiparadelo.com/",
		categories: ["Ui/Ux", "Website"],
		likes: 2,
		comments: [{ id: 1, comment: "Love it ❤️" }],
		price: 29.99,
	},
	{
		id: "project-3",
		href: "/products/project-3",
		image: {
			src: galleryImage3,
			alt: "Project website 3",
			width: 568,
			height: 456,
		},
		title: "Project website 3",
		details: "12 high resolution mockup scenes",
		preview: "https://www.jordiparadelo.com/",
		categories: ["Ui/Ux", "Website"],
		likes: 2,
		comments: [{ id: 1, comment: "Love it ❤️" }],
		price: 29.99,
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
			}
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
