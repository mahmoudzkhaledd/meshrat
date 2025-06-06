import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
import { getLanguage } from "@/Controllers/language/languageUtils";
import { cn } from "@/lib/utils";
import WhatsAppContact from "@/components/GeneralComponents/WhatsAppContact";
import { Button } from "@/components/ui/button";
import {
  CircleDollarSign,
  Clock,
  Coins,
  LucideIcon,
  MapPin,
  Siren,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
type props = { icon: string; wordKey: string };
const items: props[] = [
  {
    wordKey: "service",
    icon: "/images/service.png",
    // icon: Clock,
  },
  {
    wordKey: "price",
    icon: "/images/price.png",
    // icon: CircleDollarSign,
  },
  {
    wordKey: "location",
    icon: "/images/map.png",
    // icon: MapPin,
  },
  {
    wordKey: "expert",
    icon: "/images/experience.png",
    // icon: Siren,
  },
];

const CustomCard = ({ icon, text }: { icon: string; text: string }) => {
  return (
    <Card className="flex h-[250px] w-full flex-col items-center justify-center overflow-hidden shadow-lg transition-all hover:border-2 hover:border-blue-600 md:h-[200px]">
      <CardHeader>
        <Image src={icon} alt="logo of the website" width={60} height={60} />
      </CardHeader>
      <CardContent className="text-balance text-center text-xl font-bold">
        {text}
      </CardContent>
    </Card>
  );
};

export default function HeroSection() {
  const t = useTranslations("homePage.hero");
  const lang = getLanguage();
  return (
    <section className="pt-24 md:pt-20" id="home">
      <div className="flex flex-col-reverse items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div
          className={cn("tracking-wider md:tracking-normal", {
            "text-right": lang.lang == "ar",
          })}
        >
          <h1 className="text-balance text-4xl font-bold lg:text-5xl">
            {t("title")}
          </h1>
          <p className="my-5 text-balance text-lg md:text-base lg:text-xl">
            {t("subtitle")}
          </p>
          <WhatsAppContact className="w-full md:w-auto" />
        </div>
        <div className=" ">
          <Image
            width={250}
            height={250}
            className="fade max-w-[250px]"
            src="/images/logo.png"
            alt="main logo of the website"
          />
        </div>
      </div>
      <div className="mt-20 flex flex-wrap items-center justify-center gap-5 px-10 text-center sm:px-5 md:flex-nowrap md:justify-around md:px-0">
        {items.map((e, idx) => (
          <CustomCard key={idx} icon={e.icon} text={t(e.wordKey)} />
        ))}
      </div>
    </section>
  );
}
