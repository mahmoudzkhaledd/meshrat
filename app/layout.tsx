import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import "../styles/globals.css";
import AuthXProvider from "@/authX/Provider/AuthXProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import { siteConfig } from "@/constants/site";

import { headers } from "next/headers";
import { getMessages } from "next-intl/server";
import { getLanguage } from "@/Controllers/language/languageUtils";

const inter = Inter({ subsets: ["latin"] });
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export async function generateMetadata(): Promise<Metadata> {
  const url = new URL(process.env.URL ?? "http://localhost:3000")
  return {
    metadataBase: url,
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
    description:
      "Discover the professional cupping therapy with Home Cupping Services, Egypt's leading provider. We bring the ancient art of cupping directly to your home.",
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
