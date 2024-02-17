import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "@/components";
import ShoppingCart from "@/public/animated-icons/shopping-cart.json";
import "./styles.scss";

const Products = async () => {
	const URL_PRODUCTS = `${process.env.API_URL}/products`;
	const numberOfProducts = 3;

	const products = await fetch(URL_PRODUCTS)
		.then((response) => response.json())
		.then((products) => products.slice(0, numberOfProducts));

	return (
		<section
			id='products'
			className='products'
		>
			<div className='container'>
				<div className='products__wrapper'>
					<header className='section-header'>
						<SectionLabel label='Our Products' animationData={ShoppingCart}/>
						<h2 className='section-header__title'>
							Boost your project with ready templates
						</h2>
					</header>

					<div className='products__list'>
						{products.map((item) => (
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

export default Products;
