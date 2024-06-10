import CustomHeader from "@/components/GeneralComponents/CustomHeader";
import NotFoundComponent from "@/components/GeneralComponents/NotFoundComponent";
import ServiceCard from "@/components/GeneralComponents/ServiceCard";
import { configs } from "@/constants/CoreTexts";
import { prisma } from "@/lib/db";
import { Info } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};
export default async function ServicesPage({}) {
  const services = await prisma.service.findMany({
    where: {
      active: true,
    },
  });

  return (
    <section>
      <CustomHeader data={configs.servicesPage} />
      <div className="flex flex-row flex-wrap gap-4">
        {services.map((e, idx) => (
          <ServiceCard key={idx} service={e} />
        ))}
        {services.length == 0 && (
          <NotFoundComponent
            title="No Services added yet!"
            className="mt-9"
            icon={Info}
          />
        )}
      </div>
    </section>
  );
}
