import type { Locale } from "./constants";

type LangEntry = { tag: string; q: number; index: number };

/**
 * Elige es/en a partir del encabezado Accept-Language (RFC 7231).
 * - Respeta `q` y el orden del encabezado cuando hay empate.
 * - Solo mapea códigos base `es` y `en` (incluye es-ES, en-US, etc.).
 * - Si no hay ninguno soportado, por defecto español.
 */
export function negotiateLocale(acceptLanguage: string | null): Locale {
  const raw = acceptLanguage?.trim();
  if (!raw) return "es";

  const entries: LangEntry[] = [];

  raw.split(",").forEach((part, index) => {
    const trimmed = part.trim();
    if (!trimmed) return;

    const [primary, ...params] = trimmed.split(";").map((s) => s.trim());
    if (!primary || primary === "*") return;

    const tag = primary.toLowerCase();
    let q = 1;
    for (const param of params) {
      const eq = param.indexOf("=");
      if (eq === -1) continue;
      const key = param.slice(0, eq).trim().toLowerCase();
      const val = param.slice(eq + 1).trim();
      if (key === "q") {
        const n = Number.parseFloat(val);
        if (!Number.isNaN(n)) q = Math.min(1, Math.max(0, n));
      }
    }

    if (q <= 0) return;
    entries.push({ tag, q, index });
  });

  entries.sort((a, b) => (b.q - a.q) || (a.index - b.index));

  for (const { tag } of entries) {
    const base = tag.split("-")[0] ?? tag;
    if (base === "es") return "es";
    if (base === "en") return "en";
  }

  return "es";
}
