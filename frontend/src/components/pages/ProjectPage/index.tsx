import Image from "next/image";
import { Container, Curves, Section } from "@/components/ui";
import { formatStrapiMediaUrl } from "@/lib/db";
import type { Project } from "@/lib/db/types";
import styles from "./styles.module.css";

const ProjectPage = ({ project }: { project: Project }) => {
	return (
		<main>
			<Section className={styles["hero"]} id="hero">
				<Container>
					<div className={styles["layout"]}>
						<div className={styles["header"]}>
							<div className={styles["header_description"]}>
								<h1> {project.title}</h1>
								<p>{project.challenge}</p>
							</div>
							<div className={styles["header_details"]}>
								<div className={styles["project-card_details"]}>
									<div className={styles["project-card_details_block"]}>
										<h4 className={styles["project-card_details_title"]}>
											Industries
										</h4>
										<div className={styles["project-card_details_list"]}>
											{project.details?.industries?.map((industry) => (
												<span key={industry?.label}> {industry?.label}</span>
											))}
										</div>
									</div>
									<div className={styles["project-card_details_block"]}>
										<h4 className={styles["project-card_details_title"]}>
											Type
										</h4>
										<div className={styles["project-card_details_list"]}>
											{project.details?.type?.map((type) => (
												<span key={type.label}> {type.label}</span>
											))}
										</div>
									</div>
									<div className={styles["project-card_details_block"]}>
										<h4 className={styles["project-card_details_title"]}>
											Roles
										</h4>
										<div className={styles["project-card_details_list"]}>
											{project.details?.roles?.map((rol) => (
												<span key={rol.label}> {rol.label}</span>
											))}
										</div>
									</div>
									{project.details?.collaboration?.length && (
										<div className={styles["project-card_details_block"]}>
											<h4 className={styles["project-card_details_title"]}>
												Collaborators
											</h4>
											<div className={styles["project-card_details_list"]}>
												{project.details?.collaboration?.map((collaborator) => (
													<span key={collaborator.label}>
														{" "}
														{collaborator.label}
													</span>
												))}
											</div>
										</div>
									)}
								</div>
							</div>
						</div>
					</div>
				</Container>
			</Section>
			<Section className={styles["project-gallery"]} id="gallery">
				<Curves orientation="top" fill="var(--background-color--base)" />
				<Container>
					<div className={styles["layout"]}>
						<ul>
							{project.gallery?.map((image) => {
								const src = formatStrapiMediaUrl(image.url);
								return (
									<li key={image.id}>
										<Image
											src={src}
											alt={project.title}
											width={image.width}
											height={image.height}
										/>
									</li>
								);
							})}
						</ul>
					</div>
				</Container>
			</Section>
		</main>
	);
};

export default ProjectPage;
