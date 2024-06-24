import Footer from "@/components/GeneralComponents/Footer";
import Navbar from "@/components/GeneralComponents/Navbar";
import React from "react";
import WebsiteInfoProvider from "@/components/Providers/WebsiteInfoProvider";
import { siteDefaultConfigs } from "@/constants/site";
import { getWebsiteInfo } from "@/Controllers/Admin/Info/GetWebsiteInfo";
export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const info = await getWebsiteInfo();

  return (
    <WebsiteInfoProvider info={info ?? siteDefaultConfigs}>
      <section className="flex min-h-full flex-col px-[30px] pb-10 lg:px-[200px]">
        <div className="h-full">
          <Navbar />
          <div className="mt-[90px]">{children}</div>
        </div>
        <Footer className="mt-auto" />
      </section>
    </WebsiteInfoProvider>
  );
}
