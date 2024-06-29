import HeroSection from "./_components/Hero";
import ServicesSection from "./_components/ServicesSection";
import PatientFeedback from "./_components/PatientFeedback";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { getLanguage } from "@/Controllers/language/languageUtils";
import FAQsSection from "./_components/FAQsSection";
import AdvantagesSection from "./_components/AdvantagesSection";
import AboutUs from "./_components/AboutUs";

export default async function LandingPage({}) {
  const lang = getLanguage();
  const services = await prisma?.service.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      active: true,
      arabic: lang.lang == "ar",
    },
  });
  const reviews = await prisma?.review.findMany();
  const faqs = await prisma.fAQ.findMany({
    where: {
      arabic: lang.lang == "ar",
    },
  });

  const cook = cookies();

  return (
    <div className="min-h-screen bg-background text-[#1d4d85]">
      <div className="m-auto w-full lg:max-w-[90rem] px-5 ">
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
