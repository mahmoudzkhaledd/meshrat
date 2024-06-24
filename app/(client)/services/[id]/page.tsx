import React from "react";
import { prisma } from "@/lib/db";
import NotFoundComponent from "@/components/GeneralComponents/NotFoundComponent";
import { Box, Info } from "lucide-react";
import { cache } from "react";
import { Service } from "@prisma/client";
import { Metadata } from "next";
import { convert } from "html-to-text";
import { authXAdmin } from "@/authXAdmin";
import { franc } from "franc";
import { Button } from "@/components/ui/button";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

const checkAuth = cache(async () => {
  const session = await authXAdmin();
  return session;
});

const getServiceById = cache(async (id: string): Promise<Service | null> => {
  const session = await checkAuth();

  const service = await prisma.service.findUnique({
    where: {
      id: id,
    },
  });
  if (session?.user.id && session.user.type == "admin") {
    return service;
  }
  if (service?.active == true) return service;
  return null;
});

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = await getServiceById(params.id);
  return {
    title: service?.name ?? "Unknown service",
    description: convert(service?.description ?? ""),
    openGraph: {
      images: [
        {
          url: service?.thumbnailImage ?? "/images/logo.png",
        },
      ],
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: { id: string };
}) {
  const service = await getServiceById(params.id);
  if (service == null) {
    return <NotFoundComponent icon={Box} title="This service is not found!" />;
  }
  const session = await checkAuth();
  if (!(session?.user.id != null && session.user.type == "admin")) {
    await prisma.service.update({
      where: {
        id: params.id,
      },
      data: {
        visits: {
          increment: 1,
        },
      },
    });
  }
  const t = await getTranslations("servicesPage");
  return (
    <div>
      {!service.active && (
        <div className="mb-4 flex w-full gap-2 rounded-md bg-red-500 px-5 py-3 text-white">
          <Info className="w-4 min-w-4" /> {t('notFound')}
        </div>
      )}
      <section className="w-full pt-10">
        <div className="grid gap-10 md:grid-cols-2">
          <img
            src={
              service.thumbnailImage ??
              "https://www.lumahealth.com/wp-content/uploads/2023/09/Chiang-Mai-hospitals.jpg"
            }
            alt="Service Banner"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
          />
          <div className="flex w-full flex-col space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold capitalize tracking-tighter lg:text-3xl">
                {service.name}
              </h1>
              <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl">
                {service.subDescription}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{t('price')}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.price} {t('currency')}
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold">{t('category')}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {service.category}
                </p>
              </div>
            </div>
            <Link className="w-fit" href={"/contact"}>
              <Button>{t("contactUs")}</Button>
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-10 pb-20">
        <h2 className="mb-3 text-xl font-semibold lg:text-3xl">{t('description')}</h2>
        <div className="prose max-w-full">
          <div
            dangerouslySetInnerHTML={{ __html: service.description as string }}
          />
        </div>
      </div>
    </div>
  );
}
