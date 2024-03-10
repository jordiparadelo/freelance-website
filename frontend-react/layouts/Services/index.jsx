import Image from "next/image";
import Link from "next/link";
// Data
import { SERVICES } from "@/constants";
// Components
import { SectionLabel } from "@/components";
// Assets
import ShoppingCart from "@/public/animated-icons/shopping-cart.json";
// Styles
import "./styles.scss";

const Services = () => {
	return (
		<section
			className='services'
			id='services'
		>
			<div className='container'>
				<div className='products__wrapper'>
					<header className='section-header'>
						<SectionLabel
							label='Services'
							animationData={ShoppingCart}
						/>
						<h2 className='section-header__title'>A breakdown of what we do</h2>
						<p>
							Your go-to solution for web and mobile apps, like many founders,
							startups, and agencies do.
						</p>
					</header>

					<div className='products__list'>
						{SERVICES.map((item) => (
							<Link
								href={item.href}
								key={item.id}
							>
								<figure className='product'>
									<div className='product__image'>
										<Image
											src={item.image.src}
											alt={item.image.alt}
											width={item.image.width}
											height={item.image.height}
										/>
									</div>
									<figcaption className='product__details'>
										<h3 className='product__title'>{item.title}</h3>
										<p className='product__price'>{item.price}</p>
									</figcaption>
								</figure>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
