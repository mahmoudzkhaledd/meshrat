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
