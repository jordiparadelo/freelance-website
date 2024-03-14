import Link from "next/link";
// Components
import { RequestBox, Button } from "@/components";
// Styles
import "./styles.scss";

const Hero = () => {
	return (
		<header
			className='hero'
			id='hero'
		>
			<div className='container hero__container'>
				<div className='hero__heading-wrapper'>
					<div className='hero__label'>Design & Dev freelancer</div>
					<div className='hero__title-wrapper'>
						<h1
							className='hero__title'
							aria-label='digital design on demand'
						>
							Design for fast growing companies
						</h1>
					</div>
				</div>
				<div className='hero__details'>
					<p>
						Launch your next project in <strong>no-time.</strong>{" "}
					</p>
					<Link href='/projects'>
						<Button className='button--primary'>Start a new Project</Button>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Hero;
