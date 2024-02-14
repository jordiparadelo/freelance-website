import { NextResponse } from 'next/server'
import { REVIEWS } from '@/constants'

const DATA_SOURCE = REVIEWS
const API_KEY = process.env.DATA_API_KEY
 

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
} 