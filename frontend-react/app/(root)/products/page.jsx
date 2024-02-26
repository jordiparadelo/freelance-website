import Link from "next/link";
import React from "react";
// Styles
import "./styles.scss";

async function getProducts() {
	const res = await fetch(`http://localhost:3000/api/products`);
	return res.json();
}

const ProductsPage = async () => {
	const products = await getProducts();

	return (
		<>
			<header>
				<div className='container'>
					<h1>Products</h1>
				</div>
			</header>
			<section>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<Link href={`/products/${product.id}`}>
								<h1 key={product.id}>Product: {product.title}</h1>
							</Link>
						</li>
					))}
				</ul>
			</section>
		</>
	);
};

export default ProductsPage;
