import Footer from "@/components/GeneralComponents/Footer";
import Navbar from "@/components/GeneralComponents/Navbar";
import React from "react";
import WebsiteInfoProvider from "@/components/Providers/WebsiteInfoProvider";
import { siteDefaultConfigs } from "@/constants/site";
import { getWebsiteInfo } from "@/Controllers/Admin/Info/GetWebsiteInfo";
import { getLocale } from "next-intl/server";
import InsightaProvider from "@/components/Providers/InsightaProvider";
export default async function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const info = await getWebsiteInfo();
  const locale = await getLocale();
  return (
    <WebsiteInfoProvider info={info ?? siteDefaultConfigs}>
      <InsightaProvider exclude={[]} />
      <section
        lang={locale}
        dir={locale == "ar" ? "rtl" : "ltr"}
        className="flex min-h-full flex-col px-[30px] pb-10 lg:px-[200px]"
      >
        <div className="h-full pb-10">
          <Navbar />
          <div className="mt-[90px]">{children}</div>
        </div>
        <Footer className="mt-auto" />
      </section>
    </WebsiteInfoProvider>
  );
}
