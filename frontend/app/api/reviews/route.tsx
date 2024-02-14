import { NextResponse } from 'next/server'
import { REVIEWS } from '@/constants'

const DATA_SOURCE = REVIEWS

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
} 