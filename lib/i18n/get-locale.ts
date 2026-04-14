import { cookies, headers } from "next/headers";
import { LOCALE_COOKIE, LOCALE_HEADER, type Locale } from "./constants";

export async function getLocale(): Promise<Locale> {
  const h = await headers();
  const fromHeader = h.get(LOCALE_HEADER);
  if (fromHeader === "es" || fromHeader === "en") return fromHeader;

  const c = (await cookies()).get(LOCALE_COOKIE)?.value;
  if (c === "es" || c === "en") return c;

  return "es";
}
