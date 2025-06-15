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

export const t = (
  T: Translations,
  key: string,
  replacements?: Partial<Record<string, string | number>>
) => {
  const lang = store["hordes-lang"];
  let translationKey = key;

  // Handle pluralization if "count" is present in replacements
  if (replacements && typeof replacements.count == "number") {
    const { count } = replacements;
    if (count === 1 && T[lang]?.[`${key}_one`]) {
      translationKey = `${key}_one`;
    } else if (T[lang]?.[`${key}_other`]) {
      translationKey = `${key}_other`;
    }
  }

  let translation = T[lang]?.[translationKey] ?? key;

  if (replacements) {
    translation = replaceString(translation, replacements);
  }

  return translation;
};
