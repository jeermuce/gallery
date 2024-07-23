import { type NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirect all paths to the home page
  if (url.pathname !== "/") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
