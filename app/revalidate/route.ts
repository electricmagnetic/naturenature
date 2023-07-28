import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

/**
 * Route designed to invalidate the (server-side) cache, for example following an insert/update.
 */
export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";
  revalidatePath(path);
  return NextResponse.json({ revalidated: true, now: Date.now() });
}
