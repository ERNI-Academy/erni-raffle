import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  LOCALE_COOKIE,
  LOCALE_HEADER,
  type Locale,
} from "@/lib/i18n/constants";
import { negotiateLocale } from "@/lib/i18n/negotiate-locale";

function readCookieLocale(request: NextRequest): Locale | null {
  const v = request.cookies.get(LOCALE_COOKIE)?.value;
  if (v === "es" || v === "en") return v;
  return null;
}

function resolveLocale(request: NextRequest): Locale {
  const fromCookie = readCookieLocale(request);
  if (fromCookie) return fromCookie;
  return negotiateLocale(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  const locale = resolveLocale(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  if (!readCookieLocale(request)) {
    response.cookies.set(LOCALE_COOKIE, locale, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    "/",
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
