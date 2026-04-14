import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/constants";
import type { Messages } from "@/lib/i18n/get-dictionary";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Props = {
  locale: Locale;
  header: Messages["header"];
};

export function SiteHeader({ locale, header }: Props) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-subtle bg-white/95 backdrop-blur-sm">
      <div className="flex h-16 w-full min-w-0 items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex min-w-0 shrink items-center py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-section-heading"
        >
          <Image
            src="/ERNI_Logo.png"
            alt={header.logoAlt}
            width={300}
            height={72}
            className="h-8 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:h-12 sm:max-w-[260px] lg:h-14 lg:max-w-[300px]"
            priority
          />
        </Link>
        <LanguageSwitcher
          locale={locale}
          switchToEnglish={header.switchToEnglish}
          switchToSpanish={header.switchToSpanish}
        />
      </div>
    </header>
  );
}
