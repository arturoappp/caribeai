import { cookies } from "next/headers";

export type Lang = "es" | "en";
export const LANGS: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "es";
export const COOKIE_NAME = "lang";

/** Lee el cookie del request actual (server-side) y devuelve el idioma. */
export function getLang(): Lang {
  const v = cookies().get(COOKIE_NAME)?.value;
  return v === "en" ? "en" : "es";
}
