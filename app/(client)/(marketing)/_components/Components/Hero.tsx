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
  // return (
  //   <div className="flex h-full w-full flex-col flex-wrap items-center justify-center gap-4 rounded-xl bg-muted px-5 py-5 text-center shadow">
  //     <TopIcon />
  //     <p className="text-lg font-semibold">{text}</p>
  //   </div>
  // );
  return (
    <Card className="flex h-[250px] w-full flex-col items-center justify-center overflow-hidden shadow-lg transition-all duration-500 hover:border-2 hover:border-blue-600 md:h-[200px]">
      <CardHeader>
        <Image src={icon} alt="logo" width={60} height={60} />
      </CardHeader>
      <CardContent className="text-balance text-center text-xl font-bold">
        {text}
      </CardContent>
    </Card>
  );
  // return (
  //   <div className="w-xl flex flex-col items-center justify-center rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-4 lg:w-1/5">
  //     <TopIcon size={35} className="mb-5" />
  //     <h3 className="mb-2 text-xl font-bold">{text}</h3>
  //   </div>
  // );
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
          <h1 className="text-balance text-4xl font-bold lg:text-7xl">
            {t("title")}
          </h1>
          <p className="my-10 text-balance text-lg md:text-base lg:text-xl">
            {t("subtitle")}
          </p>
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <Link className="w-full md:w-auto" href={"/contact"}>
              <Button className="w-full md:w-auto">{t("button")}</Button>
            </Link>
            <WhatsAppContact className="w-full md:w-auto"/>
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
      <div className="mt-20 flex flex-wrap items-center justify-center gap-5 px-10 text-center sm:px-5 md:flex-nowrap md:justify-around md:px-0">
        {items.map((e, idx) => (
          <CustomCard key={idx} icon={e.icon} text={t(e.wordKey)} />
        ))}
      </div>
    </section>
  );
}
