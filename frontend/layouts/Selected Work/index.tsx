import React from "react";
import { Button, ProjectsList } from "@/components";
import "./styles.scss";

const SelectedWork = async () => {
	const URL_PROJECTS = `http://localhost:3000/api/projects`;
	const numberOfProjects: number = 4;
	const projects: ProjectsType[] = await fetch(URL_PROJECTS)
		.then((response) => response.json())
		.then((projects: ProjectsType[]) => projects.slice(0, numberOfProjects));

	return (
		<section
			id='selected-work'
			className='selected-work'
		>
			<div className='container'>
				<header className='section-header'>
					<div className='section-header__heading'>
						<p className='section-header__subtitle'>Selected projects</p>
						<h2 className='section-header__title'>
							Check out the last projects
						</h2>
					</div>
					<Button>See more projects</Button>
				</header>

				<ProjectsList projects={projects} />
			</div>
		</section>
	);
};

export default SelectedWork;
