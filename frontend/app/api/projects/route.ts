import { NextResponse } from 'next/server'
import { PROJECTS_ITEMS } from '@/constants'
// import type { NextApiRequest, NextApiResponse } from 'next'

const DATA_SOURCE = PROJECTS_ITEMS
const API_KEY = process.env.DATA_API_KEY
 

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}