import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";
export default function HeroSection() {
  const t = useTranslations("homePage.hero");
  return (
    <section className="pt-24 md:pt-32" id="home">
      <div className="flex flex-col-reverse items-center justify-between gap-10 text-center md:flex-row md:text-left">
        <div className=" tracking-wider md:tracking-normal ">
          <h1 className="text-4xl font-bold lg:text-7xl">{t("title")}</h1>
          <p className="my-10 text-lg md:text-base lg:text-xl">
            {t("subtitle")}
          </p>
          <Link href={"/contact"}>
            <button className="rounded-3xl bg-blue-400 bg-primary px-8 py-2 text-white shadow-lg transition hover:bg-[#158ace]">
              {t("button")}
            </button>
          </Link>
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
        <div className="w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
          <h3 className="mb-2 text-2xl font-bold lg:text-4xl">500+</h3>
          <p className="text-sm lg:text-base">Expert Doctors</p>
        </div>
        <div className="w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
          <h3 className="mb-2 text-2xl font-bold lg:text-4xl">20k+</h3>
          <p className="text-sm lg:text-base">Happy Patients</p>
        </div>
        <div className="w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
          <h3 className="mb-2 text-2xl font-bold lg:text-4xl">24/7</h3>
          <p className="text-sm lg:text-base">Emergency Service</p>
        </div>
        <div className="w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
          <h3 className="mb-2 text-2xl font-bold lg:text-4xl">100+</h3>
          <p className="text-sm lg:text-base">Operation Theatres</p>
        </div>
        <div className="w-xl rounded-3xl bg-[#ffffffd1] p-6 shadow-xl md:px-2 lg:w-1/5">
          <h3 className="mb-2 text-2xl font-bold lg:text-4xl">850+</h3>
          <p className="text-sm lg:text-base">Hospital Rooms</p>
        </div>
      </div>
    </section>
  );
}
