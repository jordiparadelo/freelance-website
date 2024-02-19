import React from 'react'

async function getProduct(productId) {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    return res.json()
}

export async function generateMetadata({ params, searchParams }) {
	// read route params
	const id = params.id;

	// fetch data
	const product = await getProduct(id);

	// optionally access and extend (rather than replace) parent metadata
	// const previousImages = product.images.src

	return {
		title: product.title,
    description: product.details
	};
}


const ProductPage = async ({ params }) => {
    const product = await getProduct(params.id)
  return (
    <section>
        <h1>{params.id}</h1>
        <h1>{product.title}</h1>
    </section>
  )
}

export default ProductPage