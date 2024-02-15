import { NextResponse } from 'next/server'
import { PROJECTS_ITEMS } from '@/constants'


export async function GET(request: Request, context: any) {
  const { params } = context
  const data = PROJECTS_ITEMS
  const project = data.filter(project => project.id === params.id.toString())

  return NextResponse.json({project})
}