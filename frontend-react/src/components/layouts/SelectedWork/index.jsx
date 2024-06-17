import React, { Suspense } from "react";
import Link from "next/link";
// Components
import { Button, Curves, ProjectsList, SectionLabel } from "@/ui";
import Computer from "@/public/assets/animated-icons/selected-work.json";
// Styles
import styles from "./styles.module.scss";
// Lib
import { getLimitedProjects } from "@/lib/actions";

const SelectedWork = async () => {
	const { data: projects } = await getLimitedProjects(10);

	return (
		<section
			id='selected-works'
			className={styles["selected-works"]}
		>
			<div className="padding-global --section-large">
				<div className="container">
					<div className="section__wrapper">
						<header className={styles["section-header"]}>
							<div className={styles["section-header__heading"]}>
								<SectionLabel
									label='Selected projects'
									animationData={Computer}
								/>
								<h2 className={styles["section-header__title"]}>
									Check out the last projects
								</h2>
							</div>
							<Link href='/projects'>
								<Button>
									See more projects
								</Button>
							</Link>
						</header>

						<Suspense fallback={"...Loading"}>
							<ProjectsList projects={projects} />
						</Suspense>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SelectedWork;

