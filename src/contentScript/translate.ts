import { Lang, store } from "./store";

export type Translations = Record<Lang, Partial<Record<string, string>>>

export const t = (T: Translations, key: string, replacements?: Record<string, string>) => {
  let translation = T[store.lang][key] || key;

  if (replacements) {
    for (const [placeholder, value] of Object.entries(replacements)) {
      translation = translation.replace(new RegExp(`{{${placeholder}}}`, 'g'), value);
    }
  }

  return translation;
};
