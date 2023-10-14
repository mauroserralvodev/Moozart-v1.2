import { authMiddleware } from "@clerk/nextjs";
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware

export default authMiddleware({
      publicRoutes: ["/sign-up"],
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 
export function middleware(request: NextRequest) {
 
  request.nextUrl.searchParams.set('from', request.nextUrl.pathname)
  request.nextUrl.pathname = '/login'
 
  return NextResponse.redirect(request.nextUrl)
}