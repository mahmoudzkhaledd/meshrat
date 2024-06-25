"use client";

import { useLocale } from "next-intl";

export const useLanguage = (): { lang: "ar" | "en"; notLang: "ar" | "en" } => {
  const lang = useLocale();

  const l = lang == "en" ? "en" : "ar";
  return {
    lang: l,
    notLang: l == "ar" ? "en" : "ar",
  };
};

export const setLanguage = (lang: "ar" | "en") => {
    document.cookie = `NEXT_LOCALE=${lang};path=/;`;
};
