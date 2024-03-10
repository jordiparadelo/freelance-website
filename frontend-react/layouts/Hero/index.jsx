import Link from "next/link";
// Components
import { RequestBox, Button, InteractiveBackground } from "@/components";
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
					<h1
						className='hero__title'
						aria-label='digital design on demand'
					>
						<div
							className='hero_heading-row'
							aria-hidden
						>
							digital design <span className='divider'></span>
						</div>
						<div
							className='hero_heading-row'
							aria-hidden
						>
							<RequestBox
								topFace={"Get Started today!"}
								frontFace={"Drag request"}
							/>
						</div>
						<div
							className='hero_heading-row'
							aria-hidden
						>
							on demand
						</div>
					</h1>

					<div className='hero__details'>
						<p>
							Launch your next project in <strong>no-time.</strong>{" "}
						</p>
						<Link href='/projects'>
							<Button className='button--secondary'>Check works</Button>
						</Link>
					</div>
				</div>
			</div>
			<InteractiveBackground />
		</header>
	);
};

// const Hero = () => {
//   return (
//     <header className="hero" id="hero">
//       <div className="container hero__container">
//         <div className="hero__heading-wrapper">
//           <p>Custom</p>
//           <h1 className="hero__title">
//             Design on Demand
//           </h1>
//         </div>
//         <div className="hero__details">
//           <h2>Launch your next project in <strong>no-time.</strong> </h2>
//         </div>
//       </div>
//     </header>
//   )
// }

export default Hero;
