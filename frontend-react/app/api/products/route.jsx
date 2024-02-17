import { NextResponse } from 'next/server'
import { PRODUCTS_ITEMS } from '../../../constants'

const DATA_SOURCE = PRODUCTS_ITEMS

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}