import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "1. Objeto del sorteo",
    body: (
      <p>
        La organización llevará a cabo el sorteo de unas gafas{" "}
        <strong>Meta Quest 3S</strong> entre las personas participantes que
        cumplan las condiciones recogidas en estas bases.
      </p>
    ),
  },
  {
    title: "2. Requisitos de participación",
    body: (
      <>
        <p>Podrán participar quienes cumplan al menos una de estas condiciones:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-erni-navy">
          <li>
            Estar entre las <strong>10 primeras posiciones</strong> del ranking
            del juego <strong>ERNI Bots (CTF)</strong>.
          </li>
          <li>
            Estar entre las <strong>10 primeras posiciones</strong> del ranking
            del videojuego <strong>Fire or Fired</strong>.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Ámbito geográfico",
    body: (
      <p>
        El envío del premio se realizará únicamente a direcciones situadas en la{" "}
        <strong>península ibérica</strong>.
      </p>
    ),
  },
  {
    title: "4. Fecha del sorteo",
    body: (
      <p>
        El sorteo tendrá lugar el <strong>22 de abril de 2026</strong>.
      </p>
    ),
  },
  {
    title: "5. Selección del ganador y comunicación",
    body: (
      <>
        <p>
          El ganador o la ganadora se elegirá entre quienes cumplan los
          requisitos de participación.
        </p>
        <p className="mt-3">
          La organización contactará con la persona ganadora por{" "}
          <strong>correo electrónico</strong> para solicitar la dirección postal
          a la que enviar el premio.
        </p>
      </>
    ),
  },
  {
    title: "6. Aceptación del premio y suplencias",
    body: (
      <>
        <p>
          La persona ganadora dispondrá de <strong>5 días naturales</strong>{" "}
          desde el envío del correo para responder y facilitar los datos
          necesarios para el envío.
        </p>
        <p className="mt-3">
          Si no hubiera respuesta en ese plazo, la organización podrá{" "}
          <strong>celebrar un nuevo sorteo</strong> entre los participantes
          elegibles para designar otra persona ganadora.
        </p>
      </>
    ),
  },
  {
    title: "7. Aceptación de las bases",
    body: (
      <p>
        La participación en el sorteo supone la{" "}
        <strong>aceptación íntegra</strong> de estas bases.
      </p>
    ),
  },
] as const;

export default function Home() {
  return (
    <div className="flex min-h-full flex-1 flex-col overflow-x-hidden">
      <header className="sticky top-0 z-30 border-b border-border-subtle bg-white/95 backdrop-blur-sm">
        <div className="flex h-16 w-full min-w-0 items-center justify-start px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center py-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-section-heading"
          >
            <Image
              src="/ERNI_Logo.png"
              alt="ERNI"
              width={300}
              height={72}
              className="h-8 w-auto max-w-[min(200px,55vw)] object-contain object-left sm:h-12 sm:max-w-[260px] lg:h-14 lg:max-w-[300px]"
              priority
            />
          </Link>
        </div>
      </header>

      <section className="relative isolate min-h-[min(52vw,360px)] w-full overflow-hidden bg-surface-muted sm:min-h-[420px] lg:min-h-[480px]">
        <Image
          src="/Metaquest.png"
          alt="Meta Quest 3S"
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
              <span className="block">Bases del sorteo</span>
              <span className="block">Meta Quest 3S</span>
            </h1>
          </div>
        </div>
      </section>

      <main className="flex-1 bg-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <p className="text-base leading-[1.6] text-foreground sm:text-lg">
            A continuación se recogen las bases del sorteo. Su finalidad es
            informar de forma clara sobre el premio, quién puede participar y
            cómo se resolverá la entrega del mismo.
          </p>

          <div className="mt-10 space-y-10 border-t border-border-subtle pt-10 sm:mt-12 sm:space-y-12 sm:pt-12">
            {sections.map((s) => (
              <section key={s.title} aria-labelledby={`sec-${slugId(s.title)}`}>
                <h2
                  id={`sec-${slugId(s.title)}`}
                  className="text-pretty font-sans text-[clamp(1.25rem,4vw,2.25rem)] font-bold leading-[1.15] tracking-tight text-section-heading"
                >
                  {s.title}
                </h2>
                <div className="mt-6 space-y-3 text-base leading-[1.6] text-foreground">
                  {s.body}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border-subtle bg-surface-muted">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm leading-normal text-foreground/75 sm:px-6 sm:py-8 lg:px-8">
          © {new Date().getFullYear()} ERNI. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}

function slugId(title: string) {
  return title
    .toLowerCase()
    .replace(/^\d+\.\s*/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
