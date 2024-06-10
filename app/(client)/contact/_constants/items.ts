import { LocateIcon, LucideIcon, Mail, MapPin, Phone } from "lucide-react";

export const contactUsItems: {
  title: string;
  subTitle?: string;
  icon: LucideIcon;
  info: string;
  href?: string;
}[] = [
  {
    icon: Mail,
    title: "Email",
    subTitle: "Our friendly team is here to help.",
    info: "info@meshrat.com",
    href: "mailto:info@meshrat.com"
  },
  {
    icon: Phone,
    title: "Phone",
    info: "+201064188541",
    href: "tel:+201064188541",
  },
  {
    icon: MapPin,
    title: "Office",
    subTitle: "Come say hello at our office HQ.",
    info: "100 Smith Street Collingwood VIC 3066 AU",
  },
];
