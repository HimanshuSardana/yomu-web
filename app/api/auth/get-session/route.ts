import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  console.log("[get-session] Getting session...");
  const session = await auth.api.getSession({
    headers: request.headers,
  });
  console.log("[get-session] Session result:", session);

  return NextResponse.json({ session, user: session?.user });
}
