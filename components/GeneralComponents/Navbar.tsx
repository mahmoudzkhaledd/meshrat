"use client";
import { cn } from "@/lib/utils";
import Logo from "../ui/Logo";
import { useTranslations } from "next-intl";
import {
  setLanguage,
  useLanguage,
} from "@/Controllers/language/languageClient";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui/sheet";

const items = [
  {
    href: "/",
    key: "home",
  },
  {
    href: "/#services",
    key: "services",
  },
  {
    href: "/#reviews",
    key: "reviews",
  },
  {
    href: "/blogs",
    key: "blogs",
  },
];
export default function Navbar({ className }: { className?: string }) {
  const lang = useLanguage();
  const [sheet, setSheet] = useState();
  const t = useTranslations("navbar");
  const handelChangeLang = () => {
    setLanguage(lang.notLang);
    window.location.reload();
  };
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 flex w-full items-center z-50 justify-between bg-white p-5 transition md:px-16",
        className,
      )}
    >
      <Logo className="w-14" />
      <nav className="hidden lg:block">
        <div className="flex items-center justify-between gap-20 lg:gap-28">
          <div className="flex items-center justify-between gap-16">
            {items.map((e, idx) => (
              <a
                key={idx}
                className="text-lg font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
                href={e.href}
              >
                {t(e.key)}
              </a>
            ))}
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
      <Sheet>
        <SheetTrigger asChild>
          <Button variant={"outline"} className="flex lg:hidden" size={"icon"}>
            <Menu className="w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col pt-10">
          {items.map((e, idx) => (
            <a
              key={idx}
              className="text-lg text-center font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
              href={e.href}
            >
              {t(e.key)}
            </a>
          ))}
          <button
            onClick={handelChangeLang}
            lang={lang.notLang}
            className="text-lg text-center font-bold text-[#1d4d85] transition duration-500 hover:text-[#2b7dad]"
          >
            {lang.lang == "ar" ? "English" : "عربي"}
          </button>
        </SheetContent>
      </Sheet>
    </div>
  );
}
