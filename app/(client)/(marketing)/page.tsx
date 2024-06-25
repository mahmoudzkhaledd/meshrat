import HeroSection from "./_components/Components/Hero";
import ServicesSection from "./_components/Components/ServicesSection";
import PatientFeedback from "./_components/Components/PatientFeedback";
import { prisma } from "@/lib/db";
import { cookies } from "next/headers";
import { getLanguage } from "@/Controllers/language/languageUtils";

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
  const cook = cookies();
  return (
    <div className="app min-h-screen min-w-[280px] bg-background text-[#1d4d85]">
      <div className="m-auto max-w-[1250px] px-5 md:px-16">
        <HeroSection />
        <ServicesSection services={services} />
        {/* <SpecialistSection /> */}
        <PatientFeedback reviews={JSON.parse(JSON.stringify(reviews))} />
      </div>
    </div>
  );
}
