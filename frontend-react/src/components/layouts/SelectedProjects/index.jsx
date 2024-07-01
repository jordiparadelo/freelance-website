import { Button, Curves, SectionLabel } from "@/ui";
import ProjectsList from "./ProjectsList";
import Computer from "@/public/assets/animated-icons/selected-work.json";
import { getLimitedProjects } from "@/lib/actions";

import React, { Suspense } from "react";

import Link from "next/link";
// Styles
import styles from "./styles.module.scss";

const SelectedProjects = async () => {
	const { data: projects } = await getLimitedProjects(10);

	return (
		<section
			id='selected-works'
			className={styles["selected-projects"]}
		>
			<div className='padding-global --section-large'>
				<div className='container'>
					<div className={styles["selected-projects__layout"]}>
						<div className={styles["selected-projects__heading"]}>
							<div className={styles["selected-projects__title-wrapper"]}>
								<SectionLabel
									label='Selected projects'
									animationData={Computer}
								/>
								<h2 className={styles["section-header__title"]}>
									Check out the last projects
								</h2>
							</div>
							<Link href='/projects'>
								<Button>See more projects</Button>
							</Link>
						</div>

						<Suspense fallback={"...Loading"}>
							<ProjectsList projects={projects} />
						</Suspense>
						<div className={styles["selected-projects__actions"]}>
							<Link href='/projects'>
								<Button>See more projects</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectedProjects;
