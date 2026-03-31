import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  // Add any request-level logic here
  // For example, redirecting www to non-www, or handling auth
  
  const response = NextResponse.next();
  
  // Add security headers that might not be covered by next.config.ts
  // next.config.ts headers apply to all routes, but sometimes you need dynamic headers
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
