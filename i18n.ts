import { getRequestConfig } from "next-intl/server";
import { getLanguage } from "./Controllers/language/languageUtils";

export default getRequestConfig(async () => {
  const locale = getLanguage();

  return {
    locale: locale.lang,
    messages: (await import(`./messages/${locale.lang}.json`)).default,
  };
});
