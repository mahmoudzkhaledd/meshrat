import { Metadata } from "next";
import { contactUsItems } from "./_constants/items";

import { getTranslations } from "next-intl/server";
import { getWebsiteInfo } from "@/Controllers/Admin/Info/GetWebsiteInfo";
import { Mail, MapPin, Phone } from "lucide-react";
import Head from "next/head";
export const metadata: Metadata = {
  title: "Contact Us",
};
export default async function ContactUsPage({}) {
  const t = await getTranslations("contactPage");
  const info = await getWebsiteInfo();
  return (
    <section className="bg-white pb-20 dark:bg-gray-900">
      <Head>
        <link
          rel="canonical"
          href={`${process.env.URL}/contact`}
          key="canonical"
        />
      </Head>
      <div>
        <p className="font-medium text-blue-500 dark:text-blue-400">
          {t("topTitle")}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">{t("subTitle")}</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <Mail className="m-auto w-5" />
            </div>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              {t("email")}
            </h2>
            <p className="text-sm text-gray-400">{t("subEmail")}</p>
            <a
              className="mt-2 text-sm text-blue-500 dark:text-blue-400"
              href={`mailto:${info.email}`}
            >
              {info.email}
            </a>
          </div>
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <Phone className="m-auto w-5" />
            </div>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              {t("phone")}
            </h2>

            <a
              className="mt-2 text-sm text-blue-500 dark:text-blue-400"
              href={`tel:${info.phone}`}
            >
              {info.phone}
            </a>
          </div>
          <div>
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
              <MapPin className="m-auto w-5" />
            </div>
            <h2 className="mt-4 text-base font-medium text-gray-800 dark:text-white">
              {t("location")}
            </h2>
            <p className="text-sm text-gray-400">{t("subLocation")}</p>

            <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
              {info.location}
            </p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg lg:col-span-2 lg:h-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.1624653184313!2d31.2792855!3d29.974760599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145839efbfce19a1%3A0x80fe096f25f6f2ee!2sMishrat%20capping%20therapy!5e0!3m2!1sen!2seg!4v1717950076263!5m2!1sen!2seg"
            width="100%"
            height="500"
            style={{
              border: "0",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
