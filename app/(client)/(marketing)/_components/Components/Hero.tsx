import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { getLanguage } from "@/Controllers/language/languageUtils";
import { cn } from "@/lib/utils";
import WhatsAppContact from "@/components/GeneralComponents/WhatsAppContact";
import { Button } from "@/components/ui/button";
import { Clock, Coins, LucideIcon, MapPin, Siren } from "lucide-react";
type props = { icon: LucideIcon; wordKey: string };
const items: props[] = [
  {
    wordKey: "service",
    icon: Clock,
  },
  {
    wordKey: "price",
    icon: Coins,
  },
  {
    wordKey: "location",
    icon: MapPin,
  },
  {
    wordKey: "expert",
    icon: Siren,
  },
];

const CustomCard = ({
  icon: TopIcon,
  text,
}: {
  icon: LucideIcon;
  text: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
      <TopIcon size={35} className="mb-5"/>
      <h3 className="mb-2 text-xl font-bold">{text}</h3>
    </div>
  );
};

export default function HeroSection() {
  const t = useTranslations("homePage.hero");
  const lang = getLanguage();
  return (
    <section className="pt-24 md:pt-32" id="home">
      <div className="flex flex-col-reverse items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div
          className={cn("tracking-wider md:tracking-normal", {
            "text-right": lang.lang == "ar",
          })}
        >
          <h1 className="text-4xl font-bold lg:text-7xl">{t("title")}</h1>
          <p className="my-10 text-lg md:text-base lg:text-xl">
            {t("subtitle")}
          </p>
          <div className="flex items-center gap-2">
            <Link href={"/contact"}>
              <Button>{t("button")}</Button>
            </Link>
            <WhatsAppContact />
          </div>
        </div>
        <div className=" ">
          <img
            className="fade max-w-[250px]"
            src="/images/logo.png"
            alt="hero"
          />
        </div>
      </div>
      <div className="xs:px-16 mt-10 flex flex-wrap items-center justify-center gap-5 px-10 text-center sm:px-5 md:flex-nowrap md:justify-around md:px-0">
        {items.map((e, idx) => (
          <CustomCard key={idx} icon={e.icon} text={t(e.wordKey)} />
        ))}
      </div>
    </section>
  );
}
