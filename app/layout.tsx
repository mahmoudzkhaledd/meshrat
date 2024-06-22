import type { Metadata } from "next";
import { Inter, Almarai } from "next/font/google";
import "../styles/globals.css";
import AuthXProvider from "@/authX/Provider/AuthXProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
import { NextIntlClientProvider } from "next-intl";
import InsightaProvider from "@/components/Providers/InsightaProvider";
import { siteConfig } from "@/constants/site";

import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });
const almarai = Almarai({
  weight: ["300", "400", "700", "800"],
  subsets: ["arabic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    url: "https://insighta-snowy.vercel.app",
    siteName: siteConfig.name,
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
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
  },
  description:
    "At Meshrat Wellness, we are dedicated to enhancing your health and well-being through expert-driven holistic treatments. Founded by Dr. Osama Elngar, a renowned physiotherapist with extensive experience in muscle treatment and recovery, our clinic stands as a beacon of healing and relaxation.",
};

export default function RootLayout({
  children,
  params,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  // const session = await authXAdmin();
  const coo = cookies();
  const lang = coo.get("NEXT_LOCALE")?.value ?? "en";
  const locale = lang == "ar" ? "ar" : "en";

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={lang == "en" ? inter.className : almarai.className}>
        <AuthXProvider session={null}>
          <TooltipProvider delayDuration={30}>
            <Toaster />
            {children}
            <InsightaProvider />
          </TooltipProvider>
        </AuthXProvider>
      </body>
    </html>
  );
}
