"use client";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";
import { useTranslations } from "next-intl";
import {
  setLanguage,
  useLanguage,
} from "@/Controllers/language/languageClient";

export default function Navbar({ className }: { className?: string }) {
  const lang = useLanguage();
  const t = useTranslations("navbar");
  const handelChangeLang = () => {
    setLanguage(lang.notLang);
    window.location.reload();
  };
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 flex w-full items-center justify-between bg-white p-5 transition md:px-16",
        className,
      )}
    >
      <Logo className="w-14" />
      <nav>
        <div className="flex items-center justify-between gap-20 lg:gap-28">
          <div className="flex items-center justify-between gap-16">
            <a
              className="mt-0.5 border-b-2 border-[#2b7dad] text-lg font-bold text-primary transition duration-500 hover:text-[#2b7dad]"
              href="/"
            >
              {t("home")}
            </a>

            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="/#services"
            >
              {t("services")}
            </a>
            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="/#reviews"
            >
              {t("reviews")}
            </a>
            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="/blogs"
            >
              {t("blogs")}
            </a>
            <a
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href="/contact"
            >
              {t("contact")}
            </a>
            <button
              onClick={handelChangeLang}
              lang={lang.notLang}
              className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
            >
              {lang.lang == "ar" ? "English" : "عربي"}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
