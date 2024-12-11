import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { verify } from './lib/jwt'

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  const payload = await verify(token)
  
  if (!payload) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard/:path*'
}
