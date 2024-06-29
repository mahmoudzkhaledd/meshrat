import { useTranslations } from "next-intl";
import React from "react";

export default function AboutUs() {
  const t = useTranslations("homePage.aboutUs");

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h2 className="mb-5 text-3xl font-semibold">{t("title")}</h2>
      <p className="flex text-balance text-center">{t("content")}</p>
    </div>
  );
}
