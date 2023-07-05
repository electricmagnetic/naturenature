import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/types/supabase";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient<Database>({ req, res });

  const { data, error } = await supabase.auth.getSession()
  const user = data.session?.user;

  if(error) console.log(error);

  // (1) Anonymous user redirect (doesn't apply to /account because of the matcher config)
  if (!user) {
    // TODO add code to remember original linnk
    return NextResponse.redirect(new URL("account", req.url))
  }

  return res;
}

// Don't apply to these pages (including /account)
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|account).*)',],
};
