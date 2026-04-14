"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LOCALE_COOKIE, type Locale } from "@/lib/i18n/constants";

type Props = {
  locale: Locale;
  switchToEnglish: string;
  switchToSpanish: string;
};

export function LanguageSwitcher({
  locale,
  switchToEnglish,
  switchToSpanish,
}: Props) {
  const router = useRouter();
  const target: Locale = locale === "es" ? "en" : "es";
  const label = locale === "es" ? switchToEnglish : switchToSpanish;
  const flagSrc =
    locale === "es" ? "/english-flag-icon.webp" : "/spain-flag-icon.png";

  function handleClick() {
    const maxAge = 60 * 60 * 24 * 365;
    document.cookie = `${LOCALE_COOKIE}=${target};Path=/;Max-Age=${maxAge};SameSite=Lax`;
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex max-w-[min(100%,14rem)] shrink-0 items-center gap-2 rounded-md py-2 text-left text-sm font-medium text-section-heading underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-section-heading sm:max-w-none sm:gap-2.5 sm:text-base"
      aria-label={label}
    >
      <span
        className="relative h-5 w-7 shrink-0 overflow-hidden rounded-sm border border-border-subtle bg-white sm:h-6 sm:w-9"
        aria-hidden
      >
        <Image
          src={flagSrc}
          alt=""
          fill
          className="object-cover"
          sizes="36px"
        />
      </span>
      <span className="min-w-0 leading-snug">{label}</span>
    </button>
  );
}
