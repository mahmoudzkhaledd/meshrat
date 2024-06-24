import { WebsiteInfo } from "@prisma/client";
import { LocateIcon, LucideIcon, Mail, MapPin, Phone } from "lucide-react";

export const contactUsItems: {
  title: string;
  subTitle?: string;
  icon: LucideIcon;
  info: "email" | "phone" | "location";
  href?: string;
}[] = [
  {
    icon: Mail,
    title: "email",
    subTitle: "subEmail",
    info: "email",
    href: "mailto:info@meshrat.com",
  },
  {
    icon: Phone,
    title: "phone",
    info: "phone",
    href: "tel:+201064188541",
  },
  {
    icon: MapPin,
    title: "location",
    subTitle: "subLocation",
    info: "location",
  },
];
