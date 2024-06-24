import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Service } from "@prisma/client";
import { franc } from "franc";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
export default function ServiceCard({ service }: { service: Service }) {
  const lang = franc(service.subDescription ?? "");
  const t = useTranslations("homePage.servicesSection");

  return (
    <div className="flex max-w-full flex-col rounded-lg border border-gray-200 bg-white shadow md:max-w-[350px]">
      <img
        style={{
          maxWidth: "100%",
          aspectRatio: 16 / 9,
          objectFit: "cover",
        }}
        className="rounded-t-lg"
        src={
          service.thumbnailImage ??
          "https://www.lumahealth.com/wp-content/uploads/2023/09/Chiang-Mai-hospitals.jpg"
        }
        alt=""
      />
      <div className="flex h-full flex-col p-5">
        <Link href={`/services/${service.id}`}>
          <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-900">
            {service.name}
          </h6>
        </Link>
        <p
          className={cn("mb-3 break-words font-normal text-gray-700", {
            "arabic-article": lang == "arb",
          })}
        >
          {service.subDescription == null || service.subDescription == ""
            ? ""
            : service.subDescription}
        </p>
        <Link className="mt-auto w-full" href={`/services/${service.id}`}>
          <Button className="w-full">{t('button')}</Button>
        </Link>
      </div>
    </div>
  );
}
