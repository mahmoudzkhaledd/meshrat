import type { Metadata } from "next";
import { Almarai, Montserrat } from "next/font/google";
import "../styles/globals.css";
import AuthXProvider from "@/authX/Provider/AuthXProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { siteConfig } from "@/constants/site";

import { headers } from "next/headers";
import { getMessages } from "next-intl/server";
import { getLanguage } from "@/Controllers/language/languageUtils";
import Head from "next/head";
import Script from "next/script";

const inter = Montserrat({ subsets: ["latin"] });
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(process.env.URL ?? "http://localhost:3000");
  return {
    metadataBase: url,
    // viewport: "width=device-width, initial-scale=1",
    keywords: [
      "Home physiotherapy",
      "Physiotherapy",
      "Meshrat",
      "Manual therapy",
      "Exercise therapy",
      "Treatment plan",
      "Patient orientation",
      "العلاج الطبيعي المنزلي",
      "العلاج الطبيعي",
      "مشرط",
      "العلاج اليدوي",
      "العلاج بالتمارين",
      "خطة العلاج",
      "توجيه المريض",
      "حجامة",
      "حجامه",
      "حجامة علاجية",
      "حجامة منزلية",
      "الحجامة المنزلية",
      "الحجامه المنزليه",
      "حجامة في المنزل",
      "حجامة السنة",
      "حجامة لعرق النسا",
      "علاج طبيعي منزلي",
      "علاج طبيعي",
      "علاج طبيعي للمسنين",
      "علاج عرق النسا",
      "علاج الكتف المتجمد",
      "جلسات استشفاء عضلي",
      "استشفاء عضلي",
      "جلسة ريكافري",
      "استشفاء العضلات",
      "تنشيط الجسم",
      "Home Cupping",
      "Hijama",
      "Therapeutic Hijama",
      "Home Hijama",
      "Home Cupping",
      "Home Cupping",
      "Hijama at Home",
      "Sunna Hijama",
      "Hijama for Sciatica",
      "Home Physical Therapy",
      "Physical Therapy",
      "Physical Therapy for the Elderly",
      "Sciatica Treatment",
      "Frozen Shoulder Treatment",
      "Muscle Recovery Sessions",
      "Muscle Recovery",
      "Recovery Session",
      "Muscle Recovery",
      "Body Activation",
    ],

    openGraph: {
      url: url,
      siteName: siteConfig.name(),
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/images/opengraph-image.jpg",
          width: 1200,
          height: 600,
        },
      ],
    },
    title: {
      default: siteConfig.name(),
      template: `%s | ${siteConfig.name()}`,
    },
    twitter: {
      card: "summary_large_image",
    },
    description: siteConfig.description(),
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = getLanguage();
  const isAdmin = headers().get("admin") == "true";
  const lang = isAdmin ? "en" : locale.lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.meshrat.com",
              potentialAction: [
                {
                  "@type": "WebPage",
                  url: "https://www.meshrat.com/#services",
                  name: "خدماتنا",
                },
                {
                  "@type": "Blog",
                  url: "https://www.meshrat.com/blogs",
                  name: "المقالات",
                },
                {
                  "@type": "ContactPage",
                  url: "https://www.meshrat.com/contact",
                  name: "تواصل معنا",
                },
              ],
            }),
          }}
        />
      </Head>
      <body className={lang == "ar" ? almarai.className : inter.className}>
        <NextIntlClientProvider messages={messages}>
          <AuthXProvider session={null}>
            <TooltipProvider delayDuration={30}>
              <Toaster />
              {children}
            </TooltipProvider>
          </AuthXProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
