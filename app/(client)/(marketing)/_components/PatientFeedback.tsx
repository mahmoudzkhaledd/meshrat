import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn, formatArabicDate, getTextLanguage } from "@/lib/utils";

import { Review } from "@prisma/client";
import { franc } from "franc";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const CustomReview = ({
  review,
  className,
}: {
  review: Review;
  className?: string;
}) => {
  const reviewLang = getTextLanguage(review.review);

  const formatDateToArabic = (date: Date) => {
    return new Intl.DateTimeFormat("ar-EG", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };
  return (
    <Card dir="rtl" className={cn("h-fit transition-all hover:border-blue-500 hover:border-[3px] ", className)}>
      <CardHeader className="flex flex-row items-center justify-between">
        <p className={cn("arabic-text text-lg font-semibold")}>
          {review.title}
        </p>
        <div className="flex items-center gap-1">
          <Star className="fill-amber-300" />
          5.0
        </div>
      </CardHeader>
      <CardContent>
        <p className={reviewLang == "ar" ? "arabic-text" : ""}>
          {review.review}
        </p>
        <hr className="my-4" />
        <div className="flex items-center gap-2">
          <Image
            width={50}
            height={50}
            alt="Person"
            src={"/images/rating.png"}
          />
          <div>
            <p className="arabic-text text-lg font-semibold">
              {review.personName}
            </p>
            <p className="arabic-text text-sm text-gray-500">
              {formatDateToArabic(new Date(review.date))}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function PatientFeedback({ reviews }: { reviews: Review[] }) {
  const t = useTranslations("homePage.patientFeedback");
  const cols: Array<Review[]> = [[], [], []];
  let i = 0;
  for (var r of reviews) {
    if (i >= 3) {
      i = 0;
    }
    cols[i].push(r);
    i++;
  }
  if (reviews.length == 0) {
    return <></>;
  }
  return (
    <section className="pt-24 md:pt-32" id="reviews">
      <h3 className="mb-4 text-center text-3xl font-bold md:mb-10">
        {t("title")}
      </h3>
      <div className="grid w-fit grid-cols-1 gap-4 lg:grid-cols-3">
        {cols.map((e, idx) => (
          <div key={idx} className="col-span-1 space-y-4">
            {e.map((m, idxx) => {
              return <CustomReview key={idxx} review={m} />;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}
