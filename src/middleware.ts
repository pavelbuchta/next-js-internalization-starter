import { i18n } from "@/i18n/config";
import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

const intlMiddleware = createMiddleware(i18n);

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const shouldHandle =
    pathname === "/" ||
    new RegExp(`^/(${i18n.locales.join("|")})(/.*)?$`).test(
      request.nextUrl.pathname
    );
  if (!shouldHandle) return;

  return intlMiddleware(request);
}
