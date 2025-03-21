import { cookies } from "next/headers";

export const getLanguage = (): { lang: "ar" | "en"; notLang: "ar" | "en" } => {
  const lang = cookies().get("NEXT_LOCALE")?.value;
  const l = lang == "en" ? "en" : "ar";
  return {
    lang: l,
    notLang: l == "ar" ? "en" : "ar",
  };
};

