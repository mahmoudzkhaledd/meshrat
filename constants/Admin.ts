import { DollarSign, Home, LucideIcon } from "lucide-react";

export interface NavbarProps {
  name: string;
  link: string;
  newTap?: boolean;
}

export const adminNavbarItems: NavbarProps[] = [
  {
    name: "Home",
    link: "/admin",
  },

  {
    name: "Services",
    link: "/admin/services",
  },
  {
    name: "Blog",
    link: "/admin/blogs",
  },
  {
    name: "Info",
    link: "/admin/info",
  },
  {
    name: "Main Page",
    link: "/",
    newTap: true,
  },
  {
    name: "Insights",
    link: "https://insighta-snowy.vercel.app/websites/66797bf7753426f87e04e27c",
    newTap: true,
  },
];
