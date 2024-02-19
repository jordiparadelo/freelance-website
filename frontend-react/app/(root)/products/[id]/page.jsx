import React from 'react'
// Components
import { ProjectModal } from '@/components'

async function getProduct(productId) {
    const res = await fetch(`http://localhost:3000/api/products/${productId}`)
    return res.json()
}

export async function generateMetadata({params})  {

}


const ProductPage = async ({ params }) => {
    const product = await getProduct(params.id)
  return (
    <section>
        <ProjectModal project={product}/>
        {/* <h1>{params.id}</h1> */}
        {/* <h1>{product.title}</h1> */}
    </section>
  )
}

export default ProductPage