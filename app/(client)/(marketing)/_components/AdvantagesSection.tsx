import { getLanguage } from "@/Controllers/language/languageUtils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const items: { titleKey: string; subTitleKey: string }[] = [
  {
    titleKey: "expertTitle",
    subTitleKey: "expertDesc",
  },
  {
    titleKey: "scheduling",
    subTitleKey: "schedulingDesc",
  },
  {
    titleKey: "comfort",
    subTitleKey: "comfortDesc",
  },
];

function CustomAdvSection({
  number,
  title,
  subTitle,
}: {
  number: number;
  title: string;
  subTitle: string;
}) {
  return (
    <div className="hover-slide flex h-full w-full flex-col items-center justify-center rounded-lg bg-muted px-4 py-10 text-center lg:py-20">
      <h2 className="mb-2 text-5xl font-bold">{number}</h2>
      <span className="mb-4 text-balance text-2xl font-semibold">{title}</span>
      <p className="text-balance text-lg">{subTitle}</p>
    </div>
  );
}

export default function AdvantagesSection() {
  const t = useTranslations("homePage.advSection");
  const lang = getLanguage();

  return (
    <div className="mt-16 flex flex-col items-center justify-center">
      <h2 className="mb-5 text-3xl font-semibold">{t("title")}</h2>
      <div className="grid w-full grid-cols-1 justify-center gap-5 lg:grid-cols-3">
        {items.map((e, idx) => (
          <CustomAdvSection
            key={idx}
            number={idx + 1}
            title={t(e.titleKey)}
            subTitle={t(e.subTitleKey)}
          />
        ))}
      </div>
      
      <div className="mt-7 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 rounded-xl bg-muted px-7 py-6 lg:grid-cols-2">
          <div className="w-full">
            <img
              className="m-auto"
              src="./images/adv1.png"
              alt="many people asking for service"
            />
          </div>
          <div>
            <Link
              href={"/contact"}
              className="mt-4 block rounded-xl bg-red-500 px-4 py-2 text-center transition-all hover:bg-main"
            >
              <span className="text-lg font-semibold text-white">
                {t("contact")}
              </span>
            </Link>
            <ul className="mt-4 list-disc px-3 space-y-4 text-lg">
              {[...Array(3)].map((e, idx) => (
                <li key={idx}>{t(`ul.${idx}`)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 rounded-xl bg-muted px-7 py-6 lg:grid-cols-2">
          <div className="w-full">
            <img
              className="m-auto p-5 rounded-full aspect-square object-cover"
              src="./images/adv2.jpg"
              alt="management of the project"
            />
          </div>
          <div>
            <div className="mt-4 rounded-xl bg-red-500 px-4 py-2 text-center transition-all hover:bg-main">
              <span className="text-lg font-semibold text-white">
                {t("ul2Title")}
              </span>
            </div>
            <ul className="mt-4 list-disc px-3 text-lg">
              {[...Array(3)].map((e, idx) => (
                <li key={idx}>{t(`ul2.${idx}`)}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-7 w-full">
        <div className="grid w-full grid-cols-1 justify-center rounded-lg bg-muted px-4 py-6 text-center lg:grid-cols-2">
          <div className="flex flex-col items-center justify-center">
            <Link
              href={"/contact"}
              className="block rounded-xl bg-red-500 px-6 py-4 transition-all hover:bg-main"
            >
              <span className="text-center text-2xl font-semibold text-white">
                {t("contact")}
              </span>
            </Link>
            <span className="mt-4 text-balance text-lg font-normal">
              {t("care")}
            </span>
            <span className="mt-4 text-balance text-lg font-normal">
              {t("careDesc")}
            </span>
          </div>
          <div className="w-full">
            <img
              className={"m-auto max-w-[250px]"}
              src="./images/adv3.png"
              alt="projects list image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
