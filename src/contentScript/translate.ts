import { store } from "./store";

export const replaceString = (
  str: string,
  replacements: Partial<Record<string, string | number>>
) => {
  return str.replace(/{{(.*?)}}/g, (_match, key) => {
    const text = String(key);
    return replacements[text]?.toString() ?? text;
  });
};

export const t = (T: Translations, key: string, replacements?: Partial<Record<string, string | number>>) => {
  let translation = T[store["hordes-lang"]]?.[key] ?? key;

  if (replacements) {
    translation = replaceString(translation, replacements);
  }

  return translation;
};
