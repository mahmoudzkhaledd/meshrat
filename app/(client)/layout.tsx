import Footer from "@/components/GeneralComponents/Footer";
import Navbar from "@/components/GeneralComponents/Navbar";
import React from "react";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-full flex flex-col px-[30px] lg:px-[200px]">
      <div className="h-full">
        <Navbar className="mb-7" />
        {children}
      </div>
      <Footer className="mt-auto" />
    </section>
  );
}
