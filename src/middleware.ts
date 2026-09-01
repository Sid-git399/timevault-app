import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Browsing the catalog is public. Saving favorites and sending inquiries
// requires an account, and that's enforced here — not just by hiding buttons.
export const config = {
  matcher: ["/favorites/:path*", "/inquiries/:path*"],
};
