import ServiceCard from "@/components/GeneralComponents/ServiceCard";
import { Service } from "@prisma/client";
import { useTranslations } from "next-intl";
import React from "react";

export default function ServicesSection({ services }: { services: Service[] }) {
  const t = useTranslations("homePage.servicesSection");
  if (services.length == 0) {
    return <></>;
  }
  

  return (
    <section className="pt-24 md:pt-32" id="services">
      <h2 className="mb-10 text-center text-4xl font-bold">{t('title')}</h2>
      <div className="flex flex-col gap-4 lg:grid lg:grid-cols-3">
        {services?.map((e, idx) => <ServiceCard service={e} key={idx} />)}
      </div>
    </section>
  );
}
