import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse, type NextRequest } from "next/server";

import type { Database } from "@/types/_supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const { data } = await supabase.auth.getSession();

  // Anonymous user redirect (except for login page itself)
  if (!data.session?.user && req.nextUrl.pathname !== "/account") {
    const url = new URL("/account", req.url);
    url.searchParams.append("next", req.nextUrl.pathname); // Store original URL as a search parameter called 'next'

    return NextResponse.redirect(url);
  }

  return res;
}

// Don't apply to these pages
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|auth).*)"],
};
