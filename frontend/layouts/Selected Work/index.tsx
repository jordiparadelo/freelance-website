import React from "react";
// Components
import { Button, Curves, ProjectsList, SectionLabel } from "@/components";
// Assets
import Computer from "@/public/animated-icons/selected-work.json";
// Styles
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
			<Curves
				orientation='top'
				fill='#101214'
			/>

			<div className='container'>
				<header className='section-header'>
					<div className='section-header__heading'>
						<SectionLabel
							label='Selected projects'
							animationData={Computer}
						/>
						<h2 className='section-header__title'>
							Check out the last projects
						</h2>
					</div>
					<Button>See more projects</Button>
				</header>

				<ProjectsList projects={projects} />
			</div>

			<Curves
				orientation='bottom'
				fill='#101214'
			/>
		</section>
	);
};

export default SelectedWork;
