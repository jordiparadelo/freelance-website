import avatarPic from "@/assets/avatar-pic.png";
import reviewLogo1 from "@/assets/icons/review-logo-1.svg?url";
import reviewLogo2 from "@/assets/icons/review-logo-2.svg?url";
import reviewLogo3 from "@/assets/icons/review-logo-3.svg?url";
import reviewLogo4 from "@/assets/icons/review-logo-4.svg?url";
import galleryImage1 from "@/assets/images/gallery/gallery-image-01.webp";
import galleryImage2 from "@/assets/images/gallery/gallery-image-02.webp";
import galleryImage3 from "@/assets/images/gallery/gallery-image-03.webp";

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
