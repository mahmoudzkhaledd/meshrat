import ServiceCard from "@/components/GeneralComponents/ServiceCard";
import { Service } from "@prisma/client";
import React from "react";

export default function ServicesSection({ services }: { services: Service[] }) {
  if (services.length == 0) {
    return <></>;
  }
  return (
    <section className="pt-24 md:pt-32" id="services">
      <h2 className="mb-10 text-center text-4xl font-bold">Services</h2>
      {services?.map((e, idx) => <ServiceCard service={e} key={idx} />)}
    </section>
  );
}
