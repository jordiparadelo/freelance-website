import React from "react";
import Image from "next/image";
import Link from "next/link";
// Components
import { SectionLabel, Button } from "@/ui";
// Constants
// import { PRODUCTS as products } from "@/constants";
import {getLimitedProducts} from '@/lib/actions'
// Assets
import ShoppingCart from "@/public/assets/animated-icons/shopping-cart.json";
// Styles
import styles from "./styles.module.scss";

const Products = async () => {
	const { data: products } = await getLimitedProducts(3)

	return (
		<section id='products' className={styles.products}>
			<div className={styles.container}>
				<div className={styles.products__wrapper}>
					<header className={styles.section_header}>
						<div className={styles.section_header__wrapper}>
							<SectionLabel
								label='Products'
								animationData={ShoppingCart}
								className={styles.section_label}
							/>
							<h2 className={styles.section_header__title}>
								Boost your project with ready templates
							</h2>
							<div className={styles.actions_wrapper}>
								<Button>See more products</Button>
							</div>
						</div>
					</header>

					<div className={styles.products__list}>
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
		<figure className={styles.product}>
			<div className={styles.product__image}>
				<Image
					unoptimized
					src={product.image.src}
					alt={product.image.alt}
					width={product.image.width}
					height={product.image.height}
				/>
			</div>
			<figcaption className={styles.product__content}>
				<div className={styles.product__heading}>
					<p className={styles.product__category}>{product.category}</p>
					<h3 className={styles.product__title}>{product.title}</h3>
				</div>
				<p className={styles.product__details}>{product.details}</p>

				<div className={styles.product__content_block}>
					<h4>Format</h4>
					<ul className={styles.product__format_list}>
						{product.formats.map((formats) => (
							<li
								className={styles.product__format}
								key={formats}
							>
								<Image
									unoptimized
									key={formats}
									src={`/${formats}.svg`}
									width={32}
									height={32}
									alt={`${formats}`}
									className={styles.product__format_icon}
								/>
							</li>
						))}
					</ul>
				</div>
				<p className={styles.product__price}>{product.price}</p>
			</figcaption>
		</figure>
	);
};
