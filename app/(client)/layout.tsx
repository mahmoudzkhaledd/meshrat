import Footer from "@/components/GeneralComponents/Footer";
import Navbar from "@/components/GeneralComponents/Navbar";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-full flex-col px-[30px] pb-10 lg:px-[200px]">
      <div className="h-full">
        <Navbar />
        <div className=" mt-[90px]">{children}</div>
      </div>
      <Footer className="mt-auto" />
    </section>
  );
}
