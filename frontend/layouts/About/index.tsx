import React from "react";
import { ServiceForm, SectionLabel, AnimatedParagraph } from "@/components";
import Box from "@/public/animated-icons/services.json";
import "./styles.scss";

const About = () => {
	return (
		<section
			id='about'
			className='about'
		>
			<div className='container'>
				<div className='about__wrapper'>
					<header className='about__header'>
						{/* <h2 className='about__title'>
							Freelancer, focused on develop digital products from scratch.
							Always align with design trends and technologies to solve business
							needs.
						</h2> */}
						<AnimatedParagraph className="about__title">
							Freelancer, focused on develop digital products from scratch.
							Always align with design trends and technologies to solve business
							needs.
						</AnimatedParagraph>
					</header>
					<span className='divider'></span>
					<div className='about__services'>
						<SectionLabel
							label='Services'
							animationData={Box}
						/>
						<h3 className='about__services-title'>
							Unlock your design potential with{" "}
						</h3>
						<ServiceForm />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
