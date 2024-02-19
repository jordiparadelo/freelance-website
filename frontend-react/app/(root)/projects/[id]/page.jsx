import React from 'react'

async function getProjects(productId) {
    const res = await fetch(`http://localhost:3000/api/projects/${productId}`)
    return res.json()
}

export async function generateMetadata({params})  {

}


const ProductPage = async ({ params }) => {
    const product = await getProjects(params.id)
  return (
    <section>
        <h1>{params.id}</h1>
        <h1>{product.title}</h1>
    </section>
  )
}

export default ProductPage