import { NextResponse } from 'next/server'
import { PROJECTS_ITEMS } from '@/constants'
// import type { NextApiRequest, NextApiResponse } from 'next'

const DATA_SOURCE = PROJECTS_ITEMS
const API_KEY = process.env.DATA_API_KEY
 

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}

// TODO: Resolve get specific item on get request
export async function GET_PRODUCT(request: Request) {
  const res = await request.json();

  console.log(res.data)

  const response = await fetch('http://localhost:3000/api/products/');
  const data = await response.json();
  const selectedProduct: ProductType = data.find((product: ProductType) => product.id === id);

  return NextResponse.json(selectedProduct);
}