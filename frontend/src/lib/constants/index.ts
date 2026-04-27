import avatarPic from "@/assets/avatar-pic.png";
import reviewLogo1 from "@/assets/icons/review-logo-1.svg?url";
import reviewLogo2 from "@/assets/icons/review-logo-2.svg?url";
import reviewLogo3 from "@/assets/icons/review-logo-3.svg?url";
import reviewLogo4 from "@/assets/icons/review-logo-4.svg?url";
import galleryImage1 from "@/assets/images/gallery/gallery-image-01.webp";
import galleryImage2 from "@/assets/images/gallery/gallery-image-02.webp";
import galleryImage3 from "@/assets/images/gallery/gallery-image-03.webp";

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
