import React from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import { SectionLabel, Button } from "@/components";
// Constants
import { PRODUCTS_ITEMS as products } from "@/constants";
// Assets
import ShoppingCart from "@/public/animated-icons/shopping-cart.json";
// Styles
import "./styles.scss";

const Products = async () => {
	// const URL_PRODUCTS = `${process.env.API_URL}/products`;
	// const numberOfProducts = 3;

	// const products = await fetch(URL_PRODUCTS)
	// 	.then((response) => response.json())
	// 	.then((products) => products.slice(0, numberOfProducts));

	return (
		<section
			id='products'
			className='products'
		>
			<div className='container'>
				<div className='products__wrapper'>
					<header className='section-header'>
						<div className='section-header__wrapper'>
							<SectionLabel
								label='Products'
								animationData={ShoppingCart}
							/>
							<h2 className='section-header__title'>
								Boost your project with ready templates
							</h2>
							<div className='actions_wrapper'>
								<Button>See more products</Button>
							</div>
						</div>
					</header>

					<div className='products__list'>
						{products.map((product) => (
							<Link
								href={product.href}
								key={product.id}
							>
								<Product product={product} />
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Products;

export const Product = ({ product }) => {
	return (
		<figure className='product'>
			<div className='product__image'>
				<Image
					src={product.image.src}
					alt={product.image.alt}
					width={product.image.width}
					height={product.image.height}
				/>
			</div>
			<figcaption className='product__content'>
				<div className='product__heading'>
					<p className='product__category'>{product.category}</p>
					<h3 className='product__title'>{product.title}</h3>
				</div>
				<p className='product__details'>{product.details}</p>

				<div className='product__content-block'>
					<h4>Format</h4>
					<ul className='product__format-list'>
						{product.formats.map((formats) => (
							<li
								className='product__format'
								key={formats}
							>
								<Image
									key={formats}
									src={`/${formats}.svg`}
									width={32}
									height={32}
									alt={`${formats}`}
									className='product__format-icon'
								/>
							</li>
						))}
					</ul>
				</div>
				<p className='product__price'>{product.price}</p>
			</figcaption>
		</figure>
	);
};
