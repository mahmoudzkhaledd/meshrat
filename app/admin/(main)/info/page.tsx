import { Card } from "@/components/ui/card";
import {
  CheckCircle,
  CircleHelp,
  FileQuestion,
  LucideIcon,
  Phone,
  Star,
} from "lucide-react";
import Link from "next/link";
import React from "react";

function CustomCard({
  text,
  TopIcon,
  link,
}: {
  link: string;
  text: string;
  TopIcon: LucideIcon;
}) {
  return (
    <Link href={link}>
      <Card className="flex aspect-square select-none flex-col items-center justify-center gap-3 p-5 hover:bg-muted lg:w-[400px]">
        <TopIcon size={40} />
        <h2 className="text-lg font-bold">{text}</h2>
      </Card>
    </Link>
  );
}

export default function MainInfoPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <CustomCard
          link="/admin/contact-info"
          text={"Contact Info"}
          TopIcon={Phone}
        />
        <CustomCard link="/admin/reviews" text={"Reviews"} TopIcon={Star} />
        <CustomCard link="/admin/faq" text={"FAQs"} TopIcon={CircleHelp} />
        <CustomCard link="/admin/ads" text={"ADs"} TopIcon={CheckCircle} />
      </div>
    </div>
  );
}
