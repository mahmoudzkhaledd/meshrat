import { getLanguage } from "@/Controllers/language/languageUtils";
import { WebsiteInfo } from "@prisma/client";
import { Facebook, Instagram, Phone } from "lucide-react";

export const siteConfig = {
  name: (): string => {
    const lang = getLanguage();
    if (lang.lang == "ar") {
      return "مشرط - خدمات الحجامة المنزلية رقم 1 في مصر";
    } else {
      return "Meshrat - Home Cupping Services Number 1 in Egypt";
    }
  },
  description: () => {
    const lang = getLanguage().lang;
    if (lang == "ar") {
      return "مرحبًا بكم في مشرط لخدمات العلاج الطبيعي المنزلي. نحن متخصصون في تقديم علاجات العلاج الطبيعي الشخصية في راحة منزلك. تشمل خدماتنا العلاج اليدوي، والعلاج بالتمارين، وخطط العلاج الشاملة المصممة لتلبية احتياجاتك الخاصة. يضمن فريقنا من الخبراء توجيه المريض والدعم الاجتماعي، حيث نرشدك خلال كل خطوة في رحلة الشفاء الخاصة بك.";
    } else {
      return  "Welcome to Meshrat. We specialize in providing personalized physiotherapy treatments in the comfort of your home. Our services include manual therapy, exercise therapy, and comprehensive treatment plans tailored to meet your specific needs. Our team of experts ensures patient orientation and sociological support, guiding you through every step of your recovery journey.";
    }
  },
  socialMedia: [
    {
      icon: Instagram,
      link: "http://Instagram.com/meshrat.eg",
    },
    {
      icon: Facebook,
      link: "http://Facebook.com/meshrat.eg",
    },
    {
      icon: Phone,
      link: "http://Wa.me/+201064188541",
    },
  ],
};
export const siteDefaultConfigs: WebsiteInfo = {
  id: 0,
  phone: "",
  location: "",
  email: "",
  twitter: null,
  linkedIn: null,
  facebook: null,
  instagram: null,
  whatsapp: null,
};
