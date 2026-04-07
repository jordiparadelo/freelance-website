import styles from "./styles.module.scss";
import "@/app/(pages)/about/styles.module.scss";
import ProjectsList from "@/components/ui/ProjectsList";
import ToolsBar from "@/components/ui/ToolsBar";

const tools = [
	{
		id: "figma",
		name: "Figma",
		icon: "/next.svg",
		link: "https://www.figma.com/",
		description:
			"Figma is a design tool that allows you to create, edit, and share designs.",
	},
	{
		id: "vscode",
		name: "VS Code",
		icon: "/next.svg",
		link: "https://code.visualstudio.com/",
		description:
			"VS Code is a code editor that allows you to create, edit, and share code.",
	},
	{
		id: "git",
		name: "Git",
		icon: "/next.svg",
		link: "https://git-scm.com/",
		description:
			"Git is a version control system that allows you to create, edit, and share code.",
	},
	{
		id: "nextjs",
		name: "Next.js",
		icon: "/next.svg",
		link: "https://nextjs.org/",
		description:
			"Next.js is a React framework that allows you to create, edit, and share code.",
	},
	{
		id: "react",
		name: "React",
		icon: "/next.svg",
		link: "https://reactjs.org/",
		description:
			"React is a JavaScript library that allows you to create, edit, and share code.",
	},
];
const AboutServices = () => {
	return (
		<div className={styles["about-services"]}>
			<section className={styles["about-services__tools"] + " card-block"}>
				<h2 className="heading-style-h6">Tools & Tech Stack</h2>

				<ToolsBar tools={tools} />
			</section>

			<section className={styles["about-services__projects"] + " card-block"}>
				<h2 className="heading-style-h6">Latest Projects</h2>
				<ProjectsList />
			</section>

			<section className={styles["about-services__social"] + " card-block"}>
				<h2 className="heading-style-h6">Find me on</h2>
				<div className={styles["social-links"]}>
					<a href="#" className={styles["social-link"]}>
						GitHub
					</a>
					<a href="#" className={styles["social-link"]}>
						LinkedIn
					</a>
					<a href="#" className={styles["social-link"]}>
						Twitter
					</a>
				</div>
			</section>
		</div>
	);
};

export default AboutServices;
