import { NextResponse } from 'next/server'
import { REVIEWS } from '@/constants'
import type { NextApiRequest, NextApiResponse } from 'next'

const DATA_SOURCE = REVIEWS
const API_KEY = process.env.DATA_API_KEY
 

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}

export async function GET_REVIEW(id: string) {
  const res = DATA_SOURCE.find((review) => review.id === id)

  return NextResponse.json(res)
}