import { NextResponse } from 'next/server'
import { PRODUCTS_ITEMS } from '@/constants'

const DATA_SOURCE = PRODUCTS_ITEMS
const API_KEY = process.env.DATA_API_KEY
 

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}