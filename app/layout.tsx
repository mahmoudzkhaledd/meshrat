import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import AuthXProvider from "@/authX/Provider/AuthXProvider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "react-hot-toast";
import { authXAdmin } from "@/authXAdmin";
import InsightaProvider from "@/components/Providers/InsightaProvider";
import { siteConfig } from "@/constants/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  openGraph: {
    url: 'https://insighta-snowy.vercel.app',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "/images/opengraph-image.jpg",
        width: 1200,
        height: 600,
      }
    ],
  },
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  twitter: {
    card: "summary_large_image",
  },
  description: "Unlock the power of website analytics with our comprehensive platform. Gain insights into visitor behavior, track performance metrics, and optimize your website for success. Sign up for a free trial today!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const session = await authXAdmin();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
