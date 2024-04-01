// "use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// Components
import { Button, Curves, ProjectsList, SectionLabel } from "@/components";
// Hooks
// import useFetchProjects from "../../hooks/useFetchProjects";
// Assets
import Computer from "@/public/animated-icons/selected-work.json";
// Styles
import { PROJECTS_ITEMS as projects } from "@/constants";
// Styles
import "./styles.scss";
import { supabase } from "@/lib/superbase";

const SelectedWork = async () => {
	// const projects = await fetch('http://localhost:3000/api/projects').then((res) => res.json());

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
				<div className='section__wrapper'>
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
						<Link href='/projects'>
							<Button style={{ background: "white", color: "black" }}>
								See more projects
							</Button>
						</Link>
					</header>

					{/* <ProjectsList projects={projects} /> */}

					<Suspense fallback={'...Loading'}>
						<ProjectsList projects={projects} />
					</Suspense>
				</div>
			</div>
		</section>
	);
};

export default SelectedWork;
