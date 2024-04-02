// "use client";

import React, { Suspense } from "react";
import Link from "next/link";
// Components
import { Button, Curves, ProjectsList, SectionLabel } from "@/ui";
import Computer from "@/public/animated-icons/selected-work.json";
// Styles
import "./styles.scss";
// Lib
import {getLimitedProjects} from '@/lib/actions'

const SelectedWork = async () => {
	const { data: projects } = await getLimitedProjects(3)

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

					<Suspense fallback={"...Loading"}>
						<ProjectsList projects={projects} />
					</Suspense>
				</div>
			</div>
		</section>
	);
};

export default SelectedWork;
