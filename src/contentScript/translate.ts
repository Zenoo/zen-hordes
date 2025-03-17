import { store } from "./store";

export const replaceString = (
  str: string,
  replacements: Partial<Record<string, string>>
) => {
  return str.replace(/{{(.*?)}}/g, (_match, key) => {
    const text = String(key);
    return replacements[text] ?? text;
  });
};

export const t = (T: Translations, key: string, replacements?: Partial<Record<string, string>>) => {
  let translation = T[store["hordes-lang"]]?.[key] ?? key;

  if (replacements) {
    translation = replaceString(translation, replacements);
  }

  return translation;
};
