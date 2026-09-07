import { NextResponse } from "next/server";
import { accessCookieName, authConfig } from "../../../lib/auth";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (body?.username !== authConfig.username || body?.password !== authConfig.password) {
    return NextResponse.json({ error: "Utilizador ou palavra-passe invalidos." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(accessCookieName, authConfig.accessToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });

  return response;
}