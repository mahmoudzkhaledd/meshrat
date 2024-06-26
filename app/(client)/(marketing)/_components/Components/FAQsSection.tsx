import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ } from "@prisma/client";
import { useTranslations } from "next-intl";
import React from "react";

export default function FAQsSection({ faqs }: { faqs: FAQ[] }) {
  const t = useTranslations("faqs");
  if (faqs.length == 0) return <></>;
  return (
    <section className="pt-24 md:pt-32" id="reviews">
      <h3 className="mb-10 text-center text-3xl font-bold md:mb-20">
        {t("title")}
      </h3>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((e, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger className="font-semibold text-black">
              {e.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600">
              {e.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
