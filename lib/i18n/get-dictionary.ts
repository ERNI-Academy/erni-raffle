import type { Locale } from "./constants";
import type { Messages } from "./messages";
import en from "@/messages/en.json";
import es from "@/messages/es.json";

const dictionaries: Record<Locale, Messages> = {
  es: es as Messages,
  en: en as Messages,
};

export type { Messages } from "./messages";

export function getDictionary(locale: Locale): Messages {
  return dictionaries[locale];
}
