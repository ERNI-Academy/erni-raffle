import Image from "next/image";
import { SectionBlocks } from "@/components/SectionBlocks";
import { SiteHeader } from "@/components/SiteHeader";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { getLocale } from "@/lib/i18n/get-locale";

export default async function Home() {
  const locale = await getLocale();
  const d = getDictionary(locale);
  const year = new Date().getFullYear();

  return (
    <div className="flex min-h-full flex-1 flex-col overflow-x-hidden">
      <SiteHeader locale={locale} header={d.header} />

      <section className="relative isolate min-h-[min(52vw,360px)] w-full overflow-hidden bg-surface-muted sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/Metaquest.png"
          alt={d.hero.alt}
          fill
          priority
          className="object-cover object-[62%_center] sm:object-[68%_center]"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10 sm:from-black/65 sm:via-black/35"
          aria-hidden
        />
        <div className="relative z-10 flex min-h-[min(52vw,360px)] w-full items-center sm:min-h-[420px] lg:min-h-[480px]">
          <div className="w-full pl-[clamp(1rem,5vw,4.5rem)] pr-3 sm:pr-6 lg:pr-8">
            <h1 className="max-w-[min(100%,38rem)] text-pretty font-sans text-[clamp(1.75rem,5.8vw,4.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-white">
              <span className="block">{d.hero.titleLine1}</span>
              <span className="block">{d.hero.titleLine2}</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-base leading-[1.6] text-foreground sm:text-lg">
            {d.intro}
          </p>

          <div className="mt-10 space-y-10 border-t border-border-subtle pt-10 sm:mt-12 sm:space-y-12 sm:pt-12">
            {d.sections.map((section) => (
              <section
                key={section.id}
                aria-labelledby={`sec-${section.id}`}
              >
                <h2
                  id={`sec-${section.id}`}
                  className="text-pretty font-sans text-[clamp(1.25rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-section-heading"
                >
                  {section.title}
                </h2>
                <SectionBlocks blocks={section.blocks} />
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border-subtle bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm leading-normal text-foreground/75 sm:px-6 sm:py-8 lg:px-8">
          {d.footer.replace("{year}", String(year))}
        </div>
      </footer>
    </div>
  );
}
