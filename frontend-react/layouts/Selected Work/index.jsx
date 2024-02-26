import React from "react";
import Link from "next/link";
// Components
import { Button, Curves, ProjectsList, SectionLabel } from "@/components";
// Assets
import Computer from "@/public/animated-icons/selected-work.json";
// Styles
import "./styles.scss";

const SelectedWork = async () => {
	const URL_PROJECTS = `http://localhost:3000/api/projects`;
	const numberOfProjects = 4;
	const projects = await fetch(URL_PROJECTS)
		.then((response) => response.json())
		.then((projects) => projects.slice(0, numberOfProjects));

	return (
		<section
			id='selected-works'
			className='selected-works'
		>
			<Curves
				orientation='top'
				fill='#101214'
				className='selected-works__curves--top'
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
					<Link href="/projects"><Button>See more projects</Button></Link>
				</header>

				<ProjectsList projects={projects} />

				<div className="selected-works__actions">
					<Link href="/projects"><Button color='secondary'>See more projects</Button></Link>
				</div>
			</div>

			<Curves
				orientation='bottom'
				fill='#101214'
				className='selected-works__curves--bottom'
			/>
		</section>
	);
};

export default SelectedWork;
