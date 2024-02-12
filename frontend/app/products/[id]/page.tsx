import React from "react";
import "./styles.scss";

const URL_PRODUCTS = `${process.env.API_URL}/products`;

export async function generateStaticParams() {
	const products = await fetch(URL_PRODUCTS).then((res) => res.json());

	return products.map((product: ProductType) => ({
		id: product.id,
	}));
}

async function getProduct(id: string) {
	const response = await fetch(URL_PRODUCTS);
	const data = await response.json();
	const selectedProduct: ProductType = data.find(
		(product: ProductType) => product.id === id
	);
	return selectedProduct;
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function ProductPage({
	params,
}: {
	params: { id: string };
}) {
	const product = await getProduct(params.id);

	return (
		<section className='product-page'>
			<header className='product-page__header'>
				<div className='product-page__heading-wrapper'>
					<h1>{product?.title}</h1>
					<p>{product?.details}</p>
				</div>
				<div className='product-page__heading-actions'>
					<button>Likes {product?.likes}</button>
					<button>comments {product?.comments.length}</button>
					<a
						href={product?.preview}
						target='_blank'
					>
						Preview
					</a>
				</div>
			</header>
		</section>
	);
}
