export type Locale = "es" | "en";

export const locales: Locale[] = ["es", "en"];

/** Cookie persistida al elegir idioma o al detectar el del navegador. */
export const LOCALE_COOKIE = "erni-lang";

/** Cabecera interna fijada por middleware (no expuesta al cliente). */
export const LOCALE_HEADER = "x-erni-locale";
