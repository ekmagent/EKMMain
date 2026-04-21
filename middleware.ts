import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /tools/* paths (except the login API)
  if (!pathname.startsWith("/tools")) return NextResponse.next();
  if (pathname.startsWith("/api/tools/auth")) return NextResponse.next();

  // Check for auth cookie
  const token = request.cookies.get("tools_auth")?.value;
  const expected = process.env.TOOLS_PASSWORD;

  if (!expected || token !== expected) {
    // Redirect to login page (unless already there)
    if (pathname === "/tools") return NextResponse.next();
    const url = request.nextUrl.clone();
    url.pathname = "/tools";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/tools/:path*"],
};
