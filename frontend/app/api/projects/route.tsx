import { NextResponse } from 'next/server'
import { PROJECTS_ITEMS } from '@/constants'

const DATA_SOURCE = PROJECTS_ITEMS

export async function GET() {
  const res = DATA_SOURCE

  return NextResponse.json(res)
}