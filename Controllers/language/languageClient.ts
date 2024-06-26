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
  var date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  document.cookie = `NEXT_LOCALE=${lang};expires=${date.toUTCString()};path=/;`;
};
