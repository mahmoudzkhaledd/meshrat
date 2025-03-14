import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/ServicesSection";
import PatientFeedback from "./_components/PatientFeedback";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { getLanguage } from "@/Controllers/language/languageUtils";
import FAQsSection from "./_components/FAQsSection";
import AdvantagesSection from "./_components/AdvantagesSection";
import AboutUs from "./_components/AboutUs";
import { getAllServices } from "@/Controllers/Client/GetAllServices";
import Head from "next/head";
import { CustomAdvertisementDialog } from "@/components/GeneralComponents/AdvDialog";

export default async function LandingPage({}) {
  const lang = getLanguage();
  const currentDate = new Date();
  const services = await getAllServices({ lang: lang.lang });
  const reviews = await prisma?.review.findMany();
  const faqs = await prisma.fAQ.findMany({
    where: {
      arabic: lang.lang == "ar",
    },
  });

  const activeAd = await prisma.advertisement.findFirst({
    where: {
      startDate: { lte: currentDate },

      OR: [
        {
          endDate: { gte: currentDate },
        },
        {
          endDate: null,
        },
      ],
      arabic: lang.lang == "ar",
    },
    orderBy: {
      startDate: "asc", // Ensures the earliest matching ad is returned
    },
  });
  const cook = cookies();

  return (
    <div className="min-h-screen bg-background text-[#1d4d85]">
      <Head>
        <link rel="canonical" href={process.env.URL ?? ""} key="canonical" />
      </Head>
      <div className="m-auto w-full px-5 lg:max-w-[90rem]">
        {activeAd && <CustomAdvertisementDialog data={activeAd} />}
        <HeroSection />
        <AdvantagesSection />
        <ServicesSection services={services} />
        <PatientFeedback reviews={JSON.parse(JSON.stringify(reviews))} />
        <FAQsSection faqs={faqs} />
        <AboutUs />
      </div>
    </div>
  );
}
